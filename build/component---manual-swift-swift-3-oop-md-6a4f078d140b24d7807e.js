(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{mCgc:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Swift/Swift-3-OOP.md"}});var i={_frontmatter:s},o=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(o,l({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"swift-3-oop"},"Swift 3 OOP"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"structs"},"Structs"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"let coordinate1: (x: Int, y: Int) = (1,0) //tuple\ncoordinate1.x\n\n// structs are the blueprints\nstruct Point {\n  let x: Int\n  let y: Int\n}\n\n// when defining structs, define the params\nlet p1 = Point(x: 1, y: 0)\np1\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"instances-of-objects"},"Instances of Objects"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),'// when defining structs, define the params\nlet p1 = Point(x: 1, y: 0)\np1\np1.x\np1.y\n\nstruct User {\n  let username: String\n  let password: String\n}\n\nlet Login = User(username: "example@mail.com", password: "123pass")\nLogin.username\nLogin.password\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Declaring empty arrays that infer a type ",Object(r.b)("inlineCode",{parentName:"li"},"var results: [Point] = []")),Object(r.b)("li",{parentName:"ul"},"Declaring it the preferred way ",Object(r.b)("inlineCode",{parentName:"li"},"var results = [Point]()"))),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),'struct PointTwo {\n  let x: Int\n  let y: Int\n\n  // three slashes helps with definitions\n\n  /// Returns the surrounding points in range of\n  /// the current one\n  func points(inRange range: Int = 1) -> [PointTwo] {\n    var results = [PointTwo]()\n\n    let lowerBoundOfXRange = x - range\n    let upperBoundOfXRange = x + range\n\n    let lowerBoundOfYRange = y - range\n    let upperBoundOfYRange = y + range\n\n    for xCoordinate in lowerBoundOfXRange...upperBoundOfXRange {\n      for yCoordinate in lowerBoundOfYRange...upperBoundOfYRange {\n        let coordinatePoint = PointTwo(x: xCoordinate, y: yCoordinate)\n        results.append(coordinatePoint)\n      }\n    }\n\n    return results\n  }\n}\n\nlet p2 = PointTwo(x: 1, y: 0)\np2.x\np2.y\n\nlet rangeReturn = p2.points(inRange: 3)\nrangeReturn[0].x\nrangeReturn[3].y\n\nstruct Person {\n    let firstName: String\n    let lastName: String\n\n    func fullName() -> String {\n      return firstName + " " + lastName\n    }\n}\n\nlet aPerson = Person(firstName: "Billy", lastName: "Bob")\nlet myFullName = aPerson.fullName()\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"initialisers-and-self"},"Initialisers and Self"),Object(r.b)("p",null,"Self is generally only used in Swift in the init method or when differentiating"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),'struct Point {\n  let x: Int\n  let y: Int\n\n  init(x: Int, y: Int) {\n    self.x = x;\n    self.y = x;\n  }\n}\n\nstruct RGBColor {\n  let red: Double\n  let green: Double\n  let blue: Double\n  let alpha: Double\n\n  let description: String\n\n  // Add your code below\n  init(red: Double, green: Double, blue: Double, alpha: Double) {\n    self.red = red\n    self.green = green\n    self.blue = blue\n    self.alpha = alpha\n\n    self.description = "red: \\(self.red), green: \\(self.green), blue: \\(self.blue), alpha: \\(self.alpha)"\n  }\n}\n\nlet test = RGBColor(red: 16.0, green: 5.0, blue: 4.3, alpha: 3.0)\ntest.description\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"class"},"Class"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-swift"}),'class Enemy {\n  var life: Int = 2\n  let position: Point\n\n  init(x: Int, y: Int) {\n    self.position = Point(x: x, y: y)\n  }\n\n  func decreaseLife(by factor: Int) {\n    life -= factor\n  }\n\n}\n\nstruct Location {\n  let latitude: Double\n  let longitude: Double\n}\n\nclass Business {\n  var name: String\n  var location: Location\n\n  init(name: String, location: Location) {\n    self.name = name\n    self.location = location\n  }\n}\n\nlet someBusiness = Business(name: "Quiry", location: Location(latitude: 341, longitude: 82))\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"inheritance"},"Inheritance"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"class SuperEnemy: Enemy {\n  let isSuper: Bool = true\n\n  override init(x: Int, y: Int) {\n    super.init(x: x, y: y)\n    self.life = 50\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"class Vehicle {\n  var numberOfDoors: Int\n  var numberOfWheels: Int\n\n  init(withDoors doors: Int, andWheels wheels: Int) {\n      self.numberOfDoors = doors\n      self.numberOfWheels = wheels\n  }\n}\n\nclass Car: Vehicle {\n  var numberOfSeats: Int = 4\n\n  override init(withDoors doors: Int, andWheels wheels: Int) {\n    super.init(withDoors: doors, andWheels: wheels)\n  }\n\n}\n\nlet someCar = Car(withDoors: 4, andWheels: 4)\n")),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),'class Person {\n  let firstName: String\n  let lastName: String\n\n  init(firstName: String, lastName: String) {\n    self.firstName = firstName\n    self.lastName = lastName\n  }\n\n  func fullName() -> String {\n    return "\\(firstName) \\(lastName)"\n  }\n}\n\n// Enter your code below\nclass Doctor: Person {\n\n  override init(firstName: String, lastName: String) {\n    super.init(firstName: firstName, lastName: lastName)\n  }\n\n  override func fullName() -> String {\n    return "Dr. \\(lastName)"\n  }\n}\n\nlet someDoctor = Doctor(firstName: "Sam", lastName: "Smith")\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"structs-vs-classes"},"Structs vs Classes"),Object(r.b)("p",null,"Distinct line in the sand."),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-swift"}),'import UIKit\n\nvar str = "Hello, playground"\n\n\nstruct User {\n  var fullName: String\n  var email: String\n  var age: Int\n}\n\nvar someUser = User(fullName: "Denis O\'Keeffe", email: "test@test", age: 24)\nvar anotherUser = someUser\n\nsomeUser.email = "newemail@email"\n\n// remains as test@test\nanotherUser.email\n\nclass Person {\n  var fullName: String\n  var email: String\n  var age: Int\n\n  init(name: String, email: String, age: Int) {\n    self.fullName = name\n    self.email = email\n    self.age = age\n  }\n}\n\nvar somePerson = Person(name: "Tim Cook", email: "tc@apple.com", age: 54)\n\nvar anotherPerson = somePerson\n\nsomePerson.email = "newemail@email"\n\n// newemail@email -> points to the same reference\nanotherPerson.email\n')),Object(r.b)("h2",{id:"value-type-vs-reference-type"},"Value type vs Reference type"),Object(r.b)("p",null,"Values are copied across, references are not. All ",Object(r.b)("inlineCode",{parentName:"p"},"structs")," are value types."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Swift/Swift-3-OOP.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-swift-swift-3-oop-md-6a4f078d140b24d7807e.js.map