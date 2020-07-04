(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{"N+tV":function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return s})),e.d(t,"default",(function(){return u}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var a=e("/FXl"),i=e("TjRS");e("aD51");function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/PHP/PHP-Constructors.md"}});var o={_frontmatter:s},c=i.a;function u(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["components"]);return Object(a.b)(c,r({},o,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"php-constructors"},"PHP Constructors"),Object(a.b)("p",null,"The important method is the ",Object(a.b)("inlineCode",{parentName:"p"},"__construct")," method."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-php"}),"class LinkedList {\n    public $size = 0;\n    public $head;\n\n    function __construct($head = null) {\n        $this->head = $head;\n\n        if ($head != null) {\n            $this->size = 1;\n        } else {\n            $this->size = 0;\n        }\n    }\n\n    public function insertFirst($n) {\n        if ($this->head != null) {\n            $tmp = $this->head;\n            $this->head = $n;\n            $n->setNext($tmp);\n        } else {\n            $this->head = $n;\n        }\n        $this->size++;\n    }\n\n    public function getFirst() {\n        return $this->head;\n    }\n}\n\nclass Node {\n    private $data;\n    private $next;\n\n    function __construct($data = null) {\n        $this->data = $data;\n    }\n\n    public function getData() {\n        return $this->data;\n    }\n\n    public function setData($data) {\n        $this->data = $data;\n    }\n\n    public function getNext() {\n        return $this->next;\n    }\n\n    public function setNext($next) {\n        $this->next = $next;\n    }\n}\n\n$n1 = new Node(1);\n$n2 = new Node(2);\n$ll = new LinkedList($n1);\n$ll->insertFirst($n2);\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/PHP/PHP-Constructors.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-php-php-constructors-md-faa496e45ff179aa27d3.js.map