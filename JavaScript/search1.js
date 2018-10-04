window.onchange=function() {
  document.getElementById('county').addEventListener('click', display);

document.getElementById('search');

}

window.onmouseover=function(){
	document.getElementById('searchByRoute').addEventListener('click', postmileOutput);

}

function display(e) { /*  first */

    let county = document.getElementById('county').value;
    let search = document.getElementById('search');
    let displayOPT = document.getElementsByClassName(county);
    let changed = document.getElementsByClassName('changed');
    let dropCls = [];

	for(k=0; k < dropCls.length; k++){

		dropCls[k].classList.remove('changed');
	}


	for(j=0; j < changed.length; j++){

		changed[j].classList.add('county');

	}



	for(i=0; i < displayOPT.length; i++){	/*  second */


			if(county == 'ALA'){	/*  third */
				displayOPT[i].style.backgroundColor = 'midnightblue';
				displayOPT[i].style.color = 'white';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'CC'){
				displayOPT[i].style.backgroundColor = 'purple';
				displayOPT[i].style.color = 'white';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'LAKE'){
				displayOPT[i].style.backgroundColor = 'black';
				displayOPT[i].style.color = 'white';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'MRN'){
				displayOPT[i].style.backgroundColor = 'limegreen';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'NAP'){
				displayOPT[i].style.backgroundColor = 'limegreen';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SAC'){
				displayOPT[i].style.backgroundColor = 'purple';
				displayOPT[i].style.color = 'white';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SCL'){
				displayOPT[i].style.backgroundColor = 'pink';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SF'){
				displayOPT[i].style.backgroundColor = 'orange';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SM'){
				displayOPT[i].style.backgroundColor = 'orange';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SOL'){
				displayOPT[i].style.backgroundColor = 'limegreen';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			} else if(county == 'SON'){
				displayOPT[i].style.backgroundColor = 'limegreen';
				displayOPT[i].style.color = 'black';
				displayOPT[i].style.fontWeight = "bold";
				displayOPT[i].classList.remove('county');
				displayOPT[i].classList.add('changed');
				dropCls.push(displayOPT[i]);
			}	/*  third end */
	}	/*  second end */

}	/*  first end */



