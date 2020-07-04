(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{"1UYk":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Nightmare.md"}});var u={_frontmatter:a},c=o.a;function l(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["components"]);return Object(r.b)(c,i({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"using-nightmarejs"},"Using Nightmare.js"),Object(r.b)("p",null,"Nightmare.js with Mocha, Chai and Nightmare.js "),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"var path = require('path');\nvar Nightmare = require('nightmare');\nvar should = require('chai').should();\n\ndescribe('Nightmare demo', function () {\n    this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds\n\n    var url = 'http://localhost:3000';\n\n    describe('Start page', function () {\n        it('should show form when loaded', function (done) {\n            new Nightmare()\n                .goto(url)\n                .evaluate(function () {\n                    return document.querySelectorAll('form').length;\n                }, function (result) {\n                    result.should.equal(1);\n                    done();\n                })\n                .run();\n        });\n    });\n\n    describe('Send form', function () {\n        it('should print the posted string on submit', function (done) {\n            var expected = 'Hello, world!';\n\n            new Nightmare()\n                .goto(url)\n                .type('input[name=\"sometext\"]', expected)\n                .click('input[type=\"submit\"]')\n                .wait()\n                .evaluate(function () {\n                    return document.querySelector('#result');\n                }, function (element) {\n                    element.innerText.should.equal(expected);\n                    done();\n                })\n                .run();\n        });\n\n        it('should print \"nothing\" on submit if no string were provided', function (done) {\n            var expected = 'nothing';\n\n            new Nightmare()\n                .goto(url)\n                .click('input[type=\"submit\"]')\n                .wait()\n                .evaluate(function () {\n                    return document.querySelector('#result');\n                }, function (element) {\n                    element.innerText.should.equal(expected);\n                    done();\n                })\n                .run();\n        });\n    });\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Nightmare.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-nightmare-md-789d09ec9649e6689890.js.map