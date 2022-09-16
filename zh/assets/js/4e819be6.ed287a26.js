"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40323],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55393:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],o={title:"\u6700\u5c0f EKS \u6743\u9650",weight:1},c=void 0,l={unversionedId:"reference-guides/amazon-eks-permissions/minimum-eks-permissions",id:"reference-guides/amazon-eks-permissions/minimum-eks-permissions",title:"\u6700\u5c0f EKS \u6743\u9650",description:"\u6b64\u5904\u63d0\u4f9b\u5728 Rancher \u4e2d\u4f7f\u7528 EKS \u9a71\u52a8\u6240\u6709\u529f\u80fd\u6240\u9700\u7684\u6700\u5c0f\u6743\u9650\u3002Rancher \u9700\u8981\u989d\u5916\u7684\u6743\u9650\u6765\u914d\u7f6e\u670d\u52a1\u89d2\u8272\u548c VPC \u8d44\u6e90\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u521b\u5efa\u96c6\u7fa4\u4e4b\u524d\u521b\u5efa\u8fd9\u4e9b\u8d44\u6e90\uff0c\u4ee5\u4fbf\u5728\u5b9a\u4e49\u96c6\u7fa4\u914d\u7f6e\u65f6\u9009\u62e9\u8fd9\u4e9b\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/amazon-eks-permissions/minimum-eks-permissions.md",sourceDirName:"reference-guides/amazon-eks-permissions",slug:"/reference-guides/amazon-eks-permissions/minimum-eks-permissions",permalink:"/zh/reference-guides/amazon-eks-permissions/minimum-eks-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/amazon-eks-permissions/minimum-eks-permissions.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u6700\u5c0f EKS \u6743\u9650",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa EKS \u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/amazon-eks-permissions"},next:{title:"Rancher \u5907\u4efd\u914d\u7f6e\u53c2\u8003",permalink:"/zh/pages-for-subheaders/backup-restore-configuration"}},u={},m=[{value:"\u670d\u52a1\u89d2\u8272\u6743\u9650",id:"\u670d\u52a1\u89d2\u8272\u6743\u9650",level:3},{value:"VPC \u6743\u9650",id:"vpc-\u6743\u9650",level:3}],p={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6b64\u5904\u63d0\u4f9b\u5728 Rancher \u4e2d\u4f7f\u7528 EKS \u9a71\u52a8\u6240\u6709\u529f\u80fd\u6240\u9700\u7684\u6700\u5c0f\u6743\u9650\u3002Rancher \u9700\u8981\u989d\u5916\u7684\u6743\u9650\u6765\u914d\u7f6e",(0,s.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u89d2\u8272"),"\u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"VPC")," \u8d44\u6e90\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u521b\u5efa\u96c6\u7fa4",(0,s.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u521b\u5efa\u8fd9\u4e9b\u8d44\u6e90\uff0c\u4ee5\u4fbf\u5728\u5b9a\u4e49\u96c6\u7fa4\u914d\u7f6e\u65f6\u9009\u62e9\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90"),(0,s.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u89d2\u8272"),(0,s.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u89d2\u8272\u5411 Kubernetes \u63d0\u4f9b\u7ba1\u7406\u8d44\u6e90\u6240\u9700\u7684\u6743\u9650\u3002Rancher \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b",(0,s.kt)("a",{parentName:"td",href:"#%E6%9C%8D%E5%8A%A1%E8%A7%92%E8%89%B2%E6%9D%83%E9%99%90"},"\u670d\u52a1\u89d2\u8272\u6743\u9650"),"\u6765\u521b\u5efa\u670d\u52a1\u89d2\u8272\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"VPC"),(0,s.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b EKS \u548c Worker \u8282\u70b9\u4f7f\u7528\u7684\u9694\u79bb\u7f51\u7edc\u8d44\u6e90\u3002Rancher \u4f7f\u7528\u4ee5\u4e0b ",(0,s.kt)("a",{parentName:"td",href:"#vpc-%E6%9D%83%E9%99%90"},"VPC \u6743\u9650"),"\u521b\u5efa VPC \u8d44\u6e90\u3002")))),(0,s.kt)("p",null,"\u8d44\u6e90\u5b9a\u4f4d\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," \u4f5c\u4e3a\u5728 Rancher \u4e2d\u521b\u5efa EKS \u96c6\u7fa4\u4e4b\u524d\uff0c\u65e0\u6cd5\u5df2\u77e5\u521b\u5efa\u7684\u8d44\u6e90\u7684\u540d\u79f0\uff08ARN\uff09\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "EC2Permisssions",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances",\n                "ec2:RevokeSecurityGroupIngress",\n                "ec2:RevokeSecurityGroupEgress",\n                "ec2:DescribeInstanceTypes",\n                "ec2:DescribeRegions",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeTags",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeLaunchTemplateVersions",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeImages",\n                "ec2:DescribeAvailabilityZones",\n                "ec2:DescribeAccountAttributes",\n                "ec2:DeleteTags",\n                "ec2:DeleteSecurityGroup",\n                "ec2:DeleteKeyPair",\n                "ec2:CreateTags",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateLaunchTemplateVersion",\n                "ec2:CreateLaunchTemplate",\n                "ec2:CreateKeyPair",\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:AuthorizeSecurityGroupEgress"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "CloudFormationPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:ListStacks",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackResources",\n                "cloudformation:DescribeStackResource",\n                "cloudformation:DeleteStack",\n                "cloudformation:CreateStackSet",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "IAMPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "iam:ListRoles",\n                "iam:ListRoleTags",\n                "iam:ListInstanceProfilesForRole",\n                "iam:ListInstanceProfiles",\n                "iam:ListAttachedRolePolicies",\n                "iam:GetRole",\n                "iam:GetInstanceProfile",\n                "iam:DetachRolePolicy",\n                "iam:DeleteRole",\n                "iam:CreateRole",\n                "iam:AttachRolePolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "KMSPermisssions",\n            "Effect": "Allow",\n            "Action": "kms:ListKeys",\n            "Resource": "*"\n        },\n        {\n            "Sid": "EKSPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "eks:UpdateNodegroupVersion",\n                "eks:UpdateNodegroupConfig",\n                "eks:UpdateClusterVersion",\n                "eks:UpdateClusterConfig",\n                "eks:UntagResource",\n                "eks:TagResource",\n                "eks:ListUpdates",\n                "eks:ListTagsForResource",\n                "eks:ListNodegroups",\n                "eks:ListFargateProfiles",\n                "eks:ListClusters",\n                "eks:DescribeUpdate",\n                "eks:DescribeNodegroup",\n                "eks:DescribeFargateProfile",\n                "eks:DescribeCluster",\n                "eks:DeleteNodegroup",\n                "eks:DeleteFargateProfile",\n                "eks:DeleteCluster",\n                "eks:CreateNodegroup",\n                "eks:CreateFargateProfile",\n                "eks:CreateCluster"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,s.kt)("h3",{id:"\u670d\u52a1\u89d2\u8272\u6743\u9650"},"\u670d\u52a1\u89d2\u8272\u6743\u9650"),(0,s.kt)("p",null,"\u6307\u7684\u662f Rancher \u5728 EKS \u96c6\u7fa4\u521b\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4ee3\u8868\u7528\u6237\u521b\u5efa\u670d\u52a1\u89d2\u8272\u6240\u9700\u7684\u6743\u9650\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "IAMPermisssions",\n      "Effect": "Allow",\n      "Action": [\n        "iam:AddRoleToInstanceProfile",\n        "iam:AttachRolePolicy",\n        "iam:CreateInstanceProfile",\n        "iam:CreateRole",\n        "iam:CreateServiceLinkedRole",\n        "iam:DeleteInstanceProfile",\n        "iam:DeleteRole",\n        "iam:DetachRolePolicy",\n        "iam:GetInstanceProfile",\n        "iam:GetRole",\n        "iam:ListAttachedRolePolicies",\n        "iam:ListInstanceProfiles",\n        "iam:ListInstanceProfilesForRole",\n        "iam:ListRoles",\n        "iam:ListRoleTags",\n        "iam:PassRole",\n        "iam:RemoveRoleFromInstanceProfile"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\u521b\u5efa EKS \u96c6\u7fa4\u65f6\uff0cRancher \u5c06\u521b\u5efa\u5177\u6709\u4ee5\u4e0b\u4fe1\u4efb\u7b56\u7565\u7684\u670d\u52a1\u89d2\u8272\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "sts:AssumeRole",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Effect": "Allow",\n      "Sid": ""\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\u6b64\u89d2\u8272\u8fd8\u5c06\u5177\u6709\u4e24\u4e2a\u89d2\u8272\u7b56\u7565\uff0c\u5176\u4e2d\u5305\u542b\u4ee5\u4e0b\u7b56\u7565 ARN\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy\narn:aws:iam::aws:policy/AmazonEKSServicePolicy\n")),(0,s.kt)("h3",{id:"vpc-\u6743\u9650"},"VPC \u6743\u9650"),(0,s.kt)("p",null,"Rancher \u521b\u5efa VPC \u548c\u5173\u8054\u8d44\u6e90\u6240\u9700\u7684\u6743\u9650\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VPCPermissions",\n      "Effect": "Allow",\n      "Action": [\n        "ec2:ReplaceRoute",\n        "ec2:ModifyVpcAttribute",\n        "ec2:ModifySubnetAttribute",\n        "ec2:DisassociateRouteTable",\n        "ec2:DetachInternetGateway",\n        "ec2:DescribeVpcs",\n        "ec2:DeleteVpc",\n        "ec2:DeleteTags",\n        "ec2:DeleteSubnet",\n        "ec2:DeleteRouteTable",\n        "ec2:DeleteRoute",\n        "ec2:DeleteInternetGateway",\n        "ec2:CreateVpc",\n        "ec2:CreateSubnet",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateRouteTable",\n        "ec2:CreateRoute",\n        "ec2:CreateInternetGateway",\n        "ec2:AttachInternetGateway",\n        "ec2:AssociateRouteTable"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);