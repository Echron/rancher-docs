"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25800],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(t),k=s,h=d["".concat(l,".").concat(k)]||d[k]||c[k]||a;return t?n.createElement(h,u(u({ref:r},p),{},{components:t})):n.createElement(h,u({ref:r},p))}));function k(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,u=new Array(a);u[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,u[1]=o;for(var i=2;i<a;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58037:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),u=["components"],o={title:"Kubernetes \u8d44\u6e90",weight:18},l=void 0,i={unversionedId:"pages-for-subheaders/kubernetes-resources-setup",id:"pages-for-subheaders/kubernetes-resources-setup",title:"Kubernetes \u8d44\u6e90",description:"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u67e5\u770b\u548c\u64cd\u4f5c Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u8d44\u6e90\u548c CRD\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/kubernetes-resources-setup.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-resources-setup",permalink:"/zh/pages-for-subheaders/kubernetes-resources-setup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/kubernetes-resources-setup.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Kubernetes \u8d44\u6e90",weight:18},sidebar:"tutorialSidebar",previous:{title:"\u6ce8\u518c\u73b0\u6709\u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},next:{title:"Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u548c Pod",permalink:"/zh/pages-for-subheaders/workloads-and-pods"}},p={},c=[{value:"\u5de5\u4f5c\u8d1f\u8f7d",id:"\u5de5\u4f5c\u8d1f\u8f7d",level:2},{value:"\u8d1f\u8f7d\u5747\u8861\u548c Ingress",id:"\u8d1f\u8f7d\u5747\u8861\u548c-ingress",level:2},{value:"\u8d1f\u8f7d\u5747\u8861\u5668",id:"\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"Ingress",id:"ingress",level:4},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:2},{value:"\u6d41\u6c34\u7ebf",id:"\u6d41\u6c34\u7ebf",level:2},{value:"\u5e94\u7528\u7a0b\u5e8f",id:"\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"Kubernetes \u8d44\u6e90",id:"kubernetes-\u8d44\u6e90",level:2}],d={toc:c};function k(e){var r=e.components,t=(0,s.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u67e5\u770b\u548c\u64cd\u4f5c Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u8d44\u6e90\u548c CRD\u3002"),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u8d1f\u8f7d"},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/workloads-and-pods"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u96c6\u7fa4\u8282\u70b9\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u662f\u5305\u542b\u7528\u4e8e\u8fd0\u884c\u5e94\u7528\u7684 pod \u7684\u5bf9\u8c61\uff0c\u4ee5\u53ca\u4e3a\u90e8\u7f72\u884c\u4e3a\u8bbe\u7f6e\u89c4\u5219\u7684\u5143\u6570\u636e\u3002\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u90e8\u7f72\u5728\u96c6\u7fa4\u8303\u56f4\u5185\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5728\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u5185\u3002"),(0,a.kt)("p",null,"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u955c\u50cf\u8fdb\u884c\u90e8\u7f72\u3002\u53ef\u4f9b\u9009\u62e9\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/workloads-and-pods#%E5%B7%A5%E4%BD%9C%E8%B4%9F%E8%BD%BD%E7%B1%BB%E5%9E%8B"},"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b"),"\u6709\u591a\u79cd\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u51b3\u5b9a\u4e86\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u8fd0\u884c\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5728\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u5b83\u3002\u4f60\u53ef\u4ee5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5de5\u4f5c\u8d1f\u8f7d",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},"\u5347\u7ea7"),"\u5230\u5b83\u8fd0\u884c\u7684\u5e94\u7528\u7684\u66f4\u65b0\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5347\u7ea7\u51fa\u73b0\u95ee\u9898\uff0c\u5c06\u5de5\u4f5c\u8d1f\u8f7d",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},"\u56de\u6eda"),"\u5230\u4ee5\u524d\u7684\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"},"\u6dfb\u52a0\u4e00\u4e2a sidecar"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u652f\u6301\u4e3b\u8981\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,a.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861\u548c-ingress"},"\u8d1f\u8f7d\u5747\u8861\u548c Ingress"),(0,a.kt)("h3",{id:"\u8d1f\u8f7d\u5747\u8861\u5668"},"\u8d1f\u8f7d\u5747\u8861\u5668"),(0,a.kt)("p",null,"\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u5b83\u4ec5\u5728\u96c6\u7fa4\u4e2d\u53ef\u7528\u3002\u65e0\u6cd5\u4ece\u5916\u90e8\u8bbf\u95ee\u5b83\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4ece\u5916\u90e8\u8bbf\u95ee\uff0c\u5219\u5fc5\u987b\u5411\u96c6\u7fa4\u6dfb\u52a0\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u5982\u679c\u7528\u6237\u77e5\u9053\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP \u5730\u5740\u548c\u5e94\u7528\u7684\u7aef\u53e3\u53f7\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u53ef\u4ee5\u4e3a\u5916\u90e8\u8fde\u63a5\u521b\u5efa\u4e00\u4e2a\u8bbf\u95ee\u96c6\u7fa4\u7684\u7f51\u5173\u3002"),(0,a.kt)("p",null,"Rancher \u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u8d1f\u8f7d\u5747\u8861\u5668\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#%E5%9B%9B%E5%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8"},"Layer-4 \u8d1f\u8f7d\u5747\u8861\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#%E4%B8%83%E5%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8"},"Layer-7 \u8d1f\u8f7d\u5747\u8861\u5668"))),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002"),(0,a.kt)("h4",{id:"ingress"},"Ingress"),(0,a.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\u5668\u53ea\u80fd\u5904\u7406\u6bcf\u4e2a service \u7684\u4e00\u4e2a IP \u5730\u5740\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u5728\u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e86\u591a\u4e2a service\uff0c\u5219\u5fc5\u987b\u4e3a\u6bcf\u4e2a service \u914d\u5907\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u8fd0\u884c\u591a\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u82b1\u8d39\u53ef\u80fd\u975e\u5e38\u9ad8\u6602\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Ingress \u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,a.kt)("p",null,"Ingress \u662f\u4e00\u7ec4\u5145\u5f53\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u89c4\u5219\u3002Ingress \u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a Ingress Controller \u4e00\u8d77\u52a8\u6001\u8def\u7531 service \u7684\u8bf7\u6c42\u3002Ingress \u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u96c6\u7fa4\u4e2d\u7684 Ingress Controller \u4f1a\u5bf9\u8d1f\u8f7d\u5747\u8861\u5668\u8fdb\u884c\u914d\u7f6e\uff0c\u4ece\u800c\u6839\u636e\u4f60\u914d\u7f6e\u7684 service \u5b50\u57df\u6216\u8def\u5f84\u89c4\u5219\u5c06\u8bf7\u6c42\u5b9a\u5411\u5230\u6b63\u786e\u7684 service\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Ingress"),"\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 Ingress \u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u5168\u5c40 DNS \u6761\u76ee\u6765\u5c06 Ingress \u4e3b\u673a\u540d\u7f16\u7a0b\u5230\u5916\u90e8 DNS\u3002"),(0,a.kt)("h2",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,a.kt)("p",null,"\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5668\u548c/\u6216 Ingress \u5c06\u96c6\u7fa4\u516c\u5f00\u7ed9\u5916\u90e8\u8bf7\u6c42\u540e\uff0c\u4f60\u53ea\u80fd\u901a\u8fc7 IP \u5730\u5740\u8bbf\u95ee\u96c6\u7fa4\u3002\u8981\u521b\u5efa\u53ef\u89e3\u6790\u7684\u4e3b\u673a\u540d\uff0c\u4f60\u5fc5\u987b\u521b\u5efa\u670d\u52a1\u8bb0\u5f55\uff0c\u8be5\u8bb0\u5f55\u5c06 IP \u5730\u5740\u3001\u5916\u90e8\u4e3b\u673a\u540d\u3001DNS \u8bb0\u5f55\u522b\u540d\u3001\u5de5\u4f5c\u8d1f\u8f7d\u6216\u6807\u8bb0\u7684 pod \u6620\u5c04\u5230\u7279\u5b9a\u4e3b\u673a\u540d\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"\u670d\u52a1\u53d1\u73b0"),"\u3002"),(0,a.kt)("h2",{id:"\u6d41\u6c34\u7ebf"},"\u6d41\u6c34\u7ebf"),(0,a.kt)("p",null,"\u5728\u4f60\u7684\u9879\u76ee\u4e2d",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines#1-%E9%85%8D%E7%BD%AE%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E6%8F%90%E4%BE%9B%E5%95%86"},"\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u7a0b\u5e8f"),"\u540e\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4ed3\u5e93\u5e76\u5f00\u59cb\u4e3a\u6bcf\u4e2a\u4ed3\u5e93\u914d\u7f6e\u6d41\u6c34\u7ebf\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/pipelines"},"\u6d41\u6c34\u7ebf"),"\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528\u7a0b\u5e8f"},"\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u9664\u4e86\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u4e2a\u7ec4\u4ef6\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 Rancher \u5e94\u7528\u5546\u5e97\u6765\u542f\u52a8\u5e94\u7528\uff0c\u5373 Helm Chart\u3002"),(0,a.kt)("h2",{id:"kubernetes-\u8d44\u6e90"},"Kubernetes \u8d44\u6e90"),(0,a.kt)("p",null,"\u5728 Rancher \u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c",(0,a.kt)("em",{parentName:"p"},"\u8d44\u6e90")," \u662f\u652f\u6301 Pod \u64cd\u4f5c\u7684\u6587\u4ef6\u548c\u6570\u636e\u3002\u5728 Rancher \u4e2d\uff0c\u8bc1\u4e66\u3001\u955c\u50cf\u4ed3\u5e93\u548c\u5bc6\u6587\u90fd\u88ab\u89c6\u4e3a\u8d44\u6e90\u3002\u4f46\u662f\uff0cKubernetes \u5c06\u8d44\u6e90\u5212\u5206\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587\uff08secret\uff09"),"\u3002\u56e0\u6b64\uff0c\u5728\u5355\u4e2a\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u5404\u4e2a\u8d44\u6e90\u5fc5\u987b\u5177\u6709\u552f\u4e00\u7684\u540d\u79f0\u4ee5\u907f\u514d\u51b2\u7a81\u3002\u8d44\u6e90\u4e3b\u8981\u7528\u4e8e\u627f\u8f7d\u654f\u611f\u4fe1\u606f\uff0c\u4f46\u4e5f\u6709\u5176\u4ed6\u7528\u9014\u3002"),(0,a.kt)("p",null,"\u8d44\u6e90\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"\u8bc1\u4e66"),"\uff1a\u7528\u4e8e\u52a0\u5bc6/\u89e3\u5bc6\u8fdb\u5165\u6216\u79bb\u5f00\u96c6\u7fa4\u7684\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMap"),"\uff1a\u5b58\u50a8\u4e00\u822c\u914d\u7f6e\u4fe1\u606f\u7684\u6587\u4ef6\uff0c\u4f8b\u5982\u4e00\u7ec4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"\u5bc6\u6587"),"\uff1a\u5b58\u50a8\u5bc6\u7801\u3001token \u6216\u5bc6\u94a5\u7b49\u654f\u611f\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"\u955c\u50cf\u4ed3\u5e93"),"\uff1a\u643a\u5e26\u7528\u4e8e\u9a8c\u8bc1\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u51ed\u8bc1\u7684\u6587\u4ef6\u3002")))}k.isMDXComponent=!0}}]);