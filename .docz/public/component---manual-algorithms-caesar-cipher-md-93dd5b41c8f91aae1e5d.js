(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{dRdi:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return o})),r.d(n,"default",(function(){return l}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var t=r("/FXl"),a=r("TjRS");r("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Caesar-Cipher.md"}});var c={_frontmatter:o},s=a.a;function l(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(s,i({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"causar-cipher"},"Causar Cipher"),Object(t.b)("h2",{id:"answer"},"Answer"),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"function CaesarCipher(str, num) {\n  // handle base case\n  if (num === 0) {\n    return str;\n  }\n\n  let finalStr = '';\n  for (let i = 0; i < str.length; i++) {\n    if (/[^a-zA-Z]/gi.test(str[i])) {\n      finalStr += str[i];\n      continue;\n    }\n\n    // 1. handle char code conversion\n    let charCode = str.charCodeAt(i) + num;\n    // 2. handle char code > a/A + 26\n    if (charCode > 90 && /[A-Z]/.test(str[i])) {\n      charCode = charCode - 26;\n    } else if (charCode > 122 && /[a-z]/.test(str[i])) {\n      charCode = charCode - 26;\n    }\n\n    // 3. handle str conversion from char code\n    finalStr += String.fromCharCode(charCode);\n  }\n\n  return finalStr;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Caesar-Cipher.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-caesar-cipher-md-93dd5b41c8f91aae1e5d.js.map