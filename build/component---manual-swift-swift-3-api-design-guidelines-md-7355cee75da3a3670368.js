(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{GrBS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Swift/Swift-3-API-Design-Guidelines.md"}});var o={_frontmatter:r},b=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"api-design-guidelines-in-swift-3"},"API Design Guidelines in Swift 3"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#api-design-guidelines-in-swift-3"}),"API Design Guidelines in Swift 3"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-1-why-do-we-need-guidelines"}),"SWD-1: Why do we need guidelines?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-2-guidelines-for-naming-types"}),"SWD-2: Guidelines for Naming Types")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-3-guidelines-for-naming-methods"}),"SWD-3: Guidelines for Naming Methods")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-4-fluent-usage"}),"SWD-4: Fluent Usage")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-5-prepositional-vs-grammatical-phrases"}),"SWD-5: Prepositional vs Grammatical Phrases")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-6-recap-on-naming"}),"SWD-6: Recap on Naming")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-7-side-effects-and-mutation"}),"SWD-7: Side-Effects and Mutation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#swd-8-conventions"}),"SWD-8: Conventions"))))),Object(a.b)("h2",{id:"swd-1-why-do-we-need-guidelines"},"SWD-1: Why do we need guidelines?"),Object(a.b)("p",null,"Initially when Swift was created, there were no real guidelines."),Object(a.b)("p",null,"It still largely means working with Objective-C code."),Object(a.b)("p",null,"With the open sourcing in 2015, the Swift team worked towards a standard for the guidelines."),Object(a.b)("p",null,"The most important rule with Swift is to correctly use the ",Object(a.b)("inlineCode",{parentName:"p"},"Point of Use"),". Readability at call site is more important than point of definition."),Object(a.b)("p",null,"Methods and properties are written once and called and used many times, so the focus should be on the latter."),Object(a.b)("p",null,"Secondly, ",Object(a.b)("inlineCode",{parentName:"p"},"Clarity Over Brevity"),". It is a non goal to enable to smallest possible code. With Objective-C, it was important to write with clarity for naming conventions. We want to stay on board with this clarity for naming."),Object(a.b)("h2",{id:"swd-2-guidelines-for-naming-types"},"SWD-2: Guidelines for Naming Types"),Object(a.b)("p",null,"High level goal of naming things according to their role."),Object(a.b)("p",null,"Example for a quick variable:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"var someValue = 12  // bad choice\nvar counter = 12    // better choice\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Rules for Naming")),Object(a.b)("p",null,"Names of types properties, variables and constants should ",Object(a.b)("em",{parentName:"p"},"read as nouns"),"."),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"class NetworkResponse")," - we know from the name that it is for a ",Object(a.b)("inlineCode",{parentName:"p"},"NetworkReponse"),". Therefore, we would decide that the responsibility for Network Connection is the responsibility for another class."),Object(a.b)("p",null,"An example from the ",Object(a.b)("em",{parentName:"p"},"Swift Standard Library Names")," is ",Object(a.b)("inlineCode",{parentName:"p"},"BidirectionalCollection")," - we know from the name that it is a collection that deals with both forward and backward traversal. ",Object(a.b)("inlineCode",{parentName:"p"},"Sequence")," protocol describes a type that provides sequential access to its elements."),Object(a.b)("p",null,"The exceptions to this rule is for ",Object(a.b)("inlineCode",{parentName:"p"},"Boolean")," values - they should read as asserts. Eg. ",Object(a.b)("inlineCode",{parentName:"p"},"isEmpty"),"."),Object(a.b)("p",null,"The second excepetion is the -able, -ible or -ing suffixes - used for protocols that model capabilities. Examples of this are ",Object(a.b)("inlineCode",{parentName:"p"},"Equatable")," to distinguish between the same type, with other examples such as ",Object(a.b)("inlineCode",{parentName:"p"},"Comparable")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ExpressibleByStringLiteral"),"."),Object(a.b)("h2",{id:"swd-3-guidelines-for-naming-methods"},"SWD-3: Guidelines for Naming Methods"),Object(a.b)("p",null,"We consider function names to be the base name plus the function list. Therefore, reading it will mean that it requires the base name and the arguments in order to understand it."),Object(a.b)("p",null,"For the function parameters themselves, they have both a external name and a local name."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func index(_ i: Self.Index, offsetBy n: Self.IndexDistance) -> Self.Index")),Object(a.b)("p",null,"In the second parametere, ",Object(a.b)("inlineCode",{parentName:"p"},"offsetBy")," is the external name."),Object(a.b)("p",null,"If there is just one parameter, then that will be both the external and local name. You can use ",Object(a.b)("inlineCode",{parentName:"p"},"_")," to offset the parameter external name."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Rule 1"),"\nWe should always check how functions read and use sites when we write them."),Object(a.b)("p",null,"Example: ",Object(a.b)("inlineCode",{parentName:"p"},"func insert(_ e: Element, atPosition: Int)")," is better than ",Object(a.b)("inlineCode",{parentName:"p"},'insert(element: "a", position: 1)'),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Rule 2"),"\nAvoid Ambiguity"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func remove(atIndex: Int).")," over ",Object(a.b)("inlineCode",{parentName:"p"},"func remove(_ index: Int)")),Object(a.b)("p",null,"However, in the case of ambiguous type information, we preceed each weakly typed parameter with a noun describing it's role."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func addObserver(_ observer: AnyObject)")," over ",Object(a.b)("inlineCode",{parentName:"p"},"func add(observer: AnyObject)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func update(value: Any, key: String)")),Object(a.b)("p",null,"Here, Any and String both have weak type information."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func updateValue(_ value: Any, forKey key: String)")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Summary")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Omit needless information"),Object(a.b)("li",{parentName:"ul"},"Include all words need to avoid ambiguity"),Object(a.b)("li",{parentName:"ul"},"Compensate for weak type information")),Object(a.b)("h2",{id:"swd-4-fluent-usage"},"SWD-4: Fluent Usage"),Object(a.b)("p",null,"The high level guidelines don't give too many details."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Fluent Usage")),Object(a.b)("p",null,"Methods and functions should be read as grammatical English phrases at the use site."),Object(a.b)("p",null,"Example: ",Object(a.b)("inlineCode",{parentName:"p"},"func find(character: String, range: Range<String.Index>) -> Int")),Object(a.b)("p",null,"This function takes as an argument a character which we'll define as a string defined. We also need the range, so we'll give it range."),Object(a.b)("p",null,"We could use..."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func find(character: String, in range: Range<String.Index>) -> Int")),Object(a.b)("p",null,"But since it is ambiguous for weak type information, would be to omit the external label and the first argument of the name describing it's role:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func find(character: Character, in range: Range<String.Index>) -> Int")),Object(a.b)("h2",{id:"swd-5-prepositional-vs-grammatical-phrases"},"SWD-5: Prepositional vs Grammatical Phrases"),Object(a.b)("p",null,"This is an exception for the grammatical phrases."),Object(a.b)("p",null,'Eg. "The laptop on the desk" - ',Object(a.b)("inlineCode",{parentName:"p"},"on")," is the preposition."),Object(a.b)("p",null,"How does this relate?"),Object(a.b)("p",null,"Eg."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func move(position: Int)")),Object(a.b)("p",null,'Normally we would say "move to position", however if we need to use that preposition ',Object(a.b)("inlineCode",{parentName:"p"},"to")," then we give it an argument label that begins at the preposition."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func move(toPosition position: Int)")),Object(a.b)("p",null,"Another example would be ",Object(a.b)("inlineCode",{parentName:"p"},"x.removeBoxes(havingLength: 12)"),"."),Object(a.b)("p",null,"The exception to this would be that only one argument governed the function."),Object(a.b)("p",null,"Example, ",Object(a.b)("inlineCode",{parentName:"p"},"func move(toX: Int, y: Int)")),Object(a.b)("p",null,"We begin with the prepositional phrase, however both args are part of the abstraction. In that case, we move the preposition out of the arguments in to the base name."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func moveTo(x: Int, y: Int)")),Object(a.b)("p",null,"Another example for context:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func dismiss(animated: Bool)")),Object(a.b)("h2",{id:"swd-6-recap-on-naming"},"SWD-6: Recap on Naming"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Prepositional Phrase: Exception")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"view.fadeTo(red: a, green: b, blue: c)")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Grammatical Phrase")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"view.addSubview(y)")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Neither Gammatical Nor Prepositional")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func dismiss(animated: Bool)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Omit needless words"),Object(a.b)("li",{parentName:"ul"},"Avoid ambiguity"),Object(a.b)("li",{parentName:"ul"},"Avoid needless words")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"More Examples of Methods from the Swift SDK")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"func activate(_ constraints: [NSLayoutConstraint])\n// activate constraints - grammatical\n// omit needless words - so no need for activateConstraints\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"func max(_ x: Int, _ y: Int) -> Int\n// no meaningful to write more beyond the base\n// no need for naming arguments\n")),Object(a.b)("h2",{id:"swd-7-side-effects-and-mutation"},"SWD-7: Side-Effects and Mutation"),Object(a.b)("p",null,"We want to name methods in accordance with their side effect."),Object(a.b)("p",null,"This is one that mutates the current state. If it effects the current state, it should be named using verb phrases."),Object(a.b)("p",null,"An example would adding an element to the array. This effects the state of the array as it mutates it."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func append(_ newElement: Element)")),Object(a.b)("p",null,"Nouns are used for when the state is not effected."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func distance(to point: Point)")),Object(a.b)("p",null,"What if the operation is naturally described as a verb?"),Object(a.b)("p",null,"Then we use the imperitive form for the verb."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"anArray.filter(isEven)")," - filter being the verb mutating the array state."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Mutating verse non-mutation of the state")),Object(a.b)("p",null,"Mutating example: ",Object(a.b)("inlineCode",{parentName:"p"},"anArray.sort()"),"\nNon-mutating example: ",Object(a.b)("inlineCode",{parentName:"p"},"let sortedArray = anArray.sorted()")),Object(a.b)("p",null,"Suffixes that can be used include ",Object(a.b)("inlineCode",{parentName:"p"},"-ed")," and when it doesn't sound right ",Object(a.b)("inlineCode",{parentName:"p"},"-ing"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Mutation for nouns")),Object(a.b)("p",null,"This is simpler. We use noun for non-mutating and form prefix for mutating counterpart."),Object(a.b)("p",null,"Mutating example: ",Object(a.b)("inlineCode",{parentName:"p"},"anArray.formUnion(with: anotherArray)"),"\nNon-mutating: ",Object(a.b)("inlineCode",{parentName:"p"},"let union = anArray.union(with: anotherArray)")),Object(a.b)("p",null,"The exception arises for pairs of mutating and non-mutating counterparts."),Object(a.b)("p",null,"If it best described using a verb, you use that for the mutating method."),Object(a.b)("p",null,"For non-mutating, use ",Object(a.b)("inlineCode",{parentName:"p"},"-ed")," or ",Object(a.b)("inlineCode",{parentName:"p"},"-ing")," suffix."),Object(a.b)("p",null,"Then noun form for non-mutating version of nouns and form prefix for mutating method."),Object(a.b)("h2",{id:"swd-8-conventions"},"SWD-8: Conventions"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Boolean Methods")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"func isInRange(of point: Point)")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Parameters")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Choose parameter names that serve documentation."),Object(a.b)("li",{parentName:"ul"},"Use default values where possible to simplify function signatures."),Object(a.b)("li",{parentName:"ul"},"In Swift, default args are preferred to method families.")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"let order = lastName.compare(royalFamilyName, options: [], range: nil, local: nil)\n")),Object(a.b)("p",null,"Keep parameters with default parameters to sit at the end of the function."),Object(a.b)("p",null,"Same basenames are also fine if they operate within different domains."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Swift/Swift-3-API-Design-Guidelines.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-swift-swift-3-api-design-guidelines-md-7355cee75da3a3670368.js.map