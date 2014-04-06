'use strict';
define('NyxCore/Bootstrap', [], function() {
  var Bootstrap = function() {};
  Bootstrap.prototype.bootstrap = function() {
    document.querySelector('h1').textContent = 'Bootstraped';
    console.log('>> do bootstrap');
  };
  return Bootstrap;
});
