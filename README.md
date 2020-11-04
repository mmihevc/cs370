# cs370 Term Project

## Description
When everybody was younger they anxiously waited by the mailbox hoping that their Hogwarts would be delivered. Since we are unable to make that a possibilty for our youngerselves we developed a program using Docker and Containerization that prompts the user for a word and then sends the word to the server. On the server side an api request is sent in order to find the sentences that contain the word. It is then sent back to the Client side and displayed on the website. It works like magic but it's not. 

## Usage
Since our project has a webpage and requires user interaction you only need to deploy the website in order to deploy the webpage and get results

* To build: **npm run build** 
* To run: **npm start**


## Docker
To build the docker image

Make sure that permissions are set for client.sh and server.sh, if they are not set run:
**chmod 777 client.sh server.sh**

1. Build the Client
  * ./client.sh
2. Build the Server
  * ./server.sh
