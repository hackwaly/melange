// Generated by Melange
'use strict';

var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Caml_obj = require("melange.js/caml_obj.js");
var Mt = require("./mt.js");
var Stdlib = require("melange/stdlib.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function f0(x) {
  var newrecord = Caml_obj.caml_obj_dup(x);
  newrecord.x0 = 1;
  return newrecord;
}

var Small = /* @__PURE__ */Caml_exceptions.create("Large_record_duplication_test.Small");

function f_small(param) {
  if (param.MEL_EXN_ID === Small) {
    return {
            MEL_EXN_ID: Small,
            x: 2,
            y: param.y
          };
  } else {
    return {
            MEL_EXN_ID: Stdlib.Not_found
          };
  }
}

var h = {
  MEL_EXN_ID: Small,
  x: 1,
  y: ""
};

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 72, characters 6-13", f_small(h), {
      MEL_EXN_ID: Small,
      x: 2,
      y: ""
    });

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 74, characters 6-13", Caml_obj.caml_equal(h, {
          MEL_EXN_ID: Small,
          x: 2,
          y: ""
        }), false);

var v1 = /* A0 */{
  x0: 9,
  x1: 9,
  x2: 9,
  x3: 9,
  x4: 9,
  x5: 9,
  x6: 9,
  x7: 9,
  x8: 9,
  x9: 9,
  x10: 9,
  x11: 9,
  x12: 9,
  x13: 9,
  x14: 9,
  x15: 9,
  x16: 9,
  x17: 9,
  x18: 9,
  x19: 9,
  x20: 9,
  x21: 9,
  x22: 9
};

function get_x0(x) {
  if (x) {
    return x.x0;
  }
  
}

function f1(x) {
  if (!x) {
    return /* A1 */0;
  }
  var newrecord = Caml_obj.caml_obj_dup(x);
  newrecord.x0 = 1;
  return newrecord;
}

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 139, characters 6-13", get_x0(f1(v1)), 1);

var v2 = {
  TAG: /* A0 */0,
  x0: 9,
  x1: 9,
  x2: 9,
  x3: 9,
  x4: 9,
  x5: 9,
  x6: 9,
  x7: 9,
  x8: 9,
  x9: 9,
  x10: 9,
  x11: 9,
  x12: 9,
  x13: 9,
  x14: 9,
  x15: 9,
  x16: 9,
  x17: 9,
  x18: 9,
  x19: 9,
  x20: 9,
  x21: 9,
  x22: 9
};

function get_x0$1(x) {
  if (x.TAG === /* A0 */0) {
    return x.x0;
  }
  
}

function f2(x) {
  if (x.TAG !== /* A0 */0) {
    return x;
  }
  var newrecord = Caml_obj.caml_obj_dup(x);
  newrecord.x0 = 1;
  return newrecord;
}

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 204, characters 6-13", get_x0$1(f2(v2)), 1);

var A0 = /* @__PURE__ */Caml_exceptions.create("Large_record_duplication_test.A0");

function f3(x) {
  if (x.MEL_EXN_ID !== A0) {
    return x;
  }
  var newrecord = Caml_obj.caml_obj_dup(x);
  newrecord.x0 = 1;
  return newrecord;
}

function get_x0$2(x) {
  if (x.MEL_EXN_ID === A0) {
    return x.x0;
  }
  
}

var v3 = {
  MEL_EXN_ID: A0,
  x0: 9,
  x1: 9,
  x2: 9,
  x3: 9,
  x4: 9,
  x5: 9,
  x6: 9,
  x7: 9,
  x8: 9,
  x9: 9,
  x10: 9,
  x11: 9,
  x12: 9,
  x13: 9,
  x14: 9,
  x15: 9,
  x16: 9,
  x17: 9,
  x18: 9,
  x19: 9,
  x20: 9,
  x21: 9,
  x22: 9
};

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 270, characters 6-13", get_x0$2(f3(v3)), 1);

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 271, characters 6-13", get_x0$2(v3), 9);

eq("File \"jscomp/test/large_record_duplication_test.ml\", line 272, characters 6-13", get_x0$2({
          MEL_EXN_ID: Stdlib.Not_found
        }), undefined);

Mt.from_pair_suites("Large_record_duplication_test", suites.contents);

var v0 = {
  x0: 9,
  x1: 9,
  x2: 9,
  x3: 9,
  x4: 9,
  x5: 9,
  x6: 9,
  x7: 9,
  x8: 9,
  x9: 9,
  x10: 9,
  x11: 9,
  x12: 9,
  x13: 9,
  x14: 9,
  x15: 9,
  x16: 9,
  x17: 9,
  x18: 9,
  x19: 9,
  x20: 9,
  x21: 9,
  x22: 9
};

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.v0 = v0;
exports.f0 = f0;
exports.Small = Small;
exports.f_small = f_small;
exports.h = h;
exports.v1 = v1;
exports.f1 = f1;
exports.v2 = v2;
exports.f2 = f2;
exports.A0 = A0;
exports.f3 = f3;
exports.get_x0 = get_x0$2;
exports.v3 = v3;
/*  Not a pure module */
