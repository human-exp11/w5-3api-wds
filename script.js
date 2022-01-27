
// moment.javascipt below
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var userInput;
var hourSpan;

// Variable for each text/hour
var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");
var six = $("#18");

var hour = moment().hours();

// Gets Current Date and renders in Jumbotron header
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

// Function to get items from local storage
function getTimes() {
    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nine.val(init9);
    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    ten.val(init10);
    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    eleven.val(init11);
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelve.val(init12);
    var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    one.val(init1);
    var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    two.val(init2);
    var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    three.val(init3);
    var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    four.val(init4);
    var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    five.val(init5);
    var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
    six.val(init6);
} 

// Function to display correct color related to the current hour
function backgroundChange () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        // console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function() {
    getTimes()
    backgroundChange()
// Function to set content to local storage
    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
    //Button to clear schedule
    $("#clearData").on("click", function(){
    localStorage.clear();
    getTimes()
    })
});
    