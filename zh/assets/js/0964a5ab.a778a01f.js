"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75217],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7877:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",weight:2020},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",description:"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 \u6240\u6709 \u9879\u76ee\u3001\u8282\u70b9\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u96c6\u7fa4\u6210\u5458\u8d44\u683c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",weight:2020},sidebar:"tutorialSidebar",previous:{title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},next:{title:"Cluster Autoscaler",permalink:"/zh/pages-for-subheaders/install-cluster-autoscaler"}},p={},u=[{value:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458",id:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 ",(0,i.kt)("em",{parentName:"p"},"\u6240\u6709")," \u9879\u76ee\u3001\u8282\u70b9\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u96c6\u7fa4\u6210\u5458\u8d44\u683c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 ",(0,i.kt)("em",{parentName:"p"},"\u7279\u5b9a")," \u9879\u76ee\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects"},"\u6dfb\u52a0\u9879\u76ee\u6210\u5458"),"\u3002"))),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\u6dfb\u52a0\u96c6\u7fa4\u6210\u5458\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u96c6\u7fa4"),(0,i.kt)("p",{parentName:"li"}," \u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u96c6\u7fa4\uff08\u63a8\u8350\uff09\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#%E7%BC%96%E8%BE%91%E9%9B%86%E7%BE%A4%E6%88%90%E5%91%98"},"\u5411\u73b0\u6709\u96c6\u7fa4\u6dfb\u52a0\u6210\u5458")),(0,i.kt)("p",{parentName:"li"}," \u914d\u7f6e\u96c6\u7fa4\u540e\uff0c\u4f60\u59cb\u7ec8\u53ef\u4ee5\u5411\u96c6\u7fa4\u6dfb\u52a0\u6210\u5458\u3002"))),(0,i.kt)("h2",{id:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458"},"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458"),(0,i.kt)("p",null,"\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u7f16\u8f91\u96c6\u7fa4\u7684\u6210\u5458\uff0c\u63a7\u5236\u54ea\u4e9b Rancher \u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u4ee5\u53ca\u4ed6\u4eec\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u529f\u80fd\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u6210\u5458\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u6210\u5458\u89d2\u8272"),"\u9009\u9879\u5361\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6210\u5458"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u641c\u7d22\u8981\u6dfb\u52a0\u5230\u96c6\u7fa4\u7684\u7528\u6237\u6216\u7ec4\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u914d\u7f6e\u4e86\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u4f60\u952e\u5165\u65f6\uff0cRancher \u4f1a\u4ece\u4f60\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-authentication"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1"),"\u6e90\u8fd4\u56de\u7528\u6237\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f7f\u7528 AD \u4f46\u627e\u4e0d\u5230\u4f60\u7684\u7528\u6237\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u7684\u641c\u7d22\u5c5e\u6027\u914d\u7f6e\u53ef\u80fd\u5b58\u5728\u95ee\u9898\u3002\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},"\u914d\u7f6e Active Directory \u8eab\u4efd\u9a8c\u8bc1\uff1a\u6b65\u9aa4 5"),"\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u6dfb\u52a0\u7ec4\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u7528\u6237\u3002\u4e0b\u62c9\u5217\u8868\u4ec5\u5217\u51fa\u4f60\uff08\u767b\u5f55\u7528\u6237\uff09\u6240\u5c5e\u7684\u7ec4\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4ee5\u672c\u5730\u7528\u6237\u8eab\u4efd\u767b\u5f55\uff0c\u5916\u90e8\u7528\u6237\u4e0d\u4f1a\u663e\u793a\u5728\u4f60\u7684\u641c\u7d22\u7ed3\u679c\u4e2d\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-authentication#%E5%A4%96%E9%83%A8%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E9%85%8D%E7%BD%AE%E5%92%8C%E7%94%A8%E6%88%B7%E4%B8%BB%E4%BD%93"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u548c\u4e3b\u4f53\u7528\u6237"),"\u3002")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5206\u914d\u7528\u6237\u6216\u7ec4\u7684",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u89d2\u8272\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u4ec0\u4e48\u662f\u96c6\u7fa4\u89d2\u8272\uff1f")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u53ef\u5206\u914d\u7684\u5355\u4e2a\u89d2\u8272\u5217\u8868\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8981\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c\u8bf7",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89d2\u8272"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u4ece\u5217\u8868\u4e2d\u5220\u9664\u89d2\u8272\uff0c\u8bf7",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"\u9501\u5b9a/\u89e3\u9501\u89d2\u8272"),"\u3002")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06\u9009\u4e2d\u7684\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8981\u64a4\u9500\u96c6\u7fa4\u6210\u5458\u8d44\u683c\uff0c\u8bf7\u9009\u62e9\u7528\u6237\u5e76\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002\u6b64\u64cd\u4f5c\u4f1a\u5220\u9664\u6210\u5458\u8d44\u683c\uff0c\u800c\u4e0d\u4f1a\u5220\u9664\u7528\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u4fee\u6539\u96c6\u7fa4\u4e2d\u7684\u7528\u6237\u89d2\u8272\uff0c\u8bf7\u5c06\u5176\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\uff0c\u7136\u540e\u4f7f\u7528\u4fee\u6539\u540e\u7684\u89d2\u8272\u91cd\u65b0\u6dfb\u52a0\u7528\u6237\u3002")))}m.isMDXComponent=!0}}]);