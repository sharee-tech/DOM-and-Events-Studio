// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
  let rocket = document.getElementById("rocket");
  rocket.style.position = "relative";
  const flightStatus = document.getElementById("flightStatus");
  let takeoffBtn = document.getElementById("takeoff");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");

  takeoffBtn.addEventListener("click", function (event) {
    let response = window.confirm("Shuttle is ready for takeoff");
    if (response) {
      flightStatus.innerHTML = "Shuttle in flight";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "blue";
      shuttleHeight.innerHTML = 10000;
    }
  });

  let landBtn = document.getElementById("landing");
  landBtn.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor =
      "green";
    shuttleHeight.innerHTML = 0;
  });

  let abortMissionBtn = document.getElementById("missionAbort");
  abortMissionBtn.addEventListener("click", function () {
    window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      flightStatus.innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "green";
      shuttleHeight.innerHTML = 0;
    }
  });

  let directionBtns = document.querySelectorAll("button");
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  let directionArr = [up, down, right, left];
  for (let i = 0; i < directionArr.length; i++) {
    directionBtns[i].addEventListener("click", function (event) {
      if (directionBtns[i] === up) {
        rocket.style.top = `${rocket.offsetTop - 10}px`;
      } else if (directionBtns[i] === down) {
        rocket.style.top = `${rocket.offsetTop + 10}px`;
      } else if (directionBtns[i] === right) {
        rocket.style.left = "10px";
      } else {
        rocket.style.left = "-10px";
      }
    });
  }
});
