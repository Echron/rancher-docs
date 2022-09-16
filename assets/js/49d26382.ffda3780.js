"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5418],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53304:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"Air-Gapped Helm CLI Install",weight:1},s=void 0,p={unversionedId:"pages-for-subheaders/air-gapped-helm-cli-install",id:"pages-for-subheaders/air-gapped-helm-cli-install",title:"Air-Gapped Helm CLI Install",description:"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.",source:"@site/docs/pages-for-subheaders/air-gapped-helm-cli-install.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/air-gapped-helm-cli-install",permalink:"/pages-for-subheaders/air-gapped-helm-cli-install",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/air-gapped-helm-cli-install.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Air-Gapped Helm CLI Install",weight:1},sidebar:"tutorialSidebar",previous:{title:"Other Installation Methods",permalink:"/pages-for-subheaders/other-installation-methods"},next:{title:"1. Set up Infrastructure and Private Registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"}},c={},d=[{value:"Next: Prepare your Node(s)",id:"next-prepare-your-nodes",level:3}],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,i.kt)("p",null,"The installation steps differ depending on whether Rancher is installed on an RKE Kubernetes cluster, a K3s Kubernetes cluster, or a single Docker container."),(0,i.kt)("p",null,"For more information on each installation option, refer to ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,i.kt)("p",null,"Throughout the installation instructions, there will be ",(0,i.kt)("em",{parentName:"p"},"tabs")," for each installation option."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker Installation to a Kubernetes Installation."))),(0,i.kt)("h1",{id:"installation-outline"},"Installation Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Set up infrastructure and private registry")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Collect and publish images to your private registry")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"Set up a Kubernetes cluster (Skip this step for Docker installations)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Install Rancher"))),(0,i.kt)("h1",{id:"upgrades"},"Upgrades"),(0,i.kt)("p",null,"To upgrade Rancher with Helm CLI in an air gap environment, follow ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this procedure.")),(0,i.kt)("h3",{id:"next-prepare-your-nodes"},(0,i.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Next: Prepare your Node(s)")))}h.isMDXComponent=!0}}]);