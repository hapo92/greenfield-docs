"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9677],{73768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>g,metadata:()=>h,toc:()=>y});var a=r(87462),s=(r(67294),r(3905)),d=r(26389),i=r(94891),l=r(75190),o=r(47507),n=r(24310),p=r(63303),m=(r(75035),r(85162));const g={id:"delegator-withdraw-address",title:"DelegatorWithdrawAddress",description:"DelegatorWithdrawAddress queries withdraw address of a delegator.",sidebar_label:"DelegatorWithdrawAddress",hide_title:!0,hide_table_of_contents:!0,api:{description:"DelegatorWithdrawAddress queries withdraw address of a delegator.",operationId:"DelegatorWithdrawAddress",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{withdraw_address:{type:"string",description:"withdraw_address defines the delegator address to query for."}},description:"QueryDelegatorWithdrawAddressResponse is the response type for the\nQuery/DelegatorWithdrawAddress RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Distribution"],method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegatorWithdrawAddress",description:{content:"DelegatorWithdrawAddress queries withdraw address of a delegator.",type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","withdraw_address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,h={unversionedId:"greenfield-api/delegator-withdraw-address",id:"greenfield-api/delegator-withdraw-address",title:"DelegatorWithdrawAddress",description:"DelegatorWithdrawAddress queries withdraw address of a delegator.",source:"@site/docs/greenfield-api/delegator-withdraw-address.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/delegator-withdraw-address",permalink:"/greenfield-docs/docs/greenfield-api/delegator-withdraw-address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delegator-withdraw-address",title:"DelegatorWithdrawAddress",description:"DelegatorWithdrawAddress queries withdraw address of a delegator.",sidebar_label:"DelegatorWithdrawAddress",hide_title:!0,hide_table_of_contents:!0,api:{description:"DelegatorWithdrawAddress queries withdraw address of a delegator.",operationId:"DelegatorWithdrawAddress",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{withdraw_address:{type:"string",description:"withdraw_address defines the delegator address to query for."}},description:"QueryDelegatorWithdrawAddressResponse is the response type for the\nQuery/DelegatorWithdrawAddress RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Distribution"],method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegatorWithdrawAddress",description:{content:"DelegatorWithdrawAddress queries withdraw address of a delegator.",type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","withdraw_address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"DelegatorValidators",permalink:"/greenfield-docs/docs/greenfield-api/delegator-validators"},next:{title:"DistributionParams",permalink:"/greenfield-docs/docs/greenfield-api/distribution-params"}},u={},y=[{value:"DelegatorWithdrawAddress",id:"delegatorwithdrawaddress",level:2}],f={toc:y},w="wrapper";function b(e){let{components:t,...r}=e;return(0,s.kt)(w,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delegatorwithdrawaddress"},"DelegatorWithdrawAddress"),(0,s.kt)("p",null,"DelegatorWithdrawAddress queries withdraw address of a delegator."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(d.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"withdraw_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"withdraw_address defines the delegator address to query for."},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "withdraw_address": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(n.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);