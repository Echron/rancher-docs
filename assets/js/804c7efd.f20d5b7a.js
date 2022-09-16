"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88990],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Failed to get job complete status",weight:20,aliases:["/rancher/v2.0-v2.4/en/installation/troubleshooting-ha/job-complete-status/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/troubleshooting/job-complete-status","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/job-complete-status/"]},l=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status",title:"Failed to get job complete status",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Failed to get job complete status",weight:20,aliases:["/rancher/v2.0-v2.4/en/installation/troubleshooting-ha/job-complete-status/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/troubleshooting/job-complete-status","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/job-complete-status/"]},sidebar:"tutorialSidebar",previous:{title:"Generic troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting"},next:{title:"404 - default backend",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/default-backend"}},c={},u=[{value:"Failed to deploy addon execute job rke-user-includes-addons: Failed to get job complete status",id:"failed-to-deploy-addon-execute-job-rke-user-includes-addons-failed-to-get-job-complete-status",level:3},{value:"error: error converting YAML to JSON: yaml: line 9:",id:"error-error-converting-yaml-to-json-yaml-line-9",level:4},{value:"Error from server (BadRequest): error when creating &quot;/etc/config/rke-user-addon.yaml&quot;: Secret in version &quot;v1&quot; cannot be handled as a Secret",id:"error-from-server-badrequest-error-when-creating-etcconfigrke-user-addonyaml-secret-in-version-v1-cannot-be-handled-as-a-secret",level:4},{value:"The Ingress &quot;cattle-ingress-http&quot; is invalid: spec.rules0.host: Invalid value: &quot;IP&quot;: must be a DNS name, not an IP address",id:"the-ingress-cattle-ingress-http-is-invalid-specrules0host-invalid-value-ip-must-be-a-dns-name-not-an-ip-address",level:4}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,a.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,a.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,a.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,a.kt)("p",null,"To debug issues around this error, you will need to download the command-line tool ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Install and Set Up kubectl")," how to download ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," for your platform."),(0,a.kt)("p",null,"When you have made changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", you will have to run ",(0,a.kt)("inlineCode",{parentName:"p"},"rke remove --config rancher-cluster.yml")," to clean the nodes, so it cannot conflict with previous configuration errors."),(0,a.kt)("h3",{id:"failed-to-deploy-addon-execute-job-rke-user-includes-addons-failed-to-get-job-complete-status"},"Failed to deploy addon execute job ","[rke-user-includes-addons]",": Failed to get job complete status"),(0,a.kt)("p",null,"Something is wrong in the addons definitions, you can run the following command to get the root cause in the logging of the job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml logs -l job-name=rke-user-addon-deploy-job -n kube-system\n")),(0,a.kt)("h4",{id:"error-error-converting-yaml-to-json-yaml-line-9"},"error: error converting YAML to JSON: yaml: line 9:"),(0,a.kt)("p",null,"The structure of the addons definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," is wrong. In the different resources specified in the addons section, there is a error in the structure of the YAML. The pointer  ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml line 9")," references to the line number of the addon that is causing issues."),(0,a.kt)("b",null,"Things to check"),(0,a.kt)("ul",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Is each of the base64 encoded certificate string placed directly after the key, for example: `tls.crt: LS01...`, there should be no newline/space before, in between or after."),(0,a.kt)("li",null,"Is the YAML properly formatted, each indentation should be 2 spaces as shown in the template files."),(0,a.kt)("li",null,"Verify the integrity of your certificate by running this command `cat MyCertificate | base64 -d` on Linux, `cat MyCertificate | base64 -D` on Mac OS . If any error exists, the command output will tell you."))),(0,a.kt)("h4",{id:"error-from-server-badrequest-error-when-creating-etcconfigrke-user-addonyaml-secret-in-version-v1-cannot-be-handled-as-a-secret"},'Error from server (BadRequest): error when creating "/etc/config/rke-user-addon.yaml": Secret in version "v1" cannot be handled as a Secret'),(0,a.kt)("p",null,"The base64 string of one of the certificate strings is wrong. The log message will try to show you what part of the string is not recognized as valid base64."),(0,a.kt)("b",null,"Things to check"),(0,a.kt)("ul",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Check if the base64 string is valid by running one of the commands below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# MacOS\necho BASE64_CRT | base64 -D\n# Linux\necho BASE64_CRT | base64 -d\n# Windows\ncertutil -decode FILENAME.base64 FILENAME.verify\n")))),(0,a.kt)("h4",{id:"the-ingress-cattle-ingress-http-is-invalid-specrules0host-invalid-value-ip-must-be-a-dns-name-not-an-ip-address"},'The Ingress "cattle-ingress-http" is invalid: spec.rules',"[0]",'.host: Invalid value: "IP": must be a DNS name, not an IP address'),(0,a.kt)("p",null,"The host value can only contain a host name, as it is needed by the ingress controller to match the hostname and pass to the correct backend."))}h.isMDXComponent=!0}}]);