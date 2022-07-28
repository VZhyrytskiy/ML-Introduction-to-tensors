/**
 * Prints the tf.Tensor. 
 * .print (verbose?: boolean): void
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 console.log(t);
 t.print();
 t.print(true);