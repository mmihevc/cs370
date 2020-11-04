cd ./out/artifacts/Server_jar/
docker build --tag server3k .
docker rm server --force
docker run -it --name=server -p 3000:3000 server3k
