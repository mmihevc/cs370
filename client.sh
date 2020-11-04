npm install
docker build --tag client4k .
docker run -it --name=project-dev -p 4000:4000 client4k
