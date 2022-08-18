provider "aws" {
  region  = "us-east-2"
  version = "~> 2.69"
}

module "s3" {
  source  = "./S3"
  project = local.workspace.project
}

module "cloudfront" {
  source          = "./CloudFront"
  bucket          = module.s3.bucket
  certificate_arn = local.workspace.certificate_arn
  aliases         = local.workspace.aliases
}
