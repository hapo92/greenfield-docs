"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9485],{79573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={},o="Overview",s={unversionedId:"guide/storage-provider/introduction/overview",id:"guide/storage-provider/introduction/overview",title:"Overview",description:"What is the Greenfield Storage Provider",source:"@site/docs/guide/storage-provider/introduction/overview.md",sourceDirName:"guide/storage-provider/introduction",slug:"/guide/storage-provider/introduction/overview",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/introduction/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Become Validator",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/become-validator"},next:{title:"SP Workflow",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/workflow"}},l={},d=[{value:"What is the Greenfield Storage Provider",id:"what-is-the-greenfield-storage-provider",level:2},{value:"How the Greenfield Storage Providers works",id:"how-the-greenfield-storage-providers-works",level:2},{value:"Architecture",id:"architecture",level:2},{value:"How to implement customized requirements in Greenfield SP",id:"how-to-implement-customized-requirements-in-greenfield-sp",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"what-is-the-greenfield-storage-provider"},"What is the Greenfield Storage Provider"),(0,n.kt)("p",null,"Storage Provider (SP) is an infrastructure provider for storage services. They work in synergy with Greenfield validators\nto provide a complete storage service. Validators store metadata and financial ledgers with consensus, while SPs store\nthe actual data (payload data) of objects using the Greenfield chain as the ledger and single source of truth. SPs provide\na range of convenient services for users and dApps to manage data on Greenfield."),(0,n.kt)("h2",{id:"how-the-greenfield-storage-providers-works"},"How the Greenfield Storage Providers works"),(0,n.kt)("p",null,"SPs need to register themselves firstly by depositing on the Greenfield blockchain as their ",(0,n.kt)("inlineCode",{parentName:"p"},"Service Stake"),". The Greenfield\nvalidators will then conduct a governance procedure to vote to elect the SPs. When joining and leaving the network, SPs\nmust follow specific actions to ensure data redundancy for users, or they will face fines on their ",(0,n.kt)("inlineCode",{parentName:"p"},"Service Stake"),"."),(0,n.kt)("p",null,"SPs provide publicly accessible APIs that allow users to upload, download and manage data. These APIs are designed to be\nsimilar to Amazon S3 APIs, making it easier for existing developers to write code for them. SPs are responsible for\nresponding to user requests to write (upload) and read (download) data, as well as managing user permissions and authentications."),(0,n.kt)("p",null,"Each SP maintains its own local full node, allowing for a strong connection with the Greenfield network. This enables the\nSP to directly monitor state changes, properly index data, send transaction requests in a timely manner and manage local data accurately."),(0,n.kt)("p",null,"To encourage SPs to showcase their capabilities and provide a professional storage system with high-quality SLA, it is\nrecommended that they advertise their information and prove to the community."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"sp-arch-flow",src:r(80503).Z,width:"1726",height:"1538"})),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("i",null,"Storage Provider Architecture")),(0,n.kt)("p",null,"SP contains fifteen core modules as shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gater"),": It serves as the gateway for SP, providing HTTP services and adhering to the S3 protocol. It generates corresponding tasks to user requests and\nforwards them to other modules within SP. Since Gater does not allow customization, no interface is defined in the modular file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Authenticator"),": It is responsible for verifying authentication.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Approver"),": It is responsible for handling approval requests, specifically ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateBucketApproval")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateObjectApproval"),", etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Uploader"),": It handles the ",(0,n.kt)("inlineCode",{parentName:"p"},"PutObject")," requests from user accounts and stores payload data into piece store of the primary SP.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Downloader"),": It is responsible for handling ",(0,n.kt)("inlineCode",{parentName:"p"},"GetObject")," requests from user accounts and ",(0,n.kt)("inlineCode",{parentName:"p"},"GetChallengeInfo")," requests from other components in the Greenfield system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Executor"),": It is responsible for handling background tasks. This module can ask tasks from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager")," module, execute them and report the results or status back to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Manager"),": It is responsible for managing task scheduling of SP and other management functions, such as bucket migration and sp exit procedure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"P2P"),": It is responsible for handling the interaction of control information between SPs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Receiver"),": It receives data from the primary SP, calculates the integrity hash of the payload data, signs it, and returns it to the primary SP for sealing on Greenfield blockchain.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Signer"),": It handles the signing of the SP data on the Greenfield blockchain operator and holds all the SP's private keys. Due to the sequence number of the SP account, it must be a singleton.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Metadata"),": It is used to provide efficient query interfaces for meta info in SP. This module achieves low latency and high-performance SP requirements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BlockSyncer"),": It records block info in Greenfield blockchain.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"PieceStore"),": It interacts with underlying storage vendors, eg. AWS S3, MinIO, OSS, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SPDB"),": It stores all the contexts of the background jobs and the metadata of SP.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BSDB"),": It stores all the events' data from the Greenfield blockchain and provides them to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadata")," service of SP."))),(0,n.kt)("h2",{id:"how-to-implement-customized-requirements-in-greenfield-sp"},"How to implement customized requirements in Greenfield SP"),(0,n.kt)("p",null,"From the code level, SP is not only an implementation layer, it has been expanded into a framework called ",(0,n.kt)("inlineCode",{parentName:"p"},"GfSp"),", which allows users to implement their own logics according to their own needs. If users want to implement some specific functions, you can override these methods that are declared in the abstract interfaces. If users don't need to implement customized requirements, ",(0,n.kt)("inlineCode",{parentName:"p"},"GfSp")," will use default implementations. There are nine important layers of abstraction:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/lifecycle"},"lifecycle"),": It provides two abstract interfaces to manage services: ",(0,n.kt)("inlineCode",{parentName:"li"},"Service")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Lifecycle")," to control and manage services in SP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/module"},"module"),": It provides multiple abstract interfaces to interact with different modules in GfSp. Therefore, users can implement replated methods to meet your own requirements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/consensus"},"consensus"),": It is provides abstract interfaces about how to query data on Greenfield blockchain."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/piecestore"},"piecestore"),": It is used to interact with underlying storage systems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/spdb"},"spdb"),": It provides abstract interfaces about how to store background tasks and metadata of SP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/blob/master/core/bsdb"},"bsdb"),": It provides abstract interfaces about how to query metadata in SP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/rcmgr"},"rcmgr"),": It provides abstract interfaces about managing cpu and memory resources in SP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/task"},"task"),": It provides abstract interfaces about the smallest uint for interacting with SP background services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/core/taskqueue"},"taskqueue"),": It provides abstract interfaces about task scheduling and executing.")))}m.isMDXComponent=!0},80503:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/05-SP-Arch-662dced8b9630842297e3ae663d2da7e.jpg"}}]);