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

In order to work with this app, you'll do most of your work from your computer's terminal. If you're unfamiliar with the terminal, [this article](https://itconnect.uw.edu/learn/workshops/online-tutorials/web-publishing/what-is-a-terminal/) gives a quick rundown. For basic terminal commands, check out [This Tech Republic article](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/). cd and ls are particularly useful.

## Pre-set up

If this is your first time working with code, you may need to first install a few other things to get started. If you've done dev work in the past, you might have already installed these.

What you need: 

1. Homebrew

If using Mac, I recommend first making sure [`Homebrew`](https://brew.sh/) has been installed on your machine. You can check whether or not it's installed by typing `which brew` in your terminal. If it's installed, it should give you a local path that points to where it's been installed, something like `/usr/local/bin/brew`.

2. Git

Git is an open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. If you're interested in learning more about it, check out [What is Git](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F). You're welcome to use an alternative to Git and Github if you prefer, but here's how to get started with Git.

Open your computer terminal and install Git. With Homebrew installed, you can do this with the termanal command `brew install git`. You can check if you already have Git installed with the command `git version`. For more detailed install instructions, check out [Github's documentation](https://github.com/git-guides/install-git). 

You'll also want to make sure to register for an account on [Github](https://github.com/).

3. Node.js and npm

Node.js is a big beautiful thing, and if you're interested, check out [their about page](https://nodejs.org/en/about/). For the purposes of this project, we're mainly interested in [npm](https://en.wikipedia.org/wiki/Npm_(software)), which is a package manager that generally comes bundled with Node.js.

Install Node.js with the command `brew install node`. This will also install npm. If you do this, I recommend installing the most up-to-date stable version of Node by typing `brew install node@version_number`. [Node's website](https://nodejs.org/en/) will tell you which version is the latest stable version.

4. VSCode

[Virtual Studio Code](https://code.visualstudio.com/) is a powerful code editor with a ton of functionality. This allows you to open up all your code files and make edits as you please. There are a lot of other great code editors like [Atom](https://atom.io/) or [Sublime Text](http://www.sublimetext.com/), so feel free to use whatever suits your fancy. 

## App set up

Now that you've installed the above, it's time to get your demo app up and running!

1. In the terminal, navigate to the folder where you'd like to save your project and then clone this project repository to your computer using the [`git clone`](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) command.

2. Run `npm install` to install other project dependencies.

3. Run `npm start` to begin a local development server. Once this starts, you should be able to see a live preview of your app running in your browser at `localhost:3000`. 

Note: you will first need to install Appcues using your account ID in the first step below.

And that's it! You've now got a locally hosted working app. Any changes you make in your code files should automatically appear in the local version of your demo app.

## Install your Appcues account

1. In the `index.html` file, replace {account_id} with your Appcues account ID.

2. In `App.js`, replace the "tesUser" ID if you'd like, and add in any other user properties you would like sent into Appcues. Because this demo app does not have a backend with a database, whenever you refresh the page in your app, the identified user will fall back to whatever value is entered here.

3. Feel free to add any additional HTML you would like. This should mostly be done with HTML added into the `return` section of any component. You can add in anything like photos, iFrames, lists, etc. You can also create entirely new components if you're feeling adventurous.

4. The app's CSS lives in `index.css` and can be changed as you please. 

I recommend leaving alone the files in the `appcues_components` folder, as these are what are used for making calls to the Appcues javascript API and running the event log.

## Push project to Github

You now have a working app, but it's currently only on your machine. Next you'll want to push the code to Github.

When working in the terminal, you'll want to make sure you're in your demo project folder. If you're running a local server for local host, I recommend opening a second terminal for pushing changes to Github.

Following the [directions](https://docs.github.com/en/get-started/quickstart/create-a-repo) on Github, create a new repository to hold your demo app's files. You'll want to follow the steps for pushing an existing repository from the command line.

If you receive `error: remote origin already exists.`, you'll first need to change the origin by running the command `git remote set-url origin <remote_url>`. The remote_url should be your Github repository URL.

When you visit your repo page in Github, you should now see all your files present. Whenever you make any changes to the files now, you'll want to make sure to push all these changes to the Github-hosted version so they match up. The 3 basic commands you'll want to use are:

1. `git add .` This will add any file that has been changed to your staging area.

2. `git commit -m "<message here>"` This commits the changes, sort of like a quick save. The message you enter will appear in Github. It's common practice to write these comments in short imperatives like "add login functionality" to give you a quick description of what changes you made. These comments will appear in Github. You can commit as many times as you want before pushing your code changes. It's a good rule to commit early and often. 

3. `git push origin main` This pushes all your committed files to Github.

4. `git status` This command will give you a list of files that have been modified and need to be staged, as well as committed. 

Note: these are just the very basics of Git. For a more complete rundown, [this article](https://www.freecodecamp.org/news/practical-git-and-git-workflows/) from freeCodeCamp is a great place to start.

## Host project on Netlify

Now that your app is saved on Github, the last step is to host it somewhere so that you can access it from anywhere! Although there are many, many ways to do this, this app is currently configured to use Netlify. 

1. Create an account at [Netlify](https://www.netlify.com/).

2. Follow the steps in [this article](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

3. You should now have a working demo app with Appcues installed!