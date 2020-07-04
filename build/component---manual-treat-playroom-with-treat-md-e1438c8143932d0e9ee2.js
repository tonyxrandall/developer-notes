(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{"/hjk":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Treat/Playroom-With-Treat.md"}});var i={_frontmatter:l},s=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"playroom-with-treat"},"Playroom With Treat"),Object(r.b)("p",null,"The basic getting started can be found ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/seek-oss/playroom"}),"on Github")),Object(r.b)("p",null,"The tl;dr is ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add --dev playroom"),", then add ",Object(r.b)("inlineCode",{parentName:"p"},'"playroom:start": "playroom start"')," and ",Object(r.b)("inlineCode",{parentName:"p"},'"playroom:build": "playroom build"')," to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," scripts."),Object(r.b)("h2",{id:"updating-playroomconfigjs"},"Updating playroom.config.js"),Object(r.b)("p",null,"Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"playroom.config.js"),"."),Object(r.b)("p",null,"The working file should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const TreatPlugin = require('treat/webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = {\n  components: './src/components',\n  outputPath: './dist/playroom',\n\n  // Optional:\n  title: 'Playroom',\n  themes: './src/themes/index.js',\n  frameComponent: './src/FrameComponent.js',\n  // widths: [320, 375, 768, 1024],\n  port: 9000,\n  openBrowser: false,\n  webpackConfig: () => ({\n    module: {\n      rules: [\n        {\n          test: /\\.(ts|tsx)$/,\n          include: __dirname,\n          exclude: /node_modules/,\n          use: {\n            loader: require.resolve('babel-loader'),\n            options: {\n              presets: [\n                require.resolve('@babel/preset-env'),\n                require.resolve('@babel/preset-react'),\n                require.resolve('@babel/preset-typescript'),\n              ],\n              plugins: [\n                require.resolve('@babel/plugin-proposal-class-properties'),\n              ],\n            },\n          },\n        },\n        {\n          test: /\\.js$/,\n          include: __dirname,\n          exclude: /node_modules/,\n          use: {\n            loader: require.resolve('babel-loader'),\n            options: {\n              presets: [\n                require.resolve('@babel/preset-env'),\n                require.resolve('@babel/preset-react'),\n              ],\n              plugins: [\n                require.resolve('@babel/plugin-proposal-class-properties'),\n              ],\n            },\n          },\n        },\n      ],\n    },\n    plugins: [\n      new TreatPlugin({\n        outputLoaders: [MiniCssExtractPlugin.loader],\n      }),\n      new MiniCssExtractPlugin(),\n    ],\n  }),\n};\n")),Object(r.b)("h2",{id:"themes-file"},"Themes file"),Object(r.b)("p",null,"An example of the themes filed refernced above:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export { default as scruffy } from './scruffy/index.js';\nexport { default as daisy } from './daisy/index.js';\n")),Object(r.b)("h2",{id:"frame-component"},"Frame Component"),Object(r.b)("p",null,"The working frame component looks like so:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React, { Fragment } from 'react';\nimport * as themes from './themes/treat';\nimport { TreatProvider } from 'react-treat';\n\nexport default ({ theme, children }) => {\n  return (\n    <TreatProvider theme={themes[theme.name]}>\n      <Fragment>{children}</Fragment>\n    </TreatProvider>\n  );\n};\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Treat/Playroom-With-Treat.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-treat-playroom-with-treat-md-e1438c8143932d0e9ee2.js.map