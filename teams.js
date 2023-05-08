let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams");
var tableTeam = document.getElementById("table-team");

var cnt = 0;
for (var i = 0; i < playersDetails.length; i++) {
  if (teamFull == playersDetails[i].from) {
    var isPlay = "";
    if (playersDetails[i].isPlaying == true) {
      isPlay = "Playing";
    } else {
      isPlay = "On Bench";
    }
    var currentP = playersDetails[i].playerName;
    cnt++;
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">

<img src="${playersDetails[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text"> ${playersDetails[i].playerName}   </p>
  <p class="text"> ${playersDetails[i].playerTeam}   </p>
  <p class="text"> Worth : ${playersDetails[i].price} </p>
  <p class="text"> Status : ${isPlay} </p>
  <p class="text"> ${playersDetails[i].description} </p>
 
</div>

`
  }
  function makethisinclick(res) {
    window.open(`./playerDetails.html?name=${res}`, "_self");
  }
}
var topBatsman = "";
for (var j = 0; j < playersDetails.length; j++) {
  if (
    playersDetails[j].description == "Batsman" &&
    playersDetails[j].from == teamFull
  ) {
    topBatsman = playersDetails[j].playerName;

    break;
  } else {
    topBatsman = "No Player";
  }
}
var topBowler = "";
for (var j = 0; j < playersDetails.length; j++) {
  if (
    playersDetails[j].description == "Bowler" &&
    playersDetails[j].from == teamFull
  ) {
    topBowler = playersDetails[j].playerName;

    break;
  } else {
    topBowler = "No Player";
  }
}

teamsDetails.map((item) => {
  if (teamFull == item.sName) {
    return (tableTeam.innerHTML += `
 <table>
 <tr>
     <td>Team</td>
     <td>${item.teamFullName}</td>
 </tr>

 <tr>
     <td>Icon</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player</td>
     <td>  ${cnt}</td>
 </tr>

 <tr>
     <td>Top Batsman</td>
     <td>${topBatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler</td>
     <td>${topBowler}</td>
 </tr>

 <tr>
     <td>Won</td>
     <td>${item.WonCount}</td>
 </tr>
</table>

`);
  }
});
