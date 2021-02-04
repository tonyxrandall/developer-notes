(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{"/JJm":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return i}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Redis/Redis-Kue-Nodejs.md"}});var c={_frontmatter:a},u=o.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(u,s({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"redis-queues-and-forking-with-kue"},"Redis queues and forking with Kue"),Object(r.b)("p",null,"Reference these links:"),Object(r.b)("p",null,Object(r.b)("a",s({parentName:"p"},{href:"https://medium.com/@NorbertdeLangen/communicating-between-nodejs-processes-4e68be42b917"}),"https://medium.com/@NorbertdeLangen/communicating-between-nodejs-processes-4e68be42b917"),"\n",Object(r.b)("a",s({parentName:"p"},{href:"https://medium.com/@niratattri/workers-and-node-kue-it-up-1c1215d9bddf"}),"https://medium.com/@niratattri/workers-and-node-kue-it-up-1c1215d9bddf"),"\n",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/Automattic/kue"}),"https://github.com/Automattic/kue")),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"const { fork } = require('child_process');\n\nconst kue = require('kue');\nkue.app.listen(3050);\nconst port = process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379';\nconst host = process.env.REDIS_HOST ? process.env.REDIS_HOST : '127.0.0.1';\n\nlet queue = kue.createQueue({\n  redis: {\n    host: host,\n    port: port\n  }\n});\n\nqueue.process('build', 1, (job, done) => {\n  run(job, done);\n});\n\nconst run = async (job, done) => {\n  try {\n    const { data } = job.data;\n    // process is a forked process\n    const compute = fork('./processes/buildWeb.js');\n    compute.send(data);\n\n    compute.on('message', (_) => {\n      return done();\n    });\n  } catch (err) {\n    console.error(err);\n    return done(new Error(JSON.stringify(err)));\n  }\n};\n\nmodule.exports = (app) => {\n  app.post('/', async function(req, res) {\n    try {\n      // Create a fork for a process\n      const buildJob = queue\n        .create('build', {\n          // Job Type\n          project: project, // Job Data\n          data: req.body\n        })\n        .removeOnComplete(true) // REMOVE THE JOB FROM THE QUEUE ONCE IT'S COMPLETED\n        .attempts(5) // The maximum number of retries you want the job to have\n        .backoff({ delay: 60 * 1000, type: 'exponential' }) // Time between retries. Read docs.\n        .save(); // PERSIST THE DAMN JOB LOL\n\n      buildJob.on('failed', function(errorMessage) {\n        console.log('Job failed');\n        let error = JSON.parse(errorMessage);\n        // error now contains the object passed from the worker when the job failed\n        console.log(error); // Check it out for yourself\n        // call pagerduty or whatever jazz you wanna do in case of failure\n      });\n\n      res.status(200).send('Building ' + project);\n    } catch (err) {\n      return res.status(500).send('Failed');\n    }\n  });\n};\n\n// buildWeb.js\nconst run = async (data) => {\n  try {\n    setTimeout(() => {\n      process.send('Done');\n    }, 3000);\n  } catch (err) {\n    console.error(err);\n  }\n};\n\nprocess.on('message', (data) => {\n  run(data);\n});\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Redis/Redis-Kue-Nodejs.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-redis-redis-kue-nodejs-md-60f9086cc144e67aa1aa.js.map