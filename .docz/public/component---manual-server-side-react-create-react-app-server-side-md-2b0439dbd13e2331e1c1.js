(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{WGA4:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Server-Side-React/Create-React-App-Server-Side.md"}});var s={_frontmatter:l},p=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(p,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"create-react-app-server-side-bootstrapping"},"create-react-app Server Side bootstrapping"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"npm run eject"),Object(r.b)("li",{parentName:"ol"},"Update config/paths.js")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// config/paths.js\n\nmodule.exports = {\n    ...\n    appServer: resolveApp('server'),\n    serverIndexJs: resolveApp('src/server.js'),\n    ...\n}\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"webpack.config.server.js")," file."),Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("inlineCode",{parentName:"li"},"webpack-node-externals"),".")),Object(r.b)("p",null,"As described on the github:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Webpack allows you to define externals - modules that should not be bundled.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"const path = require('path');\nconst paths = require('./paths');\nconst webpackNodeExternals = require('webpack-node-externals');\n\nmodule.exports = {\n    // Target Nodehs\n    target: 'node',\n    // Looking for the root of server app\n    entry: paths.serverIndexJs,\n    output: {\n        // The build folder.\n        path: paths.appServer,\n        filename: 'server.js'\n    },\n    // Run Babel on every file\n    module: {\n        rules: [\n            {\n                test: /\\.js?$/,\n                loader: 'babel-loader',\n                exclude: /node_modules/,\n                options: {\n                    presets: [\n                        'react',\n                        'stage-0',\n                        ['env', { targets: { browsers: ['last 2 versions']}}]\n                    ]\n                }\n            }\n        ]\n    },\n    externals: [webpackNodeExternals()]\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Server-Side-React/Create-React-App-Server-Side.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-server-side-react-create-react-app-server-side-md-2b0439dbd13e2331e1c1.js.map