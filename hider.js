function hider() {
  document.getElementById("primaryDiv").classList.add("hideMe");
  document.getElementById("primaryDiv").classList.remove("container");
  document.getElementById("secondaryDiv").classList.remove("hideMe");
  document.getElementById("backIcon").classList.remove("hideMe");
}


function unfoldAbout() {
  document.getElementById("primaryDiv").classList.add("hideMe");
  document.getElementById("secondaryDiv").classList.add("hideMe");
  document.getElementById("aboutDiv").classList.remove("hideMe");
}

function unfoldArtists() {
  document.getElementById("primaryDiv").classList.add("hideMe");
  document.getElementById("secondaryDiv").classList.add("hideMe");
  document.getElementById("aboutDiv").classList.add("hideMe");
  document.getElementById("artistsDiv").classList.remove("hideMe");

}

function resetIt() {
  document.getElementById("primaryDiv").classList.remove("hideMe");
  document.getElementById("primaryDiv").classList.add("container");
  document.getElementById("secondaryDiv").classList.add("hideMe");
  document.getElementById("aboutDiv").classList.add("hideMe");
  document.getElementById("artistsDiv").classList.add("hideMe");
  document.getElementById("backIcon").classList.add("hideMe");
}
