/**
 * convert two real numbers to a complex number
 * tf.complex (real: tf.Tensor | TypedArray | Array, imag: tf.Tensor | TypedArray | Array): tf.Tensor 
 * return the real part
 * tf.real (input: tf.Tensor | TypedArray | Array): tf.Tensor
 * return the imaginary part 
 * tf.imag (input: tf.Tensor | TypedArray | Array): tf.Tensor
 * 
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);
 
 const real = tf.tensor1d([2.25, 3.25]);
 const imag = tf.tensor1d([4.75, 5.75]);
 const complex = tf.complex(real, imag);
 complex.print(true);


 tf.real(complex).print(true);
 tf.imag(complex).print(true);