// Generated by Melange
'use strict';

var Caml = require("melange.js/caml.js");
var Curry = require("melange.js/curry.js");

function f(param, v) {
  return ((((param.x0 + param.x1 | 0) + param.x2 | 0) + param.x3 | 0) + param.x4 | 0) + v | 0;
}

function f2(param, param$1) {
  return (((((param.x0 + param.x1 | 0) + param.x2 | 0) + param.x3 | 0) + param.x4 | 0) + param$1.a | 0) + param$1.b | 0;
}

function f3(param) {
  var lhs = param.rank;
  return function (param) {
    var rhs = param.rank;
    if (typeof lhs === "number") {
      throw {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/fun_pattern_match.ml",
              41,
              9
            ],
            Error: new Error()
          };
    }
    if (typeof rhs === "number") {
      throw {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/fun_pattern_match.ml",
              41,
              9
            ],
            Error: new Error()
          };
    }
    return Caml.caml_int_compare(lhs._0, rhs._0);
  };
}

function f4(param) {
  var lhs = param.rank;
  return function (param) {
    var rhs = param.rank;
    if (typeof lhs === "number") {
      throw {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/fun_pattern_match.ml",
              49,
              9
            ],
            Error: new Error()
          };
    }
    if (typeof rhs === "number") {
      throw {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/fun_pattern_match.ml",
              49,
              9
            ],
            Error: new Error()
          };
    }
    return Caml.caml_int_compare(lhs._0, rhs._0);
  };
}

var x = {
  NAME: "A",
  VAL: r
};

function r(param) {
  return x;
}

var match = r(undefined);

var v = Curry._1(match.VAL, undefined);

console.log(v);

function handle_tuple(x, y) {
  if (x !== 0) {
    if (x === 1 && y === 2) {
      return 3;
    }
    
  } else if (y === 1) {
    return 2;
  }
  console.log([
        x,
        y
      ]);
  return x + y | 0;
}

exports.f = f;
exports.f2 = f2;
exports.f3 = f3;
exports.f4 = f4;
exports.r = r;
exports.v = v;
exports.handle_tuple = handle_tuple;
/* match Not a pure module */
