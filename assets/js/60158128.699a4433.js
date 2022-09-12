"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54857],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18391:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Migrating vSphere In-tree Volumes to CSI",weight:5,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/vsphere-volume-migration/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",title:"Migrating vSphere In-tree Volumes to CSI",description:"Available as of v2.5+",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree.md",tags:[],version:"2.5",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Migrating vSphere In-tree Volumes to CSI",weight:5,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/vsphere/out-of-tree/vsphere-volume-migration/"]},sidebar:"tutorialSidebar",previous:{title:"How to Configure Out-of-tree vSphere Cloud Provider",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere"},next:{title:"Rancher Agents",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"}},c={},p=[{value:"Cloud-config Format Limitation",id:"cloud-config-format-limitation",level:3},{value:"1. Install the CPI plugin",id:"1-install-the-cpi-plugin",level:3},{value:"2. Install the CSI driver",id:"2-install-the-csi-driver",level:3},{value:"3. Edit the cluster to enable CSI migration feature flags",id:"3-edit-the-cluster-to-enable-csi-migration-feature-flags",level:3},{value:"4. Drain worker nodes",id:"4-drain-worker-nodes",level:3}],h={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5+")),(0,i.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,i.kt)("p",null,"This page covers how to migrate from the in-tree vSphere cloud provider to out-of-tree, and manage the existing VMs post migration."),(0,i.kt)("p",null,"It follows the steps provided in the official ",(0,i.kt)("a",{parentName:"p",href:"https://vsphere-csi-driver.sigs.k8s.io/features/vsphere_csi_migration.html"},"vSphere migration documentation")," and provides the steps to be performed in Rancher."),(0,i.kt)("h3",{id:"cloud-config-format-limitation"},"Cloud-config Format Limitation"),(0,i.kt)("p",null,"Existing volumes that were provisioned using the following cloud-config format will NOT get migrated due to an existing bug in vsphere CSI."),(0,i.kt)("p",null,"If the cloud-config has this format for datastore and resource pool path, vsphere CSI driver cannot recognize it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: </datacenter>/datastore/<default-datastore-name>\nresourcepool-path: "</datacenter>/host/<cluster-name>/Resources/<resource-pool-name>"\n')),(0,i.kt)("p",null,"Volumes provisioned with the in-tree provider using the following format will get migrated correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: <default-datastore-name>\nresourcepool-path: "<cluster-name>/Resources/<resource-pool-name>"\n')),(0,i.kt)("p",null,"Upstream bug: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628"},"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628")),(0,i.kt)("p",null,"Rancher issue tracking this bug: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/31105"},"https://github.com/rancher/rancher/issues/31105")),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"vSphere CSI Migration requires vSphere 7.0u1. In order to be able to manage existing in-tree vSphere volumes, upgrade vSphere to 7.0u1."),(0,i.kt)("li",{parentName:"ul"},"The Kubernetes version must be 1.19 or higher.")),(0,i.kt)("h1",{id:"migration"},"Migration"),(0,i.kt)("h3",{id:"1-install-the-cpi-plugin"},"1. Install the CPI plugin"),(0,i.kt)("p",null,"Before installing CPI, we need to taint all nodes with ",(0,i.kt)("inlineCode",{parentName:"p"},"node.cloudprovider.kubernetes.io/uninitialized=true:NoSchedule"),"."),(0,i.kt)("p",null,"This can be done by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -O https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh \n")),(0,i.kt)("p",null,"Or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh\nchmod +x taints.sh\n./taints.sh <path to kubeconfig if running the command outside the cluster> \n")),(0,i.kt)("p",null,"Once all nodes are tainted by the running the script, launch the Helm vSphere CPI chart. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer")," view, go to the top left dropdown menu and click ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace.")),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"vSphere CPI")," chart."),(0,i.kt)("li",{parentName:"ol"},"Fill out the required vCenter details and click ",(0,i.kt)("strong",{parentName:"li"},"Launch"),".")),(0,i.kt)("p",null,"vSphere CPI initializes all nodes with ProviderID, which is needed by the vSphere CSI driver."),(0,i.kt)("p",null,"Check if all nodes are initialized with the ProviderID with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')),(0,i.kt)("h3",{id:"2-install-the-csi-driver"},"2. Install the CSI driver"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer")," view, go to the top left dropdown menu and click ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace.")),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"vSphere CSI")," chart. "),(0,i.kt)("li",{parentName:"ol"},"Fill out the required vCenter details and click ",(0,i.kt)("strong",{parentName:"li"},"Launch"),"."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("strong",{parentName:"li"},"Enable CSI Migration")," to ",(0,i.kt)("strong",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ol"},"This chart creates a StorageClass with the ",(0,i.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," as the provisioner. You can provide the URL of the datastore to be used for CSI volume provisioning while creating this StorageClass. The datastore URL can be found in the vSphere client by selecting the datastore and going to the Summary tab. Fill out the details for the StorageClass and click ",(0,i.kt)("strong",{parentName:"li"},"Launch"),".")),(0,i.kt)("h3",{id:"3-edit-the-cluster-to-enable-csi-migration-feature-flags"},"3. Edit the cluster to enable CSI migration feature flags"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"While editing the cluster, if the Kubernetes version is less than 1.19, select Kubernetes version 1.19 or higher from the ",(0,i.kt)("strong",{parentName:"p"},"Kubernetes Version")," dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'For enabling feature flags, click on "Edit as YAML", and add the following under kube-controller and kubelet:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  extra_args:\n    feature-gates: "CSIMigration=true,CSIMigrationvSphere=true" \n')))),(0,i.kt)("h3",{id:"4-drain-worker-nodes"},"4. Drain worker nodes"),(0,i.kt)("p",null,"Worker nodes must be drained during the upgrade before changing the kubelet and kube-controller-manager args. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Edit as Form"),' and then click on "Advanced Options."'),(0,i.kt)("li",{parentName:"ol"},"Set the field ",(0,i.kt)("strong",{parentName:"li"},"Maximum Worker Nodes Unavailable")," to count of 1."),(0,i.kt)("li",{parentName:"ol"},"To drain the nodes during upgrade, select ",(0,i.kt)("strong",{parentName:"li"},"Drain Nodes > Yes"),". "),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("strong",{parentName:"li"},"Force")," and ",(0,i.kt)("strong",{parentName:"li"},"Delete Local Data")," to ",(0,i.kt)("strong",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save")," to upgrade the cluster.")))}d.isMDXComponent=!0}}]);