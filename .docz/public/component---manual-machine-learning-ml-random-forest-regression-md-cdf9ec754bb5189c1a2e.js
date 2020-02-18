(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{"1Ns6":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Machine-Learning/ML-Random-Forest-Regression.md"}});var s={_frontmatter:i},l=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(l,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"random-forest-regression"},"Random Forest Regression"),Object(o.b)("h2",{id:"intuition"},"Intuition"),Object(o.b)("p",null,"Random forest is a version of ensemble learning."),Object(o.b)("p",null,"It's when you take the same algorithm multiple times and create something more powerful."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Steps")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Pick at random K data points from the Training Set."),Object(o.b)("li",{parentName:"ol"},"Build the Decision Tree associated to these K data points."),Object(o.b)("li",{parentName:"ol"},"Choose the number Ntree of trees you want to build and repeat steps 1 and 2."),Object(o.b)("li",{parentName:"ol"},"For a new data point, make each one of your Ntree trees predict the value of ",Object(o.b)("inlineCode",{parentName:"li"},"Y")," for the data point in question, and assign the new data point the average across all the predicted ",Object(o.b)("inlineCode",{parentName:"li"},"Y")," values.")),Object(o.b)("p",null,"Doing this allows you to improve the accuracy of your prediction."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"How many lollies in a jar? Imagine taking notes of every guess - getting around 1000 and then beginning to average them out or take the median. Statistically speaking, you have a highly likelihood of being closer to the truth."),Object(o.b)("p",null,"Once you hit the middle of the normal distribution, you are more likely to be on the money for the guess."),Object(o.b)("h2",{id:"python"},"PYTHON"),Object(o.b)("p",null,"This is the last regression model. If you understand decision tree regression, you'll understand random forest."),Object(o.b)("p",null,"From decision tree, we know that we will need the visualisation using the non-continuous result."),Object(o.b)("p",null,"For the regressor, we use RandomForestRegressor library."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-python"}),"# Prediciting the Random Forest results\n# Create the Regressor\nfrom sklearn.ensemble import RandomForestRegressor\nregressor = RandomForestRegressor(random_state=0)\nregressor.fit(X, y)\n")),Object(o.b)("p",null,"Simply, with these lines, we can already determine that the graph is no longer continuous."),Object(o.b)("p",null,'By having several decision trees, we end up with a lot more "steps" than we had with just one decision tree.'),Object(o.b)("p",null,"More tree !== more steps. The more trees you have, the more the average will converge towards the same average."),Object(o.b)("p",null,"Generally the steps will become better placed depending on the average."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Machine-Learning/ML-Random-Forest-Regression.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-machine-learning-ml-random-forest-regression-md-cdf9ec754bb5189c1a2e.js.map