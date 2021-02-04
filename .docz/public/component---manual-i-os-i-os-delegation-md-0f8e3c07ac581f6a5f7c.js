(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{ljip:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/iOS/iOS-Delegation.md"}});var i={_frontmatter:l},s=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"delegation-in-ios"},"Delegation in iOS"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#delegation-in-ios"}),"Delegation in iOS"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#iosd-1-intro-to-design-patterns"}),"IOSD-1: Intro to Design Patterns")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#iosd-2-learning-by-example---racing-horses"}),"IOSD-2: Learning by example - Racing Horses")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#iosd-3-acting-as-a-delegate"}),"IOSD-3: Acting as a Delegate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#iosd-4-examples---cllocation-manager"}),"IOSD-4: Examples - CLLocation Manager")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#iosd-5-examples---uitextfielddelegate"}),"IOSD-5: Examples - UITextFieldDelegate"))))),Object(n.b)("h2",{id:"iosd-1-intro-to-design-patterns"},"IOSD-1: Intro to Design Patterns"),Object(n.b)("p",null,"Three common issues developers have come across:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Avoiding inflexible objects"),Object(n.b)("li",{parentName:"ol"},"Maintaining loose relationships"),Object(n.b)("li",{parentName:"ol"},"Avoid tight coupling")),Object(n.b)("p",null,"We use Design Pattern as a general, reusable solution to a commonly occurring problem within a given context, regardless of the particular domain."),Object(n.b)("p",null,"An example - ",Object(n.b)("inlineCode",{parentName:"p"},"The Delegate Pattern")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The Delegate Pattern")),Object(n.b)("p",null,"The delegate pattern is an alteration on the decorator pattern, a structural pattern that is focused on how we can compose objects to form larger objects."),Object(n.b)("p",null,"It is concerned with adding responsibilities to objects dynamically."),Object(n.b)("h2",{id:"iosd-2-learning-by-example---racing-horses"},"IOSD-2: Learning by example - Racing Horses"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The Horse Class and Race Class")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),'import Foundation\nimport PlaygroundSupport\n\nPlaygroundPage.current.needsIndefiniteExecution = true\n\nclass Horse {\n    let name: String\n    let maxSpeed: Double\n    var distanceTraveled = 0.0\n    var currentLap = 1\n\n    init(name: String, maxSpeed: Double) {\n        self.maxSpeed = maxSpeed\n        self.name = name\n    }\n\n    var currentSpeed: Double {\n        let random = Double(arc4random())\n        return random.truncatingRemainder(dividingBy: maxSpeed - 13) + 13\n    }\n}\n\nclass Race {\n    let laps: Int\n    let lapLength: Double = 300\n    let participants: [Horse]\n\n    weak var delegate: HorseRaceDelegate?\n\n    // since we want to use a delegate, we do not create instances\n    // let tracker = Tracker()\n    // let broadcaster = RaceBroadcaster()\n\n    lazy var timer: Timer = Timer(timeInterval: 1, repeats: true) { timer in\n        self.updateProgress()\n    }\n\n    init(laps: Int, participants: [Horse]) {\n        self.laps = laps\n        self.participants = participants\n    }\n\n    func start() {\n        RunLoop.main.add(timer, forMode: .defaultRunLoopMode)\n        // tracker.updateRaceStart(with: Date())\n        delegate?.race(self, didStartAt: Date())\n        print("Race in progress...")\n    }\n\n    func updateProgress() {\n        print("....")\n        for horse in participants {\n            horse.distanceTraveled += horse.currentSpeed\n\n            if horse.distanceTraveled >= lapLength {\n                horse.distanceTraveled = 0\n\n                delegate?.addLapLeader(horse, forLap: horse.currentLap, atTime: Date())\n\n                // let lapKey = "\\(Tracker.Keys.lapLeader) \\(horse.currentLap)"\n                // if !tracker.stats.keys.contains(lapKey) {\n                //     tracker.updateLapLeaderWith(lapNumber: horse.currentLap, horse: horse, time: Date())\n                // }\n\n                horse.currentLap += 1\n\n                if horse.currentLap >= laps + 1 {\n                    // tracker.updateRaceEndWith(winner: horse, time: Date())\n                    delegate?.raceDidEndAt(self, didEndAt: Date(), withWinner: horse)\n                    stop()\n                    break\n                }\n            }\n        }\n    }\n\n    func stop() {\n        print("Race complete!")\n        // timer.invalidate()\n        // tracker.printRaceSummary()\n    }\n}\n\nlet jubilee = Horse(name: "Jubilee", maxSpeed: 16)\nlet sonora = Horse(name: "Sonora", maxSpeed: 17)\nlet jasper = Horse(name: "Jasper", maxSpeed: 17)\n\nlet participants = [jubilee, sonora, jasper]\n\nlet race = Race(laps: 1, participants: participants)\nrace.start()\n')),Object(n.b)("hr",null),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The Tracker Class")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),'class Tracker: HorseRaceDelegate {\n\n    struct Keys {\n        static let raceStartTime = "raceStartTime"\n        static let lapLeader = "leaderForLap"\n        static let raceEndTime = "raceEndTime"\n        static let winner = "winner"\n    }\n\n    var stats = [String: Any]()\n\n    // func updateRaceStart(with time: Date) {\n    //     stats.updateValue(time, forKey: Keys.raceStartTime)\n    // }\n\n    func race(_ race: Race, didStartAt time: Date) {\n        stats.updateValue(time, forKey: Keys.raceStartTime)\n    }\n\n    func addLapLeader(_ horse: Horse, forLap lap: Int, atTime time: Date) {\n        let lapLead = "Horse: \\(horse.name), time: \\(time)"\n        let lapLeadKey = "\\(Keys.lapLeader) \\(number)"\n\n        stats.updateValue(lapLead, forKey: lapLeadKey)\n    }\n\n    func race(_ race: Race, didEndAt time: Date, withWinner winner: Horse) {\n        stats.updateValue(winner.name, forKey: Keys.winner)\n        stats.updateValue(time, forKey: Keys.raceEndTime)\n    }\n\n    // get rid of the below method\n    func updateLapLeaderWith(lapNumber number: Int, horse: Horse, time: Date) {\n        let lapLead = "Horse: \\(horse.name), time: \\(time)"\n        let lapLeadKey = "\\(Keys.lapLeader) \\(number)"\n\n        stats.updateValue(lapLead, forKey: lapLeadKey)\n    }\n\n    // get rid of the below method\n    func updateRaceEndWith(winner: Horse, time: Date) {\n        stats.updateValue(winner.name, forKey: Keys.winner)\n        stats.updateValue(time, forKey: Keys.raceEndTime)\n    }\n\n    func printRaceSummary() {\n        print("***********")\n\n        let raceStartTime = stats[Keys.raceStartTime]!\n        print("Race start time: \\(raceStartTime)")\n\n        for (key, value) in stats where key.contains(Keys.lapLeader) {\n            print("\\(key): \\(value)")\n        }\n\n        let raceEndTime = stats[Keys.raceEndTime]!\n        print("Race end time: \\(raceEndTime)")\n\n        let winner = stats[Keys.winner]!\n        print("Winner: \\(winner)")\n\n        print("***********")\n    }\n}\n')),Object(n.b)("p",null,"In this example, we use the Tracker methods and Keys to help monitor the results of the race."),Object(n.b)("p",null,"Now so far so good, but what if we want a live broadcast?"),Object(n.b)("p",null,"However, trackers should do more than one job."),Object(n.b)("p",null,'This new class will care about the same info as Tracker, but Tracker objects are tied to a particular race. This becomes a problem since the Race also "knows" about the Tracker and Broadcast class. This coupling is too tight.'),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"class RaceBroadcaster {\n    // methods to try to help broadcast information on the Race object\n}\n")),Object(n.b)("p",null,"The Race class shouldn't care about implementing the methods from the Tracker and Broadcast class. Those classes should just listen to the information that Race gives out."),Object(n.b)("p",null,"How do we do this? By implementing a delegate."),Object(n.b)("p",null,'We will make a "contract" that uses a protocol.'),Object(n.b)("p",null,"This will implement the rules that anything that wants to interact with the Race class must adhere to."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"HorseRaceDelegate Protocol")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),"protocol HorseRaceDelegate: class {\n    // this will require any adhering class to use the didStartAt method\n    func race(_ race: Race, didStartAt time: Date)\n    func addLapLeader(_ horse: Horse, forLap lap: Int, atTime time: Date)\n    func race(_ race: Race, didEndAt time: Date, withWinner winner: Horse)\n}\n")),Object(n.b)("p",null,'This protocol will now govern the events that we care about. We can create a delegate instance, but since the race doesn\'t "need" to have to have a tracker, we will make it optional and also give it the "weak" var to prevent a reference cycle.'),Object(n.b)("p",null,"Since only classes can be at the end of a weak relationship, we are violating the rule, so we can make the delegate class bound."),Object(n.b)("p",null,"The delegate will be used by the Race class to delegate tasks out. We don't care which object is acting as the delegate, we just know that someone might be."),Object(n.b)("p",null,"Now in the methods, we can use the delegate. The class won't care about who is listening for the delegate."),Object(n.b)("p",null,"Once we have a class that implements a delegate, how do we then have a another class act as a delegate?"),Object(n.b)("p",null,"That means that for the class (eg Tracker), it needs to conform to the delegate."),Object(n.b)("p",null,"Now that we've conformed to the protocol, we can assign an instance of Tracker to that delegate property to listen in!"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),"let tracker = Tracker();\nrace.delegate = tracker;\n")),Object(n.b)("p",null,"This now works, because within the Race class, we're already tracking the relevant information and passing them along to the delegate."),Object(n.b)("p",null,"Rather than worry about the events itself, the class can delegate can pass out the information to the qualified objects."),Object(n.b)("h2",{id:"iosd-3-acting-as-a-delegate"},"IOSD-3: Acting as a Delegate"),Object(n.b)("p",null,"So why do we need to decouple in the first place?"),Object(n.b)("p",null,"It will become far more manageable once you start creating Objects that focus on just one job."),Object(n.b)("p",null,"Analogy:"),Object(n.b)("p",null,"You are the CEO of an important company and have many tasks to do, but many of them involve other side tasks that are important."),Object(n.b)("p",null,"Instead of doing it all yourself, you delegate it out to an assistant."),Object(n.b)("p",null,"Beforehand, you need to define what they do. Think of the requirements as the protocol."),Object(n.b)("p",null,"If they have all these abilities, they conform to the protocol."),Object(n.b)("p",null,"Now you hire and give the tasks to the employee - they are now your delegate."),Object(n.b)("p",null,"However, if they quit - that's cool. You can look for another delegate that conforms."),Object(n.b)("p",null,"Typically, you need the delegates to be weak. The reason is that it's total valid to have a circular relationship."),Object(n.b)("p",null,"Example, if you have a class ",Object(n.b)("inlineCode",{parentName:"p"},"RaceManager")," that conforms, they can also have race of type Race as a property, we've created a strong relationship by default."),Object(n.b)("p",null,"Since the Manager also conforms to the HorseRaceDelegate, you can have one that references the other. If they had a strong cycle, we couldn't get rid of the objects and it would cause a memory leak."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),"class RaceManager: HorseRaceDelegate {\n\n    let race: Race\n\n    init(race: Race) {\n        self.race = race\n        race.delegate = self\n        race.start()\n    }\n\n    func race(_ race: Race, didStartAt time: Date) {\n        // some implementation\n    }\n\n    func addLapLeader(_ horse: Horse, forLap lap: Int, atTime time: Date) {\n        // some implementation\n    }\n\n    func race(_ race: Race, didEndAt time: Date, withWinner winner: Horse) {\n        // some implementation\n    }\n}\n")),Object(n.b)("h2",{id:"iosd-4-examples---cllocation-manager"},"IOSD-4: Examples - CLLocation Manager"),Object(n.b)("p",null,"Using the CoreLocation Framework, we can create a LocationManager class."),Object(n.b)("p",null,"Once we create the class, we can request for authorization."),Object(n.b)("p",null,"Since we need to wait for a response, we actually use the delegate pattern to help assigned a delegate that will recieve info."),Object(n.b)("p",null,"In this case here, as long as we conform the the correct protocols, the delegate has already been created for us. For this one, we need the CLLocationManagerDelegate."),Object(n.b)("p",null,"To use it, we can conform to the ",Object(n.b)("inlineCode",{parentName:"p"},"NSObject")," class and override the init() method since there already is one for ",Object(n.b)("inlineCode",{parentName:"p"},"NSObject"),". This will allow us to give conformance for the ",Object(n.b)("inlineCode",{parentName:"p"},"CLLocationManagerDelegate"),". Swift does not have the option of optional protocols."),Object(n.b)("p",null,"Then we can set the ",Object(n.b)("inlineCode",{parentName:"p"},"manager.delegate = self")),Object(n.b)("p",null,"This is an example of a circular dependence."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-swift"}),"import Foundation\nimport CoreLocation\n\nclass LocationManager: NSObject, CLLocationManagerDelegate {\n    let manager = CLLocationManager()\n\n    override init() {\n        super.init()\n\n        manager.delegate = self\n        manager.requestWhenInUseAuthorization\n    }\n\n    // this is an example of a protocol method!\n    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {\n        if status == .authorizedWhenInUse {\n            manager.requestLocation()\n        }\n    }\n\n    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {\n        print(Error)\n    }\n\n    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {\n        print(locations.first!)\n    }\n}\n")),Object(n.b)("h2",{id:"iosd-5-examples---uitextfielddelegate"},"IOSD-5: Examples - UITextFieldDelegate"),Object(n.b)("p",null,'In case of the UITextField, we can assign the ViewController that is "listening" as the delegate to recieve the broadcasts.'),Object(n.b)("p",null,"Then we can implement the methods from the protocol to the class to give us the results."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/iOS/iOS-Delegation.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-i-os-i-os-delegation-md-0f8e3c07ac581f6a5f7c.js.map