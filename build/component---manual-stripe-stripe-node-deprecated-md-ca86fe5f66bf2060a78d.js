(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{"5Jtt":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Stripe-Node-Deprecated.md"}});var i={_frontmatter:c},s=o.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(s,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"using-stripe-with-node"},"Using Stripe with Node"),Object(r.b)("h2",{id:"prereqs"},"Prereqs"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Sign up"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"yarn add stripe")," to your Node.js Project"),Object(r.b)("li",{parentName:"ol"},"Build out a server")),Object(r.b)("h2",{id:"testing-with-express"},"Testing with Express"),Object(r.b)("p",null,"Configure the .env file and upload"),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/stripe/stripe-node"}),"Node Stripe Github")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n\n/* GET home page. */\nmodule.exports = function(app) {\n  app.get('/', function(req, res) {\n    res.send('Server is healthy');\n  });\n\n  app.post('/', function(req, res) {\n    console.log(req.body);\n    // Create a new customer and then a new charge for that customer:\n    stripe.customers\n      .create({\n        email: 'foo-customer@example.com',\n      })\n      .then(function(customer) {\n        console.log(customer);\n        return stripe.customers.createSource(customer.id, {\n          source: {\n            object: 'card',\n            exp_month: 10,\n            exp_year: 2018,\n            number: '4242 4242 4242 4242',\n            cvc: 100,\n          },\n        });\n      })\n      .then(function(source) {\n        return stripe.charges.create({\n          amount: 1600,\n          currency: 'aud',\n          customer: source.customer,\n        });\n      })\n      .then(function(charge) {\n        // New charge created on a new customer\n        console.log(charge);\n      })\n      .catch(function(err) {\n        // Deal with an error\n        console.log(err);\n      });\n\n    res.send('Post requests are healthy');\n  });\n};\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Stripe-Node-Deprecated.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-stripe-node-deprecated-md-ca86fe5f66bf2060a78d.js.map