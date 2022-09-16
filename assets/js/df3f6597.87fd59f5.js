"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3181],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,k=h["".concat(l,".").concat(p)]||h[p]||u[p]||s;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Troubleshooting the Rancher Server Kubernetes Cluster",weight:276},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",title:"Troubleshooting the Rancher Server Kubernetes Cluster",description:"This section describes how to troubleshoot an installation of Rancher on a Kubernetes cluster.",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1663345519,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",weight:276},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher on a Google Kubernetes Engine Cluster",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},next:{title:"Other Installation Methods",permalink:"/pages-for-subheaders/other-installation-methods"}},d={},u=[{value:"Relevant Namespaces",id:"relevant-namespaces",level:3},{value:"&quot;default backend - 404&quot;",id:"default-backend---404",level:3},{value:"Check if Rancher is Running",id:"check-if-rancher-is-running",level:3},{value:"Check the Rancher Logs",id:"check-the-rancher-logs",level:3},{value:"Cert CN is &quot;Kubernetes Ingress Controller Fake Certificate&quot;",id:"cert-cn-is-kubernetes-ingress-controller-fake-certificate",level:3},{value:"Checking for issues with cert-manager issued certs (Rancher Generated or LetsEncrypt)",id:"checking-for-issues-with-cert-manager-issued-certs-rancher-generated-or-letsencrypt",level:3},{value:"Checking for Issues with Your Own SSL Certs",id:"checking-for-issues-with-your-own-ssl-certs",level:3},{value:"No matches for kind &quot;Issuer&quot;",id:"no-matches-for-kind-issuer",level:3},{value:"Canal Pods show READY 2/3",id:"canal-pods-show-ready-23",level:3},{value:"nginx-ingress-controller Pods show RESTARTS",id:"nginx-ingress-controller-pods-show-restarts",level:3},{value:"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)",id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: no key found",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: ssh: handshake failed: ssh: unable to authenticate, attempted methods none publickey, no supported methods remain",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: cannot decode encrypted private keys",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys",level:3},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:3}],h={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how to troubleshoot an installation of Rancher on a Kubernetes cluster."),(0,s.kt)("h3",{id:"relevant-namespaces"},"Relevant Namespaces"),(0,s.kt)("p",null,"Most of the troubleshooting will be done on objects in these 3 namespaces."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"rancher")," deployment and pods."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ingress-nginx")," - Ingress controller pods and services."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," pods.")),(0,s.kt)("h3",{id:"default-backend---404"},'"default backend - 404"'),(0,s.kt)("p",null,"A number of things can cause the ingress-controller not to forward traffic to your rancher instance. Most of the time its due to a bad ssl configuration."),(0,s.kt)("p",null,"Things to check"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#check-if-rancher-is-running"},"Is Rancher Running")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#cert-cn-is-kubernetes-ingress-controller-fake-certificate"},'Cert CN is "Kubernetes Ingress Controller Fake Certificate"'))),(0,s.kt)("h3",{id:"check-if-rancher-is-running"},"Check if Rancher is Running"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to check the ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-system")," system namespace and see if the Rancher pods are in a Running state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,s.kt)("p",null,"If the state is not ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", run a ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," on the pod and check the Events."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe pod\n\n...\nEvents:\n  Type     Reason                 Age   From                Message\n  ----     ------                 ----  ----                -------\n  Normal   Scheduled              11m   default-scheduler   Successfully assigned rancher-784d94f59b-vgqzh to localhost\n  Normal   SuccessfulMountVolume  11m   kubelet, localhost  MountVolume.SetUp succeeded for volume "rancher-token-dj4mt"\n  Normal   Pulling                11m   kubelet, localhost  pulling image "rancher/rancher:v2.0.4"\n  Normal   Pulled                 11m   kubelet, localhost  Successfully pulled image "rancher/rancher:v2.0.4"\n  Normal   Created                11m   kubelet, localhost  Created container\n  Normal   Started                11m   kubelet, localhost  Started container\n')),(0,s.kt)("h3",{id:"check-the-rancher-logs"},"Check the Rancher Logs"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to list the pods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and the pod name to list the logs from the pod."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -f rancher-784d94f59b-vgqzh\n")),(0,s.kt)("h3",{id:"cert-cn-is-kubernetes-ingress-controller-fake-certificate"},'Cert CN is "Kubernetes Ingress Controller Fake Certificate"'),(0,s.kt)("p",null,'Use your browser to check the certificate details. If it says the Common Name is "Kubernetes Ingress Controller Fake Certificate", something may have gone wrong with reading or issuing your SSL cert.'),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are using LetsEncrypt to issue certs, it can sometimes take a few minutes to issue the cert."))),(0,s.kt)("h3",{id:"checking-for-issues-with-cert-manager-issued-certs-rancher-generated-or-letsencrypt"},"Checking for issues with cert-manager issued certs (Rancher Generated or LetsEncrypt)"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," has 3 parts."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," pod in the ",(0,s.kt)("inlineCode",{parentName:"li"},"cert-manager")," namespace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Issuer")," object in the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Certificate")," object in the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace.")),(0,s.kt)("p",null,"Work backwards and do a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl describe")," on each object and check the events. You can track down what might be missing."),(0,s.kt)("p",null,"For example there is a problem with the Issuer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe certificate\n...\nEvents:\n  Type     Reason          Age                 From          Message\n  ----     ------          ----                ----          -------\n  Warning  IssuerNotReady  18s (x23 over 19m)  cert-manager  Issuer rancher not ready\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe issuer\n...\nEvents:\n  Type     Reason         Age                 From          Message\n  ----     ------         ----                ----          -------\n  Warning  ErrInitIssuer  19m (x12 over 19m)  cert-manager  Error initializing issuer: secret "tls-rancher" not found\n  Warning  ErrGetKeyPair  9m (x16 over 19m)   cert-manager  Error getting keypair for CA issuer: secret "tls-rancher" not found\n')),(0,s.kt)("h3",{id:"checking-for-issues-with-your-own-ssl-certs"},"Checking for Issues with Your Own SSL Certs"),(0,s.kt)("p",null,"Your certs get applied directly to the Ingress object in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,s.kt)("p",null,"Check the status of the Ingress object and see if its ready."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe ingress\n")),(0,s.kt)("p",null,"If its ready and the SSL is still not working you may have a malformed cert or secret."),(0,s.kt)("p",null,"Check the nginx-ingress-controller logs. Because the nginx-ingress-controller has multiple containers in its pod you will need to specify the name of the container."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -f nginx-ingress-controller-rfjrq nginx-ingress-controller\n...\nW0705 23:04:58.240571       7 backend_ssl.go:49] error obtaining PEM from secret cattle-system/tls-rancher-ingress: error retrieving secret cattle-system/tls-rancher-ingress: secret cattle-system/tls-rancher-ingress was not found\n")),(0,s.kt)("h3",{id:"no-matches-for-kind-issuer"},'No matches for kind "Issuer"'),(0,s.kt)("p",null,"The SSL configuration option you have chosen requires cert-manager to be installed before installing Rancher or else the following error is shown:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Error: validation failed: unable to recognize "": no matches for kind "Issuer" in version "certmanager.k8s.io/v1alpha1"\n')),(0,s.kt)("p",null,"Install cert-manager and try installing Rancher again."),(0,s.kt)("h3",{id:"canal-pods-show-ready-23"},"Canal Pods show READY 2/3"),(0,s.kt)("p",null,"The most common cause of this issue is port 8472/UDP is not open between the nodes. Check your local firewall, network routing or security groups."),(0,s.kt)("p",null,"Once the network issue is resolved, the ",(0,s.kt)("inlineCode",{parentName:"p"},"canal")," pods should timeout and restart to establish their connections."),(0,s.kt)("h3",{id:"nginx-ingress-controller-pods-show-restarts"},"nginx-ingress-controller Pods show RESTARTS"),(0,s.kt)("p",null,"The most common cause of this issue is the ",(0,s.kt)("inlineCode",{parentName:"p"},"canal")," pods have failed to establish the overlay network. See ",(0,s.kt)("a",{parentName:"p",href:"#canal-pods-show-ready-2-3"},"canal Pods show READY ",(0,s.kt)("inlineCode",{parentName:"a"},"2/3"))," for troubleshooting."),(0,s.kt)("h3",{id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed"},"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)"),(0,s.kt)("p",null,"Some causes of this error include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"User specified to connect with does not have permission to access the Docker socket. This can be checked by logging into the host and running the command ",(0,s.kt)("inlineCode",{parentName:"li"},"docker ps"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ ssh user@server\nuser@server$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," how to set this up properly."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"When using RedHat/CentOS as operating system, you cannot use the user ",(0,s.kt)("inlineCode",{parentName:"p"},"root")," to connect to the nodes because of ",(0,s.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"},"Bugzilla #1527565"),". You will need to add a separate user and configure it to access the Docker socket. See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," how to set this up properly.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"SSH server version is not version 6.7 or higher. This is needed for socket forwarding to work, which is used to connect to the Docker socket over SSH. This can be checked using ",(0,s.kt)("inlineCode",{parentName:"p"},"sshd -V")," on the host you are connecting to, or using netcat:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ nc xxx.xxx.xxx.xxx 22\nSSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.10\n")),(0,s.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: no key found"),(0,s.kt)("p",null,"The key file specified as ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," cannot be accessed. Make sure that you specified the private key file (not the public key, ",(0,s.kt)("inlineCode",{parentName:"p"},".pub"),"), and that the user that is running the ",(0,s.kt)("inlineCode",{parentName:"p"},"rke")," command can access the private key file."),(0,s.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": ssh: handshake failed: ssh: unable to authenticate, attempted methods ","[none publickey]",", no supported methods remain"),(0,s.kt)("p",null,"The key file specified as ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," is not correct for accessing the node. Double-check if you specified the correct ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," for the node and if you specified the correct user to connect with."),(0,s.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: cannot decode encrypted private keys"),(0,s.kt)("p",null,"If you want to use encrypted private keys, you should use ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh-agent")," to load your keys with your passphrase. If the ",(0,s.kt)("inlineCode",{parentName:"p"},"SSH_AUTH_SOCK")," environment variable is found in the environment where the ",(0,s.kt)("inlineCode",{parentName:"p"},"rke")," command is run, it will be used automatically to connect to the node."),(0,s.kt)("h3",{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),(0,s.kt)("p",null,"The node is not reachable on the configured ",(0,s.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"port"),"."))}p.isMDXComponent=!0}}]);