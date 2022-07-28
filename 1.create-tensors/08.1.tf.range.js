/**
 * create a 1d tensor filled with the numbers in the range provided
 * the tensor is a half-open interval meaning [start, stop).
 * tf.range (start: number, stop: number, step?: number, dtype?: 'float32'|'int32'):tf.Tensot1D
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.range(0, 10, 2, 'int32');
 t.print(true);