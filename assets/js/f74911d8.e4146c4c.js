"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9625],{65488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),s=a(86010),r=a(72389),i=a(67392),o=a(7094),u=a(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:a,defaultValue:r,values:d,groupId:h,className:p}=e,m=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??m.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,o.U)(),[y,N]=(0,l.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,a=_.indexOf(t),n=g[a].value;n!==y&&(C(t),N(n),null!=h&&v(h,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c.tabList)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},p)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>_.push(e),onKeyDown:x,onClick:w},r,{className:(0,s.Z)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,l.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function h(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},73829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),s=a(65488),r=a(85162);const i={title:"Challenge",order:9},o="Challenge",u={unversionedId:"api/blockchain-cli/challenge",id:"api/blockchain-cli/challenge",title:"Challenge",description:"Abstract",source:"@site/docs/api/blockchain-cli/challenge.md",sourceDirName:"api/blockchain-cli",slug:"/api/blockchain-cli/challenge",permalink:"/greenfield-docs/docs/api/blockchain-cli/challenge",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/blockchain-cli/challenge.md",tags:[],version:"current",frontMatter:{title:"Challenge",order:9},sidebar:"apiReferenceSidebar",previous:{title:"Validator Staking",permalink:"/greenfield-docs/docs/api/blockchain-cli/validator-staking"},next:{title:"Blockchain API",permalink:"/greenfield-docs/docs/api/blockchain-rest"}},c={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Submit a Challenge",id:"submit-a-challenge",level:3},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"Query",id:"query",level:3},{value:"params",id:"params",level:4},{value:"latest-attested-challenges",id:"latest-attested-challenges",level:4},{value:"attested-challenge",id:"attested-challenge",level:4},{value:"inturn-attestation-submitter",id:"inturn-attestation-submitter",level:4},{value:"Transactions",id:"transactions",level:3},{value:"submit",id:"submit",level:4}],h={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"challenge"},"Challenge"),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The challenge module is responsible for handling on-chain challenges that are either generated or submitted by users."),(0,l.kt)("p",null,"Users can submit a challenge and query the latest attested challenges through cli commands."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("h3",{id:"submit-a-challenge"},"Submit a Challenge"),(0,l.kt)("p",null,"When you find your stored object is tampered or missing, you can submit a challenge by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx challenge submit ${sp-operator-address} ${bucket-name} ${object-name} ${random-index} ${segment-index} --from ${key} --node ${node} -y\n")),(0,l.kt)("p",null,"${key} is the name of local key."),(0,l.kt)("p",null,"${bucket-name} and ${object-name} specify which object you want to submit challenge for."),(0,l.kt)("p",null,"${random-index} ${segment-index} specify which segment of the object you want to submit challenge for. If you do not know the index, you can set ${random-index} to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"${node} is the rpc address of a Greenfield node."),(0,l.kt)(s.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"mainnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node = "https://greenfield-chain.bnbchain.org:443"\n'))),(0,l.kt)(r.Z,{value:"testnet",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\n')))),(0,l.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," module using the CLI."),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge --help\n")),(0,l.kt)("h4",{id:"params"},"params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query the current settings for the ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge params [flags] \n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge params --node https://greenfield-chain.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'params:\n  attestation_inturn_interval: "600"\n  attestation_kept_count: "300"\n  challenge_count_per_block: "1"\n  challenge_keep_alive_period: "300"\n  heartbeat_interval: "200"\n  reward_submitter_ratio: "0.001000000000000000"\n  reward_submitter_threshold: "1000000000000000"\n  reward_validator_ratio: "0.900000000000000000"\n  slash_amount_max: "100000000000000000"\n  slash_amount_min: "10000000000000000"\n  slash_amount_size_rate: "0.008500000000000000"\n  slash_cooling_off_period: "300"\n  sp_slash_counting_window: "43200"\n  sp_slash_max_amount: "500000000000000000"\n')),(0,l.kt)("h4",{id:"latest-attested-challenges"},"latest-attested-challenges"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"latest-attested-challenges")," command allows users to query the latest challenges that have been attested by validators."),(0,l.kt)("p",null,"Be noted, only the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"attestation_kept_count")," challenges will be returned."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge latest-attested-challenges [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge latest-attested-challenges --node https://greenfield-chain.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},' - id: "400"\n   result: CHALLENGE_FAILED\n - id: "461"\n   result: CHALLENGE_SUCCEED\n')),(0,l.kt)("h4",{id:"attested-challenge"},"attested-challenge"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"attested-challenge")," command allows users to query a specific challenge that have been attested by validators."),(0,l.kt)("p",null,"Be noted, for the challenge results will be pruned, only the challenge within the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"attestation_kept_count"),"\nchallenges will be used to serve this query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge attested-challenge [id] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge attested-challenge 1 --node https://greenfield-chain.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},' - id: "400"\n   result: CHALLENGE_FAILED\n')),(0,l.kt)("h4",{id:"inturn-attestation-submitter"},"inturn-attestation-submitter"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"inturn-attestation-submitter")," command allows users to query the off-chain challenger service that is currently in charge of attesting.   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge inturn-attestation-submitter [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query challenge inturn-attestation-submitter --node https://greenfield-chain.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'bls_pub_key: 828e81c5c39..\nsubmit_interval:\n  end: "1681960490"\n  start: "1681960480"\n')),(0,l.kt)("h3",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx challenge [command] --help\n")),(0,l.kt)("h4",{id:"submit"},"submit"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"submit")," command allows users to submit a challenge for an object stored by any storage provider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx challenge submit [sp-operator-address] [bucket-name] [object-name] [random-index] [segment-index] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx challenge submit 0x950E2FBD285BC42E30EA69A8C1AB17EEDC70C447 ch69bd3t tq true 0 --node https://greenfield-chain.bnbchain.org:443 --from alice\n")),(0,l.kt)("p",null,"After the tx submitted, you can find the challenge id in ",(0,l.kt)("inlineCode",{parentName:"p"},"greenfield.challenge.EventStartChallenge")," event by accessing ",(0,l.kt)("a",{parentName:"p",href:"https://greenfield-chain.bnbchain.org:443/tx?hash=0x_prefixed_tx_hash"},"https://greenfield-chain.bnbchain.org:443/tx?hash=0x_prefixed_tx_hash"),"."),(0,l.kt)("p",null,"Usually the challenge will be handled within minutes, and the result of the challenge can be queried using the following command.\nHowever, be noted, the result is not kept forever, and only the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"attestation_kept_count")," challenge results will be kept."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd query challenge latest-attested-challenges --node https://greenfield-chain.bnbchain.org:443 \n")),(0,l.kt)("p",null,"The result of the challenge can be queried by the above query commands, or using the the ",(0,l.kt)("inlineCode",{parentName:"p"},"AttestedChallenge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"LatestAttestedChallenges")," methods through ",(0,l.kt)("a",{parentName:"p",href:"https://greenfield-chain.bnbchain.org/openapi"},"GRPC swagger"),"."))}m.isMDXComponent=!0}}]);