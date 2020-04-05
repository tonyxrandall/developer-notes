(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{OKFN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),o=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/Flux-Basics.md"}});var s={_frontmatter:i},c=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"flux-help-sheet"},"Flux Help Sheet"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-help-sheet"}),"Flux Help Sheet"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-1-what-is-flux"}),"FLUX-1: What is Flux?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-2-the-dispatcher"}),"FLUX-2: The Dispatcher")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-3-stores"}),"FLUX-3: Stores")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-4-action-creators--actions"}),"FLUX-4: Action Creators & Actions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#flux-5-putting-it-together"}),"FLUX-5: Putting it together"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Sources")),Object(n.b)("p",null,"What is Flux? from ",Object(n.b)("a",r({parentName:"p"},{href:"https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture"}),"Scotch.io")),Object(n.b)("p",null,"Declaring Singletons in ES6 from ",Object(n.b)("a",r({parentName:"p"},{href:"https://medium.com/@softwarecf/flux-stores-and-es6-9b453dbf9db#.4yo043nti"}),"Medium")),Object(n.b)("h2",{id:"flux-1-what-is-flux"},"FLUX-1: What is Flux?"),Object(n.b)("p",null,"Flux is an architecture that Facebook uses internally when working with React. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow."),Object(n.b)("p",null,"That said, Facebook does provide a repo that includes a Dispatcher library. The dispatcher is a sort of global pub/sub handler that broadcasts payloads to registered callbacks."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"4 Components")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"1. Actions")," – Helper methods that facilitate passing data to the Dispatcher\n",Object(n.b)("strong",{parentName:"p"},"2. Dispatcher")," – Receives actions and broadcasts payloads to registered callbacks\n",Object(n.b)("strong",{parentName:"p"},"3. Stores")," – Containers for application state & logic that have callbacks registered to the dispatcher\n",Object(n.b)("strong",{parentName:"p"},"4. Controller Views")," – React Components that grab the state from Stores and pass it down via props to child components"),Object(n.b)("p",null,"Flux helps to solve some of the difficulty we run into with unidirectional data flow when it comes to changing Application State that is higher up the virtual DOM than the Components that alter that State themselves."),Object(n.b)("p",null,"Controllers do exist in a Flux application, but they are controller-views."),Object(n.b)("p",null,"Action creators — dispatcher helper methods — are used to support a semantic API that describes all changes that are possible in the application. It can be useful to think of them as a fourth part of the Flux update cycle."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"The graphical process")),Object(n.b)("img",{src:"https://cask.scotch.io/2014/10/V70cSEC.png"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"How does the API relate to this?")),Object(n.b)("p",null,"When you are working with data that is coming from (or going to) the outside, I’ve found that using Actions to introduce the data into the Flux Flow, and subsequently Stores, is the most painless way to go about it."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"flux-2-the-dispatcher"},"FLUX-2: The Dispatcher"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"What is it?")),Object(n.b)("p",null,"The Dispatcher is basically the manager of this entire process. It is the central hub for your application. The dispatcher receives actions and dispatches the actions and data to registered callbacks."),Object(n.b)("p",null,"The dispatcher broadcasts the payload to ALL of its registered callbacks, and includes functionality that allows you to invoke the callbacks in a specific order, even waiting for updates before proceeding. There is only ever one dispatcher, and it acts as the central hub within your application. It is not exactly a pub/sub."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example Dispatcher")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var Dispatcher = require('flux').Dispatcher;\nvar AppDispatcher = new Dispatcher();\n\nAppDispatcher.handleViewAction = function(action) {\n    this.dispatch({\n        source: 'VIEW_ACTION',\n        action: action\n    });\n};\n\nmodule.exports = AppDispatcher;\n")),Object(n.b)("p",null,"In the above example, we create an instance of our Dispatcher and create a ",Object(n.b)("inlineCode",{parentName:"p"},"handleViewAction")," method. This abstraction is helpful if you are looking to distinguish between view triggered actions v.s. server/API triggered actions."),Object(n.b)("p",null,"Our method calls the dispatch method, which will broadcast the ",Object(n.b)("inlineCode",{parentName:"p"},"action")," payload to all of its registered callbacks. This action can then be acted upon within Stores, and will result in a state update."),Object(n.b)("p",null,"The diagram below illustrates this process:"),Object(n.b)("img",{src:"https://cask.scotch.io/2014/10/hKbN2q6.png"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Dependencies")),Object(n.b)("p",null,"One of the coolest parts of the provided Dispatcher module is the ability to define dependencies and marshall the callbacks on our Stores. So if one part of your application is dependent upon another part being updated first, in order to render properly, the Dispatcher’s ",Object(n.b)("inlineCode",{parentName:"p"},"waitFor")," method will be mighty useful."),Object(n.b)("p",null,"In order to utilize this feature, we need to store the return value of the Dispatcher’s registration method on our Store as ",Object(n.b)("inlineCode",{parentName:"p"},"dispatcherIndex"),", as shown below:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"ShoeStore.dispatcherIndex = AppDispatcher.register(function(payload) {});\n")),Object(n.b)("p",null,"Then in our Store, when handling a dispatched action, we can use the Dispatcher’s ",Object(n.b)("inlineCode",{parentName:"p"},"waitFor")," method to ensure our ShoeStore has been updated:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"case 'BUY_SHOES':\n  AppDispatcher.waitFor([\n    ShoeStore.dispatcherIndex\n  ], function() {\n    CheckoutStore.purchaseShoes(ShoeStore.getSelectedShoes());\n  });\n  break;\n")),Object(n.b)("h2",{id:"flux-3-stores"},"FLUX-3: Stores"),Object(n.b)("p",null,"In Flux, Stores manage application state for a particular domain within your application. From a high level, this basically means that per app section, stores manage the data, data retrieval methods and dispatcher callbacks."),Object(n.b)("p",null,"Lets take a look at a basic Store:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"var AppDispatcher = require('../dispatcher/AppDispatcher');\nvar ShoeConstants = require('../constants/ShoeConstants');\nvar EventEmitter = require('events').EventEmitter;\nvar merge = require('react/lib/merge');\n\n// Internal object of shoes\nvar _shoes = {};\n\n// Method to load shoes from action data\nfunction loadShoes(data) {\n    _shoes = data.shoes;\n}\n\n// Merge our store with Node's Event Emitter\nvar ShoeStore = merge(EventEmitter.prototype, {\n    // Returns all shoes\n    getShoes: function() {\n        return _shoes;\n    },\n\n    emitChange: function() {\n        this.emit('change');\n    },\n\n    addChangeListener: function(callback) {\n        this.on('change', callback);\n    },\n\n    removeChangeListener: function(callback) {\n        this.removeListener('change', callback);\n    }\n});\n\n// Register dispatcher callback\nAppDispatcher.register(function(payload) {\n    var action = payload.action;\n    var text;\n    // Define what to do for certain actions\n    switch (action.actionType) {\n        case ShoeConstants.LOAD_SHOES:\n            // Call internal method based upon dispatched action\n            loadShoes(action.data);\n            break;\n\n        default:\n            return true;\n    }\n\n    // If action was acted upon, emit change event\n    ShoeStore.emitChange();\n\n    return true;\n});\n\nmodule.exports = ShoeStore;\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"The most important thing from above")," is extending our store with NodeJS's EventEmitter."),Object(n.b)("p",null,"This allows our stores to listen/broadcast events. This allows our Views/Components to update based upon those events. Because our Controller View listens to our Stores, leveraging this to emit change events will let our Controller View know that our application state has changed and its time to retrieve the state to keep things fresh."),Object(n.b)("p",null,"This is what ES6 notation looks like. We instead can extend EventEmitter."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import EventEmitter from 'events';\n\nvar CHANGE_EVENT = 'change';\n\nclass Store extends EventEmitter {\n    constructor() {\n        super();\n    }\n\n    emitChange() {\n        this.emit(CHANGE_EVENT);\n    }\n\n    addChangeListener(callback) {\n        this.on(CHANGE_EVENT, callback);\n    }\n\n    removeChangeListener(callback) {\n        this.removeListener(CHANGE_EVENT, callback);\n    }\n}\n\nStore.dispatchToken = null;\n\nexport default Store;\n")),Object(n.b)("p",null,"We also registered a callback with our AppDispatcher using its register method. This means that our Store is now listening to AppDispatcher broadcasts. Our switch statement determines whether, for a given broadcast, if there are any relevant actions to take. If a relevant action is taken, a change event is emitted, and views that are listening for this event update their states."),Object(n.b)("img",{src:"https://cask.scotch.io/2014/10/rHwGUog.png"}),Object(n.b)("p",null,"Our public method getShoes is used by our Controller View to retrieve all of the shoes in our ","_","shoes object and use that data in our components state. While this is a simple example, complicated logic can be put here instead of our views and helps keep things tidy."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"flux-4-action-creators--actions"},"FLUX-4: Action Creators & Actions"),Object(n.b)("p",null,"Action Creators are collections of methods that are called within views (or anywhere else for that matter) to send actions to the Dispatcher. ",Object(n.b)("strong",{parentName:"p"},"Actions are the actual payloads")," that are delivered via the dispatcher."),Object(n.b)("p",null,"The way Facebook uses them, action type constants are used to define what action should take place, and are sent along with action data. Inside of registered callbacks, these actions can now be handled according to their action type, and methods can be called with action data as the arguments."),Object(n.b)("p",null,"Lets check out a constants definition:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// ES5\n\nvar keyMirror = require('react/lib/keyMirror');\n\nmodule.exports = keyMirror({\n  LOAD_SHOES: null\n});\n\n// ES6\n\nimport keyMirror from 'react';\n\nexport keyMirror({\n        LOAD_SHOES: null\n    });\n")),Object(n.b)("p",null,"Above we use React’s ",Object(n.b)("inlineCode",{parentName:"p"},"keyMirror")," library to mirror our keys so that our value matches our key definition."),Object(n.b)("p",null,"Just by looking at this file, we can tell that our app loads shoes. The use of constants helps keep things organized, and helps give a high level view of what the app actually does."),Object(n.b)("p",null,"Now lets take a look at the corresponding Action Creator definition:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// ES 5\n\nvar AppDispatcher = require('../dispatcher/AppDispatcher');\nvar ShoeStoreConstants = require('../constants/ShoeStoreConstants');\n\nvar ShoeStoreActions = {\n\n  loadShoes: function(data) {\n    AppDispatcher.handleAction({\n      actionType: ShoeStoreConstants.LOAD_SHOES,\n      data: data\n    })\n  }\n\n};\n\nmodule.exports = ShoeStoreActions;\n\n// ES6\n\nimport AppDispatcher from '../dispatcher/AppDispatcher';\nimport ShoeStoreConstants from '../constants/ShoeStoreConstants';\n\nclass ShoeStoreActions {\n    public function loadShoes(data) {\n        AppDispatcher.handleAction({\n          actionType: ShoeStoreConstants.LOAD_SHOES,\n          data: data\n        });\n\n        return;\n    }\n}\n")),Object(n.b)("p",null,"In our example above, we created a method on our ",Object(n.b)("inlineCode",{parentName:"p"},"ShoeStoreActions")," object that calls our dispatcher with the data we provided. We can now import this actions file into our view or API, and call ",Object(n.b)("inlineCode",{parentName:"p"},"ShoeStoreActions.loadShoes(ourData)")," to send our payload to the Dispatcher, which will broadcast it. Then the ShoeStore will “hear” that event and call a method thats loads up some shoes!"),Object(n.b)("img",{src:"https://cask.scotch.io/2014/10/4tBnC0e.png"}),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"/** @jsx React.DOM */\n\nvar React = require('react');\nvar ShoesStore = require('../stores/ShoeStore');\n\n// Method to retrieve application state from store\nfunction getAppState() {\n    return {\n        shoes: ShoeStore.getShoes()\n    };\n}\n\n// Create our component class\nvar ShoeStoreApp = React.createClass({\n    // Use getAppState method to set initial state\n    getInitialState: function() {\n        return getAppState();\n    },\n\n    // Listen for changes\n    componentDidMount: function() {\n        ShoeStore.addChangeListener(this._onChange);\n    },\n\n    // Unbind change listener\n    componentWillUnmount: function() {\n        ShoesStore.removeChangeListener(this._onChange);\n    },\n\n    render: function() {\n        return <ShoeStore shoes={this.state.shoes} />;\n    },\n\n    // Update view state when change event is received\n    _onChange: function() {\n        this.setState(getAppState());\n    }\n});\n\nmodule.exports = ShoeStoreApp;\n")),Object(n.b)("p",null,"In the example above, we listen for change events using addChangeListener, and update our application state when the event is received."),Object(n.b)("p",null,"Our application state data is held in our Stores, so we use the public methods on the Stores to retrieve that data and then set our application state."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"flux-5-putting-it-together"},"FLUX-5: Putting it together"),Object(n.b)("p",null,"Now that we have gone through each individual part of the Flux architecture, we should have a much better idea of how this architecture actually works. Remember our graphical representation of this process from before? Lets have a look at a bit more granular view of this, now that we understand the function of each part of the flow."),Object(n.b)("img",{src:"https://cask.scotch.io/2014/10/duZH2Sz.png"}))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/Flux-Basics.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-flux-basics-md-c9acd597a724522510f8.js.map