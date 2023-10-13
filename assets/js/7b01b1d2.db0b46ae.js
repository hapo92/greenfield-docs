"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2693],{52162:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var i=s(87462),r=(s(67294),s(3905)),a=s(26389),o=s(94891),n=s(75190),d=s(47507),p=s(24310),l=s(63303),c=(s(75035),s(85162));const m={id:"storage-provider",title:"StorageProvider",description:"Queries a storage provider with specify id",sidebar_label:"StorageProvider",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a storage provider with specify id",operationId:"StorageProvider",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{storageProvider:{type:"object",properties:{id:{type:"integer",format:"int64",title:"// id is the identifier of the storage provider, used in virtual group"},operator_address:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},funding_address:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},seal_address:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},approval_address:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},gc_address:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},maintenance_address:{type:"string",title:"maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode"},total_deposit:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},status:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_IN_MAINTENANCE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},endpoint:{type:"string",title:"endpoint define the storage provider's network service address"},description:{description:"description defines the description terms for the storage provider.",type:"object",properties:{moniker:{type:"string",title:"moniker defines a human-readable name for the storage provider"},identity:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},website:{type:"string",description:"website defines an optional website link."},security_contact:{type:"string",description:"security_contact defines an optional email for security contact."},details:{type:"string",description:"details define other optional details."}}},bls_key:{type:"string",format:"byte",title:"bls_key defines the bls pub key of the Storage provider for sealing object and completing migration"}},title:"StorageProvider defines the meta info of storage provider"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"integer",format:"int64"}}],tags:["StorageProvider"],method:"get",path:"/greenfield/storage_provider/{id}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"StorageProvider",description:{content:"Queries a storage provider with specify id",type:"text/plain"},url:{path:["greenfield","storage_provider",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,u={unversionedId:"greenfield-api/storage-provider",id:"greenfield-api/storage-provider",title:"StorageProvider",description:"Queries a storage provider with specify id",source:"@site/docs/greenfield-api/storage-provider.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/storage-provider",permalink:"/greenfield-docs/docs/greenfield-api/storage-provider",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"storage-provider",title:"StorageProvider",description:"Queries a storage provider with specify id",sidebar_label:"StorageProvider",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a storage provider with specify id",operationId:"StorageProvider",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{storageProvider:{type:"object",properties:{id:{type:"integer",format:"int64",title:"// id is the identifier of the storage provider, used in virtual group"},operator_address:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},funding_address:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},seal_address:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},approval_address:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},gc_address:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},maintenance_address:{type:"string",title:"maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode"},total_deposit:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},status:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_IN_MAINTENANCE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},endpoint:{type:"string",title:"endpoint define the storage provider's network service address"},description:{description:"description defines the description terms for the storage provider.",type:"object",properties:{moniker:{type:"string",title:"moniker defines a human-readable name for the storage provider"},identity:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},website:{type:"string",description:"website defines an optional website link."},security_contact:{type:"string",description:"security_contact defines an optional email for security contact."},details:{type:"string",description:"details define other optional details."}}},bls_key:{type:"string",format:"byte",title:"bls_key defines the bls pub key of the Storage provider for sealing object and completing migration"}},title:"StorageProvider defines the meta info of storage provider"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"id",in:"path",required:!0,schema:{type:"integer",format:"int64"}}],tags:["StorageProvider"],method:"get",path:"/greenfield/storage_provider/{id}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"StorageProvider",description:{content:"Queries a storage provider with specify id",type:"text/plain"},url:{path:["greenfield","storage_provider",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SPMaintenanceRecordsByOperator",permalink:"/greenfield-docs/docs/greenfield-api/storage-provider-maintenance-records-by-operator-address"},next:{title:"StorageProviders",permalink:"/greenfield-docs/docs/greenfield-api/storage-providers"}},f={},h=[{value:"StorageProvider",id:"storageprovider",level:2}],y={toc:h},v="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(v,(0,i.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"storageprovider"},"StorageProvider"),(0,r.kt)("p",null,"Queries a storage provider with specify id"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"storageProvider"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"// id is the identifier of the storage provider, used in virtual group"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"operator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"funding_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"seal_address",required:!1,schemaName:"seal_address defines one of the storage provider's accounts which is used to SealObject",qualifierMessage:void 0,schema:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"approval_address",required:!1,schemaName:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request",qualifierMessage:void 0,schema:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"gc_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"maintenance_address",required:!1,schemaName:"maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode",qualifierMessage:void 0,schema:{type:"string",title:"maintenance_address defines one of the storage provider's accounts which is used for testing while in maintenance mode"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"total_deposit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"status defines the current service status of this storage provider",qualifierMessage:"**Possible values:** [`STATUS_IN_SERVICE`, `STATUS_IN_JAILED`, `STATUS_GRACEFUL_EXITING`, `STATUS_IN_MAINTENANCE`]",schema:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_IN_MAINTENANCE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"endpoint",required:!1,schemaName:"endpoint define the storage provider's network service address",qualifierMessage:void 0,schema:{type:"string",title:"endpoint define the storage provider's network service address"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"description defines the description terms for the storage provider.")),(0,r.kt)(p.Z,{collapsible:!1,name:"moniker",required:!1,schemaName:"moniker defines a human-readable name for the storage provider",qualifierMessage:void 0,schema:{type:"string",title:"moniker defines a human-readable name for the storage provider"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"identity",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"website",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"website defines an optional website link."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"security_contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"security_contact defines an optional email for security contact."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"details",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"details define other optional details."},mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"bls_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",title:"bls_key defines the bls pub key of the Storage provider for sealing object and completing migration"},mdxType:"SchemaItem"}))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "storageProvider": {\n    "id": 0,\n    "operator_address": "string",\n    "funding_address": "string",\n    "seal_address": "string",\n    "approval_address": "string",\n    "gc_address": "string",\n    "maintenance_address": "string",\n    "total_deposit": "string",\n    "status": "STATUS_IN_SERVICE",\n    "endpoint": "string",\n    "description": {\n      "moniker": "string",\n      "identity": "string",\n      "website": "string",\n      "security_contact": "string",\n      "details": "string"\n    },\n    "bls_key": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);