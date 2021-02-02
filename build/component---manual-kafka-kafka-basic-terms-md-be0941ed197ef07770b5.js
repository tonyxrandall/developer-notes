(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{"4FAi":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var s=a("/FXl"),i=a("TjRS");a("aD51");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kafka/Kafka-Basic-Terms.md"}});var r={_frontmatter:o},l=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(s.b)(l,n({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"kafka-basic-terms"},"Kafka Basic Terms"),Object(s.b)("h2",{id:"messages"},"Messages"),Object(s.b)("p",null,"The base unit of data within Kafka is called a message. You could think of this as a ",Object(s.b)("inlineCode",{parentName:"p"},"row")," or ",Object(s.b)("inlineCode",{parentName:"p"},"record")," if you are familiar with databases. A message is simply an array of bytes as far as Kafka is concerne, so it does not need to be a specific format."),Object(s.b)("p",null,"A message can have an optional ",Object(s.b)("inlineCode",{parentName:"p"},"key")," which again is simply an array of bytes. This key is used when messages are to be writting ot partitions in a more controlled manner."),Object(s.b)("h2",{id:"batches"},"Batches"),Object(s.b)("p",null,"For efficiency, messages are written into Kafka in batches. A ",Object(s.b)("inlineCode",{parentName:"p"},"batch")," is just a collection of messages, all of which are being produced to the same ",Object(s.b)("inlineCode",{parentName:"p"},"topic")," and ",Object(s.b)("inlineCode",{parentName:"p"},"partition"),". This of course is a tradeoff between latency and throughput."),Object(s.b)("p",null,"The larger the batch, the more messages per unit of time that can be handled but the longer it takes for the propagation of an individual message."),Object(s.b)("p",null,"Batches are typically compressed for more efficient data transfer and storage at the cost of processing power."),Object(s.b)("h2",{id:"schemas"},"Schemas"),Object(s.b)("p",null,"While messages are byte arrays to Kafka, it is recommended to add additional structure in the form of a schema to be imposed on the message content so it can be easily understood."),Object(s.b)("p",null,"There are many options for this depending on application needs. JSON and XML are easy and human readable but lack features such as robust type handling and compatibility between schema versions."),Object(s.b)("p",null,"Most Kafka devs favour the use of Apache Avro - a serialization framework originally designed for Hadoop. Avro has compact serialisation, schemas separate from message payloads and strong data typing and schema evolution with backward/forward compatibility."),Object(s.b)("p",null,"It is an imperative to choose a consistent data format."),Object(s.b)("h2",{id:"topics"},"Topics"),Object(s.b)("p",null,"Topics are the categorisation of messages. Thing of this as a database table or folder in a filesystem."),Object(s.b)("h2",{id:"partitions"},"Partitions"),Object(s.b)("p",null,"Topics are additionally broken down into a number of ",Object(s.b)("inlineCode",{parentName:"p"},"partitions"),'. Consider this analagous to the "commit log" where messages are written to it in an append-only fashion. A topic typically has multiple partitions, so there is no guarantee of message time-ordering across the entire topic - just within a single partition.'),Object(s.b)("p",null,"Partitions are also used to provide redundancy and scalability."),Object(s.b)("p",null,"Each partition itself can be run from a separate server to enable horizontal scalability and improve performance."),Object(s.b)("h2",{id:"streams"},"Streams"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Stream")," is often used when discussing data within systems like Kafka. Often a stream is considered to be a single topic of data, irrespective of the number of partitions. This represents a stream of data going from producers to consumers."),Object(s.b)("h2",{id:"producers"},"Producers"),Object(s.b)("p",null,"Producers create new messages. In alternative pub/sub systems, these can also be name ",Object(s.b)("inlineCode",{parentName:"p"},"publishers")," or ",Object(s.b)("inlineCode",{parentName:"p"},"writers"),". In general, a message is produced to a specific topic. By default, the producer does not care what partition a specific message is written to and will balance messages over all partitions of a topic evenly."),Object(s.b)("p",null,"There are cases when a producer will direct a message to a particular partition, normally makig use of the message key and a partitioner that will generate a hash of the key and map it to a specific partition to ensure all messages produced with a specific key will map to a specific partition."),Object(s.b)("h2",{id:"consumers"},"Consumers"),Object(s.b)("p",null,"Consumers read messages. These can also be referred to as ",Object(s.b)("inlineCode",{parentName:"p"},"subscribers")," or ",Object(s.b)("inlineCode",{parentName:"p"},"readers")," in other pub/sub systems."),Object(s.b)("p",null,"These guys subscribe to one or more topics and reads messages in order they were produced. Each message in a given partition has a unique offset, and by storing that offset of the last consumed message for each partition in either Zookeeper or Kafka itself, a consumer can stop and restart without losing its place."),Object(s.b)("h2",{id:"consumer-group"},"Consumer Group"),Object(s.b)("p",null,"Consumers work as part of a ",Object(s.b)("inlineCode",{parentName:"p"},"consumer group"),", which is one of more consumers that work together to consume a topic. This group assures that each partition is only consumed by one member."),Object(s.b)("h2",{id:"ownership"},"Ownership"),Object(s.b)("p",null,"This occurs when the mapping a consumer to a partition. In this way, consumers can scale horizontally to consume topics with a large number of messages. Additionally, if a consumer fails then there is redundancy."),Object(s.b)("h2",{id:"brokers"},"Brokers"),Object(s.b)("p",null,"A single Kafka server is referred to as a ",Object(s.b)("inlineCode",{parentName:"p"},"broker"),". The broker receives messages from producers, assigns offets to them and commits the messages to storage on disk."),Object(s.b)("p",null,"The broker also service consumers. It respons to fech requests for partionans and respones with messages that have been committed to disk. A single broker could easily handle thousands of partitions and millions of messages per second pending the level of hardware."),Object(s.b)("h2",{id:"clusters"},"Clusters"),Object(s.b)("p",null,"Kafka brokers are designed to operate as part of a ",Object(s.b)("inlineCode",{parentName:"p"},"cluster"),"."),Object(s.b)("h2",{id:"controller"},"Controller"),Object(s.b)("p",null,"Within a cluster of brokers, one broker will also function as a cluster ",Object(s.b)("inlineCode",{parentName:"p"},"controller")," (elected automatically). The controller is responsible for administrative operations:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Assigning partitions to brokers"),Object(s.b)("li",{parentName:"ul"},"Monitoring health of brokers")),Object(s.b)("p",null,"A partition is owned by a single broker in the cluster and that broker is called the ",Object(s.b)("inlineCode",{parentName:"p"},"leader")," of the partition. A partition may be assigned to multiple brokers, which will result in the partition being replaced. This provides redundancy of messages in the partition - such that another broker can take over leadership if there is a broker failure. However, all ",Object(s.b)("inlineCode",{parentName:"p"},"consumers")," and ",Object(s.b)("inlineCode",{parentName:"p"},"producers")," operating on that cluster must connect to the leader."),Object(s.b)("h2",{id:"retention"},"Retention"),Object(s.b)("p",null,"This is a key feature of Kafka. Brokers are configured with a default retention for topics, either some period of time or size in bytes. If limits are reached, messaged are expired and deleted so that the retention configured is a minimum amount of data available at any time."),Object(s.b)("p",null,"Retention settings can also be set for individual topics. Example: tracking topic might be retained for days, application metrics only for a few hours."),Object(s.b)("h2",{id:"log-compacted-retention"},"Log Compacted Retention"),Object(s.b)("p",null,"If a topic is configured as ",Object(s.b)("inlineCode",{parentName:"p"},"log compacted"),", it means Kafka will retain only the last message produced with a particular key. This can be useful for data where only the last update is relevant."),Object(s.b)("h2",{id:"multiple-clusters"},"Multiple Clusters"),Object(s.b)("p",null,"As deployment grow, it is important to have multiple clusters. The benefits:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Segregation of types of data"),Object(s.b)("li",{parentName:"ul"},"Isolation for security requirements"),Object(s.b)("li",{parentName:"ul"},"Multiple datacenters (disaster recovery)")),Object(s.b)("p",null,"With multiple datacenters, Kafka includes a tool called ",Object(s.b)("inlineCode",{parentName:"p"},"MirrorMaker")," used for the purpose of copying messages between datacenters. At the core, it is simply a Kafka consumer and producer linked together with a queue. Messages are consumed from one Kafka cluster and produced for another."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kafka/Kafka-Basic-Terms.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kafka-kafka-basic-terms-md-be0941ed197ef07770b5.js.map