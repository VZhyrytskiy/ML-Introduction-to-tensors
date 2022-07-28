/**
 * tf.Variable extends tf.Tensor
 * A mutable tf.Tensor, useful for persisting state, e.g. for training.
 * .assign(newValue): void
 * Assign a new tf.Tensor to this variable. The new tf.Tensor must have the same shape and dtype as the old tf.Tensor.
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
const v = tf.variable(tf.tensor([1, 2, 3, 4, 5, 6]));
v.print(true);
v.assign(tf.tensor([7, 8, 9, 10, 11, 12]));
v.print(true);
const a = v.arraySync();
console.log(a);