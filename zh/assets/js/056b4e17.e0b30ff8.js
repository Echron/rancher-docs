"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40933],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||k[d]||c;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<c;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return k}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),l=["components"],u={title:"\u4f7f\u7528 Kubectl \u548c kubeconfig \u8bbf\u95ee\u96c6\u7fa4",description:"\u4e86\u89e3\u5982\u4f55\u901a\u8fc7 kubectl Shell \u4f7f\u7528 kubectl\uff0c\u6216\u901a\u8fc7 kubectl CLI \u548c kubeconfig \u6587\u4ef6\uff0c\u6765\u8bbf\u95ee\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u7684\u8bbf\u95ee\u3002\u5f53\u4f60\u4f7f\u7528 Rancher \u521b\u5efa\u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u81ea\u52a8\u4e3a\u4f60\u7684\u96c6\u7fa4\u521b\u5efa kubeconfig\u3002",weight:2010},o=void 0,i={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",title:"\u4f7f\u7528 Kubectl \u548c kubeconfig \u8bbf\u95ee\u96c6\u7fa4",description:"\u4e86\u89e3\u5982\u4f55\u901a\u8fc7 kubectl Shell \u4f7f\u7528 kubectl\uff0c\u6216\u901a\u8fc7 kubectl CLI \u548c kubeconfig \u6587\u4ef6\uff0c\u6765\u8bbf\u95ee\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u7684\u8bbf\u95ee\u3002\u5f53\u4f60\u4f7f\u7528 Rancher \u521b\u5efa\u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u81ea\u52a8\u4e3a\u4f60\u7684\u96c6\u7fa4\u521b\u5efa kubeconfig\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u4f7f\u7528 Kubectl \u548c kubeconfig \u8bbf\u95ee\u96c6\u7fa4",description:"\u4e86\u89e3\u5982\u4f55\u901a\u8fc7 kubectl Shell \u4f7f\u7528 kubectl\uff0c\u6216\u901a\u8fc7 kubectl CLI \u548c kubeconfig \u6587\u4ef6\uff0c\u6765\u8bbf\u95ee\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u7684\u8bbf\u95ee\u3002\u5f53\u4f60\u4f7f\u7528 Rancher \u521b\u5efa\u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u81ea\u52a8\u4e3a\u4f60\u7684\u96c6\u7fa4\u521b\u5efa kubeconfig\u3002",weight:2010},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/zh/pages-for-subheaders/access-clusters"},next:{title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"}},s={},k=[{value:"\u5728 Rancher UI \u4e2d\u4f7f\u7528 kubectl shell \u8bbf\u95ee\u96c6\u7fa4",id:"\u5728-rancher-ui-\u4e2d\u4f7f\u7528-kubectl-shell-\u8bbf\u95ee\u96c6\u7fa4",level:3},{value:"\u5728\u5de5\u4f5c\u7ad9\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4",id:"\u5728\u5de5\u4f5c\u7ad9\u4f7f\u7528-kubectl-\u8bbf\u95ee\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528 kubectl \u521b\u5efa\u7684\u8d44\u6e90\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u4f7f\u7528-kubectl-\u521b\u5efa\u7684\u8d44\u6e90\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u76f4\u63a5\u4f7f\u7528\u4e0b\u6e38\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1",id:"\u76f4\u63a5\u4f7f\u7528\u4e0b\u6e38\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u76f4\u63a5\u8fde\u63a5\u5230\u5b9a\u4e49\u4e86 FQDN \u7684\u96c6\u7fa4",id:"\u76f4\u63a5\u8fde\u63a5\u5230\u5b9a\u4e49\u4e86-fqdn-\u7684\u96c6\u7fa4",level:3},{value:"\u76f4\u63a5\u8fde\u63a5\u5230\u672a\u5b9a\u4e49 FQDN \u7684\u96c6\u7fa4",id:"\u76f4\u63a5\u8fde\u63a5\u5230\u672a\u5b9a\u4e49-fqdn-\u7684\u96c6\u7fa4",level:3}],p={toc:k};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Rancher UI \u6216\u5de5\u4f5c\u7ad9\u6765\u4f7f\u7528 kubectl \u64cd\u4f5c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u4f7f\u7528 kubectl \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"Kubernetes \u6587\u6863\uff1akubectl \u6982\u8ff0"),"\u3002"),(0,c.kt)("h3",{id:"\u5728-rancher-ui-\u4e2d\u4f7f\u7528-kubectl-shell-\u8bbf\u95ee\u96c6\u7fa4"},"\u5728 Rancher UI \u4e2d\u4f7f\u7528 kubectl shell \u8bbf\u95ee\u96c6\u7fa4"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u767b\u5f55 Rancher \u5e76\u5728 UI \u4e2d\u6253\u5f00 kubectl shell \u6765\u8bbf\u95ee\u548c\u7ba1\u7406\u4f60\u7684\u96c6\u7fa4\u3002\u4f60\u65e0\u9700\u8fdb\u4e00\u6b65\u914d\u7f6e\u3002"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,c.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u4f7f\u7528 kubectl \u8bbf\u95ee\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"Kubectl Shell")," \u6309\u94ae\u3002\u4f7f\u7528\u6253\u5f00\u7684\u7a97\u53e3\u4e0e\u4f60\u7684 Kubernetes \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002")),(0,c.kt)("h3",{id:"\u5728\u5de5\u4f5c\u7ad9\u4f7f\u7528-kubectl-\u8bbf\u95ee\u96c6\u7fa4"},"\u5728\u5de5\u4f5c\u7ad9\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4"),(0,c.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4e0b\u8f7d\u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\u3001\u4ece\u5de5\u4f5c\u7ad9\u542f\u52a8 kubectl \u4ee5\u53ca\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"\u8fd9\u79cd\u8bbf\u95ee\u96c6\u7fa4\u7684\u66ff\u4ee3\u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u4e0d\u4f7f\u7528 Rancher UI \u7684\u60c5\u51b5\u4e0b\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u5e76\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5e76\u4e14\u5df2\u5c06 kubectl \u5b89\u88c5\u5728\u5de5\u4f5c\u7ad9\u4e0a\u3002\u6709\u5173\u5b89\u88c5 kubectl \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubernetes \u6587\u6863"),"\u3002"))),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 Rancher\u3002\u70b9\u51fb ",(0,c.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u4f7f\u7528 kubectl \u8bbf\u95ee\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,c.kt)("strong",{parentName:"li"},"\u4e0b\u8f7d KubeConfig")," \u6309\u94ae\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5c06 YAML \u6587\u4ef6\u4fdd\u5b58\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u3002\u5c06\u6587\u4ef6\u79fb\u52a8\u5230 ",(0,c.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"\u3002\u6ce8\u610f\uff1akubectl \u7528\u4e8e kubeconfig \u6587\u4ef6\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u662f ",(0,c.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"\u3002\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u8fd0\u884c\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u547d\u4ee4\uff0c\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"li"},"--kubeconfig")," \u6807\u5fd7\u6307\u5b9a\u4efb\u4f55\u5176\u4ed6\u76ee\u5f55\uff1a")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config get pods\n")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u4ece\u5de5\u4f5c\u7ad9\u542f\u52a8 kubectl\u3002\u4f7f\u7528\u5b83\u4e0e Kubernetes \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002")),(0,c.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u521b\u5efa\u7684\u8d44\u6e90\u7684\u6ce8\u610f\u4e8b\u9879"},"\u4f7f\u7528 kubectl \u521b\u5efa\u7684\u8d44\u6e90\u7684\u6ce8\u610f\u4e8b\u9879"),(0,c.kt)("p",null,"Rancher \u4f1a\u53d1\u73b0\u5e76\u663e\u793a\u7531 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u7684\u8d44\u6e90\u3002\u4f46\u662f\u5728\u53d1\u73b0\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u8d44\u6e90\u53ef\u80fd\u6ca1\u6709\u5305\u62ec\u6240\u6709\u5fc5\u987b\u7684\u6ce8\u91ca\u3002\u5982\u679c\u8d44\u6e90\u5df2\u7ecf\u4f7f\u7528 Rancher UI/API \u8fdb\u884c\u64cd\u4f5c\uff08\u4f8b\u5982\uff0c\u6269\u5c55\u5de5\u4f5c\u8d1f\u8f7d\uff09\uff0c\u4f46\u662f\u7531\u4e8e\u7f3a\u5c11\u6ce8\u91ca\uff0c\u8d44\u6e90\u7684\u91cd\u65b0\u521b\u5efa\u53ef\u80fd\u4f1a\u89e6\u53d1\u3002\u53ea\u6709\u5728\u9996\u6b21\u5bf9\u53d1\u73b0\u7684\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u8fd9\u79cd\u60c5\u51b5\u624d\u4f1a\u53d1\u751f\u3002"),(0,c.kt)("h2",{id:"\u76f4\u63a5\u4f7f\u7528\u4e0b\u6e38\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"},"\u76f4\u63a5\u4f7f\u7528\u4e0b\u6e38\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"),(0,c.kt)("p",null,"\u672c\u8282\u65e8\u5728\u5e2e\u52a9\u4f60\u8bbe\u7f6e\u8bbf\u95ee ",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE \u96c6\u7fa4\u7684\u66ff\u4ee3\u65b9\u6cd5"),"\u3002"),(0,c.kt)("p",null,"\u6b64\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u542f\u7528\u4e86",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"),"\u7684 RKE \u96c6\u7fa4\u3002\u5728 Rancher \u521b\u5efa RKE \u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u751f\u6210\u4e00\u4e2a kubeconfig \u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u8bbf\u95ee\u96c6\u7fa4\u7684\u989d\u5916 kubectl \u4e0a\u4e0b\u6587\u3002\u8be5\u4e0a\u4e0b\u6587\u5141\u8bb8\u4f60\u4f7f\u7528 kubectl \u901a\u8fc7\u4e0b\u6e38\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u6709\u5173\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u5982\u4f55\u5de5\u4f5c\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"\u6b64\u9875\u9762"),"\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u7684\u6700\u4f73\u5b9e\u8df5\u662f\u4f7f\u7528\u6b64\u65b9\u6cd5\u6765\u8bbf\u95ee RKE \u96c6\u7fa4\u3002\u8fd9\u6837\uff0c\u4e07\u4e00\u4f60\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee\u8be5\u96c6\u7fa4\u3002"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5e76\u6309\u7167\u6b65\u9aa4",(0,c.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%AB%99%E4%BD%BF%E7%94%A8-kubectl-%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4"},"\u4ece\u5de5\u4f5c\u7ad9\u4f7f\u7528 kubectl \u8fde\u63a5\u5230\u96c6\u7fa4"),"\u3002"))),(0,c.kt)("p",null,"\u8981\u5728\u4e0b\u8f7d\u7684 kubeconfig \u6587\u4ef6\u4e2d\u67e5\u627e\u4e0a\u4e0b\u6587\u7684\u540d\u79f0\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl config get-contexts --kubeconfig /custom/path/kube.config\nCURRENT   NAME                        CLUSTER                     AUTHINFO     NAMESPACE\n*         my-cluster                  my-cluster                  user-46tmn\n          my-cluster-controlplane-1   my-cluster-controlplane-1   user-46tmn\n")),(0,c.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5f53\u4f60\u5c06 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u4e0e\u7b2c\u4e00\u4e2a\u4e0a\u4e0b\u6587 ",(0,c.kt)("inlineCode",{parentName:"p"},"my-cluster")," \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u4f60\u5c06\u901a\u8fc7 Rancher Server \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u4e0a\u4e0b\u6587 ",(0,c.kt)("inlineCode",{parentName:"p"},"my-cluster-controlplane-1"),"\uff0c\u4f60\u5c06\u4f7f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u76f4\u63a5\u4e0e\u4e0b\u6e38 RKE \u96c6\u7fa4\u901a\u4fe1\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5177\u6709\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations#%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9%E6%9E%B6%E6%9E%84"},"\u63a8\u8350\u7684\u67b6\u6784"),"\u3002"),(0,c.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u6709\u4e86\u76f4\u63a5\u4f7f\u7528\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u6240\u9700\u7684\u4e0a\u4e0b\u6587\u540d\u79f0\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c kubectl \u547d\u4ee4\u65f6\u5c06\u4e0a\u4e0b\u6587\u540d\u79f0\u4f5c\u4e3a\u9009\u9879\u4f20\u5165\u3002\u6839\u636e\u4f60\u7684\u96c6\u7fa4\u662f\u5426\u5b9a\u4e49\u4e86 FQDN\uff0c\u8fd9\u4e9b\u547d\u4ee4\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u4ee5\u4e0b\u51e0\u8282\u63d0\u4f9b\u4e86\u793a\u4f8b\u3002"),(0,c.kt)("p",null,"\u5f53 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6b63\u5e38\u5de5\u4f5c\u65f6\uff0c\u5b83\u786e\u8ba4\u4f60\u53ef\u4ee5\u7ed5\u8fc7 Rancher \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,c.kt)("h3",{id:"\u76f4\u63a5\u8fde\u63a5\u5230\u5b9a\u4e49\u4e86-fqdn-\u7684\u96c6\u7fa4"},"\u76f4\u63a5\u8fde\u63a5\u5230\u5b9a\u4e49\u4e86 FQDN \u7684\u96c6\u7fa4"),(0,c.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u5b9a\u4e49\u4e86 FQDN\uff0c\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u5f15\u7528 FQDN \u7684\u4e0a\u4e0b\u6587\u3002\u4e0a\u4e0b\u6587\u5c06\u547d\u540d\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-fqdn"),"\u3002\u5f53\u4f60\u60f3\u5728\u6ca1\u6709 Rancher \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8bbf\u95ee\u8fd9\u4e2a\u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u3002"),(0,c.kt)("p",null,"\u5047\u8bbe kubeconfig \u6587\u4ef6\u4f4d\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-fqdn get nodes\n")),(0,c.kt)("p",null,"\u76f4\u63a5\u5f15\u7528 kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-fqdn get pods\n")),(0,c.kt)("h3",{id:"\u76f4\u63a5\u8fde\u63a5\u5230\u672a\u5b9a\u4e49-fqdn-\u7684\u96c6\u7fa4"},"\u76f4\u63a5\u8fde\u63a5\u5230\u672a\u5b9a\u4e49 FQDN \u7684\u96c6\u7fa4"),(0,c.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u6ca1\u6709\u5b9a\u4e49 FQDN\uff0c\u5219\u4f1a\u521b\u5efa\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u6765\u5f15\u7528 controlplane \u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684 IP \u5730\u5740\u3002\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u5c06\u88ab\u547d\u540d\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-<NODE_NAME>"),"\u3002\u5f53\u4f60\u60f3\u5728\u6ca1\u6709 Rancher \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8bbf\u95ee\u8fd9\u4e2a\u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u3002"),(0,c.kt)("p",null,"\u5047\u8bbe kubeconfig \u6587\u4ef6\u4f4d\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-<NODE_NAME> get nodes\n")),(0,c.kt)("p",null,"\u76f4\u63a5\u5f15\u7528 kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-<NODE_NAME> get pods\n")))}d.isMDXComponent=!0}}]);