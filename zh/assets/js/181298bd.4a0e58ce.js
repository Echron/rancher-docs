"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57646],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44904:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Configuring Okta (SAML)",weight:1210},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",title:"Configuring Okta (SAML)",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Configuring Okta (SAML)",weight:1210},sidebar:"tutorialSidebar",previous:{title:"Configuring PingIdentity (SAML)",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"},next:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Okta in Rancher",id:"configuring-okta-in-rancher",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,i.kt)("p",null,"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Okta integration only supports Service Provider initiated logins.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In Okta, create a SAML Application with the settings below. See the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta documentation")," for help."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,i.kt)("h2",{id:"configuring-okta-in-rancher"},"Configuring Okta in Rancher"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,i.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Okta"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Okta Account")," form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the display name of users.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the user name/given name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that is unique to every user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,i.kt)("td",{parentName:"tr",align:null},"The attribute name in a group attribute statement that exposes your groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"A key/certificate pair used for Assertion Encryption.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," file that you find in the application ",(0,i.kt)("inlineCode",{parentName:"td"},"Sign On")," section.")))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt\n"))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure Okta Account")," form, click ",(0,i.kt)("strong",{parentName:"p"},"Authenticate with Okta"),", which is at the bottom of the page."),(0,i.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML Provider Caveats:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,i.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,i.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,i.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")))))}m.isMDXComponent=!0}}]);