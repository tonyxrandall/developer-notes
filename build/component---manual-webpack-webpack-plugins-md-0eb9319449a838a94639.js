(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{AIZz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Webpack/Webpack-Plugins.md"}});var l={_frontmatter:i},c=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,s({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"webpack-plugins"},"Webpack Plugins"),Object(a.b)("p",null,"Webpack 4 is the standard at the time of this course."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://frontendmasters.com/courses/webpack-plugins/tapable-plugin-system/"}),"FE Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://github.com/thelarkinn/webpack-workshop-2018"}),"Course Repo")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://webpack.js.org/api/compilation-hooks/"}),"Webpack Compilation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://github.com/streamich/memfs"}),"memfs GitHub"))),Object(a.b)("h2",{id:"tapable-pluging-system"},"Tapable Pluging System"),Object(a.b)("p",null,"It is a backbone of the webpack of the plugin system."),Object(a.b)("p",null,"Things like the ",Object(a.b)("inlineCode",{parentName:"p"},"Compiler")," extend ",Object(a.b)("inlineCode",{parentName:"p"},"Tapable"),". They have hooks now that are static to see what you can plug into."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// This is only v3 shown for demo purposes.\n// These days you can plug into via the hooks.\nclass BasicPlugin {\n  constructor() {}\n\n  apply(compiler) {\n    compiler.plugin('make', compilation => {\n      console.log('I have access to the compilation!');\n    });\n  }\n}\n\nmodule.exports = BasicPlugin;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To access any Tapable instances, you need to go through the compiler.")),Object(a.b)("p",null,"There are 7-ish Tapable instances in this talk that Sean deems as the most important."),Object(a.b)("h2",{id:"the-7-tapable-instances"},"The 7 Tapable Instances"),Object(a.b)("h3",{id:"the-compiler"},"The Compiler"),Object(a.b)("p",null,"The compiler:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Exposed via Node API"),Object(a.b)("li",{parentName:"ul"},"Central dispatch"),Object(a.b)("li",{parentName:"ul"},"Start/stop")),Object(a.b)("h3",{id:"the-compilation"},"The Compilation"),Object(a.b)("p",null,"The meat and potatoes of the Webpack. It is the dependency graph."),Object(a.b)("h3",{id:"the-resolver"},"The Resolver"),Object(a.b)("p",null,'"Finds out if it exists."'),Object(a.b)("h3",{id:"module-factories"},"Module Factories"),Object(a.b)("p",null,"Factories create instances/objects. The module factories does just that."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Takes successfully resolved requests."),Object(a.b)("li",{parentName:"ul"},"Collects source for that file and creates a module object.")),Object(a.b)("h3",{id:"parser"},"Parser"),Object(a.b)("p",null,"Parser creates the ASTs and begins walking the graph."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Webpack uses Acorn by default.")),Object(a.b)("h3",{id:"templates"},"Templates"),Object(a.b)("p",null,"Data binding for the modules. Creates the source code you see in your bundles."),Object(a.b)("h2",{id:"plugin-system-code-walkthough"},"Plugin System Code Walkthough"),Object(a.b)("p",null,"There are hundreds of properties exposed out of the box."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"webpack.options.apply"),' takes the config and "basically runs a huge switch statement" and changes the module based on the env ie Electron, etc.'),Object(a.b)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is a class with an ",Object(a.b)("inlineCode",{parentName:"p"},"apply")," method.")),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// plugin\nclass MyFirstWebpackPlugin {\n  // this is the important method\n  apply(compiler) {\n    compiler.hooks.done.tapAsync(\"MyFirstWebpackPlugin\", (stats, cb) => {\n      console.log(stats);\n      cb;\n    }));\n  }\n}\n\nmodule.exports = MyFirstWebpackPlugin;\n\n// in webpack.config.js\nconst MyFirstWebpackPlugin = require('path/to/MyFirstWebpackPlugin');\n\n// ... later in the code\nplugins: [new MyFirstWebpackPlugin()];\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Use ",Object(a.b)("inlineCode",{parentName:"p"},"webpack/lib/Compiler.js")," to see all the possible hooks!")),Object(a.b)("p",null,"The important part of any hook is the ",Object(a.b)("inlineCode",{parentName:"p"},"tapAsync")," method:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb) => {\n  console.log(stats);\n  debugger; // a cool tip on debugging the webpack plugin at chrome://inspect\n  cb();\n}));\n')),Object(a.b)("p",null,"Using the debugger can tell you so much about why things get tree shaken etc. You can see it in verbose in the debug console using ",Object(a.b)("inlineCode",{parentName:"p"},'stats.toString("verbose")'),"."),Object(a.b)("p",null,"A useful hook to see the outputs:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb) => {\n  const assetNames = [];\n  for (let assetName in stats.compilation.assets) {\n    assetName.push(assetName)\n  }\n  console.log(assetNames.join("\\n"))\n  cb();\n}));\n')),Object(a.b)("h2",{id:"plugin-instance-hook"},"Plugin Instance Hook"),Object(a.b)("p",null,"For hooking into another instance, we can use another hook:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'compiler.hooks.compilation.tapAsync("MyFirstWebpackPlugin", (compilation, params) => {\n  const thisCompilationIWantToInspect = compilation;\n  compilation.hooks.seal.tap("MyFirstWebpackPlugin", () => {\n    // annoying gotcha - need to use the variable for it to show in VSCode inspector\n    console.log(thisCompilationIWantToInspect)\n    debugger; // we can now inspect the above\n  })\n}));\n')),Object(a.b)("h2",{id:"isolating-plugins"},"Isolating Plugins"),Object(a.b)("p",null,"Everything is in memory, so there is no concept of importing ",Object(a.b)("inlineCode",{parentName:"p"},"fs")," from Node. There is a file ",Object(a.b)("inlineCode",{parentName:"p"},"MemoryOutputFileSystem.js")," that has a like of requiring memory fs."),Object(a.b)("p",null,"Webpack uses an in-memory file system, simile to ",Object(a.b)("a",s({parentName:"p"},{href:"https://github.com/streamich/memfs"}),"memfs"),"."),Object(a.b)("p",null,"Something else that is cool is that you can take another plugin and use that within your plugin! You can bring your own plugins into other plugins."),Object(a.b)("h2",{id:"creating-a-customer-loader"},"Creating a Customer Loader"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// webpack.config.js\nmodule.exports = () => ({\n  resolveLoader: {\n    alias: {\n      'my-loader': require.resolve('./build-utils/my-loader.js'),\n    },\n  },\n  module: {\n    reults: [\n      {\n        test: /\\.js/,\n        use: 'my-loader',\n      },\n    ],\n  },\n});\n\n// my-loader.js\nfunction myLoader(source) {\n  debugger;\n  // example Sean uses\n  if (this.resource === 'path/to/file') {\n    // do something with resource\n  }\n  return source;\n}\n\nmodule.exports = myLoader;\n")),Object(a.b)("p",null,"Something that is great, is that if you step over while the bugger is on, you'll got through all ",Object(a.b)("inlineCode",{parentName:"p"},"js")," files!"),Object(a.b)("p",null,"In the example, Sean just uses a simmple."),Object(a.b)("h2",{id:"configuring-babel-for-webpack"},"Configuring Babel for Webpack"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is important not to transpile Webpack down to CommonJS - this is a common pitfall and will cause issues for scope hoisting, tree shaking etc.")),Object(a.b)("p",null,"The is an option to use ",Object(a.b)("inlineCode",{parentName:"p"},'"modules": false')," in the Babel config to ensure Webpack isn't down-converted."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Webpack-Plugins.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-webpack-webpack-plugins-md-0eb9319449a838a94639.js.map