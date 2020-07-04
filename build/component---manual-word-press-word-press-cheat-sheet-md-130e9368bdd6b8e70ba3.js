(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{IbJB:function(e,t,s){"use strict";s.r(t),s.d(t,"_frontmatter",(function(){return a})),s.d(t,"default",(function(){return p}));s("1c7q"),s("abGl"),s("gZHo"),s("Fdmb"),s("Ir+3"),s("2mQt"),s("mXGw");var n=s("/FXl"),o=s("TjRS");s("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/WordPress/WordPress-Cheat-Sheet.md"}});var r={_frontmatter:a},l=o.a;function p(e){var t=e.components,s=function(e,t){if(null==e)return{};var s,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,["components"]);return Object(n.b)(l,i({},r,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"wordpress-help"},"WordPress Help"),Object(n.b)("p",null,"REFERNCES"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Red Bull Weekender Website")),Object(n.b)("h2",{id:"wordpress-theme-files"},"WordPress Theme Files"),Object(n.b)("p",null,"style.css – This is your theme’s stylesheet file."),Object(n.b)("p",null,"index.php – This is the main body template for your theme. Its job is to bring together all the information in the other theme files using template tags."),Object(n.b)("p",null,"header.php – This file contains the header information that appears with the ",Object(n.b)("inlineCode",{parentName:"p"},"<head>")," section of your site, stuff like metadata and the link to your stylesheet."),Object(n.b)("p",null,"sidebar.php – Everything in you sidebar goes in this file, like widgets, categories, additional menus, search form, etc."),Object(n.b)("p",null,"footer.php – This file contains your footer information, such as copyright details, widgets, and social icons."),Object(n.b)("p",null,"single.php – This file displays just one post."),Object(n.b)("p",null,"page.php – When you create a page on your site, this is the template responsible."),Object(n.b)("p",null,"comments.php – This file is responsible for displaying comments."),Object(n.b)("p",null,"404.php – When visitors try to visit a page on your site that doesn’t exist, this file will general an error page."),Object(n.b)("p",null,"functions.php – This file is where you can place special functions. We always recommend creating a child theme rather than edit this file directly."),Object(n.b)("p",null,"archive.php – Display an archive with this file so visitors to your site can go way back when and read your Hello World! post."),Object(n.b)("p",null,"search.php – Help your visitors search your site with this page.\nsearchform.php – Display a search form for your visitors with this template file."),Object(n.b)("h2",{id:"define-new-theme"},"Define new theme"),Object(n.b)("p",null,"This information goes at the top of your stylesheet.css file."),Object(n.b)("p",null,"/","*","\nTheme Name: Twenty Sixteen\nTheme URI: ",Object(n.b)("a",i({parentName:"p"},{href:"https://wordpress.org/themes/twentysixteen/"}),"https://wordpress.org/themes/twentysixteen/"),"\nAuthor: the WordPress team\nAuthor URI: ",Object(n.b)("a",i({parentName:"p"},{href:"https://wordpress.org/"}),"https://wordpress.org/"),"\nDescription: Twenty Sixteen is a modernized take on an ever-popular WordPress layout — the horizontal masthead with an optional right sidebar that works perfectly for blogs and websites. It has custom color options with beautiful default color schemes, a harmonious fluid grid using a mobile-first approach, and impeccable polish in every detail. Twenty Sixteen will make your WordPress look beautiful everywhere.\nVersion: 1.2\nLicense: GNU General Public License v2 or later\nLicense URI: ",Object(n.b)("a",i({parentName:"p"},{href:"http://www.gnu.org/licenses/gpl-2.0.html"}),"http://www.gnu.org/licenses/gpl-2.0.html"),"\nTags: black, blue, gray, red, white, yellow, dark, light, one-column, two-columns, right-sidebar, fixed-layout, responsive-layout, accessibility-ready, custom-background, custom-colors, custom-header, custom-menu, editor-style, featured-images, flexible-header, microformats, post-formats, rtl-language-support, sticky-post, threaded-comments, translation-ready\nText Domain: twentysixteen"),Object(n.b)("p",null,"This theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you've learned with others.\n","*","/"),Object(n.b)("h2",{id:"template-include-tags"},"Template include tags"),Object(n.b)("p",null,"Template include tags are used within one template file (for example index.php) to include (or call) the HTML and PHP found in another template file (for example header.php). While PHP has its own built-in include() statement to do this, these WordPress-specific tags make life much easier:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-php"}),"<?php get_header(); ?> – Includes the header.php file\n<?php get_sidebar(); ?> – Includes the sidebar.php file\n<?php get_footer(); ?> – Includes the footer.php file\n<?php comments_template(); ?> – Includes your comments\n\n//\n//\n// WORDPRESS HEADER/BLOG INFO TAGS\n//\n//\n\nThese are functions you’ll find in your theme’s header.php file, though you’ll also find them in other theme files:\n\n<?php bloginfo('name'); ?> – The title of your site, or blog name\n<?php bloginfo('url'); ?> – Your site’s URL\n<?php bloginfo('stylesheet_url'); ?> – Link to your themes’s stylesheet file\n<?php bloginfo('template_url'); ?> – Location of your site’s theme file\n<?php bloginfo('description'); ?> – Displays the tagline of your blog as set in Settings > General.\n<?php bloginfo('atom_url'); ?> – Link to your site’s atom URL\n<?php bloginfo('rss2_url'); ?> – RSS feed URL for your site\n<?php bloginfo('pingback_url'); ?> – Pingback URL for your site\n<?php bloginfo('version'); ?> – WordPress version number\n<?php bloginfo('html_type'); ?> – The HTML version your site is using\n<?php site_url(); ?> – The root URL for your site\n<?php get_stylesheet_directory(); ?> – Location of your stylesheet folder\n<?php wp_title(); ?> – Title of a specific page\n")),Object(n.b)("h2",{id:"other-template-tags"},"Other template tags"),Object(n.b)("p",null,"These tags can be used across all of your template files, such as index.php or page.php, making it easy to display specific information anywhere you want on your site:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-php"}),"<?php the_content(); ?> – Displays the content of a post\n<?php the_excerpt(); ?> – Displays the excerpt used in posts\n<?php the_title(); ?> – Title of the specific post\n<?php the_permalink() ?> – Link of a specific post\n<?php the_category(', ') ?> – Category of a specific post\n<?php the_author(); ?> – Author of a specific post\n<?php the_ID(); ?> – ID of a specific post\n<?php edit_post_link(); ?> – Edit link for a post\n<?php next_post_link(' %link ') ?> – URL of the next page\n<?php previous_post_link('%link') ?> – URL of the previous page\n<?php get_links_list(); ?> – Lists all links in blogroll\n<?php wp_list_pages(); ?> – Lists all pages\n<?php wp_get_archives() ?> – List archive for the site\n<?php wp_list_cats(); ?> – Lists all categories\n<?php get_calendar(); ?> – Displays the built-in calendar\n<?php wp_register(); ?> – Displays register link\n<?php wp_loginout(); ?> – Displays login/logout link only to registered users\n")),Object(n.b)("h2",{id:"other-loops"},"Other loops"),Object(n.b)("p",null,"The Loop is the default mechanism in WordPress for displaying all of your posts. Exactly how many posts are retrieved is determined by the number of posts you’ve chosen to display in the “Reading” settings in your WordPress dashboard."),Object(n.b)("p",null,"Within the Loop, WordPress loops through each post retrieved for the current page one at a time and formats it according to your theme’s instructions."),Object(n.b)("p",null,"You can use the Loop to do a lot of useful stuff, like:"),Object(n.b)("p",null,"Display post titles and excerpts on your homepage;\nDisplay the content and comments on a single post;\nDisplay the content on an individual page using template tags; and\nDisplay data from custom post types and custom fields."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-php"}),"<?php\n    if ( have_posts() ) :\n        while ( have_posts() ) :\n            the_post();\n            //\n            // Post Content here\n            //\n        endwhile; // end while\n    endif; // end if\n?>\n")),Object(n.b)("p",null,"The Loop can display lots of different element for each post. Some of the most common template tags used in themes (according to the WordPress Theme Handbook) are:"),Object(n.b)("p",null,"next_post_link() – A link to the post published chronologically after the current post\nprevious_post_link() – A link to the post published chronologically before the current post\nthe_category() – The category or categories associated with the post or page being viewed\nthe_author() – The author of the post or page\nthe_content() – The main content for a post or page\nthe_excerpt() – The first 55 words of a post’s main content followed by an ellipsis (…) or read more link that goes to the full post. You may also use the “Excerpt” field of a post to customize the length of a particular excerpt.\nthe_ID() – The ID for the post or page\nthe_meta() – The custom fields associated with the post or page\nthe_shortlink() – A link to the page or post using the URL of the site and the ID of the post or page\nthe_tags() – The tag or tags associated with the post\nthe_title() – The title of the post or page\nthe_time() – The time or date for the post or page. This can be customized using standard php date function formatting."),Object(n.b)("p",null,"You can also use conditional tags, such as:"),Object(n.b)("p",null,"is_home() – Returns true if the current page is the homepage\nis_admin() – Returns true if an administrator is logged in and visiting the site\nis_single() – Returns true if the page is currently displaying a single post\nis_page() – Returns true if the page is currently displaying a single page\nis_page_template() – Can be used to determine if a page is using a specific template, for example: is_page_template('about-page.php')\nis_category() – Returns true if page or post has the specified category, for example is_category('news')\nis_tag() – Returns true if a page or post has the specified tag\nis_author() – Returns true if a specific author is logged in and visiting the site\nis_search() – Returns true if the current page is a search results page\nis_404() – Returns true if the current page does not exist\nhas_excerpt() – Returns true if the post or page has an excerpt"),Object(n.b)("h2",{id:"treehouse-theme-dev"},"TreeHouse Theme Dev"),Object(n.b)("p",null,"Themes are within the wp-content hierarchy."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can manually move a folder into there.")),Object(n.b)("p",null,"// template hierarchy"),Object(n.b)("p",null,"wphierarchy.com"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"left hand side shows the different types of pages"),Object(n.b)("li",{parentName:"ul"},"different types of pages towards the right that you can create"),Object(n.b)("li",{parentName:"ul"},"TH course designated for this")),Object(n.b)("p",null,"// setting up the folder"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"in the themes folder\ncreate themes > treehouse-portfolio")),Object(n.b)("p",null,"...then"),Object(n.b)("p",null,"themes > treehouse-portfolio > index.php\nthemes > treehouse-portfolio > style.css\nthemes > treehouse-portfolio > functions.php"),Object(n.b)("p",null,"Example setup: in style.css (from website)"),Object(n.b)("p",null,"/","*","\nTheme Name: Twenty Thirteen\nTheme URI: ",Object(n.b)("a",i({parentName:"p"},{href:"http://wordpress.org/themes/twentythirteen"}),"http://wordpress.org/themes/twentythirteen"),"\nAuthor: the WordPress team\nAuthor URI: ",Object(n.b)("a",i({parentName:"p"},{href:"http://wordpress.org/"}),"http://wordpress.org/"),"\nDescription: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.\nVersion: 1.0\nLicense: GNU General Public License v2 or later\nLicense URI: ",Object(n.b)("a",i({parentName:"p"},{href:"http://www.gnu.org/licenses/gpl-2.0.html"}),"http://www.gnu.org/licenses/gpl-2.0.html"),"\nTags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready\nText Domain: twentythirteen"),Object(n.b)("p",null,"This theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you've learned with others.\n","*","/"),Object(n.b)("p",null,"After this, it should show up!"),Object(n.b)("p",null,"To fix the blank thumbnail, you can use a screenshot.png file that is 880 x 660"),Object(n.b)("p",null,"// broken themes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'this will show up in the CMS under "appearance"'),Object(n.b)("li",{parentName:"ul"},"gives insight into issues for themes that don't appear")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/WordPress/WordPress-Cheat-Sheet.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-word-press-word-press-cheat-sheet-md-130e9368bdd6b8e70ba3.js.map