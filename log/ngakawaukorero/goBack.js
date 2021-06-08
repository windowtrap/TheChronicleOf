let boolOp = 0;
let historyCounter = 0;

function expand() {
  boolOp = !boolOp;

  if (boolOp) {
    document.getElementById("text").classList.remove("textBefore");
    document.getElementById("text").classList.add("textClicked");
    document.getElementById("expander").classList.add("imageClicked");
  }

  if (!boolOp) {
    document.getElementById("text").classList.add("textBefore");
    document.getElementById("text").classList.remove("textClicked");
    document.getElementById("expander").classList.remove("imageClicked");
  }
}

function goBack() {
  if (historyCounter > 0){
    location.reload();
  } else {
      window.history.back();
  setTimeout(hider, 1000);
}

}

function openVideo(sel) {
  historyCounter = 1;
  document.getElementById("primaryDiv").style.display = 'none';
  document.getElementById("hiddenVid").style.display = 'block';
  document.getElementById("hiddenVid").style.height = '90%';
}

function closeVideo() {
  historyCounter = 0;
  document.getElementById("primaryDiv").style.display = 'block';
    // document.getElementById("primaryDiv").style.width = '100%';
  document.getElementById("hiddenVid").style.display = 'none';
}
