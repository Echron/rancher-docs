"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5647],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=s,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function d(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7140:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var t=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"\u6dfb\u52a0 Ingress",description:"\u4f60\u53ef\u4ee5\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0 Ingress\uff0c\u4ece\u800c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001SSL \u7ec8\u6b62\u548c\u57fa\u4e8e\u4e3b\u673a/\u8def\u5f84\u7684\u8def\u7531\u3002\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 Rancher Ingress",weight:3042},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",title:"\u6dfb\u52a0 Ingress",description:"\u4f60\u53ef\u4ee5\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0 Ingress\uff0c\u4ece\u800c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001SSL \u7ec8\u6b62\u548c\u57fa\u4e8e\u4e3b\u673a/\u8def\u5f84\u7684\u8def\u7531\u3002\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 Rancher Ingress",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u6dfb\u52a0 Ingress",description:"\u4f60\u53ef\u4ee5\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0 Ingress\uff0c\u4ece\u800c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001SSL \u7ec8\u6b62\u548c\u57fa\u4e8e\u4e3b\u673a/\u8def\u5f84\u7684\u8def\u7531\u3002\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 Rancher Ingress",weight:3042},sidebar:"tutorialSidebar",previous:{title:"\u56db\u5c42\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},next:{title:"Ingress \u914d\u7f6e",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration"}},c={},p=[],g={toc:p};function d(e){var r=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0 Ingress\uff0c\u4ece\u800c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001SSL \u7ec8\u6b62\u548c\u57fa\u4e8e\u4e3b\u673a/\u8def\u5f84\u7684\u8def\u7531\u3002\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 Ingress \u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u5168\u5c40 DNS \u6761\u76ee\u6765\u5c06 Ingress \u4e3b\u673a\u540d\u7f16\u7a0b\u5230\u5916\u90e8 DNS\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6dfb\u52a0 Ingress \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0 > Ingresses"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u73b0\u6709\u7684",(0,o.kt)("strong",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165 Ingress \u7684",(0,o.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa Ingress \u8f6c\u53d1",(0,o.kt)("strong",{parentName:"li"},"\u89c4\u5219"),"\u3002\u6709\u5173\u914d\u7f6e\u89c4\u5219\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration#ingress-%E8%A7%84%E5%88%99%E9%85%8D%E7%BD%AE"},"\u672c\u8282"),"\u3002\u5982\u679c\u4f60\u7684\u4efb\u4f55 Ingress \u89c4\u5219\u5904\u7406\u52a0\u5bc6\u7aef\u53e3\u7684\u8bf7\u6c42\uff0c\u8bf7\u6dfb\u52a0\u8bc1\u4e66\u4ee5\u52a0\u5bc6/\u89e3\u5bc6\u901a\u4fe1\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u53ef\u9009"),"\uff1a\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u89c4\u5219"),"\u6765\u521b\u5efa\u5176\u4ed6 Ingress \u89c4\u5219\u3002\u4f8b\u5982\uff0c\u5728\u521b\u5efa Ingress \u89c4\u5219\u4ee5\u5f15\u5bfc\u4e3b\u673a\u540d\u8bf7\u6c42\u540e\uff0c\u4f60\u53ef\u80fd\u60f3\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u540e\u7aef\u6765\u5904\u7406 404\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Ingress \u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u3002Ingress \u4f1a\u5f00\u59cb\u6267\u884c\u4f60\u7684 Ingress \u89c4\u5219\u3002"))}d.isMDXComponent=!0}}]);