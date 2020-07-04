(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{VEZ7:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Lang-Overview.md"}});var c={_frontmatter:i},o=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(o,l({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"go-language-overview"},"Go Language Overview"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#go-language-overview"}),"Go Language Overview"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#types"}),"Types")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#packages---public-and-private-variables"}),"Packages - public and private variables")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#variables"}),"Variables"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#variable-declarations-and-assigning"}),"Variable declarations and assigning")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#functions"}),"Functions"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#multiple-return-values"}),"Multiple return values")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#the-go-formatting-tool"}),"The Go Formatting Tool")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#control-structures"}),"Control Structures"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#for-loops"}),"For loops")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#if-statements"}),"If statements")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#switch-statement"}),"Switch statement")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#data-structures"}),"Data Structures"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#pointers"}),"Pointers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#arrays"}),"Arrays")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#slices"}),"Slices")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#maps"}),"Maps")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#custom-types"}),"Custom Types"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#methods"}),"Methods")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#structs"}),"Structs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#interfaces"}),"Interfaces"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#challenge"}),"Challenge")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#concurrency"}),"Concurrency"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#channels"}),"Channels"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#challenge-1"}),"Challenge")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#summary"}),"Summary"))))),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"int, int8 etc"),Object(a.b)("li",{parentName:"ul"},"bool"),Object(a.b)("li",{parentName:"ul"},"string"),Object(a.b)("li",{parentName:"ul"},"float32, float64 (64 by default)")),Object(a.b)("h2",{id:"packages---public-and-private-variables"},"Packages - public and private variables"),Object(a.b)("p",null,"When it comes to declaring variables, to have them available to other files when the package is imported, declare the variable with a capital letter."),Object(a.b)("p",null,"Lowercase variables are private."),Object(a.b)("h2",{id:"variables"},"Variables"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'// outside of func\nvar greeting = "hello"\n\nfunc main() {\n    // inside of func\n    greeting := "Hello from Go"\n    fmt.Println(test)\n    fmt.Println(greeting)\n}\n')),Object(a.b)("h3",{id:"variable-declarations-and-assigning"},"Variable declarations and assigning"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),"func main() {\n    var a int\n    a = 2\n    var b, c int\n    b = 2\n    c = 3\n    d := 5  // same as var d = 5\n    var e = 10 // type is inferred\n\n    // you'll need to use all the above variables\n    // otherwise there will be a declaration err\n    // thrown\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Variable names must start with a letter"),Object(a.b)("li",{parentName:"ul"},"Uppercase variables and funcs can be used outside of the package"),Object(a.b)("li",{parentName:"ul"},"Lowercase cannot"),Object(a.b)("li",{parentName:"ul"},"Declaring type can come after the variable name eg ",Object(a.b)("inlineCode",{parentName:"li"},"var floating float64 = 1.4")),Object(a.b)("li",{parentName:"ul"},"Casting ",Object(a.b)("inlineCode",{parentName:"li"},"float64(variable)")),Object(a.b)("li",{parentName:"ul"},"Errors are thrown for mismatched types"),Object(a.b)("li",{parentName:"ul"},"For scope, you are able to declare blocks by themselves - Each package is a implicit block")),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'// not available outside the package\nfunc main() {\n    myFunction()\n}\n\nfunc myFunction() {\n    fmt.Println("Running myFunction")\n}\n\nfunc MyPublicFunction() {\n    fmt.Println("Running MyPublicFunction")\n}\n')),Object(a.b)("p",null,"You can enforce type safety for parameters by adding the type expected to the function ",Object(a.b)("inlineCode",{parentName:"p"},"func myFunc(test string, number int) {}")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Go doesn't allow default parameter values"),Object(a.b)("li",{parentName:"ul"},"No named values"),Object(a.b)("li",{parentName:"ul"},"No method overloading")),Object(a.b)("p",null,"For returning a certain value, you can enfore this by the following"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"func myFunc(test string, number int) int {}\nfunc myFuncTwo(numberOne int, number int) (sum int) {\n    return number + numberOne;\n}\nfunc myFuncThree(number int) (difference int) {\n    difference = number + 4;\n}\n")),Object(a.b)("h3",{id:"multiple-return-values"},"Multiple return values"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt",\n    "math",\n    "log"\n)\n\nfunc main() {\n    squareRoot, err := squareRoot(-1)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(squareRoot)\n}\n\nfunc squareRoot(x float64) (float64, error) {\n    x < 0 {\n        return 0, fmt.Errorf("Can\'t take a negative number")\n    }\n    return math.Sqrt(x), nil\n}\n')),Object(a.b)("p",null,"As for errors"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt",\n    "os"\n)\n\n// panic errors - no good!\nfunc mainBad() {\n    fileInfo, _ := os.Stat("existent.txt")\n    fmt.Println(fileInfo.Size())\n    fileInfo, _ := os.Stat("nonexistent.txt")\n    fmt.Println(fileInfo.Size())\n}\n\n// instead, do this\nfunc main() {\n    fileInfo, error := os.Stat("existent.txt")\n    if error != nil {\n        fmt.Println(error)\n    } else {\n        fmt.Println(fileInfo.Size())\n    }\n    fileInfo, error := os.Stat("nonexistent.txt")\n    if error != nil {\n        fmt.Println(error)\n    } else {\n        fmt.Println(fileInfo.Size())\n    }\n}\n')),Object(a.b)("h3",{id:"the-go-formatting-tool"},"The Go Formatting Tool"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"go fmt <filename>")," will update the file itself and it will nicely format it."),Object(a.b)("h2",{id:"control-structures"},"Control Structures"),Object(a.b)("h3",{id:"for-loops"},"For loops"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),"for i := 1; i <= 3; i++ {\n    fmt.Println(i)\n}\n")),Object(a.b)("h3",{id:"if-statements"},"If statements"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'if true {\n    fmt.Println("You\'ll come here")\n} else if false {\n    // ...\n} else {\n    // ...\n}\n')),Object(a.b)("h3",{id:"switch-statement"},"Switch statement"),Object(a.b)("p",null,"Switch statements look like they do not need a break."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'switch doorNumber {\n    case 1:\n        fmt.Println("new car ")\n    case 2:\n        // ...\n    default:\n        // ...\n}\n')),Object(a.b)("h2",{id:"data-structures"},"Data Structures"),Object(a.b)("h3",{id:"pointers"},"Pointers"),Object(a.b)("p",null,"You can create a pointer to a variable too."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    var aValue float64 = 1.23\n    var aPointer *float64 = &aValue\n    fmt.Println("aPointer", aPointer)\n    fmt.Println("*aPointer", *aPointer)\n}\n\n/*\n    Prints\n    aPointer 0xc42000a3b8\n    *aPointer 1.23\n */\n')),Object(a.b)("p",null,"There are situations where the pointer is better to use than using a value directly."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Functions that need to affect their argument. Args in funcs are always passed by value. The function recieves a copy of the value."),Object(a.b)("li",{parentName:"ol"},"Passing a complex value to a function - example a complex struct")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'// Example\npackage main\n\nimport "fmt"\n\n// Not using the pointer\nfunc main() {\n    num := 8.2\n    halve(num)\n    fmt.Println(num)\n}\n\nfunc halve(number float64) {\n    number = number / 2;\n    fmt.Println(number)\n}\n\n// Using the pointer\npackage main\n\nimport "fmt"\n\n// Not using the pointer\nfunc main() {\n    num := 8.2\n    halve(&num)\n    fmt.Println(num)\n}\n\nfunc halve(number *float64) {\n    *number = *number / 2\n    fmt.Println(*number)\n}\n')),Object(a.b)("h3",{id:"arrays"},"Arrays"),Object(a.b)("p",null,"Slices are used more commonly used than arrays, but given they are built on arrays, we'll explore arrays first."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'func main() {\n    var months [3]string // array of three strings\n    months[0] = "Jan"\n    months[1] = "Feb"\n    months[2] = "Mar"\n    fmt.Println(months[0])\n    // also could be months := [3]string{"Jan", "Feb", "Mar"}\n\n    for i := 0; i < len(months); i++ {\n        fmt.Println(months[i])\n    }\n\n    // another way to loop through the array\n    for i, month := range months {\n        fmt.Println(month)\n    }\n\n    // omit the index\n    for _, month := range months {\n        fmt.Println(month)\n    }\n}\n')),Object(a.b)("p",null,"The main limitation arrays are used are because you cannot assign values to an array larger than it's initial allocated memory size."),Object(a.b)("h3",{id:"slices"},"Slices"),Object(a.b)("p",null,"Slices also represent an array. Slices are easier to work with."),Object(a.b)("p",null,"While ",Object(a.b)("inlineCode",{parentName:"p"},"len")," shows the length, ",Object(a.b)("inlineCode",{parentName:"p"},"cap")," shows the capacity of how it can grow."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"append")," can be used to append to a slice."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    a := [5]int{0,1,2,3,4}\n    s1 := a[0:3]\n    s2 := a[2:5]\n    fmt.Println(a, s1, s2)\n    // prints [0 1 2 3 4] [0 1 2] [2 3 4]\n    a[2] = 88\n    fmt.Println(a, s1, s2)\n    // prints [0 1 88 3 4] [0 1 88] [2 3 88]\n    s1 = s1[0:4]\n    fmt.Println(a, s1, s2)\n    // prints [0 1 88 3 4] [0 1 88 3] [88 3 4]\n    s2 = s2[0:4] // throws an error\n    s2 = append(s2, 5) // returns a new slice\n    fmt.Println(a, s1, s2)\n    // prints [0 1 88 3 4] [0 1 88 3] [88 3 4 5]\n    s2[0] = 999\n    // prints [0 1 88 3 4] [0 1 88 3] [999 3 4 5]\n\n    // Declaring an array on its own\n    s3 := []int{1, 2, 3}\n    fmt.Println(s3) // prints [1 2 3]\n    s3 = append(s3, 4, 5)\n    fmt.Println(s3) // [1 2 3 4 5]\n}\n')),Object(a.b)("h3",{id:"maps"},"Maps"),Object(a.b)("p",null,"Slices are good for storing collections, but the only way to get elements back is by the index."),Object(a.b)("p",null,"While in most collections you have dictionaries, hashes, hash maps, Go refers to these data structures as ",Object(a.b)("inlineCode",{parentName:"p"},"Maps"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'func main() {\n    ages := map[string]float64{}\n    ages["Alice"] = 12\n    ages["Bob"] = 9\n    fmt.Println(ages) // prints map[Alice:12 Bob:9]\n}\n')),Object(a.b)("p",null,"Similar to arrays or slices, we can use a literal to prefill the values."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'func main() {\n    ages := map[string]float64{"Alice":12, "Bob":9}\n    fmt.Println(ages) // prints map[Alice:12 Bob:9]\n    for name, age := range ages {\n        fmt.Println(name, age)\n    }\n\n    for _, age := range ages {\n        fmt.Println(age)\n    }\n\n    for name := range ages {\n        fmt.Println(name)\n    }\n}\n')),Object(a.b)("h2",{id:"custom-types"},"Custom Types"),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"type")," keyword to define a type and it's underlying type."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\ntype Minutes int\ntype Hours int\n\nfunc main() {\n    minutes := Minutes(37)\n    hours := Hours(37)\n\n    fmt.Println(minutes, hours)\n}\n')),Object(a.b)("p",null,"We can also compare custom types to their underlying type. However two custom types with the same underlying type cannot be compared."),Object(a.b)("p",null,"The more commonly used aggregate type is a Struct which is how we can base custom types on them."),Object(a.b)("h3",{id:"methods"},"Methods"),Object(a.b)("p",null,"Define new behaviours for types."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "strings"\n)\n\ntype Title string\n\n// the following has an extra reciever arg t\nfunc (t Title) FixCase() string {\n    return strings.Title(string(t))\n}\n\nfunc main() {\n    name := Title("the matrix")\n    fixed := name.FixCase()\n    fmt.Println(fixed)\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\ntype Hours int\n\nfunc (h *Hours) Increment() Hours {\n  *h = (*h + 1) % 24\n  return *h\n}\n\nfunc main() {\n  hours := Hours(23)\n  hours.Increment()\n  fmt.Println(hours) // Prints "0"\n}\n')),Object(a.b)("h3",{id:"structs"},"Structs"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\ntype Monitor struct {\n    Resolution  string\n    Connector   string\n    Value       float64 // fields with a name and a type\n}\n\nfunc main() {\n    monitor := Monitor{}\n    monitor.Resolution = "1080p"\n    monitor.Connector = "HDMI"\n    monitor.Value = 249.99\n    fmt.Println(monitor.Resolution, monitor.Connector, monitor.Value)\n\n    // could also go monitor := Monitor{"1080p", "HDMI", 249.99}\n}\n')),Object(a.b)("p",null,"If you init and allocate a struct, it will initialise with some default values."),Object(a.b)("p",null,'You can also add a "exported" get and set method to help enforce the concept of private variables.'),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\ntype Clock struct {\n  Hours int\n  Minutes int\n}\n\n// DEFINE A "Noon" FUNCTION HERE\nfunc Noon(hours int, min int) Clock {\n  c := Clock{}\n  c.Hours = 12\n  c.Minutes = 0\n\n  return c\n}\n\nfunc main() {\n  c := Noon(12, 10)\n  fmt.Println(c)\n}\n')),Object(a.b)("h3",{id:"interfaces"},"Interfaces"),Object(a.b)("p",null,"When you have a concrete type, you know what it is and what it can do. An interface is defining what something is but not what it can do."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),"type FourLegged interface {\n    Walk()\n    Sit()\n}\n")),Object(a.b)("p",null,"Implementation in practise"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'type Part interface {\n    Specs() string\n    Price() string\n}\n\nfunc Summary(part Part) string {\n    return part.Specs() + "/n" + part.Price()\n}\n')),Object(a.b)("p",null,"If we create slice with that type as well, then we can use that slice for anything that satisfies the interface. This could allow us to slice, append to the slice and use the range to iterate through."),Object(a.b)("h4",{id:"challenge"},"Challenge"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'// calendar.go\npackage calendar\n\nimport "fmt"\n\ntype Calendar struct {\n  Year int\n  Month int\n  Day int\n}\n\nfunc (c Calendar) Display() {\n  fmt.Printf("%04d-%02d-%02d", c.Year, c.Month, c.Day)\n}\n\n// clock.go\npackage clock\n\nimport "fmt"\n\ntype Clock struct {\n    Hours int\n    Minutes int\n}\n\nfunc (c Clock) Display() {\n    fmt.Printf("%02d:%02d", c.Hours, c.Minutes)\n}\n\n// schedule.go\npackage schedule\n\n// DECLARE A Displayable INTERFACE HERE\ntype Displayable interface {\n    Display()\n}\n// DECLARE A Print FUNCTION HERE\nfunc Print(display Displayable) {\n    display.Display()\n}\n')),Object(a.b)("h2",{id:"concurrency"},"Concurrency"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc longTask() {\n    fmt.Println("Starting long task")\n    time.Sleep(3 * time.Second)\n    fmt.Println("Long task finished")\n}\n\nfunc main() {\n    go longTask()\n    go longTask()\n    go longTask()\n    time.Sleep(4 * time.Second) // just for show - we can use channels instead\n}\n')),Object(a.b)("h3",{id:"channels"},"Channels"),Object(a.b)("p",null,"We can't simply try to use the time.Sleep with the keyword go given that the go routine doesn't give a value right away."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "math/rand"\n    "time"\n)\n\nfunc longTask() int {\n    delay := rand.Intn(5)\n    fmt.Println("Starting long task")\n    time.Sleep(time.Duration(delay) * time.Second)\n    fmt.Println("Long task finished")\n    return delay\n}\n\nfunc main() {\n    rand.Seed(time.Now().Unix())\n    time := longTask()\n    fmt.Println("Took", time, "seconds")\n}\n')),Object(a.b)("p",null,"What we can do instead is use a channel to pass a message back to the main go routine."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "math/rand"\n    "time"\n)\n\n// notice we get rid of the int return value\nfunc longTask(channel chan int) {\n    delay := rand.Intn(5)\n    fmt.Println("Starting long task")\n    time.Sleep(time.Duration(delay) * time.Second)\n    fmt.Println("Long task finished")\n    channel <- delay\n}\n\nfunc main() {\n    rand.Seed(time.Now().Unix())\n    channel := make(chan int)\n    for i := 1; i <= 3; i++ {\n        go longTask(channel)\n    }\n    // uses the arrow prefix\n    for i := 1; i <= 3; i++ {\n        fmt.Println("Took", <-channel, "seconds")\n    }\n}\n')),Object(a.b)("h4",{id:"challenge-1"},"Challenge"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"package channels\n\nfunc readFromChannel() string {\n    // CREATE A CHANNEL FOR string VALUES HERE\n    channel := make(chan string)\n    // HERE, CALL writeToChannel AS A GOROUTINE, AND PASS IT YOUR CHANNEL\n    go writeToChannel(channel)\n    // HERE, READ A STRING FROM YOUR CHANNEL AND RETURN IT\n    return <-channel\n}\n")),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"In the course, we've looked at:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Packages"),Object(a.b)("li",{parentName:"ul"},"Type"),Object(a.b)("li",{parentName:"ul"},"Functions"),Object(a.b)("li",{parentName:"ul"},"Go format tool"),Object(a.b)("li",{parentName:"ul"},"Arrays, Slices and Maps"),Object(a.b)("li",{parentName:"ul"},"Structs for field aggregation - Adding methods - Interfaces"),Object(a.b)("li",{parentName:"ul"},"Using Go routines and Channels")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Lang-Overview.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-lang-overview-md-1e44c675dc9c87c057a7.js.map