#! /bin/bash

sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user

sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose
sudo docker-compose -f /home/ec2-user/first-terraform-project/docker-compose.yml up -d
