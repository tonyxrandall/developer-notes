(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{dUXk:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return d}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Helm-Redis.md"}});var l={_frontmatter:i},o=r.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(o,s({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"installing-redis-with-helm"},"Installing Redis with Helm"),Object(a.b)("p",null,"Ensure that you have configured Helm first and applied the appropriate RBAC (see Helm Intro for more)."),Object(a.b)("h2",{id:"installing"},"Installing"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-shell"}),"helm install --name redisha stable/redis-ha\n")),Object(a.b)("p",null,"What you should get back should be similar to the following:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-shell"}),"NAME:   redisha\nLAST DEPLOYED: Thu Jan 24 18:17:31 2019\nNAMESPACE: default\nSTATUS: DEPLOYED\n\nRESOURCES:\n==> v1/Pod(related)\nNAME                       READY  STATUS   RESTARTS  AGE\nredisha-redis-ha-server-0  0/2    Pending  0         0s\n\n==> v1/ConfigMap\nNAME                        DATA  AGE\nredisha-redis-ha-configmap  3     0s\nredisha-redis-ha-probes     2     0s\n\n==> v1/Service\nNAME                         TYPE       CLUSTER-IP      EXTERNAL-IP  PORT(S)             AGE\nredisha-redis-ha-announce-0  ClusterIP  10.100.24.94    <none>       6379/TCP,26379/TCP  0s\nredisha-redis-ha-announce-1  ClusterIP  10.100.142.150  <none>       6379/TCP,26379/TCP  0s\nredisha-redis-ha-announce-2  ClusterIP  10.100.27.202   <none>       6379/TCP,26379/TCP  0s\nredisha-redis-ha             ClusterIP  None            <none>       6379/TCP,26379/TCP  0s\n\n==> v1/StatefulSet\nNAME                     DESIRED  CURRENT  AGE\nredisha-redis-ha-server  3        1        0s\n\n\nNOTES:\nRedis can be accessed via port 6379 and Sentinel can be accessed via port 26379 on the following DNS name from within your cluster:\nredisha-redis-ha.default.svc.cluster.local\n\nTo connect to your Redis server:\n1. Run a Redis pod that you can use as a client:\n\n   kubectl exec -it redisha-redis-ha-server-0 sh -n default\n\n2. Connect using the Redis CLI:\n\n  redis-cli -h redisha-redis-ha.default.svc.cluster.local\n")),Object(a.b)("p",null,"Ensure to delete by using ",Object(a.b)("inlineCode",{parentName:"p"},"helm delete <NAME>"),"."))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Helm-Redis.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-helm-redis-md-39a6aa70e411cf4f0da2.js.map