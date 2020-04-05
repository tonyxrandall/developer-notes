(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{VAcK:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),i=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elixir/Elixir-Debugging.md"}});var l={_frontmatter:b},c=i.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(r.b)(c,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"debugging-in-elixir"},"Debugging In Elixir"),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"IO.inspect")," or ",Object(r.b)("inlineCode",{parentName:"p"},"IEx.pry"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-elixir"}),'# inspect\n[1, 2, 3]\n|> IO.inspect(label: "before")\n|> Enum.map(&(&1 * 2))\n|> IO.inspect(label: "after")\n|> Enum.sum\n\n# pry\ndef some_fun(a, b, c) do\n  require IEx; IEx.pry\n  ...\nend\n')),Object(r.b)("h2",{id:"other-resources"},"Other Resources"),Object(r.b)("p",null,"Other resources can be found at ",Object(r.b)("a",a({parentName:"p"},{href:"https://elixir-lang.org/getting-started/debugging.html"}),"https://elixir-lang.org/getting-started/debugging.html")),Object(r.b)("h2",{id:"ioinspect2"},"IO.Inspect/2"),Object(r.b)("p",null,"What makes ",Object(r.b)("inlineCode",{parentName:"p"},"IO.inspect(item, opts \\\\ [])")," really useful in debugging is that it returns the item argument passed to it without affecting the behavior of the original code."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-elixir"}),'(1..10)\n|> IO.inspect\n|> Enum.map(fn x -> x * 2 end)\n|> IO.inspect\n|> Enum.sum\n|> IO.inspect\n\n[1, 2, 3]\n|> IO.inspect(label: "before")\n|> Enum.map(&(&1 * 2))\n|> IO.inspect(label: "after")\n|> Enum.sum\n\n# 3\ndef some_fun(a, b, c) do\n  IO.inspect binding()\n  ...\nend\n')),Object(r.b)("p",null,"Outputs:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-shell"}),'# 1\n1..10\n[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n110\n\n# 2\nbefore: [1, 2, 3]\nafter: [2, 4, 6]\n\n# 3\n[a: :foo, b: "bar", c: :baz]\n')),Object(r.b)("h2",{id:"iexpry0"},"IEx.pry/0"),Object(r.b)("p",null,"Similar to Ruby's ",Object(r.b)("inlineCode",{parentName:"p"},"binding.pry"),". Will open an interactive shell."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-elixir"}),"def some_fun(a, b, c) do\n  require IEx; IEx.pry\n  ...\nend\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elixir/Elixir-Debugging.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elixir-elixir-debugging-md-8adbcf3fd27fc518688f.js.map