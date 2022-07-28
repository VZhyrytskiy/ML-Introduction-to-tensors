/**
 * create a tensor with all elements set to 0
 * tf.zeros(shape: number[], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.zeros([2, 3]);
 t.print(true);
 
 