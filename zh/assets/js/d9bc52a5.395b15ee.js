"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12107],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),l=t(86010),i=t(72389),o=t(67392),u=t(7094),c=t(12466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,d=e.defaultValue,h=e.values,k=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),O=N.tabGroupChoices,I=N.setTabGroupChoices,w=(0,a.useState)(y),R=w[0],E=w[1],_=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=O[k];null!=x&&x!==R&&g.some((function(e){return e.value===x}))&&E(x)}var P=function(e){var n=e.currentTarget,t=_.indexOf(n),r=g[t].value;r!==R&&(C(n),E(r),null!=k&&I(k,String(r)))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;t=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var l,i=_.indexOf(e.currentTarget)-1;t=null!=(l=_[i])?l:_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===n?0:-1,"aria-selected":R===n,key:n,ref:function(e){return _.push(e)},onKeyDown:L,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":R===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==R})}))))}function d(e){var n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},92204:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],c={title:"Helm CLI \u5feb\u901f\u5165\u95e8",weight:300},s=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",id:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",title:"Helm CLI \u5feb\u901f\u5165\u95e8",description:"\u672c\u6587\u63d0\u4f9b\u4e86\u5feb\u901f\u5b89\u88c5 Rancher \u7684\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Helm CLI \u5feb\u901f\u5165\u95e8",weight:300},sidebar:"tutorialSidebar",previous:{title:"Rancher Equinix Metal \u5feb\u901f\u5165\u95e8",permalink:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},next:{title:"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/pages-for-subheaders/deploy-rancher-workloads"}},m={},d=[{value:"\u5728 Linux \u4e0a\u5b89\u88c5 K3s",id:"\u5728-linux-\u4e0a\u5b89\u88c5-k3s",level:2},{value:"\u5c06 kubeconfig \u4fdd\u5b58\u5230\u4f60\u7684\u5de5\u4f5c\u7ad9",id:"\u5c06-kubeconfig-\u4fdd\u5b58\u5230\u4f60\u7684\u5de5\u4f5c\u7ad9",level:2},{value:"\u5728 kubeconfig \u4e2d\u7f16\u8f91 Rancher Server URL",id:"\u5728-kubeconfig-\u4e2d\u7f16\u8f91-rancher-server-url",level:2},{value:"\u4f7f\u7528 Helm \u6765\u5b89\u88c5 Rancher",id:"\u4f7f\u7528-helm-\u6765\u5b89\u88c5-rancher",level:2}],h={toc:d};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u63d0\u4f9b\u4e86\u5feb\u901f\u5b89\u88c5 Rancher \u7684\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u8bf4\u660e\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a Linux \u865a\u62df\u673a\uff0c\u5e76\u80fd\u4ece\u672c\u5730\u5de5\u4f5c\u7ad9\u4e0e\u4e4b\u901a\u4fe1\u3002Rancher \u5c06\u5b89\u88c5\u5728 Linux \u4e3b\u673a\u4e0a\u3002\u4f60\u5c06\u9700\u8981\u68c0\u7d22\u8be5\u4e3b\u673a\u7684 IP \u5730\u5740\uff0c\u4ee5\u4fbf\u4ece\u672c\u5730\u5de5\u4f5c\u7ad9\u8bbf\u95ee Rancher\u3002Rancher \u65e8\u5728\u8fdc\u7a0b\u7ba1\u7406 Kubernetes \u96c6\u7fa4\uff0c\u56e0\u6b64 Rancher \u7ba1\u7406\u7684\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e5f\u90fd\u9700\u8981\u80fd\u591f\u8bbf\u95ee\u8be5 IP \u5730\u5740\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4e0d\u5efa\u8bae\u5728\u672c\u5730\u5b89\u88c5 Rancher\uff0c\u56e0\u4e3a\u5b83\u4f1a\u4ea7\u751f\u7f51\u7edc\u95ee\u9898\u3002\u5982\u679c\u4f60\u5728 localhost \u4e0a\u5b89\u88c5 Rancher\uff0cRancher \u65e0\u6cd5\u4e0e\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u901a\u4fe1\uff0c\u56e0\u6b64\u5728 localhost \u4e0a\u4f60\u65e0\u6cd5\u6d4b\u8bd5 Rancher \u7684\u96c6\u7fa4\u914d\u7f6e\u548c\u96c6\u7fa4\u7ba1\u7406\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4f60\u7684 Linux \u4e3b\u673a\u53ef\u4ee5\u4f4d\u4e8e\u4efb\u4f55\u5730\u65b9\u3002\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u662f Amazon EC2 \u5b9e\u4f8b\u3001Digital Ocean Droplet \u6216 Azure \u865a\u62df\u673a\u3002\u5176\u4ed6 Rancher \u6587\u6863\u4e5f\u7ecf\u5e38\u79f0\u5b83\u4eec\u4e3a\u201c\u8282\u70b9\u201d\u3002\u90e8\u7f72 Linux \u4e3b\u673a\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u8bbe\u7f6e\u4e00\u4e2a Amazon EC2 \u5b9e\u4f8b\uff0c\u5982",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"\u672c\u6559\u7a0b"),"\u4e2d\u6240\u793a\u3002"),(0,l.kt)("p",null,"\u5b8c\u6574\u7684\u5b89\u88c5\u8981\u6c42\u5728",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("h2",{id:"\u5728-linux-\u4e0a\u5b89\u88c5-k3s"},"\u5728 Linux \u4e0a\u5b89\u88c5 K3s"),(0,l.kt)("p",null,"\u5728 Linux \u4e3b\u673a\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5 K3s \u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION="***" sh -s - server --cluster-init\n')),(0,l.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u6307\u5b9a K3s \u7248\u672c\uff0c\u5728\u8fd0\u884c K3s \u5b89\u88c5\u811a\u672c\u65f6\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_VERSION")," \u73af\u5883\u53d8\u91cf\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--cluster-init")," \u5141\u8bb8 K3s \u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\uff0c\u5e76\u80fd\u591f\u8f6c\u6362\u4e3a HA \u8bbe\u7f6e\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/ha-embedded/"},"\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528\u6027"),"\u3002"),(0,l.kt)("p",null,"\u4fdd\u5b58 Linux \u4e3b\u673a\u7684 IP\u3002"),(0,l.kt)("h2",{id:"\u5c06-kubeconfig-\u4fdd\u5b58\u5230\u4f60\u7684\u5de5\u4f5c\u7ad9"},"\u5c06 kubeconfig \u4fdd\u5b58\u5230\u4f60\u7684\u5de5\u4f5c\u7ad9"),(0,l.kt)("p",null,"kubeconfig \u6587\u4ef6\u5bf9\u4e8e\u8bbf\u95ee Kubernetes \u96c6\u7fa4\u975e\u5e38\u91cd\u8981\u3002\u4ece Linux \u4e3b\u673a\u590d\u5236 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \u4e2d\u7684\u6587\u4ef6\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5230\u672c\u5730\u5de5\u4f5c\u7ad9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," \u76ee\u5f55\u4e2d\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"scp")," \u5de5\u5177\u5e76\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u6b64\u547d\u4ee4\uff1a"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Mac \u548c Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml ~/.kube/config\n"))),(0,l.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u80fd\u8bc6\u522b\u201cscp\u201d\u547d\u4ee4\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5148\u5b89\u88c5\u4e00\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5728 Windows Powershell \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Find-Module Posh-SSH\nInstall-Module Posh-SSH\n\n## \u83b7\u53d6\u8fdc\u7a0b kubeconfig \u6587\u4ef6\nscp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml $env:USERPROFILE\\.kube\\config\n")))),(0,l.kt)("h2",{id:"\u5728-kubeconfig-\u4e2d\u7f16\u8f91-rancher-server-url"},"\u5728 kubeconfig \u4e2d\u7f16\u8f91 Rancher Server URL"),(0,l.kt)("p",null,"\u5728 kubeconfig \u6587\u4ef6\u4e2d\uff0c\u4f60\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," \u5b57\u6bb5\u7684\u503c\u66f4\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>:6443"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7aef\u53e3 6443 \u8bbf\u95ee Kubernetes API Server\uff0c\u901a\u8fc7\u7aef\u53e3 80 \u548c 443 \u8bbf\u95ee Rancher Server\u3002\u4f60\u9700\u8981\u8fdb\u884c\u6b64\u7f16\u8f91\uff0c\u4ee5\u4fbf\u4f60\u4ece\u672c\u5730\u5de5\u4f5c\u7ad9\u8fd0\u884c Helm \u6216 kubectl \u547d\u4ee4\u65f6\uff0c\u80fd\u591f\u4e0e\u5b89\u88c5\u4e86 Rancher \u7684 Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Mac \u548c Linux",mdxType:"TabItem"},(0,l.kt)("p",null,"\u6253\u5f00 kubeconfig \u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528 Vim\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi ~/.kube/config\n")),(0,l.kt)("p",null,"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u4ee5\u6253\u5f00 Vim \u7684\u63d2\u5165\u6a21\u5f0f\u3002\u8981\u4fdd\u5b58\u4f60\u7684\u5de5\u4f5c\uff0c\u8bf7\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Esc"),"\u3002\u7136\u540e\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},":wq")," \u5e76\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Enter"),"\u3002")),(0,l.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728 Windows Powershell \u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"notepad.exe")," \u6765\u7f16\u8f91 kubeconfig \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"notepad.exe $env:USERPROFILE\\.kube\\config\n")),(0,l.kt)("p",null,"\u7f16\u8f91\u5b8c\u6210\u540e\uff0c\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"ctrl+s")," \u6216\u8f6c\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"File > Save")," \u6765\u4fdd\u5b58\u4f60\u7684\u5de5\u4f5c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-helm-\u6765\u5b89\u88c5-rancher"},"\u4f7f\u7528 Helm \u6765\u5b89\u88c5 Rancher"),(0,l.kt)("p",null,"\u4ece\u672c\u5730\u5de5\u4f5c\u7ad9\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u4f60\u9700\u8981\u5148\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n\nkubectl create namespace cattle-system\n\nkubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n\nhelm repo add jetstack https://charts.jetstack.io\n\nhelm repo update\n\nhelm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.7.1\n\n# Windows Powershell\nhelm install cert-manager jetstack/cert-manager `\n  --namespace cert-manager `\n  --create-namespace `\n  --version v1.7.1\n")),(0,l.kt)("p",null,"\u5b89\u88c5 Rancher \u7684\u6700\u7ec8\u547d\u4ee4\u5982\u4e0b\u3002\u8be5\u547d\u4ee4\u9700\u8981\u4e00\u4e2a\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Linux \u4e3b\u673a\u7684\u57df\u540d\u3002\u4e3a\u4e86\u7b80\u5316\u672c\u6559\u7a0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5047\u57df\u540d\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io")," \u662f\u4e00\u4e2a\u5047\u57df\u540d\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("p",null,"\u8981\u5b89\u88c5\u7279\u5b9a\u7684 Rancher \u7248\u672c\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--version")," \u6807\u5fd7\uff08\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"--version 2.6.6"),"\uff09\u3002\u5426\u5219\uff0c\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7684 Rancher\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"\u9009\u62e9 Rancher \u7248\u672c"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io \\\n  --set replicas=1 \\\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n\n# Windows Powershell\nhelm install rancher rancher-latest/rancher `\n  --namespace cattle-system `\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io `\n  --set replicas=1 `\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u4f60\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u5bfc\u822a\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io"),"\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230 Rancher UI\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u8bf4\u660e\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a\u5047\u57df\u540d\u548c\u81ea\u7b7e\u540d\u8bc1\u4e66\u6765\u8fdb\u884c\u5b89\u88c5\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5b89\u5168\u4f8b\u5916\u6765\u67e5\u770b Rancher UI\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u751f\u4ea7\u5b89\u88c5\uff0c\u4f60\u9700\u8981\u5177\u6709\u8d1f\u8f7d\u5747\u8861\u5668\u3001\u771f\u5b9e\u57df\u540d\u548c\u771f\u5b9e\u8bc1\u4e66\u7684\u9ad8\u53ef\u7528\u6027\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u8bf4\u660e\u8fd8\u7701\u7565\u4e86\u5b8c\u6574\u7684\u5b89\u88c5\u8981\u6c42\u548c\u5176\u4ed6\u5b89\u88c5\u9009\u9879\u3002\u5982\u679c\u4f60\u5bf9\u8fd9\u4e9b\u6b65\u9aa4\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u53c2\u9605\u5b8c\u6574\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Helm CLI \u5b89\u88c5\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u65b0\u7684 Rancher Server \u6765\u542f\u52a8\u65b0\u7684 Kubernetes \u96c6\u7fa4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5728 Rancher \u4e2d\u8bbe\u7f6e\u4e91\u51ed\u8bc1\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes \u96c6\u7fa4"),"\u3002"))}k.isMDXComponent=!0}}]);