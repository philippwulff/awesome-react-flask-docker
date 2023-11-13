# awesome-react-flask-docker
Hackathon template with a React frontend and Flask backend. Docker containers for easy deployment.


# Installation

You need `Node.js` (to use `npm`) and `Python`:
```bash
brew install node
```

# Running

## In Development

```bash
# Run the backend before the frontend.
cd backend-flask-server
flask run

cd ../frontend-react-client
npm run start
```

## Deployment

Using a Gunicorn server for the Python project, and nginx as a reverse proxy in front of it.

# References

Based on the [React + Flask + Docker tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) from Miguel Grinberg. [Part2](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project), [Part3](), [Part4]().

Set up tailwindcss according to these [instructions](https://tailwindcss.com/docs/guides/create-react-app).