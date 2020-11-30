const katas = ["Anan", "Ohan Dai", "Heiku"];
const modes = ["Athletics", "Technique", "Kime"];

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandom13() {
  return Math.floor(Math.random() * 3);
}

let kata = katas[getRandom13()];
let mode = modes[getRandom13()];
let seq = getRandomDice();

let string_to_put = `Kata: ${kata}, Focus: ${mode}, Sequence: ${seq}`;
console.log(string_to_put);

let lol = document.getElementById("lol");
console.log(lol)
lol.innerHTML = string_to_put;
