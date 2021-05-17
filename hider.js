function hider(){

  document.getElementById("primaryDiv").classList.add("hideMe");
    document.getElementById("primaryDiv").classList.remove("container");
    document.getElementById("secondaryDiv").classList.remove("hideMe");
      // document.getElementById("secondaryDiv").classList.add("container");

}


function unfoldAbout(){

  document.getElementById("primaryDiv").classList.add("hideMe");
    // document.getElementById("primaryDiv").classList.remove("container");
    document.getElementById("secondaryDiv").classList.add("hideMe");

      document.getElementById("aboutDiv").classList.remove("hideMe");
}
