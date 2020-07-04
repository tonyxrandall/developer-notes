(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{DxVQ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Sinon-JS.md"}});var i={_frontmatter:s},c=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"sinon-js"},"Sinon JS"),Object(a.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#sinon-js"}),"Sinon JS"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#table-of-contents"}),"Table of contents")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#basic-example"}),"Basic example"))))),Object(a.b)("h2",{id:"basic-example"},"Basic example"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// form/index.js\nimport { create } from 'apisauce';\n\nexport const api =\n    process.env.NODE_ENV === 'production'\n        ? create({\n              baseURL: 'http://',\n              headers: {\n                  Accept: 'application/vnd.github.v3+json'\n              }\n          })\n        : create({\n              baseURL: 'http://localhost:4444',\n              headers: {\n                  'Content-Type': 'application/json'\n              }\n          });\n\nexport default class Form {\n    static submit = async (values) => {\n        // ! This is what I am targeting\n        const res = await api.post('/form', values);\n        return res;\n    };\n}\n\n// form/form.mocha.js\nimport form, { api } from './index';\nimport sinon from 'sinon';\n\ndescribe('#submit()', function() {\n    it('should return 201', (done) => {\n        (async () => {\n            // ! We'll stub api.post so a request is not sent\n            var post = sinon.stub(api, 'post');\n            post.onCall(0).returns({ ok: true, status: 201 });\n\n            const res = await form.submit({ test: true });\n            post.restore();\n            expect(res.status).to.equal(201);\n            done();\n        })();\n    });\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Sinon-JS.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-sinon-js-md-bca086f29e3d5b56d607.js.map