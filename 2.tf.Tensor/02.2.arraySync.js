/**
 * Returns the tensor data as a nested array. The transfer of data is done synchronously.
 * .arraySync(): number[]
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 const a = t.arraySync();
 console.log(a);