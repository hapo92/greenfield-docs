"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={title:"Ecosystem",order:2},o="Ecosystem",l={unversionedId:"guide/introduction/ecosystem",id:"guide/introduction/ecosystem",title:"Ecosystem",description:"From storage provider and BNB staker to developers, there are a variety of individuals and entities that play a critical",source:"@site/docs/guide/introduction/ecosystem.md",sourceDirName:"guide/introduction",slug:"/guide/introduction/ecosystem",permalink:"/greenfield-docs/docs/guide/introduction/ecosystem",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/introduction/ecosystem.md",tags:[],version:"current",frontMatter:{title:"Ecosystem",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/guide/introduction/overview"},next:{title:"Token Economics",permalink:"/greenfield-docs/docs/guide/introduction/token-economics"}},s={},d=[{value:"Greenfield Actors",id:"greenfield-actors",level:2},{value:"Validators",id:"validators",level:3},{value:"Storage Providers (SPs)",id:"storage-providers-sps",level:3},{value:"Greenfield Features",id:"greenfield-features",level:2},{value:"dApps",id:"dapps",level:3},{value:"Relayers",id:"relayers",level:3},{value:"Challenge Verifier",id:"challenge-verifier",level:3},{value:"How to Participate in the Ecosystem",id:"how-to-participate-in-the-ecosystem",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ecosystem"},"Ecosystem"),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"storage provider")," and BNB staker to developers, there are a variety of individuals and entities that play a critical\nrole in the growth and success of Greenfield. We'll dive into the unique contributions and responsibilities of\neach group, and explore how they work together to shape the future of Greenfield."),(0,i.kt)("h2",{id:"greenfield-actors"},"Greenfield Actors"),(0,i.kt)("h3",{id:"validators"},"Validators"),(0,i.kt)("p",null,"The Greenfield blockchain operates as a Proof-of-Stake (PoS) blockchain and has its own set of ",(0,i.kt)("inlineCode",{parentName:"p"},"validators"),"\nthat are chosen through an election process based on PoS logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," play a crucial role in ensuring the security of the Greenfield blockchain and are actively\ninvolved in the governance and staking of the blockchain. They also form a peer-to-peer network that functions\nsimilarly to other PoS blockchain networks."),(0,i.kt)("p",null,"In addition to their governance responsibilities, ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," also accept and process transactions, which enables users\nto operate on the objects stored on the Greenfield blockchain. They are responsible for maintaining the metadata of\nGreenfield and ensure that the blockchain state acts as a control panel for both ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage Providers (SPs)")," and users.\nBoth parties rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," to accurately update and utilize this state in order to operate, store,\nand access their object storage."),(0,i.kt)("h3",{id:"storage-providers-sps"},"Storage Providers (SPs)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Storage Providers (SPs)")," are an essential component of the Greenfield blockchain, providing storage service\ninfrastructures that can be offered by both individuals and organizations. ",(0,i.kt)("inlineCode",{parentName:"p"},"SPs")," utilize the Greenfield blockchain\nas the ledger and single source of truth to maintain secure and reliable storage."),(0,i.kt)("p",null,"Each SP is responsible for processing user requests to upload and download data, acting as the gatekeeper for\nuser rights and authentications. As a result, they play a critical role in ensuring that user data remains secure\nand accessible at all times."),(0,i.kt)("p",null,"For more information about the storage providers, have a look at the ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider"},"Storage Provider's page"),"."),(0,i.kt)("h2",{id:"greenfield-features"},"Greenfield Features"),(0,i.kt)("h3",{id:"dapps"},"dApps"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Greenfield dApps")," are applications that leverage the unique features of the Greenfield blockchain to\nsolve various problems for their users. These ",(0,i.kt)("inlineCode",{parentName:"p"},"dApps")," are designed to utilize Greenfield storage and\nrelated economic traits, providing a reliable and secure platform for creating and managing data."),(0,i.kt)("p",null,"Users can interact with the BNB Greenfield Core Infrastructure through the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"BNB Greenfield dApps"),",\nwhich are decentralized applications that enable seamless interaction with the Greenfield ecosystem. Furthermore,\nthe Greenfield blockchain provides an intuitive smart contract library on the cross-chain facility, making it\neasy for dApp developers to integrate these features into their applications.\nThis user-friendly approach allows developers to efficiently build and deploy\n",(0,i.kt)("inlineCode",{parentName:"p"},"dApps")," that can solve real-world problems."),(0,i.kt)("h3",{id:"relayers"},"Relayers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Greenfield Relayer")," is a powerful bi-directional relaying service designed to facilitate seamless communication between\nGreenfield and BSC. It can only be operated by Greenfield validators and functions as a standalone process."),(0,i.kt)("p",null,"This innovative system independently monitors and tracks cross-chain events that take place on both the Greenfield and\nBSC networks, storing this data securely in a database. When an event is confirmed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"relayer")," generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Boneh\u2013Lynn\u2013Shacham"),'\n(BLS) signed message that is then shared through the P2P network on the Greenfield network, known as "the vote".'),(0,i.kt)("p",null,"As more votes are collected, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Greenfield Relayer")," assembles the necessary cross-chain package transaction and\nsubmits it to either the BSC or Greenfield network. This streamlined process ensures that communication between the two\nnetworks is efficient and error-free."),(0,i.kt)("h3",{id:"challenge-verifier"},"Challenge Verifier"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," is an off-chain service that verifies data availability, data integrity and service quality by monitoring ",(0,i.kt)("inlineCode",{parentName:"p"},"storage provider"),"\u2019s activities. This mechanism works by penalizing and gradually eliminating ",(0,i.kt)("inlineCode",{parentName:"p"},"storage providers")," with poor service quality,\nin order to ensure the good performance and reliability of the entire network."),(0,i.kt)("p",null,"To elaborate, ",(0,i.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," constantly checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage providers")," in the network by tasking them with challenges\nto prove their reliability. The challenges may include storing specific pieces of data or responding to requests within\na certain time limit. Providers that fail these challenges will be punished by slash their staked BNB."),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"Challenge Verifier"),", the network can ensure that only reliable and trustworthy ",(0,i.kt)("inlineCode",{parentName:"p"},"storage providers")," are allowed\nto participate, protecting the network from any potential data loss, corruption, or low-quality service.\nAdditionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," creates a competitive environment for ",(0,i.kt)("inlineCode",{parentName:"p"},"storage providers"),", motivating them to\ncontinuously improve their services to avoid penalties and stay in the network."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," can only be operated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Greenfield validators")," right now, and will open to public in the future."),(0,i.kt)("h2",{id:"how-to-participate-in-the-ecosystem"},"How to Participate in the Ecosystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking"},"Become A Validator"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"validators")," secure the Greenfield by validating and relaying transactions,\nproposing, verifying and finalizing blocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/storage-provider"},"Become A Storage Provider"),": SPs store the objects' real data, i.e. the payload data. and get paid\nby providing storage services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/storage"},"Control Your Data"),": store and manage your data in a decentralized way, control and own it all by yourself.")))}h.isMDXComponent=!0}}]);