(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{"Wp+6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Web/Accessibility-Course.md"}});var o={_frontmatter:r},b=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,l({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"accessibility-course"},"Accessibility Course"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A lot of times, static sites are more accesible"),Object(n.b)("li",{parentName:"ul"},"Microsoft Inclusive Toolkit (a set of personas to work with)")),Object(n.b)("h2",{id:"course-coverage"},"Course Coverage"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Focus management"),Object(n.b)("li",{parentName:"ul"},"Accouncements"),Object(n.b)("li",{parentName:"ul"},"Semantic HTML"),Object(n.b)("li",{parentName:"ul"},"Unobtrusive motion"),Object(n.b)("li",{parentName:"ul"},"Progressive enhancements"),Object(n.b)("li",{parentName:"ul"},"Testing")),Object(n.b)("h2",{id:"course-materials"},"Course Materials"),Object(n.b)("p",null,"Found on ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.github.com/marcysutton/js-a11y-workshop"}),"Marcy's Github repo for the course")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-shell"}),"git clone https://www.github.com/marcysutton/js-a11y-workshop\ncd js-a11y-workshop\nnpm install\nnpx gatsby develop\n")),Object(n.b)("h2",{id:"debugging"},"Debugging"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Render in web browsers"),Object(n.b)("li",{parentName:"ul"},"Test with keyboard"),Object(n.b)("li",{parentName:"ul"},"Use a11y web extensions (good for smoke testing)"),Object(n.b)("li",{parentName:"ul"},"Check color contrast (#1 problem on the web)"),Object(n.b)("li",{parentName:"ul"},"Test with screen readers (recommended to pair with someone who uses them daily)"),Object(n.b)("li",{parentName:"ul"},"Use magnification & zoom")),Object(n.b)("h2",{id:"app-testing-in-the-wild"},"App Testing In The Wild"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you have trouble figuring out where you are on the screen, click to set focus point"),Object(n.b)("li",{parentName:"ul"},"Number of items on Slack JSON viewer that couldn't be reached"),Object(n.b)("li",{parentName:"ul"},"Visual outlines are very important for a number of people"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"<a>")," without ",Object(n.b)("inlineCode",{parentName:"li"},"href")," attribute is NOT focusable - if you need something interactive, the button may have been the better choice."),Object(n.b)("li",{parentName:"ul"},"Github uses the ",Object(n.b)("inlineCode",{parentName:"li"},"Skip to content")),Object(n.b)("li",{parentName:"ul"},"Elements should not have a tabindex > 0 (best practise more than outright violation)"),Object(n.b)("li",{parentName:"ul"},"Fn + Cmd + F5 to start Mac voiceover (NOTE: key navigation changes with voiceover)"),Object(n.b)("li",{parentName:"ul"},"Tests NVDA on Mac using VM"),Object(n.b)("li",{parentName:"ul"},"Local build is done for testing a11y")),Object(n.b)("h2",{id:"hidden-vs-visible-css"},"Hidden vs Visible CSS"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Can affect where focus can go"),Object(n.b)("li",{parentName:"ul"},"Presenter uses ",Object(n.b)("inlineCode",{parentName:"li"},".visually-hidden")," class to take an HTML and render it so it is part of the a11y info but visually hidden visually. Common utility, but sometimes not the right tool."),Object(n.b)("li",{parentName:"ul"},"Contents is still there for a11y APIs"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"opacity")," is used for ",Object(n.b)("inlineCode",{parentName:"li"},"reserving space"),", still being rendered and contents still available for a11y APIs"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"display: none")," hides from assistive technology (a11y info being ignored)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"visibility: hidden")," still reserves space, but hides a11y info")),Object(n.b)("p",null,"The visually hidden class used:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-scss"}),".visually-hidden {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n")),Object(n.b)("h2",{id:"a11y-tree"},"A11y Tree"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Created with a11y APIs so that screenreaders have streamlined experience"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"chrome://accessibility")," needs to turn on tree for each tab - very raw version of the a11y tree"),Object(n.b)("li",{parentName:"ul"},"Great to see how HTML and CSS can impact the a11y tree"),Object(n.b)("li",{parentName:"ul"},"Hack > use ",Object(n.b)("inlineCode",{parentName:"li"},"addEventListener")," for ",Object(n.b)("inlineCode",{parentName:"li"},"focusin")," to get ",Object(n.b)("inlineCode",{parentName:"li"},"document.activeElement")),Object(n.b)("li",{parentName:"ul"},"Safari has a weird setting to ensure tab highlights elements")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"activeElement")," JavaScript:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"document.body.addEventListener('focusin', (event) => {\n  console.log(document.activeElement);\n});\n")),Object(n.b)("h2",{id:"exercises"},"Exercises"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Team ",Object(n.b)("inlineCode",{parentName:"li"},"No Mouse Mondays")),Object(n.b)("li",{parentName:"ol"},"Run browser extensions (axe, A11y Insights, Lighthouse, WAVE, NoCoffee)"),Object(n.b)("li",{parentName:"ol"},"DevTools A11y (chrome color picker & a11y pane, Firefox a11y tools)")),Object(n.b)("h2",{id:"screen-readers"},"Screen Readers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://webaim.org/articles/voiceover"}),"Voiceover")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://webaim.org/articles/nvda"}),"NVDA")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://webaim.org/articles/jaws"}),"JAWS")," (most important for those who use screen readers)")),Object(n.b)("h3",{id:"useful-combos"},"Useful combos"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"OSX Voiceover and Safari"),Object(n.b)("li",{parentName:"ul"},"NVDA and Firefox Windows"),Object(n.b)("li",{parentName:"ul"},"JAWS and IE11 or Edge"),Object(n.b)("li",{parentName:"ul"},"iOS Voiceover and Safari"),Object(n.b)("li",{parentName:"ul"},"Android a11y and Chrome"),Object(n.b)("li",{parentName:"ul"},"Orca on Linux")),Object(n.b)("h2",{id:"magnification"},"Magnification"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Browser zoom (500%, 200% for guidelines)"),Object(n.b)("li",{parentName:"ul"},"OS-level zoom"),Object(n.b)("li",{parentName:"ul"},"ZoomText & other assistive tech")),Object(n.b)("p",null,"Watch out for:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Page scrolling"),Object(n.b)("li",{parentName:"ul"},"Font sizes & scaling"),Object(n.b)("li",{parentName:"ul"},"UX of interactions when zoomed")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Web/Accessibility-Course.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-web-accessibility-course-md-528f0e3f90a980d2ae3f.js.map