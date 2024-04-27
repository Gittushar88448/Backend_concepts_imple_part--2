
## Backend Folder Structure 

This README provides an overview of the folder structure for the backend of our application and instructions for implementing a todo list POST request.

## Folder Structure

/backend
│
├── /src
│   ├── /controllers      # Controllers handle incoming requests and responses
|   |-- /config           # having connection with database
│   ├── /models           # Models define the data structure of our application
│   ├── /routes           # Routes define the endpoints of our API
│
├── .env                  # Environment variables configuration file
├── index.js              # Entry point of the application
└── package.json          # Node.js dependencies and scripts


## Todo List POST Request

To add a todo item to our application, follow these steps:

1. Routes 

In the routes folder, create a new file todos.js.

2. Controller

In the controllers folder, create a new file create.js.

3. Model

In the models folder, create a new file TodoSchema.js.

4. Route Registration

In index.js, register the todo routes.

# Testing

We have tested the api using postman , to create a entry in the database