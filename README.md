# awesome-react-flask-docker
Hackathon template with a React frontend and Flask backend. Docker containers for easy deployment.

Libraries already included:
```bash
tailwindcss
react-router-dom
```

# Running

## In Development

You need `Node.js` (to use `npm`) and `Python` with the required dependencies:
```bash
# For the React package manager
brew install node
# Python dependencies
conda create -n backend Python=3.9
conda activate backend
conda install --file backend-react-client/requirements.txt
```

Running the app:

```bash
# Run the backend before the frontend.
cd backend-flask-server
flask run

cd ../frontend-react-client
npm run start
```

> The backend listens to port `4000` (because MacOS hijacks the default). If you want to change this, you need to modify the following files:
>- `backend-flask-server/.flaskenv`
>- `Dockerfile.backend`
>- `frontend-react-client/deployment/nginx.default.conf`
>- `frontend-react-client/package.json`
> 
> The frontend listens to default port `3000`.

## Deployment

Using a Gunicorn server for the Python project, and nginx as a reverse proxy in front of it. All commands are run from the root directory.

### Building the Docker images together with docker-compose

```bash
docker-compose up
```

### Building the Docker images separately for testing
```bash
# backend
docker build -f Dockerfile.backend -t app-backend .
# frontend
docker build -f Dockerfile.frontend -t app-frontend .
```
Running the backend Docker image for testing: `docker run --rm -p 4000:4000 app-backend`. Then navigate to `localhost:4000/`. Running the frontend image will result in a failure from nginx, which is not going to recognize the http://api:5000 proxy URL.

# References

Based on the [React + Flask + Docker tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) from Miguel Grinberg. [Part2](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project), [Part3](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react-router-flask-application), [Part4](https://blog.miguelgrinberg.com/post/how-to-dockerize-a-react-flask-project).

Set up tailwindcss according to these [instructions](https://tailwindcss.com/docs/guides/create-react-app).