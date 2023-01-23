# PSOIR 
## Programowanie Systemów Obiektowych i Rozproszonych

### Baza danych (PosgreSQL)
1. `docker build -t psoir/database .`
2. Uruchom kontener poleceniem `docker run --name psoir_databse -e POSTGRES_PASSWORD=admin -d -p 5432:5432 psoir/database`

### psoir_backend
1. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/backend .`
2. Uruchom kontener poleceniem : `docker run --name psoir_backend -p 8080:8080 psoir/backend`