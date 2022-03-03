const modal = document.querySelector("#changeVoiceModal");
const dropdown = modal.querySelector("#voice-select");
const saveBtn = modal.querySelector("#saveVoiceChangeBtn");

let selectedIndex = 0;
let voices = [];
let selectedVoice = voices[selectedIndex];

function populateVoiceList() {
  // set voices
}

const handleSave = () => {
  selectedIndex = dropdown.selectedIndex;
  selectedVoice = voices[selectedIndex];
};
const handleClear = () => {
  dropdown.selectedIndex = selectedIndex;
};

saveBtn.addEventListener("click", handleSave);
modal.addEventListener("hidden.bs.modal", handleClear);

export { populateVoiceList, selectedVoice };
