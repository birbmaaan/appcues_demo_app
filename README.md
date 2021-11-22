### Project Introduction

### Docs

### How To Run This Application

This project was created using the [create-react-app](https://github.com/facebook/create-react-app) script. To run this application, you'll need to install the project's dependencies by running `npm i`. Once the dependencies have been installed, you can run `npm start` to start the application.

### Tip: Use React Router

We recommend leveraging a library like [`react-router`](https://github.com/ReactTraining/react-router) to easily hook into things like route changes.

### 

Notes:
1. This is a frontend-only app, which means no data will persist across sessions. The user ID has been hard-coded into the Appcues.identify call, which means on refresh, the identified user will revert to whatever value has been entered here.

However, if there is a particular user ID you would like to use, entering that ID in the login bar will change the user until there is a page refresh.