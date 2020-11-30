const katas = ["Anan", "Ohan Dai", "Heiku"];
const modes = ["Stances", "Technique", "Transitions", "Timing", "Breathing", "Kime"];

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandom13() {
  return Math.floor(Math.random() * 3);
}

function load() {
  let kata = katas[getRandom13()];
  let mode = modes[getRandomDice() - 1];
  let seq = getRandomDice();

  let string_to_put = `Working on sequence <u><b>${seq}</b></u> of <u><b>${kata}</b></u>, with a focus on <u><b>${mode}</b></u>.`;

  let lol = document.getElementById("lol");
  lol.innerHTML = string_to_put;
}
load();
