# 📝 My Journal

![My Journal image](https://i.imgur.com/Gu7hbWA.png)

## [Click here to open the app!](https://journal-app-livid-chi.vercel.app/)

## 💭 What is My Journal?
This is a lightweight journaling and note saving cloud application. The notes are saved on the cloud and can be accesed from any device at any moment.

You can read and download the full application document [here](https://github.com/alesbe/journal-app/blob/main/My%20Journal%20-%20%C3%81lvaro%20Esparza%20Bellver.pdf). It has all the technical and functional information but is in Spanish though!

## 🌐 User features
There are some key features that the user will enjoy that are implemented on My Journal:

- Lightweight and fast
- Login with Google and Email/Password
- Full notes CRUD (Create, Read, Update, Delete)
- Image uploading
- Responsive design (it has to be fixed)
- Intuitive and clean design

## 📚 Tech stack and libraries
Some of the tools used for this project are:
- [React](https://es.react.dev/) - The main tool used for this app. A JavaScript framework to develop scalable and robuts frontend applications.
- [Redux](https://redux.js.org/) - A react library created to control application state. This is one of the key implementations.
- [Firebase](https://firebase.google.com/) - A backend modular tool made by Google. Im using the authentication module and the Firestore module for the database.
- [MaterialUI](https://mui.com/) - The library used for the app design. It's entirely based on the Material design by Google.
- [Vite](https://vitejs.dev/) - A toolkit to create and deploy easily Javascript applications.

## 👨‍💻 Dev features
There are some features and design decisions that can be appreciated by developers. This project was made to learn how to properly design a React app:

- A Redux thunks based design
- Form validation and control through custom hooks
- Private routes
- Custom Firebase providers
- Multiple file upload and validation
- Redux store based in slices and made with clean architecture
- Ease to add new themes to the applicaiton
- Keep login between page refresh
- Full CRUD

## 📂 Download
You can download and deploy the application manually or using [Docker](https://www.docker.com/)!
For both options you must create a Firebase app with user authentication and Firestore enabled and replace your Firebase credentials on [this file](https://github.com/alesbe/journal-app/blob/main/src/firebase/config.js).

**🚧 Work in progress! Come back later 🚧**
