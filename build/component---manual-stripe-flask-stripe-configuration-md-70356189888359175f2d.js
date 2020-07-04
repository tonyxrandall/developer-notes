(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{bUEw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Flask-Stripe-Configuration.md"}});var l={_frontmatter:i},p=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"python-flask-stripe-configuration"},"Python Flask Stripe Configuration"),Object(a.b)("p",null,"A quick look at setting up the Stripe Python API with a Flask server."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://stripe.com/docs/api?lang=python"}),"Stripe API")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://docs.dennisokeeffe.com/manual-flask-hello-world"}),"Flask Hello World Docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/stripe/stripe-python"}),"Stripe Python Github")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.w3schools.com/python/python_try_except.asp"}),"Python Try/Except")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://stackoverflow.com/questions/45412228/flask-sending-data-and-status-code-through-a-response-object/45412576"}),"Status codes in Flask")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://techtutorialsx.com/2017/01/07/flask-parsing-json-data/"}),"Parsing JSON data w/ Flask")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/theskumar/python-dotenv"}),"Python Dotenv Github"))),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"mkdir python-flask-stripe && cd python-flask-stripe\n# pip or pip3 depending on env\npip3 install Flask\npip3 install stripe\npip3 install -U python-dotenv\ntouch .env server.py\n")),Object(a.b)("h2",{id:"setting-up-env"},"Setting up .env"),Object(a.b)("p",null,"Fetch your keys from Stripe and replace the following in the file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"SK_TEST_KEY=sk... # replace sk...\n")),Object(a.b)("h2",{id:"writing-serverpy"},"Writing server.py"),Object(a.b)("p",null,"Set up the file to look like the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-python"}),'from flask import Flask\nfrom flask import request\nfrom dotenv import load_dotenv\nimport stripe\nimport os\n\n# Load local .env file and assign key\nload_dotenv()\nstripe.api_key = os.environ.get("SK_TEST_KEY")\n\napp = Flask(__name__)\n\n@app.route("/api/charge", methods = [\'POST\'])\ndef charge():\n    try:\n        content = request.get_json()\n        # Print what JSON comes in for the sake of checking\n        print(content)\n\n        resp = stripe.Charge.create(\n            amount=content[\'amount\'],\n            currency="usd",\n            source="tok_visa",\n            receipt_email=content[\'receiptEmail\'],\n        )\n        print("Success: %r" % (resp))\n        return "Successfully charged", 201\n    except Exception as e:\n        print(e)\n        return "Charge failed", 500\n\nif __name__ == "__main__":\n    app.run()\n')),Object(a.b)("p",null,"The above:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Fetches and sets OS env from .env file."),Object(a.b)("li",{parentName:"ol"},"Sets the Stripe API key."),Object(a.b)("li",{parentName:"ol"},"Sets a route ",Object(a.b)("inlineCode",{parentName:"li"},"/api/charge")," that only takes the ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," method and creates a charge based on the amount we pass.")),Object(a.b)("h2",{id:"running-the-server"},"Running the server"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"python3 server.py")," will start the server on port 5000."),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"http POST http://localhost:5000/api/charge amount:=600 receiptEmail=hello_flask@example.com")," (using HTTPie) will come back with success. Check your Stripe dashboard and you will see a charge made for US$6.00! Hooray!"))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Flask-Stripe-Configuration.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-flask-stripe-configuration-md-70356189888359175f2d.js.map