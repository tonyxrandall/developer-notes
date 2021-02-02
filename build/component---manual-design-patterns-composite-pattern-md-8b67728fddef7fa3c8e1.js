(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{HxdB:function(e,n,i){"use strict";i.r(n),i.d(n,"_frontmatter",(function(){return o})),i.d(n,"default",(function(){return p}));i("1c7q"),i("abGl"),i("gZHo"),i("Fdmb"),i("Ir+3"),i("2mQt"),i("mXGw");var t=i("/FXl"),a=i("TjRS");i("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Composite-Pattern.md"}});var l={_frontmatter:o},s=a.a;function p(e){var n=e.components,i=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,["components"]);return Object(t.b)(s,r({},l,i,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"composite-pattern"},"Composite Pattern"),Object(t.b)("p",null,"The ",Object(t.b)("inlineCode",{parentName:"p"},"Composite Pattern")," is a Gang Of Four structural Design Pattern that helps solve the following problems:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"A part-whole hierarchy should be represented so that clients can treat part and whole objects uniformly."),Object(t.b)("li",{parentName:"ol"},"A part-whole hierarcy should be represented as tree structure.")),Object(t.b)("p",null,"The Composite pattern will describe the following:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"A unified ",Object(t.b)("inlineCode",{parentName:"li"},"Component")," interface for both part (Leaf) objects and whole (Composite) objects."),Object(t.b)("li",{parentName:"ul"},"Individual ",Object(t.b)("inlineCode",{parentName:"li"},"Leaf")," objects implement the ",Object(t.b)("inlineCode",{parentName:"li"},"Component")," interface directly, and ",Object(t.b)("inlineCode",{parentName:"li"},"Composite")," objects forward requests to their child components.")),Object(t.b)("p",null,"Clients can then work through the ",Object(t.b)("inlineCode",{parentName:"p"},"Component")," interface to treat ",Object(t.b)("inlineCode",{parentName:"p"},"Leaf")," and ",Object(t.b)("inlineCode",{parentName:"p"},"Composite")," objects uniformly."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Leaf")," objects perform a request directly, and ",Object(t.b)("inlineCode",{parentName:"p"},"Composite")," objects forward the request to their child components recursively downwards the tree structure. This makes client classes easier to implement, change, test, and reuse."),Object(t.b)("h2",{id:"example"},"Example"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"interface ArmyObject {\n  name: String;\n  operate(): void;\n}\n\nclass Team implements ArmyObject {\n  name: String;\n  private _soldiers: ArmyObject[];\n\n  constructor(name: String) {\n    this.name = name;\n    this._soldiers = [];\n  }\n\n  operate(): void {\n    console.log(`Team: ${this.name} operates`);\n    this._soldiers.map((soldier: ArmyObject) => {\n      soldier.operate();\n    });\n  }\n\n  addSoldier(newSoldier: ArmyObject) {\n    const soldiers = this._soldiers.filter((soldier: ArmyObject, index) => {\n      return soldier.name === newSoldier.name;\n    });\n    if (soldiers.length < 1) {\n      console.log(`Soldier: ${newSoldier.name} comes in ${this.name}`);\n      this._soldiers.push(newSoldier);\n    } else {\n      console.log('The soldier is already in the team');\n    }\n  }\n\n  soldierGone(deadSoldier: ArmyObject) {\n    const deads = this._soldiers.map((soldier: ArmyObject, index) => {\n      if (soldier.name === deadSoldier.name) {\n        return index;\n      }\n    });\n    if (deads.length > 0) {\n      console.log(`Soldier: ${deadSoldier.name} died in the fight`);\n      this._soldiers.slice(deads[0], 1);\n    } else {\n      console.log('No one dies');\n    }\n  }\n}\n\nclass Soldier implements ArmyObject {\n  name: String;\n\n  constructor(name: String) {\n    this.name = name;\n  }\n\n  operate() {\n    console.log(`Soldier: ${this.name} soldier operates`);\n  }\n}\n\n(function main() {\n  const team = new Team('Seal Team 6');\n  const specialSquad = new Team('Seal Team 6 - Special Squad');\n\n  const soldierJoe = new Soldier('Joe');\n  const soldierJames = new Soldier('James');\n  const soldierRoy = new Soldier('Roy');\n  team.addSoldier(soldierJoe);\n  team.addSoldier(soldierJames);\n  team.addSoldier(soldierRoy);\n\n  const specialForceTommy = new Soldier('Tommy');\n\n  specialSquad.addSoldier(specialForceTommy);\n\n  team.operate();\n  specialSquad.operate();\n\n  team.soldierGone(soldierJames);\n})();\n")),Object(t.b)("h2",{id:"java-graphic-example"},"Java Graphic Example"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-java"}),'import java.util.ArrayList;\n\n/** "Component" */\ninterface Graphic {\n    //Prints the graphic.\n    public void print();\n}\n\n/** "Composite" */\nclass CompositeGraphic implements Graphic {\n    //Collection of child graphics.\n    private final ArrayList<Graphic> childGraphics = new ArrayList<>();\n\n    //Adds the graphic to the composition.\n    public void add(Graphic graphic) {\n        childGraphics.add(graphic);\n    }\n\n    //Prints the graphic.\n    @Override\n    public void print() {\n        for (Graphic graphic : childGraphics) {\n            graphic.print();  //Delegation\n        }\n    }\n}\n\n/** "Leaf" */\nclass Ellipse implements Graphic {\n    //Prints the graphic.\n    @Override\n    public void print() {\n        System.out.println("Ellipse");\n    }\n}\n\n/** Client */\npublic class CompositeDemo {\n    public static void main(String[] args) {\n        //Initialize four ellipses\n        Ellipse ellipse1 = new Ellipse();\n        Ellipse ellipse2 = new Ellipse();\n        Ellipse ellipse3 = new Ellipse();\n        Ellipse ellipse4 = new Ellipse();\n\n        //Creates two composites containing the ellipses\n        CompositeGraphic graphic2 = new CompositeGraphic();\n        graphic2.add(ellipse1);\n        graphic2.add(ellipse2);\n        graphic2.add(ellipse3);\n\n        CompositeGraphic graphic3 = new CompositeGraphic();\n        graphic3.add(ellipse4);\n\n        //Create another graphics that contains two graphics\n        CompositeGraphic graphic1 = new CompositeGraphic();\n        graphic1.add(graphic2);\n        graphic1.add(graphic3);\n\n        //Prints the complete graphic (Four times the string "Ellipse").\n        graphic1.print();\n    }\n}\n')),Object(t.b)("h2",{id:"resources"},"Resources"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Composite_pattern"}),"Composite Wikipedia"))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Composite-Pattern.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-composite-pattern-md-8b67728fddef7fa3c8e1.js.map