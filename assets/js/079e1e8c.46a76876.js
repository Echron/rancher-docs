"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[858],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(o),h=n,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return o?r.createElement(g,s(s({ref:t},p),{},{components:o})):r.createElement(g,s({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=o[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},93731:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),s=["components"],i={title:"3. Expose Your Services",weight:400,aliases:["/rancher/v2.x/en/v1.6-migration/expose-services/"]},l=void 0,d={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",title:"3. Expose Your Services",description:"In testing environments, you usually need to route external traffic to your cluster containers by using an unadvertised IP and port number, providing users access to their apps. You can accomplish this goal using port mapping, which exposes a workload (i.e., service) publicly over a specific port, provided you know your node IP address(es). You can either map a port using HostPorts (which exposes a service on a specified port on a single node) or NodePorts (which exposes a service on all nodes on a single port).",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"3. Expose Your Services",weight:400,aliases:["/rancher/v2.x/en/v1.6-migration/expose-services/"]},sidebar:"tutorialSidebar",previous:{title:"2. Migrate Your Services",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"},next:{title:"4. Configure Health Checks",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"}},p={},u=[{value:"What&#39;s Different About Exposing Services in Rancher v2.x?",id:"whats-different-about-exposing-services-in-rancher-v2x",level:2},{value:"HostPort",id:"hostport",level:2},{value:"HostPort Pros",id:"hostport-pros",level:4},{value:"HostPort Cons",id:"hostport-cons",level:4},{value:"Setting HostPort",id:"setting-hostport",level:2},{value:"NodePort",id:"nodeport",level:2},{value:"NodePort Pros",id:"nodeport-pros",level:4},{value:"NodePort Cons",id:"nodeport-cons",level:4},{value:"Setting NodePort",id:"setting-nodeport",level:2},{value:"Next: Configure Health Checks",id:"next-configure-health-checks",level:3}],c={toc:u};function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In testing environments, you usually need to route external traffic to your cluster containers by using an unadvertised IP and port number, providing users access to their apps. You can accomplish this goal using port mapping, which exposes a workload (i.e., service) publicly over a specific port, provided you know your node IP address(es). You can either map a port using HostPorts (which exposes a service on a specified port on a single node) or NodePorts (which exposes a service on ",(0,a.kt)("em",{parentName:"p"},"all")," nodes on a single port)."),(0,a.kt)("p",null,"Use this document to correct workloads that list ",(0,a.kt)("inlineCode",{parentName:"p"},"ports")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"output.txt"),". You can correct it by either setting a HostPort or a NodePort."),(0,a.kt)("figcaption",null,"Resolve ",(0,a.kt)("code",null,"ports")," for the ",(0,a.kt)("code",null,"web")," Workload"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Resolve Ports",src:o(83797).Z,width:"830",height:"411"})),(0,a.kt)("h2",{id:"whats-different-about-exposing-services-in-rancher-v2x"},"What's Different About Exposing Services in Rancher v2.x?"),(0,a.kt)("p",null,"In Rancher v1.6, we used the term ",(0,a.kt)("em",{parentName:"p"},"Port Mapping")," for exposing an IP address and port where your you and your users can access a service. "),(0,a.kt)("p",null,"In Rancher v2.x, the mechanisms and terms for service exposure have changed and expanded. You now have two port mapping options: ",(0,a.kt)("em",{parentName:"p"},"HostPorts")," (which is most synonymous with v1.6 port mapping, allows you to expose your app at a single IP and port) and ",(0,a.kt)("em",{parentName:"p"},"NodePorts")," (which allows you to map ports on ",(0,a.kt)("em",{parentName:"p"},"all")," of your cluster nodes, not just one)."),(0,a.kt)("p",null,"Unfortunately, port mapping cannot be parsed by the migration-tools CLI. If the services you're migrating from v1.6 to v2.x have port mappings set, you'll have to either set a ",(0,a.kt)("a",{parentName:"p",href:"#hostport"},"HostPort")," or ",(0,a.kt)("a",{parentName:"p",href:"#nodeport"},"NodePort")," as a replacement."),(0,a.kt)("h2",{id:"hostport"},"HostPort"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"HostPort")," is a port exposed to the public on a ",(0,a.kt)("em",{parentName:"p"},"specific node")," running one or more pod. Traffic to the node and the exposed port (",(0,a.kt)("inlineCode",{parentName:"p"},"<HOST_IP>:<HOSTPORT>"),") are routed to the requested container's private port. Using a HostPort for a Kubernetes pod in Rancher v2.x is synonymous with creating a public port mapping for a container in Rancher v1.6. "),(0,a.kt)("p",null,"In the following diagram, a user is trying to access an instance of Nginx, which is running within a pod on port 80. However, the Nginx deployment is assigned a HostPort of 9890. The user can connect to this pod by browsing to its host IP address, followed by the HostPort in use (9890 in case)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HostPort Diagram",src:o(67303).Z,width:"657",height:"386"})),(0,a.kt)("h4",{id:"hostport-pros"},"HostPort Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any port available on the host can be exposed. "),(0,a.kt)("li",{parentName:"ul"},"Configuration is simple, and the HostPort is set directly in the Kubernetes pod specifications. Unlike NodePort, no other objects need to be created to expose your app. ")),(0,a.kt)("h4",{id:"hostport-cons"},"HostPort Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Limits the scheduling options for your pod, as only hosts with vacancies for your chosen port can be used."),(0,a.kt)("li",{parentName:"ul"},"If the scale of your workload is larger than the number of nodes in your Kubernetes cluster, the deployment fails."),(0,a.kt)("li",{parentName:"ul"},"Any two workloads that specify the same HostPort cannot be deployed to the same node."),(0,a.kt)("li",{parentName:"ul"},"If the host where your pods are running becomes unavailable, Kubernetes reschedules the pods to different nodes. Thus, if the IP address for your workload changes, external clients of your application will lose access to the pod. The same thing happens when you restart your pods\u2014Kubernetes reschedules them to a different node.")),(0,a.kt)("h2",{id:"setting-hostport"},"Setting HostPort"),(0,a.kt)("p",null,"You can set a HostPort for migrated workloads (i.e., services) using the Rancher v2.x UI. To add a HostPort, browse to the project containing your workloads, and edit each workload that you want to expose, as shown below. Map the port that your service container exposes to the HostPort exposed on your target node."),(0,a.kt)("p",null,"For example, for the web-deployment.yml file parsed from v1.6 that we've been using as a sample, we would edit its Kubernetes manifest, set the publish the port that the container uses, and then declare a HostPort listening on the port of your choice (",(0,a.kt)("inlineCode",{parentName:"p"},"9890"),") as shown below. You can then access your workload by clicking the link created in the Rancher UI. "),(0,a.kt)("figcaption",null,"Port Mapping: Setting HostPort"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(44019).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"nodeport"},"NodePort"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"NodePort")," is a port that's open to the public ",(0,a.kt)("em",{parentName:"p"},"on each")," of your cluster nodes. When the NodePort receives a request for any of the cluster hosts' IP address for the set NodePort value, NodePort (which is a Kubernetes service) routes traffic to a specific pod, regardless of what node it's running on. NodePort provides a static endpoint where external requests can reliably reach your pods."),(0,a.kt)("p",null,"NodePorts help you circumvent an IP address shortcoming. Although pods can be reached by their IP addresses, they are disposable by nature. Pods are routinely destroyed and recreated, getting a new IP address with each replication. Therefore, IP addresses are not a reliable way to access your pods. NodePorts help you around this issue by providing a static service where they can always be reached.  Even if your pods change their IP addresses, external clients dependent on them can continue accessing them without disruption, all without any knowledge of the pod re-creation occurring on the back end."),(0,a.kt)("p",null,"In the following diagram, a user is trying to connect to an instance of Nginx running in a Kubernetes cluster managed by Rancher. Although he knows what NodePort Nginx is operating on (30216 in this case), he does not know the IP address of the specific node that the pod is running on. However, with NodePort enabled, he can connect to the pod using the IP address for ",(0,a.kt)("em",{parentName:"p"},"any")," node in the cluster. Kubeproxy will forward the request to the correct node and pod.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NodePort Diagram",src:o(84485).Z,width:"774",height:"500"})),(0,a.kt)("p",null,"NodePorts are available within your Kubernetes cluster on an internal IP. If you want to expose pods external to the cluster, use NodePorts in conjunction with an external load balancer. Traffic requests from outside your cluster for ",(0,a.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<NodePort>")," are directed to the workload. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<NodeIP>")," can be the IP address of any node in your Kubernetes cluster."),(0,a.kt)("h4",{id:"nodeport-pros"},"NodePort Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating a NodePort service provides a static public endpoint to your workload pods. There, even if the pods are destroyed, Kubernetes can deploy the workload anywhere in the cluster without altering the public endpoint."),(0,a.kt)("li",{parentName:"ul"},"The scale of the pods is not limited by the number of nodes in the cluster. NodePort allows decoupling of public access from the number and location of pods.")),(0,a.kt)("h4",{id:"nodeport-cons"},"NodePort Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When a NodePort is used, that ",(0,a.kt)("inlineCode",{parentName:"li"},"<NodeIP>:<NodePort>")," is reserved in your Kubernetes cluster on all nodes, even if the workload is never deployed to the other nodes."),(0,a.kt)("li",{parentName:"ul"},"You can only specify a port from a configurable range (by default, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"30000-32767"),")."),(0,a.kt)("li",{parentName:"ul"},"An extra Kubernetes object (a Kubernetes service of type NodePort) is needed to expose your workload. Thus, finding out how your application is exposed is not straightforward.")),(0,a.kt)("h2",{id:"setting-nodeport"},"Setting NodePort"),(0,a.kt)("p",null,"You can set a NodePort for migrated workloads (i.e., services) using the Rancher v2.x UI. To add a NodePort, browse to the project containing your workloads, and edit each workload that you want to expose, as shown below. Map the port that your service container exposes to a NodePort, which you'll be able to access from each cluster node."),(0,a.kt)("p",null,"For example, for the ",(0,a.kt)("inlineCode",{parentName:"p"},"web-deployment.yml")," file parsed from v1.6 that we've been using as a sample, we would edit its Kubernetes manifest, set the publish the port that the container uses, and then declare a NodePort. You can then access your workload by clicking the link created in the Rancher UI. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"If you set a NodePort without giving it a value, Rancher chooses a port at random from the following range: ",(0,a.kt)("inlineCode",{parentName:"li"},"30000-32767"),"."),(0,a.kt)("li",{parentName:"ul"},"If you manually set a NodePort, you must assign it a value within the ",(0,a.kt)("inlineCode",{parentName:"li"},"30000-32767")," range."))),(0,a.kt)("figcaption",null,"Port Mapping: Setting NodePort"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(28881).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"next-configure-health-checks"},(0,a.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"},"Next: Configure Health Checks")))}h.isMDXComponent=!0},67303:function(e,t,o){t.Z=o.p+"assets/images/hostPort-8160fcf1fedbdd6e6b4e91709d663c14.svg"},84485:function(e,t,o){t.Z=o.p+"assets/images/nodePort-eb87ddea6cb90aa0eca1310463c98d1e.svg"},83797:function(e,t,o){t.Z=o.p+"assets/images/resolve-ports-d7da66c5d70c92cf72bb63b078911bba.png"},44019:function(e,t,o){t.Z=o.p+"assets/images/set-hostport-cd2c0cb26e1ba39722acf189f1f3a117.gif"},28881:function(e,t,o){t.Z=o.p+"assets/images/set-nodeport-00a718c5350319aa977bc32266a0815b.gif"}}]);