"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "funcA",
    value: function funcA() {
      console.log("funcA");
      return 101010;
    }
  }]);

  return A;
}();

exports.A = A;