
# Node.js Demo App with CI/CD Pipeline
This is a sample Node.js web application that demonstrates how to automate code deployment using a CI/CD pipeline with **GitHub Actions** and **DockerHub**.

##  Features
- Node.js-based web application
- Dockerized with a production-ready `Dockerfile`
- CI/CD pipeline using GitHub Actions
- Automatically builds and pushes Docker image to DockerHub on every commit to 'master'

##  Tech Stack
- Node.js
- Docker
- GitHub Actions
- DockerHub
  
├── app.js  # Main Node.js application
├── package.json # Dependencies and scripts
├── Dockerfile # Instructions to build Docker image
└── .github/
└── workflows/
└── ci-cd.yml # CI/CD workflow file

## PROJECT Flow
Create Node.js Web App
Push Code to GitHub
Install git and Docker on EC2
Allow EC2 Port 3000
Write GitHub Actions CI/CD Workflow
Configure EC2 to Pull & Run Docker Image Automatically

## AWS managment console login
Go to AWS Console → EC2 → Launch Instance
Name: nodejs-app-server
OS: Choose Ubuntu 22.04
Instance Type: t2.micro (free tier)
Key Pair: Select or create new
Add Inbound Rules:
HTTP (80) – from Anywhere (0.0.0.0/0)
Custom TCP (3000) – from Anywhere (0.0.0.0/0)
SSH (22) – from My IP or Anywhere if needed
Launch Instance 

## Connect to EC2-instance
chmod 400 task-key.pem
ssh -i "task-key.pem" ubuntu@ec2-public-ip
## install node.js, git, docker on EC2
sudo apt update
sudo apt install nodejs npm -y
node -v
npm -v
sudo apt install git -y
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl status docker
git -v
docker -v
## create basic node.js webapp
mkdir my-node-app
cd my-node-app
nano index.js
## Run the app
node index.js
## Access the app in browser
http://your-ec2-public-ip:3000

nano Dockerfile
mkdir -p .github/workflow/ci-cd.yml
touch .github/workflow/ci-cd.yml
cd .github/workflow
nano ci-cd.yml

git init
git add .
git commit -m " commits"
git remote add origin < github repository URL>
git push origin master
git branch
git log
git log -1













