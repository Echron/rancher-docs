"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97396],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,u=m["".concat(p,".").concat(c)]||m[c]||s[c]||i;return t?a.createElement(u,l(l({ref:n},g),{},{components:t})):a.createElement(u,l({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52269:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={title:"rancher-logging Helm Chart \u9009\u9879",shortTitle:"Helm Chart \u9009\u9879",weight:4},p=void 0,d={unversionedId:"explanations/integrations-in-rancher/logging/logging-helm-chart-options",id:"explanations/integrations-in-rancher/logging/logging-helm-chart-options",title:"rancher-logging Helm Chart \u9009\u9879",description:"\u542f\u7528/\u7981\u7528 Windows \u8282\u70b9 Logging",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options",permalink:"/zh/explanations/integrations-in-rancher/logging/logging-helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"rancher-logging Helm Chart \u9009\u9879",shortTitle:"Helm Chart \u9009\u9879",weight:4},sidebar:"tutorialSidebar",previous:{title:"Logging \u7684 RBAC",permalink:"/zh/explanations/integrations-in-rancher/logging/rbac-for-logging"},next:{title:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6",permalink:"/zh/explanations/integrations-in-rancher/logging/taints-and-tolerations"}},g={},s=[{value:"\u542f\u7528/\u7981\u7528 Windows \u8282\u70b9 Logging",id:"\u542f\u7528\u7981\u7528-windows-\u8282\u70b9-logging",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-docker-\u6839\u76ee\u5f55",level:3},{value:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0 NodeSelector \u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6",id:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0-nodeselector-\u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6",level:3},{value:"\u542f\u7528 Logging \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528 SELinux",id:"\u542f\u7528-logging-\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528-selinux",level:3},{value:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90",id:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90",level:3},{value:"Systemd \u914d\u7f6e",id:"systemd-\u914d\u7f6e",level:3}],m={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u542f\u7528\u7981\u7528-windows-\u8282\u70b9-logging"},"\u542f\u7528/\u7981\u7528 Windows \u8282\u70b9 Logging"),(0,i.kt)("p",null,"\u8981\u542f\u7528\u6216\u7981\u7528 Windows \u8282\u70b9 Logging\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u4e2d\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 Cluster Dashboard UI \u5728 Windows \u96c6\u7fa4\u4e0a\u5b89\u88c5\u4e86 Logging \u5e94\u7528\u7a0b\u5e8f\uff0cWindows \u8282\u70b9\u7684 Logging \u5c31\u4f1a\u542f\u7528\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," \u4f1a\u7981\u7528\u96c6\u7fa4\u4e0a\u7684 Windows \u8282\u70b9 Logging\u3002\n\u7981\u7528\u540e\uff0c\u4ecd\u4f1a\u4ece Windows \u96c6\u7fa4\u4e2d\u7684 Linux \u8282\u70b9\u6536\u96c6\u65e5\u5fd7\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u76ee\u524d\u5b58\u5728\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/32325"},"\u95ee\u9898"),"\uff0c\u5728 Windows \u96c6\u7fa4\u4e2d\u7981\u7528 Windows Logging \u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u65f6\u4e0d\u4f1a\u5220\u9664 Windows nodeAgent\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5df2\u5b89\u88c5 Windows nodeAgents\uff0c\u7528\u6237\u53ef\u80fd\u9700\u8981\u624b\u52a8\u5378\u8f7d\u5b83\u4eec\u3002"))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-docker-\u6839\u76ee\u5f55"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"global.dockerRootDirectory"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u5c06\u786e\u4fdd\u521b\u5efa\u7684 Logging CR \u4f7f\u7528\u4f60\u6307\u5b9a\u7684\u8def\u5f84\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u9ed8\u8ba4\u7684 Docker ",(0,i.kt)("inlineCode",{parentName:"p"},"data-root")," \u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u53ea\u5f71\u54cd Linux \u8282\u70b9\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u6709\u4efb\u4f55 Windows \u8282\u70b9\uff0c\u5219\u66f4\u6539\u5c06\u4e0d\u9002\u7528\u4e8e\u8fd9\u4e9b\u8282\u70b9\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0-nodeselector-\u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6"},"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0 NodeSelector \u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u8bbe\u7f6e\uff0c\u5e76\u901a\u8fc7\u7f16\u8f91 Logging Helm Chart \u503c\u6765\u6dfb\u52a0\u5176\u4ed6",(0,i.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5fcd\u5ea6"),"\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u542f\u7528-logging-\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528-selinux"},"\u542f\u7528 Logging \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528 SELinux"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u8981\u6c42\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Logging v2 \u5df2\u5728 RHEL/CentOS 7 \u548c 8 \u4e0a\u4f7f\u7528 SELinux \u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"\u5b89\u5168\u589e\u5f3a\u578b Linux (SELinux)")," \u662f\u5bf9 Linux \u7684\u5b89\u5168\u589e\u5f3a\u3002\u88ab\u653f\u5e9c\u673a\u6784\u4f7f\u7528\u4e4b\u540e\uff0cSELinux \u5df2\u6210\u4e3a\u884c\u4e1a\u6807\u51c6\uff0c\u5e76\u5728 CentOS 7 \u548c 8 \u4e0a\u9ed8\u8ba4\u542f\u7528\u3002"),(0,i.kt)("p",null,"\u8981\u914d\u5408\u4f7f\u7528 Logging V2 \u4e0e SELinux\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u6839\u636e",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/selinux-rpm#%E5%AE%89%E8%A3%85-rancher-selinux-rpm"},"\u6b64\u9875\u9762"),"\u7684\u5b89\u88c5\u8bf4\u660e\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u5728\u5b89\u88c5 Logging \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u4e2d\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," \u66f4\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f7f Chart \u652f\u6301 SELinux\u3002"),(0,i.kt)("h3",{id:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90"},"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4f1a\u6536\u96c6\u6240\u6709\u7c7b\u578b\u96c6\u7fa4\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#control-plane-components"},"controlplane \u7ec4\u4ef6"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"\u8282\u70b9\u7ec4\u4ef6"),"\u7684\u65e5\u5fd7\u3002"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cRancher \u4e5f\u80fd\u6536\u96c6\u5176\u4ed6\u7684\u65e5\u5fd7\u3002"),(0,i.kt)("p",null,"\u4e0b\u8868\u603b\u7ed3\u4e86\u6bcf\u79cd\u8282\u70b9\u7c7b\u578b\u53ef\u4ee5\u6536\u96c6\u7684\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u65e5\u5fd7\u6765\u6e90"),(0,i.kt)("th",{parentName:"tr",align:null},"Linux \u8282\u70b9\uff08\u5305\u62ec\u5728 Windows \u96c6\u7fa4\u4e2d\uff09"),(0,i.kt)("th",{parentName:"tr",align:null},"Windows \u8282\u70b9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"K3s"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AKS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EKS"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GKE"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"\u8981\u5c06\u6258\u7ba1 Kubernetes \u7684\u63d0\u4f9b\u5546\u4f5c\u4e3a\u989d\u5916\u7684\u65e5\u5fd7\u6765\u6e90\uff0c\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Logging Helm Chart \u65f6\uff0c\u8bf7\u542f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"Enable enhanced cloud provider logging")," \u9009\u9879\u3002"),(0,i.kt)("p",null,"\u542f\u7528\u540e\uff0cRancher \u4f1a\u6536\u96c6\u63d0\u4f9b\u5546\u5f00\u653e\u53ef\u7528\u7684\u6240\u6709\u5176\u4ed6\u8282\u70b9\u548c controlplane \u65e5\u5fd7\uff0c\u4e0d\u540c\u63d0\u4f9b\u5546\u53ef\u80fd\u6709\u6240\u4e0d\u540c\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u4f7f\u7528\u4e86\u4e91\u63d0\u4f9b\u5546\u7684\u65e5\u5fd7\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982 AWS CloudWatch \u6216 Google Cloud Operations Suite\uff08\u4ee5\u524d\u79f0\u4e3a Stackdriver\uff09\uff0c\u7531\u4e8e\u539f\u751f\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u4e0d\u53d7\u9650\u5236\u5730\u8bbf\u95ee\u6240\u6709\u65e5\u5fd7\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u542f\u7528\u6b64\u9009\u9879\u3002"),(0,i.kt)("h3",{id:"systemd-\u914d\u7f6e"},"Systemd \u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 Rancher Logging \u4e2d\uff0c\u4f60\u5fc5\u987b\u4e3a K3s \u548c RKE2 Kubernetes \u53d1\u884c\u7248\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemdLogPath"),"\u3002"),(0,i.kt)("p",null,"K3s \u548c RKE2 Kubernetes \u53d1\u884c\u7248\u5c06\u65e5\u5fd7\u5199\u5165\u5230 journald\uff0c\u5b83\u662f systemd \u7684\u5b50\u7cfb\u7edf\uff0c\u7528\u4e8e\u65e5\u5fd7\u8bb0\u5f55\u3002\u8981\u6536\u96c6\u8fd9\u4e9b\u65e5\u5fd7\uff0c\u4f60\u9700\u8981\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"systemdLogPath"),"\u3002\u9ed8\u8ba4\u8def\u5f84\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"run/log/journal"),"\uff0c\u4f46\u67d0\u4e9b Linux \u53d1\u884c\u7248\u4e0d\u9ed8\u8ba4\u4f7f\u7528\u8be5\u8def\u5f84\u3002\u4f8b\u5982\uff0cUbuntu \u9ed8\u8ba4\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"var/log/journal"),"\u3002\u8981\u786e\u5b9a\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"systemdLogPath")," \u914d\u7f6e\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Systemd \u914d\u7f6e\u6b65\u9aa4\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},'cat /etc/systemd/journald.conf | grep -E ^\\#?Storage | cut -d"=" -f2'),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"persistent"),"\uff0c\u5219\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/journal"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"volatile"),"\uff0c\u5219\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),"\uff0c\u5219\u68c0\u67e5 ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," \u662f\u5426\u5b58\u5728\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," \u5b58\u5728\uff0c\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/journal"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," \u4e0d\u5b58\u5728\uff0c\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),"\u3002")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u8fd4\u56de\u7684\u503c\u4e0d\u5305\u62ec\u5728\u4e0a\u8ff0\u63cf\u8ff0\u4e2d\uff0cRancher Logging \u5c06\u65e0\u6cd5\u6536\u96c6 controlplane \u65e5\u5fd7\u3002\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u4f60\u9700\u8981\u5728\u6bcf\u4e2a controlplane \u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5728 journald.conf \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage=volatile"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u542f\u4e3b\u673a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),"\u3002")))))}c.isMDXComponent=!0}}]);