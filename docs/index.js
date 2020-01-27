async function loadmodel(){
  const model = await tf.loadLayersModel('https://g-w1.github.io/toys/model.js');
  concole.log(model);
}
loadmodel();
