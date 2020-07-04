(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{tJcB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Timber/Timber-Cheat-Sheet.md"}});var s={_frontmatter:r},l=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(i.b)(l,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"timber-help-sheet"},"Timber Help Sheet"),Object(i.b)("p",null,"Here are some helpful conversions for functions you're probably well familiar with in WordPress and their Timber equivalents. These assume a PHP file with the Timber::get_context(); function at the top. For example:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"$context = Timber::get_context();\n$context['post'] = new TimberPost();\nTimber::render('single.twig', $context);\n")),Object(i.b)("h2",{id:"timber-example"},"Timber Example"),Object(i.b)("p",null,"RedBull home.php file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"$data = Context::getDefaultContext();\t\t//standard include file at the top")),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-php"}),"<?php\n\n$data = Context::getDefaultContext();\n\nprint_r($data);\nexit();\n\n// Set page title and other custom data\n$data['title'] = $data['site']->title;\n$data['events'] = Timber::get_posts([\n    'post_type' => 'event',\n    'orderby' => 'meta_value_num',\n  'meta_key' => 'event_date',\n    'order' => 'asc',\n    'posts_per_page' => -1,\n]);\n\n// render the twig file\nTimber::render('home.twig', $data);\n\n?>\n\n// this is the function context found in Redbull under functions > context.php\n\n<?php\n\nclass Context {\n\n    // Set up all of the Timber context stuff we need on every page\n    public static function getDefaultContext() {\n    global $wp;\n\n    $data = Timber::get_context();\n\n    // adding some extra meta to the data context\n    $data['meta'] = [\n      \"title\" => $data['site']->title,\n      \"description\" => $data['site']->description,\n      \"image\" => $data['theme']->link . \"/img/opengraph.png\",\n      \"url\" => home_url(add_query_arg(array(),$wp->request)) . \"/\"\n    ];\n\n        return $data;\n    }\n}\n\n?> // not actually included in the file\n")),Object(i.b)("h2",{id:"timber-blog-info"},"Timber Blog Info"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"blog_info('charset') => {{ site.charset }}\nblog_info('description') => {{ site.description }}\nblog_info('sitename') => {{ site.name }}\nblog_info('url') => {{ site.url }}\n")),Object(i.b)("h2",{id:"timber-body-class"},"Timber Body Class"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"implode(' ', get_body_class()) => <body class=\"{{ body_class }}\">\n")),Object(i.b)("h2",{id:"timber-post"},"Timber Post"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"the_content() => {{ post.content }}\nthe_permalink() => {{ post.link }}\nthe_title() => {{ post.title }}\nget_the_tags() => {{ post.tags }}\n")),Object(i.b)("h2",{id:"timber-theme"},"Timber Theme"),Object(i.b)("p",null,"In WordPress parlance, stylesheet_directory = child theme, template directory = parent theme. Both WP and Timber functions safely return the current theme info if there's no parent/child going on."),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"get_template_directory_uri() => {{ theme.link }} (Parent Themes)\nget_template_directory_uri() => {{ theme.parent.link }} (Child Themes)\nget_stylesheet_directory_uri() => {{ theme.link }}\nget_template_directory() => {{ theme.parent.path }}\nget_stylesheet_directory() => {{ theme.path }}\n")),Object(i.b)("h2",{id:"wp-functions"},"WP Functions"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"wp_footer() => {{ wp_footer }}\nwp_head() => {{ wp_head }}\n")),Object(i.b)("h1",{id:"wp-integrations"},"WP Integrations"),Object(i.b)("p",null,Object(i.b)("a",a({parentName:"p"},{href:"https://github.com/timber/timber/wiki/WP-Integration"}),"https://github.com/timber/timber/wiki/WP-Integration")),Object(i.b)("h2",{id:"the_content"},"the_content"),Object(i.b)("p",null,"You're probably used to calling the_content() in your theme file. This is good. Before outputting, WordPress will run all the filters and actions that your plugins and themes are using. If you want to get this into your new Timber theme (and you probably do). Call it like this:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),'<div class="my-article">\n   {{post.content}}\n</div>\n\n//This differs from {{post.post_content}} which is the raw text stored in your database\n')),Object(i.b)("h2",{id:"hooks"},"hooks"),Object(i.b)("p",null,"Timber hooks to interact with WordPress use this/style/of_hooks instead of this_style_of_hooks. This matches the same methodology as Advanced Custom Fields."),Object(i.b)("p",null,"Full documentation to come"),Object(i.b)("h2",{id:"scripts--stylesheets"},"Scripts + Stylesheets"),Object(i.b)("p",null,"What happened to wp_head() and wp_footer()? Don't worry, they haven't gone away. In fact, they have a home now in the Timber::get_context() object. When you setup your PHP file, you should do something like this:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-php"}),"/* single.php */\n$data = Timber::get_context();\n$data['post'] = new TimberPost();\nTimber::render('single.twig', $data);\n")),Object(i.b)("p",null,"Now in the corresponding Twig file:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-html"}),"{# single.twig #}\n<html>\n    <head>\n    \x3c!-- Add whatever you need in the head, and then...--\x3e\n    {{wp_head}}\n    </head>\n\n    \x3c!-- etc... --\x3e\n\n    <footer>\n        Copyright &copy; {{\"now\"|date('Y')}}\n    </footer>\n    {{wp_footer}}\n    </body>\n</html>\n")),Object(i.b)("p",null,"WordPress will inject whatever output had been loaded into wp_head() and wp_footer() through these variables."),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("p",null,"But my theme/plugin has some functions I need! Do I really have to re-write all of them?"),Object(i.b)("p",null,"No."),Object(i.b)("p",null,"Let's say you modified twentyeleven and need some of the functions back. Here's the quick-and-dirty way:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),'<div class="posted-on">{{function("twentyeleven_posted_on")}}</div>\n')),Object(i.b)("p",null,"Oh. That's not so bad. What if there are arguments? Easy:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"{# single.twig #}\n<div class=\"admin-tools\">\n    {{function('edit_post_link', 'Edit', '<span class=\"edit-link\">', '</span>')}}\n</div>\n")),Object(i.b)("p",null,"Nice! Any gotchas? Unfortunately yes. While the above example will totally work in a single.twig file it will not in a loop. Why? Single.twig/single.php retain the context of the current post. Thus for a function like edit_post_link (which will try to guess the ID# of the post you want to edit, based on the current post in the loop), the same function requires some modification in a file like archive.twig or index.twig. There, you will need to explicitly set the post ID:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"{# index.twig #}\n<div class=\"admin-tools\">\n    {{function('edit_post_link', 'Edit', '<span class=\"edit-link\">', '</span>', post.ID)}}\n</div>\n\n// You can also use fn('my_function') as an alias.\n")),Object(i.b)("p",null,"For a less quick-and-dirty way, you can use the TimberFunctionWrapper. This class sets up your PHP functions as functions you can use in your Twig templates. It will execute them only when you actually call them in your template. You can quickly set up a TimberFunctionWrapper using TimberHelper:"),Object(i.b)("p",null,"/**"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"@param string $function_name"),Object(i.b)("li",{parentName:"ul"},"@param array (optional) $defaults"),Object(i.b)("li",{parentName:"ul"},"@param bool (optional) $return_output_buffer Return function output instead of return value (default: false)"),Object(i.b)("li",{parentName:"ul"},"@return \\TimberFunctionWrapper\n*/\nTimberHelper::function_wrapper( $function_name, $defaults = array(), $return_output_buffer = false );\nSo if you want to add edit_post_link to your context, you can do something like this:")),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"/* single.php */\n$data = Timber::get_context();\n$data['post'] = new TimberPost();\n$data['edit_post_link'] = TimberHelper::function_wrapper( 'edit_post_link', array( __( 'Edit' ), '<span class=\"edit-link\">', '</span>' ) );\nTimber::render('single.twig', $data);\n\n// Now you can use it like a 'normal' function:\n\n{# single.twig #}\n<div class=\"admin-tools\">\n    {{edit_post_link}}\n</div>\n{# Calls edit_post_link using default arguments #}\n\n{# single-my-post-type.twig #}\n<div class=\"admin-tools\">\n    {{edit_post_link(null, '<span class=\"edit-my-post-type-link\">')}}\n</div>\n{# Calls edit_post_link with all defaults, except for second argument #}\n")),Object(i.b)("h2",{id:"actions"},"Actions"),Object(i.b)("p",null,"Call them in your Twig template..."),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"{% do action('my_action') %}\n{% do action('my_action_with_args', 'foo', 'bar') %}\n... in your functions.php file:\n\nadd_action('my_action', 'my_function');\n\nfunction my_function($context){\n    //$context stores the template context in case you need to reference it\n    echo $context['post']->post_title; //outputs title of yr post\n}\nadd_action('my_action_with_args', 'my_function_with_args', 10, 2);\n\nfunction my_function_with_args($foo, $bar){\n    echo 'I say '.$foo.' and '.$bar;\n}\nYou can still get the context object when passing args, it's always the last argument...\n\nadd_action('my_action_with_args', 'my_function_with_args', 10, 3);\n\nfunction my_function_with_args($foo, $bar, $context){\n    echo 'I say '.$foo.' and '.$bar;\n    echo 'For the post with title '.$context['post']->post_title;\n}\n")),Object(i.b)("p",null,"Please note the argument count that WordPress requires for add_action"),Object(i.b)("h2",{id:"filters"},"Filters"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"{{ post.content|apply_filters('my_filter') }}\n{{ \"my custom string\"|apply_filters('my_filter',param1,param2,...) }}\n")),Object(i.b)("h2",{id:"widgets"},"Widgets"),Object(i.b)("p",null,"Everyone loves widgets! Of course they do..."),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"$data['footer_widgets'] = Timber::get_widgets('footer_widgets');\n")),Object(i.b)("p",null,"...where 'footer_widgets' is the registered name of the widgets you want to get(in twentythirteen these are called sidebar-1 and sidebar-2 )"),Object(i.b)("p",null,"Then use it in your template:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"{# base.twig #}\n<footer>\n    {{footer_widgets}}\n</footer>\n")),Object(i.b)("p",null,"Using Timber inside your own widgets"),Object(i.b)("p",null,"You can also use twig templates for your widgets! Let's imagine we want a widget that shows a random number each time it is rendered."),Object(i.b)("p",null,"Inside the widget class, the widget function is used to show the widget:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"public function widget($args, $instance) {\n    $number = rand();\n    Timber::render('random-widget.twig', array('args' => $args, 'instance' => $instance, 'number' => $number));\n}\nThe corresponding template file random-widget.twig looks like this:\n\n{{ args.before_widget | raw }}\n{{ args.before_title | raw }}{{ instance.title | apply_filters('widget_title') }}{{ args.after_title | raw }}\n\n<p>Your magic number is: <strong>{{ number }}</strong></p>\n\n{{ args.after_widget | raw }}\nThe raw filter is needed here to embed the widget properly.\n\nYou may also want to check if the Timber plugin was loaded before using it:\n\npublic function widget($args, $instance) {\n    if (!class_exists('Timber')) {\n        // if you want to show some error message, this is the right place\n        return;\n    }\n    $number = rand();\n    Timber::render('random-widget.twig', array('args' => $args, 'instance' => $instance, 'number' => $number));\n}\n")),Object(i.b)("h2",{id:"shortcodes"},"Shortcodes"),Object(i.b)("p",null,"Well, if it works for widgets, why shouldn't it work for shortcodes ? Of course it does !"),Object(i.b)("p",null,"Let's implement a ","[youtube]"," shorttag which embeds a youtube video. For the desired usage of ","[youtube id=xxxx]"," we only need a few lines of code:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),"// should be called from within an init action hook\nadd_shortcode('youtube', 'youtube_shorttag');\n\nfunction youtube_shorttag($atts) {\n    if(isset($atts['id'])) {\n        $id = sanitize_text_field($atts['id']);\n    } else {\n        $id = false;\n    }\n    // this time we use Timber::compile since shorttags should return the code\n    return Timber::compile('youtube-short.twig', array('id' => $id));\n}\n")),Object(i.b)("p",null,"In youtube-short.twig we have the following template:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),'{% if id %}\n<iframe width="560" height="315" src="//www.youtube.com/embed/{{ id }}" frameborder="0" allowfullscreen></iframe>\n{% endif %}\n')),Object(i.b)("p",null,"Now, when the YouTube embed code changes, we only need to edit the youtube-short.twig template. No need to search your PHP files for this one particular line."),Object(i.b)("h2",{id:"layouts-with-shortcodes"},"Layouts with Shortcodes"),Object(i.b)("p",null,"Timber and Twig can process your shortcodes by using the {% filter shortcodes %} tag. Let's say you're using a ","[tab]"," shortcode, for example:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{}),'{% filter shortcodes %}\n    [tabs tab1="Tab 1 title" tab2="Tab 2 title" layout="horizontal" backgroundcolor="" inactivecolor=""]\n        [tab id=1]\n            Something something something\n        [/tab]\n\n        [tab id=2]\n            Tab 2 content here\n        [/tab]\n    [/tabs]\n{% endfilter %}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Timber/Timber-Cheat-Sheet.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-timber-timber-cheat-sheet-md-be2a49b85a9299201a26.js.map