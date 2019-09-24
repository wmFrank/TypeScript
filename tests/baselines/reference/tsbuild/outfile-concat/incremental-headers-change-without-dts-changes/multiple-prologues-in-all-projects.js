//// [/lib/incremental-headers-change-without-dts-changesOutput.txt]
/lib/tsc --b /src/third --verbose
4:12:00 PM - Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

4:12:00 PM - Project 'src/first/tsconfig.json' is out of date because oldest output 'src/first/bin/first-output.js' is older than newest input 'src/first/first_PART1.ts'

4:12:00 PM - Building project '/src/first/tsconfig.json'...

4:12:00 PM - Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than oldest output 'src/2/second-output.js'

4:12:00 PM - Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

4:12:00 PM - Updating output of project '/src/third/tsconfig.json'...

4:12:00 PM - Updating unchanged output timestamps of project '/src/third/tsconfig.json'...

exitCode:: 0
readFiles:: {
 "/src/third/tsconfig.json": 1,
 "/src/first/tsconfig.json": 1,
 "/src/second/tsconfig.json": 1,
 "/src/first/first_PART1.ts": 1,
 "/src/first/first_part2.ts": 1,
 "/src/first/first_part3.ts": 1,
 "/src/first/bin/first-output.d.ts": 1,
 "/src/2/second-output.tsbuildinfo": 1,
 "/src/third/thirdjs/output/third-output.tsbuildinfo": 1,
 "/src/third/thirdjs/output/third-output.js": 1,
 "/src/third/thirdjs/output/third-output.js.map": 1,
 "/src/third/thirdjs/output/third-output.d.ts": 1,
 "/src/third/thirdjs/output/third-output.d.ts.map": 1,
 "/src/first/bin/first-output.tsbuildinfo": 1,
 "/src/first/bin/first-output.js": 1,
 "/src/2/second-output.js": 1,
 "/src/first/bin/first-output.js.map": 1,
 "/src/2/second-output.js.map": 1,
 "/src/2/second-output.d.ts": 1,
 "/src/first/bin/first-output.d.ts.map": 1,
 "/src/2/second-output.d.ts.map": 1
} 

