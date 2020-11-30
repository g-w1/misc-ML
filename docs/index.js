const katas = ["Anan", "Ohan Dai", "Heiku"];
const modes = ["Athletics", "Technique", "Kime"];

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandom13() {
  return Math.floor(Math.random() * 3);
}

function load() {
  let kata = katas[getRandom13()];
  let mode = modes[getRandom13()];
  let seq = getRandomDice();

  let string_to_put = `Kata: ${kata}, Focus: ${mode}, Sequence: ${seq}`;

  let lol = document.getElementById("lol");
  lol.innerHTML = string_to_put;
}
load();
