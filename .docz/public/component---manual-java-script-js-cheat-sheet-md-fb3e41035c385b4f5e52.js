(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{"+gMe":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/js-cheat-sheet.md"}});var s={_frontmatter:i},l=r.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"javascript-cheat-sheet"},"JavaScript Cheat Sheet"),Object(a.b)("h2",{id:"javascript-doc-ready"},"JAVASCRIPT DOC READY"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"$(document).ready(function () {\n  futureRoaming.init();\n});\n")),Object(a.b)("h2",{id:"grid-alignment"},"GRID ALIGNMENT"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var grid = {\n\n    row: [],\n    perRow: 0,\n    height: 0,\n    small: 668,\n    medium: 1025,\n    buffer: 14,\n\n    $grid: $('.grid'),\n    $tile: $('.grid .tile'),\n\n    init: function () {\n        grid.resize();\n\n        var id;\n\n        $(window).resize(function () {\n            window.clearTimeout(id);\n            id = window.setTimeout(grid.doneResizing, 5);\n        });\n    },\n\n    doneResizing: function () {\n        grid.$tile.find('.title-tagline').height('auto');\n        grid.height = 0;\n        grid.row = [];\n        grid.resize();\n    },\n\n    resize: function () {\n        if ($(window).outerWidth() < grid.small) {\n            grid.$tile.find('.title-tagline').height('auto');\n        } else {\n            grid.$tile.each(function () {\n\n                grid.row.push(this);\n\n                var siblingCount = $(grid.row[grid.row.length - 1]).siblings().size();\n\n                if (siblingCount === 0 || siblingCount < grid.row.length) {\n                    grid.setHeight();\n                    grid.height = 0;\n                    grid.row = [];\n                } else {\n                    if ($(this).find('.title-tagline').height() > grid.height) {\n                        grid.height = $(this).find('.title-tagline').height();\n                    }\n                }\n            });\n\n            if (grid.row.length) {\n                grid.setHeight();\n            }\n        }\n    },\n\n    setHeight: function () {\n        for (var i in grid.row) {\n            if ($(grid.row[i]).siblings().size() > 0) {\n                if ($(window).outerWidth() < grid.small) {\n                    $(grid.row[i]).find('.title-tagline').height('inherit');\n                } else if (($(window).outerWidth() < grid.medium) && (parseInt(i) === $(grid.row[i]).siblings().size()) && (($(grid.row[i]).siblings().size() - 1) % 2 !== 0)) {\n                    $(grid.row[i]).find('.title-tagline').height('auto');\n                } else {\n                    $(grid.row[i]).find('.title-tagline').height(grid.height + grid.buffer);\n                }\n            } else {\n                $(grid.row[i]).find('.title-tagline').height('auto');\n            }\n        }\n    },\n};\n\nmodule.exports = {\n    init: grid.init,\n};\n")),Object(a.b)("h2",{id:"check-if-local-storage-is-in-private-browsing-mode"},"CHECK IF LOCAL STORAGE IS IN PRIVATE BROWSING MODE"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"checkStorageSupport: function () {\n    var testKey = 'test';\n    var storage = window.sessionStorage;\n\n    try {\n        storage.setItem(testKey, '1');\n        storage.removeItem(testKey);\n        return true;\n    }\n\n    catch (error) {\n        return false;\n    }\n}\n")),Object(a.b)("h3",{id:"js-find-active-element"},"JS Find Active Element"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"document.activeElement\n")),Object(a.b)("h2",{id:"javscript-basic-object"},"JAVSCRIPT BASIC OBJECT"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'var person = {\n    firstName:"John",\n    lastName:"Doe",\n    age:50,\n    eyeColor:"blue"\n};\n')),Object(a.b)("h2",{id:"ajax"},"AJAX"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-html"}),'// example one\n\n<!DOCTYPE html>\n<html>\n<body>\n\n<div id="demo"><h2>Let AJAX change this text</h2></div>\n\n<button type="button" onclick="loadDoc()">Change Content</button>\n\n<script>\nfunction loadDoc() {\n  var xhttp = new XMLHttpRequest();\n  xhttp.onreadystatechange = function() {\n    if (xhttp.readyState == 4 && xhttp.status == 200) {\n      document.getElementById("demo").innerHTML = xhttp.responseText;\n    }\n  };\n  xhttp.open("GET", "ajax_info.txt", true);\n  xhttp.send();\n}\n<\/script>\n\n</body>\n</html>\n\n// example database\n\n<!DOCTYPE html>\n<html>\n<style>\ntable,th,td {\n  border : 1px solid black;\n  border-collapse: collapse;\n}\nth,td {\n  padding: 5px;\n}\n</style>\n<body>\n\n<form action="">\n<select name="customers" onchange="showCustomer(this.value)">\n<option value="">Select a customer:</option>\n<option value="ALFKI">Alfreds Futterkiste</option>\n<option value="NORTS ">North/South</option>\n<option value="WOLZA">Wolski Zajazd</option>\n</select>\n</form>\n<br>\n<div id="txtHint">Customer info will be listed here...</div>\n\n<script>\nfunction showCustomer(str) {\n  var xhttp;\n  if (str == "") {\n    document.getElementById("txtHint").innerHTML = "";\n    return;\n  }\n  xhttp = new XMLHttpRequest();\n  xhttp.onreadystatechange = function() {\n    if (xhttp.readyState == 4 && xhttp.status == 200) {\n      document.getElementById("txtHint").innerHTML = xhttp.responseText;\n    }\n  };\n  xhttp.open("GET", "getcustomer.asp?q="+str, true);\n  xhttp.send();\n}\n<\/script>\n\n</body>\n</html>\n')),Object(a.b)("h2",{id:"local-storage"},"LOCAL STORAGE"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"localStorage.getItem();\nlocalStorage.setItem();\nlocalStorage.removeItem();\n")),Object(a.b)("h2",{id:"javascript-promises"},"JAVASCRIPT PROMISES"),Object(a.b)("p",null,"Updating an AJAX call to use promises"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// BEFORE ADDING THE PROMISE\n\nvar xhr = new XMLHttpRequest();\nxhr.open('GET', '../data/employees.json');\nxhr.onreadystatechange = handleResponse;\nxhr.send();\n\nfunction handleResponse() {\n  if(xhr.readyState === 4 && xhr.status === 200) {\n    var employees = JSON.parse(xhr.responseText);\n    addEmployeesToPage(employees)\n  }\n};\n\nfunction generatListItems(employees)  {\n    var statusHTML = '';\n    for (var i=0; i<employees.length; i += 1) {\n        if (employees[i].inoffice === true) {\n            statusHTML += '<li class=\"in\">';\n        } else {\n            statusHTML += '<li class=\"out\">';\n        }\n        statusHTML += employees[i].name;\n        statusHTML += '</li>';\n    }\n\n    return statusHTML;\n}\n\nfunction generateUnorderedList(listItems) {\n    return '<ul class=\"bulleted\">' + listItems +  '</ul>';\n}\n\nfunction addEmployeesToPage(employees) {\n    document.getElementById('employeeList').innerHTML = generateUnorderedList(generatListItems(employees));\n}\n\n// AFTER ADDING THE PROMISE\n\nfunction generatListItems(employees)  {\n    var statusHTML = '';\n    for (var i=0; i<employees.length; i += 1) {\n        if (employees[i].inoffice === true) {\n            statusHTML += '<li class=\"in\">';\n        } else {\n            statusHTML += '<li class=\"out\">';\n        }\n        statusHTML += employees[i].name;\n        statusHTML += '</li>';\n    }\n\n    return statusHTML;\n}\n\nfunction generateUnorderedList(listItems) {\n    return '<ul class=\"bulleted\">' + listItems +  '</ul>';\n}\n\nfunction addEmployeesToPage(ul) {\n    document.getElementById('employeeList').innerHTML = ul;\n}\n\nfunction getJSON(url) {\n        return new Promise(function(resolve, reject) {\n            var xhr = new XMLHttpRequest();\n            xhr.open('GET', url);\n            xhr.onreadystatechange = handleResponse;\n            xhr.onerror = function(error) { reject(error); };\n            xhr.send();\n\n            function handleResponse() {\n                if(this.readyState === this.DONE)\n                    if(this.status === 200) {\n                        resolve(JSON.parse(this.responseText));\n                    } else {\n                        reject(this.statusText);\n                    }\n            }\n        });\n}\n\n\nvar p = getJSON('../data/employees.json').then(generatListItems)\n                                         .then(generateUnorderedList)\n                                         .then(addEmployeesToPage).catch(function(e){\n                                            console.log(e);\n                                         });\n")),Object(a.b)("h2",{id:"javascript-object-before-es6"},"JAVASCRIPT OBJECT BEFORE ES6"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"var futureRoaming = {\n  themeUrl: $('meta[name=theme_url]').attr('content'),\n\n  init: function () {\n    $.ajax({\n      url: futureRoaming.themeUrl + '/feature-modules/future-roaming-map/data/data.json',\n      type: 'GET',\n      dataType: 'json',\n      success: function(data) {\n        futureRoaming.createDomElement();\n        futureRoaming.data = data;\n        futureRoaming.loadMap();\n        futureRoaming.handleForm();\n        futureRoaming.handleChange();\n      }\n    });\n  },\n\n  setDropdownStyling: function(component, divId) {\n      if (component.localeCompare(\"Select\") != 0) {\n        $(divId).css('opacity', '1');\n        $(divId).css('text-decoration', 'none');\n      } else {\n        console.log(\"Arrived\");\n        $(divId).css('opacity', '0.8');\n        $(divId).css('text-decoration', 'underline');\n      }\n  },\n\n  handleChange: function() {\n    futureRoaming.$form.change(function() {\n      var year = $(this).find('#future-roaming-module-year').val();\n      var age = $(this).find('#future-roaming-module-age').val();\n      var season = $(this).find('#future-roaming-module-season').val();\n      var reason = $(this).find('#future-roaming-module-reason').val();\n\n      futureRoaming.setDropdownStyling(year, \"#future-roaming-module-year\");\n      futureRoaming.setDropdownStyling(age, \"#future-roaming-module-age\");\n      futureRoaming.setDropdownStyling(season, \"#future-roaming-module-season\");\n      futureRoaming.setDropdownStyling(reason, \"#future-roaming-module-reason\");\n\n      if (year.localeCompare(\"Select\") != 0 && age.localeCompare(\"Select\") != 0 && season.localeCompare(\"Select\") != 0 && reason.localeCompare(\"Select\") != 0) {\n        futureRoaming.showResult(year,age,season,reason);\n      } else {\n        console.log(\"Not there\");\n      }\n\n    });\n  },\n\n  handleForm: function () {\n    futureRoaming.$form.submit(function (e) {\n      e.preventDefault();\n      var year = $(this).find('#future-roaming-module-year').val();\n      var age = $(this).find('#future-roaming-module-age').val();\n      var season = $(this).find('#future-roaming-module-season').val();\n      var reason = $(this).find('#future-roaming-module-reason').val();\n\n      futureRoaming.showResult(year,age,season,reason);\n\n      return false;\n    });\n  },\n\n  showResult: function(year,age,season,reason) {\n    var result = futureRoaming.data[year][age][season][reason];\n\n    // Update map\n    if(futureRoaming.$mapCurrent) {\n      futureRoaming.$mapCurrent.attr('class','jvectormap-region jvectormap-element');\n    }\n    if(result.country.code) {\n      futureRoaming.$mapCurrent = futureRoaming.$map.find('path[data-code=\"' + result.country.code + '\"]');\n      futureRoaming.$mapCurrent.attr('class', 'jvectormap-region jvectormap-element active');\n      futureRoaming.vectorMap.setFocus({\n        region: result.country.code,\n        animate: true\n      });\n    }\n\n    // Update copy\n    futureRoaming.$country.text(result.country.name);\n    futureRoaming.$text.text(result.text);\n  },\n\n  loadMap: function () {\n    $(futureRoaming.$map[0]).vectorMap({\n      map: 'world_mill',\n      zoomOnScroll: false\n    });\n    futureRoaming.vectorMap = futureRoaming.$map.vectorMap('get', 'mapObject');\n  },\n\n  createDomElement: function () {\n    futureRoaming.$elem = $('<div/>').addClass('future-roaming-module').attr('id','future-roaming-module');\n\n    futureRoaming.$form = $('<form/>').append(\n      // futureRoaming.$elem = $('<div/>').addClass('future-roaming-module-year-div').attr('id','future-roaming-module-year-div');\n      $('<div/>').addClass('future-roaming-module-year-div').attr('id','future-roaming-module-year-div').append(\n        $('<div/>').addClass('year-div-label').attr('id','year-div-label').append(\n          $('<label/>').attr('for','future-roaming-module-year-label').addClass('future-roaming-module-year-label').text('Year travelling')\n        ),\n        $('<div/>').addClass('year-div-option').attr('id','year-div-option').append(\n          $('<select/>').attr('id','future-roaming-module-year').addClass('future-roaming-module-year').append(\n            $('<option/>').text('Select'),\n            $('<option/>').text('2017'),\n            $('<option/>').text('2018'),\n            $('<option/>').text('2019'),\n            $('<option/>').text('2020')\n          )\n        )\n      ),\n      $('<div/>').addClass('future-roaming-module-age-div').attr('id','future-roaming-module-age-div').append(\n        $('<div/>').addClass('age-div-label').attr('id','age-div-label').append(\n          $('<label/>').attr('for','future-roaming-module-age-label').addClass('future-roaming-module-age-label').text('Age')\n        ),\n        $('<div/>').addClass('age-div-option').attr('id','age-div-option').append(\n          $('<select/>').attr('id','future-roaming-module-age').addClass('future-roaming-module-age').append(\n            $('<option/>').text('Select'),\n            $('<option/>').text('18-29'),\n            $('<option/>').text('30-45'),\n            $('<option/>').text('45-60'),\n            $('<option/>').text('60+')\n          )\n        )\n      ),\n      $('<div/>').addClass('future-roaming-module-season-div').attr('id','future-roaming-module-season-div').append(\n        $('<div/>').addClass('season-div-label').attr('id','season-div-label').append(\n            $('<label/>').attr('for','future-roaming-module-season-label').addClass('future-roaming-module-season-label').text('Season')\n        ),\n        $('<div/>').addClass('season-div-option').attr('id','season-div-option').append(\n          $('<select/>').attr('id','future-roaming-module-season').addClass('future-roaming-module-season').append(\n            $('<option/>').text('Select'),\n            $('<option/>').text('Summer'),\n            $('<option/>').text('Winter')\n          )\n        )\n      ),\n      $('<div/>').addClass('future-roaming-module-reason-div').attr('id','future-roaming-module-reason-div').append(\n        $('<div/>').addClass('reason-div-label').attr('id','reason-div-label').append(\n          $('<label/>').attr('for','future-roaming-module-reason-label').addClass('future-roaming-module-reason-label').text('Reason for travel')\n        ),\n        $('<div/>').addClass('reason-div-option').attr('id','reason-div-option').append(\n          $('<select/>').attr('id','future-roaming-module-reason').addClass('future-roaming-module-reason').append(\n            $('<option/>').text('Select'),\n            $('<option/>').text('Culture Shock'),\n            $('<option/>').text('Relaxation'),\n            $('<option/>').text('Family Time'),\n            $('<option/>').text('Exploration')\n          )\n        )\n      )\n    );\n\n    futureRoaming.$map = $('<div/>').addClass('map');\n\n    futureRoaming.$country = $('<div/>').addClass('country');\n\n    futureRoaming.$text = $('<div/>').addClass('text');\n\n    futureRoaming.$elem.append(futureRoaming.$form,futureRoaming.$map,futureRoaming.$country,futureRoaming.$text);\n    $('.post-content .post-body p').first().after(futureRoaming.$elem);\n  }\n};\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/js-cheat-sheet.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-js-cheat-sheet-md-fb3e41035c385b4f5e52.js.map