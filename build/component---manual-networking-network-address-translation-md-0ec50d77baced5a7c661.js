(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{F2sf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Networking/Network-Address-Translation.md"}});var i={_frontmatter:o},l=s.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"network-address-translation-nat"},"Network Address Translation (NAT)"),Object(n.b)("p",null,"Process of mapping or translating one IP address to a different IP address (or addresses) by modifying the network address information in the IP header of the network packets."),Object(n.b)("p",null,"This method is used to map a single public (routable) IP address to one or more private (unroutable) IP addresses. This helps prevent the exhaustion of public IPv4 addresses."),Object(n.b)("h2",{id:"static-nat"},"Static NAT"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"NAT device is assigned a pool of public IP addresses"),Object(n.b)("li",{parentName:"ul"},"Private IP addresses are mapped to the public IP addresses"),Object(n.b)("li",{parentName:"ul"},"Used in situations that require servers to always be mapped to the same public IP address")),Object(n.b)("h2",{id:"dynamic-nat"},"Dynamic NAT"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"NAT device is assigned a pool of public IP addresses"),Object(n.b)("li",{parentName:"ul"},"Public IP addresses are used when they are needed by a host and then returned to the pool once they are no longer in use"),Object(n.b)("li",{parentName:"ul"},"Used in situations in which the public IP address does not need to be consistently mapped to the same private IP address")),Object(n.b)("h2",{id:"port-address-translation"},"Port Address Translation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A single public IP is assigned to a network"),Object(n.b)("li",{parentName:"ul"},"All the devices on the network share a single IP address"),Object(n.b)("li",{parentName:"ul"},"The NAT device records the private IP address as well as the port - also called the source port address - used by the internal host to ensure that communication is sent back correctly"),Object(n.b)("li",{parentName:"ul"},"This is the most common type of NAT"),Object(n.b)("li",{parentName:"ul"},"Helps conserve the number of available IP addresses")),Object(n.b)("h2",{id:"source-nat-snat"},"Source NAT (SNAT)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Preserves the destination address and modifies the source address"),Object(n.b)("li",{parentName:"ul"},"Allows hosts on a private network to initiate a connection to hosts outside of the private network")),Object(n.b)("h2",{id:"destination-nat-dnat"},"Destination NAT (DNAT)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Preserves the source address and modifies the destination address"),Object(n.b)("li",{parentName:"ul"},"Allows a host (or multiple hosts) outside of the private network to connect to a host inside a private network")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Networking/Network-Address-Translation.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-networking-network-address-translation-md-0ec50d77baced5a7c661.js.map