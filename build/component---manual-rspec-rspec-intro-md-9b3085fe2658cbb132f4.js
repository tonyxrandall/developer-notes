(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{WLBN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Rspec/Rspec-Intro.md"}});var b={_frontmatter:l},o=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(o,c({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"intro-to-rspec"},"Intro to RSpec"),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("p",null,"Helpful link for ",Object(a.b)("inlineCode",{parentName:"p"},"rails")," testing ",Object(a.b)("a",c({parentName:"p"},{href:"https://medium.com/@lcriswell/rails-api-request-specs-with-rspec-effeac468c4e"}),"here"),"."),Object(a.b)("p",null,"Ensure ",Object(a.b)("inlineCode",{parentName:"p"},"rspec")," gem installed."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),'# calculator.rb\nclass Calculator\n  def add(x, y)\n    x + y\n  end\nend\n\n# calculator_spec.rb\nrequire \'./calculator.rb\'\n\ndescribe "calculator" do\n  it "adds numbers" do\n    calc = Calculator.new\n    expect(calc.add(2,3)).to eql(5)\n  end\nend\n')),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"rspec calculator_spec.rb"),"."),Object(a.b)("h2",{id:"setting-up-a-calculator-file"},"Setting up a calculator file"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"# calculator.rb\nclass Calculator\n  def add(x, y)\n    x + y\n  end\nend\n")),Object(a.b)("h2",{id:"pending-tests"},"Pending tests"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),'require \'./calculator.rb\'\n\ndescribe "calculator" do\n  it "adds numbers"\nend\n')),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"rspec calculator_spec.rb")," should come back with 1 pending test."),Object(a.b)("h2",{id:"adding-your-first-test"},"Adding your first test"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),'require \'./calculator.rb\'\n\ndescribe "calculator" do\n  it "adds numbers" do\n    calc = Calculator.new\n    expect(calc.add(2,3)).to eql(5)\n  end\nend\n')),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"rspec calculator_spec.rb")," should come back with 1 successful test."),Object(a.b)("h2",{id:"module-testing-a-ruby-symbol"},"Module testing a Ruby Symbol"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ruby"}),"# flags.rb\nmodule Flags\n  Truthy = :truthy\nend\n\n# flags_spec.rb\nrequire './flags.rb'\n\ndescribe 'for flag module' do\n  context 'when ruby symbol is involved' do\n    subject { Flags::Truthy }\n    it { expect(subject).to eq(:truthy)}\n  end\nend\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"rspec flags_spec.rb")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Rspec/Rspec-Intro.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-rspec-rspec-intro-md-9b3085fe2658cbb132f4.js.map