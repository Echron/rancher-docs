"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95787],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(p,s(s({ref:t},h),{},{components:r})):a.createElement(p,s({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],c={title:"Rancher CVEs and Resolutions",weight:300},o=void 0,l={unversionedId:"reference-guides/rancher-security/security-advisories-and-cves",id:"version-2.0-2.4/reference-guides/rancher-security/security-advisories-and-cves",title:"Rancher CVEs and Resolutions",description:"Rancher is committed to informing the community of security issues in our products. Rancher will publish CVEs (Common Vulnerabilities and Exposures) for issues we have resolved.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-security/security-advisories-and-cves.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/security-advisories-and-cves",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-security/security-advisories-and-cves",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rancher-security/security-advisories-and-cves.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Rancher CVEs and Resolutions",weight:300},sidebar:"tutorialSidebar",previous:{title:"Hardening Guide v2.4",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/hardening-guide-with-cis-v1.5-benchmark"},next:{title:"Migration Tools CLI Reference",permalink:"/zh/v2.0-v2.4/reference-guides/v1.6-migration/migration-tools-cli-reference"}},h={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher is committed to informing the community of security issues in our products. Rancher will publish CVEs (Common Vulnerabilities and Exposures) for issues we have resolved."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Resolution"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-31999"},"CVE-2021-31999")),(0,i.kt)("td",{parentName:"tr",align:null},'A vulnerability was discovered where a malicious Rancher user could craft an API request directed at the proxy for the Kubernetes API of a managed cluster to gain access to information they do not have access to. This is done by passing the "Impersonate-User" or "Impersonate-Group" header in the Connection header, which is then removed by the proxy. At this point, instead of impersonating the user and their permissions, the request will act as if it was from the Rancher management server, i.e. local server, and return the requested information. You are vulnerable if you are running any Rancher 2.x version. Only valid Rancher users who have some level of permission on the cluster can perform the request. There is no direct mitigation besides upgrading to the patched versions. You can limit wider exposure by ensuring all Rancher users are trusted.'),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25318"},"CVE-2021-25318")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher where users were granted access to resources regardless of the resource's API group. For example Rancher should have allowed users access to ",(0,i.kt)("inlineCode",{parentName:"td"},"apps.catalog.cattle.io"),", but instead incorrectly gave access to ",(0,i.kt)("inlineCode",{parentName:"td"},"apps.*"),".  You are vulnerable if you are running any Rancher 2.x version. The extent of the exploit increases if there are other matching CRD resources installed in the cluster. There is no direct mitigation besides upgrading to the patched versions."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25320"},"CVE-2021-25320")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher where cloud credentials weren't being properly validated through the Rancher API. Specifically through a proxy designed to communicate with cloud providers. Any Rancher user that was logged-in and aware of a cloud credential ID that was valid for a given cloud provider could make requests against that cloud provider's API through the proxy API, and the cloud credential would be attached. You are vulnerable if you are running any Rancher 2.2.0 or above and use cloud credentials. The exploit is limited to valid Rancher users. There is no direct mitigation besides upgrading to the patched versions. You can limit wider exposure by ensuring all Rancher users are trusted."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321"},"CVE-2018-20321")),(0,i.kt)("td",{parentName:"tr",align:null},"Any project member with access to the ",(0,i.kt)("inlineCode",{parentName:"td"},"default")," namespace can mount the ",(0,i.kt)("inlineCode",{parentName:"td"},"netes-default")," service account in a pod and then use that pod to execute administrative privileged commands against the Kubernetes cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"29 Jan 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.6"},"Rancher v2.1.6")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.11"},"Rancher v2.0.11")," - Rolling back from these versions or greater have specific ",(0,i.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"instructions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6287"},"CVE-2019-6287")),(0,i.kt)("td",{parentName:"tr",align:null},"Project members continue to get access to namespaces from projects that they were removed from if they were added to more than one project."),(0,i.kt)("td",{parentName:"tr",align:null},"29 Jan 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.6"},"Rancher v2.1.6")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.11"},"Rancher v2.0.11"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-11202"},"CVE-2019-11202")),(0,i.kt)("td",{parentName:"tr",align:null},"The default admin, that is shipped with Rancher, will be re-created upon restart of Rancher despite being explicitly deleted."),(0,i.kt)("td",{parentName:"tr",align:null},"16 Apr 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.2"},"Rancher v2.2.2"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.9"},"Rancher v2.1.9")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.14"},"Rancher v2.0.14"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12274"},"CVE-2019-12274")),(0,i.kt)("td",{parentName:"tr",align:null},"Nodes using the built-in node drivers using a file path option allows the machine to read arbitrary files including sensitive ones from inside the Rancher server container."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Jun 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.4"},"Rancher v2.2.4"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.10"},"Rancher v2.1.10")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.15"},"Rancher v2.0.15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12303"},"CVE-2019-12303")),(0,i.kt)("td",{parentName:"tr",align:null},"Project owners can inject extra fluentd logging configurations that makes it possible to read files or execute arbitrary commands inside the fluentd container. Reported by Tyler Welton from Untamed Theory."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Jun 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.4"},"Rancher v2.2.4"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.10"},"Rancher v2.1.10")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.15"},"Rancher v2.0.15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13209"},"CVE-2019-13209")),(0,i.kt)("td",{parentName:"tr",align:null},"The vulnerability is known as a ",(0,i.kt)("a",{parentName:"td",href:"https://www.christian-schneider.net/CrossSiteWebSocketHijacking.html"},"Cross-Site Websocket Hijacking attack"),". This attack allows an exploiter to gain access to clusters managed by Rancher with the roles/permissions of a victim. It requires that a victim to be logged into a Rancher server and then access a third-party site hosted by the exploiter. Once that is accomplished, the exploiter is able to execute commands against the Kubernetes API with the permissions and identity of the victim. Reported by Matt Belisle and Alex Stevenson from Workiva."),(0,i.kt)("td",{parentName:"tr",align:null},"15 Jul 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.5"},"Rancher v2.2.5"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.11"},"Rancher v2.1.11")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.16"},"Rancher v2.0.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14436"},"CVE-2019-14436")),(0,i.kt)("td",{parentName:"tr",align:null},"The vulnerability allows a member of a project that has access to edit role bindings to be able to assign themselves or others a cluster level role granting them administrator access to that cluster. The issue was found and reported by Michal Lipinski at Nokia."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Aug 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.7"},"Rancher v2.2.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.12"},"Rancher v2.1.12"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14435"},"CVE-2019-14435")),(0,i.kt)("td",{parentName:"tr",align:null},"This vulnerability allows authenticated users to potentially extract otherwise private data out of IPs reachable from system service containers used by Rancher. This can include but not only limited to services such as cloud provider metadata services. Although Rancher allow users to configure whitelisted domains for system service access, this flaw can still be exploited by a carefully crafted HTTP request. The issue was found and reported by Matt Belisle and Alex Stevenson at Workiva."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Aug 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.7"},"Rancher v2.2.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.12"},"Rancher v2.1.12"))))))}m.isMDXComponent=!0}}]);