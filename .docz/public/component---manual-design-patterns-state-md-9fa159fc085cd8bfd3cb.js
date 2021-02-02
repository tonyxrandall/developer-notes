(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{E0J6:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return i})),e.d(t,"default",(function(){return o}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var a=e("/FXl"),s=e("TjRS");e("aD51");function h(){return(h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/State.md"}});var c={_frontmatter:i},r=s.a;function o(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,a,s={},h=Object.keys(n);for(a=0;a<h.length;a++)e=h[a],t.indexOf(e)>=0||(s[e]=n[e]);return s}(n,["components"]);return Object(a.b)(r,h({},c,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"state"},"State"),Object(a.b)("p",null,"Object Behavioural Design Pattern."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",h({parentName:"pre"},{className:"language-typescript"}),"interface ATMState {\n  name?: string;\n  takeCash(cash: number): void;\n}\n\nclass ATMHasCashState implements ATMState {\n  private _machine: ATMMachine;\n  name: string;\n  constructor(machine: ATMMachine, name: string) {\n    this.name = name;\n    this._machine = machine;\n  }\n\n  takeCash(cash: number): void {\n    if (this._machine.cash < cash) {\n      this._machine.state = this._machine.noCashState();\n      console.log('Not enough cash');\n      return;\n    } else if (this._machine.cash === cash) {\n      this._machine.state = this._machine.noCashState();\n      console.log('No cash after cash token');\n    }\n    console.log(\n      `[current machine total - cash]: ${this._machine.cash} - ${cash}`\n    );\n    this._machine.cash -= cash;\n  }\n}\n\nclass ATMNoCashState implements ATMState {\n  private _machine: ATMMachine;\n  name: string;\n  constructor(machine: ATMMachine, name: string) {\n    this.name = name;\n    this._machine = machine;\n  }\n\n  takeCash(cash: number): void {\n    throw new Error('ATMMachine has no cash');\n  }\n}\n\nclass ATMMachine implements ATMState {\n  private _hasCashState: ATMHasCashState;\n  private _noCashState: ATMNoCashState;\n\n  private _currentState: ATMState;\n\n  public cash: number;\n\n  constructor(cash: number) {\n    this.cash = cash;\n\n    this._hasCashState = new ATMHasCashState(this, 'HasCash');\n    this._noCashState = new ATMNoCashState(this, 'NoCash');\n\n    this._currentState = this.cash ? this._hasCashState : this._noCashState;\n  }\n\n  public set state(value: ATMState) {\n    console.log(`Current state is ${value.name}`);\n    this._currentState = value;\n  }\n\n  public get state() {\n    return this._currentState;\n  }\n\n  takeCash(cash: number): void {\n    this._currentState.takeCash(cash);\n  }\n\n  // Get states\n  public hasCashState() {\n    return this._hasCashState;\n  }\n\n  public noCashState() {\n    return this._noCashState;\n  }\n}\n\n(function main() {\n  const machine = new ATMMachine(1200);\n  machine.takeCash(200); // has cash\n  machine.takeCash(400); // has cash\n  machine.takeCash(1000); // not enough\n})();\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/State.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-state-md-9fa159fc085cd8bfd3cb.js.map