// Generated by Melange
'use strict';

var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

var _map = {"a":"x","u":"hi","b":"你","c":"我"};

var _revMap = {"x":"a","hi":"u","你":"b","我":"c"};

function tToJs(param) {
  return _map[param];
}

function tFromJs(param) {
  return _revMap[param];
}

eq("File \"jscomp/test/gpr_3142_test.ml\", line 17, characters 6-13", tToJs("a"), "x");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 18, characters 6-13", tToJs("u"), "hi");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 19, characters 6-13", tToJs("b"), "你");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 20, characters 6-13", tToJs("c"), "我");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 22, characters 6-13", tFromJs("x"), "a");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 23, characters 6-13", tFromJs("hi"), "u");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 24, characters 6-13", tFromJs("你"), "b");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 25, characters 6-13", tFromJs("我"), "c");

eq("File \"jscomp/test/gpr_3142_test.ml\", line 26, characters 6-13", tFromJs("xx"), undefined);

Mt.from_pair_suites("Gpr_3142_test", suites.contents);

var v = tToJs;

var u = tFromJs;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.tToJs = tToJs;
exports.tFromJs = tFromJs;
exports.v = v;
exports.u = u;
/*  Not a pure module */