let crossRoads = {
	county: {
		ALA: {
			Route: {
				Highways: [{
					HWY13: [{HWY: 013, PM: 4.319, CR: "Mountain Blvd UC RT"},
 {HWY: 013, PM: 4.339, CR: "END 13/580"},
 {HWY: 013, PM: 4.472, CR: "SB OFF TO MOUNTAIN BLVD"},
 {HWY: 013, PM: 4.477, CR: "NB ON FROM MOUNTAIN BLVD"},
 {HWY: 013, PM: 4.854, CR: "LEONA HEIGHTS PED OC"},
 {HWY: 013, PM: 4.886, CR: "SB ON FROM CARSON ST", Alias: "ALISO AVE"},
 {HWY: 013, PM: 4.945, CR: "NB OFF TO CARSON ST"},
 {HWY: 013, PM: 5.012, CR: "CARSON ST UC"},
 {HWY: 013, PM: 5.310, CR: "NB ON FROM EB REDWOOD"},
 {HWY: 013, PM: 5.393, CR: "REDWOOD OC"},
 {HWY: 013, PM: 5.482, CR: "NB ON FROM REDWOOD RD"},
 {HWY: 013, PM: 5.491, CR: "SB OFF TO REDWOOD RD", Alias: "ALISO AVE"},
 {HWY: 013, PM: 6.219, CR: "SB ON FROM MONTEREY BLVD"},
 {HWY: 013, PM: 6.372, CR: "NB OFF TO JOAQUIN MILLER RD", Alias: "LINCOLN AVE/MOUNTAIN BLVD"},
 {HWY: 013, PM: 6.469, CR: "LINCOLN AVE OC"},
 {HWY: 013, PM: 6.581, CR: "NBON FR JOAQUIN MILLER RD"},
 {HWY: 013, PM: 6.582, CR: "SB OFF TO LINCOLN AVE", Alias: "MONTEREY BLVD"},
 {HWY: 013, PM: 7.132, CR: "SB ON FROM PARK BLVD", Alias: "MONTEREY BLVD"},
 {HWY: 013, PM: 7.219, CR: "NB OFF TO PARK BLVD", Alias: "MOUNTAIN BLVD"},
 {HWY: 013, PM: 7.391, CR: "NB ON FROM PARK BLVD", Alias: "MOUNTAIN BLVD"},
 {HWY: 013, PM: 7.397, CR: "PARK BLVD OC"},
 {HWY: 013, PM: 7.501, CR: "SB OFF TO PARK BLVD", Alias: "TRAFALGAR PLACE"},
 {HWY: 013, PM: 7.758, CR: "LA SALLE AVE OC"},
 {HWY: 013, PM: 7.911, CR: "BRUNS CT PED OC"},
 {HWY: 013, PM: 8.082, CR: "NB OFF TO MORAGA AVE", Alias: "THORNHILL DR"},
 {HWY: 013, PM: 8.262, CR: "NB ON FR EB MORAGA", Alias: "THORNHILL DR"},
 {HWY: 013, PM: 8.270, CR: "MORAGA AVE UC RT"},
 {HWY: 013, PM: 8.275, CR: "SB ON FROM EB MORAGA AVE"},
 {HWY: 013, PM: 8.300, CR: "MORAGA AVE"},
 {HWY: 013, PM: 8.366, CR: "NB ON FROM WB MORAGA AVE"},
 {HWY: 013, PM: 8.432, CR: "SB OFF TO WB MORAGA"},
 {HWY: 013, PM: 8.433, CR: "SB OFF TO EB MORAGA"},
 {HWY: 013, PM: 8.528, CR: "SB OFF TO MORAGA AVE"},
 {HWY: 013, PM: 8.869, CR: "NB OFF TO BROADWAY TERRACE", Alias: "GLENWOOD GLADE"},
 {HWY: 013, PM: 9.005, CR: "SB ON FR BROADWAY TERRACE"},
 {HWY: 013, PM: 9.066, CR: "BROADWAY TERRACE UC"},
 {HWY: 013, PM: 9.176, CR: "NB ON FR BROADWAY TERRACE", Alias: "GLENWOOD GLADE/PINEWOOD RD"},
 {HWY: 013, PM: 9.199, CR: "SB OFF TO BROADWAY TERRACE"},
 {HWY: 013, PM: 9.481, CR: "SB ON FR BROADWAY & FRONTAGE RD"},
 {HWY: 013, PM: 9.522, CR: "NB OFF TO EB RTE 24", Alias: "Grove Shafter FWY"},
 {HWY: 013, PM: 9.576, CR: "BROADWAY OC"},
 {HWY: 013, PM: 9.621, CR: "JCT RTE 24 LT", Alias: "NB OFF TO WB RTE 24/Grove Shafter FWY "},
 {HWY: 013, PM: 9.990, CR: "HILLER DR & TUNNEL RD"},
 {HWY: 013, PM: 10.140, CR: "VICENTE RD RT"},
 {HWY: 013, PM: 10.220, CR: "ROBLE RD LT"},
 {HWY: 013, PM: 10.330, CR: "BRIDGE RD RT"},
 {HWY: 013, PM: 10.400, CR: "THE UPLANDS & ALVARADO"},
 {HWY: 013, PM: 10.540, CR: "OAK RIDGE RD LT"},
 {HWY: 013, PM: 10.580, CR: "HOTEL CLAREMONT RT"},
 {HWY: 013, PM: 10.690, CR: "DOMINGO AVE"},
 {HWY: 013, PM: 10.790, CR: "CLAREMONT AVE"},
 {HWY: 013, PM: 10.870, CR: "CLAREMONT CRESCENT LT"},
 {HWY: 013, PM: 10.910, CR: "ELMWOOD COURT LT"},
 {HWY: 013, PM: 10.960, CR: "PINE AVE"},
 {HWY: 013, PM: 11.000, CR: "MAGNOLIA ST LT"},
 {HWY: 013, PM: 11.040, CR: "LINDEN AVE LT"},
 {HWY: 013, PM: 11.110, CR: "PIEDMONT AVE"},
 {HWY: 013, PM: 11.150, CR: "ASHBY PLACE"},
 {HWY: 013, PM: 11.190, CR: "ASHBY PLACE & ELMWOOD LT"},
 {HWY: 013, PM: 11.230, CR: "COLLEGE AVE"},
 {HWY: 013, PM: 11.300, CR: "BENVENUE AVE"},
 {HWY: 013, PM: 11.370, CR: "HILLEGASS AVE"},
 {HWY: 013, PM: 11.450, CR: "REGENT ST"},
 {HWY: 013, PM: 11.516, CR: "COLBY ST LT"},
 {HWY: 013, PM: 11.530, CR: "FLORENCE ST RT"},
 {HWY: 013, PM: 11.610, CR: "TELEGRAPH AVE"},
 {HWY: 013, PM: 11.690, CR: "ELLSWORTH ST RT"},
 {HWY: 013, PM: 11.770, CR: "DEAKIN ST"},
 {HWY: 013, PM: 11.840, CR: "FULTON ST"},
 {HWY: 013, PM: 11.910, CR: "WHEELER ST"},
 {HWY: 013, PM: 11.980, CR: "LORINA ST RT"},
 {HWY: 013, PM: 12.058, CR: "SHATTUCK AVE"},
 {HWY: 013, PM: 12.120, CR: "NEWBERRY ST RT"},
 {HWY: 013, PM: 12.240, CR: "ADELINE ST"},
 {HWY: 013, PM: 12.270, CR: "OTIS ST RT"},
 {HWY: 013, PM: 12.320, CR: "MARTIN LUTHER KING ST"},
 {HWY: 013, PM: 12.380, CR: "HARPER ST"},
 {HWY: 013, PM: 12.440, CR: "ELLIS ST"},
 {HWY: 013, PM: 12.500, CR: "KING ST"},
 {HWY: 013, PM: 12.640, CR: "CALIFORNIA ST"},
 {HWY: 013, PM: 12.760, CR: "SACRAMENTO ST"},
 {HWY: 013, PM: 12.820, CR: "STANTON ST"},
 {HWY: 013, PM: 12.860, CR: "DOHR ST"},
 {HWY: 013, PM: 12.890, CR: "ACTON ST"},
 {HWY: 013, PM: 13.020, CR: "MABEL ST"},
 {HWY: 013, PM: 13.178, CR: "JCT RTE 123"},
 {HWY: 013, PM: 13.180, CR: "SAN PABLO AVE RTE 123"},
 {HWY: 013, PM: 13.330, CR: "NINTH ST"},
 {HWY: 013, PM: 13.440, CR: "SEVENTH ST"},
 {HWY: 013, PM: 13.689, CR: "FOLGER AVE"},
 {HWY: 013, PM: 13.708, CR: "BAY ST OC"},
 {HWY: 013, PM: 13.892, CR: "RTE 80/13 RT"},
 {HWY: 013, PM: 13.919, CR: "RTE 80/13 LT"},
 {HWY: 013, PM: 13.931, CR: "JCT RTE 80 (1)"},
 {HWY: 013, PM: 14.307, CR: "JCT RTE 80 (2)"},
 {HWY: 013, PM: 14.807, CR: "END OF COUNTY"}],
                    HWY24: [],
                    HWY61: [{PM: 0.000, CR: "JCT  84 UNC"},
                    {PM: 14.800, CR: "JCT  112 E"},
                    {PM: 14.800, CR: "JCT 112/DAVIS ST"},
                    {PM: 15.156, CR: "EDEN ROAD LT"},
                    {PM: 15.563, CR: "ADAMS AVENUE RT"},
                    {PM: 15.935, CR: "AIRPORT ACCESS ROAD"},
                    {PM: 16.070, CR: "AIRPORT/HEGENBERGER"},
                    {PM: 16.470, CR: "SWAN RD, LT"},
                    {PM: 17.020, CR: "LANGLEY ST (LT)"},
                    {PM: 17.860, CR: "BELLANCA RD. (LT)"},
                    {PM: 17.980, CR: "DUMPYARD RD. (RT)"},
                    {PM: 18.020, CR: "HARBOR BAY PARKWAY LT"},
                    {PM: 18.520, CR: "ISLAND DR"},
                    {PM: 18.905, CR: "FERNSIDE BLVD - RT"},
                    {PM: 19.070, CR: "HIGH ST RT/VIEW DR LT"},
                    {PM: 19.130, CR: "FOUNTAIN ST (LT)"},
                    {PM: 19.190, CR: "COURT ST (LT)"},
                    {PM: 19.240, CR: "MOUND ST"},
                    {PM: 19.340, CR: "VERSAILLES AVE."},
                    {PM: 19.400, CR: "PEARL ST."},
                    {PM: 19.440, CR: "BROADWAY"},
                    {PM: 19.440, CR: "BROADWAY ST"},
                    {PM: 19.530, CR: "CALHOUN ST"},
                    {PM: 19.580, CR: "WASHINGTON WAY (LT)"},
                    {PM: 19.620, CR: "WASHINGTON ST. (RT)"},
                    {PM: 19.710, CR: "SAN JOSE AVE."},
                    {PM: 19.840, CR: "ENCINAL AVE"},
                    {PM: 19.840, CR: "BROADWAY/ENCINAL AVE"},
                    {PM: 19.930, CR: "REGENT ST."},
                    {PM: 20.000, CR: "PARK AVE "},
                    {PM: 20.080, CR: "PARK ST."},
                    {PM: 20.150, CR: "OAK ST."},
                    {PM: 20.330, CR: "WALNUT ST."},
                    {PM: 20.510, CR: "WILLOW ST."},
                    {PM: 20.690, CR: "CHESTNUT ST."},
                    {PM: 20.750, CR: "LAFAYETTE ST."},
                    {PM: 20.850, CR: "UNION ST."},
                    {PM: 20.920, CR: "GRAND ST."},
                    {PM: 21.070, CR: "PARU ST."},
                    {PM: 21.170, CR: "BENTON ST. (RT)"},
                    {PM: 21.220, CR: "MORTON ST."},
                    {PM: 21.270, CR: "SHERMAN ST"},
                    {PM: 21.270, CR: "SHERMAN ST/CENTRAL AVE"},
                    {PM: 21.330, CR: "BAY ST."},
                    {PM: 21.390, CR: "ST. CHARLES ST."},
                    {PM: 21.510, CR: "CAROLINE ST."},
                    {PM: 21.560, CR: "WEBER ST. (LT)"},
                    {PM: 21.640, CR: "NINTH ST."},
                    {PM: 21.720, CR: "BURBANK ST. (LT)"},
                    {PM: 21.770, CR: "EIGHTH ST."},
                    {PM: 21.890, CR: "PAGE ST. (RT)"},
                    {PM: 21.966, CR: "JCT RTE 260 (WEBSTER ST)"},
                    {PM: 21.967, CR: "JCT ST 260 NORTH"},
                    {PM: 24.789, CR: "JCT ST 80"},
                    {PM: 31.507, CR: "END COUNTY"}],
                    HWY77: [{PM: 5.000, CR: "END OF COUNTY"},
                    {PM: 0.098, CR: "JCT ST 880"},
                    {PM: 0.144, CR: "42ND AVE RAMP OC"},
                    {PM: 0.164, CR: "SATHER UP"},
                    {PM: 0.177, CR: "CLOROX UP"},
                    {PM: 0.287, CR: "SAN LEANDRO BLVD OC"},
                    {PM: 0.311, CR: "SB ON FR 40TH/E 12TH ST"},
                    {PM: 0.318, CR: "MELROSE AVE UP"},
                    {PM: 0.321, CR: "NB OFF TO HIGH/E 12TH ST"},
                    {PM: 0.365, CR: "EAST 12TH ST OC"},
                    {PM: 0.451, CR: "JCT RTE 77/185"},
                    {PM: 0.452, CR: "14TH ST"},
                    {PM: 1.940, CR: "JCT 580 @ HIGH ST"},
                    {PM: 1.950, CR: "N JCT 580 @ 14TH ST"},
                    {PM: 3.648, CR: "JCT ST 13"}],
                    HWY80: [{PM: 0.000, CR: "WB LT LNS ON UPPER STR"},
                    {PM: 1.270, CR: "UPPER DECK LANES WEST"},
                    {PM: 1.766, CR: "EB OFF TO BUS STATION"},
                    {PM: 1.989, CR: "NEW TOLL PLAZA ON BAY BRIDGE"},
                    {PM: 2.057, CR: "EB ON FROM TOLL PLAZA"},
                    {PM: 2.170, CR: "WB ON FR GRAND AVE"},
                    {PM: 2.290, CR: "EB OFF TO GRAND/MARITME"},
                    {PM: 2.362, CR: "FRONTAGE RD LT"},
                    {PM: 2.413, CR: "PORT OF OAK"},
                    {PM: 2.438, CR: "WB OFF TO TOLL PLAZA"},
                    {PM: 2.450, CR: "WB OFF TO MARITIME/W GRAND"},
                    {PM: 2.472, CR: "PORT OF OAK OC"},
                    {PM: 2.477, CR: "SEG OFF TO GRAND/MARTME"},
                    {PM: 2.480, CR: "WB OFF TO GRAND/MARITME"},
                    {PM: 2.482, CR: "OFF TO GRAND"},
                    {PM: 2.501, CR: "EB OFF EB 580/SB 880"},
                    {PM: 2.561, CR: "JCT EB 80 / EB 580"},
                    {PM: 2.621, CR: "SEG OFF TO MARITIME"},
                    {PM: 2.634, CR: "JCT ST 61 UNC RD"},
                    {PM: 2.721, CR: "EB ON FR GRAND/MARITIME"},
                    {PM: 2.801, CR: "JCT EB 80 / WB 580"},
                    {PM: 2.802, CR: "JCT ST 580 E"},
                    {PM: 2.895, CR: "WB ON FR WB 580/NB 880"},
                    {PM: 2.901, CR: "EB ON MRTME TO GRAND"},
                    {PM: 3.012, CR: "WB OFF GRAND TO MARITMETM"},
                    {PM: 3.064, CR: "BEGIN HOVL FLYOVER"},
                    {PM: 3.213, CR: "JCT ST 880"},
                    {PM: 3.214, CR: "EB ON FR NB 880/WB 580"},
                    {PM: 3.241, CR: "WB OFF TO SB 880/EB 580"},
                    {PM: 3.373, CR: "WB ON FR EB POWELL ST"},
                    {PM: 3.513, CR: "TEMESCAL CR"},
                    {PM: 3.677, CR: "JCT EB 80 / NB 880"},
                    {PM: 3.642, CR: "EB OFF TO POWELL ST"},
                    {PM: 3.786, CR: "POWELL ST UC"},
                    {PM: 3.888, CR: "WB ON FR WB POWELL ST"},
                    {PM: 3.947, CR: "EB ON FR POWELL ST"},
                    {PM: 4.052, CR: "WB OFF TO POWELL ST"},
                    {PM: 4.321, CR: "EB OFF TO SB 13/BAY ST"},
                    {PM: 4.331, CR: "WB ON FR NB RTE 13"},
                    {PM: 4.452, CR: "RTE 13/80 CONN OC"},
                    {PM: 4.502, CR: "EB OFF TO BAY ST"},
                    {PM: 4.503, CR: "EB OFF TO RTE 13"},
                    {PM: 4.582, CR: "JCT RTE 13 (ASHBY AVE)"},
                    {PM: 4.671, CR: "EB ON FR NB RTE 13"},
                    {PM: 4.761, CR: "WB OFF TO SB RTE 13"},
                    {PM: 5.720, CR: "EB OFF TO UNVRSTY/FRONT"},
                    {PM: 5.728, CR: "WB ON FR UNIVERSITY AVE"},
                    {PM: 5.747, CR: "EB OFF TO EB UNVRSTY"},
                    {PM: 5.748, CR: "EB OFF TO 2ND/FRONT"},
                    {PM: 5.818, CR: "EB OFF TO FRONTAGE"},
                    {PM: 5.819, CR: "EB OFF TO 2ND ST"},
                    {PM: 5.836, CR: "UNIVERSITY AVE OC"},
                    {PM: 5.983, CR: "WB OFF TO UNIVERSITY AV"},
                    {PM: 6.015, CR: "EB ON FR WB UNIVERSITY"},
                    {PM: 6.408, CR: "WB ON FR GILMAN STREET"},
                    {PM: 6.479, CR: "EB OFF TO GILMAN STREET"},
                    {PM: 6.790, CR: "EB ON FR GILMAN STREET"},
                    {PM: 6.822, CR: "WB OFF TO GILMAN STREET"},
                    {PM: 7.043, CR: "EB OFF TO BUCHANAN ST"},
                    {PM: 7.084, CR: "WB ON FR BUCHANAN ST"},
                    {PM: 7.197, CR: "EL CERRITO SEP OH "},
                    {PM: 7.213, CR: "JCT RT LN RTE 580 WB"},
                    {PM: 7.355, CR: "JCT LT LN RTE 580 EB"},
                    {PM: 7.395, CR: "EB ON FR BUCHANAN ST"},
                    {PM: 7.571, CR: "EB ON FR BUCHANAN ST"},
                    {PM: 7.770, CR: "WB OFF TO CLEVELAND ST"},
                    {PM: 8.036, CR: " END OF COUNTY"}],
                    HWY84: [],
                    HWY92: [],
                    HWY112: [],
                    HWY123: [],
                    HWY185: [],
                    HWY205: [],
                    HWY238: [],
                    HWY260: [],
                    HWY262: [],
                    HWY580: [{PM: 0.074, CR: "COUNTY LINE"},
{PM: 0.422, CR: "JCT 205 & 239 UNC RD"},
{PM: 0.897, CR: "DUM EBOFF TO EB RTE 205"},
{PM: 0.917, CR: "MIDWAY UC"},
{PM: 0.808, CR: "JCT NON ADD 205 WBD LNS"},
{PM: 0.809, CR: "DUM WB ON FR WB RTE 205"},
{PM: 1.281, CR: "WB OFF TO GRANT LINE RD"},
{PM: 1.381, CR: "EB ON FR GRANT LINE RD"},
{PM: 1.476, CR: "GRANT LINE RD UC 3R"},
{PM: 1.483, CR: "GRANT LINE RD UC 3L"},
{PM: 1.661, CR: "WB ON FR GRANT LINE RD"},
{PM: 1.701, CR: "EB OFF TO GRANT LINE RD"},
{PM: 3.983, CR: "STONECUT OH RT"},
{PM: 5.941, CR: "WB OFF TO NORTH FLYNN RD"},
{PM: 5.980, CR: "NORTH FLYNN OC RT"},
{PM: 3.909, CR: "REDMOND OH LT"},
{PM: 3.994, CR: "STONECUT UP LT"},
{PM: 5.691, CR: "EB ON FR NORTH FLYNN RD"},
{PM: 5.933, CR: "NORTH FLYNN RD OC LT"},
{PM: 5.971, CR: "EB OFF TO NORTH FLYNN RD"},
{PM: 6.221, CR: "WB ON FR NORTH FLYNN RD"},
{PM: 6.925, CR: "ALTAMONT SIDEHILL"},
{PM: 8.000, CR: "GREENVILLE OH LT"},
{PM: 8.002, CR: "GREENVILLE OH RT"},
{PM: 8.265, CR: "GREENVILLE RD UC 3L"},
{PM: 8.294, CR: "GREENVILLE RD UC 3R"},
{PM: 8.421, CR: "WB OFF TO GREENVILLE RD"},
{PM: 8.521, CR: "EB ON FR GREENVILLE RD"},
{PM: 8.551, CR: "WB ON FR GREENVILLE RD"},
{PM: 8.661, CR: "EB OFF TO GREENVILLE RD"},
{PM: 8.871, CR: "WB OFF TO TRUCK SCALES"},
{PM: 8.981, CR: "EB ON FR TRUCK SCALES"},
{PM: 9.061, CR: "WB ON FR TRUCK SCALES"},
{PM: 9.171, CR: "EB OFF TO TRUCK SCALES"},
{PM: 9.441, CR: "WB OFF TO VASCO RD"},
{PM: 9.481, CR: "EB ON FR VASCO RD"},
{PM: 9.561, CR: "SEG WBOFF TONB VASCO RD"},
{PM: 9.562, CR: "SEG WBOFF TOSB VASCO RD"},
{PM: 9.683, CR: "VASCO RD OC BR"},
{PM: 9.761, CR: "SEG EBOFF TONB VASCO RD"},
{PM: 9.762, CR: "SEG EBOFF TOSB VASCO RD"},
{PM: 9.791, CR: "SEG WBON FR NB VASCO RD"},
{PM: 9.792, CR: "SEG WBON FR SB VASCO RD"},
{PM: 9.851, CR: "WB ON FR VASCO RD"},
{PM: 9.881, CR: "EB OFF TO VASCO RD"},
{PM: 10.425, CR: "WBOFF TO FIRST ST"},
{PM: 10.571, CR: "EB ON FR FIRST ST"},
{PM: 10.599, CR: "SEG WB OFF TO NB FIRST ST"},
{PM: 10.600, CR: "SEG WB OFF TO SB FIRST ST"},
{PM: 10.689, CR: "FIRST ST OC BR"},
{PM: 10.743, CR: "SEG EB OFF TO NB FIRST ST"},
{PM: 10.744, CR: "SEG EB OFF TO SB FIRST ST"},
{PM: 10.825, CR: "WB ON FR FIRST ST"},
{PM: 10.859, CR: "EB OFF TO FIRST ST"},
{PM: 11.031, CR: "ARROYO SECO"},
{PM: 11.043, CR: "ARROYO SECO"},
{PM: 11.534, CR: "LAS COLINAS OC"},
{PM: 11.732, CR: "ARROYO LOS POSITAS"},
{PM: 12.398, CR: "WB OFF TO LIVERMORE AVE"},
{PM: 12.421, CR: "EB ON FR LIVERMORE AVE"},
{PM: 12.530, CR: "NORTH LIVERMORE UC"},
{PM: 12.645, CR: "WB ON FR LIVERMORE AVE"},
{PM: 12.730, CR: "EB OFF TO LIVERMORE AVE"},
{PM: 13.219, CR: "PORTOLA AVE OC"},
{PM: 13.286, CR: "EB OFF TO PORTOLA AVE"},
{PM: 13.366, CR: "WB ON FR PORTOLA AVE"},
{PM: 13.818, CR: "LOS POSITAS CR BB"},
{PM: 14.200, CR: "JCT ST 84 UNC RD S"},
{PM: 14.792, CR: "WB OFF TO RTE84/AIRWAY"},
{PM: 14.974, CR: "JCT RTE 580/84 SEP"},
{PM: 14.980, CR: "EB ON FR RTE84/AIRWAY"},
{PM: 15.003, CR: "WB ON FR NB RTE84/AIRWAY"},
{PM: 15.151, CR: "EB OFF TO RTE84/AIRWAY"},
{PM: 15.170, CR: "WB ON FR SB RTE84/AIRWAY"},
{PM: 16.504, CR: "EB ON FR EL CHARRO RD"},
{PM: 16.551, CR: "WB OFF TO EL CHARRO RD"},
{PM: 16.703, CR: "EL CHARRO RD OC"},
{PM: 16.857, CR: "EB OFF TO EL CHARRO RD"},
{PM: 16.903, CR: "WB ON FR EL CHARRO RD"},
{PM: 17.567, CR: "RANCHO DRAIN"},
{PM: 17.738, CR: "EB ON FR NB TASSAJARA"},
{PM: 17.756, CR: "WB OFF TO TASSAJARA RD"},
{PM: 17.940, CR: "EB ON FR SB TASSAJARA"},
{PM: 17.944, CR: "WB ON FR NB TASSAJARA"},
{PM: 17.947, CR: "TASSAJARA RD OC"},
{PM: 18.070, CR: "WB ON FR SB TASSAJARA"},
{PM: 18.130, CR: "EB OFF TO TASSAJARA RD"},
{PM: 18.319, CR: "TASSAJARA CR 3"},
{PM: 18.601, CR: "WB OFF TO HACIENDA DR"},
{PM: 18.671, CR: "EB ON FR NB HACIENDA DR"},
{PM: 18.791, CR: "WB ON FR NB HACIENDA DR"},
{PM: 18.821, CR: "HACIENDA DR OC"},
{PM: 18.851, CR: "EB ON FR SB HACIENDA DR"},
{PM: 18.941, CR: "WB ON FR SB HACIENDA DR"},
{PM: 19.051, CR: "EB OFF TO HACIENDA DR"},
{PM: 19.347, CR: "DOUGHERTY OH LT"},
{PM: 19.356, CR: "DOUGHERTY OH RT"},
{PM: 19.621, CR: "WB OFF TO DOUERTY/HOPYRD"},
{PM: 19.624, CR: "DOUGHERTY DRAIN"},
{PM: 19.719, CR: "CHABOT CANAL"},
{PM: 19.741, CR: "EB ON FR NB HOPYARD RD"},
{PM: 19.851, CR: "WB ON FR NB HOPYARD RD"},
{PM: 19.859, CR: "HOPYARD-DOUGHERTY RD OC"},
{PM: 19.871, CR: "EB ON FR SB HOPYARD RD"},
{PM: 19.961, CR: "WB ON FR SB HOPYARD RD"},
{PM: 20.154, CR: "EB ON FR NB 680"},
{PM: 20.166, CR: "SEG 680/EB OFF TO HOPYARD"},
{PM: 20.235, CR: "SEG NB 680 OFF TO HOPYARD"},
{PM: 20.278, CR: "SEG SB/EB OFF TO HOPYARD"},
{PM: 20.297, CR: "EB ON FR SB 680"},
{PM: 20.334, CR: "SEG SB OFF TO HOPYARD"},
{PM: 20.481, CR: "WB OFF TO RTE 680"},
{PM: 20.555, CR: "ALAMO CANAL"},
{PM: 20.591, CR: "SEG WB OFF TO SB RTE 680"},
{PM: 20.601, CR: "EB OFF TO HOPYARD RD"},
{PM: 20.711, CR: "ST 680/580 SEP"},
{PM: 20.726, CR: "JCT ST FAI 680"},
{PM: 20.861, CR: "SEG EB OFF TO NB RTE 680"},
{PM: 20.862, CR: "SEG EBOFF TO SB RTE 680"},
{PM: 20.961, CR: "EB OFF  TO RTE 680"},
{PM: 21.197, CR: "WB OFF COL TO SAN RAMON"},
{PM: 21.270, CR: "EB ON COL FR SAN RAMON"},
{PM: 21.316, CR: "WB OFF TO N/B SAN RAMON"},
{PM: 21.317, CR: "WB OFF TO S/B SAN RAMON"},
{PM: 21.319, CR: "EB ON FR NB SAN RAMON RD"},
{PM: 21.320, CR: "EB ON FR SB SAN RAMON RD"},
{PM: 21.427, CR: "SAN RAMON RD OC"},
{PM: 21.535, CR: "EB OFF TO SB SAN RAMON"},
{PM: 21.536, CR: "EB OFF TO NB SAN RAMON"},
{PM: 21.539, CR: "WB ON FR SB SAN RAMON RD"},
{PM: 21.540, CR: "WB ON FR NB SAN RAMON RD"},
{PM: 21.656, CR: "SAN RAMON, EB OFF RAMP"},
{PM: 21.656, CR: "EB OFF COL TO SAN RAMON"},
{PM: 21.658, CR: "WB ON COL FR SAN RAMON"},
{PM: 23.863, CR: "SCHAEFER RCH RDU"},
{PM: 26.052, CR: "WB OFF TO EDEN CANYON RD"},
{PM: 26.069, CR: "EB ON FR EDEN CANYON RD"},
{PM: 26.228, CR: "EDEN CANYON RD U/R"},
{PM: 26.410, CR: "WB ON FR EDEN CYN RD"},
{PM: 26.476, CR: "EB OFF TO EDEN CYN RD"},
{PM: 26.655, CR: "SUNNYSLOPE AV OC"},
{PM: 27.001, CR: "EAST CASTRO VALLEY U/R"},
{PM: 27.534, CR: "LORENZO CREEK"},
{PM: 28.100, CR: "WB OFF TO CASTRO VALLEY BLVD"},
{PM: 28.270, CR: "EB ON FR NB CROW CANYON RD"},
{PM: 28.360, CR: "WB ON FR CASTRO VALLEY BLVD"},
{PM: 28.413, CR: "CROW CYN RD U/R"},
{PM: 28.550, CR: "EB ON FR SB CROW CANYON RD"},
{PM: 28.571, CR: "CROW CREEK BR L/R"},
{PM: 28.745, CR: "CENTER ST OC"},
{PM: 28.970, CR: "EB OFF TO CENTER ST"},
{PM: 29.040, CR: "WB ON FR CASTRO VALLEY BLVD"},
{PM: 29.365, CR: "REDWOOD RD UC/R"},
{PM: 29.530, CR: "WB ON FR REDWOOD RD"},
{PM: 29.550, CR: "EB OFF TO REDWOOD RD"},
{PM: 30.086, CR: "LAKE CHABOT PEDO"},
{PM: 30.155, CR: "EB ON FR STROBRIDGE AVE"},
{PM: 30.221, CR: "WBOFF TO STROBRIDGE AVE"},
{PM: 30.354, CR: "STROBRIDGE UC/R"},
{PM: 30.532, CR: "EB ON FR NB 238"},
{PM: 30.553, CR: "CASTRO VALLEY BLVD UC"},
{PM: 30.589, CR: "580/238 SEP"},
{PM: 30.640, CR: "WB OFF TO NB 238"},
{PM: 30.643, CR: "WB ON FR WB CASTRO VALLEY"},
{PM: 30.670, CR: "EB OFF TO STROBRIDGE AVE"},
{PM: 30.807, CR: "JCT LT LNS W/238"},
{PM: 31.028, CR: "SEG WB ON EB CASTRO VALLEY BLVD"},
{PM: 31.029, CR: "SEG WB ON EB CASTRO VALLEY BLVD"},
{PM: 31.030, CR: "WB ON FR RTE 238 &"},
{PM: 31.092, CR: "SEG EB OFF TO SB 238 &"},
{PM: 31.296, CR: "EB OFF TO RTE 238 &"},
{PM: 31.343, CR: "167TH AVE UC BR"},
{PM: 31.631, CR: "EB ON FR LIBERTY ST"},
{PM: 31.714, CR: "164TH AVE UC BR"},
{PM: 31.811, CR: "WB OFF TO FOOTHILL BLVD"},
{PM: 31.961, CR: "EB OFF TO LIBERTY ST"},
{PM: 32.071, CR: "WB ON FR FOOTHILL BLVD"},
{PM: 32.321, CR: "159TH AVE OC BR"},
{PM: 32.511, CR: "WB OFF TO PLAZA DR"},
{PM: 32.591, CR: "EB ON FR PLAZA DR"},
{PM: 32.717, CR: "PLAZA DRIVE OC"},
{PM: 32.844, CR: "150TH AVE OC BR"},
{PM: 32.971, CR: "EB OFF TO 150TH AVE"},
{PM: 32.981, CR: "WB ON FR 150TH AVE"},
{PM: 33.430, CR: "BENEDICT DR CONN"},
{PM: 33.431, CR: "WB OFF TO BENEDICT DR"},
{PM: 33.943, CR: "GRAND AVE OC"},
{PM: 34.061, CR: "WB ON FR GRAND AVE"},
{PM: 34.091, CR: "EB ON FR GRAND AVE"},
{PM: 34.261, CR: "WB OFF TO JOAQUIN AVE"},
{PM: 34.371, CR: "EB OFF TO GRAND AVE"},
{PM: 34.396, CR: "JOAQUIN AVE UC"},
{PM: 34.478, CR: "ESTUDILLO AVE UC"},
{PM: 34.545, CR: "SAN LEANDRO CREEK"},
{PM: 34.661, CR: "WB ON FR BENEDICT DR"},
{PM: 34.815, CR: "DUTTON AVE UC"},
{PM: 34.881, CR: "EB ON FR SB FOOTHILL BLVD"},
{PM: 34.891, CR: "WB OFF TO NB FOOTHILL BLVD"},
{PM: 35.048, CR: "FOOTHILL BLVD UC"},
{PM: 35.105, CR: "FOOTHILL BLVD"},
{PM: 35.151, CR: "WBON FRNB FOOTHILL BLVD"},
{PM: 35.191, CR: "EBOFF TOSB FOOTHILL BLVD"},
{PM: 35.713, CR: "106TH AVE UC"},
{PM: 35.871, CR: "WB ON FR 106TH AVE"},
{PM: 35.961, CR: "EB OFF TO 106TH AVE"},
{PM: 36.241, CR: "WB OFF TO GOLF LINKS RD"},
{PM: 36.251, CR: "EB ON FR GOLF LINKS RD"},
{PM: 36.343, CR: "GOLF LINKS RD UC"},
{PM: 36.491, CR: "EB OFF TO GOLF LINKS RD"},
{PM: 36.501, CR: "WB ON FR GOLF LINKS RD"},
{PM: 36.764, CR: "OAK KNOLL BLVD OC 3"},
{PM: 37.335, CR: "FONTAINE ST OC"},
{PM: 37.601, CR: "WB OFF TO KELLER AVE"},
{PM: 37.621, CR: "EB ON FR KELLER AVE"},
{PM: 37.797, CR: "KELLER AVE OC"},
{PM: 37.931, CR: "WB ON FR KELLER AVE"},
{PM: 37.971, CR: "EB OFF TO KELLER AVE"},
{PM: 38.309, CR: "EDWARDS AVE UC"},
{PM: 38.330, CR: "JCT ST 13 UNC RD SW"},
{PM: 38.431, CR: "WB ON FR EDWARDS AVE"},
{PM: 38.441, CR: "EB OFF TO EDWARDS AV"},
{PM: 38.731, CR: "EB ON FR KUHNLE AVE"},
{PM: 38.791, CR: "WB OFF TO KUHNLE AVE"},
{PM: 38.915, CR: "KUHNLE AVE UC"},
{PM: 38.981, CR: "EB ON FR SB RTE 13"},
{PM: 39.061, CR: "WB OFF TO NB RTE 13"},
{PM: 39.101, CR: "SEG EB ON FR SB RTE 13"},
{PM: 39.240, CR: "JCT ST 13 NORTH"},
{PM: 39.281, CR: "WB ON FR RUSTING AVE"},
{PM: 39.370, CR: "DAVENPORT AVE UC"},
{PM: 39.451, CR: "MOUNT BLVD/SB 13, WB ON"},
{PM: 39.491, CR: "EB OFF TO OVERDALE AVE"},
{PM: 39.651, CR: "WBOFF TO MACARTHUR BLVD"},
{PM: 39.766, CR: "MAC ARTHUR BLVD"},
{PM: 39.851, CR: "EBON FRSB MACARTHUR BLVD"},
{PM: 39.961, CR: "WBON FRNB MACARTHUR BLVD"},
{PM: 39.910, CR: "MACARTHUR BLVD UC"},
{PM: 39.933, CR: "BIRDSALL AVE POC"},
{PM: 39.951, CR: "EBOFF TOSB MACARTHUR BLVD"},
{PM: 40.078, CR: "HIGH ST UC"},
{PM: 40.191, CR: "WB ON FR HIGH ST"},
{PM: 40.211, CR: "EB OFF TO HIGH ST"},
{PM: 40.393, CR: "38TH AVE OC"},
{PM: 40.647, CR: "35TH AVE OC"},
{PM: 40.771, CR: "EB OFF TO 35TH AVE"},
{PM: 40.781, CR: "WB ON FR 35TH AVE"},
{PM: 40.931, CR: "MAPLE AVE UC"},
{PM: 40.971, CR: "EB ON FR COOLIDGE AV"},
{PM: 41.011, CR: "WB OFF TO COOLIDGE AVE"},
{PM: 41.143, CR: "COOLIDGE AVE UC"},
{PM: 41.328, CR: "BOSTON AVE OC"},
{PM: 41.427, CR: "FRUITVALE AVE UC"},
{PM: 41.671, CR: "EB OFF TO FRUITVALE AVE"},
{PM: 41.731, CR: "WB ON FR FRTVL/MONTNA"},
{PM: 41.750, CR: "SHEFFIELD AVE OC"},
{PM: 41.933, CR: "ARDLEY AVE OC"},
{PM: 42.031, CR: "EBON FR BEAUMONT/BRUCE"},
{PM: 42.051, CR: "WBOFF TO BEAUMONT/BRUCE"},
{PM: 42.070, CR: "14TH AVE UC"},
{PM: 42.184, CR: "BEAUMONT AVE UC "},
{PM: 42.366, CR: "13TH AVE OC"},
{PM: 42.665, CR: "PARK BLVD UC"},
{PM: 42.891, CR: "WB ON FR PARK BLVD"},
{PM: 42.901, CR: "EB OFF TO PARK BLVD"},
{PM: 43.229, CR: "LAKE PARK AVE OC"},
{PM: 43.331, CR: "WB OFF TO LAKESHORE AVE"},
{PM: 43.381, CR: "EB ON FR LAKESHOE AVE"},
{PM: 43.479, CR: "LAKESHORE PARK U"},
{PM: 43.741, CR: "WB OFF TO GRAND AVE"},
{PM: 43.747, CR: "VAN BUREN AVE POC"},
{PM: 43.755, CR: "SANTA CLARA A POC"},
{PM: 43.761, CR: "EB OFF TO GRAND AVE"},
{PM: 43.871, CR: "WBON FR S CLARA/GRAND"},
{PM: 44.061, CR: "EBON FR OAKLAND/MCARTHR"},
{PM: 44.067, CR: "CHETWOOD ST OC"},
{PM: 44.081, CR: "WB OFF TO SCL AVE/OAKLD"},
{PM: 44.197, CR: "SEG EB ON FR OAKLAND AV"},
{PM: 44.198, CR: "SEG EB ON FR MCARTHUR"},
{PM: 44.279, CR: "OAKLAND AVE UC"},
{PM: 44.307, CR: "SEG WB ON FR OAKLAND AV"},
{PM: 44.308, CR: "SEG WB ON FR HARRISON"},
{PM: 44.324, CR: "MACARTHUR BLVD OC"},
{PM: 44.421, CR: "WB ON FR OAKLND/HARISN"},
{PM: 44.433, CR: "SEG EB OFF TO OAKLND AV"},
{PM: 44.434, CR: "SEG EB OFF TO HARRSN ST"},
{PM: 44.471, CR: "SEG OFF 24/580 TO GROVE"},
{PM: 44.472, CR: "SEG OFF 24/580 TO 52ND"},
{PM: 44.514, CR: "BROADWAY RICHMOND BLVD"},
{PM: 44.551, CR: "EBOFF TO OAKLD/HARRISON"},
{PM: 44.721, CR: "SEG OFF 580/24 TO 52ND"},
{PM: 44.732, CR: "SEG OFF TO 52ND/GROVE"},
{PM: 44.791, CR: "SEG EB OFF TO SB BRDWY"},
{PM: 44.792, CR: "SEG EB OFF TO WEBSTER"},
{PM: 44.807, CR: "WEBSTER ST UC"},
{PM: 44.861, CR: "WB OFF TO WB RTE 24"},
{PM: 44.891, CR: "EBON FRWB RTE24/WEST ST"},
{PM: 45.021, CR: "EB ON FR EB RTE 24"},
{PM: 45.026, CR: "TELEGRAPH AVE UC"},
{PM: 45.041, CR: "SEG OFF TO EB 24/52ND"},
{PM: 45.051, CR: "WB OFF TO EB RTE 24"},
{PM: 45.061, CR: "SEG EB ON FR WEST ST"},
{PM: 45.136, CR: "SW CONN RAMP OC"},
{PM: 45.151, CR: "JCT ST 24 N & FAI 980 S"},
{PM: 45.171, CR: "EB OFF TO BRDWY-WBSTR"},
{PM: 45.211, CR: "WB OFF TO WEST ST"},
{PM: 45.232, CR: "NW NE CONN VIAD"},
{PM: 45.246, CR: "GROVE ST UC"},
{PM: 45.371, CR: "EBOFF TO WB RT 980/27TH"},
{PM: 45.390, CR: "WEST ST UC"},
{PM: 45.401, CR: "WB ON FR EB RTE 980"},
{PM: 45.461, CR: "SEG EBON FR MKT TO EB24"},
{PM: 45.462, CR: "SEG EB OFF TO EB RTE 24"},
{PM: 45.560, CR: "MARKET ST UC"},
{PM: 45.571, CR: "WBON FR WB RTE 24/52ND"},
{PM: 45.581, CR: "EB OFF TO EB RTE 24"},
{PM: 45.735, CR: "ADELINE ST UC"},
{PM: 46.009, CR: "JCT WB 580 & 123"},
{PM: 46.131, CR: "EBOFF TO MCARTHR/RTE123"},
{PM: 46.251, CR: "WB OFF TO EB RTE 80"},
{PM: 46.485, CR: "JCT NB 880/WB 580"},
{PM: 46.529, CR: "JCT ST 880"},
{PM: 46.615, CR: "JCT SB 880/WB 580"},
{PM: 46.455, CR: "DUM EB ON FR SB880/EB80"},
{PM: 46.459, CR: "JCT NB 880/EB 580"},
{PM: 46.569, CR: "JCT SB 880/EB 580"},
{PM: 46.945, CR: "EB OFF TO SB RTE 880"},
{PM: 46.946, CR: "S JCT 80 NEAR BAY BR"},
{PM: 47.049, CR: "EB ON FROM MARITIME/W GRAND"},
{PM: 47.171, CR: "BEG MAIN LINE RTE 580"},
{PM: 47.232, CR: "EL CERRITO SEP OH"},
{PM: 47.543, CR: "WB ON FR BUCHANAN ST"},
{PM: 47.558, CR: "EB OFF TO BUCHANAN ST"},
{PM: 48.039, CR: "CERRITO CREEK"}],
                    HWY680: [{PM: 0.064, CR: "SEG NB OFF TO WB SCOTT CREEK"},
{PM: 0.065, CR: "SEG NB OFF TO EB SCOTT CREEK"},
{PM: 0.125, CR: "SCOTT CR RD UC"},
{PM: 0.132, CR: "SCOTT CR RD UC"},
{PM: 0.381, CR: "SB OFF TO SCOTT CR RD"},
{PM: 0.411, CR: "NB ON FR SCOTT CR RD"},
{PM: 0.770, CR: "SOUTH DWR UC RT"},
{PM: 0.790, CR: "SOUTH DWR UC LT"},
{PM: 1.464, CR: "NORTH DWR UC LT"},
{PM: 1.470, CR: "NORTH DWR UC RT"},
{PM: 1.961, CR: "EAST WARREN AVE UC"},
{PM: 1.969, CR: "EAST WARREN AVE UC"},
{PM: 2.121, CR: "NB OFF TO MISSION BLVD/262"},
{PM: 2.201, CR: "SB ON FR MISSION BLVD/262"},
{PM: 2.241, CR: "SEG NB OFF TO NB MISSION BLVD/262"},
{PM: 2.242, CR: "SEG NB OFF TO SB MISSION BLVD/262"},
{PM: 2.271, CR: "SEG SB ON FR SB MISSION BLVD/262"},
{PM: 2.272, CR: "SEG SB ON FR NB MISSION BLVD/262"},
{PM: 2.382, CR: "JCT ST 262 WEST MISSION BLVD"},
{PM: 2.531, CR: "SEG NB ON FR SB MISSION BLVD/262"},
{PM: 2.532, CR: "SEG NB ON FR NB MISSION BLVD/262"},
{PM: 2.601, CR: "SEG SB OFF TO SB MISSION BLVD/262"},
{PM: 2.602, CR: "SEG SB OFF TO NB MISSION BLVD/262"},
{PM: 2.621, CR: "NB ON FR MISSION BLVD/262"},
{PM: 2.741, CR: "SB OFF TO MISSION BLVD/262"},
{PM: 3.348, CR: "GRIMMER AVE UC"},
{PM: 3.831, CR: "NB OFF TO DURHAM RD"},
{PM: 3.851, CR: "SB ON FR DURHAM RD"},
{PM: 3.991, CR: "NB ON FR DURHAM RD"},
{PM: 4.015, CR: "DURHAM RD OC"},
{PM: 4.041, CR: "SB OFF TO DURHAM RD"},
{PM: 4.834, CR: "JCT ST 238 UNC RD NORTH"},
{PM: 5.331, CR: "SB ON FR WASHINGTON BLVD"},
{PM: 5.372, CR: "WASHINGTON BLVD OC"},
{PM: 5.491, CR: "NB OFF TO WASHINGTON BLVD"},
{PM: 5.501, CR: "SB OFF TO WASHINGTON BLVD"},
{PM: 5.601, CR: "NB ON FR WASHINGTON BLVD"},
{PM: 5.672, CR: "PASEO PADRE PARKWAY OC"},
{PM: 5.906, CR: "PALM AVE OC"},
{PM: 6.371, CR: "NB OFF TO MISSION BLVD/238"},
{PM: 6.391, CR: "SB ON FR MISSION BLVD/238"},
{PM: 6.461, CR: "NB ON FR MISSION BLVD/238"},
{PM: 6.379, CR: "ST 680/238 SEPERATION"},
{PM: 6.396, CR: "JCT ST 238 NB"},
{PM: 6.661, CR: "SB OFF TO MISSION/238"},
{PM: 7.041, CR: "NB OFF TO VARGAS RD"},
{PM: 7.191, CR: "NB ON FR VARGAS RD"},
{PM: 7.371, CR: "SB ON FR VARGAS RD"},
{PM: 7.481, CR: "SB OFF TO VARGAS RD"},
{PM: 7.482, CR: "00.028 VARGAS RD UC"},
{PM: 8.151, CR: "NB OFF TO SHERIDAN RD"},
{PM: 8.195, CR: "SB ON FR SHERIDAN RD"},
{PM: 8.312, CR: "SHERIDAN RD OC"},
{PM: 8.684, CR: "NB OFF TO TRUCK INSPECTION STATION"},
{PM: 8.861, CR: "NB ON FR TRUCK INSPECTION STATION"},
{PM: 9.551, CR: "NB OFF TO ANDRADE RD"},
{PM: 9.571, CR: "SB ON FR ANDRADE RD"},
{PM: 9.709, CR: "ANDRADE RD OC"},
{PM: 9.841, CR: "NB ON FR ANDRADE RD"},
{PM: 9.861, CR: "SB OFF TO ANDRADE RD"},
{PM: 10.150, CR: "ALAMEDA CREEK"},
{PM: 10.841, CR: "NB OFF TO CALAVERAS/84"},
{PM: 10.881, CR: "SB ON FR CALAVERAS/84"},
{PM: 10.971, CR: "NB ON FR CALAVERAS/84"},
{PM: 11.028, CR: "CALAVERAS RD UC"},
{PM: 11.042, CR: "JCT ST 84 W"},
{PM: 11.601, CR: "RAMP NOSE LT LNS"},
{PM: 11.621, CR: "SB ON FR SB RTE 84"},
{PM: 11.749, CR: "2 LNS RT CON TO ST 84"},
{PM: 11.758, CR: "SEG SB 680 OFF TO SB 84"},
{PM: 11.761, CR: "NB OFF TO NB RTE 84"},
{PM: 11.811, CR: "SCOTTS CORNER SEP"},
{PM: 11.845, CR: "JCT ST 84 E"},
{PM: 11.981, CR: "SB OFF TO SB RTE 84"},
{PM: 12.021, CR: "NB ON FR SB RTE 84"},
{PM: 12.443, CR: "SUNOL/KOOPMAN UC"},
{PM: 12.611, CR: "NB ON FR SUNOL (KOOPMAN)"},
{PM: 12.711, CR: "SB OFF TO SUNOL(KOOPMAN)"},
{PM: 14.371, CR: "FRAGER RD - FARM UC"},
{PM: 15.044, CR: "HAPPY VALLEY UC"},
{PM: 15.151, CR: "NB OFF TO PLEASANTON/SUNOL RD"},
{PM: 15.251, CR: "SB ON FR PLEASANTON/SUNOL RD"},
{PM: 15.261, CR: "PLEASANTON/SUNOL RD UC"},
{PM: 15.461, CR: "SB OFF TO PLEASANTON/SUNOL RD"},
{PM: 15.481, CR: "NB ON FR PLEASANTON/SUNOL RD"},
{PM: 15.620, CR: "SOUTH PLEASANTON OH"},
{PM: 15.889, CR: "PLEASANTON INDUSTRIAL PARK OH"},
{PM: 15.979, CR: "PLEASANTON INDUSTRIAL PARK UC"},
{PM: 16.551, CR: "NB OFF TO BERNAL AVE"},
{PM: 16.561, CR: "SB ON FR BERNAL AVE"},
{PM: 16.750, CR: "BERNAL AVE UC RL"},
{PM: 16.801, CR: "SB OFF TO BERNAL AVE"},
{PM: 16.991, CR: "NB ON FR BERNAL AVE"},
{PM: 17.188, CR: "ARROYO DE LA LAGUNA BR"},
{PM: 18.396, CR: "WEST LAS POSITAS OC"},
{PM: 19.041, CR: "NB OFF TO STONERIDGE DR"},
{PM: 19.151, CR: "SB ON FR EB STONERIDGE"},
{PM: 19.261, CR: "NB ON FR EB STONERIDGE"},
{PM: 19.300, CR: "STONERIDGE DR OC"},
{PM: 19.351, CR: "SB ON FR WB STONERIDGE"},
{PM: 19.371, CR: "NB ON FR WB STONERIDGE"},
{PM: 19.511, CR: "SB OFF TO STONERIDGE DR"},
{PM: 19.808, CR: "NB OFF TO EB 580/HOPYARD"},
{PM: 19.851, CR: "SB ON FR RTE 580"},
{PM: 19.968, CR: "NB OFF TO WB RTE 580"},
{PM: 20.026, CR: "ST 680 580 SEP"},
{PM: 20.057, CR: "JCT ST FAI 580"},
{PM: 20.153, CR: "SB ON FR BRAY WAY"},
{PM: 20.180, CR: "PLEASANTON/DUBLIN CL"},
{PM: 20.281, CR: "NB ON FROM WB RTE 580"},
{PM: 20.361, CR: "NB ON FR VILLAGE PARKWAY"},
{PM: 20.362, CR: "SB OFF TO WB 580"},
{PM: 20.387, CR: "DUBLIN BLVD UC"},
{PM: 20.428, CR: "SEG SB OFF TO BRAY WAY"},
{PM: 20.429, CR: "SSEG SB OFF TO BRAY/HOPYARD"},
{PM: 20.641, CR: "SB OFF TO BRAY EB 580"},
{PM: 20.727, CR: "AMADOR VALLEY BLVD UC"},
{PM: 21.731, CR: "SB ON FR ALCOSTA BLVD"},
{PM: 21.741, CR: "NB OFF TO ALCOSTA BLVD"},
{PM: 21.879, CR: "END OF COUNTY"}],
                    HWY880: [{PM: 0.000, CR: "JCT ST 237 UNINCORPORATED RD"},
{PM: 0.041, CR: "SB ON FR DIXON RD"},
{PM: 0.051, CR: "NB ON FR DIXON RD"},
{PM: 0.181, CR: "SB OFF TO DIXON RD"},
{PM: 0.256, CR: "SCOTT CREEK BR"},
{PM: 1.610, CR: "SB ON FR GATEWAY BLVD"},
{PM: 1.670, CR: "SB ON FR RTE 262"},
{PM: 1.804, CR: "SEG MISSION TO GATEWAY"},
{PM: 1.805, CR: "SEG SB 262 TO SB 880/GATEWAY"},
{PM: 1.868, CR: "WARM SPRINGS OC"},
{PM: 1.921, CR: "NB OFF TO NB RTE 262"},
{PM: 2.283, CR: "JCT 262/EAST LT LNS RTE"},
{PM: 2.331, CR: "NB OFF TO GATEWAY BLVD"},
{PM: 2.344, CR: "SEG FR LAKEVIEW/WEST WARREN AVE"},
{PM: 2.401, CR: "SEG SB OFF TO WEST WARREN AVE"},
{PM: 2.402, CR: "SEG SB OFF TO NB RTE 262"},
{PM: 2.431, CR: "NB ON FR SB RTE 262"},
{PM: 2.531, CR: "SB OFF TO NB 262/WEST WARREN"},
{PM: 2.773, CR: "ARROYO AGUA CALIENTE"},
{PM: 3.063, CR: "SB ON FR EB FREMONT BLVD"},
{PM: 3.073, CR: "NB OFF TO FREMONT BLVD"},
{PM: 3.244, CR: "NB ON FR EB FREMONT BLVD"},
{PM: 3.266, CR: "FREMONT BLVD OC"},
{PM: 3.289, CR: "SB ON FR WB FREMONT BLVD"},
{PM: 3.432, CR: "SB OFF TO FREMONT BLVD"},
{PM: 3.465, CR: "NB ON FR WB FREMONT BLVD"},
{PM: 3.670, CR: "ARROYO DE LA LAGUNA"},
{PM: 3.741, CR: "NB OFF TO TRUCK SCALES"},
{PM: 3.802, CR: "SB ON FR TRUCK SCALES"},
{PM: 4.000, CR: "TRUCK SCALE FACILITY RL"},
{PM: 4.049, CR: "NB ON FR TRUCK SCALES"},
{PM: 4.221, CR: "SB OFF TO TRUCK SCALES"},
{PM: 4.530, CR: "NB OFF TO AUTO MALL PKWY"},
{PM: 4.553, CR: "SB ON FROM EB AUTO MALL PKWY"},
{PM: 4.697, CR: "NB ON FROM EB AUTO MALL PKWY"},
{PM: 4.712, CR: "DURHAM RD OC"},
{PM: 4.714, CR: "AUTO MALL PARKWAY OC"},
{PM: 4.741, CR: "SB ON FROM WB AUTO MALL PKWY"},
{PM: 4.888, CR: "NB ON FROM WB AUTO MALL PKWY"},
{PM: 4.905, CR: "SB OFF TO AUTO MALL PKWY"},
{PM: 6.018, CR: "NB OFF TO STEVENSON BLVD"},
{PM: 6.075, CR: "SB ON FR EB STEVENSON BLVD"},
{PM: 6.203, CR: "NB ON FR EB STEVENSON BLVD"},
{PM: 6.239, CR: "STEVENSON BLVD OC"},
{PM: 6.279, CR: "SB ON FR WB STEVENSON BLVD"},
{PM: 6.397, CR: "NB ON FR WB STEVENSON BLVD"},
{PM: 6.444, CR: "SB OFF TO STEVENSON BLVD"},
{PM: 7.017, CR: "NB OFF TO MOWRY AVE"},
{PM: 7.032, CR: "SB ON FROM EB MOWRY AVE"},
{PM: 7.157, CR: "NB ON FROM EB MOWRY AVE"},
{PM: 7.189, CR: "MOWRY AVE OC"},
{PM: 7.227, CR: "SB ON FROM WB MOWRY AVE"},
{PM: 7.319, CR: "HETCH HETCHY AQUEDUCT"},
{PM: 7.368, CR: "NB ON FROM WB MOWRY AVE"},
{PM: 7.390, CR: "SB OFF TO MOWRY AVE"},
{PM: 8.249, CR: "CENTRAL AVE OC"},
{PM: 8.537, CR: "EAST NEWARK UP"},
{PM: 8.645, CR: "SB ON FROM EB THORNTON AVE"},
{PM: 8.675, CR: "NB OFF TO THORNTON AVE"},
{PM: 8.827, CR: "NB ON FROM EB THORNTON AVE"},
{PM: 8.842, CR: "SOUTH JCT 84 THORNTON AVE"},
{PM: 8.848, CR: "THORNTON AVE OC"},
{PM: 8.868, CR: "SB ON FROM WB THORNTON AVE"},
{PM: 9.008, CR: "NB ON FROM WB THORNTON AVE"},
{PM: 9.025, CR: "SB OFF TO THORNTON AVE"},
{PM: 10.146, CR: "SB ON FR EB 84"},
{PM: 10.150, CR: "NB OFF TO DECOTO/RTE 84"},
{PM: 10.259, CR: "NB ON FR EB 84"},
{PM: 10.300, CR: "NORTH JCT 84/DECOTO RD"},
{PM: 10.331, CR: "SB ON FR WB DECOTO RD"},
{PM: 10.443, CR: "SB OFF TO DECOTO/RTE 84"},
{PM: 10.457, CR: "NB ON FR WB DECOTO RD"},
{PM: 10.659, CR: "CRANDALL CREEK"},
{PM: 10.929, CR: "PASEO PADRE PKWY OC"},
{PM: 11.311, CR: "NB OFF TO FREMONT BLVD (NORTH)"},
{PM: 11.341, CR: "SB ON FR FREMONT BLVD (NORTH)"},
{PM: 11.404, CR: "FREMONT BLVD OC"},
{PM: 11.575, CR: "FREMONT BLVD OC NO"},
{PM: 11.661, CR: "NB ON FR FREMONT BLVD (NORTH)"},
{PM: 11.671, CR: "SB OFF TO FREMONT BLVD (NORTH)"},
{PM: 11.801, CR: "PATTERSON SLOUGH "},
{PM: 12.784, CR: "ALAMEDA CREEK"},
{PM: 12.851, CR: "NB OFF TO ALVARADO NILES"},
{PM: 12.918, CR: "SB ON FR EB ALVARADO NILES"},
{PM: 13.051, CR: "ALVARADO NILES OC"},
{PM: 13.073, CR: "SB ON FR WB ALVARADO NILES"},
{PM: 13.110, CR: "NB ON FR ALVARADO NILES"},
{PM: 13.235, CR: "SB OFF TO ALVARADO NILES"},
{PM: 13.510, CR: "NB OFF TO WHIPPLE RD"},
{PM: 13.554, CR: "SB ON FR WHIPPLE RD"},
{PM: 13.669, CR: "WHIPPLE RD UC"},
{PM: 13.724, CR: "SB OFF TO WHIPPLE RD"},
{PM: 13.764, CR: "SEG NB ON FR EB WHIPPLE RD"},
{PM: 13.765, CR: "SEG NB ON FR WB WHIPPLE RD"},
{PM: 13.813, CR: "ALQUIRE RD OH"},
{PM: 13.900, CR: "NB ON FR WHIPPLE RD"},
{PM: 14.177, CR: "WARD CREEK BR"},
{PM: 14.524, CR: "SB ON FR INDUSTRIAL PKWY"},
{PM: 14.537, CR: "INDUSTRIAL PKWY OC"},
{PM: 14.633, CR: "NB ON FR INDUSTRIAL PKWY WEST"},
{PM: 14.722, CR: "SB OFF TO INDUSTRIAL PKWY WEST"},
{PM: 15.446, CR: "NB OFF TO TENNYSON RD"},
{PM: 15.463, CR: "SB ON FR TENNYSON RD"},
{PM: 15.515, CR: "SEG NBOFF TO EB TENNYSON RD"},
{PM: 15.516, CR: "SEG NBOFF TO WB TENNYSON RD"},
{PM: 15.548, CR: "SEG SBON FR EB TENNYSON RD"},
{PM: 15.549, CR: "SEG SBON FR WB TENNYSON RD"},
{PM: 15.645, CR: "TENNYSON RD OC"},
{PM: 15.747, CR: "SEG NBON FR WB TENNYSON RD"},
{PM: 15.748, CR: "SEG NBON FR EB TENNYSON RD"},
{PM: 15.773, CR: "SEG SBOFF TOWB TENNYSON RD"},
{PM: 15.774, CR: "SEG SBOFF TOEB TENNYSON RD"},
{PM: 15.807, CR: "NB ON FR TENNYSON RD"},
{PM: 15.846, CR: "SB OFF TO TENNYSON RD"},
{PM: 16.033, CR: "ELDRIDGE AVE POC"},
{PM: 16.414, CR: "NB OFF TO RTE 92 (JACKSON)"},
{PM: 16.430, CR: "SB ONFR RTE 92 (JACKSON)"},
{PM: 16.527, CR: "NB OFF TO WB RTE 92"},
{PM: 16.528, CR: "NB OFF TO EB RTE 92"},
{PM: 16.555, CR: "SB ON FR EB RTE 92"},
{PM: 16.556, CR: "SB ON FR WB RTE 92"},
{PM: 16.696, CR: "JCT ST 92 SEP"},
{PM: 16.825, CR: "SB OFF TO WB RTE 92"},
{PM: 16.826, CR: "SB OFF TO EB RTE 92"},
{PM: 16.845, CR: "NB ON FR EB RTE 92"},
{PM: 16.846, CR: "NB ON FR WB RTE 92"},
{PM: 16.945, CR: "SB OFF TO RTE 92 (JACKSON)"},
{PM: 16.957, CR: "NB ON FR RTE 92 (JACKSON)"},
{PM: 17.349, CR: "SB ON FR WINTON AVE"},
{PM: 17.377, CR: "NB OFF TO WINTON AVE"},
{PM: 17.483, CR: "SEG SB ON FR EB WINTON AVE"},
{PM: 17.484, CR: "SEG SB ON FR WB WINTON AVE"},
{PM: 17.485, CR: "SEG NB OFF TO WB WINTON AVE"},
{PM: 17.486, CR: "SEG NB OFF TO EB WINTON AVE"},
{PM: 17.604, CR: "WINTON AVE OC"},
{PM: 17.723, CR: "SEG NB ON FR EB WINTON AVE"},
{PM: 17.724, CR: "SEG NB ON FR WB WINTON AVE"},
{PM: 17.727, CR: "SEG SB OFF TO WB WINTON AVE"},
{PM: 17.728, CR: "SEG SB OFF TO EB WINTON AVE"},
{PM: 17.815, CR: "SB OFF TO WINTON AVE"},
{PM: 17.825, CR: "NB ON FR WINTON AVE"},
{PM: 18.228, CR: "NB OFF TO A ST"},
{PM: 18.246, CR: "SB ON FR A ST"},
{PM: 18.353, CR: "A ST UC"},
{PM: 18.478, CR: "NB ON FR A ST"},
{PM: 18.482, CR: "SB OFF TO A ST"},
{PM: 19.271, CR: "HACIENDA AVE OC"},
{PM: 19.755, CR: "PASEO GRANDE OC"},
{PM: 19.961, CR: "SB ON FR HESPERIAN BLVD"},
{PM: 20.011, CR: "NB OFF TO HESPERIAN BLVD"},
{PM: 20.106, CR: "SAN LORENZO CR"},
{PM: 20.162, CR: "HESPERIAN BLVD UC"},
{PM: 20.170, CR: "FRONTAGE RD (EMBERS WAY)"},
{PM: 20.253, CR: "DUMMY SB ON FR NB 238"},
{PM: 20.294, CR: "NB OFF TO SB RTE 238"},
{PM: 20.324, CR: "SAN LORENZO"},
{PM: 20.420, CR: "NB ON FR WB LEWELLING BLVD"},
{PM: 20.424, CR: "SB OFF TO LEWELLING BLVD"},
{PM: 20.651, CR: "SB ON FR WASHINGTON AVE"},
{PM: 20.678, CR: "JCT 238 E"},
{PM: 20.686, CR: "NBOFF TO WASHINGTON AVE"},
{PM: 20.818, CR: "WASHINGTON AVE OC"},
{PM: 20.820, CR: "SEG NB ON FR WASHINGTON AVE"},
{PM: 20.821, CR: "SB ON 880/238 FR WASHINGTON AVE"},
{PM: 20.841, CR: "SEG NB OFF TO WASHINGTON AVE"},
{PM: 20.876, CR: "NB ON FR NB 238/WASHINGTON AVE"},
{PM: 20.901, CR: "SEG SB OFF TO WASHINGTON AVE"},
{PM: 20.902, CR: "SEG SB OFF TO SB RTE 238"},
{PM: 20.951, CR: "ORA LOMA DITCH"},
{PM: 21.089, CR: "SB OFF TO 238/WASHINGTON AVE"},
{PM: 21.556, CR: "FLORESTA BLVD OC"},
{PM: 22.419, CR: "FAIRWAY/ALADDIN OC "},
{PM: 22.724, CR: "NB OFF TO EB MARINA BLVD"},
{PM: 22.727, CR: "SB ON FR MARINA BLVD"},
{PM: 22.816, CR: "NB OFF TO WB MARINA BLVD"},
{PM: 22.837, CR: "MARINA BLVD OC"},
{PM: 22.851, CR: "SB OFF TO EB MARINA BLVD"},
{PM: 22.946, CR: "NB ON FR MARINA BLVD"},
{PM: 23.034, CR: "SB OFF TO WB MARINA BLVD"},
{PM: 23.118, CR: "WILLIAMS ST OC"},
{PM: 23.549, CR: "NB OFF TO RTE 112 (DAVIS ST)"},
{PM: 23.598, CR: "NB ON FR EB DAVIS ST"},
{PM: 23.624, CR: "SB ON FR EB DAVIS ST"},
{PM: 23.644, CR: "JCT 112/880 SEP"},
{PM: 23.694, CR: "NB ON FR WB DAVIS ST"},
{PM: 23.709, CR: "SB ON FR WB DAVIS ST"},
{PM: 23.793, CR: "SB OFF TO RTE 112 (DAVIS ST)"},
{PM: 24.182, CR: "SAN LEANDRO CREEK BR OH"},
{PM: 24.584, CR: "NB OFF TO 98TH AVE"},
{PM: 24.680, CR: "SB ON FR EB 98TH AVE"},
{PM: 24.716, CR: "NB ON FR EB 98TH AVE"},
{PM: 24.738, CR: "98TH AVE OC"},
{PM: 24.787, CR: "SB ON FR WB 98TH AVE"},
{PM: 24.899, CR: "NB ON FR WB 98TH AVE"},
{PM: 24.908, CR: "SB OFF TO 98TH AVE"},
{PM: 25.268, CR: "SB ON FR NB HEGENBERGER RD"},
{PM: 25.383, CR: "NB OFF TO EDES/HEGENBERGER RD"},
{PM: 25.471, CR: "SB ON FR SB HEGENBERGER RD"},
{PM: 25.486, CR: "HEGENBERGER RD OC (SOUTH)"},
{PM: 25.497, CR: "HEGENBERGER RD OC (NORTH)"},
{PM: 25.503, CR: "NB ON FR HEGENBERGER/EDES"},
{PM: 25.573, CR: "JCT ST 13 UNINCORPORATED RD"},
{PM: 25.600, CR: "NB ON FR SB HEGENBERGER"},
{PM: 25.678, CR: "SB OFF TO HEGENBERGER"},
{PM: 25.966, CR: "ELMHURST CREEK"},
{PM: 26.081, CR: "NB OFF TO COLLISEUM/66T"},
{PM: 26.154, CR: "NB FRONTAGE RD COL/66TH"},
{PM: 26.331, CR: "SB ON FR OAKPORT-66TH"},
{PM: 26.346, CR: "SEG NB OFF TO 66TH/NB ON"},
{PM: 26.481, CR: "SEG NB OFF TO 66 AVE"},
{PM: 26.482, CR: "SEG NB ON FR COLISEUM"},
{PM: 26.531, CR: "DAMON SLOUGH BR "},
{PM: 26.581, CR: "SEG SB ON FR 66TH AVE"},
{PM: 26.582, CR: "SEG SB ON FR WB 66TH AV"},
{PM: 26.607, CR: "66TH AVE OC BR "},
{PM: 26.701, CR: "SEG NB ON FR WB 66TH AV"},
{PM: 26.702, CR: "SEG NBON FR EB 66TH/COLISEUM"},
{PM: 26.703, CR: "SEG NB ON FR 66TH/COLISEUM"},
{PM: 26.841, CR: "NB ON FR 66TH AV/COLISEUM"},
{PM: 26.891, CR: "SB OFF TO 66TH AVE"},
{PM: 27.229, CR: "EAST CREEK SLOUGH BR"},
{PM: 27.531, CR: "SB ON FR HIGH ST/FRONTAGE"},
{PM: 27.541, CR: "NB OFF TO HIGH ST/FRONTAGE"},
{PM: 27.629, CR: "HIGH STREET OH BR"},
{PM: 27.709, CR: "JCT ST 77"},
{PM: 27.841, CR: "SEG HIGH TO NB 880/77"},
{PM: 27.842, CR: "SEG HIGH ST TO NB RT 77"},
{PM: 27.881, CR: "SEG SB OFF 880/77 TO HIG"},
{PM: 27.882, CR: "SEG TO SB 880/HIGH ST"},
{PM: 27.981, CR: "SEG SB OFF TO HIGH ST"},
{PM: 27.982, CR: "SEG SB OFF TO NB RTE 77"},
{PM: 28.011, CR: "SEG NB ON FR HIGH ST"},
{PM: 28.012, CR: "SEG NB ON FR SB RTE 77"},
{PM: 28.071, CR: "NB ON FR RTE 77/HIGH ST"},
{PM: 28.091, CR: "SB OFF TO HIGH ST/NB 77"},
{PM: 28.241, CR: "FRUITVALE AVE OH"},
{PM: 28.571, CR: "SB OFF TO FRUITVALE AVE"},
{PM: 28.621, CR: "NB OFF TO 29TH AVE"},
{PM: 28.651, CR: "SB ON FR 29TH AVE"},
{PM: 28.687, CR: "29TH AVE OC"},
{PM: 28.831, CR: "NB ON FR LISBON/8TH"},
{PM: 28.881, CR: "SB ON FR 23RD/KENNEDY"},
{PM: 28.931, CR: "NB OFF TO 23RD AVE"},
{PM: 28.934, CR: "23RD AVE OC"},
{PM: 28.983, CR: "23RD AVE OC"},
{PM: 29.101, CR: "NB ON FR EB 23RD AVE"},
{PM: 29.151, CR: "NB ON FR WB 23RD AVE"},
{PM: 29.161, CR: "SB OFF TO KENNEDY"},
{PM: 29.692, CR: "16TH AVE OC"},
{PM: 29.800, CR: "EMBARCADERO CONN"},
{PM: 29.811, CR: "SB OFF TO EMBARCADERO"},
{PM: 30.171, CR: "SB ON FR EMBARCADERO"},
{PM: 30.361, CR: "NB OFF TO EMBARCADERO"},
{PM: 30.375, CR: "5TH AVE OH"},
{PM: 30.941, CR: "NB OFF TO OAK STREET"},
{PM: 30.961, CR: "SB ON FR OAK STREET"},
{PM: 31.068, CR: "OAK-MADISON UC"},
{PM: 31.091, CR: "OAK STREET (BELOW)"},
{PM: 31.162, CR: "MADISON STREET (BELOW)"},
{PM: 31.171, CR: "NB OFF TO BROADWAY"},
{PM: 31.233, CR: "JACKSON STREET (BELOW)"},
{PM: 31.308, CR: "SB ON FR BROADWAY"},
{PM: 31.361, CR: "5TH 6TH ST VIA"},
{PM: 31.376, CR: "JCT NB 260 (HARRISON)"},
{PM: 31.393, CR: "SEG SB OFF TO JACKSON"},
{PM: 31.394, CR: "SEG SB ON FR BROADWAY"},
{PM: 31.420, CR: "BROADWAY CONN"},
{PM: 31.421, CR: "NB ON FR JACKSON ST"},
{PM: 31.431, CR: "SEG NB OFF TO BROADWAY"},
{PM: 31.455, CR: "JCT SB 260 (WEBSTER)"},
{PM: 31.588, CR: "BROADWAY (BELOW)"},
{PM: 31.620, CR: "JEFFERSON ST CONN"},
{PM: 31.663, CR: "WASHINGTON ST (BELOW)"},
{PM: 31.679, CR: "JCT BEG RTE 980"},
{PM: 31.679, CR: "DUMMY SB ON FR WB 980"},
{PM: 31.680, CR: "DUMMY NB OFF TO EB 980"},
{PM: 31.895, CR: "BRIDGE HINGE BR"},
{PM: 32.004, CR: "NB OFF TO MARKET ST"},
{PM: 32.042, CR: "SB ON FR ADELINE ST"},
{PM: 32.283, CR: "SEG SB ON FR ADELINE ST"},
{PM: 32.793, CR: "NB ON FR UNION ST"},
{PM: 32.794, CR: "SB OFF TO UNION ST"},
{PM: 33.268, CR: "NB OFF TO 7TH ST"},
{PM: 33.289, CR: "SB ON FR 7TH ST"},
{PM: 34.081, CR: "EAST BAY VIADUCT"},
{PM: 34.747, CR: "NB ON FR WEST GRAND AVE"},
{PM: 35.082, CR: "JCT 580 EB"},
{PM: 35.128, CR: "JCT 580 WB"},
{PM: 35.400, CR: "JCT 80 EB"},
{PM: 35.619, CR: "EB EAST BAY VIA"},
{PM: 35.797, CR: "NB LANES @EB RTE 80"},
{PM: 34.892, CR: "SB OFF TO WEST GRAND AV"},
{PM: 35.142, CR: "JCT 580 EB"},
{PM: 35.201, CR: "JCT 580 WB"},
{PM: 35.222, CR: "SB OFF TO EB 580"},
{PM: 35.404, CR: "JCT RTE 80 @WB RTE 80"},
{PM: 35.471, CR: "SB LANES @WB RTE 80"},
{PM: 0.009, CR: "PORT OF OAKLAND CONN - R"},
{PM: 0.766, CR: "SEG ON FR MARITIME/W GRAND"},
{PM: 0.820, CR: "NB ON FR MARITIME"},
{PM: 0.926, CR: "NB HOV OFF TO WB 80"},
{PM: 1.084, CR: "NB OFF TO WB 80 COLL"},
{PM: 1.257, CR: "END RIGHT LNS AT WB 80"},
{PM: 0.058, CR: "PORT OF OAKLAND CONN - L"},
{PM: 1.018, CR: "SB OFF MARITIME/WEST GRAND"},
{PM: 1.019, CR: "SEG SB OFF MARITIME/WEST GRAND"}],
                    HWY980: [{PM: 0.009, CR: "JCT 880 BB"},
{PM: 0.038, CR: "WB OFF TO JACKSON ST"},
{PM: 0.190, CR: "JCT LT LNS WITH RTE 880"},
{PM: 0.275, CR: "EB OFF TO 11TH ST"},
{PM: 0.418, CR: "WB ON FR BRUSH @ 11TH"},
{PM: 0.544, CR: "11TH ST OC"},
{PM: 0.562, CR: "EB OFF TO 17TH ST"},
{PM: 0.597, CR: "12TH ST OC"},
{PM: 0.625, CR: "WB ON FR BRUSH @ 17TH"},
{PM: 0.702, CR: "14TH ST OC"},
{PM: 0.791, CR: "EB ON FR CASTRO & 12TH"},
{PM: 0.839, CR: "WB OFF TO 12TH ST"},
{PM: 0.857, CR: "17TH ST OC"},
{PM: 0.904, CR: "18TH ST OC"},
{PM: 1.013, CR: "EB ON FR CASTRO @ 19TH"},
{PM: 1.029, CR: "WB OFF TO BRUSH @ 18TH"},
{PM: 1.112, CR: "SAN PABLO AVE UC/ST 123"},
{PM: 1.328, CR: "27TH ST UC"},
{PM: 1.400, CR: "27TH ST UC"},
{PM: 1.630, CR: "WB ON FR RTE 580"},
{PM: 1.631, CR: "EB OFF TO RTE 580"},
{PM: 1.635, CR: "SEG EB ON FROM 27TH ST"},
{PM: 1.638, CR: "SEG EB FR 27TH ST TO 580"},
{PM: 1.639, CR: "29TH ST UC R/L"},
{PM: 1.639, CR: "SEG WB TO 27TH ST FR 580"},
{PM: 1.647, CR: "SEG WB OFF TO 27TH ST"},
{PM: 1.683, CR: "30TH ST UC R/L"},
{PM: 1.856, CR: "EB ON FR 27TH ST"},
{PM: 1.857, CR: "WB OFF TO 27TH ST"},
{PM: 1.949, CR: "34TH ST OC RT"},
{PM: 1.950, CR: "34TH ST OC LT"},
{PM: 1.967, CR: "NW CONN RAMP RT"},
{PM: 1.986, CR: "WS CONN RAMP LT"},
{PM: 1.995, CR: "NW CONN RAMP LT"},
{PM: 2.009, CR: "WS CONN RAMP RT"},
{PM: 2.036, CR: "JCT 580/24 END RTE"}]
				}]
			}
		},
        CC: {
            Route: {
                Highways: [{
                    HWY4: [{HWY: 004, PM: 0.000, CR: "SAN PABLO AVE"},
{HWY: 004, PM: 0.000, CR: "JCT ROUTE 80"},
{HWY: 004, PM: 0.198, CR: "EB ON FR BAYBERRY & WILLOW"},
{HWY: 004, PM: 0.477, CR: "FR WILLOW & WB 4 TO 80"},
{HWY: 004, PM: 0.478, CR: "WB OFF TO RTE 80"},
{HWY: 004, PM: 0.607, CR: "WB ON FR WILLOW AVE"},
{HWY: 004, PM: 0.707, CR: "WILLOW AVE OC BR"},
{HWY: 004, PM: 0.878, CR: "WB OFF TO WILLOW AVE"},
{HWY: 004, PM: 0.891, CR: "HERCULES CITY LIMIT"},
{HWY: 004, PM: 1.131, CR: "EB OFF TO SYCAMORE AVE"},
{HWY: 004, PM: 1.266, CR: "EB ON FR SYCAMORE AVE"},
{HWY: 004, PM: 1.820, CR: "COLLIER PLANT RD LT"},
{HWY: 004, PM: 1.962, CR: "RODEO CREEK"},
{HWY: 004, PM: 2.450, CR: "LO PRES LT"},
{HWY: 004, PM: 2.870, CR: "YELLOW FREIGHT LT"},
{HWY: 004, PM: 3.310, CR: "FRANKLIN GOLF COURSE RT"},
{HWY: 004, PM: 3.640, CR: "CHRISTIE RD RT"},
{HWY: 004, PM: 3.659, CR: "CHRISTIE UP"},
{HWY: 004, PM: 4.200, CR: "BARRY HILL RD RT"},
{HWY: 004, PM: 4.627, CR: "EB OFF TO CUMMINGS SKY"},
{HWY: 004, PM: 4.835, CR: "WB ON FR CUMMINGS SKWY"},
{HWY: 004, PM: 4.892, CR: "CUMMINGS SKYWAY"},
{HWY: 004, PM: 4.936, CR: "EB ON FR CUMMINGS SKYWAY"},
{HWY: 004, PM: 5.069, CR: "WB OFF TO CUMMINGS SKYWAY"},
{HWY: 004, PM: 5.168, CR: "MC EWEN RD UC"},
{HWY: 004, PM: 5.316, CR: "WB OFF TO MC EWEN RD"},
{HWY: 004, PM: 5.333, CR: "EB ON FR MC EWEN RD"},
{HWY: 004, PM: 6.936, CR: "FRANKLIN EQUIP UC"},
{HWY: 004, PM: 7.271, CR: "FRANKLIN EQUIP AND"},
{HWY: 004, PM: 8.383, CR: "JOHN MUIR EQUESTRIAN"},
{HWY: 004, PM: 8.409, CR: "WB ON FROM ALHAMBRA"},
{HWY: 004, PM: 8.449, CR: "EB OFF TO ALHAMBRA"},
{HWY: 004, PM: 8.549, CR: "ALHAMBRA BLVD UC"},
{HWY: 004, PM: 8.716, CR: "EB ON FROM ALHAMBRA"},
{HWY: 004, PM: 8.718, CR: "WB OFF TO ALHAMBRA"},
{HWY: 004, PM: 8.747, CR: "ALHAMBRA WAY UC"},
{HWY: 004, PM: 8.854, CR: "MUIR ROAD"},
{HWY: 004, PM: 9.029, CR: "EB OFF TO PINE ST"},
{HWY: 004, PM: 9.048, CR: "WB ON FR PINE ST"},
{HWY: 004, PM: 9.185, CR: "PINE ST OC"},
{HWY: 004, PM: 9.313, CR: "WB OFF TO PINE ST"},
{HWY: 004, PM: 9.369, CR: "EB ON FR PINE ST"},
{HWY: 004, PM: 10.175, CR: "WB ON FROM MORELLO AVE"},
{HWY: 004, PM: 10.198, CR: "EB OFF TO MORELLO AVE"},
{HWY: 004, PM: 10.326, CR: "MORELLO AVE UC"},
{HWY: 004, PM: 10.487, CR: "EB ON FR MORELLO AVE"},
{HWY: 004, PM: 10.508, CR: "WB OFF TO MORELLO AVE"},
{HWY: 004, PM: 11.126, CR: "MILANO WAY OC"},
{HWY: 004, PM: 11.665, CR: "EB OFF TO PACHECO"},
{HWY: 004, PM: 12.314, CR: "WB ON FROM PACHECO"},
{HWY: 004, PM: 12.350, CR: "EB ON FROM PACHECO"},
{HWY: 004, PM: 12.361, CR: "WB OFF TO PACHECO"},
{HWY: 004, PM: 12.410, CR: "PACHECO BLVD UC"},
{HWY: 004, PM: 12.505, CR: "WB ON FR SB RTE 680"},
{HWY: 004, PM: 12.532, CR: "EB OFF TO SB 680"},
{HWY: 004, PM: 12.602, CR: "WB OFF TO SB 680"},
{HWY: 004, PM: 12.627, CR: "EB ON FR SB RTE 680"},
{HWY: 004, PM: 12.705, CR: "WB ON FR NB RTE 680"},
{HWY: 004, PM: 12.724, CR: "EB OFF TO NB 680"},
{HWY: 004, PM: 12.790, CR: "WB OFF TO NB 680"},
{HWY: 004, PM: 12.796, CR: "EB ON FR NB RTE 680"},
{HWY: 004, PM: 12.900, CR: "GRAYSON CR"},
{HWY: 004, PM: 13.404, CR: "WALNUT CRK BR RT & LT"},
{HWY: 004, PM: 13.637, CR: "EB OFF TO SOLANO WAY"},
{HWY: 004, PM: 13.649, CR: "SOLANO WAY RT & LT"},
{HWY: 004, PM: 13.706, CR: "WB ON FROM SOLANO WAY"},
{HWY: 004, PM: 13.936, CR: "EB ON FR SOLANO WAY"},
{HWY: 004, PM: 13.940, CR: "WB OFF TO SOLANO WAY"},
{HWY: 004, PM: 13.964, CR: "PERALTA RD UC"},
{HWY: 004, PM: 13.998, CR: "END PERALTA RD UC"},
{HWY: 004, PM: 14.110, CR: "CONCORD CITY LIMITS"},
{HWY: 004, PM: 14.356, CR: "WB ON FR RTE 4"},
{HWY: 004, PM: 14.356, CR: "WB ON FR NB RTE 242"},
{HWY: 004, PM: 14.375, CR: "EB OFF TO SB 242"},
{HWY: 004, PM: 14.451, CR: "EB MUD RD UC"},
{HWY: 004, PM: 14.549, CR: "EB OFF TO PORT CHICAGO HWY"},
{HWY: 004, PM: 14.588, CR: "WB ON FR PORT CHICAGO HWY"},
{HWY: 004, PM: 14.617, CR: "RTE 4 & 242 RT"},
{HWY: 004, PM: 14.770, CR: "EB RTE 242 & 4 PORT CHICGO"},
{HWY: 004, PM: 14.879, CR: "EB ON FR END RTE 242 NB"},
{HWY: 004, PM: 15.133, CR: "SB ON 242 FR PRT CHICGO"},
{HWY: 004, PM: 15.232, CR: "TO 4 WB/242 & SB PORT CHICGO"},
{HWY: 004, PM: 15.265, CR: "OFF TO NB PORT CHICGO FR 4 & 242"},
{HWY: 004, PM: 15.266, CR: "OFF TO SB PORT CHICGO FR 4 & 242"},
{HWY: 004, PM: 15.323, CR: "WB OFF TO RTE 242 SB"},
{HWY: 004, PM: 15.424, CR: "PORT CHICAGO HWY WEST"},
{HWY: 004, PM: 15.603, CR: "EB ON FR SB CHICAGO"},
{HWY: 004, PM: 15.604, CR: "EB ON FR NB CHICAGO"},
{HWY: 004, PM: 15.644, CR: "WB OFF TO PORT CHICAGO"},
{HWY: 004, PM: 15.753, CR: "EB ON FR PORT CHICAGO HWY"},
{HWY: 004, PM: 15.992, CR: "KINNE BLVD LT"},
{HWY: 004, PM: 16.010, CR: "KINNE BLVD RT"},
{HWY: 004, PM: 16.382, CR: "BAY POINT UC"},
{HWY: 004, PM: 16.666, CR: "EB OFF TO WILLOW PASS RD"},
{HWY: 004, PM: 16.688, CR: "WB ON FR WILLOW PASS RD"},
{HWY: 004, PM: 16.834, CR: "WILLOW PASS RD UC"},
{HWY: 004, PM: 17.181, CR: "EB ON FR WILLOW PASS RD"},
{HWY: 004, PM: 17.183, CR: "WB OFF TO WILLOW PASS RD"},
{HWY: 004, PM: 18.565, CR: "EB OFF BAY PT & WILLOW PAS"},
{HWY: 004, PM: 18.571, CR: "WB ON SB BAY PT & WLLOW PASS"},
{HWY: 004, PM: 18.727, CR: "EB ON SB BAY PT & WLLOW PASS"},
{HWY: 004, PM: 18.757, CR: "WILLOW PASS UC LT & RT"},
{HWY: 004, PM: 18.810, CR: "WB ON NB BAY PT WLLOW PASS"},
{HWY: 004, PM: 18.964, CR: "EB ON NB BAY PT WLLOW PASS"},
{HWY: 004, PM: 19.001, CR: "WB OFF BAY PT WILLOW PASS"},
{HWY: 004, PM: 19.877, CR: "EB OFF TO SB BAILEY RD"},
{HWY: 004, PM: 19.950, CR: "WB ON FR BAILEY RD"},
{HWY: 004, PM: 20.066, CR: "WB OFF TO SB BAILEY RD"},
{HWY: 004, PM: 20.165, CR: "EB OFF TO NB BAILEY RD"},
{HWY: 004, PM: 20.278, CR: "WB OFF TO NB BAILEY RD"},
{HWY: 004, PM: 20.294, CR: "EB ON FR BAILEY RD"},
{HWY: 004, PM: 20.318, CR: "CONTRA COSTA CANAL LT & RT"},
{HWY: 004, PM: 22.824, CR: "WB ON FROM RAILROAD AVE"},
{HWY: 004, PM: 22.877, CR: "EB OFF TO RAILROAD AVE"},
{HWY: 004, PM: 23.049, CR: "RAILROAD AVE OC"},
{HWY: 004, PM: 23.161, CR: "EB ON FROM RAILROAD AVE"},
{HWY: 004, PM: 23.420, CR: "HARBOR AVE OC"},
{HWY: 004, PM: 23.644, CR: "WB OFF TO CALIFORNIA AV"},
{HWY: 004, PM: 24.107, CR: "EB OFF TO LOVERIDGE RD"},
{HWY: 004, PM: 24.114, CR: "WB ON FR LOVERIDGE RD"},
{HWY: 004, PM: 24.203, CR: "EB ON FR SB LOVERIDGE RD"},
{HWY: 004, PM: 24.234, CR: "WB OFF TO LOVERIDGE RD"},
{HWY: 004, PM: 24.321, CR: "LOVERIDGE RD OC"},
{HWY: 004, PM: 24.339, CR: "CAMP STONEMAN"},
{HWY: 004, PM: 24.402, CR: "EB ON FR NB LOVERIDGE RD"},
{HWY: 004, PM: 24.969, CR: "UTILITIES UC"},
{HWY: 004, PM: 24.999, CR: "STANDARD OIL RD UC"},
{HWY: 004, PM: 25.818, CR: "WB ON FROM SOMERSVILLE"},
{HWY: 004, PM: 25.847, CR: "EB OFF TO SB SOMMERSVILLE RD"},
{HWY: 004, PM: 25.987, CR: "WB OFF TO SOMERSVILLE"},
{HWY: 004, PM: 26.007, CR: "SOMERSVILLE RD UC"},
{HWY: 004, PM: 26.015, CR: "EB OFF TO SOMERSVILLE"},
{HWY: 004, PM: 26.189, CR: "EB ON FROM SOMERSVILLE"},
{HWY: 004, PM: 26.801, CR: "EB OFF TO L ST & LOMA BLVD"},
{HWY: 004, PM: 26.810, CR: "WB ON FR L ST & LOMA BLVD"},
{HWY: 004, PM: 26.939, CR: "CONTRA LOMA UC RT & LT"},
{HWY: 004, PM: 27.111, CR: "EB OFF TO H ST & MINTA LN"},
{HWY: 004, PM: 27.132, CR: "WB ON FR H ST & MINTA LN"},
{HWY: 004, PM: 27.294, CR: "G ST OC"},
{HWY: 004, PM: 27.651, CR: "EB OFF TO A ST LONETREE"},
{HWY: 004, PM: 27.662, CR: "WB ON FR A ST/LONETREE"},
{HWY: 004, PM: 27.790, CR: "A ST UC"},
{HWY: 004, PM: 27.938, CR: "EB ON FR A ST & LONETREE"},
{HWY: 004, PM: 27.949, CR: "WB OFF TO A ST & LONETREE"},
{HWY: 004, PM: 28.062, CR: "ROOSEVELT LN"},
{HWY: 004, PM: 28.230, CR: "CAVALLO RD UC"},
{HWY: 004, PM: 28.751, CR: "EB OFF TO HILLCREST AVE"},
{HWY: 004, PM: 28.759, CR: "WB ON FROM HILLCREST AVE"},
{HWY: 004, PM: 28.940, CR: "HILLCREST AVE OC"},
{HWY: 004, PM: 29.094, CR: "EB ON FR HILLCREST AVE"},
{HWY: 004, PM: 29.104, CR: "WB OFF TO HILLCREST AVE"},
{HWY: 004, PM: 30.517, CR: "NEWLOVE LT"},
{HWY: 004, PM: 30.613, CR: "NEWLOVE RT"},
{HWY: 004, PM: 31.011, CR: "OAKLEY RD OC"},
{HWY: 004, PM: 31.332, CR: "WB ON FR RTE 4 & VICTORY HWY"},
{HWY: 004, PM: 31.335, CR: "EB OFF TO RTE 4 VICTORY HWY"},
{HWY: 004, PM: 31.506, CR: "VICTORY HWY LT"},
{HWY: 004, PM: 31.508, CR: "VICTORY HWY RT"},
{HWY: 004, PM: 31.514, CR: "EB ON FR RTE 4 VICTORY HWY"},
{HWY: 004, PM: 31.130, CR: "JCT 160 CONN"},
{HWY: 004, PM: 31.290, CR: "BRIDGEHEAD & NEROLY RD"},
{HWY: 004, PM: 31.291, CR: "BRIDGEHEAD AVE"},
{HWY: 004, PM: 31.800, CR: "LIVE OAK AVE RT"},
{HWY: 004, PM: 32.300, CR: "BIG BREAK RD LT"},
{HWY: 004, PM: 32.460, CR: "CAROL LANE LT"},
{HWY: 004, PM: 32.540, CR: "EAGLE MOBILE PARK RT"},
{HWY: 004, PM: 32.761, CR: "OAKLEY RD RT"},
{HWY: 004, PM: 32.761, CR: "CHARLES WAY & OAKLEY RD"},
{HWY: 004, PM: 32.960, CR: "BROCK LANE LT"},
{HWY: 004, PM: 33.150, CR: "TEAKWOOD DR"},
{HWY: 004, PM: 33.390, CR: "GARDENIA AVE RT"},
{HWY: 004, PM: 33.552, CR: "VINTAGE PARKWAY LT"},
{HWY: 004, PM: 33.601, CR: "SHOPPING CENTER LT"},
{HWY: 004, PM: 33.700, CR: "NORCROSS LANE RT"},
{HWY: 004, PM: 33.730, CR: "OAKLEY"},
{HWY: 004, PM: 33.750, CR: "HALL ST RT"},
{HWY: 004, PM: 33.820, CR: "OAKLEY OHARA RD"},
{HWY: 004, PM: 33.820, CR: "O'HARA AVE RT"},
{HWY: 004, PM: 33.880, CR: "2ND ST RT"},
{HWY: 004, PM: 33.950, CR: "3RD ST RT"},
{HWY: 004, PM: 34.020, CR: "4TH ST RT"},
{HWY: 004, PM: 34.090, CR: "5TH ST RT"},
{HWY: 004, PM: 34.190, CR: "DEL ANTICA AVE RT"},
{HWY: 004, PM: 34.230, CR: "7TH ST RT"},
{HWY: 004, PM: 34.302, CR: "O'NEIL COURT RT"},
{HWY: 004, PM: 34.381, CR: "ROSE AVE RT"},
{HWY: 004, PM: 34.915, CR: "CYPRESS ROAD"},
{HWY: 004, PM: 35.102, CR: "ALMOND TREE LN RT"},
{HWY: 004, PM: 35.210, CR: "BERNARD RD LT"},
{HWY: 004, PM: 35.550, CR: "LAUREL RD"},
{HWY: 004, PM: 36.000, CR: "RAYE AVE LT"},
{HWY: 004, PM: 36.060, CR: "MALICOAT AVE LT"},
{HWY: 004, PM: 36.120, CR: "DOUGLAS RD LT"},
{HWY: 004, PM: 36.220, CR: "HILL AVE LT"},
{HWY: 004, PM: 36.270, CR: "BOLTON RD"},
{HWY: 004, PM: 36.430, CR: "BROWNSTONE RD RT"},
{HWY: 004, PM: 36.471, CR: "MONTE LINDA LT"},
{HWY: 004, PM: 36.580, CR: "DELTA RD LT"},
{HWY: 004, PM: 36.890, CR: "SIMS RD LT"},
{HWY: 004, PM: 37.070, CR: "LONE TREE WAY"},
{HWY: 004, PM: 37.165, CR: "BEVERLY PLACE LT"},
{HWY: 004, PM: 37.180, CR: "SUNRISE RD RT"},
{HWY: 004, PM: 37.230, CR: "HANSON LANE LT"},
{HWY: 004, PM: 37.270, CR: "GREGORY LANE RT"},
{HWY: 004, PM: 37.415, CR: "HOMECOMING WAY LT"},
{HWY: 004, PM: 37.580, CR: "GRANT ST"},
{HWY: 004, PM: 37.580, CR: "GRANT ST RT"},
{HWY: 004, PM: 37.670, CR: "MARSH CREEK"},
{HWY: 004, PM: 37.710, CR: "SUNSET RD LT"},
{HWY: 004, PM: 37.801, CR: "HAVENWOOD COURT AVE"},
{HWY: 004, PM: 37.951, CR: "APPLEWOOD COURT COMMONS"},
{HWY: 004, PM: 38.063, CR: "SANDCREEK RD RT"},
{HWY: 004, PM: 38.275, CR: "NANCY ST LT"},
{HWY: 004, PM: 38.338, CR: "SHIRLEY ST LT"},
{HWY: 004, PM: 38.490, CR: "VILLAGE DR LT"},
{HWY: 004, PM: 38.540, CR: "BRODERICK DR RT"},
{HWY: 004, PM: 38.580, CR: "CENTRAL RT & SYCAMORE LT"},
{HWY: 004, PM: 38.770, CR: "SPRUCE ST LT"},
{HWY: 004, PM: 38.810, CR: "SECOND ST LT"},
{HWY: 004, PM: 38.960, CR: "SPRUCE ST & RAILROAD AVE"},
{HWY: 004, PM: 39.050, CR: "PINE ST LT"},
{HWY: 004, PM: 39.150, CR: "DAINTY AVE"},
{HWY: 004, PM: 39.260, CR: "RAILROAD & OAK ST"},
{HWY: 004, PM: 39.320, CR: "CHESTNUT ST LT"},
{HWY: 004, PM: 39.420, CR: "BIRCH ST LT"},
{HWY: 004, PM: 39.510, CR: "ELM ST LT"},
{HWY: 004, PM: 39.530, CR: "PEACH TREE COURT LT"},
{HWY: 004, PM: 39.600, CR: "FIR ST LT"},
{HWY: 004, PM: 39.710, CR: "BALFOUR RD"},
{HWY: 004, PM: 39.742, CR: "BRENTWOOD"},
{HWY: 004, PM: 39.888, CR: "HARVEST PARK DRIVE"},
{HWY: 004, PM: 40.215, CR: "GUTHRIE LANE"},
{HWY: 004, PM: 40.390, CR: "WATER DIST CANAL RD"},
{HWY: 004, PM: 40.540, CR: "JCT RTE 84 UC RD SOUTH"},
{HWY: 004, PM: 40.923, CR: "SELLERS AVE LT"},
{HWY: 004, PM: 40.923, CR: "SELLERS AVE"},
{HWY: 004, PM: 40.927, CR: "SELLERS AVE RT"},
{HWY: 004, PM: 41.540, CR: "JCT RTE 239 UNC RD S"},
{HWY: 004, PM: 43.970, CR: "MARSH CREEK RD"},
{HWY: 004, PM: 44.367, CR: "JCT BYRON HWY"},
{HWY: 004, PM: 45.150, CR: "PORTHOLE DR LT"},
{HWY: 004, PM: 45.330, CR: "BIXLER RD"},
{HWY: 004, PM: 45.562, CR: "KELLOG CREEK"},
{HWY: 004, PM: 45.770, CR: "NEWPORT DR LT"},
{HWY: 004, PM: 45.842, CR: "KENDALL CR"},
{HWY: 004, PM: 46.460, CR: "DISCOVERY BAY LT"},
{HWY: 004, PM: 46.630, CR: "BEGIN LEVEE ROAD"},
{HWY: 004, PM: 48.342, CR: "OLD RIVER BR"},
{HWY: 004, PM: 48.392, CR: "END OF COUNTY"}],
                    HWY24: [],
                    HWY80: [{PM: 0.137, CR: "WB ON FROM CENTRAL AVE"},
                    {PM: 0.216, CR: "CENTRAL AVE UC"},
                    {PM: 0.349, CR: "EB ON FROM CENTRAL AVE"},
                    {PM: 0.390, CR: "WB OFF TO CENTRAL AVE"},
                    {PM: 0.495, CR: "SACTO AVE PED OC"},
                    {PM: 0.796, CR: "EB OFF TO CARLSON BLVD"},
                    {PM: 0.827, CR: "WB ON FROM CARLSON BLVD"},
                    {PM: 1.000, CR: "CARLSON BLVD UC 28-123"},
                    {PM: 1.125, CR: "EB ON FROM CARLSON BLVD"},
                    {PM: 1.187, CR: "WB OFF TO CARLSON BLVD"},
                    {PM: 1.528, CR: "EB OFF TO POTRERO AVE"},
                    {PM: 1.542, CR: "WB ON FROM POTRERO AVE"},
                    {PM: 1.671, CR: "POTRERO AVE UC"},
                    {PM: 1.993, CR: "EB ON FR EB CUTTING BV"},
                    {PM: 2.040, CR: "CUTTING BLVD"},
                    {PM: 2.058, CR: "JCT 123, 80/123"},
                    {PM: 2.140, CR: "EB ON FR WB CUTTING BV"},
                    {PM: 2.150, CR: "WB OFF TO CUTTING BLVD"},
                    {PM: 2.191, CR: "HOV WB OFF TO CUTTING BLVD"},
                    {PM: 2.210, CR: "HOV EB ON FR CUTTING BLVD"},
                    {PM: 2.505, CR: "OHIO ST BART UC"},
                    {PM: 2.527, CR: "EB OFF TO WB MCDONALD"},
                    {PM: 2.619, CR: "MACDONALD AVE UC "},
                    {PM: 2.716, CR: "WB ON FROM BARRETT AVE."},
                    {PM: 2.752, CR: "EB OFF TO SAN PABLO AVE."},
                    {PM: 2.822, CR: "BARRETT AVE UC "},
                    {PM: 2.961, CR: "SAN PABLO AVE UC "},
                    {PM: 3.058, CR: "EB ON FROM SAN PABLO AVE."},
                    {PM: 3.071, CR: "WB OFF TO SAN PABLO"},
                    {PM: 3.072, CR: "WB OFF TO BARRETT"},
                    {PM: 3.154, CR: "WB OFF TO S.PABLO/BARRETT"},
                    {PM: 3.286, CR: "EB OFF TO AMADOR/SOLANO"},
                    {PM: 3.331, CR: "WB ON FR SOLANO AVE"},
                    {PM: 3.411, CR: "SOLANO AVE OC "},
                    {PM: 3.795, CR: "MCBRYDE AVE OC"},
                    {PM: 3.928, CR: "WB OFF TO MC BRYDE AVE"},
                    {PM: 4.182, CR: "EB OFF TO SAN PABLO DAM"},
                    {PM: 4.224, CR: "WB ON FR SAN PABLO DAM"},
                    {PM: 4.341, CR: "SAN PABLO DAM ROAD OC"},
                    {PM: 4.477, CR: "WB OFF TO SAN PABLO DAM"},
                    {PM: 4.583, CR: "EB ON FR SAN PABLO DAM"},
                    {PM: 4.747, CR: "WB ON FR EL PORTAL DR"},
                    {PM: 4.810, CR: "SAN PABLO CR"},
                    {PM: 5.148, CR: "EB OFF TO EL PORTAL DR"},
                    {PM: 5.246, CR: "EL PORTAL DR UC"},
                    {PM: 5.442, CR: "EB ON FR EL PORTAL DR"},
                    {PM: 5.449, CR: "WB OFF TO EL PORTAL DR"},
                    {PM: 5.768, CR: "EB OFF TO HILLTOP DR"},
                    {PM: 5.824, CR: "WB ON FR EB HILLTOP DR"},
                    {PM: 5.950, CR: "EB ON FR EB HILLTOP DR"},
                    {PM: 5.983, CR: "HILLTOP DR OC"},
                    {PM: 6.022, CR: "WB ON FR WB HILLTOP DR"},
                    {PM: 6.143, CR: "WB OFF TO HILLTOP DR"},
                    {PM: 6.147, CR: "EB ON FR WB HILLTOP DR"},
                    {PM: 6.494, CR: "WB HOV ON FR RICHMOND PKWY"},
                    {PM: 6.568, CR: "EB HOV OFF TO RICHMOND PKWY"},
                    {PM: 6.570, CR: "EB OFF TO RICHMOND PKWY"},
                    {PM: 6.690, CR: "WB ON FR RICHMOND PKWY"},
                    {PM: 6.730, CR: "EB ON FR EB RICHMOND"},
                    {PM: 6.730, CR: "EB ON FR SB RICHMOND PKWY"},
                    {PM: 6.744, CR: "RICHMOND PKWY OC"},
                    {PM: 6.856, CR: "WB OFF TO RICHMOND PKWY"},
                    {PM: 6.856, CR: "WB OFF TO RICHMOND PKWY"},
                    {PM: 6.975, CR: "EB ON FR WB RICHMOND"},
                    {PM: 6.975, CR: "EB ON FR RICHMOND PKWY"},
                    {PM: 7.396, CR: "EB OFF TO APPIAN WAY"},
                    {PM: 7.453, CR: "WB ON FR APPIAN WAY"},
                    {PM: 7.574, CR: "EB ON FR SB APPIAN WAY"},
                    {PM: 7.597, CR: "APPIAN WAY OC"},
                    {PM: 7.733, CR: "EB ON FR NB APPIAN WAY"},
                    {PM: 7.780, CR: "WB OFF TO APPIAN WAY"},
                    {PM: 8.323, CR: "EB OFF TO PINOLE VLY RD"},
                    {PM: 8.397, CR: "WB ON FR PINOLE VLY RD"},
                    {PM: 8.508, CR: "PINOLE VAL UC"},
                    {PM: 9.573, CR: "WB ON FR RTE 4"},
                    {PM: 9.712, CR: "HERCULES OH"},
                    {PM: 9.754, CR: "SYCAMORE AVE"},
                    {PM: 9.816, CR: "BAYBERRY AVE"},
                    {PM: 9.950, CR: "EB OFF TO EB RTE 4/BAYBERRY"},
                    {PM: 9.983, CR: "WB ON FR EB RTE 4"},
                    {PM: 9.984, CR: "WB ON FR WB RTE 4"},
                    {PM: 10.017, CR: "80/ SEP,"},
                    {PM: 10.043, CR: "WB/EB ON FR EB RTE 4"},
                    {PM: 10.059, CR: "JCT ST 4 E"},
                    {PM: 10.134, CR: "EB ON FR EB RTE 4"},
                    {PM: 10.135, CR: "EB ON FR WB RTE 4"},
                    {PM: 10.249, CR: "EB OFF TO BAYBERRY/WILLOW"},
                    {PM: 10.250, CR: "EB OFF TO EB RTE 4"},
                    {PM: 10.285, CR: "WB OFF TO WB RTE 4"},
                    {PM: 10.305, CR: "EB ON FR RTE 4"},
                    {PM: 10.537, CR: "WB ON FR WILLOW AVE"},
                    {PM: 10.685, CR: "WILLOW AVE UC"},
                    {PM: 10.700, CR: "EB OFF TO WILLOW AVE"},
                    {PM: 10.867, CR: "EB ON FR WILLOW AVE"},
                    {PM: 10.878, CR: "WB OFF TO WILLOW AVE"},
                    {PM: 11.336, CR: "CALIFORNIA ST OC"},
                    {PM: 11.697, CR: "REFINERY RD"},
                    {PM: 12.131, CR: "OLEUM REFINERY RD NO 8"},
                    {PM: 12.535, CR: "WB ON FR CUMMINGS SKYWY"},
                    {PM: 12.565, CR: "EB OFF TO CUMMINGS SKYW"},
                    {PM: 12.753, CR: "CUMMINGS SKWY OC"},
                    {PM: 12.865, CR: "WB OFF TO CUMMINGS SKYW"},
                    {PM: 12.986, CR: "EB ON FR CUMMINGS SKYWY"},
                    {PM: 13.476, CR: "WB ON FR CROCKETT"},
                    {PM: 13.480, CR: "EB OFF TO CROCKETT"},
                    {PM: 13.489, CR: "CARQUINEZ STRAIT BOH"},
                    {PM: 13.627, CR: "WB-EB OFF TO CROCKET"},
                    {PM: 13.707, CR: "EB ON FR CROCKETT"},
                    {PM: 13.760, CR: "WB OFF TO CROCKETT"},
                    {PM: 13.832, CR: "BEG STEEL TRUSS"},
                    {PM: 14.139, CR: "END OF CO, CENTER OF CARQUINEZ BRIDGE"}],
                    HWY123: [],
                    HWY160: [],
                    HWY242: [],
                    HWY580: [{PM: 0.000, CR: "CO LINE ON BR"},
{PM: 0.086, CR: "WB OFF TO CENTRAL AVE"},
{PM: 0.116, CR: "EB ON FR CENTRAL AVE"},
{PM: 0.236, CR: "CENTRAL AVE OC"},
{PM: 0.276, CR: "EB OFF TO CENTRAL AVE"},
{PM: 0.360, CR: "WB ON FR CENTRAL AVE"},
{PM: 1.000, CR: "WB OFF TO BAYVIEW AVE"},
{PM: 1.174, CR: "STEGE DRAIN"},
{PM: 1.210, CR: "EB ON FR BAYVIEW/51ST"},
{PM: 1.214, CR: "BAYVIEW AVE OC"},
{PM: 1.360, CR: "EB OFF TO BAYVIEW/51ST"},
{PM: 1.420, CR: "WB ON FR BAYVIEW AVE"},
{PM: 2.002, CR: "MEEKER AVE UP S"},
{PM: 2.058, CR: "MEEKER AVE UP N"},
{PM: 2.087, CR: "ERLANDSON ST OC"},
{PM: 2.108, CR: "EB ON FR ERLANDSON ST"},
{PM: 2.115, CR: "WB OFF TO ERLANDSON ST"},
{PM: 2.266, CR: "EB OFF TO ERLANDSON ST"},
{PM: 2.296, CR: "WB ON FR ERLANDSON ST"},
{PM: 2.728, CR: "WB OFF TO SOUTH 23RD ST"},
{PM: 2.740, CR: "EB ON FR NB SOUTH 23RD ST"},
{PM: 2.850, CR: "WB ON FR NB SOUTH 23RD ST"},
{PM: 2.887, CR: "SOUTH 23RD ST OC"},
{PM: 2.930, CR: "EB ON FR SB SOUTH 23RD ST"},
{PM: 3.050, CR: "WB ON FR SB SOUTH 23RD ST"},
{PM: 3.071, CR: "EB OFF TO SOUTH 23RD ST"},
{PM: 3.346, CR: "MARINA WAY OC"},
{PM: 3.400, CR: "WB OFF TO NB HARBOUR WY"},
{PM: 3.487, CR: "EB ON FR HARBOUR WAY"},
{PM: 3.600, CR: "HARBOUR WAY OC"},
{PM: 3.620, CR: "EB ON FR SB HARBOUR WAY"},
{PM: 3.630, CR: "WB OFF TO CUTTING BLVD"},
{PM: 3.789, CR: "CUTTING BLVD OC"},
{PM: 3.870, CR: "WB ON FR WB CUTTING BLVD"},
{PM: 4.000, CR: "EB OFF TO CUTTING BLVD"},
{PM: 4.089, CR: "SOUTH FIRST ST OH"},
{PM: 4.482, CR: "WB OFF TO CANAL BLVD"},
{PM: 4.504, CR: "EB ON FR CANAL BLVD"},
{PM: 4.643, CR: "CANAL BLVD UC"},
{PM: 4.671, CR: "WB OFF TO CASTRO ST"},
{PM: 4.764, CR: "SEG WB ON FR CANAL BLVD"},
{PM: 4.765, CR: "SEG WB OFF TO CASTRO ST"},
{PM: 4.775, CR: "SEG EB OFF TO CANAL BLVD"},
{PM: 4.776, CR: "SEG EB ON FR CASTRO ST"},
{PM: 4.812, CR: "RAILROAD AVE OH R/L"},
{PM: 4.898, CR: "EB OFF TO CANAL BLVD"},
{PM: 4.980, CR: "SEG WB ON FR CANAL BLVD"},
{PM: 4.981, CR: "SEG WB OFF TO CASTRO ST"},
{PM: 5.111, CR: "CASTRO ST UC R/L"},
{PM: 5.128, CR: "WB ON FR CASTRO ST"},
{PM: 5.135, CR: "SEG CASTRO TO MARINE RT"},
{PM: 5.390, CR: "EB ON FR CASTRO & MARINE"},
{PM: 5.428, CR: "MARINE ST UC"},
{PM: 5.560, CR: "EB OFF TO MARINE ST"},
{PM: 5.799, CR: "SCOFIELD AVE UC"},
{PM: 5.826, CR: "SCOFIELD AVE UC"},
{PM: 5.847, CR: "EB ON FR WESTERN DRIVE"},
{PM: 6.000, CR: "WB OFF TO WESTERN DRIVE"},
{PM: 6.007, CR: "WESTERN DR UC R"},
{PM: 6.098, CR: "WB ON FR WESTERN DRIVE"},
{PM: 6.125, CR: "TOLL PLAZA"},
{PM: 6.221, CR: "RICHMOND/SAN RAFAEL BRIDGE"}],
                    HWY680: [{PM: 0.010, CR: "ALCOSTA BLVD OC"},
{PM: 0.167, CR: "NB ON FR ALCOSTA BLVD"},
{PM: 0.224, CR: "SB OFF TO ALCOSTA BLVD"},
{PM: 1.090, CR: "PINE VALLEY UC"},
{PM: 1.890, CR: "MONTEVIDEO RD UC"},
{PM: 2.336, CR: "CHP ENF AREA IN MEDIAN"},
{PM: 2.670, CR: "NB OFF TO BOLLINGER CANYON"},
{PM: 2.740, CR: "SB ON FR EB BOLLINGER CANYON"},
{PM: 2.830, CR: "NB ON FR EB BOLLINGER CANYON"},
{PM: 2.885, CR: "BOLLINGER CANYON RD OC"},
{PM: 2.940, CR: "SB ON FR WB BOLLINGER CANYON"},
{PM: 3.040, CR: "NB ON FR WB BOLLINGER CANYON"},
{PM: 3.100, CR: "SB OFF TO BOLLINGER CANYON"},
{PM: 3.765, CR: "NORRIS CANYON OC"},
{PM: 3.913, CR: "SB ON FR EB CROW  CANYON RD"},
{PM: 3.991, CR: "NB OFF TO CROW CANYON RD"},
{PM: 4.111, CR: "SB ON FR WB CROW  CANYON RD"},
{PM: 4.182, CR: "CROW CANYON OC"},
{PM: 4.241, CR: "NB ON FR EB CROW  CANYON RD"},
{PM: 4.400, CR: "DANVILLE CITY LIMIT"},
{PM: 4.400, CR: "SB OFF TO CROW  CANYON RD"},
{PM: 4.436, CR: "NB ON FR WB CROW  CANYON RD"},
{PM: 4.464, CR: "SAN RAMON CREEK"},
{PM: 5.328, CR: "GREENBROOK DR OC"},
{PM: 6.508, CR: "NB OFF TO SYCAMORE VALLEY RD"},
{PM: 6.636, CR: "SB ON FR SYCAMORE VALLEY RD"},
{PM: 6.764, CR: "SYCAMORE VALLEY ROAD"},
{PM: 6.857, CR: "SEG SB OFF TO EB SYCAMORE VALLEY RD"},
{PM: 6.858, CR: "SEG SB OFF TO WB SYCAMORE VALLEY RD"},
{PM: 6.913, CR: "NB ON FR SYCAMORE VALLEY RD"},
{PM: 6.970, CR: "SB OFF TO SYCAMORE VALLEY RD"},
{PM: 7.022, CR: "LAUREL DR UC"},
{PM: 7.387, CR: "NB OFF TO DIABLO RD"},
{PM: 7.427, CR: "SAN RAMON CREEK"},
{PM: 7.428, CR: "SB ON FROM DIABLO RD"},
{PM: 7.520, CR: "NB ON FR EB DIABLO RD"},
{PM: 7.553, CR: "DIABLO RD UC"},
{PM: 7.719, CR: "NB ON FR WB DIABLO RD"},
{PM: 7.729, CR: "SB OFF TO DIABLO RD"},
{PM: 8.050, CR: "NB OFF TO EL CERRO BLVD"},
{PM: 8.060, CR: "SB ON FRM EL CERRO BLVD"},
{PM: 8.175, CR: "EL CERRO BLVD UC"},
{PM: 8.319, CR: "NB ON FRM EL CERRO BLVD"},
{PM: 8.353, CR: "SB OFF TO EL CERRO BLVD"},
{PM: 8.751, CR: "EL PINTADO RD UC"},
{PM: 8.844, CR: "NB ON FRM EL PINTADO RD"},
{PM: 8.881, CR: "SB OFF TO EL PINTADO RD"},
{PM: 9.251, CR: "LA GONDA WAY UC"},
{PM: 10.208, CR: "SB ON FRM STONE VALLEY RD"},
{PM: 10.211, CR: "NB OFF TO EB STONE VALLEY RD"},
{PM: 10.371, CR: "STONE VALLEY UC"},
{PM: 10.376, CR: "SB OFF TO EB STONE VALLEY RD"},
{PM: 10.403, CR: "NB OFF TO WB STONE VALLEY RD"},
{PM: 10.552, CR: "NB ON FRM STONE VALLEY RD"},
{PM: 10.566, CR: "SB OFF TO WB STONE VALLEY RD"},
{PM: 11.134, CR: "SB ON FRM LIVORNA RD"},
{PM: 11.170, CR: "NB OFF TO LIVORNA RD"},
{PM: 11.280, CR: "LIVORNA RD UC"},
{PM: 11.398, CR: "NB ON FRM LIVORNA RD"},
{PM: 11.481, CR: "SB OFF TO LIVORNA RD"},
{PM: 11.728, CR: "CHP ENF AREA IN MEDIAN"},
{PM: 12.416, CR: "SB ON FRM RUDGEAR RD"},
{PM: 12.456, CR: "NB OFF TO RUDGEAR RD"},
{PM: 12.613, CR: "RUDGEAR RD UC"},
{PM: 12.717, CR: "NB ON FR RUDGEAR RD"},
{PM: 13.015, CR: "NB OFF TO NB SOUTH MAIN ST"},
{PM: 13.082, CR: "SOUTH MAIN ST UC"},
{PM: 13.094, CR: "SB ON FR SB SOUTH MAIN ST"},
{PM: 13.230, CR: "SB OFF TO SOUTH MAIN ST"},
{PM: 13.461, CR: "LILAC DR UC"},
{PM: 13.669, CR: "NEWELL AVE UC"},
{PM: 13.687, CR: "NB OFF TO OLYMPIC BLVD"},
{PM: 13.693, CR: "SB ON FR OLYMPIC BLVD"},
{PM: 13.721, CR: "LAS TRAMPAS CREEK"},
{PM: 13.809, CR: "SEG SB ON FR EB OLYMPIC"},
{PM: 13.810, CR: "SEG SB ON FR WB OLYMPIC"},
{PM: 13.817, CR: "NB ON FR NEWELL AVE"},
{PM: 13.930, CR: "OLYMPIC BLVD UC"},
{PM: 13.978, CR: "SB ON FR EB RTE 24"},
{PM: 14.027, CR: "MT DIABLO BV SEP"},
{PM: 14.090, CR: "NB ON FR OLYMPIC BLVD"},
{PM: 14.100, CR: "NB OFF TO WB RTE 24"},
{PM: 14.205, CR: "MT DIABLO BR UC"},
{PM: 14.238, CR: "SB OFF TO OLYMPIC BLVD"},
{PM: 14.369, CR: "OLD EB"},
{PM: 14.383, CR: "JCT ST 24 WB"},
{PM: 14.384, CR: "DUM NB ON FR EB RTE 24"},
{PM: 14.486, CR: "NB 680/WB 24 TO YGNACIO"},
{PM: 14.561, CR: "OAKVALE RD OC"},
{PM: 14.714, CR: "NB OFFTO YGNACIO VALLEY RD"},
{PM: 14.846, CR: "YGNACIO VALLEY RD UC"},
{PM: 14.858, CR: "SB ON FR YGNACIO VALLEY RD"},
{PM: 14.921, CR: "SB OFF TO WB RTE 24"},
{PM: 15.236, CR: "PARKSIDE DR UC"},
{PM: 15.501, CR: "SB ON FR NORTH MAIN ST"},
{PM: 15.522, CR: "NB OFF TO NORTH MAIN ST"},
{PM: 15.530, CR: "SEG NB OFF/ON NORTH MAIN"},
{PM: 15.606, CR: "NORTH MAIN ST OC"},
{PM: 15.639, CR: "SEG SB OFF TO SB NORTH MAIN"},
{PM: 15.640, CR: "SEG SB OFF TO NORTH MAIN ST"},
{PM: 15.734, CR: "NB ON FR NORTH MAIN ST"},
{PM: 15.883, CR: "SB OFF TO NORTH MAIN ST"},
{PM: 16.076, CR: "CONTRA COSTA CANAL"},
{PM: 16.171, CR: "NB OFF TREAT/WEIGH STATION"},
{PM: 16.252, CR: "SEG NB OFF TO WEIGH STATION"},
{PM: 16.253, CR: "SEG NB OFF TO GEARY/TREAT"},
{PM: 16.287, CR: "SB ON FR GEARY RD"},
{PM: 16.403, CR: "GEARY RD OC"},
{PM: 16.507, CR: "RAMP-SB FR OAK PK/SUNNYCC"},
{PM: 16.548, CR: "SB ON FR NORTH MAIN/TRUCK SCALE"},
{PM: 16.549, CR: "SEG SB ON FR NORTH MAIN/GEARY"},
{PM: 16.695, CR: "NB ON FR TREAT/BUSKIRK"},
{PM: 16.706, CR: "SB OFF TO N MAIN/GEARY"},
{PM: 16.707, CR: "SEG SB OFF TO TRUCK SCALE"},
{PM: 16.742, CR: "SB OFF TO NORTH MAIN/TRUCK SCALE"},
{PM: 16.848, CR: "NB ON FR BUSKIRK/COGGINS"},
{PM: 16.879, CR: "OAK PARK BLVD OC"},
{PM: 17.203, CR: "NB OFF TO N MAIN/CC BLVD"},
{PM: 17.358, CR: "SB ON FR CC BLVD/BOYD"},
{PM: 17.443, CR: "HOOKSTON OC"},
{PM: 17.513, CR: "SB ON FR MONUMENT PLAZA"},
{PM: 17.528, CR: "NB OFF TO MONUMENT PLAZA"},
{PM: 17.671, CR: "MONUMENT BLVD UC"},
{PM: 17.865, CR: "NB ON FR MONUMENT PLAZA"},
{PM: 17.953, CR: "SEG SB OFF TO GREGORY LN"},
{PM: 17.954, CR: "SEG SB OFF TO MONUMENT PLAZA"},
{PM: 18.439, CR: "SEG SB OFF TO CC/MONUMENT"},
{PM: 18.443, CR: "DUM SB ON FR SB242"},
{PM: 18.651, CR: "DUM NB OFF TO NB 242"},
{PM: 18.707, CR: "JCT 242 N. 242/680 SEP"},
{PM: 18.753, CR: "SB OFF TO CC/MONUMENT"},
{PM: 19.009, CR: "NB OFF TO WILLOW PASS RD"},
{PM: 19.095, CR: "SB ON FR WILLOW PASS RD EB"},
{PM: 19.037, CR: "WILLOW PASS RD UC"},
{PM: 19.094, CR: "SB ON FR WILLOW PASS RD WB"},
{PM: 19.183, CR: "SB OFF TO WILLOW PASS RD"},
{PM: 19.200, CR: "NB ON FR WILLOW PASS RD"},
{PM: 19.677, CR: "NBOFF TO BURNETT/CONCRD"},
{PM: 19.702, CR: "SB ON FR CONCORD AVE"},
{PM: 19.836, CR: "NB ON FR BURNETT AVE"},
{PM: 19.855, CR: "CONCORD AVE UC"},
{PM: 19.889, CR: "SBON FR CONTRA COSTA BLVD"},
{PM: 20.040, CR: "NB ON FR CONCORD AVE"},
{PM: 20.107, CR: "SB OFF TO CONTRA COSTA BLVD"},
{PM: 20.378, CR: "CENTER ST UC"},
{PM: 20.887, CR: "GRAYSON CREEK"},
{PM: 21.031, CR: "DUM SB ON FR EB RTE 4"},
{PM: 21.043, CR: "NB OFF TO EB RTE 4"},
{PM: 21.132, CR: "DUM NB ON FR EB RTE 4"},
{PM: 21.138, CR: "SB OFF TO EB RTE 4"},
{PM: 21.191, CR: "JCT 4 - 4/680 SEP"},
{PM: 21.235, CR: "NB OFF TO WB RTE 4"},
{PM: 21.262, CR: "DUM SB ON FR WB RTE 4"},
{PM: 21.375, CR: "SB OFF TO WB RTE 4"},
{PM: 21.394, CR: "DUM NB ON FR WB RTE 4"},
{PM: 21.520, CR: "BLUM RD UC"},
{PM: 21.876, CR: "CONTRA COSTA CANAL RD UC"},
{PM: 22.200, CR: "EAST MARTINEZ UP"},
{PM: 22.274, CR: "EAST MARTINEZ DRAIN"},
{PM: 22.283, CR: "NB OFF TO PACHECO BLVD"},
{PM: 22.363, CR: "SB ON FR PACHECO BLVD"},
{PM: 22.429, CR: "EAST MARTINEZ OC"},
{PM: 22.697, CR: "ARTHUR RD UC"},
{PM: 22.813, CR: "SB OFF TO ARTHUR RD"},
{PM: 22.830, CR: "NB ON FR ARTHUR RD"},
{PM: 23.439, CR: "SEWAGE PLANT RD UC"},
{PM: 23.737, CR: "NB OFF TO MARINA VISTA"},
{PM: 23.865, CR: "NB ON FR MARINA VISTA"},
{PM: 23.987, CR: "SOUTH MOCOCO DRAIN"},
{PM: 24.256, CR: "SB ON FR MARINA VISTA"},
{PM: 24.264, CR: "MOCOCO OH"},
{PM: 24.391, CR: "SB OFF TO MARINA VISTA"},
{PM: 25.043, CR: "BENICIA MARTINEZ"}]
                }]
            }
        },
        NAP: {
            Route: {
                Highways: [{
                    HWY12: [{HWY: 012, PM: 0.000, CR: "JCT RTE 29"},
{HWY: 012, PM: 0.000, CR: "ROUTE 29 AIRPORT RD"},
{HWY: 012, PM: 0.240, CR: "KELLY RD"},
{HWY: 012, PM: 1.070, CR: "LYNCH RD W JCT LT"},
{HWY: 012, PM: 1.324, CR: "CHARDONNAY RD"},
{HWY: 012, PM: 2.030, CR: "LYNCH RD E JCT LT"}],
                    HWY29: [],
                    HWY80: [{PM: 7.952, CR: "WB ON FR AMERICAN CANYON"},
                    {PM: 7.974, CR: "EB OFF TO AMERICAN CANYON"},
                    {PM: 8.004, CR: "END OF NAPA COUNTY"}],
                    HWY121: [],
                    HWY128: [],
                    HWY221: []
                }]
            }
        },
		SM: {
			Route: {
				Highways: [{
					HWY1: [{HWY: 001, PM: 1.321, CR: "ANO NUEVA PRESERVE-LT"},
{HWY: 001, PM: 5.726, CR: "GAZOS CREEK"},
{HWY: 001, PM: 5.782, CR: "GAZOS CREEK RD-RT"},
{HWY: 001, PM: 7.310, CR: "PIGEON POINT RD (SO) RT"},
{HWY: 001, PM: 7.973, CR: "PIGEON POINT ROAD"},
{HWY: 001, PM: 8.598, CR: "PIGEON POINT RD (NO) LT"},
{HWY: 001, PM: 10.729, CR: "BEAN HOLLOW ROAD"},
{HWY: 001, PM: 11.920, CR: "PEBBLE BEACH ENTRANCE"},
{HWY: 001, PM: 13.579, CR: "PESCADERO RD/BEACH ENTRANCE"},
{HWY: 001, PM: 14.001, CR: "PESCADERO CREEK"},
{HWY: 001, PM: 14.609, CR: "PESCADERO BEACH NORTH"},
{HWY: 001, PM: 16.441, CR: "POMPONIO CREEK"},
{HWY: 001, PM: 16.454, CR: "POMPONIO BEACH ENTRANCE"},
{HWY: 001, PM: 17.895, CR: "SAN GREGORIO CREEK"},
{HWY: 001, PM: 18.091, CR: "SAN GREGORIO BEACH ENTRANCE"},
{HWY: 001, PM: 18.189, CR: "JCT 84 E.SAN GREGORIO"},
{HWY: 001, PM: 18.189, CR: "LA HONDA RD JCT SM 84"},
{HWY: 001, PM: 19.430, CR: "STAGE ROAD"},
{HWY: 001, PM: 20.815, CR: "TUNITAS CREEK BR"},
{HWY: 001, PM: 20.980, CR: "TUNITAS CREEK RD"},
{HWY: 001, PM: 22.341, CR: "ROAD TO MARTINS BEACH"},
{HWY: 001, PM: 22.662, CR: "VERDE-LOBITOS CREEK RDS RT"},
{HWY: 001, PM: 22.996, CR: "MEYN RD - VERDE RD"},
{HWY: 001, PM: 24.582, CR: "VERDE-PURISIMA CREEK RT"} ,
{HWY: 001, PM: 26.019, CR: "DEHOFF CANYON RD"},
{HWY: 001, PM: 26.432, CR: "MIRAMONTES POINT RD"},
{HWY: 001, PM: 26.667, CR: "FAIRWAY DRIVE"},
{HWY: 001, PM: 26.982, CR: "HALFMOON BAY MAINTENANCE STATION"},
{HWY: 001, PM: 27.121, CR: "REDONDO BEACH RD"},
{HWY: 001, PM: 27.221, CR: "DOLORES AVE"},
{HWY: 001, PM: 27.420, CR: "BERNARDO AVE LT"},
{HWY: 001, PM: 27.561, CR: "WAVECREST RD"},
{HWY: 001, PM: 27.750, CR: "MAIN ST - OLD HWY SOUTH"},
{HWY: 001, PM: 27.750, CR: "HIGGINS PURISIMA RD"},
{HWY: 001, PM: 28.000, CR: "SEYMOUR ST"},
{HWY: 001, PM: 28.121, CR: "GROVE ST"},
{HWY: 001, PM: 28.220, CR: "POPLAR ST"},
{HWY: 001, PM: 28.350, CR: "FILBERT ST"},
{HWY: 001, PM: 28.750, CR: "KELLY AVE"},
{HWY: 001, PM: 28.923, CR: "PILARCITOS CREEK"} ,
{HWY: 001, PM: 29.036, CR: "JCT ST 92 EAST"},
{HWY: 001, PM: 29.036, CR: "JCT 92"},
{HWY: 001, PM: 29.120, CR: "MAIN ST - OLD HWY NORTH"},
{HWY: 001, PM: 29.170, CR: "MAIN ST (OLD HWY N JB)"},
{HWY: 001, PM: 29.300, CR: "BELLEVILLE LT/HIGHLAND RT"},
{HWY: 001, PM: 29.361, CR: "GRAND BLVD LT/SILVER RT"},
{HWY: 001, PM: 29.402, CR: "TERRACE AVE"},
{HWY: 001, PM: 29.471, CR: "FRONTAGE RD (CABRILLO SOUTH JN)"},
{HWY: 001, PM: 29.652, CR: "GRANDVIEW BLVD"},
{HWY: 001, PM: 29.721, CR: "KEHOE AVE"},
{HWY: 001, PM: 29.952, CR: "SPINDRIFT WAY"},
{HWY: 001, PM: 30.061, CR: "FRONTAGE RD (CABRILLO NORTH JN)"},
{HWY: 001, PM: 30.161, CR: "VENICE BLVD"},
{HWY: 001, PM: 30.225, CR: "FRENCHMANS CREEK RD"},
{HWY: 001, PM: 30.342, CR: "RUISEAU FRANCAIS AVE"},
{HWY: 001, PM: 30.601, CR: "YOUNG AVE"},
{HWY: 001, PM: 30.945, CR: "ROOSEVELT BLVD"},
{HWY: 001, PM: 31.200, CR: "MIRADA RD - ALTO AVE"},
{HWY: 001, PM: 31.300, CR: "MIRAMAR DR"},
{HWY: 001, PM: 31.410, CR: "MEDIO AVE"},
{HWY: 001, PM: 31.610, CR: "MAGELLAN AVE - LT"},
{HWY: 001, PM: 32.025, CR: "CORONADO-RT"},
{HWY: 001, PM: 32.290, CR: "BREAKWATER(HARBOR ENTRANCE)LT"},
{HWY: 001, PM: 32.860, CR: "CAPISTRANO L/ALHAMBRA R"},
{HWY: 001, PM: 33.189, CR: "CORAL REEF AVE RT"},
{HWY: 001, PM: 33.361, CR: "CAPISTRANO RD-OBISPO RD"},
{HWY: 001, PM: 33.361, CR: "CAPISTRANO RD LT"},
{HWY: 001, PM: 33.826, CR: "HALF MOON BAY AIRPORT ENTRANCE - LT"},
{HWY: 001, PM: 34.634, CR: "ETHELDORE ST RT"},
{HWY: 001, PM: 34.885, CR: "MARINE BLVD"},
{HWY: 001, PM: 34.961, CR: "CYPRESS AVE"},
{HWY: 001, PM: 35.014, CR: "TERRACE AVE � LT"},
{HWY: 001, PM: 35.071, CR: "LANCASTER BLVD � LT"},
{HWY: 001, PM: 35.122, CR: "VERMONT AVE"},
{HWY: 001, PM: 35.175, CR: "VIRGINIA AVE"},
{HWY: 001, PM: 35.229, CR: "CALIFORNIA AVE & WIENKE"},
{HWY: 001, PM: 35.334, CR: "MOSS BEACH"},
{HWY: 001, PM: 35.336, CR: "VALLEMAR-ETHELDORE ST"},
{HWY: 001, PM: 35.336, CR: "VALLEMAR-LT/ETHELDORE-R"},
{HWY: 001, PM: 35.839, CR: "CARLOS STREET-RT"},
{HWY: 001, PM: 35.874, CR: "16TH ST"},
{HWY: 001, PM: 35.977, CR: "14TH ST-RT"},
{HWY: 001, PM: 36.236, CR: "9TH ST"},
{HWY: 001, PM: 36.288, CR: "8TH ST-RT"},
{HWY: 001, PM: 36.337, CR: "7TH ST"},
{HWY: 001, PM: 36.386, CR: "SEA CLIFF CT-LT"},
{HWY: 001, PM: 36.487, CR: "MONTARA"},
{HWY: 001, PM: 36.584, CR: "2ND ST RT"},
{HWY: 001, PM: 37.193, CR: "MCNEE RANCH RD"},
{HWY: 001, PM: 37.928, CR: "GRAY WHALE COVE PARKING"},
{HWY: 001, PM: 40.553, CR: "CABRILLO HWY"},
{HWY: 001, PM: 40.752, CR: "SAN PEDRO AVE"},
{HWY: 001, PM: 40.752, CR: "SAN PEDRO AVE-L/TERRACE RD-RT"},
{HWY: 001, PM: 40.832, CR: "SAN PEDRO CREEK BR"},
{HWY: 001, PM: 40.959, CR: "LINDA MAR BLVD"},
{HWY: 001, PM: 41.278, CR: "CRESPI DR"},
{HWY: 001, PM: 41.903, CR: "SEA BOWL LANE-RT"},
{HWY: 001, PM: 42.014, CR: "FASSLER-RT/ROCKAWAY-LT"},
{HWY: 001, PM: 42.133, CR: "SAN MARLO WAY-LT"},
{HWY: 001, PM: 42.227, CR: "RHODES JAMIESON QUARRY"},
{HWY: 001, PM: 42.583, CR: "REINA DEL MAR"},
{HWY: 001, PM: 42.583, CR: "REINA DEL MAR AVE"},
{HWY: 001, PM: 42.920, CR: "MORI PT RD"},
{HWY: 001, PM: 43.080, CR: "FAIRWAY DR-WESTPORT DR"},
{HWY: 001, PM: 43.274, CR: "NB OFF TO SHARP PARK RD"},
{HWY: 001, PM: 43.331, CR: "SB OFF TO SHARP PARK RD"},
{HWY: 001, PM: 43.454, CR: "NB ON FR SHARP PARK RD"},
{HWY: 001, PM: 43.464, CR: "SHARP PARK RD OC"},
{HWY: 001, PM: 43.471, CR: "SB ON FR SHARP PARK RD"},
{HWY: 001, PM: 43.644, CR: "NB OFF TO CLARENDON RD"},
{HWY: 001, PM: 43.744, CR: "CLARENDON RD UC"},
{HWY: 001, PM: 44.039, CR: "SAN JOSE AVE POC"},
{HWY: 001, PM: 44.214, CR: "PALOMA AVE OC"},
{HWY: 001, PM: 44.364, CR: "NB ON FR PALOMA AVE"},
{HWY: 001, PM: 44.371, CR: "SB OFF TO PALOMA AVE"},
{HWY: 001, PM: 44.801, CR: "SB ON FR PALMETTO AVE"},
{HWY: 001, PM: 44.824, CR: "NB OFF TO MILAGRA DR"},
{HWY: 001, PM: 44.880, CR: "MILAGRA DR PED OC"},
{HWY: 001, PM: 45.119, CR: "MANOR DR OC"},
{HWY: 001, PM: 45.384, CR: "NB ON FR MONTEREY RD"},
{HWY: 001, PM: 45.390, CR: "MONTEREY RD CONNECTIONS"},
{HWY: 001, PM: 45.411, CR: "SB OFF TO MONTEREY RD"},
{HWY: 001, PM: 46.434, CR: "NB OFF TO RTE 35"},
{HWY: 001, PM: 46.514, CR: "GATEWAY DR UC"},
{HWY: 001, PM: 46.554, CR: "SEG NBOFF TO NB RTE 35"},
{HWY: 001, PM: 46.555, CR: "SEG NBOFF TO SB RTE 35"},
{HWY: 001, PM: 46.581, CR: "SB ON FR RTE 35"},
{HWY: 001, PM: 46.615, CR: "SEG SB ON FR NB 35"},
{HWY: 001, PM: 46.616, CR: "SEG SB ON FR SB RTE 35"},
{HWY: 001, PM: 46.624, CR: "SB ON (TO 35) FR NB/SB 1"},
{HWY: 001, PM: 46.646, CR: "SOUTH CONN OC 35"},
{HWY: 001, PM: 46.722, CR: "JCT ST 35"},
{HWY: 001, PM: 46.738, CR: "JUNIPERO SERRA BLVD"},
{HWY: 001, PM: 46.755, CR: "NB ON FR SB RTE 35"},
{HWY: 001, PM: 46.811, CR: "SB OFF TO SB RTE 35"},
{HWY: 001, PM: 46.864, CR: "LAKESHIRE DR UC 35"},
{HWY: 001, PM: 46.884, CR: "NB ON FR NB RTE 35"},
{HWY: 001, PM: 46.931, CR: "SB OFF TO NB RTE 35"},
{HWY: 001, PM: 47.032, CR: "ST FRANCIS BLVD UC"},
{HWY: 001, PM: 47.094, CR: "NB OFF TO SERRAMONTE BLVD"},
{HWY: 001, PM: 47.141, CR: "SB ON FR CLARINADA AVE"},
{HWY: 001, PM: 47.214, CR: "NB ON FR SERRAMONTE BLVD"},
{HWY: 001, PM: 47.271, CR: "SB OFF TO CLARINADA AVE"},
{HWY: 001, PM: 47.272, CR: "CLARINADA AVE UC"},
{HWY: 001, PM: 47.604, CR: "NB OFF TO SB RTE 280"},
{HWY: 001, PM: 47.611, CR: "SB ON FR NB RTE 280"},
{HWY: 001, PM: 47.623, CR: "SOUTHGATE AVE UC"} ,
{HWY: 001, PM: 47.625, CR: "SOUTHGATE AVE UC"} ,
{HWY: 001, PM: 47.730, CR: "SB ON FROM SULLIVAN AV/D STREET"},
{HWY: 001, PM: 47.732, CR: "SEG SB ON FROM D STREET"},
{HWY: 001, PM: 47.760, CR: "RTE 1/280"},
{HWY: 001, PM: 47.762, CR: "RTE 1 CONN OC LT"},
{HWY: 001, PM: 47.784, CR: "RTE 1 CONN OC RT"},
{HWY: 001, PM: 47.802, CR: "SOUTH JCT ST FAI 280"},
{HWY: 001, PM: 47.838, CR: "SULLIVAN AVE RAMP OC"},
{HWY: 001, PM: 48.050, CR: "BREAK IN RTE/END NORTH ACCESS TO 280"},
{HWY: 001, PM: 48.359, CR: "NORTH JCT ST FAI 280"},
{HWY: 001, PM: 48.391, CR: "SEG SB OFF TO EB JOHN DALY"},
{HWY: 001, PM: 48.392, CR: "SEG SB OFF TO WB JOHN DALY"},
{HWY: 001, PM: 48.521, CR: "SEG FR ALEMANY TO SB 280"},
{HWY: 001, PM: 48.531, CR: "SB OFF TO JOHN DALY BLVD"},
{HWY: 001, PM: 48.554, CR: "NB ON FR JOHN DALY BLVD"},
{HWY: 001, PM: 48.558, CR: "END OF COUNTY"}],
                    HWY35: [],
                    HWY82: [],
                    HWY84: [],
                    HWY92: [],
                    HWY101: [],
                    HWY114: [],
                    HWY280: [{PM: 0.071, CR: "SB ON FR SB ALPINE RD"},
                    {PM: 0.214, CR: "NB ON FR ALPINE RD"},
                    {PM: 0.231, CR: "SB OFF TO ALPINE RD"},
                    {PM: 0.299, CR: "SAN FRANCISQUITO CREEK"},
                    {PM: 1.020, CR: "STANFORD LINEAR ACCEL"},
                    {PM: 1.204, CR: "NB OFF TO SANDHILL RD"},
                    {PM: 1.354, CR: "SEG NB OFF TO WB SANDHILL"},
                    {PM: 1.355, CR: "SEG NB OFF TO EB SANDHILL"},
                    {PM: 1.361, CR: "SB ON FR SANDHILL RD"},
                    {PM: 1.461, CR: "SEG SB ON FR EB SANDHILL"},
                    {PM: 1.462, CR: "SEG SB ON FR WB SANDHILL"},
                    {PM: 1.560, CR: "JCT ST 114 UNC RD E"},
                    {PM: 1.613, CR: "SAND HILL RD OC NORTH"},
                    {PM: 1.753, CR: "SEG NB ON FR EB SANDHILL"},
                    {PM: 1.754, CR: "SEG NB ON FR WB SANDHILL"},
                    {PM: 1.811, CR: "SEG SB OFF TO EB SANDHILL"},
                    {PM: 1.812, CR: "SEG SB OFF TO WB SANDHILL"},
                    {PM: 1.854, CR: "NB ON FR SANDHILL RD"},
                    {PM: 1.951, CR: "SB OFF TO SANDHILL RD"},
                    {PM: 3.104, CR: "NB OFF TO 84 (WOODSIDE)"},
                    {PM: 3.150, CR: "SB ON FR 84 (WOODSIDE)"},
                    {PM: 3.321, CR: "RTE 280/84 SEP R"},
                    {PM: 3.322, CR: "RTE 280/84 SEP L"},
                    {PM: 3.337, CR: "JCT ST 84"},
                    {PM: 3.500, CR: "NB ON FR 84 (WOODSIDE)"},
                    {PM: 3.541, CR: "SB OFF TO 84 (WOODSIDE)"},
                    {PM: 3.589, CR: "WOODSIDE EQUES UC"},
                    {PM: 4.384, CR: "NBOFF TONB FARM HILL BLVD"},
                    {PM: 4.541, CR: "SB ON FR FARM HILL BLVD"},
                    {PM: 4.647, CR: "FARM HILL BL UC RT"},
                    {PM: 4.666, CR: "FARM HILL BL UC LT"},
                    {PM: 4.844, CR: "NBON FRSB FARM HILL BLVD"},
                    {PM: 4.921, CR: "SB OFF TO FARMHILL BLVD"},
                    {PM: 4.992, CR: "CANADA RD UC LT"},
                    {PM: 4.994, CR: "CANADA RD UC RT"},
                    {PM: 6.448, CR: "SB ON FRM CANADA RD"},
                    {PM: 6.565, CR: "NB ON FRM CANADA RD"},
                    {PM: 6.601, CR: "CANADA RD UC R"},
                    {PM: 6.606, CR: "CANADA RD UC L"},
                    {PM: 6.994, CR: "SERVICE RD UC R/L"},
                    {PM: 7.061, CR: "NB OFF TO EDGEWOOD RD"},
                    {PM: 6.654, CR: "EDGEWOOD RD UC RL"},
                    {PM: 6.691, CR: "SB ON FRM EDGEWOOD RD"},
                    {PM: 6.862, CR: "NB ON FRM EDGEWOOD RD"},
                    {PM: 6.916, CR: "SB OFF TO EDGEWOOD RD"},
                    {PM: 7.207, CR: "NB OFF TO VISTA POINT"},
                    {PM: 7.562, CR: "NB ON FR VISTA POINT"},
                    {PM: 9.214, CR: "SB ON FR RANCHO PULGAS"},
                    {PM: 9.226, CR: "NB OFF TO RANCHO PULGAS"},
                    {PM: 9.406, CR: "RANCHO PULGAS UC"},
                    {PM: 9.544, CR: "NB ON FR RANCHO PULGAS"},
                    {PM: 9.572, CR: "SB OFF TO RANCHO PULGAS"},
                    {PM: 10.437, CR: "SB ON FR WB RTE 92"},
                    {PM: 10.460, CR: "NB OFF TO RTE 92"},
                    {PM: 10.562, CR: "CRYSTAL SPRINGS BIKE OC"},
                    {PM: 10.573, CR: "SEG NB OFF TO WB RTE 92"},
                    {PM: 10.574, CR: "SEG NB OFF TO EB RTE 92"},
                    {PM: 10.734, CR: "DUM NB ON FR EB RTE 92"},
                    {PM: 10.748, CR: "SB ON FR EB RTE 92"},
                    {PM: 10.757, CR: "SOUTH CONN UC LT LNS"},
                    {PM: 10.765, CR: "SOUTH CONN UC RT LNS"},
                    {PM: 10.791, CR: "EAST CONN OC RT LNS"},
                    {PM: 10.805, CR: "ST 280/92 SEP R"},
                    {PM: 10.807, CR: "EAST CONN OC LT LNS"},
                    {PM: 10.815, CR: "ST 280/92 SEP L"},
                    {PM: 10.833, CR: "JCT RTE 92 RT LNS 280"},
                    {PM: 10.843, CR: "JCT RTE 92 LT LNS 280"},
                    {PM: 10.896, CR: "RTE 92 CONN OC RT"},
                    {PM: 10.911, CR: "RTE 92 CONN OC LT"},
                    {PM: 10.991, CR: "NB ON FR WB RTE 92"},
                    {PM: 11.083, CR: "SB OFF TO EB RTE 92"},
                    {PM: 12.124, CR: "NB OFF TO BUNKER HILL DR"},
                    {PM: 12.186, CR: "SB ON FR BUNKER HILL DR"},
                    {PM: 12.319, CR: "JCT 35/SOUTH BUNKER HILL OC"},
                    {PM: 12.414, CR: "NB ON FR BUNKER HILL DR"},
                    {PM: 12.636, CR: "SB OFF TO BUNKER HILL DR"},
                    {PM: 12.733, CR: "SAN MATEO CREEK"},
                    {PM: 13.426, CR: "NB OFF TO REST AREA"},
                    {PM: 13.644, CR: "NB ON FR REST AREA"},
                    {PM: 14.111, CR: "SB ON FR HAYNE RD"},
                    {PM: 14.124, CR: "NB OFF TO HAYNE RD"},
                    {PM: 14.223, CR: "HAYNE RD UC LT"},
                    {PM: 14.233, CR: "HAYNE RD UC RT"},
                    {PM: 14.471, CR: "SB OFF TO HAYNE RD"},
                    {PM: 14.544, CR: "NB ON FR HAYNE RD"},
                    {PM: 16.904, CR: "NB OFF TO TROUSDALE DR"},
                    {PM: 17.011, CR: "SB ON FR TROUSDALE DR"},
                    {PM: 17.160, CR: "TROUSDALE DR UC R"},
                    {PM: 17.170, CR: "TROUSDALE DR UC L"},
                    {PM: 17.351, CR: "SB OFF TO TROUSDALE DR"},
                    {PM: 17.354, CR: "NB ON FR TROUSDALE DR"},
                    {PM: 17.664, CR: "NB OFF TO HILLCREST AVE"},
                    {PM: 17.781, CR: "SB ON FR HILLCREST BLVD"},
                    {PM: 17.921, CR: "HILLCREST BLVD UC RL"},
                    {PM: 18.524, CR: "LARKSPUR DR UC R/L"},
                    {PM: 18.684, CR: "NB ON FR LARKSPUR DR"},
                    {PM: 18.701, CR: "SB OFF TO LARKSPUR DR"},
                    {PM: 18.999, CR: "DUM NB OFF TO NB RTE 35"},
                    {PM: 19.085, CR: "DUM SB ON FR SB RTE 35"},
                    {PM: 19.278, CR: "JCT ST 35 NORTH"},
                    {PM: 19.360, CR: "CRYSTAL SPRINGS RD OC"},
                    {PM: 20.036, CR: "JUNIPERO SERRA SEP"},
                    {PM: 20.218, CR: "WHITMAN WAY UC LT"},
                    {PM: 20.225, CR: "WHITMAN WAY UC RT"},
                    {PM: 20.264, CR: "NB ON FR CRYSTAL SPRINGS AVE"},
                    {PM: 20.271, CR: "SB OFF TO CRYSTAL SPRINGS AVE"},
                    {PM: 20.574, CR: "NB OFF TO SAN BRUNO AVE"},
                    {PM: 20.611, CR: "SB ON FR SAN BRUNO AVE"},
                    {PM: 20.747, CR: "SAN BRUNO AVE UC"},
                    {PM: 20.804, CR: "NB OFF TO EB RTE 380"},
                    {PM: 20.881, CR: "SB ON FR WB RTE 380"},
                    {PM: 20.941, CR: "SEG SB OFF TO SAN BRUNO AVE"},
                    {PM: 20.944, CR: "SEG NB TO RTE 280/SNEATH"},
                    {PM: 20.969, CR: "ST 280/380 SEP RT"},
                    {PM: 20.971, CR: "ST 280/380 SEP LT"},
                    {PM: 21.015, CR: "JCT ST FAI 380 E"},
                    {PM: 21.081, CR: "SB CONNECTOR OC"},
                    {PM: 21.155, CR: "SEG NB OFF TO SNEATH LN"},
                    {PM: 21.201, CR: "SB OFF TO EB RTE 380"},
                    {PM: 21.224, CR: "NB ON FR WB RTE 380"},
                    {PM: 21.242, CR: "SEG SB ON FR SNEATH LN"},
                    {PM: 21.244, CR: "SEG NB ON FR SAN BRUNO"},
                    {PM: 21.245, CR: "SEG NB ON FR SNEATH"},
                    {PM: 21.282, CR: "SEG SB OFF TO SNEATH LN"},
                    {PM: 21.306, CR: "SNEATH LN OC"},
                    {PM: 21.364, CR: "NB ON FR SNEATH/SAN BRUNO"},
                    {PM: 21.411, CR: "SB OFF TO SNEATH/SAN BRUNO"},
                    {PM: 21.914, CR: "NB OFF TO AVALON DR"},
                    {PM: 21.931, CR: "SB ON FR AVALON DR"},
                    {PM: 22.043, CR: "AVALON DR UC LT"},
                    {PM: 22.047, CR: "AVALON DR UC RT"},
                    {PM: 22.541, CR: "SBON FREB WESTBOROUGH BLVD"},
                    {PM: 22.620, CR: "WESTBOROUGH UC"},
                    {PM: 22.624, CR: "NB ON FR EB WESTBOROUGH BLVD"},
                    {PM: 22.911, CR: "SB OFF TO WESTBOROUGH BLVD"},
                    {PM: 22.994, CR: "NB ON FR WB WESTBOROUGH BLVD"},
                    {PM: 23.158, CR: "KING DR UC R/L"},
                    {PM: 23.964, CR: "NB OFF TO HICKEY BLVD"},
                    {PM: 24.081, CR: "SB ON FR HICKEY BLVD"},
                    {PM: 24.184, CR: "NB ON FR HICKEY BLVD"},
                    {PM: 24.197, CR: "HICKEY BLVD UC"},
                    {PM: 24.421, CR: "SB OFF TO HICKEY BLVD"},
                    {PM: 24.627, CR: "COLLINS AVE UC"},
                    {PM: 24.804, CR: "NB ON FR SERRAMONTE BLVD"},
                    {PM: 24.821, CR: "SB OFF TO SERRAMONTE BLVD"},
                    {PM: 25.064, CR: "NB OFF TO SB RTE1/JUNIPERO SERRA"},
                    {PM: 25.093, CR: "DUM SB ON FR NB RTE 1"},
                    {PM: 25.175, CR: "SEG NB TO JUNIP SERR BLVD"},
                    {PM: 25.176, CR: "SEG NB FROM 280/1 TO JUNIPERO SERRA BLVD"},
                    {PM: 25.222, CR: "SB ON FROM SULLIVAN AVE/D STREET"},
                    {PM: 25.261, CR: "ST 1 CONN OC BR"},
                    {PM: 25.280, CR: "JCT 1 SOUTH - 1/280 SEP"},
                    {PM: 25.401, CR: "SB OFF TO SB RTE 1"},
                    {PM: 25.470, CR: "SEG SB ON FROM D STREET"},
                    {PM: 25.471, CR: "SEG SB ON FROM SULLIVAN AVE"},
                    {PM: 25.494, CR: "NB ON FR NB RTE 1"},
                    {PM: 25.609, CR: "SEG SB ON 280/1 FROM D STREET"},
                    {PM: 25.777, CR: "SAN PEDRO OC BR"},
                    {PM: 25.835, CR: "SULLIVAN/PIERCE/SB OFF RAMP"},
                    {PM: 25.970, CR: "WASHINGTON OC BR"},
                    {PM: 26.042, CR: "JUNIPERO SERRA SOUTH"},
                    {PM: 26.091, CR: "SB OFF TO SULLIVAN AVE"},
                    {PM: 26.092, CR: "SEG SB OFF TO NB SULLIVAN AVE"},
                    {PM: 26.093, CR: "SEG SB OFF TO SB SULLIVAN AVE"},
                    {PM: 26.114, CR: "NB ON FR WASHINGTON AVE"},
                    {PM: 26.346, CR: "SCHOOL ST OC BR"},
                    {PM: 26.424, CR: "NB OFF TO JUNIPERO SERRA BLVD"},
                    {PM: 26.501, CR: "JUNIPERO SERRA NORTH"},
                    {PM: 26.967, CR: "JCT OFF CONNECTOR TO RT 1"},
                    {PM: 26.967, CR: "NB OFF TO NB RTE 1"},
                    {PM: 27.165, CR: "JCT 1/NORTH JOHN DALY BLVD OC"},
                    {PM: 27.213, CR: "JUNIPR SERRA BLVD OC"},
                    {PM: 27.344, CR: "NB ON FR KNOWLES AVE"},
                    {PM: 27.407, CR: "ST CHAS AV OC"},
                    {PM: 26.877, CR: "JCT ON CONNECTOR FROM ST 1"},
                    {PM: 26.877, CR: "SB ON FR SB RTE 1"},
                    {PM: 26.973, CR: "SB ON FR KNOWLES/JOHN DALY"},
                    {PM: 27.052, CR: "SEG SB ON FR KNOWLES AVE"},
                    {PM: 27.165, CR: "JCT 1/NORTH JOHN DALY BLVD OC"},
                    {PM: 27.259, CR: "JUNIPERO SERRA RAMP"},
                    {PM: 27.266, CR: "JUNIPERO SERRA BLVD"},
                    {PM: 27.428, CR: "ST CHAS AVE OC"},
                    {PM: 27.433, CR: "END INDEP ALIGN LT & RT END COUNTY"}],
                    HWY380: [{PM: 4.703, CR: "BEG T AT JCT 280"},
                    {PM: 4.982, CR: "CHERRY AVE UC"},
                    {PM: 5.178, CR: "EB OFF TO RTE 82"},
                    {PM: 5.304, CR: "WB ON FR SB RTE 82"},
                    {PM: 5.409, CR: "EB ON FR SB RTE 82"},
                    {PM: 5.448, CR: "RTE 82/380 SEP"},
                    {PM: 5.465, CR: "JCT 82/380"},
                    {PM: 5.521, CR: "WB ON FR NB RTE 82"},
                    {PM: 5.603, CR: "EB ON FR NB RTE 82"},
                    {PM: 5.628, CR: "WB OFF TO RTE 82"},
                    {PM: 5.731, CR: "HUNTINGTON AVE OH"},
                    {PM: 5.989, CR: "EB OFF TO SB RTE 101"},
                    {PM: 6.177, CR: "EB OFF TO NB RTE 101"},
                    {PM: 6.196, CR: "7TH AVE UC(1)"},
                    {PM: 6.203, CR: "7TH AVE UC(2)"},
                    {PM: 6.321, CR: "380/101 SEP RT CL SO SF"},
                    {PM: 6.332, CR: "380/101 SEP LT"},
                    {PM: 6.373, CR: "JCT 380/101 R/L"},
                    {PM: 6.479, CR: "EB OFF TO SOUTH AIRPORT"},
                    {PM: 6.488, CR: "WB ON FR SOUTH AIRPORT"},
                    {PM: 6.527, CR: "SEG TO NB 101 FR SOUTH AIRPORT"},
                    {PM: 6.560, CR: "SEG WB OFF TO NB 101"},
                    {PM: 6.650, CR: "EB ON FR RTE 101"},
                    {PM: 6.660, CR: "WB OFF TO RTE 101"},
                    {PM: 6.709, CR: "EB EXTENSION 380/101 SEP"}]

				}]

			}

		},
        SF: {
            Route: {
                Highways: [{
                    HWY1: [{HWY: 001, PM: 0.000, CR: "JUNIPERO SERRA BLVD"},
{HWY: 001, PM: 0.090, CR: "NB OFF TO ALEMANY"},
{HWY: 001, PM: 0.105, CR: "ALEMANY BV OC"},
{HWY: 001, PM: 0.180, CR: "PALMETTO RT"},
{HWY: 001, PM: 0.230, CR: "SF GOLF CLUB LT"},
{HWY: 001, PM: 0.263, CR: "SB ON FR EB BROTHERHOOD"},
{HWY: 001, PM: 0.300, CR: "NB ON FR EB BROTHERHOOD"},
{HWY: 001, PM: 0.302, CR: "SB OFF TO EB BROTHERHOOD"},
{HWY: 001, PM: 0.312, CR: "BROTHERHOOD WAY UC"},
{HWY: 001, PM: 0.358, CR: "NB OFF TO WB BROTHERHOOD"},
{HWY: 001, PM: 0.387, CR: "SB OFF TO WB BROTHERHOOD"},
{HWY: 001, PM: 0.388, CR: "NB ON FR WB BROTHERHOOD"},
{HWY: 001, PM: 0.430, CR: "FONT BLVD LT"},
{HWY: 001, PM: 0.680, CR: "19TH AVE"},
{HWY: 001, PM: 0.680, CR: "19TH AVE RT, SERRA RT"},
{HWY: 001, PM: 0.830, CR: "BANBURY DR RT"},
{HWY: 001, PM: 0.880, CR: "CRESPI DR LT"},
{HWY: 001, PM: 0.940, CR: "HOLLOWAY AVE"},
{HWY: 001, PM: 1.210, CR: "DENSLOWE DR RT"},
{HWY: 001, PM: 1.260, CR: "BUCKINGHAM WAY LT"},
{HWY: 001, PM: 1.350, CR: "WINSTON DR"},
{HWY: 001, PM: 1.600, CR: "ROSSMOOR DR RT"},
{HWY: 001, PM: 1.660, CR: "EUCALYPTUS DR"},
{HWY: 001, PM: 1.740, CR: "OCEAN AVE"},
{HWY: 001, PM: 1.897, CR: "JCT ST 35"},
{HWY: 001, PM: 1.897, CR: "JCT 35-SLOAT BL"},
{HWY: 001, PM: 2.090, CR: "WAWONA ST LT"},
{HWY: 001, PM: 2.220, CR: "VICENTE ST"},
{HWY: 001, PM: 2.360, CR: "ULLOA ST"},
{HWY: 001, PM: 2.500, CR: "TARAVAL ST"},
{HWY: 001, PM: 2.620, CR: "SANTIAGO ST"},
{HWY: 001, PM: 2.750, CR: "RIVERA ST"},
{HWY: 001, PM: 2.870, CR: "QUINTARA ST"},
{HWY: 001, PM: 3.010, CR: "PACHECO ST"},
{HWY: 001, PM: 3.140, CR: "ORTEGA ST"},
{HWY: 001, PM: 3.270, CR: "NORIEGA ST"},
{HWY: 001, PM: 3.400, CR: "MORAGA ST RT"},
{HWY: 001, PM: 3.530, CR: "LAWTON ST"},
{HWY: 001, PM: 3.640, CR: "KIRKHAM ST"},
{HWY: 001, PM: 3.790, CR: "JUDAH ST"},
{HWY: 001, PM: 3.930, CR: "IRVING ST"},
{HWY: 001, PM: 4.050, CR: "PARK-PRESIDEO DR"},
{HWY: 001, PM: 4.050, CR: "LINCOLN WAY"},
{HWY: 001, PM: 4.090, CR: "MARTIN LUTHER KING DR"},
{HWY: 001, PM: 4.454, CR: "JOHN F KENNEDY DR"},
{HWY: 001, PM: 4.490, CR: "CROSSOVER DRIVE LT"},
{HWY: 001, PM: 5.000, CR: "FULTON ST"},
{HWY: 001, PM: 5.130, CR: "CABRILLO ST"},
{HWY: 001, PM: 5.250, CR: "BALBOA ST"},
{HWY: 001, PM: 5.380, CR: "ANZA ST"},
{HWY: 001, PM: 5.500, CR: "GEARY BLVD"},
{HWY: 001, PM: 5.630, CR: "CLEMENT ST"},
{HWY: 001, PM: 5.750, CR: "CALIFORNIA ST"},
{HWY: 001, PM: 5.880, CR: "LAKE ST"},
{HWY: 001, PM: 6.179, CR: "WEST PACIFIC AVE UC"},
{HWY: 001, PM: 6.331, CR: "BEG PRESIDIO TUNNEL"},
{HWY: 001, PM: 6.488, CR: "WASHINGTON BLVD TUN OC"},
{HWY: 001, PM: 6.577, CR: "END PRESIDIO TUNNEL"},
{HWY: 001, PM: 6.668, CR: "KOBBE AVE UC"},
{HWY: 001, PM: 6.859, CR: "RUCKMAN AVE UC"},
{HWY: 001, PM: 7.077, CR: "S JCT 101 - RTE BREAK"}],
                    HWY35: [],
                    HWY80: [{PM: 3.836, CR: "BEG @ 101"},
                    {PM: 3.951, CR: "JCT ST 101 S"},
                    {PM: 4.110, CR: "WB CONN"},
                    {PM: 4.335, CR: "WB ON FR HARRISON ST"},
                    {PM: 4.338, CR: "16TH/8TH ST VIADUCT"},
                    {PM: 4.392, CR: "EB OFF TO 7TH ST"},
                    {PM: 4.400, CR: "7TH/8TH ST INTER"},
                    {PM: 4.490, CR: "WB OFF TO 8TH ST"},
                    {PM: 4.517, CR: "EB ON FR 8TH ST/BRYANT"},
                    {PM: 4.914, CR: "WB ON FR 4TH/HARRISON"},
                    {PM: 4.916, CR: "END 8TH/5TH ST VIADUCT"},
                    {PM: 4.931, CR: "EB OFF TO 4TH/BRYANT"},
                    {PM: 5.044, CR: "EB LNS ON LOWER DECK TO BAY BRIDGE"},
                    {PM: 5.045, CR: "EB ON FR 5TH/BRYANT"},
                    {PM: 5.494, CR: "EB ON FR STERLING ST"},
                    {PM: 5.514, CR: "EB ON FR BUS RAMP"},
                    {PM: 5.543, CR: "EB ON FR HARRISON"},
                    {PM: 5.544, CR: "EB ON FR FIRST ST"},
                    {PM: 5.564, CR: "EB ON FR FIRST/HARRISON"},
                    {PM: 7.658, CR: "EB LOWER DECK"},
                    {PM: 7.684, CR: "EB OFF TO TI (LEFT)"},
                    {PM: 7.719, CR: "YERBA BUENA TUN"},
                    {PM: 7.821, CR: "END TUN BR"},
                    {PM: 7.884, CR: "EB OFF TO TI (RIGHT)"},
                    {PM: 7.944, CR: "EB ON FR TI (RIGHT)"},
                    {PM: 7.980, CR: "EAST BAY BR LOWER"},
                    {PM: 5.044, CR: "WB LNS ON UPPER DECK TO BAY BRIDGE"},
                    {PM: 5.044, CR: "WB OFF TO 5TH/HARRISON"},
                    {PM: 5.474, CR: "WBOFF TO FREMONT"},
                    {PM: 5.511, CR: "WB OFF TO FREMONT/BUS RAMP"},
                    {PM: 5.588, CR: "OFF RAMP TO HARRISON"},
                    {PM: 7.674, CR: "WB ON FR TI (RIGHT)"},
                    {PM: 7.719, CR: "BEGIN YERBA"},
                    {PM: 7.821, CR: "END TUN BEGIN EAST"},
                    {PM: 7.864, CR: "WB OFF TO TI (LEFT)"},
                    {PM: 7.874, CR: "WB ON FR TI (RIGHT)"},
                    {PM: 8.850, CR: "END OF COUNTY"}],
                    HWY82: [],
                    HWY101: [],
                    HWY280: [{PM: 0.143, CR: "SB OFF TO KNOWLES/JOHN DALY"},
                    {PM: 0.452, CR: "ALEMANY BLVD UC LT"},
                    {PM: 0.467, CR: "ALEMANY BLVD UC RT"},
                    {PM: 0.708, CR: "SAN JOSE-SICKLES AVE"},
                    {PM: 0.738, CR: "JCT ST 82 S"},
                    {PM: 0.873, CR: "NBON FR NB SAN JOSE AVE"},
                    {PM: 1.026, CR: "SB OFF TO SB SAN JOSE AVE"},
                    {PM: 1.064, CR: "WHIPPLE AVE POC"},
                    {PM: 1.458, CR: "SAN JOSE AVE OC"},
                    {PM: 1.556, CR: "NB OFF TO GENEVA AVE"},
                    {PM: 1.557, CR: "SB ON FR GENEVA AVE"},
                    {PM: 1.651, CR: "GENEVA AVE OC"},
                    {PM: 1.768, CR: "OCEAN AVE OC"},
                    {PM: 1.833, CR: "SEG SB OFF TO WB OC"},
                    {PM: 1.834, CR: "SEG SB OFF TO GENEVA AVE"},
                    {PM: 1.851, CR: "SEG NB ON FR GENEVA AVE"},
                    {PM: 1.852, CR: "SEG NB ON FR OCEAN AVE"},
                    {PM: 1.924, CR: "NB ON FR OCEAN/GENEVA"},
                    {PM: 1.945, CR: "SB OFF TO OCEAN/GENEVA"},
                    {PM: 2.041, CR: "HAVELOCK ST POC"},
                    {PM: 2.212, CR: "PAULDING ST OC"},
                    {PM: 2.466, CR: "BADEN ST OC"},
                    {PM: 2.574, CR: "SB ON FR SAN JOSE AVE"},
                    {PM: 2.580, CR: "NB OFF TO SAN JOSE AVE"},
                    {PM: 2.623, CR: "THERESA ST POC"},
                    {PM: 2.690, CR: "MONTEREY BLVD ON"},
                    {PM: 2.701, CR: "SAN JOSE AVE UC"},
                    {PM: 2.752, CR: "BRANCH EAST UC"},
                    {PM: 2.829, CR: "NB ON FR MONTEREY AVE"},
                    {PM: 2.830, CR: "SB OFF TO MONTEREY AVE"},
                    {PM: 2.893, CR: "LYELL ST UC"},
                    {PM: 3.113, CR: "MISSION ST OC"},
                    {PM: 3.226, CR: "JUSTIN DRIVE OC"},
                    {PM: 3.279, CR: "ALEMANY BLVD OC"},
                    {PM: 3.441, CR: "NB OFF TO NB ALEMANY BL"},
                    {PM: 3.448, CR: "SB ON FR SB ALEMANY BL"},
                    {PM: 3.528, CR: "ST MARYS POC"},
                    {PM: 3.750, CR: "NB ON FR NB ALEMANY BLVD"},
                    {PM: 3.751, CR: "SB OFF TO SB ALEMANY BLVD"},
                    {PM: 3.872, CR: "ALEMANY BLVD OC E"},
                    {PM: 3.975, CR: "NB OFF TO SB RTE 101"},
                    {PM: 4.051, CR: "SB ON FR SB RTE 101"},
                    {PM: 4.061, CR: "SB ON FR NB RTE 101"},
                    {PM: 4.070, CR: "ST 280/101 SEP"},
                    {PM: 4.147, CR: "NB OFF TO NB RTE 101"},
                    {PM: 4.183, CR: "ST 280/101 SEP LT"},
                    {PM: 4.341, CR: "JCT ST 101"},
                    {PM: 4.520, CR: "SB OFF TO SB RTE 101"},
                    {PM: 4.521, CR: "NB ON FR NB RTE 101"},
                    {PM: 5.182, CR: "OFF RAMP TO ARMY ST"},
                    {PM: 5.182, CR: "NB OFF TO ARMY ST"},
                    {PM: 5.620, CR: "ARMY ST"},
                    {PM: 5.620, CR: "CESAR CHAVEZ ST"},
                    {PM: 5.761, CR: "SB ON FR 25TH/CESAR CHAVEZ"},
                    {PM: 6.046, CR: "SB OFF TO 25TH/CESAR CHAVEZ"},
                    {PM: 6.061, CR: "ON RAMP FROM INDIANA ST"},
                    {PM: 6.061, CR: "NB ON FR INDIANA ST"},
                    {PM: 6.391, CR: "20TH ST OC"},
                    {PM: 6.518, CR: "NB OFF TO MARIPOSA ST"},
                    {PM: 6.524, CR: "SB ON FR MARIPOSA ST"},
                    {PM: 6.603, CR: "CHINA BASIN VIA"},
                    {PM: 6.641, CR: "NB ON FR 18TH ST"},
                    {PM: 6.690, CR: "SF OFF TO 18TH/MARIPOSA"},
                    {PM: 7.056, CR: "NB OFF TO KING/5TH ST"},
                    {PM: 7.166, CR: "SB ON FR KING/5TH ST"},
                    {PM: 7.258, CR: "CTR FUTURE 280"},
                    {PM: 7.296, CR: "ABOVE BERRY ST"},
                    {PM: 7.353, CR: "ABOVE KING ST"},
                    {PM: 7.425, CR: "ABOVE TOWNSEND ST"},
                    {PM: 7.542, CR: "BRANNAN ST"}]
                }]
            }
        },
	SCL: {
		Route: {
			Highways: [{
				HWY9: [{HWY: 009, PM: 0.000, CR: "SARATOGA GAP JCT RTE 35"},
{HWY: 009, PM: 3.031, CR: "REDWOOD GULCH RD"},
{HWY: 009, PM: 3.600, CR: "WEST SARATOGA CREEK"},
{HWY: 009, PM: 4.850, CR: "SARATOGA CREEK (1)"},
{HWY: 009, PM: 4.890, CR: "SANBORN RD"},
{HWY: 009, PM: 4.991, CR: "SARATOGA SPRINGS ENTRANCE"},
{HWY: 009, PM: 5.501, CR: "SARATOGA CREEK (2)"},
{HWY: 009, PM: 5.710, CR: "PIERCE RD"},
{HWY: 009, PM: 6.300, CR: "SARATOGA CREEK (3)"},
{HWY: 009, PM: 6.372, CR: "COUNTY QUARRY"},
{HWY: 009, PM: 6.400, CR: "SARATOGA CREEK (4)"},
{HWY: 009, PM: 6.671, CR: "TOLL GATE DR"},
{HWY: 009, PM: 6.700, CR: "SARATOGA CREEK (5)"},
{HWY: 009, PM: 6.821, CR: "AMBRIC KNOLLS RD"},
{HWY: 009, PM: 6.900, CR: "SPRINGER AVE"},
{HWY: 009, PM: 6.952, CR: "JACK'S RD"},
{HWY: 009, PM: 7.090, CR: "6TH ST"},
{HWY: 009, PM: 7.172, CR: "5TH ST"},
{HWY: 009, PM: 7.230, CR: "4TH ST"},
{HWY: 009, PM: 7.300, CR: "3RD ST"},
{HWY: 009, PM: 7.400, CR: "JCT RTE 85 NORTH"},
{HWY: 009, PM: 7.400, CR: "SARATOGA LOS GATOS RD"},
{HWY: 009, PM: 7.522, CR: "OAK ST"},
{HWY: 009, PM: 7.551, CR: "OAK PLACE"},
{HWY: 009, PM: 7.692, CR: "ALOHA AVE"},
{HWY: 009, PM: 7.741, CR: "WESTCOTT DR"},
{HWY: 009, PM: 7.817, CR: "CARNELIAN GLEN"},
{HWY: 009, PM: 7.852, CR: "VICKERY & MONTALVO RD"},
{HWY: 009, PM: 7.910, CR: "N HORSESHOE MENDELSOHN"},
{HWY: 009, PM: 7.991, CR: "HORSESHOE DR"},
{HWY: 009, PM: 8.291, CR: "FARWELL AVE"},
{HWY: 009, PM: 8.350, CR: "3 OAKS WY & MENDELSOHN AVE"},
{HWY: 009, PM: 8.412, CR: "PARK & PEPPER DR"},
{HWY: 009, PM: 8.602, CR: "BELLECOURT"},
{HWY: 009, PM: 8.840, CR: "FRUITVALE AVE"},
{HWY: 009, PM: 8.840, CR: "FRUITVALE GLEN DR"},
{HWY: 009, PM: 9.112, CR: "CITRUS LN"},
{HWY: 009, PM: 9.250, CR: "CAMINO GRANDE & AUSTIN WAY"},
{HWY: 009, PM: 9.601, CR: "AUSTIN WAY"},
{HWY: 009, PM: 9.880, CR: "QUITO RD"},
{HWY: 009, PM: 9.932, CR: "BLYTHSWOOD DR"},
{HWY: 009, PM: 10.000, CR: "DAVES AVE & FARRAGUT LN"},
{HWY: 009, PM: 10.232, CR: "GREENWOOD RD"},
{HWY: 009, PM: 10.271, CR: "LEXINGTON DR"},
{HWY: 009, PM: 10.321, CR: "GRANDVIEW DR"},
{HWY: 009, PM: 10.362, CR: "RIDGECREST AVE"},
{HWY: 009, PM: 10.590, CR: "VIEWFIELD RD & SERENA CT"},
{HWY: 009, PM: 10.701, CR: "ROSE AVE"},
{HWY: 009, PM: 10.830, CR: "SARATOGA RD"},
{HWY: 009, PM: 10.880, CR: "MONTGOMERY ST & MASSOL AVE"},
{HWY: 009, PM: 10.911, CR: "SAN BENITO AVE"},
{HWY: 009, PM: 10.970, CR: "MONTEREY TAIT AVE"},
{HWY: 009, PM: 11.060, CR: "SANTA CRUZ AVE"},
{HWY: 009, PM: 11.062, CR: "VILLAGE LN"},
{HWY: 009, PM: 11.170, CR: "UNIVERSITY AVE"},
{HWY: 009, PM: 11.221, CR: "WRAIGHT & WOODLAND AVE"},
{HWY: 009, PM: 11.298, CR: "LOS GATOS CREEK"},
{HWY: 009, PM: 11.448, CR: "JCT RTE 17"}],
                HWY17: [{HWY: 017, PM: 0.069, CR: "SUMMIT RD CONN RTE 35"},
{HWY: 017, PM: 0.108, CR: "JCT ST 35 NORTHWEST"},
{HWY: 017, PM: 1.140, CR: "MADRONE DR UC"},
{HWY: 017, PM: 1.181, CR: "MADRONE DR WEST"},
{HWY: 017, PM: 1.250, CR: "REDWOOD DRIVE"},
{HWY: 017, PM: 2.021, CR: "BRUSH RD"},
{HWY: 017, PM: 2.202, CR: "RAINERI LN"},
{HWY: 017, PM: 2.532, CR: "IDYLWILD DR"},
{HWY: 017, PM: 2.750, CR: "HEBARD WY & DARRELL RD"},
{HWY: 017, PM: 3.336, CR: "ALMA COLLEGE"},
{HWY: 017, PM: 3.450, CR: "OLD SANTA CRUZ HWY"},
{HWY: 017, PM: 3.601, CR: "FIRE STATION"},
{HWY: 017, PM: 4.028, CR: "SB ON & OFF BEAR CREEK ROAD"},
{HWY: 017, PM: 4.162, CR: "NB OFF TO BEAR CREEK ROAD"},
{HWY: 017, PM: 4.204, CR: "NB ON FROM BEAR CREEK ROAD"},
{HWY: 017, PM: 4.451, CR: "BLACK RD"},
{HWY: 017, PM: 4.620, CR: "MONTEVINA-ALMA BR RD"},
{HWY: 017, PM: 5.429, CR: "SIDEHILL VIADUCT"},
{HWY: 017, PM: 5.931, CR: "THE CATS & WEST FRONTAGE RD"},
{HWY: 017, PM: 6.161, CR: "SB ON FROM SANTA CRUZ AVE"},
{HWY: 017, PM: 6.164, CR: "SANTA CRUZ AV UC"},
{HWY: 017, PM: 6.184, CR: "NB OFF TO SANTA CRUZ AVE"},
{HWY: 017, PM: 6.547, CR: "MAIN STREET OC"},
{HWY: 017, PM: 6.647, CR: "LOS GATOS SCHOOL PED OC"},
{HWY: 017, PM: 6.931, CR: "SB ON FR NB RTE 9"},
{HWY: 017, PM: 6.984, CR: "NB OFF TO SARATOGA AVE"},
{HWY: 017, PM: 7.021, CR: "SB OFF TO NB 9 & SARATOGA"},
{HWY: 017, PM: 7.054, CR: "NB ON FR NB 9 & SARATOGA"},
{HWY: 017, PM: 7.101, CR: "SB ON FR SB 9 & SARATOGA"},
{HWY: 017, PM: 7.134, CR: "NB OFF TO SB 9 & SARATOGA"},
{HWY: 017, PM: 7.194, CR: "NB ON FR SB 9 & SARATOGA"},
{HWY: 017, PM: 7.221, CR: "SB OFF TO SB RTE 9"},
{HWY: 017, PM: 7.665, CR: "BLOSSOM HILL RD OC"},
{HWY: 017, PM: 8.694, CR: "NB OFF TO LARK AVE"},
{HWY: 017, PM: 8.874, CR: "NB OFF TO RTE 85"},
{HWY: 017, PM: 8.885, CR: "LARK AVE OC"},
{HWY: 017, PM: 8.915, CR: "SB ON FR LARK AVE"},
{HWY: 017, PM: 8.970, CR: "SB OFF TO LARK AVE"},
{HWY: 017, PM: 9.063, CR: "NB ON FR LARK AVE"},
{HWY: 017, PM: 9.081, CR: "NB OFF TO NB RTE 85"},
{HWY: 017, PM: 9.082, CR: "NB OFF TO SB RTE 85"},
{HWY: 017, PM: 9.267, CR: "SB ON FR SB RTE 85"},
{HWY: 017, PM: 9.316, CR: "RTE 17 & 85"},
{HWY: 017, PM: 9.401, CR: "SB ON FR NB RTE 85"},
{HWY: 017, PM: 9.402, CR: "NB ON FR SB RTE 85"},
{HWY: 017, PM: 9.545, CR: "NB ON FR NB RTE 85"},
{HWY: 017, PM: 9.594, CR: "SB OFF TO SB RTE 85"},
{HWY: 017, PM: 9.595, CR: "SB OFF TO NB RTE 85"},
{HWY: 017, PM: 9.598, CR: "MOZART AVE PED OC"},
{HWY: 017, PM: 9.780, CR: "SB OFF TO NB/SB RTE 85"},
{HWY: 017, PM: 10.204, CR: "SB ON FROM CAMDEN AVE"},
{HWY: 017, PM: 10.270, CR: "NB OFF TO CAMDEN AVE"},
{HWY: 017, PM: 10.498, CR: "CAMDEN AVE UC"},
{HWY: 017, PM: 10.570, CR: "NB ON FR EB CAMDEN AVE"},
{HWY: 017, PM: 10.755, CR: "NB ON FR WB CAMDEN AVE"},
{HWY: 017, PM: 10.775, CR: "SB OFF TO CAMDEN AVE"},
{HWY: 017, PM: 11.804, CR: "CAMPBELL UC"},
{HWY: 017, PM: 12.026, CR: "LOS GATOS CREEK"},
{HWY: 017, PM: 12.184, CR: "NBOFF TO CREEKSIDE/HAMILTON"},
{HWY: 017, PM: 12.222, CR: "CAMPBELL UP"},
{HWY: 017, PM: 12.241, CR: "SBON FR EB HAMILTON AVE"},
{HWY: 017, PM: 12.284, CR: "NBON FR EB HAMILTON AVE"},
{HWY: 017, PM: 12.336, CR: "HAMILTON AVE OC"},
{HWY: 017, PM: 12.391, CR: "SBON FR WB HAMILTON AVE"},
{HWY: 017, PM: 12.481, CR: "SB OFF TO HAMILTON AVE"},
{HWY: 017, PM: 12.484, CR: "NBON FR WB HAMILTON AVE"},
{HWY: 017, PM: 13.107, CR: "WESTFIELD-DOWNING AVE"},
{HWY: 017, PM: 13.596, CR: "NB OFF TO SB RTE 280"},
{HWY: 017, PM: 13.741, CR: "SB ON FROM RTE 280"},
{HWY: 017, PM: 13.851, CR: "MOORPARK AVE UC"},
{HWY: 017, PM: 13.875, CR: "NBOFF TO 280/STEVENS CREEK"},
{HWY: 017, PM: 13.930, CR: "ST 17/280 SEP"},
{HWY: 017, PM: 13.948, CR: "JCT 280/880"}],
                HWY25: [],
                HWY35: [],
                HWY82: [],
                HWY85: [],
                HWY87: [],
                HWY101: [],
                HWY130: [],
                HWY280: [{PM: 0.000, CR: "JCT ST FAI 680 & 101"},
                {PM: 0.064, CR: "SB OFF TO NB RTE 101"},
                {PM: 0.224, CR: "SB OFF TO SB 101"},
                {PM: 0.261, CR: "NB ON FR NB & SB 101"},
                {PM: 0.355, CR: "MCLAUGHLIN AVE UC"},
                {PM: 0.366, CR: "MCLAUGHLIN AVE"},
                {PM: 0.480, CR: "SEG NB ON FR NB MCLAUGHLIN AVE"},
                {PM: 0.481, CR: "SEG NB ON FR SB MCLAUGHLIN AVE"},
                {PM: 0.564, CR: "NB ON FR MCLAUGHLIN AVE"},
                {PM: 0.586, CR: "SB OFF TO MCLAUGHLIN AVE"},
                {PM: 0.886, CR: "KELLEY PARK OH R"},
                {PM: 0.896, CR: "KELLEY PARK OH L"},
                {PM: 1.082, CR: "COYOTE CREEK RT"},
                {PM: 1.087, CR: "COYOTE CREEK LT"},
                {PM: 1.186, CR: "SB ON FROM 11TH ST"},
                {PM: 1.188, CR: "NB OFF TO 11TH ST"},
                {PM: 1.294, CR: "10TH ST UC"},
                {PM: 1.373, CR: "SB ON FROM 7TH ST"},
                {PM: 1.398, CR: "NB OFF TO 7TH ST"},
                {PM: 1.542, CR: "SB OFF TO 10TH ST"},
                {PM: 1.551, CR: "7TH ST UC LT"},
                {PM: 1.554, CR: "7TH ST UC RT"},
                {PM: 1.587, CR: "NB ON FROM 10TH ST"},
                {PM: 1.753, CR: "SB OFF TO EAST VIRGINIA ST"},
                {PM: 1.846, CR: "FIRST ST SEP"},
                {PM: 1.851, CR: "NB ON FRM EAST REED ST"},
                {PM: 1.992, CR: "JCT ST 82"},
                {PM: 2.021, CR: "SB ON FR SB RTE 82"},
                {PM: 2.193, CR: "GUADALUPE SEP LT"},
                {PM: 2.196, CR: "GUADALUPE SEP RT"},
                {PM: 2.274, CR: "NB OFF TO RTE 87"},
                {PM: 2.306, CR: "SB ON FR SB 87 CONN"},
                {PM: 2.364, CR: "NB OFF SEG TO NB RTE 87"},
                {PM: 2.365, CR: "NB OFF SEG TO SB RTE 87"},
                {PM: 2.371, CR: "SB ON CONN SEG/BIRD ON/GRANT OFF"},
                {PM: 2.442, CR: "SB ON FR BIRD AVE"},
                {PM: 2.459, CR: "NB OFF & SEG ON FR VINE"},
                {PM: 2.460, CR: "SEG NB ON FR VINE ST"},
                {PM: 2.490, CR: "SEG SB OFF TO VINE ST"},
                {PM: 2.522, CR: "JCT ST 87"},
                {PM: 2.638, CR: "SEG NB OFF TO BIRD ST"},
                {PM: 2.660, CR: "SEG SB FR BIRD TO VINE"},
                {PM: 2.661, CR: "SEG SB ON FR BIRD AVE"},
                {PM: 2.684, CR: "NB ON FR VINE ST"},
                {PM: 2.692, CR: "SB OFF TO VINE ST"},
                {PM: 2.696, CR: "NB ON SEG FR SB 87"},
                {PM: 2.698, CR: "SB OFF CONN SEG TO NB 87"},
                {PM: 2.699, CR: "SB OFF SEG TO SB RTE 87"},
                {PM: 2.810, CR: "NB ON FR SB RTE 87 CONN"},
                {PM: 2.875, CR: "BIRD AVE OC"},
                {PM: 2.898, CR: "SB OFF TO 87 CONN SEG"},
                {PM: 3.017, CR: "VIRGINIA ST UP"},
                {PM: 3.047, CR: "NB ON FROM BIRD AVE"},
                {PM: 3.118, CR: "SB OFF TO BIRD AVE"},
                {PM: 3.188, CR: "LOS GATOS CREEK"},
                {PM: 3.344, CR: "SUNOL ST SPUR OH"},
                {PM: 3.414, CR: "SUNOL ST OH"},
                {PM: 3.478, CR: "NB OFF TO RACE/SOUTHWEST EXPRESSWAY"},
                {PM: 3.506, CR: "LINCOLN AVE UC"},
                {PM: 3.598, CR: "SEG NB OFF TO RACE ST"},
                {PM: 3.599, CR: "SEG NB OFF TO SB SOUTHWEST EXPRESSWAY"},
                {PM: 3.764, CR: "RACE ST OC"},
                {PM: 3.811, CR: "SB ON FR MERIDIAN/SOUTHWEST EXPRESSWAY"},
                {PM: 3.851, CR: "NB OFF TO PARKMOOR AVE"},
                {PM: 3.872, CR: "SB ON FR MENKER AVE"},
                {PM: 3.875, CR: "SOUTHWEST EXPRESSWAY OC"},
                {PM: 3.890, CR: "MERIDIAN RD UP"},
                {PM: 3.933, CR: "SEG SB ON FR SB MERIDIAN/SOUTHWEST EXPRESSWAY"},
                {PM: 3.934, CR: "SEG SB ON FR NB MERIDIAN RD"},
                {PM: 3.993, CR: "MERIDIAN RD OC"},
                {PM: 4.055, CR: "SEG SB OFF TO NB MERIDIAN RD"},
                {PM: 4.056, CR: "SEG SB OFF TO SB MERIDIAN RD"},
                {PM: 4.153, CR: "NB ON FR NB MERIDIAN RD"},
                {PM: 4.236, CR: "COLLEGE DR POC"},
                {PM: 4.292, CR: "SEG SB TO SB 280/MERIDIAN RD"},
                {PM: 4.293, CR: "SEG SB ON FR MENKER AVE"},
                {PM: 4.324, CR: "SB OFF TO MERIDIAN RD"},
                {PM: 4.499, CR: "LEIGH AVE OC"},
                {PM: 4.549, CR: "NB ON FR PARKMOOR AVE"},
                {PM: 4.663, CR: "LELAND AVE OC"},
                {PM: 4.819, CR: "NB ON FROM LELAND AVE"},
                {PM: 4.944, CR: "BASCOM AVE OC"},
                {PM: 4.965, CR: "SB OFF TO MOORPARK AVE"},
                {PM: 5.052, CR: "NB OFF TO SB RTE 17"},
                {PM: 5.171, CR: "MCARTHUR AVE OC"},
                {PM: 5.226, CR: "NB OFF TO NB RTE 880"},
                {PM: 5.278, CR: "DUM SB ON FR NB RTE 17"},
                {PM: 5.340, CR: "NB ON FR NB RTE 17"},
                {PM: 5.408, CR: "JCT ST 17/880"},
                {PM: 5.464, CR: "SB ON FR SB 880/STEVENS CREEK"},
                {PM: 5.584, CR: "MONROE ST POC"},
                {PM: 5.604, CR: "SEG SB OFF TO SB RTE 17"},
                {PM: 5.771, CR: "SB OFF TO SB 17 & NB 880"},
                {PM: 5.852, CR: "NB ON FR SB RTE 880"},
                {PM: 4.572, CR: "WINCHESTER BLVD OC"},
                {PM: 4.764, CR: "NB ON FR WINCHESTER BLVD"},
                {PM: 4.771, CR: "SB OFF TO WINCHESTER BLVD"},
                {PM: 5.112, CR: "CYPRESS AVE POC"},
                {PM: 5.312, CR: "SAN TOMAS AQUINAS"},
                {PM: 5.664, CR: "NB OFF TO SARATOGA AVE"},
                {PM: 5.781, CR: "SB ON FROM SARATOGA AVE"},
                {PM: 5.834, CR: "SEG NB OFF TO NB SARATOGA AVE"},
                {PM: 5.835, CR: "SEG NB OFF TO SB SARATOGA AVE"},
                {PM: 5.949, CR: "SARATOGA AVE OC"},
                {PM: 6.094, CR: "NB ON FROM SARATOGA AVE"},
                {PM: 6.131, CR: "SB OFF TO SARATOGA AVE"},
                {PM: 6.974, CR: "NB OFF TO LAWRENCE EXPRESSWAY"},
                {PM: 6.981, CR: "SB ON FR LAWRENCE EXPRESSWAY"},
                {PM: 7.123, CR: "LAWRENCE EXPRESSWAY UC"},
                {PM: 7.388, CR: "STEVENS CREEK BLVD UC"},
                {PM: 7.631, CR: "SB OFF TO STEVENS CREEK"},
                {PM: 7.634, CR: "NB ON FR WB STEVENS CREEK"},
                {PM: 7.842, CR: "TANTAU AVE OC"},
                {PM: 7.927, CR: "CALABAZAS CREEK"},
                {PM: 8.221, CR: "SB ON FR WOLFE RD"},
                {PM: 8.244, CR: "NB OFF TO WOLFE RD"},
                {PM: 8.311, CR: "SEG SB ON FR NB WOLFE RD"},
                {PM: 8.313, CR: "SEG SB ON FR SB WOLFE RD"},
                {PM: 8.375, CR: "WOLFE RD OC"},
                {PM: 8.454, CR: "SEG NB ON FR SB WOLFE RD"},
                {PM: 8.455, CR: "SEG NB ON FR NB WOLFE RD"},
                {PM: 8.501, CR: "SB OFF TO WOLFE RD"},
                {PM: 8.544, CR: "NB ON FR WOLFE RD"},
                {PM: 8.955, CR: "BLANEY AVE OC"},
                {PM: 9.271, CR: "SB ON FR DE ANZA BLVD"},
                {PM: 9.284, CR: "NB OFF TO DE ANZA BLVD"},
                {PM: 9.433, CR: "SUNNYVALE RD/DE ANZA BLVD"},
                {PM: 9.591, CR: "SB OFF TO DE ANZA BLVD"},
                {PM: 9.604, CR: "NB ON FR DE ANZA BLVD"},
                {PM: 9.936, CR: "STELLING RD OC"},
                {PM: 10.381, CR: "SB ON FR RTE 85"},
                {PM: 10.415, CR: "NB OFF TO NB RTE 85"},
                {PM: 10.635, CR: "OC RAMP CONN NB RTE 85"},
                {PM: 10.704, CR: "NB OFF TO SB RTE 85"},
                {PM: 10.741, CR: "JCT 85/280"},
                {PM: 10.771, CR: "SB OFF TO NB RTE 85"},
                {PM: 10.931, CR: "SB OFF TO SB RTE 85"},
                {PM: 11.051, CR: "NB ON FR RTE 85"},
                {PM: 11.196, CR: "STEVENS CREEK BR"},
                {PM: 11.281, CR: "SB ON FR FOOTHILL EXPRESSWAY"},
                {PM: 11.294, CR: "NB OFF TO FOOTHILL EXPRESSWAY"},
                {PM: 11.341, CR: "SEG SB ON FR NB FOOTHILL EXPRESSWAY"},
                {PM: 11.342, CR: "SEG SB ON FR SB FOOTHILL EXPRESSWAY"},
                {PM: 11.414, CR: "NB ON FR FOOTHILL EXPRESSWAY"},
                {PM: 11.447, CR: "FOOTHILL BLVD R"},
                {PM: 11.450, CR: "FOOTHILL BLVD L"},
                {PM: 11.641, CR: "SB OFF TO FOOTHILL EXPRESSWAY"},
                {PM: 12.791, CR: "ST JOSEPH UC LT"},
                {PM: 12.793, CR: "ST JOSEPH UC RT"},
                {PM: 12.929, CR: "PERMANENTE CREEK"},
                {PM: 13.116, CR: "MORA DRIVE OC LT"},
                {PM: 13.118, CR: "MORA DRIVE OC RT"},
                {PM: 13.984, CR: "NB OFF TO MAGDALENA AVE"},
                {PM: 14.098, CR: "MAGDALENA AVE UC RT"},
                {PM: 14.100, CR: "MAGDALENA AVE UC LT"},
                {PM: 14.191, CR: "SB ON FR MAGDALENA AVE"},
                {PM: 14.294, CR: "NB ON FR MAGDALENA AVE"},
                {PM: 14.311, CR: "SB OFF TO MAGDALENA AVE"},
                {PM: 14.844, CR: "NB OFF TO EL MONTE RD"},
                {PM: 14.851, CR: "SB ON FR EL MONTE RD"},
                {PM: 14.941, CR: "SEG SB ON FR EB EL MONTE"},
                {PM: 14.942, CR: "SEG SB ON FR WB EL MONTE"},
                {PM: 14.954, CR: "SEG NB OFF TO EB EL MONTE"},
                {PM: 14.955, CR: "SEG NB OFF TO WB EL MONTE"},
                {PM: 15.046, CR: "EL MONTE AVE UC LT"},
                {PM: 15.052, CR: "EL MONTE AVE UC RT"},
                {PM: 15.171, CR: "SEG SB OFF TO EB EL MONTE"},
                {PM: 15.172, CR: "SEG SB OFF TO WB EL MONTE"},
                {PM: 15.204, CR: "SEG NB ON FR EB EL MONTE"},
                {PM: 15.205, CR: "SEG NB ON FR WB EL MONTE"},
                {PM: 15.294, CR: "NB ON FR EL MONTE RD"},
                {PM: 15.311, CR: "SB OFF TO EL MONTE RD"},
                {PM: 16.008, CR: "ROBLEDA RD UC RT"},
                {PM: 16.011, CR: "ROBLEDA RD UC LT"},
                {PM: 16.557, CR: "LA BARRANCA UC L"},
                {PM: 16.560, CR: "LA BARRANCA UC R"},
                {PM: 17.354, CR: "ELENA RD UC RT"},
                {PM: 17.359, CR: "ELENA RD UC LT"},
                {PM: 17.782, CR: "ARASTRADERO UC R"},
                {PM: 17.783, CR: "ARASTRADERO UC L"},
                {PM: 18.184, CR: "NB OFF TO PAGEMILL EXPRESSWAY"},
                {PM: 18.221, CR: "SB ON FR PAGEMILL EXPRESSWAY"},
                {PM: 18.281, CR: "SEG SB ON FR SB PAGE MILL"},
                {PM: 18.282, CR: "SEG SB ON FR NB PAGE MILL"},
                {PM: 18.379, CR: "PAGEMILL RD UC L"},
                {PM: 18.381, CR: "PAGEMILL RD UC R"},
                {PM: 18.534, CR: "SEG NB ON FR SB PAGEMILL"},
                {PM: 18.535, CR: "SEG NB ON FR NB PAGEMILL"},
                {PM: 18.624, CR: "NB ON FR PAGEMILL EXPRESSWAY"},
                {PM: 18.641, CR: "SB OFF TO PAGEMILL EXPRESSWAY"},
                {PM: 20.481, CR: "SB ON FR NB ALPINE RD"},
                {PM: 20.494, CR: "NB OFF TO ALPINE RD"},
                {PM: 20.613, CR: "ALPINE RD UC BR L"},
                {PM: 20.615, CR: "ALPINE RD UC BR R"},
                {PM: 20.625, CR: "END OF COUNTY"}],
                HWY680: [{PM: 0.000, CR: "JCT ST FAI 280 & ST 101"},
                {PM: 0.157, CR: "NB OFF TO KING RD"},
                {PM: 0.185, CR: "PARK SERVICE RD UC R"},
                {PM: 0.193, CR: "SEG SB OFF TO SB 101"},
                {PM: 0.203, CR: "SB ON FR KING ROAD"},
                {PM: 0.299, CR: "NB ON FR NB & SB 101"},
                {PM: 0.367, CR: "SB OFF TO NB & SB 101"},
                {PM: 0.385, CR: "KING RD UC"},
                {PM: 0.534, CR: "NB ON FR KING RD"},
                {PM: 0.660, CR: "SB OFF TO KING RD"},
                {PM: 0.785, CR: "SUNSET AV PED OC"},
                {PM: 0.981, CR: "SB ON FR JACKSON AVE"},
                {PM: 0.983, CR: "NB OFF TO JACKSON AVE"},
                {PM: 1.088, CR: "NB OFF TOEB CAPITOL EXPY"},
                {PM: 1.128, CR: "SILVER CRK RCB"},
                {PM: 1.189, CR: "JACKSON AV UC"},
                {PM: 1.283, CR: "SB ON FR WB CAP. EXPWY"},
                {PM: 1.390, CR: "NB OFF TO RTE 130"},
                {PM: 1.410, CR: "CAPITOL EXPWY UC"},
                {PM: 1.472, CR: "SB ON FR WB RTE 130"},
                {PM: 1.584, CR: "NB ON FR WB CAPITOL"},
                {PM: 1.695, CR: "SB OFF TO EB CAPITOL"},
                {PM: 1.708, CR: "NB ON FR EB RTE 130"},
                {PM: 1.740, CR: "ST 130/680 SEP"},
                {PM: 1.868, CR: "NB ON FR WB RTE 130"},
                {PM: 1.882, CR: "SB OFF TO RTE 130"},
                {PM: 2.002, CR: "MADDEN AVE PED OC"},
                {PM: 2.128, CR: "NB OFF TO MCKEE RD"},
                {PM: 2.163, CR: "SB ON FR MCKEE RD"},
                {PM: 2.263, CR: "SEG NB OFF TO WB MCKEE RD"},
                {PM: 2.264, CR: "SEG NB OFF TO EB MCKEE RD"},
                {PM: 2.273, CR: "SEG SB ON FR EB MCKEE RD"},
                {PM: 2.274, CR: "SEG SB ON FR WB MCKEE RD"},
                {PM: 2.376, CR: "MCKEE RD OC"},
                {PM: 2.483, CR: "SEG NB ON FR EB MCKEE RD"},
                {PM: 2.484, CR: "SEG NB ON FR WB MCKEE RD"},
                {PM: 2.489, CR: "SEG SB OFF TO EB MCKEE RD"},
                {PM: 2.490, CR: "SEG SB OFF TO WB MCKEE RD"},
                {PM: 2.586, CR: "NB ON FR MCKEE RD"},
                {PM: 2.650, CR: "SB OFF TO MCKEE RD"},
                {PM: 3.144, CR: "MABURY RD OC"},
                {PM: 3.452, CR: "UPPER PENITENCIA CREEK"},
                {PM: 3.547, CR: "NB OFF TO BERRYESSA RD"},
                {PM: 3.633, CR: "SB ON FR BERRYESSA RD"},
                {PM: 3.712, CR: "SEG NB OFF TO WB BERRYESA"},
                {PM: 3.713, CR: "SEG NB OFF TO EB BERRYESA"},
                {PM: 3.741, CR: "SEG SB ON FR EB BERRYESSA"},
                {PM: 3.742, CR: "SEG SB ON FR WB BERRYESSA"},
                {PM: 3.842, CR: "BERRYESSA RD OC"},
                {PM: 3.942, CR: "SEG SB OFF TO WB BERRYESA"},
                {PM: 3.943, CR: "SEG SB OFF TO EB BERRYESA"},
                {PM: 3.944, CR: "SEG NB ON FR WB BERRYESSA"},
                {PM: 3.945, CR: "SEG NB ON FR EB BERRYESSA"},
                {PM: 4.057, CR: "NB ON FR BERRYESSA RD"},
                {PM: 4.095, CR: "SB OFF TO BERRYESSA RD"},
                {PM: 4.467, CR: "SB ON FR HOSTETTER RD"},
                {PM: 4.582, CR: "NB OFF TO HOSTETTER RD"},
                {PM: 4.624, CR: "SEG SB ON FR WB HOSTETTER"},
                {PM: 4.625, CR: "SEG SB ON FR EB HOSTETTER"},
                {PM: 4.784, CR: "HOSTETTER RD UC"},
                {PM: 4.986, CR: "SB ON FR EB CAPITOL AVE"},
                {PM: 5.001, CR: "NB OFF TO WB CAPITOL AVE"},
                {PM: 5.068, CR: "CAPITOL AV UC"},
                {PM: 5.090, CR: "CAPITOL AV"},
                {PM: 5.224, CR: "SEG SB OFF TO EB CAP AVE"},
                {PM: 5.225, CR: "SEG SB OFF TO WB CAP AVE"},
                {PM: 5.338, CR: "NB ON FR CAPITOL AVE"},
                {PM: 5.346, CR: "SB OFF TO CAPITOL AVE"},
                {PM: 5.542, CR: "CROPLEY AVE OC"},
                {PM: 5.806, CR: "BERRYESSA CRK BR"},
                {PM: 5.834, CR: "TRIMBLE RD PED OC"},
                {PM: 5.894, CR: "NB OFF TO LANDESS AVE"},
                {PM: 5.941, CR: "SB ON FR LANDESS AVE"},
                {PM: 6.051, CR: "SEG SB ON EB LANDESS AVE"},
                {PM: 6.052, CR: "SEG SB ON FR WB LANDESS AVE"},
                {PM: 6.063, CR: "SEG NB OFF TO EB LANDESS AVE"},
                {PM: 6.064, CR: "SEG NB OFF TO WB LANDESS AVE"},
                {PM: 6.173, CR: "LANDESS AVE OC"},
                {PM: 6.296, CR: "SEG NB ON FR EB LANDESS AVE"},
                {PM: 6.297, CR: "SEG NB ON FR WB LANDESS AVE"},
                {PM: 6.310, CR: "SEG SB OFF TO WB LANDESS AVE"},
                {PM: 6.311, CR: "SEG SB OFF TO EB LANDESS AVE"},
                {PM: 6.409, CR: "NB ON FR LANDESS AVE"},
                {PM: 6.475, CR: "SB OFF TO LANDESS AVE"},
                {PM: 6.977, CR: "YOSEMITE DR OC"},
                {PM: 7.291, CR: "SB ON FR CALAVERAS RD"},
                {PM: 7.314, CR: "NB OFF TO CALAVERAS RD"},
                {PM: 7.391, CR: "SEG SB ON FR EB CALAVERAS RD"},
                {PM: 7.392, CR: "SEG SB ON FR WB CALAVERAS RD"},
                {PM: 7.434, CR: "SEG NB OFF TO EB CALAVRAS RD"},
                {PM: 7.435, CR: "SEG NB OFF TO WB CALAVRAS RD"},
                {PM: 7.460, CR: "ARROYO DE LAS COCHES"},
                {PM: 7.629, CR: "CALAVERAS RD UC RL"},
                {PM: 7.647, CR: "JCT ST 237"},
                {PM: 7.901, CR: "SEG SB OFF TO EB CALAVRAS RD"},
                {PM: 7.902, CR: "SEG SB OFF TO WB CALAVRAS RD"},
                {PM: 7.904, CR: "SEG NB ON FR EB CALAVRAS RD"},
                {PM: 7.905, CR: "SEG NB ON FR WB CALAVRAS RD"},
                {PM: 7.994, CR: "NB ON FR CALAVRAS RD"},
                {PM: 8.021, CR: "SB OFF TO CALAVRAS RD"},
                {PM: 8.274, CR: "NB OFF TO JACKLIN RD"},
                {PM: 8.291, CR: "SB ON FROM JACKLIN RD"},
                {PM: 8.378, CR: "TULARCITOS CR RCB"},
                {PM: 8.496, CR: "JACKLIN RD UC"},
                {PM: 8.751, CR: "SB OFF TO JACKLIN RD"},
                {PM: 8.764, CR: "NB ON FROM JACKLIN RD"},
                {PM: 9.270, CR: "CALERA CREEK"},
                {PM: 9.834, CR: "NB OFF TO SCOTT CREEK RD"},
                {PM: 9.931, CR: "SB ON FROM SCOTT CREEK RD"},
                {PM: 9.935, CR: "END OF COUNTY"}],
                HWY880: [{PM: 0.000, CR: "JCT 280 CONN OC"},
{PM: 0.032, CR: "SB ON FR SB COLL"},
{PM: 0.050, CR: "SEG NB OFF TO NB COLL"},
{PM: 0.075, CR: "SEG SB COLL FR STEVENS CREEK"},
{PM: 0.091, CR: "SEG SBOFF TO SB RTE 280"},
{PM: 0.094, CR: "NORTH CONN OC"},
{PM: 0.149, CR: "SEG NB COL FR NB17/NB280"},
{PM: 0.222, CR: "SB OFF TO RTE 280"},
{PM: 0.305, CR: "SEG FR NB COL TO EB STEVENS CREEK"},
{PM: 0.306, CR: "SEG FR NB COL TO WB STEVENS CREEK"},
{PM: 0.312, CR: "SEG TO SB COL FR EB STEVENS CREEK"},
{PM: 0.313, CR: "SEG TO SB COL FR WB STEVENS CREEK"},
{PM: 0.334, CR: "NB ON FR SB RTE 280"},
{PM: 0.338, CR: "JCT NB CONN FROM RT 280"},
{PM: 0.408, CR: "STEVENS CREEK RD OC"},
{PM: 0.501, CR: "SEG SB OFF TO EB STEVENS CREEK"},
{PM: 0.502, CR: "SEG SB OFF TO WB STEVENS CREEK"},
{PM: 0.514, CR: "SEG NB ON FR EB STEVENS CREEK/NB 280"},
{PM: 0.515, CR: "SEG NB ON FR WB STEVENS CREEK"},
{PM: 0.574, CR: "NB ON FR STEVE CREEK/NB 280"},
{PM: 0.621, CR: "SB OFF TO STEVENS CREEK"},
{PM: 0.669, CR: "FOREST AVE UC BR"},
{PM: 0.881, CR: "HEDDING ST UC BR"},
{PM: 1.194, CR: "NB OFF TO EB BASCOM AVE"},
{PM: 1.251, CR: "BASCOM AVE UC BR"},
{PM: 1.251, CR: "SB ON FROM EB BASCOM AVE"},
{PM: 1.281, CR: "SB ON FROM WB BASCOM AVE"},
{PM: 1.284, CR: "NB OFF TO WB BASCOM AVE"},
{PM: 1.334, CR: "NB ON FROM BASCOM AVE"},
{PM: 1.361, CR: "SB OFF TO BASCOM AVE"},
{PM: 1.734, CR: "PARK AVE OC BR"},
{PM: 1.941, CR: "SB ON FR SB RTE 82"},
{PM: 1.984, CR: "NB OFF TO RTE 82"},
{PM: 2.044, CR: "NB ON FR SB RTE 82"},
{PM: 2.075, CR: "JCT 82/880 "},
{PM: 2.101, CR: "SB ON FR NB RTE 82"},
{PM: 2.204, CR: "NB ON FR NB RTE 82"},
{PM: 2.210, CR: "SB OFF TO RTE 82"},
{PM: 2.380, CR: "LAUREL ST OH BR"},
{PM: 2.551, CR: "SB ON FROM EB COLEMAN AVE"},
{PM: 2.654, CR: "NB OFF TO COLEMAN AVE"},
{PM: 2.667, CR: "COLEMAN ST OC BR"},
{PM: 2.691, CR: "SB ON FROM WB COLEMAN AVE"},
{PM: 2.704, CR: "NB ON FROM COLEMAN AVE"},
{PM: 2.731, CR: "SB OFF TO COLEMAN AVE"},
{PM: 3.148, CR: "GUADALUPE RIVER BR"},
{PM: 3.187, CR: "JCT ST 87"},
{PM: 3.214, CR: "GUADALUPE OC"},
{PM: 3.441, CR: "SB ON FR EB NORTH 1ST ST"},
{PM: 3.444, CR: "NB OFF TO NORTH 1ST ST"},
{PM: 3.514, CR: "NB ON FR EB NORTH 1ST ST"},
{PM: 3.565, CR: "NORTH 1ST ST UC BR"},
{PM: 3.598, CR: "EB NORTH 1ST ST UC"},
{PM: 3.641, CR: "SB ON FR WB NORTH 1ST ST"},
{PM: 3.731, CR: "SB OFF TO NORTH 1ST ST"},
{PM: 3.734, CR: "NB ON FR WB NORTH 1ST ST"},
{PM: 3.785, CR: "NORTH 4TH ST UC BR"},
{PM: 3.935, CR: "DUM SB ON FR SB RTE 101"},
{PM: 3.952, CR: "NB OFF TO SB RTE 101"},
{PM: 4.011, CR: "SB OFF TO SB RTE 101"},
{PM: 4.022, CR: "DUM NB ON FR SB RTE 101"},
{PM: 4.059, CR: "JCT 880/101 SEP"},
{PM: 4.078, CR: "JCT ST 101"},
{PM: 4.133, CR: "DUM SB ON FR NB RTE 101"},
{PM: 4.134, CR: "NB OFF TO NB RTE 101"},
{PM: 4.212, CR: "DUM NB ON FR NB RTE 101"},
{PM: 4.275, CR: "OLD BAYSHORE UC"},
{PM: 4.374, CR: "NB OFF TO E GISH ROAD"},
{PM: 4.391, CR: "SB ON FROM OLD BAYSHORE"},
{PM: 4.501, CR: "SB OFF TO OLD BAYSHORE"},
{PM: 4.504, CR: "NB ON FR E GISH ROAD"},
{PM: 5.124, CR: "NB OFF TO BROKAW RD"},
{PM: 5.214, CR: "NB ON FR BROKAW RD"},
{PM: 5.221, CR: "SB ON FR BROKAW RD"},
{PM: 5.337, CR: "COYOTE CREEK UC BR"},
{PM: 5.531, CR: "SB OFF TO OTOOLE AVE"},
{PM: 6.391, CR: "NB OFF TO MONTAGUE EXPRESSWAY"},
{PM: 6.446, CR: "SB ON FR MONTAGUE EXPRESSWAY"},
{PM: 6.537, CR: "SEG SB ON FR NB MONTAGUE EXPRESSWAY"},
{PM: 6.538, CR: "SEG SB ON FR SB MONTAGUE EXPRESSWAY"},
{PM: 6.555, CR: "SEG NBOFF TOSB MONTAGUE EXPRESSWAY"},
{PM: 6.556, CR: "SEG NBOFF TONB MONTAGUE EXPRESSWAY"},
{PM: 6.701, CR: "MONTAGUE EXPRESSWAY OC"},
{PM: 6.712, CR: "MILPITAS CITY LIMITS"},
{PM: 6.794, CR: "SEG SB OFF TO SB MONTAGUE EXPRESSWAY"},
{PM: 6.795, CR: "SEG SB OFF TO NB MONTAGUE EXPRESSWAY"},
{PM: 6.859, CR: "SEG NB ON FR NB MONTAGUE EXPRESSWAY"},
{PM: 6.860, CR: "SEG NB ON FR SB MONTAGUE EXPRESSWAY"},
{PM: 6.923, CR: "SB OFF TO MONTAGUE EXPRESSWAY"},
{PM: 6.972, CR: "NB ON FR MONTAGUE EXPRESSWAY"},
{PM: 7.446, CR: "NB OFF TO GREAT MALL PKWY"},
{PM: 7.490, CR: "MILPITAS CITY LIMITS"},
{PM: 7.525, CR: "SB ON FR GREAT MALL PKWY"},
{PM: 7.653, CR: "NB ON FR GREAT MALL PKWY"},
{PM: 7.690, CR: "GREAT MALL PKWY OC"},
{PM: 7.994, CR: "SB ON FR ROUTE 237"},
{PM: 8.073, CR: "NB OFF TO RTE 237"},
{PM: 8.117, CR: "SB OFF TO TASMAN/GREAT MALL"},
{PM: 8.266, CR: "SEG SB ON FR EB RTE 237"},
{PM: 8.390, CR: "NB ON FR WB237/MCCARTHY"},
{PM: 8.422, CR: "JCT 237/880 SEP"},
{PM: 8.470, CR: "SB ON FR WB RTE 237"},
{PM: 8.583, CR: "NB ON FR WB RTE 237"},
{PM: 8.636, CR: "SB OFF TO EB RTE 237"},
{PM: 8.784, CR: "SB OFF TO WB RTE 237"},
{PM: 8.847, CR: "NB ON FR EB RTE 237"},
{PM: 10.180, CR: "NB OFF TO CALIFORNIA CIRCLE"},
{PM: 10.376, CR: "PENITENCIA CREEK BR"},
{PM: 10.407, CR: "DIXON RD OC BR"},
{PM: 10.484, CR: "NB OFF TO DIXON RD"},
{PM: 10.502, CR: "END OF COUNTY"}]
			}]
		}
	},
        MRN: {
            Route: {
                Highways: [{
                    HWY1: [{HWY: 001, PM: 0.000, CR: "NORTH JCT ST 101 MANZANITA"},
{HWY: 001, PM: 0.040, CR: "MANZANITA PARKING LOT MAINT STATION"},
{HWY: 001, PM: 0.100, CR: "CONN TO SB 101 RAMPS LT"},
{HWY: 001, PM: 0.170, CR: "SB OFF TO SB RTE 101"},
{HWY: 001, PM: 0.390, CR: "TENNESSEE VALLEY RD LT"},
{HWY: 001, PM: 0.423, CR: "COYOTE CREEK"},
{HWY: 001, PM: 0.650, CR: "ALMONTE BLVD"},
{HWY: 001, PM: 0.650, CR: "ALMONTE BLVD LT ROUTE 1"},
{HWY: 001, PM: 0.760, CR: "FLAMINGO LT & GIBSON AVE RT"},
{HWY: 001, PM: 0.880, CR: "DOLAN AVE RT"},
{HWY: 001, PM: 0.950, CR: "ROSS DR LT"},
{HWY: 001, PM: 1.010, CR: "TENNESSEE AVE RT"},
{HWY: 001, PM: 1.190, CR: "LAUREL WAY LT"},
{HWY: 001, PM: 1.250, CR: "POPLAR ST LT & SUNSET WAY RT"},
{HWY: 001, PM: 1.310, CR: "PINE ST"},
{HWY: 001, PM: 1.310, CR: "PINE ST LT & PINEHILL RD RT"},
{HWY: 001, PM: 1.370, CR: "SPRUCE ST LT"},
{HWY: 001, PM: 1.430, CR: "ASH ST LT"},
{HWY: 001, PM: 1.460, CR: "MAPLE ST & NORTHERN AVE LT"},
{HWY: 001, PM: 1.520, CR: "SHASTA WAY LT"},
{HWY: 001, PM: 1.720, CR: "PINECREST RD RT"},
{HWY: 001, PM: 1.800, CR: "PALMA WAY LT"},
{HWY: 001, PM: 1.910, CR: "LORING AVE"},
{HWY: 001, PM: 1.910, CR: "LORING AVE RT"},
{HWY: 001, PM: 2.390, CR: "CHAMBERLAIN CT LT"},
{HWY: 001, PM: 2.520, CR: "WEST CALIFORNIA AVE RT"},
{HWY: 001, PM: 2.840, CR: "ERICA RD LT"},
{HWY: 001, PM: 3.350, CR: "PANORAMIC HWY SOUTH"},
{HWY: 001, PM: 3.350, CR: "RT PANORAMIC HWY"},
{HWY: 001, PM: 5.700, CR: "PACIFIC WY & MUIR BEACH LT"},
{HWY: 001, PM: 5.920, CR: "MUIR WOODS RD"},
{HWY: 001, PM: 5.920, CR: "RT MUIR WOODS FRANK"},
{HWY: 001, PM: 6.024, CR: "BIG LAGOON"},
{HWY: 001, PM: 6.380, CR: "SEASCAPE DR"},
{HWY: 001, PM: 6.970, CR: "MUIR BEACH OVERLOOK"},
{HWY: 001, PM: 12.210, CR: "PANORAMIC HWY NORTH"},
{HWY: 001, PM: 12.210, CR: "PANORAMIC HWY"},
{HWY: 001, PM: 12.330, CR: "ARENAL AVE"},
{HWY: 001, PM: 12.367, CR: "ESKOOT CREEK"},
{HWY: 001, PM: 12.370, CR: "BELVEDERE AVE"},
{HWY: 001, PM: 12.414, CR: "STINSON BEACH"},
{HWY: 001, PM: 12.540, CR: "CALLE DEL MAR"},
{HWY: 001, PM: 12.590, CR: "STINSON BEACH STATE"},
{HWY: 001, PM: 12.650, CR: "CALLE DEL PINOS"},
{HWY: 001, PM: 12.690, CR: "CALLE DEL PRADERO"},
{HWY: 001, PM: 12.730, CR: "CALLE DEL SIERRA"},
{HWY: 001, PM: 12.770, CR: "CALLE DEL ONDA"},
{HWY: 001, PM: 12.780, CR: "CALLE DEL ARROYO"},
{HWY: 001, PM: 17.066, CR: "BOLINAS RD"},
{HWY: 001, PM: 17.066, CR: "FAIRFAX BOLINAS RD"},
{HWY: 001, PM: 17.200, CR: "BOLINAS RD"},
{HWY: 001, PM: 17.200, CR: "OLEMA-BOLINAS RD"},
{HWY: 001, PM: 17.570, CR: "HORSESHOE HILL ROAD"},
{HWY: 001, PM: 22.809, CR: "OLEMA CREEK"},
{HWY: 001, PM: 26.509, CR: "SIR FRANCIS DRAKE BLVD"},
{HWY: 001, PM: 26.650, CR: "BEAR VALLEY RD"},
{HWY: 001, PM: 28.490, CR: "SIR FRANCIS DRAKE BLVD"},
{HWY: 001, PM: 28.509, CR: "LAGUNITAS CREEK"},
{HWY: 001, PM: 28.600, CR: "SIR FRANCIS DRAKE BLVD NORTH"},
{HWY: 001, PM: 28.600, CR: "B ST"},
{HWY: 001, PM: 28.690, CR: "MESA RD LT ROUTE 1"},
{HWY: 001, PM: 28.760, CR: "SECOND ST"},
{HWY: 001, PM: 28.830, CR: "THIRD ST"},
{HWY: 001, PM: 28.870, CR: "FOURTH ST & A ST"},
{HWY: 001, PM: 28.920, CR: "MESA RD"},
{HWY: 001, PM: 29.050, CR: "MANANA WAY"},
{HWY: 001, PM: 29.220, CR: "VIENTO WAY"},
{HWY: 001, PM: 29.330, CR: "POINT REYES-PETALUMA RD"},
{HWY: 001, PM: 29.853, CR: "TOMASINI CANYON"},
{HWY: 001, PM: 30.000, CR: "MESA RD"},
{HWY: 001, PM: 30.250, CR: "CYPRESS RD"},
{HWY: 001, PM: 34.969, CR: "ELLIS CREEK"} ,
{HWY: 001, PM: 36.490, CR: "MARCONI PROPERTY RD RT"},
{HWY: 001, PM: 38.409, CR: "MARSHALL-PETALUMA RD"},
{HWY: 001, PM: 40.410, CR: "CLARK RD RT"},
{HWY: 001, PM: 41.730, CR: "MILLER PARK"},
{HWY: 001, PM: 44.448, CR: "WALKER CR"},
{HWY: 001, PM: 45.360, CR: "TOMALES-PETALUMA RD"},
{HWY: 001, PM: 45.509, CR: "TOMALES"},
{HWY: 001, PM: 45.660, CR: "DILLON BEACH RD"},
{HWY: 001, PM: 45.660, CR: "DILLON BEACH LT & 1ST ST RT"},
{HWY: 001, PM: 45.790, CR: "SECOND ST"},
{HWY: 001, PM: 47.405, CR: "STEMPLE CREEK"},
{HWY: 001, PM: 47.605, CR: "FALLON CREEK"},
{HWY: 001, PM: 47.840, CR: "WHITACKER LT & FALLON RT"},
{HWY: 001, PM: 47.860, CR: "TWO ROCK RD"},
{HWY: 001, PM: 50.467, CR: "ESTERO AMERICANO"},
{HWY: 001, PM: 50.509, CR: "END OF COUNTY"}],
                    HWY37: [{PM: 11.200, CR: "SOUTH JCT 101 IGNACIO WYE"},
                    {PM: 11.385, CR: "EB ON FR SB 101 / S MVTP"},
                    {PM: 11.389, CR: "WB OFF TO NB RTE 101"},
                    {PM: 11.505, CR: "EB OFF TO FRONTAGE RD"},
                    {PM: 11.585, CR: "WB ON FR FRONTAGE RD"},
                    {PM: 11.620, CR: "EB ON FR FRONTAGE RD"},
                    {PM: 11.668, CR: "WB OFF TO FRONTAGE RD"},
                    {PM: 11.961, CR: "NOVATO CREEK"},
                    {PM: 13.044, CR: "SIMONDS SLOUGH"},
                    {PM: 13.636, CR: "WB ON FR ATHERTON AVE"},
                    {PM: 13.654, CR: "EB OFF TO ATHERTON/HARBOR"},
                    {PM: 13.705, CR: "WB OFF TO ATHERTON AVE"},
                    {PM: 13.773, CR: "ATHERTON AVE UC"},
                    {PM: 14.080, CR: "HARBOR DR - LT"},
                    {PM: 14.112, CR: "EB ON FR ATHERTON/HARBOR"},
                    {PM: 14.473, CR: "PETALUMA CR"},
                    {PM: 14.617, CR: "END OF COUNTY"}],
                    HWY101: [],
                    HWY131: [],
                    HWY580: [{PM: 7.786, CR: "END OF COUNTY"},
{PM: 0.000, CR: "RICHMOND/SAN RAFAEL BRIDGE CONTINUED"},
{PM: 2.265, CR: "BEG STEEL MED BAR"},
{PM: 2.477, CR: "WEST END RICHMOND/SAN RAFAEL BRIDGE"},
{PM: 2.529, CR: "WB OFF TO SAN QUENTIN"},
{PM: 2.540, CR: "EB ON FR SAN QUENTIN"},
{PM: 2.633, CR: "SAN QUENTIN UC RL"},
{PM: 2.817, CR: "EB OFF TO SAN QUENTIN"},
{PM: 2.861, CR: "WB ON FR SAN QUENTIN"},
{PM: 3.087, CR: "JCT OFF CON RT TO"},
{PM: 3.087, CR: "WB OFF TO SIR FRAN DRAK"},
{PM: 3.177, CR: "JCT ON CON LT FROM"},
{PM: 3.177, CR: "EB ON FR SIR FRAN DRAKE"},
{PM: 3.293, CR: "SIR FRANCIS DRAKE BLVD"},
{PM: 4.383, CR: "WB OFF TO BELLAM BLVD"},
{PM: 4.402, CR: "EB ON FR BELLAM BLVD"},
{PM: 4.498, CR: "BELLAM BLVD UC"},
{PM: 4.610, CR: "WB ON FR BELLAM BLVD"},
{PM: 4.622, CR: "EB OFF TO BELLAM BLVD"},
{PM: 4.678, CR: "SAN QTN WYE SEP"},
{PM: 4.782, CR: "JCT ST 101"}]
                }]
            }
        },
        SOL: {
            Route: {
                Highways: [{
                    HWY12: [{HWY: 012, PM: 2.430, CR: "RED TOP RD RT"},
{HWY: 012, PM: 2.756, CR: "ST 12/80 SEP BR"},
{HWY: 012, PM: 2.794, CR: "WEST JCT 80 RTE BREAK"},
{HWY: 012, PM: 2.014, CR: "WB ON FR ABERNATHY & CHADBOURNE"},
{HWY: 012, PM: 2.024, CR: "EB OFF TO CHADBOURNE RD"},
{HWY: 012, PM: 2.224, CR: "CHADBOURNE RD UC"},
{HWY: 012, PM: 2.460, CR: "WB OFF ABERNATHY CHADBOURNE"},
{HWY: 012, PM: 2.461, CR: "EB ON FR CHADBOURNE RD"},
{HWY: 012, PM: 3.206, CR: "BECK AVE BYPASS RTE 12"},
{HWY: 012, PM: 4.072, CR: "PENNSYLVANIA AVE"},
{HWY: 012, PM: 4.277, CR: "EB OFF TO WEBSTER"},
{HWY: 012, PM: 4.376, CR: "WB ON FR JACKSON"},
{HWY: 012, PM: 4.388, CR: "EB ON FR WEBSTER"},
{HWY: 012, PM: 4.474, CR: "WEBSTER ST UC"},
{HWY: 012, PM: 4.509, CR: "WB OFF TO JACKSON"},
{HWY: 012, PM: 4.645, CR: "EB OFF TO FLORIDA CEDAR"},
{HWY: 012, PM: 4.772, CR: "EB ON FR FLORIDA CEDAR"},
{HWY: 012, PM: 4.794, CR: "WB ON FR RIO VISTA RD"},
{HWY: 012, PM: 4.967, CR: "MARINA CENTER RT"},
{HWY: 012, PM: 5.044, CR: "WB OFF TO RIO VISTA RD"},
{HWY: 012, PM: 5.150, CR: "MARINA BLVD"},
{HWY: 012, PM: 5.500, CR: "VILLAGE DRIVE LT"},
{HWY: 012, PM: 5.760, CR: "GRIZZLY ISLAND RT & SUNSET LT"},
{HWY: 012, PM: 5.909, CR: "EAST SUNSET SHOPING CENTER LT"},
{HWY: 012, PM: 6.055, CR: "SNOW DR LT"},
{HWY: 012, PM: 6.280, CR: "MC COY CREEK"},
{HWY: 012, PM: 6.575, CR: "LAWLER RT & EMPEROR LT"},
{HWY: 012, PM: 6.863, CR: "WOODLARK DR LT"},
{HWY: 012, PM: 7.160, CR: "SCANDIA RD"},
{HWY: 012, PM: 7.474, CR: "LAWLER RT & WALTERS LT"},
{HWY: 012, PM: 8.539, CR: "UNION CREEK"},
{HWY: 012, PM: 8.890, CR: "SCALLY RD RT"},
{HWY: 012, PM: 9.900, CR: "BRANSCOMBE LT & RT"},
{HWY: 012, PM: 10.390, CR: "NURSE SLOUGH LN RT"},
{HWY: 012, PM: 12.500, CR: "DENVERTON RD"},
{HWY: 012, PM: 12.924, CR: "DENVERTON CR"},
{HWY: 012, PM: 13.280, CR: "DENVERTON RD RT"},
{HWY: 012, PM: 13.560, CR: "LAMBIE RD LT SHILOH RD RT"},
{HWY: 012, PM: 14.954, CR: "MUSEUM RT & LAMBIE LT"},
{HWY: 012, PM: 17.164, CR: "OLSEN RD LT & LITTLE HONKER BAY RD RT"},
{HWY: 012, PM: 19.071, CR: "ROUND HILL CR"},
{HWY: 012, PM: 19.169, CR: "JCT 113 LT & BIRDS LANDG RT"},
{HWY: 012, PM: 20.680, CR: "CURRIE RD RT"},
{HWY: 012, PM: 21.190, CR: "MC CLOSKEY RD LT"},
{HWY: 012, PM: 22.680, CR: "AZEVEDO RD"},
{HWY: 012, PM: 22.913, CR: "WELL CR"},
{HWY: 012, PM: 23.714, CR: "LIBERTY ISLAND RD"},
{HWY: 012, PM: 23.714, CR: "SUMMERSET DR LT"},
{HWY: 012, PM: 24.820, CR: "CHURCH RD LT AMERADA RT"},
{HWY: 012, PM: 25.579, CR: "DROUIN DR RT"},
{HWY: 012, PM: 25.780, CR: "MAIN ST RT & HILLSIDE"},
{HWY: 012, PM: 25.940, CR: "GARDNER WAY LT"},
{HWY: 012, PM: 26.000, CR: "5TH ST RT"},
{HWY: 012, PM: 26.148, CR: "EB OFF TO FRONT RTE 84"},
{HWY: 012, PM: 26.150, CR: "VIRGINIA DR LT"},
{HWY: 012, PM: 26.179, CR: "WB ON FR FRONT RTE 84"},
{HWY: 012, PM: 26.215, CR: "EB ON FR FRONT RTE 84"},
{HWY: 012, PM: 26.230, CR: "WB OFF TO FRONT RTE 84"},
{HWY: 012, PM: 26.242, CR: "SACRAMENTO RIVER"},
{HWY: 012, PM: 26.276, CR: "JCT RTE 84 NORTH"},
{HWY: 012, PM: 26.410, CR: "END OF COUNTY"}],
                    HWY29: [],
                    HWY37: [{PM: 0.000,  CR: "SON/SOL COUNTY LINE"},
                    {PM: 0.463,  CR: "SEARS POINT RD"},
                    {PM: 1.690,  CR: "SKAGGS ISLAND RD LT"},
                    {PM: 1.690,  CR: "SKAGGS RD LT"},
                    {PM: 8.075,  CR: "EB ON FR WILSON AVE"},
                    {PM: 8.148,  CR: "MARINE WORLD PKWAY"},
                    {PM: 8.273,  CR: "WB ON FR WILSON AVE"},
                    {PM: 8.363,  CR: "WB OFF TO WILSON AVE"},
                    {PM: 8.445,  CR: "SACRAMENTO ST"},
                    {PM: 8.915,  CR: "WHITE SLOUGH "},
                    {PM: 9.350,  CR: "EB OFF TO RTE 29"},
                    {PM: 9.490,  CR: "EB ON FR SB RTE 29"},
                    {PM: 9.534,  CR: "WB ON FR SB RTE 29"},
                    {PM: 9.601,  CR: "RTE 37/29 SEP "},
                    {PM: 9.665,  CR: "JCT RTE 29/37"},
                    {PM: 9.754,  CR: "DR WB ON FR NB RTE 29"},
                    {PM: 9.785,  CR: "END 29/37 SEP "},
                    {PM: 9.791,  CR: "EB ON FR NB RTE 29"},
                    {PM: 9.903,  CR: "BROADWAY OH "},
                    {PM: 9.991,  CR: "EB BROADWAY OH"},
                    {PM: 10.012, CR: "WB OFF TO RTE 29"},
                    {PM: 10.060, CR: "MINI DR UC"},
                    {PM: 10.091, CR: "EB MINI DR UC"},
                    {PM: 10.756, CR: "EB OFF TO FAIRGROUNDS DR"},
                    {PM: 10.803, CR: "WB ON FR FAIRGROUNDS DR"},
                    {PM: 11.051, CR: "EB ON FR FAIRGROUNDS DR"},
                    {PM: 11.093, CR: "WBOFF TO FAIRGROUNDS DR"},
                    {PM: 11.221, CR: "SAGE ST UC  L/R"},
                    {PM: 11.497, CR: "EB OFF TO COLUMBUS PKWY"},
                    {PM: 11.535, CR: "RTE 80 CONN OC"},
                    {PM: 11.728, CR: "JCT 80"},
                    {PM: 11.662, CR: "WB ON FR EB80/COLUMBUS"},
                    {PM: 11.663, CR: "WB 37 ON FR COLUMBUS"},
                    {PM: 11.664, CR: "WB COLUMBUS PKWY"}],
                    HWY80: [{PM: 0.000, CR: "CENTER OF CARQUINEZ OH"},
                    {PM: 0.328, CR: "END CARQUINEZ OH"},
                    {PM: 0.458, CR: "BEGIN TOLL PLAZA RT"},
                    {PM: 0.593, CR: "TOLL PLAZA"},
                    {PM: 0.643, CR: "END TOLL PLAZA, X-OVER"},
                    {PM: 0.954, CR: "EB OFF TO NB RTE 29"},
                    {PM: 1.070, CR: "WB ON FR SB RTE 29"},
                    {PM: 1.144, CR: "JCT ST 29 NORTHWEST"},
                    {PM: 1.219, CR: "EB OFF TO SEQUOIA ST"},
                    {PM: 1.238, CR: "JCT RT TO SEQUOIA ST"},
                    {PM: 1.241, CR: "WB ON FR MARITIMEM ACAD RD"},
                    {PM: 1.260, CR: "WB OFF TO MARITIMEM ACAD RD"},
                    {PM: 1.272, CR: "JCT SEQUOIA ST LEFT"},
                    {PM: 1.671, CR: "EB OFF TO MAGAZINE ST"},
                    {PM: 1.723, CR: "EB ON FR MAGAZINE ST"},
                    {PM: 1.733, CR: "WB ON FR MAGAZINE ST"},
                    {PM: 1.763, CR: "WB OFF TO MAGAZINE ST"},
                    {PM: 1.776, CR: "MAGAZINE ST OC"},
                    {PM: 2.129, CR: "EB OFF TO EB 780"},
                    {PM: 2.130, CR: "EB OFF TO WB 780"},
                    {PM: 2.148, CR: "WB ON FR WB 780"},
                    {PM: 2.149, CR: "WB ON FR EB 780"},
                    {PM: 2.220, CR: "80/780 SEP"},
                    {PM: 2.235, CR: "JCT 780"},
                    {PM: 2.322, CR: "EB OFF TO BENICIA RD"},
                    {PM: 2.326, CR: "EB ON FR EB 780/LEM"},
                    {PM: 2.327, CR: "EB ON FR WB 780"},
                    {PM: 2.348, CR: "WB OFF TO WB 780/LEM"},
                    {PM: 2.349, CR: "WB OFF TO EB 780"},
                    {PM: 2.451, CR: "EB ON FR RTE 780"},
                    {PM: 2.462, CR: "WB OFF TO RTE 780"},
                    {PM: 2.796, CR: "WB ON FR GEORGIA ST"},
                    {PM: 2.878, CR: "WB OFF TO GEORGIA ST"},
                    {PM: 2.881, CR: "GEORGIA ST OC"},
                    {PM: 2.891, CR: "EB OFF TO GEORGIA ST"},
                    {PM: 2.968, CR: "EB ON FR GEORGIA ST"},
                    {PM: 3.124, CR: "EB OFF TO SPRINGS RD"},
                    {PM: 3.130, CR: "WB ON FR SPRINGS RD"},
                    {PM: 3.171, CR: "EB ON FR SPRINGS RD"},
                    {PM: 3.205, CR: "WB OFF TO SPRINGS RD"},
                    {PM: 3.233, CR: "SPRINGS RD OC"},
                    {PM: 3.347, CR: "EB OFF TO COLL TENNESSEE ST"},
                    {PM: 3.370, CR: "WB ON FR COLL TENNESSEE ST"},
                    {PM: 3.420, CR: "WB ON FR WB TENNESSEE ST"},
                    {PM: 3.443, CR: "EB OFF TO HUMBOLT ST"},
                    {PM: 3.444, CR: "EB OFF TO ADMIRAL"},
                    {PM: 3.494, CR: "TENNESSEE ST OC"},
                    {PM: 3.563, CR: "WB OFF TO EB TENNESSEE ST"},
                    {PM: 3.564, CR: "WB OFF TO WB TENNESSEE ST"},
                    {PM: 3.597, CR: "EB ON FR HUMBOLT ST"},
                    {PM: 3.598, CR: "EB ON FR ADMIRAL"},
                    {PM: 3.642, CR: "EB ON FR COLL TENNESSEE ST"},
                    {PM: 3.679, CR: "WB OFF TO COLL TENNESSEE ST"},
                    {PM: 4.015, CR: "EB OFF TO EB REDWOOD ST"},
                    {PM: 4.317, CR: "WB ON FR REDWOOD ST"},
                    {PM: 4.432, CR: "REDWOOD ST OC"},
                    {PM: 4.502, CR: "EB OFF TO REDWOOD ST"},
                    {PM: 4.507, CR: "WB OFF TO REDWOOD ST"},
                    {PM: 4.579, CR: "EB ON FR REDWOOD ST"},
                    {PM: 5.263, CR: "EB OFF TO 37/COLUMBUS PKWY"},
                    {PM: 5.441, CR: "EB CONN TO WB 37"},
                    {PM: 5.442, CR: "EB TO COLUMBUS PKWY"},
                    {PM: 5.526, CR: "WB ON FR EB RTE 37"},
                    {PM: 5.634, CR: "JCT 37,W."},
                    {PM: 5.680, CR: "80 SEP"},
                    {PM: 5.741, CR: "EB ON FRM COLUMBUS PKWY"},
                    {PM: 5.752, CR: "WB ON FRM COLUMBUS PKWY"},
                    {PM: 5.816, CR: "RTE 37 CONN OC"},
                    {PM: 5.888, CR: "WB OFF TO COLUMBUS PKWY"},
                    {PM: 6.087, CR: "EB ON FR EB 37"},
                    {PM: 6.115, CR: "WB OFF TO WB 37"},
                    {PM: 6.517, CR: "WB ON FR TRUCK RA"},
                    {PM: 6.814, CR: "SOL/NAP CO LINE"},
                    {PM: 8.103, CR: "AMERICAN CANYON RD"},
                    {PM: 8.302, CR: "WB OFF TO AMERICAN CANYON"},
                    {PM: 8.355, CR: "EB ON FR AMERICAN CANYON"},
                    {PM: 9.654, CR: "LYNCH RD UC LT"},
                    {PM: 9.656, CR: "LYNCH RD UC RT"},
                    {PM: 11.167, CR: "EB OFF TO RED TOP RD"},
                    {PM: 11.186, CR: "WB ON FR RED TOP RD"},
                    {PM: 11.394, CR: "RED TOP RD UC"},
                    {PM: 11.494, CR: "WB OFF TO RED TOP RD"},
                    {PM: 11.507, CR: "EB ON FR RED TOP RD"},
                    {PM: 11.923, CR: "CORDELIA UP"},
                    {PM: 11.976, CR: "JCT 12, W/80 SEP (JAMESON)"},
                    {PM: 12.124, CR: "RTE 12 WB OFF (JAMESON)"},
                    {PM: 12.258, CR: "RTE 12 EB ON (JAMESON)"},
                    {PM: 12.416, CR: "EB OFF TO GREEN VALLEY/680"},
                    {PM: 12.560, CR: "EB OFF TO GREEN VALLEYL"},
                    {PM: 12.561, CR: "EB OFF TO SB 680"},
                    {PM: 12.601, CR: "WB ON FROM GR VAL RD"},
                    {PM: 12.738, CR: "GREEN VALLEY OC"},
                    {PM: 12.839, CR: "JCT 680. 680/80 SEP"},
                    {PM: 12.910, CR: "GREEN VALLEY CR"},
                    {PM: 12.920, CR: "EB ON FR NB 680"},
                    {PM: 12.921, CR: "EB ON FR GREEN VALLEY"},
                    {PM: 12.981, CR: "WB ON FR NB 680"},
                    {PM: 13.075, CR: "EB ON FR GREEN VALLEY/680"},
                    {PM: 13.140, CR: "WB OFF TO SB RTE 680"},
                    {PM: 13.334, CR: "EB OFF TO SUISUN VAL"},
                    {PM: 13.486, CR: "SUISUN VAL RD OC"},
                    {PM: 13.576, CR: "WB OFF TO SUISUN VAL"},
                    {PM: 13.643, CR: "EB ON FR SUISUN VAL"},
                    {PM: 14.163, CR: "EB OFF TO WEIGH STATION"},
                    {PM: 14.188, CR: "TRUCK SCALE ON RAMP LT"},
                    {PM: 14.188, CR: "WB ON FR WEIGH STATION"},
                    {PM: 14.397, CR: "EB ON FR WEIGH STATION"},
                    {PM: 14.420, CR: "WB OFF TO WEIGH STATION"},
                    {PM: 14.457, CR: "TRUCK SCALE OFF RAMP LT"},
                    {PM: 14.547, CR: "SUISUN CREEK"},
                    {PM: 15.450, CR: "WB ON FR RTE 12 (FAIRFIELD)"},
                    {PM: 15.640, CR: "EB OFF TO RTE 12 (FAIRFIELD)"},
                    {PM: 15.815, CR: "E.JCT 12. 12/80 CONN OC"},
                    {PM: 15.980, CR: "EB OFF TO ABERNATHY RD"},
                    {PM: 16.020, CR: "WB ON FR ABERNATHY ROAD"},
                    {PM: 16.152, CR: "ABERNATHY RD OC"},
                    {PM: 16.290, CR: "EB ON FR ABERNATHY ROAD"},
                    {PM: 16.340, CR: "WB OFF TO ABERNATHY RD"},
                    {PM: 16.628, CR: "EB OFF TO W.TEXAS/MAGLN"},
                    {PM: 16.908, CR: "EB ON FR MAGELLAN RD"},
                    {PM: 17.023, CR: "LEDGEWOOD CREEK"},
                    {PM: 17.074, CR: "WB ON FR W.TEXAS/ROCKVL"},
                    {PM: 17.197, CR: "TEXAS ST UC"},
                    {PM: 17.268, CR: "W FAIRFIELD UC"},
                    {PM: 17.527, CR: "EB ON FR BECK RD"},
                    {PM: 17.571, CR: "WB OFF TO OLIVER RD"},
                    {PM: 17.804, CR: "EB OFF TO TRAVIS BV E/W"},
                    {PM: 17.862, CR: "WB ON FR TRAVIS BLVD EB"},
                    {PM: 17.883, CR: "EB OFF TO TRAVIS WB"},
                    {PM: 17.884, CR: "EB OFF TO TRAVIS EB"},
                    {PM: 17.917, CR: "TRAVIS BLVD OC"},
                    {PM: 17.939, CR: "WB ON FR TRAVIS BLVD WB"},
                    {PM: 18.053, CR: "WB OFF TO TRAVIS BV E/W"},
                    {PM: 18.078, CR: "EB ON FR TRAVIS BLV E/W"},
                    {PM: 18.924, CR: "WB ON FR AIR BASE PKWY"},
                    {PM: 19.027, CR: "EB OFF TO AIR BASE PKWY"},
                    {PM: 19.141, CR: "WB OFF TO EB AIRBASE PKWY"},
                    {PM: 19.176, CR: "AIRBASE PKWY OC"},
                    {PM: 19.284, CR: "EB ON FR AIR BASE PKWY"},
                    {PM: 19.330, CR: "WB OFF TO WB AIR B PKWY"},
                    {PM: 20.795, CR: "EB OFF TO N.TEXAS ST"},
                    {PM: 20.925, CR: "N FAIRFIELD OC"},
                    {PM: 21.016, CR: "WB ON FR N.TEXAS ST"},
                    {PM: 21.026, CR: "EB ON FR N.TEXAS ST"},
                    {PM: 21.179, CR: "WB OFF TO N.TEXAS ST"},
                    {PM: 22.990, CR: "EB OFF TO CHERRY GLEN"},
                    {PM: 23.055, CR: "WB ON FR CHERRY GLEN"},
                    {PM: 23.134, CR: "CHERRY GLEN OC"},
                    {PM: 23.240, CR: "EB ON FR CHERRY GLEN"},
                    {PM: 23.291, CR: "WB OFF TO CHERRY GLEN"},
                    {PM: 23.821, CR: "WB ON FR PLEASANTS VAL"},
                    {PM: 23.838, CR: "EB OFF TO PLEASANTS VAL"},
                    {PM: 23.927, CR: "EB ON FR PLEASANTS VAL"},
                    {PM: 23.949, CR: "WB OFF TO PLEASANTS VAL"},
                    {PM: 23.958, CR: "PLEASANT VALY OC"},
                    {PM: 24.657, CR: "WB OFF TO CHERRY GLEN"},
                    {PM: 25.031, CR: "ALAMO CREEK"},
                    {PM: 25.117, CR: "WB ON FROM ALAMO AVE"},
                    {PM: 25.131, CR: "EB OFF TO ALAMO DR"},
                    {PM: 25.225, CR: "EB OFF TO NB ALAMO"},
                    {PM: 25.226, CR: "EB OFF TO SB ALAMO"},
                    {PM: 25.246, CR: "WB OFF TO ALAMO AVE"},
                    {PM: 25.306, CR: "ALAMO DRIVE OC"},
                    {PM: 25.384, CR: "EB ON FROM ALAMO AVE"},
                    {PM: 25.771, CR: "EB OFF TO DAVIS ST"},
                    {PM: 25.828, CR: "WB ON FROM DAVIS ST"},
                    {PM: 25.864, CR: "EB ON FROM DAVIS ST"},
                    {PM: 25.926, CR: "WB OFF TO DAVIS ST"},
                    {PM: 25.997, CR: "DAVIS ST OH"},
                    {PM: 26.010, CR: "DAVIS ST"},
                    {PM: 26.256, CR: "EB OFF TO CLIFFSIDE DR"},
                    {PM: 26.272, CR: "WB ON FR MASON/DEPOT"},
                    {PM: 26.360, CR: "EB ON FR CLIFFSIDE DR"},
                    {PM: 26.393, CR: "WB OFF TO MASON/DEPOT"},
                    {PM: 26.460, CR: "MASON ST OH"},
                    {PM: 26.490, CR: "S PACIFIC R/R"},
                    {PM: 26.937, CR: "EB OFF TO ALLISON DR"},
                    {PM: 27.120, CR: "EB ON FR SB ALLISON DR"},
                    {PM: 27.238, CR: "MONTE VISTA OC"},
                    {PM: 27.300, CR: "WB ON FR MONTE VISTA/COLL"},
                    {PM: 27.346, CR: "EB ON FR NB ALLISON DR"},
                    {PM: 27.730, CR: "WB OFF TO MONTE VISTA/COLL"},
                    {PM: 28.002, CR: "EB OFF TO ORANGE/NB505"},
                    {PM: 28.003, CR: "EB OFF TO ORANGE DR"},
                    {PM: 28.004, CR: "EB OFF TO NB 505"},
                    {PM: 28.005, CR: "NB 505 ON FR ORANGE DR"},
                    {PM: 28.006, CR: "NB 505 ON FR ORANGE/EB 80"},
                    {PM: 28.010, CR: "NUT TREE RD OC"},
                    {PM: 28.112, CR: "WB ON FR SB 505"},
                    {PM: 28.154, CR: "E VACAVILLE OC"},
                    {PM: 28.271, CR: "EB ON FR E MONTE VISTA"},
                    {PM: 28.272, CR: "EB ON FR SB 505"},
                    {PM: 28.323, CR: "PINE TREE CR"},
                    {PM: 28.359, CR: "JCT 505 NORTH"},
                    {PM: 28.394, CR: "EB ON FR ORANGE DR"},
                    {PM: 28.554, CR: "WB OFF TO NB 505"},
                    {PM: 28.56 , CR: "HORSE CR"},
                    {PM: 29.248, CR: "HORSE CR"},
                    {PM: 29.653, CR: "EB OFF TO LEISURE TOWN"},
                    {PM: 29.850, CR: "EB ON FR LEISURE TOWN"},
                    {PM: 29.859, CR: "LEISURE TOWN OC"},
                    {PM: 29.867, CR: "WB ON FR LEISURE TOWN"},
                    {PM: 30.010, CR: "WB OFF TO LEISURE TOWN"},
                    {PM: 31.116, CR: "GIBSON CAN CREEK"},
                    {PM: 31.184, CR: "WB ON FR MERIDIAN RD"},
                    {PM: 31.206, CR: "EB OFF TO MERIDIAN RD"},
                    {PM: 31.364, CR: "MERIDIAN RD OC"},
                    {PM: 31.373, CR: "EB ON FR MERIDIAN RD"},
                    {PM: 31.403, CR: "WB OFF TO MERIDIAN RD"},
                    {PM: 32.476, CR: "EB OFF TO MIDWAY RD"},
                    {PM: 32.621, CR: "WB ON FR MIDWAY RD"},
                    {PM: 32.622, CR: "MIDWAY OC"},
                    {PM: 32.779, CR: "WB OFF TO MIDWAY RD"},
                    {PM: 32.787, CR: "EB ON FR MIDWAY RD"},
                    {PM: 32.898, CR: "SWEENEY CREEK"},
                    {PM: 34.478, CR: "MCCUNE CREEK"},
                    {PM: 35.350, CR: "EB OFF TO DIXON/GRANT"},
                    {PM: 35.505, CR: "WB ON FR DIXON/GRANT"},
                    {PM: 35.547, CR: "DIXON GRANT RD OC"},
                    {PM: 35.551, CR: "EB ON FR DIXON/GRANT"},
                    {PM: 35.678, CR: "WB OFF TO DIXON/GRANT"},
                    {PM: 36.695, CR: "EB OFF TO PITT SCHOOL"},
                    {PM: 36.859, CR: "EB ON FR PITT SCHOOL"},
                    {PM: 36.901, CR: "PITT SCHOOL RD OC"},
                    {PM: 36.942, CR: "WB ON FR PITT SCHOOL"},
                    {PM: 37.107, CR: "WB OFF TO PITT SCHOOL"},
                    {PM: 38.143, CR: "WB ON FR CURREY RD"},
                    {PM: 38.180, CR: "EB OFF TO RTE 113 S"},
                    {PM: 38.210, CR: "JCT ST 113,S."},
                    {PM: 38.278, CR: "WB ON FR NB RTE 113 S"},
                    {PM: 38.383, CR: "EB ON FR NB RTE 113 S"},
                    {PM: 38.437, CR: "WB OFF TO RTE 113 S"},
                    {PM: 39.099, CR: "WB OFF TO MILK FARM"},
                    {PM: 39.485, CR: "EB OFF TO PEDRICK RD"},
                    {PM: 39.728, CR: "EB ON FR PEDRICK RD"},
                    {PM: 39.742, CR: "PEDRICK RD OC"},
                    {PM: 39.755, CR: "WB ON FR PEDRICK RD"},
                    {PM: 40.000, CR: "WB OFF TO PEDRICK RD"},
                    {PM: 41.019, CR: "WB ON FR KIDWELL ROAD"},
                    {PM: 41.031, CR: "EB OFF TO KIDWELL ROAD"},
                    {PM: 41.256, CR: "KIDWELL ROAD OC"},
                    {PM: 41.513, CR: "EB ON FR KIDWELL ROAD"},
                    {PM: 41.545, CR: "WB OFF TO KIDWELL ROAD"},
                    {PM: 42.152, CR: "EB OFF TO NB 113 N"},
                    {PM: 42.361, CR: "PUTAH CRK"},
                    {PM: 42.528, CR: "WB ON FR SB 113 N"},
                    {PM: 42.670, CR: "JCT 113, N."},
                    {PM: 42.863, CR: "EB OFF TO OLD DAVIS RD"},
                    {PM: 43.018, CR: "RTE 113/80 SEP"},
                    {PM: 43.214, CR: "WB ON FR OLD DAVIS RD"},
                    {PM: 43.378, CR: "EB ON FR SB 113 N"},
                    {PM: 43.483, CR: "WB OFF TO NB 113 N"},
                    {PM: 43.504, CR: "OLD DAVIS RD"},
                    {PM: 43.738, CR: "WB OFF TO OLD DAVIS RD"},
                    {PM: 43.755, CR: "EB ON FR OLD DAVIS RD"},
                    {PM: 43.941, CR: "DAVIS OH"},
                    {PM: 44.720, CR: "END OF SOLANO COUNTY"}],
                    HWY84: [],
                    HWY128: [],
                    HWY220: [],
                    HWY505: [{PM: 0.000, CR: "JCT 80 ON SEP 505/80 RT"},
                    {PM: 0.143, CR: "SEG SB OFF TO EAST MONTE VISTA"},
                    {PM: 0.144, CR: "SB OFF TO EB 80/EAST MONTE VISTA"},
                    {PM: 0.209, CR: "HORSE CREEK"},
                    {PM: 1.217, CR: "NB OFF TO VACA VALL PKWY"},
                    {PM: 1.255, CR: "SB ON FR VACA VALL PKWY"},
                    {PM: 1.450, CR: "VACA VAL PKWY OC"},
                    {PM: 1.658, CR: "SB OFF TO VACA VALL PKWY"},
                    {PM: 1.674, CR: "NB ON FR VACA VALL PKWY"},
                    {PM: 2.897, CR: "NB OFF TO MIDWAY RD"},
                    {PM: 2.934, CR: "SB ON FR MIDWAY RD"},
                    {PM: 3.058, CR: "MIDWAY RD UC R/L"},
                    {PM: 3.240, CR: "NB ON FR MIDWAY RD"},
                    {PM: 3.251, CR: "SB OFF TO MIDWAY RD"},
                    {PM: 5.193, CR: "SWEENEY CREEK BR"},
                    {PM: 5.205, CR: "SWEENEY CREEK BR"},
                    {PM: 5.418, CR: "NB OFF TO ALLENDALE"},
                    {PM: 5.460, CR: "SB ON FR ALLENDALE"},
                    {PM: 5.571, CR: "ALLENDALE RD UC"},
                    {PM: 5.695, CR: "NB ON FR ALLENDALE"},
                    {PM: 5.716, CR: "SB OFF TO ALLENDALE"},
                    {PM: 7.395, CR: "DRY ARROYO BR"},
                    {PM: 8.542, CR: "WOLFSKILL RD UC"},
                    {PM: 8.546, CR: "WOLFSKILL RD UC"},
                    {PM: 10.247, CR: "SB ON FR PUTAH CREEK RD"},
                    {PM: 10.348, CR: "NB OFF TO PUTAH CREEK RD"},
                    {PM: 10.383, CR: "SB OFF TO PUTAH CREEK RD"},
                    {PM: 10.430, CR: "NB ON FR PUTAH CREEK RD"},
                    {PM: 10.578, CR: "PUTAH CREEK BR"},
                    {PM: 10.626, CR: "END CO-YOL CO AH"}],
                    HWY680: [{PM: 0.000, CR: "CC/SOL CO LINE"},
{PM: 0.358, CR: "BENICIA CITY LIMIT"},
{PM: 0.510, CR: "BRIDGE SERVICE ROAD U/C"},
{PM: 0.570, CR: "BRIDGE SERVICE RD"},
{PM: 0.598, CR: "TOLL PLAZA"},
{PM: 0.640, CR: "PED OC"},
{PM: 0.682, CR: "JCT RTE 780 WB LANES"},
{PM: 0.683, CR: "DUM NB OFF TO WB 780"},
{PM: 0.835, CR: "DUM NB ON FR EB RTE 780"},
{PM: 0.682, CR: "JCT RTE 780 EB LANES"},
{PM: 0.682, CR: "DUM SB ON FR EB 780"},
{PM: 0.755, CR: "780/680 SEP"},
{PM: 0.878, CR: "SB OFF TO WB RTE 780"},
{PM: 0.797, CR: "NB OFF TO BAYSHORE RD"},
{PM: 0.834, CR: "SB ON FR BAYSHORE RD"},
{PM: 1.002, CR: "BENICIA ARSENAL VIADUCT"},
{PM: 1.460, CR: "NB ON FR INDUSTRIAL WAY"},
{PM: 1.463, CR: "SB OFF TO INDUSTRIAL WAY"},
{PM: 2.661, CR: "SB ON FR LAKE HERMAN"},
{PM: 2.662, CR: "NB OFF TO LAKE HERMAN"},
{PM: 2.788, CR: "NB ON FR LAKE HERMAN"},
{PM: 2.819, CR: "LAKE HERMAN RD OC"},
{PM: 2.955, CR: "SB OFF TO LAKE HERMAN"},
{PM: 4.871, CR: "SB ON FR PARISH RD"},
{PM: 4.886, CR: "NB OFF TO PARISH RD"},
{PM: 5.023, CR: "PARISH RD OC"},
{PM: 5.174, CR: "NB ON FR PARISH RD"},
{PM: 5.206, CR: "SB OFF TO PARISH RD"},
{PM: 7.194, CR: "NB OFF TO MARSHVIEW RD"},
{PM: 7.219, CR: "SB ON FR MARSHVIEW RD"},
{PM: 7.324, CR: "MARSHVIEW RD OC"},
{PM: 7.428, CR: "NB ON FR MARSHVIEW RD"},
{PM: 7.462, CR: "SB OFF TO MARSHVIEW RD"},
{PM: 9.823, CR: "NB OFF TO GOLD HILL RD"},
{PM: 9.870, CR: "SB ON FR GOLD HILL RD"},
{PM: 10.018, CR: "SOUTH CORDELIA OC"},
{PM: 10.177, CR: "NB ON FR GOLD HILL RD"},
{PM: 10.191, CR: "SB OFF TO GOLD HILL RD"},
{PM: 10.666, CR: "AMERICA CANYON CREEK"},
{PM: 12.630, CR: "CORDELIA OH"},
{PM: 12.796, CR: "NB OFF TO CORDELIA RD"},
{PM: 13.088, CR: "680/80 SEP LT LN"},
{PM: 13.126, CR: "JCT 80 END RTE CORDELIA"}],
                    HWY780: [{PM: 0.682, CR: "JCT 680"},
{PM: 0.720, CR: "780/680 SEP RT"},
{PM: 0.752, CR: "JCT SB LANE RTE 680"},
{PM: 0.821, CR: "EB OFF TO NB RTE 680"},
{PM: 0.877, CR: "DUM WB ON FR SB 680"},
{PM: 0.918, CR: "PARK RD UC"},
{PM: 1.205, CR: "HOSPITAL RD UC"},
{PM: 1.429, CR: "EB ON FR EAST FIFTH ST"},
{PM: 1.478, CR: "WB OFF TO EAST FIFTH ST"},
{PM: 1.579, CR: "EAST 5TH ST UC"},
{PM: 1.734, CR: "WB ON FR EAST FIFTH ST"},
{PM: 1.748, CR: "EB OFF TO EAST FIFTH ST"},
{PM: 1.881, CR: "EB ON FR EAST SECOND ST"},
{PM: 1.925, CR: "WB OFF TO EAST SECOND ST"},
{PM: 1.956, CR: "EB OFF TO EAST SECOND ST"},
{PM: 2.007, CR: "EAST SECOND ST UC"},
{PM: 2.015, CR: "SECOND ST"},
{PM: 2.204, CR: "WB ON FR E SECOND ST"},
{PM: 2.824, CR: "WB OFF TO SOUTHAMPTON RD"},
{PM: 2.955, CR: "WEST 7TH ST UC"},
{PM: 3.060, CR: "EB ON FR W. 7TH ST"},
{PM: 3.064, CR: "WB ON FR SOUTHAMPTON RD"},
{PM: 3.194, CR: "EB OFF TO W. 7TH ST"},
{PM: 3.655, CR: "EB ON FR W 7TH ST"},
{PM: 3.812, CR: "SOUTHAMPTON UC "},
{PM: 3.995, CR: "WEST BENICIA UC"},
{PM: 4.072, CR: "WB OFF TO MILITARY WEST"},
{PM: 4.108, CR: "EB OFF TO MILITARY WEST"},
{PM: 4.162, CR: "WB ON FR MILITARY WEST"},
{PM: 4.658, CR: "COLUMBUS PKWY, WB OFF"},
{PM: 4.732, CR: "COLUMBUS PKWY, EB ON"},
{PM: 4.774, CR: "COLUMBUS PKWY, WB ON"},
{PM: 4.850, CR: "COLUMBUS PKWY, EB OFF"},
{PM: 4.963, CR: "MILLER RD OC"},
{PM: 5.861, CR: "WB OFF TO GLEN COVE RD"},
{PM: 5.915, CR: "EB ON FR GLEN COVE RD"},
{PM: 6.003, CR: "GLEN COVE RD OC"},
{PM: 6.091, CR: "WB ON FR GLEN COVE RD"},
{PM: 6.154, CR: "EB OFF TO GLEN COVE RD"},
{PM: 6.656, CR: "HOME ACRES AV POC"},
{PM: 6.907, CR: "WB OFF TO CEDAR ST"},
{PM: 6.910, CR: "EB ON FR LAUREL ST"},
{PM: 6.959, CR: "EB OFF TO LAUREL ST"},
{PM: 6.966, CR: "WB ON FR CEDAR ST"},
{PM: 7.065, CR: "LAUREL ST OC"},
{PM: 7.186, CR: "JCT 80"},
{PM: 7.440, CR: "LEMON ST"},
{PM: 7.441, CR: "JCT 780 NON-ADD & LEMON"}]
                }]
            }
        },
        SON: {
            Route: {
                Highways: [{
                    HWY1: [{HWY: 001, PM: 0.190, CR: "PETALUMA-VALLEY FORD RD"},
{HWY: 001, PM: 0.300, CR: "POCOLIMI CR BR"},
{HWY: 001, PM: 1.660, CR: "MIDDLE RD"},
{HWY: 001, PM: 1.770, CR: "SCHOOL ST"},
{HWY: 001, PM: 2.000, CR: "APPROX JCT ST 12 UNC RD"},
{HWY: 001, PM: 2.030, CR: "VALLEY FORD ESTERO LT"},
{HWY: 001, PM: 2.420, CR: "FREESTONE RD"},
{HWY: 001, PM: 2.420, CR: "VALLEY FORD FREESTONE"},
{HWY: 001, PM: 5.380, CR: "BODEGA HWY"},
{HWY: 001, PM: 5.380, CR: "BODEGA HWY RT"},
{HWY: 001, PM: 6.020, CR: "ESTERO LN"},
{HWY: 001, PM: 6.300, CR: "BAY HILL RD"},
{HWY: 001, PM: 8.760, CR: "SOUTH HARBOUR DR LT"},
{HWY: 001, PM: 9.140, CR: "DORAN PARK RD LT"},
{HWY: 001, PM: 9.159, CR: "CHENEY GULCH BR"},
{HWY: 001, PM: 9.190, CR: "HARBOUR WAY"},
{HWY: 001, PM: 9.680, CR: "SMITH BROS LANE LT"},
{HWY: 001, PM: 10.270, CR: "WINDY LN"},
{HWY: 001, PM: 10.370, CR: "KENT AVE"},
{HWY: 001, PM: 10.410, CR: "TAYLOR ST"},
{HWY: 001, PM: 10.500, CR: "BODEGA BAY PO"},
{HWY: 001, PM: 10.500, CR: "BAY FLAT RD"},
{HWY: 001, PM: 10.590, CR: "BODEGA AVE"},
{HWY: 001, PM: 10.620, CR: "WINDY LN"},
{HWY: 001, PM: 11.070, CR: "EASTSHORE RD"},
{HWY: 001, PM: 11.290, CR: "BAY HILL RD RT"},
{HWY: 001, PM: 12.170, CR: "KEEFE AVE"},
{HWY: 001, PM: 12.410, CR: "BEAN AVE"},
{HWY: 001, PM: 12.486, CR: "SALMON CR"},
{HWY: 001, PM: 12.570, CR: "PARK HEADQUARTERS"},
{HWY: 001, PM: 12.860, CR: "SALMON CREEK BEACH"},
{HWY: 001, PM: 13.550, CR: "COLEMAN VALLEY RD"},
{HWY: 001, PM: 14.100, CR: "CARMET DR"},
{HWY: 001, PM: 14.210, CR: "CARMET BEACH"},
{HWY: 001, PM: 14.370, CR: "VIKING STRAND"},
{HWY: 001, PM: 14.750, CR: "PORTUGUESE BEACH"},
{HWY: 001, PM: 14.820, CR: "EUREKA DR"},
{HWY: 001, PM: 14.980, CR: "CALLE DEL SOL"},
{HWY: 001, PM: 15.300, CR: "SCOTTY CREEK"},
{HWY: 001, PM: 16.230, CR: "DUNCANS COVE"},
{HWY: 001, PM: 16.350, CR: "DUNCANS LANDING BEACH"},
{HWY: 001, PM: 16.390, CR: "CLIFF AVE"},
{HWY: 001, PM: 16.790, CR: "WRIGHTS BEACH"},
{HWY: 001, PM: 17.600, CR: "CARLEVARDO WAY LT"},
{HWY: 001, PM: 18.220, CR: "SHELL BEACH"},
{HWY: 001, PM: 18.340, CR: "PACIFIC VIEW DR"},
{HWY: 001, PM: 19.160, CR: "GOAT ROCK BEACH"},
{HWY: 001, PM: 19.680, CR: "WILLOW CREEK RD"},
{HWY: 001, PM: 19.715, CR: "RUSSIAN RIVER"},
{HWY: 001, PM: 20.060, CR: "ROUTE 116 CONN"},
{HWY: 001, PM: 20.100, CR: "JCT ST 116 EAST"},
{HWY: 001, PM: 20.100, CR: "ROUTE 116"},
{HWY: 001, PM: 21.230, CR: "WILLIG DR"},
{HWY: 001, PM: 21.300, CR: "JENNER"},
{HWY: 001, PM: 21.470, CR: "PACIFIC AVE"},
{HWY: 001, PM: 21.500, CR: "LAPORT DR"},
{HWY: 001, PM: 21.790, CR: "BURKE AVE"},
{HWY: 001, PM: 24.504, CR: "RUSSIAN GULCH"},
{HWY: 001, PM: 26.380, CR: "MEYERS GRADE RD"},
{HWY: 001, PM: 32.686, CR: "RD LT TO FORT ROSS"},
{HWY: 001, PM: 33.038, CR: "FORT ROSS RD"},
{HWY: 001, PM: 33.038, CR: "NEW FORT ROSS RD"},
{HWY: 001, PM: 34.353, CR: "COLEMAN GULCH"},
{HWY: 001, PM: 35.540, CR: "TIMBER COVE RD"},
{HWY: 001, PM: 37.020, CR: "STILLWATER COVE PARK RT"},
{HWY: 001, PM: 39.770, CR: "WOODSIDE CAMPGROUND RT"},
{HWY: 001, PM: 39.930, CR: "MOON ROCK CAMPGROUND-LT"},
{HWY: 001, PM: 41.200, CR: "STUMP BEACH LT"},
{HWY: 001, PM: 42.910, CR: "KRUSE RANCH RD"},
{HWY: 001, PM: 48.112, CR: "SKAGGS SPRINGS RD"},
{HWY: 001, PM: 48.112, CR: "STEWARTS PT & SKAGGS SPRINGS RD"},
{HWY: 001, PM: 49.880, CR: "YARDARM DRIVE"},
{HWY: 001, PM: 50.260, CR: "STONECROP REACH"},
{HWY: 001, PM: 50.610, CR: "SEA WALK DR"},
{HWY: 001, PM: 51.020, CR: "MOONRAKER RD"},
{HWY: 001, PM: 51.800, CR: "GALLEONS REACH"},
{HWY: 001, PM: 51.940, CR: "ANNAPOLIS RD"},
{HWY: 001, PM: 52.500, CR: "NAVIGATORS REACH LT"},
{HWY: 001, PM: 52.560, CR: "SPUR CLOSE"},
{HWY: 001, PM: 53.070, CR: "HEADLANDS REACH"},
{HWY: 001, PM: 53.240, CR: "LONGMEADOW RD RT"},
{HWY: 001, PM: 53.470, CR: "WHITESURF RD"},
{HWY: 001, PM: 54.430, CR: "VANTAGE RD"},
{HWY: 001, PM: 54.800, CR: "BREAKERS BEACH LT"},
{HWY: 001, PM: 55.030, CR: "DEERFIELD RD"},
{HWY: 001, PM: 55.250, CR: "WHALEBONE REACH"},
{HWY: 001, PM: 55.650, CR: "BOSUNS REACH"},
{HWY: 001, PM: 56.090, CR: "LEEWARD SPUR"},
{HWY: 001, PM: 57.740, CR: "HALCYON"},
{HWY: 001, PM: 58.050, CR: "FIRE RD RT"},
{HWY: 001, PM: 58.240, CR: "GUALALA POINT LT & PVT RD"},
{HWY: 001, PM: 58.528, CR: "GUALALA RIVER"},
{HWY: 001, PM: 58.583, CR: "END OF COUNTY"}],
                    HWY12: [{HWY: 012, PM: 9.230, CR: "RT LNS RTE 116"},
{HWY: 012, PM: 9.230, CR: "RT LNS RTE 116 & MAIN ST"},
{HWY: 012, PM: 9.290, CR: "LT LNS RTE 116"},
{HWY: 012, PM: 9.340, CR: "BROWN AV LT & BARNES AV RT"},
{HWY: 012, PM: 9.520, CR: "MORRIS ST LT"},
{HWY: 012, PM: 9.625, CR: "LAGUNA SANTA ROSA"},
{HWY: 012, PM: 9.842, CR: "PURPLE DRAW"},
{HWY: 012, PM: 10.640, CR: "DUER RD LT"},
{HWY: 012, PM: 10.790, CR: "OZONE RD LT"},
{HWY: 012, PM: 11.040, CR: "LLANO RD RT"},
{HWY: 012, PM: 11.180, CR: "IRWIN LN LT"},
{HWY: 012, PM: 12.070, CR: "MERCED AVE"},
{HWY: 012, PM: 12.450, CR: "OCCIDENTAL RD"},
{HWY: 012, PM: 12.800, CR: "SANTA ROSA CITY LIMIT"},
{HWY: 012, PM: 12.940, CR: "WRIGHT RD & FULTON RD"},
{HWY: 012, PM: 12.940, CR: "FULTON RD LT & WRIGHT RT"},
{HWY: 012, PM: 14.255, CR: "WB ON FR SB STONY PT RD"},
{HWY: 012, PM: 14.278, CR: "EB OFF TO STONY PT RD"},
{HWY: 012, PM: 14.450, CR: "STONY POINT RD"},
{HWY: 012, PM: 14.500, CR: "WB ON FR NB STONY PT RD"},
{HWY: 012, PM: 14.568, CR: "EB ON FR STONY PT RD"},
{HWY: 012, PM: 14.634, CR: "WB OFF TO STONY PT RD"},
{HWY: 012, PM: 15.148, CR: "EB OFF TO DUTTON AVE"},
{HWY: 012, PM: 15.149, CR: "WB ON FROM DUTTON AVE"},
{HWY: 012, PM: 15.300, CR: "DUTTON AVE UC"},
{HWY: 012, PM: 15.444, CR: "EB ON FROM DUTTON AVE"},
{HWY: 012, PM: 15.467, CR: "WB OFF TO DUTTON AVE"},
{HWY: 012, PM: 15.555, CR: "S SANTA ROSA"},
{HWY: 012, PM: 15.669, CR: "WB ON FR SB 101 3RD ST"},
{HWY: 012, PM: 15.672, CR: "EB OFF TO RTE 101"},
{HWY: 012, PM: 15.703, CR: "OLIVE ST UC"},
{HWY: 012, PM: 15.856, CR: "WB OFF TO SB 101"},
{HWY: 012, PM: 15.901, CR: "EB OFF TO NB 101"},
{HWY: 012, PM: 15.902, CR: "EB OFF TO SB 101"},
{HWY: 012, PM: 15.925, CR: "EB ON FR SB 101 3RD"},
{HWY: 012, PM: 16.065, CR: "WB ON FR NB 101"},
{HWY: 012, PM: 16.195, CR: "WB OFF TO NB 101"},
{HWY: 012, PM: 16.196, CR: "EB ON FR NB 101"},
{HWY: 012, PM: 16.259, CR: "SANTA ROSA AVE UC"},
{HWY: 012, PM: 16.430, CR: "EB OFF TO BENNETT VALLEY RD"},
{HWY: 012, PM: 16.440, CR: "WB ON FR MAPLE AVENUE"},
{HWY: 012, PM: 16.647, CR: "SOUTH E ST UC"},
{HWY: 012, PM: 16.778, CR: "BROOKWOOD AVE"},
{HWY: 012, PM: 17.070, CR: "EB ON BENNETT BROOKWOOD"},
{HWY: 012, PM: 17.080, CR: "WB OFF MAPLE BROOKWOOD"},
{HWY: 012, PM: 17.103, CR: "BRIGHAM AVE UC"},
{HWY: 012, PM: 17.346, CR: "OFF RMPS LT & RT"},
{HWY: 012, PM: 17.530, CR: "RTE LT ON FARMERS LANE"},
{HWY: 012, PM: 17.530, CR: "FARMERS LN & HOEN AVE EXIT"},
{HWY: 012, PM: 17.614, CR: "JCT RTE 12 FWY"},
{HWY: 012, PM: 17.660, CR: "WB RTE 12 CONN LT"},
{HWY: 012, PM: 17.710, CR: "VALLEJO ST"},
{HWY: 012, PM: 17.767, CR: "MATANZAS CR"},
{HWY: 012, PM: 17.790, CR: "HOEN AVE"},
{HWY: 012, PM: 17.920, CR: "ROCK CREEK DR RT"},
{HWY: 012, PM: 17.946, CR: "SPRING CREEK"},
{HWY: 012, PM: 17.990, CR: "PATIO CT RT"},
{HWY: 012, PM: 18.130, CR: "CLAREMONT DR"},
{HWY: 012, PM: 18.180, CR: "SONOMA AVE"},
{HWY: 012, PM: 18.230, CR: "MAGOWAN DR"},
{HWY: 012, PM: 18.280, CR: "MIDWAY DR"},
{HWY: 012, PM: 18.320, CR: "MONTGOMERY DR"},
{HWY: 012, PM: 18.514, CR: "SANTA ROSA CR"},
{HWY: 012, PM: 17.697, CR: "FARMERS LN"},
{HWY: 012, PM: 17.697, CR: "FOURTH ST & FARMERS LN"},
{HWY: 012, PM: 18.120, CR: "WAGNER PLACE LT"},
{HWY: 012, PM: 18.250, CR: "SUNRIDGE DR LT"},
{HWY: 012, PM: 18.350, CR: "BRUSH CREEK RD LT"},
{HWY: 012, PM: 18.368, CR: "BRUSH CREEK"},
{HWY: 012, PM: 18.490, CR: "VILLAGE LT & STREAMSDE RT"},
{HWY: 012, PM: 18.820, CR: "MISSION BOULEVARD"},
{HWY: 012, PM: 18.880, CR: "RANDALL LN LT"},
{HWY: 012, PM: 19.060, CR: "CARDINAL WAY LT"},
{HWY: 012, PM: 19.200, CR: "ACACIA LN"},
{HWY: 012, PM: 19.442, CR: "MIDDLE RINCON RD LT"},
{HWY: 012, PM: 19.550, CR: "ELAINE DR RT"},
{HWY: 012, PM: 19.660, CR: "JACK LONDON INDIAN CREEK"},
{HWY: 012, PM: 19.710, CR: "MARIA LN RT"},
{HWY: 012, PM: 19.830, CR: "BOAS DR LT S & BOAS DR RT"},
{HWY: 012, PM: 20.100, CR: "CALISTOGA RD"},
{HWY: 012, PM: 20.190, CR: "MELITA RD RT"},
{HWY: 012, PM: 20.305, CR: "PEPPERTREE LANE RT"},
{HWY: 012, PM: 20.460, CR: "ST FRANCIS RD LT"},
{HWY: 012, PM: 20.695, CR: "MOUNTAIN HAWK LT"},
{HWY: 012, PM: 21.040, CR: "FAIRWAY DR LT"},
{HWY: 012, PM: 21.230, CR: "LOS ALAMOS RD"},
{HWY: 012, PM: 21.449, CR: "SANTA ROSA CREEK"},
{HWY: 012, PM: 21.620, CR: "MELITA RD"},
{HWY: 012, PM: 21.750, CR: "BRAND RD RT"},
{HWY: 012, PM: 21.850, CR: "ELNOKA LN RT"},
{HWY: 012, PM: 21.950, CR: "MELITA RD LT"},
{HWY: 012, PM: 23.110, CR: "OAKMONT DR RT"},
{HWY: 012, PM: 24.530, CR: "LOS GUILICOS RD LT"},
{HWY: 012, PM: 24.620, CR: "PYTHIAN RD LT"},
{HWY: 012, PM: 25.240, CR: "FREY RD RT"},
{HWY: 012, PM: 25.560, CR: "LAWNDALE RD RT"},
{HWY: 012, PM: 25.770, CR: "HOFF RD RT"},
{HWY: 012, PM: 25.815, CR: "SONOMA CREEK"},
{HWY: 012, PM: 26.110, CR: "ADOBE CANYON RD LT"},
{HWY: 012, PM: 26.420, CR: "GREENE ST RT"},
{HWY: 012, PM: 26.610, CR: "RANDOLPH AVE RT"},
{HWY: 012, PM: 26.680, CR: "SHAW AVE RT"},
{HWY: 012, PM: 26.750, CR: "MAPLE AVE RT"},
{HWY: 012, PM: 26.810, CR: "CYPRESS AVE RT"},
{HWY: 012, PM: 26.890, CR: "LAUREL AVE RT"},
{HWY: 012, PM: 26.960, CR: "JESSIE ST RT"},
{HWY: 012, PM: 27.030, CR: "HELMICK LT & WARM SPRNGS RT"},
{HWY: 012, PM: 27.110, CR: "GRISWOLD AVE RT"},
{HWY: 012, PM: 27.180, CR: "LIBBY AVE RT"},
{HWY: 012, PM: 28.770, CR: "DUNBAR RD RT"},
{HWY: 012, PM: 29.380, CR: "NUNS CANYON RD LT"},
{HWY: 012, PM: 29.405, CR: "CALABAZAS CREEK"},
{HWY: 012, PM: 29.780, CR: "SYLVIA DR RT"},
{HWY: 012, PM: 30.070, CR: "TRINITY RD"},
{HWY: 012, PM: 30.650, CR: "ARNOLD DR RT"},
{HWY: 012, PM: 30.801, CR: "STUART CREEK"},
{HWY: 012, PM: 32.860, CR: "MADRONE RD RT"},
{HWY: 012, PM: 33.200, CR: "CAVEDALE RD LT"},
{HWY: 012, PM: 33.306, CR: "HOOKER CREEK"},
{HWY: 012, PM: 33.400, CR: "CAVEDALE RD LT"},
{HWY: 012, PM: 33.730, CR: "MOON MTN LT & EL PORTOLA RT"},
{HWY: 012, PM: 33.920, CR: "LONDON WAY LT"},
{HWY: 012, PM: 34.110, CR: "SERRES DR RT"},
{HWY: 012, PM: 34.250, CR: "AGUA CALIENTE RD"},
{HWY: 012, PM: 34.350, CR: "MARIN AVE RT"},
{HWY: 012, PM: 34.410, CR: "LAKE ST RT"},
{HWY: 012, PM: 34.490, CR: "SUNNYSIDE AVE LT"},
{HWY: 012, PM: 34.620, CR: "KEATON AND MTN AVES LT & MALEK RT"},
{HWY: 012, PM: 34.730, CR: "FETTERS AVE LT"},
{HWY: 012, PM: 34.800, CR: "BERNHARD AVE LT"},
{HWY: 012, PM: 34.855, CR: "BALSAM LT & LICHTENBERG RT"},
{HWY: 012, PM: 34.930, CR: "WATERMAN AVE LT"},
{HWY: 012, PM: 34.970, CR: "MONTEREY AVE LT"},
{HWY: 012, PM: 35.030, CR: "CENTRAL AVE LT"},
{HWY: 012, PM: 35.105, CR: "VALLEJO AVE LT & BOYES BLVD RT"},
{HWY: 012, PM: 35.110, CR: "BOYES BLVD"},
{HWY: 012, PM: 35.210, CR: "ARROYO RD LT & SIERRA DR RT"},
{HWY: 012, PM: 35.250, CR: "CALLE DEL MONTE LT"},
{HWY: 012, PM: 35.330, CR: "HAWTHORNE AVE LT"},
{HWY: 012, PM: 35.400, CR: "MULFORD RD RT"},
{HWY: 012, PM: 35.440, CR: "THOMPSON LT & W THOMPSON RT"},
{HWY: 012, PM: 35.530, CR: "SIESTA WAY LT"},
{HWY: 012, PM: 35.753, CR: "AGUA CALIENTE CR"},
{HWY: 012, PM: 35.805, CR: "DONALD ST LT & MAIN ST RT"},
{HWY: 012, PM: 35.860, CR: "HARLEY ST LT"},
{HWY: 012, PM: 35.950, CR: "VERANO AVE"},
{HWY: 012, PM: 36.100, CR: "LOMITA AVE LT"},
{HWY: 012, PM: 36.490, CR: "WEST SPAIN ST LT"},
{HWY: 012, PM: 36.550, CR: "PETALUMA AVE"},
{HWY: 012, PM: 36.550, CR: "NAPA ST LT & RIVERSIDER RT"},
{HWY: 012, PM: 36.800, CR: "SEVENTH ST WEST"},
{HWY: 012, PM: 36.900, CR: "SIXTH ST WEST RT"},
{HWY: 012, PM: 37.000, CR: "FIFTH ST WEST"},
{HWY: 012, PM: 37.150, CR: "FOURTH ST WEST LT"},
{HWY: 012, PM: 37.280, CR: "THIRD ST WEST"},
{HWY: 012, PM: 37.400, CR: "SECOND ST WEST"},
{HWY: 012, PM: 37.505, CR: "FIRST ST WEST"},
{HWY: 012, PM: 37.570, CR: "BROADWY RTE 12 & NAPA ST"},
{HWY: 012, PM: 37.690, CR: "PATTEN ST LT & MCDONELL RT"},
{HWY: 012, PM: 37.770, CR: "MAPLE ST RT"},
{HWY: 012, PM: 37.810, CR: "FRANCE LT & ANDRIEUX RT"},
{HWY: 012, PM: 37.970, CR: "CHASE AVE LT"},
{HWY: 012, PM: 38.060, CR: "MACARTHUR ST"},
{HWY: 012, PM: 38.180, CR: "MALET ST RT"},
{HWY: 012, PM: 38.320, CR: "NEWCOMB ST RT"},
{HWY: 012, PM: 38.690, CR: "NAPA RD LT & LEVERONI RD RT"},
{HWY: 012, PM: 38.960, CR: "FISHER LN LT"},
{HWY: 012, PM: 39.190, CR: "SPECHT RD LT & KROEGER RD RT"},
{HWY: 012, PM: 39.410, CR: "WATMAUGN RD"},
{HWY: 012, PM: 39.850, CR: "SHAINSKY RD CONN LT"},
{HWY: 012, PM: 39.920, CR: "SHAINSKY RD LT"},
{HWY: 012, PM: 40.070, CR: "SPLUDE RD LT"},
{HWY: 012, PM: 40.390, CR: "SAN LUIS RD LT"},
{HWY: 012, PM: 41.220, CR: "FREMONT RD TO RTE 121 LT"},
{HWY: 012, PM: 41.360, CR: "LT & RT RTE 121 MILLERICK"},
{HWY: 012, PM: 41.361, CR: "JCT 121 RTE"}],
                    HWY37: [{PM: 0.000, CR: "MRN/SON COUNTY LINE"},
                    {PM: 2.060, CR: "LAKEVILLE RD"},
                    {PM: 2.060, CR: "DI LAKEVILLE/RECLAMATION"},
                    {PM: 2.584, CR: "WEIGH IN MOTION SCALE R"},
                    {PM: 2.696, CR: "WEIGH IN MOTION SCALE L"},
                    {PM: 2.870, CR: "JCT 121 NORTH"},
                    {PM: 3.900, CR: "RTE 121 L/TOLAY CR RD"},
                    {PM: 4.000, CR: "SEARS POINT RR XING"},
                    {PM: 4.041, CR: "TOLAY CREEK"},
                    {PM: 6.074, CR: "SONOMA CR BRG"},
                    {PM: 6.245, CR: "END OF COUNTY"}],
                    HWY101: [],
                    HWY116: [],
                    HWY121: [],
                    HWY128: []
                }]
            }
        }
	}
};

