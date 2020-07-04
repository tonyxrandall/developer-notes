(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{"1J7c":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return i})),t.d(e,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Modules.md"}});var c={_frontmatter:i},s=r.a;function o(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},u=Object.keys(n);for(a=0;a<u.length;a++)t=u[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(s,u({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ruby-modules"},"Ruby Modules"),Object(a.b)("h2",{id:"include"},"include"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{className:"language-ruby"}),"module BasicFunctions\n  def eat\n    puts \"I am chewing!\"\n  end\n\n  def drink\n    puts \"Slurp! Slurp! Slurp!\"\n  end\n\n  def sleep\n    puts \"Zzzzzzzzzzzzzzzzz!\"\n  end\nend\n\n# file: cat.rb\n\nrequire './basic_functions'\n\nclass Cat\n  include BasicFunctions\nend\n\n# file: dog.rb\n\nrequire './basic_functions'\n\nClass Dog\n  include BasicFunctions\nend\n\n# file: human.rb\n\nrequire './basic_functions'\n\nClass Human\n  include BasicFunctions\nend\n")),Object(a.b)("h2",{id:"extend"},"extend"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{className:"language-ruby"}),"require './basic_functions'\n\nclass Cat\n  extend BasicFunctions\nend\n\nClass Dog\n  extend BasicFunctions\nend\n\nClass Human\n  extend BasicFunctions\nend\n\n# another file\nrequire './cat'\nrequire './dog'\nrequire './human'\n\nCat.eat\nCat.drink\nCat.sleep\n\nDog.eat\nDog.drink\nDog.sleep\n\nHuman.eat\nHuman.drink\nHuman.sleep\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Modules.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-modules-md-3838e9fcdb95a07e4208.js.map