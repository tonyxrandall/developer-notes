(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{oDNs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/JS-Unit-Testing-TH.md"}});var o={_frontmatter:c},l=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,b({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"JS UNIT TESTING"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 1: JS Unit Testing"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Intro to Mocha"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"Test suite\n1. In Mocha, relates to a group of related tests!\n2. Test suite def is context specific."),Object(r.b)("p",null,"// in the console"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"mocha <test_name.js>")),Object(r.b)("p",null,"For debugging... creating a test folder. For the example used:"),Object(r.b)("p",null,"test > utilities_spec.js \t\t\t// this relates to the utilities.js file"),Object(r.b)("p",null,"Mocha makes:\n1. Testing output easy to read\n2. Helps return the results in an informative way\n3. Test files are separated from the real code\n4. Guarantees code works as expected\n5. Instantly see if anything has broken when making changes"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Different Types of\nTesting")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"Unit Tests:\nWriting tests that confirm an individual function or piece of code as working how we want it to.\nUnit tests are like drills."),Object(r.b)("p",null,"Integration Testing:\nUsed to test new code added to pre-existing code and that they run correctly together without breaking."),Object(r.b)("p",null,"End-To-End Testing:\nRunning the application from start to finish to test everything that we can.\nMaybe only a few times run in a product cycle."),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Behaviour Driven Dev")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"BDD is an approach to building software."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"like creating a plan before writing a program"),Object(r.b)("li",{parentName:"ul"},"write tests first, then code after")),Object(r.b)("p",null,"Refactoring:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ticking off tests first"),Object(r.b)("li",{parentName:"ul"},"refactoring to run faster later")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write the tests, ever though they'll fail"),Object(r.b)("li",{parentName:"ol"},"Write the easiest code to pass"),Object(r.b)("li",{parentName:"ol"},"Go back and improve the code")),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Red, Green, Refactor")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"Testing for title case"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Chai (expectation library)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"throws error is expectation is not met")),Object(r.b)("p",null,"npm install chai --save-dev\ntouch textUtilites.js"),Object(r.b)("p",null,"// in textUtitlies.js"),Object(r.b)("p",null,"var expect = require('chai').expect;"),Object(r.b)("p",null,"expect(true).to.be.true;"),Object(r.b)("p",null,"function titleCase(title) {\nreturn title;\n}"),Object(r.b)("p",null,"expect(titleCase('the great mouse detective')).to.be.a('string');"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Greater Expectations")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"// in textUtitlies.js"),Object(r.b)("p",null,"var expect = require('chai').expect;"),Object(r.b)("p",null,"expect(true).to.be.true;"),Object(r.b)("p",null,"function titleCase(title) {\nvar words = title.split(' ');\nvar titleCasedWords = words.map(function(word) {\nreturn word","[0]",".toUpperCase() + title.substring(1);\n});"),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"return titleCasedWords.join(' ');\n")),Object(r.b)("p",null,"}"),Object(r.b)("p",null,"expect(titleCase('the great mouse detective')).to.be.a('string');\nexpect(titleCase('a')).to.equal('A');\nexpect(titleCase('vertigo')).to.equal('Vertigo');\nexpect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 2: Getting started with Chai and Mocha"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Writing Test Suites")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"using battleship as an example"),Object(r.b)("li",{parentName:"ul"},"refer to the code to have a look at how the test and actual implementation look")),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"PART 4: Going further"),Object(r.b)("p",null,"mocha --reporter min\nmocha --reporter markdown\t\t// for git"),Object(r.b)("p",null,"Check the websites."),Object(r.b)("p",null,"Feel free to add it to your package.json file."),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Outlining Your Test\nSuite")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"Communicating test ideas before writing it."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pending test spec")),Object(r.b)("p",null,"// gametest.js"),Object(r.b)("p",null,"var expect = require('chai').expect;"),Object(r.b)("p",null,"describe('GAME INSTANCE FUNCTIONS', function(){\ndescribe('checkGameStatus', function() {\nit('should tell me when the game is over');\t// no expectations yet. It is pending!\n});\n});"),Object(r.b)("p",null,"Could also add an x... (in this eg, two pending)"),Object(r.b)("p",null,"xdescribe('GAME INSTANCE FUNCTIONS', function(){\ndescribe('checkGameStatus', function() {\nit('should tell me when the game is over');\t// no expectations yet. It is pending!\n});\n});"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")))),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Watching Test Files")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"How to run auto run tests:"),Object(r.b)("p",null,"mocha --watch ./test/game_test.js ./game_logic/game_instance.js"),Object(r.b)("p",null,"// in package.json > scripts"),Object(r.b)("p",null,'"test:watch": "mocha --watch ./test ./"'),Object(r.b)("p",null,"npm run test:watch"),Object(r.b)("p",null,"You can even add other test:watch:name scripts to watch specific things at specific times!"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",b({parentName:"li"},{start:9}),Object(r.b)("li",{parentName:"ol"},"Mocks and Stubs"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",b({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"Advanced Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"what happens if you have many dependencies?"),Object(r.b)("li",{parentName:"ul"},"testing ones other than your test spec")),Object(r.b)("p",null,"Writing your own functions in the beforeEach() spec."),Object(r.b)("p",null,"sinon.js is also a great framework for stubbing data."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/JS-Unit-Testing-TH.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-js-unit-testing-th-md-b0fa14823028160291bc.js.map