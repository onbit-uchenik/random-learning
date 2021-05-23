#!/bin/bash

# error out if some error occured
set -e
# build docker image
docker build -t "onbit-syn/node-streaming-server" .

# run docker container
docker run -d -p 4324:3658 onbit-syn/node-streaming-server

# on success
echo "Application deployed successfully, please open http://localhost:4324/ on browser"