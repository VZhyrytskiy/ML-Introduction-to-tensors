/**
 * clone a tensor
 * tf.clone(x: tf.Tensor | TypedArray | Array): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);

const t1 = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
const t2 = t1.clone();
// or 
const t3 = tf.clone(t1);
t2.print();
t3.print(true);