(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{EQkN:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return i})),t.d(e,"default",(function(){return o}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function p(){return(p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Python-Intro-To-Data-Science.md"}});var l={_frontmatter:i},s=r.a;function o(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},p=Object.keys(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(s,p({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"python-intro-to-data-science"},"Python Intro to Data Science"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",p({parentName:"li"},{href:"#python-intro-to-data-science"}),"Python Intro to Data Science"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",p({parentName:"li"},{href:"#numpy"}),"Numpy"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",p({parentName:"li"},{href:"#-----2d-numpy-arrays"}),"---- 2D Numpy Arrays")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",p({parentName:"li"},{href:"#basic-statistics"}),"Basic Statistics")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",p({parentName:"li"},{href:"#args-for-the-3-params-goes-dist-mean-dist-sd-number-of-samples"}),"args for the 3 params goes dist mean, dist sd, number of samples"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"numpy"},"Numpy"),Object(a.b)("p",null,"Once we know about lists, how do we analyse data in R?"),Object(a.b)("p",null,"We can instead use a Numpy array - which is both easy and fast!"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),">>> import numpy as np\n>>> height = [181.5,182.4,183,165.4]\n>>> np_height = np.array(height)\n>>> np_height\narray([ 181.5,  182.4,  183. ,  165.4])\n>>> np_height ** 2\narray([ 32942.25,  33269.76,  33489.  ,  27357.16])\n\n>>> np_height > 170\narray([ True,  True,  True, False], dtype=bool)\n\n>>> np_height[np_height < 170]\narray([ 165.4])\n")),Object(a.b)("p",null,"Numpy for lists that have more than one data type however should be noted that it will convert the list to strings."),Object(a.b)("p",null,"Numpy arrays are just another Python type that comes with their own methods."),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# Create list baseball\nbaseball = [180, 215, 210, 210, 188, 176, 209, 200]\n\n# Import the numpy package as np\nimport numpy as np\n\n# Create a Numpy array from baseball: np_baseball\nnp_baseball = np.array(baseball)\n\n# Print out type of np_baseball\nprint(type(np_baseball))\n\n<script.py> output:\n    [180 215 210 210 188 176 209 200]\n\n<script.py> output:\n    <class 'numpy.ndarray'>\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# height is available as a regular list\n\n# Import numpy\nimport numpy as np\n\n# Create a Numpy array from height: np_height\nnp_height = np.array(height)\n\n# Print out np_height\nprint(np_height)\n\n# Convert np_height to m: np_height_m\nnp_height_m = np_height * 0.0254\n\n# Print np_height_m\nprint(np_height_m)\n\n<script.py> output:\n    [74 74 72 ..., 75 75 73]\n    [ 1.8796  1.8796  1.8288 ...,  1.905   1.905   1.8542]\n\n# height and weight are available as a regular lists\n\n# Import numpy\nimport numpy as np\n\n# Create array from height with correct units: np_height_m\nnp_height_m = np.array(height) * 0.0254\n\n# Create array from weight with correct units: np_weight_kg\nnp_weight_kg = np.array(weight) * 0.453592\n\n# Calculate the BMI: bmi\nbmi = np_weight_kg / np_height_m**2\n\n# Print out bmi\nprint(bmi)\n\n<script.py> output:\n    [ 23.11037639  27.60406069  28.48080465 ...,  25.62295933  23.74810865\n      25.72686361]\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# height and weight are available as a regular lists\n\n# Import numpy\nimport numpy as np\n\n# Calculate the BMI: bmi\nnp_height_m = np.array(height) * 0.0254\nnp_weight_kg = np.array(weight) * 0.453592\nbmi = np_weight_kg / np_height_m ** 2\n\n# Create the light array\nlight = bmi < 21\n\n# Print out light\nprint(light)\n\n# Print out BMIs of all baseball players whose BMI is below 21\nprint(bmi[light])\n\n<script.py> output:\n    [False False False ..., False False False]\n    [ 20.54255679  20.54255679  20.69282047  20.69282047  20.34343189\n      20.34343189  20.69282047  20.15883472  19.4984471   20.69282047\n      20.9205219 ]\n")),Object(a.b)("p",null,"Printing out Array Values"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# height and weight are available as a regular lists\n\n# Import numpy\nimport numpy as np\n\n# Store weight and height lists as numpy arrays\nnp_weight = np.array(weight)\nnp_height = np.array(height)\n\n# Print out the weight at index 50\nprint(weight[50])\n\n# Print out sub-array of np_height: index 100 up to and including index 110\nprint(np_height[100:111])\n\n<script.py> output:\n    200\n    [73 74 72 73 69 72 73 75 75 73 72]\n")),Object(a.b)("h2",{id:"2d-numpy-arrays"},"2D Numpy Arrays"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),">>> array_2d = np.array([[1,2,3,4,5],[6,7,8,9,10]])\n>>> array_2d\narray([[ 1,  2,  3,  4,  5],\n       [ 6,  7,  8,  9, 10]])\n>>> array_2d[1][3]\n9\n>>> array_2d[1][:]\narray([ 6,  7,  8,  9, 10])\n>>> array_2d[1]\narray([ 6,  7,  8,  9, 10])\n>>> array_2d[1:]\narray([[ 6,  7,  8,  9, 10]])\n>>> array_2d[1:2]\narray([[ 6,  7,  8,  9, 10]])\n>>> array_2d[0:1]\narray([[1, 2, 3, 4, 5]])\n>>> array_2d[0:]\narray([[ 1,  2,  3,  4,  5],\n       [ 6,  7,  8,  9, 10]])\n>>> array_2d[0:2]\narray([[ 1,  2,  3,  4,  5],\n       [ 6,  7,  8,  9, 10]])\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# Create baseball, a list of lists\nbaseball = [[180, 78.4],\n            [215, 102.7],\n            [210, 98.5],\n            [188, 75.2]]\n\n# Import numpy\nimport numpy as np\n\n# Create a 2D Numpy array from baseball: np_baseball\nnp_baseball = np.array(baseball)\n\n# Print out the type of np_baseball\nprint(type(np_baseball))\n\n# Print out the shape of np_baseball\nprint(np_baseball.shape)\n\n<script.py> output:\n    <class 'numpy.ndarray'>\n    (4, 2)\n\n# baseball is available as a regular list of lists\n\n# Import numpy package\nimport numpy as np\n\n# Create a 2D Numpy array from baseball: np_baseball\nnp_baseball = np.array(baseball)\n\n# Print out the shape of np_baseball\nprint(np_baseball.shape)\n\n<script.py> output:\n    (1015, 2)\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# Import numpy package\nimport numpy as np\n\n# Create np_baseball (2 cols)\nnp_baseball = np.array(baseball)\n\n# Print out the 50th row of np_baseball\nprint(np_baseball[49,:])\n\n# Select the entire second column of np_baseball: np_weight\nnp_weight = np_baseball[:,1]\n\n# Print out height of 124th player\nprint(np_baseball[123,0])\n\n<script.py> output:\n    [ 70 195]\n    [ 73 194]\n\n<script.py> output:\n    [ 70 195]\n    75\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# baseball is available as a regular list of lists\n# update is available as 2D Numpy array\n\n# Import numpy package\nimport numpy as np\n\n# Create np_baseball (3 cols)\nnp_baseball = np.array(baseball)\n\n# Print out addition of np_baseball and update\nprint(np_baseball + update)\n\n# Create Numpy array: conversion\nconversion = [0.0254, 0.453592, 1]\n\n# Print out product of np_baseball and conversion\nprint(np_baseball*conversion)\n\n<script.py> output:\n    [[  75.2303559   168.83775102   23.99      ]\n     [  75.02614252  231.09732309   35.69      ]\n     [  73.1544228   215.08167641   31.78      ]\n     ...,\n     [  76.09349925  209.23890778   26.19      ]\n     [  75.82285669  172.21799965   32.01      ]\n     [  73.99484223  203.14402711   28.92      ]]\n    [[  1.8796   81.64656  22.99   ]\n     [  1.8796   97.52228  34.69   ]\n     [  1.8288   95.25432  30.78   ]\n     ...,\n     [  1.905    92.98636  25.19   ]\n     [  1.905    86.18248  31.01   ]\n     [  1.8542   88.45044  27.92   ]]\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"basic-statistics"},"Basic Statistics"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Generating Data for stubbing")),Object(a.b)("h1",{id:"args-for-the-3-params-goes-dist-mean-dist-sd-number-of-samples"},"args for the 3 params goes dist mean, dist sd, number of samples"),Object(a.b)("p",null,"height = np.round(np.random.normal(1.75, 0.20, 5000), 2)\nweight = np.round(np.random.normal(60.32, 15, 5000), 2)\nnp_city = np.column_stack((height, weight))"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# np_baseball is available\n\n# Import numpy\nimport numpy as np\n\n# Create np_height from np_baseball\nnp_height = np_baseball[:,0]\n\n# Print out the mean of np_height\nprint(np.mean(np_height))\n\n# Print out the median of np_height\nprint(np.median(np_height))\n\n<script.py> output:\n    1586.46108374\n    74.0\n")),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),'# Import numpy\nimport numpy as np\n\n# Print mean height (first column)\navg = np.mean(np_baseball[:,0])\nprint("Average: " + str(avg))\n\n# Print median height. Replace \'None\'\nmed = np.median(np_baseball[:,0])\nprint("Median: " + str(med))\n\n# Print out the standard deviation on height. Replace \'None\'\nstddev = np.std(np_baseball[:,0])\nprint("Standard Deviation: " + str(stddev))\n\n# Print out correlation between first and second column. Replace \'None\'\ncorr = np.corrcoef(np_baseball[:,0], np_baseball[:,1])\nprint("Correlation: " + str(corr))\n\n<script.py> output:\n    Average: 73.6896551724\n    Median: 74.0\n    Standard Deviation: 2.31279188105\n    Correlation: [[ 1.          0.53153932]\n     [ 0.53153932  1.        ]]\n')),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"# Import numpy\nimport numpy as np\n\n# Convert positions and heights to numpy arrays: np_positions, np_heights\n\nnp_heights = np.array(heights)\nnp_positions = np.array(positions)\n\n# Heights of the goalkeepers: gk_heights\ngk_heights = np_heights[np_positions == 'GK']\n\n# Heights of the other players: other_heights\nother_heights = np_heights[np_positions != 'GK']\n\n# Print out the median height of goalkeepers. Replace 'None'\nprint(\"Median height of goalkeepers: \" + str(np.median(gk_heights)))\n\n# Print out the median height of other players. Replace 'None'\nprint(\"Median height of other players: \" + str(np.median(other_heights)))\n\n<script.py> output:\n    Median height of goalkeepers: 188.0\n    Median height of other players: 181.0\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Python-Intro-To-Data-Science.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-python-intro-to-data-science-md-9835a341ef0b37086a74.js.map