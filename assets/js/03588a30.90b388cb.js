"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44222],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],c={title:"Migrating Rancher to a New Cluster",weight:3,aliases:["/rancher/v2.x/en/backups/v2.5/migrating-rancher/"]},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",title:"Migrating Rancher to a New Cluster",description:"If you are migrating Rancher to a new Kubernetes cluster, you don't need to install Rancher on the new cluster first. If Rancher is restored to a new cluster with Rancher already installed, it can cause problems.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",tags:[],version:"2.5",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Migrating Rancher to a New Cluster",weight:3,aliases:["/rancher/v2.x/en/backups/v2.5/migrating-rancher/"]},sidebar:"tutorialSidebar",previous:{title:"Restoring Rancher",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},next:{title:"Backing up Rancher Installed with Docker",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install the rancher-backup Helm chart",id:"1-install-the-rancher-backup-helm-chart",level:3},{value:"2. Restore from backup using a Restore custom resource",id:"2-restore-from-backup-using-a-restore-custom-resource",level:3},{value:"3. Install cert-manager",id:"3-install-cert-manager",level:3},{value:"4. Bring up Rancher with Helm",id:"4-bring-up-rancher-with-helm",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are migrating Rancher to a new Kubernetes cluster, you don't need to install Rancher on the new cluster first. If Rancher is restored to a new cluster with Rancher already installed, it can cause problems."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"These instructions assume you have ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"created a backup")," and you have already installed a new Kubernetes cluster where Rancher will be deployed."),(0,s.kt)("p",null,"It is required to use the same hostname that was set as the server URL in the first cluster."),(0,s.kt)("p",null,"Rancher version must be v2.5.0 and up"),(0,s.kt)("p",null,"Rancher can be installed on any Kubernetes cluster, including hosted Kubernetes clusters such as Amazon EKS clusters. For help installing Kubernetes, refer to the documentation of the Kubernetes distribution. One of Rancher's Kubernetes distributions may also be used:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE Kubernetes installation docs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3s Kubernetes installation docs"))),(0,s.kt)("h3",{id:"1-install-the-rancher-backup-helm-chart"},"1. Install the rancher-backup Helm chart"),(0,s.kt)("p",null,"Install version 1.x.x of the rancher-backup chart. The following assumes a connected environment with access to DockerHub:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm repo add rancher-charts https://charts.rancher.io\nhelm repo update\nhelm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION\nhelm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION\n")),(0,s.kt)("br",null),"For an **air-gapped environment**, use the option below to pull the `backup-restore-operator` image from your private registry when installing the rancher-backup-crd helm chart. ``` --set image.repository $REGISTRY/rancher/backup-restore-operator ```",(0,s.kt)("h3",{id:"2-restore-from-backup-using-a-restore-custom-resource"},"2. Restore from backup using a Restore custom resource"),(0,s.kt)("p",null,"If you are using an S3 store as the backup source, and need to use your S3 credentials for restore, create a secret in this cluster using your S3 credentials. The Secret data must have two keys, ",(0,s.kt)("inlineCode",{parentName:"p"},"accessKey")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"secretKey")," containing the s3 credentials like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: s3-creds\ntype: Opaque\nstringData:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,s.kt)("p",null,"This secret can be created in any namespace, with the above example it will get created in the default namespace"),(0,s.kt)("p",null,"In the Restore custom resource, ",(0,s.kt)("inlineCode",{parentName:"p"},"prune")," must be set to false."),(0,s.kt)("p",null,"Create a Restore custom resource like the example below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# migrationResource.yaml\napiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  prune: false\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important:")," The field ",(0,s.kt)("inlineCode",{parentName:"p"},"encryptionConfigSecretName")," must be set only if your backup was created with encryption enabled. Provide the name of the Secret containing the encryption config file. If you only have the encryption config file, but don't have a secret created with it in this cluster, use the following steps to create the secret:")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The encryption configuration file must be named ",(0,s.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml"),", and the ",(0,s.kt)("inlineCode",{parentName:"p"},"--from-file")," flag must be used to create this secret. So save your ",(0,s.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration")," in a file called ",(0,s.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml")," and run this command:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"kubectl create secret generic encryptionconfig \\\n  --from-file=./encryption-provider-config.yaml \\\n  -n cattle-resources-system\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Then apply the resource:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f migrationResource.yaml\n")))),(0,s.kt)("h3",{id:"3-install-cert-manager"},"3. Install cert-manager"),(0,s.kt)("p",null,"Follow the steps to ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-install-cert-manager"},"install cert-manager")," in the documentation about installing cert-manager on Kubernetes."),(0,s.kt)("h3",{id:"4-bring-up-rancher-with-helm"},"4. Bring up Rancher with Helm"),(0,s.kt)("p",null,"Use the same version of Helm to install Rancher, that was used on the first cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<same hostname as the server URL from the first Rancher server> \\\n")))}h.isMDXComponent=!0}}]);