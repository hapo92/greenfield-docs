"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return a?o.createElement(f,l(l({ref:t},u),{},{components:a})):o.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Resumable Upload/Download Demo",order:3},l="Resumable Upload & Resumable Download",i={unversionedId:"tutorials/dapp/resumable-upload/overview",id:"tutorials/dapp/resumable-upload/overview",title:"Resumable Upload/Download Demo",description:"* Resumable Upload is a feature that allows files to be uploaded in multiple parts, enabling the upload process to be resumed from where it left off in case of interruptions or failures. This is particularly useful for large files or situations where network connectivity may be unreliable.",source:"@site/docs/tutorials/dapp/resumable-upload/overview.md",sourceDirName:"tutorials/dapp/resumable-upload",slug:"/tutorials/dapp/resumable-upload/overview",permalink:"/greenfield-docs/docs/tutorials/dapp/resumable-upload/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/dapp/resumable-upload/overview.md",tags:[],version:"current",frontMatter:{title:"Resumable Upload/Download Demo",order:3},sidebar:"tutorialsSidebar",previous:{title:"Simple Tool for File Management (JS)",permalink:"/greenfield-docs/docs/tutorials/dapp/js-file-management/overview"},next:{title:"One-stop Hosting Services",permalink:"/greenfield-docs/docs/tutorials/dapp/4everland-hosting/overview"}},s={},p=[{value:"Resumable Upload",id:"resumable-upload",level:2},{value:"Upload Process Overview",id:"upload-process-overview",level:3},{value:"PutObject Options",id:"putobject-options",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Resumable Download",id:"resumable-download",level:2},{value:"Download Process Overview",id:"download-process-overview",level:3},{value:"Usage Example",id:"usage-example-1",level:3},{value:"Source code",id:"source-code",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resumable-upload--resumable-download"},"Resumable Upload & Resumable Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resumable Upload is a feature that allows files to be uploaded in multiple parts, enabling the upload process to be resumed from where it left off in case of interruptions or failures. This is particularly useful for large files or situations where network connectivity may be unreliable."),(0,r.kt)("li",{parentName:"ul"},"Resumable Download is a common download method in greenfield, which allows users to pause or interrupt the download process and resume it later. When a user requests to download a large file, it is often divided into multiple fixed-size chunks, and the download process uses the HTTP Range request header to specify the starting and ending positions for the download. If the user pauses or interrupts the download, the next request can resume the download from the last position by sending a request with an appropriate Range field, without having to re-download the entire file.")),(0,r.kt)("h2",{id:"resumable-upload"},"Resumable Upload"),(0,r.kt)("p",null,"Resumable upload refers to the process of uploading a file in multiple parts, where each chunk is uploaded separately.This allows the upload to be resumed from where it left off in case of interruptions or failures, rather than starting the entire upload process from the beginning."),(0,r.kt)("p",null,"During resumable upload, if an error occurs during the ",(0,r.kt)("inlineCode",{parentName:"p"},"PutObject")," operation, the subsequent upload attempts will first query the server-side for the progress of the previous upload. It will then resume the upload from the last offset."),(0,r.kt)("h3",{id:"upload-process-overview"},"Upload Process Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resumable-upload-overview",src:a(97126).Z,width:"2000",height:"1406"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start the initial ",(0,r.kt)("inlineCode",{parentName:"li"},"PutObject")," operation to upload the object."),(0,r.kt)("li",{parentName:"ol"},"If an error occurs during the upload, such as a network interruption or server error, the upload process is interrupted."),(0,r.kt)("li",{parentName:"ol"},"When resuming the upload, the next ",(0,r.kt)("inlineCode",{parentName:"li"},"PutObject")," operation will initiate a query to the server to retrieve the progress of the previous upload."),(0,r.kt)("li",{parentName:"ol"},"The server responds with the last offset from which the upload needs to resume."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"PutObject")," operation resumes the upload from offset received from the server."),(0,r.kt)("li",{parentName:"ol"},"The upload process continues from the point of interruption until completion.")),(0,r.kt)("h3",{id:"putobject-options"},"PutObject Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PutObject")," operation in the Greenfield GO-SDK API allows you to upload an object to a bucket. It provides additional options for configuration through the ",(0,r.kt)("inlineCode",{parentName:"p"},"PutObjectOptions")," struct. This document describes two new options introduced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PutObjectOptions")," struct."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PartSize (Default: 16 MB)\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"PartSize")," option determines the size of each part when uploading large objects. If the size of the object is smaller than the ",(0,r.kt)("inlineCode",{parentName:"li"},"PartSize"),", it will be uploaded as a single part. However, if the object size is larger and the ",(0,r.kt)("inlineCode",{parentName:"li"},"DisableResumable")," option is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", resumable upload will be enabled.")),(0,r.kt)("p",null,"indicate the resumable upload 's part size, uploading a large file in multiple parts. The part size is an integer multiple of the segment size."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DisableResumable (Default: false)\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"DisableResumable")," option determines whether resumable upload is enabled. When set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", resumable upload is enabled, allowing for the upload to be resumed if interrupted or failed. This is especially useful for large objects. If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", resumable upload is disabled.")),(0,r.kt)("p",null,"indicate whether need to enable resumeable upload. Resumable upload refers to the process of uploading  a file in multiple parts, where each part is uploaded separately.This allows the upload to be resumed from  where it left off in case of interruptions or failures, rather than starting the entire upload process from the beginning."),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var buffer bytes.Buffer\nerr := s.Client.PutObject(\n    ctx,\n    bucketName,\n    objectName,\n    int64(buffer.Len()),\n    bytes.NewReader(buffer.Bytes()),\n    types.PutObjectOptions{\n        PartSize:        1024 * 1024 * 16, // 16 MB\n        DisableResumable: false,\n    },\n)\n")),(0,r.kt)("p",null,"In the above example, we create a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bytes.Buffer"))," named ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"buffer"))," to hold the object data. We then use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PutObject"))," operation to upload the object to the specified bucket and object name. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PutObjectOptions"))," struct is passed with the desired options set. In this case, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PartSize"))," is set to the default value of 16 MB, and the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DisableResumable"))," is set to false to enable resumable upload."),(0,r.kt)("p",null,"Note: Make sure to replace the placeholder values (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"s.Client")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"s.ClientContext")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bucketName")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"objectName")),") with the actual variables or values relevant to your code."),(0,r.kt)("h2",{id:"resumable-download"},"Resumable Download"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FGetObjectResumable")," function in the S3 Client API allows you to perform resumable downloads for large files. This function downloads a file from the specified bucket and object name to a local file, with the ability to resume the download in case of errors or interruptions."),(0,r.kt)("h3",{id:"download-process-overview"},"Download Process Overview"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start the initial ",(0,r.kt)("inlineCode",{parentName:"li"},"FGetObjectResumable")," function to download the file."),(0,r.kt)("li",{parentName:"ol"},"During the download process, the function retrieves segments of the file from the server-side and appends them to an ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file."),(0,r.kt)("li",{parentName:"ol"},"If an error occurs during the download, such as a network interruption or server error, the download process is interrupted."),(0,r.kt)("li",{parentName:"ol"},"When resuming the download, the subsequent ",(0,r.kt)("inlineCode",{parentName:"li"},"FGetObjectResumable")," function first checks if the ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file exists."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file exists, the function verifies the checksum to ensure the integrity of the partially downloaded file."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file does not exist or the checksum is invalid, the function starts a fresh download of the object from the server."),(0,r.kt)("li",{parentName:"ol"},"The download process continues from the last offset, and appending the segments to the ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file."),(0,r.kt)("li",{parentName:"ol"},"Once the download is complete, the ",(0,r.kt)("inlineCode",{parentName:"li"},"object_{operatoraddress}{getrange}.tmp")," file can be renamed or processed as needed.")),(0,r.kt)("h3",{id:"usage-example-1"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"err = s.Client.FGetObjectResumable(\n    s.ClientContext,\n    bucketName,\n    objectName,\n    newFile,\n    types.GetObjectOptions{},\n)\n")),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"FGetObjectResumable"))," function is used to perform a resumable download of a file from the specified bucket and object name. If an error occurs during the download, the subsequent function calls will check the existence and validity of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"object_{operatoraddress}{getrange}.tmp"))," file, and resume the download from the last offset."),(0,r.kt)("h3",{id:"source-code"},"Source code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/4940fb69df1258fcb232b92e1ed4894ead516583/e2e/e2e_storage_test.go#L452"},"Go-SDK demo"))))}m.isMDXComponent=!0},97126:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/12-Resumable-Upload-80f24953b8089cd8eeb3afc71bdacda7.png"}}]);