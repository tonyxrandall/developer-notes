(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{LTM6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return o}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),l=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Helm.md"}});var c={_frontmatter:s},i=l.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(i,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"5-packaging-and-deploying-on-kubernetes"},"5. Packaging and Deploying on Kubernetes"),Object(a.b)("h2",{id:"51-intro-to-helm"},"5.1 Intro to Helm"),Object(a.b)("p",null,"Helm is the best way to find, share and use software built for Kubernetes."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Package manager for Kubernetes."),Object(a.b)("li",{parentName:"ul"},"Helps you manage Kubernetes apps."),Object(a.b)("li",{parentName:"ul"},"Maintained by CNCF.")),Object(a.b)("p",null,"To use, download the Helm client."),Object(a.b)("p",null,"To run, use ",Object(a.b)("inlineCode",{parentName:"p"},"helm init"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This will installer Tiller"),Object(a.b)("li",{parentName:"ul"},"If you have RBAC installed (recent clusters have it enabled by default), you'll also need to add a ServiceAccount and RBAC rules.")),Object(a.b)("p",null,"Helm uses a packaging format call ",Object(a.b)("strong",{parentName:"p"},"charts"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A chart is a collection of files that describe a set of Kubernetes resources."),Object(a.b)("li",{parentName:"ul"},"A single chart can deploy an app, a piece of software or a database."),Object(a.b)("li",{parentName:"ul"},"It can have depencies ie Wordpress chart requires mysql chart."),Object(a.b)("li",{parentName:"ul"},"You can also write your own chart.")),Object(a.b)("h3",{id:"helm-commands"},"Helm commands"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm init"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Install tiller on the cluser")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm reset"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Remove tiller")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm install ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART>")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Install chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm search ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART>")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Searches for chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm search redis"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Looks for Redis chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm install --name myredis stable/redis"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Installs Redis chart found under myredis")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm delete myredis"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Delete Redis install named myredis")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm create ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART_NAME>")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Create your own chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm update ",Object(a.b)("inlineCode",{parentName:"td"},"<OPTIONS>")," ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART>")," path/to/chart"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Update the chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm history ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART_NAME>")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"See upgrade history of chart")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm rollback ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART_NAME>")," ",Object(a.b)("inlineCode",{parentName:"td"},"<REVISION>")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Rollback to version")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm list"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"List running charts")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm list --all"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"List all charts that have ran")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"helm delete ",Object(a.b)("inlineCode",{parentName:"td"},"<CHART_NAME>")," --purge"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Release deleted chart")))),Object(a.b)("h3",{id:"installing-helm"},"Installing Helm"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh\nchmod 700 get_helm.sh\n./get_helm.sh\n")),Object(a.b)("p",null,"Alternatively:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"curl https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash\n")),Object(a.b)("h4",{id:"linux-distro-install"},"Linux Distro Install"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"wget https://kubernetes-helm.storage.googleapis.com/helm-v2.11.0-linux-amd64.tar.gz\ntar -xzvf helm-v2.11.0-linux-amd64.tar.gz\nsudo mv linux-amd64/helm /usr/local/bin/helm\n")),Object(a.b)("h3",{id:"adding-to-cluster"},"Adding to cluster"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# helm-rbac.yaml\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: tiller\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: tiller\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: tiller\n    namespace: kube-system\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl apply -f helm-rbac.yaml\nhelm init --service-account tiller\n")),Object(a.b)("h2",{id:"52-creating-your-own-helm-charts"},"5.2 Creating your own helm charts"),Object(a.b)("p",null,"This is the recommended way to deploy applications."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Packaging the app allows you to deploy the app in 1 command."),Object(a.b)("li",{parentName:"ul"},"Helm allows for upgrades and rollbacks."),Object(a.b)("li",{parentName:"ul"},"Helm chart is also version controlled.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# creates director mychart/\nhelm create mychart\nls mychart\n# Displays Chart.yaml  charts  templates  values.yaml\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"values.yaml")," will control things such as replicas, image etc."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'# Default values for test.\n# This is a YAML-formatted file.\n# Declare variables to be passed into your templates.\n\nreplicaCount: 1\n\nimage:\n  repository: nginx\n  tag: stable\n  pullPolicy: IfNotPresent\n\nnameOverride: ""\nfullnameOverride: ""\n\nservice:\n  type: ClusterIP\n  port: 80\n\ningress:\n  enabled: false\n  annotations: {}\n    # kubernetes.io/ingress.class: nginx\n    # kubernetes.io/tls-acme: "true"\n  paths: []\n  hosts:\n    - chart-example.local\n  tls: []\n  #  - secretName: chart-example-tls\n  #    hosts:\n  #      - chart-example.local\n\nresources: {}\n  # We usually recommend not to specify default resources and to leave this as a conscious\n  # choice for the user. This also increases chances charts run on environments with little\n  # resources, such as Minikube. If you do want to specify resources, uncomment the following\n  # lines, adjust them as necessary, and remove the curly braces after \'resources:\'.\n  # limits:\n  #  cpu: 100m\n  #  memory: 128Mi\n  # requests:\n  #  cpu: 100m\n  #  memory: 128Mi\n\nnodeSelector: {}\n\ntolerations: []\n\naffinity: {}\n')),Object(a.b)("p",null,"Inside the ",Object(a.b)("inlineCode",{parentName:"p"},"mychart/templates")," folder we have..."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"ls mychart/templates\n# shows NOTES.txt  _helpers.tpl  deployment.yaml  ingress.yaml  service.yaml  tests\n")),Object(a.b)("p",null,"Looking at the ",Object(a.b)("inlineCode",{parentName:"p"},"deployment.yaml")," we see the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include "test.fullname" . }}\n  labels:\n    app.kubernetes.io/name: {{ include "test.name" . }}\n    helm.sh/chart: {{ include "test.chart" . }}\n    app.kubernetes.io/instance: {{ .Release.Name }}\n    app.kubernetes.io/managed-by: {{ .Release.Service }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: {{ include "test.name" . }}\n      app.kubernetes.io/instance: {{ .Release.Name }}\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: {{ include "test.name" . }}\n        app.kubernetes.io/instance: {{ .Release.Name }}\n    spec:\n      containers:\n        - name: {{ .Chart.Name }}\n          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"\n          imagePullPolicy: {{ .Values.image.pullPolicy }}\n          ports:\n            - name: http\n              containerPort: 80\n              protocol: TCP\n          livenessProbe:\n            httpGet:\n              path: /\n              port: http\n          readinessProbe:\n            httpGet:\n              path: /\n              port: http\n          resources:\n            {{- toYaml .Values.resources | nindent 12 }}\n      {{- with .Values.nodeSelector }}\n      nodeSelector:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n    {{- with .Values.affinity }}\n      affinity:\n        {{- toYaml . | nindent 8 }}\n    {{- end }}\n    {{- with .Values.tolerations }}\n      tolerations:\n        {{- toYaml . | nindent 8 }}\n    {{- end }}\n')),Object(a.b)("p",null,"These values will be filled out when deployed."),Object(a.b)("p",null,"The spec values are generally defined by the earlier ",Object(a.b)("inlineCode",{parentName:"p"},"values.yaml"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"mychart/service.yaml")," also templates how the service file will be created:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include "test.fullname" . }}\n  labels:\n    app.kubernetes.io/name: {{ include "test.name" . }}\n    helm.sh/chart: {{ include "test.chart" . }}\n    app.kubernetes.io/instance: {{ .Release.Name }}\n    app.kubernetes.io/managed-by: {{ .Release.Service }}\nspec:\n  type: {{ .Values.service.type }}\n  ports:\n    - port: {{ .Values.service.port }}\n      targetPort: http\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: {{ include "test.name" . }}\n    app.kubernetes.io/instance: {{ .Release.Name }}\n')),Object(a.b)("p",null,"From here, you can directly install the helm chart using ",Object(a.b)("inlineCode",{parentName:"p"},"helm install mychart/"),"."),Object(a.b)("p",null,"Using the default chart, there is a ",Object(a.b)("inlineCode",{parentName:"p"},"nginx")," configuration you then port forward and curl."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl port-forward 80:8080\n# Press ^z here\nbg # set to background\ncurl localhost:8080 \n# result should be default nginx html\nfg # bring port-forward back to foreground\n")),Object(a.b)("h1",{id:"demo-with-a-nodejs-app"},"Demo with a Nodejs app"),Object(a.b)("p",null,"Create a chart and update the required value for your image etc."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# Default values for test.\n# This is a YAML-formatted file.\n# Declare variables to be passed into your templates.\n\nreplicaCount: 1\n\nimage:\n  repository: okeeffed/repo\n  tag: latest\n  pullPolicy: IfNotPresent\n\n# Could also be LoadBalancer\nservice:\n  type: ClusterIP\n  port: 80\n\ningress:\n  enabled: false\n  annotations: {}\n    # kubernetes.io/ingress.class: nginx\n    # kubernetes.io/tls-acme: \"true\"\n  paths: []\n  hosts:\n    - chart-example.local\n    # this could also be whatever.domain.com\n  tls: []\n  #  - secretName: chart-example-tls\n  #    hosts:\n  #      - chart-example.local\n\nresources: {}\n  # We usually recommend not to specify default resources and to leave this as a conscious\n  # choice for the user. This also increases chances charts run on environments with little\n  # resources, such as Minikube. If you do want to specify resources, uncomment the following\n  # lines, adjust them as necessary, and remove the curly braces after 'resources:'.\n  # limits:\n  #  cpu: 100m\n  #  memory: 128Mi\n  # requests:\n  #  cpu: 100m\n  #  memory: 128Mi\n\nnodeSelector: {}\n\ntolerations: []\n\naffinity: {}\n\n# Here you can add dependencies\n")),Object(a.b)("p",null,"If your helm has depencies, these can be defined in a ",Object(a.b)("inlineCode",{parentName:"p"},"requirements.yaml")," file. Example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"dependencies:\n  - name: mariadb\n    version: 4.x.x\n    repository: https://kubernetes-charts.storage.googleapis.com/\n    condition: mariadb.enabled\n    tags:\n      - node-app-database\n")),Object(a.b)("p",null,"Ensure you update the chart if you need to change the ",Object(a.b)("inlineCode",{parentName:"p"},"containerPort")," or env variables etc."),Object(a.b)("p",null,"Once the chart is up and running, you can update charts which will update the orchestration. Use ",Object(a.b)("inlineCode",{parentName:"p"},"helm update <OPTIONS> <CHART> path/to/chart")),Object(a.b)("p",null,"Rollbacks can easily be done as well. "),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"helm history <CHART>")," to get a history of deployments. Say we want to rollback to revision one, we can then just run ",Object(a.b)("inlineCode",{parentName:"p"},"helm rollback <CHART> 1"),". "),Object(a.b)("h2",{id:"53-setting-up-helm-repo-with-s3"},"5.3 Setting up Helm Repo with S3"),Object(a.b)("p",null,"If you have charts stored on S3:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# Install plugin\nhelm plugin install https://github.com/hypnoglow/helm-s3.git\n\n# Initialise s3 bucket\nhelm s3 init s3://helm-bucket/charts\n\n# Add report to helm\nhelm repo add my-charts s3://helm-bucket/charts\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Helm.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-helm-md-54115ea4c51fdb8189a3.js.map