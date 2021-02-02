(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{Z4W4:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Package-Management.md"}});var l={_frontmatter:r},p=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"package-management-in-python"},"Package Management in Python"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://packaging.python.org/tutorials/managing-dependencies/"}),"Python Packaging User Guide")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://packaging.python.org/guides/tool-recommendations/"}),"Tool Recommendations")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://pypi.org/project/pipenv/"}),"pipenv")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://pipenv.pypa.io/en/latest/#install-pipenv-today"}),"pipenv install")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/pypa/pipenv"}),"pipenv - GitHub")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ipython/ipython"}),"ipython - GitHub")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/psf/requests"}),"requests - GitHub"))),Object(a.b)("h2",{id:"why-pipenv"},"Why Pipenv?"),Object(a.b)("p",null,"The first two lines on the project sum it up perfectly."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. Windows is a first-class citizen, in our world."),Object(a.b)("p",{parentName:"blockquote"},"It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds.")),Object(a.b)("p",null,"Pipenv enables you to keep project dependecies between different setups in sync - hence the ",Object(a.b)("inlineCode",{parentName:"p"},"deterministic")," builds. By managing a ",Object(a.b)("inlineCode",{parentName:"p"},"virtualenv")," for you, it is treating different Pipenv projects you have a separate with separate dependencies - similar to what you would expect for those other package managers for other languages mentioned above (ie Bundler for Ruby, npm/yarn for Nodejs, Composer for PHP, Cargo for Rust)."),Object(a.b)("p",null,"Some of the other problems that it address is also stated on their GitHub. Word-for-word, this is the list:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"You no longer need to use pip and virtualenv separately. They work together."),Object(a.b)("li",{parentName:"ol"},"Managing a requirements.txt file can be problematic, so Pipenv uses the upcoming Pipfile and Pipfile.lock instead, which is superior for basic use cases."),Object(a.b)("li",{parentName:"ol"},"Hashes are used everywhere, always. Security. Automatically expose security vulnerabilities."),Object(a.b)("li",{parentName:"ol"},"Give you insight into your dependency graph (e.g. $ pipenv graph)."),Object(a.b)("li",{parentName:"ol"},"Streamline development workflow by loading ",Object(a.b)("inlineCode",{parentName:"li"},".env")," files.")),Object(a.b)("p",null,"The second-point on the ",Object(a.b)("inlineCode",{parentName:"p"},"requirements.txt")," file may look unfamiliar to new-goers to Python, but that is another way that Python projects have been attempting to streamline the packages used."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"There are a number of ways to install ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"# Brew\nbrew install pipenv\n# Debian Buster +\nsudo apt install pipenv\n# Fedora\nsudo dnf install pipenv\n# FreeBSD\npkg install py36-pipenv\n# When none of the above is available\npip install pipenv\n")),Object(a.b)("p",null,"You can see more details ",Object(a.b)("a",o({parentName:"p"},{href:"https://pipenv.pypa.io/en/latest/#install-pipenv-today"}),"here"),"."),Object(a.b)("h2",{id:"setting-up-two-basic-projects-to-demonstrate"},"Setting up two basic projects to demonstrate"),Object(a.b)("p",null,"Let's create a new folder to host a project that we will manage by Pipenv."),Object(a.b)("p",null,"In each, we will install ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ipython/ipython"}),"iPython")," which an alternative interactive environment to play around with."),Object(a.b)("p",null,"Then we will use the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/psf/requests"}),"requests")," package, which is a simple Python package for making requests. We won't go too deep into the package - it is mainly for demonstrating how the environment installation and setup works."),Object(a.b)("p",null,"Run the following from where you would like to setup the project in your terminal. I recommend open two different tabs."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"# in tab one in the directory where you want to setup the project\nmkdir -p hello-pipenv\ncd hello-pipenv\npipenv --three\npipenv install --dev ipython\n")),Object(a.b)("p",null,"You can initialise a new Python3 virtual environment by running ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv --three"),". For Python2, you can run ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv --two"),"."),Object(a.b)("p",null,"Once setup, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv install <package>")," to install a package that we need. That same call can be run as ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv install --dev <package>")," for packages we only need to install to help with development (indicated by the ",Object(a.b)("inlineCode",{parentName:"p"},"--dev")," flag)."),Object(a.b)("h2",{id:"running-a-simple-get-requests-from-ipython"},"Running a simple GET requests from iPython"),Object(a.b)("p",null,"To open up the iPython interactive environment, we can run ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv run ipython"),"."),Object(a.b)("p",null,"Once it runs, you should get something like the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"Python 3.7.7 (default, Mar 10 2020, 15:43:03)\nType 'copyright', 'credits' or 'license' for more information\nIPython 7.16.1 -- An enhanced Interactive Python. Type '?' for help.\n\nIn [1]:\n")),Object(a.b)("p",null,"Thanks to Pipenv, iPython already knows that we are running ",Object(a.b)("inlineCode",{parentName:"p"},"Python 3.7.7"),"."),Object(a.b)("p",null,"Once in the REPL, let's try following the example from the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/psf/requests"}),"requests Github page")," to import requests:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"In [1]: import requests\n---------------------------------------------------------------------------\nModuleNotFoundError                       Traceback (most recent call last)\n<ipython-input-5-ab36cda7e100> in <module>\n----\x3e 1 import requests\n\nModuleNotFoundError: No module named 'requests'\n")),Object(a.b)("p",null,"Uh-oh! This error shows up because we haven't yet installed ",Object(a.b)("inlineCode",{parentName:"p"},"requests")," for the project!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: If you have ",Object(a.b)("inlineCode",{parentName:"p"},"requests")," installed previously using pip in the wider context, you may find you do not come to an issue importing requests.")),Object(a.b)("p",null,"We can rectify this by running ",Object(a.b)("inlineCode",{parentName:"p"},"exit")," to leave iPython and installing the package by running ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv install requests"),". After the install, boot up iPython again and run the same line."),Object(a.b)("p",null,"There should be no error this time when we run ",Object(a.b)("inlineCode",{parentName:"p"},"import requests"),", so let's move on and run a GET request to Google and assign it to the variable ",Object(a.b)("inlineCode",{parentName:"p"},"r")," by running ",Object(a.b)("inlineCode",{parentName:"p"},"r = requests.get('https://google.com')"),"."),Object(a.b)("p",null,"If we are successful, we can then simply put ",Object(a.b)("inlineCode",{parentName:"p"},"r")," and hit enter and we will see that ",Object(a.b)("inlineCode",{parentName:"p"},"r")," refers to a Response object ",Object(a.b)("inlineCode",{parentName:"p"},"<Response [200]>"),"."),Object(a.b)("p",null,"We can then access properties on it to see things like the status code, text etc."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"In [1]: import requests\n\nIn [2]: r = requests.get('https://google.com')\n\nIn [3]: r\nOut[3]: <Response [200]>\n\nIn [4]: r.status_code\nOut[4]: 200\n\nIn [5]: r.text\nOut [5]: # A lot of HTML text\n")),Object(a.b)("p",null,"Amazing! We have successfully managed to install the package into our project and run it through the Python REPL!"),Object(a.b)("h2",{id:"pipfile"},"Pipfile"),Object(a.b)("p",null,"Once we installed our packages, you would have noticed a ",Object(a.b)("inlineCode",{parentName:"p"},"Pipfile")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Pipfile.lock")," was generated."),Object(a.b)("p",null,"First, looking at the Pipfile, we see:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),'[[source]]\nname = "pypi"\nurl = "https://pypi.org/simple"\nverify_ssl = true\n\n[dev-packages]\nipython = "*"\n\n[packages]\nrequests = "*"\n\n[requires]\npython_version = "3.7"\n')),Object(a.b)("p",null,"This file is what helps others who are running the project keep it running deterministically. Here is where we lock down the Python version we are using, as well as mention the development and production packages required to run this application. With the ",Object(a.b)("inlineCode",{parentName:"p"},'"*"')," beside the packages, we are currently telling Pipenv to install the latest. We can update this to lockdown specific versions that we want."),Object(a.b)("h2",{id:"pipfilelock"},"Pipfile.lock"),Object(a.b)("p",null,"If you run ",Object(a.b)("inlineCode",{parentName:"p"},"cat Pipefile.lock"),", you will see that there is a bunch of JSON with versioning and hash information."),Object(a.b)("p",null,"These lockfiles are used to ensure that the packages installed and their dependencies are all kept in sync."),Object(a.b)("p",null,"It helps to avoid the risk of upgrading packages that depend upon each other and unintentionally breaking your project dependency tree without."),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv lock")," to lock the currently installed packages in the project."),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"This has been a short entry into installing packages using ",Object(a.b)("inlineCode",{parentName:"p"},"pipenv")," and seeing them in action in the interactive environment ",Object(a.b)("inlineCode",{parentName:"p"},"iPython"),"."),Object(a.b)("p",null,"Next time, we will go further in-depth into running some cooler projects."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Package-Management.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-package-management-md-4340a2cecec243efd275.js.map