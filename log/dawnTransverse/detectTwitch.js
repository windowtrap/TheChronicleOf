let playState1 = 1, playState2 = 1;


//initialSetup1
var options1 = {
  width: '100%',
  height: '100%',
  channel: "Scideways",
  // Only needed if this page is going to be embedded on other websites
  //parent: ["embed.example.com", "othersite.example.com"]
};
var player1 = new Twitch.Player("vid1", options1);
//initialSetup2
var options2 = {
  width: '100%',
  height: '100%',
  channel: "vjrex",
  // Only needed if this page is going to be embedded on other websites
  //parent: ["embed.example.com", "othersite.example.com"]
};
var player2 = new Twitch.Player("vid2", options2);

player1.addEventListener(Twitch.Player.READY, initiate1)
player2.addEventListener(Twitch.Player.READY, initiate2)

function initiate1() {
  player1.addEventListener(Twitch.Player.ONLINE, handleOnline1);
  player1.addEventListener(Twitch.Player.OFFLINE, handleOffline1);
  player1.removeEventListener(Twitch.Player.READY, initiate1);
}

function initiate2() {
  player2.addEventListener(Twitch.Player.ONLINE, handleOnline2);
  player2.addEventListener(Twitch.Player.OFFLINE, handleOffline2);
  player2.removeEventListener(Twitch.Player.READY, initiate2);
}



function handleOnline1() {
    console.log("1 init")

  document.getElementById("vid1").classList.remove('hide');
      document.getElementById("vid1").classList.add('video');
  player1.removeEventListener(Twitch.Player.ONLINE, handleOnline1);
  player1.addEventListener(Twitch.Player.OFFLINE, handleOffline1);
  player1.setMuted(false);

  console.log(player1.getCollection());

  // if(player1.getCollection().includes('Art')){
  //   console.log("Contains Art")
  // } else {
  //   handleOffline1();
  // }
}

function handleOffline1() {
    console.log("2 init")
  document.getElementById("vid1").classList.add('hide');
    document.getElementById("vid1").classList.remove('video');
  player1.removeEventListener(Twitch.Player.OFFLINE, handleOffline1);
  player1.addEventListener(Twitch.Player.ONLINE, handleOnline1);
  player1.setMuted(true);
}

function handleOnline2() {
    console.log("3 init")
  document.getElementById("vid2").classList.remove('hide');
      document.getElementById("vid2").classList.add('video');
  player2.removeEventListener(Twitch.Player.ONLINE, handleOnline2);
  player2.addEventListener(Twitch.Player.OFFLINE, handleOffline2);
  player2.setMuted(false);
}

function handleOffline2() {
    console.log("4 init")
  document.getElementById("vid2").classList.add('hide');
      document.getElementById("vid2").classList.remove('video');
  player2.removeEventListener(Twitch.Player.OFFLINE, handleOffline2);
  player2.addEventListener(Twitch.Player.ONLINE, handleOnline2);
  player2.setMuted(true);
}
