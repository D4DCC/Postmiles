window.onload=function(){

function clipboard(){
	alert('hi');
  var copyText = document.getElementById("button");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
}
}