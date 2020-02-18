(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{fNbK:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Python-Exceptions.md"}});var c={_frontmatter:i},l=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"python-exceptions"},"Python Exceptions"),Object(a.b)("p",null,"The base example is to use a try/except block. You can raise exceptions in code that can be caught by the except block."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-python"}),"try:\n    linux_interaction()\nexcept:\n    print('Linux function was not executed')\n")),Object(a.b)("h2",{id:"example-case"},"Example case"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-python"}),'class LinkedList:\n    def __init__(self, head=None):\n        self.head = head\n\n    def getFirst(self):\n        if self.head == None:\n            raise Exception("No items in list")\n        else:\n            return self.head\n\ntry:\n    ll = LinkedList()\n    ll.getFirst()\nexcept Exception, error:\n    print(error)\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Python-Exceptions.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-python-exceptions-md-948ded42144cc6e5651d.js.map