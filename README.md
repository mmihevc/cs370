# cs370 Term Project

## Description
When everybody was younger they anxiously waited by the mailbox hoping that their Hogwarts would be delivered. Since we are unable to make that a possibilty for our younger selves we developed a program using Docker and Containerization that prompts the user for a word and then sends the word to the server. On the server side an api request is sent in order to find the sentences that contain the word. It is then sent back to the Client side and displayed on the website. 

Currently all the functionality is not completely implemented yet but at the moment you can run a Docker container that handle the requests for what word that the user would like to search for. 

## Usage
Since our project has a webpage and requires user interaction you only need to deploy the website in order to deploy the webpage and get results. If you want to run the project without Docker, use the commands below:

* To build: **npm run build** 
* To run: **npm start**

There are not addtional options to provide when running the program since the user interface gets the term from the user's input.


## Docker
To build the docker image

Make sure that permissions are set for client.sh and server.sh, if they are not set run:
**chmod 777 client.sh server.sh**

1. Build the Server
   * **./server.sh**
2. Build the Client
   * ./client.sh
   * Note: at the moment the client does not perform any actions so you do not need to run the client.
   
Running ./server.sh will build your Docker image and run the image as a Container.
