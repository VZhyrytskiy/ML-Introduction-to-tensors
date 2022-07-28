/**
 * Returns a tf.TensorBuffer that holds the underlying data.
 * .bufferSync(): tf.TensorBuffer
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
const buffer = t.bufferSync();
console.log(buffer);
console.log(buffer.get(1, 1));