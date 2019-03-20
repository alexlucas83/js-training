'use strict'

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :
function id(pouet){
    return pouet ;
}
// assert = id => id(5){
//     return 5
// }
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
// End of tests */
