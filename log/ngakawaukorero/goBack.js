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

  if (sel == 0){
      document.getElementById("hiddenVid").src="https://player.vimeo.com/video/561256762?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
  } else if (sel == 1){
  document.getElementById("hiddenVid").src="https://player.vimeo.com/video/561257543?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
} else if (sel == 2){
document.getElementById("hiddenVid").src="https://player.vimeo.com/video/561258601?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
} else {
  document.getElementById("hiddenVid").src="https://player.vimeo.com/video/561259956?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
}


}

function closeVideo() {
  historyCounter = 0;
  document.getElementById("primaryDiv").style.display = 'block';
    // document.getElementById("primaryDiv").style.width = '100%';
  document.getElementById("hiddenVid").style.display = 'none';
}
