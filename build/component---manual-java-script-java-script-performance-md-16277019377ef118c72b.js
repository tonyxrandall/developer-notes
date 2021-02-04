(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{qROS:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),o=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/JavaScript-Performance.md"}});var r={_frontmatter:i},s=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(s,l({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"javascript-performance"},"JavaScript Performance"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://frontendmasters.com/courses/web-performance/"}),"FE Masters Course")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://speakerdeck.com/stevekinney/web-performance"}),"Course Slides")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://github.com/nolanlawson/optimize-js"}),"Optimize JS GitHub")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://nolanlawson.github.io/optimize-js/"}),"Optimize JS Interactive")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://github.com/wilsonpage/fastdom"}),"FastDOM GitHub"))),Object(n.b)("h2",{id:"the-importantance-of-performance"},"The Importantance of Performance"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'"0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result." - Jakob Nielsen.'),Object(n.b)("li",{parentName:"ul"},'"10 seconds is about the limit for keeping the user\'s attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer.expects to be done. Feedback during the delay is especially important if the response time is likely to be highly variable."'),Object(n.b)("li",{parentName:"ul"},"400ms increase for Yahoo increased traffic by 7%."),Object(n.b)("li",{parentName:"ul"},"Google found a 2% slower page search results in 2% fewer searches (with 2% fewer ads)."),Object(n.b)("li",{parentName:"ul"},"100ms in Amazon meant 1% increase in Revenue."),Object(n.b)("li",{parentName:"ul"},"If you want your site to feel faster, you need to be 20% faster than your competitors.")),Object(n.b)("p",null,"Our applications keep getting bigger and bigger and bigger. That being said, download speeds have also declined alongside unlimited plans!"),Object(n.b)("h3",{id:"perception-times"},"Perception times"),Object(n.b)("p",null,"Wetware perception-reaction times:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Delay"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"User Reaction"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"0 - 100ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Instant")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"100 - 300ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Slight perceptible delay")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"300 - 1000ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Task focus, perceptible delay")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"1000+ ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Mental context switch")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"10000 + ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"I'll come back later...")))),Object(n.b)("p",null,"Aims:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Respose"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Animation"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Idle"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Load"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Tap/click to paint in less than 100ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Each frame completes in less that 16 ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Use idle time to proactively schedule work"),Object(n.b)("td",l({parentName:"tr"},{align:null}),'Satisfy the "response" goals during full load')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Drag to paint in less than 16ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Complete that work in 50-ms chunks"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Get first meaningful paint in 1000 ms"),Object(n.b)("td",l({parentName:"tr"},{align:null}))))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"It is not to obsess over numbers, it is about getting 10% better.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Don't tune for speed until you've measured. Don't blindly optimise.")),Object(n.b)("h3",{id:"the-importance-of-measuring"},"The Importance of Measuring"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Are we testing performance on fancy MacBook Pros of consumer-grade hardware?"),Object(n.b)("li",{parentName:"ol"},"Are we simulating less-than-perfect network conditions?"),Object(n.b)("li",{parentName:"ol"},"What is our performance budget?")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Thinking deeply about the architecture and design of your application is a better use of your time than micro-benchmarks.")),Object(n.b)("p",null,"Rules to optimisation:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'"Do less stuff goes faster".'),Object(n.b)("li",{parentName:"ol"},"Doing stuff later is better than doing it now.")),Object(n.b)("p",null,"The rough outline:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"JavaScript performance"),Object(n.b)("li",{parentName:"ol"},"Rendering performance"),Object(n.b)("li",{parentName:"ol"},"Load performance")),Object(n.b)("h2",{id:"the-cost-of-javascript"},"The Cost of JavaScript"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A lot of time and energy is spent compressing assets, removing requests and reducing latency, but what about once the app is running?")),Object(n.b)("p",null,'The size of the JS we are sending is growing at an incredible rate. Sometimes, parsing and compiling is the real culprit. Steve shows an example of an application loading and with the time being "scripting".'),Object(n.b)("p",null,'Chrome also gives you little "red triangles" to help give you information on places you are causing issues.'),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Fun fact: JavaScript is a compiled language. It uses just-in-time (JIT) compilation, which happens on the client's machine.")),Object(n.b)("h3",{id:"the-steps-of-js"},"The steps of JS"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Fetch JS from where it is hosted."),Object(n.b)("li",{parentName:"ol"},"Parse the JS."),Object(n.b)("li",{parentName:"ol"},"Turn into a AST."),Object(n.b)("li",{parentName:"ol"},"Send to the interpreter."),Object(n.b)("li",{parentName:"ol"},"Intepreter turns it to byte code that is the used by the browser.")),Object(n.b)("p",null,'There is also an "optimizing compiler" that taks some code from the interpreter and spits out optimized machine code. Sometimes if it can\'t be optimized, it goes back to the byte code output from step 5.'),Object(n.b)("p",null,"The link to the slide diagram is ",Object(n.b)("a",l({parentName:"p"},{href:"https://speakerdeck.com/stevekinney/web-performance?slide=76"}),"here"),"."),Object(n.b)("h3",{id:"parsing"},"Parsing"),Object(n.b)("p",null,"Parsing is slow, can be 1MB/s on mobile. The aim is to do as much parsing as you need and as little as you can get away with."),Object(n.b)("p",null,"There are two phases:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Eager (full parse): Parse everything now."),Object(n.b)("li",{parentName:"ol"},"Lazy (pre-parse): Do bear minimum now, parse the rest later.")),Object(n.b)("p",null,"Generally lazy is a good thing."),Object(n.b)("p",null,"Here is an issue we can run into:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// Eager parse\nconst a = 1;\nconst b = 2;\n\n// Take note of function here, but we'll parse the body when we need it\nfunction add(a, b) {\n  return a + b;\n}\n\nadd(a, b); // Whoa, go back and parse\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Corollary: Doing stuff twice is slower than doing it once.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Optimize JS is brought in here as a helper for parsing the JS.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Closure functions will always be lazily parsed over and over again.")),Object(n.b)("h3",{id:"asts"},"ASTs"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"ASTs show a data structure representing our code.")),Object(n.b)("p",null,"With the AST, we have everything that we need to make our byte code."),Object(n.b)("h3",{id:"the-optimizing-compiler"},"The Optimizing Compiler"),Object(n.b)("p",null,"Three things that the engine does to help you out:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Speculative optimization."),Object(n.b)("li",{parentName:"ol"},"Hidden classes for dynamic lookups."),Object(n.b)("li",{parentName:"ol"},"Function inlining.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The example Steve runs through uses the ",Object(n.b)("inlineCode",{parentName:"p"},"perf_hooks")," API from Node, but then also pastes it into Chrome with the performance tab to show us potential pitfalls!")),Object(n.b)("p",null,"V8 also has flags to show us what is coming to our optimised comppiler."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-s"}),"node --trace-opt js-file.js\n")),Object(n.b)("p",null,"The above code when run will show what is marked for optimized recompilation. If you run ",Object(n.b)("inlineCode",{parentName:"p"},"node --trace-opt js-file.js | grep add")," you can get even less noise."),Object(n.b)("h2",{id:"deoptimization-deleting-properties"},"Deoptimization, Deleting Properties"),Object(n.b)("p",null,"Running ",Object(n.b)("inlineCode",{parentName:"p"},"node --trace-opt --trace-deopt js-file.js | grep add")," will show us both the optimisations and deoptimisations!"),Object(n.b)("p",null,"The follow coding shows the deoptimisation:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const add = (x, y) => x + y;\n\nperformance.mark('start');\n\nwhile (iterations--) {\n  add(a, b);\n}\n\nadd('foo', 'bar'); // this line creates a deoptimisation!\n\nperformance.mark('end');\nperformance.measure('My special benchmark', 'start', 'end');\n")),Object(n.b)("p",null,"The issue in the above is that different types of arguments causes an issue for the optimiser."),Object(n.b)("p",null,"To debug a little further, we can use the following to avoid optimisations:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const add = (x, y) => x + y;\n\nperformance.mark('start');\n\n%NeverOptimizeFunction(add); // only for Node\n\nwhile (iterations--) {\n  add(a, b);\n}\n\nadd('foo', 'bar'); // this line creates a deoptimisation!\n\nperformance.mark('end');\nperformance.measure('My special benchmark', 'start', 'end');\n")),Object(n.b)("p",null,"Then we can run ",Object(n.b)("inlineCode",{parentName:"p"},"node --allow-natives-syntax benchmark.js"),", which we will see causes a serious deoptimisation."),Object(n.b)("p",null,"Other syntax we can use:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"%OptimizeFunctionOnNextCall(add);\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},'We use a system called "speculative optimisation.')),Object(n.b)("p",null,"How does it work?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We use an interpreter because the optimizing compiler is slow to get started."),Object(n.b)("li",{parentName:"ul"},"Also: it needs some information before it knows what work it can either optimize or skip out on all together."),Object(n.b)("li",{parentName:"ul"},"So, the interpreter starts gathering feedback about what is sees as the function is used.")),Object(n.b)("p",null,"Once we had a function that started taking a different type, it de-optimizers. It will only try optimizing a couple of times before it just stops with this."),Object(n.b)("p",null,"The next example was with a class:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nwhile (iterations--) {\n  const point = new Point(2, 4);\n  delete point.x; // this cause a de-op - why?\n\n  JSON.stringify(point);\n}\n")),Object(n.b)("p",null,"We notice that if we delete one of the properties (not the last) will cause a de-optimisation!"),Object(n.b)("p",null,"The example is then used with objects with different properties. So why would one be faster than the other?"),Object(n.b)("p",null,"Because there is a type system in v8! Crazy."),Object(n.b)("p",null,"It is to do with the morphism of an object!"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Monomorphic - one thing."),Object(n.b)("li",{parentName:"ol"},"Polymorphic - many things."),Object(n.b)("li",{parentName:"ol"},"Megamorphic - a bunch of different things, not going to bother optimising.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The more consistent we are with more things, the more likely to be an optimisation.")),Object(n.b)("h2",{id:"optimizing-objects"},"Optimizing Objects"),Object(n.b)("p",null,"Another v8 hidden native tool we can use is ",Object(n.b)("inlineCode",{parentName:"p"},"%HaveSameMap()")," with ",Object(n.b)("inlineCode",{parentName:"p"},"--allow-natives-syntax"),"."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const a = { a: 1 }\nconst b = { b: 1 }\n\nconsole.log(%HaveSameMap(a,b)) // false - makes sense\n\nconst a = { a: 1 }\nconst b = { a: 1 }\n\nconsole.log(%HaveSameMap(a,b)) // true - makes sense\n\nconst a = { a: 1 }\nconst b = { a: 50000000000000 }\n\nconsole.log(%HaveSameMap(a,b)) // false - 32bit int is a diff type\n\nconst a = { a: 1 }\nconst b = { a: 5 }\n\nconsole.log(%HaveSameMap(a,b)) // true - same int type\n\nconst a = { a: 1 }\nconst b = { a: 5, x: 2 }\n\nconsole.log(%HaveSameMap(a,b)) // false\n\nconst a = { a: 1, x: 1 }\nconst b = { a: 5, x: 2 }\n\nconsole.log(%HaveSameMap(a,b)) // true\n\nconst a = { a: 1 }\nconst b = { a: 5, x: 2 }\n\na.x = 3\n\nconsole.log(%HaveSameMap(a,b)) // false - interesting!\n\nconst a = { a: 1 }\nconst b = { a: 5 }\n\na.x = 3\nb.x: 2\n\nconsole.log(%HaveSameMap(a,b)) // true\n\nconst a = { a: 1 }\nconst b = Object.assign({}, a)\n\nconsole.log(%HaveSameMap(a,b)) // false - also interesting!\n\nconst a = { a: 1 }\nconst b = Object.assign({}, a)\nconst c = Object.assign({}, a)\n\nconsole.log(%HaveSameMap(c,b)) // true\n\nclass Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nconst a = new Point(1,2)\nconst b = new Point(5,12)\n\nconsole.log(%HaveSameMap(a,b)) // true\n")),Object(n.b)("p",null,"So what's happening? Dynamic lookup."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Dynamic lookup: This object could be anything, so let me look at the rule book and figure this out.")),Object(n.b)("p",null,"V8 keeps a secret type system behind your back. It tries to do less work where possible (in a conservative way)."),Object(n.b)("p",null,"As it does this, the order that the properties got added to the object matter!"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// for examples sake, we'll declare the class names cached\nconst obj = { x: 1 }; // c0\nobj.y = 2; // now c1\nconst another = { x: 1, y: 23 }; // c2 - path matters!\ndelete another.y; // c3\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},'Feedback Lattice: objects created in different ways can change their "hidden" class and move through this process.')),Object(n.b)("h2",{id:"scoping-and-prototypes"},"Scoping and Prototypes"),Object(n.b)("p",null,"Scoping can hae dramatic implications on the performance of our code."),Object(n.b)("p",null,"In this example, he creates a class from within a function and there is a dramatic change (9ms to 800ms)."),Object(n.b)("p",null,"When having a class within the scope of another functionn, they also don't share the same map. The problem is that the class is now pointing to a different prototype chain."),Object(n.b)("p",null,"The takeaways:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Initialize your properties at creation."),Object(n.b)("li",{parentName:"ol"},"Initialize them in the same order."),Object(n.b)("li",{parentName:"ol"},"Try not to modify them after the fact."),Object(n.b)("li",{parentName:"ol"},"Maybe just use TS or Flow so you don't have to worry about these things.")),Object(n.b)("h2",{id:"function-inlining"},"Function Inlining"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const square = x => x * x;\nconst sumOfSquares = (a, b) => square(a) + square(b);\n")),Object(n.b)("p",null,"Why are these speeds optimised? It's thanks to inlining."),Object(n.b)("p",null,"We can see this in action using the ",Object(n.b)("inlineCode",{parentName:"p"},"--trace-turbo-inlining")," Node flag."),Object(n.b)("p",null,"When a function is inline, it just rewrites what happened the first time to happen to second time to stop yourself from calling the function again."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The easiest way to reduce parse, compile and execution times is to ship less code."),Object(n.b)("li",{parentName:"ul"},"Use the ",Object(n.b)("inlineCode",{parentName:"li"},"User Timing API")," to figure out where the biggest hurt is."),Object(n.b)("li",{parentName:"ul"},"Consider using a type system.")),Object(n.b)("h2",{id:"how-web-pages-are-built"},"How Web Pages Are Built"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Browser GET web page - typically HTML"),Object(n.b)("li",{parentName:"ol"},"HTML parsed into the document object model (DOM)"),Object(n.b)("li",{parentName:"ol"},"If we fetch CSS, that gets parsed into the CSS Object Model (CSSOM)"),Object(n.b)("li",{parentName:"ol"},"All of these things that we then get put into the Render Tree"),Object(n.b)("li",{parentName:"ol"},"Style calculation"),Object(n.b)("li",{parentName:"ol"},"Layout aka reflow."),Object(n.b)("li",{parentName:"ol"},"Paint."),Object(n.b)("li",{parentName:"ol"},"Composite Layers.")),Object(n.b)("p",null,"The render tree has:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"1-to-1 mapping with the visible objects on the page (no hidden objects but yes to pseudo objects)."),Object(n.b)("li",{parentName:"ul"},"The might be multiple rules that apply to a single element. We need to figure that all out here.")),Object(n.b)("p",null,"This is done using ",Object(n.b)("inlineCode",{parentName:"p"},"style calculation"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Style calculation: The browser figures out all the styles that will be applied to a given element.")),Object(n.b)("p",null,"Note: the more complicated the selectors, the longer the calculation takes."),Object(n.b)("p",null,"Takeaways:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Use simple selectors where possible."),Object(n.b)("li",{parentName:"ol"},"Reduce the effected elements.")),Object(n.b)("h2",{id:"javascript-and-the-render-pipeline"},"JavaScript and the Render Pipeline"),Object(n.b)("p",null,"JS can change the following (not a complete list):"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Change the class on an object"),Object(n.b)("li",{parentName:"ol"},"Change inline styles"),Object(n.b)("li",{parentName:"ol"},"Add or remove elements from the page")),Object(n.b)("p",null,"All of these will cause the render flow to start again from the layout stage."),Object(n.b)("h2",{id:"layouts-and-reflows"},"Layouts and Reflows"),Object(n.b)("p",null,"Layout is used for the first time, reflow is for following times."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Reflows are very expensive in terms of performance, and is one of the main causes of slow DOM scripts, especially on devices with low processing power, such as phones. In many cases, they are equivalent to laying out the entire page again.")),Object(n.b)("p",null,"Each browser has different ways to optimise this."),Object(n.b)("p",null,"About reflows:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"A reflow is a blocking operation. Everything else stops."),Object(n.b)("li",{parentName:"ol"},"It consumes a decent amount of CPU."),Object(n.b)("li",{parentName:"ol"},"It will definitely be noticeable by the user if it happens often (e.g. in a loop).")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A reflow of an element causes a reflow of its parents and children.")),Object(n.b)("p",null,"Note: There is a lot that causes a reflow. Requires a repaint and is also expensive."),Object(n.b)("h3",{id:"how-to-avoid-reflows"},"How to avoid reflows"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Change classes at the lowest levels of the DOM tree."),Object(n.b)("li",{parentName:"ul"},"Avoid repeatedly modifying inline styles."),Object(n.b)("li",{parentName:"ul"},"Trade smoothness for speed if you're doing an animation in JavaScript."),Object(n.b)("li",{parentName:"ul"},"Avoid table layouts."),Object(n.b)("li",{parentName:"ul"},"Batch DOM manipulation."),Object(n.b)("li",{parentName:"ul"},"Debounce window resize events.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: ideally we're aiming for 60fps. Note that sometimes aiming for janky animations will ensure you don't miss a paint and appear smoother.")),Object(n.b)("p",null,"The exercise links to a ",Object(n.b)("a",l({parentName:"p"},{href:"https://codepen.io/stevekinney/full/eVadLB"}),"CodePen")," to check the impact of reflows."),Object(n.b)("h2",{id:"layout-thrashing"},"Layout Thrashing"),Object(n.b)("p",null,"Also known as ",Object(n.b)("inlineCode",{parentName:"p"},"forced synchronus layout"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"There are a set of things you can do that cause the browser to stop what it's doing and calculate style and layout.")),Object(n.b)("p",null,"Chrome will also help us a bit with the red flags where it thinks we are doing a forced reflow."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},'"Layout Thrashing occurs when JavaScript violently writes, then reads, from the DOM, multiple times causing document reflows." - Winston Page')),Object(n.b)("p",null,"Takeaways:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Plan to do all of your reading before all of your writing (don't read, write, read, write)."),Object(n.b)("li",{parentName:"ol"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"requestAnimationFrame"),". There is still a lot of repeated work. Better to use an abstraction.")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// using requestAnimationFrame\nelements.forEach((element, index) => {\n  const top = element.offsetTop;\n  const nextPosition = value; // value is stubbed for something more complex\n  requestAnimationFrame(() => {\n    element.style.transform = `translateX(${nextPosition}px)`;\n  });\n});\n")),Object(n.b)("h2",{id:"fastdom"},"FastDOM"),Object(n.b)("p",null,"FastDOM is used to prevent layout thrashing. There are only two methods you care about: ",Object(n.b)("inlineCode",{parentName:"p"},"measure")," and ",Object(n.b)("inlineCode",{parentName:"p"},"mutate")," (aka read and write)."),Object(n.b)("p",null,"It is used for scheduling."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"// using fastDOM\nelements.forEach((element, index) => {\n  fastdom.measure(() => {\n    const top = element.offsetTop;\n    const nextPosition = value; // value is stubbed for something more complex\n    fastdom.mutate(() => {\n      element.style.transform = `translateX(${nextPosition}px)`;\n    });\n  });\n});\n")),Object(n.b)("h2",{id:"frameworks-and-layout-thrashing"},"Frameworks and Layout Thrashing"),Object(n.b)("p",null,"Frameworks will attempt to help you prevent layout thrashing."),Object(n.b)("p",null,"React does a lot of things under the hood to help you. When using React in dev mode, it is worth to note that the performance measuring will take a hit."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Production mode is important in React.")),Object(n.b)("h2",{id:"painting"},"Painting"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Anytime you change something other than opacity or a CSS transform, you're going to trigger a paint.")),Object(n.b)("p",null,"The rule: use your tools to see if you're painting."),Object(n.b)("p",null,"From the extra rendering tools, we can use ",Object(n.b)("inlineCode",{parentName:"p"},"Paint flashing")," to help you know when you're painting again."),Object(n.b)("h2",{id:"the-compositor-thread"},"The Compositor Thread"),Object(n.b)("p",null,"Some of our nice threads:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The UI Thread: Chrome itself. The tab bar, etc."),Object(n.b)("li",{parentName:"ol"},"The Renderer Thread: We usually call this the main thread. This is where all JS, parsing HTML and CSS, style calculation, layout and painting happens. There are one of these per tab."),Object(n.b)("li",{parentName:"ol"},"The Compositor Thread: Draws bitmaps to the screen via the GPU.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The compositor thread can go off and work on some super hard JS computation and the animations will still chug along.")),Object(n.b)("p",null,"Things the compositor thread is good at:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Drawing the same bitmaps over and over in different places."),Object(n.b)("li",{parentName:"ol"},"Scaling and rotating bitmaps."),Object(n.b)("li",{parentName:"ol"},"Making bitmaps transparent."),Object(n.b)("li",{parentName:"ol"},"Applying filters."),Object(n.b)("li",{parentName:"ol"},"Mining Bitcoin.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Disclaimer: Compositing is kind of a hack.")),Object(n.b)("p",null,"Note: Layers are an optimization that the browser does for you under the hood. So what gets one?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The root object of a page."),Object(n.b)("li",{parentName:"ol"},"Objects that have specific CSS positions"),Object(n.b)("li",{parentName:"ol"},"Objects with CSS transforms."),Object(n.b)("li",{parentName:"ol"},"Objects that have overflow."),Object(n.b)("li",{parentName:"ol"},"Other stuff...")),Object(n.b)("h2",{id:"will-change-property"},"will-change property"),Object(n.b)("p",null,"This property can help the browser decide to make things its own layer."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-css"}),".sidebar {\n  will-change: transform; // makes the recommendation\n}\n")),Object(n.b)("p",null,"We can use the ",Object(n.b)("inlineCode",{parentName:"p"},"layers")," property in Chrome to check this out."),Object(n.b)("p",null,"Note: DO NOT make everything a layer. The browser is already trying to help you under the hood."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Promoting an object to its own layer takes a non-zero amount of time.")),Object(n.b)("p",null,"If there is something that happens temporarily, you can use this property in JavaScript and then remove it after, ie:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"element.addEventListener('mouseenter', () => {\n  element.style.willChange = 'transform';\n});\n\nelement.addEventListener('animationEnd', () => {\n  element.style.willChange = 'auto';\n});\n\nelement.addEventListener('mouseleave', () => {\n  element.style.willChange = 'auto';\n});\n")),Object(n.b)("h2",{id:"latency-and-bandwidth"},"Latency and Bandwidth"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Networks, CPUs and disks all hate you. On the client, you pay for what you send in ways you can't easily see. - Alex Russell")),Object(n.b)("p",null,"Bandwidth vs latency:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bandwidth: How much stuff you can fit through the tube per second."),Object(n.b)("li",{parentName:"ul"},"Latency: How long it takes to get to the other end of the tube.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},'Steve shows a latency graph where the larger the file size, the bigger the "jump" (not linear) in download time which is part of the TCP.')),Object(n.b)("h3",{id:"tcp-focuses-on-reliability"},"TCP focuses on reliability"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We keep checking in with the server to make sure that everything is going well."),Object(n.b)("li",{parentName:"ul"},"Packets are delivered in the correct order."),Object(n.b)("li",{parentName:"ul"},"Packets are delivered without errors."),Object(n.b)("li",{parentName:"ul"},"Client acknowledges each packet."),Object(n.b)("li",{parentName:"ul"},"Unreliable connections are handled well."),Object(n.b)("li",{parentName:"ul"},"Will not overload the network."),Object(n.b)("li",{parentName:"ul"},"Will sacrifice speed to ensure reliability.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"TCP starts by sending a small amount of data and the starts sending more and more as we find out that things are being successful. This is also why things feel so much worse on a slower connection (because packets get lost and corrupted)!")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Pro tip: The initial window size is 14kb. If you can get files under 14kb, then it means you can get everything through in the first window.")),Object(n.b)("p",null,"An example shown is ",Object(n.b)("inlineCode",{parentName:"p"},"sendping"),". The tip is to put things everywhere using a CDN."),Object(n.b)("h3",{id:"cache"},"Cache"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In 1997, HTTP/1.1 gave us Cache-Control headers."),Object(n.b)("li",{parentName:"ul"},"Caching affects GET, OPTIONS and HEAD.")),Object(n.b)("p",null,"This section goes over how to store data, what happens when things go stale and how to cache-bust."),Object(n.b)("p",null,"Cache-busting ways:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Content-Addressable Storage ie ",Object(n.b)("inlineCode",{parentName:"li"},"index.13oih32.js")," naming of files."),Object(n.b)("li",{parentName:"ol"},"Cache in the CDN ie cache the HTML that it serves up. We can reach into the CDN to invalildate.")),Object(n.b)("h3",{id:"service-worker"},"Service Worker"),Object(n.b)("p",null,"Instead of asking the Internet directly for things, the service worker becomes the middle man. It also means you can work offline depending on what is kept in the cache."),Object(n.b)("p",null,"There is another course on this to dive deeper."),Object(n.b)("h3",{id:"lazy-loading"},"Lazy Loading"),Object(n.b)("p",null,"Lazy-loading and pre-loading. Use this wherever possible as people needs things."),Object(n.b)("p",null,"We can use tools like ",Object(n.b)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer"),". It is a great way to visualise where all the code is."),Object(n.b)("p",null,"In the example, Steve shows how to reduce Lodash first. This is first done by ES6 module imports to help the analyzer tree shake."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: There is a plugin you can use to automatically swap out Lodash imports for just what is uses.")),Object(n.b)("h3",{id:"react-loadable"},"React Loadable"),Object(n.b)("p",null,"The demo here has short demo of showing lazy loading with a React component."),Object(n.b)("h2",{id:"http2"},"HTTP/2"),Object(n.b)("p",null,"The increasing support comes with unique characteristics."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An upgrade to the HTTP layer"),Object(n.b)("li",{parentName:"ul"},"Fully multiplexed - send multiple requests in parallel"),Object(n.b)("li",{parentName:"ul"},"Allows servers to proactively push responses into client caches")),Object(n.b)("p",null,"What's wrong with HTTP/1.1?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Websites are growing: more images, more JS."),Object(n.b)("li",{parentName:"ul"},"Bandwidth has gotten better, but roundtrip time has not."),Object(n.b)("li",{parentName:"ul"},"Takes same time to ping server as 20 years ago."),Object(n.b)("li",{parentName:"ul"},"One file at a time connection while we are building sites requiring 100 files.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Some good HTTP/1.1 are not good for HTTP/2 and vice versa.")),Object(n.b)("h2",{id:"build-tools"},"Build Tools"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"When in doubt, let your tools help you.")),Object(n.b)("h3",{id:"paying-the-babel-tax"},"Paying the Babel tax"),Object(n.b)("p",null,"Note that converting from futuristic code from Babel to supported code can actually end up turning into a lot of code and be costly."),Object(n.b)("p",null,"An example of something expensive is ",Object(n.b)("inlineCode",{parentName:"p"},"async/await"),"!"),Object(n.b)("h3",{id:"useful-babel-plugins"},"Useful Babel plugins"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"env: Allows you target specific environments."),Object(n.b)("li",{parentName:"ul"},"transform-react-remove-prop-types: Remove prop types."),Object(n.b)("li",{parentName:"ul"},"transform-react-pure-class-to-function: Take components with no state and convert to smaller syntax."),Object(n.b)("li",{parentName:"ul"},"transform-react-inline-elements: Converts JSX to React.createElement JS which becomes an object."),Object(n.b)("li",{parentName:"ul"},"transform-react-constant-elements: Hoist up constant JSX elements to file-scope variables.")),Object(n.b)("h3",{id:"prepack"},"Prepack"),Object(n.b)("p",null,"Prepack aims to make JS run faster. Examples shown were pre-emptively changes things like fibonacci calls to make things faster."),Object(n.b)("p",null,"Note: Prepack is not production ready."),Object(n.b)("h2",{id:"things-not-covered"},"Things not covered"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Server-side rendering"),Object(n.b)("li",{parentName:"ol"},"Image performance"),Object(n.b)("li",{parentName:"ol"},"Loading web fonts"),Object(n.b)("li",{parentName:"ol"},"Progressive web apps")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/JavaScript-Performance.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-java-script-performance-md-16277019377ef118c72b.js.map