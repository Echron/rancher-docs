"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8392],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78900:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:120},s=void 0,c={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",id:"getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",weight:120},sidebar:"tutorialSidebar",previous:{title:"Rancher Azure Quick Start Guide",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/azure"},next:{title:"Rancher GCP Quick Start Guide",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/gcp"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following steps will quickly deploy a Rancher server on DigitalOcean in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"Installation"),"."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to DigitalOcean will incur charges."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com"},"DigitalOcean Account"),": You will require an account on DigitalOcean as this is where the server and cluster will run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-space-and-api-key"},"DigitalOcean Access Key"),": Use this link to create a DigitalOcean Access Key if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster to DigitalOcean.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go into the DigitalOcean folder containing the terraform files by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/do"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"do_token")," - DigitalOcean access key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/do"},"DO Quickstart Readme")," for more information. Suggestions include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"do_region")," - DigitalOcean region, choose the closest instead of the default (",(0,i.kt)("inlineCode",{parentName:"li"},"nyc1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," - Prefix for all created resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"droplet_size")," - Droplet size used, minimum is ",(0,i.kt)("inlineCode",{parentName:"li"},"s-2vcpu-4gb")," but ",(0,i.kt)("inlineCode",{parentName:"li"},"s-4vcpu-8gb")," could be used if within budget"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Apply complete! Resources: 15 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ssh to the Rancher Server using the ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa")," key generated in ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/do"),"."))),(0,i.kt)("h4",{id:"result"},"Result"),(0,i.kt)("p",null,"Two Kubernetes clusters are deployed into your DigitalOcean account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory."),(0,i.kt)("h3",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,i.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/do")," folder, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}m.isMDXComponent=!0}}]);