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
$("#submit-info").on("click", function (event) {
  event.preventDefault();
  //gotta retrieve the information from the hardcoded input form. the jquery way.
  var name = $("#trainName").val().trim();
  var destination = $("#trainDestination").val().trim();
  //this one, i should use moment,js to format the time. i suppose it isnt strictly necessary but would be a good thing
  var time = $("beginTime").val().trim();
  var timing = $("frequencyOf").val().trim();
  //right, i need to hardcode some object attribute names
  var train = {name: name, destination: destination, time: time, timing: timing};
  console.log(name);
  console.log(destination);
  console.log(time);
  console.log(timing);
  console.log(train);
  //gootta push this to the database
  database.ref().push(train);
  //gosh, i hope this syntax is memorable
  //doesnt make sense to leave the text in the textboxes
  function clear() {
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#beginTime").val("");
    $("frequencyOf").val("");
    //$("").val("");
  }
  clear();
  
});
//results function
//this whole function i think should be a database on added, on child added thing
//function resultsFunction() {
database.ref().on("child_added", function(results) {  
  
  var name = results.val().name;
  var destination = results.val().destination;
  var time = results.val().time;
  var timing = results.val().timing;
  var next = "math";
  var away = "math";
  var newTrain = $("<tr>").append($("<td>").text(name), 
  $("<td>").text(destination), 
  $("<td>").text(timing), 
  $("<td>").text(next), 
  $("<td>").text(away));
  //frankly this next line i dont fully understand
  $("#soma > tbody").append(newTrain);

});
//math functions
//you know what i will do this in the other function. function mathFunction1() {


//gotta remember to call a function?