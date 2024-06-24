"use strict";

var _subclass = require("./subclass");

try {
  var obj = new _subclass.B();
  var X = obj.testB1();
  console.log(X);
  var Y = obj.testB2();
  console.log(Y);
  console.log(X === Y);
  console.log("===================");
  var c = {
    field: 'c1',
    '%field': 'c2'
  };
  console.log(c.field);
  var d = {
    string_literal: 'd1'
  };
  console.log(d.string_literal); // console.log(d['*field']) // Doesn't exist - cannot set a constant as key without destructuring.
  // Destructered into the keys of the interface/type.

  var e = {
    '!field': 'e1'
  };
  console.log(e['!field']); // Most flexibility - any key that's a string allowed.

  var f = {
    'fe': 'f1'
  };
  console.log(f.fe);
} catch (ex) {
  console.log(ex);
}