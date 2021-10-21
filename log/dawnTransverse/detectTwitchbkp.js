let playState1 = 1, playState2 = 1;

//initialSetup1
var options1 = {
  width: 854,
  height: 480,
  channel: "LPL_CSGO",
  // Only needed if this page is going to be embedded on other websites
  //parent: ["embed.example.com", "othersite.example.com"]
};
var player1 = new Twitch.Embed("vid1", options1);
//initialSetup2
var options2 = {
  width: 854,
  height: 480,
  channel: "vjrex",
  // Only needed if this page is going to be embedded on other websites
  //parent: ["embed.example.com", "othersite.example.com"]
};
var player2 = new Twitch.Embed("vid2", options2);

// delay to all loading before detection
setTimeout(detection, 4000);

function detection(){
// get state on load
let state1 = player1.getPlayerState().playback;
console.log(state1);
if (state1 != 'Idle'){
playState1 = 1;
} else {
  playState1 = 0;
}
player1.setVolume(0.5);

let state2 = player2.getPlayerState().playback;
if (state2 != 'Idle'){
playState2 = 1;
} else {
  console.log("im idle");
  playState2 = 0;
}
player2.setVolume(0.5);

swapScreen();
}

function swapScreen(){

let count = playState1 + playState2;
console.log(count);
if (count == 0){
// do nothing for the time being
} else if (count == 2){
// also do nothing
} else {
  if (playState1){
player2.style.display === 'none';
console.log('bam1');
  } else {
player1.style.display === 'none';
console.log('bam2');
  }
}

}
