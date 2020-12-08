npm install
docker build --tag client4k .
docker rm client --force
docker run -it --name=client -p 4000:4000 client4k