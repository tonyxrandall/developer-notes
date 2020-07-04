(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{ppyd:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),l=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kotlin/Kotlin-Basics.md"}});var o={_frontmatter:r},s=l.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,l={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,["components"]);return Object(a.b)(s,i({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kotlin-basics"},"Kotlin Basics"),Object(a.b)("p",null,"This highlight just covers scenarios not entirely standardised to most programming languages eg it will not cover while loops etc."),Object(a.b)("h2",{id:"kotlin-repl"},"Kotlin REPL"),Object(a.b)("p",null,"Brew install ",Object(a.b)("inlineCode",{parentName:"p"},"kotlin")," and then you'll have access to the REPL."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"kotlinc")," with no arguments to enter the REPL."),Object(a.b)("p",null,"To compile and run code from the command line:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"kotlinc hello.kt -include-runtime -d hello.jar\njava -jar hello.jar\n")),Object(a.b)("h2",{id:"hello-kotlin"},"Hello, Kotlin"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'fun main(args: Array<String>) {\n  println("Hello, Kotlin!")\n}\n')),Object(a.b)("h2",{id:"shift-operators"},"Shift Operators"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"1 shl 3 // shift left\n32 shr 2 // shift right\n")),Object(a.b)("h2",{id:"math-functions"},"Math Functions"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"import kotlin.math.*\n\nfun main(args: Array<String>) {\n  sin(45 * PI / 180) // 0.7071067811865475\n}\n\nsqrt(4.0) // 2.0\n\nmax(1,2) // 2\n")),Object(a.b)("h2",{id:"naming"},"Naming"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val number: Int = 10 // constants\n\nconst val reallyConstant: Int = 42 // top level keyword to mark it as compile-time constant\n\nvar variableNumber: Int = 42\nvariableNumber = 12 // allowed\n")),Object(a.b)("h2",{id:"type-conversion"},"Type Conversion"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"var integer: Int = 100\nvar decimal: Double = 12.5\ninteger = decimal // THROWS error\ninteger = decimal.toInt() // works nicer\n")),Object(a.b)("p",null,"To do implicit conversion:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val hourlyRate: Double = 19.5\nval hoursWorked: Int = 10\nval totalCost: Double = hourlyRate * hoursWorked\n")),Object(a.b)("h2",{id:"chars-vs-strings"},"Chars Vs Strings"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val characterA: Char = 'a' // must be single quotes\nval stringDog: String = \"Dog\" // must be double quotes\n")),Object(a.b)("p",null,"String interpolation happens with ",Object(a.b)("inlineCode",{parentName:"p"},"$"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'var name = "Dick"\nvar message = "Hello my name is $name!" // "Hello my name is Dick!"\n')),Object(a.b)("p",null,"Multiline strings:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'let bigString = """\n  |You can have a string\n  |that contains multiple\n  |lines\n  |by\n  |doing this.\n  """.trimMargin()\nprintln(bigString)\n')),Object(a.b)("p",null,"The above will print:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-text"}),"You can have a string\nthat contains multiple\nlines\nby\ndoing this.\n")),Object(a.b)("h2",{id:"pair--triples"},"Pair + Triples"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val coordinates: Pair<Int, Int> = Pair(2, 3)\nval coordinates3D = Triple(2, 3, 1)\n")),Object(a.b)("h2",{id:"number-types"},"Number types"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val a: Short = 12\nval b: Byte = 120\nval c: Int = -100000\n\nval answer = a + b + c // Answer will be an Int\n")),Object(a.b)("h2",{id:"any-unit-and-nothing"},"Any, Unit, and Nothing"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'val anyNum: Any = 1\nval anyString: Any = "Yo"\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Unit")," is a special type which only ever represents one value: the Unit object. It is similar to the void type in Java, except it makes working with generics easier:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"fun add() {\n  val result = 2 + 2\n  println(result)\n}\n\n// same as\nfun add(): Unit {\n  val result = 2 + 2\n  println(result)\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Nothing")," is a type that is helpful for declaring that a function not only doesn't return anything, but also never completes."),Object(a.b)("p",null,"This can occur if a function either causes the program to stop completely by throwing an ",Object(a.b)("inlineCode",{parentName:"p"},"Exception")," or if it simply goes on forever without ever finishing."),Object(a.b)("h2",{id:"control-logic"},"Control Logic"),Object(a.b)("p",null,"Worth noting if/else can be single line ie ",Object(a.b)("inlineCode",{parentName:"p"},"val min = if (a < b) a else b"),"."),Object(a.b)("h3",{id:"range"},"Range"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"val closedRange = 0..5 // (0,1,2,3,4,5)\nval halfOpenRange = 0 until 5 // (0,1,2,3,4)\nval decreasingRange = 5 downTo 0 // (5,4,3,2,1,0)\n")),Object(a.b)("h3",{id:"repeat"},"Repeat"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"sum = 1\nvar lastSum = 0\nrepeat(10) {\n  val temp = sum\n  sum += lastSum\n  lastSum = temp\n}\n")),Object(a.b)("h3",{id:"stepping"},"Stepping"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"sum = 0\nfor (i in 1..count step 2) {\n  sum += i\n}\n")),Object(a.b)("p",null,"You could even ",Object(a.b)("inlineCode",{parentName:"p"},"downTo")," step:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"sum = 0\nfor (i in count downTo 1 step 2) {\n  sum += i\n}\n")),Object(a.b)("h3",{id:"labelled-statements"},"Labelled Statements"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"sum = 0\nfor (row in 0 until 8) {\n  if (row % 2 == 0) {\n    continue\n  }\n  for (column in 0 until 8) {\n    sum += row * column\n  }\n}\n")),Object(a.b)("h2",{id:"when-expressions"},"When Expressions"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'val number = 10\nwhen (number) {\n  0 -> println("Zero")\n  else -> println("Non-zero")\n}\n\n// multi-valued whens\nval string = "Dog"\nwhen (string) {\n  "Cat", "Dog" -> println("Animal is a house pet.")\n  else -> println("Animal is not a house pet.")\n}\n\n// when in range\ntimeOfDay = when (hourOfDay) {\n  in 0..5 -> "Early morning"\n  in 6..11 -> "Morning"\n  in 12..16 -> "Afternoon"\n  in 17..19 -> "Evening"\n  in 20..23 -> "Late evening"\n  else -> "INVALID HOUR!"\n}\n\n// conditions in when statements\nwhen {\n  x == 0 && y == 0 && z == 0 -> println("Origin")\n  y == 0 && z == 0 -> println("On the x-axis at x = $x")\n  x == 0 && z == 0 -> println("On the y-axis at y = $y")\n  x == 0 && y == 0 -> println("On the z-axis at z = $z")\n  else -> println("Somewhere in space at x = $x, y = $y, z = $z")\n}\n')),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("p",null,"Note that parameters are constants by default."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'fun printMyName() {\n  println("My name is Dick Lucas.")\n}\n\n// with params\nfun printMultipleOfFive(value: Int) {\n  println("$value * 5 = ${value * 5}")\n}\nprintMultipleOfFive(10)\n\n// string interpolated\nfun printMultipleOf(multiplier: Int, andValue: Int) {\n  println("$multiplier * $andValue = ${multiplier * andValue}")\n}\nprintMultipleOf(4, 2)\n')),Object(a.b)("p",null,"If a function consists solely of a single expression, you can assign the expression to the function using = while at the same time not using braces, a return type, or a return statement:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"fun multiplyInferred(number: Int, multiplier: Int) = number * multiplier\n")),Object(a.b)("h3",{id:"overloading"},"Overloading"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),'fun getValue(value: Int): Int {\n  return value + 1\n}\nfun getValue(value: String): String {\n  return "The value is $value"\n}\n')),Object(a.b)("h3",{id:"functions-as-variables"},"Functions As Variables"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-kotlin"}),"fun add(a: Int, b: Int): Int {\n  return a + b\n}\n\nvar function = ::add\nfunction(4,2) // works\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Basics.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kotlin-kotlin-basics-md-9fc2aac0324e1f0e2854.js.map