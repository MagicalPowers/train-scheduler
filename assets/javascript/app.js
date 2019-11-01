//get the firebase database connection set up first
//need a function to display the results, do i need an empty array to store them?

//need a function to be the "submit button" function. --push the textbox info to the database, then onChildAdded to bring the data back to the table. i think
//you know what, im not sure this has to involve firebase at all. I know that the moment.js function is important
//thats another part of the display- ill need a math function to calculate some of the data tables


//firebase- this is copypasta
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgcJnPCVGQE8AGfN9Jsf2lzzraMo8kq1g",
  authDomain: "newproject-d8376.firebaseapp.com",
  databaseURL: "https://newproject-d8376.firebaseio.com",
  projectId: "newproject-d8376",
  storageBucket: "newproject-d8376.appspot.com",
  messagingSenderId: "101423244744",
  appId: "1:101423244744:web:72fca8e69ffb8e7b6a0cfd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//submit function
$("#submit-info").on("click",  function(event) {
  event.preventDefault();


});
//results function
function resultsFunction() {

}
//math functions
function mathFunction1() {

}
//gotta remember to call a function?