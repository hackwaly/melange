// Generated by Melange
'use strict';

var Belt__Belt_Array = require("melange.belt/belt_Array.js");
var Belt__Belt_MapInt = require("melange.belt/belt_MapInt.js");
var Belt__Belt_SetInt = require("melange.belt/belt_SetInt.js");
var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

function b(loc, v) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Ok */4,
                  _0: v
                };
        })
    ],
    tl: suites.contents
  };
}

var mapOfArray = Belt__Belt_MapInt.fromArray;

var setOfArray = Belt__Belt_SetInt.fromArray;

function emptyMap(param) {
  
}

var v = Belt__Belt_Array.makeByAndShuffle(1000000, (function (i) {
        return [
                i,
                i
              ];
      }));

var u = Belt__Belt_MapInt.fromArray(v);

Belt__Belt_MapInt.checkInvariantInternal(u);

var firstHalf = Belt__Belt_Array.slice(v, 0, 2000);

var xx = Belt__Belt_Array.reduce(firstHalf, u, (function (acc, param) {
        return Belt__Belt_MapInt.remove(acc, param[0]);
      }));

Belt__Belt_MapInt.checkInvariantInternal(u);

Belt__Belt_MapInt.checkInvariantInternal(xx);

Mt.from_pair_suites("Bs_map_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.mapOfArray = mapOfArray;
exports.setOfArray = setOfArray;
exports.emptyMap = emptyMap;
/* v Not a pure module */
