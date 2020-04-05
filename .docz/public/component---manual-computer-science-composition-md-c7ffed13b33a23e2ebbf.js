(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{R64M:function(n,e,i){"use strict";i.r(e),i.d(e,"_frontmatter",(function(){return c})),i.d(e,"default",(function(){return u}));i("1c7q"),i("abGl"),i("gZHo"),i("Fdmb"),i("Ir+3"),i("2mQt"),i("mXGw");var t=i("/FXl"),r=i("TjRS");i("aD51");function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Computer-Science/Composition.md"}});var a={_frontmatter:c},g=r.a;function u(n){var e=n.components,i=function(n,e){if(null==n)return{};var i,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,["components"]);return Object(t.b)(g,o({},a,i,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"composition--aggregation"},"Composition & Aggregation"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Engine {\n  value: string;\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\nclass Truck {\n  engine: Engine;\n\n  constructor(engine: Engine) {\n    this.engine = engine;\n  }\n\n  isEngineRunning() {\n    return this.engine.value;\n  }\n}\n\nclass Car {\n  engine: Engine;\n\n  constructor(engine: Engine) {\n    this.engine = engine;\n  }\n\n  isEngineRunning() {\n    return this.engine.value;\n  }\n\n  removeEngine() {\n    this.engine = new Engine('Engine removed');\n  }\n}\n\nlet engine: Engine | undefined = new Engine('Engine running');\n// notice both car and truck share engine\nlet car = new Car(engine);\nlet truck = new Truck(engine);\n\nconsole.log('Car:', car.isEngineRunning());\nconsole.log('Truck:', truck.isEngineRunning());\n// delete car\ncar.removeEngine();\nconsole.log('Car:', car.isEngineRunning());\nconsole.log('Truck:', truck.isEngineRunning());\nconsole.log('Same pointer', engine === truck.engine);\nengine = undefined;\nconsole.log(engine);\nconsole.log('Truck:', truck.isEngineRunning());\nconsole.log('Same pointer', engine === truck.engine);\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Computer-Science/Composition.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-computer-science-composition-md-c7ffed13b33a23e2ebbf.js.map