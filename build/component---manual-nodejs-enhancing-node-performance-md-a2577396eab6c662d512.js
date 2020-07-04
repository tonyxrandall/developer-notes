(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{VfX2:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/Enhancing-Node-Performance.md"}});var l={_frontmatter:s},i=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(i,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"enhancing-nodejs-performance"},"Enhancing Nodejs Performance"),Object(a.b)("p",null,"We're going to look at two ways to improve performance:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Using Node in 'Cluster' Mode"),Object(a.b)("li",{parentName:"ol"},"Using Worker Threads")),Object(a.b)("p",null,"The recommended approach would be using ",Object(a.b)("inlineCode",{parentName:"p"},"cluster")," mode, whereas worker threads are way more experimental."),Object(a.b)("h2",{id:"test-app"},"Test App"),Object(a.b)("p",null,"We'll use a tiny express server for playing around."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// app.js\nconst express = require('express');\nconst app = express();\n\nfunction doWork(duration) {\n  const start = new Date.now();\n  while (Date.now() - start < duration) {\n    // do nothing else\n  }\n}\n\napp.get('/', (req, res) => {\n  doWork(5000);\n  res.send('Hello');\n});\n\napp.listen(3000);\n")),Object(a.b)("p",null,"This app will be continually updated to show the performance updates."),Object(a.b)("h2",{id:"blocking-the-event-loop"},"Blocking the Event Loop"),Object(a.b)("p",null,"Keep in mind:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"[Single Thread]\nRequest => Node Server => Response\n")),Object(a.b)("p",null,"We start to run into issues here when our request requires a lot of processing power (in the example app, this will be the function ",Object(a.b)("inlineCode",{parentName:"p"},"doWork"),")."),Object(a.b)("p",null,"Note that with the ",Object(a.b)("inlineCode",{parentName:"p"},"doWork")," function call, we are blocking the entire event loop. ",Object(a.b)("strong",{parentName:"p"},"This blocks the entire server from handling other requests.")),Object(a.b)("h2",{id:"clustering-in-theory"},"Clustering in Theory"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"Cluster Manager\n  => Single Threaded Node Server\n  => Single Threaded Node Server\n  => Single Threaded Node Server\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"cluster manager")," is only responsible for monitoring the health of individual ",Object(a.b)("inlineCode",{parentName:"p"},"node server")," instances. It will still be up to the instances to handle the request handling and processing."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"# RUN node app.js\n└── app.js  ===================> Worker Instance\n    └──  Cluster Manager\n        └── cluster.fork() # forks app.js\n")),Object(a.b)("h2",{id:"forking-children-with-cluster"},"Forking Children With Cluster"),Object(a.b)("p",null,"When running the manager, note that Node will first run all the JavaScript code in the file and then startup the ",Object(a.b)("inlineCode",{parentName:"p"},"Cluster Manager"),". We want to ensure there is at least one scenario with the forked app running as expected."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// app.js\nconst cluster = require('cluster');\n// Is file executed in the master mode?\nif (cluster.isMaster) {\n  // Cause app.js to be executed again but in child mode\n  cluster.fork();\n} else {\n  // Child - operate as normal server\n  const express = require('express');\n  const app = express();\n\n  function doWork(duration) {\n    const start = new Date.now();\n    while (Date.now() - start < duration) {\n      // do nothing else\n    }\n  }\n\n  app.get('/', (req, res) => {\n    doWork(5000);\n    res.send('Hello');\n  });\n\n  app.listen(3000);\n};\n")),Object(a.b)("p",null,"If we add multiple ",Object(a.b)("inlineCode",{parentName:"p"},"cluster.fork()")," calls, we can have multiple instances of the server ready to run."),Object(a.b)("h2",{id:"benchmarking-server-performance"},"Benchmarking Server Performance"),Object(a.b)("p",null,"For benchmarking, we will use a program called ",Object(a.b)("inlineCode",{parentName:"p"},"ab"),". (Available for MacOS)"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 50 -n 500 localhost:3000/fast")," where ",Object(a.b)("inlineCode",{parentName:"p"},"-c")," is 50 concurrent requests and ",Object(a.b)("inlineCode",{parentName:"p"},"-n")," indicates 500 requests."),Object(a.b)("p",null,"In the bottom code, we're going show how you can get diminishing returns by adding more children. It is important that we keep a threadpool size of ",Object(a.b)("inlineCode",{parentName:"p"},"1")," for this example."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// app.js\nprocess.env.UV_THREADPOOL_SIZE = 1; // just for benchmarking purposes\nconst cluster = require('cluster');\n// Is file executed in the master mode?\nif (cluster.isMaster) {\n  // Cause app.js to be executed again but in child mode\n  cluster.fork();\n} else {\n  // Child - operate as normal server\n  const crypto = require('crypto');\n  const express = require('express');\n  const app = express();\n  \n  app.get('/', (req, res) => {\n    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n      res.send('Hello');\n    })\n});\n\n  app.listen(3000);\n};\n")),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 1 -n 1 localhost:3000/")," we will see that we get a ",Object(a.b)("inlineCode",{parentName:"p"},"Time taken for tests")," to be ~1000ms."),Object(a.b)("p",null,"We can see the timing of this is similar to the example for ",Object(a.b)("inlineCode",{parentName:"p"},"crypto")," we had in ",Object(a.b)("inlineCode",{parentName:"p"},"Nodejs/Node Interals")," when demoing the ",Object(a.b)("inlineCode",{parentName:"p"},"crypto")," module."),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 2 -n 2 localhost:3000/"),", we see that one requests took 1s, while the other took 2s. This is similar to what we saw in ",Object(a.b)("inlineCode",{parentName:"p"},"Node Internals"),". Given the one thread, we see that the second request needs to wait for the first request to be released from the threadpool."),Object(a.b)("p",null,"If we update our code to add another child process using ",Object(a.b)("inlineCode",{parentName:"p"},"cluster.fork();"),", we will notice that both the requests now get processed in the two child processes (STILL USING ONE THREAD) and have come back with the expected time ~1000ms."),Object(a.b)("h3",{id:"what-happens-with-too-many-children"},"What happens with too many children?"),Object(a.b)("p",null,"If we forked six processes and ran ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 6 -n 6 localhost:3000/")," we will see that for some reason, we are now taking 3.5 seconds for each of the 6 requests across the board."),Object(a.b)("p",null,"Why is this? It depends on the kind of computer that you have. Note that for the example above, it was run on a dual-core CPU. That's because the CPU is now trying to do a little bit of work on all 6 threads. So although we could now process the children in parallel, we have overallocated our resources."),Object(a.b)("p",null,"If we now reduced the forked processes to 2 and still ran ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 6 -n 6 localhost:3000/"),", we will notice that the slowest request is still around 3.4s, while our fastest request is now ~1s. This is because at a cluster with two children, we know that we can at most handle two requests at the same time. "),Object(a.b)("p",null,"Essentially, the first two requests are processed in the first second, the next two in the second, the last two in the third - this makes perfect sense. This means that we have ended with a far better performance profile."),Object(a.b)("h2",{id:"pm2-configuration"},"PM2 Configuration"),Object(a.b)("p",null,"PM2 can supercharge our clustering setup. PM2 makes cluster management super easy for Nodejs. It can be installed through ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," globally using ",Object(a.b)("inlineCode",{parentName:"p"},"npm i -g pm2"),"."),Object(a.b)("p",null,"To run the script in ",Object(a.b)("inlineCode",{parentName:"p"},"pm2"),", we need to update our app once again."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// app.js\n\n// Child - operate as normal server\nconst crypto = require('crypto');\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n   res.send('Hello');\n })\n});\n\napp.listen(3000);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pm2 start index.js -i 0")," will tell pm2 to auto-configure how many instances to setup based on the amount of logical cores (physical * virtual cores) are available."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Call"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Definition"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"pm2 monit"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Show pm2 monitor")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"pm2 list"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"List all pm2 processes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"pm2 start index.js -i 0"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Start index.js with auto-configured instances")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"pm2 delete index"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Delete all index children")))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pm2")," is generally used in production environments only."),Object(a.b)("h2",{id:"web-worker-threads"},"Web Worker Threads"),Object(a.b)("p",null,"At the time of writing - these were in experimental phase."),Object(a.b)("p",null,"In this example, we are using the module ",Object(a.b)("inlineCode",{parentName:"p"},"webworker-threads"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"Our App\n└── Worker Interface (communicates with Worker)\n    └── postMessage <===> onmessage (Worker)\n    └── onmessage <===> postMessage (Worker)\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Worker")," itself is working on its own thread. Remember: a lot of the Nodejs standard lib functions ALREADY work on their own thread. You only really want to use it for your own heavy-duty business logic."),Object(a.b)("p",null,"Note: any function passed to the worker cannot access the parent scoped variables. It is also important to use the function keyword on purpose."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// app.js\nconst Worker = require('webworker-threads').Worker;\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  const worker = new Worker(function() {\n    this.onmessage = function() {\n      // emulate heavy work\n      let counter = 0;\n      whilte (counter < 1e9) {\n        counter++;\n      }\n\n      postMessage(counter);\n    }\n  });\n\n  worker.onmessage = function(counter) {\n    console.log(counter);\n    res.send('' + message.data); // casting as send requires string\n  }\n\n  worker.postMessage();\n});\n\napp.listen(3000);\n")),Object(a.b)("p",null,"For benchmarking these workers, we can again use ",Object(a.b)("inlineCode",{parentName:"p"},"ab"),". ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 1 -n 1 localhost:3000/")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ab -c 2 -n 2 localhost:3000/")," should run with similar results on a dual-core Mac. "))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/Enhancing-Node-Performance.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-enhancing-node-performance-md-a2577396eab6c662d512.js.map