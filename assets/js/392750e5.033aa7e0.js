"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95932],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92848:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Tutorial: Example Custom Chart Creation",weight:800,aliases:["/rancher/v2.0-v2.4/en/catalog/tutorial","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/tutorial"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial",title:"Tutorial: Example Custom Chart Creation",description:"In this tutorial, you'll learn how to create a Helm chart and deploy it to a  repository. The repository can then be used as a source for a custom catalog in Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Tutorial: Example Custom Chart Creation",weight:800,aliases:["/rancher/v2.0-v2.4/en/catalog/tutorial","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/tutorial"]},sidebar:"tutorialSidebar",previous:{title:"Launching Catalog Apps",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps"},next:{title:"Global DNS",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"}},c={},p=[],h={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you'll learn how to create a Helm chart and deploy it to a  repository. The repository can then be used as a source for a custom catalog in Rancher."),(0,o.kt)("p",null,"You can fill your custom catalogs with either Helm Charts or Rancher Charts, although we recommend Rancher Charts due to their enhanced user experience."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a complete walkthrough of developing charts, see the upstream Helm chart ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/"},"developer reference"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the GitHub repo that you're using as your custom catalog, create a directory structure that mirrors the structure listed in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps#chart-directory-structure"},"Chart Directory Structure"),"."),(0,o.kt)("p",{parentName:"li"},"Rancher requires this directory structure, although ",(0,o.kt)("inlineCode",{parentName:"p"},"app-readme.md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"questions.yml")," are optional."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"To begin customizing a chart, copy one from either the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/charts"},"Rancher Library")," or the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/charts/tree/master/stable"},"Helm Stable"),"."),(0,o.kt)("li",{parentName:"ul"},"For a complete walk through of developing charts, see the upstream Helm chart ",(0,o.kt)("a",{parentName:"li",href:"https://docs.helm.sh/developing_charts/"},"developer reference"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Recommended:")," Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"app-readme.md")," file."),(0,o.kt)("p",{parentName:"li"},"Use this file to create custom text for your chart's header in the Rancher UI. You can use this text to notify users that the chart is customized for your environment or provide special instruction on how to use it."),(0,o.kt)("br",null),(0,o.kt)("br",null),"**Example**:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cat ./app-readme.md\n\n# Wordpress ROCKS!\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Recommended:")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"questions.yml")," file."),(0,o.kt)("p",{parentName:"li"},"This file creates a form for users to specify deployment parameters when they deploy the custom chart. Without this file, users ",(0,o.kt)("strong",{parentName:"p"},"must")," specify the parameters manually using key value pairs, which isn't user-friendly."),(0,o.kt)("br",null),(0,o.kt)("br",null),"The example below creates a form that prompts users for persistent volume size and a storage class.",(0,o.kt)("br",null),(0,o.kt)("br",null),"For a list of variables you can use when creating a `questions.yml` file, see [Question Variable Reference](/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps#question-variable-reference).",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    categories:\n    - Blog\n    - CMS\n    questions:\n    - variable: persistence.enabled\n      default: "false"\n      description: "Enable persistent volume for WordPress"\n      type: boolean\n      required: true\n      label: WordPress Persistent Volume Enabled\n      show_subquestion_if: true\n      group: "WordPress Settings"\n      subquestions:\n      - variable: persistence.size\n        default: "10Gi"\n        description: "WordPress Persistent Volume Size"\n        type: string\n        label: WordPress Volume Size\n      - variable: persistence.storageClass\n        default: ""\n        description: "If undefined or null, uses the default StorageClass. Default to null"\n        type: storageclass\n        label: Default StorageClass for WordPress\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the customized chart into your GitHub repo."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your custom chart is added to the repo. Your Rancher Server will replicate the chart within a few minutes."))}m.isMDXComponent=!0}}]);