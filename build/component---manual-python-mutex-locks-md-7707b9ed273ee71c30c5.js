(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{Bdrx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Mutex-Locks.md"}});var c={_frontmatter:i},s=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mutex-locks"},"Mutex Locks"),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-python"}),'"""\nThis is a short example demoing how it works, but this example isn\'t realistic.\n\nWorth thinking about when using thread pools though and accessing shared resources.\n"""\nimport random\nimport csv\nimport threading\nlock = threading.Lock()\n\nsum = 0\ndata = list(range(1000))\n\nfor element in data:\n  with locks:\n    sum += element\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Mutex-Locks.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-mutex-locks-md-7707b9ed273ee71c30c5.js.map