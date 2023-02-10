const fs = require("fs");
const tf = require("@tensorflow/tfjs");

fs.readFile("heart.sav", (err, data) => {
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
  id1=document.getElementById("h1");
  id2=document.getElementById("h2");
  id3=document.getElementById("h3");
  id4=document.getElementById("h4");
  id5=document.getElementById("h5");
  id6=document.getElementById("h6");
  id7=document.getElementById("h7");
  id8=document.getElementById("h8");
  id9=document.getElementById("h9");
  id10=document.getElementById("h10");
  id11=document.getElementById("h11");
  id12=document.getElementById("h12");
  id13=document.getElementById("h13");

  const input = [id1, id2, id3,id4, id5, id6,id7, id8, id9,id10, id11, id12,id13];
  predict(input).then(prediction => {
    console.log(prediction);
    if(prediction=="0"){
      console.log("100% accurate hence this prediction is reliable");
    }
    else{
      console.log("5% accurate hence this prediction is not reliable")
    }
  });
});
