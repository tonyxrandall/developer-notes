(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{wCtQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Next/Hello-Next.md"}});var o={_frontmatter:i},p=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hello-next"},"Hello Next"),Object(a.b)("h2",{id:"useful-links"},"Useful links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://www.freecodecamp.org/news/the-next-js-handbook/"}),"Next.js Handbook")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://www.manuel-schoebel.com/blog/nextjs-typescript-storybook-setup"}),"Typescript Setup"))),Object(a.b)("h2",{id:"getting-started"},"Getting started"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npx create-next-app")," will create a next app. Using ",Object(a.b)("inlineCode",{parentName:"p"},"--example blog-starter")," will show an example with a blog."),Object(a.b)("p",null,"Change into directory and run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn dev"),"."),Object(a.b)("h2",{id:"setting-up-typescript"},"Setting up TypeScript"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"touch tsconfig.json && yarn add --dev typescript @types/react")),Object(a.b)("h2",{id:"adding-treat"},"Adding Treat"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yarn add treat react-treat")),Object(a.b)("p",null,"You then need to update the ",Object(a.b)("inlineCode",{parentName:"p"},"next.config.js")," file:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// start of file\nconst TreatPlugin = require('treat/webpack-plugin');\n\n// within webpack config object\nif (isServer) {\n  config.plugins.push(\n    new TreatPlugin({\n      outputCSS: false,\n    }),\n  );\n} else {\n  config.plugins.push(new TreatPlugin());\n}\n")),Object(a.b)("p",null,"Create a theme:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// theme.treat.js\n// ** THIS CODE WON'T END UP IN YOUR BUNDLE! **\nimport { createTheme } from 'treat';\n\nexport default createTheme({\n  brandColor: 'blue',\n  grid: 4,\n});\n")),Object(a.b)("p",null,"Now import the styles:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// App.js\nimport React from 'react';\nimport { TreatProvider } from 'react-treat';\n\nimport theme from './theme.treat.js';\n\nexport const App = () => <TreatProvider theme={theme}>...</TreatProvider>;\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Next/Hello-Next.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-next-hello-next-md-2156f45e2eaf9d1aad9c.js.map