(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{yVRR:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return l})),r.d(n,"default",(function(){return s}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var a=r("/FXl"),t=r("TjRS");r("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Cheat-Sheet.md"}});var b={_frontmatter:l},c=t.a;function s(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,["components"]);return Object(a.b)(c,o({},b,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ruby-cheat-sheet"},"Ruby Cheat Sheet"),Object(a.b)("h2",{id:"loops"},"Loops"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),"i = 0\nwhile i < 5 do\n   puts i\n   i += 1\nend\n")),Object(a.b)("h2",{id:"classes"},"Classes"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),'#!/usr/bin/ruby\n\nclass Sample\n   def hello\n      helloWorld = "Hello, World!"\n      helloWorld\n   end\nend\n\n# Now using above class to create objects\nobject = Sample. new\nobject.hello\n')),Object(a.b)("h2",{id:"arrays"},"Arrays"),Object(a.b)("p",null,"A great resource for seeing the ",Object(a.b)("a",o({parentName:"p"},{href:"https://ruby-doc.org/core-2.5.0/Array.html"}),"Ruby Array methods"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),'ary = [1, "two", 3.0] #=> [1, "two", 3.0]\nary = Array.new    #=> []\nArray.new(3)       #=> [nil, nil, nil]\nArray.new(3, true) #=> [true, true, true]\nArray.new(4) { Hash.new }  #=> [{}, {}, {}, {}]\nArray.new(4) {|i| i.to_s } #=> ["0", "1", "2", "3"]\nempty_table = Array.new(3) { Array.new(3) }\n# => [[nil, nil, nil], [nil, nil, nil], [nil, nil, nil]]\n')),Object(a.b)("h3",{id:"accessing-elements"},"Accessing Elements"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),"arr = [1, 2, 3, 4, 5, 6]\narr[2]    #=> 3\narr[100]  #=> nil\narr[-3]   #=> 4\narr[2, 3] #=> [3, 4, 5]\narr[1..4] #=> [2, 3, 4, 5]\narr[1..-3] #=> [2, 3, 4]\narr.at(0) #=> 1\n")),Object(a.b)("h3",{id:"accessing-with-an-error-thrown-for-out-of-bounds"},"Accessing with an error thrown for out of bounds"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),"arr = ['a', 'b', 'c', 'd', 'e', 'f']\narr.fetch(100) #=> IndexError: index 100 outside of array bounds: -6...6\narr.fetch(100, \"oops\") #=> \"oops\"\n")),Object(a.b)("h2",{id:"string-methods"},"String methods"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-ruby"}),'# Examples\na.gsub(/[^a-z]/i, "").downcase.chars.sort.join! # update variable a\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Cheat-Sheet.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-cheat-sheet-md-43994b9761274dfa51db.js.map