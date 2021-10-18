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

  //get time from id and use it to compare to current time
  $(".time").each(function () {
    var timeVar = parseInt($(this).attr("id").split("hour")[0]);

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
$("#9hour .description").val(localStorage.getItem("9hour"));
$("#10hour .description").val(localStorage.getItem("10hour"));
$("#11hour .description").val(localStorage.getItem("11hour"));
$("#12hour .description").val(localStorage.getItem("12hour"));
$("#13hour .description").val(localStorage.getItem("13hour"));
$("#14hour .description").val(localStorage.getItem("14hour"));
$("#15hour .description").val(localStorage.getItem("15hour"));
$("#16hour .description").val(localStorage.getItem("16hour"));
$("#17hour .description").val(localStorage.getItem("17hour"));

//function call
timeKeeper();