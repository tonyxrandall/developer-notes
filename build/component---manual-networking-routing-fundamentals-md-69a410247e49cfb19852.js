(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{"Ub/6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Networking/Routing-Fundamentals.md"}});var o={_frontmatter:l},i=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,s({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"routing-fundamentals"},"Routing Fundamentals"),Object(n.b)("h2",{id:"reserved-ip-address"},"Reserved IP Address"),Object(n.b)("p",null,"Below are all the IP address reserved to be private, loopback, link-local or unspecified."),Object(n.b)("h2",{id:"private-ip-addresses"},"Private IP addresses"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"IPv4 address ranges:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"10.0.0.0 - 10.255.255.255"),Object(n.b)("li",{parentName:"ul"},"172.16.0.0 - 172.31.255.255"),Object(n.b)("li",{parentName:"ul"},"192.168.0.0 - 192.168.255.255"))),Object(n.b)("li",{parentName:"ul"},"IPv6 addresses range - fd00::/8")),Object(n.b)("p",null,"For these addresses:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Cannot be used or routed to the Internet"),Object(n.b)("li",{parentName:"ul"},"Helps delay IPv4 address exhaustion"),Object(n.b)("li",{parentName:"ul"},"Used in local area networks (LAN)"),Object(n.b)("li",{parentName:"ul"},"Provides flexible IP ranges for larger or smaller private networks"),Object(n.b)("li",{parentName:"ul"},"Allows for additional subnets within the ranges")),Object(n.b)("h2",{id:"loopback-ip-address"},"Loopback IP address"),Object(n.b)("p",null,"The IP address range/address:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"(IPv4) 127.0.0.0 - 127.255.255.255"),Object(n.b)("li",{parentName:"ul"},"(IPv6) ::1/128")),Object(n.b)("p",null,"For these addresses:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reserved for a Host's self address (or localhost address)"),Object(n.b)("li",{parentName:"ul"},"Managed by Operating System"),Object(n.b)("li",{parentName:"ul"},"Does not utilize the network interface card (NIC)"),Object(n.b)("li",{parentName:"ul"},"Uses a virtual network interface within the OS"),Object(n.b)("li",{parentName:"ul"},"Can be used for testing on local machine")),Object(n.b)("h2",{id:"link-local-address"},"Link-local Address"),Object(n.b)("p",null,"The IP address range/address:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"(IPv4) 169.254.0.0 - 169.254.255.255"),Object(n.b)("li",{parentName:"ul"},"(IPv6) fe80::/10")),Object(n.b)("p",null,"For these addresses:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Used in the absence of DHCP or static addresses"),Object(n.b)("li",{parentName:"ul"},"Can only communicate within its own network segment"),Object(n.b)("li",{parentName:"ul"},"Routers will not forward packets from a loopback address"),Object(n.b)("li",{parentName:"ul"},"Uses Address Resolution Protocol (ARP) to ensure that the desired IP address is not in use"),Object(n.b)("li",{parentName:"ul"},"IPv6 requires a link-local address even if a routable address has been assigned")),Object(n.b)("h2",{id:"unspecified-address"},"Unspecified Address"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"(IPv4) 0.0.0.0"),Object(n.b)("li",{parentName:"ul"},"(IPv6) ::")),Object(n.b)("h2",{id:"global-networks-and-routing"},"Global Networks and Routing"),Object(n.b)("p",null,"Types of networks:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Personal Area Network (PAN): Smallest and simplest network type. Generally consists of one or more people connected through a single device."),Object(n.b)("li",{parentName:"ul"},"Local Area Network (LAN): One of the most common network types. Local Area Networks consists of multiple computers and devices that are connected at a single site. These networks facilitate communication between devices and shared resources such as storage."),Object(n.b)("li",{parentName:"ul"},"Metropolitan Area Network (MAN): This type of network is spread across a small area or region, such as a city or college campus. A MAN is a much more complex network and can be used to connect multiple LANs. The administration of a MAN may be handled by individuals or a company (ie ISP)."),Object(n.b)("li",{parentName:"ul"},"Wide Area Network (WAN): A WAN is a network that spans a large geographical area. WANs are used to connect multiple LANs over huge distances - the greatest example is the internet. LANs connect to a WAN via a router, which permits the use of private IP addresses on the LAN and a public-facing address (or addresses) on the WAN. This is all made possible by Network Address Translation (NAT).")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Networking/Routing-Fundamentals.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-networking-routing-fundamentals-md-69a410247e49cfb19852.js.map