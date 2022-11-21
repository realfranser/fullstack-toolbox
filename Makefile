FILE = terraform/server_public_ip
PUBLIC_IP = $(shell cat ${FILE})

toutput_server_ip:
	cd terraform/ && terraform output -raw server_public_ip > server_public_ip

ssh: toutput_server_ip
	ssh -i "conf/secrets/main-key.pem" ec2-user@$(PUBLIC_IP)

tplan:
	cd terraform/ && terraform plan -var-file="secret.tfvars"

tapply:
	cd terraform/ && terraform apply -var-file="secret.tfvars" -auto-approve

tdestroy:
	cd terraform/ && terraform destroy -var-file="secret.tfvars" -auto-approve
