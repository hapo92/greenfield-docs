"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9764],{53572:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const s={},n="Proto Definition",i={unversionedId:"guide/storage-provider/modules/common/proto",id:"guide/storage-provider/modules/common/proto",title:"Proto Definition",description:"GfSp framework uses protobuf to define structured data which is language-neutral, platform-neutral and extensible mechanism for serializing data. This section will display used protobuf definition in GfSp code.",source:"@site/docs/guide/storage-provider/modules/common/proto.md",sourceDirName:"guide/storage-provider/modules/common",slug:"/guide/storage-provider/modules/common/proto",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/common/proto.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"GfSpTask Proto",id:"gfsptask-proto",level:2},{value:"GfSpCreateBucketApprovalTask Proto",id:"gfspcreatebucketapprovaltask-proto",level:3},{value:"GfSpMigrateBucketApprovalTask Proto",id:"gfspmigratebucketapprovaltask-proto",level:3},{value:"GfSpCreateObjectApprovalTask Proto",id:"gfspcreateobjectapprovaltask-proto",level:3},{value:"GfSpReplicatePieceApprovalTask Proto",id:"gfspreplicatepieceapprovaltask-proto",level:3},{value:"GfSpUploadObjectTask Proto",id:"gfspuploadobjecttask-proto",level:3},{value:"GfSpResumableUploadObjectTask Proto",id:"gfspresumableuploadobjecttask-proto",level:3},{value:"GfSpReplicatePieceTask Proto",id:"gfspreplicatepiecetask-proto",level:3},{value:"GfSpRecoverPieceTask Proto",id:"gfsprecoverpiecetask-proto",level:3},{value:"GfSpReceivePieceTask Proto",id:"gfspreceivepiecetask-proto",level:3},{value:"GfSpSealObjectTask Proto",id:"gfspsealobjecttask-proto",level:3},{value:"GfSpDownloadObjectTask Proto",id:"gfspdownloadobjecttask-proto",level:3},{value:"GfSpDownloadPieceTask Proto",id:"gfspdownloadpiecetask-proto",level:3},{value:"GfSpChallengePieceTask Proto",id:"gfspchallengepiecetask-proto",level:3},{value:"GfSpGCObjectTask Proto",id:"gfspgcobjecttask-proto",level:3},{value:"GfSpGCZombiePieceTask Proto",id:"gfspgczombiepiecetask-proto",level:3},{value:"GfSpGCMetaTask Proto",id:"gfspgcmetatask-proto",level:3},{value:"GfSpMigrateGVGTask Proto",id:"gfspmigrategvgtask-proto",level:3},{value:"GfSpMigratePieceTask Proto",id:"gfspmigratepiecetask-proto",level:3},{value:"Greenfield Proto",id:"greenfield-proto",level:2},{value:"MsgCreateBucket Proto",id:"msgcreatebucket-proto",level:3},{value:"MsgMigrateBucket Proto",id:"msgmigratebucket-proto",level:3},{value:"MsgCreateObject Proto",id:"msgcreateobject-proto",level:3},{value:"BucketInfo Proto",id:"bucketinfo-proto",level:3},{value:"ObjectInfo Proto",id:"objectinfo-proto",level:3},{value:"Params Proto",id:"params-proto",level:3},{value:"GfSpPing Proto",id:"gfspping-proto",level:3},{value:"GfSpPong Proto",id:"gfsppong-proto",level:3},{value:"MsgSealObject",id:"msgsealobject",level:3},{value:"MsgRejectSealObject Proto",id:"msgrejectsealobject-proto",level:3},{value:"MsgDiscontinueBucket",id:"msgdiscontinuebucket",level:3},{value:"MsgCreateGlobalVirtualGroup",id:"msgcreateglobalvirtualgroup",level:3},{value:"MsgCompleteMigrateBucket",id:"msgcompletemigratebucket",level:3},{value:"MsgUpdateSpStoragePrice",id:"msgupdatespstorageprice",level:3},{value:"MsgSwapOut",id:"msgswapout",level:3},{value:"MsgCompleteSwapOut",id:"msgcompleteswapout",level:3},{value:"MsgStorageProviderExit",id:"msgstorageproviderexit",level:3},{value:"MsgCompleteStorageProviderExit",id:"msgcompletestorageproviderexit",level:3}],l={toc:c},d="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proto-definition"},"Proto Definition"),(0,r.kt)("p",null,"GfSp framework uses protobuf to define structured data which is language-neutral, platform-neutral and extensible mechanism for serializing data. This section will display used protobuf definition in GfSp code."),(0,r.kt)("h2",{id:"gfsptask-proto"},"GfSpTask Proto"),(0,r.kt)("p",null,"Tasks in GfSp uses proto to describe themselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpTask {\n  string address = 1;\n  int64 create_time = 2;\n  int64 update_time = 3;\n  int64 timeout = 4;\n  int32 task_priority = 5;\n  int64 retry = 6;\n  int64 max_retry = 7;\n  string user_address = 8;\n  string logs = 9;\n  base.types.gfsperrors.GfSpError err = 10;\n}\n")),(0,r.kt)("h3",{id:"gfspcreatebucketapprovaltask-proto"},"GfSpCreateBucketApprovalTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpCreateBucketApprovalTask {\n  GfSpTask task = 1;\n  greenfield.storage.MsgCreateBucket create_bucket_info = 2;\n}\n")),(0,r.kt)("h3",{id:"gfspmigratebucketapprovaltask-proto"},"GfSpMigrateBucketApprovalTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpMigrateBucketApprovalTask {\n  GfSpTask task = 1;\n  greenfield.storage.MsgMigrateBucket migrate_bucket_info = 2;\n}\n")),(0,r.kt)("h3",{id:"gfspcreateobjectapprovaltask-proto"},"GfSpCreateObjectApprovalTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpCreateObjectApprovalTask {\n  GfSpTask task = 1;\n  greenfield.storage.MsgCreateObject create_object_info = 2;\n}\n")),(0,r.kt)("h3",{id:"gfspreplicatepieceapprovaltask-proto"},"GfSpReplicatePieceApprovalTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpReplicatePieceApprovalTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  string ask_sp_operator_address = 4;\n  bytes ask_signature = 5;\n  string approved_sp_endpoint = 6;\n  string approved_sp_operator_address = 7;\n  bytes approved_signature = 8;\n  string approved_sp_approval_address = 9;\n  uint64 expired_height = 10;\n}\n")),(0,r.kt)("h3",{id:"gfspuploadobjecttask-proto"},"GfSpUploadObjectTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpUploadObjectTask {\n  GfSpTask task = 1;\n  uint32 virtual_group_family_id = 2;\n  greenfield.storage.ObjectInfo object_info = 3;\n  greenfield.storage.Params storage_params = 4;\n}\n")),(0,r.kt)("h3",{id:"gfspresumableuploadobjecttask-proto"},"GfSpResumableUploadObjectTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpResumableUploadObjectTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  uint64 offset = 4;\n  uint64 length = 5;\n  bool completed = 6;\n  uint32 virtual_group_family_id = 7;\n}\n")),(0,r.kt)("h3",{id:"gfspreplicatepiecetask-proto"},"GfSpReplicatePieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpReplicatePieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  repeated string secondary_addresses = 4;\n  repeated bytes secondary_signatures = 5;\n  bool sealed = 6;\n  uint32 global_virtual_group_id = 7;\n  repeated string secondary_endpoints = 8;\n}\n")),(0,r.kt)("h3",{id:"gfsprecoverpiecetask-proto"},"GfSpRecoverPieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpRecoverPieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  uint32 segment_idx = 5;\n  int32 ec_idx = 6;\n  uint64 piece_size = 7;\n  bytes signature = 8;\n  bool recovered = 9;\n}\n")),(0,r.kt)("h3",{id:"gfspreceivepiecetask-proto"},"GfSpReceivePieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpReceivePieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  uint32 segment_idx = 4;\n  int32 redundancy_idx = 5;\n  int64 piece_size = 6;\n  bytes piece_checksum = 7;\n  bytes signature = 8;\n  bool sealed = 9;\n  bool finished = 10;\n  uint32 global_virtual_group_id = 11;\n  bool bucket_migration = 12;\n}\n")),(0,r.kt)("h3",{id:"gfspsealobjecttask-proto"},"GfSpSealObjectTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpSealObjectTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  repeated string secondary_addresses = 4;\n  repeated bytes secondary_signatures = 5;\n  uint32 global_virtual_group_id = 6;\n  repeated string secondary_endpoints = 7;\n}\n")),(0,r.kt)("h3",{id:"gfspdownloadobjecttask-proto"},"GfSpDownloadObjectTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpDownloadObjectTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.BucketInfo bucket_info = 3;\n  greenfield.storage.Params storage_params = 4;\n  int64 low = 5;\n  int64 high = 6;\n}\n")),(0,r.kt)("h3",{id:"gfspdownloadpiecetask-proto"},"GfSpDownloadPieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpDownloadPieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.BucketInfo bucket_info = 3;\n  greenfield.storage.Params storage_params = 4;\n  bool enable_check = 5; // check read quota, only in first piece\n  uint64 total_size = 6;\n  string piece_key = 7;\n  uint64 piece_offset = 8;\n  uint64 piece_length = 9;\n}\n")),(0,r.kt)("h3",{id:"gfspchallengepiecetask-proto"},"GfSpChallengePieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpChallengePieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.BucketInfo bucket_info = 3;\n  greenfield.storage.Params storage_params = 4;\n  uint32 segment_idx = 5;\n  int32 redundancy_idx = 6;\n  bytes integrity_hash = 7;\n  repeated bytes piece_hash = 8;\n  int64 piece_data_size = 9;\n}\n")),(0,r.kt)("h3",{id:"gfspgcobjecttask-proto"},"GfSpGCObjectTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpGCObjectTask {\n  GfSpTask task = 1;\n  uint64 start_block_number = 2;\n  uint64 end_block_number = 3;\n  uint64 current_block_number = 4;\n  uint64 last_deleted_object_id = 5;\n  bool running = 6;\n}\n")),(0,r.kt)("h3",{id:"gfspgczombiepiecetask-proto"},"GfSpGCZombiePieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpGCZombiePieceTask {\n  GfSpTask task = 1;\n  uint64 object_id = 2;\n  uint64 delete_count = 3;\n  bool running = 4;\n}\n")),(0,r.kt)("h3",{id:"gfspgcmetatask-proto"},"GfSpGCMetaTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpGCMetaTask {\n  GfSpTask task = 1;\n  uint64 current_idx = 2;\n  uint64 delete_count = 3;\n  bool running = 4;\n}\n")),(0,r.kt)("h3",{id:"gfspmigrategvgtask-proto"},"GfSpMigrateGVGTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpMigrateGVGTask {\n  GfSpTask task = 1;\n  uint64 bucket_id = 2;\n  greenfield.virtualgroup.GlobalVirtualGroup src_gvg = 3;\n  greenfield.virtualgroup.GlobalVirtualGroup dest_gvg = 4;\n  int32 redundancy_idx = 5;\n  greenfield.sp.StorageProvider src_sp = 6;\n  uint64 last_migrated_object_id = 7;\n  bool finished = 8;\n}\n")),(0,r.kt)("h3",{id:"gfspmigratepiecetask-proto"},"GfSpMigratePieceTask Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpMigratePieceTask {\n  GfSpTask task = 1;\n  greenfield.storage.ObjectInfo object_info = 2;\n  greenfield.storage.Params storage_params = 3;\n  string src_sp_endpoint = 4;\n  uint32 segment_idx = 5;\n  int32 redundancy_idx = 6;\n  bytes signature = 7;\n}\n")),(0,r.kt)("h2",{id:"greenfield-proto"},"Greenfield Proto"),(0,r.kt)("p",null,"Some structured data used in GfSp is deinfed in Greenfield chain repo, we display them as follows."),(0,r.kt)("h3",{id:"msgcreatebucket-proto"},"MsgCreateBucket Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCreateBucket {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator defines the account address of bucket creator, it is also the bucket owner.\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // bucket_name defines a globally unique name of bucket\n  string bucket_name = 2;\n\n  // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,\n  // otherwise every greenfield user can read it.\n  VisibilityType visibility = 3;\n\n  // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator\n  string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // primary_sp_address defines the address of primary sp.\n  string primary_sp_address = 5 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n  common.Approval primary_sp_approval = 6;\n\n  // charged_read_quota defines the read data that users are charged for, measured in bytes.\n  // The available read data for each user is the sum of the free read data provided by SP and\n  // the ChargeReadQuota specified here.\n  uint64 charged_read_quota = 7;\n}\n')),(0,r.kt)("h3",{id:"msgmigratebucket-proto"},"MsgMigrateBucket Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgMigrateBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator who initial the migrate bucket\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket that need to be migrated\n  string bucket_name = 2;\n  // dst_primary_sp_id defines the destination SP for migration\n  uint32 dst_primary_sp_id = 3;\n  // dst_primary_sp_approval defines the approval of destination sp\n  common.Approval dst_primary_sp_approval = 4;\n}\n')),(0,r.kt)("h3",{id:"msgcreateobject-proto"},"MsgCreateObject Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCreateObject {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator defines the account address of object uploader\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n\n  // object_name defines the name of object\n  string object_name = 3;\n\n  // payload_size defines size of the object\'s payload\n  uint64 payload_size = 4;\n\n  // visibility means the object is private or public. if private, only object owner or grantee can access it,\n  // otherwise every greenfield user can access it.\n  VisibilityType visibility = 5;\n\n  // content_type defines a standard MIME type describing the format of the object.\n  string content_type = 6;\n\n  // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n  common.Approval primary_sp_approval = 7;\n\n  // expect_checksums defines a list of hashes which was generate by redundancy algorithm.\n  repeated bytes expect_checksums = 8;\n\n  // redundancy_type can be ec or replica\n  RedundancyType redundancy_type = 9;\n}\n')),(0,r.kt)("h3",{id:"bucketinfo-proto"},"BucketInfo Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message BucketInfo {\n  // owner is the account address of bucket creator, it is also the bucket owner.\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name is a globally unique name of bucket\n  string bucket_name = 2;\n  // visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it.\n  VisibilityType visibility = 3;\n  // id is the unique identification for bucket.\n  string id = 4 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // source_type defines which chain the user should send the bucket management transactions to\n  SourceType source_type = 5;\n  // create_at define the block timestamp when the bucket created.\n  int64 create_at = 6;\n  // payment_address is the address of the payment account\n  string payment_address = 7 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // global_virtual_group_family_id defines the unique id of gvg family\n  uint32 global_virtual_group_family_id = 8;\n  // charged_read_quota defines the traffic quota for read in bytes per month.\n  // The available read data for each user is the sum of the free read data provided by SP and\n  // the ChargeReadQuota specified here.\n  uint64 charged_read_quota = 9;\n  // bucket_status define the status of the bucket.\n  BucketStatus bucket_status = 10;\n}\n')),(0,r.kt)("h3",{id:"objectinfo-proto"},"ObjectInfo Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message ObjectInfo {\n  // owner is the object owner\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // creator is the address of the uploader, it always be same as owner address\n  string creator = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name is the name of the bucket\n  string bucket_name = 3;\n  // object_name is the name of object\n  string object_name = 4;\n  // id is the unique identifier of object\n  string id = 5 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  uint32 local_virtual_group_id = 6;\n  // payloadSize is the total size of the object payload\n  uint64 payload_size = 7;\n  // visibility defines the highest permissions for object. When an object is public, everyone can access it.\n  VisibilityType visibility = 8;\n  // content_type define the format of the object which should be a standard MIME type.\n  string content_type = 9;\n  // create_at define the block timestamp when the object is created\n  int64 create_at = 10;\n  // object_status define the upload status of the object.\n  ObjectStatus object_status = 11;\n  // redundancy_type define the type of the redundancy which can be multi-replication or EC.\n  RedundancyType redundancy_type = 12;\n  // source_type define the source of the object.\n  SourceType source_type = 13;\n  // checksums define the root hash of the pieces which stored in a SP.\n  // add omit tag to omit the field when converting to NFT metadata\n  repeated bytes checksums = 14 [(gogoproto.moretags) = "traits:\\"omit\\""];\n}\n')),(0,r.kt)("h3",{id:"params-proto"},"Params Proto"),(0,r.kt)("p",null,"Params defines the parameters for the module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message Params {\n  option (gogoproto.goproto_stringer) = false;\n  VersionedParams versioned_params = 1 [(gogoproto.nullable) = false];\n\n  // max_payload_size is the maximum size of the payload, default: 2G\n  uint64 max_payload_size = 2;\n  // relayer fee for the mirror bucket tx\n  string mirror_bucket_relayer_fee = 3;\n  // relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx\n  string mirror_bucket_ack_relayer_fee = 4;\n  // relayer fee for the mirror object tx\n  string mirror_object_relayer_fee = 5;\n  // Relayer fee for the ACK or FAIL_ACK package of the mirror object tx\n  string mirror_object_ack_relayer_fee = 6;\n  // relayer fee for the mirror object tx\n  string mirror_group_relayer_fee = 7;\n  // Relayer fee for the ACK or FAIL_ACK package of the mirror object tx\n  string mirror_group_ack_relayer_fee = 8;\n  // The maximum number of buckets that can be created per account\n  uint32 max_buckets_per_account = 9;\n  // The window to count the discontinued objects or buckets\n  uint64 discontinue_counting_window = 10;\n  // The max objects can be requested in a window\n  uint64 discontinue_object_max = 11;\n  // The max buckets can be requested in a window\n  uint64 discontinue_bucket_max = 12;\n  // The object will be deleted after the confirm period in seconds\n  int64 discontinue_confirm_period = 13;\n  // The max delete objects in each end block\n  uint64 discontinue_deletion_max = 14;\n  // The max number for deleting policy in each end block\n  uint64 stale_policy_cleanup_max = 15;\n}\n")),(0,r.kt)("h3",{id:"gfspping-proto"},"GfSpPing Proto"),(0,r.kt)("p",null,"Ping defines the heartbeat request between p2p nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpPing {\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 1;\n  // signature define the signature of sp sign the msg\n  bytes signature = 2;\n}\n")),(0,r.kt)("h3",{id:"gfsppong-proto"},"GfSpPong Proto"),(0,r.kt)("p",null,"Pong defines the heartbeat response between p2p nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message GfSpPong {\n  // nodes define the\n  repeated GfSpNode nodes = 1;\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 2;\n  // signature define the signature of sp sign the msg\n  bytes signature = 3;\n}\n\n// Node defines the p2p node info\nmessage GfSpNode {\n  // node_id defines the node id\n  string node_id = 1;\n  // multi_addr define the node multi addr\n  repeated string multi_addr = 2;\n}\n")),(0,r.kt)("h3",{id:"msgsealobject"},"MsgSealObject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgSealObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of primary SP\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n\n  // object_name defines the name of object to be sealed.\n  string object_name = 3;\n\n  // global_virtual_group_id defines the id of global virtual group\n  uint32 global_virtual_group_id = 4;\n\n  // secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can\n  // acknowledge that the payload data has received and stored.\n  bytes secondary_sp_bls_agg_signatures = 5;\n}\n')),(0,r.kt)("h3",{id:"msgrejectsealobject-proto"},"MsgRejectSealObject Proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgRejectSealObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the object owner\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n\n  // object_name defines the name of unsealed object to be reject.\n  string object_name = 3;\n}\n')),(0,r.kt)("h3",{id:"msgdiscontinuebucket"},"MsgDiscontinueBucket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgDiscontinueBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator is the sp who wants to stop serving the bucket.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket where the object which to be discontinued is stored.\n  string bucket_name = 2;\n  // the reason for the request.\n  string reason = 3;\n}\n')),(0,r.kt)("h3",{id:"msgcreateglobalvirtualgroup"},"MsgCreateGlobalVirtualGroup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCreateGlobalVirtualGroup {\n  option (cosmos.msg.v1.signer) = "storage_provider";\n\n  // storage_provider defines the operator account address of the storage provider who create the global virtual group.\n  string storage_provider = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // family_id is the identifier for the virtual group\'s family.\n  uint32 family_id = 2;\n  // secondary_sp_id is a list of secondary storage provider IDs associated with the virtual group.\n  repeated uint32 secondary_sp_ids = 3;\n  // total_deposit is the total deposit amount required for the virtual group.\n  // The tokens needs deposited and the size of storage are correlated.\n  cosmos.base.v1beta1.Coin deposit = 4 [(gogoproto.nullable) = false];\n}\n')),(0,r.kt)("h3",{id:"msgcompletemigratebucket"},"MsgCompleteMigrateBucket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCompleteMigrateBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the msg operator.\n  // The CompleteMigrateBucket transaction must be initiated by the destination SP of the migration\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket that need to be migrated\n  string bucket_name = 2;\n  // global_virtual_group_family_id defines the family id which the bucket migrate to\n  uint32 global_virtual_group_family_id = 3;\n  // gvg_mappings defines the src and dst gvg mapping relationships which the bucket migrate to\n  repeated GVGMapping gvg_mappings = 4;\n}\n')),(0,r.kt)("h3",{id:"msgupdatespstorageprice"},"MsgUpdateSpStoragePrice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgUpdateSpStoragePrice {\n  option (cosmos.msg.v1.signer) = "sp_address";\n\n  // sp address\n  string sp_address = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // read price, in bnb wei per charge byte\n  string read_price = 2 [\n    (cosmos_proto.scalar) = "cosmos.Dec",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",\n    (gogoproto.nullable) = false\n  ];\n  // free read quota, in byte\n  uint64 free_read_quota = 3;\n  // store price, in bnb wei per charge byte\n  string store_price = 4 [\n    (cosmos_proto.scalar) = "cosmos.Dec",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,r.kt)("h3",{id:"msgswapout"},"MsgSwapOut"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgSwapOut {\n  option (cosmos.msg.v1.signer) = "storage_provider";\n\n  // storage_provider defines the operator account address of the storage provider who want to swap out from the global virtual group.\n  string storage_provider = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // virtual_group_family_id is the identifier of the virtual group family.\n  // if it set to non-zero, it represents that the operator swap out as the primary storage provider\n  // it it set to zero, it represents that the operator swap out as the secondary storage provider.\n  uint32 global_virtual_group_family_id = 2;\n  // global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.\n  // It allows to be empty only when the operator is the primary storage provider.\n  repeated uint32 global_virtual_group_ids = 3;\n  // successor_sp_id is the unique id of the successor storage provider.\n  uint32 successor_sp_id = 4;\n  // approval includes an expiration time and a signature.\n  // The fields to be signed with contains the necessary information of the successor.\n  common.Approval successor_sp_approval = 5;\n}\n')),(0,r.kt)("h3",{id:"msgcompleteswapout"},"MsgCompleteSwapOut"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCompleteSwapOut {\n  option (cosmos.msg.v1.signer) = "storage_provider";\n\n  // storage_provider defines the operator account address of the storage provider who complete swap out task.\n  string storage_provider = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // virtual_group_family_id is the identifier of the virtual group family.\n  // if it set to non-zero, it represents that the operator swap out as the primary storage provider\n  // it it set to zero, it represents that the operator swap out as the secondary storage provider.\n  uint32 global_virtual_group_family_id = 2;\n  // global_virtual_group_ids is a list of global virtual group IDs associated with the swap out.\n  // It allows to be empty only when the operator is the primary storage provider.\n  repeated uint32 global_virtual_group_ids = 3;\n}\n')),(0,r.kt)("h3",{id:"msgstorageproviderexit"},"MsgStorageProviderExit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgStorageProviderExit {\n  option (cosmos.msg.v1.signer) = "storage_provider";\n\n  // storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network.\n  string storage_provider = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')),(0,r.kt)("h3",{id:"msgcompletestorageproviderexit"},"MsgCompleteStorageProviderExit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'message MsgCompleteStorageProviderExit {\n  option (cosmos.msg.v1.signer) = "storage_provider";\n\n  // storage_provider defines the operator account address of the storage provider who want to exit from the greenfield storage network.\n  string storage_provider = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')))}g.isMDXComponent=!0}}]);