(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{XbWQ:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Epic-React/Advanced-React-Patterns.md"}});var l={_frontmatter:s},i=a.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(o.b)(i,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"advanced-react-patterns"},"Advanced React Patterns"),Object(o.b)("h2",{id:"context-module-functions"},"Context Module Functions"),Object(o.b)("p",null,'This pattern does not "have a name" but something observed in a number of codebases including React DevTools source code.'),Object(o.b)("p",null,"The context of this is that as opposed to creating dispatch helper closure functions within a component and passing them down or having ",Object(o.b)("inlineCode",{parentName:"p"},"useCallback")," hep with creating help closure functions within custom hooks, we instead just created isolated, importable helper functions that take a dispatch argument which can be imported and used:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// before\nimport { useCounter } from 'context/counter';\n\nfunction Counter() {\n  const [state, dispatch] = useCounter();\n\n  const increment = () => dispatch({ type: 'increment' });\n  const decrement = () => dispatch({ type: 'decrement' });\n\n  return (\n    <div>\n      <div>Current Count: {state.count}</div>\n      <button onClick={increment}>-</button>\n      <button onClick={decrement}>+</button>\n    </div>\n  );\n}\n\n// after\n// in `context/counter`\nconst increment = dispatch => dispatch({ type: 'increment' });\nconst decrement = dispatch => dispatch({ type: 'decrement' });\n// in module\nimport { useCounter, increment, decrement } from 'context/counter';\nfunction Counter() {\n  const [state, dispatch] = useCounter();\n  return (\n    <div>\n      <div>Current Count: {state.count}</div>\n      <button onClick={() => decrement(dispatch)}>-</button>\n      <button onClick={() => increment(dispatch)}>+</button>\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"The exercise code:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Context Module Functions\n// http://localhost:3000/isolated/exercise/01.js\n\nimport * as React from 'react';\nimport { dequal } from 'dequal';\n\n// ./context/user-context.js\n\nimport * as userClient from '../user-client';\nimport { useAuth } from '../auth-context';\n\nconst UserContext = React.createContext();\nUserContext.displayName = 'UserContext';\n\nfunction userReducer(state, action) {\n  switch (action.type) {\n    case 'start update': {\n      return {\n        ...state,\n        user: { ...state.user, ...action.updates },\n        status: 'pending',\n        storedUser: state.user,\n      };\n    }\n    case 'finish update': {\n      return {\n        ...state,\n        user: action.updatedUser,\n        status: 'resolved',\n        storedUser: null,\n        error: null,\n      };\n    }\n    case 'fail update': {\n      return {\n        ...state,\n        status: 'rejected',\n        error: action.error,\n        user: state.storedUser,\n        storedUser: null,\n      };\n    }\n    case 'reset': {\n      return {\n        ...state,\n        status: null,\n        error: null,\n      };\n    }\n    default: {\n      throw new Error(`Unhandled action type: ${action.type}`);\n    }\n  }\n}\n\nfunction UserProvider({ children }) {\n  const { user } = useAuth();\n  const [state, dispatch] = React.useReducer(userReducer, {\n    status: null,\n    error: null,\n    storedUser: user,\n    user,\n  });\n  const value = [state, dispatch];\n  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;\n}\n\nfunction useUser() {\n  const context = React.useContext(UserContext);\n  if (context === undefined) {\n    throw new Error(`useUser must be used within a UserProvider`);\n  }\n  return context;\n}\n\n// added context module function\nfunction updateUser(dispatch, user, updates) {\n  // 🐨 move the following logic to the `updateUser` function you create above\n  dispatch({ type: 'start update', updates });\n  userClient\n    .updateUser(user, updates)\n    .then(\n      updatedUser => dispatch({ type: 'finish update', updatedUser }),\n      error => dispatch({ type: 'fail update', error }),\n    );\n}\n\n// export {UserProvider, useUser}\n\n// src/screens/user-profile.js\n// import {UserProvider, useUser} from './context/user-context'\nfunction UserSettings() {\n  const [{ user, status, error }, userDispatch] = useUser();\n\n  const isPending = status === 'pending';\n  const isRejected = status === 'rejected';\n\n  const [formState, setFormState] = React.useState(user);\n\n  const isChanged = !dequal(user, formState);\n\n  function handleChange(e) {\n    setFormState({ ...formState, [e.target.name]: e.target.value });\n  }\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    updateUser(userDispatch, user, formState);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div style={{ marginBottom: 12 }}>\n        <label style={{ display: 'block' }} htmlFor=\"username\">\n          Username\n        </label>\n        <input\n          id=\"username\"\n          name=\"username\"\n          disabled\n          readOnly\n          value={formState.username}\n          style={{ width: '100%' }}\n        />\n      </div>\n      <div style={{ marginBottom: 12 }}>\n        <label style={{ display: 'block' }} htmlFor=\"tagline\">\n          Tagline\n        </label>\n        <input\n          id=\"tagline\"\n          name=\"tagline\"\n          value={formState.tagline}\n          onChange={handleChange}\n          style={{ width: '100%' }}\n        />\n      </div>\n      <div style={{ marginBottom: 12 }}>\n        <label style={{ display: 'block' }} htmlFor=\"bio\">\n          Biography\n        </label>\n        <textarea\n          id=\"bio\"\n          name=\"bio\"\n          value={formState.bio}\n          onChange={handleChange}\n          style={{ width: '100%' }}\n        />\n      </div>\n      <div>\n        <button\n          type=\"button\"\n          onClick={() => {\n            setFormState(user);\n            userDispatch({ type: 'reset' });\n          }}\n          disabled={!isChanged || isPending}\n        >\n          Reset\n        </button>\n        <button\n          type=\"submit\"\n          disabled={(!isChanged && !isRejected) || isPending}\n        >\n          {isPending\n            ? '...'\n            : isRejected\n            ? '✖ Try again'\n            : isChanged\n            ? 'Submit'\n            : '✔'}\n        </button>\n        {isRejected ? (\n          <pre style={{ color: 'red' }}>{error.message}</pre>\n        ) : null}\n      </div>\n    </form>\n  );\n}\n\nfunction UserDataDisplay() {\n  const [{ user }] = useUser();\n  return <pre>{JSON.stringify(user, null, 2)}</pre>;\n}\n\nfunction App() {\n  return (\n    <div\n      style={{\n        minHeight: 350,\n        width: 300,\n        backgroundColor: '#ddd',\n        borderRadius: 4,\n        padding: 10,\n      }}\n    >\n      <UserProvider>\n        <UserSettings />\n        <UserDataDisplay />\n      </UserProvider>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("h2",{id:"compound-components"},"Compound Components"),Object(o.b)("p",null,"We want to build components with implicit state between them."),Object(o.b)("p",null,"The ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/reach/reach-ui/tree/develop/packages/tooltip"}),"ReachUI Tooltip")," and ",Object(o.b)("a",r({parentName:"p"},{href:"https://reach.tech/tabs/"}),"ReachUI Tabs")," are the nominated examples of compound components in action."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Compound Components\n// http://localhost:3000/isolated/exercise/02.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nfunction Toggle(props) {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  return React.Children.map(props.children, child => {\n    // used to handle normal HTML elements\n    if (typeof child.type === 'string') {\n      return child;\n    }\n\n    return React.cloneElement(child, {\n      toggle,\n      on,\n    });\n  });\n}\n\n// 🐨 Flesh out each of these components\n\n// Accepts `on` and `children` props and returns `children` if `on` is true\nconst ToggleOn = ({ on, children }) => on && children;\n\n// Accepts `on` and `children` props and returns `children` if `on` is false\nconst ToggleOff = ({ on, children }) => !on && children;\n\n// Accepts `on` and `toggle` props and returns the <Switch /> with those props.\nconst ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;\n\nfunction App() {\n  return (\n    <div>\n      <Toggle>\n        <ToggleOn>The button is on</ToggleOn>\n        <ToggleOff>The button is off</ToggleOff>\n        <ToggleButton />\n      </Toggle>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("p",null,"You can also create an ",Object(o.b)("inlineCode",{parentName:"p"},"allow list")," of sorts if you want to only allow your children to be given the implicit state:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"const allowList = [ToggleOn, ToggleOff, ToggleButton];\n\nfunction Toggle(props) {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  return React.Children.map(props.children, child => {\n    // used to handle normal HTML elements\n    if (allowList.includes(typeof child.type)) {\n      return React.cloneElement(child, {\n        toggle,\n        on,\n      });\n    }\n\n    // can still return child\n    return child;\n  });\n}\n")),Object(o.b)("h2",{id:"flexible-compound-components"},"Flexible Compound Components"),Object(o.b)("p",null,"We can make flexible compound components by making use of React Context."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Flexible Compound Components\n// http://localhost:3000/isolated/exercise/03.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\n// 🐨 create your ToggleContext context here\n// 📜 https://reactjs.org/docs/context.html#reactcreatecontext\n\nconst ToggleContext = React.createContext();\n\nfunction Toggle({ children }) {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  // return <ToggleContext.Provider> where\n  // the value is an object that has `on` and `toggle` on it.\n  return (\n    <ToggleContext.Provider value={{ on, toggle }}>\n      {children}\n    </ToggleContext.Provider>\n  );\n}\n\n// 🐨 we'll still get the children from props (as it's passed to us by the\n// developers using our component), but we'll get `on` implicitly from\n// ToggleContext now\n// 🦉 You can create a helper method to retrieve the context here. Thanks to that,\n// your context won't be exposed to the user\n// 💰 `const context = React.useContext(ToggleContext)`\nfunction useToggleContext() {\n  const context = React.useContext(ToggleContext);\n  // note: you could just return the context creation directly by this\n  // is used for context safety.\n  if (!context) {\n    throw new Error('ToggleContext not provided');\n  }\n\n  return context;\n}\n\n// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext\nfunction ToggleOn({ children }) {\n  const { on } = useToggleContext();\n  return on ? children : null;\n}\n\n// 🐨 do the same thing to this that you did to the ToggleOn component\nfunction ToggleOff({ children }) {\n  const { on } = useToggleContext();\n  return on ? null : children;\n}\n\n// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`\nfunction ToggleButton(props) {\n  const { on, toggle } = useToggleContext();\n  return <Switch on={on} onClick={toggle} {...props} />;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Toggle>\n        <ToggleOn>The button is on</ToggleOn>\n        <ToggleOff>The button is off</ToggleOff>\n        <div>\n          <ToggleButton />\n        </div>\n      </Toggle>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("h2",{id:"prop-collections-and-getters"},"Prop Collections and Getters"),Object(o.b)("p",null,"Switching gears to things that can be used with custom hooks."),Object(o.b)("p",null,"A real-world example of this is the ",Object(o.b)("a",r({parentName:"p"},{href:"https://reach.tech/accordion/"}),"Reach UI Accordion"),"."),Object(o.b)("p",null,"These are patterns created by Kent C Dodds."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Prop Collections and Getters\n// http://localhost:3000/isolated/exercise/04.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nconst ToggleContext = React.createContext();\nToggleContext.displayName = 'ToggleContext';\n\nfunction useToggle() {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  // 🐨 Add a property called `togglerProps`. It should be an object that has\n  // `aria-pressed` and `onClick` properties.\n  // 💰 {'aria-pressed': on, onClick: toggle}\n  const togglerProps = { 'aria-pressed': on, onClick: toggle };\n\n  return { on, toggle, togglerProps };\n}\n\nfunction App() {\n  const { on, togglerProps } = useToggle();\n  return (\n    <div>\n      <Switch on={on} {...togglerProps} />\n      <hr />\n      <button aria-label=\"custom-button\" {...togglerProps}>\n        {on ? 'on' : 'off'}\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("h3",{id:"prop-getters-variants"},"prop getters variants"),Object(o.b)("p",null,"This variant is used more often by Kent."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Prop Collections and Getters\n// http://localhost:3000/isolated/exercise/04.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nconst ToggleContext = React.createContext();\nToggleContext.displayName = 'ToggleContext';\n\nfunction useToggle() {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  // 🐨 Add a property called `togglerProps`. It should be an object that has\n  // `aria-pressed` and `onClick` properties.\n  // 💰 {'aria-pressed': on, onClick: toggle}\n  const togglerProps = { 'aria-pressed': on, onClick: toggle };\n\n  const getTogglerProps = ({ onClick, ...props } = {}) => ({\n    'aria-pressed': on,\n    onClick: () => {\n      onClick?.();\n      toggle();\n    },\n    ...props,\n  });\n\n  return { on, toggle, togglerProps, getTogglerProps };\n}\n\nfunction App() {\n  const { on, getTogglerProps } = useToggle();\n  return (\n    <div>\n      <Switch\n        {...getTogglerProps({\n          on,\n        })}\n      />\n      <hr />\n      <button\n        {...getTogglerProps({\n          on,\n          'aria-label': 'custom-button',\n          onClick: () => console.log('overridden'),\n        })}\n      >\n        {on ? 'on' : 'off'}\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("p",null,"We can improve how the ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," is called in the prop getter by creating our own ",Object(o.b)("inlineCode",{parentName:"p"},"callAll")," function:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Helper function to call every function if defined\nfunction callAll(...fns) {\n  return (...args) => fns.forEach(fn => fn?.(...args));\n}\n\nfunction useToggle() {\n  const [on, setOn] = React.useState(false);\n  const toggle = () => setOn(!on);\n\n  // 🐨 Add a property called `togglerProps`. It should be an object that has\n  // `aria-pressed` and `onClick` properties.\n  // 💰 {'aria-pressed': on, onClick: toggle}\n  const togglerProps = { 'aria-pressed': on, onClick: toggle };\n\n  const getTogglerProps = ({ onClick, ...props } = {}) => ({\n    'aria-pressed': on,\n    onClick: callAll(onClick, toggle),\n    ...props,\n  });\n\n  return { on, toggle, togglerProps, getTogglerProps };\n}\n")),Object(o.b)("h2",{id:"state-reducer"},"State Reducer"),Object(o.b)("p",null,"A great implementation of inversion of control."),Object(o.b)("p",null,"In this exercise, we actually invert the control of the reducer in the custom ",Object(o.b)("inlineCode",{parentName:"p"},"useToggle")," hook to take a reducer that is defined as a prop. This gives control back to the component to implement its version of the reducer any way that it wants."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// State Reducer\n// http://localhost:3000/isolated/exercise/05.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nconst callAll = (...fns) => (...args) => fns.forEach(fn => fn?.(...args));\n\nfunction toggleReducer(state, { type, initialState }) {\n  switch (type) {\n    case 'toggle': {\n      return { on: !state.on };\n    }\n    case 'reset': {\n      return initialState;\n    }\n    default: {\n      throw new Error(`Unsupported type: ${type}`);\n    }\n  }\n}\n\n// 🐨 add a new option called `reducer` that defaults to `toggleReducer`\nfunction useToggle({ initialOn = false, reducer = toggleReducer } = {}) {\n  const { current: initialState } = React.useRef({ on: initialOn });\n  // 🐨 instead of passing `toggleReducer` here, pass the `reducer` that's\n  // provided as an option\n  // ... and that's it! Don't forget to check the 💯 extra credit!\n  const [state, dispatch] = React.useReducer(reducer, initialState);\n  const { on } = state;\n\n  const toggle = () => dispatch({ type: 'toggle' });\n  const reset = () => dispatch({ type: 'reset', initialState });\n\n  function getTogglerProps({ onClick, ...props } = {}) {\n    return {\n      'aria-pressed': on,\n      onClick: callAll(onClick, toggle),\n      ...props,\n    };\n  }\n\n  function getResetterProps({ onClick, ...props } = {}) {\n    return {\n      onClick: callAll(onClick, reset),\n      ...props,\n    };\n  }\n\n  return {\n    on,\n    reset,\n    toggle,\n    getTogglerProps,\n    getResetterProps,\n  };\n}\n\nfunction App() {\n  const [timesClicked, setTimesClicked] = React.useState(0);\n  const clickedTooMuch = timesClicked >= 4;\n\n  function toggleStateReducer(state, action) {\n    switch (action.type) {\n      case 'toggle': {\n        if (clickedTooMuch) {\n          return { on: state.on };\n        }\n        return { on: !state.on };\n      }\n      case 'reset': {\n        return { on: false };\n      }\n      default: {\n        throw new Error(`Unsupported type: ${action.type}`);\n      }\n    }\n  }\n\n  const { on, getTogglerProps, getResetterProps } = useToggle({\n    reducer: toggleStateReducer,\n  });\n\n  return (\n    <div>\n      <Switch\n        {...getTogglerProps({\n          disabled: clickedTooMuch,\n          on: on,\n          onClick: () => setTimesClicked(count => count + 1),\n        })}\n      />\n      {clickedTooMuch ? (\n        <div data-testid=\"notice\">\n          Whoa, you clicked too much!\n          <br />\n        </div>\n      ) : timesClicked > 0 ? (\n        <div data-testid=\"click-count\">Click count: {timesClicked}</div>\n      ) : null}\n      <button {...getResetterProps({ onClick: () => setTimesClicked(0) })}>\n        Reset\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(o.b)("h3",{id:"default-state-reducer"},"Default state reducer"),Object(o.b)("p",null,"How to modify how the state is handled ONLY in certain use cases. Here, we just need to override the cases we want with an if statement and pass the rest to the original reducer:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"function toggleStateReducer(state, action) {\n  if (action.type === 'toggle' && clickedTooMuch) {\n    return { on: state.on };\n  }\n\n  return toggleReducer(state, action);\n}\n")),Object(o.b)("h2",{id:"control-props"},"Control Props"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"'Sometimes, people want to be able to manage the internal state of our component from the outside. The state reducer allows them to manage what state changes are made when a state change happens, but sometimes people may want to make state changes themselves. We can allow them to do this with a feature called \"Control Props.\"'")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Control Props\n// http://localhost:3000/isolated/exercise/06.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nconst callAll = (...fns) => (...args) => fns.forEach(fn => fn?.(...args));\n\nconst actionTypes = {\n  toggle: 'toggle',\n  reset: 'reset',\n};\n\nfunction toggleReducer(state, { type, initialState }) {\n  switch (type) {\n    case actionTypes.toggle: {\n      return { on: !state.on };\n    }\n    case actionTypes.reset: {\n      return initialState;\n    }\n    default: {\n      throw new Error(`Unsupported type: ${type}`);\n    }\n  }\n}\n\nfunction useToggle({\n  initialOn = false,\n  reducer = toggleReducer,\n  // 🐨 add an `onChange` prop.\n  onChange,\n  // 🐨 add an `on` option here\n  // 💰 you can alias it to `controlledOn` to avoid \"variable shadowing.\"\n  on: controlledOn,\n} = {}) {\n  const { current: initialState } = React.useRef({ on: initialOn });\n  const [state, dispatch] = React.useReducer(reducer, initialState);\n  // 🐨 determine whether on is controlled and assign that to `onIsControlled`\n  // 💰 `controlledOn != null`\n  const onIsControlled = controlledOn != null;\n\n  // 🐨 Replace the next line with assigning `on` to `controlledOn` if\n  // `onIsControlled`, otherwise, it should be `state.on`.\n  const on = onIsControlled ? controlledOn : state.on;\n\n  // We want to call `onChange` any time we need to make a state change, but we\n  // only want to call `dispatch` if `!onIsControlled` (otherwise we could get\n  // unnecessary renders).\n  // 🐨 To simplify things a bit, let's make a `dispatchWithOnChange` function\n  // right here. This will:\n  // 1. accept an action\n  // 2. if onIsControlled is false, call dispatch with that action\n  // 3. Then call `onChange` with our \"suggested changes\" and the action.\n  const dispatchWithOnChange = action => {\n    if (!onIsControlled) {\n      dispatch(action);\n    }\n\n    // 🦉 \"Suggested changes\" refers to: the changes we would make if we were\n    // managing the state ourselves. This is similar to how a controlled <input />\n    // `onChange` callback works. When your handler is called, you get an event\n    // which has information about the value input that _would_ be set to if that\n    // state were managed internally.\n    // So how do we determine our suggested changes? What code do we have to\n    // calculate the changes based on the `action` we have here? That's right!\n    // The reducer! So if we pass it the current state and the action, then it\n    // should return these \"suggested changes!\"\n    //\n    // 💰 Sorry if Olivia the Owl is cryptic. Here's what you need to do for that onChange call:\n    // `onChange(reducer({...state, on}, action), action)`\n    // 💰 Also note that user's don't *have* to pass an `onChange` prop (it's not required)\n    // so keep that in mind when you call it! How could you avoid calling it if it's not passed?\n    callAll(onChange(reducer({ ...state, on }, action), action));\n  };\n\n  // make these call `dispatchWithOnChange` instead\n  const toggle = () => dispatchWithOnChange({ type: actionTypes.toggle });\n  const reset = () =>\n    dispatchWithOnChange({ type: actionTypes.reset, initialState });\n\n  function getTogglerProps({ onClick, ...props } = {}) {\n    return {\n      'aria-pressed': on,\n      onClick: callAll(onClick, toggle),\n      ...props,\n    };\n  }\n\n  function getResetterProps({ onClick, ...props } = {}) {\n    return {\n      onClick: callAll(onClick, reset),\n      ...props,\n    };\n  }\n\n  return {\n    on,\n    reset,\n    toggle,\n    getTogglerProps,\n    getResetterProps,\n  };\n}\n\nfunction Toggle({ on: controlledOn, onChange }) {\n  const { on, getTogglerProps } = useToggle({ on: controlledOn, onChange });\n  const props = getTogglerProps({ on });\n  return <Switch {...props} />;\n}\n\nfunction App() {\n  const [bothOn, setBothOn] = React.useState(false);\n  const [timesClicked, setTimesClicked] = React.useState(0);\n\n  function handleToggleChange(state, action) {\n    if (action.type === actionTypes.toggle && timesClicked > 4) {\n      return;\n    }\n    setBothOn(state.on);\n    setTimesClicked(c => c + 1);\n  }\n\n  function handleResetClick() {\n    setBothOn(false);\n    setTimesClicked(0);\n  }\n\n  return (\n    <div>\n      <div>\n        <Toggle on={bothOn} onChange={handleToggleChange} />\n        <Toggle on={bothOn} onChange={handleToggleChange} />\n      </div>\n      {timesClicked > 4 ? (\n        <div data-testid=\"notice\">\n          Whoa, you clicked too much!\n          <br />\n        </div>\n      ) : (\n        <div data-testid=\"click-count\">Click count: {timesClicked}</div>\n      )}\n      <button onClick={handleResetClick}>Reset</button>\n      <hr />\n      <div>\n        <div>Uncontrolled Toggle:</div>\n        <Toggle\n          onChange={(...args) =>\n            console.info('Uncontrolled Toggle onChange', ...args)\n          }\n        />\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n// we're adding the Toggle export for tests\nexport { Toggle };\n")),Object(o.b)("h3",{id:"adding-a-read-only-warning"},"Adding a Read Only warning"),Object(o.b)("p",null,"In this example, we use ",Object(o.b)("inlineCode",{parentName:"p"},"console.error")," to give a warning when a prop is not used the way we expect:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Control Props\n// http://localhost:3000/isolated/exercise/06.js\n\nimport * as React from 'react';\nimport { Switch } from '../switch';\n\nconst callAll = (...fns) => (...args) => fns.forEach(fn => fn?.(...args));\n\nconst actionTypes = {\n  toggle: 'toggle',\n  reset: 'reset',\n};\n\nfunction toggleReducer(state, { type, initialState }) {\n  switch (type) {\n    case actionTypes.toggle: {\n      return { on: !state.on };\n    }\n    case actionTypes.reset: {\n      return initialState;\n    }\n    default: {\n      throw new Error(`Unsupported type: ${type}`);\n    }\n  }\n}\n\nfunction useToggle({\n  initialOn = false,\n  reducer = toggleReducer,\n  // 🐨 add an `onChange` prop.\n  onChange,\n  // 🐨 add an `on` option here\n  // 💰 you can alias it to `controlledOn` to avoid \"variable shadowing.\"\n  on: controlledOn,\n  readOnly = false,\n} = {}) {\n  const { current: initialState } = React.useRef({ on: initialOn });\n  const [state, dispatch] = React.useReducer(reducer, initialState);\n  // 🐨 determine whether on is controlled and assign that to `onIsControlled`\n  // 💰 `controlledOn != null`\n  const onIsControlled = controlledOn != null;\n\n  // 🐨 Replace the next line with assigning `on` to `controlledOn` if\n  // `onIsControlled`, otherwise, it should be `state.on`.\n  const on = onIsControlled ? controlledOn : state.on;\n\n  const hasOnChange = Boolean(onChange);\n  React.useEffect(() => {\n    if (!hasOnChange && onIsControlled) {\n      if (!readOnly) {\n        console.error('Prop on provided without onChange');\n      }\n    }\n  }, [hasOnChange, onIsControlled, readOnly]);\n\n  // We want to call `onChange` any time we need to make a state change, but we\n  // only want to call `dispatch` if `!onIsControlled` (otherwise we could get\n  // unnecessary renders).\n  // 🐨 To simplify things a bit, let's make a `dispatchWithOnChange` function\n  // right here. This will:\n  // 1. accept an action\n  // 2. if onIsControlled is false, call dispatch with that action\n  // 3. Then call `onChange` with our \"suggested changes\" and the action.\n  const dispatchWithOnChange = action => {\n    if (!onIsControlled) {\n      dispatch(action);\n    }\n\n    // 🦉 \"Suggested changes\" refers to: the changes we would make if we were\n    // managing the state ourselves. This is similar to how a controlled <input />\n    // `onChange` callback works. When your handler is called, you get an event\n    // which has information about the value input that _would_ be set to if that\n    // state were managed internally.\n    // So how do we determine our suggested changes? What code do we have to\n    // calculate the changes based on the `action` we have here? That's right!\n    // The reducer! So if we pass it the current state and the action, then it\n    // should return these \"suggested changes!\"\n    //\n    // 💰 Sorry if Olivia the Owl is cryptic. Here's what you need to do for that onChange call:\n    // `onChange(reducer({...state, on}, action), action)`\n    // 💰 Also note that user's don't *have* to pass an `onChange` prop (it's not required)\n    // so keep that in mind when you call it! How could you avoid calling it if it's not passed?\n    onChange?.(reducer({ ...state, on }, action), action);\n  };\n\n  // make these call `dispatchWithOnChange` instead\n  const toggle = () => dispatchWithOnChange({ type: actionTypes.toggle });\n  const reset = () =>\n    dispatchWithOnChange({ type: actionTypes.reset, initialState });\n\n  function getTogglerProps({ onClick, ...props } = {}) {\n    return {\n      'aria-pressed': on,\n      onClick: callAll(onClick, toggle),\n      ...props,\n    };\n  }\n\n  function getResetterProps({ onClick, ...props } = {}) {\n    return {\n      onClick: callAll(onClick, reset),\n      ...props,\n    };\n  }\n\n  return {\n    on,\n    reset,\n    toggle,\n    getTogglerProps,\n    getResetterProps,\n  };\n}\n\nfunction Toggle({ on: controlledOn, onChange, readOnly }) {\n  const { on, getTogglerProps } = useToggle({\n    on: controlledOn,\n    onChange,\n    readOnly,\n  });\n  const props = getTogglerProps({ on });\n  return <Switch {...props} />;\n}\n\nfunction App() {\n  const [bothOn, setBothOn] = React.useState(false);\n  const [timesClicked, setTimesClicked] = React.useState(0);\n\n  function handleToggleChange(state, action) {\n    if (action.type === actionTypes.toggle && timesClicked > 4) {\n      return;\n    }\n    setBothOn(state.on);\n    setTimesClicked(c => c + 1);\n  }\n\n  function handleResetClick() {\n    setBothOn(false);\n    setTimesClicked(0);\n  }\n\n  return (\n    <div>\n      <div>\n        {/* Error acknowledged given readOnly */}\n        <Toggle on={bothOn} readOnly={true} />\n        {/* Causes error */}\n        <Toggle on={bothOn} />\n      </div>\n      {timesClicked > 4 ? (\n        <div data-testid=\"notice\">\n          Whoa, you clicked too much!\n          <br />\n        </div>\n      ) : (\n        <div data-testid=\"click-count\">Click count: {timesClicked}</div>\n      )}\n      <button onClick={handleResetClick}>Reset</button>\n      <hr />\n      <div>\n        <div>Uncontrolled Toggle:</div>\n        <Toggle />\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n// we're adding the Toggle export for tests\nexport { Toggle };\n")),Object(o.b)("p",null,"Note: there is actually a package ",Object(o.b)("inlineCode",{parentName:"p"},"warning")," that React uses to give the warning."),Object(o.b)("h3",{id:"adding-a-controlled-state-warning"},"Adding a Controlled State warning"),Object(o.b)("p",null,"For this, we do the same as above to warn when we go from ",Object(o.b)("inlineCode",{parentName:"p"},"uncontrolled")," to ",Object(o.b)("inlineCode",{parentName:"p"},"controlled"),"."),Object(o.b)("p",null,"In this case it was done comparing the ",Object(o.b)("inlineCode",{parentName:"p"},"onIsControlled")," value with a refered to ",Object(o.b)("inlineCode",{parentName:"p"},"onIsControlled"),"."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"const { current: onWasControlled } = React.useRef(onIsControlled);\nReact.useEffect(() => {\n  warning(\n    !(onIsControlled && !onWasControlled),\n    'changing from uncontrolled state to controlled state',\n  );\n  warning(\n    !(onIsControlled && !onWasControlled),\n    'changing from controlled state to uncontrolled state',\n  );\n});\n")),Object(o.b)("h3",{id:"extract-warning-into-a-custom-hook"},"Extract warning into a custom hook"),Object(o.b)("p",null,"This is basically abstracting all the logic to a custom hook as we would normally do and call it with ",Object(o.b)("inlineCode",{parentName:"p"},"useFooBarWarning()")),Object(o.b)("h3",{id:"not-warning-in-production"},"Not warning in production"),Object(o.b)("p",null,"We use the ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," here."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"if (process.env.NODE_ENV === 'production') {\n  // do something\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Epic-React/Advanced-React-Patterns.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-epic-react-advanced-react-patterns-md-449aedf30cbc9f10fba3.js.map