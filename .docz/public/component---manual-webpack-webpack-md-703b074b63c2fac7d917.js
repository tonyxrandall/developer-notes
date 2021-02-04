(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{x7B4:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),b=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Webpack/Webpack.md"}});var i={_frontmatter:l},r=b.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,b={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,["components"]);return Object(a.b)(r,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"webpack"},"Webpack"),Object(a.b)("p",null,"For results from this, the react gen will have the results of the Webpack tutorial installed!"),Object(a.b)("p",null,"It is important that you generate this folder or refer to the Treehouse course files."),Object(a.b)("p",null,"Because the way Webpack current stands and how it is designed, think of using it for React projects."),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("a",{href:"#web1"},"WEB-1"),Object(a.b)("a",{href:"#web2"},"title"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"web-1-webpack---the-why"},"WEB-1: Webpack - The Why."),Object(a.b)("p",null,"Build Tasks"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Module loading")),Object(a.b)("p",null,"Looks for ",Object(a.b)("inlineCode",{parentName:"p"},"require")," and ",Object(a.b)("inlineCode",{parentName:"p"},"import")," statements. This helps prevents errors."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Concatenation")),Object(a.b)("p",null,"Combining several files into one for loading performance. Minimal HTTP reqs."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Minification")),Object(a.b)("p",null,"Compressing/extraction unnecessary lines and characters."),Object(a.b)("h2",{id:"web-2-webpack-config"},"WEB-2: Webpack Config"),Object(a.b)("p",null,"Webpack is an opinionated tool. If you stick to industry standard, you won't need to do much config."),Object(a.b)("p",null,"Config is done in ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js")),Object(a.b)("p",null,"For now, we'll just look at 3 configuration properties:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"1. entry\n2. output\n3. module\n")),Object(a.b)("p",null,"The file looks like so:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'var HtmlWebpackPlugin = require("html-webpack-plugin");\n\n// ensure all the webpack dependencies are installed\nvar webpackConfig = {\n    entry: "./src/app.js",\n    output: {\n        path: "build",\n        filename: "bundle.js"\n    },\n    module: {\n        loaders: [\n            {\n                // used to ensure js loads\n                loader: "babel-loader",\n                test: /\\.js$/\n            }\n        ]\n    }\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"entry")," can be specified with a string for a single entry point or an object for multiple entry points."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"output")," used for building for production - which folder to place your build in and what file to have the bundled file."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"module")," many properties that are used to config webpack. Loaders will be used for using installed loaders."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"web-3-building-an-app"},"WEB-3: Building an app"),Object(a.b)("p",null,"Webpack has it's own CLI tool."),Object(a.b)("p",null,"In the example file from the TH lesson, index.js is the entry point and index.ejs is then used to inject JS into a HTML file."),Object(a.b)("p",null,"We're going to define a npm script for webpack."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'// in package.json\n...\n"script": {\n        "build": "webpack --optimize-minimize"\n}\n...\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"web-4-webpack-dev-server"},"WEB-4: Webpack Dev Server"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"webpack-dev-server")," is an npm file you can use for serving, however you can just flag ",Object(a.b)("inlineCode",{parentName:"p"},"webpack --watch")," and run from MAMP if you want."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"web-5-adding-styles"},"WEB-5: Adding Styles"),Object(a.b)("p",null,"Loaders are extensions that enable more webpack config options."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"web-6-loaders"},"WEB-6: Loaders"),Object(a.b)("p",null,"Source maps, fonts etc."),Object(a.b)("p",null,"We can pipe loaders."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Webpack.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-webpack-webpack-md-703b074b63c2fac7d917.js.map