'use strict';

var Mt = require("./mt.js");
var $$String = require("melange/lib/js/string.js");

function u(v) {
  return v;
}

var s = $$String;

var N = {
  s: s
};

function v(x) {
  return x.length;
}

var suites_0 = [
  "const",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: 1,
              _1: 1
            };
    })
];

var suites_1 = {
  hd: [
    "other",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: 3,
                _1: 3
              };
      })
  ],
  tl: /* [] */0
};

var suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Module_parameter_test", suites);

var v0 = 1;

exports.u = u;
exports.N = N;
exports.v0 = v0;
exports.v = v;
exports.suites = suites;
/*  Not a pure module */
