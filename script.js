// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var textAreaList = ["sched9", "sched10", "sched11", "sched12", "sched13", 'sched14', "sched15", "sched16", "sched17", "sched18"];
var textArealength = textAreaList.length;

var saveBtnList = ["save9", "save10", "save11", "save12", "save13", "save14", "save15", "save16", "save17", "save18"]
var saveBtnlength = saveBtnList.length;
backgroundColor();



function set() {
    for (var i = 0; i < textArealength; i++) {
        localStorage.setItem(textAreaList[i], JSON.stringify(window[textAreaList[i]]));
    }
}

function get() {
    for (var i = 0; i < textArealength; i++) {
        window[textAreaList[i]] = JSON.parse(localStorage.getItem(textAreaList[i]));
    }
}

// Loads current date
$(document).ready(function () {
    function setPlanner() {
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    }
    //To clear text inputs and local storage
    setPlanner();
    $("#clearData").click(function () {
        localStorage.clear();
        location.reload();
    });

    //Change background based off past/present/future
    function backgroundColor() {
        $(".time-blocks").each(function () {
            var specHour = parseInt($(this).attr("id"));
            hour = parseInt(hour);
            console.log(timeTest);
            console.log(hour);
            if (hour > specHour) {
                $(this).addClass("past");
            } else if (hour < specHour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
        });
    }
    $(document).ready(function () {
        scheduleEvents()
        backgroundColor()
        // Save button
        $(".saveBtn").on("click", function () {
            userInput = $(this).siblings(".form-control").val().trim();
            console.log(userInput);
            hourSpan = $(this).siblings(".input-group-prepend").text().trim();
            console.log(hourSpan);
            localStorage.setItem(hourSpan, userInput);
        })
    });


