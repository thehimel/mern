# Postgres Server with Docker

## Directory Structure

```text
project-directory/
│
├── .env                    # Your environment variables file
├── docker-compose-db.yml   # Your Docker Compose file
└── other-files/            # Other project files
```

## Configuration

* Create: [docker-compose.yml](docker-compose.yml)
* Set the environment variables in the `.env` file: [.env.example](.env.example)
* Run `docker-compose up`
* `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"`

## Cleanup

* Check running containers: `docker ps -a`
* Stop and remove the container: `docker-compose down`
* If you want to force remove the container and associated resources: `docker-compose down --volumes --remove-orphans`
* Remove the all unused volumes: `docker volume prune`
* List all volumes: `docker volume ls`
* Remove specific volume: `docker volume rm <volume_name>`
