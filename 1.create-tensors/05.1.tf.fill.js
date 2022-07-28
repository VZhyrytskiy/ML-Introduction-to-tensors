/**
 * create a tensor filled with a scalar value
 * tf.fill(shape: number[], value: number | string, dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t1 = tf.fill([3], 10);
 t1.print(true);

 const t2 = tf.fill([2, 2], 4);
 t2.print();
