(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{bH2F:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Memento.md"}});var i={_frontmatter:s},c=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"memento"},"Memento"),Object(a.b)("p",null,"Capture and externalise an object's internal state allowing the object to be restored to this state later (without violating encapsulation)."),Object(a.b)("h2",{id:"participants"},"Participants"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Memento (stores internal state of Originator object - may store as much or little as possible)"),Object(a.b)("li",{parentName:"ul"},"Originator (creates memento containing snapshot of current state)"),Object(a.b)("li",{parentName:"ul"},"Caretaker (responsible for memento's safekeeping)")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"class State {\n  private _value: String;\n\n  constructor(value) {\n    this._value = value;\n  }\n\n  public set value(newValue: String) {\n    this._value = newValue;\n  }\n\n  public get value() {\n    return this._value;\n  }\n}\n\ninterface StateInterface {\n  state: State;\n}\n\nclass Memento implements StateInterface {\n  private _state: State;\n\n  constructor(state: State) {\n    this._state = state;\n  }\n\n  public set state(newState: State) {\n    this._state = newState;\n  }\n\n  public get state() {\n    return this._state;\n  }\n}\n\nclass Originator implements StateInterface {\n  private _state: State;\n\n  constructor(state: State) {\n    console.log(`\"${state.value}\"`);\n    this._state = state;\n  }\n\n  public set state(state: State) {\n    console.log(state.value);\n    this._state = state;\n  }\n\n  public get state() {\n    return this._state;\n  }\n\n  public createMemento() {\n    console.log(`create \"${this._state.value}\" memento`);\n    return new Memento(this._state);\n  }\n\n  public restoreMemento(memento: Memento) {\n    console.log(`restore \"${memento.state.value}\"`);\n    this._state = memento.state;\n  }\n}\n\nclass CareTaker {\n  private _memento: Memento;\n\n  public set memento(memento: Memento) {\n    // memento saved\n    this._memento = memento;\n  }\n\n  public get memento() {\n    return this._memento;\n  }\n}\n\n(function main() {\n  // Save check point\n  const oldState = new State('check point');\n  const originator = new Originator(oldState);\n  const careTaker = new CareTaker();\n  careTaker.memento = originator.createMemento();\n\n  // Player dies\n  const currentState = new State('die');\n  originator.state = currentState;\n\n  // Player reset to check point\n  originator.restoreMemento(careTaker.memento);\n\n  // Player gain medel\n  const medalState = new State('get medal');\n  originator.state = medalState;\n  // Save\n  careTaker.memento = originator.createMemento();\n})();\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Memento.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-memento-md-4cc420aed60ee253c143.js.map