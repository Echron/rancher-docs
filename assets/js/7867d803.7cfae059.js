"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37309],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65932:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Resource Quota Type Reference",weight:4},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",id:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",title:"Resource Quota Type Reference",description:"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Resource Quota Type Reference",weight:4},sidebar:"tutorialSidebar",previous:{title:"Setting Container Default Resource Limits",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"},next:{title:"Monitoring Guides",permalink:"/pages-for-subheaders/monitoring-alerting-guides"}},l={},m=[],p={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Limit*"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU (in ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"millicores"),") allocated to the project/namespace.",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Reservation*"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of CPU (in millicores) guaranteed to the project/namespace.",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Limit*"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory (in bytes) allocated to the project/namespace.",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Reservation*"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of memory (in bytes) guaranteed to the project/namespace.",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Reservation"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of storage (in gigabytes) guaranteed to the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services Load Balancers"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of load balancers services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services Node Ports"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of node port services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pods"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of pods that can exist in the project/namespace in a non-terminal state (i.e., pods with a state of ",(0,o.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," equal to true).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of services that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigMaps"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of ConfigMaps that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Persistent Volume Claims"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of persistent volume claims that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Replications Controllers"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of replication controllers that can exist in the project/namespace.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Secrets"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of secrets that can exist in the project/namespace.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("strong",{parentName:"h5"},(0,o.kt)("sup",null,"*")))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. A container default resource limit can be set at the same time to avoid the need to explicitly set these limits for every workload. See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes documentation")," for more details on why this is required."))))}d.isMDXComponent=!0}}]);