resource "azurerm_subnet" "roistoreback" {
  name                 = "roistoreback"
  resource_group_name  = azurerm_resource_group.onlinestore.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.12.3.0/24"]
  delegation {
    name = "backdelegation"
    service_delegation {
      name = "Microsoft.Web/serverFarms"
      actions = ["Microsoft.Network/virtualNetworks/subnets/action"]
    }
  }
}

resource "azurerm_windows_web_app" "roistoreback" {
  name                  = "roistoreback"
  location              = azurerm_resource_group.onlinestore.location
  resource_group_name   = azurerm_resource_group.onlinestore.name
  service_plan_id       = azurerm_service_plan.appserviceplan.id
  https_only            = true
  site_config { 
  application_stack {
  current_stack = "dotnet"
  dotnet_version = "v6.0"
  }
    always_on = false
	minimum_tls_version = "1.2"
  }
  
}

output "onlinestore-back" {
  value = "${azurerm_windows_web_app.roistoreback.name}.azurewebsites.net"
}
