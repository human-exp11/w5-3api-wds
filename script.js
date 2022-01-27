var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var userLog;
var hourSpan;

var nine = $("#sched9");
var ten = $("#sched10");
var eleven = $("#sched11");
var twelve = $("#sched12");
var one = $("#sched13");
var two = $("#sched14");
var three = $("#sched15");
var four = $("#sched16");
var five = $("#sched17");
var six = $("#sched18");

var hour = moment().hours();

// Gets Current Date and Renders in Jumbotron Header
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function getTimes() {
    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("9:00 am"));
    nine.val(init9);
    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    ten.val(init10);
    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    eleven.val(init11);
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelve.val(init12);
    var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
    one.val(init1);
    var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
    two.val(init2);
    var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
    three.val(init3);
    var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
    four.val(init4);
    var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
    five.val(init5);
    var init6 = JSON.parse(localStorage.getItem("6:00 pm"))
    six.val(init6);
} 

function backgroundChange () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

// function backgroundChange() {
//     $(".form-control").each(function () {
//         var timeCheck = parseInt($(this).attr("id"));
//         hour = parseInt(hour);
//         console.log(timeCheck);
//         console.log(hour);
//         if (hour > timeCheck) {
//             $(this).addClass("past");
//         } else if (hour < timeCheck) {
//             $(this).addClass("future");
//         } else {
//             $(this).addClass("present");
//         }
//     });
// }

$(document).ready(function() {
    getTimes()
    backgroundChange()

    $(".saveBtn").on("click", function(){
        userLog = $(this).siblings(".form-control").val().trim();
        console.log(userLog);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userLog));
    })
    //Button to clear schedule
    $("#clearData").on("click", function(){
    localStorage.clear();
    getTimes()
    })
});
    