(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"7WSu":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return b}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var i=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/Minimum-Swaps.md"}});var l={_frontmatter:o},s=a.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(s,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"minimum-swaps"},"Minimum Swaps"),Object(i.b)("h2",{id:"how-to"},"How to"),Object(i.b)("p",null,"Given array ",Object(i.b)("inlineCode",{parentName:"p"},"[7, 1, 3, 2, 4, 5, 6]"),", what are the minimum swaps to sort this algorithm?"),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We want this to be efficient, so selection sort doesn't cut it.")),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Build an array of indexes for where the next ",Object(i.b)("inlineCode",{parentName:"li"},"indexOf")," for the element you want is."),Object(i.b)("li",{parentName:"ol"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"i = 0..n-1"),", if ",Object(i.b)("inlineCode",{parentName:"li"},"arr[0] !== i + 1"),", then swap ",Object(i.b)("inlineCode",{parentName:"li"},"arr[i]")," with ",Object(i.b)("inlineCode",{parentName:"li"},"arr[indexes[i]]"),"."),Object(i.b)("li",{parentName:"ol"},"Finally, swap ",Object(i.b)("inlineCode",{parentName:"li"},"indexes[arr[i] = 1]")," with the new position ",Object(i.b)("inlineCode",{parentName:"li"},"indexes[i]"),"."),Object(i.b)("li",{parentName:"ol"},"Increment swaps."),Object(i.b)("li",{parentName:"ol"},"Continue.")),Object(i.b)("p",null,"This solution will have a run time of ",Object(i.b)("inlineCode",{parentName:"p"},"n"),"."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// Complete the minimumSwaps function below.\nfunction minimumSwaps(arr) {\n  let swaps = 0;\n  // Build an array of indexes for where the next `indexOf` for the element you want is.\n  const indexes = arr.map((_, i) => arr.indexOf(i + 1));\n\n  for (let i = 0; i < arr.length; i++) {\n    // if !== 1\n    if (arr[i] !== i + 1) {\n      // 7\n      const temp = arr[i];\n      // set arr[1] to 1\n      arr[i] = arr[indexes[i]];\n      // set arr[1] to 7\n      arr[indexes[i]] = temp;\n      // set indexes[6] to\n      indexes[temp - 1] = indexes[i];\n      // increment swaps\n      swaps++;\n    }\n  }\n\n  return swaps;\n}\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Minimum-Swaps.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-minimum-swaps-md-152b7d968d0d31c233f0.js.map