let summName = "";
let region = "";
let url = "";

document.getElementById("summonerSearch").onclick = () => {
  region = document.getElementById("autoSizingSelect").value;
  summName = document.getElementById("autoSizingInput").value;
  url = window.open(
    "https://www.op.gg/summoners/" + region + "/" + summName,
    "_blank"
  );
};
