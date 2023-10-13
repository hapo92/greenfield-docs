"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9938],{82847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var l=a(87462),s=(a(67294),a(3905)),n=a(26389),i=a(94891),r=a(75190),d=a(47507),c=a(24310),o=a(63303),p=(a(75035),a(85162));const m={id:"attested-challenge",title:"AttestedChallenge",description:"Queries the attested challenge by challenge id.",sidebar_label:"AttestedChallenge",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries the attested challenge by challenge id.",operationId:"AttestedChallenge",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{challenge:{type:"object",properties:{id:{type:"string",format:"uint64",description:"The id of the challenge."},result:{description:"The attestation result of the challenge.",type:"string",enum:["CHALLENGE_FAILED","CHALLENGE_SUCCEED"],default:"CHALLENGE_FAILED"}},description:"AttestedChallenge records the challenge which are attested."}},description:"QueryAttestedChallengeResponse is response type for the Query/AttestedChallenge RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"challenge_id",description:"The id of the challenge.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],tags:["Challenge"],method:"get",path:"/greenfield/challenge/attested_challenge",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AttestedChallenge",description:{content:"Queries the attested challenge by challenge id.",type:"text/plain"},url:{path:["greenfield","challenge","attested_challenge"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The id of the challenge.",type:"text/plain"},key:"challenge_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},h=void 0,g={unversionedId:"greenfield-api/attested-challenge",id:"greenfield-api/attested-challenge",title:"AttestedChallenge",description:"Queries the attested challenge by challenge id.",source:"@site/docs/greenfield-api/attested-challenge.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/attested-challenge",permalink:"/greenfield-docs/docs/greenfield-api/attested-challenge",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"attested-challenge",title:"AttestedChallenge",description:"Queries the attested challenge by challenge id.",sidebar_label:"AttestedChallenge",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries the attested challenge by challenge id.",operationId:"AttestedChallenge",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{challenge:{type:"object",properties:{id:{type:"string",format:"uint64",description:"The id of the challenge."},result:{description:"The attestation result of the challenge.",type:"string",enum:["CHALLENGE_FAILED","CHALLENGE_SUCCEED"],default:"CHALLENGE_FAILED"}},description:"AttestedChallenge records the challenge which are attested."}},description:"QueryAttestedChallengeResponse is response type for the Query/AttestedChallenge RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"challenge_id",description:"The id of the challenge.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],tags:["Challenge"],method:"get",path:"/greenfield/challenge/attested_challenge",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AttestedChallenge",description:{content:"Queries the attested challenge by challenge id.",type:"text/plain"},url:{path:["greenfield","challenge","attested_challenge"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The id of the challenge.",type:"text/plain"},key:"challenge_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"BridgeParams",permalink:"/greenfield-docs/docs/greenfield-api/bridge-params"},next:{title:"InturnAttestationSubmitter",permalink:"/greenfield-docs/docs/greenfield-api/inturn-attestation-submitter"}},u={},y=[{value:"AttestedChallenge",id:"attestedchallenge",level:2}],f={toc:y},b="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"attestedchallenge"},"AttestedChallenge"),(0,s.kt)("p",null,"Queries the attested challenge by challenge id."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"challenge_id",description:"The id of the challenge.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"challenge"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"AttestedChallenge records the challenge which are attested.")),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"The id of the challenge."},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`CHALLENGE_FAILED`, `CHALLENGE_SUCCEED`]",schema:{description:"The attestation result of the challenge.",type:"string",enum:["CHALLENGE_FAILED","CHALLENGE_SUCCEED"],default:"CHALLENGE_FAILED"},mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "challenge": {\n    "id": "string",\n    "result": "CHALLENGE_FAILED"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);