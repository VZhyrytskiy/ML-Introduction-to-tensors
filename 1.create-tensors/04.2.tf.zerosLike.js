/**
 * create a tensor with all emenets set to 0 with the same shape as given tensor
 * tf.zerosLike(x: tf.Tensor | TypedArray | Array): tf.Tensor
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.zerosLike(tf.tensor([1, 2, 3]));
 t.print(true);