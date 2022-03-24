//global variables
var dayTimeEl = $("#currentDay");
var currentHourEl = $("#currentHour")
var textAreaEl = $("#textarea-content");

// WHEN I scroll down THEN I am presented with timeblocks for standard business hours -- list of dates that take information
// arrange them in an array and call in 1 function 
var hoursVar = [$("#07"), $("#08"), $("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17"), $("#18")];

//displays current day and time at the top of the UI
var today = moment().format("MMMM Do, YYYY");
var todayHour = moment().format("LT");
dayTimeEl.text(today);
currentHourEl.text(todayHour);

//to color code time-blocks
currentTime = moment().hour();


// WHEN I refresh the page THEN the saved events persist 
 //Each timeblock is color coded to indicate whether it is in the past, present, or future 
function colorCodeTimeBlocks() {
    for (i = 0; i < hoursVar.length; i++) {
        var hoursEl = hoursVar[i].attr("id");
        hoursVar[i].children("textarea").val(JSON.parse(localStorage.getItem(hoursEl)))
        if (hoursEl < currentTime) {
            hoursVar[i].children("textarea").addClass("past");
            console.log("the past");
        }
        else if (hoursEl > currentTime) {
            hoursVar[i].children("textarea").addClass("future");
            console.log("future");
        } else {
            hoursVar[i].children("textarea").addClass("present");
        }
    }
}

//color blocks load immediately
colorCodeTimeBlocks();

// WHEN I click into a timeblock, THEN I can enter an event -- .val taken and prints on page
// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage 
$(".saveBtn").on("click", function() {
    var userInput = $(this).siblings("textarea");
    localStorage.setItem(userInput.parent().attr("id"), JSON.stringify(userInput.val()));
    console.log("is this working?");
})


//create a clear button next to the save button
