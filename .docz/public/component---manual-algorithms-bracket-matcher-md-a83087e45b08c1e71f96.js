(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ji87:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Bracket-Matcher.md"}});var f={_frontmatter:c},o=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(o,i({},f,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bracket-matcher"},"Bracket Matcher"),Object(r.b)("h2",{id:"answers"},"Answers"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"function BracketMatcher(str) {\n  let left = 0;\n  let right = 0;\n\n  let diff = 0;\n  let mismatched = false;\n  str\n    .replace(/[^\\(\\)]/gi, '')\n    .split('')\n    .map(bracket => {\n      if (bracket === '(') {\n        diff++;\n        left++;\n      } else if (bracket === ')') {\n        diff--;\n        right++;\n      }\n\n      if (diff < 0) {\n        mismatched = true;\n      }\n    });\n\n  if (mismatched) return 0;\n  return left === right ? 1 : 0;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Bracket-Matcher.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-bracket-matcher-md-a83087e45b08c1e71f96.js.map