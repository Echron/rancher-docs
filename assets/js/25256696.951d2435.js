"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65768],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70121:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Managing GKE Clusters",shortTitle:"Google Kubernetes Engine",weight:2105},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"Managing GKE Clusters",description:"Prerequisites",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Managing GKE Clusters",shortTitle:"Google Kubernetes Engine",weight:2105},sidebar:"tutorialSidebar",previous:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"Creating an AKS Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Service Account Token",id:"service-account-token",level:3},{value:"Google Project ID",id:"google-project-id",level:3},{value:"Provisioning a GKE Cluster",id:"provisioning-a-gke-cluster",level:2},{value:"1. Create a Cloud Credential",id:"1-create-a-cloud-credential",level:3},{value:"2. Create the GKE Cluster",id:"2-create-the-gke-cluster",level:3},{value:"Private Clusters",id:"private-clusters",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Updating Kubernetes Version",id:"updating-kubernetes-version",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Programmatically Creating GKE Clusters",id:"programmatically-creating-gke-clusters",level:2}],d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Some setup in Google Kubernetes Engine is required."),(0,o.kt)("h3",{id:"service-account-token"},"Service Account Token"),(0,o.kt)("p",null,"Create a service account using ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,o.kt)("p",null,"The service account requires the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/container.admin")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,o.kt)("p",null,"For help obtaining a private key for your service account, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"here.")," You will need to save the key in JSON format."),(0,o.kt)("h3",{id:"google-project-id"},"Google Project ID"),(0,o.kt)("p",null,"Your cluster will need to be part of a Google Project."),(0,o.kt)("p",null,"To create a new project, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project"},"here.")),(0,o.kt)("p",null,"To get the project ID of an existing project, refer to the Google cloud documentation ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"here.")),(0,o.kt)("h2",{id:"provisioning-a-gke-cluster"},"Provisioning a GKE Cluster"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Deploying to GKE will incur charges."))),(0,o.kt)("h3",{id:"1-create-a-cloud-credential"},"1. Create a Cloud Credential"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for your Google cloud credentials."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Service Account")," text box, paste your service account private key JSON, or upload the JSON file."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have created credentials that Rancher will use to provision the new GKE cluster."),(0,o.kt)("h3",{id:"2-create-the-gke-cluster"},"2. Create the GKE Cluster"),(0,o.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Google GKE"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,o.kt)("li",{parentName:"ol"},"Optional: Use ",(0,o.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,o.kt)("li",{parentName:"ol"},"Optional: Add Kubernetes ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," or ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," to the cluster."),(0,o.kt)("li",{parentName:"ol"},"Enter your Google project ID and your Google cloud credentials."),(0,o.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/gke-cluster-configuration"},"GKE cluster configuration reference.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have successfully deployed a GKE cluster."),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,o.kt)("h2",{id:"private-clusters"},"Private Clusters"),(0,o.kt)("p",null,"Private GKE clusters are supported. Note: This advanced setup can require more steps during the cluster provisioning process. For details, see ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"this section.")),(0,o.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,o.kt)("p",null,"For details on configuring GKE clusters in Rancher, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/gke-cluster-configuration"},"this page.")),(0,o.kt)("h2",{id:"updating-kubernetes-version"},"Updating Kubernetes Version"),(0,o.kt)("p",null,"The Kubernetes version of a cluster can be upgraded to any version available in the region or zone fo the GKE cluster. Upgrading the master Kubernetes version does not automatically upgrade worker nodes. Nodes can be upgraded independently."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"GKE has removed basic authentication in 1.19+. In order to upgrade a cluster to 1.19+, basic authentication must be disabled in the Google Cloud. Otherwise, an error will appear in Rancher when an upgrade to 1.19+ is attempted. You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication#disabling_authentication_with_a_static_password"},"Google documentation"),". After this, the Kubernetes version can be updated to 1.19+ via Rancher."))),(0,o.kt)("h2",{id:"syncing"},"Syncing"),(0,o.kt)("p",null,"The GKE provisioner can synchronize the state of a GKE cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,o.kt)("p",null,"For information on configuring the refresh interval, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/gke-cluster-configuration#configuring-the-refresh-interval"},"this section.")),(0,o.kt)("h2",{id:"programmatically-creating-gke-clusters"},"Programmatically Creating GKE Clusters"),(0,o.kt)("p",null,"The most common way to programmatically deploy GKE clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")))}g.isMDXComponent=!0}}]);