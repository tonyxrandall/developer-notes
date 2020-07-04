(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{"34xP":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),l=n("TjRS"),r=(n("HZsF"),n("QxB1"));n("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/Learn-You-A-Haskell.md"}});var c={_frontmatter:i},o=l.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,b({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"learn-you-a-haskell"},"Learn You A Haskell"),Object(a.b)("p",null,"Everything here comes from the learning resources found at the ",Object(a.b)("a",b({parentName:"p"},{href:"http://learnyouahaskell.com/"}),"Learn You A Haskell")," website."),Object(a.b)("h2",{id:"interactive-prompt"},"Interactive prompt"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"stack ghci"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Begin Haskell REPL")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),":l myfunctions"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Import defined functions from ",Object(a.b)("inlineCode",{parentName:"td"},"./myfunctions.hs"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),":r"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Reloads current script")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),":quit"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Quick the REPL")))),Object(a.b)("h2",{id:"bootstrap-learning-haskell"},"Bootstrap Learning Haskell"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"+ - * /")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Simple arithmetic")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"True && False")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Booleans - evaluates to ",Object(a.b)("inlineCode",{parentName:"td"},"False"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"==")," and ",Object(a.b)("inlineCode",{parentName:"td"},"/=")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Equals, not equals")))),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"*")," is a function that takes two numbers and multiplies them. This is an ",Object(a.b)("inlineCode",{parentName:"p"},"infix")," function. Most functions that aren't used with numbers are ",Object(a.b)("inlineCode",{parentName:"p"},"prefix")," functions."),Object(a.b)("p",null,"For example, take ",Object(a.b)("inlineCode",{parentName:"p"},"min")," or ",Object(a.b)("inlineCode",{parentName:"p"},"max"),":"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"min 9 10\n-- ^ 9\nmax 9 10\n-- ^ 10\n")),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"function application")," (calling a function by putting a space after it and then typing out the parameters) has the highest precedence of them all. What that means for us is that these two statements are equivalent."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),"ghci> succ 9 + max 5 4 + 1\n16\nghci> (succ 9) + (max 5 4) + 1\n16\n")),Object(a.b)("h2",{id:"writing-functions"},"Writing Functions"),Object(a.b)("p",null,"Functions are defined in a similar manner to how they are called."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"doubleMe x = x + x\ndoubleMe 4\n-- ^ returns 8\n")),Object(a.b)("p",null,"To write it as a module, touch ",Object(a.b)("inlineCode",{parentName:"p"},"DoubleMe.hs")," and add:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"module DoubleMe (\n  doubleMe\n) where\n\ndoubleMe :: Int -> Int\ndoubleMe x = x + x\n")),Object(a.b)("p",null,"Then, inside the REPL, run ",Object(a.b)("inlineCode",{parentName:"p"},":l DoubleMe.hs")," and it will load the ",Object(a.b)("inlineCode",{parentName:"p"},"doubleMe")," function for you to run."),Object(a.b)("p",null,"In the above example, we've done a simple typing as well for how ",Object(a.b)("inlineCode",{parentName:"p"},"doubleMe")," will run."),Object(a.b)("p",null,"Declaring a function that incorporates more functions can look like the following:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"doubleUs x y = doubleMe x + doubleMe y\n")),Object(a.b)("p",null,"For a simple use case of if else in a function:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"doubleSmallNumber x = if x > 100\n                        then x\n                        else x*2\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The difference between Haskell's if statement and if statements in imperative languages is that the else part is mandatory in Haskell. In imperative languages you can just skip a couple of steps if the condition isn't satisfied but in Haskell every expression and function must return something.")),Object(a.b)("h2",{id:"expressions"},"Expressions"),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"5")," is an expression in Haskell, as is ",Object(a.b)("inlineCode",{parentName:"p"},"4 + 8")," etc. If we wanted to add one to every result from an ",Object(a.b)("inlineCode",{parentName:"p"},"if/else")," block we could have put:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"doubleSmallNumber' x = (if x > 100 then x else x*2) + 1\n")),Object(a.b)("p",null,"Note the ",Object(a.b)("inlineCode",{parentName:"p"},"'")," at the end of the function name. That apostrophe doesn't have any special meaning in Haskell's syntax. It's a valid character to use in a function name. We usually use ",Object(a.b)("inlineCode",{parentName:"p"},"'")," to either denote a strict version of a function (one that isn't lazy) or a slightly modified version of a function or a variable. Because ",Object(a.b)("inlineCode",{parentName:"p"},"'")," is a valid character in functions, we could write:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"-- Completely valid syntax\nconanO'Brien = \"It's a-me, Conan O'Brien!\"\n")),Object(a.b)("h2",{id:"lists"},"Lists"),Object(a.b)("p",null,"In Haskell, lists are a homogenous data structure. It stores several elements of the same type."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"let lostNumbers = [1,2,3,4,5]\n")),Object(a.b)("p",null,"Lists can be compared if the stuff they contain can be compared."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"[3,2,1] > [2,1,0]\n-- ^ True\n")),Object(a.b)("p",null,"Some useful list operations:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"head"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Returns first element")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"tail"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Returns ",Object(a.b)("inlineCode",{parentName:"td"},"[1:]")," elements")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"last"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Returns last element")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"init"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Returns ",Object(a.b)("inlineCode",{parentName:"td"},"[:-1]")," elements")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"length"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Get list length")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"null"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Check if list is empty")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"reverse"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Self-explanatory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"take n"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Take first n elements")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"drop n"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Drop first n elements and return rest")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"minimum"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Self-explanatory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"maximum"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Self-explanatory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"sum"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Self-explanatory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"product"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Self-explanatory")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"n ","`","elem","`"," list"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Infix function to tell if n exists in list")))),Object(a.b)("h2",{id:"concatenation"},"Concatenation"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),'ghci> [1,2,3,4] ++ [9,10,11,12]\n[1,2,3,4,9,10,11,12]\nghci> "hello" ++ " " ++ "world"\n"hello world"\nghci> [\'w\',\'o\'] ++ [\'o\',\'t\']\n"woot"\n')),Object(a.b)("p",null,"Putting something at the beginning of a list using the ",Object(a.b)("inlineCode",{parentName:"p"},":")," operator (also called the cons operator) is instantaneous."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),'ghci> \'A\':" SMALL CAT"\n"A SMALL CAT"\nghci> 5:[1,2,3,4,5]\n[5,1,2,3,4,5]\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[1,2,3]")," is actually just syntactic sugar for ",Object(a.b)("inlineCode",{parentName:"p"},"1:2:3:[]")),Object(a.b)("h2",{id:"get-at-index"},"Get At Index"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"!!"),":"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),"ghci> \"Steve Buscemi\" !! 6\n'B'\nghci> [9.4,33.2,96.2,11.2,23.25] !! 1\n33.2\n")),Object(a.b)("h2",{id:"ranges"},"Ranges"),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"..")," within lists as a shortcut for some ranges."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),"ghci> [1..20]\n[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\nghci> ['a'..'z']\n\"abcdefghijklmnopqrstuvwxyz\"\nghci> ['K'..'Z']\n\"KLMNOPQRSTUVWXYZ\"\nghci> [2,4..8]\n[2,4,6,8]\nghci> take 24 [13,26..]\n[13,26,39,52,65,78,91,104,117,130,143,156,169,182,195,208,221,234,247,260,273,286,299,312]\nghci> take 10 (repeat 5)\n[5,5,5,5,5,5,5,5,5,5]\nghci> replicate 3 10\n[10,10,10]\n")),Object(a.b)("h2",{id:"list-comprehension"},"List Comprehension"),Object(a.b)("p",null,"In mathematics, take the following:"),Object(a.b)(r.BlockMath,{math:"S = \\{ 2 \\cdot x \\space | \\space x \\in \\mathbb{N} , \\space x \\leq 10 \\}",mdxType:"BlockMath"}),Object(a.b)("p",null,"To represent this in Haskell, we can have the following:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),"ghci> [x*2 | x <- [1..10]]\n[2,4,6,8,10,12,14,16,18,20]\n# Now let's add a condition (or a predicate) to that comprehension.\nghci> [x*2 | x <- [1..10], x*2 >= 12]\n[12,14,16,18,20]\n# All numbers between 50 and 100 whos remainer when divided with 7 is 3\nghci> [ x | x <- [50..100], x `mod` 7 == 3]\n[52,59,66,73,80,87,94]\n# We can include multiple predicates\nghci> [ x | x <- [10..20], x /= 13, x /= 15, x /= 19]\n[10,11,12,14,16,17,18,20]\n# You can also draw from several lists\nghci> [ x*y | x <- [2,5,10], y <- [8,10,11]]\n[16,20,22,40,50,55,80,100,110]\n")),Object(a.b)("p",null,"We could take everything that we learned above and create a neat little function out of it!"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),'boomBangs xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]\n')),Object(a.b)("p",null,"Because strings are lists, we can use list comprehensions to process and produce strings. Here's a function that takes a string and removes everything except uppercase letters from it."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),'removeNonUppercase st = [ c | c <- st, c `elem` [\'A\'..\'Z\']]\nremoveNonUppercase "Hahaha! Ahahaha!"\n-- "HA"\nremoveNonUppercase "IdontLIKEFROGS"\n-- "ILIKEFROGS"\n')),Object(a.b)("p",null,"List comprehensions also work on a list of lists:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),"ghci> let xxs = [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]\nghci> [ [ x | x <- xs, even x ] | xs <- xxs]\n[[2,2,4],[2,4,6,8],[2,4,2,6,2,6]]\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can write list comprehensions across several lines. So if you're not in GHCI, it's better to split longer list comprehensions across multiple lines, especially if they're nested.")),Object(a.b)("h2",{id:"tuples"},"Tuples"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A list of numbers is a list of numbers. That's its type and it doesn't matter if it has only one number in it or an infinite amount of numbers. Tuples, however, are used when you know exactly how many values you want to combine and its type depends on how many components it has and the types of the components.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),'ghci> fst (8,11)\n8\nghci> fst ("Wow", False)\n"Wow"\nghci> snd (8,11)\n11\nghci> snd ("Wow", False)\nFalse\n')),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Function"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"fst"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"First element of tuple")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"snd"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Second element of tuple")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"zip"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Take two lists and return a bunch of pairs")))),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-s"}),'ghci> zip [1,2,3,4,5] [5,5,5,5,5]\n[(1,5),(2,5),(3,5),(4,5),(5,5)]\nghci> zip [1 .. 5] ["one", "two", "three", "four", "five"]\n[(1,"one"),(2,"two"),(3,"three"),(4,"four"),(5,"five")]\nghci> zip [5,3,2,6,2,7,2,5,4,6,6] ["im","a","turtle"]\n[(5,"im"),(3,"a"),(2,"turtle")]\nghci> zip [1..] ["apple", "orange", "cherry", "mango"]\n[(1,"apple"),(2,"orange"),(3,"cherry"),(4,"mango")]\n')),Object(a.b)("p",null,"Here's a problem that combines tuples and list comprehensions: which right triangle that has integers for all sides and all sides equal to or smaller than 10 has a perimeter of 24?"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-haskell"}),"let rightTriangles' = [ (a,b,c) | c <- [1..10], b <- [1..c], a <- [1..b], a^2 + b^2 == c^2, a+b+c == 24]\nrightTriangles'\n-- [(6,8,10)]\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/Learn-You-A-Haskell.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-learn-you-a-haskell-md-2fcadd6aad39a71cda22.js.map