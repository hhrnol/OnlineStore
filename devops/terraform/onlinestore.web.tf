resource "azurerm_application_insights" "onlinestore" {
  name                = "onlinestore"
  location            = azurerm_resource_group.onlinestore.location
  resource_group_name = azurerm_resource_group.onlinestore.name
  application_type    = "web"
}


resource "azurerm_service_plan" "appserviceplan" {
  name                = "onlinestore"
  location            = azurerm_resource_group.onlinestore.location
  resource_group_name = azurerm_resource_group.onlinestore.name
  os_type             = "Windows"
  sku_name            = "F1"
}


resource "azurerm_windows_web_app" "roistore" {
  name                  = "roistore"
  location              = azurerm_resource_group.onlinestore.location
  resource_group_name   = azurerm_resource_group.onlinestore.name
  service_plan_id       = azurerm_service_plan.appserviceplan.id
  https_only            = true
  site_config { 
  application_stack {
  current_stack = "node"
  node_version = "~18"
  }
    always_on = false
	minimum_tls_version = "1.2"
  }
  
}

output "onlinestore-front" {
  value = "${azurerm_windows_web_app.roistore.name}.azurewebsites.net"
}