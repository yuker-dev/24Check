let beforeStartCheck = {
	title: "Before Start",
	items: [
		{ id: "ATIS", text: "ATIS Information acknowledged" },
		{ id: "FPL", text: "Flight Plan filed" },
		{ id: "clearance", text: "Request IFR/VFR Clearance" },
	],
};

let startUpCheck = {
	title: "Start-Up",
	items: [
		{ id: "pushStart", text: "Request Push & Start" },
		{ id: "startEngines", text: 'Start the engines ("E" on PC)' },
		{ id: "pushbackSelf", text: 'Pushback yourself ("P" on PC)' },
		{
			id: "pushbackTug",
			text: "OR Wait for a pushback tug (If available)",
		},
	],
};

let afterStartCheck = {
	title: "After Start",
	items: [
		{ id: "unRevEngines", text: 'Engines normal (Press back "P" on PC)' },
		{ id: "flapsTO", text: "Flaps set to TO position (Flaps 1)" },
	],
};

let beforeTaxiCheck = {
	title: "Before Taxi",
	items: [{ id: "taxiClearance", text: "Request Taxi Clearance" }],
};

let taxiCheck = {
	title: "Taxi",
	items: [{ id: "taxiInstructions", text: "Follow Taxi instructions" }],
};

let afterTaxiCheck = {
	title: "After Taxi",
	items: [
		{
			id: "freqChangeGround",
			text: "Wait or Request Frequency Change (When on Ground Frequency)",
		},
		{ id: "contactTower", text: "Monitor/Contact Tower" },
	],
};

let beforeToCheck = {
	title: "Before Takeoff",
	items: [
		{ id: "verifyFlaps", text: "Verify Flaps on Takeoff position" },
		{ id: "verifyCharts", text: "Verify charts (If using waypoints)" },
		{ id: "takeoffClearance", text: "Wait for takeoff Clearance" },
	],
};

let toCheck = {
	title: "Takeoff",
	items: [
		{ id: "stabilizeEngines", text: "Stabilize engines at 50%" },
		{ id: "toga", text: "TO/GA (100% engine thrust)" },
	],
};

let afterToCheck = {
	title: "After Takeoff",
	items: [
		{ id: "gearUp", text: "Gear up" },
		{ id: "flapsRetract", text: "Flaps Retract" },
		{ id: "reduceThrust", text: "Reduce thrust to remain under 250kts" },
		{ id: "freqTransferCtr", text: "Wait for Frequency transfer to CTR" },
	],
};

let climbCheck = {
	title: "Climb/Cruise",
	items: [
		{ id: "followAtc", text: "Follow ATC Instructions" },
		{
			id: "remainUnder250",
			text: "Remain at or below 250kts (If 3000ft and below)",
		},
	],
};

let beforeLandingCheck = {
	title: "Before Landing",
	items: [
		{
			id: "flaps1Runway",
			text: "Set Flaps to 1 when lined up with Runway",
		},
		{ id: "flaps23", text: "Set Flaps to 2-3 when Frequency change" },
		{
			id: "approachSpeed",
			text: "Reduce speed to approach speed (~ 140kts)",
		},
		{ id: "gearDown", text: "Gear down" },
		{ id: "flapsFull", text: "Set Flaps to Full when Cleared to land" },
		{
			id: "landingSpeed",
			text: "Reduce speed to landing speed (~ 125kts)",
		},
	],
};

let landingCheck = {
	title: "Landing",
	items: [
		{ id: "flare", text: "Flare when 30ft above ground" },
		{ id: "thrustIdle", text: "Thrust Idle when 20ft above ground" },
	],
};

let afterLandingCheck = {
	title: "After Landing",
	items: [
		{ id: "reverser", text: "Full reverser until 70kts" },
		{ id: "vacateRunway", text: "Vacate runway" },
		{ id: "resetFlaps", text: "Reset flaps positions" },
		{ id: "taxiToGate", text: "Follow ATC instructions to Gate" },
	],
};

let shutdownCheck = {
	title: "Shutdown",
	items: [
		{ id: "enginesOff", text: 'Turn off engines ("E" on PC)' },
		{ id: "thankAtc", text: "Thank the ATC" },
	],
};

let checklists = [
	beforeStartCheck,
	startUpCheck,
	afterStartCheck,
	beforeTaxiCheck,
	taxiCheck,
	afterTaxiCheck,
	beforeToCheck,
	toCheck,
	afterToCheck,
	climbCheck,
	beforeLandingCheck,
	landingCheck,
	afterLandingCheck,
	shutdownCheck,
];

const container = document.querySelector(".checklists");

function createOpenDetails() {
	const details = document.createElement("details");
	details.open = true;
	details.classList.add("checklist");

	return details;
}

function createSummary(parent, title) {
	const summary = document.createElement("summary");
	summary.textContent = `${title}`;

	parent.appendChild(summary);

	return summary;
}

function createUl(parent) {
	const ul = document.createElement("ul");

	parent.appendChild(ul);

	return ul;
}

function createLi(id, content) {
	const li = document.createElement("li");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = `${id}`;
	checkbox.classList.add("checkBox");

	li.appendChild(checkbox);

	const label = document.createElement("label");
	label.htmlFor = `${id}`;
	label.textContent = `${content}`;

	li.appendChild(label);

	return li;
}

function createChecklist(check, title) {
	const details = createOpenDetails();
	const summary = createSummary(details, title);
	const ul = createUl(details);

	for (let i = 0; i < check.items.length; i++) {
		let li = createLi(check.items[i].id, check.items[i].text);

		ul.appendChild(li);
	}
	container.appendChild(details);
}

function createChecklists(check) {
	for (let i = 0; i < check.length; i++) {
		createChecklist(check[i], check[i].title);
	}
}

createChecklists(checklists);
