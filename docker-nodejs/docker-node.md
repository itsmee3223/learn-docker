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

## Docker ENV

- untuk mengset env bisa dilakukan di dokcerfile dengan menambah keyword ENV
- melalui command: docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 3000:3000 -d --name node-server node-app
- load env lewat file: docker run -v $(pwd):/app:ro -v /app/node_modules --env-file path_env -p 3000:3000 -d --name node-server node-app
- cek env: masuk ke bash docker lalu ketik rintenv

## Docker Compose

Compose adalah alat untuk mendefinisikan dan menjalankan aplikasi Docker multi-kontainer. Dengan Compose, Anda menggunakan file YAML untuk mengonfigurasi layanan aplikasi Anda.

- untuk dokumentasi resminya: https://docs.docker.com/compose/
- untuk version compose: https://docs.docker.com/compose/compose-file/compose-versioning/
- `docker compose up -d` untuk menjalankan
- `docker compose up -d --build` untuk menjalankan dan rebuild jika image berubah
- `docker compose down` untuk menghentikan
- `docker compose down -v` untuk menghentikan dan menghapus volume

## Docker Compose Shared Dev & Production

kita bisa override file docker compose untuk developing dan juga production sekaligus bisa berbagi konfigurasi yang sama

- untuk menjalankannya: docker compose -f docker_compose_base.yml docker_compose_env.yml up -d
- contoh menggunakan: docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
- posisi file berpangruh dimana jika ada setting yg di override oleh file kedua

## Docker MongoDB

Link: https://hub.docker.com/_/mongo

- untuk menyimpan data agar tidak hilang silahkan buat volume
- contoh volume:
  - mongo-db:/data/db

## Docker Redis

menggunakan redis sebagai session store untuk management user

untuk link docker hub:

- https://hub.docker.com/_/redis

## Docker Nginx & Load Balancer

untuk melakukan load balancing dapat menggunakan nginx

link dockerhub nginx: https://hub.docker.com/_/nginx
