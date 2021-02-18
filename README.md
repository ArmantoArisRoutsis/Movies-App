# Movie Base

<p align="center">
  <img src="./Project-Sample.png" width="1000px">
</p>

## About

###### This application allows users to search for movies and series and view relevant information. The users can also save movies to their "to-watch-list" and later on removing them if they wish to do so. Finally the users have the option of a dark or light theme depending on their preference.

###### This web application was created using Vue. JS for the most part. Many of the functions as well as certain information are stored using the VueX state management library in order to make them available throughout the whole application and avoid prop drilling and repetition. Most animations that can be seen on the website are a combination of CSS and DOM manipulation reacting to the changes of certain values stored in the VueX store. All of the movie/series information is fetched by utilizing the Open Movies Database API. The way the application saves data is by utilizing the local storage and by manipulating the way data is stored. Most of the things displayed are split into separate components in order to avoid repetition.

## Technologies Used

- ###### HTML
- ###### CSS
- ###### Javascript
- ###### Vue.js
- ###### VueX

## Technical Information

### To run the site on your local machine

If you wish to run this locally you will to first need clone this repository to your local machine. Afterwards you will have to run npm install inside the client folder for all the necessary dependencies to be installed. After you will need to run the command npm run serve inside the client folder. Finally when all configurations are completed you should be able to head to “http://localhost:8080/” where the application can be viewed.
