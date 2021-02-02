(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{x4Nx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/Context-API.md"}});var i={_frontmatter:c},l=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(l,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"context-api"},"Context API"),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("p",null,"Create context and use the ",Object(r.b)("inlineCode",{parentName:"p"},"Provider")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Consumer"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nconst ThemeContext = React.createContext(\n  /* optional default value */\n);\nconst App = props => (\n  <ThemeContext.Provider value={{ primaryColor: green }}>\n    {props.children}\n  </ThemeContext.Provider>\n);\n\nconst ThemedButton = () => (\n  <ThemeContext.Consumer>\n    {value => (\n      <Button primaryColor={{ value.primaryColor }}>\n        I'm button using context!\n      </Button>\n    )}\n  </ThemeContext.Consumer>\n);\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/Context-API.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-context-api-md-c05e8f726cea94ebaf30.js.map