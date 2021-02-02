(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{"V3++":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/Digging-Into-Nodejs.md"}});var i={_frontmatter:s},m=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(m,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"digging-into-nodejs"},"Digging Into Nodejs"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://frontendmasters.com/courses/digging-into-node/"}),"FE Masters Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/substack/stream-handbook"}),"GitHub Stream handbook")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options"}),"readable.pipe")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/getify/caf"}),"Cancelable Async Functions - GitHub"))),Object(a.b)("h2",{id:"streams"},"Streams"),Object(a.b)("p",null,'There are two stream modes that are known as "simplex" (unidirectional):'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Read/readable stream that you can consume."),Object(a.b)("li",{parentName:"ol"},"Write/writeable stream that they can receive inputs and you can write to them.")),Object(a.b)("p",null,'There is also a "duplex" stream that is bidirectional (can be written to and read from). Duplex is not covered in this course.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'var stream1; // readable\nvar stream2; // writeable\n\n// "Take my readable stream and pipe it to my writeable"\nvar stream3 = stream1.pipe(stream2); // chunks at a time using binary buffers\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Think of streams as gardens hoses that you want to be able to connect things to.")),Object(a.b)("p",null,"It is important to know that a return value from a ",Object(a.b)("inlineCode",{parentName:"p"},".pipe")," call stream is another readable stream."),Object(a.b)("p",null,"This also means that we can keep chaining and piping as many writables as possible as possible."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'var stream1; // readable\nvar stream2; // writeable\n\n// "Take my readable stream and pipe it to my writeable"\n// stream1 into stream2 into stream5 into final\nvar stream3 = stream1\n  .pipe(stream2)\n  .pipe(stream5)\n  .pipe(final); // chunks at a time using binary buffers\n')),Object(a.b)("h3",{id:"creating-the-read-stream"},"Creating the read stream"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"let stream = fs.createReadStream('path/to/file');\nprocessFile(stream);\n\nfunction processFile(inStream) {\n  var outStream = inStream;\n  var targetStream = process.stdout;\n  outStream.pipe(targetStream); // pipe to process.stdout\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This difference here is that we don't keep the entire file in the buffer.")),Object(a.b)("h2",{id:"transform-stream"},"Transform Stream"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// other requires omitted for brevity\nvar Transform = require('stream').transform;\n\nlet stream = fs.createReadStream('path/to/file');\nprocessFile(stream);\n\nfunction processFile(inStream) {\n  var outStream = inStream;\n\n  var upperStream = new Transform({\n    // Note: next is a callback\n    transform(chunk, enc, next) {\n      this.push(chunk.toString().toUpperCase());\n      // Only using set time out to prove stream.\n      // Normally you just call next().\n      setTimeout(next, 500);\n    },\n  });\n\n  outStream = outStream.pipe(upperStream);\n\n  var targetStream = process.stdout;\n  outStream.pipe(targetStream); // pipe to process.stdout\n}\n")),Object(a.b)("h2",{id:"outputting-to-file"},"Outputting to file"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// other requires omitted for brevity\nvar Transform = require('stream').transform;\n\nlet stream = fs.createReadStream('path/to/file');\nprocessFile(stream);\n\nfunction processFile(inStream) {\n  var outStream = inStream;\n\n  var upperStream = new Transform({\n    // Note: next is a callback\n    transform(chunk, enc, next) {\n      this.push(chunk.toString().toUpperCase());\n      // Only using set time out to prove stream.\n      // Normally you just call next().\n      setTimeout(next, 500);\n    },\n  });\n\n  outStream = outStream.pipe(upperStream);\n\n  var targetStream;\n\n  if (args.out) {\n    targetStream = process.stdout;\n  } else {\n    targetStream = fs.createWriteStream('path/to/file');\n  }\n\n  outStream.pipe(targetStream); // pipe to process.stdout\n}\n")),Object(a.b)("h2",{id:"gzip-compression-with-zlib"},"gzip Compression with zlib"),Object(a.b)("p",null,"A common transformation is the unzip, process them, then rezipping it."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// other requires omitted for brevity\nvar Transform = require('stream').transform;\nvar zlin = require('zlip');\n\nlet stream = fs.createReadStream('path/to/file');\nprocessFile(stream);\n\nfunction processFile(inStream) {\n  var outStream = inStream;\n\n  // handling compressed files\n  if (args.uncompress) {\n    let gunzipStream = zlib.createGunzip();\n    outStream = outStream.pipe(gunzipStream);\n  }\n\n  var upperStream = new Transform({\n    // Note: next is a callback\n    transform(chunk, enc, next) {\n      this.push(chunk.toString().toUpperCase());\n      next();\n    },\n  });\n\n  outStream = outStream.pipe(upperStream);\n\n  // Compression code!\n  if (args.compress) {\n    let gzipStream = zlin.createGzip();\n    // adding additional stream\n    outStream = outStream.pipe(gzipStream);\n    // ensure name output changes\n    OUTSTREAM_NAME = `${OUTSTREAM_NAME}.gz`;\n  }\n\n  var targetStream;\n\n  if (args.out) {\n    targetStream = process.stdout;\n  } else {\n    targetStream = fs.createWriteStream('path/to/file');\n  }\n\n  outStream.pipe(targetStream); // pipe to process.stdout\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Gzip was designed for streams, that is why it is so easy.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that for ",Object(a.b)("inlineCode",{parentName:"p"},"vi out.txt.gz")," that Vim automatically unzips it for you!")),Object(a.b)("h2",{id:"determining-end-of-stream"},"Determining End of Stream"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// building a helper\nfunction streamComplete(stream) {\n  return new Promise(function c(res) {\n    stream.on('end', res);\n  });\n}\n\nasync function processFile(inStream) {\n  var outStream = inStream;\n\n  // handling compressed files\n  if (args.uncompress) {\n    let gunzipStream = zlib.createGunzip();\n    outStream = outStream.pipe(gunzipStream);\n  }\n\n  var upperStream = new Transform({\n    // Note: next is a callback\n    transform(chunk, enc, next) {\n      this.push(chunk.toString().toUpperCase());\n      next();\n    },\n  });\n\n  outStream = outStream.pipe(upperStream);\n\n  // Compression code!\n  if (args.compress) {\n    let gzipStream = zlin.createGzip();\n    // adding additional stream\n    outStream = outStream.pipe(gzipStream);\n    // ensure name output changes\n    OUTSTREAM_NAME = `${OUTSTREAM_NAME}.gz`;\n  }\n\n  var targetStream;\n\n  if (args.out) {\n    targetStream = process.stdout;\n  } else {\n    targetStream = fs.createWriteStream('path/to/file');\n  }\n\n  outStream.pipe(targetStream); // pipe to process.stdout\n\n  await streamComplete(outStream);\n}\n")),Object(a.b)("h2",{id:"asynchronous-cancellation--timeouts"},"Asynchronous Cancellation & Timeouts"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var CAF = require('caf');\n\nprocessFile = CAF(processFile);\n\nfunction* processFile(signal, inStream) {\n  var outStream = inStream;\n\n  // handling compressed files\n  if (args.uncompress) {\n    let gunzipStream = zlib.createGunzip();\n    outStream = outStream.pipe(gunzipStream);\n  }\n\n  var upperStream = new Transform({\n    // Note: next is a callback\n    transform(chunk, enc, next) {\n      this.push(chunk.toString().toUpperCase());\n      next();\n    },\n  });\n\n  outStream = outStream.pipe(upperStream);\n\n  // Compression code!\n  if (args.compress) {\n    let gzipStream = zlin.createGzip();\n    // adding additional stream\n    outStream = outStream.pipe(gzipStream);\n    // ensure name output changes\n    OUTSTREAM_NAME = `${OUTSTREAM_NAME}.gz`;\n  }\n\n  var targetStream;\n\n  if (args.out) {\n    targetStream = process.stdout;\n  } else {\n    targetStream = fs.createWriteStream('path/to/file');\n  }\n\n  outStream.pipe(targetStream); // pipe to process.stdout\n\n  signal.pr.catch(function f() {\n    outStream.unpipe(targetStream);\n    outStream.destroy(); // kill the stream process\n  });\n\n  yield streamComplete(outStream);\n}\n\n// later\nlet tooLong = CAF.timeout(3); // cancel at 3\nprocessFile(tooLong, stream)\n  .then(() => console.log('Complete'))\n  .catch(error);\n")),Object(a.b)("h2",{id:"child-processes"},"Child Processes"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const childProc = require('child_process');\nasync function main() {\n  var child = childProc.spawn('node', ['index.js']);\n  child.on('exit', function(code) {\n    console.log('Child finished', code);\n  });\n}\n")),Object(a.b)("h3",{id:"exit-codes"},"Exit Codes"),Object(a.b)("p",null,"The commands are based on POSIX standards."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Meaning"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Success")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Fail")))),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"process.exitCode(value)")," in the child processes to communicate back."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/Digging-Into-Nodejs.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-digging-into-nodejs-md-7ca09ecfda6c4bd19d2a.js.map