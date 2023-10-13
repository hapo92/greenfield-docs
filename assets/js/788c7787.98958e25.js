"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3541],{3265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var a=r(87462),n=(r(67294),r(3905)),s=r(26389),i=r(94891),l=(r(75190),r(47507)),p=r(24310),o=r(63303),m=(r(75035),r(85162));const d={id:"inturn-relayer",title:"InturnRelayer",description:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",sidebar_label:"InturnRelayer",hide_title:!0,hide_table_of_contents:!0,api:{description:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",operationId:"InturnRelayer",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{bls_pub_key:{type:"string"},relay_interval:{type:"object",properties:{start:{type:"string",format:"uint64"},end:{type:"string",format:"uint64"}},title:"RelayInterval holds start and end(exclusive) time of in-turn relayer, [start, end)"}},description:"QueryInturnRelayerResponse is the response type for the Query In-turn relayer RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Oracle"],method:"get",path:"/cosmos/oracle/v1/inturn_relayer",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"InturnRelayer",description:{content:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",type:"text/plain"},url:{path:["cosmos","oracle","v1","inturn_relayer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/inturn-relayer",id:"greenfield-api/inturn-relayer",title:"InturnRelayer",description:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",source:"@site/docs/greenfield-api/inturn-relayer.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/inturn-relayer",permalink:"/greenfield-docs/docs/greenfield-api/inturn-relayer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"inturn-relayer",title:"InturnRelayer",description:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",sidebar_label:"InturnRelayer",hide_title:!0,hide_table_of_contents:!0,api:{description:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",operationId:"InturnRelayer",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{bls_pub_key:{type:"string"},relay_interval:{type:"object",properties:{start:{type:"string",format:"uint64"},end:{type:"string",format:"uint64"}},title:"RelayInterval holds start and end(exclusive) time of in-turn relayer, [start, end)"}},description:"QueryInturnRelayerResponse is the response type for the Query In-turn relayer RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Oracle"],method:"get",path:"/cosmos/oracle/v1/inturn_relayer",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"InturnRelayer",description:{content:"InturnRelayer returns the inturn relayer bls pub key and its relay interval",type:"text/plain"},url:{path:["cosmos","oracle","v1","inturn_relayer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"MintParams",permalink:"/greenfield-docs/docs/greenfield-api/mint-params"},next:{title:"OracleParams",permalink:"/greenfield-docs/docs/greenfield-api/oracle-params"}},c={},g=[{value:"InturnRelayer",id:"inturnrelayer",level:2}],f={toc:g},h="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"inturnrelayer"},"InturnRelayer"),(0,n.kt)("p",null,"InturnRelayer returns the inturn relayer bls pub key and its relay interval"),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"bls_pub_key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"relay_interval"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"start",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"end",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "bls_pub_key": "string",\n  "relay_interval": {\n    "start": "string",\n    "end": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);