#!/bin/bash

# error out if some error occured
set -e
# build docker image
docker build -t "onbitsyn/node-video-streaming-server" .

# run docker container
docker run -d -p 0.0.0.0:4324:3658 onbitsyn/node-video-streaming-server:latest

# on success
echo "Application deployed successfully, please open http://localhost:4324/ on browser"