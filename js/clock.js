function runClock ()
	{

	var rightNow = new Date();
	var thisHour = rightNow.getHours ();
	var thisMin = rightNow.getMinutes ();
	var thisSec = rightNow.getSeconds ();

	// Ternary operator for if statement shorthand
	thisMin = (thisMin < 10 ? "0" : "" ) + thisMin;
	thisSec = (thisSec < 10 ? "0" : "" ) + thisSec;

	var afterNoon = ( thisHour < 12) ? "AM" : "PM";
	thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
	thisHour =(thisHour == 0) ? 12 : thisHour;

	//Make the clock string
	var clockString = thisHour + ":" + thisMin + ":" + thisSec + " " + afterNoon

	//Using the DOM, place clock in preferred node
	document.getElementById("clock").firstChild.nodeValue = clockString;
	
	}
setInterval( "runClock()", 1000);