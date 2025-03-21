Use `[@mel.as]` to change how module output name in resulting JS

  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF
  $ cat > dune <<EOF
  > (melange.emit
  >  (emit_stdlib false)
  >  (preprocess (pps melange.ppx))
  >  (target js-out))
  > EOF

  $ cat > x.ml <<EOF
  > module[@mel.as "Obj"] Object = struct end
  > EOF

  $ dune build @melange




  $ cat _build/default/js-out/x.js
  // Generated by Melange
  'use strict';
  
  
  var Obj = {};
  
  exports.Obj = Obj;
  /* No side effect */

Also applies to signatures

  $ dune clean
  $ cat > x.ml <<EOF
  > module[@mel.as "Obj2"] Object = struct end
  > EOF
  $ cat > x.mli <<EOF
  > module[@mel.as "Obj2"] Object : sig end
  > EOF

  $ dune build @melange

  $ cat _build/default/js-out/x.js
  // Generated by Melange
  'use strict';
  
  
  var Obj2 = {};
  
  exports.Obj2 = Obj2;
  /* No side effect */

