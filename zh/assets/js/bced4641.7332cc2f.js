"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73254],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Networking",weight:102,aliases:["/rancher/v2.x/en/troubleshooting/networking/"]},s=void 0,c={unversionedId:"troubleshooting/other-troubleshooting-tips/networking",id:"version-2.5/troubleshooting/other-troubleshooting-tips/networking",title:"Networking",description:"The commands/steps listed on this page can be used to check networking related issues in your cluster.",source:"@site/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/networking.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/networking",permalink:"/zh/v2.5/troubleshooting/other-troubleshooting-tips/networking",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/networking.md",tags:[],version:"2.5",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Networking",weight:102,aliases:["/rancher/v2.x/en/troubleshooting/networking/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes resources",permalink:"/zh/v2.5/troubleshooting/other-troubleshooting-tips/kubernetes-resources"},next:{title:"DNS",permalink:"/zh/v2.5/troubleshooting/other-troubleshooting-tips/dns"}},u={},p=[{value:"Double check if all the required ports are opened in your (host) firewall",id:"double-check-if-all-the-required-ports-are-opened-in-your-host-firewall",level:3},{value:"Check if overlay network is functioning correctly",id:"check-if-overlay-network-is-functioning-correctly",level:3},{value:"Check if MTU is correctly configured on hosts and on peering/tunnel appliances/devices",id:"check-if-mtu-is-correctly-configured-on-hosts-and-on-peeringtunnel-appliancesdevices",level:3},{value:"Resolved issues",id:"resolved-issues",level:3},{value:"Overlay network broken when using Canal/Flannel due to missing node annotations",id:"overlay-network-broken-when-using-canalflannel-due-to-missing-node-annotations",level:4}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The commands/steps listed on this page can be used to check networking related issues in your cluster."),(0,a.kt)("p",null,"Make sure you configured the correct kubeconfig (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," for Rancher HA) or are using the embedded kubectl via the UI."),(0,a.kt)("h3",{id:"double-check-if-all-the-required-ports-are-opened-in-your-host-firewall"},"Double check if all the required ports are opened in your (host) firewall"),(0,a.kt)("p",null,"Double check if all the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"required ports")," are opened in your (host) firewall. The overlay network uses UDP in comparison to all other required ports which are TCP."),(0,a.kt)("h3",{id:"check-if-overlay-network-is-functioning-correctly"},"Check if overlay network is functioning correctly"),(0,a.kt)("p",null,"The pod can be scheduled to any of the hosts you used for your cluster, but that means that the NGINX ingress controller needs to be able to route the request from ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_2"),". This happens over the overlay network. If the overlay network is not functioning, you will experience intermittent TCP/HTTP connection failures due to the NGINX ingress controller not being able to route to the pod."),(0,a.kt)("p",null,"To test the overlay network, you can launch the following ",(0,a.kt)("inlineCode",{parentName:"p"},"DaemonSet")," definition. This will run a ",(0,a.kt)("inlineCode",{parentName:"p"},"swiss-army-knife")," container on every host (image was developed by Rancher engineers and can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancherlabs/swiss-army-knife"},"https://github.com/rancherlabs/swiss-army-knife"),"), which we will use to run a ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," test between containers on all hosts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This container ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/leodotcloud/swiss-army-knife/issues/18"},"does not support ARM nodes"),", such as a Raspberry Pi. This will be seen in the pod logs as ",(0,a.kt)("inlineCode",{parentName:"p"},"exec user process caused: exec format error"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the following file as ",(0,a.kt)("inlineCode",{parentName:"p"},"overlaytest.yml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: overlaytest\nspec:\n  selector:\n      matchLabels:\n        name: overlaytest\n  template:\n    metadata:\n      labels:\n        name: overlaytest\n    spec:\n      tolerations:\n      - operator: Exists\n      containers:\n      - image: rancherlabs/swiss-army-knife\n        imagePullPolicy: Always\n        name: overlaytest\n        command: ["sh", "-c", "tail -f /dev/null"]\n        terminationMessagePath: /dev/termination-log\n\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch it using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create -f overlaytest.yml"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait until ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl rollout status ds/overlaytest -w")," returns: ",(0,a.kt)("inlineCode",{parentName:"p"},'daemon set "overlaytest" successfully rolled out'),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following script, from the same location.  It will have each ",(0,a.kt)("inlineCode",{parentName:"p"},"overlaytest")," container on every host ping each other:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\necho "=> Start network overlay test"\n  kubectl get pods -l name=overlaytest -o jsonpath=\'{range .items[*]}{@.metadata.name}{" "}{@.spec.nodeName}{"\\n"}{end}\' |\n  while read spod shost \n    do kubectl get pods -l name=overlaytest -o jsonpath=\'{range .items[*]}{@.status.podIP}{" "}{@.spec.nodeName}{"\\n"}{end}\' |\n    while read tip thost\n      do kubectl --request-timeout=\'10s\' exec $spod -c overlaytest -- /bin/sh -c "ping -c2 $tip > /dev/null 2>&1"\n        RC=$?\n        if [ $RC -ne 0 ]\n          then echo FAIL: $spod on $shost cannot reach pod IP $tip on $thost\n          else echo $shost can reach $thost\n        fi\n    done\n  done\necho "=> End network overlay test"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When this command has finished running, it will output the state of each route:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'=> Start network overlay test\nError from server (NotFound): pods "wk2" not found\nFAIL: overlaytest-5bglp on wk2 cannot reach pod IP 10.42.7.3 on wk2\nError from server (NotFound): pods "wk2" not found\nFAIL: overlaytest-5bglp on wk2 cannot reach pod IP 10.42.0.5 on cp1\nError from server (NotFound): pods "wk2" not found\nFAIL: overlaytest-5bglp on wk2 cannot reach pod IP 10.42.2.12 on wk1\ncommand terminated with exit code 1\nFAIL: overlaytest-v4qkl on cp1 cannot reach pod IP 10.42.7.3 on wk2\ncp1 can reach cp1\ncp1 can reach wk1\ncommand terminated with exit code 1\nFAIL: overlaytest-xpxwp on wk1 cannot reach pod IP 10.42.7.3 on wk2\nwk1 can reach cp1\nwk1 can reach wk1\n=> End network overlay test\n')),(0,a.kt)("p",{parentName:"li"},"If you see error in the output, there is some issue with the route between the pods on the two hosts.  In the above output the node ",(0,a.kt)("inlineCode",{parentName:"p"},"wk2")," has no connectivity over the overlay network. This could be because the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"required ports")," for overlay networking are not opened for ",(0,a.kt)("inlineCode",{parentName:"p"},"wk2"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now clean up the DaemonSet by running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete ds/overlaytest"),"."))),(0,a.kt)("h3",{id:"check-if-mtu-is-correctly-configured-on-hosts-and-on-peeringtunnel-appliancesdevices"},"Check if MTU is correctly configured on hosts and on peering/tunnel appliances/devices"),(0,a.kt)("p",null,"When the MTU is incorrectly configured (either on hosts running Rancher, nodes in created/imported clusters or on appliances/devices in between), error messages will be logged in Rancher and in the agents, similar to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"websocket: bad handshake")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Failed to connect to proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read tcp: i/o timeout"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpn/docs/concepts/mtu-considerations#gateway_mtu_vs_system_mtu"},"Google Cloud VPN: MTU Considerations")," for an example how to configure MTU correctly when using Google Cloud VPN between Rancher and cluster nodes."),(0,a.kt)("h3",{id:"resolved-issues"},"Resolved issues"),(0,a.kt)("h4",{id:"overlay-network-broken-when-using-canalflannel-due-to-missing-node-annotations"},"Overlay network broken when using Canal/Flannel due to missing node annotations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitHub issue"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/issues/13644"},"#13644"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resolved in"),(0,a.kt)("td",{parentName:"tr",align:null},"v2.1.2")))),(0,a.kt)("p",null,"To check if your cluster is affected, the following command will list nodes that are broken (this command requires ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," to be installed):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get nodes -o json | jq \'.items[].metadata | select(.annotations["flannel.alpha.coreos.com/public-ip"] == null or .annotations["flannel.alpha.coreos.com/kube-subnet-manager"] == null or .annotations["flannel.alpha.coreos.com/backend-type"] == null or .annotations["flannel.alpha.coreos.com/backend-data"] == null) | .name\'\n')),(0,a.kt)("p",null,"If there is no output, the cluster is not affected."))}h.isMDXComponent=!0}}]);