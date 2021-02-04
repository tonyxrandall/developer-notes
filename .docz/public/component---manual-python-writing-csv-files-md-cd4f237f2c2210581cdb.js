(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{D4Cy:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),i=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Writing-CSV-Files.md"}});var s={_frontmatter:o},l=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(r.b)(l,a({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"writing-csv-files"},"Writing CSV Files"),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-python"}),"\"\"\"\nBasic example to read and write a csv file\n\"\"\"\nimport random\nimport csv\nimport threading\ncsv_writer_lock = threading.Lock()\n\ndef handle_event(event):\n    try:\n    event_id: random.randrange(0,100) # used for example\n    issue_id: random.randrange(0,100)\n        row_dict = {\n            'issue_id': issue_id,\n            'event_id': event_id,\n            'console_output': ''\n        }\n\n    row_dict['console_output'] = crumb\n    with csv_writer_lock:\n      writer.writerow(row_dict)\n\ntry:\n    with open('./fetch_events_by_issue.csv', 'w') as output_file:\n        fieldnames = ['issue_id', 'event_id', 'console_output']\n        writer = csv.DictWriter(output_file, fieldnames=fieldnames)\n\n    # pretending we are reading another file\n        with open('./project_issues.csv', 'r') as file:\n            data = file.read().splitlines()\n            for value in data:\n        handle_event(value)\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Writing-CSV-Files.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-writing-csv-files-md-cd4f237f2c2210581cdb.js.map