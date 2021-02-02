(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{Mrxz:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Zeit-Now/Typescript-Github-Example.md"}});var s={_frontmatter:i},l=a.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(l,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"typescript--github-example"},"TypeScript + Github Example"),Object(o.b)("p",null,"In this example, we are going to create a Zeit Now project that we can use to update files on a repo based on what is passed."),Object(o.b)("h2",{id:"setting-up"},"Setting up"),Object(o.b)("p",null,"Initialise a project in a folder ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init -y"),"."),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"mkdir project\ncd project\nyarn init -y # or npm\nnpm i -g now # or yarn\nmkdir api\ntouch api/example.ts tsconfig.json now.json .env .gitignore test.json\nyarn add --dev @now/node @types/js-base64\nyarn add @octokit/rest js-base64\n")),Object(o.b)("h2",{id:"api-setup"},"API Setup"),Object(o.b)("p",null,"Add the following to ",Object(o.b)("inlineCode",{parentName:"p"},"api/example.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"import { NowRequest, NowResponse } from '@now/node';\nimport Octokit from '@octokit/rest';\nimport { Base64 } from 'js-base64';\n\nconst gh = new Octokit({\n  auth: process.env.GITHUB_TOKEN,\n});\nconst owner = 'your_github_user_name';\n\n// some helper functions for creating a repo\n// and writing a file - we won't update in this example\nconst createOrUpdateFile = async (\n  repo: string,\n  content: string,\n  sha?: string,\n) => {\n  try {\n    return gh.repos.createOrUpdateFile({\n      owner,\n      repo,\n      sha,\n      path: 'hello.json',\n      message: 'Updating the Hello JSON file',\n      content: Base64.encode(JSON.stringify(content)),\n    });\n  } catch (err) {\n    // basic handling\n    console.error(err.message);\n    return undefined;\n  }\n};\n\nconst createRepo = async (repo: string) => {\n  try {\n    await gh.repos.createForAuthenticatedUser({\n      name: repo,\n      private: true,\n    });\n  } catch (err) {\n    // basic handling\n    console.error(err.message);\n    return undefined;\n  }\n};\n\nexport default async (_req: NowRequest, res: NowResponse) => {\n  const { repoName, content } = _req.body;\n  const repo = await fetchRepo(repoName);\n  await createRepo(repoName);\n  const sha = upFile ? upFile.data.sha : undefined;\n  const updatedJson = await createOrUpdateFile(repoName, content, sha);\n  res.status(200).send({ success: true });\n};\n")),Object(o.b)("h2",{id:"tsconfig"},"TSConfig"),Object(o.b)("p",null,"Add this is tsconfig.json (taken from ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/zeit/now-examples/blob/master/gatsby-functions/tsconfig.json"}),"this Zeit Now example"),"):"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "commonjs",\n    "lib": ["es2015"],\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "strictFunctionTypes": true,\n    "strictBindCallApply": true,\n    "strictPropertyInitialization": true,\n    "noImplicitThis": true,\n    "alwaysStrict": true,\n    "esModuleInterop": true\n  }\n}\n')),Object(o.b)("h2",{id:"git-ignore"},"Git Ignore"),Object(o.b)("p",null,"Ignore npm modules + .env where we will store the local key in our ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," file:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"node_modules/\n.env\n")),Object(o.b)("h2",{id:"dotenv"},"Dotenv"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file, add a personal GitHub token that we will use for authentication. This token is required for programmatic operations via the API."),Object(o.b)("p",null,"If you need to create one, ",Object(o.b)("a",r({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"}),"follow this article from the GitHub site"),"."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"GITHUB_TOKEN=TOKEN_VALUE\n")),Object(o.b)("h2",{id:"nowjson"},"Now.json"),Object(o.b)("p",null,"We will use ",Object(o.b)("inlineCode",{parentName:"p"},"now.json")," to help define some env variables."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-github"}),'{\n  "name": "project-name",\n  "version": 2,\n  "env": {\n    "GITHUB_TOKEN": "@github-token"\n  }\n}\n')),Object(o.b)("h2",{id:"test-json"},"Test JSON"),Object(o.b)("p",null,"For what we will upload, add this to ",Object(o.b)("inlineCode",{parentName:"p"},"test.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "hello": "world"\n}\n')),Object(o.b)("h2",{id:"local-development"},"Local Development"),Object(o.b)("p",null,"Now we can develop locally. Run ",Object(o.b)("inlineCode",{parentName:"p"},"now dev")," to get localhost running on port 3000."),Object(o.b)("p",null,"Once the port is running, we can ping ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/api/example")," and pass some params to generate a new repo and add some JSON."),Object(o.b)("p",null,"In this example, I am using ",Object(o.b)("a",r({parentName:"p"},{href:"https://httpie.org/doc#json"}),"HTTPie")," and running ",Object(o.b)("inlineCode",{parentName:"p"},"http POST localhost:3000/api/example repoName=temp-zeit-a content:=@test.json")," on the command line will lead to the creation of a new private repo ",Object(o.b)("inlineCode",{parentName:"p"},"temp-zeit-a")," with content from the ",Object(o.b)("inlineCode",{parentName:"p"},"test.json")," local file saved into the ",Object(o.b)("inlineCode",{parentName:"p"},"hello.json")," file on the repo."),Object(o.b)("p",null,"Hooray!"),Object(o.b)("h2",{id:"production"},"Production"),Object(o.b)("p",null,"To deploy to production, we simply run ",Object(o.b)("inlineCode",{parentName:"p"},"now"),"."),Object(o.b)("h2",{id:"moving-forward"},"Moving forward"),Object(o.b)("p",null,"Updating the file on Github requires the SHA, so use the other Octokit methods to help with all of these issues."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Zeit-Now/Typescript-Github-Example.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-zeit-now-typescript-github-example-md-8e8e22f39cc496f55b50.js.map