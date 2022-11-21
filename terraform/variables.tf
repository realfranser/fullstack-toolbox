# Secrets
variable "access_key" {
  description = "AWS access key for main account"
  type        = string
  sensitive   = true
}

variable "secret_key" {
  description = "AWS secret key key for main account"
  type        = string
  sensitive   = true
}

# Non sensible variables
variable "region" {
  description = "AWS region for the deployment of the resources"
  type        = string
  sensitive   = false
}

variable "availability_zone" {
  description = "AWS availability zone for the deployment of the subnet and instance"
  type        = string
  sensitive   = false
}

variable "default_route" {
  description = "Default route for all internet access"
  type        = string
  sensitive   = false
}

variable "amazon_linux_ami" {
  description = "AMI id for amazon linux instances"
  type        = string
  sensitive   = false
}

variable "ubuntu_ami" {
  description = "AMI is for ubuntu instances"
  type        = string
  sensitive   = false
}

variable "docker_install_path" {
  description = "Relative path to the docker_install.sh file"
  type        = string
  sensitive   = false
}
