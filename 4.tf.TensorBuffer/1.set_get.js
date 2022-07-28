/**
 * tf.TensorBuffer
 * A mutable object, similar to tf.Tensor, that allows users to set values at locations before converting to 
 * an immutable tf.Tensor.
 * 
 * See tf.buffer() for creating a tensor buffer.
 * .set(value: SingleValueMap[D], ...locs: number[]): void
 * .get(...locs: number[]): SingleValueMap[D]
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
// create an empty buffer 2 x 2 (values will be 0)
const b = tf.buffer([2, 2]);
console.log(b);
b.set(3, 0, 0);
b.set(5, 1, 0);
console.log(b);

// get the value in the specified location
console.log(b.get(0, 0));