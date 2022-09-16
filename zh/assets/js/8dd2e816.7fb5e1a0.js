"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60337],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=i,m=l["".concat(u,".").concat(f)]||l[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},2072:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"\u8bbe\u7f6e\u6307\u5357",weight:2},u=void 0,p={unversionedId:"pages-for-subheaders/istio-setup-guide",id:"pages-for-subheaders/istio-setup-guide",title:"\u8bbe\u7f6e\u6307\u5357",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528 Istio \u5e76\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/istio-setup-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio-setup-guide",permalink:"/zh/pages-for-subheaders/istio-setup-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/istio-setup-guide.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u8bbe\u7f6e\u6307\u5357",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e PrometheusRule",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},next:{title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"}},d={},c=[],l={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528 Istio \u5e76\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Istio \u8fdb\u884c\u6d41\u91cf\u7ba1\u7406\uff0c\u5219\u9700\u8981\u5141\u8bb8\u5916\u90e8\u6d41\u91cf\u8fdb\u5165\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u6240\u6709\u6b65\u9aa4\u3002"),(0,a.kt)("h1",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u5047\u8bbe\u4f60\u5df2\u7ecf",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-and-upgrade"},"\u5b89\u88c5 Rancher"),"\uff0c\u4e14\u5df2\u7ecf",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u914d\u7f6e\u4e86\u4e00\u4e2a\u5355\u72ec\u7684 Kubernetes \u96c6\u7fa4"),"\u5e76\u8981\u5728\u8be5\u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio\u3002"),(0,a.kt)("p",null,"\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u5fc5\u987b\u6ee1\u8db3 ",(0,a.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU \u548c\u5185\u5b58\u8981\u6c42"),"\u3002"),(0,a.kt)("p",null,"Istio \u63a7\u5236\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u670d\u52a1\u5fc5\u987b\u6ee1\u8db3 ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/requirements/"},"Istio \u8981\u6c42"),"\u3002"),(0,a.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5feb\u901f\u8bbe\u7f6e\u63d0\u793a\uff1a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u5916\u90e8\u6d41\u91cf\u5230\u8fbe Istio\uff0c\u800c\u53ea\u60f3\u8bbe\u7f6e Istio \u4ee5\u76d1\u63a7\u548c\u8ddf\u8e2a\u96c6\u7fa4\u5185\u7684\u6d41\u91cf\uff0c\u8bf7\u8df3\u8fc7",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"\u8bbe\u7f6e Istio Gateway")," \u548c",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"\u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6"),"\u6b65\u9aa4\u3002"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"\u5728\u8981\u4f7f\u7528 Istio \u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"\u6dfb\u52a0\u6ce8\u5165\u4e86 Istio sidecar \u7684\u90e8\u7f72\u548c\u670d\u52a1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"\u8bbe\u7f6e Istio Gateway")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"\u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"\u751f\u6210\u6d41\u91cf\u5e76\u67e5\u770b Istio \u7684\u8fd0\u884c\u60c5\u51b5"))))}f.isMDXComponent=!0}}]);