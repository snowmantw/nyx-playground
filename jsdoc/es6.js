
(() => {

  /**
   * @constructor Foo
   */
  var Foo = function() {};

  /**
   * Setup the prototype of Foo.
   *
   * @param {string} a
   * @this {Foo}
   * @memberof Foo
   */
  Foo.prototype.setup = (a) => {
    this.onClick = (evt) => {
      evt.target.textContnet = 'foo';
    };
  };

});
