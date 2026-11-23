let beforeStartCheck = ["ATIS Information acknowledged", "Flight Plan filed", "Request IFR/VFR Clearance"]

let startUpCheck = ["Request Push & Start", 'Start the engines ("E" on PC)', 'Pushback yourself ("P" on PC)', "Or; Wait for a pushback tug (If available)"]

let afterStartCheck = ['Engines normal (Press back "P" on PC)', 'Flaps set to TO position (Flaps 1)']

let beforeTaxiCheck = ["Request Taxi Clearance"]

let taxiCheck = ["Follow Taxi instructions"]

let afterTaxiCheck = ["Request Frequency Change (With Ground only)", "Monitor/Contact Tower"]

let beforeToCheck = ["Verify Flaps position", "Verify charts (If using SID and STAR)", "Wait for Tower Clearance"]

let toCheck = ["Stabilize engines at 50%", "TO/GA (100% engine thrust)"]

let afterToCheck = ["Gear up", "Flaps Retract", "Reduce thrust to remain under 250kts", "Wait for Frequency transfer to CTR"]

let climbCheck = ["Follow ATC Instructions", "Remain at or bellow 250kts (If 3000ft and below)"]

let beforeLandingCheck = ["Set Flaps to 1 when lined up with Runway", "Set Flaps to 2-3 when Frequency change", "Reduce speed to approach speed (~ 140kts)", "Gear down", "Set Flaps to Full when Cleared to land ", "Reduce speed to landing speed (~ 125kts)"]

let landingCheck = ["Flare when 30fts above ground", "Thrust Idle when 20fts above ground"]

let afterLandingCheck = ["Full reverser until 70kts", "Vacate runway", "Reset flaps positions", "Follow ATC instructions to Gate"]

let shutdownCheck = ['Turn off engines ("E" on PC)', "Thank the ATC"]

let checklists = [beforeStartCheck, startUpCheck, afterStartCheck, beforeTaxiCheck, taxiCheck, afterTaxiCheck, beforeToCheck, toCheck, afterToCheck, climbCheck, beforeLandingCheck, landingCheck, afterLandingCheck, shutdownCheck]

const container = document.querySelector(".checklists");

function createElement(type, content, parent, x) {
    const element = document.createElement(`${type}`)
    element.classList.add(x)
    element.textContent = `${content}`

    parent.appendChild(element)
}