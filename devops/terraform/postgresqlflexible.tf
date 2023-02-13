resource "azurerm_postgresql_flexible_server" "onlinestore" {
  name                   = "onlinestore-fspsql"
  resource_group_name    = azurerm_resource_group.onlinestore.name
  location               = azurerm_resource_group.onlinestore.location
  version                = "14"
  administrator_login    = "pgadmdbpg01"
  administrator_password = "Vostok17!@"
  zone                   = "1"

  storage_mb = 32768

  sku_name   = "B_Standard_B1ms"
 
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "azure" {
  name             = "allow-access-from-azure-services"
  server_id        = azurerm_postgresql_flexible_server.onlinestore.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "all" {
  name             = "myip"
  server_id        = azurerm_postgresql_flexible_server.onlinestore.id
  start_ip_address = "188.163.82.39"
  end_ip_address   = "188.163.82.39"
}