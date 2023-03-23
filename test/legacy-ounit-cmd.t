
  $ . ./setup.sh

  $ cat > x.ml <<EOF
  > type 'a arra = 'a array
  > external
  >   f :
  >   int -> int -> int arra -> unit
  >   = ""
  >   [@@bs.send.pipe:int]
  >   [@@bs.splice]
  > EOF
  $ melc x.ml
  File "x.ml", lines 2-7, characters 0-15:
  2 | external
  3 |   f :
  4 |   int -> int -> int arra -> unit
  5 |   = ""
  6 |   [@@bs.send.pipe:int]
  7 |   [@@bs.splice]
  Error: @variadic expect the last type to be an array
  [2]

  $ cat > x.ml <<EOF
  > external
  >   f2 :
  >   int -> int -> ?y:int array -> unit
  >   = ""
  >   [@@bs.send.pipe:int]
  >   [@@bs.splice]
  > EOF
  $ melc x.ml
  File "x.ml", lines 1-6, characters 0-15:
  1 | external
  2 |   f2 :
  3 |   int -> int -> ?y:int array -> unit
  4 |   = ""
  5 |   [@@bs.send.pipe:int]
  6 |   [@@bs.splice]
  Error: @variadic expect the last type to be a non optional
  [2]

Skip over the temporary file name printed in the error trace

  $ melc -bs-eval 'let bla4 foo x y= foo##(method1 x y [@bs])' 2>&1 | grep -v File
  1 | let bla4 foo x y= foo##(method1 x y [@bs])
                                            ^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  


  $ melc -bs-eval 'external mk : int -> ([`a|`b [@bs.string]]) = "mk" [@@bs.val]' 2>&1 | grep -v File
  1 | external mk : int -> ([`a|`b [@bs.string]]) = "mk" [@@bs.val]
                                     ^^^^^^^^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs.string
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  

  $ cat > x.ml <<EOF
  > external ff :
  >     resp -> (_ [@bs.as "x"]) -> int -> unit =
  >     "x" [@@bs.set]
  > EOF
  $ melc x.ml
  File "x.ml", lines 1-3, characters 0-18:
  1 | external ff :
  2 |     resp -> (_ [@bs.as "x"]) -> int -> unit =
  3 |     "x" [@@bs.set]
  Error: Ill defined attribute @set (two args required)
  [2]

  $ cat > x.ml <<EOF
  > external v3 :
  >   int -> int -> (int -> int -> int [@bs.uncurry]) = "v3"[@@bs.val]
  > EOF
  $ melc x.ml
  File "x.ml", line 2, characters 37-47:
  2 |   int -> int -> (int -> int -> int [@bs.uncurry]) = "v3"[@@bs.val]
                                           ^^^^^^^^^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs.uncurry
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  
  [2]


  $ cat > x.ml <<EOF
  > external v4 :
  >   (int -> int -> int [@bs.uncurry]) = ""
  >   [@@bs.val]
  > EOF
  $ melc x.ml
  File "x.ml", lines 1-3, characters 0-12:
  1 | external v4 :
  2 |   (int -> int -> int [@bs.uncurry]) = ""
  3 |   [@@bs.val]
  Error: @uncurry can not be applied to the whole definition
  [2]

  $ melc -bs-eval '{js| \uFFF|js}' 2>&1 | grep -v File
  1 | {js| \uFFF|js}
      ^^^^^^^^^^^^^^
  Error: Offset: 3, Invalid \u escape

  $ melc -bs-eval 'external mk : int -> ([`a|`b] [@bs.string]) = "" [@@bs.val]' 2>&1 | grep -v File
  1 | external mk : int -> ([`a|`b] [@bs.string]) = "" [@@bs.val]
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Warning 105 [bucklescript-fragile-external]: mk : the external name is inferred from val name is unsafe from refactoring when changing value name
  1 | external mk : int -> ([`a|`b] [@bs.string]) = "" [@@bs.val]
                                      ^^^^^^^^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs.string
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  

  $ melc -bs-eval 'external mk : int -> ([`a|`b] ) = "mk" [@@bs.val]' 2>&1 | grep -v File
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ cat > x.ml <<EOF
  > type t
  > external mk : int -> (_ [@bs.as {json| { x : 3 } |json}]) ->  t = "mk" [@@bs.val]
  > EOF
  $ melc x.ml
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ cat > x.ml <<EOF
  > type t
  > external mk : int -> (_ [@bs.as {json| { "x" : 3 } |json}]) ->  t = "mk" [@@bs.val]
  > EOF
  $ melc x.ml
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -bs-eval 'let should_fail = fun [@bs.this] (Some x) y u -> y + u' 2>&1 | grep -v File
  1 | let should_fail = fun [@bs.this] (Some x) y u -> y + u
                                       ^^^^^^^^
  Error: %@this expect its pattern variable to be simple form

  $ melc -bs-eval 'let should_fail = fun [@bs.this] (Some x as v) y u -> y + u' 2>&1 | grep -v File
  1 | let should_fail = fun [@bs.this] (Some x as v) y u -> y + u
                                       ^^^^^^^^^^^^^
  Error: %@this expect its pattern variable to be simple form

  $ cat > x.ml <<EOF
  > (* let rec must be rejected *)
  > type t10 = A of t10 [@@ocaml.unboxed];;
  > let rec x = A x;;
  > EOF
  $ melc x.ml
  File "x.ml", line 3, characters 12-15:
  3 | let rec x = A x;;
                  ^^^
  Error: This kind of expression is not allowed as right-hand side of `let rec'
  [2]

  $ cat > x.ml <<EOF
  > type t = {x: int64} [@@unboxed];;
  > let rec x = {x = y} and y = 3L;;
  > EOF
  $ melc x.ml
  File "x.ml", line 2, characters 12-19:
  2 | let rec x = {x = y} and y = 3L;;
                  ^^^^^^^
  Error: This kind of expression is not allowed as right-hand side of `let rec'
  [2]

  $ cat > x.ml <<EOF
  > type r = A of r [@@unboxed];;
  > let rec y = A y;;
  > EOF
  $ melc x.ml
  File "x.ml", line 2, characters 12-15:
  2 | let rec y = A y;;
                  ^^^
  Error: This kind of expression is not allowed as right-hand side of `let rec'
  [2]

  $ melc -bs-eval 'external f : int = "%identity"' 2>&1 | grep -v File
  1 | external f : int = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: %identity expect its type to be of form 'a -> 'b (arity 1)

  $ melc -bs-eval 'external f : int -> int = "%identity"'
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -bs-eval 'external f : int -> int -> int = "%identity"' 2>&1 | grep -v File
  1 | external f : int -> int -> int = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: %identity expect its type to be of form 'a -> 'b (arity 1)

  $ melc -bs-eval 'external f : (int -> int) -> int = "%identity"'
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -bs-eval 'external f : int -> (int-> int) = "%identity"' 2>&1 | grep -v File
  1 | external f : int -> (int-> int) = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: %identity expect its type to be of form 'a -> 'b (arity 1)

  $ cat > x.ml <<EOF
  > external foo_bar :
  >  (_ [@bs.as "foo"]) ->
  >  string ->
  >  string = "bar"
  >  [@@bs.send]
  > EOF
  $ melc x.ml
  File "x.ml", lines 1-5, characters 0-12:
  1 | external foo_bar :
  2 |  (_ [@bs.as "foo"]) ->
  3 |  string ->
  4 |  string = "bar"
  5 |  [@@bs.send]
  Error: Ill defined attribute @send(first argument can't be const)
  [2]

  $ melc -bs-eval 'let bla4 foo x y = foo##(method1 x y [@bs])' 2>&1 | grep -v File
  1 | let bla4 foo x y = foo##(method1 x y [@bs])
                                             ^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  

  $ cat > x.ml <<EOF
  >   external mk : int ->
  > (
  >   [\`a|\`b]
  >    [@bs.string]
  > ) = "mk" [@@bs.val]
  > EOF
  $ melc x.ml
  File "x.ml", line 4, characters 5-14:
  4 |    [@bs.string]
           ^^^^^^^^^
  Error (warning 101 [unused-bs-attributes]): Unused attribute: bs.string
  This means such annotation is not annotated properly. 
  for example, some annotations is only meaningful in externals 
  
  [2]

  $ melc -bs-eval "type -'a t = {k : 'a } [@@bs.deriving abstract]" 2>&1 | grep -v File
  1 | type -'a t = {k : 'a } [@@bs.deriving abstract]
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: In this definition, expected parameter variances are not satisfied.
         The 1st type parameter was expected to be contravariant,
         but it is injective covariant.

  $ melc -bs-eval 'let u = [||]' 2>&1 | grep -v File
  1 | let u = [||]
          ^
  Error: The type of this expression, '_weak1 array,
         contains type variables that cannot be generalized

  $ cat > x.ml <<EOF
  > external push : 'a array -> 'a -> unit = "push" [@@send]
  > let a = [||]
  > let () =
  >   push a 3 |. ignore ;
  >   push a "3" |. ignore
  > EOF
  $ melc x.ml
  File "x.ml", line 5, characters 9-12:
  5 |   push a "3" |. ignore
               ^^^
  Error: This expression has type string but an expression was expected of type
           int
  [2]
