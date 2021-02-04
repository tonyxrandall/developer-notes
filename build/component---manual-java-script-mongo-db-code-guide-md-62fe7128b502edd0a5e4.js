(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{"7EkO":function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return a})),o.d(n,"default",(function(){return l}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var t=o("/FXl"),r=o("TjRS");o("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Mongo-DB-Code-Guide.md"}});var m={_frontmatter:a},i=r.a;function l(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(t.b)(i,s({},m,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"mongo-cheat-sheet"},"Mongo Cheat Sheet"),Object(t.b)("h2",{id:"mongo-1-mongo-install"},"MONGO-1: Mongo Install"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{}),"npm install mongoose --save\n\n// to run\n\nmongod // starts the daemon\nmongo // check out the documents\n")),Object(t.b)("h2",{id:"mongo-2-mongo-shell"},"MONGO-2: Mongo Shell"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{}),"show dbs — // display the databases\nuse bookworm — // specify the database you're going to work with\nshow collections — // shows the document collections for the selected database\ndb.users.find() — // display all the documents in the users collection\ndb.users.find().pretty() — // nicer format for output documents within the shell\ndb.users.drop() — // remove the users collection from the current database\n")),Object(t.b)("h2",{id:"mongo-3-mongo-sample-usage"},"MONGO-3: Mongo Sample Usage"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// models > user.js\n\nvar mongoose = require('mongoose');\n\nvar UserSchema = new mongoose.Schema({\n  email: {\n    type: String,\n    required: true,\n    trim: true,\n    unique: true,\n  },\n  name: {\n    type: String,\n    required: true,\n    trim: true,\n  },\n  favoriteBook: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\n\nvar User = mongoose.model('User', UserSchema);\nmodule.exports = User;\n\n// in app.js\n\nvar User = require('../models/user');\n")),Object(t.b)("h2",{id:"mongo-4-building-an-example-schema-in-the-mock-folder"},"MONGO-4: Building an Example Schema in the ",Object(t.b)("inlineCode",{parentName:"h2"},"mock")," folder"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{}),"// mock/example.js\n\nimport mongoose from 'mongoose';\n\nconst schema = new mongoose.Schema({\n  question: String,\n  answer: String,\n  completed: Boolean\n});\n\nexport const model = mongoose.model('Layout', schema);\n")),Object(t.b)("h2",{id:"mongo-5-accessing-the-schema-results"},"MONGO-5: Accessing the Schema results"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{}),"// in a route file\nvar express = require('express');\nvar router = express.Router();\n\nimport {ExampleModel} from '../models/example';\n\n/* GET users listing. */\nrouter.get('/', (req, res) => {\n  console.log(ExampleModel);\n  ExampleModel.find({}, \"test string\", (err, results) => {\n    if (err) {\n      return res.status(500).json({message: err.message});  \n    }\n    res.json({ results: results });\n  });\n  // res.json({ todos: \"todos\" });\n    // res.send('respond with a resource');\n});\n\nmodule.exports = router;\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Mongo-DB-Code-Guide.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-mongo-db-code-guide-md-62fe7128b502edd0a5e4.js.map