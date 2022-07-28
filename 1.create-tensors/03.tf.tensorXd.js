/**
 * Creates a 1D tensor if passed a 1D array. 
 * It would error if passed a 2D array.
 * This method provides an extra level of runtime checking.
 * Methods exist for verifying up to six dimensions with tf.tensor6d.
 * tf.tensor1d(values: TypedArray | Array, dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 * tf.tensor2d(values: TypedArray | Array, shape?: [number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 * tf.tensor3d(values: TypedArray | Array, shape?: [number, number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 * tf.tensor4d(values: TypedArray | Array, shape?: [number, number, number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 * tf.tensor5d(values: TypedArray | Array, shape?: [number, number, number, number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 * tf.tensor6d(values: TypedArray | Array, shape?: [number, number, number, number, number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string'): tf.Tensor
 */

 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t1 = tf.tensor1d([1, 2, 3]);
 t1.print();

 const t2_1 = tf.tensor2d([[1, 2], [3, 4]]);
 t2_1.print();
 const t2_2 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 t2_2.print();

 const t3_1 = tf.tensor3d([[[1], [2]], [[3], [4]]]);
 t3_1.print();
 const t3_2 = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
 t3_2.print();
 

 const t4_1 = tf.tensor4d([[[[1], [2]], [[3], [4]]]]);
 t4_1.print();
 const t4_2 = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
 t4_2.print();

 const t5_1 = tf.tensor5d([[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]);
 t5_1.print();
 const t5_2 = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
 t5_2.print();

 const t6_1 = tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]);
 t6_1.print();
 const t6_2 = tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]);
 t6_2.print();