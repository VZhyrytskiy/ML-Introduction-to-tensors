/**
 * create a tensor with all elements set to 1
 * tf.ones(shape: number[], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.ones([2, 3], 'int32');
 t.print(true); 
 
 