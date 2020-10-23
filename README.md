# cs370 Term Project

## Logging into Machine

1. ssh into lab machine
      * ssh eid @ machine_name .cs.colostate.edu
2. ssh into VM
      * ssh kubeuser@oak -p 5528
      
      
Hostname: cs370-28

PhysicalHost: oak

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
