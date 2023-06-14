"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8922],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>_});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=t,_=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(_,i(i({ref:r},c),{},{components:n})):a.createElement(_,i({ref:r},c))}));function _(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82008:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),t=(n(67294),n(3905));const o={title:"Command Line",dir:{order:2},order:1},i="Command-Line Interface",l={unversionedId:"guide/storage-provider/cli/cli",id:"guide/storage-provider/cli/cli",title:"Command Line",description:"There is no set way to create a CLI, but Greenfield Storage Provider typically use the urfave cli library v2.",source:"@site/docs/guide/storage-provider/cli/cli.md",sourceDirName:"guide/storage-provider/cli",slug:"/guide/storage-provider/cli/",permalink:"/greenfield-docs/docs/guide/storage-provider/cli/",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/cli/cli.md",tags:[],version:"current",frontMatter:{title:"Command Line",dir:{order:2},order:1},sidebar:"guideSidebar",previous:{title:"Stop Serving",permalink:"/greenfield-docs/docs/guide/storage-provider/services/stopserving"},next:{title:"SP Compiling and Dependencies",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences"}},s={},d=[{value:"Common Command",id:"common-command",level:2},{value:"Global Options",id:"global-options",level:2},{value:"Config",id:"config",level:3},{value:"Database",id:"database",level:3},{value:"Logging",id:"logging",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Resource manager",id:"resource-manager",level:3}],c={toc:d},u="wrapper";function p(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"command-line-interface"},"Command-Line Interface"),(0,t.kt)("p",null,"There is no set way to create a CLI, but Greenfield Storage Provider typically use the ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/urfave/cli"},"urfave cli library v2"),".\nBuilding a CLI with urfave cli entails defining commands, arguments, and flags. Commands understand the\nactions users wish to take, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"config.dump")," cmd dumps default configuration for editing and ",(0,t.kt)("inlineCode",{parentName:"p"},"config.upload"),"\nuploads the configuration to db, all service gets the configuration from db with ",(0,t.kt)("inlineCode",{parentName:"p"},"--config.remote")," flag.\nUsers also supply ",(0,t.kt)("strong",{parentName:"p"},"Arguments"),", such as the db address that uploading configuration and flags to modify\nvarious aspects of the commands, such ",(0,t.kt)("inlineCode",{parentName:"p"},"--server gateway, uploader, downaloader")," starts the gateway, uploader\nand downloader services in one process, combines the required services arbitrarily."),(0,t.kt)("h2",{id:"common-command"},"Common Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp version\n\nGreenfield Storage Provider\n    __                                                       _     __\n    _____/ /_____  _________ _____ ____     ____  _________ _   __(_)___/ /__  _____\n    / ___/ __/ __ \\/ ___/ __  / __  / _ \\   / __ \\/ ___/ __ \\ | / / / __  / _ \\/ ___/\n    (__  ) /_/ /_/ / /  / /_/ / /_/ /  __/  / /_/ / /  / /_/ / |/ / / /_/ /  __/ /\n    /____/\\__/\\____/_/   \\__,_/\\__, /\\___/  / .___/_/   \\____/|___/_/\\__,_/\\___/_/\n    /____/       /_/\n\nVersion : v0.0.5\nBranch  : master\nCommit  : e67cceea015bba338084e7328724800fd40ba594\nBuild   : go1.20.1 darwin amd64 2023-04-05 21:28\n")),(0,t.kt)("p",null,"Dump default configuration to the './config.toml' file for editing"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp config.dump\n")),(0,t.kt)("p",null,"Upload the config file to db"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp config.upload\n")),(0,t.kt)("p",null,"List the services in greenfield storage provider"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp list\n")),(0,t.kt)("p",null,"Create Secp256k1 key pairs for encrypting p2p protocol msg and identifying p2p node"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp p2p.create.key\n")),(0,t.kt)("h2",{id:"global-options"},"Global Options"),(0,t.kt)("h3",{id:"config"},"Config"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"--config value, -c value  Config file path for uploading to db (default: \"./config.toml\")\n--config.remote           Flag load config from remote db,if 'config.remote' be set, the db.user, db.password and db.address flags are needed, otherwise use the default value (default: false)\n")),(0,t.kt)("h3",{id:"database"},"Database"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'--db.address  value  DB listen address (default: "localhost:3306") [$SP_DB_ADDRESS]\n--db.database value  DB database name (default: "storage_provider_db") [$SP_DB_DATABASE]\n--db.password value  DB user password [$SP_DB_PASSWORD]\n--db.user     value  DB user name [$SP_DB_USER]\n')),(0,t.kt)("h3",{id:"logging"},"Logging"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'--log.level value  Log level (default: "info")\n--log.path  value  Log output file path (default: "./gnfd-sp.log")\n--log.std          Log output standard io (default: false)\n')),(0,t.kt)("h3",{id:"metrics"},"Metrics"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'--metrics             Enable metrics collection and reporting (default: false)\n--metrics.addr value  Enable stand-alone metrics HTTP server listening address (default: "localhost:24036")\n')),(0,t.kt)("h3",{id:"resource-manager"},"Resource manager"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"--rcmgr.config value  Resource manager config file path\n--rcmgr.disable       Disable resource manager (default: false)\n")))}p.isMDXComponent=!0}}]);