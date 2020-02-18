(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{UHyx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Drupal/Drupal-8.md"}});var r={_frontmatter:l},b=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"drupal-8"},"Drupal 8"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#drupal-8"}),"Drupal 8"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#installation"}),"Installation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#basics-of-content-creation"}),"Basics of Content Creation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#publishing-options---published-promoted-url"}),"Publishing Options - Published, Promoted, URL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#5-simple-site---content"}),"5. Simple Site - Content")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#8-extending-drupal"}),"8. Extending Drupal"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#core-modules"}),"Core Modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#forum-module"}),"Forum module")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#finding-modules"}),"Finding modules")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#9-creating-a-site---content-types"}),"9. Creating a site - Content Types"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#updating-an-existing-content-type"}),"Updating an existing content type")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#changing-how-the-content-type-displays"}),"Changing how the content type displays")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#create-a-new-content-type---event"}),"Create a new content type - Event"))))))),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Download Drupal: ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.drupal.org/download"}),"https://www.drupal.org/download")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Save the contents at the base of your new repo/directory i.e. so the url will be ",Object(a.b)("inlineCode",{parentName:"li"},"localhost/YOUR_DIRECTORY/DRUPAL-CONTENT/"))),Object(a.b)("p",null,"Go to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost/YOUR_DIRECTORY/DRUPAL-CONTENT/")," and follow the prompts\nYou also need to run ",Object(a.b)("inlineCode",{parentName:"p"},"composer install")," from your sites root directory."),Object(a.b)("h2",{id:"basics-of-content-creation"},"Basics of Content Creation"),Object(a.b)("p",null,"What we deal with out-of-the-box. Content entry being the most important."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"Content > Add content")," to get a list of content that we can add."),Object(a.b)("p",null,"If we create a page ",Object(a.b)("inlineCode",{parentName:"p"},"About")," and change the settings on the right hand side, we can also begin to add tables for quick access."),Object(a.b)("h2",{id:"publishing-options---published-promoted-url"},"Publishing Options - Published, Promoted, URL"),Object(a.b)("p",null,"If we create an article without the default settings, we can then use ",Object(a.b)("inlineCode",{parentName:"p"},"saved as unpublished")," from the save and publish dropdown. If content is not published, you'll be redirected to a login from a private browser and not allowed to use."),Object(a.b)("p",null,"On the right-hand side options, we can also edit things out of the box such as comments, the url path, author info, promotion options as well as the previously explored comment settings. Promotion options also allow you to deal with ",Object(a.b)("inlineCode",{parentName:"p"},"sticky-at-top-of-list"),"."),Object(a.b)("h2",{id:"5-simple-site---content"},"5. Simple Site - Content"),Object(a.b)("h2",{id:"8-extending-drupal"},"8. Extending Drupal"),Object(a.b)("h3",{id:"core-modules"},"Core Modules"),Object(a.b)("p",null,"Two types: ",Object(a.b)("inlineCode",{parentName:"p"},"core")," and ",Object(a.b)("inlineCode",{parentName:"p"},"contributed"),". Contributed is given back from the community. It's not maintained by the community."),Object(a.b)("p",null,"Under the ",Object(a.b)("inlineCode",{parentName:"p"},"manage > extend")," tab, you can manage the modules. Selecting them on or off and seeing more information is available from here."),Object(a.b)("p",null,"Extra configuration may be available from the accordian dropdown."),Object(a.b)("h3",{id:"forum-module"},"Forum module"),Object(a.b)("p",null,"You can also manage permissions from the ",Object(a.b)("inlineCode",{parentName:"p"},"people")," section. If you have modules installed, you can see from the accordian dropdown what is required for it to work."),Object(a.b)("p",null,"If modules themselves are enabled, they may become directly available on the ",Object(a.b)("inlineCode",{parentName:"p"},"content")," menu."),Object(a.b)("h3",{id:"finding-modules"},"Finding modules"),Object(a.b)("p",null,"We can search drupal.org and search for modules."),Object(a.b)("h2",{id:"9-creating-a-site---content-types"},"9. Creating a site - Content Types"),Object(a.b)("h3",{id:"updating-an-existing-content-type"},"Updating an existing content type"),Object(a.b)("p",null,"What happens if we want to add a field for articles if we want to add photo credit? If you are building a site for someone else, take them into account."),Object(a.b)("p",null,"From ",Object(a.b)("inlineCode",{parentName:"p"},"Structure > Content Type")," you can select the ",Object(a.b)("inlineCode",{parentName:"p"},"Manage fields")," dropdown to edit existing types and what we can easily view. To add something such as a new field, we need to ",Object(a.b)("inlineCode",{parentName:"p"},"manage fields"),"."),Object(a.b)("p",null,"As we update the field names, we can see the ",Object(a.b)("inlineCode",{parentName:"p"},"machine name")," on the left updating - this is important for the database itself."),Object(a.b)("p",null,"The next step is asking for global settings themselves."),Object(a.b)("p",null,"Next, we can add help text, add ",Object(a.b)("inlineCode",{parentName:"p"},"required")," and a default value."),Object(a.b)("h3",{id:"changing-how-the-content-type-displays"},"Changing how the content type displays"),Object(a.b)("p",null,"From ",Object(a.b)("inlineCode",{parentName:"p"},"Structure > Content Type"),", we can change the display."),Object(a.b)("h3",{id:"create-a-new-content-type---event"},"Create a new content type - Event"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Drupal/Drupal-8.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-drupal-drupal-8-md-bd2a2250d3fadd82e2e3.js.map