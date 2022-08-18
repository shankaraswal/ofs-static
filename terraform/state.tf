terraform {
  backend "s3" {
    bucket  = "your-project-name-terraform"
    key     = "terraform.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}
