# PSOIR 
## Programowanie Systemów Obiektowych i Rozproszonych

### Baza danych (PosgreSQL)
1. `docker run --name postgres-0 -e POSTGRES_PASSWORD=admin -d -p 5432:5432 postgres`

### psoir_backend
1. Zbuduj obraz dockerowy poleceniem:
    `docker build -t psoir/backend .`
2. Uruchom kontener poleceniem : `docker run -p 8080:8080 psoir/backend`