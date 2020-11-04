# cs370 Term Project

## Description
When everybody was younger they anxiously waited by the mailbox hoping that their Hogwarts would be delivered. Since we are unable to make that a possibilty for our younger selves we developed a program using Docker and Containerization that prompts the user for a word and then sends the word to the server. On the server side an api request is sent in order to find the sentences that contain the word. It is then sent back to the Client side and displayed on the website. 

The goal of our project once it is fully implemented the distributed hosting of files and quick search for users, spinning up docker containers as necessary to support demand. 
Currently all the functionality is not completely implemented yet but at the moment you can run a Docker container that handle the requests for what word that the user would like to search for. 

## Usage
 * Clone this repository from github
__Server__
1. Make sure that executable permissions are set for server.sh, if they are not set run:
   * **chmod +x server.sh**
2. Start the RESTful Server in a docker container with:
   * **./server.sh**
3. You will now be able to reach our server running in a docker container at port 3000.
   Our RESTful server supports two dynamic requests at the moment:
    /script/*search_term*
    /scriptlines/*search_term*
   For example:
   * http://localhost:3000/script/Harry  
    This will return the number of lines where the word Harry is found in the text.  
   * http://localhost:3000/scriptlines/Harry  
   This will return the text of lines where the word Harry is found in  a JSON(esque) format.  
   * *Note: The current searching text is currently Chapter 1 of J.K. Rowling's Harry Potter: The Sorcerer's Stone)*  
 4. Please query with any word you wish to replace the "Harry" *search_term* parameter to test the server as you please.   

__Client__ 
1. Make sure that executable permissions are set for client.sh, if they are not set run:
   * **chmod +x client.sh**
2. Start the RESTful Server in a docker container with:
   * **./server.sh** 
3. You will now be able to reach our client running in a docker container at port 3000.
   * Note: at the moment the client does not perform any actions so you do not need to run the client.
   * Note: the docker container will be named "client" and utlilizes port 4000

__No-containers__

Since our project has a webpage and "requires" user interaction you only need to deploy the website in order to deploy the webpage and get results. If you want to run the project without Docker, use the commands below:

* To build: **npm install** 
* To run: **./server.sh**


## Docker
We decided to handle building the docker image and to run the image as a container for you within the *server.sh* and *client.sh* executables within the top level of our project directory. This was done to fulfill the requirement of running the project in a single command. 
