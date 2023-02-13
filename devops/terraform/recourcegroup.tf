resource "azurerm_resource_group" "onlinestore" {
  name     = "onlinestore"
  location = "West Europe"
}

resource "azurerm_network_security_group" "onlinestore" {
  name                = "onlinestore-security-group"
  location            = azurerm_resource_group.onlinestore.location
  resource_group_name = azurerm_resource_group.onlinestore.name
}

resource "azurerm_virtual_network" "vnet" {
  name                = "onlinestore"
  location            = azurerm_resource_group.onlinestore.location
  resource_group_name = azurerm_resource_group.onlinestore.name
  address_space       = ["10.12.0.0/16"]
}