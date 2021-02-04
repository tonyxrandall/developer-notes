(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{"1nYc":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Functional-Programming/Hardcore-JS-Patterns.md"}});var c={_frontmatter:r},i=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(i,s({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"hardcore-js-patterns"},"Hardcore JS Patterns"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The payoff of these patterns happens as our app scales.")),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://frontendmasters.com/courses/hardcore-js-patterns"}),"FE Masters Course")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://docs.google.com/presentation/d/1L5gxYQz2hyzbVJk5tkyNdDidf_cg4I1BlIGd_Y9jblU/edit#slide=id.g338d117be_040"}),"Course Slides")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://subscription.packtpub.com/book/application_development/9781785883880/8/ch08lvl1sec68/semigroup"}),"What is a semigroup?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)"}),"What is a Set?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://github.com/hemanth/functional-programming-jargon#semigroup"}),"FP Jargon: Semigroup")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://codepen.io/joumanae/pen/XWbEdbR?editors=0010"}),"Monoid Codepen Exercises")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://www.intellecquity.com/what-does-mean-in-math"}),"What are these Math Symbols?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://codepen.io/drboolean/pen/qeqpgB?editors=0010"}),"Function Modelling Codepen Exercises")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://github.com/fantasyland/fantasy-land/blob/master/figures/dependencies.png"}),"Fantasy-land figures")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://codepen.io/drboolean/pen/NQKByP?editors=0010"}),"Monad Transformer Exercises")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://github.com/fantasyland/daggy"}),"Daggy GitHub")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://wiki.haskell.org/Catamorphisms"}),"Catamorphisms")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"http://hackage.haskell.org/package/free-5.1.3/docs/Control-Monad-Free.html"}),"Haskell - Free Monads")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://github.com/gcanti/fp-ts"}),"FP-TS GitHub")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",s({parentName:"li"},{href:"https://gcanti.github.io/fp-ts/"}),"FP-TS Website"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"During the introduction, Brian refers to the Domain Driven Design book."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"First goal: Functions with defined contracts.")),Object(o.b)("p",null,'Brian demostracts a "composable contract for this generic function" with the function being ',Object(o.b)("inlineCode",{parentName:"p"},"joinWithSpace"),":"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const user = { firstName: 'Bobby', lastName: 'Fischer' };\nconst joinWithSpace = (...args) => args.join(' ');\n\njoinWithSpace(user.firstName, user.lastName);\njoinWithSpace('a', 'b', 'c'); // 'a b c'\njoinWithSpace(joinWithSpace('a', 'b'), 'c'); // 'a b c'\njoinWithSpace('a', joinWithSpace('b', 'c')); // 'a b c'\n\n// becoming even more generic\njoinWithSpaces = joinable => joinable.join(' ');\njoinWithSpace([user.firstName, user.lastName]);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'The aim is that we want "highly generalized functions"')),Object(o.b)("h2",{id:"composition-architecture"},"Composition Architecture"),Object(o.b)("p",null,"When we use composition:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Satisfy use cases"),Object(o.b)("li",{parentName:"ul"},"Simple, understandable pieces"),Object(o.b)("li",{parentName:"ul"},"Reuse"),Object(o.b)("li",{parentName:"ul"},"Harder to change implementation"),Object(o.b)("li",{parentName:"ul"},"Harder for user to compose")),Object(o.b)("p",null,"The opposite side when we are not using composition:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Flexibility in implementation changes"),Object(o.b)("li",{parentName:"ul"},"Less use cases to support"),Object(o.b)("li",{parentName:"ul"},"Flags, is/else"),Object(o.b)("li",{parentName:"ul"},"Won't satisfy all cases"),Object(o.b)("li",{parentName:"ul"},"Less reuse")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: There is a reason to use both.")),Object(o.b)("h2",{id:"normalize-effect-types"},"Normalize Effect Types"),Object(o.b)("p",null,"Monads don't actually compose. Functors compose and monoids compose. We focus on normalizing everything into the one shape."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Normalize effect types throughout the app.")),Object(o.b)("h2",{id:"semigroups"},"Semigroups"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In computer science, a Semigroup is an algebraic structure that has a set and a binary operation that takes two elements in the set and returns a Semigroup that has an associative operation. Note that the official definition of a Set is an abstract data type that can store unique values, without any particular order, although I believe Semigroups don't require a unique Set.")),Object(o.b)("p",null,"Closed means that we are going to get the same data type back that we're operating on."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"1 + 2 + 6; // this is associative but also closed meaning we can only use the data type\n2 * 5 * 8; // again, closed under data type\n10 / 4 / 2; // neither closed nor associative\ntrue && true && false; // associative\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are closed and associative, then you are also parallel. This means you could chuck smaller compositions into multiple servers, get the results back and combine and you'll be peaches.")),Object(o.b)("p",null,"In addition to the official definition of semigroups, in programming a semigroup is an object that has a ",Object(o.b)("inlineCode",{parentName:"p"},"concat")," function that combines it with another object of the same type."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"[1].concat([2]); // [1, 2]\n")),Object(o.b)("p",null,"From the course:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// semigroups defined\nconst Sum = x => ({\n  x,\n  concat: other => Sum(x + other.x),\n});\n\nSum(3).concat(Sum(5)); // Sum(8)\n\nconst Product = x => ({\n  x,\n  concat: other => Product(x * other.x),\n});\n\nProduct(3).concat(Product(5)); // Product(15)\n\n// Any\nconst Any = x => ({\n  x,\n  concat: other => Any(x || other.x),\n});\n\nAny(true).concat(Any(false)); // Any(true)\n\n// String Concat\nconst String = x => ({\n  x,\n  concat: other => String(x + other.x),\n});\n\nString('hi').concat(String('!')); // String('hi!')\n")),Object(o.b)("h2",{id:"monoids"},"Monoids"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Monoids are just a semigroup with an "identity"')),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// monoids\nconst Sum = x => ({\n  x,\n  concat: other => Sum(x + other.x),\n});\n\nSum.empty = () => 0;\nSum(0).concat(Sum(5)); // Sum(5)\nSum.empty().concat(Sum(5)); // Sum(5)\n\nconst Product = x => ({\n  x,\n  concat: other => Product(x * other.x),\n});\n\nProduct.empty = () => Product(1);\n\nProduct(1).concat(Product(10)); // Product(10)\nProduct.empty().concat(Product(10)); // Product(10) - programming to an interface, not a specific value\n\n// Any\nconst Any = x => ({\n  x,\n  concat: other => Any(x || other.x),\n});\nAny.empty = () => false;\n\nAny.empty().concat(Any(false)); // Any(false)\nAny.empty().concat(Any(true)); // Any(true)\n")),Object(o.b)("p",null,"So why does identity matter here? Null values."),Object(o.b)("p",null,"In our day-to-day, if I was to run through a list and reduce it down, if you don't have a starting value you will get a ",Object(o.b)("inlineCode",{parentName:"p"},"null")," or ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),", but if you have a starting value then these two correspond to reduce."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const res1 = [1, 2, 3, 4, 5].map(Sum).reduce((acc, n) => acc.concat(n)); // 15\nconst res2 = [].map(Sum).reduce((acc, n) => acc.concat(n)); // uh oh! error\nconst res2 = [].map(Sum).reduce((acc, n) => acc.concat(n), Sum.empty()); // Ahhh safe! We got a zero.\n")),Object(o.b)("p",null,"In practice, we don't need the whole ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5].map(Sum).reduce((acc, n) => acc.concat(n), Sum.empty())")," line. If we used something like ",Object(o.b)("inlineCode",{parentName:"p"},"List")," from immutable JS that has a ",Object(o.b)("inlineCode",{parentName:"p"},"foldMap")," method, we could run ",Object(o.b)("inlineCode",{parentName:"p"},"List([1, 2, 3, 4, 5]).foldMap(Sum, Sum.empty())"),"."),Object(o.b)("h2",{id:"semigroups-vs-monoids"},"Semigroups vs Monoids"),Object(o.b)("p",null,"Here we show that you cannot promote a semigroup to a monoid with an identity."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// Note: we cannot actually provide a identity for this.\nconst Intersection = x => ({\n  x,\n  // assume Lodash lib utility in\n  concat: other => Intersection(_.intersection(x, other.x)),\n});\n")),Object(o.b)("p",null,"In the above case, we note that we cannot promote an ",Object(o.b)("inlineCode",{parentName:"p"},"Intersection")," from a semigroup into a monoid."),Object(o.b)("h2",{id:"identity-functor"},"Identity Functor"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// assume types defined elsewhere\nconst { Id, Task, Either } = require('../types');\nconst { Left, Right } = Either;\n\nconst res = Id.of(Sum(2)).concat(Id.of(Sum(5))); // Id(Sum(5))\nconsole.log(res.extract()); // the same as fold\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Id is a monoid if what it is holding is a monoid.")),Object(o.b)("h2",{id:"concat-method"},"Concat Method"),Object(o.b)("p",null,"Here we look at what it looks like to concat a few functors together:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// assume types defined elsewhere\nconst { Id, Task, Either } = require('../types');\nconst { Left, Right } = Either;\n\nconst res1 = Right('hello ').concat(Right('world')); // Right('hello world')\nres.fold(console.log, console.log);\n\nconst res2 = Right('hello ').concat(Left('arrhhihiuh')); // Left('arrhhihiuh')\nres.fold(console.log, console.log);\n\nconst res3 = Task.of('hello ').concat(Task.of('cruel world')); // Task.of('hello cruel world')\nres.fork(console.log, console.log); // 'hello cruel world'\n\nconst res3 = Task.of(['hello']).concat(Task.of(['cruel world'])); // Task.of(['hello', 'cruel world'])\nres.fork(console.log, console.log); // ['hello', 'cruel world']\n\nconst res3 = Task.of(['hello']).concat(Task.rejected('error')); // Task.rejected('error')\nres.fork(console.log, console.log); // 'error'\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Whenever you concat, make sure you never fall out of the type ie always return the result wrapped in the type.")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const Alternative = x => ({\n  x,\n  concat: other => Alternative(other.x.isLeft ? x : x.concat(other.x)),\n});\n\nconst res = Alternative(Right('hi')).concat(Alternative(Left('bye')));\nconsole.log(res.x.fold(id, id)); // 'hi'\n\nconst res = Alternative(Right('hi'))\n  .concat(Alternative(Right('!!!!!')))\n  .concat(Alternative(Left('bye')));\nconsole.log(res.x.fold(id, id)); // 'hi!!!!!'\n\n// reducing to be prettier\nconst res = List([Right('a'), Right('b'), Left('c')]).foldMap(\n  Alternative,\n  Alternative(Right('')),\n); // mapping into Alternative but also providing the starting point (could be identity)\nconsole.log(res.x.fold(id, id)); // 'ab'\n\nconst res = List([Right('a'), Left('b'), Right('c')]).foldMap(\n  Alternative,\n  Alternative(Right('')),\n); // mapping into Alternative but also providing the starting point (could be identity)\nconsole.log(res.x.fold(id, id)); // 'ac'\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You'll end up making your own monoids more than you'll end up making your own functors.")),Object(o.b)("h2",{id:"monoid-use-casses"},"Monoid Use Casses"),Object(o.b)("p",null,"Using it to concat responses from multiple server calls."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// getting an array of Promises\nconst getAppAlerts = () => fetch('/alerts').then(x => x.json());\nconst getDirectMessages = () => fetch('/dm').then(x => x.json());\n\ngetAppAlerts().concat(getDirectMessages()); // Promise([{id: 1, msg: \"Policy update\"}, {id: 2, msg: 'hi from spain'}])\n\n// map is a way to define a semigroup\nconst getPost = () =>\n  fetch('/post')\n    .then(x => x.json())\n    .then(Map);\nconst getComments = () =>\n  fetch('/comments')\n    .then(x => x.json())\n    .then(comments => Map({ comments }));\n\n// thanks to concat, we can assign the comments to the blog post\ngetPost().concat(getComments()); // Promise(Map({id: 3, body: 'Redux is over', comments: []}))\n")),Object(o.b)("p",null,"Concating from files"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const readFile = promisify(fs.readFile);\nconst filepaths = ['one.txt', 'two.txt', 'three.txt'];\nfilepaths.foldMap(readFile, Promise.resolve(''));\n")),Object(o.b)("h2",{id:"creating-a-validation-library"},"Creating a Validation Library"),Object(o.b)("p",null,"First, we go through a basic implementation using Either."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import List from 'immutable-ext'\nimport {Either} from '../types'\nconst {Left, Right} = Either\n\nconst isPresent = x => !!x\n\nconst validate = (spec, obj) => {\n  List.(Object.keys(spec)).foldMap(key => {\n    spec[key](obj[key]) ? Right(obj) : Left(`${key} bad`)\n  }, Either.of(obj))\n}\n\nconst validations = {name: isPresent, email: isPresent}\nconst obj = {name: 'brian', email: 'brian@brian.com'}\nconst res = validate(validations, obj) // obj | []\n\nres.fold(console.error, console.log)\n")),Object(o.b)("p",null,"This doesn't really do what we want it to do, so let's make our own ",Object(o.b)("inlineCode",{parentName:"p"},"Success")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Failure"),' types and these can be a "subclass" of a Validation type.'),Object(o.b)("h2",{id:"creating-success--fail-monoids"},"Creating Success & Fail Monoids"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import List from 'immutable-ext'\nimport {Either} from '../types'\nconst {Left, Right} = Either\n\nconst isPresent = x => !!x\n\nconst Success = x => ({\n  x,\n  isFail: false,\n  fold: (f, g) => g(x),\n  concat: other => (other.isFail ? other : Success(x)),\n});\n\nconst Failure = x => ({\n  x,\n  isFail: true,\n  fold: (f, g) => f(x),\n  concat: other => (other.isFail ? Fail(x.concat(other.x)) : Fail(x)),\n});\n\nconst validate = (spec, obj) => {\n  List.(Object.keys(spec)).foldMap(key => {\n    spec[key](obj[key]) ? Success(obj) : Failure(`${key} bad`)\n  }, Success.of(obj))\n}\n\n// just check if both are present for now\nconst validations = {name: isPresent, email: isPresent}\nconst obj = {name: 'brian', email: 'brian@brian.com'}\nconst res = validate(validations, obj) // obj | []\n\nres.fold(console.error, console.log) // [{name: 'brian', email: 'brian@brian.com'}]\n\nconst obj2 = {name: 'brian', email: ''}\nconst res2 = validate(validations, obj2) // obj | []\nres2.fold(console.error, console.log) // ['email bad']\n\nconst obj3 = {name: '', email: ''}\nconst res3 = validate(validations, obj3) // obj | []\nres3.fold(console.error, console.log) // ['name bad', 'email bad']\n")),Object(o.b)("p",null,"You can then start to weigh up your options about how you want to go about things."),Object(o.b)("h2",{id:"creating-the-validation-monoid"},"Creating the Validation Monoid"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// any alternative approach to `isPresent` but loses the key.\nconst isPresent = Validation(key, x => !!x ? Success(x) : Fail([`${key} needs to be present`]))\n\nconst isEmail = Validation(key, x => /@/.test(x) ? Success(x) : Fail([`${key} needs to be an email`]))\n\n// The validation super class we need\nconst Validation = run => ({\n  run,\n  concat: other => Validation((key, x) => run(key,x).concat(other.run(key.x)))\n})\n\nconst validate = (spec, obj) => {\n  List.(Object.keys(spec)).foldMap(key => {\n    spec[key].run(obj[key])\n  }, Success.of(obj))\n}\n\nconst validations = {name: isPresent, email: isPresent.concat(isEmail)}\n")),Object(o.b)("h2",{id:"function-modelling"},"Function Modelling"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// [1]\nconst { Either } = require('../types');\n\nconst toUpper = x => x.toUpperCase();\nconst exclaim = x => x.concat('!');\n\nconst Fn = run => ({\n  run,\n  map: f => Fn(x => f(run(x))),\n  concat: other => Fn(x => run(x).concat(other.run(x))),\n});\n\nconst res = Fn(toUpper)\n  .concat(Fn(exclaim))\n  .run('fp sux');\nconsole.log(res); // 'FP SUXfp sux!'\n\n// [2] After adding in the capability to chain and promote to a Monad.\n// Note: This is forming the basis of what is known as the Reader Monad.\nconst { Either } = require('../types');\n\nconst toUpper = x => x.toUpperCase();\nconst exclaim = x => x.concat('!');\n\nconst Fn = run => ({\n  run,\n  chain: f => Fn(x => f(run(x)).run(x)),\n  map: f => Fn(x => f(run(x))),\n  concat: other => Fn(x => run(x).concat(other.run(x))),\n});\n\nFn.of = x => Fn(() => x);\n\nconst res = Fn(toUpper)\n  // This is called a Reader because we can transform\n  // and still get back to the original\n  .chain(upper => Fn(x => [upper, exclaim(upper)]))\n  .run('hi');\nconsole.log(res); // ['HI', 'hi!']\n\nconst res = Fn('hello')\n  .map(toUpper)\n  .chain(upper => Fn(x => [upper, exclaim(upper)]))\n  .run('hi');\nconsole.log(res); // ['HELLO', 'hi!']\n\n// [3] Making the method more convenient - this becomes the Reader Monad!\nFn.ask = Fn(x => x);\n\nconst res = Fn(toUpper)\n  // This is called a Reader because we can transform\n  // and still get back to the original\n  .chain(upper => Fn(x => [upper, exclaim(upper)]))\n  .run('hi');\nconsole.log(res); // ['HI', 'hi!']\n\nconst res = Fn('hello')\n  .map(toUpper)\n  .chain(upper => Fn.ask.map(config => [upper, config]))\n  .run({ port: 3000 });\nconsole.log(res); // ['HELLO', {port: 3000}]\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The idea is that you can do dependency injection in here. You could pass in things like the db or strategy etc.")),Object(o.b)("h2",{id:"the-endo-functor"},"The Endo Functor"),Object(o.b)("p",null,"What if we would rather (instead of combining functions by running both and combining the results) is create a composition as concatenation?"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const toUpper = x => x.toUpperCase();\nconst exclaim = x => x.concat('!');\n\nconst Endo = run => ({\n  run,\n  concat: other => Endo(x => run(other.run(x))),\n});\n\n// this is using the identity function again so\n// we do not have to pass an arg to Endo.empty\nEndo.empty = () => Endo(x => x);\n\nList([(toUpper, exclaim)])\n  .foldMap(Endo, Endo.empty())\n  .run('hello');\n\nconsole.log(res); // Hello!\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It's called ",Object(o.b)("inlineCode",{parentName:"p"},"Endo")," because it only works with ",Object(o.b)("inlineCode",{parentName:"p"},"Endomorphisms")," which means it can only go from type ",Object(o.b)("inlineCode",{parentName:"p"},"a -> a")," ie ",Object(o.b)("inlineCode",{parentName:"p"},"String -> String"),".")),Object(o.b)("h2",{id:"contramap"},"Contramap"),Object(o.b)("p",null,"These are useful for if there is a bunch of functions that you want to combine. Contramaps allow us to pull out values during the execution."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const Reducer = run => ({\n  run,\n  contramap: f => Reducer((acc, x) => run(acc, f(x))),\n});\n\n// Example\nReducer(login)\n  .contramap(pay => pay.user)\n  .concat(Reducer(changePage).contramap(payload => payload.currentPage))\n  .run(state, { user: {}, currentPage: {} });\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Contramap is called a ",Object(o.b)("inlineCode",{parentName:"p"},"Contravariant Functor"),". If you have a ",Object(o.b)("inlineCode",{parentName:"p"},"map")," and ",Object(o.b)("inlineCode",{parentName:"p"},"contramap")," where you can change the input AND the output it is called a ",Object(o.b)("inlineCode",{parentName:"p"},"Profunctor"),".")),Object(o.b)("h2",{id:"function-modelling-equivalences"},"Function Modelling Equivalences"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const login = (state, payload) =>\n  payload.email\n    ? Object.assign({}, state, { loggedIn: checkCreds(payload.email, payload) })\n    : state;\n\nconst setPrefs = (state, payload) =>\n  payload.prefs ? Object.assign({}, state, { prefs: payload.prefs }) : state;\n\n// (acc, a) -> acc\n// (a, acc) -> acc\n// a -> (acc -> acc)\n// a -> Endo(acc -> acc)\n\n// Fn(a -> Endo(acc -> acc))\nconst Reducer = run => ({\n  run,\n  contramap: f => Reducer((acc, x) => run(acc, f(x))),\n  concat: (acc, x) => run(acc, f(x)),\n});\n\n// instead of this, we can use our knowledge of equivalences\n// mentioned above to rewrite this\nconst reducerNotIdeal = Reducer(login).concat(Reducer(setPrefs));\n\nconst state = { loggedIn: false, prefs: {} };\nconst payload = { email: 'admn', pass: 123, prefs: { bgColor: '#000' } };\n\nconsole.log(reducer.run(state, payload));\n\n// ... to this\nconst login = payload => Endo(state) =>\n  payload.email\n    ? Object.assign({}, state, { loggedIn: checkCreds(payload.email, payload) })\n    : state;\n\nconst setPrefs = payload => Endo(state) =>\n  payload.prefs ? Object.assign({}, state, { prefs: payload.prefs }) : state;\n\nconst reducer = Fn(login).concat(Fn(setPrefs));\n\n\nconst state = { loggedIn: false, prefs: {} };\nconst payload = { email: 'admn', pass: 123, prefs: { bgColor: '#000' } };\n\nconsole.log(reducer.run(payload).run(state));\n\n// or this\nconst login = payload => state =>\n  payload.email\n    ? Object.assign({}, state, { loggedIn: checkCreds(payload.email, payload) })\n    : state;\n\nconst setPrefs = payload => state =>\n  payload.prefs ? Object.assign({}, state, { prefs: payload.prefs }) : state;\nconst reducer = Fn(login).map(Endo)concat(Fn(setPrefs).map(Endo));\n")),Object(o.b)("p",null,"Knowing these functional equivalences gives you the ability to model things based on what is available in the APIs as well as structuring your APIs."),Object(o.b)("h2",{id:"composing-functors"},"Composing Functors"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For those familiar with ",Object(o.b)("inlineCode",{parentName:"p"},"fold"),", ",Object(o.b)("inlineCode",{parentName:"p"},"extract")," does not take a function and pass it to the function, it just takes it out.")),Object(o.b)("p",null,"The example given here is creating a function ",Object(o.b)("inlineCode",{parentName:"p"},"TaskEither")," by composition of functors ",Object(o.b)("inlineCode",{parentName:"p"},"Task"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Either"),"."),Object(o.b)("p",null,"Here we get an issue that we cannot write a ",Object(o.b)("inlineCode",{parentName:"p"},"chain")," method."),Object(o.b)("h2",{id:"monad-transformers"},"Monad Transformers"),Object(o.b)("p",null,"Helps us around the chaining issue that came up from composing functors."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const users = []; // pretend an array of users\nconst following = []; // pretend an array of objects of user following user\nconst find = (table, query) =>\n  Task.of(Either.fromNullable(_.find(table, query)));\n\nconst app = () =>\n  find(users, { id: 1 }) // Task(Either(User))\n    .chain(eu =>\n      eu.fold(Task.rejected, u => find(following, { follow_id: u.id })),\n    )\n    .chain(eu => eu.fold(Task.rejected, fo => find(users, { id: fo.user_id })))\n    .fork(console.err, eu => eu.fold(console.error, console.log));\n\napp(); // returns User object ie {id: 2, name: 'Marc'}\n")),Object(o.b)("p",null,"So we note this sucks, so we want to transform this into a ",Object(o.b)("inlineCode",{parentName:"p"},"TaskEither")," monad:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const { TaskT, Task, Either } = require('../types');\nconst { Left, Right } = Either;\n\n// This thing knows how to \"chain\" chain\nconst TaskEither = TaskT(Either);\n// an interesting tidbit - Task = TaskT(Id);\n\nconst users = []; // pretend an array of users\nconst following = []; // pretend an array of objects of user following user\nconst find = (table, query) =>\n  TaskEither.lift(Either.fromNullable(_.find(table, query))); // gives Task(Either(x)) by lifting instead of Task(Either(Either(x)))\n\nconst app = () =>\n  find(users, { id: 1 }) // Task(Either(User))\n    .chain(u => find(following, { follow_id: u.id }))\n    .chain(fo => find(users, { id: fo.user_id }))\n    .fork(console.err, eu => eu.fold(console.error, console.log));\n\napp(); // returns User object ie {id: 2, name: 'Marc'}\n")),Object(o.b)("h2",{id:"restructuring-with-monad-transformers"},"Restructuring with Monad Transformers"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const { FnT, TaskT, Task, Either, EitherT } = require('path/to/types');\n\nconst FnTask = FnT(Task);\nconst App = EitherT(FnTask); // App :: Either(Fn(Task))\n\n// the challenges come from when instead of map we start to\n// return eithers or functions or tasks within these things\n// if we chain - see below\nconst res = App.of(2).map(x => x + 1);\nconsole.log(res);\n\nres.fold(console.error, fn =>\n  fn.run({ myEnv: true }).fork(console.error, console.log),\n); // 3\n\n// Chaining\nconst res = App.of(2)\n  .chain(two => App.lift(TaskEither.of(two + two)))\n  .chain(two => App.lift(TaskEither.lift(Either.of(four))))\n  .chain(two => App.lift(Task.of(four).map(Either.of))) // mapping to keep Either(Fn(Task)) type\n  .run({})\n  .fork(console.error, fi => fi.fold(console.error, console.log));\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You get these stacks of transformers and you have to get things in the right spot.")),Object(o.b)("p",null,"Brian here talks about how he does not love Monad transformers. Sometimes they're useful and they're around so it's good to know and can be useful if you keep it shallow."),Object(o.b)("h2",{id:"defining-the-free-monad"},"Defining the Free Monad"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Free Monads are usually not what you want. They solve a specific problem.")),Object(o.b)("p",null,"The free monad is a way to take your functions and treat them like data types."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// [1] the base\nconst { liftF } = require('../lib/free');\nconst { Id } = require('../lib/types');\n\n// instead of doing this\nconst httpGet = url => Task();\n// we could hold a data type\nconst httpGet = url => HttpGet(url);\n// doing so enables us to do things like...\n// HttpGet(url).chain(contents => HttpPost('./analytics', contents));\n\n// [2] an interpreter to interpret the new structure\nconst {taggedSum} = require('daggy')\nconst Http = taggedSum('Http', Get: ['url'], Post: ['url', 'body'])\nconsole.log(Http.Get('/home')) // {url: '/home'}\n\n// enables us to do thingsl like this.\n// Get('/home').cata({\n//   Get: url => 'get',\n//   Post: (url, body) => 'post'\n// })\n\n// now we chan hange our httpGet\nconst httpGet = url => LiftF(Http.Get((url)));\nconst httpPost = (url, body) => LiftF(Http.Posts((url, body)));\n\nconst app = () => httpGet('/home').chain(contents => httpPost('/analytics'), contents)\n\n// normally want a target monad like Task for the following\nconst interpret = x => x.cata({\n  Get: url => Id(`contents for ${url}`),\n  Post: (url, body) => Id(`posted ${body} to ${url}`)\n})\n\nconst res = app().foldMap(interpret, Id.of)\nconsole.log(res.extract()) // posted contents for /home to /analytics\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Brian normally stubs Id.of in before Task so he can get an idea of what is going on.")),Object(o.b)("p",null,"The catamorphism is essentially being used as a bunch of ifs. JS doesn't give the tools out of the box, so that is what it is used for."),Object(o.b)("p",null,"Free monads can be useful - Brian mentions one that he did for posted packages to Bower. It was a great solution to make sure you weren't accidentally posting to NPM everytime you used it."),Object(o.b)("h2",{id:"lenses"},"Lenses"),Object(o.b)("p",null,"You can do anything with lenses. You could rewrite every app in just lenses."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const { toUpper, view, over, lensProp, compose } = require('ramda');\n\nconst L = {\n  name: lensProp('name'),\n  street: lensProp('street'),\n  address: lensProp('address'),\n};\n\nconst user = { address: { street: { name: 'Maple' } } };\nconst res = view(\n  compose(\n    L.address,\n    L.street,\n  ),\n  user,\n); // allows us to compose\nconsole.log(res); // { name: 'Maple'}\n\n// allows us to set value\nconst res2 = over(\n  compose(\n    L.address,\n    L.street,\n    L.name\n  ),\n  toUpper\n  user,\n); // allows us to compose\nconsole.log(res); // { name: 'MAPLE'}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Lenses are also immutable.")),Object(o.b)("p",null,"If you had an ",Object(o.b)("inlineCode",{parentName:"p"},"Either")," of a property with everything inside a ",Object(o.b)("inlineCode",{parentName:"p"},"Task"),", we could jump deep inside of these properties, open things up, change it and then put it all back together."),Object(o.b)("p",null,"It gets very powerful. It's like treating functors like properties."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Compose for lenses compose backwards and get from left to right.")),Object(o.b)("h2",{id:"building-a-cli-app"},"Building a CLI App"),Object(o.b)("p",null,"Brian goes through an overview of how he build a CLI app."),Object(o.b)("p",null,"Things that he goes through is to apply things that we've learned with catamorphisms, Free Monads etc to enable a CLI blog post."),Object(o.b)("p",null,"He also uses an example of an interpreter test that uses its own version of testing the identity (done using ",Object(o.b)("inlineCode",{parentName:"p"},"dbToId")," and ",Object(o.b)("inlineCode",{parentName:"p"},"consoleToId"),")."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"The different between ',Object(o.b)("inlineCode",{parentName:"p"},"Free")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Fix")," is that ",Object(o.b)("inlineCode",{parentName:"p"},"Free")," is a ",Object(o.b)("inlineCode",{parentName:"p"},"Fix"),' with an endpoint to it."')),Object(o.b)("h2",{id:"creating-a-redux-alternative"},"Creating a Redux Alternative"),Object(o.b)("p",null,"In this app, Brian uses lenses to overwrite and update state in the reducer."),Object(o.b)("p",null,"Brian manages to remove the ",Object(o.b)("inlineCode",{parentName:"p"},"state")," from the function by using ",Object(o.b)("inlineCode",{parentName:"p"},"ask")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"Fn")," type that Brian supplies to the course."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Brian eludes to the fact that TS doesn't love things like ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<Either<Task>>")," as it is not built for that. There are some workarounds.")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Functional-Programming/Hardcore-JS-Patterns.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-functional-programming-hardcore-js-patterns-md-2779974cc98e7d7218c7.js.map