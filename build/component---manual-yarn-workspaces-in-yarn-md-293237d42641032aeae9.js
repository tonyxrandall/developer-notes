(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{"F+Yz":function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return l})),a.d(n,"default",(function(){return i}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var t=a("/FXl"),o=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Yarn/Workspaces-In-Yarn.md"}});var c={_frontmatter:l},s=o.a;function i(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(t.b)(s,r({},c,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"yarn-workspaces"},"Yarn Workspaces"),Object(t.b)("p",null,"Notes from this come from the official Yarn article ",Object(t.b)("a",r({parentName:"p"},{href:"https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/"}),"found here"),"."),Object(t.b)("h2",{id:"tldr-key-commands"},"tl;dr Key Commands"),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",r({parentName:"tr"},{align:null}),"Command"),Object(t.b)("th",r({parentName:"tr"},{align:null}),"Function"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",r({parentName:"tr"},{align:null}),"yarn config set workspaces-experimental true"),Object(t.b)("td",r({parentName:"tr"},{align:null}),"Initialises Workspaces")))),Object(t.b)("h2",{id:"introduction"},"Introduction"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Those who have tried splitting a project into multiple packages know how hard it is to make changes across multiple packages at one time. To make the process easier, some big projects adopted a monorepo approach, or multi-package repositories, which reduces the burden of writing code across packages.")),Object(t.b)("h2",{id:"lerna"},"Lerna"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"A tool to optimize workflow around managing multi-package repos."),Object(t.b)("li",{parentName:"ul"},"Being a wrapper of a package manager, Lerna can't manipulate contents of ",Object(t.b)("inlineCode",{parentName:"li"},"node_modules")," efficiently, hence Workspaces.")),Object(t.b)("h2",{id:"workspaces"},"Workspaces"),Object(t.b)("p",null,"Yarn Workspaces is a feature that allows users to install dependencies from multiple package.json files in subfolders of a single root package.json file, all in one go."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Enables faster, lighter installation. Also creates symlinks between Workspaces that depend on each other, and will ensure the consistencvy and correcvtness of all directories.")),Object(t.b)("h2",{id:"example-jest-workspace"},"Example: Jest Workspace"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-shell"}),"| jest/\n| ---- package.json\n| ---- packages/\n| -------- jest-matcher-utils/\n| ------------ package.json\n| -------- jest-diff/\n| ------------ package.json\n...\n")),Object(t.b)("p",null,"Example root ",Object(t.b)("inlineCode",{parentName:"p"},"package.json")," file. Generally kept as private."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "private": true,\n  "name": "jest",\n  "devDependencies": {\n    "chalk": "^2.0.1"\n  },\n  "workspaces": ["packages/*"]\n}\n')),Object(t.b)("h2",{id:"how-yarn-install-works-with-workspaces"},"How yarn install works with workspaces"),Object(t.b)("p",null,"Take the following two packages within Jest:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-json"}),'// First package.json\n{\n  "name": "jest-matcher-utils",\n  "description": "...",\n  "version": "20.0.3",\n  "license": "...",\n  "main": "...",\n  "browser": "...",\n  "dependencies": {\n    "chalk": "^1.1.3",\n    "pretty-format": "^20.0.3"\n  }\n}\n\n// Second package.json\n{\n  "name": "jest-diff",\n  "version": "20.0.3",\n  "license": "...",\n  "main": "...",\n  "browser": "...",\n  "dependencies": {\n    "chalk": "^1.1.3",\n    "diff": "^3.2.0",\n    "jest-matcher-utils": "^20.0.3",\n    "pretty-format": "^20.0.3"\n  }\n}\n')),Object(t.b)("p",null,"Running ",Object(t.b)("inlineCode",{parentName:"p"},"yarn install")," from anywhere within the projects yields the following:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-shell"}),"| jest/\n| ---- node_modules/\n| -------- chalk/\n| -------- diff/\n| -------- pretty-format/\n| -------- jest-matcher-utils/  (symlink) -> ../packages/jest-matcher-utils\n| ---- package.json\n| ---- packages/\n| -------- jest-matcher-utils/\n| ------------ node_modules/\n| ---------------- chalk/\n| ------------ package.json\n| -------- jest-diff/\n| ------------ node_modules/\n| ---------------- chalk/\n| ------------ package.json\n...\n")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Packages like ",Object(t.b)("inlineCode",{parentName:"p"},"diff"),", ",Object(t.b)("inlineCode",{parentName:"p"},"pretty-format")," and the symlink to ",Object(t.b)("inlineCode",{parentName:"p"},"jest-matcher-utils")," were hoisted to the root node_modules directory, making the installation faster and smaller. The package ",Object(t.b)("inlineCode",{parentName:"p"},"chalk")," however could not be moved to the root because the root already depends on a different, incompatible version of ",Object(t.b)("inlineCode",{parentName:"p"},"chalk"),".")),Object(t.b)("h2",{id:"managing-dependecies"},"Managing Dependecies"),Object(t.b)("p",null,"Run the installation within the desired ",Object(t.b)("inlineCode",{parentName:"p"},"package"),":"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Note: that Workspaces don’t have their own yarn.lock files, and the root yarn.lock contains all the dependencies for all the Workspaces. When you want to change a dependency inside a Workspace, the root yarn.lock will be changed as well as the Workspace’s package.json.")))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Yarn/Workspaces-In-Yarn.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-yarn-workspaces-in-yarn-md-293237d42641032aeae9.js.map