/**
 * Creates an immutable tf.Tensor object from the buffer.
 * .toTensor(): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
const b = tf.buffer([2, 2], 'int32', [3, 0, 5, 0]);
console.log(b);

// get the value in the specified location
console.log(b.get(0, 0));

// convert to tensor
const t = b.toTensor();
t.print(true); 