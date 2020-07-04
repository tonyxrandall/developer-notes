(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{"3Lvz":function(n,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return u})),a.d(e,"default",(function(){return p}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var r=a("/FXl"),t=a("TjRS");a("aD51");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-Arrays.md"}});var c={_frontmatter:u},b=t.a;function p(n){var e=n.components,a=function(n,e){if(null==n)return{};var a,r,t={},s=Object.keys(n);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,["components"]);return Object(r.b)(b,s({},c,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"ruby-arrays"},"Ruby Arrays"),Object(r.b)("h2",{id:"map"},"Map"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ruby"}),'# map.rb\nclass Map\n    def self.updatesVar(arr)\n        arr.map! {|x| x + "!"}\n        return arr\n    end\n\n    def self.doesNotUpdateVar(arr)\n        b = arr.map {|x| x + "!"}\n        return arr\n    end\n\n    def self.returnsNewArr(arr)\n        b = arr.map {|x| x + "!"}\n        return b\n    end\nend\n\n# map_test.rb\nbegin\n  gem \'minitest\', \'>= 5.0.0\'\n  require \'minitest/autorun\'\n  require_relative \'arrays\'\nrescue Gem::LoadError => e\n  puts "\\nMissing Dependency:\\n#{e.backtrace.first} #{e.message}"\n  puts \'Minitest 5.0 gem must be installed for the Ruby track.\'\nrescue LoadError => e\n  puts "\\nError:\\n#{e.backtrace.first} #{e.message}"\n  puts DATA.read\n  exit 1\nend\n\n# Common test data version: 1.1.0 be3ae66\nclass MapTest < Minitest::Test\n  def test_map_updates_var\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a!","b!","c!","d!"]\n    assert_equal expected, Map.updatesVar(arr)\n  end\n\n  def test_map_does_not_update_var\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a","b","c","d"]\n    assert_equal expected, Map.doesNotUpdateVar(arr)\n  end\n\n  def test_map_returns_new_arr\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a!","b!","c!","d!"]\n    assert_equal expected, Map.returnsNewArr(arr)\n  end\nend\n\n__END__\n')),Object(r.b)("h2",{id:"other-important-functions"},"Other important functions"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ruby"}),'a = ["a","b","c"]\n# => ["a", "b", "c"]\na.map! {|x| x + "!"}\n# => ["a!", "b!", "c!"]\nnum = [1, 2, 3, 4]\nnum.map! &-> (x) { x + 2 } # mapping as lambda\n# => [3, 4, 5, 6]\na = a.join(\', \')\n# => "a!, b!, c!"\na = a.split(\', \')\n# => ["a!", "b!", "c!"]\na = a.reverse()\n# => ["c!", "b!", "a!"]\nb = a.first() # a[0]\n# => ["a!"]\na += b\n# => ["a!", "b!", "c!", "a!"]\nfirst, *rest = a\n# first = ["a!"], rest = ["b!", "c!", "a!"]\na.take(1)\n# => ["a!"]\na.drop(1)\n# => ["b!", "c!", "a!"]\na.select{|x| x != "a!"}\n# => ["b!", "c!"]\na.select{|x| !x.include? "a"}\n# => ["b!", "c!"]\nnum = [1, 2, 3, 4]\nnum.map! &-> (x) { x > 3 }\n# => [4]\nc = num.reduce(0) {|x,y| x + y}\n# => 10\nnum = [4, 3, 2, 1]\nnum.sort!\n# => [1, 2, 3, 4]\nnum.size()\n# => 4\nnum.push(5)\n# => [1, 2, 3, 4, 5]\nnum.pop()\n# => 5\nnum.unshift(5)\n# => [5, 1, 2, 3, 4]\nnum.shift()\n# => 5\nnum.min()\n# => 1\nnum.max()\n# => 4\n')))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Arrays.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-arrays-md-983ed15a4fa723eabc93.js.map