/**
 * Returns a human-readable description of the tensor. Useful for logging.
 * .toString(verbose?: boolean): string
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 console.log(t.toString());
 console.log(t.toString(true));