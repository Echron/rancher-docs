"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46992],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11616:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",weight:1},c=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",title:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",description:"\u4f7f\u7528 Amazon \u4e91\u63d0\u4f9b\u5546\u65f6\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u4ee5\u4e0b\u529f\u80fd\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5176\u4ed6\u4e91\u63d0\u4f9b\u5546",permalink:"/zh/pages-for-subheaders/other-cloud-providers"},next:{title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure"}},u={},p=[{value:"1. \u521b\u5efa IAM \u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b",id:"1-\u521b\u5efa-iam-\u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b",level:3},{value:"2. \u521b\u5efa ClusterID",id:"2-\u521b\u5efa-clusterid",level:3},{value:"\u4f7f\u7528 Amazon Elastic Container Registry (ECR)",id:"\u4f7f\u7528-amazon-elastic-container-registry-ecr",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon")," \u4e91\u63d0\u4f9b\u5546\u65f6\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u5728 ",(0,i.kt)("strong",{parentName:"li"},"Port Mapping")," \u4e2d\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer-4 Load Balancer")," \u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"type: LoadBalancer")," \u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"Service")," \u65f6\uff0c\u542f\u52a8 AWS \u5f39\u6027\u8d1f\u8f7d\u5747\u8861\u5668 (ELB)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\uff1a\u5141\u8bb8\u4f60\u5c06 AWS \u5f39\u6027\u5757\u5b58\u50a8 (EBS) \u7528\u4e8e\u6301\u4e45\u5377\u3002")),(0,i.kt)("p",null,"\u6709\u5173 Amazon \u4e91\u63d0\u4f9b\u5546\u7684\u6240\u6709\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/cloud-provider-aws/"},"cloud-provider-aws \u81ea\u8ff0\u6587\u4ef6"),"\u3002"),(0,i.kt)("p",null,"\u8981\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA-iam-%E8%A7%92%E8%89%B2%E5%B9%B6%E9%99%84%E5%8A%A0%E5%88%B0%E5%AE%9E%E4%BE%8B"},"\u521b\u5efa\u4e00\u4e2a IAM \u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-%E5%88%9B%E5%BB%BA-clusterid"},"\u914d\u7f6e ClusterID"))),(0,i.kt)("h3",{id:"1-\u521b\u5efa-iam-\u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b"},"1. \u521b\u5efa IAM \u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u6dfb\u52a0\u5230\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u90fd\u5fc5\u987b\u80fd\u591f\u4e0e EC2 \u4ea4\u4e92\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u521b\u5efa\u548c\u5220\u9664\u8d44\u6e90\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9644\u52a0\u5230\u5b9e\u4f8b\u7684 IAM \u89d2\u8272\u6765\u542f\u7528\u4ea4\u4e92\u3002\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#create-iam-role"},"Amazon \u6587\u6863\uff1a\u521b\u5efa IAM \u89d2\u8272")," \u6765\u521b\u5efa IAM \u89d2\u8272\u3002\u6709\u4e24\u4e2a\u793a\u4f8b\u7b56\u7565\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u7b56\u7565\u9002\u7528\u4e8e\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u3002\u8fd9\u4e9b\u8282\u70b9\u5fc5\u987b\u80fd\u591f\u521b\u5efa/\u5220\u9664 EC2 \u8d44\u6e90\u3002\u4ee5\u4e0b IAM \u7b56\u7565\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u5b9e\u9645\u7528\u4f8b\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u7b56\u7565\u9002\u7528\u4e8e\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u3002\u8fd9\u4e9b\u8282\u70b9\u53ea\u9700\u80fd\u591f\u4ece EC2 \u68c0\u7d22\u4fe1\u606f\u3002")),(0,i.kt)("p",null,"\u5728\u521b\u5efa ",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},"Amazon EC2 \u96c6\u7fa4"),"\u65f6\uff0c\u4f60\u5fc5\u987b\u5728\u521b\u5efa",(0,i.kt)("strong",{parentName:"p"},"\u8282\u70b9\u6a21\u677f"),"\u65f6\u586b\u5199\u521b\u5efa\u7684 IAM \u89d2\u8272\u7684 ",(0,i.kt)("strong",{parentName:"p"},"IAM Instance Profile Name"),"\uff08\u4e0d\u662f ARN\uff09\u3002"),(0,i.kt)("p",null,"\u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-existing-nodes"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4"),"\u65f6\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 IAM \u89d2\u8272\u9644\u52a0\u5230\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u7684 IAM \u7b56\u7565\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"Version": "2012-10-17",\n"Statement": [\n  {\n    "Effect": "Allow",\n    "Action": [\n      "autoscaling:DescribeAutoScalingGroups",\n      "autoscaling:DescribeLaunchConfigurations",\n      "autoscaling:DescribeTags",\n      "ec2:DescribeInstances",\n      "ec2:DescribeRegions",\n      "ec2:DescribeRouteTables",\n      "ec2:DescribeSecurityGroups",\n      "ec2:DescribeSubnets",\n      "ec2:DescribeVolumes",\n      "ec2:CreateSecurityGroup",\n      "ec2:CreateTags",\n      "ec2:CreateVolume",\n      "ec2:ModifyInstanceAttribute",\n      "ec2:ModifyVolume",\n      "ec2:AttachVolume",\n      "ec2:AuthorizeSecurityGroupIngress",\n      "ec2:CreateRoute",\n      "ec2:DeleteRoute",\n      "ec2:DeleteSecurityGroup",\n      "ec2:DeleteVolume",\n      "ec2:DetachVolume",\n      "ec2:RevokeSecurityGroupIngress",\n      "ec2:DescribeVpcs",\n      "elasticloadbalancing:AddTags",\n      "elasticloadbalancing:AttachLoadBalancerToSubnets",\n      "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",\n      "elasticloadbalancing:CreateLoadBalancer",\n      "elasticloadbalancing:CreateLoadBalancerPolicy",\n      "elasticloadbalancing:CreateLoadBalancerListeners",\n      "elasticloadbalancing:ConfigureHealthCheck",\n      "elasticloadbalancing:DeleteLoadBalancer",\n      "elasticloadbalancing:DeleteLoadBalancerListeners",\n      "elasticloadbalancing:DescribeLoadBalancers",\n      "elasticloadbalancing:DescribeLoadBalancerAttributes",\n      "elasticloadbalancing:DetachLoadBalancerFromSubnets",\n      "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",\n      "elasticloadbalancing:ModifyLoadBalancerAttributes",\n      "elasticloadbalancing:RegisterInstancesWithLoadBalancer",\n      "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",\n      "elasticloadbalancing:AddTags",\n      "elasticloadbalancing:CreateListener",\n      "elasticloadbalancing:CreateTargetGroup",\n      "elasticloadbalancing:DeleteListener",\n      "elasticloadbalancing:DeleteTargetGroup",\n      "elasticloadbalancing:DescribeListeners",\n      "elasticloadbalancing:DescribeLoadBalancerPolicies",\n      "elasticloadbalancing:DescribeTargetGroups",\n      "elasticloadbalancing:DescribeTargetHealth",\n      "elasticloadbalancing:ModifyListener",\n      "elasticloadbalancing:ModifyTargetGroup",\n      "elasticloadbalancing:RegisterTargets",\n      "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",\n      "iam:CreateServiceLinkedRole",\n      "kms:DescribeKey"\n    ],\n    "Resource": [\n      "*"\n    ]\n  }\n]\n}\n')),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u7684 IAM \u7b56\u7565\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"Version": "2012-10-17",\n"Statement": [\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ec2:DescribeInstances",\n            "ec2:DescribeRegions",\n            "ecr:GetAuthorizationToken",\n            "ecr:BatchCheckLayerAvailability",\n            "ecr:GetDownloadUrlForLayer",\n            "ecr:GetRepositoryPolicy",\n            "ecr:DescribeRepositories",\n            "ecr:ListImages",\n            "ecr:BatchGetImage"\n        ],\n        "Resource": "*"\n    }\n]\n}\n')),(0,i.kt)("h3",{id:"2-\u521b\u5efa-clusterid"},"2. \u521b\u5efa ClusterID"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8d44\u6e90\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterID")," \u8fdb\u884c\u6807\u8bb0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nodes"),"\uff1aRancher \u4e2d\u6dfb\u52a0\u7684\u6240\u6709\u4e3b\u673a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subnet"),"\uff1a\u96c6\u7fa4\u4f7f\u7528\u7684\u5b50\u7f51\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security Group"),"\uff1a\u7528\u4e8e\u4f60\u7684\u96c6\u7fa4\u7684\u5b89\u5168\u7ec4\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0d\u8981\u6807\u8bb0\u591a\u4e2a\u5b89\u5168\u7ec4\u3002\u521b\u5efa\u5f39\u6027\u8d1f\u8f7d\u5747\u8861\u5668 (ELB) \u65f6\uff0c\u6807\u8bb0\u591a\u4e2a\u7ec4\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"))),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},"Amazon EC2 \u96c6\u7fa4"),"\u65f6\uff0c\u4f1a\u81ea\u52a8\u4e3a\u521b\u5efa\u7684\u8282\u70b9\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterID"),"\u3002\u5176\u4ed6\u8d44\u6e90\u4ecd\u7136\u9700\u8981\u624b\u52a8\u6807\u8bb0\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u6807\u7b7e\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/cluster/CLUSTERID")," ",(0,i.kt)("strong",{parentName:"p"},"Value")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"owned")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CLUSTERID")," \u53ef\u4ee5\u662f\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u53ea\u8981\u5b83\u5728\u6240\u6709\u6807\u7b7e\u96c6\u4e2d\u76f8\u540c\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u5c06\u6807\u7b7e\u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"owned")," \u4f1a\u901a\u77e5\u96c6\u7fa4\u5e26\u6709\u8be5\u6807\u7b7e\u7684\u6240\u6709\u8d44\u6e90\u90fd\u7531\u8be5\u96c6\u7fa4\u62e5\u6709\u548c\u7ba1\u7406\u3002\u5982\u679c\u4f60\u5728\u96c6\u7fa4\u4e4b\u95f4\u5171\u4eab\u8d44\u6e90\uff0c\u4f60\u53ef\u4ee5\u5c06\u6807\u7b7e\u66f4\u6539\u4e3a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/cluster/CLUSTERID")," ",(0,i.kt)("strong",{parentName:"p"},"Value")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"shared"),"."),(0,i.kt)("h3",{id:"\u4f7f\u7528-amazon-elastic-container-registry-ecr"},"\u4f7f\u7528 Amazon Elastic Container Registry (ECR)"),(0,i.kt)("p",null,"\u5728\u5c06",(0,i.kt)("a",{parentName:"p",href:"#1-%E5%88%9B%E5%BB%BA-iam-%E8%A7%92%E8%89%B2%E5%B9%B6%E9%99%84%E5%8A%A0%E5%88%B0%E5%AE%9E%E4%BE%8B"},"\u521b\u5efa IAM \u89d2\u8272\u5e76\u9644\u52a0\u5230\u5b9e\u4f8b"),"\u4e2d\u7684 IAM \u914d\u7f6e\u6587\u4ef6\u9644\u52a0\u5230\u5b9e\u4f8b\u65f6\uff0ckubelet \u7ec4\u4ef6\u80fd\u591f\u81ea\u52a8\u83b7\u53d6 ECR \u51ed\u8bc1\u3002\u4f7f\u7528\u4f4e\u4e8e v1.15.0 \u7684 Kubernetes \u7248\u672c\u65f6\uff0c\u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546\u3002\u4ece Kubernetes \u7248\u672c v1.15.0 \u5f00\u59cb\uff0ckubelet \u65e0\u9700\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546\u5373\u53ef\u83b7\u53d6 ECR \u51ed\u8bc1\u3002"))}m.isMDXComponent=!0}}]);