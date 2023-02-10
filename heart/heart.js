const fs = require("fs");
const tf = require("@tensorflow/tfjs");

fs.readFile("model.sav", (err, data) => {
  if (err) throw err;
  
  async function loadModel() {
    const model = await tf.loadLayersModel(data);
    return model;
  }
  
  const model = loadModel();

  async function predict(input) {
    const prediction = await model.predict(tf.tensor2d(input, [1, input.length]));
    return prediction;
  }

  const input = [id1, id2, id3,id4, id5, id6,id7, id8, id9,id10, id11, id12,id13];
  predict(input).then(prediction => {
    console.log(prediction);
  });
});