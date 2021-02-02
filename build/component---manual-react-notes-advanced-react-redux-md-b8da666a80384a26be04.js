(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{OAN2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/Advanced-React-Redux.md"}});var s={_frontmatter:i},c=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"advanced-react-and-redux"},"Advanced React and Redux"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#advanced-react-and-redux"}),"Advanced React and Redux"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#1-testing"}),"1. Testing"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#test-reporting"}),"Test Reporting")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#3-higher-order-components"}),"3. Higher Order Components"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#require-auth-hoc"}),"Require Auth HOC")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#nesting-higher-order-components"}),"Nesting Higher Order Components")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#3-middlewares"}),"3. Middlewares")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#4-authentication"}),"4. Authentication"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#cookies-vs-tokens"}),"Cookies vs Tokens")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#scalable-architecture"}),"Scalable Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#server-setup"}),"Server Setup")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#express-middleware"}),"Express Middleware")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#seeing-the-mongodb-database"}),"Seeing the MongoDB Database")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#authentication-controller"}),"Authentication Controller")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#jwt-overview"}),"JWT Overview")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#passport"}),"Passport")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#using-strategies-with-passport"}),"Using Strategies with Passport")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#using-postman"}),"Using Postman")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#client-side-react-app"}),"Client Side (React App)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#dealing-with-cors-errors-with-a-request-cors-in-a-nutshell"}),"Dealing with CORS errors with a request (CORS in a nutshell)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#local-storage-on-the-client-and-jwt"}),"Local storage on the client and JWT")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#form-vaidation"}),"Form vaidation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#signup-action-creator"}),"Signup Action Creator")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#checking-auth-at-the-start-of-the-application"}),"Checking auth at the start of the application")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#making-authenticated-api-requests"}),"Making Authenticated API Requests"))))))),Object(a.b)("h2",{id:"1-testing"},"1. Testing"),Object(a.b)("p",null,"Jumping into examples are normally more useful as you are learning."),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"testing")," folder you will see a whole bunch of configuration for ",Object(a.b)("inlineCode",{parentName:"p"},"test_helper.js"),"."),Object(a.b)("h3",{id:"test-reporting"},"Test Reporting"),Object(a.b)("h2",{id:"3-higher-order-components"},"3. Higher Order Components"),Object(a.b)("p",null,"What are they? Chances are you've already been using them."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"HOC + Component = Component + Additional functionality & Data")),Object(a.b)("p",null,"This gives us back an ",Object(a.b)("inlineCode",{parentName:"p"},"enchanced/composed")," componenet. These are heavily used in library like ",Object(a.b)("inlineCode",{parentName:"p"},"React-Redux"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Connect and Provider")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { connect } from 'react-redux';\n\nclass App extends Component {\n    ...\n}\n\nfunction mapStateToProps(state) {\n    return { posts: state.props };\n}\n\n// connect is the HOC that wraps mapStateToProps\nexport default connect(mapStateToProps)(App);\n")),Object(a.b)("p",null,"How about the Provider?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// in index.js or whatever ReactDOM we're using\nReactDOM.render(\n    <Provider store={createStoreWithMiddleware(reducers)}>\n        <App />\n    </Provider>,\n    document.querySelector('.container')\n);\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," is a HOC to the ",Object(a.b)("inlineCode",{parentName:"p"},"Redux Store"),". Whenever the ",Object(a.b)("inlineCode",{parentName:"p"},"Redux Store")," changing, the ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," notices and broadcasts down to any connected component (using the ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," function)."),Object(a.b)("h3",{id:"require-auth-hoc"},"Require Auth HOC"),Object(a.b)("p",null,"How can we use a HOC to help with authentication?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from \'react\';\n\nexport default () => {\n    return (\n        <div>\n            Super Special Secret Recipe\n            <ul>\n                <li class="example">1 Cup Sugar</li>\n                <li class="example">1 Cup Salt</li>\n                <li class="example">Another piece of stuff</li>\n            </ul>\n        </div>\n    );\n};\n')),Object(a.b)("p",null,"If we pass this basic component to the router, we can wrap the component using a HOC."),Object(a.b)("p",null,"You need to create ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," and ",Object(a.b)("inlineCode",{parentName:"p"},"reducers")," for the correct Auth action and reducer."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// src > actions > index.js\n// doesn't include the reducer code\nimport { CHANGE_AUTH } from './types';\n\nexport function authenticate(isLoggedIn) {\n    return {\n        type: CHANGE_AUTH,\n        payload: isLoggedIn\n    };\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Building the Higher Order Component")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// src > components > requireAuth.js\n\nimport React, { Component } from 'react';\n\nexport default function(ComposedComponent) {\n    class Authentication extends Component {\n        render() {\n            return <ComposedComponent {...this.props} />;\n        }\n    }\n\n    return Authentication;\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"What's going on here?")),Object(a.b)("p",null,"In some other location, we want to use this HOC."),Object(a.b)("p",null,"eg. another render method"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'import Authentication\nimport Resources // the component to wrap\n\nconst ComposedComponent = Authentication(Resources);\n\n...\n\nrender() {\n    <ComposedComponent resources={resourceList} />\n}\n\n// OR MORE USEFULLY IN THE REACT ROUTER\n\n<Route path="/" component={Authentication(Resources)} />\n')),Object(a.b)("h3",{id:"nesting-higher-order-components"},"Nesting Higher Order Components"),Object(a.b)("p",null,"Building the above component with Redux and the ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," HOC."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// src > components > requireAuth.js\n\nimport React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\nexport default function(ComposedComponent) {\n    class Authentication extends Component {\n        // to get data ahead of time\n        // this is part of \"Class Level Properties\"\n        // console.log(this.context) will show nav properties!\n        static contextTypes = {\n            router: React.PropTypes.object\n        };\n\n        render() {\n            return <ComposedComponent {...this.props} />;\n        }\n    }\n\n    function mapStateToProps(state) {\n        return { authenticated: state.authenticated };\n    }\n\n    return connect(mapStateToProps)(Authentication);\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"static"),' will create a "Class Level Property" and this gives other instances access to ',Object(a.b)("inlineCode",{parentName:"p"},"Authentication.contextTypes"),"."),Object(a.b)("h2",{id:"3-middlewares"},"3. Middlewares"),Object(a.b)("p",null,"In the React-Redux cycle, the action is sent to the middleware before it forwards that onto the reducers."),Object(a.b)("p",null,"Middleware has the opportunity to log, stop, modify or not touch an action."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export default function({dispatch}) {\n    return next => action => {\n        console.log(action);\n\n        next(action);\n    }\n}\n\n// vanilla es5\nexport default function({dispatch}) {\n    return function(next) {\n        return function(action) {\n            console.log(action);\n\n            next(action);\n        }\n    }\n}\n")),Object(a.b)("p",null,"Now with this ",Object(a.b)("inlineCode",{parentName:"p"},"async"),", we can apply it to the main file where ",Object(a.b)("inlineCode",{parentName:"p"},"createStoreWithMiddleware")," lives through ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware(Example)(createStore)"),"."),Object(a.b)("p",null,"It's important that we just target the actions that we want - send the others on using the ",Object(a.b)("inlineCode",{parentName:"p"},"next()")," function."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export default function({ dispatch }) {\n    return (next) => (action) => {\n        if (!action.payload || !action.payload.then) {\n            return next(action);\n        }\n\n        // if there is a promise\n        action.payload.then((response) => {\n            // knock off and replace response\n            const newAction = { ...action, payload: response };\n            dispatch(newAction);\n        });\n    };\n}\n")),Object(a.b)("p",null,"So why do a new dispatch instead of using next? It's to do with the chain that we have. We want to ensure it goes back through the entire chain again. We want the middleware to be oblivious to what is happening."),Object(a.b)("p",null,"If we want to add more middleware into the mix, we just add them as further parameters into the ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," function."),Object(a.b)("h2",{id:"4-authentication"},"4. Authentication"),Object(a.b)("p",null,"Not a lot of great end-to-end tutorials already. Most skip some important steps."),Object(a.b)("p",null,"Best React backend? There is no best backend. All they care about is being served JSON."),Object(a.b)("p",null,"Work on the relationship of have a ",Object(a.b)("inlineCode",{parentName:"p"},"Username/Password")," combination and being authenticated by the server. After being authenticated, we want them to be able to make post requests without reidentifying. The server must give the client back something for this part."),Object(a.b)("p",null,"In conclusion, we just want ",Object(a.b)("inlineCode",{parentName:"p"},"Here is my cookie OR token for a protected resource"),"."),Object(a.b)("h3",{id:"cookies-vs-tokens"},"Cookies vs Tokens"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cookies")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Automatically included on all requests"),Object(a.b)("li",{parentName:"ul"},"Unique to each domain"),Object(a.b)("li",{parentName:"ul"},"Cannot be sent to different domains")),Object(a.b)("p",null,"Headers - ",Object(a.b)("inlineCode",{parentName:"p"},"cookie: {}"),"\nBody - JSON"),Object(a.b)("p",null,"The point of cookies is to bring ",Object(a.b)("inlineCode",{parentName:"p"},"state")," to something ",Object(a.b)("inlineCode",{parentName:"p"},"stateless")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Token")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Have to manually wire up"),Object(a.b)("li",{parentName:"ul"},"Can be sent to any domain")),Object(a.b)("p",null,"Headers - ",Object(a.b)("inlineCode",{parentName:"p"},"authorization: jioeajteioa"),"\nBody - JSON"),Object(a.b)("p",null,"Being able to send this to any domain we wish is a benefit with a token."),Object(a.b)("h3",{id:"scalable-architecture"},"Scalable Architecture"),Object(a.b)("p",null,"So we've decided to go with tokens, which is also aligned with how the industry is trending."),Object(a.b)("p",null,"If we served ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," and ",Object(a.b)("inlineCode",{parentName:"p"},"bundle.js")," from a Content Server, we can make that server work with no auth req'd."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Very easy to redistribute")),Object(a.b)("p",null,"If we had our API server on another server, we would use a token because cookies would not be able to access the domain with the cookie. It also means we could keep a single location for both mobile and web application."),Object(a.b)("p",null,"This set up also means that we can had different developers working on different projects."),Object(a.b)("p",null,"That way, scaling also makes it easier! If we need to load balance the API servers because we are using more than just one device, then this allows us to also be more effective in scaling out an API."),Object(a.b)("h3",{id:"server-setup"},"Server Setup"),Object(a.b)("p",null,"Time to start writing some code."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mkdir server && cd server")),Object(a.b)("p",null,"An example ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," will look like so"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'{\n  "name": "server",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "nodemon index.js"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "bcrypt-nodejs": "0.0.3",\n    "body-parser": "^1.15.0",\n    "cors": "^2.7.1",\n    "express": "^4.13.4",\n    "jwt-simple": "^0.5.0",\n    "mongoose": "^4.4.7",\n    "morgan": "^1.7.0",\n    "nodemon": "^1.9.1",\n    "passport": "^0.3.2",\n    "passport-jwt": "^2.0.0",\n    "passport-local": "^1.0.0"\n  }\n}\n')),Object(a.b)("p",null,"Refer to Github to see more info on each of these packages."),Object(a.b)("p",null,"Touch ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," and that will be the entry point for the server."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// Main starting point of the application\nconst express = require('express');\nconst http = require('http');\nconst bodyParser = require('body-parser');\nconst morgan = require('morgan');\nconst app = express();\nconst router = require('./router');\nconst mongoose = require('mongoose');\nconst cors = require('cors');\n\n// DB Setup\nmongoose.connect('mongodb://localhost:auth/auth');\n\n// App Setup\napp.use(morgan('combined'));\napp.use(cors());\napp.use(bodyParser.json({ type: '*/*' }));\nrouter(app);\n\n// Server Setup\nconst port = process.env.PORT || 3090;\nconst server = http.createServer(app);\nserver.listen(port);\nconsole.log('Server listening on:', port);\n")),Object(a.b)("h3",{id:"express-middleware"},"Express Middleware"),Object(a.b)("p",null,"The following lines are part of the middleware:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// App Setup\napp.use(morgan('combined'));\napp.use(cors());\napp.use(bodyParser.json({ type: '*/*' }));\nrouter(app);\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Morgan is a logging framework - quite good for giving the type of requests!"),Object(a.b)("li",{parentName:"ul"},"Cors allows you the server to use Cross Origin."),Object(a.b)("li",{parentName:"ul"},"bodyParser will parse incoming requests. At the moment, it's just for JSON but you may need to change this if you are expecting a file etc.")),Object(a.b)("h3",{id:"seeing-the-mongodb-database"},"Seeing the MongoDB Database"),Object(a.b)("p",null,"Worthwhile downloading ",Object(a.b)("inlineCode",{parentName:"p"},"Robomongo")," if you are keen to visually see a GUI with MongoDB."),Object(a.b)("h3",{id:"authentication-controller"},"Authentication Controller"),Object(a.b)("p",null,"In the server, we can create some controllers eg. ",Object(a.b)("inlineCode",{parentName:"p"},"controllers/authentication.js"),"."),Object(a.b)("p",null,"Each controller will be responsible for handling a type of response."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"router.js"),", we can use the functions exported from the controller to create routes that will deal with post routes."),Object(a.b)("h3",{id:"jwt-overview"},"JWT Overview"),Object(a.b)("p",null,"There are two phases for the lifecycle."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When signing in")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"User ID")," + ",Object(a.b)("inlineCode",{parentName:"p"},"Secret String")," = ",Object(a.b)("inlineCode",{parentName:"p"},"JSON Web Token")),Object(a.b)("p",null,"In the future, the user can now use this token for future requests."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Authenticated calls after signin")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"JSON Web Token")," + ",Object(a.b)("inlineCode",{parentName:"p"},"Secret String")," = ",Object(a.b)("inlineCode",{parentName:"p"},"User ID")),Object(a.b)("p",null,'If the "secret string" is incorrect, then this will not result in the User ID. Must keep the secret 100% secret!'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Building the JTW")),Object(a.b)("p",null,"We can use the library ",Object(a.b)("inlineCode",{parentName:"p"},"jtw-simple"),". In the ",Object(a.b)("inlineCode",{parentName:"p"},"config.js")," file at the root of the app, we can hold the application secrets and config. Ensure these files are ",Object(a.b)("inlineCode",{parentName:"p"},".gitigore"),"'d."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const jwt = require('jwt-simple');\nconst config = require('../config');\n\nfunction tokenForUser(user) {\n    const timestamp = new Date().getTime();\n    // convention will have sub for subject, iat for issued at time\n    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);\n}\n")),Object(a.b)("h3",{id:"passport"},"Passport"),Object(a.b)("p",null,"So once they've signed up, how do we exchange and give them a token? We need to handle the login case. We also need to make sure they're authenticated when they try accessing a protected resource."),Object(a.b)("p",null,"For example, if we have a ",Object(a.b)("inlineCode",{parentName:"p"},"Posts")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Comments")," controller, we need to check if they've been loggin in and if they have a valid token."),Object(a.b)("p",null,"To do it, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"passport.js")," - it's normally used for cookie based auth but we can use it with JWT tokens. First, install ",Object(a.b)("inlineCode",{parentName:"p"},"passport")," and ",Object(a.b)("inlineCode",{parentName:"p"},"passport-jwt"),"."),Object(a.b)("p",null,"Then, we can build ",Object(a.b)("inlineCode",{parentName:"p"},"service/passport.js")," file."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const passport = require('passport');\nconst User = require('../models/user');\nconst config = require('../config');\nconst JwtStrategy = require('passport-jwt').Strategy;\nconst ExtractJwt = require('passport-jwt').ExtractJwt;\nconst LocalStrategy = require('passport-local');\n\n// Create local strategy\nconst localOptions = { usernameField: 'email' };\nconst localLogin = new LocalStrategy(localOptions, function(\n    email,\n    password,\n    done\n) {\n    // Verify this email and password, call done with the user\n    // if it is the correct email and password\n    // otherwise, call done with false\n    User.findOne({ email: email }, function(err, user) {\n        if (err) {\n            return done(err);\n        }\n        if (!user) {\n            return done(null, false);\n        }\n\n        // compare passwords - is `password` equal to user.password?\n        user.comparePassword(password, function(err, isMatch) {\n            if (err) {\n                return done(err);\n            }\n            if (!isMatch) {\n                return done(null, false);\n            }\n\n            return done(null, user);\n        });\n    });\n});\n\n// Setup options for JWT Strategy\nconst jwtOptions = {\n    jwtFromRequest: ExtractJwt.fromHeader('authorization'),\n    secretOrKey: config.secret\n};\n\n// Create JWT strategy\nconst jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {\n    // See if the user ID in the payload exists in our database\n    // If it does, call 'done' with that other\n    // otherwise, call done without a user object\n    User.findById(payload.sub, function(err, user) {\n        if (err) {\n            return done(err, false);\n        }\n\n        if (user) {\n            done(null, user);\n        } else {\n            done(null, false);\n        }\n    });\n});\n\n// Tell passport to use this strategy\npassport.use(jwtLogin);\npassport.use(localLogin);\n")),Object(a.b)("p",null,"Passport is more of an ecosystem of strategies. A strategy is a method for authenticating a user."),Object(a.b)("p",null,"In the Jwt Strategy, the payload comes from the ",Object(a.b)("inlineCode",{parentName:"p"},"sub")," and ",Object(a.b)("inlineCode",{parentName:"p"},"iat")," we created."),Object(a.b)("h3",{id:"using-strategies-with-passport"},"Using Strategies with Passport"),Object(a.b)("p",null,"Reminder: Stategies are a plugin of sorts that works with Passport."),Object(a.b)("p",null,"For the ",Object(a.b)("inlineCode",{parentName:"p"},"jwtOptions"),", there is a little bit of action going. If we look at the ",Object(a.b)("inlineCode",{parentName:"p"},"payload")," parameter for jwtLogin, we know it somehow gets these options as an argument, but the token can be sitting anywhere, so how do we know? We pass ",Object(a.b)("inlineCode",{parentName:"p"},"jwtFromRequest")," to let them know where to look eg ",Object(a.b)("inlineCode",{parentName:"p"},"jwtFromRequest: ExtractJwt.fromHeader('authorization')"),"."),Object(a.b)("p",null,"We then let them know that the we wish to use the option ",Object(a.b)("inlineCode",{parentName:"p"},"secretOrKey")," which will be ",Object(a.b)("inlineCode",{parentName:"p"},"config.secret")," in this case ",Object(a.b)("inlineCode",{parentName:"p"},"secretOrKey: config.secret"),"."),Object(a.b)("p",null,"As a final step, we tell passport to use the straight with the ",Object(a.b)("inlineCode",{parentName:"p"},".use()")," method."),Object(a.b)("p",null,"We also need to build a very particular route to use passport. In the router file, first import the ",Object(a.b)("inlineCode",{parentName:"p"},"passportService")," from ",Object(a.b)("inlineCode",{parentName:"p"},"services/passport")," and require the passport lib into routes as well."),Object(a.b)("p",null,"The, we can create an authentication ",Object(a.b)("inlineCode",{parentName:"p"},"const requireAuth = passport.authenticate('jwt', { session: false });")," - session false is because we do not want to use a cookie."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Authentication = require('./controllers/authentication');\nconst passportService = require('./services/passport');\nconst passport = require('passport');\n\nconst requireAuth = passport.authenticate('jwt', { session: false });\nconst requireSignin = passport.authenticate('local', { session: false });\n\nmodule.exports = function(app) {\n    // here we wish to actually use require auth as middleware\n    // before processing\n    app.get('/', requireAuth, function(req, res) {\n        res.send({ message: 'Super secret code is ABC123' });\n    });\n    app.post('/signin', requireSignin, Authentication.signin);\n    app.post('/signup', Authentication.signup);\n};\n")),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"Postman"),", we can then make a ",Object(a.b)("inlineCode",{parentName:"p"},"signup")," attempt, grab the token and then try make a get request to ",Object(a.b)("inlineCode",{parentName:"p"},"/"),". If we add a header ",Object(a.b)("inlineCode",{parentName:"p"},"authorization")," and add in the token we get, we can see that we will get success. Changing this token slightly will give you an unauthorized response."),Object(a.b)("p",null,"In contrast, if we want to run something like a signin, we would start by installing the ",Object(a.b)("inlineCode",{parentName:"p"},"passport-local"),' "plugin" for passport.'),Object(a.b)("p",null,"We then create a local strategy. We need to specifically tell the local strategy where to look. If we're using email then we would write something like ",Object(a.b)("inlineCode",{parentName:"p"},"const localOptions = { usernameField: 'email' };"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Local Strategy vs JWT Strategy")),Object(a.b)("p",null,"Why there difference? Signing up requires signing in and returning a token."),Object(a.b)("p",null,"If they are signing in however, we verify that the username and password are correct and then we give them a token."),Object(a.b)("p",null,"Then, in the future, when they wish to make a request, we verify the token and give them access to whatever the resouce they want is."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Bcrypt and Signing in")),Object(a.b)("p",null,"If we then need to use the schema defined ",Object(a.b)("inlineCode",{parentName:"p"},"comparePassword")," method."),Object(a.b)("h3",{id:"using-postman"},"Using Postman"),Object(a.b)("p",null,"Whenever you are willing to test the server using postman, startup the ",Object(a.b)("inlineCode",{parentName:"p"},"mongod")," daemon (if using mongo) and ",Object(a.b)("inlineCode",{parentName:"p"},"nodemon index.js")," on the server file, and then you can make GET and POST requests to the localhost port."),Object(a.b)("p",null,"If signing up, add a body of JSON to the data."),Object(a.b)("h2",{id:"client-side-react-app"},"Client Side (React App)"),Object(a.b)("p",null,"In a form handler, we use an Action Creator."),Object(a.b)("p",null,"Usually, there has been a singular flow for an action, however we are now sitting in a situation where you may have to handle what happens when signing in has a rejection."),Object(a.b)("p",null,"If correct, return the JWT token, else show an error message."),Object(a.b)("p",null,"What we can do is use ",Object(a.b)("inlineCode",{parentName:"p"},"Redux Thunk")," to help achieve the behaviour of dealing with a good or bad request. Redux thunk allows us to return a function from an ",Object(a.b)("inlineCode",{parentName:"p"},"Action")," instead of just an object, and we can pass a ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," parameter and what we can then do is any async function etc. and then allowing arbitrary access to the dispatch at anytime we want - that way we can pass a whole ton of logic of what we want to do."),Object(a.b)("p",null,"For the action creator itself, we then want to pass a constant of the server URL to make the post request - this can be done using ",Object(a.b)("inlineCode",{parentName:"p"},"axios"),"!"),Object(a.b)("h3",{id:"dealing-with-cors-errors-with-a-request-cors-in-a-nutshell"},"Dealing with CORS errors with a request (CORS in a nutshell)"),Object(a.b)("p",null,"How to deal with a CORS No Access-Control-Allow-Origin - it's essentially a security protocol."),Object(a.b)("p",null,"In an example of how it works, a AJAX request from ",Object(a.b)("inlineCode",{parentName:"p"},"google.com")," to ",Object(a.b)("inlineCode",{parentName:"p"},"google.com")," with the same domain, subdomain and port matching means that the request is okay, but trying to do it from ",Object(a.b)("inlineCode",{parentName:"p"},"google.com")," to ",Object(a.b)("inlineCode",{parentName:"p"},"github.com")," as an example won't match and the request is denied unless the server allows it to happen."),Object(a.b)("p",null,"This wasn't an issue with ",Object(a.b)("inlineCode",{parentName:"p"},"Postman")," because enforcing CORS will need either the ",Object(a.b)("inlineCode",{parentName:"p"},"Host")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Origin")," header which is trivially easy to fake."),Object(a.b)("p",null,"So, how do we deal with this? What we actually do is to change our server to handle all subdomains - this is a common approach for all API servers. The idea is that you want anyone from anywhere to be able to access your server."),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"cors")," on the server to help with this. We will just use ",Object(a.b)("inlineCode",{parentName:"p"},"app.use(cors());"),"."),Object(a.b)("h3",{id:"local-storage-on-the-client-and-jwt"},"Local storage on the client and JWT"),Object(a.b)("p",null,"The idea with the JWT token is to save that and be able to use it. Having the JWT in local storage, it also means that it is persistent and available again for a user once they come back."),Object(a.b)("h3",{id:"form-vaidation"},"Form vaidation"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"redux-validation")," can really help us out here!"),Object(a.b)("p",null,"With a form, create a function ",Object(a.b)("inlineCode",{parentName:"p"},"validate()")," that will take the ",Object(a.b)("inlineCode",{parentName:"p"},"formProps")," and return any errors."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"function validate(formProps) {\n    const errors = {};\n\n    console.log(formProps); // this would be linked up to the email, password and passwordConfirm\n\n    // do this for each field\n    if (!formProps.email) {\n        errors.email = 'Please enter an email';\n    }\n\n    if (formProps.password !== formProps.passwordConfirm) {\n        errors.password = 'Passwords must match';\n    }\n\n    return errors;\n}\n")),Object(a.b)("p",null,"You can then set ",Object(a.b)("inlineCode",{parentName:"p"},'{password.touched && password.error && <div className="error">{password.error}</div>}')," for the error to show on the component."),Object(a.b)("h3",{id:"signup-action-creator"},"Signup Action Creator"),Object(a.b)("p",null,"For the form component, create an action handler for ",Object(a.b)("inlineCode",{parentName:"p"},"onSubmit")," with ",Object(a.b)("inlineCode",{parentName:"p"},"<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}"),"."),Object(a.b)("p",null,"In order to protect routes from being accessed without authentication, we use Higher Order Components in order to wrap other components."),Object(a.b)("h3",{id:"checking-auth-at-the-start-of-the-application"},"Checking auth at the start of the application"),Object(a.b)("p",null,"With we use redux and ",Object(a.b)("inlineCode",{parentName:"p"},"createStoreWithMiddleware(reducers)"),", we can start applying some intricate details."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// create a store ahead of time\nconst store = createStoreWithMiddleware(reducers);\nconst token = localStorage.getItem('token');\n// if we have a token, consider the user to be signed in\nif (token) {\n    // we need to update application state - the dispatch method\n    // any action can be sent off in the dispatch\n    store.dispatch({\n        // make sure you import AUTH_USER first\n        type: AUTH_USER\n    });\n}\n")),Object(a.b)("h3",{id:"making-authenticated-api-requests"},"Making Authenticated API Requests"),Object(a.b)("p",null,"How do we make sure a User can make an authenticated request after signing in?"),Object(a.b)("p",null,"With a ",Object(a.b)("inlineCode",{parentName:"p"},"Redux Thunk")," dispatch function, we can make a authenticated request."),Object(a.b)("p",null,"With Axios, we can make an auth request like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export function fetchMessage() {\n    return function(dispatch) {\n        axios\n            .get(ROOT_URL, {\n                headers: { authorization: localStorage.getItem('token') }\n            })\n            .then((response) => {\n                console.log(response);\n                dispatch({\n                    type: TYPE,\n                    payload: response.data.message\n                });\n            });\n    };\n}\n")),Object(a.b)("p",null,"This can also be done with ",Object(a.b)("inlineCode",{parentName:"p"},"Redux Promise")," in such a clean way:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"export function fetchMessage() {\n    const request = axios.get(ROOT_URL, {\n        headers: { authorization: localStorage.getItem('token') }\n    });\n\n    return {\n        type: TYPE,\n        payload: response.data.message\n    };\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/Advanced-React-Redux.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-advanced-react-redux-md-b8da666a80384a26be04.js.map