(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{t6Hz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Machine-Learning/ML-Decision-Trees.md"}});var s={_frontmatter:r},l=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(l,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"decision-trees"},"Decision Trees"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#decision-trees"}),"Decision Trees"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#intuition"}),"Intuition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#decision-tree-regression-in-python"}),"Decision Tree Regression in Python"))))),Object(i.b)("h2",{id:"intuition"},"Intuition"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CART: Classification and Regression Trees")),Object(i.b)("p",null,"We speak about both types, but for now - focus on regression trees."),Object(i.b)("p",null,"Regression trees are a bit more complex than classification trees."),Object(i.b)("p",null,"Imagine a scatter plot with two IV and we are predicting an DV y (which you wouldn't be able to see on the chart). Essentially the DV would sit on the z axis."),Object(i.b)("p",null,"Once you run the regression decision tree algorithm, the scatter plot will be split up into segments."),Object(i.b)("p",null,"For example, x1 might be split at 20. Another split may happen for x2 at 170, 200 etc."),Object(i.b)("p",null,"The question, are the splits adding value to way we want to group our points?"),Object(i.b)("p",null,"Each split itself is known as a leaf."),Object(i.b)("p",null,"The algorithm can handle mathematical issues and we can focus on the practical element of the algorithm."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Splitting")),Object(i.b)("p",null,"If we split ",Object(i.b)("inlineCode",{parentName:"p"},"x[1] < 20"),", we have two options (y/N). If we then split ",Object(i.b)("inlineCode",{parentName:"p"},"x[2] < 170"),", we add a child node to ",Object(i.b)("inlineCode",{parentName:"p"},"x[1] < 20")," that checks y/N. If we then set `",Object(i.b)("inlineCode",{parentName:"p"},"x[2] < 200"),"."),Object(i.b)("p",null,"After having a two child tree, if we set ",Object(i.b)("inlineCode",{parentName:"p"},"x[1] < 40")," such that ",Object(i.b)("inlineCode",{parentName:"p"},"x[1] < 20")," is not true and ",Object(i.b)("inlineCode",{parentName:"p"},"x[2] < 170")," is true, we can then set ",Object(i.b)("inlineCode",{parentName:"p"},"x[1] < 40")," as the child to ",Object(i.b)("inlineCode",{parentName:"p"},"x[2] < 170"),"."),Object(i.b)("p",null,"Once we start this tree, what do we populate into those boxes? Well, we decide how we predict ",Object(i.b)("inlineCode",{parentName:"p"},"y")," with a new observation added to the plane x","[1]"," and x","[2]","."),Object(i.b)("p",null,"Key note: ",Object(i.b)("inlineCode",{parentName:"p"},"Adding splits adds information"),"."),Object(i.b)("p",null,"What we do is that for each terminal leaf, we take the average and assign the value that we give to any new element that falls into that leaf."),Object(i.b)("p",null,"Now, if we have a new value, we check the decision tree where it falls and then assign the new element the value of where it falls as a prediction."),Object(i.b)("h2",{id:"decision-tree-regression-in-python"},"Decision Tree Regression in Python"),Object(i.b)("p",null,"Warning for the decision tree, because we need to consider the entropy and split the result into data points. If we stick to one dimension, how do we have a line that is not horizontal? If the splits are made, they should remain a constant."),Object(i.b)("p",null,"Either the intervals are infinite (which they are not), or the model has an issue."),Object(i.b)("p",null,"The reason the issue came up, is because of what we have used to create the plot since this is no longer linear."),Object(i.b)("p",null,"This is now a non-linear, non-continuous regression model."),Object(i.b)("p",null,"What is the best way to view something non-continuous?"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-python"}),"# Visualising the Decision Tree results\nX_grid = np.arange(min(X), max(X), 0.01)\nX_grid = X_grid.reshape(len(X_grid), 1)\nplt.scatter(X, y, color = 'red')\nplt.plot(X_grid, regressor.predict(X_grid), color = 'blue')\nplt.title('Truth or Bluff (Decision Tree Regression)')\nplt.xlabel('Position level')\nplt.ylabel('Salary')\nplt.savefig('decision-tree.png')\nplt.show()\n")),Object(i.b)("p",null,"As for getting the decision tree code to run:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-python"}),"# Prediciting the Decision Tree results\n# Create the Regressor\nfrom sklearn.tree import DecisionTreeRegressor\nregressor = DecisionTreeRegressor(random_state=0)\nregressor.fit(X, y)\n\ny_pred = regressor.predict(6.5)\n")),Object(i.b)("p",null,"Ensure you have a higher resolution in order to visualize the splits. Given that the example in the tutorial has just 1 DV and 1 IV, it will come out like steps as the only splits will occur on the x axis."),Object(i.b)("p",null,"The model itself is not necessarily that interesting in 1D, but over many dimensions it becomes far more interesting."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What happens when you use a random forest?")),Object(i.b)("p",null,"A Random Forest is a team of decision trees. What happens with a team of 10 trees? 50 trees? 500 trees?"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Machine-Learning/ML-Decision-Trees.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-machine-learning-ml-decision-trees-md-5d1e88b2a214abe20b60.js.map