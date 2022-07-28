/**
 * Retrieving Tensor Data synchronously using .dataSync()
 * give us the values of the 2D tensor as a 1D
 * .dataSync(): DataTypeMap[NumericDataType]
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
 const a = t.dataSync();
 console.log(a);