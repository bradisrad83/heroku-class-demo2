/* global firebase moment */
// Steps to complete:
// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCoy8cmO6MAfqc21yanaNZb4Ub5_tQVaHQ",
    authDomain: "employeedate.firebaseapp.com",
    databaseURL: "https://employeedate.firebaseio.com",
    storageBucket: "employeedate.appspot.com",
    messagingSenderId: "946435456677"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed



// 2. Button for adding Employees
$("#submit").on("click", function(event) {

    event.preventDefault();
    // Grabs user input
    var employeeName = $("#employee-name").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var monthlyRate = $("#monthly-rate").val().trim();


    // Creates local "temporary" object for holding employee data
    var employeeData = {
        name: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    };



    // Uploads employee data to the database - "push"
    database.ref().push(employeeData);


    // Logs everything to console
    console.log(employeeName, role, startDate, monthlyRate);


    // Alert "employee added"
    alert("Employee Added");


    // Clears all of the text-boxes
    $("#employee-name").val("");
    $("#role").val("");
    $("#start-date").val("");
    $("#monthly-rate").val("");

    // Prevents moving to new page
    //return false;
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {


    // Store everything into a variable, empname, emprole, empstart, emprate
    var emp = {
        empName: childSnapshot.val().name,
        empRole: childSnapshot.val().role,
        empStart: childSnapshot.val().startDate,
        empRate: childSnapshot.val().monthlyRate

    };



    // Log Employee Info
    console.log(emp);


    // Format the employee start
    var convertedDate = moment(emp.empStart).format("MMM DD, YYYY");
    console.log(convertedDate);



    // Calculate the months worked using hardcore math
    var monthsWorked = moment().diff(moment(convertedDate), "months");
    console.log(monthsWorked);
    // To calculate the months worked


    // Calculate the total billed rate
    var totalBilled = emp.empRate * monthsWorked;
    console.log(totalBilled);


    // Add each train's data into the table
    $("#employee-table > tbody").append("<tr><td>" + emp.empName + "</td><td>" + emp.empRole + "</td><td>" +
        emp.empStart + "</td><td>" + monthsWorked + "</td><td>" + emp.empRate + "</td><td>" + "$" + totalBilled + "</td></tr>");

});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016
