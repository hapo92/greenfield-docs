"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[137],{54426:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>f});var t=l(87462),i=(l(67294),l(3905)),r=l(26389),s=l(94891),o=l(75190),n=l(47507),p=l(24310),m=l(63303),u=(l(75035),l(85162));const d={id:"available-global-virtual-group-families",title:"AvailableGlobalVirtualGroupFamilies",description:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",sidebar_label:"AvailableGlobalVirtualGroupFamilies",hide_title:!0,hide_table_of_contents:!0,api:{description:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",operationId:"AvailableGlobalVirtualGroupFamilies",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group_family_ids:{type:"array",items:{type:"integer",format:"int64"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"global_virtual_group_family_ids",in:"query",required:!1,explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}}],tags:["VirtualGroup"],method:"get",path:"/greenfield/virtualgroup/available_global_virtual_group_families",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AvailableGlobalVirtualGroupFamilies",description:{content:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",type:"text/plain"},url:{path:["greenfield","virtualgroup","available_global_virtual_group_families"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"global_virtual_group_family_ids",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,b={unversionedId:"greenfield-api/available-global-virtual-group-families",id:"greenfield-api/available-global-virtual-group-families",title:"AvailableGlobalVirtualGroupFamilies",description:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",source:"@site/docs/greenfield-api/available-global-virtual-group-families.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/available-global-virtual-group-families",permalink:"/greenfield-docs/docs/greenfield-api/available-global-virtual-group-families",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"available-global-virtual-group-families",title:"AvailableGlobalVirtualGroupFamilies",description:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",sidebar_label:"AvailableGlobalVirtualGroupFamilies",hide_title:!0,hide_table_of_contents:!0,api:{description:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",operationId:"AvailableGlobalVirtualGroupFamilies",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group_family_ids:{type:"array",items:{type:"integer",format:"int64"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"global_virtual_group_family_ids",in:"query",required:!1,explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}}],tags:["VirtualGroup"],method:"get",path:"/greenfield/virtualgroup/available_global_virtual_group_families",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"AvailableGlobalVirtualGroupFamilies",description:{content:"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on",type:"text/plain"},url:{path:["greenfield","virtualgroup","available_global_virtual_group_families"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"global_virtual_group_family_ids",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"VerifyPermission",permalink:"/greenfield-docs/docs/greenfield-api/verify-permission"},next:{title:"GlobalVirtualGroup",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group"}},g={},f=[{value:"AvailableGlobalVirtualGroupFamilies",id:"availableglobalvirtualgroupfamilies",level:2}],y={toc:f},v="wrapper";function h(e){let{components:a,...l}=e;return(0,i.kt)(v,(0,t.Z)({},y,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"availableglobalvirtualgroupfamilies"},"AvailableGlobalVirtualGroupFamilies"),(0,i.kt)("p",null,"AvailableGlobalVirtualGroupFamilies filters a list of GlobalVirtualGroupFamilies ID which are qualified to create bucket on"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"global_virtual_group_family_ids",in:"query",required:!1,explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"global_virtual_group_family_ids",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"}},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "global_virtual_group_family_ids": [\n    0\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(u.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);