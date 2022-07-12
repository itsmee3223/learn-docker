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
