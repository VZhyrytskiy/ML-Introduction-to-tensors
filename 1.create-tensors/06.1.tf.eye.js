/**
 * Create an identity matrix.
 * tf.eye (numRows: number, numColumns?: number, batchShape?: [number] | [number, number] | [number, number, number] | [number, number, number, number], dtype?: 'float32'|'int32'|'bool'|'complex64'|'string' ): tf.Tensor2D
 * 
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const t = tf.eye(3, 4, [2], 'int32');
 // t.print(true);