(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{iJ2j:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Python-Slack-Bot.md"}});var c={_frontmatter:i},b=o.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(b,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"add-a-slack-bot"},"Add a Slack Bot!"),Object(a.b)("p",null,"// this needs to be finished"),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("a",{href:"#section"},"title"),"---- ",Object(a.b)("a",{href:"#subsection"},"title"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"intro"},"Intro"),Object(a.b)("p",null,"First of all, clone the ",Object(a.b)("inlineCode",{parentName:"p"},"python_rtmbot")," git repo."),Object(a.b)("p",null,"Then, head to slack.com for your personal account, click ",Object(a.b)("inlineCode",{parentName:"p"},"build")," from the apps page and add a custom bot."),Object(a.b)("p",null,"Grab the API token and copy it into a ",Object(a.b)("inlineCode",{parentName:"p"},"rtmbot.conf")," file at the root of your directory."),Object(a.b)("h2",{id:"creating-plugins"},"Creating plugins"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," folder, create a folder with the name of the plugin and then within the ",Object(a.b)("inlineCode",{parentName:"p"},"plugin.py")," itself. Inside, you want to ensure you have a ",Object(a.b)("inlineCode",{parentName:"p"},"outputs = []")," and ",Object(a.b)("inlineCode",{parentName:"p"},"crontable = []")," list ready to go."),Object(a.b)("p",null,"From here, you can define processes as so: ",Object(a.b)("inlineCode",{parentName:"p"},"def process_namehere(data):"),"."),Object(a.b)("p",null,"The data argument is the data recieved by the bot."),Object(a.b)("h2",{id:"banana-plugin"},"Banana Plugin"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," directory, create ",Object(a.b)("inlineCode",{parentName:"p"},"banana.py")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),"import random\n\nfrom nltk.tokenize import sent_tokenizem wordpunct_tokenize\nfrom noun_hound import NounHound\n\ncrontable = []\noutputs = []\n\nnh = NounHound()\n\ndef process_message(data):\n        messaage = data['text']\n        sentences = sent_tokenize(message)\n        sentences_num = random.randint(0, len(sentences) - 1)\n        setence = sentences[stence_num]\n        words = wordpunct_tokenize(sentence)\n        nouns = nh.process(sentence)\n        replacement = random.choice(nouns['nouns'])\n        words[words.index(replacement) = 'banana']\n        sentences[sentence_num] = ' '.join(words)\n        outputs.append([data[\"channel\"], ' '.join(sentences)])\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Python-Slack-Bot.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-python-slack-bot-md-638d0a1acd46fcf3128d.js.map