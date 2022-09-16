"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24405],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"\u914d\u7f6e Microsoft AD FS (SAML)",weight:1205},s=void 0,u={unversionedId:"pages-for-subheaders/configure-microsoft-ad-federation-service-saml",id:"pages-for-subheaders/configure-microsoft-ad-federation-service-saml",title:"\u914d\u7f6e Microsoft AD FS (SAML)",description:"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Microsoft \u8054\u5408\u8eab\u4efd\u9a8c\u8bc1\u670d\u52a1 (AD FS) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 AD FS \u51ed\u8bc1\u767b\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",permalink:"/zh/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u914d\u7f6e Microsoft AD FS (SAML)",weight:1205},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Okta (SAML)",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"},next:{title:"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"}},l={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u6982\u8981",id:"\u914d\u7f6e\u6982\u8981",level:2},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],f={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Microsoft \u8054\u5408\u8eab\u4efd\u9a8c\u8bc1\u670d\u52a1 (AD FS) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 AD FS \u51ed\u8bc1\u767b\u5f55\u3002"),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u5df2\u5b89\u88c5 Rancher\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4f60\u7684 Rancher Server URL\u3002\u914d\u7f6e AD FS \u65f6\uff0c\u8bf7\u4f7f\u7528\u8be5 URL \u66ff\u6362 ",(0,o.kt)("inlineCode",{parentName:"li"},"<RANCHER_SERVER>")," \u5360\u4f4d\u7b26\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u7684 Rancher \u5fc5\u987b\u5177\u6709\u5168\u5c40\u7ba1\u7406\u5458\u8d26\u53f7\u3002")),(0,o.kt)("p",null,"\u4f60\u5fc5\u987b\u914d\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"},"Microsoft AD FS \u670d\u52a1\u5668"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4f60\u7684 AD FS \u670d\u52a1\u5668 IP/DNS \u540d\u79f0\u3002\u914d\u7f6e AD FS \u65f6\uff0c\u8bf7\u4f7f\u7528\u8be5 IP/DNS \u540d\u79f0\u66ff\u6362 ",(0,o.kt)("inlineCode",{parentName:"li"},"<AD_SERVER>")," \u5360\u4f4d\u7b26\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u6709\u5728 AD FS \u670d\u52a1\u5668\u4e0a\u6dfb\u52a0 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust"},"Relying Party Trusts")," \u7684\u6743\u9650\u3002")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u6982\u8981"},"\u914d\u7f6e\u6982\u8981"),(0,o.kt)("p",null,"\u8981\u8ba9 Rancher Server \u4f7f\u7528 Microsoft AD FS\uff0c\u4f60\u9700\u8981\u5728 Active Directory \u670d\u52a1\u5668\u4e0a\u914d\u7f6e AD FS\uff0c\u5e76\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 AD FS \u670d\u52a1\u5668\u3002\u5982\u679c\u9700\u8981\u83b7\u53d6\u5728 Rancher \u4e2d\u8bbe\u7f6e Microsoft AD FS \u8eab\u4efd\u9a8c\u8bc1\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u89c1\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"1. \u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"2. \u5728 Rancher \u4e2d\u914d\u7f6e Microsoft AD FS"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"SAML \u534f\u8bae\u4e0d\u652f\u6301\u641c\u7d22\u6216\u67e5\u627e\u7528\u6237\u6216\u7ec4\u3002\u56e0\u6b64\uff0c\u5c06\u7528\u6237\u6216\u7ec4\u6dfb\u52a0\u5230 Rancher \u65f6\u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u786e\u5207\u7684\u7528\u6237 ID\uff08\u5373 ",(0,o.kt)("inlineCode",{parentName:"li"},"UID")," \u5b57\u6bb5\uff09\u3002\u952e\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002")))),(0,o.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"\u5728 Microsoft AD FS \u4e2d\u914d\u7f6e Rancher")))}p.isMDXComponent=!0}}]);