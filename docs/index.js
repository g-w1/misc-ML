const anan_txt = "<h3>Anan:</h3><b>Sequence 1 </b>Break/opening + through double kick-nukite and turn.<br/><b>Sequence 2 </b>Back “line” through scoop-kicks, turn palm heel, and block to side<br/><b>Sequence 3 </b>Through both kiais (side-to-side sequences)<br/><b>Sequence 4 </b>Through both “finger” sequences, grab, kick, arm bar, and kiai.<br/><b>Sequence 5 </b>Through the throw, kansetsu geri, and turn to block.<br/><b>Sequence 6 </b>Final sequence, through finish.";
const heiku_txt = "<h3>Heiku:</h3><b>Sequence 1 </b>Break/opening, through first kiai (shiko dachi, block and punch)<br/><b>Sequence 2 </b>Back “line” through the arm bar in shiko dachi<br/><b>Sequence 3 </b>One-leg stance, through both side-to-side sequences<br/><b>Sequence 4 </b>Hook stance to shiko dachi sequence going forward, finish on kiai<br/><b>Sequence 5 </b>Hook stance to shiko dachi sequence going back, finish on double punch.<br/><b>Sequence 6 </b>Start with squat and high block, go through the end, including finish.";
const ohan_dai_txt = "<h3>Ohan Dai:</h3><b>Sequence 1 </b>Break/opening, through block-kick, turn and kamae (position)<br/><b>Sequence 2 </b>Through back “line” of the kata, finish with double punch<br/><b>Sequence 3 </b>Turn to front, high block and punch, finish with diagonal elbow<br/><b>Sequence 4 </b>Side to side sequences, through both kiais<br/><b>Sequence 5 </b>Turn to back, turn forward, continue through double kick and turn.<br/><b>Sequence 6 </b>Four block-kicks, drop, final movements, and finish.";
const katas = [
  ["Anan", anan_txt],
  ["Ohan Dai", ohan_dai_txt],
  ["Heiku", heiku_txt]
];
const modes = ["Stances", "Technique", "Transitions", "Timing", "Breathing", "Kime"];

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandom13() {
  return Math.floor(Math.random() * 3);
}

function load() {
  const kata_and_txt_num = getRandom13();
  let kata = katas[kata_and_txt_num][0];
  let kata_txt = katas[kata_and_txt_num][1]
  let mode = modes[getRandomDice() - 1];
  let seq = getRandomDice();

  let string_to_put = `Working on sequence <u><b>${seq}</b></u> of <u><b>${kata}</b></u>, with a focus on <u><b>${mode}</b></u>.`;

  document.getElementById("lol").innerHTML = string_to_put;
  document.getElementById("lal").innerHTML = kata_txt;
}
load();
