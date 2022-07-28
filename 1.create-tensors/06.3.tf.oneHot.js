/**
 * create a one-hot tensor
 * tf.oneHot(indices: tf.Tensor | TypedArra | Array, depth: number, onValue?: number, offValue?: number): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.oneHot([0, 1, 0], 4, 2, 3);
 // t.print(true);