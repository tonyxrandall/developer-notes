(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{uSFu:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Server-Side-React/Server-Side-Rendering-With-React-And-Redux.md"}});var o={_frontmatter:i},c=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,s({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"server-side-rendering-with-react-and-redux"},"Server side Rendering with React and Redux"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#server-side-rendering-with-react-and-redux"}),"Server side Rendering with React and Redux"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#how-do-tradition-react-apps-work"}),"How do tradition React apps work?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#serverside---what-happens"}),"Serverside - What happens")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#serverside-architecture"}),"Serverside Architecture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#example-base-packagejson"}),"Example base package.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#rendertostring-function"}),"RenderToString function")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#the-build-process"}),"The build process")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#what-is-isomorphic-javascript"}),"What is Isomorphic Javascript?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#clientside-js"}),"Clientside JS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#client-bundles"}),"Client bundles"))))),Object(r.b)("h2",{id:"how-do-tradition-react-apps-work"},"How do tradition React apps work?"),Object(r.b)("p",null,"In relation to the index ",Object(r.b)("inlineCode",{parentName:"p"},"html")," file, we end up with a root div that React targets onto."),Object(r.b)("p",null,"The webpage makes the request to the server, then we fetch the JS file, then app boots and we make some requests - all before any content is visible."),Object(r.b)("p",null,"Using server side React, the goal is to make one request. The impact of this means that after the browser requests the page, the return info is the content being visible."),Object(r.b)("h2",{id:"serverside---what-happens"},"Serverside - What happens"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Receive the request"),Object(r.b)("li",{parentName:"ol"},"Load up React app in memory"),Object(r.b)("li",{parentName:"ol"},"Fetch any required data"),Object(r.b)("li",{parentName:"ol"},"Render app"),Object(r.b)("li",{parentName:"ol"},"Send back to the HTML")),Object(r.b)("p",null,"Back on the browser side, the React application still ensure it fetches the bundle for the client-side interactivity."),Object(r.b)("h2",{id:"serverside-architecture"},"Serverside Architecture"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run two back end server. One for the API, the other for rendering. - The API layer is to deal wth DB access, validation, auth etc. - The View layer just focuses on producing data.")),Object(r.b)("h2",{id:"example-base-packagejson"},"Example base package.json"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'{\n  "name": "react-ssr",\n  "version": "1.0.0",\n  "description": "Server side rendering project",\n  "main": "index.js",\n  "scripts": {\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "axios": "0.16.2",\n    "babel-cli": "6.26.0",\n    "babel-core": "6.26.0",\n    "babel-loader": "7.1.2",\n    "babel-preset-env": "1.6.0",\n    "babel-preset-es2015": "6.24.1",\n    "babel-preset-es2017": "6.24.1",\n    "babel-preset-react": "6.24.1",\n    "babel-preset-stage-0": "6.24.1",\n    "compression": "1.7.0",\n    "concurrently": "3.5.0",\n    "express": "4.15.4",\n    "express-http-proxy": "1.0.6",\n    "lodash": "4.17.4",\n    "nodemon": "1.12.0",\n    "npm-run-all": "4.1.1",\n    "react": "16.0.0",\n    "react-dom": "16.0.0",\n    "react-helmet": "5.2.0",\n    "react-redux": "5.0.6",\n    "react-router-config": "1.0.0-beta.4",\n    "react-router-dom": "4.2.2",\n    "redux": "3.7.2",\n    "redux-thunk": "2.2.0",\n    "serialize-javascript": "1.4.0",\n    "webpack": "3.5.6",\n    "webpack-dev-server": "2.8.2",\n    "webpack-merge": "4.1.0",\n    "webpack-node-externals": "1.6.0"\n  }\n}\n')),Object(r.b)("h2",{id:"rendertostring-function"},"RenderToString function"),Object(r.b)("p",null,"We use ReactDOM and instead of rendering it, we render it to raw HTML and turn it into string."),Object(r.b)("p",null,"We can use an example of a Express file like so to run a base file:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"/*\n    Use this for the optimized build\n    and serve out with Docker\n */\n\nvar fs = require('fs');\nvar dotenv = require('dotenv').config;\n\n// Main starting point of the application\nconst express = require('express');\nconst http = require('http');\nconst bodyParser = require('body-parser');\nconst morgan = require('morgan');\nconst app = express();\nconst cors = require('cors');\nconst spawn = require('child_process').spawn;\nconst path = require('path');\nconst React = require('react');\nconst renderToString = require('react-dom/server').renderToString;\nconst Home = require('./components/home/Home').default;\n\n// App Setup\napp.use(morgan('combined'));\napp.use(cors());\napp.use(bodyParser.json({ type: '*/*' }));\n\napp.use(express.static(path.resolve(__dirname, 'build')));\n\napp.get('/', (req, res) => {\n    const content = renderToString(<Home />);\n\n    res.send(content);\n});\n\napp.get('*', (req, res) => {\n    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));\n});\n\n// Server Setup\nconst port = process.env.PORT || 3000;\nconst server = http.createServer(app);\nserver.listen(port);\nconsole.log('Server listening on:', port);\n")),Object(r.b)("p",null,"Given a Webpack file like the following, we can bundle the .js file and then use a Node server to run and return the code:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"const path = require('path');\n\nmodule.exports = {\n    // Target Nodehs\n    target: 'node',\n    // Looking for the root of server app\n    entry: './src/app.js',\n    output: {\n        filename: 'server.js',\n        path: path.resolve(__dirname, 'build')\n    },\n    // Run Babel on every file\n    module: {\n        rules: [\n            {\n                test: /\\.js?$/,\n                loader: 'babel-loader',\n                exclude: /node_modules/,\n                options: {\n                    presets: [\n                        'react',\n                        'stage-0',\n                        ['env', { targets: { browsers: ['last 2 versions']}}]\n                    ]\n                }\n            }\n        ]\n    }\n}\n")),Object(r.b)("p",null,"If using with ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," - add the following config:"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// config/paths.js\n\nmodule.exports = {\n    ...\n    appServer: resolveApp('server'),\n    serverIndexJs: resolveApp('src/server.js'),\n    ...\n}\n")),Object(r.b)("p",null,"Ignore the file itself in the appropriate places. for the other webpack configs."),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.server.js")," file."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"const path = require('path');\nconst paths = require('./paths');\nconst webpackNodeExternals = require('webpack-node-externals');\n\nmodule.exports = {\n    // Target Nodehs\n    target: 'node',\n    // Looking for the root of server app\n    entry: paths.serverIndexJs,\n    output: {\n        // The build folder.\n        path: paths.appServer,\n        filename: 'server.js'\n    },\n    // Run Babel on every file\n    module: {\n        rules: [\n            {\n                test: /\\.js?$/,\n                loader: 'babel-loader',\n                exclude: /node_modules/,\n                options: {\n                    presets: [\n                        'react',\n                        'stage-0',\n                        ['env', { targets: { browsers: ['last 2 versions']}}]\n                    ]\n                }\n            }\n        ]\n    },\n    externals: [webpackNodeExternals()]\n}\n")),Object(r.b)("h2",{id:"the-build-process"},"The build process"),Object(r.b)("p",null,"Currently, we have a static base file. We want to watch and re-run the server on changes. This can be done with Nodemon and Webpack's ",Object(r.b)("inlineCode",{parentName:"p"},"--watch")," option."),Object(r.b)("h2",{id:"what-is-isomorphic-javascript"},"What is Isomorphic Javascript?"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Serverside rendering")," isn't necessarily accurate. Univeral/Isomorphic JS basically means that code that is rendered serverside might also be used client side."),Object(r.b)("h2",{id:"clientside-js"},"Clientside JS"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"<div className=\"home\">\n    <h1>Home</h1>\n    <button onClick={() => console.log('HI!')}>Press me!</button>\n</div>\n")),Object(r.b)("p",null,"Why doesn't the above work? We are rendering out HTML and 0 JavaScript code being sent to the user browser. How can we ship this down?"),Object(r.b)("h2",{id:"client-bundles"},"Client bundles"),Object(r.b)("p",null,"We basically want to create 2 bundles:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A server + client side bundle"),Object(r.b)("li",{parentName:"ol"},"A client side only bundle")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Server-Side-React/Server-Side-Rendering-With-React-And-Redux.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-server-side-react-server-side-rendering-with-react-and-redux-md-c73539424334a6cef4af.js.map