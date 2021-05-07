function changeSelection(){

  var e = document.getElementById("selector");
  var selectedItem = e.options[e.selectedIndex].text;

  document.getElementById("populator2").innerHTML = selectedItem;

  console.log(selectedItem);

  var url = e.options[e.selectedIndex].value;

    console.log(url);



  document.getElementById("glower").classList.add("glow");

}

function moveOn(){
var e = document.getElementById("selector");
//  window.location.href = e.options[e.selectedIndex].value;
  newWindow = window.open(e.options[e.selectedIndex].value);
}
