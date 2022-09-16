"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1484],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,v=d["".concat(c,".").concat(f)]||d[f]||l[f]||s;return t?n.createElement(v,o(o({ref:r},p),{},{components:t})):n.createElement(v,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30202:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"Backups and Disaster Recovery",weight:5},c=void 0,u={unversionedId:"pages-for-subheaders/backup-restore-and-disaster-recovery",id:"version-2.0-2.4/pages-for-subheaders/backup-restore-and-disaster-recovery",title:"Backups and Disaster Recovery",description:"This section is devoted to protecting your data in a disaster scenario.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/backup-restore-and-disaster-recovery.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/backup-restore-and-disaster-recovery",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/backup-restore-and-disaster-recovery.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Backups and Disaster Recovery",weight:5},sidebar:"tutorialSidebar",previous:{title:"Deploying Applications across Clusters",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"},next:{title:"Backing up Rancher Installed with Docker",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"}},p={},l=[],d={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section is devoted to protecting your data in a disaster scenario."),(0,s.kt)("p",null,"To protect yourself from a disaster scenario, you should create backups on a regular basis."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Backup",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"RKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher"},"K3s")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Docker")))),(0,s.kt)("li",{parentName:"ul"},"Restore",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"RKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"},"K3s")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Docker"))))))}f.isMDXComponent=!0}}]);