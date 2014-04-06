'use strict';
define('NyxCore/App', ['Nyxish/_', 'Nyxish/Object', 'NyxCore/Bootstrap'],
function (_, NxObject, Bootstrap) {
  /**
   * @constructor NyxCore/App
   * @argument {Nyxish/Object}
   */
  var App = function() {};

  /**
   * @borrows Nyxish/Object as NyxCore/App
   */
  App.prototype = _.extend(NxObject, {});

  /**
   * Bootstrap this application.
   *
   * @this {App}
   * @memberof App
   */
  App.prototype.bootstrap = function() {
    console.log('>> bootstraping');
    (new Bootstrap()).bootstrap();
  };

  return App;
});
