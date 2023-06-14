"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Blockchain Events",icon:"actions",order:2},i="Blockchain Events",s={unversionedId:"api-sdk/events",id:"api-sdk/events",title:"Blockchain Events",description:"There are two categories of events in the cosmos-sdk documentation:",source:"@site/docs/api-sdk/events.md",sourceDirName:"api-sdk",slug:"/api-sdk/events",permalink:"/greenfield-docs/docs/api-sdk/events",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/events.md",tags:[],version:"current",frontMatter:{title:"Blockchain Events",icon:"actions",order:2},sidebar:"apiReferenceSidebar",previous:{title:"Blockchain GRPC REST",permalink:"/greenfield-docs/docs/greenfield-api/grpc-rest"},next:{title:"Endpoints",permalink:"/greenfield-docs/docs/api-sdk/endpoints"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockchain-events"},"Blockchain Events"),(0,a.kt)("p",null,"There are two categories of events in the cosmos-sdk documentation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Old modules may not have typed events, which means their events are listed in a\nMarkdown document under the module's spec folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"New modules introduced in the cosmos-sdk or developed by the Greenfield team emit typed events,\nwhich are defined in a protobuf file. Therefore, for these modules, we can refer directly to their protobuf file."))),(0,a.kt)("p",null,"Here are the events grouped by modules that are emitted by the Greenfield blockchain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/authz/v1beta1/event.proto"},"Authz"),": module to grant or revoke privileges to an account;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/bank/spec/04_events.md"},"Bank"),": module to transfer, delegate, mint or burn tokens;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/bridge/event.proto"},"Bridge"),": module to make cross chain transfers between the Greenfield blockchain and the BSC;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/challenge/events.proto"},"Challenge"),": module to generate and attest challenges;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/distribution/spec/06_events.md"},"Distribution"),": module to withdraw addresses, delegator rewards or validator commissions;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/feegrant/spec/04_events.md"},"Feegrant"),": module to manage allowances;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/gov/spec/04_events.md"},"Gov"),": module to submit proposal or vote for proposals;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/oracle/v1/event.proto"},"Oracle"),": module to claim cross chain packages;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/payment/events.proto"},"Payment"),": module to manage the streaming payment; ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/slashing/spec/06_events.md"},"Slashing"),": module to penalize users of the chain;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/develop/proto/greenfield/sp/events.proto"},"Storage Provider"),": module to manage storage providers;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/storage/events.proto"},"Storage"),": module to manage buckets, objects or groups;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/staking/spec/07_events.md"},"Staking"),": module to delegate."))),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/architecture/adr-032-typed-events.md"},"ADR")," also\nproposes adding affordances to emit and consume these events. For developers, they will only need to write ",(0,a.kt)("inlineCode",{parentName:"p"},"EventHandlers"),"\nwhich define the actions they desire to take."))}d.isMDXComponent=!0}}]);