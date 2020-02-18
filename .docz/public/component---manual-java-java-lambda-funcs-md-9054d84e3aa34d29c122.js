(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{VjXq:function(n,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),r=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Java-Lambda-Funcs.md"}});var i={_frontmatter:o},s=r.a;function c(n){var e=n.components,a=function(n,e){if(null==n)return{};var a,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,["components"]);return Object(t.b)(s,l({},i,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"java-lambda-funcs"},"Java Lambda Funcs"),Object(t.b)("p",null,"The basic gist is to generate a ",Object(t.b)("inlineCode",{parentName:"p"},"interface")," with the lambda signature, then explicitly create a function preface by the interface type."),Object(t.b)("p",null,"This will allow you to call the lambda function as a instance method."),Object(t.b)("h2",{id:"example"},"Example"),Object(t.b)("pre",null,Object(t.b)("code",l({parentName:"pre"},{className:"language-java"}),'// src/main/java/Lambda.java\ninterface Anon {\n    String helloWorld();\n}\n\ninterface AnonInt {\n    int sum(int a, int b);\n}\n\nclass Lambda {\n    String hello() {\n        Anon anon = () -> "Hello, World!";\n        return anon.helloWorld();\n    }\n\n    int sumOnePlusTwo() {\n        AnonInt anon = (int a, int b) -> a + b;\n        return anon.sum(1, 2);\n    }\n}\n')),Object(t.b)("p",null,"As for the test file:"),Object(t.b)("pre",null,Object(t.b)("code",l({parentName:"pre"},{className:"language-java"}),'// src/tests/java/LambdaTest.java\nimport org.junit.Ignore;\nimport org.junit.Test;\n\nimport static org.junit.Assert.assertEquals;\n\npublic class LambdaTest {\n    @Test\n    public void testLambda() {\n        assertEquals("Hello, World!", new Lambda().hello());\n    }\n\n    @Test\n    public void testLambdaSum() {\n        assertEquals(3, new Lambda().sumOnePlusTwo());\n    }\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Java-Lambda-Funcs.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-java-lambda-funcs-md-9054d84e3aa34d29c122.js.map