(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{qPuw:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return a})),n.d(e,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),s=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/SQL/Indexing-Example.md"}});var c={_frontmatter:a},r=s.a;function l(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,s={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,["components"]);return Object(o.b)(r,i({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"indexing-example"},"Indexing Example"),Object(o.b)("p",null,"The following is done on PostgresSQL 12."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",i({parentName:"li"},{href:"https://www.db-fiddle.com/"}),"DB Fiddle"))),Object(o.b)("h2",{id:"without-indexing"},"Without Indexing"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE test (\n  id INT,\n  count INT\n);\nINSERT INTO test (id, count) VALUES (1,1);\nINSERT INTO test (id, count) VALUES (2,2);\nINSERT INTO test (id, count) VALUES (3,3);\n\nCREATE TABLE test_two (\n  id INT,\n  count INT\n);\nINSERT INTO test_two (id, count) VALUES (1,1);\nINSERT INTO test_two (id, count) VALUES (2,2);\nINSERT INTO test_two (id, count) VALUES (3,3);\nCREATE INDEX ON test_two(count)\n\nEXPLAIN ANALYZE\nSELECT * FROM test JOIN test_two ON (test.id = test_two.id)\n")),Object(o.b)("p",null,"The QUERY PLAN returns:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-sql"}),"Merge Join (cost=317.01..711.38 rows=25538 width=16) (actual time=0.050..0.052 rows=3 loops=1)\nMerge Cond: (test.id = test_two.id)\n-> Sort (cost=158.51..164.16 rows=2260 width=8) (actual time=0.029..0.030 rows=3 loops=1)\nSort Key: test.id\nSort Method: quicksort Memory: 25kB\n-> Seq Scan on test (cost=0.00..32.60 rows=2260 width=8) (actual time=0.005..0.005 rows=3 loops=1)\n-> Sort (cost=158.51..164.16 rows=2260 width=8) (actual time=0.018..0.018 rows=3 loops=1)\nSort Key: test_two.id\nSort Method: quicksort Memory: 25kB\n-> Seq Scan on test_two (cost=0.00..32.60 rows=2260 width=8) (actual time=0.006..0.006 rows=3 loops=1)\nPlanning Time: 0.301 ms\nExecution Time: 0.132 ms\n")),Object(o.b)("h2",{id:"with-indexing"},"With Indexing"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE test (\n  id INT,\n  count INT\n);\nINSERT INTO test (id, count) VALUES (1,1);\nINSERT INTO test (id, count) VALUES (2,2);\nINSERT INTO test (id, count) VALUES (3,3);\n\nCREATE TABLE test_two (\n  id INT,\n  count INT\n);\nINSERT INTO test_two (id, count) VALUES (1,1);\nINSERT INTO test_two (id, count) VALUES (2,2);\nINSERT INTO test_two (id, count) VALUES (3,3);\nCREATE INDEX ON test_two(count)\n\nEXPLAIN ANALYZE\nSELECT * FROM test JOIN test_two ON (test.id = test_two.id)\n")),Object(o.b)("p",null,"The QUERY PLAN returns:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-sql"}),"Hash Join (cost=1.07..42.48 rows=34 width=16) (actual time=0.058..0.059 rows=3 loops=1)\nHash Cond: (test.id = test_two.id)\n-> Seq Scan on test (cost=0.00..32.60 rows=2260 width=8) (actual time=0.003..0.004 rows=3 loops=1)\n-> Hash (cost=1.03..1.03 rows=3 width=8) (actual time=0.011..0.011 rows=3 loops=1)\nBuckets: 1024 Batches: 1 Memory Usage: 9kB\n-> Seq Scan on test_two (cost=0.00..1.03 rows=3 width=8) (actual time=0.001..0.002 rows=3 loops=1)\nPlanning Time: 0.443 ms\nExecution Time: 0.121 ms\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/SQL/Indexing-Example.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-sql-indexing-example-md-4e835e2214d7cda2246e.js.map