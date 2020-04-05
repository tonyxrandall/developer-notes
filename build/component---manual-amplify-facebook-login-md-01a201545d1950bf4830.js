(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"5PC1":function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return l})),o.d(n,"default",(function(){return s}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var t=o("/FXl"),a=o("TjRS");o("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Amplify/Facebook-Login.md"}});var c={_frontmatter:l},r=a.a;function s(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(t.b)(r,i({},c,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"facebook-login"},"Facebook Login"),Object(t.b)("p",null,"If using Expo, first you need to follow the setup instructions."),Object(t.b)("p",null,Object(t.b)("a",i({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/facebook"}),"https://docs.expo.io/versions/latest/sdk/facebook")),Object(t.b)("h2",{id:"tldr"},"tl;dr"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Head to ",Object(t.b)("inlineCode",{parentName:"li"},"developers.facebook.com")," and set up the login."),Object(t.b)("li",{parentName:"ol"},"Update ",Object(t.b)("inlineCode",{parentName:"li"},"app.json")," to look like the following:")),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "expo": {\n    "sdkVersion": "27.0.0",\n    "privacy": "unlisted",\n    "name": "Exposition",\n    "icon": "./assets/icon.png",\n    "version": "1.0.0",\n    "slug": "nodular-exposition",\n    "facebookScheme": "<% fromFacebook %>",\n    "facebookAppId": "<% fromFacebook %>",\n    "facebookDisplayName": "Exposition",\n    "ios": {\n      "bundleIdentifier": "com.nodular.exposition"\n    },\n    "android": {\n      "package": "com.nodular.exposition"\n    }\n  }\n}\n')),Object(t.b)("ol",{start:3},Object(t.b)("li",{parentName:"ol"},"Install the ExpoFacebook common js module."),Object(t.b)("li",{parentName:"ol"},"Update the code flow for Amplify to be similar to the one ",Object(t.b)("a",i({parentName:"li"},{href:"https://docs.aws.amazon.com/cognito/latest/developerguide/facebook.html"}),"provided from their website"),":")),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"FB.login(function(response) {\n  // Check if the user logged in successfully.\n  if (response.authResponse) {\n    console.log('You are now logged in.');\n\n    // Add the Facebook access token to the Cognito credentials login map.\n    AWS.config.credentials = new AWS.CognitoIdentityCredentials({\n      IdentityPoolId: 'IDENTITY_POOL_ID',\n      Logins: {\n        'graph.facebook.com': response.authResponse.accessToken\n      }\n    });\n\n    // Obtain AWS credentials\n    AWS.config.credentials.get(function() {\n      // Access AWS resources here.\n    });\n  } else {\n    console.log('There was a problem logging you in.');\n  }\n});\n")),Object(t.b)("ol",{start:5},Object(t.b)("li",{parentName:"ol"},"Ensure auth is added to the project ",Object(t.b)("inlineCode",{parentName:"li"},"wsmobile user-signin configure")," and selecting ",Object(t.b)("inlineCode",{parentName:"li"},"Advanced")," > ",Object(t.b)("inlineCode",{parentName:"li"},"Add Facebook"),".")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Amplify/Facebook-Login.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-amplify-facebook-login-md-01a201545d1950bf4830.js.map