var today = moment().format('dddd, MMM D, YYYY');
$("#currentDay").html(today);

//here we use jquery for save button event listener function
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  //save to local storage
  localStorage.setItem(time, text);
});

//use function to determine hour of day
var timeKeeper = function() {
  //get the hour
  debugger;
  var currentTime = moment().hour();

  $(".time").each(function () {
    var timeVar = parseInt($(this).attr("id").split("am")[0]);

    //check if time is in past and add/remove classes
    if (timeVar < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    //check if time is now and adjust classes
    else if (timeVar === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    //check if time is greater than current and adjust classes    
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
  })
}

//get item from local storage using val of id(time) and class
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#13pm .description").val(localStorage.getItem("13pm"));
$("#14pm .description").val(localStorage.getItem("14pm"));
$("#15pm .description").val(localStorage.getItem("15pm"));
$("#16pm .description").val(localStorage.getItem("16pm"));
$("#17pm .description").val(localStorage.getItem("17pm"));

//function call
timeKeeper();