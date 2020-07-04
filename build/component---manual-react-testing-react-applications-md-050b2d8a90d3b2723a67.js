(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{dBN7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/Testing-React-Applications.md"}});var c={_frontmatter:s},i=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"testing-react-applications"},"Testing React Applications"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://frontendmasters.com/courses/testing-react/"}),"Frontend Masters course"))),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The introduction takes us through testing without the help of extenal libraries using ",Object(a.b)("inlineCode",{parentName:"p"},"React")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ReactDOM"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Component from '../Component';\n\ntest('renders \"no items\" when no items are given', () => {\n  const container = document.createElement('div');\n  ReactDOM.render(<Component />, container);\n\n  expect(container.textContent).toMatch('no items');\n});\n")),Object(a.b)("p",null,"In tests, we actually look to lose fidelity in exchange for a better experience of checking the user experience."),Object(a.b)("h2",{id:"jest-jsdom"},"Jest JSDOM"),Object(a.b)("p",null,"By default, Jest loads JSDOM. If we don't want to run JSDOM, we can add package.json config for Jest:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'"jest": {\n  "testEnvironment": "node" // doesn\'t use JSDOM\n}\n')),Object(a.b)("h2",{id:"css-imports"},"CSS Imports"),Object(a.b)("p",null,"Node cannot import CSS, so we need to add more Jest configuration. Let's change our package.json config and abstract that to ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  moduleNameMapper: {\n    // make a file to map it to module.exports = {}\n    '\\\\.css$': require.resolve('./test/style-mock'),\n  },\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: JavaScript string regex ",Object(a.b)("inlineCode",{parentName:"p"},"\\\\.css$")," === ",Object(a.b)("inlineCode",{parentName:"p"},"/\\.css$"))),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"identity-module-proxy")," with CSS to help with our mocked object. ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add identity-obj-proxy"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  moduleNameMapper: {\n    '\\\\.module\\\\.css$': 'identity-obj-proxy',\n    // make a file to map it to module.exports = {}\n    '\\\\.css$': require.resolve('./test/style-mock'),\n  },\n};\n")),Object(a.b)("p",null,"The module name mappers are useful for so much more too (GraphQL etc)."),Object(a.b)("h2",{id:"handling-dynamic-imports"},"Handling Dynamic Imports"),Object(a.b)("p",null,"Ensure you have the correct babel plugin added. Kent adds in a file that simulates the ",Object(a.b)("inlineCode",{parentName:"p"},"localStorage")," getItem/setItem etc."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  moduleNameMapper: {\n    '\\\\.module\\\\.css$': 'identity-obj-proxy',\n    // make a file to map it to module.exports = {}\n    '\\\\.css$': require.resolve('./test/style-mock'),\n  },\n  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework'),\n};\n")),Object(a.b)("h2",{id:"adding-coverage-reports"},"Adding Coverage Reports"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"jest --coverage")," will give you a neat report on coverage."),Object(a.b)("p",null,"To ensure that our coverage doesn't include supporting test files:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  moduleNameMapper: {\n    '\\\\.module\\\\.css$': 'identity-obj-proxy',\n    // make a file to map it to module.exports = {}\n    '\\\\.css$': require.resolve('./test/style-mock'),\n  },\n  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework'),\n  // takes glob\n  collectCoverageFrom: ['**/src/**.js'],\n  // enforces code coverage\n  coverageThreshold: {\n    global: {\n      // based on lcov\n      statements: 18,\n      branches: 10,\n      functions: 19\n      lines: 18\n    }\n  }\n};\n")),Object(a.b)("h2",{id:"projects-key"},"Projects Key"),Object(a.b)("p",null,"You can run multiple projects in parallel with the ",Object(a.b)("inlineCode",{parentName:"p"},"projects")," key:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  moduleNameMapper: {\n    '\\\\.module\\\\.css$': 'identity-obj-proxy',\n    // make a file to map it to module.exports = {}\n    '\\\\.css$': require.resolve('./test/style-mock'),\n  },\n  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework'),\n  // takes glob\n  collectCoverageFrom: ['**/src/**.js'],\n  // enforces code coverage\n  coverageThreshold: {\n    global: {\n      // based on lcov\n      statements: 18,\n      branches: 10,\n      functions: 19\n      lines: 18\n    }\n  },\n  projects: ['./client', './server']\n};\n")),Object(a.b)("h2",{id:"react-testing-library"},"React Testing Library"),Object(a.b)("p",null,"Interesting tips:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"await wait(() => getByTestId('greeting-text'));\n// snapshotting\nexpect(container.firstChild).toMatchSnapshot();\n// great for a11y\ngetByLabelText('a11y title');\n")),Object(a.b)("p",null,"If it isn't reasonable to use specific queries, you should use ",Object(a.b)("inlineCode",{parentName:"p"},"getByTestId"),"."),Object(a.b)("p",null,"When it comes to data attributes, should we sanitised? To be honest, it will not be the bottleneck. There is also a Babel plugin ",Object(a.b)("inlineCode",{parentName:"p"},"babel-plugin-react-remove-properties")," where you could remove these properties from production."),Object(a.b)("h2",{id:"component-testing-qa"},"Component Testing Q&A"),Object(a.b)("p",null,"A nice tidbit here was using ",Object(a.b)("inlineCode",{parentName:"p"},"jest.useFakeTimers()")," to ensure all timers runout. In the test, ",Object(a.b)("inlineCode",{parentName:"p"},"jest.runAllTimers()")," is used to do just this."),Object(a.b)("h2",{id:"jest-snapshots"},"Jest Snapshots"),Object(a.b)("p",null,"Take a snapshot of an object at a particular time. Worth noting that ",Object(a.b)("inlineCode",{parentName:"p"},".toMatchSnapshot")," does have to be used on components themselves - it is very handy for specific values etc too."),Object(a.b)("p",null,"You can also use Jest's custom snapshot serializer to customise what you can do. In the config, this comes up ",Object(a.b)("inlineCode",{parentName:"p"},"snapshotSerializers"),"."),Object(a.b)("h2",{id:"cypress-setup"},"Cypress Setup"),Object(a.b)("p",null,"To use, ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add --dev cypress"),". It installs an app and pops it in the node modules."),Object(a.b)("p",null,"Then we can run ",Object(a.b)("inlineCode",{parentName:"p"},"npx cypress open")," and it will open up the chrome browsers and start running the tests."),Object(a.b)("h2",{id:"cypress-configuration"},"Cypress Configuration"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"cypress.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'{\n  "baseUrl": "http://localhost:8080/"\n  "integrationFolder": "cypress/e2e"\n}\n')),Object(a.b)("p",null,"Example then of a Cypress test:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// e2e/calculator.js\ndescribe('calculator', () => {\n  it('can visit the app', () => {\n    cy.visit('/')\n      .getByText(/^1$/)\n      .click()\n      .getByText(/^\\+$/)\n      .click()\n      .getByText(/^2$/)\n      .click()\n      .getByText(/^=$/)\n      .click()\n      .getByTestId('display');\n  });\n});\n")),Object(a.b)("p",null,"To use the ",Object(a.b)("inlineCode",{parentName:"p"},"getByText")," etc we need to install ",Object(a.b)("inlineCode",{parentName:"p"},"cypress-testing-library"),". Then we can add this inside of the ",Object(a.b)("inlineCode",{parentName:"p"},"support")," folder."),Object(a.b)("p",null,"Setting it up with scripts to run in our ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'"test:e2e:dev": "npm-run-all --parallel dev cy:open",\n"cy:open": "cypress open",\n"test:e2e": "npm-run-all --parallel --race start cy:run",\n"cy:open": "cypress run"\n')),Object(a.b)("h2",{id:"testing-trophy"},"Testing Trophy"),Object(a.b)("p",null,"Bottom should include ",Object(a.b)("inlineCode",{parentName:"p"},"static")," through typing etc, then unit and e2e should make a small part but integration should be the major part."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/Testing-React-Applications.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-testing-react-applications-md-050b2d8a90d3b2723a67.js.map