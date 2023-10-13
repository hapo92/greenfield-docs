"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[416],{65488:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(87462),o=n(67294),l=n(86010),s=n(72389),r=n(67392),p=n(7094),i=n(12466);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:a,block:n,defaultValue:s,values:u,groupId:c,className:m}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??g.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),v=(0,r.l)(k,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,p.U)(),[_,N]=(0,o.useState)(h),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=c){const e=b[c];null!=e&&e!==_&&k.some((a=>a.value===e))&&N(e)}const x=e=>{const a=e.currentTarget,n=y.indexOf(a),t=k[n].value;t!==_&&(C(a),N(t),null!=c&&f(c,String(t)))},B=e=>{let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;a=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;a=y[n]??y[y.length-1];break}}a?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},k.map((e=>{let{value:a,label:n,attributes:s}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:_===a?0:-1,"aria-selected":_===a,key:a,ref:e=>y.push(e),onKeyDown:B,onClick:x},s,{className:(0,l.Z)("tabs__item",d.tabItem,s?.className,{"tabs__item--active":_===a})}),n??a)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==_})))))}function c(e){const a=(0,s.Z)();return o.createElement(u,(0,t.Z)({key:String(a)},e))}},62982:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=n(87462),o=(n(67294),n(3905)),l=n(65488),s=n(85162);const r={title:"On-chain Governance",order:7},p="On-chain Governance",i={unversionedId:"api/blockchain-cli/governance",id:"api/blockchain-cli/governance",title:"On-chain Governance",description:"Abstract",source:"@site/docs/api/blockchain-cli/governance.md",sourceDirName:"api/blockchain-cli",slug:"/api/blockchain-cli/governance",permalink:"/greenfield-docs/docs/api/blockchain-cli/governance",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/blockchain-cli/governance.md",tags:[],version:"current",frontMatter:{title:"On-chain Governance",order:7},sidebar:"apiReferenceSidebar",previous:{title:"Cross Chain Transfer",permalink:"/greenfield-docs/docs/api/blockchain-cli/bridge"},next:{title:"Payment",permalink:"/greenfield-docs/docs/api/blockchain-cli/payment"}},d={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Query a Proposal",id:"query-a-proposal",level:4},{value:"Submit a Proposal",id:"submit-a-proposal",level:4},{value:"Deposit",id:"deposit",level:4},{value:"Vote",id:"vote",level:4},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"Query",id:"query",level:3},{value:"deposit",id:"deposit-1",level:4},{value:"deposits",id:"deposits",level:4},{value:"param",id:"param",level:4},{value:"params",id:"params",level:4},{value:"proposal",id:"proposal",level:4},{value:"proposals",id:"proposals",level:4},{value:"proposer",id:"proposer",level:4},{value:"tally",id:"tally",level:4},{value:"vote",id:"vote-1",level:4},{value:"votes",id:"votes",level:4},{value:"Transactions",id:"transactions",level:3},{value:"deposit",id:"deposit-2",level:4},{value:"draft-proposal",id:"draft-proposal",level:4},{value:"submit-proposal",id:"submit-proposal",level:4},{value:"Greenfield module parameter change proposal",id:"greenfield-module-parameter-change-proposal",level:5},{value:"BSC smart contract parameter change proposal",id:"bsc-smart-contract-parameter-change-proposal",level:5},{value:"BSC smart contract upgrade proposal",id:"bsc-smart-contract-upgrade-proposal",level:5},{value:"vote",id:"vote-2",level:4}],c={toc:u},m="wrapper";function g(e){let{components:a,...n}=e;return(0,o.kt)(m,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-chain-governance"},"On-chain Governance"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"In Greenfield, users can submit proposals for on-chain governance.\nThese proposals can include updates to blockchain parameters or cross-chain configurations,\nor execution of some messages (e.g., create storage provider).\nOnce a proposal is submitted, it must be accompanied by a deposit that exceeds\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Min Deposit")," parameter (which is 1 BNB on the mainnet).\nIf the deposit is not met, the proposal will not be open for voting.\nHowever, the submitter is not required to provide the deposit in its entirety.\nOther users can contribute to the deposit, and if the total deposit exceeds the Min Deposit parameter,\nthe proposal will be open for voting. Then, the proposal will be voted on whether to accept or reject it."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("h4",{id:"query-a-proposal"},"Query a Proposal"),(0,o.kt)("p",null,"With the id of a proposal, you can query the details of id by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd query gov proposal ${proposal_id} --node ${node}\n")),(0,o.kt)("p",null,"${proposal_id} specifies the id of the proposal you want to query."),(0,o.kt)("p",null,"${node} is the rpc address of a Greenfield node."),(0,o.kt)(l.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"mainnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'node = "https://greenfield-chain.bnbchain.org:443"\n'))),(0,o.kt)(s.Z,{value:"testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'node = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\n')))),(0,o.kt)("h4",{id:"submit-a-proposal"},"Submit a Proposal"),(0,o.kt)("p",null,"To submit a proposal, you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx gov submit-proposal ${proposal_file} --from ${key}  --home ~/.gnfd --node ${node} -y\n")),(0,o.kt)("p",null,"The proposal you want to execute, e.g., a blockchain message, is defined by the content of ${proposal_file}."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"#submit-a-proposal"},"submit proposal")," for some examples."),(0,o.kt)("h4",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"Once the proposal is submitted, anyone can deposit to it before expiration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx gov deposit ${proposal_id} ${coins} --from ${key} --node ${node} -y\n")),(0,o.kt)("p",null,"${coins} defines the coins you want to deposit to the proposal, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"100000BNB"),"."),(0,o.kt)("h4",{id:"vote"},"Vote"),(0,o.kt)("p",null,"To vote a proposal, the following command can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx gov vote ${proposal_id} ${option} --from ${key} --home ~./gnfd --node ${node} -y\n")),(0,o.kt)("p",null,"${option} defines whether you want to vote ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"no_with_veto"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"abstain"),"."),(0,o.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"The CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query gov help\n")),(0,o.kt)("h4",{id:"deposit-1"},"deposit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," command allows users to query a deposit for a given proposal from a given depositor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$  gnfd query gov deposit [proposal-id] [depositer-addr] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov deposit 4 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78 \n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'amount:\n- amount: "200"\n  denom: BNB\ndepositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\nproposal_id: "4"\n')),(0,o.kt)("h4",{id:"deposits"},"deposits"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposits")," command allows users to query all deposits for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov deposits [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov deposits 4\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposits:\n- amount:\n  - amount: "200"\n    denom: BNB\n  depositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n  proposal_id: "4"\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("h4",{id:"param"},"param"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," command allows users to query a given parameter for the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov param [param-type] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov param deposit\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'max_deposit_period: "300000000000"\nmin_deposit:\n- amount: "1000000000000000000"\n  denom: BNB\n')),(0,o.kt)("h4",{id:"params"},"params"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query all parameters for the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov params [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov params\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposit_params:\n  max_deposit_period: "300000000000"\n  min_deposit:\n  - amount: "1000000000000000000"\n    denom: BNB\ntally_params:\n  quorum: "0.334000000000000000"\n  threshold: "0.500000000000000000"\n  veto_threshold: "0.334000000000000000"\nvoting_params:\n  voting_period: "300000000000"\n')),(0,o.kt)("h4",{id:"proposal"},"proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposal")," command allows users to query a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposal [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposal 6\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposit_end_time: "2023-02-21T11:30:01.519490Z"\nfinal_tally_result:\n  abstain_count: "0"\n  no_count: "0"\n  no_with_veto_count: "0"\n  yes_count: "10000000000000000000000000"\nid: "6"\nmessages:\n- \'@type\': /cosmos.gov.v1.MsgExecLegacyContent\n  authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n  content:\n    \'@type\': /cosmos.params.v1beta1.ParameterChangeProposal\n    changes:\n    - key: RelayerTimeout\n      subspace: oracle\n      value: \'"100"\'\n    description: change\n    title: test change params\nmetadata: ""\nstatus: PROPOSAL_STATUS_PASSED\nsubmit_time: "2023-02-21T11:25:01.519490Z"\ntotal_deposit:\n- amount: "1000000000000000200"\n  denom: BNB\nvoting_end_time: "2023-02-21T11:30:36.733936Z"\nvoting_start_time: "2023-02-21T11:25:36.733936Z"\n')),(0,o.kt)("h4",{id:"proposals"},"proposals"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposals")," command allows users to query all proposals with optional filters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposals [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposals\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pagination:\n  next_key: null\n  total: "0"\nproposals:\n- deposit_end_time: "2023-02-21T10:43:28.710910Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "1"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x7aFEf7876FE8bf0b805d8dF9d6bE0dD1CD798E29\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp0\n      security_contact: ""\n      website: ""\n    endpoint: sp0.greenfield.io\n    funding_address: 0x0ffF366CccF2FD21445ACe1f19d316951F4144CC\n    seal_address: 0x7Bc6Eb822b7B8419037cce5F4Cb50209Dfc7CDbD\n    sp_address: 0xba73b99Bfba6B3df6398c7c4C2c916A28c26d100\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:38:28.710910Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:43:28.710910Z"\n  voting_start_time: "2023-02-21T10:38:28.710910Z"\n- deposit_end_time: "2023-02-21T10:43:58.917763Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "2"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x3CE5E18B05Fd349801DBa9e98E0aB694E2B8C985\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp1\n      security_contact: ""\n      website: ""\n    endpoint: sp1.greenfield.io\n    funding_address: 0xa2D705f57D4c50F5c7694590187A62171a149836\n    seal_address: 0x53ADC854036F14E0bb989F4Ba3104d66A95FB7C4\n    sp_address: 0x93B6cFf6EdB72Fd15ff32DAbC6cd6F9b17C51bd8\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:38:58.917763Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:43:58.917763Z"\n  voting_start_time: "2023-02-21T10:38:58.917763Z"\n- deposit_end_time: "2023-02-21T10:44:29.103061Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "3"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x8AFa83E423fb3C0D1ED30761730b742963897C8c\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp2\n      security_contact: ""\n      website: ""\n    endpoint: sp2.greenfield.io\n    funding_address: 0xf54B0622BbA7eE596E688A0a993267583078327f\n    seal_address: 0xb6eCa481Cb3C1861aD9f4D65F5a014aAcD0ebbc5\n    sp_address: 0xc52E29c12a16f9CC37Ef1728C05b0129187564d2\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:39:29.103061Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:44:29.103061Z"\n  voting_start_time: "2023-02-21T10:39:29.103061Z"\n- deposit_end_time: "2023-02-21T11:30:01.519490Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "6"\n  messages:\n  - \'@type\': /cosmos.gov.v1.MsgExecLegacyContent\n    authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    content:\n      \'@type\': /cosmos.params.v1beta1.ParameterChangeProposal\n      changes:\n      - key: RelayerTimeout\n        subspace: oracle\n        value: \'"100"\'\n      description: change\n      title: test change params\n  metadata: ""\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T11:25:01.519490Z"\n  total_deposit:\n  - amount: "1000000000000000200"\n    denom: BNB\n  voting_end_time: "2023-02-21T11:30:36.733936Z"\n  voting_start_time: "2023-02-21T11:25:36.733936Z"\n')),(0,o.kt)("h4",{id:"proposer"},"proposer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposer")," command allows users to query the proposer for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposer [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov proposer 1\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'proposal_id: "6"\nproposer: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n')),(0,o.kt)("h4",{id:"tally"},"tally"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tally")," command allows users to query the tally of a given proposal vote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov tally [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov tally 1\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'abstain_count: "0"\nno_count: "0"\nno_with_veto_count: "0"\nyes_count: "10000000000000000000000000"\n')),(0,o.kt)("h4",{id:"vote-1"},"vote"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," command allows users to query a vote for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov vote [proposal-id] [voter-addr] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov vote 7 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'metadata: ""\noptions:\n- option: VOTE_OPTION_YES\n  weight: "1.000000000000000000"\nproposal_id: "7"\nvoter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n')),(0,o.kt)("h4",{id:"votes"},"votes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"votes")," command allows users to query all votes for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov votes [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd query gov votes 7\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pagination:\n  next_key: null\n  total: "0"\nvotes:\n- metadata: ""\n  options:\n  - option: VOTE_OPTION_YES\n    weight: "1.000000000000000000"\n  proposal_id: "7"\n  voter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n')),(0,o.kt)("h3",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov --help\n")),(0,o.kt)("h4",{id:"deposit-2"},"deposit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," command allows users to deposit tokens for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov deposit [proposal-id] [deposit] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov deposit 1 1000000000000000000BNB --from 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n")),(0,o.kt)("h4",{id:"draft-proposal"},"draft-proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"draft-proposal")," creates a draft for any type of proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov draft-proposal\n")),(0,o.kt)("h4",{id:"submit-proposal"},"submit-proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"submit-proposal")," submits a governance proposal along with messages and metadata defined in json file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov submit-proposal [path-to-proposal-json] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("h5",{id:"greenfield-module-parameter-change-proposal"},"Greenfield module parameter change proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx gov submit-proposal /path/to/proposal.json --from 0x2737dca53A25120358f4811c762f71712eF23aFE\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "Oracle params change",\n        "description": "Change",\n        "changes": [\n          {\n            "subspace": "oracle",\n            "key": "RelayerTimeout",\n            "value": "\\"100\\""\n          }\n        ]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h5",{id:"bsc-smart-contract-parameter-change-proposal"},"BSC smart contract parameter change proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "BSC smart contract parameter change",\n        "description": "change contract parameter",\n        "changes": [\n          {\n            "subspace": "BSC",\n            "key": "batchSizeForOracle",\n            "value": "0000000000000000000000000000000000000000000000000000000000000033"\n          }\n        ],\n        "cross_chain": true,\n        "addresses": ["0x6c615C766EE6b7e69275b0D070eF50acc93ab880"]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h5",{id:"bsc-smart-contract-upgrade-proposal"},"BSC smart contract upgrade proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "upgrade GovHub and CrossChain",\n        "description": "upgrade GovHub and CrossChain",\n        "changes": [\n          {\n            "subspace": "BSC",\n            "key": "upgrade",\n            "value": "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf"\n          },\n          {\n            "subspace": "BSC",\n            "key": "upgrade",\n            "value": "0x9d4454B023096f34B160D6B654540c56A1F81688"\n          }\n        ],\n        "cross_chain": true,\n        "addresses": [\n          "0x6c615C766EE6b7e69275b0D070eF50acc93ab880",\n          "0x04ED4ad3cDe36FE8ba944E3D6CFC54f7Fe6c3C72"\n        ]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h4",{id:"vote-2"},"vote"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," command allows users to submit a vote for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx gov vote [command] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx gov vote 1 yes --from 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n")))}g.isMDXComponent=!0}}]);