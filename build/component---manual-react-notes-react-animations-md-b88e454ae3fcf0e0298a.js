(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{Tg6s:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-Animations.md"}});var s={_frontmatter:o},c=r.a;function l(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(c,i({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"animations-in-react"},"Animations in React"),Object(a.b)("h1",{id:"reactan-1-installation"},"REACTAN-1: Installation"),Object(a.b)("p",null,"React Transistions can be done use the ",Object(a.b)("inlineCode",{parentName:"p"},"ReactCSSTransitionGroup"),"."),Object(a.b)("p",null,"Since React uses the virtual DOM, we don't get a chance to directly apply a CSS transition like you normally would with jQuery or JS."),Object(a.b)("p",null,"To install: ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add react-addons-css-transition-group")),Object(a.b)("p",null,"In the JS file:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"import ReactCSSTransitionGroup from 'react-addons-css-transition-group';\n\nexport default class Transition extends Component {\n    render() {\n        return {\n            <ReactCSSTransitionGroup>\n                { list }\n            </ReactCSSTransitionGroup>\n        }\n    }\n}\n")),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"<ReactCSSTransitionGroup>")," renders as a ",Object(a.b)("inlineCode",{parentName:"p"},"span"),", but we can give it a ",Object(a.b)("inlineCode",{parentName:"p"},"component")," property to change it! E.g. ",Object(a.b)("inlineCode",{parentName:"p"},'<ReactCSSTransitionGroup component="ul">')),Object(a.b)("p",null,"To access the property for animations, we need to set a property of ",Object(a.b)("inlineCode",{parentName:"p"},"transitionName"),"."),Object(a.b)("p",null,"E.g. ",Object(a.b)("inlineCode",{parentName:"p"},'<ReactCSSTransitionGroup component="ul" transitionName="slide">')),Object(a.b)("p",null,"There are a couple of other noteworthy properties:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'<ReactCSSTransitionGroup\n  component="ul"\n  transitionName="slide"\n  transitionEnterTimeout={500} // this is for the duration of the transition in ms\n  transitionLeaveTimeout={500} // transition for leaving the DOM\n  transitionAppear={true} // transition for the ReactCSSTransitionGroup component\n  transitionAppearTimeout={500} // time for is\n>\n  {list}\n</ReactCSSTransitionGroup>\n')),Object(a.b)("h1",{id:"reactan-2-using-css-to-now-run-the-transitions-and-transforms"},"REACTAN-2: Using CSS to now run the Transitions and Transforms"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"// in the css file\n\n/* start enter state */\n.slide-enter {\n    transform: translateX(-100%);\n}\n\n/* end enter state */\n.slide-enter.slide-enter-active {\n    transform: translateX(0);\n    transition: transform 0.5s ease-out;\n}\n\n/* start leave state */\n.slide-leave {\n    transform: translateX(0);\n}\n\n/* end leave state */\n.slide-leave.slide-leave-active {\n    transform: translateX(-100%);\n    opacity: 0;\n    transition: 0.5s ease-in;\n}\n\n/* initial mounting */\n.slide-appear {\n    opacity: 0;\n}\n\n.slide-appear.slide-appear-active {\n    opacity: 1;\n    transition: opacity 0.5s ease-in;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Animations.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-animations-md-b88e454ae3fcf0e0298a.js.map