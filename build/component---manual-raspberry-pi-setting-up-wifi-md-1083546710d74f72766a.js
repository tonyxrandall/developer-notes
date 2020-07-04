(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{XjYa:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Raspberry-Pi/Setting-Up-Wifi.md"}});var s={_frontmatter:a},b=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(i.b)(b,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"setting-up-wifi"},"Setting Up Wifi"),Object(i.b)("h2",{id:"command-line"},"Command Line"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-shell"}),"# find the SD card\ndiskutil list\ndiskutil unmountDisk /dev/disk<disk# from diskutil>\nsudo dd bs=1m if=path/to/distro.img of=/dev/rdisk<disk# from diskutil> conv=sync\nsudo diskutil ejectDisk /dev/rdisk<disk# from diskutil>\nls -ls /Volumes/ # check for new boot volume\ntouch /Volumes/boot/ssh\nvi /Volumes/boot/wpa_supplicant.conf\n")),Object(i.b)("p",null,"Insert the following for the ",Object(i.b)("inlineCode",{parentName:"p"},"conf")," file:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),'country=US\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n\nnetwork={\n    ssid="NETWORK-NAME"\n    psk="NETWORK-PASSWORD"\n}\n')),Object(i.b)("p",null,"Then run ",Object(i.b)("inlineCode",{parentName:"p"},"diskutil eject /dev/disk{#}")),Object(i.b)("p",null,"If you get ",Object(i.b)("inlineCode",{parentName:"p"},"dd: invalid number '1m'")," error, change ",Object(i.b)("inlineCode",{parentName:"p"},"bs=1m")," to ",Object(i.b)("inlineCode",{parentName:"p"},"bs=1M"),"."),Object(i.b)("p",null,"If it still fails, swap ",Object(i.b)("inlineCode",{parentName:"p"},"disk")," for ",Object(i.b)("inlineCode",{parentName:"p"},"rdisk"),"."),Object(i.b)("p",null,"Reference: ",Object(i.b)("a",o({parentName:"p"},{href:"https://www.raspberrypi.org/documentation/installation/installing-images/mac.md"}),"https://www.raspberrypi.org/documentation/installation/installing-images/mac.md")),Object(i.b)("p",null,"The better setup reference: ",Object(i.b)("a",o({parentName:"p"},{href:"https://desertbot.io/blog/setup-pi-zero-w-headless-wifi"}),"https://desertbot.io/blog/setup-pi-zero-w-headless-wifi")),Object(i.b)("h2",{id:"login-over-wifi"},"Login Over Wifi"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-shell"}),"ssh-keygen -R raspberrypi.local\nssh pi@raspberrypi.local\n")),Object(i.b)("h2",{id:"debian-distros"},"Debian Distros"),Object(i.b)("p",null,"The Raspbian distros can be downloaded from ",Object(i.b)("a",o({parentName:"p"},{href:"https://www.raspberrypi.org/downloads/raspbian"}),"https://www.raspberrypi.org/downloads/raspbian")),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("p",null,"Check out this post ",Object(i.b)("a",o({parentName:"p"},{href:"https://desertbot.io/blog/ssh-into-pi-zero-over-usb/"}),"https://desertbot.io/blog/ssh-into-pi-zero-over-usb/")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Raspberry-Pi/Setting-Up-Wifi.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-raspberry-pi-setting-up-wifi-md-1083546710d74f72766a.js.map