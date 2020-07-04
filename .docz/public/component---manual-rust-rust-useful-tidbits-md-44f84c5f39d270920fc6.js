(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{t9VT:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Rust/Rust-Useful-Tidbits.md"}});var i={_frontmatter:l},c=r.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,s({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"useful-tidbits"},"Useful Tidbits"),Object(a.b)("h2",{id:"importing-crates-vs-std-lib"},"Importing crates vs std lib"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-rust"}),"// for extenal dependencies\nextern crate clap;\nuse clap::App;\n// for standard Rust libraries\nuse std::fs;\n")),Object(a.b)("h2",{id:"reading-yaml"},"Reading YAML"),Object(a.b)("p",null,"Note that this is being done by using the ",Object(a.b)("inlineCode",{parentName:"p"},"clap")," crate that is used for CLI tools - may need to update for appropraite use with ",Object(a.b)("inlineCode",{parentName:"p"},"rust-yaml"),":"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-rust"}),'#[macro_use]\nextern crate clap;\nuse clap::App;\n\nfn main() {\n  let yaml = load_yaml!("cli.yml");\n  println!("{:#?}", yaml);\n}\n')),Object(a.b)("h2",{id:"reading-json"},"Reading JSON"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-rust"}),'#[macro_use]\nextern crate serde_json;\n\nuse std::path::Path;\nuse std::fs::File;\n\nfn main() {\n    let json_file_path = Path::new("src/test.json");\n    let json_file = File::open(json_file_path).expect("file not found");\n    let json: serde_json::Value = serde_json::from_reader(json_file).expect("JSON was not well-formatted");\n    println!("{:#?}", json);\n}\n')),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-shell"}),'Object(\n    {\n        "id": String(\n            "1234"\n        ),\n        "object": Object(\n            {\n                "array": Array(\n                    [\n                        Number(\n                            1\n                        ),\n                        Number(\n                            2\n                        ),\n                        Number(\n                            3\n                        )\n                    ]\n                )\n            }\n        )\n    }\n)\n')),Object(a.b)("h2",{id:"logging"},"Logging"),Object(a.b)("p",null,"You want to implement the Debug trait on your struct. Using #","[derive(Debug)]"," is the easiest solution. Then you can print it with {:?}:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-rust"}),'#[derive(Debug)]\nstruct MyStruct{\n    a: i32,\n    b: i32\n}\n\nfn main() {\n    let x = MyStruct{ a: 10, b: 20 };\n    println!("{:?}", x);\n}\n')),Object(a.b)("p",null,"In use:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-rust"}),'// assuming matches is a struct or array\nprintln!("{:?}", matches); // logging out structs or arrays\nprintln!("{:#?}", matches); // pretty print\nprintln!("{}", matches.occurrences_of("verbose"));\n')))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Rust/Rust-Useful-Tidbits.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-rust-rust-useful-tidbits-md-44f84c5f39d270920fc6.js.map