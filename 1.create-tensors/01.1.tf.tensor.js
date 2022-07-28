/**
 * create tensor
 * tensor is immutable
 * tf.tensor(values: TypedArray | Array, shape?: number[],  dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);

 /**
  * creates a 1D tensor if passed a 1D array.
  */
 
 const t1 = tf.tensor([8, 6, 7, 5, 3, 0, 9]);
 
// print data about tensor
// console.log(t1);
// console.log(t1.toString());
// t1.print();
// t1.print(true);
// tf.print(tf.tensor([1])); 
// tf.print(tf.tensor([1]), true); 
 
 
 /**
  * it would create a 2D tensor if passed a 2D array
  */
 const t2 = tf.tensor([[1, 2], [2, 3], [3, 4]]);
//  t2.print();



 /**
 * Unlike JavaScript arrays, a tensor’s data type must be homogeneous (all the same type). 
 * These types can be only Float32, Int32, bool, complex64, or string, with no mixing between.
 */

/**
 * create tensors of different types
 * create a 'float32' tensor (the default)
 */
 const t3 = tf.tensor([1.1, 2.2, 3.3], null, 'float32');
 // t3.print(true);
 
 /**
  * create a 'int32' tensor
  */ 
 
 const t4 = tf.tensor([1, 2, 3], null, 'int32');
 // t4.print(true);
 
 /**
  * inferred type for bool
  */
 const t5 = tf.tensor([true, false, false]);
 // t5.print(true);
 
 /**
  * create a 'int32' tensor from boolean values
  */
 const t6 = tf.tensor([true, false, false], null, 'int32');
 // t6.print(true);
 
 /**
  *  create a default 'float32' tensor
  */  
 const t7 = tf.tensor([1, 3.141592654, false]);
 // t7.print(true);

 
/**
 * Convert 1d input array into 2d float32 tensor
 */
const t8 = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3]);
// t8.print(true);

/**
 * Convert 1d input array into 2d int32 tensor
 */
 const t9 = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
//  t9.print(true);

 