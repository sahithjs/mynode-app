Deploying NodeJS App on AWS EC2 instance

To install git: sudo apt install git

To install NodeJS: 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

source ~/.bashrc

nvm install --lts

To clone the repository: git clone <link_of_the_repository>

To install node packages: npm install

To run the server: node <name_of_the_jsfile>

To Add the inbound rules: go to security groups --> set it to Custom TCP, Port: 3000; Anywhere-IPV4

To run the instance globally: 
npm install -g pm2

pm2 start <name_of_the_jsfile> --name "my-node-app"
