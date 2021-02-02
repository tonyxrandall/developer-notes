(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"4bdp":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Crontab/Mac-Crontab.md"}});var b={_frontmatter:c},i=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(i,o({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"mac-crontab"},"Mac Crontab"),Object(a.b)("p",null,"Open Vim to add your cronjobs."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"crontab -e\n")),Object(a.b)("p",null,"Setting the format:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-s"}),"* * * * * command\n* - minute (0-59)\n* - hour (0-23)\n* - day of the month (1-31)\n* - month (1-12)\n* - day of the week (0-6, 0 is Sunday)\ncommand - command to execute\n(from left-to-right)\n")),Object(a.b)("p",null,"Then in Vim, you can write an expression like ",Object(a.b)("inlineCode",{parentName:"p"},"0,15,30,45 * * * * cd ~/.scripts && ./work.sh"),"."),Object(a.b)("p",null,"To see active jobs, run ",Object(a.b)("inlineCode",{parentName:"p"},"crontab -l"),"."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Crontab/Mac-Crontab.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-crontab-mac-crontab-md-fdc8652968fbebe60a02.js.map