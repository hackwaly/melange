// Generated by Melange
'use strict';

var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
var Caml_string = require("melange.js/caml_string.js");
var Stdlib = require("melange/stdlib.js");

var hh;

try {
  hh = Caml_string.get("ghsogh", -3);
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
    console.log(exn._1);
    hh = /* 'a' */97;
  } else {
    throw exn;
  }
}

var f = /* 'o' */111;

exports.f = f;
exports.hh = hh;
/* hh Not a pure module */
