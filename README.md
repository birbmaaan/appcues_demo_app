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

### Directions for using this demo app

For basic terminal commands, check out [This Tech Republic article](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/). cd and ls are particularly useful.

0. If using Mac, I recommend first making sure [`Homebrew`](https://brew.sh/) has been installed on your machine.
1. Install 

Open your computer terminal and install Git. With Homebrew installed, you can do this with the termanal command `brew install git`. You can check if you already have Git installed with the command `git version`. For more detailed install instructions, check out [Github's documentation](https://github.com/git-guides/install-git). 

Download and install Node.js following the instructions at https://nodejs.org/en/. You can also install it using the terminal command `brew install node`. If you do this, I recommend installing the most up-to-date stable version of Node by typing `brew install node@version_number`.

2. In the terminal, navigate to the folder where you'd like to save your project and then clone this project repository to your computer using [`git clone`](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

3. Run `npm install` to install other project dependencies.

4. Run `npm start` to begin a local development server. Once this starts, you should be able to see the app running in your browser at `localhost:3000`. 

Note: you will first need to install Appcues using your account ID in the first step below.

## Install your Appcues account

1. In the `index.html` file, replace {account_id} with your Appcues account ID.

2. In `App.js`, replace the "tesUser" ID if you'd like, and add in any other user properties you would like sent into Appcues.

3. Feel free to add any additional HTML you would like. This should mostly be done with HTML added into the `return` section of any component. You can also create new components if you're feeling adventurous. 

The app's CSS lives in `index.css` and can be changed as you please. 

I recommend leaving alone the files in the `appcues_components` folder, as these are what are used for making calls to the Appcues javascript API and running the event log.

## Push project to Github

## Host project on Netlify

1. Create an account at [Netlify](https://www.netlify.com/).

2. Follow the steps in [this article](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

3. You should now have a working demo app!