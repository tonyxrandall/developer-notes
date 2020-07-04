(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{WwiC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/Node-Internals.md"}});var s={_frontmatter:l},r=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(r,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"nodejs-internals"},"Nodejs Internals"),Object(o.b)("p",null,"Course by Stephen Grider found ",Object(o.b)("a",i({parentName:"p"},{href:"https://www.udemy.com/advanced-node-for-developers/"}),"here"),"."),Object(o.b)("h2",{id:"node-internals"},"Node Internals"),Object(o.b)("p",null,"Two of the most important dependencies of the NodeJS project are ",Object(o.b)("inlineCode",{parentName:"p"},"V8")," and ",Object(o.b)("inlineCode",{parentName:"p"},"libuv"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"V8")," is an open source JavaScript engine created by Google. The purpose is to execute JavaScript code outside of the browser."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"libuv")," is an open source C++ library that gives NodeJS access to the underlying OS filesystem, networking and some aspects of concurrency + more."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-shell"}),"Javascript Code We Write\n└── Node JS\n    └── V8\n    └── libuv\n")),Object(o.b)("p",null,"What is the purpose of NodeJS instead of the dependencies? "),Object(o.b)("p",null,"Some of the dependencies are not all JavaScript. V8 is ~70% C++ and libuv is 100% C++."),Object(o.b)("p",null,"The other thing Node does is set a consistent set of wrappers ie ",Object(o.b)("inlineCode",{parentName:"p"},"http"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"path"),", ",Object(o.b)("inlineCode",{parentName:"p"},"crypto")," etc which is mostly wrappers for the ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," project."),Object(o.b)("p",null,"By makin use of NodeJS, we don't have to worry about the underlying C++."),Object(o.b)("h2",{id:"module-implementations"},"Module Implementations"),Object(o.b)("p",null,"To understand this, we can:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Pick a function in Node standard library"),Object(o.b)("li",{parentName:"ol"},"Find where its implemented in the Node source code"),Object(o.b)("li",{parentName:"ol"},"See how V8 and libuv are used to implement that function")),Object(o.b)("p",null,"The example here we will use is ",Object(o.b)("inlineCode",{parentName:"p"},"pbkdf2"),", which is the name of a hashing algorithm found within Nodejs' 'crypto' library."),Object(o.b)("p",null,"How does the implementation work? Looking through ",Object(o.b)("inlineCode",{parentName:"p"},"github.com"),", we see that we pass a ",Object(o.b)("inlineCode",{parentName:"p"},"password"),", ",Object(o.b)("inlineCode",{parentName:"p"},"salt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"other options"),"."),Object(o.b)("p",null,"When checking the Nodejs Github account, we can check ",Object(o.b)("inlineCode",{parentName:"p"},"lib")," as the JavaScript side of the project, while ",Object(o.b)("inlineCode",{parentName:"p"},"src")," is the C++ implementation of all those functions - this is where ",Object(o.b)("inlineCode",{parentName:"p"},"Node")," pulls in ",Object(o.b)("inlineCode",{parentName:"p"},"libuv"),"."),Object(o.b)("p",null,"You'll notice in the ",Object(o.b)("inlineCode",{parentName:"p"},"pbkdf2")," JavaScript function, it returns ",Object(o.b)("inlineCode",{parentName:"p"},"_pbkdf2")," which itself does a bunch of error checking until you get to a block of code that calls ",Object(o.b)("inlineCode",{parentName:"p"},"PBKDF2"),". This function ",Object(o.b)("inlineCode",{parentName:"p"},"PBKDF2")," is where C++ handles the function."),Object(o.b)("p",null,"You can see ",Object(o.b)("inlineCode",{parentName:"p"},"PBKDF2")," is required from ",Object(o.b)("inlineCode",{parentName:"p"},"process.binding('crypto')")," - that line is where the magic happens between binding C++ to the JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-shell"}),"Javascript Code We Write\n└── Nodes JS side (lib folder in repo)\n └── process.binding() # connects JS and C++ functions\n   └── V8 # converts values between JS and C++ world\n      └── Nodes C++ side (src folder in repo)\n        └── libuv # gives Node easy access to underlying OS\n")),Object(o.b)("h2",{id:"c-in-node"},"C++ In Node"),Object(o.b)("p",null,"Within the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," directory of the Node project on Github, we can find the JS equivalent ",Object(o.b)("inlineCode",{parentName:"p"},".cc")," file for the module ",Object(o.b)("inlineCode",{parentName:"p"},"node_{module-name}.cc"),"."),Object(o.b)("p",null,"In the case before, we could check ",Object(o.b)("inlineCode",{parentName:"p"},"node_crypto.cc")," for the Crypto module."),Object(o.b)("h2",{id:"where-does-v8-and-libuv-come-into-play"},"Where does V8 and libuv come into play?"),Object(o.b)("p",null,"Within the ",Object(o.b)("inlineCode",{parentName:"p"},".cc")," files, you'll see a lot of ",Object(o.b)("inlineCode",{parentName:"p"},"using v8::{name}")," where ",Object(o.b)("inlineCode",{parentName:"p"},"v8")," allows us to import the C++ definition of JavaScript concepts."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"libuv")," is harder to see the presence. If you search ",Object(o.b)("inlineCode",{parentName:"p"},"uv")," you'll find works like ",Object(o.b)("inlineCode",{parentName:"p"},"uv_work_t")," where ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," is used heavily for concurrency."),Object(o.b)("p",null,"Note that there is a lot of interopability between ",Object(o.b)("inlineCode",{parentName:"p"},"v8")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," project."),Object(o.b)("h2",{id:"the-basics-of-threads"},"The Basics of Threads"),Object(o.b)("p",null,"When you run something up on the computer, you run a process."),Object(o.b)("p",null,'Within a process, you can have multiple things called "threads" that you can think of as a "todo list" for the CPU to complete.'),Object(o.b)("p",null,"A single process can have multiple threads inside of it. You can tell this is possible thanks to things such as ",Object(o.b)("inlineCode",{parentName:"p"},"Activity Monitor")," which tells you the number of processes and threads."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Scheduling")," refers to the OS ability to decide which thread to process at any given time. This becomes relevant with many processes and threads running."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"OS Scheduler")," makes sure no important threads don't wait too long."),Object(o.b)("p",null,"There are strategies to help with the process that these ",Object(o.b)("inlineCode",{parentName:"p"},"threads")," get processed."),Object(o.b)("p",null,"One approach is the include more CPU Cores. With more cores, we can process multiple threads in parallel."),Object(o.b)("p",null,"Note: Technically one core can process more than one thread at a time through a process known as ",Object(o.b)("inlineCode",{parentName:"p"},"multithreading")," (sometimes called ",Object(o.b)("inlineCode",{parentName:"p"},"hyperthreading"),")."),Object(o.b)("p",null,"While one thread is processing and waiting for an asynchronous reply, the OS scheduler can schedule another thread for work. This is important for the Nodejs event loop."),Object(o.b)("h2",{id:"the-nodejs-event-loop"},"The Nodejs Event Loop"),Object(o.b)("p",null,"The event loop is used by Node to handle asynchronous code written in our applications."),Object(o.b)("p",null,"When we start up a Node program, Node automatically creates one thread and executes all code on that one thread."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"event loop")," itself is like a control structure that tells the one thread what it should be doing at any given time."),Object(o.b)("p",null,"Every program that we run has exactly one ",Object(o.b)("inlineCode",{parentName:"p"},"event loop"),". This is extremely important to know in order to understand how the program behaves which in turn will help us with performance issues."),Object(o.b)("p",null,"Understanding it is not easy - but it is notoriously difficult to wrap your head around."),Object(o.b)("p",null,"Instead of looking at complicated diagrams, we will write some pseudocode to emulate the event loop."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// node myFile.js\nconst pendingTimers = [];\nconst pendingOSTasks = [];\nconst pendingOperations = [];\n\n// New timers, tasks, operations are recorded from myFile running\nmyFile.runContents();\n\nfunction shouldContinue() {\n  // Node does three checks\n\n  // Check 1: Are there any functions registers with setTimeout, setInterval or setImmediate?\n\n  // Check 2: Check if there are any pending OS tasks eg http server listening to requests on some port\n\n  // Check 3: Are there any pending long running operations still being executed eg function call inside the fs module\n\n  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;\n}\n\n// pseudo mocking the event loop \"tick\" for each iteration - executes entire body in one \"tick\"\nwhile(shouldContinue()) {\n  // 1) Node looks at pendingTimers and sees if any functions are ready to be called (setTimeout, setInterval)\n\n  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks\n\n  // 3) Node pauses execution temporarily and sits around waiting for new events to occur. Continue when ...\n  // - a new pendingOSTask is done\n  // - a new pendingOperation is done\n  // - a timer is about to complete\n\n  // 4) Node again looks at pendingTimers. (does not care about setTimeout, setInterval - only setImmediate). Call any setImmediate.\n\n  // 5) Handle any 'close' events eg readStream.on('close', callback)\n}\n\n// exit back to terminal\n")),Object(o.b)("h2",{id:"is-node-single-threaded"},"Is Node Single Threaded?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node ",Object(o.b)("inlineCode",{parentName:"li"},"Event Loop")," = single threaded"),Object(o.b)("li",{parentName:"ul"},"Some of Node ",Object(o.b)("inlineCode",{parentName:"li"},"Framework/Std Lib")," = NOT single threaded")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Event Loop")," itself is truly single threaded. This is commonly seen as a bad thing, as the event loop can only run on one CPU core."),Object(o.b)("p",null,"However, some of the functions included in the standard library of Node are not single threaded - they run outside of the event loop."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// thread.js\nconst crypto = require('crypto');\n\nconst start = Date.now();\n\n// note both following calls will be invoked at the same time\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('1:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('2:', Date.now() - start);\n});\n")),Object(o.b)("p",null,"You'll notice that you'll get two benchmarks that are very similar in time."),Object(o.b)("p",null,"If it were single threaded, we would have expected the times to not be so similar."),Object(o.b)("p",null,"This indicates that we are breaking out of a single threaded function with Nodejs."),Object(o.b)("p",null,"This is thanks to the ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," thread pool."),Object(o.b)("h2",{id:"the-libuv-thread-pool"},"The Libuv Thread Pool"),Object(o.b)("p",null,"All the work from the ",Object(o.b)("inlineCode",{parentName:"p"},"crypto.pbkdf2")," function is delegated to Node's C++ side."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," module has a responsibility for some expensive standard library functions to be handled outside of the event loop."),Object(o.b)("p",null,"These functions make use of the thread pool. It's a series of four threads that can be used for computationally expensive tasks. These are in addition to the event loop."),Object(o.b)("p",null,"Many of the standard library functions make use of this thread pool."),Object(o.b)("p",null,"In order to test when the thread loop is full:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// thread.js\nconst crypto = require('crypto');\n\nconst start = Date.now();\n\n// note both following calls will be invoked at the same time\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('1:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('2:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('3:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('4:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('5:', Date.now() - start);\n});\n")),Object(o.b)("p",null,"Note that the result we get is that some logs happen almost simultaneously (but with double the amount of time), where there is a pause before other results come through. This is the thread pool itself in action."),Object(o.b)("h2",{id:"changing-threadpool-size"},"Changing Threadpool Size"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// thread.js\nprocess.env.UV_THREADPOOL_SIZE = 2; // tells libuv to only create two threads in the thread pool\n\nconst crypto = require('crypto');\n\nconst start = Date.now();\n\n// note both following calls will be invoked at the same time\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('1:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('2:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('3:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('4:', Date.now() - start);\n});\n\ncrypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n  console.log('5:', Date.now() - start);\n});\n")),Object(o.b)("p",null,"You'll notice that the timing now happens even quicker for the first two calls. Customising the thread pool here has worked in our favour."),Object(o.b)("p",null,"If we did this using the value of ",Object(o.b)("inlineCode",{parentName:"p"},"5"),", we notice that all 5 calls complete at a similar time but with a longer timeframe for all to return from completion."),Object(o.b)("h2",{id:"common-threadpool-questions"},"Common Threadpool Questions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Can we use the threadpool for JS code or can it only be used with certain NodeJS functions? We can write custom JS code that uses the thread pool."),Object(o.b)("li",{parentName:"ol"},"What functions in ",Object(o.b)("inlineCode",{parentName:"li"},"node std lib")," make use of the threadpool? All FS module function, some crypto stuff. Depends on OS (Windows vs Unix based)."),Object(o.b)("li",{parentName:"ol"},"How does this threadpool stuff fit into the event loop? Tasks running in the threadpool are the ",Object(o.b)("inlineCode",{parentName:"li"},"pendingOperations")," in the pseudocode example.")),Object(o.b)("h2",{id:"explaining-os-operations--libuv-os-delegation"},"Explaining OS Operations + Libuv OS Delegation"),Object(o.b)("p",null,"What are the ",Object(o.b)("inlineCode",{parentName:"p"},"pendingOSTasks")," that we talk about in the pseudocode?"),Object(o.b)("p",null,"We will explain this by using another benchmark."),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// async.js\nconst https = require('https');\n\nconst start = Date.now();\n\nfunction doRequest() {\n  https.request('https://www.google.com', res => {\n     res.on('data', () => {});\n     res.on('end', () => {\n       console.log(Date.now() - start);\n     });\n   }).end();\n}\n\ndoRequest();\ndoRequest();\ndoRequest();\ndoRequest();\ndoRequest();\ndoRequest();\n")),Object(o.b)("p",null,"It appears as if all the ",Object(o.b)("inlineCode",{parentName:"p"},"doRequest")," calls are completed at near the same time - distinctly different behaviour to the thread pool given we ran the request six times."),Object(o.b)("p",null,"What we're seeing here is more evidence of ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," in play, but it is not the thread pool. It also have some function that make use of the underlying operating system."),Object(o.b)("p",null,"Neither ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," nor ",Object(o.b)("inlineCode",{parentName:"p"},"node")," has the operations to handle the request making. It is actually the real operating system making the http request. Because the work is delegating to the operating system, the OS decides on whether to make a new thread or not. We're not touching the thread pool at all in this case."),Object(o.b)("h2",{id:"commmon-osasync-questions"},"Commmon OS/Async Questions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What functions in ",Object(o.b)("inlineCode",{parentName:"li"},"node std lib")," use the OS's async features? Almost everything around networking for all OS's. Some other stuff is OS specific."),Object(o.b)("li",{parentName:"ol"},"How does this OS Async stuff fit into the event loop? Tasks using the underlying OS are reflected in our ",Object(o.b)("inlineCode",{parentName:"li"},"pendingOSTasks")," array.")),Object(o.b)("h2",{id:"crazy-node-behaviour"},"Crazy Node Behaviour"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// multitask.js\nconst https = require('https');\nconst crypto = require('crypto');\nconst fs = require('fs');\n\nconst start = Date.now();\n\nfunction doRequest() {\n  https.request('https://www.google.com', res => {\n     res.on('data', () => {});\n     res.on('end', () => {\n       console.log('HTTPS:', Date.now() - start);\n     });\n   }).end();\n}\n\nfunction doHash() {\n  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {\n    console.log('Hash:', Date.now() - start);\n  });\n}\n\ndoRequest();\n\nfs.readFile('multitask.js', 'utf8', () => {\n  console.log('FS:' Date.now() - start);\n});\n\n// specifically called 4 times\ndoHash();\ndoHash();\ndoHash();\ndoHash();\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"fs")," call exhibits some really interesting behaviour. Given the ",Object(o.b)("inlineCode",{parentName:"p"},"libuv")," threadpool of 4, the OS scheduler and core threading."),Object(o.b)("p",null,"The answers deals with the pausing times required for the ",Object(o.b)("inlineCode",{parentName:"p"},"fs.readFile")," function."),Object(o.b)("p",null,"Given the size of the thread pool, the ",Object(o.b)("inlineCode",{parentName:"p"},"fs")," call would be assigned to thread #1, while the next three ",Object(o.b)("inlineCode",{parentName:"p"},"doHash")," calls were assigned to the other threads. "),Object(o.b)("p",null,"Thread #1 then loads up the last ",Object(o.b)("inlineCode",{parentName:"p"},"doHash")," call while thread #1 offloads the ",Object(o.b)("inlineCode",{parentName:"p"},"fs.readFile")," to the hard drive until the callback completes."),Object(o.b)("p",null,"Once thread #2 finishes the work, it checks if any info has come back from the ",Object(o.b)("inlineCode",{parentName:"p"},"hard drive")," (which it has), so the ",Object(o.b)("inlineCode",{parentName:"p"},"fs.readFile")," function the completes. Note: it does have a second pause callback, but given the worker thread was free, it was able to handle the second response straight away."),Object(o.b)("p",null,"Note that setting ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.UV_THREADPOOL_SIZE = 5;")," would allow ",Object(o.b)("inlineCode",{parentName:"p"},"fs")," to have a spare thread to complete quickly with the other four ",Object(o.b)("inlineCode",{parentName:"p"},"doHash")," calls finishing at a similar timeframe, whereas ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.UV_THREADPOOL_SIZE = 1;")," would block the ",Object(o.b)("inlineCode",{parentName:"p"},"fs")," call from finishing until right at the end. "))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/Node-Internals.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-node-internals-md-4f29e9a40e678d9c8e02.js.map