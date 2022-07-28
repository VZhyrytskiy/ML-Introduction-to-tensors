/**
 * Retrieving Tensor Data asynchronously using .data()
 * give us the Promise of values of the 2D tensor as a 1D
 * .data(): Promise<DataTypeMap[NumericDataType]>
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
const p = t.data();
console.log(p);
p.then(data => console.log(data));