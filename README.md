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

# Update package list
sudo apt update

# Install dependencies
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Set up the stable repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker
sudo apt update
sudo apt install docker-ce

# Verify installation
sudo docker --version

To Create the docker file:
# Use the official Node.js image from Docker Hub
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (change to your app's port, default is 3000)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

To build the Docker image:

docker build -t your-app-name .

To Run the Dokcer container:

docker run -p 3000:3000 --name your-app-container -d your-app-name

To verify the App is running:  docker ps

To access the APP through the EC2 instance's public IP and port 3000:  http://<your-ec2-public-ip>:3000
