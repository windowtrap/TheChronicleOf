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
  if (historyCounter > 0) {
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

  if (sel == 0) {
    document.getElementById("hiddenVid").src = "https://player.vimeo.com/video/561256762?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    document.getElementById("titleWork").innerHTML = "<i>A kōrero with Iron about Climate Change (at Hector Beach as a seawall is constructed).</i> (2021)"
    document.getElementById("workDescription").innerHTML = "<i>A kōrero with Iron about Climate Change (at Hector Beach as a seawall is constructed)</i>is a with an iron bar that is likely both a remnant of coal mining equipment and also the remains of previous attempts to shore up the beach against the sea. In the background current attempts are underway on a stretch of beach losing up to a metre of foreshore every year (according to my mother’s estimates). It ends with Moana having her say."
  } else if (sel == 1) {

    document.getElementById("hiddenVid").src = "https://player.vimeo.com/video/561257543?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    document.getElementById("titleWork").innerHTML = "<i>A kōrero with Mamaku about River Health (at the point where Bathurst Resources test water quality).</i> (2021)"
    document.getElementById("workDescription").innerHTML = "<i>A kōrero with Mamaku about River Health (at the point where Bathurst Resources test water quality)</i> explores, with a resilient mamaku, the idea that the owners of the local Stockton coal mine can also be the arbiters of the quality of local river water. The Bathurst employee in charge of this was formerly an employee of the Department of Conservation."

  } else if (sel == 2) {
    document.getElementById("hiddenVid").src = "https://player.vimeo.com/video/561258601?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    document.getElementById("titleWork").innerHTML = "<i>A kōrero with Ngākawau River about Energy Production (at the Stockton Mine rail loadout).</i> (2021)"
    document.getElementById("workDescription").innerHTML = "<i>A kōrero with Ngākawau River about Energy Production (at the Stockton Mine rail loadout)</i> occurs under the Ngākawau Bridge against the sound of a coal train shunting into position across the river. This is really a multiphonic conversation with the river, myself and the various machineries of the rail loadout. Would the Ngākawau River prefer coal or hydro power?."

  } else {

    document.getElementById("hiddenVid").src = "https://player.vimeo.com/video/561259956?autoplay=1&title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    document.getElementById("titleWork").innerHTML = "<i>A kōrero with Stone about Tourism (on the closed section of the Charming Creek track).</i> (2021)"
    document.getElementById("workDescription").innerHTML = "<i>A kōrero with Stone about Tourism(on the closed section of the Charming Creek track)</i> takes place with an outlier of a massive slip that closed the Charming Creek walkway in 2020. The slip is very likely linked to higher than normal rainfall caused by a shifting climate in the region. I was particularly curious about Stone’s thoughts on how quiet the area had become as we were behind a large fence that now keeps tourists away from the site."
  }


}

function closeVideo() {
  historyCounter = 0;
  document.getElementById("primaryDiv").style.display = 'block';
  // document.getElementById("primaryDiv").style.width = '100%';
  document.getElementById("hiddenVid").style.display = 'none';
}
