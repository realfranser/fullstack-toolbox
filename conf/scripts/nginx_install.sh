#! /bin/bash

sudo amazon-linux-extras enable nginx1
sudo yum clean metadata && sudo yum install -y nginx1

# aws s3 cp s3://${aws_s3_bucket.blog.id}/nginx.conf /etc/nginx/nginx.conf
mv /home/ec2-user/techversity-client/conf/nginx.conf /etc/nginx/nginx.conf

sudo systemctl enable nginx
sudo systemctl start nginx
