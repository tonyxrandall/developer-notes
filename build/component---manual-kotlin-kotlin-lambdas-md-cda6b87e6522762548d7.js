(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{"P4v+":function(n,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return u}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kotlin/Kotlin-Lambdas.md"}});var i={_frontmatter:o},b=l.a;function u(n){var e=n.components,a=function(n,e){if(null==n)return{};var a,t,l={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,["components"]);return Object(t.b)(b,r({},i,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"kotlin-lambdas"},"Kotlin Lambdas"),Object(t.b)("p",null,"Also known as anonymous functions - name deriving from lambda calculus of Alonzo Church where all functions are anonymous."),Object(t.b)("p",null,"Also synonymous with closures."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"// declaration of a var that can hold a lambda\nvar multiplyLambda: (Int, Int) -> Int\n\nmultiplyLambda = { a: Int, b: Int -> Int\n  a*b\n}\n\nval lambdaResult = multiplyLambda(4, 2) // 8\n")),Object(t.b)("h2",{id:"shorthand-syntax"},"Shorthand Syntax"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"multiplyLambda = { a, b ->\n  a*b\n}\n\n// using it keyword for argument\nvar doubleLambda = { a: Int ->\n  2*a\n}\ndoubleLambda = { 2 * it }\n\n// in declaration\nval square: (Int) -> Int = { it * it }\n")),Object(t.b)("h2",{id:"lambdas-as-arguments"},"Lambdas As Arguments"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"fun operateOnNumbers(a: Int, b: Int, operation: (Int, Int) -> Int): Int {\n  val result = operation(a, b)\n  println(result)\n  return result\n}\n\n// in use\nval addLambda = { a: Int, b: Int ->\na+b }\noperateOnNumbers(4, 2, operation = addLambda) // 6\n\n// more usual\nfun addFunction(a: Int, b:Int) = a + b\noperateOnNumbers(4, 2, operation = ::addFunction) // 6\n\n// or even\noperateOnNumbers(4, 2, operation = { a: Int, b: Int ->\n  a+b\n})\n")),Object(t.b)("h2",{id:"lambdas-with-no-meaningful-return"},"Lambdas with no meaningful return"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),'var unitLambda: () -> Unit = {\n  println("Kotlin Apprentice is awesome!")\n}\nunitLambda()\n')),Object(t.b)("p",null,"If you literally want no value returnedm you need to use the ",Object(t.b)("inlineCode",{parentName:"p"},"Nothing")," type:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),"var nothingLambda: () -> Nothing = { throw NullPointerException() }\n")),Object(t.b)("h2",{id:"iterating-over-collections-with-lambdas"},"Iterating over collections with lambdas"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),'val values = listOf(1, 2, 3, 4, 5, 6)\nvalues.forEach {\n  println("$it: ${it * it}")\n}\n// > 1: 1\n// > 2: 4\n// > 3: 9\n// > 4: 16\n// > 5: 25\n// > 6: 36\n')),Object(t.b)("p",null,"To filter some of these out:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-kotlin"}),'var prices = listOf(1.5, 10.0, 4.99, 2.30, 8.19)\nval largePrices = prices.filter {\n  it > 5.0\n}\n\n// the above function looks like so\npublic inline fun <T> Iterable<T>.filter(predicate: (T) -> Boolean):\nList<T>\n\nval userInput = listOf("0", "11", "haha", "42")\nval numbers = userInput.map {\n  it.toIntOrNull()\n}\nprintln(numbers) // > [0, 11, null, 42]\n\n// array [1,2,3,4]\nsum = prices.reduce { a, b ->\n  a + b\n}\nprintln(sum) // 10\n\n// similar but takes initial value\nvar sum = prices.fold(0.0) { a, b -> a + b }\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Lambdas.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kotlin-kotlin-lambdas-md-cda6b87e6522762548d7.js.map