# Docker

- Learn Docker - DevOps with Node.js & Express
- We'll start off by keeping things simple with a single container, and gradually add more complexity to our app by integrating a Mongo container, and then finally adding in a redis database for authentication. 
- We'll learn how to do things manually with the cli, then move on to docker compose. We'll focus on the challenges of moving from a development environment to a production environment. 
- We'll deploy and Ubuntu VM as our production server, and utilize a container orchestrator like docker swarm to handle rolling updates.
✏️ Course developed by Sanjeev Thiyagarajan. Check out his channel: https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ


# Docker - Essential Commands

[![Image](https://i.redd.it/yy2amgcfwwk31.png "DevOps or Release Engineering")](https://www.google.com/)

- The below are the list of essential commands needed when working directly with docker.

| Commands                                                               | Description                                                     |
| ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| docker ps                                                              | List all running containers                                     |
| docker ps -a                                                           | List all containers stopped, running                            |
| docker stop container-id                                               | Stop the container which is running                             |
| docker start container-id                                              | Start the container which is stopped                            |
| docker restart container-id                                            | Restart the container which is running                          |
| docker port container-id                                               | List port mappings of a specific container                      |
| docker rm container-id or name                                         | Remove the stopped container                                    |
| docker rm -f container-id or name                                      | Remove the running container forcefully                         |
| docker pull image-info                                                 | Pull the image from docker hub repository                       |
| docker pull stacksimplify/springboot-helloworld-rest-api:2.0.0-RELEASE | Pull the image from docker hub repository                       |
| docker exec -it container-name /bin/sh                                 | Connect to linux container and execute commands in container    |
| docker rmi image-id                                                    | Remove the docker image                                         |
| docker logout                                                          | Logout from docker hub                                          |
| docker login -u username -p password                                   | Login to docker hub                                             |
| docker stats                                                           | Display a live stream of container(s) resource usage statistics |
| docker top container-id or name                                        | Display the running processes of a container                    |
| docker version                                                         | Show the Docker version information                             |

### List Running Containers

```
docker ps
docker ps -a
docker ps -a -q
```

### Connect to Container Terminal

```
docker exec -it <container-name> /bin/sh
```

### Container Stop, Start

```
docker stop <container-name>
docker start  <container-name>
```

### Remove Container

```
docker stop <container-name>
docker rm <container-name>
```

### Remove Image

```
docker images
docker rmi  <image-id>
```

# Flow-2: Create a new Docker Image, Run as Container and Push to Docker Hub

## Pre-requisite Step

- Create your Docker hub account.
- https://hub.docker.com/
- **Important Note**: In the below listed commands wherever you see **dockerhubacc** you can replace with your docker hub account id.

## Step-1: Run the base Nginx container

- Access the URL http://localhost

```
docker run --name mynginxdefault -p 80:80 -d nginx
docker ps
docker stop mynginxdefault
```

## Step-2: Create Dockerfile and copy our customized index.html

- **Dockerfile**

```
FROM nginx
COPY index.html /usr/share/nginx/html
```

## Step-3: Build Docker Image & run it

```
docker build -t dockerhubacc/mynginx_image1:v1 .
docker run --name mynginx1 -p 80:80 -d dockerhubacc/mynginx_image1:v1

Replace your docker hub account Id
docker build -t <your-docker-hub-id>/mynginx_image1:v1 .
docker run --name mynginx1 -p 80:80 -d <your-docker-hub-id>/mynginx_image1:v1
```

## Step-4: Tag & push the Docker image to docker hub

```
docker images
docker tag dockerhubacc/mynginx_image1:v1 dockerhubacc/mynginx_image1:v1-release
docker push dockerhubacc/mynginx_image1:v1-release

Replace your docker hub account Id
docker tag <your-docker-hub-id>/mynginx_image1:v1 <your-docker-hub-id>/mynginx_image1:v1-release
docker push <your-docker-hub-id>/mynginx_image1:v1-release
```

## Step-5: Verify the same on docker hub

- Login to docker hub and verify the image we have pushed
- Url: https://hub.docker.com/repositories
