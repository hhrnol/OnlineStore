terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.43.0"
    }
  }
  backend "azurerm" {
    subscription_id = "910df4d8-c3bf-498e-8ddd-8511324d8bd7"
    resource_group_name  = "RG-tfstate-01"
    storage_account_name = "tfstate011346785992"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
  
}

provider "azurerm" {
  features {
    resource_group {
       prevent_deletion_if_contains_resources = false
    }
  }
}
