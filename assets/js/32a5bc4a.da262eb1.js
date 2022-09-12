"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8282],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69286:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={title:"Troubleshooting Controlplane Nodes",weight:2},c=void 0,s={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",title:"Troubleshooting Controlplane Nodes",description:"This section applies to nodes with the controlplane role.",source:"@site/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Troubleshooting Controlplane Nodes",weight:2},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting etcd Nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},next:{title:"Troubleshooting nginx-proxy",permalink:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"}},u={},p=[],d={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section applies to nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,a.kt)("h1",{id:"check-if-the-controlplane-containers-are-running"},"Check if the Controlplane Containers are Running"),(0,a.kt)("p",null,"There are three specific containers launched on nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-scheduler"))),(0,a.kt)("p",null,"The containers should have status ",(0,a.kt)("strong",{parentName:"p"},"Up"),". The duration shown after ",(0,a.kt)("strong",{parentName:"p"},"Up")," is the time the container has been running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kube-apiserver|kube-controller-manager|kube-scheduler'\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n26c7159abbcc        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-apiserver\nf3d287ca4549        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-scheduler\nbdf3898b8063        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-controller-manager\n')),(0,a.kt)("h1",{id:"controlplane-container-logging"},"Controlplane Container Logging"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you added multiple nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role, both ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," use a leader election process to determine the leader. Only the current leader will log the performed actions. See ",(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources#kubernetes-leader-election"},"Kubernetes leader election")," how to retrieve the current leader."))),(0,a.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker logs kube-apiserver\ndocker logs kube-controller-manager\ndocker logs kube-scheduler\n")),(0,a.kt)("h1",{id:"rke2-server-logging"},"RKE2 Server Logging"),(0,a.kt)("p",null,"If Rancher provisions an RKE2 cluster that can't communicate with Rancher, you can run this command on a server node in the downstream cluster to get the RKE2 server logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"journalctl -u rke2-server -f\n")))}h.isMDXComponent=!0}}]);