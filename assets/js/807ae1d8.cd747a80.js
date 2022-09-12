"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26283],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,u=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||u;return t?n.createElement(h,o(o({ref:r},l),{},{components:t})):n.createElement(h,o({ref:r},l))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var u=t.length,o=new Array(u);o[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<u;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57158:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=t(87462),s=t(63366),u=(t(67294),t(3905)),o=["components"],a={title:"Configuration for Storage Classes in Azure",weight:3},i=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",title:"Configuration for Storage Classes in Azure",description:"If you are using Azure VMs for your nodes, you can use Azure files as a StorageClass for the cluster.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Configuration for Storage Classes in Azure",weight:3},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes on Windows Clusters",permalink:"/pages-for-subheaders/use-windows-clusters"},next:{title:"Windows and Linux Cluster Feature Parity",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity"}},l={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,s.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"If you are using Azure VMs for your nodes, you can use ",(0,u.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/azure-files-dynamic-pv"},"Azure files")," as a StorageClass for the cluster."),(0,u.kt)("p",null,"In order to have the Azure platform create the required storage resources, follow these steps:"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},(0,u.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure"},"Configure the Azure cloud provider."))),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Configure ",(0,u.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster.")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Copy the ",(0,u.kt)("inlineCode",{parentName:"p"},"ClusterRole")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," manifest for the service account:"),(0,u.kt)("pre",{parentName:"li"},(0,u.kt)("code",{parentName:"pre",className:"language-yml"},"---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: system:azure-cloud-provider\nrules:\n- apiGroups: ['']\n  resources: ['secrets']\n  verbs:     ['get','create']\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system:azure-cloud-provider\nroleRef:\n  kind: ClusterRole\n  apiGroup: rbac.authorization.k8s.io\n  name: system:azure-cloud-provider\nsubjects:\n- kind: ServiceAccount\n  name: persistent-volume-binder\n  namespace: kube-system\n"))),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Create these in your cluster using one of the follow command."),(0,u.kt)("pre",{parentName:"li"},(0,u.kt)("code",{parentName:"pre"},"# kubectl create -f <MANIFEST>\n")))))}f.isMDXComponent=!0}}]);