(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{"6MNk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),b=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/MEAN-Stack-TH.md"}});var s={_frontmatter:o},p=b.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,["components"]);return Object(r.b)(p,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"BUILDING A MEAN APPLICATION"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 1: GETTING STARTED WITH MONGODB"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"What MEAN means"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"M - MongoDB\nE - Express\nA - Angular\nN - Node.js"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"data stored in MongoDB documents"),Object(r.b)("li",{parentName:"ul"},"Express.js deals with the data"),Object(r.b)("li",{parentName:"ul"},"Angular shows it to the user"),Object(r.b)("li",{parentName:"ul"},"MEAN is widely adopted"),Object(r.b)("li",{parentName:"ul"},"Powerful and flexible technologies"),Object(r.b)("li",{parentName:"ul"},"Well organised and lean")),Object(r.b)("p",null,"THE APP"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To do app using the MEAN stack")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MEAN.js generator -> used for scaffolding.")),Object(r.b)("p",null,"yo meanjs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"yo from yeoman")),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",a({parentName:"li"},{start:2}),Object(r.b)("li",{parentName:"ol"},"Setting up an\nExpress Application"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"create src\nnpm init"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"set entry point: src/app.js")),Object(r.b)("p",null,"Then add in Angular."),Object(r.b)("p",null,"ls .git\nrm .git"),Object(r.b)("p",null,"touch src/app.js\necho 'node_modules' >> .gitignore\ngit init"),Object(r.b)("p",null,"atom . //used for editing app.js"),Object(r.b)("p",null,"QUESTIONS"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Serves the public directory when the root of the site is requested?")),Object(r.b)("p",null,"A: app.use('/', express.static('public'));\nOR app.use(express.static('public'));"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 2: Setting up the Express API"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Setting Up an Express\nAPI")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"GET Routes"),Object(r.b)("p",null,"app.get('/todos', function(req, res) {\nres.send('These are the todos');\n})"),Object(r.b)("p",null,"var route = express.Router();"),Object(r.b)("p",null,"router.get('/todos', function(req, res) {\nres.json({todos:[]});\n});"),Object(r.b)("p",null,"//these comments are examples of what was used in the Express app"),Object(r.b)("p",null,"// TODO: Add POST route to create new entries"),Object(r.b)("p",null,"// TODO: Add PUT route to update existing entries"),Object(r.b)("p",null,"// TODO: Add DELETE route to drop existing entries"),Object(r.b)("p",null,"app.use('/api', router);"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",a({parentName:"li"},{start:4}),Object(r.b)("li",{parentName:"ol"},"Create an API\nController"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"// ./api/index.js"),Object(r.b)("p",null,"'use strict';"),Object(r.b)("p",null,"var express = require('express');\nvar Todo = require('../models/todo');"),Object(r.b)("p",null,"var router = express.Router();"),Object(r.b)("p",null,"router.get('/todos', function(req, res) {\nTodo.find({}, function(err, todos) {\nif (err) {\nreturn res.status(500).json({ message: err.message });\n}\nres.json({ todos: todos });\n});\n});"),Object(r.b)("p",null,"router.post('/todos', function(req, res) {\nvar todo = req.body;\nTodo.create(todo, function(err, todo) {\nif (err) {\nreturn res.status(500).json({ err: err.message });\n}\nres.json({ 'todo': todo, message: 'Todo Created' });\n});\n});"),Object(r.b)("p",null,"router.put('/todos/:id', function(req, res) {\nvar id = req.params.id;\nvar todo = req.body;\nif (todo && todo._id !== id) {\nreturn res.status(500).json({ err: \"Ids don't match!\" });\n}\nTodo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {\nif (err) {\nreturn res.status(500).json({ err: err.message });\n}\nres.json({ 'todo': todo, message: 'Todo Updated' });\n});\n});"),Object(r.b)("p",null,"router.delete('/todos/:id', function(req, res) {\nvar id = req.params.id;\nTodo.findByIdAndRemove(id, function(err, result) {\nif (err) {\nreturn res.status(500).json({ err: err.message });\n}\nres.json({ message: 'Todo Deleted' });\n});\n});"),Object(r.b)("p",null,"module.exports = router;"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",a({parentName:"li"},{start:4}),Object(r.b)("li",{parentName:"ol"},"Create mock data"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create mock data for testing. JSON.")),Object(r.b)("p",null,"var todos = require('../../mock/todos.json');"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"postman is the Chrome Extension.")),Object(r.b)("p",null,"//IN THE GET"),Object(r.b)("p",null,"'use strict';"),Object(r.b)("p",null,"var express = require('express');\nvar Todo = require('../models/todo');"),Object(r.b)("p",null,"//dummy data\nvar test_todos = require('../../mock/todos.json');"),Object(r.b)("p",null,"var router = express.Router();"),Object(r.b)("p",null,"router.get('/todos', function(req, res) {\nTodo.find({}, function(err, todos) {\nif (err) {\nreturn res.status(500).json({ message: err.message });\n}\nres.json({ todos: test_todos }); //change to todos or test_todos\n});\n});"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 3: Angular Refresher"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",a({parentName:"li"},{start:5}),Object(r.b)("li",{parentName:"ol"},"Angular Refresher"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",a({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/MEAN-Stack-TH.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-mean-stack-th-md-734ff7bdc67a2d40d5da.js.map