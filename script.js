var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var hour = moment().hours();
var userInput;
var hourSpan;


var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);
  

// var textAreaList = ["sched9", "sched10", "sched11", "sched12", "sched13", 'sched14', "sched15", "sched16", "sched17", "sched18"];
// var textArealength = textAreaList.length;

// var saveBtnList = ["save9", "save10", "save11", "save12", "save13", "save14", "save15", "save16", "save17", "save18"]
// var saveBtnlength = saveBtnList.length;
// backgroundColor();
// set();
// get();


// function set() {
//     for (var i = 0; i < textArealength; i++) {
//         localStorage.setItem(textAreaList[i], JSON.stringify(window[textAreaList[i]]));
//     }
// };

// function get() {
//     for (var i = 0; i < textArealength; i++) {
//         window[textAreaList[i]] = JSON.parse(localStorage.getItem(textAreaList[i]));
//     }
// };

// displayColor();
// }


// Button clear schedule
$("#clearData").on("click", function(){
    localStorage.clear();
    initPage()
  }) 