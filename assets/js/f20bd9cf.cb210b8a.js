"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78545],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=s,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},i),{},{components:r})):n.createElement(m,a({ref:t},i))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"Deploying Applications across Clusters",weight:12},p=void 0,c={unversionedId:"pages-for-subheaders/deploy-apps-across-clusters",id:"pages-for-subheaders/deploy-apps-across-clusters",title:"Deploying Applications across Clusters",description:"Fleet",source:"@site/docs/pages-for-subheaders/deploy-apps-across-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-apps-across-clusters",permalink:"/pages-for-subheaders/deploy-apps-across-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/deploy-apps-across-clusters.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Deploying Applications across Clusters",weight:12},sidebar:"tutorialSidebar",previous:{title:"Creating Apps",permalink:"/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps"},next:{title:"Fleet - GitOps at Scale",permalink:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"}},i={},u=[{value:"Fleet",id:"fleet",level:3},{value:"Multi-cluster Apps",id:"multi-cluster-apps",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"fleet"},"Fleet"),(0,o.kt)("p",null,"Rancher v2.5 introduced Fleet, a new way to deploy applications across clusters."),(0,o.kt)("p",null,"Fleet is GitOps at scale. For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet section.")),(0,o.kt)("h3",{id:"multi-cluster-apps"},"Multi-cluster Apps"),(0,o.kt)("p",null,"In Rancher before v2.5, the multi-cluster apps feature was used to deploy applications across clusters. The multi-cluster apps feature is deprecated, but still available in Rancher v2.5."),(0,o.kt)("p",null,"Refer to the documentation ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps"},"here.")))}f.isMDXComponent=!0}}]);