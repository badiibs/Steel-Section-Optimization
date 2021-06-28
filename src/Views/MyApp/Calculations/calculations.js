import * as tf from '@tensorflow/tfjs';

const mean = [ 281.167864, 73.895825, 54.188350];
const std = [ 355, 11000 , 11000];
const categories = ['HE 100 A', 'HE 100 AA', 'HE 100 B', 'HE 100 M', 'HE 1000 A',
       'HE 1000 AA', 'HE 1000 B', 'HE 1000 M', 'HE 1000 x 249',
       'HE 1000 x 393', 'HE 1000 x 415', 'HE 1000 x 438', 'HE 1000 x 494',
       'HE 1000 x 584', 'HE 120 A', 'HE 120 AA', 'HE 120 B', 'HE 120 C',
       'HE 120 M', 'HE 140 A', 'HE 140 B', 'HE 140 C', 'HE 140 M',
       'HE 160 A', 'HE 160 AA', 'HE 160 B', 'HE 160 C', 'HE 160 M',
       'HE 180 A', 'HE 180 AA', 'HE 180 B', 'HE 180 C', 'HE 180 M',
       'HE 200 AA', 'HE 200 B', 'HE 200 C', 'HE 200 M', 'HE 220 A',
       'HE 220 AA', 'HE 220 B', 'HE 220 C', 'HE 220 M', 'HE 240 A',
       'HE 240 AA', 'HE 240 B', 'HE 240 C', 'HE 240 M', 'HE 260 A',
       'HE 260 AA', 'HE 260 B', 'HE 260 C', 'HE 260 M', 'HE 280 A',
       'HE 280 AA', 'HE 280 B', 'HE 280 C', 'HE 280 M', 'HE 300 A',
       'HE 300 AA', 'HE 300 B', 'HE 300 C', 'HE 300 M', 'HE 320 A',
       'HE 320 AA', 'HE 320 B', 'HE 320 C', 'HE 320 M', 'HE 340 A',
       'HE 340 AA', 'HE 340 B', 'HE 340 M', 'HE 360 A', 'HE 360 AA',
       'HE 360 B', 'HE 360 M', 'HE 400 A', 'HE 400 AA', 'HE 400 B',
       'HE 400 M', 'HE 450 A', 'HE 450 AA', 'HE 450 B', 'HE 450 M',
       'HE 500 A', 'HE 500 AA', 'HE 500 B', 'HE 500 M', 'HE 550 A',
       'HE 550 AA', 'HE 550 B', 'HE 550 M', 'HE 600 A', 'HE 600 AA',
       'HE 600 B', 'HE 600 M', 'HE 600 x 337', 'HE 600 x 399', 'HE 650 A',
       'HE 650 AA', 'HE 650 B', 'HE 650 M', 'HE 650 x 343',
       'HE 650 x 407', 'HE 700 A', 'HE 700 AA', 'HE 700 B', 'HE 700 M',
       'HE 700 x 352', 'HE 700 x 418', 'HE 800 A', 'HE 800 AA',
       'HE 800 B', 'HE 800 M', 'HE 800 x 373', 'HE 800 x 444', 'HE 900 A',
       'HE 900 AA', 'HE 900 B', 'HE 900 M', 'HE 900 x 391',
       'HE 900 x 466', 'IPE 100', 'IPE 160', 'IPE 180', 'IPE 200',
       'IPE 220', 'IPE 240', 'IPE 270', 'IPE 300', 'IPE 330', 'IPE 360',
       'IPE 400', 'IPE 450', 'IPE 500', 'IPE 550', 'IPE 600',
       'IPE 750 x 134', 'IPE 750 x 147', 'IPE 750 x 173', 'IPE 750 x 196',
       'IPE 750 x 220', 'IPE 80', 'IPE A 100', 'IPE A 120', 'IPE A 140',
       'IPE A 160', 'IPE A 180', 'IPE A 200', 'IPE A 220', 'IPE A 240',
       'IPE A 270', 'IPE A 300', 'IPE A 330', 'IPE A 360', 'IPE A 400',
       'IPE A 450', 'IPE A 500', 'IPE A 550', 'IPE A 600', 'IPE AA 100',
       'IPE AA 120', 'IPE AA 140', 'IPE AA 160', 'IPE AA 180',
       'IPE AA 200', 'IPE AA 220', 'IPE AA 240', 'IPE AA 360',
       'IPE AA 400', 'IPE AA 450', 'IPE AA 500', 'IPE AA 550',
       'IPE AA 80', 'IPE O 200', 'IPE O 220', 'IPE O 240', 'IPE O 330',
       'IPE O 360', 'IPE O 400', 'IPE O 450', 'IPE O 550', 'IPE O 600',
       'IPE V 400', 'IPE V 550', 'IPE V 600'];

const calculationFunctions = {
  predicitions: async (inputs) => {
    const {
      fy,
      N,
      My,
    } = inputs;

    let inputsArray = [];
    inputsArray.push([
      fy.value,
      N.value,
      My.value,
    ]);

    const inputsArrayNorm = await inputsArray.map(line => {
      return line.map((item, i) => {
        return item  / std[i];
      })
    })

    console.log("inputsArrayNorm",inputsArrayNorm);
    const inputsTensor = tf.tensor(inputsArrayNorm);

    //let inputsTensorNorm = inputsTensor.norm


    const pathModel = `/Models/model_predicting_concrete_compressive_strength/model.json`;
    const model = await tf.loadLayersModel(pathModel);

    console.log('shape:',  inputsTensor.shape);
    let fck = await Array.from(model.predict(inputsTensor).dataSync()) || "";
    var x = 0;
       var len = fck.length
       while(x < len){ 
       fck[x] = fck[x].toFixed(1); 
       x++
       }
       
       var proba = 0;
       var position = 0; 
       const nbreCategories = len
       for (let i = 0; i< nbreCategories ;i++){
          if (fck[i] > proba) {
            proba = fck[i];
            position = i;
          }
       }
       fck = categories[position];
    console.log("fck",fck)

    return fck;
  },
  
}

export default calculationFunctions;