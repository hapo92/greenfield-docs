"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8623],{9173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var a=r(87462),s=(r(67294),r(3905)),i=r(26389),n=r(94891),l=(r(75190),r(47507)),o=r(24310),m=r(63303),p=(r(75035),r(85162));const d={id:"bridge-params",title:"BridgeParams",description:"Parameters queries the parameters of the module.",sidebar_label:"BridgeParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"BridgeParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{bsc_transfer_out_relayer_fee:{type:"string",title:"Relayer fee for the cross chain transfer out tx to bsc"},bsc_transfer_out_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx to bsc"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Bridge"],method:"get",path:"/greenfield/bridge/params",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"BridgeParams",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","bridge","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/bridge-params",id:"greenfield-api/bridge-params",title:"BridgeParams",description:"Parameters queries the parameters of the module.",source:"@site/docs/greenfield-api/bridge-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/bridge-params",permalink:"/greenfield-docs/docs/greenfield-api/bridge-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"bridge-params",title:"BridgeParams",description:"Parameters queries the parameters of the module.",sidebar_label:"BridgeParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"BridgeParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{bsc_transfer_out_relayer_fee:{type:"string",title:"Relayer fee for the cross chain transfer out tx to bsc"},bsc_transfer_out_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx to bsc"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Bridge"],method:"get",path:"/greenfield/bridge/params",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"BridgeParams",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","bridge","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"Introduction",permalink:"/greenfield-docs/docs/greenfield-api/greenfield-grpc-gateway-docs"},next:{title:"AttestedChallenge",permalink:"/greenfield-docs/docs/greenfield-api/attested-challenge"}},f={},g=[{value:"BridgeParams",id:"bridgeparams",level:2}],y={toc:g},h="wrapper";function b(e){let{components:t,...r}=e;return(0,s.kt)(h,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"bridgeparams"},"BridgeParams"),(0,s.kt)("p",null,"Parameters queries the parameters of the module."),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"params"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"params holds all the parameters of this module.")),(0,s.kt)(o.Z,{collapsible:!1,name:"bsc_transfer_out_relayer_fee",required:!1,schemaName:"Relayer fee for the cross chain transfer out tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the cross chain transfer out tx to bsc"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"bsc_transfer_out_ack_relayer_fee",required:!1,schemaName:"Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the cross chain transfer out tx to bsc"},mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "params": {\n    "bsc_transfer_out_relayer_fee": "string",\n    "bsc_transfer_out_ack_relayer_fee": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);