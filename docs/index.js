async function loadmodel(){
model = await tf.loadModel('https://g-w1.github.io/toys/model.json');
  concole.log(model);
}
