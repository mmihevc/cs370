docker build --tag server4k ./out/artifacts/Server_jar/Dockerfile
docker rm server --force
docker run -it --name=server -p 3000:3000 server4k
