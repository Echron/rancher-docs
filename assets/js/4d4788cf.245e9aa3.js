"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5370],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14967:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"vSphere Storage",weight:3055},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",title:"vSphere Storage",description:"To provide stateful workloads with vSphere storage, we recommend creating a vSphereVolume StorageClass. This practice dynamically provisions vSphere storage when workloads request volumes through a PersistentVolumeClaim.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"vSphere Storage",weight:3055},sidebar:"tutorialSidebar",previous:{title:"NFS Storage",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},next:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a StorageClass",id:"creating-a-storageclass",level:3},{value:"Creating a Workload with a vSphere Volume",id:"creating-a-workload-with-a-vsphere-volume",level:3},{value:"Verifying Persistence of the Volume",id:"verifying-persistence-of-the-volume",level:3},{value:"Why to Use StatefulSets Instead of Deployments",id:"why-to-use-statefulsets-instead-of-deployments",level:3},{value:"Related Links",id:"related-links",level:3}],m={toc:u};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To provide stateful workloads with vSphere storage, we recommend creating a vSphereVolume StorageClass. This practice dynamically provisions vSphere storage when workloads request volumes through a PersistentVolumeClaim."),(0,o.kt)("p",null,"In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/vsphere-cloud-provider"},"enabled.")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to provision vSphere volumes in a cluster created with the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Kubernetes Engine (RKE)"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere"},"vSphere cloud provider")," must be explicitly enabled in the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster options"),"."),(0,o.kt)("h3",{id:"creating-a-storageclass"},"Creating a StorageClass"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following steps can also be performed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command line tool. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes documentation on persistent volumes")," for details."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where you want to provide vSphere storage.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Storage > StorageClasses"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the StorageClass.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Provisioner"),", select ",(0,o.kt)("strong",{parentName:"p"},"VMWare vSphere Volume"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(55792).Z,width:"750",height:"473"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optionally, specify additional properties for this storage class under ",(0,o.kt)("strong",{parentName:"p"},"Parameters"),". Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/storageclass.html"},"vSphere storage documentation")," for details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("h3",{id:"creating-a-workload-with-a-vsphere-volume"},"Creating a Workload with a vSphere Volume"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"StatefulSet"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Volume Claim Templates")," tab, click ",(0,o.kt)("strong",{parentName:"li"},"Add Claim Template"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a persistent volume name."),(0,o.kt)("li",{parentName:"ol"},"In the Storage Class field, select the vSphere StorageClass that you created."),(0,o.kt)("li",{parentName:"ol"},"Enter the required ",(0,o.kt)("strong",{parentName:"li"},"Capacity")," for the volume. Then click ",(0,o.kt)("strong",{parentName:"li"},"Define"),"."),(0,o.kt)("li",{parentName:"ol"},"Assign a path in the ",(0,o.kt)("strong",{parentName:"li"},"Mount Point")," field. This is the full path where the volume will be mounted in the container file system, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/persistent"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h3",{id:"verifying-persistence-of-the-volume"},"Verifying Persistence of the Volume"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Workload > Pods"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the workload you just created and click ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Execute Shell"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the directory at root where the volume has been mounted to (in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"/persistent"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file in the volume by executing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"touch /<volumeMountPoint>/data.txt"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close the shell window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the name of the workload to reveal detail information.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Delete"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Observe that the pod is deleted. Then a new pod is scheduled to replace it so that the workload maintains its configured scale of a single stateful pod.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the replacement pod is running, click ",(0,o.kt)("strong",{parentName:"p"},"Execute Shell"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inspect the contents of the directory where the volume is mounted by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -l /<volumeMountPoint>"),". Note that the file you created earlier is still present."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"workload-persistent-data",src:a(62803).Z,width:"750",height:"508"})))),(0,o.kt)("h3",{id:"why-to-use-statefulsets-instead-of-deployments"},"Why to Use StatefulSets Instead of Deployments"),(0,o.kt)("p",null,"You should always use ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets")," for workloads consuming vSphere storage, as this resource type is designed to address a VMDK block storage caveat."),(0,o.kt)("p",null,"Since vSphere volumes are backed by VMDK block storage, they only support an ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"access mode")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadWriteOnce"),". This setting restricts the volume so that it can only be mounted to a single pod at a time, unless all pods consuming that volume are co-located on the same node. This behavior makes a deployment resource unusable for scaling beyond a single replica if it consumes vSphere volumes."),(0,o.kt)("p",null,"Even using a deployment resource with just a single replica may result in a deadlock situation while updating the deployment. If the updated pod is scheduled to a node different from where the existing pod lives, it will fail to start because the VMDK is still attached to the other node."),(0,o.kt)("h3",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/"},"vSphere Storage for Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes Persistent Volumes"))))}d.isMDXComponent=!0},55792:function(e,t,a){t.Z=a.p+"assets/images/vsphere-storage-class-c509e79beccf22b63a7d65c4d72ad247.png"},62803:function(e,t,a){t.Z=a.p+"assets/images/workload-persistent-data-5a49807c13b871ee5026e3f8123075a1.png"}}]);