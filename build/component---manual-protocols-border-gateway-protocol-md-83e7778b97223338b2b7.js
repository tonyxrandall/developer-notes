(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{c43U:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return l}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var n=o("/FXl"),r=o("TjRS");o("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Protocols/Border-Gateway-Protocol.md"}});var s={_frontmatter:i},c=r.a;function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(n.b)(c,a({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"border-gateway-protocol"},"Border Gateway Protocol"),Object(n.b)("p",null,"Standardized ",Object(n.b)("inlineCode",{parentName:"p"},"exterior gateway protocol")," design to exchange routing and reachability information among ",Object(n.b)("inlineCode",{parentName:"p"},"autonomous systems")," (AS) on the Internet."),Object(n.b)("p",null,"Classified as a ",Object(n.b)("inlineCode",{parentName:"p"},"path vector protocol"),"."),Object(n.b)("p",null,"The BGP makes routing decisions based on path, network policies, or rule-sets configured by a ",Object(n.b)("inlineCode",{parentName:"p"},"network administrator")," and is involved in making core routing decisions."),Object(n.b)("p",null,"BGP may be used for routing within an autonomous system. In this application it is referred to as Interior Border Gateway Protocol, Internal BGP, or iBGP. In contrast, the Internet application of the protocol may be referred to as Exterior Border Gateway Protocol, External BGP, or eBGP."),Object(n.b)("h2",{id:"operation"},"Operation"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Peers")," (BGP neighbours) are established by manual configuration among routes to creates a Transmission Control Protocol (TCP) session on port 179. A BGP speaker sends 19-byte keep-alive messages every 60 seconds to maintain the connection. Among routing protocols, BGP is unique in using TCP as its transport protocol."),Object(n.b)("p",null,"How routes are propagated can be controlled in detail via the ",Object(n.b)("inlineCode",{parentName:"p"},"route-maps")," mechanism. This mechanism consists of a set of rules. Each rule describes, for routes matching some given criteria, what action should be taken. The action could be to drop the route, or it could be to modify some attributes of the route before inserting it in the ",Object(n.b)("inlineCode",{parentName:"p"},"routing table"),"."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Protocols/Border-Gateway-Protocol.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-protocols-border-gateway-protocol-md-83e7778b97223338b2b7.js.map