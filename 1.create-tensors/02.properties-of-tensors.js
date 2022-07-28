 /**
  * Just like any JavaScript array, tensors are equipped with methods to explain their properties. 
  * Useful properties include length (size), dimensionality (rank), shape (shape) and data type (dtype).
  */
  const tf = require('@tensorflow/tfjs-node');
  console.log(tf.version.tfjs);

 const t1 = tf.tensor([8, 6, 7, 5, 3, 0, 9]);
  //  console.log(`Size: ${t1.size}`);
  //  console.log(`Rank: ${t1.rank}`);
  //  console.log(`Shape: `, t1.shape);
  //  console.log(`Data Types: ${t1.dtype}`);
   
  const t2 = tf.tensor([[1, 2], [2, 3], [3, 4]]);
  // console.log(`Size: ${t2.size}`);
  // console.log(`Rank: ${t2.rank}`);
  // console.log(`Shape: `, t2.shape);
  // console.log(`Data Types: ${t2.dtype}`);


/**
 * Convert the type of tensor by .asType()
 * tensor is immutable
 */
const t3 = tf.tensor([4, 0, 3.999, '1']);
// t3.print();
const t4 = t3.asType('int32');
// t4.print();
const t5 = t3.asType('bool');
// print dtype, rank, shape, values
// t5.print(true);
 