// Initialize Firebase
// Get the code provided from Google Firebase's
// Paste the var config = {...}; part here
// Also keep the firebase.initializeApp(...); part
// The <script> </script> portion we will put in the <head> section of our index.html

const firebaseConfig = {
  apiKey: "AIzaSyBtaF2cAVM_D8Z5gIUZMT7wD2UBDD3g1qU",
  authDomain: "comp3910-project.firebaseapp.com",
  
  projectId: "comp3910-project",
  storageBucket: "comp3910-project.appspot.com",
  messagingSenderId: "264143054948",
  appId: "1:264143054948:web:d97b59b14b2d6c8e0dd77"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Store a reference to the red and green buttons so we can easily add
//  click events to them later
const redButton = document.querySelector('.myButtonRed');
const greenButton = document.querySelector('.myButtonGreen');

// Store a reference to where we will display the color we get back
//  from the database
const colorContent = document.querySelector('#color-square');
const colorDescription = document.querySelector('#color-description');


//Red Button Click Event
redButton.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("Red Button Pressed.");
  //Put your code here to update the firebase database with color red.
  colorContent.style.backgroundColor = "#de1000";
  colorDescription.innerHTML = "Red";
});


//Green Button Click Event
greenButton.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("Green Button Pressed.");
  //Put your code here to update the firebase database with color green.
  colorContent.style.backgroundColor = "#15ba10";
  colorDescription.innerHTML = "Green";
});