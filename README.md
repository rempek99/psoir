# PSOIR 

[PL]
## Programowanie Systemów Obiektowych i Rozproszonych

## AKTUALIZACJA DOCKER COMPOSE 
Aby zbudować i uruchomic wszystkie kontenery wykonaj:
`docker compose up`

## Uruchamianie ręcznie kontenerów:
### Baza danych (PosgreSQL) `./database`
1. Zbuduj obraz dockerowy poleceniem: `docker build -t psoir/database .`
2. Uruchom kontener poleceniem `docker run --name psoir_databse -e POSTGRES_PASSWORD=admin -d -p 5432:5432 psoir/database`

### psoir_backend (Spring-boot) `./psoir_backend`
1. Zbuduj projekt poleceniem: 
`mvn clean install -DskipTests`
2. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/backend .`
3. Uruchom kontener poleceniem : `docker run --name psoir_backend -p 8080:8080 psoir/backend`


### psoir_frontend (ReactJS) `./psoir_frontend`
1. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/frontend .`
2. Uruchom kontener poleceniem : `docker run --name psoir_frontend -p 3000:3000 psoir/frontend`


[EN]
## Programming Object and Distributed Systems


## DOCKER COMPOSE UPDATE
To build and run all containers automatically run command:
`docker compose up`

## How to create containers manually:
### Database (PostgreSQL) `./database`
1. Build the docker image with command: `docker build -t psoir/database .`
2. Run the container with command: `docker run --name psoir_databse -e POSTGRES_PASSWORD=admin -d -p 5432:5432 psoir/database`

### psoir_backend (Spring-boot) `./psoir_backend`
1. Build the project with command: `mvn clean install -DskipTests`
2. Build the docker image with command: `docker build -t psoir/backend .`
3. Run the container with command: `docker run --name psoir_backend -p 8080:8080 psoir/backend`


### psoir_frontend (ReactJS) `./psoir_frontend`
1. Build the docker image with command: `docker build -t psoir/frontend .`
2. Run the container with command: `docker run --name psoir_frontend -p 3000:3000 psoir/frontend`
