# Docker Tutorial

## Install Docker

untuk installasi docker dengan os linux silahkan buka website resminya docker:
https://docs.docker.com/desktop/linux/install/

ikuti langkah installasinya:

- pertama download docker
- selanjutnya install .deb file dokcer dengangan software installer
  ![alt text](./image/Screenshot%20from%202022-07-12%2010-22-38.png)

- setelah itu klik install dan tunggu proses installasi
  ![alt text](./image/Screenshot%20from%202022-07-12%2010-22-14.png)

## Init Express App

Buat simpel server express dengan cara berikut:

- npm init
- npm install express
- lalu jalankan server node index.js

## Create First Docker Image

- Buat docker file
- jalankan docker build path_dockerfile
- jika proses build berhasil dan selesai maka akan tampak seperti gambar berikut

![alt text](./image/Screenshot%20from%202022-07-12%2011-14-14.png)

![alt text](./image/Screenshot%20from%202022-07-12%2011-16-24.png)

## Create Docker Image With Name

- untuk mengahpus docker image yang sudah ada jalankan perintah: docker image rm docker_image_id
- build ulang dengan cara docker build -t docker-image-name path_dockerfile

  ![alt text](./image/Screenshot%20from%202022-07-12%2011-16-24.png)

## Running Docker Image & Create Container

- untuk menjalankan dokcer image gunnakan command berikut: dokcer run --name container_name docker_image_name
  - contoh penggunaan: dcoker run --name node-server node-app
- agar bisa diakases perlu tag tambahan
  - docker run -p 3000:3000 -d --name node-server node-app
  - -p artinya kita forwarding localhost port kita ke port yang di expose dokcer
  - -d artinya kita running detached mode agar cli bisa free
  - untuk masuk ke cli -> docker exec -it node-server bash

## Create Docker Ignore file

- buat file .dokcerignore
- lalu masukan file atau folder yang di ignore

## Bind Volume

ada beberapa type volume salah satunya yaitu bind. bind volume digunakan untuk sync folder yang ada di localhost dengan dokcer.

- untuk command: docker run -v pathlocalhost:pathdocker -p 3000:3000 -d --name node-server node-app
- contoh penggunaan: docker run -v $(pwd):/app -p 3000:3000 -d --name node-server node-app

## Prevent Bind Volume

agar bind mode tidak mengoverite folder yang dinginkan seperti node_modules maka gunakan command berikut:

- docker run -v pathlocalhost:pathdocker -v workdir -p 3000:3000 -d --name node-server node-app
- docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-server node-app
- read only bind mode: docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-server node-app
