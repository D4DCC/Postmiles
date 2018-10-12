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
          road[i].style.border = '2px solid white';
          bridge[i].style.backgroundColor = 'black';
          bridge[i].style.color = 'white';
          bridge[i].style.display = 'block';
          bridge[i].style.border = '2px solid white';
          landscape[i].style.backgroundColor = 'black';
          landscape[i].style.color = 'white';
          landscape[i].style.display = 'block';
          landscape[i].style.border = '2px solid white';
          tree[i].style.backgroundColor = 'black';
          tree[i].style.color = 'white';
          tree[i].style.display = 'block';
          tree[i].style.border = '2px solid white';
        }
    }
}

function postmileOutput(e){ /* first */
let route = document.getElementById('search').value;
let keyword = document.getElementById('keyword').value.toUpperCase();
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

    /* ***************************** ALAMEDA ******************************* */
    /* ***************************** ALAMEDA ******************************* */
    /* ***************************** ALA 13 ******************************* */

    if(county == 'ALA' && route == '13'){

        for(var c in ALA13){

            key = ALA13[c];

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

    }

    /* ***************************** ALA 24 ******************************* */

    if(county == 'ALA' && route == '24'){

        for(var c in ALA24){

            key = ALA24[c];

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

    }

    /* ***************************** ALA 61 ******************************* */

    if(county == 'ALA' && route == '61'){

        for(var c in ALA61){

            key = ALA61[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 77 ******************************* */

    if(county == 'ALA' && route == '77'){

        for(var c in ALA77){

            key = ALA77[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 80 ******************************* */

    if(county == 'ALA' && route == '80'){

        for(var c in ALA80){

            key = ALA80[c];

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

    }

    /* ***************************** ALA 84 ******************************* */

    if(county == 'ALA' && route == '84'){

        for(var c in ALA84){

            key = ALA84[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 92 ******************************* */

    if(county == 'ALA' && route == '92'){

        for(var c in ALA92){

            key = ALA92[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 112 ******************************* */

    if(county == 'ALA' && route == '112'){

        for(var c in ALA112){

            key = ALA112[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 123 ******************************* */

    if(county == 'ALA' && route == '123'){

        for(var c in ALA123){

            key = ALA123[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 185 ******************************* */

    if(county == 'ALA' && route == '185'){

        for(var c in ALA185){

            key = ALA185[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 205 ******************************* */

    if(county == 'ALA' && route == '205'){

        for(var c in ALA205){

            key = ALA205[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 238 ******************************* */

    if(county == 'ALA' && route == '238'){

        for(var c in ALA238){

            key = ALA238[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 260 ******************************* */

    if(county == 'ALA' && route == '260'){

        for(var c in ALA260){

            key = ALA260[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 262 ******************************* */

    if(county == 'ALA' && route == '262'){

        for(var c in ALA262){

            key = ALA262[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** ALA 580 ******************************* */

    if(county == 'ALA' && route == '580'){

        for(var c in ALA580){

            key = ALA580[c];

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

    }

    /* ***************************** ALA 680 ******************************* */

    if(county == 'ALA' && route == '680'){

        for(var c in ALA680){

            key = ALA680[c];

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

    }

    /* ***************************** ALA 880 ******************************* */

    if(county == 'ALA' && route == '880'){

        for(var c in ALA880){

            key = ALA880[c];

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

    }

    /* ***************************** ALA 980 ******************************* */

    if(county == 'ALA' && route == '980'){

        for(var c in ALA980){

            key = ALA980[c];

            cross = key.CR.toUpperCase();

            key.Road = 715;

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

    }

    /* ***************************** CONTRA COSTA ******************************* */
    /* ***************************** CONTRA COSTA ******************************* */
    /* ***************************** CC 4 ******************************* */

    if(county == 'CC' && route == '4'){

        for(var c in CC4){

            key = CC4[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 24 ******************************* */

    if(county == 'CC' && route == '24'){

        for(var c in CC24){

            key = CC24[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 80 ******************************* */

    if(county == 'CC' && route == '80'){

        for(var c in CC80){

            key = CC80[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 123 ******************************* */

    if(county == 'CC' && route == '123'){

        for(var c in CC123){

            key = CC123[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 160 ******************************* */

    if(county == 'CC' && route == '160'){

        for(var c in CC160){

            key = CC160[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 242 ******************************* */

    if(county == 'CC' && route == '242'){

        for(var c in CC242){

            key = CC242[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** CC 580 ******************************* */

    if(county == 'CC' && route == '580'){

        for(var c in CC580){

            key = CC580[c];

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

    }

    /* ***************************** CC 680 ******************************* */

    if(county == 'CC' && route == '680'){

        for(var c in CC680){

            key = CC680[c];

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

    }

    /* ***************************** LAKE ******************************* */
    /* ***************************** LAKE ******************************* */
    /* ***************************** LAK 29 ******************************* */

    if(county == 'LAK' && route == '29'){

        for(var c in LAK29){

            key = LAK29[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 000;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 000;

            } else {

                key.Road = 000;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 000;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

                key.Landscape = 000;

            } else {

                key.Landscape = 000;

            }

            key.Bridge = 000;

            key.Tree = 000;

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

    /* ***************************** MARIN ******************************* */
    /* ***************************** MARIN ******************************* */
    /* ***************************** MRN 1 ******************************* */

    if(county == 'MRN' && route == '1'){

        for(var c in MRN1){

            key = MRN1[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** MRN 37 ******************************* */

    if(county == 'MRN' && route == '37'){

        for(var c in MRN37){

            key = MRN37[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** MRN 101 ******************************* */

    if(county == 'MRN' && route == '101'){

        for(var c in MRN101){

            key = MRN101[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** MRN 131 ******************************* */

    if(county == 'MRN' && route == '131'){

        for(var c in MRN131){

            key = MRN131[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** MRN 580 ******************************* */

    if(county == 'MRN' && route == '580'){

        for(var c in MRN580){

            key = MRN580[c];

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

    /* ***************************** NAPA ******************************* */
    /* ***************************** NAPA ******************************* */
    /* ***************************** NAP 12 ******************************* */

    if(county == 'NAP' && route == '12'){

        for(var c in NAP12){

            key = NAP12[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** NAP 29 ******************************* */

    if(county == 'NAP' && route == '29'){

        for(var c in NAP29){

            key = NAP29[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** NAP 80 ******************************* */

    if(county == 'NAP' && route == '80'){

        for(var c in NAP80){

            key = NAP80[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** NAP 121 ******************************* */

    if(county == 'NAP' && route == '121'){

        for(var c in NAP121){

            key = NAP121[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** NAP 128 ******************************* */

    if(county == 'NAP' && route == '128'){

        for(var c in NAP128){

            key = NAP128[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** NAP 221 ******************************* */

    if(county == 'NAP' && route == '221'){

        for(var c in NAP221){

            key = NAP221[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SANTA CLARA ******************************* */
    /* ***************************** SANTA CLARA ******************************* */
    /* ***************************** SCL 9 ******************************* */

    if(county == 'SCL' && route == '9'){

        for(var c in SCL9){

            key = SCL9[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 17 ******************************* */

    if(county == 'SCL' && route == '17'){

        for(var c in SCL17){

            key = SCL17[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 25 ******************************* */

    if(county == 'SCL' && route == '25'){

        for(var c in SCL25){

            key = SCL25[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 35 ******************************* */

    if(county == 'SCL' && route == '35'){

        for(var c in SCL35){

            key = SCL35[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 82 ******************************* */

    if(county == 'SCL' && route == '82'){

        for(var c in SCL82){

            key = SCL82[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 85 ******************************* */

    if(county == 'SCL' && route == '85'){

        for(var c in SCL85){

            key = SCL85[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 87 ******************************* */

    if(county == 'SCL' && route == '87'){

        for(var c in SCL87){

            key = SCL87[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 101 ******************************* */

    if(county == 'SCL' && route == '101'){

        for(var c in SCL101){

            key = SCL101[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 130 ******************************* */

    if(county == 'SCL' && route == '130'){

        for(var c in SCL130){

            key = SCL130[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 280 ******************************* */

    if(county == 'SCL' && route == '280'){

        for(var c in SCL280){

            key = SCL280[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 680 ******************************* */

    if(county == 'SCL' && route == '680'){

        for(var c in SCL680){

            key = SCL680[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SCL 880 ******************************* */

    if(county == 'SCL' && route == '880'){

        for(var c in SCL880){

            key = SCL880[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SAN FRANCISCO ******************************* */
    /* ***************************** SAN FRANCISCO ******************************* */
    /* ***************************** SF 1 ******************************* */

    if(county == 'SF' && route == '1'){

        for(var c in SF1){

            key = SF1[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SF 35 ******************************* */

    if(county == 'SF' && route == '35'){

        for(var c in SF35){

            key = SF35[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SF 80 ******************************* */

    if(county == 'SF' && route == '80'){

        for(var c in SF80){

            key = SF80[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SF 82 ******************************* */

    if(county == 'SF' && route == '82'){

        for(var c in SF82){

            key = SF82[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SF 101 ******************************* */

    if(county == 'SF' && route == '101'){

        for(var c in SF101){

            key = SF101[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SF 280 ******************************* */

    if(county == 'SF' && route == '280'){

        for(var c in SF280){

            key = SF280[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SAN MATEO ******************************* */
    /* ***************************** SAN MATEO ******************************* */
    /* ***************************** SM 1 ******************************* */

    if(county == 'SM' && route == '1'){

        for(var c in SM1){

            key = SM1[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 35 ******************************* */

    if(county == 'SM' && route == '35'){

        for(var c in SM35){

            key = SM35[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 82 ******************************* */

    if(county == 'SM' && route == '82'){

        for(var c in SM82){

            key = SM82[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 84 ******************************* */

    if(county == 'SM' && route == '84'){

        for(var c in SM84){

            key = SM84[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 92 ******************************* */

    if(county == 'SM' && route == '92'){

        for(var c in SM92){

            key = SM92[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 101 ******************************* */

    if(county == 'SM' && route == '101'){

        for(var c in SM101){

            key = SM101[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 114 ******************************* */

    if(county == 'SM' && route == '114'){

        for(var c in SM114){

            key = SM114[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 280 ******************************* */

    if(county == 'SM' && route == '280'){

        for(var c in SM280){

            key = SM280[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SM 380 ******************************* */

    if(county == 'SM' && route == '380'){

        for(var c in SM380){

            key = SM380[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOLANO ******************************* */
    /* ***************************** SOLANO ******************************* */
    /* ***************************** SOL 12 ******************************* */

    if(county == 'SOL' && route == '12'){

        for(var c in SOL12){

            key = SOL12[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 29 ******************************* */

    if(county == 'SOL' && route == '29'){

        for(var c in SOL29){

            key = SOL29[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 37 ******************************* */

    if(county == 'SOL' && route == '37'){

        for(var c in SOL37){

            key = SOL37[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 80 ******************************* */

    if(county == 'SOL' && route == '80'){

        for(var c in SOL80){

            key = SOL80[c];

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

    }

    /* ***************************** SOL 84 ******************************* */

    if(county == 'SOL' && route == '84'){

        for(var c in SOL84){

            key = SOL84[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 128 ******************************* */

    if(county == 'SOL' && route == '128'){

        for(var c in SOL128){

            key = SOL128[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 220 ******************************* */

    if(county == 'SOL' && route == '220'){

        for(var c in SOL220){

            key = SOL220[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 505 ******************************* */

    if(county == 'SOL' && route == '505'){

        for(var c in SOL505){

            key = SOL505[c];

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

    }

    /* ***************************** SOL 680 ******************************* */

    if(county == 'SOL' && route == '680'){

        for(var c in SOL680){

            key = SOL680[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SOL 780 ******************************* */

    if(county == 'SOL' && route == '780'){

        for(var c in SOL780){

            key = SOL780[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SONOMA ******************************* */
    /* ***************************** SONOMA ******************************* */
    /* ***************************** SON 1 ******************************* */

    if(county == 'SON' && route == '1'){

        for(var c in SON1){

            key = SON1[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 12 ******************************* */

    if(county == 'SON' && route == '12'){

        for(var c in SON12){

            key = SON12[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 37 ******************************* */

    if(county == 'SON' && route == '37'){

        for(var c in SON37){

            key = SON37[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 101 ******************************* */

    if(county == 'SON' && route == '101'){

        for(var c in SON101){

            key = SON101[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 116 ******************************* */

    if(county == 'SON' && route == '116'){

        for(var c in SON116){

            key = SON116[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 121 ******************************* */

    if(county == 'SON' && route == '121'){

        for(var c in SON121){

            key = SON121[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }

    /* ***************************** SON 128 ******************************* */

    if(county == 'SON' && route == '128'){

        for(var c in SON128){

            key = SON128[c];

            cross = key.CR.toUpperCase();

            if(key.PM >= 4.3 && key.PM <= 9){

                key.Road = 0;

            } else if (key.PM >=9 && key.PM <= 10.1 || key.PM >= 13.4 && key.PM <= 13.9){

                key.Road = 0;

            } else {

                key.Road = 0;

            }

            if(key.PM >= 4 && key.PM <= 9.9){

                key.Landscape = 0;

            } else if (key.PM >= 13.4 && key.PM <= 13.9){

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

    }



    for(j = 0; j < output.length; j++){
    document.getElementById('outputPMS').innerHTML += `<div class="crossroad" id="" onclick="unitsPerRoute()"><a href="#" class="linkToUnit" id="showUnit" data-toggle="popover" title="Alias: ${output[j].Alias}" data-content="${output[j].Alias}" data-placement="bottom"><div class="flex-btw postMile"><div>${output[j].CR}</div><div class="postMile2"> - ${output[j].PM}</div></div></a></div>`;
    document.getElementById('road').innerHTML += `<div class="road unit text-info bg-dark " data-toggle="popover" title="Road Handles: Debris, Potholes, Manholes, Sinkholes, 10-32 Animals, Hard Closures, Rock/Mudslides, Flooding" data-content="">Road: ${output[j].Road}</div>`;
    document.getElementById('bridge').innerHTML += `<div class="bridge unit text-info bg-dark" data-toggle="popover" title="Bridge Handles: Fence & Guardrail/East Bay 723 & South Bay 662 handles OVERHEAD bridges Fences, Guardrail & Pumphouses" data-content="">Bridge: ${output[j].Bridge}</div>`;
    document.getElementById('landscape').innerHTML += `<div class="landscape unit text-info bg-dark" data-toggle="popover" title="Landscape Handles: Irrigation, Low laying tree limbs, overgrown brush, homeless encampments" data-content="">LS: <br>${output[j].Landscape}</div>`;
    document.getElementById('tree').innerHTML += `<div class="tree unit text-info bg-dark" data-toggle="popover" title="Tree Handles: Tree in the Travelway, trees that may fall" data-content="">Tree: ${output[j].Tree}</div>`;
    }



}






/*





*/
