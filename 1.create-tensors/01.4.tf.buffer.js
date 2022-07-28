/**
 * TensorBuffer is a mutable object, similar to tf.Tensor, 
 * that allows users to set values at locations before converting to an immutable tf.Tensor.
 * 
 * Creates an empty tf.TensorBuffer with the specified shape and dtype.
 * tf.buffer(shape: number[], dtype?: 'float32', values?: DataTypeMap['float32']): tf.TensorBuffer
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
// create a buffer
const b1 = tf.buffer([2, 2], 'float32', [3, 0, 5, 0]);
console.log(b1);

// create an empty buffer 2 x 2 (values will be 0)
const b2 = tf.buffer([2, 2]);
console.log(b2);
b2.set(3, 0, 0);
b2.set(5, 1, 0);
console.log(b2);

// get the value in the specified location
console.log(b2.get(0, 0));

// convert to tensor
const t = b2.toTensor();
t.print(true); 