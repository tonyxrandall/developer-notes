(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{Zm2u:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Basic-Strings.md"}});var o={_frontmatter:s},l=a.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(r.b)(l,i({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"basic-string-functions"},"Basic String Functions"),Object(r.b)("p",null,"This is a simple example of the implementation of some basic functions using the ",Object(r.b)("inlineCode",{parentName:"p"},"strings")," package. The ",Object(r.b)("inlineCode",{parentName:"p"},"unicode")," package is used for the example using runes."),Object(r.b)("p",null,"If building a file, ensure to have the correct imports and package name:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'package stringexamples\n\nimport (\n    "strings"\n    "unicode"\n)\n')),Object(r.b)("p",null,"...and for testing:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'package stringexamples\n\nimport (\n    "testing"\n)\n')),Object(r.b)("h2",{id:"compare"},"Compare"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'// Test module\nfunc TestStringsCompare(t *testing.T) {\n    a := "Hello, World!"\n    b := "Hello, World!"\n    if CompareStrings(a, b) != 0 {\n        t.Fatalf("Expected 0")\n    }\n\n    a = "Hello, World!"\n    b = "Hello, Worl!"\n    if CompareStrings(a, b) != 1 {\n        t.Fatalf("Expected 1")\n    }\n\n    a = "Hello, World!"\n    b = "Hello, World!!"\n    if CompareStrings(a, b) != -1 {\n        t.Fatalf("Expected -1")\n    }\n}\n\n// CompareStrings compares two string values and returns an int\nfunc CompareStrings(a string, b string) int {\n    return strings.Compare(a, b)\n}\n')),Object(r.b)("h2",{id:"contains"},"Contains"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'// Test module\nfunc TestContainsString(t *testing.T) {\n    a := "Hello, World!"\n    b := "Hello, World"\n    if ContainsString(a, b) != true {\n        t.Fatalf("Expected true")\n    }\n\n    a = "Hello, World!"\n    b = "Hway"\n    if ContainsString(a, b) != false {\n        t.Fatalf("Expected false")\n    }\n}\n\n// ContainsString checks if string contains substr\nfunc ContainsString(s string, substr string) bool {\n    return strings.Contains(s, substr)\n}\n')),Object(r.b)("h2",{id:"join"},"Join"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'// Test module\nfunc TestJoinString(t *testing.T) {\n    a := []string{"Hello", "World!"}\n    b := "Hello, World!"\n\n    res := JoinString(a, ", ")\n\n    if res != b {\n        t.Fatalf("Expected %s but got %s", b, res)\n    }\n}\n\n// JoinString turns a string slice into a string\nfunc JoinString(str []string, de string) string {\n    return strings.Join(str, de)\n}\n')),Object(r.b)("h2",{id:"split"},"Split"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'// Test module\nfunc TestSplitString(t *testing.T) {\n    a := "Hello World!"\n    b := []string{"Hello", "World!"}\n\n    res := SplitString(a, " ")\n\n    for i, v := range res {\n        if v != b[i] {\n            t.Fatalf("Expected string %s but got %s", v, b[i])\n        }\n    }\n}\n\n// SplitString turns a string in a []string with delimiter\nfunc SplitString(str string, de string) []string {\n    return strings.Split(str, de)\n}\n')),Object(r.b)("h2",{id:"lower-case-a-string-using-map"},"Lower case a string using Map"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'// Test module\nfunc TestMapToLowerString(t *testing.T) {\n    a := "Hello, World!"\n    b := "hello, world!"\n\n    res := MapOverStringToLower(a)\n\n    if res != b {\n        t.Fatalf("Expected %s but got %s", b, res)\n    }\n}\n\n// MapOverStringToLower uses map to lower case a string\nfunc MapOverStringToLower(str string) string {\n    toLower := func(r rune) rune {\n        return unicode.ToLower(r)\n    }\n\n    return strings.Map(toLower, str)\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Basic-Strings.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-basic-strings-md-5730f4cba536774949fc.js.map