(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{XAe4:function(e,n,s){"use strict";s.r(n),s.d(n,"_frontmatter",(function(){return m})),s.d(n,"default",(function(){return i}));s("1c7q"),s("abGl"),s("gZHo"),s("Fdmb"),s("Ir+3"),s("2mQt"),s("mXGw");var a=s("/FXl"),t=s("TjRS");s("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Blocks-Procs-Lambdas.md"}});var o={_frontmatter:m},c=t.a;function i(e){var n=e.components,s=function(e,n){if(null==e)return{};var s,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,["components"]);return Object(a.b)(c,r({},o,s,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"blocks-procs-and-lambdas"},"Blocks, Procs and Lambdas"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ruby"}),'def block_message_printer\n    message = "Welcome to Block Message Printer"\n    if block_given?\n        yield\n    end\n    puts "But in this function/method message is :: #{message}"\nend\n\nmessage = gets\nblock_message_printer { puts "This message remembers message :: #{message}" }\n\n#####################################################################################\n\ndef proc_message_printer(my_proc)\n    message = "Welcome to Proc Message Printer"\n    my_proc.call\n    puts "But in this function/method message is :: #{message}"\nend\n\n\nmy_proc = proc { puts "This message remembers message :: #{message}" }\nproc_message_printer(my_proc)\n\n######################################################################################\n\ndef lambda_message_printer(my_lambda)\n    message = "Welcome to Lambda Message Printer"\n    my_lambda.call\n    puts "But in this function/method message is :: #{message}"\nend\n\nmy_lambda = -> { puts "This message remembers message :: #{message}" }\nlambda_message_printer(my_lambda)\n\n######################################################################################\n')))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Blocks-Procs-Lambdas.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-blocks-procs-lambdas-md-5cca5495b17cec4d8b22.js.map