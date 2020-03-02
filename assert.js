
const assert = require('assert')


function add (a, b) {

	return a + b
}

let expect = add(1,2)

// assert(expect === 2, '预期1加2等于3')

assert.equal(6, add(3, 3), '预期 3 + 3 等于 6')
