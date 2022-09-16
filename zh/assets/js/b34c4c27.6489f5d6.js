"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77733],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Pod \u5b89\u5168\u7b56\u7565",weight:5600},s=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",id:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",title:"Pod \u5b89\u5168\u7b56\u7565",description:"\u672c\u6587\u4ecb\u7ecd\u7684\u96c6\u7fa4\u9009\u9879\u4ec5\u9002\u7528\u4e8e Rancher \u5df2\u5728\u5176\u4e2d\u542f\u52a8 Kubernetes \u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Pod \u5b89\u5168\u7b56\u7565",weight:5600},sidebar:"tutorialSidebar",previous:{title:"Rancher CI/CD \u6d41\u6c34\u7ebf",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},next:{title:"\u9879\u76ee\u8d44\u6e90\u914d\u989d",permalink:"/zh/pages-for-subheaders/manage-project-resource-quotas"}},l={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5e94\u7528 Pod \u5b89\u5168\u7b56\u7565",id:"\u5e94\u7528-pod-\u5b89\u5168\u7b56\u7565",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4ecb\u7ecd\u7684\u96c6\u7fa4\u9009\u9879\u4ec5\u9002\u7528\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u5df2\u5728\u5176\u4e2d\u542f\u52a8 Kubernetes \u7684\u96c6\u7fa4"),"\u3002"))),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\u8bbe\u7f6e Pod \u5b89\u5168\u7b56\u7565\uff08PSP\uff09\u3002\u5982\u679c\u5728\u521b\u5efa\u9879\u76ee\u671f\u95f4\u6ca1\u6709\u4e3a\u9879\u76ee\u5206\u914d PSP\uff0c\u4f60\u4e5f\u968f\u65f6\u53ef\u4ee5\u5c06 PSP \u5206\u914d\u7ed9\u73b0\u6709\u9879\u76ee\u3002"),(0,o.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 Rancher \u4e2d\u521b\u5efa Pod \u5b89\u5168\u7b56\u7565\u3002\u5728\u5c06\u9ed8\u8ba4 PSP \u5206\u914d\u7ed9\u73b0\u6709\u9879\u76ee\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u5206\u914d\u7684 PSP\u3002\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"\u521b\u5efa Pod \u5b89\u5168\u7b56\u7565"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565\u5206\u914d\u7ed9\u9879\u76ee\u6240\u5c5e\u7684\u96c6\u7fa4\u3002\u5982\u679c PSP \u8fd8\u6ca1\u6709\u5e94\u7528\u5230\u96c6\u7fa4\uff0c\u4f60\u65e0\u6cd5\u5c06 PSP \u5206\u914d\u7ed9\u9879\u76ee\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"\u5c06 pod \u5b89\u5168\u7b56\u7565\u6dfb\u52a0\u5230\u96c6\u7fa4"),"\u3002")),(0,o.kt)("h3",{id:"\u5e94\u7528-pod-\u5b89\u5168\u7b56\u7565"},"\u5e94\u7528 Pod \u5b89\u5168\u7b56\u7565"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u9700\u8981\u79fb\u52a8\u547d\u540d\u7a7a\u95f4\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u6dfb\u52a0 PSP \u7684\u9879\u76ee\u3002\u5728\u8be5\u9879\u76ee\u4e2d\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4ece ",(0,o.kt)("strong",{parentName:"li"},"Pod \u5b89\u5168\u7b56\u7565"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u8981\u5e94\u7528\u4e8e\u9879\u76ee\u7684 PSP\u3002\n\u5c06 PSP \u5206\u914d\u7ed9\u9879\u76ee\u5c06\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8986\u76d6\u96c6\u7fa4\u7684\u9ed8\u8ba4 PSP\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06 PSP \u5e94\u7528\u4e8e\u9879\u76ee\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06 PSP \u5e94\u7528\u5230\u540e\u7eed\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 PSP \u5e94\u7528\u5230\u9879\u76ee\u4ee5\u53ca\u9879\u76ee\u5185\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u5728\u5206\u914d PSP \u4e4b\u524d\u5df2\u7ecf\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u8fd0\u884c\u5de5\u4f5c\u8d1f\u8f7d\uff0cRancher \u4e0d\u4f1a\u68c0\u67e5\u5b83\u4eec\u662f\u5426\u7b26\u5408 PSP\u3002\u4f60\u9700\u8981\u514b\u9686\u6216\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u4ee5\u67e5\u770b\u5b83\u4eec\u662f\u5426\u901a\u8fc7 PSP\u3002"))))}m.isMDXComponent=!0}}]);