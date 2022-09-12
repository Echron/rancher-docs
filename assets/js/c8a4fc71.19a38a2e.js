"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83353],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),h=n,f=s["".concat(l,".").concat(h)]||s[h]||d[h]||i;return r?a.createElement(f,c(c({ref:t},u),{},{components:r})):a.createElement(f,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},96592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),c=["components"],o={title:"Deprecated Features in Rancher",weight:100},l=void 0,p={unversionedId:"faq/deprecated-features-in-v2.5",id:"faq/deprecated-features-in-v2.5",title:"Deprecated Features in Rancher",description:"What is Rancher's Deprecation policy?",source:"@site/docs/faq/deprecated-features-in-v2.5.md",sourceDirName:"faq",slug:"/faq/deprecated-features-in-v2.5",permalink:"/faq/deprecated-features-in-v2.5",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/deprecated-features-in-v2.5.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Deprecated Features in Rancher",weight:100},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"},next:{title:"Installing and Configuring kubectl",permalink:"/faq/install-and-configure-kubectl"}},u={},d=[{value:"What is Rancher&#39;s Deprecation policy?",id:"what-is-ranchers-deprecation-policy",level:3},{value:"Where can I find out which features have been deprecated in Rancher?",id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher",level:3},{value:"What can I expect when a feature is marked for deprecation?",id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation",level:3}],s={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-is-ranchers-deprecation-policy"},"What is Rancher's Deprecation policy?"),(0,i.kt)("p",null,"We have published our official deprecation policy in the support ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms"},"terms of service"),"."),(0,i.kt)("h3",{id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher"},"Where can I find out which features have been deprecated in Rancher?"),(0,i.kt)("p",null,"Rancher will publish deprecated features as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"release notes")," for Rancher found on GitHub. Please consult the following patch releases for deprecated features:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Patch Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Release Date"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.0"},"2.6.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Aug 31, 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.1"},"2.6.1")),(0,i.kt)("td",{parentName:"tr",align:null},"Oct 11, 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.2"},"2.6.2")),(0,i.kt)("td",{parentName:"tr",align:null},"Oct 19, 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.3"},"2.6.3")),(0,i.kt)("td",{parentName:"tr",align:null},"Dec 21, 2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"2.6.4")),(0,i.kt)("td",{parentName:"tr",align:null},"Mar 31, 2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.5"},"2.6.5")),(0,i.kt)("td",{parentName:"tr",align:null},"May 12, 2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.6"},"2.6.6")),(0,i.kt)("td",{parentName:"tr",align:null},"Jun 30, 2022")))),(0,i.kt)("h3",{id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation"},"What can I expect when a feature is marked for deprecation?"),(0,i.kt)("p",null,'In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.'))}h.isMDXComponent=!0}}]);