(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{vDyy:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),s=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/LinkedIn/linkedin-api-cheat-sheet.md"}});var i={_frontmatter:a},c=s.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(r.b)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"linkedin-api-cheat-sheet"},"LinkedIn API Cheat Sheet"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n    // Change these back to your things\n    define('API_KEY',      'YOUR API KEY');\n    define('API_SECRET',   'YOUR API SECRET');\n    define('REDIRECT_URI',  'http://localhost/');\n\n    // I've changed the scope to work for what we generally have access to\n    define('SCOPE', 'r_basicprofile r_emailaddress');\n\n    // This stuff I believe it used if you have a database\n    session_name('linkedin');\n    session_start();\n\n    // OAuth 2 Control Flow\n    if (isset($_GET['error'])) {\n        // LinkedIn returned an error\n        print $_GET['error'] . ': ' . $_GET['error_description'];\n        exit;\n    } elseif (isset($_GET['code'])) {\n        // User authorized your application\n        if ($_SESSION['state'] == $_GET['state']) {\n            // Get token so you can make API calls\n            getAccessToken();\n        } else {\n            // CSRF attack? Or did you mix up your states?\n            exit;\n        }\n    } else {\n        if ((empty($_SESSION['expires_at'])) || (time() > $_SESSION['expires_at'])) {\n            // Token has expired, clear the state\n            $_SESSION = array();\n        }\n        if (empty($_SESSION['access_token'])) {\n            // Start authorization process\n            getAuthorizationCode();\n        }\n    }\n\n    // You have a valid token. Now fetch your profile.\n    // I've just put in some dummy fields for now, but hopefully these should do it.\n    $user = fetch('GET', '/v1/people/~:(first-name,last-name,email-address,phone-numbers,num-connections,picture-url,location,positions,summary,specialties,industry)');\n\n    // I've just shoved the responses into some variables from the $user dict response\n\n    // STORE THE RESULTS IN AN ARRAY\n\n    $res = array();\n\n    $res[] = $user->firstName;\n    $res[] = $user->lastName;\n    $res[] = $user->emailAddress;\n    $res[] = $user->phoneNumbers;\n    $res[] = $user->numConnections;\n    $res[] = $user->pictureUrl;\n    $res[] = $user->location->country->code;\n    $res[] = $user->location->name;\n    $res[] = $user->summary;\n    $res[] = $user->specialties;\n    $res[] = $user->industry;\n    $res[] = $user->positions;\n\n    echo  nl2br(\"First name: \". $res[0] . \"\\n\");\n    echo  nl2br(\"Last name: \". $res[1] . \"\\n\");\n    echo  nl2br(\"Email Address: \" . $res[2] . \"\\n\");\n    echo  nl2br(\"Phone Numbers: \". $res[3] . \"\\n\");\n    echo  nl2br(\"Num Connections: \". $res[4] . \"\\n\");\n    echo  nl2br(\"Picture Url: \" . $res[5] . \"\\n\");\n    echo  nl2br(\"Location Country Code: \" . $res[6]. \"\\n\");\n    echo  nl2br(\"Location Name: \". $res[7] . \"\\n\");\n    echo  nl2br(\"Summary: \" . $res[8] . \"\\n\");\n    echo  nl2br(\"Specialties: \". $res[9] . \"\\n\");\n    echo  nl2br(\"Industry: \". $res[10] . \"\\n\");\n    echo  nl2br(\"Positions: \" . $res[11] . \"\\n\");\n\n    exit;\n\n    function getAuthorizationCode() {\n        $params = array('response_type' => 'code',\n                        'client_id' => API_KEY,\n                        'scope' => SCOPE,\n                        'state' => uniqid('', true), // unique long string\n                        'redirect_uri' => REDIRECT_URI,\n                  );\n        // Authentication request\n        $url = 'https://www.linkedin.com/uas/oauth2/authorization?' . http_build_query($params);\n\n        // Needed to identify request when it returns to us\n        $_SESSION['state'] = $params['state'];\n        // Redirect user to authenticate\n        header(\"Location: $url\");\n        exit;\n    }\n\n    function getAccessToken() {\n        $params = array('grant_type' => 'authorization_code',\n                        'client_id' => API_KEY,\n                        'client_secret' => API_SECRET,\n                        'code' => $_GET['code'],\n                        'redirect_uri' => REDIRECT_URI,\n                  );\n\n        // Access Token request\n        $url = 'https://www.linkedin.com/uas/oauth2/accessToken?' . http_build_query($params);\n\n        // Tell streams to make a POST request\n        $context = stream_context_create(\n                        array('http' =>\n                            array('method' => 'POST',\n                            )\n                        )\n                    );\n        // Retrieve access token information\n        $response = file_get_contents($url, false, $context);\n        // Native PHP object, please\n        $token = json_decode($response);\n        // Store access token and expiration time\n        $_SESSION['access_token'] = $token->access_token; // guard this!\n        $_SESSION['expires_in']   = $token->expires_in; // relative time (in seconds)\n        $_SESSION['expires_at']   = time() + $_SESSION['expires_in']; // absolute time\n\n        return true;\n    }\n\n    // this fetch should be the main thing that you really need to add to what you already have!\n\n    function fetch($method, $resource, $body = '') {\n        $params = array('oauth2_access_token' => $_SESSION['access_token'],\n                        'format' => 'json',\n                  );\n\n        // Need to use HTTPS\n        $url = 'https://api.linkedin.com' . $resource . '?' . http_build_query($params);\n        // Tell streams to make a (GET, POST, PUT, or DELETE) request\n        $context = stream_context_create(\n                        array('http' =>\n                            array('method' => $method,\n                            )\n                        )\n                    );\n\n        // Hocus Pocus\n        $response = file_get_contents($url, false, $context);\n        // Native PHP object, please\n        return json_decode($response);\n    }\n\n?>\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/LinkedIn/linkedin-api-cheat-sheet.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-linked-in-linkedin-api-cheat-sheet-md-aa29beb751ada9776ae0.js.map