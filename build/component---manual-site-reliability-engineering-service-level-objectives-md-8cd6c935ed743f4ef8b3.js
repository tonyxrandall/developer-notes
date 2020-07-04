(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{TId6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Site-Reliability-Engineering/Service-Level-Objectives.md"}});var s={_frontmatter:r},l=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"service-level-objectives"},"Service Level Objectives"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"We use intuition, experience, and an understanding of what users want to define service level indicators (SLIs), objectives (SLOs), and agreements (SLAs).")),Object(a.b)("p",null,"They descibe metrics that matter, what values we want those metris to have and how we'll react if we can't provide the expected service."),Object(a.b)("p",null,"Choosing appropriate metrics helps to drive the right action if something goes wrong, and also gives an SRE team confidence that a service is healthy."),Object(a.b)("h2",{id:"indicators"},"Indicators"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A carefully defined quantitative measure of some aspect of the level of service that is provided.")),Object(a.b)("p",null,"Common SLIs:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Request latency"),Object(a.b)("li",{parentName:"ol"},"Error rate"),Object(a.b)("li",{parentName:"ol"},"System throughput"),Object(a.b)("li",{parentName:"ol"},"Availability - often defined in terms of the fraction of well-formed requests that succeed, sometimes called yield")),Object(a.b)("p",null,'Note for availability that availabilities of 99% and 99.999% can be referred to as "2 nines" and "5 nines" availability. GCE aims for "three and a half nines" — 99.95% availability.'),Object(a.b)("h2",{id:"objectives"},"Objectives"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A target value or range of values for a service level that is measured by an SLI. A natural structure for SLOs is thus SLI <= target, or lower bound <= SLI <= upper bound.")),Object(a.b)("p",null,'For example, we might decide that we will return Team search results "quickly," adopting an SLO that our average search request latency should be less than 80 milliseconds.'),Object(a.b)("p",null,"Choosing an appropriate SLO is complex. For incoming HTTP requests from the outside world to your service, the queries per second (QPS) metric is essentially determined by the desires of your users, and you can’t really set an SLO for that."),Object(a.b)("p",null,"On the other hand, you can say that you want the average latency per request to be under 100 milliseconds, and setting such a goal could in turn motivate you to write your frontend with low-latency behaviors of various kinds or to buy certain kinds of low-latency equipment."),Object(a.b)("h2",{id:"agreements"},"Agreements"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain. The consequences are most easily recognized when they are financial — a rebate or a penalty — but they can take other forms.")),Object(a.b)("p",null,"SRE doesn’t typically get involved in constructing SLAs, because SLAs are closely tied to business and product decisions. SRE does, however, get involved in helping to avoid triggering the consequences of missed SLOs."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Site-Reliability-Engineering/Service-Level-Objectives.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-site-reliability-engineering-service-level-objectives-md-8cd6c935ed743f4ef8b3.js.map