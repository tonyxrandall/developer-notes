(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{EJSZ:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return c})),a.d(n,"default",(function(){return i}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Haskell/Types-And-Typeclasses.md"}});var l={_frontmatter:c},o=s.a;function i(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(t.b)(o,r({},l,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"types-and-typeclasses"},"Types and Typeclasses"),Object(t.b)("h2",{id:"resources"},"Resources"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",r({parentName:"li"},{href:"http://learnyouahaskell.com/types-and-typeclasses#believe-the-type"}),"Learn You A Haskell"))),Object(t.b)("h2",{id:"checking-types-on-ghci"},"Checking types on ghci"),Object(t.b)("p",null,"Use the ",Object(t.b)("inlineCode",{parentName:"p"},":t")," command followed by a valid expression."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> :t 'a'\n'a' :: Char\nghci> :t True\nTrue :: Bool\nghci> :t \"HELLO!\"\n\"HELLO!\" :: [Char]\nghci> :t (True, 'a')\n(True, 'a') :: (Bool, Char)\nghci> :t 4 == 5\n4 == 5 :: Bool\n")),Object(t.b)("h2",{id:"function-types"},"Function Types"),Object(t.b)("p",null,"We can choose to give functions an explicit type definition. This is considered good practice except for short functions."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),"removeNonUppercase :: [Char] -> [Char]\nremoveNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]\n")),Object(t.b)("p",null,"Here is an example for a function that takes three ",Object(t.b)("inlineCode",{parentName:"p"},"Int")," args and adds them together."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-haskell"}),"addThree :: Int -> Int -> Int -> Int\naddThree x y z = x + y + z\n")),Object(t.b)("h2",{id:"typeclasses"},"Typeclasses"),Object(t.b)("p",null,"A typeclass is a sort of interface that defines some behavior. If a type is a part of a typeclass, that means that is supports and implements the behaviour the typeclass describes."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> :t (==)\n(==) :: Eq a => a -> a -> Bool\nghci> 5 /= 5\nFalse\nghci> :t 5 /= 5\n5 /= 5 :: Bool\nghci> :t (>)\n(>) :: Ord a => a -> a -> Bool\n")),Object(t.b)("p",null,"Typeclass ",Object(t.b)("inlineCode",{parentName:"p"},"Ord")," covers all comparing functions."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),'ghci> "Abrakadabra" < "Zebra"\nTrue\nghci> "Abrakadabra" `compare` "Zebra"\nLT\nghci> 5 >= 2\nTrue\nghci> 5 `compare` 3\nGT\n')),Object(t.b)("p",null,"Members of ",Object(t.b)("inlineCode",{parentName:"p"},"Show")," can be presented as strings. All types covered so far except for functions are a part of Show. The most used function that deals with the Show typeclass is show. It takes a value whose type is a member of Show and presents it to us as a string."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),'ghci> show 3\n"3"\nghci> show 5.334\n"5.334"\nghci> show True\n"True"\n')),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Read")," is sort of the opposite typeclass of Show. The read function takes a string and returns a type which is a member of Read."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),'ghci> read "True" || False\nTrue\nghci> read "8.2" + 3.8\n12.0\nghci> read "5" - 2\n3\nghci> read "[1,2,3,4]" ++ [3]\n[1,2,3,4,3]\n')),Object(t.b)("h2",{id:"type-annotations"},"Type Annotations"),Object(t.b)("p",null,"Type annotations are a way of explicitly saying what the type of an expression should be. We do that by adding :: at the end of the expression and then specifying a type. Observe:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),'ghci> read "5" :: Int\n5\nghci> read "5" :: Float\n5.0\nghci> (read "5" :: Float) * 4\n20.0\nghci> read "[1,2,3,4]" :: [Int][1,2,3,4]\nghci> read "(3, \'a\')" :: (Int, Char)\n(3, \'a\')\n')),Object(t.b)("h2",{id:"enum-members"},"Enum Members"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Enum")," members are sequentially ordered types — they can be enumerated. The main advantage of the ",Object(t.b)("inlineCode",{parentName:"p"},"Enum")," typeclass is that we can use its types in list ranges. They also have defined successors and predecesors, which you can get with the succ and pred functions. Types in this class: (), Bool, Char, Ordering, Int, Integer, Float and Double."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> ['a'..'e']\n\"abcde\"\nghci> [LT .. GT]\n[LT,EQ,GT]\nghci> [3 .. 5]\n[3,4,5]\nghci> succ 'B'\n'C'\n")),Object(t.b)("h2",{id:"bounded"},"Bounded"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Bounded")," members have an upper and a lower bound."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> minBound :: Int\n-2147483648\nghci> maxBound :: Char\n'\\1114111'\nghci> maxBound :: Bool\nTrue\nghci> minBound :: Bool\nFalse\n")),Object(t.b)("p",null,"minBound and maxBound are interesting because they have a type of (Bounded a) => a. In a sense they are polymorphic constants."),Object(t.b)("p",null,"All tuples are also part of Bounded if the components are also in it."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> maxBound :: (Bool, Int, Char)\n(True,2147483647,'\\1114111')\n")),Object(t.b)("h2",{id:"num"},"Num"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Num")," is a numeric typeclass. Its members have the property of being able to act like numbers. Let's examine the type of a number."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> :t 20\n20 :: (Num t) => t\n")),Object(t.b)("p",null,"It appears that whole numbers are also polymorphic constants. They can act like any type that's a member of the Num typeclass."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> 20 :: Int\n20\nghci> 20 :: Integer\n20\nghci> 20 :: Float\n20.0\nghci> 20 :: Double\n20.0\n")),Object(t.b)("p",null,"Those are types that are in the Num typeclass. If we examine the type of ","*",", we'll see that it accepts all numbers."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-s"}),"ghci> :t (*)\n(*) :: (Num a) => a -> a -> a\n")),Object(t.b)("p",null,"It takes two numbers of the same type and returns a number of that type. That's why ",Object(t.b)("inlineCode",{parentName:"p"},"(5 :: Int) * (6 :: Integer)")," will result in a type error whereas ",Object(t.b)("inlineCode",{parentName:"p"},"5 * (6 :: Integer)")," will work just fine and produce an Integer because 5 can act like an Integer or an Int."),Object(t.b)("p",null,"To join Num, a type must already be friends with Show and Eq."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Integral")," includes only integral (whole) numbers. In this typeclass are ",Object(t.b)("inlineCode",{parentName:"p"},"Int")," and ",Object(t.b)("inlineCode",{parentName:"p"},"Integer"),"."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Floating")," includes only floating point numbers, so ",Object(t.b)("inlineCode",{parentName:"p"},"Float")," and ",Object(t.b)("inlineCode",{parentName:"p"},"Double"),"."))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Haskell/Types-And-Typeclasses.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-haskell-types-and-typeclasses-md-39b64dd062ddca921aa7.js.map