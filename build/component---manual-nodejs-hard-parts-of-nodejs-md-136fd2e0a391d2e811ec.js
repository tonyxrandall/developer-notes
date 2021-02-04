(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{UkVY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/Hard-Parts-of-Nodejs.md"}});var i={_frontmatter:s},l=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"the-hard-parts-of-servers--nodejs"},"The Hard Parts of Servers & Node.js"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://frontendmasters.com/courses/servers-node-js/"}),"FE Masters Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://static.frontendmasters.com/resources/2019-04-24-servers-node-js/Hard-Parts-Servers-Node.pdf"}),"Course Slides")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodejs.org/api/stream.html#stream_stream"}),"Node.js Stream documentation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodejs.org/api/timers.html#timers_setimmediate_callback_args"}),"setImmediate docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/"}),"Node.js event loop")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodejs.org/api/"}),"Node API")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodejs.org/api/cluster.html"}),"Node Cluster documentation"))),Object(a.b)("h2",{id:"streams"},"Streams"),Object(a.b)("p",null,"What if Node used the 'event' (message-broadcasting) pattern to send out a message ('event') each time a sufficient batch of the data had been loaded in? This is the idea behind streams."),Object(a.b)("p",null,"Streams bring in the event loop and callback queue in Nodejs."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The default size of batches in a stream is 64kB.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // `req` is an http.IncomingMessage, which is a Readable Stream.\n  // `res` is an http.ServerResponse, which is a Writable Stream.\n\n  let body = '';\n  // Get the data as utf8 strings.\n  // If an encoding is not set, Buffer objects will be received.\n  req.setEncoding('utf8');\n\n  // Readable streams emit 'data' events once a listener is added.\n  req.on('data', chunk => {\n    body += chunk;\n  });\n\n  // The 'end' event indicates that the entire body has been received.\n  req.on('end', () => {\n    try {\n      const data = JSON.parse(body);\n      // Write back something interesting to the user:\n      res.write(typeof data);\n      res.end();\n    } catch (er) {\n      // uh oh! bad json!\n      res.statusCode = 400;\n      return res.end(`error: ${er.message}`);\n    }\n  });\n});\n\nserver.listen(1337);\n\n// $ curl localhost:1337 -d \"{}\"\n// object\n// $ curl localhost:1337 -d \"\\\"foo\\\"\"\n// string\n// $ curl localhost:1337 -d \"not json\"\n// error: Unexpected token o in JSON at position 1\n")),Object(a.b)("p",null,"Alternative to the above, you can process the chunks on the ",Object(a.b)("inlineCode",{parentName:"p"},"data")," event instead of doing it all at the end:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"let cleanedTweets ''\n\nfunction cleanTweets(tweetsToClean) {\n  // algo to remove bad tweets from tweetsToClean\n}\n\n// fires after each batch comes through!\nfunction doOnNewBatch(data) {\n  cleanedTweets += cleanTweets(data)\n}\n\nconst accessTweetsArchive = fs.createReadStream('./tweetsArchive.json')\naccessTweetsArchive.on('data', doOnNewBatch)\n")),Object(a.b)("p",null,'The "callback queue" comes into play to ensure that any data coming through on the next batch does not trigger the callback straight away with the new data. The function with the next batch is stored to this callback queue and the event loop pulls it off the queue once the previous work is done.'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"All these streaming events do not share the same queue.")),Object(a.b)("p",null,"Note: once the stream is done, it will run the ",Object(a.b)("inlineCode",{parentName:"p"},"close")," event. Note that everything comes in as a buffer."),Object(a.b)("h2",{id:"async-node"},"Async Node"),Object(a.b)("p",null,"Here are some important definitions to know:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Call stack: JavaScript keeps track of what functionis being run and where it was run from. Whenever a function is to be run, it’s added to the call stack."),Object(a.b)("li",{parentName:"ul"},"Callback queue: any functions delayed from running (and run automatically by Node) are added to the callback queue when the background Node task has completed (or there’s been some activity like a request)"),Object(a.b)("li",{parentName:"ul"},"Event loop: Determines what function/code to run next from the queue(s)")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Here is there things: there are a bunch of different queues and the event loop is very restrictive about what is allow on the call stack.")),Object(a.b)("p",null,"What order is the following code run?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"function useImportedTweets(errorData, data) {\n  const tweets = JSON.parse(data);\n  console.log(tweets.tweet1);\n}\nfunction immediately() {\n  console.log('Run me last!');\n}\nfunction printHello() {\n  console.log('Hello');\n}\nfunction blockFor500ms() {\n  // Block JS thread DIRECTLY for 500 ms\n  // With e.g. a for loop with 5m elements\n}\nsetTimeout(printHello, 0); //  printHello goes to Timer Queue\nfs.readFile('./tweets.json', useImportedTweets); // useImportedTweets goes to I/O queue\nblockFor500ms();\nconsole.log('Me first');\nsetImmediate(immediately); // immediately added to Check Queue\n")),Object(a.b)("p",null,"Note that in the above and because of what happens with async Node, the order to be fired is that ",Object(a.b)("inlineCode",{parentName:"p"},"blockFor500ms")," will run, then the ",Object(a.b)("inlineCode",{parentName:"p"},"printHello")," function will come off the timer queue, then ",Object(a.b)("inlineCode",{parentName:"p"},"useImportedTweets")," from the I/O queue, then ",Object(a.b)("inlineCode",{parentName:"p"},"immediately")," from the check queue."),Object(a.b)("h2",{id:"queue-rules"},"Queue Rules"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Hold each deferred function in one of the task queues when the Node background API 'completes'"),Object(a.b)("li",{parentName:"ol"},"Add the function to the Call stack (i.e. execute the function) ONLY when the call stack is totally empty (Have the Event Loop check this condition)"),Object(a.b)("li",{parentName:"ol"},"Prioritize functions in Timer 'queue' over I/O queue, over setImmediate ('check') queue")),Object(a.b)("h3",{id:"timer-queue"},"Timer Queue"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"useSetTimeout")," is an example of something in the timer queue that runs through libuv.")),Object(a.b)("h3",{id:"io-queue"},"I/O Queue"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Examples functions from the ",Object(a.b)("inlineCode",{parentName:"li"},"fs")," module."),Object(a.b)("li",{parentName:"ul"},"Network socket is another example.")),Object(a.b)("h3",{id:"check-queue"},"Check Queue"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"setImmediate")," is a under the check queue.")),Object(a.b)("h3",{id:"microtask"},"Microtask"),Object(a.b)("p",null,"The Microtask queue that comes with Promises is actually prioritised over the top of the others, and between it there is also two types."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"process.nextTick()")," would get put in the first type of queue."),Object(a.b)("li",{parentName:"ol"},"Other promises would be put in the other part.")),Object(a.b)("h3",{id:"close-queue"},"Close Queue"),Object(a.b)("p",null,'The "close" handle queue is used for close events.'))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/Hard-Parts-of-Nodejs.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-hard-parts-of-nodejs-md-136fd2e0a391d2e811ec.js.map