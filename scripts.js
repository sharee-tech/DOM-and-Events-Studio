// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let rocket = document.getElementById("rocket")
    rocket.style.position = "relative";

    function changeHeight(direction) {
        console.log(direction);
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        console.log(spaceShuttleHeight);
        let heightValue = Number(spaceShuttleHeight.innerHTML);
        if (direction === "Up" || direction === undefined) {
            spaceShuttleHeight.innerHTML = String(heightValue + 10000);
        } else {
            spaceShuttleHeight.innerHTML = String(heightValue - 10000);
        }
    }

    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function() {
        let response = window.confirm("Ready for Takeoff?");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            changeHeight();
        }
    })

    let land = document.getElementById("landing");
    land.addEventListener("click", function() {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    })

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    })

    let elements = document.querySelectorAll("button");
    console.log(elements);
    for (let i = 0; i < 4; i++) {
        elements[i].addEventListener("click", function(event) {
            switch (event.target.innerHTML) {
                case "Up":
                    changeHeight("Up");
                    rocket.style.top = `${rocket.offsetTop - 10}px`;
                    break;
                case "Down":
                    changeHeight("Down");
                    rocket.style.top = `${rocket.offsetTop + 10}px`;
                    break;
                case "Left":
                    if (rocket.style.left === "") {
                        rocket.style.left = "-10px";
                    } else {
                        let currentAmt = parseInt(rocket.style.left, 10);
                        rocket.style.left = currentAmt - 10 + "px";
                    }
                    break;
                case "Right":
                    if (rocket.style.left === "") {
                        rocket.style.left = "10px";
                    } else {
                        let currentAmt = parseInt(rocket.style.left, 10);
                        rocket.style.left = currentAmt + 10 + "px";
                    }
                    break;
                default:
                    break;
            }
        });
    }

})

// anElement.addEventListener("eventName", aFunction);

// document.getElementById("main-text").innerHTML += "you rang...";
//          console.log("you rang...");