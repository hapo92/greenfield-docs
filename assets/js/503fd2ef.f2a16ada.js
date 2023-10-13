"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9723],{82015:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var t=a(87462),i=(a(67294),a(3905));const o={title:"Blockchain Command Line",index:!0,dir:{order:4}},l="Blockchain Command-Line Interface",r={unversionedId:"api/blockchain-cli/README",id:"api/blockchain-cli/README",title:"Blockchain Command Line",description:"Since Greenfield Command Line interface is derived from Cosmos, The majority of the content in this page is copied from the Cosmos SDK.",source:"@site/docs/api/blockchain-cli/README.md",sourceDirName:"api/blockchain-cli",slug:"/api/blockchain-cli/",permalink:"/greenfield-docs/docs/api/blockchain-cli/",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/blockchain-cli/README.md",tags:[],version:"current",frontMatter:{title:"Blockchain Command Line",index:!0,dir:{order:4}},sidebar:"apiReferenceSidebar",previous:{title:"RPC Endpoints",permalink:"/greenfield-docs/docs/api/endpoints"},next:{title:"Key Management",permalink:"/greenfield-docs/docs/api/blockchain-cli/key-management"}},s={},m=[{value:"Transaction Command",id:"transaction-command",level:3},{value:"Query Commands",id:"query-commands",level:3},{value:"Environment variables",id:"environment-variables",level:2}],d={toc:m},c="wrapper";function p(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-command-line-interface"},"Blockchain Command-Line Interface"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since Greenfield Command Line interface is derived from Cosmos, The majority of the content in this page is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/cli"},"Cosmos SDK"),".")),(0,i.kt)("p",null,"There is no set way to create a CLI, but Greenfield typically use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"Cobra Library"),".\nBuilding a CLI with Cobra entails defining commands, arguments, and flags. Commands understand the\nactions users wish to take, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," for creating a transaction and ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," for querying the application.\nEach command can also have nested subcommands, necessary for naming the specific transaction type.\nUsers also supply ",(0,i.kt)("strong",{parentName:"p"},"Arguments"),", such as account numbers to send coins to, and flags to modify various\naspects of the commands, such as gas prices or which node to broadcast to."),(0,i.kt)("h3",{id:"transaction-command"},"Transaction Command"),(0,i.kt)("p",null,"Here is an example of a command a user might enter to interact with ",(0,i.kt)("inlineCode",{parentName:"p"},"gnfd")," in order to send some tokens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx bank send $MY_ADDRESS $RECIPIENT 1000BNB --gas auto\n")),(0,i.kt)("p",null,"The first four strings specify the command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The subcommand ",(0,i.kt)("inlineCode",{parentName:"li"},"tx"),", which contains all commands that let users create transactions."),(0,i.kt)("li",{parentName:"ul"},"The subcommand ",(0,i.kt)("inlineCode",{parentName:"li"},"bank")," to indicate which module to route the command to ",(0,i.kt)("inlineCode",{parentName:"li"},"x/bank")," module in this case."),(0,i.kt)("li",{parentName:"ul"},"The type of transaction ",(0,i.kt)("inlineCode",{parentName:"li"},"send"),".")),(0,i.kt)("p",null,"The next two strings are arguments: the ",(0,i.kt)("inlineCode",{parentName:"p"},"from_address")," the user wishes to send from, the ",(0,i.kt)("inlineCode",{parentName:"p"},"to_address")," of the recipient,\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," they want to send. Finally, the last few strings of the command are optional flags to indicate\nhow much the user is willing to pay in fees."),(0,i.kt)("h3",{id:"query-commands"},"Query Commands"),(0,i.kt)("p",null,"Queries are objects that allow users to retrieve information about the application's state. "),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"queryCommand")," function adds all the queries available to end-users for the application. This typically includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"QueryTx")," and/or other transaction query commands from the ",(0,i.kt)("inlineCode",{parentName:"li"},"auth")," module which allow the user to search for a transaction by inputting its hash, a list of tags, or a block height. These queries allow users to see if transactions have been included in a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Account command")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"auth")," module, which displays the state (e.g. account balance) of an account given an address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validator command")," from the Cosmos SDK rpc client tools, which displays the validator set of a given height."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block command")," from the Cosmos SDK rpc client tools, which displays the block data for a given height."),(0,i.kt)("li",{parentName:"ul"},"**All module query commands the application is dependent on,")),(0,i.kt)("p",null,"Here is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"queryCommand"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"## query the metadata of BNB\ngnfd q bank denom-metadata --node https://greenfield-chain.bnbchain.org:443\n")),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Each flag is bound to its respective named environment variable. Then name of the environment variable consist of two parts "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"capital case ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," followed by flag name of the flag. ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," must be substituted with ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),". "),(0,i.kt)("li",{parentName:"ul"},"For example flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--home")," for application with basename ",(0,i.kt)("inlineCode",{parentName:"li"},"GNFD")," is bound to ",(0,i.kt)("inlineCode",{parentName:"li"},"GNFD_HOME"),". It allows reducing\nthe amount of flags typed for routine operations. For example instead of:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'gnfd --home=./ --node=<node address> --chain-id="greenfield_1017-1" tx ... --from=<key name>\n')),(0,i.kt)("p",null,"this will be more convenient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# define env variables in .env, .envrc etc\nGNFD_HOME=<path to home>\nGNFD_NODE=<node address>\nGNFD_CHAIN_ID="greenfield_1017-1"\nGNFD_KEYRING_BACKEND="file"\n\n# and later just use\ngnfd tx ... --from=<key name>\n')))}p.isMDXComponent=!0}}]);