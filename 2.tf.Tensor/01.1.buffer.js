/**
 * Returns a promise of tf.TensorBuffer that holds the underlying data.
 * .buffer(): Promise<tf.TensorBuffer>
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 const p = t.buffer();
 tf.print(t);
 console.log(p);
 p.then(data => {
     console.log(data);
     console.log(data.get(1, 1));
 });