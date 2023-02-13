resource "azurerm_subnet" "vmnet" {
  name                 = "vmnet"
  resource_group_name  = azurerm_resource_group.onlinestore.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.12.1.0/24"]
}

resource "azurerm_public_ip" "onlinestore-ip" {
  name                    = "onlinestore-ip"
  location                = azurerm_resource_group.onlinestore.location
  resource_group_name     = azurerm_resource_group.onlinestore.name
  allocation_method       = "Dynamic"
  idle_timeout_in_minutes = 30
}

resource "azurerm_network_interface" "nic01" {
  name                = "nic01"
  location            = azurerm_resource_group.onlinestore.location
  resource_group_name = azurerm_resource_group.onlinestore.name

  ip_configuration {
    name                          = "ip01"
    subnet_id                     = azurerm_subnet.vmnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.onlinestore-ip.id
  }
}

resource "azurerm_subnet_network_security_group_association" "onlinestore" {
  subnet_id                 = azurerm_subnet.vmnet.id
  network_security_group_id = azurerm_network_security_group.onlinestore.id
}

resource "azurerm_linux_virtual_machine" "onlinestore-vm01" {
  name                  = "onlinestore-vm01"
  resource_group_name   = azurerm_resource_group.onlinestore.name
  location              = azurerm_resource_group.onlinestore.location
  size                  = "Standard_B1s"
  admin_username        = "unixadm"
  network_interface_ids = [azurerm_network_interface.nic01.id]
  admin_ssh_key {
    username   = "unixadm"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCxjOPI41MWnMxbrqnug+N+Swbn7jhc4xa2HAVFNs93T+G7oyq16546xnxpH5cgLw0yxdZIfd4wUqnb5pVpKcwKN/K8Hn4PGFF4KZNiYnFz9MVjQDo7wKwDpcfrJRYFljcA807VPNL9Gg67eanMTcihPJaQtSCNN93k86z7T6HV+thAxdnuluJhcHd4czMq2EgqFLgabbtGTHH6poEp4JkRu3yUujjnIyTAG2FKyDwoycTPrT9u7SszpQCq4QAOsCqD94iQ2gQxgN/H+oxamW8YnUS9dMa5jyYcubHFUizHX01io/lsjMQjIEahECzjvyJlHzJ4s7NUMLFlia2IhBxL+CDLTnzxdNH+ORza5I5Gq/fbTOHbWHR+IE5wQhWtadk3pQRreQk3EwEIj+ufh84Lgt0fVXuJuAVVnFjxOYXOxsd1MOoUhxXhBh+OYzr15hvx8S0RX2fdWmI/Dn1Ss/uuQ8VbO9zw8XIY/ejQPH3zGtByUOnDgH1txeNjEuTuwBs= gagarin@FujitsuU745"
  }
  custom_data = filebase64("docker.tpl")
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}
resource "azurerm_network_security_rule" "onlinestore-dev-rule" {
  name                        = "onlinestore-dev-rule"
  priority                    = 100
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "*"
  source_port_range           = "*"
  destination_port_range      = "*"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.onlinestore.name
  network_security_group_name = azurerm_network_security_group.onlinestore.name
}


data "azurerm_public_ip" "onlinestore-ip-data" {
  name                = azurerm_public_ip.onlinestore-ip.name
  resource_group_name = azurerm_resource_group.onlinestore.name
}

output "public_ip_address" {
  value = "${azurerm_linux_virtual_machine.onlinestore-vm01.name}: ${data.azurerm_public_ip.onlinestore-ip-data.ip_address}"
}