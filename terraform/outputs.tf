output "server_public_ip" {
  value = aws_eip.main-elastic-ip.public_ip
}
