"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6339],{84262:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const r={title:"Downloader"},l="Downloader",s={unversionedId:"guide/storage-provider/modules/downloader",id:"guide/storage-provider/modules/downloader",title:"Downloader",description:"Downloader is responsible for downloading object data (including range download) and challenge piece. The workflow of Downloader users can refer Downloader. We currently abstract SP as the GfSp framework, which provides users with customizable capabilities to meet their specific requirements. Downloader module provides an abstract interface, which is called Downloader, as follows:",source:"@site/docs/guide/storage-provider/modules/downloader.md",sourceDirName:"guide/storage-provider/modules",slug:"/guide/storage-provider/modules/downloader",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/downloader",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/downloader.md",tags:[],version:"current",frontMatter:{title:"Downloader"},sidebar:"guideSidebar",previous:{title:"Uploader",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/uploader"},next:{title:"Signer",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/signer"}},d={},i=[{value:"ObjectTask",id:"objecttask",level:2},{value:"DownloadObjectTask",id:"downloadobjecttask",level:2},{value:"DownloadPieceTask",id:"downloadpiecetask",level:2},{value:"ChallengePieceTask",id:"challengepiecetask",level:2},{value:"GfSp Framework Downloader Code",id:"gfsp-framework-downloader-code",level:2}],c={toc:i},p="wrapper";function u(e){let{components:o,...t}=e;return(0,n.kt)(p,(0,a.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"downloader"},"Downloader"),(0,n.kt)("p",null,"Downloader is responsible for downloading object data (including range download) and challenge piece. The workflow of Downloader users can refer ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/introduction/workflow#downloader"},"Downloader"),". We currently abstract SP as the GfSp framework, which provides users with customizable capabilities to meet their specific requirements. Downloader module provides an abstract interface, which is called ",(0,n.kt)("inlineCode",{parentName:"p"},"Downloader"),", as follows:"),(0,n.kt)("p",null,"Downloader is an abstract interface to handle getting object requests from users' account, and getting challenge info requests from other components in the system."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Downloader interface {\n    Modular\n    // PreDownloadObject prepares to handle DownloadObject, it can do some checks\n    // such as checking for duplicates, if limitation of SP has been reached, etc.\n    PreDownloadObject(ctx context.Context, task task.DownloadObjectTask) error\n    // HandleDownloadObjectTask handles the DownloadObject and get data from piece store.\n    HandleDownloadObjectTask(ctx context.Context, task task.DownloadObjectTask) ([]byte, error)\n    // PostDownloadObject is called after HandleDownloadObjectTask, it can recycle\n    // resources, make statistics and do some other operations..\n    PostDownloadObject(ctx context.Context, task task.DownloadObjectTask)\n\n    // PreDownloadPiece prepares to handle DownloadPiece, it can do some checks such as check for duplicates,\n    // if limitation of SP has been reached, etc.\n    PreDownloadPiece(ctx context.Context, task task.DownloadPieceTask) error\n    // HandleDownloadPieceTask handles the DownloadPiece and get data from piece store.\n    HandleDownloadPieceTask(ctx context.Context, task task.DownloadPieceTask) ([]byte, error)\n    // PostDownloadPiece is called after HandleDownloadPieceTask, it can recycle\n    // resources, make statistics and do some other operations.\n    PostDownloadPiece(ctx context.Context, task task.DownloadPieceTask)\n\n    // PreChallengePiece prepares to handle ChallengePiece, it can do some checks\n    // such as checking for duplicates, if limitation of SP has been reached, etc.\n    PreChallengePiece(ctx context.Context, task task.ChallengePieceTask) error\n    // HandleChallengePiece handles ChallengePiece, get piece data from piece store and get integrity hash from db.\n    HandleChallengePiece(ctx context.Context, task task.ChallengePieceTask) ([]byte, [][]byte, []byte, error)\n    // PostChallengePiece is called after HandleChallengePiece, it can recycle resources, make statistics\n    // and do some other operations.\n    PostChallengePiece(ctx context.Context, task task.ChallengePieceTask)\n    // QueryTasks queries download/challenge tasks that running on downloader by task sub-key.\n    QueryTasks(ctx context.Context, subKey task.TKey) ([]task.Task, error)\n}\n")),(0,n.kt)("p",null,"Downloader interface inherits ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/lifecycle_modular#modular-interface"},"Modular interface"),", so Downloader module can be managed by lifecycle and resource manager. In terms of the functions provided by Downloader module, it can be divided into three parts: DownloadObject, DownloadPiece and ChallengePiece. They all have three methods: PreXXX, HanldeXXX and PostXXX. Therefore, you can rewrite these methods to meet your own requirements. As we can see from the second parameter of the methods defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"Downloader")," interface, DownloadObject is splitted into ",(0,n.kt)("inlineCode",{parentName:"p"},"DownloadObjectTask"),", DownloadPiece is splitted into ",(0,n.kt)("inlineCode",{parentName:"p"},"DownloadPieceTask")," and ChallengePiece is splitted into ",(0,n.kt)("inlineCode",{parentName:"p"},"ChallengePieceTask"),". They are also defined as an interface. We can query DownloadObject, DownloadPiece and ChallengePiece tasks that we care about by ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryTasks")," method through using subKey."),(0,n.kt)("h2",{id:"objecttask"},"ObjectTask"),(0,n.kt)("p",null,"DownloadObjectTask, DownloadPieceTask and ChallengePieceTask all inherits ",(0,n.kt)("inlineCode",{parentName:"p"},"ObjectTask")," interface. ObjectTask associated with an object and storage params, and records the information of different stages of the object. Considering the change of storage params on the greenfield, the storage params of each object should be determined when it is created, and it should not be queried during the task flow, which is inefficient and error-prone."),(0,n.kt)("p",null,"ObjectTask interfaces definition is shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask"))),(0,n.kt)("p",null,"You can overwrite all these methods in your own."),(0,n.kt)("p",null,"The corresponding protobuf definition is shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,n.kt)("h2",{id:"downloadobjecttask"},"DownloadObjectTask"),(0,n.kt)("p",null,"DownloadObjectTask is an abstract interface to record the information for downloading pieces of object payload data. DownloadObjectTask inherits ObjectTask interface. DownloadObjectTask also defines seven methods to help query info or set data. You can overwrite all these methods in your own."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#downloadobjecttask"},"DownloadObjectTask"))),(0,n.kt)("p",null,"You can overwrite all these methods in your own."),(0,n.kt)("p",null,"The corresponding protobuf definition is shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspdownloadobjecttask-proto"},"GfSpDownloadObjectTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#bucketinfo-proto"},"BucketInfo"))),(0,n.kt)("h2",{id:"downloadpiecetask"},"DownloadPieceTask"),(0,n.kt)("p",null,"DownloadPieceTask is an abstract interface to record the information for downloading piece data. DownloadPieceTask inherits ObjectTask interface. DownloadPieceTask also defines ten methods to help query info or set data. You can overwrite all these methods in your own."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#downloadpiecetask"},"DownloadPieceTask"))),(0,n.kt)("p",null,"You can overwrite all these methods in your own."),(0,n.kt)("p",null,"The corresponding protobuf definition is shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspdownloadpiecetask-proto"},"GfSpDownloadPieceTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#bucketinfo-proto"},"BucketInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,n.kt)("h2",{id:"challengepiecetask"},"ChallengePieceTask"),(0,n.kt)("p",null,"It is always the first priority of any decentralized storage network to guarantee data integrity and availability. We use data challenge instead of storage proof to get better HA. There will be some data challenges to random pieces on greenfield chain continuously. And the SP, which stores the challenged piece, uses the challenge workflow to response. Each SP splits the object payload data to segments, and store segment data to piece store and store segment checksum to SP DB."),(0,n.kt)("p",null,"ChallengePieceTask is an abstract interface to record the information for get challenge piece info, the validator get challenge info to confirm whether the sp stores the user's data correctly."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#challengepiecetask"},"ChallengePieceTask"))),(0,n.kt)("p",null,"ChallengePieceTask defines 15 methods to help query info or set data. You can overwrite all these methods in your own."),(0,n.kt)("p",null,"The corresponding protobuf definition is shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspchallengepiecetask-proto"},"GfSpChallengePieceTask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#bucketinfo-proto"},"BucketInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,n.kt)("h2",{id:"gfsp-framework-downloader-code"},"GfSp Framework Downloader Code"),(0,n.kt)("p",null,"Downloader module code implementation: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/modular/downloader"},"Downloader")))}u.isMDXComponent=!0}}]);