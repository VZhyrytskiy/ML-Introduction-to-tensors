/**
 * create a diagonal tensor with a given diagonal values
 * tf.diag(x: tf.Tensor): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const values = tf.tensor1d([1, 2, 3, 4]);
 const t = tf.diag(values);
//  t.print(true);