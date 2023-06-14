"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6235],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,r=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),i=l(t),p=c,f=i["".concat(s,".").concat(p)]||i[p]||m[p]||r;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=t.length,o=new Array(r);o[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[i]="string"==typeof e?e:c,o[1]=d;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},64867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(87462),c=(t(67294),t(3905));const r={title:"Payment",Order:6},o="Payment",d={unversionedId:"guide/greenfield-blockchain/cli/payment",id:"guide/greenfield-blockchain/cli/payment",title:"Payment",description:"Abstract",source:"@site/docs/guide/greenfield-blockchain/cli/payment.md",sourceDirName:"guide/greenfield-blockchain/cli",slug:"/guide/greenfield-blockchain/cli/payment",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/payment",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/cli/payment.md",tags:[],version:"current",frontMatter:{title:"Payment",Order:6},sidebar:"guideSidebar",previous:{title:"On-chain Governance",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/governance"},next:{title:"Validator Staking",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking"}},s={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"Query",id:"query",level:3},{value:"Transactions",id:"transactions",level:3}],u={toc:l},i="wrapper";function m(e){let{components:n,...t}=e;return(0,c.kt)(i,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"payment"},"Payment"),(0,c.kt)("h2",{id:"abstract"},"Abstract"),(0,c.kt)("p",null,"The payment module is responsible for the payment of the greenfield network. It is mainly used to manage the payment account of the user, and the payment account is used to pay the storage fee. The payment module also provides the function of automatic settlement of the user's payment account."),(0,c.kt)("p",null,"You can refer to the ",(0,c.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment"},"billing and payment section")," for more details."),(0,c.kt)("h2",{id:"quick-start"},"Quick Start"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'## Start a local cluster\n$ alias gnfd="./build/bin/gnfd"\n$ export user_addr=0x7fB0e7012e7445Ef235d5e90862c611110DbA5A6\n# create a new payment account\n$ gnfd tx payment create-payment-account --from user\n# query the payment accounts of specified user\n$ gnfd q payment get-payment-accounts-by-owner $user_addr\npaymentAccounts:\n- 0xbe527D0003108cF2b0b9917d7861e5517C896970\n$ export payment_account_addr=0xbe527D0003108cF2b0b9917d7861e5517C896970\n# query the payment account data just created\n$ gnfd q payment show-payment-account $payment_account_addr\npayment_account:\n  addr: 0xbe527D0003108cF2b0b9917d7861e5517C896970\n  owner: 0x7fB0e7012e7445Ef235d5e90862c611110DbA5A6\n  refundable: true\n# deposit 1 BNB to $payment_account_addr\n$ gnfd tx payment deposit $payment_account_addr 1000000000000000000 --from user\n# show stream record details\n$ gnfd q payment show-stream-record $payment_account_addr\nstream_record:\n  account: 0xbe527D0003108cF2b0b9917d7861e5517C896970\n  buffer_balance: "0"\n  crud_timestamp: "1680248479"\n  lock_balance: "0"\n  netflow_rate: "0"\n  out_flows: []\n  settle_timestamp: "0"\n  static_balance: "1000000000000000000"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n# withdraw 0.1 BNB from the payment_account\n$ gnfd tx payment withdraw $payment_account_addr 100000000000000000 --from user -y\n# set the payment account as non-refundable, after this operation, the user cannot withdraw the balance in the payment account\n$ gnfd tx payment disable-refund $payment_account_addr --from user -y\n')),(0,c.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,c.kt)("p",null,"A user can query and interact with the ",(0,c.kt)("inlineCode",{parentName:"p"},"payment")," module using the CLI."),(0,c.kt)("h3",{id:"query"},"Query"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,c.kt)("inlineCode",{parentName:"p"},"payment")," state."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'$ gnfd q payment\nQuerying commands for the payment module\n\nUsage:\n  gnfd query payment [flags]\n  gnfd query payment [command]\n\nAvailable Commands:\n  dynamic-balance               Query dynamic-balance\n  get-payment-accounts-by-owner Query get-payment-accounts-by-owner\n  list-auto-settle-record       list all auto-settle-record\n  list-payment-account          list all payment-account\n  list-payment-account-count    list all payment-account-count\n  list-stream-record            list all stream-record\n  params                        shows the parameters of the module\n  show-auto-settle-record       shows a auto-settle-record\n  show-payment-account          shows a payment-account\n  show-payment-account-count    shows a payment-account-count\n  show-stream-record            shows a stream-record\n\n# query payment parameters\n$ gnfd q payment params\nparams:\n  fee_denom: BNB\n  forced_settle_time: "30"\n  max_auto_force_settle_num: "100"\n  payment_account_count_limit: "200"\n  reserve_time: "60"\n  validator_tax_rate: "0.010000000000000000"\n\n$ gnfd q payment list-auto-settle-record\nauto_settle_record:\n- addr: 0x2BDEC809d1f68f0b51d73c2fA72AE56833535cAf\n  timestamp: "1680247396"\n- addr: 0x40915235658d2630328d85E6A7c3A5C97E2012aE\n  timestamp: "1680247396"\n- addr: 0x4a4dD9D8C133814014D5bcDe058dc33dcB02D3eb\n  timestamp: "1680247396"\npagination:\n  next_key: null\n  total: "0"\n\n$ gnfd q payment list-payment-account\npagination:\n  next_key: null\n  total: "0"\npayment_account:\n- addr: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884\n  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341\n  refundable: true\n- addr: 0xB5969E0BC1F8827ED0c873c2d22A16054524d00C\n  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d\n  refundable: false\n\n# Usage:\n#   gnfd query payment show-payment-account [addr] [flags]\n$ gnfd q payment show-payment-account 0x169FFd6893aB4A0f8105BA749A0614cB69a18884\npayment_account:\n  addr: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884\n  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341\n  refundable: true\n\n$ gnfd q payment list-payment-account-count\npagination:\n  next_key: null\n  total: "0"\npayment_account_count:\n- count: "1"\n  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d\n- count: "1"\n  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341\n\n# Usage:\n#   gnfd query payment show-payment-account-count [owner] [flags]\n$ gnfd q payment show-payment-account-count 0x3bA598a3d809702dB4cA8610e14cBAF83908861d\npayment_account_count:\n  count: "1"\n  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d\n\n$ gnfd q payment list-stream-record --limit 2\npagination:\n  next_key: HkqUGmZ0FNTaMd77ZqEMS0WtV0Y=\n  total: "0"\nstream_record:\n- account: 0x0B14B50E07934d9360152CACbd3397fDf9A13be0\n  buffer_balance: "0"\n  crud_timestamp: "1680231986"\n  lock_balance: "4620383649780"\n  netflow_rate: "0"\n  out_flows: []\n  settle_timestamp: "0"\n  static_balance: "0"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n- account: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884\n  buffer_balance: "11998800"\n  crud_timestamp: "1680232053"\n  lock_balance: "0"\n  netflow_rate: "-199980"\n  out_flows:\n  - rate: "198000"\n    to_address: 0xA80Ae7B8C9B73eD8Df95447fc722ed2345646210\n  - rate: "1980"\n    to_address: 0xeDdd310750a9F2cC36b0671f87d77dAA07212564\n  settle_timestamp: "1680282028"\n  static_balance: "9988001201"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n\n# Usage:\n#   gnfd query payment show-stream-record [account] [flags]\n$ gnfd q payment show-stream-record 0x0B14B50E07934d9360152CACbd3397fDf9A13be0\nstream_record:\n  account: 0x0B14B50E07934d9360152CACbd3397fDf9A13be0\n  buffer_balance: "0"\n  crud_timestamp: "1680231986"\n  lock_balance: "4620383649780"\n  netflow_rate: "0"\n  out_flows: []\n  settle_timestamp: "0"\n  static_balance: "0"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n')),(0,c.kt)("h3",{id:"transactions"},"Transactions"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,c.kt)("inlineCode",{parentName:"p"},"payment")," module."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'# show help message\n$ gnfd tx payment\npayment transactions subcommands\n\nUsage:\n  gnfd tx payment [flags]\n  gnfd tx payment [command]\n\nAvailable Commands:\n  create-payment-account Broadcast message create-payment-account\n  deposit                Broadcast message deposit\n  disable-refund         Broadcast message disable-refund\n  withdraw               Broadcast message withdraw\n\n# create payment account\n$ gnfd tx payment create-payment-account --from validator0\n\n# check the created payment account\n$ gnfd q payment get-payment-accounts-by-owner 0x0Efc1c24294053a178531CA9EbCD12dC98708953\npaymentAccounts:\n- 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\n\n# deposit 100000000 BNB wei to the payment account\n$ gnfd tx payment deposit 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 100000000 --from validator0\n\n# check the payment account, the static_balance should be 100000000\n$ gnfd q payment show-stream-record 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\nstream_record:\n  account: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\n  buffer_balance: "0"\n  crud_timestamp: "1680497254"\n  lock_balance: "0"\n  netflow_rate: "0"\n  out_flows: []\n  settle_timestamp: "0"\n  static_balance: "100000000"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n\n# withdraw from the payment account\n$ gnfd tx payment withdraw 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 100 --from validator0\n\n# check the payment account, the static_balance should be 99999900 now\n$ gnfd q payment show-stream-record 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\nstream_record:\n  account: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\n  buffer_balance: "0"\n  crud_timestamp: "1680497338"\n  lock_balance: "0"\n  netflow_rate: "0"\n  out_flows: []\n  settle_timestamp: "0"\n  static_balance: "99999900"\n  status: STREAM_ACCOUNT_STATUS_ACTIVE\n\n# check the payment account refundable status\n$ gnfd q payment show-payment-account 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\npayment_account:\n  addr: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\n  owner: 0x0Efc1c24294053a178531CA9EbCD12dC98708953\n  refundable: true\n\n# disable refund\n$ gnfd tx payment disable-refund 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 --from validator0\n\n# check the payment account refundable status again, it should be false now\n$ gnfd q payment show-payment-account 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\npayment_account:\n  addr: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772\n  owner: 0x0Efc1c24294053a178531CA9EbCD12dC98708953\n  refundable: false\n')))}m.isMDXComponent=!0}}]);