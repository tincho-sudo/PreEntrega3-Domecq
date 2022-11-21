let summName = "";
let region = "";
let url = "";

summonerSearchButton = document.getElementById("summonerSearch");
if (summonerSearchButton)
  summonerSearchButton.addEventListener("click", () => {
    region = document.getElementById("autoSizingSelect").value;
    summName = document.getElementById("autoSizingInput").value;
    url = window.open(
      "https://www.op.gg/summoners/" + region + "/" + summName,
      "_blank"
    );
  });
