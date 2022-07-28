/**
 * create a tensor which represents an evenly spaced sequence of numbers over 
 * the given interval.
 * tf.linspace (start: number, stop: number, num: number)
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.linspace(1, 10, 3);
 t.print(true);