"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(r),u=n,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"Ecosystem",order:2},o="Ecosystem",s={unversionedId:"guide/getting-started/ecosystem",id:"guide/getting-started/ecosystem",title:"Ecosystem",description:"From Storage Provider and BNB staker to developers, there are a variety of individuals and entities that play a critical",source:"@site/docs/guide/getting-started/ecosystem.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/ecosystem",permalink:"/greenfield-docs/docs/guide/getting-started/ecosystem",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/getting-started/ecosystem.md",tags:[],version:"current",frontMatter:{title:"Ecosystem",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/guide/getting-started/overview"},next:{title:"Wallet Configuration",permalink:"/greenfield-docs/docs/guide/getting-started/wallet-configuration"}},l={},d=[{value:"Greenfield Actors",id:"greenfield-actors",level:2},{value:"Validators",id:"validators",level:3},{value:"Storage Providers (SPs)",id:"storage-providers-sps",level:3},{value:"Greenfield Features",id:"greenfield-features",level:2},{value:"dApps",id:"dapps",level:3},{value:"Relayers",id:"relayers",level:3},{value:"Challenge Verifier",id:"challenge-verifier",level:3},{value:"How to Participate in the Ecosystem",id:"how-to-participate-in-the-ecosystem",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ecosystem"},"Ecosystem"),(0,n.kt)("p",null,"From Storage Provider and BNB staker to developers, there are a variety of individuals and entities that play a critical\nrole in the growth and success of Greenfield. We'll dive into the unique contributions and responsibilities of\neach group, and explore how they work together to shape the future of Greenfield."),(0,n.kt)("h2",{id:"greenfield-actors"},"Greenfield Actors"),(0,n.kt)("h3",{id:"validators"},"Validators"),(0,n.kt)("p",null,"The Greenfield blockchain operates as a Proof-of-Stake (PoS) blockchain and has its own set of validators\nthat are chosen through an election process based on PoS logic."),(0,n.kt)("p",null,"The Validators play a crucial role in ensuring the security of the Greenfield blockchain and are actively\ninvolved in the governance and staking of the blockchain. They also form a peer-to-peer network that functions\nsimilarly to other PoS blockchain networks."),(0,n.kt)("p",null,"In addition to their governance responsibilities, validators also accept and process transactions, which enables users\nto operate on the objects stored on the Greenfield blockchain. They are responsible for maintaining the metadata of\nGreenfield and ensure that the blockchain state acts as a control panel for both Storage Providers (SPs) and users.\nBoth parties rely on the validators to accurately update and utilize this state in order to operate, store,\nand access their object storage."),(0,n.kt)("h3",{id:"storage-providers-sps"},"Storage Providers (SPs)"),(0,n.kt)("p",null,"Storage Providers (SPs) are an essential component of the Greenfield blockchain, providing storage service\ninfrastructures that can be offered by both individuals and organizations. SPs utilize the Greenfield blockchain\nas the ledger and single source of truth to maintain secure and reliable storage."),(0,n.kt)("p",null,"Each SP is responsible for processing user requests to upload and download data, acting as the gatekeeper for\nuser rights and authentications. As a result, they play a critical role in ensuring that user data remains secure\nand accessible at all times."),(0,n.kt)("p",null,"For more information about the storage providers, have a look at the ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider"},"Storage Provider's page"),"."),(0,n.kt)("h2",{id:"greenfield-features"},"Greenfield Features"),(0,n.kt)("h3",{id:"dapps"},"dApps"),(0,n.kt)("p",null,"Greenfield dApps are applications that leverage the unique features of the Greenfield blockchain to\nsolve various problems for their users. These dApps are designed to utilize Greenfield storage and\nrelated economic traits, providing a reliable and secure platform for creating and managing data."),(0,n.kt)("p",null,"Users can interact with the BNB Greenfield Core Infrastructure through the use of BNB Greenfield dApps,\nwhich are decentralized applications that enable seamless interaction with the Greenfield ecosystem. Furthermore,\nthe Greenfield blockchain provides an intuitive smart contract library on the cross-chain facility, making it\neasy for dApp developers to integrate these features into their applications.\nThis user-friendly approach allows developers to efficiently build and deploy\ndApps that can solve real-world problems."),(0,n.kt)("h3",{id:"relayers"},"Relayers"),(0,n.kt)("p",null,"The Greenfield Relayer is a powerful bi-directional relaying service designed to facilitate seamless communication between\nGreenfield and BSC. It can only be operated by Greenfield validators and functions as a standalone process."),(0,n.kt)("p",null,'This innovative system independently monitors and tracks cross-chain events that take place on both the Greenfield and\nBSC networks, storing this data securely in a database. When an event is confirmed, the relayer generates a Boneh\u2013Lynn\u2013Shacham\n(BLS) signed message that is then shared through the P2P network on the Greenfield network, known as "the vote".'),(0,n.kt)("p",null,"As more votes are collected, the Greenfield Relayer assembles the necessary cross-chain package transaction and\nsubmits it to either the BSC or Greenfield network. This streamlined process ensures that communication between the two\nnetworks is efficient and error-free."),(0,n.kt)("h3",{id:"challenge-verifier"},"Challenge Verifier"),(0,n.kt)("p",null,"Challenge Verifier is an off-chain service that verifies data availability, data integrity and service quality by monitoring storage provider\u2019s activities. This mechanism works by penalizing and gradually eliminating storage providers with poor service quality,\nin order to ensure the good performance and reliability of the entire network."),(0,n.kt)("p",null,"To elaborate, Challenge Verifier constantly checks the storage providers in the network by tasking them with challenges\nto prove their reliability. The challenges may include storing specific pieces of data or responding to requests within\na certain time limit. Providers that fail these challenges will be punished by slash their staked BNB."),(0,n.kt)("p",null,"By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed\nto participate, protecting the network from any potential data loss, corruption, or low-quality service.\nAdditionally, Challenge Verifier creates a competitive environment for storage providers, motivating them to\ncontinuously improve their services to avoid penalties and stay in the network."),(0,n.kt)("p",null,"Challenge Verifier can only be operated by Greenfield validators right now, and will open to public in the future."),(0,n.kt)("h2",{id:"how-to-participate-in-the-ecosystem"},"How to Participate in the Ecosystem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/api/blockchain-cli/validator-staking"},"Become A Validator"),": validators secure the Greenfield by validating and relaying transactions,\nproposing, verifying and finalizing blocks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/api/blockchain-cli/storage-provider"},"Become A Storage Provider"),": SPs store the objects' real data, i.e. the payload data. and get paid\nby providing storage services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/api/blockchain-cli/storage"},"Control Your Data"),": store and manage your data in a decentralized way, control and own it all by yourself.")))}p.isMDXComponent=!0}}]);