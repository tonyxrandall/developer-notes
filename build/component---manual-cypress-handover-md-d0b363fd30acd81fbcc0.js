(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{bLGp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Cypress/Handover.md"}});var s={_frontmatter:c},r=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(r,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"handover"},"Handover"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://docs.cypress.io/guides/references/best-practices.html"}),"Cypress Best Practices"))),Object(a.b)("h2",{id:"video-2"},"Video 2"),Object(a.b)("h3",{id:"writing-cypress-tests"},"Writing Cypress tests"),Object(a.b)("h4",{id:"do-not-assign-values-in-it-block"},"Do not assign values in it block"),Object(a.b)("p",null,"This is do around Cypress context. You want to constantly chain. Cypress denotes that you should follow this convention:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"cy.then(() => assignSubjectValue);\n")),Object(a.b)("p",null,"Some of the reasoning is that during the test, the element assigned may no longer be visible in the DOM which can make the tests flaky."),Object(a.b)("h4",{id:"test-structure"},"Test structure"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"describe('Eval Cycles', () => {\n  describe('Listing page', () => {\n    beforeEach(() => {\n      cy.visit(url, { timeout: 120000 });\n    });\n\n    it('creates a new evaluation cycle by clicking the button', () => {\n      cy.getByAutomationId(Aid.id, 0).click();\n    });\n  });\n});\n")),Object(a.b)("h3",{id:"iscontext"},"isContext"),Object(a.b)("p",null,"This ",Object(a.b)("inlineCode",{parentName:"p"},"isContext"),' value will help get the context ie "record", "playback" etc. We can use that value to then determine this works.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"describe('Eval Cycles', () => {\n  describe('Listing page', () => {\n    beforeEach(() => {\n      cy.visit(url, { timeout: 120000 });\n    });\n\n    it('creates a new evaluation cycle by clicking the button', () => {\n      cy.getByAutomationId(Aid.id, 0).click().isContext(\"record\").then(recording) => {\n        if (recording) {\n          cy.wait(\"@POST\")\n        }\n      };\n    });\n  });\n});\n")),Object(a.b)("h4",{id:"setting-cookies"},"Setting Cookies"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"cy.setCookie('cookie', 'value');\n")),Object(a.b)("h4",{id:"settinggetting-local-storage"},"Setting/Getting local storage"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"cy.window().then(win => {\n  win.localStorage.setTime('topNavTourComplete', 'true');\n});\n")),Object(a.b)("h4",{id:"get-calls"},"Get calls"),Object(a.b)("p",null,"These will reset the subject."),Object(a.b)("h4",{id:"order-of-what-to-pick"},"Order of what to pick"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Automation ID"),Object(a.b)("li",{parentName:"ol"},"Text (okay but not ideal)"),Object(a.b)("li",{parentName:"ol"},"Classes (maybe slightly better than text, but also might change)")),Object(a.b)("p",null,"Cypress has a list of recommended ways and ways that are not recommended."),Object(a.b)("h4",{id:"custom-commands"},"Custom commands"),Object(a.b)("p",null,"Check in the ",Object(a.b)("inlineCode",{parentName:"p"},"cypress/support")," file/folder."),Object(a.b)("h3",{id:"things-to-be-aware-of"},"Things to be aware of"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"New navigation: you can set a cookie for this to ensure that we do not display this cookie during tests. Use an option to not display this everytime.")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Cypress/Handover.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-cypress-handover-md-d0b363fd30acd81fbcc0.js.map