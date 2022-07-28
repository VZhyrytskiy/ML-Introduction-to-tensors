/**
 * Creates a tf.Tensor with values sampled from a truncated normal distribution.
 * tf.truncatedNormal(shape: number[], mean?: number = 0, stdDev?: number = 1, dtype?: 'float32'|'int32', seed?: number = Math.random()): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
const t = tf.truncatedNormal([2, 2]);
t.print(true);