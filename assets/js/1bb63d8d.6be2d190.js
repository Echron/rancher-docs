"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Enable Monitoring",weight:1},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",title:"Enable Monitoring",description:"As an administrator or cluster owner, you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Enable Monitoring",weight:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring Guides",permalink:"/pages-for-subheaders/monitoring-alerting-guides"},next:{title:"Uninstall Monitoring",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"}},u={},p=[{value:"Enable Monitoring for use without SSL",id:"enable-monitoring-for-use-without-ssl",level:3},{value:"Enable Monitoring for use with SSL",id:"enable-monitoring-for-use-with-ssl",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As an ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,i.kt)("p",null,"This page describes how to enable monitoring and alerting within a cluster using the new monitoring application."),(0,i.kt)("p",null,"You can enable monitoring with or without SSL."),(0,i.kt)("h1",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that you are allowing traffic on port 9796 for each of your nodes because Prometheus will scrape metrics from here."),(0,i.kt)("li",{parentName:"ul"},"Make sure your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. A breakdown of the resource limits and requests is ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"here.")),(0,i.kt)("li",{parentName:"ul"},"When installing monitoring on an RKE cluster using RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),"."),(0,i.kt)("li",{parentName:"ul"},"For clusters provisioned with the RKE CLI and the address is set to a hostname instead of an IP address, set ",(0,i.kt)("inlineCode",{parentName:"li"},"rkeEtcd.clients.useLocalhost")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," during the Values configuration step of the installation. The YAML snippet will look like the following:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rkeEtcd:\n  clients:\n    useLocalhost: true\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment."))),(0,i.kt)("h1",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),".  To configure Prometheus resources from the Rancher UI, click ",(0,i.kt)("strong",{parentName:"p"},"Apps & Marketplace > Monitoring")," in the upper left corner."),(0,i.kt)("p",null,"For more information about the default limits, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,i.kt)("h1",{id:"install-the-monitoring-application"},"Install the Monitoring Application"),(0,i.kt)("h3",{id:"enable-monitoring-for-use-without-ssl"},"Enable Monitoring for use without SSL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Cluster Tools")," (bottom left corner)."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install")," by Monitoring."),(0,i.kt)("li",{parentName:"ol"},"Optional: Customize requests, limits and more for Alerting, Prometheus, and Grafana in the Values step. For help, refer to the ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,i.kt)("h3",{id:"enable-monitoring-for-use-with-ssl"},"Enable Monitoring for use with SSL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,i.kt)("li",{parentName:"ul"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to enable monitoring for use with SSL and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install")," or ",(0,i.kt)("strong",{parentName:"li"},"Update"),", depending on whether you have already installed Monitoring."),(0,i.kt)("li",{parentName:"ol"},"Check the box for ",(0,i.kt)("strong",{parentName:"li"},"Customize Helm options before install")," and click ",(0,i.kt)("strong",{parentName:"li"},"Next"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Additional Secrets")," field, add the secrets created earlier.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#creating-receivers-in-the-rancher-ui"},"creating a receiver,")," SSL-enabled receivers such as email or webhook will have a ",(0,i.kt)("strong",{parentName:"p"},"SSL")," section with fields for ",(0,i.kt)("strong",{parentName:"p"},"CA File Path"),", ",(0,i.kt)("strong",{parentName:"p"},"Cert File Path"),", and ",(0,i.kt)("strong",{parentName:"p"},"Key File Path"),". Fill in these fields with the paths to each of ",(0,i.kt)("inlineCode",{parentName:"p"},"ca"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cert"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),". The path will be of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"."),(0,i.kt)("p",null,"For example, if you created a secret with these key-value pairs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"Cert File Path")," would be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),"."))}d.isMDXComponent=!0}}]);