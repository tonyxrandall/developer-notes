(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"/W6/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Decorator-Pattern.md"}});var c={_frontmatter:o},s=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"decorator-pattern"},"Decorator Pattern"),Object(a.b)("p",null,"This is another type of structural pattern."),Object(a.b)("p",null,"The decorator pattern works by creating a decorator class that accepts the base class as an argument to the constructor and then implementing a function that calls to super."),Object(a.b)("p",null,"Intent:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Attach additional responsibilities to an object dynamically. Gives an alternative to subclassing."),Object(a.b)("li",{parentName:"ol"},"Client-specified embellishment of a core object by recursively wrapping it."),Object(a.b)("li",{parentName:"ol"},"Wrapping a gift, putting it in a box, and wrapping the box.")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"interface Pizza {\n  cost(): Number;\n}\n\nclass BasePizza implements Pizza {\n  cost(): Number {\n    return 10;\n  }\n}\n\nabstract class PizzaExtraDecorator implements Pizza {\n  private _pizza: Pizza;\n\n  constructor(pizza: BasePizza) {\n    this._pizza = pizza;\n  }\n\n  cost(): Number {\n    return this._pizza.cost();\n  }\n}\n\nclass ExtraPineappleDecorator extends PizzaExtraDecorator {\n  private _price: Number = 2;\n\n  cost(): Number {\n    return super.cost().valueOf() + this._price.valueOf();\n  }\n}\n\nclass ExtraCheeseDecorator extends PizzaExtraDecorator {\n  private _price: Number = 2.5;\n\n  cost(): Number {\n    return super.cost().valueOf() + this._price.valueOf();\n  }\n}\n\n(function main() {\n  const pizza = new BasePizza();\n  const withPineapple = new ExtraPineappleDecorator(pizza);\n  const withExtraCheese = new ExtraCheeseDecorator(withPineapple);\n  console.log(`Total: $${withExtraCheese.cost()}`);\n})();\n")),Object(a.b)("p",null,"Other alternatives could include creating a christmas tree with actual decorations as a decorator."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Decorator-Pattern.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-decorator-pattern-md-fdf8ee2ba34bcf021f94.js.map