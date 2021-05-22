function unfoldAbout() {
  document.getElementById("secondaryDiv").classList.add("hideMe");
  document.getElementById("aboutDiv").classList.remove("hideMe");
    document.getElementById("backIcon").classList.remove("hideMe");
}

function unfoldArtists() {
  document.getElementById("secondaryDiv").classList.add("hideMe");
  document.getElementById("aboutDiv").classList.add("hideMe");
  document.getElementById("artistsDiv").classList.remove("hideMe");
    document.getElementById("backIcon").classList.remove("hideMe");
}

function resetIt() {
  document.getElementById("secondaryDiv").classList.remove("hideMe");
  document.getElementById("aboutDiv").classList.add("hideMe");
  document.getElementById("artistsDiv").classList.add("hideMe");
  document.getElementById("backIcon").classList.add("hideMe");
}


function goBack() {
  window.history.back();
}
