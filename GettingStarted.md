## Getting Started

1. Verify Docker Daemon service is running with systemd
      * systemctl status docker
      * docker ps
2. Start Minikube with Docker as driver
      * minikube start --driver=docker
3. Verify local, single node k8s cluster
      * kubectl get all
      

## Getting Started: Dockerhub

1. Make a Dockerhub account: https://hub.docker.com/
     * create repo
2. Upload Docker image to Dockerhub
    1. build your image
        * docker build -t my_image ./ 
    2. Tag your image to <dockerhub_user>/<repositiory_name>:version
        * docker tag my_image username/cs370tp:latest
    3. Push your image to public Dockerhub repo
        * docker push username/cs370tp:latest
        
## Starting Development: With Containers

1. Create Dockerfile for your project
2. Build Docker image of your project
     * docker build -t project-dev .
3. Run as Docker container, first on host network
     * docker run -it --name=project-dev --network=host project-dev
     1. Verify you’re able to reach it by making a curl request:
          * curl -X GET localhost:8080
4. Run as Docker container, but use exposed ports
     * docker run -it --name=project-dev -p 8080:8080 project-dev
