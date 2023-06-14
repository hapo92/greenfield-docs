"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(a),p=l,u=h["".concat(s,".").concat(p)]||h[p]||g[p]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={title:"Data Availability Challenge",order:8},r="Data Availability Challenge",o={unversionedId:"guide/greenfield-blockchain/modules/data-availability-challenge",id:"guide/greenfield-blockchain/modules/data-availability-challenge",title:"Data Availability Challenge",description:"Data availability refers to the correct storage and accessibility of data on storage providers for users.",source:"@site/docs/guide/greenfield-blockchain/modules/data-availability-challenge.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/data-availability-challenge",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/data-availability-challenge",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/modules/data-availability-challenge.md",tags:[],version:"current",frontMatter:{title:"Data Availability Challenge",order:8},sidebar:"guideSidebar",previous:{title:"Governance",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/governance"},next:{title:"World State",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/world-state"}},s={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Create Challenge",id:"create-challenge",level:2},{value:"Submitted Challenges",id:"submitted-challenges",level:3},{value:"Random Challenges",id:"random-challenges",level:3},{value:"Attest Challenge",id:"attest-challenge",level:2},{value:"Challenge Heartbeat",id:"challenge-heartbeat",level:2},{value:"Challenge Events",id:"challenge-events",level:2},{value:"Start Event",id:"start-event",level:3},{value:"Complete Event",id:"complete-event",level:3},{value:"Heartbeat Event",id:"heartbeat-event",level:3},{value:"RANDAO",id:"randao",level:2}],c={toc:d},h="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-availability-challenge"},"Data Availability Challenge"),(0,l.kt)("p",null,"Data availability refers to the correct storage and accessibility of data on storage providers for users.\nTo determine if a specific data segment or piece is correctly stored on a designated storage provider,\na challenge module is employed. The challenge comprises three steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The validator requests the data piece and local manifest of the object from the challenged storage provider.\nIf the expected piece is not obtained, it is considered unavailable."),(0,l.kt)("li",{parentName:"ol"},"The validator computes the hash of the local manifest and compares it with the global manifest recorded in the\nobject's metadata. If they differ, the piece is considered unavailable."),(0,l.kt)("li",{parentName:"ol"},"The validator computes the hash of the challenged data piece and compares it with the data recorded in the local\nmanifest. If they differ, the piece is considered unavailable.")),(0,l.kt)("p",null,"The validator collects challenge signatures and if more than two-thirds of validators vote the same result,\nthose signatures are aggregated to create a data challenge attestation. This attestation is then submitted on-chain\nvia a transaction that awards the first submitter. Subsequent submissions of the same attestation will fail verification.\nOnly the validators whose votes were included in the attestation are rewarded, therefore, some validators who voted but\nwere not included will not be rewarded for the data availability challenge."),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/bnb-chain/greenfield-whitepaper/main/assets/19.2%20Data%20Availability%20Challenge.jpg",alt:"Data Availability Challenge Workflow"})),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("i",null,"Data Availability Challenge Workflow")),(0,l.kt)("p",null,"The Workflow for the Data Availability Challenge is as Follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Any user can submit a transaction to challenge the availability of data. The related information will be recorded\ntemporarily on-chain and also be included in typed events once the transaction is executed."),(0,l.kt)("li",{parentName:"ol"},"At the end block phase of each block, a random algorithm is used to generate data availability challenge events by\ndefault. All challenge information will be stored until confirmed or expired."),(0,l.kt)("li",{parentName:"ol"},"The off-chain data availability detection module tracks on-chain challenge information and initiates off-chain detection."),(0,l.kt)("li",{parentName:"ol"},"The validator uses their BLS private key to sign a data challenge vote that includes block header, data challenge information, and the result."),(0,l.kt)("li",{parentName:"ol"},"The validator collates data challenge votes, aggregates the signatures, and creates a data challenge attestation."),(0,l.kt)("li",{parentName:"ol"},"Once 2/3 validators have reached an agreement, the validator submits the attestation."),(0,l.kt)("li",{parentName:"ol"},"The data challenge attestation transaction is executed, and the attestation is verified, and the challenge storage is cleared.\nMalicious nodes are penalized, and rewards are distributed. A cooling-off period is implemented to avoid repeated attacks."),(0,l.kt)("li",{parentName:"ol"},"During the cooling-off period, the validator can regain, recover, or shift the data.\nOnce the cooling-off period expires, the data can be challenged again. If the data is still unavailable, the validator will be penalized once more.")),(0,l.kt)("h2",{id:"create-challenge"},"Create Challenge"),(0,l.kt)("p",null,"There are two ways to trigger challenges."),(0,l.kt)("h3",{id:"submitted-challenges"},"Submitted Challenges"),(0,l.kt)("p",null,"Anyone can send ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgSubmit")," messages to trigger data availability challenges, if he/she finds that the data is not\navailable or incorrect stored. When submitting the challenge, user can choose the segment/piece of an object to\nchallenge or let the blockchain randomly selects a segment/piece to challenge.\nThe submitter will be called as challenger, and will be rewarded if the challenge\nsucceeds later."),(0,l.kt)("h3",{id:"random-challenges"},"Random Challenges"),(0,l.kt)("p",null,"In each block, challenges will be automatically created, to challenge different objects which are stored on different\nstorage providers. The count of random challenges in each block is governed, and can be changed by submitting proposals.\nTo support randomness, a ",(0,l.kt)("em",{parentName:"p"},"RANDAO")," mechanism is introduced in Greenfield blockchain. For more information about ",(0,l.kt)("em",{parentName:"p"},"RANDAO"),",\nplease refer to the following section."),(0,l.kt)("h2",{id:"attest-challenge"},"Attest Challenge"),(0,l.kt)("p",null,"Each validator will listen to the events of challenge creations, and vote the challenge by using its own BLS key.\nWhen there are more than 2/3 votes are collected, an attestation message ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgAttest")," will be submitted to slash the\nchallenged storage provider. And the voted validators, the attestation submitter, and the challenger (if there is) will\nbe rewarded accordingly."),(0,l.kt)("h2",{id:"challenge-heartbeat"},"Challenge Heartbeat"),(0,l.kt)("p",null,"To indicate the off-chain challenge detect module is running correctly, validators have to vote and submit\n",(0,l.kt)("inlineCode",{parentName:"p"},"MsgHeartbeat")," messages periodically to the blockchain. During processing this kind of messages, the income for securing\nstored objects will be transferred from payment account to distribution account,\nand income can be withdrawn by validators and their delegators later."),(0,l.kt)("h2",{id:"challenge-events"},"Challenge Events"),(0,l.kt)("p",null,"The following events are introduced for data availability challenge. For the detailed definition, please refer\nto ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/challenge/events.proto"},"this"),"."),(0,l.kt)("h3",{id:"start-event"},"Start Event"),(0,l.kt)("p",null,"This kind of events indicates that a data availability challenge is triggered on-chain. The off-chain module should\nmonitor the events, asking the according storage prover for data, compute hashes and do the comparison, and submit\nan attestation if needed."),(0,l.kt)("h3",{id:"complete-event"},"Complete Event"),(0,l.kt)("p",null,"When an attestation is received and accepted, then this kind of events will be emitted. In the events, the slash\nand rewards amounts are also recorded."),(0,l.kt)("h3",{id:"heartbeat-event"},"Heartbeat Event"),(0,l.kt)("p",null,"Heartbeat only includes the necessary information for liveness-check purpose. "),(0,l.kt)("h2",{id:"randao"},"RANDAO"),(0,l.kt)("p",null,"To support random challenges, a RANDAO mechanism is introduced like the following.\nOverall, the idea is very similar to the RANDAO in Ethereum beacon chain, you can refer to\n",(0,l.kt)("a",{parentName:"p",href:"https://eth2book.info/altair/part2/building_blocks/randomness"},"here")," for more information."),(0,l.kt)("p",null,"When proposing a new block, the proposer, i.e. a validator, needs to sign the current block number to get\na ",(0,l.kt)("inlineCode",{parentName:"p"},"randao reveal"),", and mixes the reveal into randao result ",(0,l.kt)("inlineCode",{parentName:"p"},"randao mix")," by using ",(0,l.kt)("inlineCode",{parentName:"p"},"xor")," operation.\nThe other validators will verify the ",(0,l.kt)("inlineCode",{parentName:"p"},"randao reveal")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"randao mix")," by following steps: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The signature is verified using the proposer's public key. It means that the proposer has almost no choice\nabout what it contributes to the RANDAO. It either contributes the correct signature over the block number,\nor it gives up the right for proposing the current block. If the validator does propose the current block,\nit still cannot predict the reveal from other validators, and even be slashed for stopping proposing blocks."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"randao mix")," is correctly updated by using ",(0,l.kt)("inlineCode",{parentName:"li"},"xor")," operation.")),(0,l.kt)("p",null,"The implementation is conducted in Tendermint layer - a new field called ",(0,l.kt)("inlineCode",{parentName:"p"},"randao_mix")," is added into block header.\nGreenfield blockchain then uses the field as a seed to randomly pick objects and storage providers to challenge\nin each block."))}g.isMDXComponent=!0}}]);