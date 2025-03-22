# About

## Environment Management

### Setting Up Environment Files

Create the required environment files from the provided examples:

```shell
cp .env.example .env.local  # For local
cp .env.production.example .env.production.local  # For production
```

> Update the respective environment variables in each file as needed.

### Managing Environments in Next.js

The application may only recognize `.env`, so depending on your environment, copy the appropriate file:

```shell
cp .env.local .env  # For local
cp .env.production.local .env  # For production
```

### Automating Execution

To streamline the execution process, use the following scripts:
* Local: [run_local.sh](run_local.sh)
* Production: [run_production.sh](run_production.sh)

> These scripts will automatically copy the respective environment data to `.env` and start the server.

### Notes

* If the production backend server does not allow `localhost` as an approved host, you won't be able to make API calls
  to the production backend from your local machine. Make sure the backend's CORS settings include `localhost` or update
  the allowed hosts to enable local development connections.
