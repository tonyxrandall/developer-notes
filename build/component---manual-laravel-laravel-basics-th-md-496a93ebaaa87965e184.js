(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{RQOo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Laravel/Laravel-Basics-TH.md"}});var o={_frontmatter:b},i=l.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(i,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"laravel-4-basics"},"LARAVEL 4 BASICS"),Object(n.b)("h2",{id:"getting-started-with-laravel"},"Getting Started with Laravel"),Object(n.b)("h4",{id:"installing-virtualbox-homestead--vagrant"},"Installing VirtualBox, Homestead & Vagrant"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Download VirtualBox for your OS from their website"),Object(n.b)("li",{parentName:"ol"},"Download Vagrant for your OS from their website"),Object(n.b)("li",{parentName:"ol"},"Use a command to install install Homestead")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"vagrant box add laravel/homestead")),Object(n.b)("p",null,"In a shell, check that you have SSH."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"cd ~\nls -la\n# check for .ssh\n")),Object(n.b)("p",null,"If not, you can generate a key."),Object(n.b)("p",null,"In terminal:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'ssh-keygen -t rsa -C "youremail@email.com".\n')),Object(n.b)("p",null,"There is also a great guide on GitHub."),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://help.github.com/articles/generating-an-ssh-key/"}),"https://help.github.com/articles/generating-an-ssh-key/")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Init the Homestead.yaml file ")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"bash init.sh")),Object(n.b)("p",null,"In ~/Homestead, alter the Homestead.yaml file."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Replace "me" with the User'),Object(n.b)("li",{parentName:"ol"},'Under "folders" where it has the map and to, change the to direction to have .../Sites if you don\'t want the default and to follow along with TH.')),Object(n.b)("p",null,"Sites we can change to anything. Eg. laravel.dev"),Object(n.b)("p",null,"Ensure sites is okay too and that the Sites/",Object(n.b)("inlineCode",{parentName:"p"},"<here>"),"/",Object(n.b)("inlineCode",{parentName:"p"},"<here>")," is laravel-basics/public"),Object(n.b)("p",null,"Run the Vagrant Up command in terminal ",Object(n.b)("inlineCode",{parentName:"p"},"vagrant up")),Object(n.b)("p",null,"If there is a host issue, change the Homestead.yaml host."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Getting into the box ")),Object(n.b)("p",null,"Connect via SSH"),Object(n.b)("p",null,"run ",Object(n.b)("inlineCode",{parentName:"p"},"vagrant ssh")),Object(n.b)("h4",{id:"install-laravel"},"Install Laravel"),Object(n.b)("p",null,"Ensure composer is installed on your external SSH OS."),Object(n.b)("p",null,"Run ",Object(n.b)("inlineCode",{parentName:"p"},'composer global require "laravel/installer"')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Composer Create-Project ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"composer create-project --prefer-dist laravel/laravel laravel-basics\n")),Object(n.b)("p",null,"Alternatively..."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"laravel new laravel-basics\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note")," laravel-basics can be swapped for anything."),Object(n.b)("p",null,"Run pwd and check this against what you have in ~/.homestead/Homestead.yaml"),Object(n.b)("p",null,"Then jump to the site (127.0.0.1:8000) to see if it is running successfully."),Object(n.b)("p",null,"To get rid of the 127.0.0.1, we can change it to another host."),Object(n.b)("p",null,"cd /etc from the Homestead file and adjust the hosts file in a text editor to make the website easier to navigate to."),Object(n.b)("h4",{id:"laravel-folder-structure"},"Laravel Folder Structure"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"project-setup"},"Project Setup"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"laravel-controllers"},"Laravel Controllers"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"laravel-and-databases"},"Laravel and Databases"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"blade-and-forms"},"Blade and Forms"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"validation--flash-messages"},"Validation & Flash Messages"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"continuing-crud"},"Continuing CRUD"),Object(n.b)("hr",null),Object(n.b)("h2",{id:"relating-data"},"Relating Data"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Laravel/Laravel-Basics-TH.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-laravel-laravel-basics-th-md-496a93ebaaa87965e184.js.map