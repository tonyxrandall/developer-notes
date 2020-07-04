(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{rnLO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Testing/enzyme.md"}});var i={_frontmatter:c},b=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"Author: Dennis O'Keeffe"),Object(a.b)("h2",{id:"section-testing"},"Section: Testing"),Object(a.b)("h1",{id:"enzyme"},"Enzyme"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://mochajs.org/"}),"Mocha Website")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"http://www.chaijs.com/api/"}),"Chai API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"http://airbnb.io/enzyme/docs/api/"}),"Enzyme API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"}),"Puppeteer API"))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"When testing React components for our expected UI, we use AirBnb's Enzyme library on top:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// Assuming component maybe the following:\n// <PageHome>\n//      <SectionOne />\n//      <SectionTwo />\n// <PageHome />\nconst wrapper = Enzyme.shallow(<PageHome />);\n\ndescribe(chalk.magenta('PageHome Enzyme tests'), () => {\n  it('PageHome child React component SectionHome to exist', () => {\n    expect(wrapper.find('SectionOne').exists()).to.equal(true); // evaluates to true\n  });\n});\n")),Object(a.b)("p",null,"In more advanced use, this can become incredibly useful for ensuring that a number of elements renders correctly from default JSON data or an external resource."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Testing/enzyme.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-testing-enzyme-md-0a2a47d5a527a1e93574.js.map