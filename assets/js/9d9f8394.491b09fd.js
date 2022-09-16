"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69360],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,b=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Troubleshooting",weight:600},s=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"This section contains information to help you troubleshoot issues when using Rancher.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Troubleshooting",weight:600},sidebar:"tutorialSidebar",previous:{title:"Rancher is No Longer Needed",permalink:"/faq/rancher-is-no-longer-needed"},next:{title:"Kubernetes Components",permalink:"/pages-for-subheaders/kubernetes-components"}},p={},c=[],m={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section contains information to help you troubleshoot issues when using Rancher."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-components"},"Kubernetes components")),(0,a.kt)("p",{parentName:"li"},"  If you need help troubleshooting core Kubernetes cluster components like:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nginx-proxy")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources"},"Kubernetes resources")),(0,a.kt)("p",{parentName:"li"},"  Options for troubleshooting Kubernetes resources like Nodes, Ingress Controller and Rancher Agents are described in this section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/networking"},"Networking")),(0,a.kt)("p",{parentName:"li"},"  Steps to troubleshoot networking issues can be found here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/dns"},"DNS")),(0,a.kt)("p",{parentName:"li"},"  When you experience name resolution issues in your cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/rancher-ha"},"Troubleshooting Rancher installed on Kubernetes")),(0,a.kt)("p",{parentName:"li"},"  If you experience issues with your ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Rancher server installed on Kubernetes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/logging"},"Logging")),(0,a.kt)("p",{parentName:"li"},"  Read more about what log levels can be configured and how to configure a log level.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs"},"User ID Tracking in Audit Logs")),(0,a.kt)("p",{parentName:"li"},"  Read more about how a Rancher Admin can trace an event from the Rancher audit logs and into the Kubernetes audit logs using the external Identity Provider username.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"Expired Webhook Certificates"),"  "),(0,a.kt)("p",{parentName:"li"},"  Read more about how to rotate a Rancher webhook certificate secret after it expires on an annual basis."))))}h.isMDXComponent=!0}}]);