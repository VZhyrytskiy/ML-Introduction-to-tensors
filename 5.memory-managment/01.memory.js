/**
 * import TensorFlowJs
 */
 const tf = require('@tensorflow/tfjs-node');
 console.log(tf.version.tfjs);



/** Check the number of tensors in memory
 *  and the footprint size.
 *  Both of these logs should be zero.
 */
// console.log(tf.memory());
// console.log(tf.memory().numTensors);
// console.log(tf.memory().numBytes);


/**
 * Returns memory info at the current time in the program
 */
let t1 = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
// console.log(t1);
// t1.print();
// remove reference for JS
t1 = null;
// console.log(tf.memory());


/**
 * Dispose tensor from memory
 */
let t2 = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32');
// console.log(tf.memory());
// object-oriented paradigm
t2.dispose();
//  or functional paradigm
// tf.dispose(t2);
// console.log(tf.memory());


/**
 * Memory leak
 * 
 *                                  Tensor live                Tensor disposed              
 * JS variable is live              you can read the tensor    an error will be raised
 * JS variable has not reference    memory leak                properly destroyed tensor
 * 
 */

/**
 * Automatic Tensor Cleanup
 * Fortunately, tensors do have an auto-clean option called tidy()
 * You can use tidy to create a functional encapsulation that will clean all tensors 
 * that aren’t returned or flagged for being kept with keep()
 * 
 * The tidy method takes a synchronous function and monitors the tensors created in this enclosure. 
 * You cannot use an async function or promise here.
 * If you’re going to need anything async, you will have to call .dispose explicitly. 
 */
// console.log('start', tf.memory().numTensors);
let t3, t4, t5, t6;
tf.tidy('memoryCleanup', () => {
    t3 = tf.tensor([1, 2, 3]);
    t4 = tf.tensor([1, 2, 3]);
    t5 = tf.tensor([1, 2, 3]);
    t6 = tf.tensor([1, 2, 3]);

    // console.log(`numTensors (in tidy):  ${tf.memory().numTensors}`);

    // keep a tensor generated inside a tf.tidy() from being disposed automatically.
    tf.keep(t3);

    // return tensor
    return t4;
});

/**
 * tidy has properly destroyed two of the created tensors (the two that weren’t kept or returned). 
 * If you try to access them now, you will get an error.
 */
// console.log(`numTensors (after tidy): ${tf.memory().numTensors}`);

// Explicitly destroy the tensors
t3.dispose();
t4.dispose();

// console.log(`numTensors (at the end): ${tf.memory().numTensors}`);
