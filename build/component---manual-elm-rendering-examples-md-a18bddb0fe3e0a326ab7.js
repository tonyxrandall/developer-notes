(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{uNuT:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return m}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var i=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elm/Rendering-Examples.md"}});var r={_frontmatter:l},c=a.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(c,o({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"elm-rendering-examples"},"Elm Rendering Examples"),Object(i.b)("h2",{id:"rendering-via-anonymous-function"},"Rendering via anonymous function"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elm"}),'view model =\n    div [ class "content" ]\n        [ h1 [] [ text "Photo Groove" ]\n        , div [ id "thumbnails" ]\n            -- anonymous function mapping photos\n            (List.map (\\photo -> viewThumbnail model.selectedUrl photo)\n                model.photos\n            )\n        , img                 #A\n            [ class "large"   #A\n            , src (urlPrefix ++ "large/" ++ model.selectedUrl)\n            ]\n            []\n        ]\n')),Object(i.b)("h3",{id:"anon-function-with-partial-application"},"Anon function with partial application"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-bash"}),"Before: List.map (\\photo -> viewThumbnail model.selectedUrl photo) model.photos \n# Partial application is known as curried in Elm\nAfter: List.map (viewThumbnail model.selectedUrl) model.photos\n")),Object(i.b)("p",null,"All Elm functions are curried."),Object(i.b)("h2",{id:"update-function"},"Update function"),Object(i.b)("p",null,"To update the model, we need to have the appropriate ",Object(i.b)("inlineCode",{parentName:"p"},"update")," function and expose the correct ",Object(i.b)("inlineCode",{parentName:"p"},"Html.Events"),"."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elm"}),'import Html exposing (..)\nimport Html.Attributes exposing (..)\nimport Html.Events exposing (onClick)\n\nupdate msg model =\n    if msg.description == "ClickedPhoto" then\n        { model | selectedUrl = msg.data }\n    else model\n\nviewThumbnail selectedUrl thumb =\n    img\n        [ src (urlPrefix ++ thumb.url)\n        , classList [ ( "selected", selectedUrl == thumbnail.url ) ]\n        , onClick { description = "ClickedPhoto", data = thumb.url } ]\n        []\n')),Object(i.b)("h2",{id:"implementing-the-model-view-update-loop"},"Implementing the Model-View-Update Loop"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-elm"}),"import Browser\n\nmain =\n    Browser.sandbox\n        { init = initialModel\n        , view = view\n        , update = update\n        }\n")),Object(i.b)("h2",{id:"multi-argument-function-annotations"},"Multi-Argument Function Annotations"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-shell"}),"> String.padLeft\n<function:padLeft> : Int -> Char -> String -> String\n> String.padLeft 9\n<function> : Char -> String -> String\n> String.padLeft 9 '.' <function> : String -> String\n> String.padLeft 9 '.' \"not!\" \".....not!\" : String\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Rendering-Examples.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elm-rendering-examples-md-a18bddb0fe3e0a326ab7.js.map