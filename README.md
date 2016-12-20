## What files live where

* `frontend_design_spec.md` has a copy of the information/requirements for this
  exercise.
* `backend_design_spec.md` contains the spec for what I'd like the
  backend developer to build so that my frontend demo app will work someday.
* `index.html` is my main HTML page, I altered it to accommodate  Reactjs and Socket.io. 
* My JS code is in `/js. The Main.js file holds the top level component, the index.js renders the react app to the DOM, and Message.js accounts for messages that were created prior to joining the chat.  
* My stylesheets are in `/styles. 
* `/fixtures` contains a fake data file, `fakedata.json`.
* I have webpack bundling my files and inserting a bundle.js file in the client directory.
* server.js is my basic node server.  It is serving the react app, working with socket.io, and is where routes could begin to be built out - I've included comments saying as much.

## Viewing the app for development

* npm install
* webpack -w
* npm start

## Misc. extras

* tinyChat works in Firefox, Chrome and Safari.
* Users can specify their name.
* There is "realtime" checking for new messages from other users, via socket.io.  

