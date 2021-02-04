(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{xaB6:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Docker/MySQL-Development.md"}});var l={_frontmatter:i},c=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mysql-development-using-docker"},"MySQL Development using Docker"),Object(r.b)("p",null,"Firstly, pull ",Object(r.b)("inlineCode",{parentName:"p"},"docker pull mysql/mysql-server"),"."),Object(r.b)("p",null,"Then ",Object(r.b)("inlineCode",{parentName:"p"},"docker run --name sql-test -e MYSQL_ROOT_PASSWORD=password -p 6000:3306 -d mysql/mysql-server:latest"),". If there a replacement or commited image, run that instead."),Object(r.b)("p",null,"If you are running it on a network, first create the network ",Object(r.b)("inlineCode",{parentName:"p"},"docker network create dev-env"),", then run with the ",Object(r.b)("inlineCode",{parentName:"p"},"--net")," flag to hook it up."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"docker run --name sql-test -e MYSQL_ROOT_PASSWORD=password -p 6000:3306 --net dev-env -d mysql/mysql-server:latest"),"."),Object(r.b)("p",null,"Linking ",Object(r.b)("inlineCode",{parentName:"p"},"docker run -d -name app-container-name --link mysql-container-name app-image-name"),"."),Object(r.b)("h2",{id:"updating-the-local-docker-mysql-instance"},"Updating the local Docker MySQL instance"),Object(r.b)("p",null,"Log into the container ",Object(r.b)("inlineCode",{parentName:"p"},"docker exec -it CONTAINER_ID /bin/bash")," and first log into ",Object(r.b)("inlineCode",{parentName:"p"},"mysql")," using ",Object(r.b)("inlineCode",{parentName:"p"},"mysql -u root -p"),". This will prompt you for that password we created, so now type that in and enter the command line terminal. First, run ",Object(r.b)("inlineCode",{parentName:"p"},"CREATE USER 'admin'@'%' IDENTIFIED BY 'password';")," Run ",Object(r.b)("inlineCode",{parentName:"p"},"GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;"),". Finally, run ",Object(r.b)("inlineCode",{parentName:"p"},"FLUSH PRIVILEGES;"),"."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Docker/MySQL-Development.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-docker-my-sql-development-md-64adf420120810cf872a.js.map