//// [/src/first/bin/first-output.d.ts] file written with same contents
//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAEA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AEVD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >"myPrologue5"
  >"myPrologue"
  >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(3, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(3, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(4, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(4, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(4, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(4, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(4, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(5, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(7, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(7, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(7, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(7, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(7, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(9, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(9, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(9, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(10, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(10, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(10, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(10, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
"use strict";
"myPrologue5";
"myPrologue";
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAAA,aAAa,CAAA;AACb,YAAY,CAAA;AAKZ,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue5";
1 >
2 >^^^^^^^^^^^^^
3 >             ^
1 >
2 >"myPrologue5"
3 >             
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 14) Source(1, 14) + SourceIndex(0)
3 >Emitted(2, 15) Source(1, 14) + SourceIndex(0)
---
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^^^^^^^^^^->
1 >
  >
2 >"myPrologue"
3 >            
1 >Emitted(3, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(3, 13) Source(2, 13) + SourceIndex(0)
3 >Emitted(3, 14) Source(2, 13) + SourceIndex(0)
---
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->
  >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1->Emitted(4, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(4, 5) Source(7, 7) + SourceIndex(0)
3 >Emitted(4, 6) Source(7, 8) + SourceIndex(0)
4 >Emitted(4, 9) Source(7, 11) + SourceIndex(0)
5 >Emitted(4, 23) Source(7, 25) + SourceIndex(0)
6 >Emitted(4, 24) Source(7, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(13, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(13, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(13, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(13, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(13, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(13, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(13, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(6, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(8, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 29,
          "kind": "prologue",
          "data": "myPrologue5"
        },
        {
          "pos": 31,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 46,
          "end": 156,
          "kind": "text"
        }
      ],
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue5\"\n\"myPrologue\"",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 13,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue5"
                }
              },
              {
                "pos": 13,
                "end": 26,
                "expression": {
                  "pos": 13,
                  "end": 26,
                  "text": "myPrologue"
                }
              }
            ]
          }
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 157,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-29):: myPrologue5
"myPrologue5";
----------------------------------------------------------------------
prologue: (31-44):: myPrologue
"myPrologue";
----------------------------------------------------------------------
text: (46-156)
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/first_PART1.ts]
"myPrologue5"
"myPrologue"
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAEA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACVD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACHD,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >"myPrologue5"
  >"myPrologue"
  >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(3, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(3, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(4, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(4, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(4, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(4, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(4, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(5, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(7, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(7, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(7, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(7, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(7, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(9, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(9, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(9, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(10, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(10, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(10, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(10, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >"myPrologue"
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(9, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(9, 19) Source(2, 11) + SourceIndex(2)
3 >Emitted(9, 20) Source(2, 12) + SourceIndex(2)
4 >Emitted(9, 21) Source(2, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(10, 2) Source(4, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(11, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(11, 19) Source(6, 11) + SourceIndex(2)
3 >Emitted(11, 20) Source(6, 12) + SourceIndex(2)
4 >Emitted(11, 21) Source(6, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(12, 2) Source(12, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->"myPrologue2";
  >
2 >class 
3 >              C
1->Emitted(13, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(13, 15) Source(2, 7) + SourceIndex(3)
3 >Emitted(13, 16) Source(2, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(14, 5) Source(3, 5) + SourceIndex(3)
2 >Emitted(14, 16) Source(3, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(15, 2) Source(6, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>declare var c: C;
1->
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue3";
  >"myPrologue";
  >
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1->Emitted(16, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(16, 9) Source(3, 1) + SourceIndex(4)
3 >Emitted(16, 13) Source(3, 5) + SourceIndex(4)
4 >Emitted(16, 14) Source(3, 6) + SourceIndex(4)
5 >Emitted(16, 17) Source(3, 16) + SourceIndex(4)
6 >Emitted(16, 18) Source(3, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
"use strict";
"myPrologue5";
"myPrologue";
"myPrologue2";
"myPrologue3";
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../second/second_part2.ts","../../third_part1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts"],"names":[],"mappings":";AAAA,aAAa,CAAA;AACb,YAAY,CAAA;ACDZ,aAAa,CAAC;ACAd,aAAa,CAAC;AFMd,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AGZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AJVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACHD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../second/second_part2.ts,../../third_part1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue5";
1 >
2 >^^^^^^^^^^^^^
3 >             ^
1 >
2 >"myPrologue5"
3 >             
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 14) Source(1, 14) + SourceIndex(0)
3 >Emitted(2, 15) Source(1, 14) + SourceIndex(0)
---
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
  >
2 >"myPrologue"
3 >            
1 >Emitted(3, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(3, 13) Source(2, 13) + SourceIndex(0)
3 >Emitted(3, 14) Source(2, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(4, 15) Source(1, 15) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1->
2 >"myPrologue3"
3 >             ;
1->Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 14) Source(1, 14) + SourceIndex(2)
3 >Emitted(5, 15) Source(1, 15) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->"myPrologue5"
  >"myPrologue"
  >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1->Emitted(6, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(6, 5) Source(7, 7) + SourceIndex(0)
3 >Emitted(6, 6) Source(7, 8) + SourceIndex(0)
4 >Emitted(6, 9) Source(7, 11) + SourceIndex(0)
5 >Emitted(6, 23) Source(7, 25) + SourceIndex(0)
6 >Emitted(6, 24) Source(7, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(7, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(7, 8) Source(13, 8) + SourceIndex(0)
3 >Emitted(7, 9) Source(13, 9) + SourceIndex(0)
4 >Emitted(7, 12) Source(13, 12) + SourceIndex(0)
5 >Emitted(7, 13) Source(13, 13) + SourceIndex(0)
6 >Emitted(7, 14) Source(13, 14) + SourceIndex(0)
7 >Emitted(7, 15) Source(13, 15) + SourceIndex(0)
8 >Emitted(7, 16) Source(13, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(8, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(8, 8) Source(1, 8) + SourceIndex(3)
3 >Emitted(8, 9) Source(1, 9) + SourceIndex(3)
4 >Emitted(8, 12) Source(1, 12) + SourceIndex(3)
5 >Emitted(8, 13) Source(1, 13) + SourceIndex(3)
6 >Emitted(8, 14) Source(1, 14) + SourceIndex(3)
7 >Emitted(8, 16) Source(1, 16) + SourceIndex(3)
8 >Emitted(8, 17) Source(1, 17) + SourceIndex(3)
9 >Emitted(8, 18) Source(1, 18) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(9, 10) Source(1, 10) + SourceIndex(4)
3 >Emitted(9, 11) Source(1, 11) + SourceIndex(4)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(10, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(10, 12) Source(2, 12) + SourceIndex(4)
3 >Emitted(10, 28) Source(2, 28) + SourceIndex(4)
4 >Emitted(10, 29) Source(2, 29) + SourceIndex(4)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(11, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(11, 2) Source(3, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->"myPrologue"
  >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(12, 1) Source(6, 1) + SourceIndex(5)
2 >Emitted(12, 5) Source(6, 11) + SourceIndex(5)
3 >Emitted(12, 6) Source(6, 12) + SourceIndex(5)
4 >Emitted(12, 7) Source(12, 2) + SourceIndex(5)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(13, 1) Source(6, 1) + SourceIndex(5)
2 >Emitted(13, 12) Source(6, 11) + SourceIndex(5)
3 >Emitted(13, 13) Source(6, 12) + SourceIndex(5)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(14, 5) Source(7, 5) + SourceIndex(5)
2 >Emitted(14, 14) Source(7, 14) + SourceIndex(5)
3 >Emitted(14, 15) Source(7, 15) + SourceIndex(5)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(15, 9) Source(8, 9) + SourceIndex(5)
2 >Emitted(15, 16) Source(8, 16) + SourceIndex(5)
3 >Emitted(15, 17) Source(8, 17) + SourceIndex(5)
4 >Emitted(15, 20) Source(8, 20) + SourceIndex(5)
5 >Emitted(15, 21) Source(8, 21) + SourceIndex(5)
6 >Emitted(15, 30) Source(8, 30) + SourceIndex(5)
7 >Emitted(15, 31) Source(8, 31) + SourceIndex(5)
8 >Emitted(15, 32) Source(8, 32) + SourceIndex(5)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(16, 5) Source(9, 5) + SourceIndex(5)
2 >Emitted(16, 6) Source(9, 6) + SourceIndex(5)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(17, 5) Source(11, 5) + SourceIndex(5)
2 >Emitted(17, 6) Source(11, 6) + SourceIndex(5)
3 >Emitted(17, 8) Source(11, 8) + SourceIndex(5)
4 >Emitted(17, 9) Source(11, 9) + SourceIndex(5)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(18, 1) Source(12, 1) + SourceIndex(5)
2 >Emitted(18, 2) Source(12, 2) + SourceIndex(5)
3 >Emitted(18, 4) Source(6, 11) + SourceIndex(5)
4 >Emitted(18, 5) Source(6, 12) + SourceIndex(5)
5 >Emitted(18, 10) Source(6, 11) + SourceIndex(5)
6 >Emitted(18, 11) Source(6, 12) + SourceIndex(5)
7 >Emitted(18, 19) Source(12, 2) + SourceIndex(5)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(19, 1) Source(2, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(20, 5) Source(2, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(21, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(21, 6) Source(6, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(22, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(22, 28) Source(3, 16) + SourceIndex(1)
3 >Emitted(22, 31) Source(3, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(23, 9) Source(4, 9) + SourceIndex(1)
2 >Emitted(23, 16) Source(4, 16) + SourceIndex(1)
3 >Emitted(23, 17) Source(4, 17) + SourceIndex(1)
4 >Emitted(23, 20) Source(4, 20) + SourceIndex(1)
5 >Emitted(23, 21) Source(4, 21) + SourceIndex(1)
6 >Emitted(23, 41) Source(4, 41) + SourceIndex(1)
7 >Emitted(23, 42) Source(4, 42) + SourceIndex(1)
8 >Emitted(23, 43) Source(4, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(24, 5) Source(5, 5) + SourceIndex(1)
2 >Emitted(24, 6) Source(5, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(25, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(25, 13) Source(6, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(26, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(26, 2) Source(6, 2) + SourceIndex(1)
3 >Emitted(26, 2) Source(2, 1) + SourceIndex(1)
4 >Emitted(26, 6) Source(6, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->"myPrologue3";
  >"myPrologue";
  >
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(27, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(27, 5) Source(3, 5) + SourceIndex(2)
3 >Emitted(27, 6) Source(3, 6) + SourceIndex(2)
4 >Emitted(27, 9) Source(3, 9) + SourceIndex(2)
5 >Emitted(27, 13) Source(3, 13) + SourceIndex(2)
6 >Emitted(27, 14) Source(3, 14) + SourceIndex(2)
7 >Emitted(27, 16) Source(3, 16) + SourceIndex(2)
8 >Emitted(27, 17) Source(3, 17) + SourceIndex(2)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(28, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(28, 2) Source(4, 2) + SourceIndex(2)
3 >Emitted(28, 3) Source(4, 3) + SourceIndex(2)
4 >Emitted(28, 14) Source(4, 14) + SourceIndex(2)
5 >Emitted(28, 16) Source(4, 16) + SourceIndex(2)
6 >Emitted(28, 17) Source(4, 17) + SourceIndex(2)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 29,
          "kind": "prologue",
          "data": "myPrologue5"
        },
        {
          "pos": 31,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 46,
          "end": 60,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 62,
          "end": 76,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 78,
          "end": 188,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 78,
              "end": 188,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 188,
          "end": 473,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 188,
              "end": 473,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 473,
          "end": 509,
          "kind": "text"
        }
      ],
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue3\";\n\"myPrologue\";",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 14,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue3"
                }
              },
              {
                "pos": 14,
                "end": 28,
                "expression": {
                  "pos": 14,
                  "end": 27,
                  "text": "myPrologue"
                }
              }
            ]
          }
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 157,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 157,
          "end": 257,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 157,
              "end": 257,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 257,
          "end": 276,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-29):: myPrologue5
"myPrologue5";
----------------------------------------------------------------------
prologue: (31-44):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (46-60):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prologue: (62-76):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
prepend: (78-188):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (78-188)
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (188-473):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (188-473)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (473-509)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-157):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (157-257):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (157-257)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (257-276)
declare var c: C;

======================================================================

