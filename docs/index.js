async function loadmodel(){
  const model = await tf.loadLayersModel(‘path/to/model.json’);
  concole.log(model);
}
