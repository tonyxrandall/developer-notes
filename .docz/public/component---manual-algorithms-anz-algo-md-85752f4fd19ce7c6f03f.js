(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"12hJ":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var s=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/ANZ-Algo.md"}});var i={_frontmatter:l},o=a.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,s,a={},r=Object.keys(n);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(s.b)(o,r({},i,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"anz-algo"},"ANZ Algo"),Object(s.b)("h2",{id:"answer"},"Answer"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"/*\n * Complete the 'frequencyCount' function below.\n *\n * The function is expected to return an INTEGER_ARRAY.\n * The function accepts STRING s as parameter.\n */\n\nfunction frequencyCount(s) {\n  // Write your code here\n  // set final hashmap\n  let finalArray = new Array(26).fill(0);\n  // simple alphabet for final arr\n  // let alpha = 'abcdefghijklmnopqrstuvwxyz'\n\n  // iterate through encoded string and regex test\n  // the follow letters to understand what encoding is\n  // but be careful not to follow through with full length\n  // based on encoding rules\n\n  while (s.length > 0) {\n    let curSlice = '';\n    let encoding = 0;\n\n    // check encoding type\n    if (\n      s.length > 2 &&\n      s[0] === '2' &&\n      /[0123456]/gi.test(s[1]) &&\n      /&/gi.test(s[2])\n    ) {\n      // check amp option\n      curSlice = `${s[0]}${s[1]}${s[2]}`;\n      s = s.slice(3);\n      encoding = 2;\n    } else if (s.length > 1 && /#/gi.test(s[1])) {\n      // handle hash option\n      curSlice = `${s[0]}${s[1]}`;\n      s = s.slice(2);\n      encoding = 1;\n    } else if (/[0-9]/gi.test(s[0])) {\n      // check base number\n      curSlice = s[0];\n      s = s.slice(1);\n    } else {\n      // log for debugging\n      console.log('This case should not happen', s[0]);\n      s.slice(1);\n    }\n\n    // check if repeated\n    let multi = '';\n    if (s[0] === '[') {\n      // base remove [\n      s = s.slice(1);\n      // find matching ]\n      let found = false;\n      let i = 1;\n      while (!found) {\n        if (s.length === 0) {\n          // safety\n          found = true;\n        } else if (s[0] !== ']') {\n          // keep adding numbers until ] found\n          multi += s[0];\n          s = s.slice(1);\n        } else {\n          found = true;\n          s = s.slice(1);\n        }\n      }\n    }\n\n    // handle multi case\n    if (multi !== '') {\n      multi = parseInt(multi);\n    } else {\n      multi = 1;\n    }\n\n    // find letter and push to map\n    switch (encoding) {\n      case 0:\n        const baseIndex = parseInt(curSlice);\n        finalArray[baseIndex - 1] += multi;\n        break;\n      case 1:\n        const hashIndex = parseInt(curSlice[0]) + 10;\n        finalArray[hashIndex - 1] += multi;\n        break;\n      case 2:\n        const ampIndex = parseInt(`${curSlice[0]}${curSlice[1]}`);\n        finalArray[ampIndex - 1] += multi;\n        break;\n      default:\n        console.error('Encoder failed to handle cases');\n    }\n  }\n\n  return finalArray;\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/ANZ-Algo.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-anz-algo-md-85752f4fd19ce7c6f03f.js.map