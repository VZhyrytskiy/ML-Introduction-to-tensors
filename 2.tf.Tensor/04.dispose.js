/**
 * Disposes tf.Tensor from memory.
 * .dispose(): void
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 let t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 console.log(tf.memory().numTensors);
 // remove variable, but ...
 t = null;
 console.log(tf.memory().numTensors);
 // remove tensor 
 // t.dispose();
 // console.log(tf.memory().numTensors);