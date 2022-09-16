"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89383],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),s=n(86010),l=n(72389),i=n(67392),o=n(7094),u=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,f=e.className,R=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:R.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=R.find((function(e){return e.props.default})))?void 0:n.props.value)?t:R[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),O=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,a.useState)(b),C=T[0],I=T[1],E=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=O[g];null!=S&&S!==C&&v.some((function(e){return e.value===S}))&&I(S)}var M=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==C&&(A(t),I(r),null!=g&&N(g,String(r)))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var s,l=E.indexOf(e.currentTarget)-1;n=null!=(s=E[l])?s:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:w,onFocus:M,onClick:M},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(R.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},R.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},55674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=n(65488),i=n(85162),o=["components"],u={title:"Rendering the Helm Template in an Air Gapped Environment",shortTitle:"Air Gap Upgrade",weight:1},p=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",id:"version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",title:"Rendering the Helm Template in an Air Gapped Environment",description:"These instructions assume you have already followed the instructions for a Kubernetes upgrade on this page, including the prerequisites, up until step 3. Upgrade Rancher.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",tags:[],version:"2.5",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Rendering the Helm Template in an Air Gapped Environment",shortTitle:"Air Gap Upgrade",weight:1},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},next:{title:"Installing Rancher on Amazon EKS",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"}},d={},m=[{value:"Rancher Helm Template Options",id:"rancher-helm-template-options",level:3},{value:"Option A: Default Self-signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Certificates from Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:3},{value:"Apply the Rendered Templates",id:"apply-the-rendered-templates",level:3}],h={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"These instructions assume you have already followed the instructions for a Kubernetes upgrade on ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this page,")," including the prerequisites, up until step 3. Upgrade Rancher.")),(0,s.kt)("h3",{id:"rancher-helm-template-options"},"Rancher Helm Template Options"),(0,s.kt)("p",null,"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,s.kt)("p",null,"Based on the choice you made during installation, complete one of the procedures below."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,s.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-signed Certificate"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,s.kt)(i.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set certmanager.version=<CERTMANAGER_VERSION> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,s.kt)("h3",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates from Files using Kubernetes Secrets"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,s.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,s.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,s.kt)(i.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,s.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,s.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,s.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set privateCA=true \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,s.kt)("h3",{id:"apply-the-rendered-templates"},"Apply the Rendered Templates"),(0,s.kt)("p",null,"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")),(0,s.kt)("h1",{id:"verify-the-upgrade"},"Verify the Upgrade"),(0,s.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,s.kt)("p",{parentName:"blockquote"},"See ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),".")),(0,s.kt)("h1",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,s.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}g.isMDXComponent=!0}}]);