(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{F8Ao:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Reduction.md"}});var l={_frontmatter:c},s=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"reduction"},"Reduction"),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("p",null,"O(n^2) time:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"function StringReduction(str) {\n  flag = true;\n  while (flag) {\n    flag = false;\n    for (let i = 1; i < str.length; i++) {\n      if (/ab|ba/i.test(`${str[i - 1]}${str[i]}`)) {\n        str = str.replace(/ab|ba/i, 'c');\n        flag = true;\n      } else if (/bc|cb/i.test(`${str[i - 1]}${str[i]}`)) {\n        str = str.replace(/bc|cb/i, 'a');\n        flag = true;\n      } else if (/ac|ca/i.test(`${str[i - 1]}${str[i]}`)) {\n        str = str.replace(/ac|ca/i, 'b');\n        flag = true;\n      }\n    }\n  }\n  return str.length;\n}\n")),Object(r.b)("p",null,"O(n) time:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"function StringReduction(str) {\n  flag = true;\n  while (flag) {\n    flag = false;\n    if (/ab|ba|ab|ba|ac|ca/i.test(str)) {\n      str = str.replace(/ab|ba/i, 'c');\n      str = str.replace(/bc|cb/i, 'a');\n      str = str.replace(/ac|ca/i, 'b');\n      flag = true;\n    }\n  }\n  return str.length;\n}\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Reduction.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-reduction-md-32f278484d2918c10179.js.map