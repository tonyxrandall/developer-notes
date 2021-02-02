(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{BVqd:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return o})),n.d(e,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/Simplest-React-Setup.md"}});var i={_frontmatter:o},d=r.a;function s(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(d,c({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"simplest-react-setup"},"Simplest React Setup"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",c({parentName:"li"},{href:"https://kentcdodds.com/blog/super-simple-start-to-react"}),"Kent C Dodd's Blog - Super Simple Start to React")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",c({parentName:"li"},{href:"https://docs.dennisokeeffe.com/manual-react-data-vis-for-react-developers"}),"Data Vis for React Devs"))),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),'<html>\n  <body>\n    <div id="root"></div>\n    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"><\/script>\n    <script type="text/babel">\n      ReactDOM.render(<div>Hello World</div>, document.getElementById(\'root\'))\n    <\/script>\n  </body>\n</html>\n')),Object(a.b)("h2",{id:"transforming-to-use-d3"},"Transforming to use D3"),Object(a.b)("p",null,"This is nothing pretty, but there are no errors:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),'<html>\n  <body>\n    <div id="root"></div>\n    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"><\/script>\n     <script src="https://unpkg.com/d3@5.16.0/dist/d3.min.js"><\/script>\n    <script type="text/babel">\n      // helper func\n      const barChartData = (data, width, height) => {\n        const xAxis = d3.axisBottom();\n        const yAxis = d3.axisLeft();\n\n        const extent = d3.extent(data, d => d.date);\n        const xScale = d3\n          .scaleTime()\n          .domain(extent)\n          .range([0, width]);\n\n        const tempMax = d3.max(data, d => d.high);\n        const tempMin = d3.min(data, d => d.low);\n        const yScale = d3\n          .scaleLinear()\n          .domain([tempMin, tempMax])\n          .range([height, 0]);\n\n        // the important part\n        const colorExtent = d3.extent(data, d => d.avg).reverse();\n        // scaleSequential allows you to use an interpolator to map\n        // to the range.\n        const colorScale = d3\n          .scaleSequential()\n          .domain(colorExtent)\n          .interpolator(d3.interpolateRdYlBu);\n\n        return {\n          data: data.map(d => ({\n            x: xScale(d.date),\n            y: yScale(d.high),\n            height: yScale(d.low) - yScale(d.high),\n            fill: colorScale(d.avg),\n          }))\n        };\n      };\n\n      const BarChart = ({ chartData, width, height }) => {\n        const { data,  } = React.useCallback(() => barChartData(chartData, 400, height))();\n        const leftPadding = 2;\n\n        return (\n          <svg width={width} height={height}>\n            {data.map((d, i) => (\n              // she manually put <rect x={d.x} y={d.y} width={2} height={d.height} fill={d.fill}>\n              <rect key={i} x={d.x} y={d.y} width={100} height={d.height} fill={d.fill} />\n            ))}\n          </svg>\n        );\n      };\n\n      const data = [{\n          date: new Date("2017-01-02T00:00"),\n          high: 52,\n          avg: 48,\n          low: 44\n        }, {\n          date: new Date("2017-01-01T00:00"),\n          high: 54,\n          avg: 50,\n          low: 46\n        },\n        {\n          date: new Date("2017-01-03T00:00"),\n          high: 49,\n          avg: 47,\n          low: 42\n        }, {\n          date: new Date("2017-01-04T00:00"),\n          high: 56,\n          avg: 50,\n          low: 46\n        }]\n      ReactDOM.render(\n        <BarChart chartData={data} width={650} height={400} />\n      , document.getElementById(\'root\'))\n    <\/script>\n  </body>\n</html>\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/Simplest-React-Setup.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-simplest-react-setup-md-46f73f193a0ffef7852f.js.map