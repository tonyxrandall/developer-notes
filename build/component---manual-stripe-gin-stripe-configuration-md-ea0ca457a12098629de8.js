(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{PdcK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Gin-Stripe-Configuration.md"}});var c={_frontmatter:a},l=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(r.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"golang-gin-stripe-configuration"},"Golang Gin Stripe Configuration"),Object(r.b)("p",null,'This is a small "Hello, World!" to show a charge being made for Golang + Gin web server.'),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://godoc.org/github.com/stripe/stripe-go#CardParams"}),"Go Docs Stripe")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://godoc.org/github.com/stripe/stripe-go#CardParams"}),"Stripe API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://stripe.com/docs/testing#cards"}),"Stripe Testing Cards")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/stripe/stripe-go/blob/master/charge/client_test.go"}),"Github Stripe Go Charge Testing")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/gin-gonic/gin"}),"Gin Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/joho/godotenv"}),"Golang Dotenv Github"))),Object(r.b)("h2",{id:"setting-up"},"Setting up"),Object(r.b)("p",null,"We need a few libs to get this all going. Run the following to fetch prerequisite packages:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-shell"}),"# Gin server lib\ngo get -u github.com/gin-gonic/gin\n# Stripe Go API\ngo get github.com/stripe/stripe-go\n# Dotenv package for Golang\ngo get github.com/joho/godotenv\n")),Object(r.b)("h2",{id:"setting-up-maingo"},"Setting up main.go"),Object(r.b)("p",null,"The Golang API (in my opinion) has some more complexity as opposed to others for setting up a basic charge."),Object(r.b)("p",null,"Reading over their tests (like resource ","[4]",") is the perfect way to see how to conform and adhere to the types -- particularly for our basic example."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n        "log"\n        "net/http"\n        "os"\n\n        "github.com/gin-gonic/gin"\n        "github.com/joho/godotenv"\n        "github.com/stripe/stripe-go"\n        "github.com/stripe/stripe-go/charge"\n)\n\n// ChargeJSON incoming data for Stripe API\ntype ChargeJSON struct {\n        Amount       int64  `json:"amount"`\n        ReceiptEmail string `json:"receiptEmail"`\n}\n\nfunc main() {\n  // load .env file\n  err := godotenv.Load()\n  if err != nil {\n    log.Fatal("Error loading .env file")\n  }\n\n  // set up server\n  r := gin.Default()\n\n  // basic hello world GET route\n  r.GET("/", func(c *gin.Context) {\n    c.JSON(200, gin.H{\n            "message": "Hello, World!",\n    })\n  })\n\n  // our basic charge API route\n  r.POST("/api/charge", func(c *gin.Context) {\n    // we will bind our JSON body to the `json` var\n    var json ChargeJSON\n    c.BindJSON(&json)\n\n    // Set Stripe API key\n    apiKey := os.Getenv("SK_TEST_KEY")\n    stripe.Key = apiKey\n\n    // Attempt to make the charge.\n    // We are setting the charge response to _\n    // as we are not using it.\n    _, err := charge.New(&stripe.ChargeParams{\n      Amount:       stripe.Int64(json.Amount),\n      Currency:     stripe.String(string(stripe.CurrencyUSD)),\n      Source:       &stripe.SourceParams{Token: stripe.String("tok_visa")}, // this should come from clientside\n      ReceiptEmail: stripe.String(json.ReceiptEmail)})\n\n    if err != nil {\n      // Handle any errors from attempt to charge\n      c.String(http.StatusBadRequest, "Request failed")\n      return\n    }\n\n    c.String(http.StatusCreated, "Successfully charged")\n  })\n\n  r.Run(":8080")\n}\n')),Object(r.b)("h2",{id:"making-a-test-charge"},"Making A Test Charge"),Object(r.b)("p",null,"We can run our server with the following:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-shell"}),"go run main.go\n")),Object(r.b)("p",null,"In another terminal, run ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:8080/api/charge amount:=500 receiptEmail=hello@example.com")," (using HTTPie) and we will get back ",Object(r.b)("inlineCode",{parentName:"p"},"Successfully charged"),"! Hooray! We made it."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Gin-Stripe-Configuration.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-gin-stripe-configuration-md-ea0ca457a12098629de8.js.map