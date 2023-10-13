"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[202],{61834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var o=n(87462),i=(n(67294),n(3905)),s=n(26389),a=n(94891),r=n(75190),p=n(47507),l=n(24310),d=n(63303),m=(n(75035),n(85162));const u={id:"gov-v-1-deposit",title:"GovV1Deposit",description:"Deposits queries all deposits of a single proposal.",sidebar_label:"GovV1Deposit",hide_title:!0,hide_table_of_contents:!0,api:{description:"Deposits queries all deposits of a single proposal.",operationId:"GovV1Deposit",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{deposits:{type:"array",items:{type:"object",properties:{proposal_id:{type:"string",format:"uint64",description:"proposal_id defines the unique id of the proposal."},depositor:{type:"string",description:"depositor defines the deposit addresses from the proposals."},amount:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."},description:"amount to be deposited by depositor."}},description:"Deposit defines an amount deposited by an account address to an active\nproposal."},description:"deposits defines the requested deposits."},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryDepositsResponse is the response type for the Query/Deposits RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\nExample 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\nExample 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Governance"],method:"get",path:"/cosmos/gov/v1/proposals/{proposal_id}/deposits",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GovV1Deposit",description:{content:"Deposits queries all deposits of a single proposal.",type:"text/plain"},url:{path:["cosmos","gov","v1","proposals",":proposal_id","deposits"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,y={unversionedId:"greenfield-api/gov-v-1-deposit",id:"greenfield-api/gov-v-1-deposit",title:"GovV1Deposit",description:"Deposits queries all deposits of a single proposal.",source:"@site/docs/greenfield-api/gov-v-1-deposit.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/gov-v-1-deposit",permalink:"/greenfield-docs/docs/greenfield-api/gov-v-1-deposit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gov-v-1-deposit",title:"GovV1Deposit",description:"Deposits queries all deposits of a single proposal.",sidebar_label:"GovV1Deposit",hide_title:!0,hide_table_of_contents:!0,api:{description:"Deposits queries all deposits of a single proposal.",operationId:"GovV1Deposit",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{deposits:{type:"array",items:{type:"object",properties:{proposal_id:{type:"string",format:"uint64",description:"proposal_id defines the unique id of the proposal."},depositor:{type:"string",description:"depositor defines the deposit addresses from the proposals."},amount:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."},description:"amount to be deposited by depositor."}},description:"Deposit defines an amount deposited by an account address to an active\nproposal."},description:"deposits defines the requested deposits."},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryDepositsResponse is the response type for the Query/Deposits RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\nExample 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\nExample 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Governance"],method:"get",path:"/cosmos/gov/v1/proposals/{proposal_id}/deposits",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GovV1Deposit",description:{content:"Deposits queries all deposits of a single proposal.",type:"text/plain"},url:{path:["cosmos","gov","v1","proposals",":proposal_id","deposits"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"GovV1Proposal",permalink:"/greenfield-docs/docs/greenfield-api/gov-v-1-proposal"},next:{title:"GovV1Deposit",permalink:"/greenfield-docs/docs/greenfield-api/gov-v-1-deposit"}},f={},h=[{value:"GovV1Deposit",id:"govv1deposit",level:2}],g={toc:h},b="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"govv1deposit"},"GovV1Deposit"),(0,i.kt)("p",null,"Deposits queries all deposits of a single proposal."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"deposits"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"deposits defines the requested deposits.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"proposal_id",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"proposal_id defines the unique id of the proposal."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"depositor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"depositor defines the deposit addresses from the proposals."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"amount"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"amount to be deposited by depositor.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pagination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"pagination defines the pagination in the response.")),(0,i.kt)(l.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "deposits": [\n    {\n      "proposal_id": "string",\n      "depositor": "string",\n      "amount": [\n        {\n          "denom": "string",\n          "amount": "string"\n        }\n      ]\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);