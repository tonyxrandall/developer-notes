(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{XcWI:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Run-Length.md"}});var u={_frontmatter:i},c=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,o({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"run-length"},"Run Length"),Object(r.b)("h2",{id:"question"},"Question"),Object(r.b)("p",null,'Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.'),Object(r.b)("h2",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"function RunLength(str) {\n  // handle base case\n  if (str.length === 1) {\n    return `1${str}`;\n  }\n\n  // iterate through str, set current index and count number until change in char\n  let res = '';\n  let original = str.toLowerCase();\n  let curLetter = original[0];\n  let count = 1;\n  for (let i = 1; i < original.length; i++) {\n    if (original[i] === curLetter) {\n      count++;\n    } else {\n      res += `${count}${curLetter}`;\n      curLetter = original[i];\n      count = 1;\n    }\n\n    // handle final letter\n    if (i === original.length - 1) {\n      res += `${count}${curLetter}`;\n    }\n  }\n\n  // code goes here\n  return res;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Run-Length.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-run-length-md-51129330d8df2eead184.js.map