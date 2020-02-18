(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{l39v:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Singleton.md"}});var r={_frontmatter:l},s=a.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(o.b)(s,i({},r,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"singleton"},"Singleton"),Object(o.b)("p",null,"Another creational design pattern used to ensure there is only ever one instance in use."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"class Singleton {\n  private static instance: Singleton;\n  public value: number = 4;\n\n  private constructor() {}\n\n  static getSharedInstance() {\n    if (!Singleton.instance) {\n      Singleton.instance = new Singleton();\n    }\n\n    return Singleton.instance;\n  }\n}\n\nconst singletonOne = Singleton.getSharedInstance();\nsingletonOne.value = 12;\nconsole.log('S1 value:', singletonOne.value); // 12\n\nconst singletonTwo = Singleton.getSharedInstance();\nsingletonTwo.value = 21;\nconsole.log('S2 value:', singletonTwo.value); // 21\nconsole.log('S1 value:', singletonOne.value); // 21\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Singleton.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-singleton-md-d10c333ddd81f76d57c0.js.map