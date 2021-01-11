# Introduction

SUPERHEROES is a learning project, providing basic out-of-the-box capabilities
for learners to build upon.

This project is a MERN (MongoDB, ExpressJS, ReactJS, Node.js) application made
of two processes:
   1. an Express "server" providing API support for retrieving and submitting
   data from the backend
   1. a React "client" providing a web-based UI

This project also leverages a cloud-based instance of MongoDB for storing
and retrieving data.

# Working with this Codebase

## Starting the Express server application

In a command shell (CMD, PowerShell, Terminal, etc.) run the commands:
1. `cd server`
1. `npm install`
1. `npm run start`

The server is now running on port *3000*.

## Starting the React client application

In a command shell run the commands:
1. `cd client`
1. `npm install`
1. `npm run start`

Your browser should open to `http://localhost:4444`.  The React development
system is running on port *4444*.

# How this project was created

> **NOTE**: you only want to review this section if you are going to create
an entirely new project leveraging the same technologies and approach used for
this project

Here are the command-line steps taken to create the initial version of this project:
```bash
$ mkdir superheroes
$ cd superheroes
$ npx create-react-app --use-npm client
$ npx express-generator server
$ rm -rf client/.git client/.gitignore client/yarn.k
$ rm server/.gitignore
$ cat <<- EOF > .gitignore
# DIRECTORIES TO IGNORE
**/.pnp/
**/build/
**/coverage/
**/jspm_packages/
**/logs/
**/node_modules/
**/pids/
**/typings/
**/.npm/

# FILES TO IGNORE
*.log
*.pid
*.pid.lock
*.seed
*.tgz
.DS_Store
.env.*.local
.env.local
.eslintcache
.node_repl_history
.yarn-integrity
.next
EOF
$ cat <<- EOF > client/.env
PORT=4444
EOF
$ git init
$ git add .
$ git status
   On branch main
   
   No commits yet
   
   Changes to be committed:
     (use "git rm --cached <file>..." to unstage)
          new file:   .gitignore
          new file:   README.md
          new file:   client/.env
          new file:   client/README.md
          new file:   client/package-lock.json
          new file:   client/package.json
          new file:   client/public/favicon.ico
          new file:   client/public/index.html
          new file:   client/public/logo192.png
          new file:   client/public/logo512.png
          new file:   client/public/manifest.json
          new file:   client/public/robots.txt
          new file:   client/src/App.css
          new file:   client/src/App.js
          new file:   client/src/App.test.js
          new file:   client/src/index.css
          new file:   client/src/index.js
          new file:   client/src/logo.svg
          new file:   client/src/reportWebVitals.js
          new file:   client/src/setupTests.js
          new file:   server/app.js
          new file:   server/bin/www
          new file:   server/package.json
          new file:   server/public/stylesheets/style.css
          new file:   server/routes/index.js
          new file:   server/routes/users.js
          new file:   server/views/error.jade
          new file:   server/views/index.jade
          new file:   server/views/layout.jade
$ git commit -m "initialize the project"
$ git 
```
