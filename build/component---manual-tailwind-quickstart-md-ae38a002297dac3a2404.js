(window.webpackJsonp=window.webpackJsonp||[]).push([[654],{lzhs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),s=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Tailwind/Quickstart.md"}});var o={_frontmatter:l},i=s.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(i,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"quickstart-with-tailwind--typescript--vscode"},"Quickstart with Tailwind + TypeScript + VSCode"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"VSCode extension")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/installation"}),"Tailwind - Installation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/flex/#app"}),"Tailwind - Flex")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/text-color/#app"}),"Tailwind - Text Color")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/background-color/#app"}),"Tailwind - Background Color")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/border-radius/#app"}),"Tailwind - Border Radius")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://tailwindcss.com/docs/padding/#app"}),"Tailwind - Padding")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://daveceddia.com/tailwind-create-react-app/"}),"Tailwind with CRA - Dave Ceddia")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/JedWatson/classnames"}),"Classnames - GitHub"))),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),"npx create-react-app hello-tailwind --template typescript\ncd hello-tailwind\n# Using Yarn\nyarn add tailwindcss\n")),Object(a.b)("h2",{id:"add-css-imports"},"Add CSS imports"),Object(a.b)("p",null,"At the top of ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.css"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-css"}),"@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';\n")),Object(a.b)("h2",{id:"adding-scripts"},"Adding scripts"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "build:tailwind": "tailwindcss build src/tailwind.css -o src/tailwind.output.css",\n    "prestart": "npm run build:tailwind",\n    "prebuild": "npm run build:tailwind"\n  }\n}\n')),Object(a.b)("h2",{id:"usage-with-classnames"},"Usage with classnames"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),"yarn add classnames @types/classnames\n")),Object(a.b)("h2",{id:"updating-apptsx-to-use-the-correct-styles"},"Updating App.tsx to use the correct styles"),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"index.tsx")," with the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './tailwind.output.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root'),\n);\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"App.jsx")," to be the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport cx from 'classnames';\n\nfunction App() {\n  const [toggle, setToggle] = React.useState<boolean>(false);\n\n  return (\n    <div className=\"bg-gray-200 flex items-center justify-center h-screen\">\n      <button\n        className={cx('p-3 rounded-sm', {\n          'bg-blue-500 hover:bg-blue-700': !toggle,\n          'bg-red-500 hover:bg-red-500': toggle,\n        })}\n        onClick={() => setToggle(!toggle)}\n      >\n        Toggle\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("p",null,"Alternatively, you could abstract this out:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport cx from 'classnames';\n\nfunction App() {\n  const [toggle, setToggle] = React.useState<boolean>(false);\n\n  const buttonClasses = cx({\n    'bg-blue-500 hover:bg-blue-700': !toggle,\n    'bg-red-500 hover:bg-red-500': toggle,\n  });\n  return (\n    <div className=\"bg-gray-200 flex items-center justify-center h-screen\">\n      <button\n        className={`p-3 rounded-sm ${buttonClasses}`}\n        onClick={() => setToggle(!toggle)}\n      >\n        Toggle\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("h2",{id:"alternative-without-classnames"},"Alternative without classnames"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\n// import cx from 'classnames';\n\nfunction App() {\n  const [toggle, setToggle] = React.useState<boolean>(false);\n  console.log('toggle', toggle);\n\n  const buttonClasses = toggle\n    ? 'bg-red-500 hover:bg-red-500'\n    : 'bg-blue-500 hover:bg-blue-500';\n  return (\n    <div className=\"bg-gray-200 flex items-center justify-center h-screen\">\n      <button\n        className={`p-3 rounded-sm ${buttonClasses}`}\n        onClick={() => setToggle(!toggle)}\n      >\n        Toggle\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Tailwind/Quickstart.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-tailwind-quickstart-md-ae38a002297dac3a2404.js.map