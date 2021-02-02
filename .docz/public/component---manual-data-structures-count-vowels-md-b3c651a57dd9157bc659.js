(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{ATPm:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Data-Structures/Count-Vowels.md"}});var l={_frontmatter:c},o=a.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(o,u({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"count-vowels"},"Count Vowels"),Object(r.b)("p",null,"Given a string arg, count the vowels and return the number."),Object(r.b)("h2",{id:"go"},"Go"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-go"}),'package countvowels\n\nimport "regexp"\n\n// CountVowels should have a comment documenting it.\nfunc CountVowels(arg string) int {\n  return len(regexp.MustCompile(`[^aeiouAEIOU]`).ReplaceAllString(arg, ""))\n}\n')),Object(r.b)("h2",{id:"java"},"Java"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-java"}),'class CountVowels {\n    Integer run(String inputString) {\n        return inputString.replaceAll("[^aeiouAEIOU]", "").length();\n    }\n}\n')),Object(r.b)("h2",{id:"javascript"},"JavaScript"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-javascript"}),"const run = (arg) => arg.replace(/[^aeiou]/gi, '').length;\n")),Object(r.b)("h2",{id:"php"},"PHP"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-php"}),'<?php\n\nfunction countVowels($str)\n{\n    return strlen(preg_replace("/[^aeiou]/i", "", $str));\n}\n')),Object(r.b)("h2",{id:"python"},"Python"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-python"}),'import re\n\ndef run(src):\n    return len(re.sub("[^aeiouAEUIO]", "", src))\n')),Object(r.b)("h2",{id:"ruby"},"Ruby"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-ruby"}),"class CountVowels\n    def self.count(input)\n        flt = input.gsub(/[^aeiou]/i, '')\n        return flt.length\n    end\nend\n")),Object(r.b)("h2",{id:"rust"},"Rust"),Object(r.b)("pre",null,Object(r.b)("code",u({parentName:"pre"},{className:"language-rust"}),'extern crate regex;\nuse regex::Regex;\n\npub fn count_vowels(s: String) -> usize {\n    return Regex::new("[^aeiouAEIOU]").unwrap().replace_all(&s, "").len();\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Count-Vowels.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-data-structures-count-vowels-md-b3c651a57dd9157bc659.js.map