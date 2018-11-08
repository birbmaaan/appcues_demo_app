## Success Engineer Project

### Project Introduction

While Appcues is a "code-free" tool, it does require our customers to place code snippets within their applications to successfully install our SDK.

Since many of our customers have single page web applications and use popular frontend frameworks like React, they often enlist the help of a developer to install Appcues.

For this project, pretend that this repository is a customer's React web application code base. They aren't sure how to install Appcues, and you've been tasked with adding Appcues to their React application.

### Getting Started

There are a few things to keep in mind when installing Appcues:

1. The script must be loaded on every page you want to show Appcues content.
2. Every time a page changes, the Appcues SDK needs to know via a `page()` call.
3. Whenever a user logs into this customer's pretend web app, we need to `identify()` them so that Appcues is aware of the user

### Docs

To learn more about how we educate our customers on installing Appcues, check out our [Installation Overview](https://docs.appcues.com/article/48-install-overview) doc.

### How To Run This Application

This project was created using the [create-react-app](https://github.com/facebook/create-react-app) script. To run this application, you'll need to install the project's dependencies by running `npm i`. Once the dependencies have been installed, you can run `npm start` to start the application.

### Tip: Use React Router

We recommend leveraging a library like [`react-router`](https://github.com/ReactTraining/react-router) to easily hook into things like route changes.
