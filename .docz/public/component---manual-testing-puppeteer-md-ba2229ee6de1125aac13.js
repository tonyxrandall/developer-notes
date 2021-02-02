(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{"0sjL":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Testing/puppeteer.md"}});var i={_frontmatter:s},p=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("hr",null),Object(n.b)("p",null,"Author: Dennis O'Keeffe"),Object(n.b)("h2",{id:"section-testing"},"Section: Testing"),Object(n.b)("h1",{id:"puppeteer"},"Puppeteer"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://mochajs.org/"}),"Mocha Website")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"http://www.chaijs.com/api/"}),"Chai API")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"http://airbnb.io/enzyme/docs/api/"}),"Enzyme API")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"}),"Puppeteer API"))),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("p",null,"To test the UI itself, we can use Puppeteer, Chrome's Headless Browser to evaluate on the UI itself. Puppeteer can also be set to have ",Object(n.b)("inlineCode",{parentName:"p"},"headless: false"),", allowing the user to record or watch the test on their screen."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const puppeteer = require('puppeteer');\n\n// Test suite\ndescribe('PageHome functionality', () => {\n  // Test suite within another test suite - useful for subsectioning tests within a component/page\n  describe('Simple Puppeteer UI test for form elements', () => {\n    it('firstName and lastName from Puppeteer deep equal expected schema', async () => {\n      const expected = {\n        firstName: 'Hello',\n        lastName: 'World'\n      };\n\n      const browser = await puppeteer.launch({ headless: false });\n      const page = await browser.newPage();\n      await page.goto('http://localhost:3000');\n      await page.screenshot({ path: 'example.png' }); // create an example screenshot of current UI state\n      await page.type('input[name=\"firstName\"]', 'Hello');\n      const firstName = await page.$eval(\n        'input[name=\"firstName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      await page.click('#next');\n      await page.waitForSelector('input[name=\"lastName\"]');\n      await page.type('input[name=\"lastName\"]', 'World');\n      const lastName = await page.$eval(\n        'input[name=\"lastName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      const formData = {\n        firstName: firstName,\n        lastName: lastName\n      };\n\n      await browser.close();\n\n      expect(formData).to.deep.equal(expected); // evauates to true if form fields hold correct value\n    });\n  });\n});\n")),Object(n.b)("h2",{id:"logging"},"Logging"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"// output logs\npage.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\n// show devtools\nconst browser = await puppeteer.launch({devtools: true});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Testing/puppeteer.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-testing-puppeteer-md-ba2229ee6de1125aac13.js.map