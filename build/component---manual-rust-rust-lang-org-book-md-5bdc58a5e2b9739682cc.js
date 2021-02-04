(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{"6H7D":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Rust/Rust-Lang-Org-Book.md"}});var o={_frontmatter:l},s=r.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(s,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rust-lang-book"},"Rust Lang Book"),Object(a.b)("p",null,"Resources for this can be found from ",Object(a.b)("a",i({parentName:"p"},{href:"https://doc.rust-lang.org/book/foreword.html"}),"here"),"."),Object(a.b)("h2",{id:"hello-world"},"Hello World"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'// main.rs\nfn main() {\n    println!("Hello, world!");\n}\n')),Object(a.b)("p",null,"Note: ",Object(a.b)("inlineCode",{parentName:"p"},"println!")," calls a Rust macro. If it called a function instead, it would be entered as println (without the !). For now, you just need to know that using a ! means that you’re calling a macro instead of a normal function."),Object(a.b)("h2",{id:"hello-cargo"},"Hello Cargo"),Object(a.b)("p",null,"Cargo is Rust’s build system and package manager. Most Rustaceans use this tool to manage their Rust projects because Cargo handles a lot of tasks for you, such as building your code, downloading the libraries your code depends on, and building those libraries. (We call libraries your code needs dependencies.)"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"$ cargo new hello_cargo\n$ cd hello_cargo\n")),Object(a.b)("p",null,"The first command creates a new directory called hello_cargo. We’ve named our project hello_cargo, and Cargo creates its files in a directory of the same name."),Object(a.b)("p",null,"Go into the hello_cargo directory and list the files. You’ll see that Cargo has generated two files and one directory for us: a Cargo.toml file and a src directory with a main.rs file inside. It has also initialized a new Git repository along with a .gitignore file."),Object(a.b)("p",null,"This will be the ",Object(a.b)("inlineCode",{parentName:"p"},"cargo.toml")," file."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'[package]\nname = "hello_cargo"\nversion = "0.1.0"\nauthors = ["Your Name <you@example.com>"]\nedition = "2018"\n\n[dependencies]\n')),Object(a.b)("h2",{id:"building-and-running-from-a-cargo-project"},"Building and running from a cargo project"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"$ cargo build\n# This command creates an executable file in target/debug/hello_cargo (or target\\debug\\hello_cargo.exe on Windows) rather than in your current directory. You can run the executable with this command:\n$ ./target/debug/hello_cargo\n> Hello, world!\n# We can also run with cargo run\n$ cargo run\n# Cargo also provides a command called cargo check. This command quickly checks your code to make sure it compiles but doesn’t produce an executable\n$ cargo check\n")),Object(a.b)("h2",{id:"building-for-release"},"Building for release"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"$ cargo build --release\n")),Object(a.b)("p",null,"This command will create an executable in target/release instead of target/debug. The optimizations make your Rust code run faster, but turning them on lengthens the time it takes for your program to compile. This is why there are two different profiles: one for development, when you want to rebuild quickly and often, and another for building the final program you’ll give to a user that won’t be rebuilt repeatedly and that will run as fast as possible. If you’re benchmarking your code’s running time, be sure to run ",Object(a.b)("inlineCode",{parentName:"p"},"cargo build --release")," and benchmark with the executable in target/release."),Object(a.b)("h2",{id:"file-layout"},"File layout"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-shell"}),"cargo new guessing_game\n")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'// guessing_game/src/main.rs\nuse std::io;\n\nfn main() {\n    println!("Guess the number!");\n\n    println!("Please input your guess.");\n\n    let mut guess = String::new();\n\n    io::stdin().read_line(&mut guess)\n        .expect("Failed to read line");\n\n    println!("You guessed: {}", guess);\n}\n')),Object(a.b)("p",null,"This code contains a lot of information, so let’s go over it line by line. To obtain user input and then print the result as output, we need to bring the io (input/output) library into scope. The io library comes from the standard library (which is known as std):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),"use std::io;\n")),Object(a.b)("p",null,"By default, Rust brings only a few types into the scope of every program in the prelude. If a type you want to use isn’t in the prelude, you have to bring that type into scope explicitly with a use statement. Using the ",Object(a.b)("inlineCode",{parentName:"p"},"std::io")," library provides you with a number of useful features, including the ability to accept user input."),Object(a.b)("p",null,"The following example shows how to use ",Object(a.b)("inlineCode",{parentName:"p"},"mut")," before the variable name to make a variable mutable:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),"let foo = 5; // immutable\nlet mut bar = 5; // mutable\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"::")," syntax in the ",Object(a.b)("inlineCode",{parentName:"p"},"::new")," line indicates that new is an associated function of the ",Object(a.b)("inlineCode",{parentName:"p"},"String")," type. An associated function is implemented on a type, in this case String, rather than on a particular instance of a String. Some languages call this a static method."),Object(a.b)("p",null,"This new function creates a new, empty string. You’ll find a new function on many types, because it’s a common name for a function that makes a new value of some kind."),Object(a.b)("p",null,"To summarize, the ",Object(a.b)("inlineCode",{parentName:"p"},"let mut guess = String::new();")," line has created a mutable variable that is currently bound to a new, empty instance of a String."),Object(a.b)("p",null,"Recall that we included the input/output functionality from the standard library with use ",Object(a.b)("inlineCode",{parentName:"p"},"std::io"),"; on the first line of the program. Now we’ll call an associated function, ",Object(a.b)("inlineCode",{parentName:"p"},"stdin"),", on ",Object(a.b)("inlineCode",{parentName:"p"},"io"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'io::stdin().read_line(&mut guess)\n    .expect("Failed to read line");\n')),Object(a.b)("p",null,"If we hadn’t listed the ",Object(a.b)("inlineCode",{parentName:"p"},"use std::io")," line at the beginning of the program, we could have written this function call as ",Object(a.b)("inlineCode",{parentName:"p"},"std::io::stdin"),". The stdin function returns an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"std::io::Stdin"),", which is a type that represents a handle to the standard input for your terminal."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"&")," indicates that this argument is a reference, which gives you a way to let multiple parts of your code access one piece of data without needing to copy that data into memory multiple times. References are a complex feature, and one of Rust’s major advantages is how safe and easy it is to use references."),Object(a.b)("p",null,"As mentioned earlier, ",Object(a.b)("inlineCode",{parentName:"p"},"read_line")," puts what the user types into the string we’re passing it, but it also returns a value—in this case, an ",Object(a.b)("inlineCode",{parentName:"p"},"io::Result"),". Rust has a number of types named ",Object(a.b)("inlineCode",{parentName:"p"},"Result")," in its standard library: a generic ",Object(a.b)("inlineCode",{parentName:"p"},"Result")," as well as specific versions for submodules, such as ",Object(a.b)("inlineCode",{parentName:"p"},"io::Result"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Result")," types are enumerations, often referred to as ",Object(a.b)("inlineCode",{parentName:"p"},"enums"),". An enumeration is a type that can have a fixed set of values, and those values are called the enum’s variants."),Object(a.b)("p",null,"For Result, the variants are ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Err"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," variant indicates the operation was successful, and inside ",Object(a.b)("inlineCode",{parentName:"p"},"Ok")," is the successfully generated value. The ",Object(a.b)("inlineCode",{parentName:"p"},"Err")," variant means the operation failed, and ",Object(a.b)("inlineCode",{parentName:"p"},"Err")," contains information about how or why the operation failed."),Object(a.b)("h2",{id:"printing-values-with-the-println-placeholders"},"Printing values with the println placeholders"),Object(a.b)("p",null,"The set of curly brackets, ",Object(a.b)("inlineCode",{parentName:"p"},"{}"),", is a placeholder: think of ",Object(a.b)("inlineCode",{parentName:"p"},"{}")," as little crab pincers that hold a value in place. You can print more than one value using curly brackets: the first set of curly brackets holds the first value listed after the format string, the second set holds the second value, and so on. Printing multiple values in one call to println! would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'fn main() {\n    let x = 5;\n    let y = 10;\n\n    println!("x = {} and y = {}", x, y);\n}\n')),Object(a.b)("p",null,"This code would print x = 5 and y = 10."),Object(a.b)("h2",{id:"generating-a-random-number"},"Generating a random number"),Object(a.b)("p",null,"In this case, we would have to update our ",Object(a.b)("inlineCode",{parentName:"p"},"Cargo.toml")," file to include the ",Object(a.b)("inlineCode",{parentName:"p"},"rand")," crate"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-toml"}),'[dependencies]\nrand = "0.4.0"\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cargo build")," to install the dependency, but running ",Object(a.b)("inlineCode",{parentName:"p"},"cargo update")," would also update the version for the latest minor version."),Object(a.b)("p",null,"In use, we can now random generate a number:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'use std::io;\nuse rand::Rng;\n\nfn main() {\n    println!("Guess the number!");\n\n    let secret_number = rand::thread_rng().gen_range(1, 101);\n\n    println!("The secret number is: {}", secret_number);\n\n    println!("Please input your guess.");\n\n    let mut guess = String::new();\n\n    io::stdin().read_line(&mut guess)\n        .expect("Failed to read line");\n\n    println!("You guessed: {}", guess);\n}\n')),Object(a.b)("h2",{id:"comparing-a-guess-to-the-secret-number"},"Comparing a guess to the secret number"),Object(a.b)("p",null,"We can now use another standard library to help give more information on the accuracy of the guess:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'use std::io;\nuse std::cmp::Ordering;\nuse rand::Rng;\n\nfn main() {\n\n    // --snip--\n\n    let mut guess = String::new();\n\n    io::stdin().read_line(&mut guess)\n        .expect("Failed to read line");\n\n    let guess: u32 = guess.trim().parse()\n        .expect("Please type a number!");\n\n    println!("You guessed: {}", guess);\n\n    match guess.cmp(&secret_number) {\n        Ordering::Less => println!("Too small!"),\n        Ordering::Greater => println!("Too big!"),\n        Ordering::Equal => println!("You win!"),\n    }\n}\n')),Object(a.b)("p",null,"Note here that we are using some standard string methods to trim, parse and expect a number type for the ",Object(a.b)("inlineCode",{parentName:"p"},"guess")," variable."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"parse")," method on strings parses a string into some kind of number. Because this method can parse a variety of number types, we need to tell Rust the exact number type we want by using ",Object(a.b)("inlineCode",{parentName:"p"},"let guess: u32"),". The colon (:) after guess tells Rust we’ll annotate the variable’s type. Rust has a few built-in number types; the u32 seen here is an unsigned, 32-bit integer. It’s a good default choice for a small positive number. You’ll learn about other number types in Chapter 3. Additionally, the ",Object(a.b)("inlineCode",{parentName:"p"},"u32")," annotation in this example program and the comparison with ",Object(a.b)("inlineCode",{parentName:"p"},"secret_number")," means that Rust will infer that ",Object(a.b)("inlineCode",{parentName:"p"},"secret_number")," should be a ",Object(a.b)("inlineCode",{parentName:"p"},"u32")," as well. So now the comparison will be between two values of the same type!"),Object(a.b)("p",null,"The call to parse could easily cause an error. If, for example, the string contained ",Object(a.b)("inlineCode",{parentName:"p"},"A👍%"),', there would be no way to convert that to a number. Because it might fail, the parse method returns a Result type, much as the read_line method does (discussed earlier in "Handling Potential Failure with the Result Type"). We’ll treat this Result the same way by using the expect method again. If parse returns an Err Result variant because it couldn’t create a number from the string, the expect call will crash the game and print the message we give it. If parse can successfully convert the string to a number, it will return the Ok variant of Result, and expect will return the number that we want from the Ok value.'),Object(a.b)("h2",{id:"allowing-multiple-guesses-with-looping"},"Allowing Multiple Guesses with Looping"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'// --snip--\n\n    println!("The secret number is: {}", secret_number);\n\n    loop {\n        println!("Please input your guess.");\n\n        // --snip--\n\n        match guess.cmp(&secret_number) {\n            Ordering::Less => println!("Too small!"),\n            Ordering::Greater => println!("Too big!"),\n            Ordering::Equal => println!("You win!"),\n        }\n    }\n}\n')),Object(a.b)("p",null,"This is suboptimal as the only way to exit at the moment is to pass a string that cannot be passed to cause an error."),Object(a.b)("p",null,"What we can do instead is update this is break the loop at particular parts:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'// --snip--\n\n        match guess.cmp(&secret_number) {\n            Ordering::Less => println!("Too small!"),\n            Ordering::Greater => println!("Too big!"),\n            Ordering::Equal => {\n                println!("You win!");\n                break;\n            }\n        }\n    }\n}\n')),Object(a.b)("p",null,"We could also now update the ",Object(a.b)("inlineCode",{parentName:"p"},"parse")," method to handle and continue on errors now that we are looping:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'// --snip--\n\nio::stdin().read_line(&mut guess)\n    .expect("Failed to read line");\n\nlet guess: u32 = match guess.trim().parse() {\n    Ok(num) => num,\n    Err(_) => continue,\n};\n\nprintln!("You guessed: {}", guess);\n\n// --snip--\n')),Object(a.b)("h2",{id:"the-final-code"},"The final code"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-rust"}),'use std::io;\nuse std::cmp::Ordering;\nuse rand::Rng;\n\nfn main() {\n    println!("Guess the number!");\n\n    let secret_number = rand::thread_rng().gen_range(1, 101);\n\n    loop {\n        println!("Please input your guess.");\n\n        let mut guess = String::new();\n\n        io::stdin().read_line(&mut guess)\n            .expect("Failed to read line");\n\n        let guess: u32 = match guess.trim().parse() {\n            Ok(num) => num,\n            Err(_) => continue,\n        };\n\n        println!("You guessed: {}", guess);\n\n        match guess.cmp(&secret_number) {\n            Ordering::Less => println!("Too small!"),\n            Ordering::Greater => println!("Too big!"),\n            Ordering::Equal => {\n                println!("You win!");\n                break;\n            }\n        }\n    }\n}\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Rust/Rust-Lang-Org-Book.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-rust-rust-lang-org-book-md-5bdc58a5e2b9739682cc.js.map