
/**
 * @constructor Foo
 */
var Foo = function() {};

/**
 * @constructor Bar
 */
var Bar = function() {};

/**
 * @param {string} x
 * @param {string} y
 * @param {string} z
 * @this {Bar}
 * @memberof Bar
 */
Bar.prototype.bar = function bar(x,y,z) {console.log('bar')}

/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @this {Foo}
 * @memberof Foo
 */
Foo.prototype.foo = (a,b,c)=>{console.log('hello')}
