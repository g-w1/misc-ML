const load = () => {
  function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function getRandom13() {
    return Math.floor(Math.random() * 3);
  }
  const anan_txt = ["<b>Sequence 1 </b>Break/opening + through double kick-nukite and turn.", "<b>Sequence 2 </b>Back “line” through scoop-kicks, turn palm heel, and block to side", "<b>Sequence 3 </b>Through both kiais (side-to-side sequences)", "<b>Sequence 4 </b>Through both “finger” sequences, grab, kick, arm bar, and kiai.", "<b>Sequence 5 </b>Through the throw, kansetsu geri, and turn to block.", "<b>Sequence 6 </b>Final sequence, through finish."];
  const heiku_txt = ["<b>Sequence 1 </b>Break/opening, through first kiai (shiko dachi, block and punch)", "<b>Sequence 2 </b>Back “line” through the arm bar in shiko dachi", "<b>Sequence 3 </b>One-leg stance, through both side-to-side sequences", "<b>Sequence 4 </b>Hook stance to shiko dachi sequence going forward, finish on kiai", "<b>Sequence 5 </b>Hook stance to shiko dachi sequence going back, finish on double punch.", "<b>Sequence 6 </b>Start with squat and high block, go through the end, including finish."];
  const ohan_dai_txt = ["<b>Sequence 1 </b>Break/opening, through block-kick, turn and kamae (position)", "<b>Sequence 2 </b>Through back “line” of the kata, finish with double punch", "<b>Sequence 3 </b>Turn to front, high block and punch, finish with diagonal elbow", "<b>Sequence 4 </b>Side to side sequences, through both kiais", "<b>Sequence 5 </b>Turn to back, turn forward, continue through double kick and turn.", "<b>Sequence 6 </b>Four block-kicks, drop, final movements, and finish."];
  const katas = [
    ["Anan", anan_txt],
    ["Ohan Dai", ohan_dai_txt],
    ["Heiku", heiku_txt]
  ];
  const modes = ["Stances", "Technique", "Transitions", "Timing", "Breathing", "Kime"];
  const kata_and_txt_num = getRandom13();
  const kata = katas[kata_and_txt_num][0];
  const mode = modes[getRandomDice() - 1];
  const seq = getRandomDice();
  let kata_txt = katas[kata_and_txt_num][1];
  kata_txt[seq - 1] = `<u><b>${kata_txt[seq - 1]}</b></u>`;
  kata_txt = kata_txt.reduce((accumulator, currentValue) => accumulator + "<br/>" + currentValue);
  const string_to_put = `Working on sequence <u><b>${seq}</b></u> of <u><b>${kata}</b></u>, with a focus on <u><b>${mode}</b></u>.`;

  document.getElementById("lol").innerHTML = string_to_put;
  document.getElementById("lal").innerHTML = kata_txt;
}
load();
