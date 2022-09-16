"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25350],{3905:function(e,r,a){a.d(r,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),c=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=t,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(g,s(s({ref:r},u),{},{components:a})):n.createElement(g,s({ref:r},u))}));function h(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8531:function(e,r,a){a.r(r),a.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),t=a(63366),o=(a(67294),a(3905)),s=["components"],l={title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",weight:3040},i=void 0,c={unversionedId:"pages-for-subheaders/load-balancer-and-ingress-controller",id:"pages-for-subheaders/load-balancer-and-ingress-controller",title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",source:"@site/docs/pages-for-subheaders/load-balancer-and-ingress-controller.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/load-balancer-and-ingress-controller",permalink:"/pages-for-subheaders/load-balancer-and-ingress-controller",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/load-balancer-and-ingress-controller.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",weight:3040},sidebar:"tutorialSidebar",previous:{title:"Testing HPAs with kubectl",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"},next:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"}},u={},d=[{value:"Load Balancers",id:"load-balancers",level:2},{value:"Load Balancer Limitations",id:"load-balancer-limitations",level:3},{value:"Ingress",id:"ingress",level:2}],p={toc:d};function h(e){var r=e.components,a=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, you can set up load balancers and ingress controllers to redirect service requests."),(0,o.kt)("h2",{id:"load-balancers"},"Load Balancers"),(0,o.kt)("p",null,"After you launch an application, the app is only available within the cluster. It can't be reached from outside the cluster."),(0,o.kt)("p",null,"If you want your applications to be externally accessible, you must add a load balancer or ingress to your cluster. Load balancers create a gateway for external connections to access your cluster, provided that the user knows the load balancer's IP address and the application's port number."),(0,o.kt)("p",null,"Rancher supports two types of load balancers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-4-load-balancer"},"Layer-4 Load Balancers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-7-load-balancer"},"Layer-7 Load Balancers"))),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"load balancers"),"."),(0,o.kt)("h3",{id:"load-balancer-limitations"},"Load Balancer Limitations"),(0,o.kt)("p",null,"Load Balancers have a couple of limitations you should be aware of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load Balancers can only handle one IP address per service, which means if you run multiple services in your cluster, you must have a load balancer for each service. Running multiples load balancers can be expensive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to use a load balancer with a Hosted Kubernetes cluster (i.e., clusters hosted in GKE, EKS, or AKS), the load balancer must be running within that cloud provider's infrastructure. Please review the compatibility tables regarding support for load balancers based on how you've provisioned your clusters:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-4-load-balancing"},"Support for Layer-4 Load Balancing"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-7-load-balancing"},"Support for Layer-7 Load Balancing")))),(0,o.kt)("h2",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,"As mentioned in the limitations above, the disadvantages of using a load balancer are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load Balancers can only handle one IP address per service."),(0,o.kt)("li",{parentName:"ul"},"If you run multiple services in your cluster, you must have a load balancer for each service."),(0,o.kt)("li",{parentName:"ul"},"It can be expensive to have a load balancer for every service.")),(0,o.kt)("p",null,"In contrast, when an ingress is used as the entrypoint into a cluster, the ingress can route traffic to multiple services with greater flexibility. It can map multiple HTTP requests to services without individual IP addresses for each service. "),(0,o.kt)("p",null,"Therefore, it is useful to have an ingress if you want multiple services to be exposed with the same IP address, the same Layer 7 protocol, or the same privileged node-ports: 80 and 443."),(0,o.kt)("p",null,"Ingress works in conjunction with one or more ingress controllers to dynamically route service requests. When the ingress receives a request, the ingress controller(s) in your cluster direct the request to the correct service based on service subdomains or path rules that you've configured."),(0,o.kt)("p",null,"Each Kubernetes Ingress resource corresponds roughly to a file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"server{}")," configuration block, where requests for specific files and folders are configured."),(0,o.kt)("p",null,"Your ingress, which creates a port of entry to your cluster similar to a load balancer, can reside within your cluster or externally. Ingress and ingress controllers residing in RKE-launched clusters are powered by ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),"."),(0,o.kt)("p",null,"Ingress can provide other functionality as well, such as SSL termination, name-based virtual hosting, and more."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Using Rancher in a High Availability Configuration?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Refrain from adding an Ingress to the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster. The Nginx Ingress Controller that Rancher uses acts as a global entry point for ",(0,o.kt)("em",{parentName:"p"},"all")," clusters managed by Rancher, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster.  Therefore, when users try to access an application, your Rancher connection may drop due to the Nginx configuration being reloaded. We recommend working around this issue by deploying applications only in clusters that you launch using Rancher."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For more information on how to set up ingress in Rancher, see ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Ingress"),"."),(0,o.kt)("li",{parentName:"ul"},"For complete information about ingress and ingress controllers, see the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress Documentation")),(0,o.kt)("li",{parentName:"ul"},"When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a Global DNS entry.")))}h.isMDXComponent=!0}}]);