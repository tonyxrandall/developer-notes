(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{OUd9:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return i}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var l=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kotlin/Kotlin-Examples.md"}});var u={_frontmatter:o},s=a.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(l.b)(s,r({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kotlin-examples"},"Kotlin Examples"),Object(l.b)("h2",{id:"plus-minus"},"Plus Minus"),Object(l.b)("p",null,"Input:"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-shell"}),"6\n-4 3 -9 0 4 1\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-shell"}),"0.500000\n0.333333\n0.166667\n")),Object(l.b)("p",null,"Prints positive, negative and zeroes."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"fun plusMinus(arr: Array<Int>): Unit {\n    var positive = 0\n    var negative = 0\n    var zeroes = 0\n\n    for (i in arr) {\n        when {\n            i > 0 -> positive++\n            i < 0 -> negative++\n            else -> zeroes++\n        }\n    }\n\n    println(1.0 / arr.size * positive)\n    println(1.0 / arr.size * negative)\n    println(1.0 / arr.size * zeroes)\n}\n")),Object(l.b)("h2",{id:"nullable-types"},"Nullable Types"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"var errorCode: Int?\n\nerrorCode = 100\n// or for null\nerrorCode = null\n")),Object(l.b)("p",null,"Note that treating nullable types from non-nullable types will have unusual repercussions:"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"var result: Int? = 30\nprintln(result) // 30\n\nprintln(result + 1) // throws error \"Operator call corresponds to a dot-qualified call 'result.plus(1)' which is not allowed on a nullable receiver 'result'.\"\n")),Object(l.b)("h3",{id:"unwrapping-nullable-values"},"Unwrapping nullable values"),Object(l.b)("p",null,"There are two different methods you can use to remove these nullables from the box. The first is using the not-null assertion operator !! (use these sparingly):"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),'val ageAfterBirthday = authorAge!! + 1\nprintln("After their next birthday, author will bne $ageAfterBirthday") // prints as expected\n')),Object(l.b)("h3",{id:"smart-casts"},"Smart Casts"),Object(l.b)("p",null,"This is the second way to go about it."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"var nonNullableAuthor: String\nvar nullableAuthor: String?\nif (authorName != null) {\n  nonNullableAuthor = authorName\n} else {\n  nullableAuthor = authorName\n}\n")),Object(l.b)("h3",{id:"safe-calls"},"Safe Calls"),Object(l.b)("p",null,"Using the ",Object(l.b)("inlineCode",{parentName:"p"},"?.")," operator:"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"val nameLength = authorName?.length\nprintln(\"Author's name has length $nameLength.\")\n// > Author's name has length 10.\n")),Object(l.b)("h3",{id:"let-function"},"let() function"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"authorName?.let {\n  nonNullableAuthor = authorName\n}\n")),Object(l.b)("h3",{id:"elvis-operator"},"Elvis Operator"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"var nullableInt: Int? = 10\nvar mustHaveResult = nullableInt ?: 0\n")),Object(l.b)("p",null,"The following is equivalent:"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"// this...\nvar nullableInt: Int? = 10\nvar mustHaveResult = if (nullableInt != null) nullableInt else 0\n\n// ...is the same as this\nnullableInt = null\nmustHaveResult = nullableInt ?: 0\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Examples.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kotlin-kotlin-examples-md-a8a99bcd7d1bf1a83d32.js.map