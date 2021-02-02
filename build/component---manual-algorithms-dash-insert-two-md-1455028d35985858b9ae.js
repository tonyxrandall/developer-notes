(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"HOz/":function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return i})),e.d(t,"default",(function(){return l}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var r=e("/FXl"),a=e("TjRS");e("aD51");function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Dash-Insert-Two.md"}});var o={_frontmatter:i},c=a.a;function l(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,a={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["components"]);return Object(r.b)(c,s({},o,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"dash-insert-ii"},"Dash Insert II"),Object(r.b)("h2",{id:"answer"},"Answer"),Object(r.b)("h3",{id:"short-answer"},"Short Answer"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"function DashInsertII(num) {\n  const resString = num.toString(10);\n  return resString\n    .replace(/([2468])(?=[2468])/g, '$1*')\n    .replace(/([13579])(?=[13579])/g, '$1-');\n}\n")),Object(r.b)("h3",{id:"long-answer"},"Long Answer"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"function DashInsertII(num) {\n  // convert to string\n  const str = num.toString();\n  if (str.length < 2) {\n    return str;\n  }\n\n  let dashString = '';\n  // iterate through and compare prev to next\n  for (let i = 1; i < str.length; i++) {\n    // check odd, then check even\n    if (str[i - 1] === '0' || str[i] === '0') {\n      dashString += str[i - 1];\n    } else if (str[i - 1] % 2 === 1 && str[i] % 2 === 1) {\n      dashString += `${str[i - 1]}-`;\n    } else if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {\n      dashString += `${str[i - 1]}*`;\n    } else {\n      dashString += str[i - 1];\n    }\n  }\n\n  // add final el\n  dashString += str[str.length - 1];\n\n  // return str\n  return dashString;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Dash-Insert-Two.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-dash-insert-two-md-1455028d35985858b9ae.js.map