(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{qXaK:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return o})),r.d(n,"default",(function(){return l}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var s=r("/FXl"),t=r("TjRS");r("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/npm/npm-cheat-sheet.md"}});var c={_frontmatter:o},i=t.a;function l(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,["components"]);return Object(s.b)(i,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"npm-help-sheet"},"npm help sheet"),Object(s.b)("h2",{id:"install-npm-dependencies"},"install npm dependencies"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{}),"npm install\n")),Object(s.b)("h2",{id:"useful-npm-dependencies"},"USEFUL NPM DEPENDENCIES"),Object(s.b)("h4",{id:"mongoose---database-helper-for-mongodb"},"MONGOOSE - database helper for MongoDB"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{}),"npm install --save mongoose\n\nmongod // starts the daemon\nmongo // check out the documents\n")),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"var User = mongoose.model('User', UserSchema);\nmodule.exports = User;\n\n// in app.js\nvar User = require('../models/user');\n")),Object(s.b)("h4",{id:"bcrypt---used-for-hashing-and-salting"},"BCRYPT - used for hashing and salting"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{}),"npm install --save bcrypt\n")),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// in User.js\nvar bcrypt = require('bcrypt');\nUserSchema.pre('save', function(next) {\n    var user = this;\n    bcrypt.hash(user.password, 10, function(err, hash) {\n        if (err) {\n            return next(err);\n        }\n        user.password = hash;\n        next();\n    })\n});\n\nUserSchema.statics.authenticate = function(email, password, callback) {\n    User.findOne({ email: email })\n        .exec(function (error, user) {\n            if (error) {\n                return callback(error);\n            } else if (!user) {\n                var err = new Error('User not found.');\n                err.status = 401;\n                return callback(err);\n            }\n            bcrypt.compare(password, user.password, function (error, result) {\n                if (result === true) {\n                    return callback(null, user);\n                } else {\n                    return callback();\n                }\n            });\n        });\n}\n\n// Example in app.js for Express\n\nrouter.post('/login', function(req, res, next) {\n    if (req.body.email && req.body.password) {\n        User.authenticate(req.body.email, req.body.password, function (error, user) {\n            if (error || !user) {\n                var err = new Error('Wrong email or password.');\n                err.status = 401;\n                return next(err);\n            } else {\n                req.session.userId = user._id;\n                return res.redirect('/profile');\n            }\n        });\n    } else {\n        var err = new Error('Email and password are required.');\n        err.status = 401;\n        return next(err);\n    }\n});\n")),Object(s.b)("h4",{id:"express-session---save-sessions-to-use-throughout-the-website"},"EXPRESS SESSION - save sessions to use throughout the website"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{}),"npm install express-session --save\n")),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// in app.js\n\nvar session = require('express-session');\n\n// use sessions for tracking logins - check more in the readme\napp.use(session({\n    secret: 'treehouse loves you',\n    resave: true,\n    saveUninitialized: false\n}));\n\n// not useful when in production. check https://github.com/expressjs/session#compatible-session-stores\n")),Object(s.b)("h4",{id:"connect-mongo---used-for-quick-middleware-access-to-mongo"},"CONNECT-MONGO - used for quick middleware access to Mongo"),Object(s.b)("p",null,"connect-mongo is a middleware already written for us!"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{}),"npm install connect-mongo --save\n")),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"require MongoStore = require('connect-mongo')(session);\n\n// in app.js\n\napp.use(session({\n    secret: 'treehouse loves you',\n    resave: true,\n    saveUninitialized: false\n    store: new MongoStore({\n        mongooseConnection: db\n    })\n}));\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/npm/npm-cheat-sheet.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-npm-npm-cheat-sheet-md-76ce6860e0decda49ef4.js.map