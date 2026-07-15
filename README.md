# Dockerized Multi-Container Web Application

This project demonstrates a multi-container web application using Docker Compose, Nginx reverse proxy, a Node.js API service, and a MySQL database.

## Skills Covered

- Docker
- Docker Compose
- Nginx reverse proxy
- Multi-container architecture
- Service networking
- Environment variables

## Architecture

```text
Browser -> Nginx -> Node.js API -> MySQL
```

## Project Structure

```text
app/                  Node.js API service
db/                   Database initialization SQL
nginx/                Reverse proxy configuration
docker-compose.yml    Multi-container stack
.env.example          Example environment variables
```

## Run

```bash
cp .env.example .env
docker compose up --build
```

Open:

```text
http://localhost:8080
```

## Stop

```bash
docker compose down
```
