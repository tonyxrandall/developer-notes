(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{"8bHF":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Principles/Naming.md"}});var l={_frontmatter:i},c=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(c,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#naming"}),"Naming"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#components"}),"Components"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#deep-dive"}),"Deep dive")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#class-names"}),"Class Names"))))),Object(a.b)("h1",{id:"naming"},"Naming"),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("p",null,"Component naming should as swiftly as possible inform the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Type"),Object(a.b)("li",{parentName:"ol"},"Area/region in the app/site"),Object(a.b)("li",{parentName:"ol"},"Purpose"),Object(a.b)("li",{parentName:"ol"},"Context")),Object(a.b)("p",null,"To do it in such a way that is purposeful and scalable, consider following the naming by going ",Object(a.b)("inlineCode",{parentName:"p"},"[Type][Region][Purpose][Context]"),"."),Object(a.b)("h3",{id:"deep-dive"},"Deep dive"),Object(a.b)("p",null,"For example, let's take the unknown customer journey . In this flow, they go from home, cover the common basics between the customer journeys for identifying if they are a member, the store location, the order and the type before moving on to the specific journey feedback. When building out the individual pages, we can determine and define a type, region, purpose and context."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'// [Type][Region][Purpose][Context]\n1. PageHome // -> selects "Leave Feedback"\n2. PageBaseIsMember // -> Type: Page, region: Base, purpose: Is, context: Member, selects no\n3. PageBaseSetStore // -> Type: Page, region: Base, purpose: Set, context: Store, selects continue\n4. PageBaseSetOrderType // -> Type: Page, region: Base, purpose: Set, context: Order Type\n// etc\n')),Object(a.b)("p",null,"Note that you can emit ",Object(a.b)("inlineCode",{parentName:"p"},"purpose")," and ",Object(a.b)("inlineCode",{parentName:"p"},"context")," from the name if it is not relevant."),Object(a.b)("p",null,"Within each page, you can individual components. Try to use the class name convention to generate the names for child components:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// ! This is just an example and not necessarily\n// reflective of actual use. Use your own discression.\n<PageBaseSetOrderType>\n  // Compoent for each order type\n  <ComponentOrderTypeRadio />\n  <ComponentOrderTypeRadio />\n  <ComponentOrderTypeRadio />\n  <ComponentOrderTypeRadio />\n</PageBaseSetOrderType>\n")),Object(a.b)("h2",{id:"class-names"},"Class Names"),Object(a.b)("p",null,"Try follow the convention below for naming classes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yml"}),"body:\n  header: # @classname header\n    # @children\n  # Top level for each section\n  section: # @classname section-name\n    # @children\n    container: # @classname container-name\n      # Base selection of rules\n      ? block\n      # @children\n      grid:\n        ? grid-item\n        # @children\n      table:\n        # @children\n        table-header:\n          # @children\n        table-data:\n          # @chidlren\n      list:\n        # react native only\n        list-item:\n          # @children\n      # ... more, maybe article etc\n      nav:\n        nav-item:\n          # @children\n  component: # @classname component-name\n    # Specific component based styling\n    # @children\n    # Base selection of rules\n    ? block\n    # @children\n    grid:\n      ? grid-item\n      # @children\n    table:\n      # @children\n      table-header:\n        # @children\n      table-data:\n        # @chidlren\n    list:\n      # react native only\n      list-item:\n        # @children\n    # ... more, maybe article etc\n    nav:\n      nav-item:\n        # @children\n  footer: # @classname footer - but maybe should be more specific\n    # @children\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Naming.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-principles-naming-md-43ddf98e69c4630790d1.js.map