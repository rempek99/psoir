# PSOIR 

[PL]
## Programowanie Systemów Obiektowych i Rozproszonych

### Baza danych (PosgreSQL) `./database`
1. Zbuduj obraz dockerowy poleceniem: `docker build -t psoir/database .`
2. Uruchom kontener poleceniem `docker run --name psoir_databse -e POSTGRES_PASSWORD=admin -d -p 5432:5432 psoir/database`

### psoir_backend (Spring-boot) `./psoir_backend`
1. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/backend .`
2. Uruchom kontener poleceniem : `docker run --name psoir_backend -p 8080:8080 psoir/backend`


### psoir_frontend (ReactJS) `./psoir_frontend`
1. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/frontend .`
2. Uruchom kontener poleceniem : `docker run --name psoir_frontend -p 3000:3000 psoir/frontend`


[EN]
## Programming Object and Distributed Systems

### Database (PostgreSQL) `./database`
1. Build the docker image with command: `docker build -t psoir/database .`
2. Run the container with command: `docker run --name psoir_databse -e POSTGRES_PASSWORD=admin -d -p 5432:5432 psoir/database`

### psoir_backend (Spring-boot) `./psoir_backend`
1. Build the docker image with command: `docker build -t psoir/backend .`
2. Run the container with command: docker run --name psoir_backend -p 8080:8080 psoir/backend`


### psoir_frontend (ReactJS) `./psoir_frontend`
1. Build the docker image with command: `docker build -t psoir/frontend .`
2. Run the container with command: docker run --name psoir_frontend -p 3000:3000 psoir/frontend`
