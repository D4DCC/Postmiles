let MountainBlvd = {Route: 13, CR: "Mountain Blvd UC RT", PM: 4.319, Road: 707, Bridge: 723, Landscape: 710, Tree: 716}
let ALAcr = [ALA13];
let CCcr = [];
let LAKEcr = [];
let MRNcr = [];
let NAPcr = [];
let SACcr = [];
let SCLcr = [];
let SFcr = [];
let SMcr = [];
let SOLcr = [];
let SONcr = [];
let output = [];


window.onchange=function(){
	document.getElementById('county').addEventListener('click', assignToRoute);


}


let county = document.getElementById('county').value;
let route = document.getElementById('search').innerHTML;
let keyword = document.getElementById('keyword').text;
let x = 

function assignToRoute(e){
	if(county == 'ALA'){
		if(route == '13'){
			document.getElementById('output')

			if(output[x].indexOf(keyword))
		}

	}

}




function postmileOutput(e){
	console.log(output);

	document.getElementById('output').innerHTML = `<table class ="table table-bordered"><thead><th>PostMile: </th><th>Crew: </th></thead><tbody><tr><td><h4>${ALAcr[0].PM} @ Route ${ALAcr[0].Route} & ${ALAcr[0].CR}</h4></td><td><div>Road: ${ALAcr[0].Road}</div><br><div>Bridge: ${ALAcr[0].Bridge}</div><br><div>Landscape: ${ALAcr[0].Landscape}</div><br><div>Tree: ${ALAcr[0].Tree}</div></td></tr></tbody></table>`;

}
