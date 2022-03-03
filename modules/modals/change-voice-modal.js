const modal = document.querySelector("#changeVoiceModal");
const dropdown = modal.querySelector("#voice-select");
const saveBtn = modal.querySelector("#saveVoiceChangeBtn");

let synth = window.speechSynthesis;
let selectedIndex = 0;
let voices = [];
let selectedVoice = voices[selectedIndex];

function populateVoiceList() {
  voices = synth.getVoices();
  voices.forEach((voice) => {
    let option = document.createElement("option");
    option.textContent = voice.name + " (" + voice.lang + ")";
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    dropdown.appendChild(option);
  });
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
