"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27649:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Installing/Upgrading Rancher",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation",weight:3},l=void 0,c={unversionedId:"pages-for-subheaders/installation-and-upgrade",id:"pages-for-subheaders/installation-and-upgrade",title:"Installing/Upgrading Rancher",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation",source:"@site/docs/pages-for-subheaders/installation-and-upgrade.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-and-upgrade",permalink:"/pages-for-subheaders/installation-and-upgrade",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/installation-and-upgrade.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Installing/Upgrading Rancher",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation",weight:3},sidebar:"tutorialSidebar",previous:{title:"Workload with NodePort Quick Start",permalink:"/getting-started/quick-start-guides/deploy-workloads/nodeports"},next:{title:"Installation Requirements",permalink:"/pages-for-subheaders/installation-requirements"}},u={},h=[{value:"High-availability Kubernetes Install with the Helm CLI",id:"high-availability-kubernetes-install-with-the-helm-cli",level:3},{value:"Automated Quickstart to Deploy Rancher on Amazon EKS",id:"automated-quickstart-to-deploy-rancher-on-amazon-eks",level:3},{value:"Single-node Kubernetes Install",id:"single-node-kubernetes-install",level:3},{value:"Docker Install",id:"docker-install",level:3},{value:"Other Options",id:"other-options",level:3},{value:"More Options for Installations on a Kubernetes Cluster",id:"more-options-for-installations-on-a-kubernetes-cluster",level:3},{value:"More Options for Installations with Docker",id:"more-options-for-installations-with-docker",level:3}],d={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section provides an overview of the architecture options of installing Rancher, describing advantages of each option."),(0,i.kt)("h1",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"In this section,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The Rancher server")," manages and provisions Kubernetes clusters. You can interact with downstream Kubernetes clusters through the Rancher server's user interface. The Rancher management server can be installed on any Kubernetes cluster, including hosted clusters, such as Amazon EKS clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RKE (Rancher Kubernetes Engine)")," is a certified Kubernetes distribution and CLI/library which creates and manages a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"K3s (Lightweight Kubernetes)")," is also a fully compliant Kubernetes distribution. It is newer than RKE, easier to use, and more lightweight, with a binary size of less than 100 MB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RKE2")," is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.")),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"restrictedAdmin")," Helm chart option available for ",(0,i.kt)("strong",{parentName:"p"},"the Rancher Server"),". When this option is set to true, the initial Rancher user has restricted access to the local Kubernetes cluster to prevent privilege escalation. For more information, see the section about the ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#restricted-admin"},"restricted-admin role.")),(0,i.kt)("h1",{id:"overview-of-installation-options"},"Overview of Installation Options"),(0,i.kt)("p",null,"Rancher can be installed on these main architectures:"),(0,i.kt)("h3",{id:"high-availability-kubernetes-install-with-the-helm-cli"},"High-availability Kubernetes Install with the Helm CLI"),(0,i.kt)("p",null,"We recommend using Helm, a Kubernetes package manager, to install Rancher on multiple nodes on a dedicated Kubernetes cluster. For RKE clusters, three nodes are required to achieve a high-availability cluster. For K3s clusters, only two nodes are required."),(0,i.kt)("h3",{id:"automated-quickstart-to-deploy-rancher-on-amazon-eks"},"Automated Quickstart to Deploy Rancher on Amazon EKS"),(0,i.kt)("p",null,"Rancher and Amazon Web Services collaborated on a quick start guide for deploying Rancher on an EKS Kubernetes cluster following AWS best practices. The deployment guide is ",(0,i.kt)("a",{parentName:"p",href:"https://aws-quickstart.github.io/quickstart-eks-rancher/"},"here.")),(0,i.kt)("h3",{id:"single-node-kubernetes-install"},"Single-node Kubernetes Install"),(0,i.kt)("p",null,"Rancher can be installed on a single-node Kubernetes cluster. In this case, the Rancher server doesn't have high availability, which is important for running Rancher in production."),(0,i.kt)("p",null,"However, this option is useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path. In the future, you can add nodes to the cluster to get a high-availability Rancher server."),(0,i.kt)("h3",{id:"docker-install"},"Docker Install"),(0,i.kt)("p",null,"For test and demonstration purposes, Rancher can be installed with Docker on a single node. A local Kubernetes cluster is installed in the single Docker container, and Rancher is installed on the local cluster."),(0,i.kt)("p",null,"The Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster.")),(0,i.kt)("h3",{id:"other-options"},"Other Options"),(0,i.kt)("p",null,"There are also separate instructions for installing Rancher in an air gap environment or behind an HTTP proxy:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Level of Internet Access"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Installation - Strongly Recommended"),(0,i.kt)("th",{parentName:"tr",align:null},"Docker Installation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"With direct access to the Internet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Docs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Behind an HTTP proxy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/rancher-behind-an-http-proxy"},"Docs")),(0,i.kt)("td",{parentName:"tr",align:null},"These ",(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"docs,")," plus this ",(0,i.kt)("a",{parentName:"td",href:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},"configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In an air gap environment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"Docs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"Docs"))))),(0,i.kt)("p",null,"We recommend installing Rancher on a Kubernetes cluster, because in a multi-node cluster, the Rancher management server becomes highly available. This high-availability configuration helps maintain consistent access to the downstream Kubernetes clusters that Rancher will manage."),(0,i.kt)("p",null,"For that reason, we recommend that for a production-grade architecture, you should set up a high-availability Kubernetes cluster, then install Rancher on it. After Rancher is installed, you can use Rancher to deploy and manage Kubernetes clusters."),(0,i.kt)("p",null,"For testing or demonstration purposes, you can install Rancher in single Docker container. In this Docker install, you can use Rancher to set up Kubernetes clusters out-of-the-box. The Docker install allows you to explore the Rancher server functionality, but it is intended to be used for development and testing purposes only."),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"instructions for installing Rancher on Kubernetes")," describe how to first use K3s or RKE to create and manage a Kubernetes cluster, then install Rancher onto that cluster."),(0,i.kt)("p",null,"When the nodes in your Kubernetes cluster are running and fulfill the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"node requirements,")," you will use Helm to deploy Rancher onto Kubernetes. Helm uses Rancher's Helm chart to install a replica of Rancher on each node in the Kubernetes cluster. We recommend using a load balancer to direct traffic to each replica of Rancher in the cluster."),(0,i.kt)("p",null,"For a longer discussion of Rancher architecture, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture"},"architecture overview,")," ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations"},"recommendations for production-grade architecture,")," or our ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"best practices guide.")),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before installing Rancher, make sure that your nodes fulfill all of the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"installation requirements.")),(0,i.kt)("h1",{id:"architecture-tip"},"Architecture Tip"),(0,i.kt)("p",null,"For the best performance and greater security, we recommend a separate, dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,i.kt)("p",null,"For more architecture recommendations, refer to ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/rancher-manager-architecture/architecture-recommendations"},"this page.")),(0,i.kt)("h3",{id:"more-options-for-installations-on-a-kubernetes-cluster"},"More Options for Installations on a Kubernetes Cluster"),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options"},"Helm chart options")," for details on installing Rancher on a Kubernetes cluster with other configurations, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#api-audit-log"},"API auditing to record all transactions")),(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on a load balancer")),(0,i.kt)("li",{parentName:"ul"},"With a ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#customizing-your-ingress"},"custom Ingress"))),(0,i.kt)("p",null,"In the Rancher installation instructions, we recommend using K3s or RKE to set up a Kubernetes cluster before installing Rancher on the cluster. Both K3s and RKE have many configuration options for customizing the Kubernetes cluster to suit your specific environment. For the full list of their capabilities, refer to their documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE configuration options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"K3s configuration options"))),(0,i.kt)("h3",{id:"more-options-for-installations-with-docker"},"More Options for Installations with Docker"),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"docs about options for Docker installs")," for details about other configurations including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/single-node-rancher-in-docker/advanced-options#api-audit-log"},"API auditing to record all transactions")),(0,i.kt)("li",{parentName:"ul"},"With an ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer"},"external load balancer")),(0,i.kt)("li",{parentName:"ul"},"With a ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/single-node-rancher-in-docker/advanced-options#persistent-data"},"persistent data store"))))}p.isMDXComponent=!0}}]);