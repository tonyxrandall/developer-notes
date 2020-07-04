(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{FrlH:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Thread-Pool-Usage.md"}});var c={_frontmatter:s},i=r.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(i,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"thread-pool-usage"},"Thread Pool Usage"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",a({parentName:"li"},{href:"https://stackoverflow.com/questions/53751050/python-multiprocessing-understanding-logic-behind-chunksize"}),"Explanation behind chunksize"))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-python"}),'"""\nprocesses=os.cpu_count() enables us to to utilise all\nprocessing cores.\n\nchunksize=1 tells us to pass one element on each execution. If you roughly know the time expecation of each function execution, you can increase this to chunk the args into bigger pieces for one process to tackle.\n"""\nfrom multiprocessing import Pool\n\ndef square(number):\n  return number * number\n\ndata  = [1,2,3]\nchunksize = 1\nproc_count = os.cpu_count()\nwith Pool(processes=proc_count) as pool:\n  result = pool.map(square, data, chunksize)\n  # result returns [1, 4, 9]\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Thread-Pool-Usage.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-thread-pool-usage-md-d32cc7bf267c24b1372d.js.map