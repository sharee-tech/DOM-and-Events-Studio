// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
  let takeoffBtn = document.getElementById("takeoff");
  takeoffBtn.addEventListener("click", function () {
    let response = window.confirm("Ready for Takeoff?");
    if (response) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "blue";
      changeHeight();
    }
  });
});
// anElement.addEventListener("eventName", aFunction);

// document.getElementById("main-text").innerHTML += "you rang...";
//          console.log("you rang...");
