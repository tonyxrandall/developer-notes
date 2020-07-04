(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{e4Gn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/System-Design/Distributed-Data.md"}});var l={_frontmatter:o},s=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"distributed-data"},"Distributed Data"),Object(n.b)("p",null,'With distributed data, we want to aim to provide/ "Scalability, Fault Tolerance/High Availability, Latency (think for global network requests)"'),Object(n.b)("p",null,"These topics cover the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Replication/Partitioning (Sharding)"),Object(n.b)("li",{parentName:"ol"},"Failover: electing a new leader during the process but handling potential issues with asynchronous writes & discarding writes."),Object(n.b)("li",{parentName:"ol"},'"Split Brain" in the scenario when 2 nodes think they are the leader.')),Object(n.b)("h2",{id:"replication"},"Replication"),Object(n.b)("p",null,"The purpose of replication is to provide high availability, disconnected operation, latency and scalability."),Object(n.b)("p",null,"There are a number of approaches to replication:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Single Leader"),Object(n.b)("li",{parentName:"ol"},"Multi Leader (all nodes can handles writes)"),Object(n.b)("li",{parentName:"ol"},"Leaderless")),Object(n.b)("p",null,"In leaderless replication, clients write to several nodes and write from several nodes in parallel in order to detect & correct nodes with stale data."),Object(n.b)("p",null,"Multi leader + leaderless have benefits for facility nodes, network interruptions & latency spikes. The cost for using these is a weak consistency guarentee."),Object(n.b)("h3",{id:"syncasync-replication"},"Sync/Async Replication"),Object(n.b)("p",null,"Replication can be synchronous/asynchronous."),Object(n.b)("p",null,"The help with consistency, there are a few models:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Read-after-write consistency"),Object(n.b)("li",{parentName:"ol"},"Monotonic reads"),Object(n.b)("li",{parentName:"ol"},"Consistent prefix reads")),Object(n.b)("h3",{id:"partitioning"},"Partitioning"),Object(n.b)("p",null,"There are a few kinds:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Key-range partitioning: keys are sorted and partition owns all keys from some minimum to some maximum. The advantage of efficient range queries, but hot spots occur when frequently accessed keys are close together. Key-range partitions also rebalance dynamically."),Object(n.b)("li",{parentName:"ol"},"Hash partitioning: hash function applied to a key and partition owns a range of hashes. Destroys ordering of keys, but more balanced.")),Object(n.b)("h3",{id:"relationships-with-the-secondary-indexes"},"Relationships with the secondary indexes"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Document-partitioned indexes: secondary index stored in some part as primary key & value. Single partition updated on write, but read of secondary requires scatter/gather across all partitions."),Object(n.b)("li",{parentName:"ol"},"Term-partitioned indexes: secondary indexes partitioned seperately but read can happen from single partition.")),Object(n.b)("h2",{id:"transactions"},"Transactions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Without transactions, susceptible to process crashes, network interruptions, power outages, disk full and unexpected concurrency."),Object(n.b)("li",{parentName:"ul"},"Transactions help prevent certain race conditions:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Dirty reads"),Object(n.b)("li",{parentName:"ul"},"Dirty writes"),Object(n.b)("li",{parentName:"ul"},"Read skew"),Object(n.b)("li",{parentName:"ul"},"Write skew"),Object(n.b)("li",{parentName:"ul"},"Lost updates"),Object(n.b)("li",{parentName:"ul"},"Phantom reads")))),Object(n.b)("p",null,"To prevent many of the race conditions, you can create serializable transactions:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Execution in serial order."),Object(n.b)("li",{parentName:"ol"},"Two-phase locking."),Object(n.b)("li",{parentName:"ol"},"Serializable snapshot isolation (SSI).")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/System-Design/Distributed-Data.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-system-design-distributed-data-md-fcda53e72814f64aa84a.js.map