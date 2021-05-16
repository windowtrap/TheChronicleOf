let boolOp = 0;

function expand(){
  boolOp = !boolOp;

  if (boolOp){
    document.getElementById("text").classList.remove("textBefore");
    document.getElementById("text").classList.add("textClicked");
    document.getElementById("expander").classList.add("imageClicked");
  }

  if (!boolOp){
    document.getElementById("text").classList.add("textBefore");
    document.getElementById("text").classList.remove("textClicked");
    document.getElementById("expander").classList.remove("imageClicked");
  }

}

function goBack() {
  window.history.back();
window.top.close();
}
