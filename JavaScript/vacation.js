window.onsubmit=function() {
	document.getElementById('supname').value;
	document.getElementById('callSign').value;
	document.getElementById('coverage').value;
	document.getElementById('callSign2').value;
	document.getElementById('contact').value;
	document.getElementById('vacaStart').value;
	document.getElementById('vacaEnd').value;

}

window.onload=function() {
	document.getElementById('submit').addEventListener('click', executeAll);
}

function executeAll(e) {
  var fsupervisor = document.getElementById('supname').value;
  var callSign = document.getElementById('callSign').value;
  var coverage = document.getElementById('coverage').value;
  var callSign2 = document.getElementById('callSign2').value;
  var contact = document.getElementById('contact').value;
  var vacaStart = document.getElementById('vacaStart').value;
  var vacaEnd = document.getElementById('vacaEnd').value;
  var fRegion = document.getElementById('region').value;
  var rNorth = document.getElementsByClassName('north');
  var north = rNorth[0].className;
  var rEast = document.getElementsByClassName('east');
  var east = rEast[0].className;
  var rDelta = document.getElementsByClassName('delta');
  var delta = rDelta[0].className;
  var rSouth = document.getElementsByClassName('south');
  var south = rSouth[0].className;
  var rWest = document.getElementsByClassName('west');
  var west = rWest[0].className;
  var rSpecialty = document.getElementsByClassName('specialty');
  var specialty = rSpecialty[0].className;
  var rToll = document.getElementsByClassName('toll');
  var toll = rToll[0].className;
  var h4 = document.createElement('h4');
  var name = document.getElementsByClassName('name');
  var CS = document.getElementsByClassName('callSign');
  var Con = document.getElementsByClassName('contact');
  var VS = document.getElementsByClassName('vacaStart');
  var VE = document.getElementsByClassName('vacaEnd');


	fsupervisor[0].toUpperCase();


  if(fRegion == north) {
    name[0].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[0].innerHTML += `${callSign}<br>${callSign2}`;
    Con[0].innerHTML += `<br>${contact}`;
    VS[0].innerHTML += `<br>${vacaStart}`;
    VE[0].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == 'east') {
    name[1].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[1].innerHTML += `${callSign}<br>${callSign2}`;
    Con[1].innerHTML += `<br>${contact}`;
    VS[1].innerHTML += `<br>${vacaStart}`;
    VE[1].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == delta) {
    name[2].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[2].innerHTML += `${callSign}<br>${callSign2}`;
    Con[2].innerHTML += `<br>${contact}`;
    VS[2].innerHTML += `<br>${vacaStart}`;
    VE[2].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == south) {
    name[3].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[3].innerHTML += `${callSign}<br>${callSign2}`;
    Con[3].innerHTML += `<br>${contact}`;
    VS[3].innerHTML += `<br>${vacaStart}`;
    VE[3].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == west) {
    name[4].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[4].innerHTML += `${callSign}<br>${callSign2}`;
    Con[4].innerHTML += `<br>${contact}`;
    VS[4].innerHTML += `<br>${vacaStart}`;
    VE[4].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == specialty) {
    name[5].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[5].innerHTML += `${callSign}<br>${callSign2}`;
    Con[5].innerHTML += `<br>${contact}`;
    VS[5].innerHTML += `<br>${vacaStart}`;
    VE[5].innerHTML += `<br>${vacaEnd}`;

} else if (fRegion == toll) {
    name[6].innerHTML += `${fsupervisor} off<br>${coverage} covering`;
    CS[6].innerHTML += `${callSign}<br>${callSign2}`;
    Con[6].innerHTML += `<br>${contact}`;
    VS[6].innerHTML += `<br>${vacaStart}`;
    VE[6].innerHTML += `<br>${vacaEnd}`;

} else { 
	alert('You need to select a region first!!!');

}
  
}

/*  
  



*/