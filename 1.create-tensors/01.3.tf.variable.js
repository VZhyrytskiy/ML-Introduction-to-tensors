/**
 * create a variable with a provided initial value
 * variable is a mutable tensor
 * tf.variable(initialValue: tf.Tensor, trainable?: boolean, name?: string, dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Variable
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const v1 = tf.variable(tf.tensor([0.0]));
 // v1.print(true);
 v1.assign(tf.tensor([4]));
 // v1.print(true);
 
 
 /**
  * create a new variable from scalar
  */
  const v2 = tf.variable(tf.scalar(Math.random()));
 //  v2.print(true);