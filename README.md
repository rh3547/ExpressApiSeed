# Express API Seed

### Description
This is an API seed project built with Express.

This handles serving content and handles providing an API service.
Any request to '/api/<something else>' will route to the API REST service to handle
HTTP requests. The API is built to work with MongoDB. The included ApiConfig.json
is where you can specify your MongoDB connection settings. If you wish to use a
different DB service other than MongoDB, you will have to build that into the
application yourself.

This seed project includes the following:
- Express (to serve the application as an http server)

This seed project is fully setup with the backend service/API and is built out
with a blog site example containing a blog post REST service.
For the seed with the blog example, use the master branch of this repository.
If you wish to start without the blog example, use the NoExample branch of
this repository.

### Setup Instructions
1. Make sure NodeJS is installed.
2. Open up a CMD(or terminal) window in the directory of this application.
3. Run `npm install`.
4. Run `npm start` to start the server.
5. To use the api, make requests to [http://localhost:3001](http://localhost:3001).
