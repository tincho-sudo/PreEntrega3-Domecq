let summName = "";
let region = "";
let url = "";
let opGgHeader = "";
let yourUrl = "";

const summonerSearchButton = document.getElementById("summonerSearch");
const regionSelect = document.getElementById("autoSizingSelect");
const summNameInput = document.getElementById("autoSizingInput");

if (summonerSearchButton)
  summonerSearchButton.addEventListener("click", () => {
    region = document.getElementById("autoSizingSelect").value;
    summName = document.getElementById("autoSizingInput").value;
    if (region.length > 0 && summName.length > 0) {
      url = "https://www.op.gg/summoners/" + region + "/" + summName;
      window.open(url, "_blank");

      regionSelect.style.borderColor = "#ced4da";
      regionSelect.style.borderWidth = "1px";
      summNameInput.style.borderColor = "#ced4da";
      summNameInput.style.borderWidth = "1px";
    } else if (region.length <= 0 && summName.length <= 0) {
      regionSelect.style.borderColor = "red";
      regionSelect.style.borderWidth = "15px";
      summNameInput.style.borderColor = "red";
      summNameInput.style.borderWidth = "15px";
    } else if (region.length <= 0) {
      regionSelect.style.borderColor = "red";
      regionSelect.style.borderWidth = "15px";

      if (summName.length > 0) {
        summNameInput.style.borderColor = "#ced4da";
        summNameInput.style.borderWidth = "1px";
      }
    } else {
      summNameInput.style.borderColor = "red";
      summNameInput.style.borderWidth = "15px";

      if (region.length > 0) {
        regionSelect.style.borderColor = "#ced4da";
        regionSelect.style.borderWidth = "1px";
      }
    }
  });
