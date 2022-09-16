"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91483],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=i,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99495:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"How to Configure Out-of-tree vSphere Cloud Provider",shortTitle:"Out-of-tree Cloud Provider",weight:10},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere",title:"How to Configure Out-of-tree vSphere Cloud Provider",description:"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"How to Configure Out-of-tree vSphere Cloud Provider",shortTitle:"Out-of-tree Cloud Provider",weight:10},sidebar:"tutorialSidebar",previous:{title:"How to Configure In-tree vSphere Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere"},next:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree"}},p={},c=[{value:"1. Create a vSphere cluster",id:"1-create-a-vsphere-cluster",level:3},{value:"2. Install the CPI plugin",id:"2-install-the-cpi-plugin",level:3},{value:"3. Installing the CSI plugin",id:"3-installing-the-csi-plugin",level:3}],h={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,o.kt)("p",null,"This page covers how to install the Cloud Provider Interface (CPI) and Cloud Storage Interface (CSI) plugins after bringing up a cluster."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The vSphere versions supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6.7u3"),(0,o.kt)("li",{parentName:"ul"},"7.0u1 or higher. ")),(0,o.kt)("p",null,"The Kubernetes version must be 1.19 or higher."),(0,o.kt)("p",null,"Using the vSphere out-of-tree cloud provider requires Linux nodes and is not supported on Windows."),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The Cloud Provider Interface (CPI) should be installed first before installing the Cloud Storage Interface (CSI)."),(0,o.kt)("h3",{id:"1-create-a-vsphere-cluster"},"1. Create a vSphere cluster"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"VMware vSphere")," or ",(0,o.kt)("strong",{parentName:"li"},"Custom"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Basics")," tab in the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Configuration")," section, set the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Provider")," to ",(0,o.kt)("strong",{parentName:"li"},"vSphere"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Add-On Config")," tab, the vSphere Cloud Provider (CPI) and Storage Provider (CSI) options."),(0,o.kt)("li",{parentName:"ol"},"Finish creating your cluster.")),(0,o.kt)("h3",{id:"2-install-the-cpi-plugin"},"2. Install the CPI plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where the vSphere CPI plugin will be installed and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace > Charts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"vSphere CPI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required vCenter details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"vSphere CPI initializes all nodes with ProviderID which is needed by the vSphere CSI driver. Check if all nodes are initialized with the ProviderID before installing CSI driver with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')))),(0,o.kt)("h3",{id:"3-installing-the-csi-plugin"},"3. Installing the CSI plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster where the vSphere CSI plugin will be installed and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"vSphere CSI"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill out the required vCenter details. On the ",(0,o.kt)("strong",{parentName:"li"},"Features")," tab, set ",(0,o.kt)("strong",{parentName:"li"},"Enable CSI Migration")," to ",(0,o.kt)("strong",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab, fill out the details for the StorageClass. This chart creates a StorageClass with the ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," as the provisioner. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("h1",{id:"using-the-csi-driver-for-provisioning-volumes"},"Using the CSI driver for provisioning volumes"),(0,o.kt)("p",null,"The CSI chart by default creates a storageClass."),(0,o.kt)("p",null,"If that option was not selected while launching the chart, create a storageClass with the ",(0,o.kt)("inlineCode",{parentName:"p"},"csi.vsphere.vmware.com")," as the provisioner."),(0,o.kt)("p",null,"All volumes provisioned using this StorageClass will get provisioned by the CSI driver."))}d.isMDXComponent=!0}}]);