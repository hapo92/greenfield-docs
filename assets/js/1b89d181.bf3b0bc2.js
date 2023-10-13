"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8097],{63636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),m=r(94891),n=r(75190),p=r(47507),l=r(24310),o=r(63303),d=(r(75035),r(85162));const u={id:"query-group-members-exist",title:"QueryGroupMembersExist",description:"Queries whether some members are in the group.",sidebar_label:"QueryGroupMembersExist",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries whether some members are in the group.",operationId:"QueryGroupMembersExist",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{exists:{type:"object",additionalProperties:{type:"boolean"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_id",in:"path",required:!0,schema:{type:"string"}},{name:"members",in:"path",required:!0,style:"simple",schema:{type:"array",items:{type:"string"},minItems:1}}],tags:["Storage"],method:"get",path:"/greenfield/storage/group_members_exist/{group_id}/{members}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryGroupMembersExist",description:{content:"Queries whether some members are in the group.",type:"text/plain"},url:{path:["greenfield","storage","group_members_exist",":group_id",":members"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"members"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,y={unversionedId:"greenfield-api/query-group-members-exist",id:"greenfield-api/query-group-members-exist",title:"QueryGroupMembersExist",description:"Queries whether some members are in the group.",source:"@site/docs/greenfield-api/query-group-members-exist.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-group-members-exist",permalink:"/greenfield-docs/docs/greenfield-api/query-group-members-exist",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-group-members-exist",title:"QueryGroupMembersExist",description:"Queries whether some members are in the group.",sidebar_label:"QueryGroupMembersExist",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries whether some members are in the group.",operationId:"QueryGroupMembersExist",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{exists:{type:"object",additionalProperties:{type:"boolean"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_id",in:"path",required:!0,schema:{type:"string"}},{name:"members",in:"path",required:!0,style:"simple",schema:{type:"array",items:{type:"string"},minItems:1}}],tags:["Storage"],method:"get",path:"/greenfield/storage/group_members_exist/{group_id}/{members}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryGroupMembersExist",description:{content:"Queries whether some members are in the group.",type:"text/plain"},url:{path:["greenfield","storage","group_members_exist",":group_id",":members"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"members"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"StorageProviders",permalink:"/greenfield-docs/docs/greenfield-api/storage-providers"},next:{title:"QueryGroupsExist",permalink:"/greenfield-docs/docs/greenfield-api/query-groups-exist"}},g={},b=[{value:"QueryGroupMembersExist",id:"querygroupmembersexist",level:2}],h={toc:b},f="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"querygroupmembersexist"},"QueryGroupMembersExist"),(0,a.kt)("p",null,"Queries whether some members are in the group."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"group_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"members",in:"path",required:!0,style:"simple",schema:{type:"array",items:{type:"string"},minItems:1}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"exists"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{name:"property name*",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "exists": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);