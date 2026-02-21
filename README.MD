# My Portfolio Website

**Student Name:** Anshika Ramesh Shukla  
**Experiment Name:** Hosted Virtualization using VirtualBox  
**Subject:** Cloud Computing Lab (CSL605)  
**College:** Rizvi College of Engineering  

## About the Experiment
This experiment demonstrates hosting a Node.js based static portfolio website on **Ubuntu Server** using **VirtualBox virtualization**.  
The virtual machine is configured with bridged networking so that the website can be accessed from the host system browser using the VM IP address.

## Technologies Used
- VirtualBox 7.x
- Ubuntu Server 24.04 LTS
- Node.js
- Express.js
- HTML, CSS, JavaScript
- Git & GitHub

## How to Run the Project
```bash
sudo apt update
sudo apt install nodejs npm -y
git clone https://github.com/Anshika-13301/my-portfolio-express
cd my-portfolio-express
npm install
node app.js
