/**
 * create a rank-0 tensor
 * scalar tensor
 * tf.scalar(value: number|boolean|string|Uint8Array, dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Scalar
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const s1 = tf.scalar(3.14);
 // or
 // const s1 = tf.tensor(3.14);
 // s1.print(true);
 
 const s2 = tf.scalar(Math.random());
 // s2.print();