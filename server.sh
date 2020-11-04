cd ./out/artifacts/Server_jar/
docker build --tag server4k .
docker rm server --force
docker run -it --name=server -p 4000:4000 client4k
cd ../../../
