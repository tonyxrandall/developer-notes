(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{ye6B:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return r}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Jest/Extending-Jest.md"}});var l={_frontmatter:i},c=a.a;function r(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(c,s({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"extending-jest"},"Extending Jest"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// example file test/extensions.js\nimport { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';\nimport chalk from 'chalk';\nimport 'jest-dom/extend-expect';\n\nconst extensions = {\n  toBeOn(toggleButton) {\n    const on = toggleButton.classList.contains('toggle-btn-on');\n    if (on) {\n      return {\n        message: () =>\n          [\n            `${matcherHint('.not.toBeOn', 'received', '')} ${chalk.dim(\n              '// it does not have the toggle-btn-on class',\n            )}`,\n            `Expected the given element to not contain the class name:`,\n            `  ${printExpected('toggle-btn-on')}`,\n            `Received element:`,\n            `  ${printReceived(toggleButton)}`,\n            '',\n            `Because of this, ${chalk.bold(\n              `the button is in an ${chalk.underline('on')} state`,\n            )}`,\n            '',\n          ].join('\\n'),\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          [\n            `${matcherHint('.toBeOn', 'received', '')} ${chalk.dim(\n              '// it has the toggle-btn-on class',\n            )}`,\n            '',\n            `Expected the given element to contain the class name:`,\n            `  ${printExpected('toggle-btn-on')}`,\n            `Received element:`,\n            `  ${printReceived(toggleButton)}`,\n            '',\n            `Because of this, ${chalk.bold(\n              `the button is in an ${chalk.underline('off')} state`,\n            )}`,\n            '',\n          ].join('\\n'),\n        pass: false,\n      };\n    }\n  },\n  toBeOff(toggleButton) {\n    const off = toggleButton.classList.contains('toggle-btn-off');\n    if (off) {\n      return {\n        message: () =>\n          [\n            `${matcherHint('.not.toBeOff', 'received', '')} ${chalk.dim(\n              '// it does not have the toggle-btn-off class',\n            )}`,\n            `Expected the given element to not contain the class name:`,\n            `  ${printExpected('toggle-btn-off')}`,\n            `Received element:`,\n            `  ${printReceived(toggleButton)}`,\n            '',\n            `Because of this, ${chalk.bold(\n              `the button is in an ${chalk.underline('off')} state`,\n            )}`,\n            '',\n          ].join('\\n'),\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          [\n            `${matcherHint('.toBeOff', 'received', '')} ${chalk.dim(\n              '// it has the toggle-btn-off class',\n            )}`,\n            '',\n            `Expected the given element to contain the class name:`,\n            `  ${printExpected('toggle-btn-off')}`,\n            `Received element:`,\n            `  ${printReceived(toggleButton)}`,\n            '',\n            `Because of this, ${chalk.bold(\n              `the button is in an ${chalk.underline('on')} state`,\n            )}`,\n            '',\n          ].join('\\n'),\n        pass: false,\n      };\n    }\n  },\n};\n\nexport { extensions };\n\n// helper func in `test/utils.js` that is used for startup\nexpect.extend(extensions);\n")),Object(o.b)("p",null,"Then for an example of the usage:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"test('renders a toggle component', () => {\n  const handleToggle = jest.fn();\n  const { toggleButton, toggle } = renderToggle(\n    <Usage onToggle={handleToggle} />,\n  );\n  expect(toggleButton).toBeOff();\n  toggle();\n  expect(toggleButton).toBeOn();\n  expect(handleToggle).toHaveBeenCalledTimes(1);\n  expect(handleToggle).toHaveBeenCalledWith(true);\n});\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Jest/Extending-Jest.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-jest-extending-jest-md-104e38632490796c06d1.js.map