"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82283],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Architecture",weight:1},c=void 0,u={unversionedId:"explanations/integrations-in-rancher/logging/logging-architecture",id:"explanations/integrations-in-rancher/logging/logging-architecture",title:"Architecture",description:"This section summarizes the architecture of the Rancher logging application.",source:"@site/docs/explanations/integrations-in-rancher/logging/logging-architecture.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/logging-architecture",permalink:"/explanations/integrations-in-rancher/logging/logging-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/logging-architecture.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Architecture",weight:1},sidebar:"tutorialSidebar",previous:{title:"Rancher Integration with Logging Services",permalink:"/pages-for-subheaders/logging"},next:{title:"Migrating to Rancher v2.5 Logging",permalink:"/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"}},s={},g=[{value:"How the Banzai Cloud Logging Operator Works",id:"how-the-banzai-cloud-logging-operator-works",level:3}],p={toc:g};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section summarizes the architecture of the Rancher logging application."),(0,a.kt)("p",null,"For more details about how the Banzai Cloud Logging operator works, see the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"official documentation.")),(0,a.kt)("h3",{id:"how-the-banzai-cloud-logging-operator-works"},"How the Banzai Cloud Logging Operator Works"),(0,a.kt)("p",null,"The Logging operator automates the deployment and configuration of a Kubernetes logging pipeline. It deploys and configures a Fluent Bit DaemonSet on every node to collect container and application logs from the node file system. "),(0,a.kt)("p",null,"Fluent Bit queries the Kubernetes API and enriches the logs with metadata about the pods, and transfers both the logs and the metadata to Fluentd. Fluentd receives, filters, and transfers logs to multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),"."),(0,a.kt)("p",null,"The following custom resources are used to define how logs are filtered and sent to their ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Flow")," is a namespaced custom resource that uses filters and selectors to route log messages to the appropriate ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs"),". "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterFlow")," is used to route cluster-level log messages."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"Output")," is a namespaced resource that defines where the log messages are sent. "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," defines an ",(0,a.kt)("inlineCode",{parentName:"li"},"Output")," that is available from all ",(0,a.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterFlows"),".")),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," must reference an ",(0,a.kt)("inlineCode",{parentName:"p"},"Output"),", and each ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," must reference a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,a.kt)("p",null,"The following figure from the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"Banzai documentation")," shows the new logging architecture:"),(0,a.kt)("figcaption",null,"How the Banzai Cloud Logging Operator Works with Fluentd and Fluent Bit"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How the Banzai Cloud Logging Operator Works with Fluentd",src:n(87306).Z,width:"2835",height:"2732"})))}d.isMDXComponent=!0},87306:function(e,t,n){t.Z=n.p+"assets/images/banzai-cloud-logging-operator-e275eba1f49ecdc1035cd63a54fdd576.png"}}]);