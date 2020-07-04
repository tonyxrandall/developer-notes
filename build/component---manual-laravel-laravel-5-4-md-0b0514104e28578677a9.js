(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{"Do/a":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Laravel/Laravel-5.4.md"}});var b={_frontmatter:i},o=l.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(o,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"laravel-54"},"Laravel 5.4"),Object(n.b)("h2",{id:"laravel-installation-and-composer"},"Laravel Installation and Composer"),Object(n.b)("p",null,"Laravel is a PHP framework - basic."),Object(n.b)("p",null,"Laravel also requires composer."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Commands"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'composer global require "laravel/installer"')),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Global install command laravel")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"laravel new blog")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Create a new blog")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"composer create-project --prefer-dist laravel/laravel blog")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Create Blog with Composer Create-Project")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"php artisan serve")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Serve the project locally")))),Object(n.b)("p",null,"If you are adding the ",Object(n.b)("inlineCode",{parentName:"p"},"laravel")," command globally, then ensure ",Object(n.b)("inlineCode",{parentName:"p"},"$HOME/.composer/vendor/bin:$PATH")," is in your path."),Object(n.b)("h2",{id:"basic-routing-and-views"},"Basic Routing and Views"),Object(n.b)("p",null,"There will be a whole bunch of files etc after generating a Laravel program."),Object(n.b)("p",null,"Likely we can ignore the middleware once we're in the situation that requires it."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"routes")," is where you will find the routes."),Object(n.b)("p",null,"This will do a standard ",Object(n.b)("inlineCode",{parentName:"p"},"Routes::get('/', function () {})")," for the ",Object(n.b)("inlineCode",{parentName:"p"},"blade")," template engine."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Defining")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Route::get('/welcome', function () {\n    return view('welcome')\n});\n")),Object(n.b)("h2",{id:"laravel-valet"},"Laravel Valet"),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"Dev Environments"),", you can see ",Object(n.b)("inlineCode",{parentName:"p"},"Homestead")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Valet")," - ",Object(n.b)("inlineCode",{parentName:"p"},"Homestead")," is a preconfigured Vagrant box which uses VMs."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Valet")," is specifically for the Mac. It is a Laravel Dev Environment. No need to set up or alter any files."),Object(n.b)("p",null,"If you go ",Object(n.b)("inlineCode",{parentName:"p"},"laravel new app")," you could straight away hit up ",Object(n.b)("inlineCode",{parentName:"p"},"app.dev"),"."),Object(n.b)("p",null,"This requires PHP 7.1. You can install ",Object(n.b)("inlineCode",{parentName:"p"},"Valet")," with composer as a global requirement. Run ",Object(n.b)("inlineCode",{parentName:"p"},"valet install"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"brew services start mysql")," will start ",Object(n.b)("inlineCode",{parentName:"p"},"mysql")," if it was installed via Brew and you're wishing to use."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"valet park")," is used to park the root of the directory that you wish to use for finding projects."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"valet secure")," will even secure the website."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Laravel/Laravel-5.4.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-laravel-laravel-5-4-md-0b0514104e28578677a9.js.map