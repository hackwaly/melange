'use strict';


function set_onreadystatechange(cb, x) {
  x.some_prop = cb;
}

exports.set_onreadystatechange = set_onreadystatechange;
/* No side effect */
