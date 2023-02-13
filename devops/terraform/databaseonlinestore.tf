resource "azurerm_postgresql_flexible_server_database" "onlinestore" {
  name      = "onlinestore"
  server_id = azurerm_postgresql_flexible_server.onlinestore.id
  collation = "en_US.UTF8"
  charset   = "UTF8"
}