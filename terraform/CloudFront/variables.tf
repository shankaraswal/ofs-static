variable "bucket" {
  description = "Origin S3 Bucket"
  type = object({
    bucket_regional_domain_name = string,
    arn                         = string,
    id                          = string,
  })
}
variable "certificate_arn" {
  description = "Certificate ARN"
  type = string
}
variable "aliases" {
  description = "Custom domain aliases"
  type        = list(string)
}
