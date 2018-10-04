
function supvHWY(a, b, c, d, e, f){
    this.UNIT = a;
    this.HWY = b;
    this.COUNTY = c;
    this.PM1 = d;
    this.PM2 = e;
    this.SUPV = f;

}
/* HIGHWAYS */
let hwy1 = new supvHWY(623, 1, "SON", 0, 26, "4-623");
let hwy13 = new supvHWY(707, 13, "ALA", 4, 15, "4-3-40");

let unitNum = [hwy13, hwy1];


for(i=0; i < unitNum.length; i++){
    let newRow = document.createElement('tr');
    tData.append(newRow);
    newRow.id = `tData${i}`;
    let dataRow = document.getElementById(`tData${i}`);
    Object.keys(unitNum[i]).forEach(function(key) {
        dataRow.innerHTML += `<td>${key, unitNum[i][key]}</td>`;
    });
}


/* TOGGLE CLASSES */
let Postmile;
function toggle(e){
    let target = window.event.target;
    let Postmile = target.innerHTML;
    if(target.className == "toggle" && target.isNaN() == false){
        target.className = "toggled";

    } else if(target.className == "toggled"){
        target.className = "toggle";

    }
}

for(i=0; i < unitNum.length; i++){
    Object.keys(unitNum[i]).forEach(function(key) {
        if(Postmile >= unitNum[i][key] && Postmile <= unitNum[i][key] ){

        }
    });
}
