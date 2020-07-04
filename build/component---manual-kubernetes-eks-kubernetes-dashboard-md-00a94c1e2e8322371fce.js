(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{uajE:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),s=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/EKS-Kubernetes-Dashboard.md"}});var l={_frontmatter:o},i=s.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(a.b)(i,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kubernetes-dashboard"},"Kubernetes Dashboard"),Object(a.b)("p",null,"This belongs to the Kubernetes project and gives you a UI overview of what is going on."),Object(a.b)("p",null,"It displays info about:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Workload (Deployments, Pods, ReplicationSets)"),Object(a.b)("li",{parentName:"ul"},"Namespaces"),Object(a.b)("li",{parentName:"ul"},"Services"),Object(a.b)("li",{parentName:"ul"},"Nodes & Storage"),Object(a.b)("li",{parentName:"ul"},"Usage Metrics (Heapster monitoring required)")),Object(a.b)("p",null,"The dashboard can also execute commands based on propr RBAC permissions."),Object(a.b)("p",null,"Security:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"HTTPS"),Object(a.b)("li",{parentName:"ul"},"Login via Bearer token"),Object(a.b)("li",{parentName:"ul"},"RBAC to define fine-grain access to UI components")),Object(a.b)("p",null,"More info can be found ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/kubernetes/dashboard"}),"https://github.com/kubernetes/dashboard"),"."),Object(a.b)("p",null,"What the setup for us will look like when touching base with the dashboard:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Dashboard access layout",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548218031/eks-course/Screen_Shot_2019-01-23_at_3.33.27_pm.png"})),Object(a.b)("h2",{id:"steps-to-take"},"Steps to take"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create service account and RBAC rules"),Object(a.b)("li",{parentName:"ol"},"Deploy dashboard"),Object(a.b)("li",{parentName:"ol"},"Deploy metrics Add-Ons"),Object(a.b)("li",{parentName:"ol"},"Create cluster admin account and explore dashboard")),Object(a.b)("p",null,"We need to create:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A service account for the dashboard"),Object(a.b)("li",{parentName:"ol"},"Several roles to grant privileges (RBAC) to the dashboard"),Object(a.b)("li",{parentName:"ol"},"A role binding to link the service account to the RBAC roles")),Object(a.b)("h2",{id:"creating-the-serviceaccount-and-roles"},"Creating the ServiceAccount and Roles"),Object(a.b)("p",null,"First, we handle the RBAC by creating the ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceAccount")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Role")," and then using a ",Object(a.b)("inlineCode",{parentName:"p"},"RoleBinding")," to attach that Role to the Service Account."),Object(a.b)("p",null,"dashboard-account-rab.yaml:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# ------------------- Dashboard Service Account ------------------- #\n\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kube-system\n\n---\n# ------------------- Dashboard Role & Role Binding ------------------- #\n\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: kubernetes-dashboard-minimal\n  namespace: kube-system\nrules:\n  # Allow Dashboard to create 'kubernetes-dashboard-key-holder' secret.\n  - apiGroups: ['']\n    resources: ['secrets']\n    verbs: ['create']\n    # Allow Dashboard to create 'kubernetes-dashboard-settings' config map.\n  - apiGroups: ['']\n    resources: ['configmaps']\n    verbs: ['create']\n    # Allow Dashboard to get, update and delete Dashboard exclusive secrets.\n  - apiGroups: ['']\n    resources: ['secrets']\n    resourceNames:\n      ['kubernetes-dashboard-key-holder', 'kubernetes-dashboard-certs']\n    verbs: ['get', 'update', 'delete']\n    # Allow Dashboard to get and update 'kubernetes-dashboard-settings' config map.\n  - apiGroups: ['']\n    resources: ['configmaps']\n    resourceNames: ['kubernetes-dashboard-settings']\n    verbs: ['get', 'update']\n    # Allow Dashboard to get metrics from heapster.\n  - apiGroups: ['']\n    resources: ['services']\n    resourceNames: ['heapster']\n    verbs: ['proxy']\n  - apiGroups: ['']\n    resources: ['services/proxy']\n    resourceNames: ['heapster', 'http:heapster:', 'https:heapster:']\n    verbs: ['get']\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: kubernetes-dashboard-minimal\n  namespace: kube-system\nroleRef:\n  # Reference role we created above\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: kubernetes-dashboard-minimal\nsubjects:\n  # Attach RoleBinding to Service Account we first created\n  - kind: ServiceAccount\n    name: kubernetes-dashboard\n    namespace: kube-system\n\n---\n\n")),Object(a.b)("h2",{id:"deploying-the-dashboard"},"Deploying the dashboard"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Layout",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548219837/eks-course/Screen_Shot_2019-01-23_at_4.03.45_pm.png"})),Object(a.b)("p",null,"There will be 3 resources created in the lecture:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Service: fixed port, fixed url, user facing"),Object(a.b)("li",{parentName:"ol"},"Deployment: Dashboard pod -- port 8443 (can live on any host)"),Object(a.b)("li",{parentName:"ol"},"Volume: This will contain our secret certificates")),Object(a.b)("p",null,"This is all stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"deploy-dashboard.yml")," file:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'# Copyright 2017 The Kubernetes Authors.\n#\n# Licensed under the Apache License, Version 2.0 (the "License");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n\n# ------------------- Dashboard Secret ------------------- #\n\napiVersion: v1\nkind: Secret\nmetadata:\n  labels:\n    # Using this to match easily\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard-certs\n  namespace: kube-system\ntype: Opaque\n\n---\n# ------------------- Dashboard Deployment ------------------- #\n\nkind: Deployment\napiVersion: apps/v1beta2\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  # Used for Service to target\n  name: kubernetes-dashboard\n  namespace: kube-system\nspec:\n  replicas: 1\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      k8s-app: kubernetes-dashboard\n  template:\n    metadata:\n      labels:\n        k8s-app: kubernetes-dashboard\n    spec:\n      containers:\n        - name: kubernetes-dashboard\n          image: k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.0\n          # Used for Service to expose\n          ports:\n            - containerPort: 8443\n              protocol: TCP\n          args:\n            - --auto-generate-certificates\n            # Uncomment the following line to manually specify Kubernetes API server Host\n            # If not specified, Dashboard will attempt to auto discover the API server and connect\n            # to it. Uncomment only if the default does not work.\n            # - --apiserver-host=http://my-address:port\n          volumeMounts:\n            - name: kubernetes-dashboard-certs\n              mountPath: /certs\n              # Create on-disk volume to store exec logs\n            - mountPath: /tmp\n              name: tmp-volume\n          livenessProbe:\n            httpGet:\n              scheme: HTTPS\n              path: /\n              port: 8443\n            initialDelaySeconds: 30\n            timeoutSeconds: 30\n      volumes:\n        - name: kubernetes-dashboard-certs\n          secret:\n            secretName: kubernetes-dashboard-certs\n        - name: tmp-volume\n          emptyDir: {}\n      serviceAccountName: kubernetes-dashboard\n      # Comment the following tolerations if Dashboard must not be deployed on master\n      tolerations:\n        - key: node-role.kubernetes.io/master\n          effect: NoSchedule\n\n---\n# ------------------- Dashboard Service ------------------- #\n\nkind: Service\napiVersion: v1\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kube-system\nspec:\n  ports:\n    - port: 443\n      targetPort: 8443\n  selector:\n    k8s-app: kubernetes-dashboard\n')),Object(a.b)("p",null,"After we applying the yaml file, we can see what we've created using ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get all --namespace kube-system --selector=k8s-app=kubernetes-dashboard"),"."),Object(a.b)("p",null,"We can get even more granular with:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl get svc --namespace kube-system --selector=k8s-app=kubernetes-dashboard\nkubectl get pods --namespace kube-system --selector=k8s-app=kubernetes-dashboard\nkubectl get deployments --namespace kube-system --selector=k8s-app=kubernetes-dashboard\nkubectl get replicasets --namespace kube-system --selector=k8s-app=kubernetes-dashboard\n")),Object(a.b)("h2",{id:"deploying-the-metrics-add-on"},"Deploying the metrics add-on"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Heapster Kubernetes resources",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548221185/eks-course/Screen_Shot_2019-01-23_at_4.26.16_pm.png"})),Object(a.b)("p",null,"We will deploy Heapster and that is made up of three Kubernetes resources: a service, deployment and service account."),Object(a.b)("p",null,Object(a.b)("img",{alt:"InfluxDB resources",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548221289/eks-course/Screen_Shot_2019-01-23_at_4.28.00_pm.png"})),Object(a.b)("p",null,"We will also deploy InfluxDB to store its data. The Heapster deployment will interface with the InfluxDB service."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Full connection",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548221371/eks-course/Screen_Shot_2019-01-23_at_4.29.21_pm.png"})),Object(a.b)("h3",{id:"deploying-influxdb"},"Deploying InfluxDB"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: monitoring-influxdb\n  namespace: kube-system\nspec:\n  replicas: 1\n  template:\n    metadata:\n      # label k8s-app used for Service spec\n      labels:\n        task: monitoring\n        k8s-app: influxdb\n    spec:\n      containers:\n        - name: influxdb\n          image: k8s.gcr.io/heapster-influxdb-amd64:v1.5.2\n          volumeMounts:\n            - mountPath: /data\n              name: influxdb-storage\n      volumes:\n        - name: influxdb-storage\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    task: monitoring\n    # For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)\n    # If you are NOT using this as an addon, you should comment out this line.\n    kubernetes.io/cluster-service: 'true'\n    kubernetes.io/name: monitoring-influxdb\n  name: monitoring-influxdb\n  namespace: kube-system\nspec:\n  ports:\n    - port: 8086\n      targetPort: 8086\n  # What Service should be linked to\n  selector:\n    k8s-app: influxdb\n")),Object(a.b)("h3",{id:"deploying-heapter"},"Deploying Heapter"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yml"}),"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: heapster\n  namespace: kube-system\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        task: monitoring\n        k8s-app: heapster\n    spec:\n      serviceAccountName: heapster\n      containers:\n        - name: heapster\n          image: k8s.gcr.io/heapster-amd64:v1.5.4\n          imagePullPolicy: IfNotPresent\n          command:\n            - /heapster\n            - --source=kubernetes:https://kubernetes.default\n            - --sink=influxdb:http://monitoring-influxdb.kube-system.svc:8086\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    task: monitoring\n    # For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)\n    # If you are NOT using this as an addon, you should comment out this line.\n    kubernetes.io/cluster-service: 'true'\n    kubernetes.io/name: Heapster\n  name: heapster\n  namespace: kube-system\nspec:\n  ports:\n    - port: 80\n      targetPort: 8082\n  selector:\n    k8s-app: heapster\n")),Object(a.b)("h3",{id:"deploying-heapster-rbac"},"Deploying Heapster RBAC"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: heapster\n  namespace: kube-system\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: heapster\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:heapster\nsubjects:\n  - kind: ServiceAccount\n    name: heapster\n    namespace: kube-system\n")),Object(a.b)("h2",{id:"deploying-heapster-and-influxdb"},"Deploying Heapster and Influx.db"),Object(a.b)("p",null,"Applying these deployments to the cluster:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl apply -f deploy-heapster.yml\nkubectl apply -f deploy-influxdb.yml\nkubectl apply -f deploy-heapster-rbac.yml\n")),Object(a.b)("p",null,"Using a selector see what we built:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl get all --namespace kube-system --selector=task=monitoring\n")),Object(a.b)("p",null,"Applying the above should return something like:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"NAME                                       READY   STATUS    RESTARTS   AGE\npod/heapster-84c9bc48c4-lph2v              1/1     Running   0          1m\npod/monitoring-influxdb-848b9b66f6-7tkcv   1/1     Running   0          2m\n\nNAME                          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/heapster              ClusterIP   [REDACTED]      <none>        80/TCP     3m\nservice/monitoring-influxdb   ClusterIP   [REDACTED]      <none>        8086/TCP   2m\n\nNAME                                  DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/heapster              1         1         1            1           3m\ndeployment.apps/monitoring-influxdb   1         1         1            1           2m\n\nNAME                                             DESIRED   CURRENT   READY   AGE\nreplicaset.apps/heapster-84c9bc48c4              1         1         1       3m\nreplicaset.apps/monitoring-influxdb-848b9b66f6   1         1         1       2m\n")),Object(a.b)("p",null,"Note that Kubernetes ",Object(a.b)("inlineCode",{parentName:"p"},"Deployments")," provides declarative updates for ",Object(a.b)("inlineCode",{parentName:"p"},"Pods")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ReplicaSets"),"."),Object(a.b)("p",null,"See ",Object(a.b)("inlineCode",{parentName:"p"},"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/")," for more info."),Object(a.b)("h2",{id:"creating-an-admin-account-to-use-the-dashboard"},"Creating an Admin Account to use the dashboard"),Object(a.b)("p",null,"Using YAML, we'll create:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"cluster admin account"),Object(a.b)("li",{parentName:"ol"},"Role binding")),Object(a.b)("p",null,"Then we can start the ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl proxy")," to authenticate the K8s dashboard and explore the dashboard."),Object(a.b)("h2",{id:"creating-the-admin-service-account"},"Creating the admin Service Account"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: eks-admin\n  namespace: kube-system\n\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: eks-admin\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: eks-admin\n    namespace: kube-system\n")),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl apply -f admin-service-account.yml")," to apply."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# Returned\nserviceaccount/eks-admin created\nclusterrolebinding.rbac.authorization.k8s.io/eks-admin created\n")),Object(a.b)("h2",{id:"kubectl-proxy"},"Kubectl proxy"),Object(a.b)("p",null,"Now we should be able to run the proxy to see the dashboard! Ensure if you are port forwarding further if you need to see it on a particular host from a VM or docker image."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# This is to forward from Docker container to host\nkubectl proxy --address='0.0.0.0' --port=8001 --accept-hosts='.*'\n\n# Starting to serve on 127.0.0.1:8001\n")),Object(a.b)("p",null,"Now head to a browser at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login")," for login."),Object(a.b)("p",null,"To login with the token, we need the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-course-admin | awk '{print $1}')\n")),Object(a.b)("p",null,"There is some more info here at ",Object(a.b)("inlineCode",{parentName:"p"},"https://docs.aws.amazon.com/eks/latest/userguide/dashboard-tutorial.html"),"."),Object(a.b)("h2",{id:"chaos-testing"},"Chaos testing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Simulating a failure of the frontend pods can be done using ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl delete pod <POD>"),"."),Object(a.b)("li",{parentName:"ul"},"Simulating a failure of the nodes is to just stop one of the three EC2 instances (can be done from AWS console easily). If a node goes down, the rest of the pods are distributed amongst the other nodes. If nodes are considered for autoscaling, then the EC2 instance will against restart another node.")),Object(a.b)("p",null,"Note, there is no automatic redeployment to the other nodes when a node becomes rescheduled. Killing some pods will of course help with rescheduling and distribution."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/EKS-Kubernetes-Dashboard.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-eks-kubernetes-dashboard-md-00a94c1e2e8322371fce.js.map