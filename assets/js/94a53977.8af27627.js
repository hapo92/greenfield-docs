"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8609],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),g=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=g(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),p=g(a),u=r,k=p["".concat(o,".").concat(u)]||p[u]||m[u]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[p]="string"==typeof t?t:r,i[1]=d;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73485:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_label:"Gas and Fees",order:3},i="Gas and Fees",d={unversionedId:"guide/core-concept/gas-fees",id:"guide/core-concept/gas-fees",title:"Gas and Fees",description:"This document describes how Greenfield charge fee to different transaction types and the token economics of BNB Greenfield.",source:"@site/docs/guide/core-concept/gas-fees.md",sourceDirName:"guide/core-concept",slug:"/guide/core-concept/gas-fees",permalink:"/greenfield-docs/docs/guide/core-concept/gas-fees",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/core-concept/gas-fees.md",tags:[],version:"current",frontMatter:{sidebar_label:"Gas and Fees",order:3},sidebar:"guideSidebar",previous:{title:"Data Storage",permalink:"/greenfield-docs/docs/guide/core-concept/data-storage"},next:{title:"Overview",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/overview"}},o={},g=[{value:"Introduction to <code>Gas</code> and <code>Fees</code>",id:"introduction-to-gas-and-fees",level:2},{value:"GasHub",id:"gashub",level:2},{value:"Block Gas Meter",id:"block-gas-meter",level:3},{value:"Fee Table",id:"fee-table",level:2},{value:"Usage of BNB Token on BNB Greenfield",id:"usage-of-bnb-token-on-bnb-greenfield",level:2},{value:"Revenue Sharing",id:"revenue-sharing",level:2},{value:"Circulation Model",id:"circulation-model",level:2},{value:"Genesis Setup",id:"genesis-setup",level:2}],s={toc:g},p="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gas-and-fees"},"Gas and Fees"),(0,r.kt)("p",null,"This document describes how Greenfield charge fee to different transaction types and the token economics of BNB Greenfield."),(0,r.kt)("h2",{id:"introduction-to-gas-and-fees"},"Introduction to ",(0,r.kt)("inlineCode",{parentName:"h2"},"Gas")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"Fees")),(0,r.kt)("p",null,"In the Cosmos SDK, ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," unit is designated to track resource consumption during execution."),(0,r.kt)("p",null,"On application-specific blockchains such as Greenfield, computational cost of storage is no\nlonger the main factor in determining transaction fees, but rather, it is the incentive mechanism\nof Greenfield. For instance, creating and deleting a storage object use similar I/O and computational\nresources, but Greenfield encourages users to delete unused storage objects to optimize storage space,\nresulting in lower transaction fees."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Greenfield Blockchain has taken a different approach from the gas meter design in Cosmos SDK. Instead,\nit has redesigned the gashub module to calculate gas consumption based on the type and content of the transaction,\nrather than just the consumption of storage and computational resources.")),(0,r.kt)("p",null,"Unlike networks like Ethereum, Greenfield transactions do not feature a gas price field.\nInstead, they consist of a fee and a gas wanted field. The gas price is inferred during the transaction pre-execution process,\nand the transactions are queued based on the gas price"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This means that Greenfield does not refund any excess gas fees to the transaction sender.\nTherefore, when constructing transactions, it is important to exercise caution when specifying the fees."))),(0,r.kt)("h2",{id:"gashub"},"GasHub"),(0,r.kt)("p",null,"All transaction types need to register their gas calculation logic to gashub. Currently, four types of calculation logic\nare supported:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_FixedType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_FixedType struct {\n    FixedType *MsgGasParams_FixedGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_GrantType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_GrantType struct {\n    GrantType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_MultiSendType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_MultiSendType struct {\n    MultiSendType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_GrantAllowanceType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_GrantAllowanceType struct {\n    GrantAllowanceType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("h3",{id:"block-gas-meter"},"Block Gas Meter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ctx.BlockGasMeter()")," serves as the gas meter designed to monitor and restrict gas consumption per block."),(0,r.kt)("p",null,"However, certain types of transactions may incur a high cost in Greenfield, leading to significant gas consumption.\nConsequently, Greenfield refrains from imposing any gas usage constraints on a block. Instead, Greenfield sets a block\nsize limit, preventing blocks from exceeding 1MB in size and mitigating the risk of excessively large blocks."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is no gas limitation of a block on Greenfield Blockchain.")),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("p",null,"Please note that the gas fee can be updated through governance and may not be immediately reflected in this\ndocumentation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Msg Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Gas Used"),(0,r.kt)("th",{parentName:"tr",align:null},"Gas Price"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Fee(assuming BNB $300)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.auth.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.bank.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.consensus.v1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.crisis.v1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.crosschain.v1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.crosschain.v1.MsgUpdateChannelPermissions"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.distribution.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gashub.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gov.v1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.mint.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.oracle.v1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.slashing.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.bridge.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.sp.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.payment.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.challenge.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.permission.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.authz.v1beta1.MsgExec"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.authz.v1beta1.MsgRevoke"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.bank.v1beta1.MsgSend"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.distribution.v1beta1.MsgSetWithdrawAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.feegrant.v1beta1.MsgRevokeAllowance"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gov.v1.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gov.v1.MsgSubmitProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"200000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gov.v1.MsgVote"),(0,r.kt)("td",{parentName:"tr",align:null},"20000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.gov.v1.MsgVoteWeighted"),(0,r.kt)("td",{parentName:"tr",align:null},"20000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.oracle.v1.MsgClaim"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00150000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.slashing.v1beta1.MsgUnjail"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgBeginRedelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgCancelUnbondingDelegation"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgCreateValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"200000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgEditValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"20000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.staking.v1beta1.MsgUndelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.bridge.MsgTransferOut"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.sp.MsgCreateStorageProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"200000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.sp.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.sp.MsgEditStorageProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"20000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.sp.MsgUpdateSpStoragePrice"),(0,r.kt)("td",{parentName:"tr",align:null},"20000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30.00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgCreateBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"2400"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDeleteBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgMirrorBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgUpdateBucketInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgCreateObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgSealObject"),(0,r.kt)("td",{parentName:"tr",align:null},"120"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00018000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgMirrorObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgRejectSealObject"),(0,r.kt)("td",{parentName:"tr",align:null},"12000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.01800000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDeleteObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgCopyObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgCancelCreateObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgUpdateObjectInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDiscontinueObject"),(0,r.kt)("td",{parentName:"tr",align:null},"2400"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDiscontinueBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"2400"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgCreateGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"2400"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDeleteGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgLeaveGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgUpdateGroupMember"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgUpdateGroupExtra"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgMirrorGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgPutPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"2400"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.storage.MsgDeletePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.payment.MsgCreatePaymentAccount"),(0,r.kt)("td",{parentName:"tr",align:null},"200000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.30000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.payment.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.payment.MsgWithdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.payment.MsgDisableRefund"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.challenge.MsgSubmit"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.challenge.MsgAttest"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00015000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgCreateGlobalVirtualGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$1.50000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgDeleteGlobalVirtualGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgWithdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgSettle"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greenfield.virtualgroup.MsgUpdateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"1200"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00180000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.authz.v1beta1.MsgGrant"),(0,r.kt)("td",{parentName:"tr",align:null},"800 + 800 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.bank.v1beta1.MsgMultiSend"),(0,r.kt)("td",{parentName:"tr",align:null},"800 + 800 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos.feegrant.v1beta1.MsgGrantAllowance"),(0,r.kt)("td",{parentName:"tr",align:null},"800 + 800 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")))),(0,r.kt)("h2",{id:"usage-of-bnb-token-on-bnb-greenfield"},"Usage of BNB Token on BNB Greenfield"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BNB")," remains the main utility token on Greenfield. ",(0,r.kt)("strong",{parentName:"p"},"BNB")," can be transferred from BSC to Greenfield blockchain, and vice versa. It is used as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking token"),": This token allows user to self-delegate and delegate as stake, which can earn gas rewards but may result in slash for improper behavior."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gas token"),": This token is used to pay the gas to submit transactions on the Greenfield blockchain. This includes both Greenfield local transactions or cross-chain transactions between Greenfield and BSC. The fee is charged at the time of transaction submission and dispatched to Greenfield ",(0,r.kt)("inlineCode",{parentName:"li"},"validators"),", and potentially to Greenfield ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Providers")," for certain transactions. The fee distribution is done in-protocol and a protocol specification is ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/spec/fee_distribution/f1_fee_distr.pdf"},"described here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage service fee token"),": This token is used to pay fees for object storage and download bandwidth data package. Fees are charged as time goes on and dispatched to Greenfield ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Providers"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance token"),": BNB holders may govern the Greenfield by voting on proposals with their staked BNB (not available at launch).")),(0,r.kt)("h2",{id:"revenue-sharing"},"Revenue Sharing"),(0,r.kt)("p",null,"The main economic drive of Greenfield comes from their ",(0,r.kt)("inlineCode",{parentName:"p"},"storage providers")," who charge users fees for their storage services.\nMeanwhile, ",(0,r.kt)("inlineCode",{parentName:"p"},"validators")," play a crucial role in supervising the network's security, maintaining stability and ensuring service quality.\nWhile ",(0,r.kt)("inlineCode",{parentName:"p"},"validators")," may earn transaction fees, this alone may not be enough to guarantee sufficient staking for network security.\nTherefore, Greenfield has designed ",(0,r.kt)("inlineCode",{parentName:"p"},"validators")," to receive a reasonable proportion of fees from the storage services they provide.\nThis approach ensures that users' data is not only stored but that the network is also safe and secure."),(0,r.kt)("h2",{id:"circulation-model"},"Circulation Model"),(0,r.kt)("p",null,"In Greenfield, there is no inflation of BNB because of its dual-chain structure. Instead, cross-chain transfers are used to allow BNB to flow bi-directionally between Greenfield and Smart Chain. As a result, the total circulation of BNB on Greenfield can fluctuate."),(0,r.kt)("p",null,"Greenfield use Lock/Unlock mechanism to ensure the total circulation of BNB on both chain is always less than the initial total supply:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The transfer-out blockchain will lock the amount from source owner addresses into a module account or smart contract.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The transfer-in blockchain will unlock the amount from module account or contract and send it to target addresses.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Both networks will never mint BNB."))),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/core-concept/programmability"},"cross chain model")," to get more details about the mechanism."),(0,r.kt)("h2",{id:"genesis-setup"},"Genesis Setup"),(0,r.kt)("p",null,"BNB is transferred from BSC to Greenfield as the first cross-chain action. The initial validator set and ",(0,r.kt)("inlineCode",{parentName:"p"},"storage provider"),' of Greenfield at the genesis will first lock a certain amount of BNB into the "Greenfield Token Hub" contract on BSC. This contract is used as part of the native bridge for BNB transferring after the genesis. These initial locked BNB will be used as the self-stake of ',(0,r.kt)("inlineCode",{parentName:"p"},"validators"),", the deposit of ",(0,r.kt)("inlineCode",{parentName:"p"},"storage provider")," and early days gas fees."),(0,r.kt)("p",null,"The initial BNB allocation on greenfield is around 1M BNB. (TODO: not finalized)"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"No initial donors, foundation, or company will get funds in the genesis setup."),(0,r.kt)("p",{parentName:"admonition"},"No token inflation.")))}m.isMDXComponent=!0}}]);