let output = [];
let final = [];
let key;
let b;


function unitsPerRoute(){
let target = window.event.target;
let road = document.getElementsByClassName('road');
let bridge = document.getElementsByClassName('bridge');
let landscape = document.getElementsByClassName('landscape');
let tree = document.getElementsByClassName('tree');
let br = document.createElement('br');
let bgColor = ['blue', 'orange', 'green', 'violet']
    for(i = 0; i < road.length; i++){
        road[i].style.display = 'none';
        bridge[i].style.display = 'none';
        landscape[i].style.display = 'none';
        tree[i].style.display = 'none';

        if(target.innerHTML == output[i].CR || target.innerHTML == output[i].PM){
            road[i].style.display = 'block';
            road[i].style.backgroundColor = 'black';
            road[i].style.color = 'white';
            bridge[i].style.backgroundColor = 'black';
            bridge[i].style.color = 'white';
            bridge[i].style.display = 'block';
            landscape[i].style.backgroundColor = 'black';
            landscape[i].style.color = 'white';
            landscape[i].style.display = 'block';
            tree[i].style.backgroundColor = 'black';
            tree[i].style.color = 'white';
            tree[i].style.display = 'block';
        }

       /*
        let parent = road[i];
            parent.prepend(br);
        */
    }
}


function postmileOutput(e){ /* first */
let route = document.getElementById('search').value;
let keyword = document.getElementById('keyword').value.toUpperCase();
let x = crossRoads.county;
let hwy;
let key;
let cross;
let amp;
console.log();
console.log();

final = [];
output = [];
document.getElementById('outputPMS').innerHTML = '';
document.getElementById('road').innerHTML = '';
document.getElementById('bridge').innerHTML = '';
document.getElementById('landscape').innerHTML = '';
document.getElementById('tree').innerHTML = '';

let county = document.getElementById('county').value;

		if(county == 'SM' && route == '1'){

			x = crossRoads.county.SM.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY1){

				key = hwy.HWY1[c];

				cross = key.CR.toUpperCase();
                if(key.PM >= 0 && key.PM <= 46.931){
                    key.Road = 744;
                } else {
                    key.Road = 743;
                }

                if(key.PM >= 0 && key.PM <= 28.923){

                    key.Landscape = 757;

                } else if(key.PM >= 28.924 && key.PM <= 40.848){

                    key.Landscape = 737;

                } else if (key.PM >= 40.848 && key.PM <= 48.392){

                    key.Landscape = 739;

                } else {

                    key.Landscape = 732;

                }

                key.Bridge = 738;

                key.Tree = 748;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'SF' && route == '1'){

			x = crossRoads.county.SF.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY1){

				key = hwy.HWY1[c];

				cross = key.CR.toUpperCase();

                key.Road = 743;

                key.Landscape = 732;

                key.Bridge = 738;

                key.Tree = 748;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'MRN' && route == '1'){

			x = crossRoads.county.MRN.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY1){

				key = hwy.HWY1[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM <= 26.29){

                   key.Road = 625;

                } else {

                    key.Road = 624;

                }

                key.Landscape = 634;

                key.Bridge = 621;

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'SON' && route == '1'){

			x = crossRoads.county.SON.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY1){

				key = hwy.HWY1[c];

				cross = key.CR.toUpperCase();
                if(key.PM >= 0 && key.PM <= 58.583){

                   key.Road = 627;

                }

                key.Landscape = "County/City";

                key.Bridge = 621;

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'CC' && route == '4'){

			x = crossRoads.county.CC.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY4){

				key = hwy.HWY4[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM < 12.41){

                    key.Road = 692;

                } else if (key.PM >= 12.41 && key.PM < 48.4){

                    key.Road = 704;

                }

                if(key.PM >= 0 && key.PM <= 8.5){

                    key.Landscape = 693;

                } else if (key.PM >= 8.51 && key.PM <= 12.6){

                    key.Landscape = 702;

                } else {

                    key.Landscape = 703;

                }

                key.Bridge = 695;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'SCL' && route == '9'){

			x = crossRoads.county.SCL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY9){

				key = hwy.HWY9[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 7.46 && key.PM < 11.45){

                    key.Road = 652;

                } else if (key.PM >= 0 && key.PM < 7.46){

                    key.Road = 665;

                }

                if(key.PM >= 6.2 && key.PM <= 9.4){

                    key.Landscape = 667;

                } else {

                    key.Landscape = "County";

                }

                key.Bridge = 662;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SON' && route == '12'){

			x = crossRoads.county.SON.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY12){

				key = hwy.HWY12[c];

				cross = key.CR.toUpperCase();

		if(key.PM >= 32.86 && key.PM <= 41.4){

                	key.Road = 614;

		} else if(key.PM >= 9.23 && key.PM < 32.86){

			key.Road = 623;

		}

		if(key.PM >= 14 && key.PM <= 17.65){

                	key.Landscape = 633;

		} else {

			key.Landscape = "County";

		}

                key.Bridge = 621;

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					    amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'NAP' && route == '12'){

			x = crossRoads.county.NAP.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY12){

				key = hwy.HWY12[c];

				cross = key.CR.toUpperCase();

                key.Road = 615;

                key.Landscape = 634;

                key.Bridge = 637;

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

		} else if(county == 'SOL' && route == '12'){

			x = crossRoads.county.SOL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY12){

				key = hwy.HWY12[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM <= 19.1){

                    key.Road = 636;

                } else {

                    key.Road = 642;

                }

                key.Landscape = 638;

                if(key.PM >= 19.3 && key.PM <= 26.4){

                    key.Bridge = 695;

                } else {

                    key.Bridge = 637;

                }

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					    amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                    output.push(key);

                }

			}

		} else if(county == 'ALA' && route == '13'){

			x = crossRoads.county.ALA.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

	for(var c in hwy.HWY13){

		key = hwy.HWY13[c];

		cross = key.CR.toUpperCase();

                if(key.PM >= 4.3 && key.PM <= 9){

                    key.Road = 707;

                } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                    key.Road = 715;

                } else {

                    key.Road = 724;

                }

                if(key.PM >= 4 && key.PM <= 9.9){

                    key.Landscape = 710;

                } else if (key.PM >= 13.4 && key.PM <= 13.9){

                    key.Landscape = 710;

                } else {

                    key.Landscape = 710;

                }

                key.Bridge = 4317;

                key.Tree = 716;

		if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

		}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

	}

        } else if(county == 'SCL' && route == '17'){

			x = crossRoads.county.SCL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY17){

				key = hwy.HWY17[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM < 13.95){

                    key.Road = 652;

                }

                if(key.PM >= 9.5 && key.PM <= 13.95){

                    key.Landscape = 663;

                } else if(key.PM >= 6.2 && key.PM <= 9.49){

		    key.Landscape = 667;

		} else {

                    key.Landscape = "County";

                }

                key.Bridge = 662;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					               amp = final[cr].CR;

                         for(sand = 0; sand < amp.length; sand++){

                              if(amp[sand] == '&'){

                                      if(amp[sand + 1] != 'a'){

                                            final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                      }

                                }

                          }

                    }

				      }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SCL' && route == '280'){

			x = crossRoads.county.SCL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY280){

				key = hwy.HWY280[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 9.941 && key.PM <= 20.8){

                    key.Road = 665;

                } else if (key.PM >= 0 && key.PM <= 2.869){

                    key.Road = 654;

                } else {

                    key.Road = 652;

                }

                if(key.PM >= 4.601 && key.PM <= 20.63){

                    key.Landscape = 742;

                } else if (key.PM >= 2 && key.PM <= 4.6){

                    key.Landscape = 663;

                } else {

                    key.Landscape = 661;

                }

                key.Bridge = 662;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					                 amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				        }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SM' && route == '280'){

			x = crossRoads.county.SM.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY280){

				key = hwy.HWY280[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 26.5 && key.PM <= 27.4){

                    key.Road = 743;

                } else if (key.PM >= 10.81 && key.PM <= 25.5){

                    key.Road = "736/745";

                } else {

                    key.Road = 751;

                }

                if(key.PM >= 0.001 && key.PM <= 10.805){

                    key.Landscape = 756;

                } else if (key.PM >= 10.806 && key.PM <= 23.2){

                    key.Landscape = 739;

                } else {

                    key.Landscape = 732;

                }

                key.Bridge = 734;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					                 amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				        }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SF' && route == '280'){

			x = crossRoads.county.SF.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY280){

				key = hwy.HWY280[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM <= 7.55){

                    key.Road = 743;

                }

                key.Landscape = 732;

                key.Bridge = 734;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				        }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SM' && route == '380'){

			x = crossRoads.county.SM.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY380){

				key = hwy.HWY380[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 4.7 && key.PM <= 6.3){

                    key.Road = "736/745";

                } else {

                    key.Road = 743;

                }

                key.Landscape = 739;

                key.Bridge = 738;

                key.Tree = 748;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				        }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'SOL' && route == '505'){

			x = crossRoads.county.SOL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY505){

				key = hwy.HWY505[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM <= 10.6){

                    key.Road = 643;

                }

                key.Landscape = 638;

                key.Bridge = 637;

                key.Tree = 619;

                if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				        }

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

            }

        } else if(county == 'CC' && route == '580'){

			x = crossRoads.county.CC.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY580){

				key = hwy.HWY580[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0 && key.PM <= 6.15){

                    key.Road = 692;

                }

                if(key.PM >= 0 && key.PM <= 13.6){

                    key.Landscape = 693;

                }

                key.Bridge = 695;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'CC' && route == '680'){

			x = crossRoads.county.CC.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY680){

				key = hwy.HWY680[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 0 && key.PM <= 25.04){

                    key.Road = 694;

                }

                if(key.PM >= 0 && key.PM <= 11.8){

                    key.Landscape = 649;

                } else if (key.PM >= 11.81 && key.PM <= 14.3){

                    key.Landscape = 699;

                } else {

                    key.Landscape = 702;

                }

                key.Bridge = 695;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

    } else if(county == 'SCL' && route == '680'){

			x = crossRoads.county.SCL.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY680){

				key = hwy.HWY680[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 0 && key.PM <= 19.3){

                    key.Road = 0;

                } else if (key.PM >= 19.31 && key.PM < 21.88){

                    key.Road = 0;

                }

                if(key.PM >= 0 && key.PM <= 11.79){

                    key.Landscape = 0;

                } else if (key.PM >= 11.8 && key.PM <= 21.8){

                    key.Landscape = 0;

                } else {

                    key.Landscape = 0;

                }

                key.Bridge = 0;

                key.Tree = 0;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'ALA' && route == '580'){

			x = crossRoads.county.ALA.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY580){

				key = hwy.HWY580[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 31.3 && key.PM < 44.5){

                    key.Road = 707;

                } else if (key.PM >= 0 && key.PM <= 27.8){

                    key.Road = 708;

                } else if(key.PM >= 44.51 && key.PM <= 48){

		                key.Road = 715;

		            } else {

		                key.Road = 724;

		            }

                if(key.PM >= 0.9 && key.PM <= 28.3){

                    key.Landscape = 701;

                } else if (key.PM >= 28.31 && key.PM <= 45){

                    key.Landscape = 711;

                } else {

                    key.Landscape = 718;

                }

                key.Bridge = 4317;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'ALA' && route == '680'){

			x = crossRoads.county.ALA.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY680){

				key = hwy.HWY680[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 0 && key.PM <= 19.3){

                    key.Road = 726;

                } else if (key.PM >= 19.31 && key.PM < 21.88){

                    key.Road = 708;

                }

                if(key.PM >= 0 && key.PM <= 11.79){

                    key.Landscape = 727;

                } else if (key.PM >= 11.8 && key.PM <= 21.8){

                    key.Landscape = 701;

                } else {

                    key.Landscape = 703;

                }

                key.Bridge = 4317;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'ALA' && route == '880'){

			x = crossRoads.county.ALA.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY880){

				key = hwy.HWY880[c];

				cross = key.CR.toUpperCase();

                if(key.PM >= 0.0 && key.PM <= 20.6){

                    key.Road = 724;

                } else if (key.PM >= 20.61 && key.PM <= 28){

                    key.Road = 707;

                } else {

		                key.Road = 715;

		            }

                if(key.PM >= 0 && key.PM <= 1.46){

                    key.Landscape = 718;

                } else if(key.PM >= 28 && key.PM <= 36){

		                key.Landscape = 718;

		            } else if (key.PM >= 20.57 && key.PM <= 27.99){

                    key.Landscape = 719;

                } else {

                    key.Landscape = 725;

                }

                key.Bridge = 4317;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        } else if(county == 'ALA' && route == '980'){

			x = crossRoads.county.ALA.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY980){

				key = hwy.HWY980[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 0 && key.PM < 2){

                    key.Road = 715;

                }

                if(key.PM >= 0 && key.PM <= 2){

                    key.Landscape = 710;

                }

                key.Bridge = 4317;

                key.Tree = 716;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

    } else if(county == 'MRN' && route == '580'){

			x = crossRoads.county.MRN.Route;

            for(var a in x.Highways){

                hwy = x.Highways[a];

            }

			for(var c in hwy.HWY580){

				key = hwy.HWY580[c];

				cross = key.CR.toUpperCase();

               if(key.PM >= 2.45 && key.PM <= 4.8){

                    key.Road = 625;

                }

                key.Landscape = 634;

                key.Bridge = 621;

                key.Tree = 619;

				if(cross.indexOf('&') != -1){

                    final.push(key);

                    for(cr = 0; cr < final.length; cr++){

					amp = final[cr].CR;

                        for(sand = 0; sand < amp.length; sand++){

                            if(amp[sand] == '&'){

                                if(amp[sand + 1] != 'a'){

                                    final[cr].CR = amp.slice(0, sand + 1) + 'amp;' + amp.slice(sand + 1, amp.length);

                                }

                            }

                        }

                    }

				}

                if(cross.search(keyword) != -1){

                        output.push(key);

                }

			}

        }

		for(j = 0; j < output.length; j++){
		document.getElementById('outputPMS').innerHTML += `<div class="crossroad" id="" onclick="unitsPerRoute()"><a href="#" class="linkToUnit" id="showUnit" data-toggle="popover" title="Alias: ${output[j].Alias}" data-content="${output[j].Alias}" data-placement="bottom"><div class="flex-btw postMile"><div>${output[j].CR}</div><div class="postMile2"> - ${output[j].PM}</div></div></a></div>`;
		document.getElementById('road').innerHTML += `<div class="road unit text-danger bg-dark" data-toggle="popover" title="Road Handles: Debris, Potholes, Manholes, Sinkholes, 10-32 Animals, Hard Closures, Rock/Mudslides, Flooding" data-content="">Road: ${output[j].Road}</div>`;
		document.getElementById('bridge').innerHTML += `<div class="bridge unit text-danger bg-dark" data-toggle="popover" title="Bridge Handles: Fence & Guardrail/East Bay 723 & South Bay 662 handles OVERHEAD bridges Fences, Guardrail & Pumphouses" data-content="">Bridge: ${output[j].Bridge}</div>`;
		document.getElementById('landscape').innerHTML += `<div class="landscape unit text-danger bg-dark" data-toggle="popover" title="Landscape Handles: Irrigation, Low laying tree limbs, overgrown brush, homeless encampments" data-content="">LS: ${output[j].Landscape}</div>`;
		document.getElementById('tree').innerHTML += `<div class="tree unit text-danger bg-dark" data-toggle="popover" title="Tree Handles: Tree in the Travelway, trees that may fall" data-content="">Tree: ${output[j].Tree}</div>`;
		}



}






/*





*/
