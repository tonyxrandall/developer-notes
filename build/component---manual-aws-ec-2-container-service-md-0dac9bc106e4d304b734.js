(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"+Uuk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/EC2-Container-Service.md"}});var r={_frontmatter:l},c=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"amazon-ec2-container-services"},"Amazon EC2 Container Services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#amazon-ec2-container-services"}),"Amazon EC2 Container Services"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#10-container-architecture"}),"1.0: Container Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#11-amazon-ec2-introduction"}),"1.1: Amazon EC2 Introduction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#20-creating-an-ecs-user-and-group"}),"2.0: Creating an ECS User and Group")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#21-logging-into-the-console"}),"2.1: Logging into the Console")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#22-create-instance-key-pairs"}),"2.2: Create Instance Key-Pairs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#23-create-a-cluster-virtual-private-cloud"}),"2.3: Create a Cluster Virtual Private Cloud")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#24-security-groups-and-ecs-clusters"}),"2.4: Security Groups and ECS Clusters")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#25-installing-aws-cli"}),"2.5: Installing AWS CLI")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#30-using-the-wizard-for-sample-cluster-creation"}),"3.0: Using the Wizard for Sample Cluster Creation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#31-exploring-the-sample-cluster"}),"3.1: Exploring the Sample Cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#32-customizing-the-ec2-cluster"}),"3.2: Customizing the EC2 Cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#33-cluster-security-group-customization"}),"3.3: Cluster Security Group Customization")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#34-container-instance-scaling"}),"3.4: Container Instance Scaling")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#35-elb---container-registration-and-config"}),"3.5: ELB - Container Registration and Config")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#36-ecs---creating-a-custom-container"}),"3.6: ECS - Creating a Custom Container")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#37-creating-a-custom-task-definition-for-our-containers-in-ecs"}),"3.7: Creating a Custom Task Definition for our Containers in ECS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#38-running-multiple-container-types-in-the-cluster"}),"3.8: Running Multiple Container Types in the Cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#40-troubleshooting"}),"4.0: Troubleshooting"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Goals")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a User and Look at Security Settings"),Object(a.b)("li",{parentName:"ol"},"Create a Role and Generate a Key Pair"),Object(a.b)("li",{parentName:"ol"},"Create a VPC for our Cluster"),Object(a.b)("li",{parentName:"ol"},"Create a Security Group for our Cluster"),Object(a.b)("li",{parentName:"ol"},"Install and Configure the AWS CLI")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Components and Usage")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clusters"),Object(a.b)("li",{parentName:"ul"},"Container instances (how to register too)"),Object(a.b)("li",{parentName:"ul"},"The Agent"),Object(a.b)("li",{parentName:"ul"},"Scheduling Tasks"),Object(a.b)("li",{parentName:"ul"},"Repositories"),Object(a.b)("li",{parentName:"ul"},"IAM Policies and Roles")),Object(a.b)("h2",{id:"10-container-architecture"},"1.0: Container Architecture"),Object(a.b)("h2",{id:"11-amazon-ec2-introduction"},"1.1: Amazon EC2 Introduction"),Object(a.b)("p",null,"Highly scalable and fast container management service. Easily can start, stop and manage containers on a cluster comprised of Amazon EC2 instances."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What makes up the ECS?")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Clusters - the grouping of container instances that we 'do stuff' on."),Object(a.b)("li",{parentName:"ol"},"Container instances - EC2 Instances running the ECS agent and registered in a cluster."),Object(a.b)("li",{parentName:"ol"},"Task Definitions - Description of an application with one or more container definitions."),Object(a.b)("li",{parentName:"ol"},"Scheduling - How we get our tasks on the container instances."),Object(a.b)("li",{parentName:"ol"},"Servies - An ECS service allows us to run or maintain a number of instances of a task definition."),Object(a.b)("li",{parentName:"ol"},"Tasks - an instance of a Task definition"),Object(a.b)("li",{parentName:"ol"},"Containers - A Linux Container (Docker for example) created as part of a Task.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"20-creating-an-ecs-user-and-group"},"2.0: Creating an ECS User and Group"),Object(a.b)("p",null,"In the console, go to Identity and Access Management."),Object(a.b)("p",null,"If you create the secret access key, make sure you download it and provide it for login."),Object(a.b)("p",null,"Ensure that you also create a group for this that is specific to the EC2 Container service."),Object(a.b)("p",null,"Normally we wouldn't recommend Admin access, but you want to assign a group security policy so future users added can get these group policies and we can manage it at a group level."),Object(a.b)("h2",{id:"21-logging-into-the-console"},"2.1: Logging into the Console"),Object(a.b)("p",null,"From the AWS IAM panel, we can just into the new ",Object(a.b)("inlineCode",{parentName:"p"},"ecsadmin")," group and now we can create some sign in passwords from ",Object(a.b)("inlineCode",{parentName:"p"},"Security Credentials"),"."),Object(a.b)("p",null,"Now with the alias link we have from the main dashboard, we can use that give other users a chance to log in."),Object(a.b)("p",null,"It is very important that we want the alias used wherever possible instead of your account number."),Object(a.b)("p",null,"Now, once the user signs in, they have a chance to see a new password."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"THIS IS HOW WE MAINTAIN THE SECURITY WITH GRANUAL PERSMISSIONS FOR OTHERS TO USE")),Object(a.b)("h2",{id:"22-create-instance-key-pairs"},"2.2: Create Instance Key-Pairs"),Object(a.b)("p",null,"Head to ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 Virtual Servers > Network and Security > Key Pairs")," - you can import a key pair or create a key-pair. This is used to SSH in securely."),Object(a.b)("p",null,"Create and save that file and store it somewhere securely."),Object(a.b)("p",null,"If we use ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-agent bash"),", that will launch a shell where we can run ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-add key-pair.pem")," added to the key exchange, and now we can ",Object(a.b)("inlineCode",{parentName:"p"},"ssh -i key-pair.pem ec2-user@ip.address.0.0")," (ensure an instance is running)."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"ssh-agent bash\nssh-add key-pair.pem\nssh -i key-pair.pem ec2-user@ip.address.0.0\n")),Object(a.b)("h2",{id:"23-create-a-cluster-virtual-private-cloud"},"2.3: Create a Cluster Virtual Private Cloud"),Object(a.b)("p",null,"In the VPC section of AWS, in the list of VPCs you can see a list of the VPCs and there can be allocated a default if you haven't named one."),Object(a.b)("p",null,"Create a VPC, give is a name tag, the CIDR block is the network range eg. ",Object(a.b)("inlineCode",{parentName:"p"},"10.17.0.0/16")," (16 is as large as we can make our VPC) and we can choose the VPC to be ",Object(a.b)("inlineCode",{parentName:"p"},"Default")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Dedicated"),"."),Object(a.b)("p",null,"Once the instance config is up, we can choose ",Object(a.b)("inlineCode",{parentName:"p"},"Actions > Edit DHCP Options")," which will edit how those addresses/options are set. Currently the /16 address range will be ",Object(a.b)("inlineCode",{parentName:"p"},"10.17.0.1")," but the config will basically assign ranges between .2 and .253. We can change that range with ",Object(a.b)("inlineCode",{parentName:"p"},"DHCP Options Set")," if we want to."),Object(a.b)("p",null,"DHCP means ",Object(a.b)("inlineCode",{parentName:"p"},"Dynamic Host Configuration Protocol"),"."),Object(a.b)("p",null,"We can also assign a DNS resolution if we didn't want them publicly available by name, we can say don't do it."),Object(a.b)("p",null,"Now we can go back and apply a security group."),Object(a.b)("h2",{id:"24-security-groups-and-ecs-clusters"},"2.4: Security Groups and ECS Clusters"),Object(a.b)("p",null,"Back in the ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 > Network and Security > Security Groups"),", we can now create a security group."),Object(a.b)("p",null,"As you create this, you will give it a name and choose the VPC associated! This will be where we select the ",Object(a.b)("inlineCode",{parentName:"p"},"ECS_VPC")," we created."),Object(a.b)("p",null,"As for the inbound and outbound rules, we add an inbound SSH rule for TCP, port 22, Anywhere which will allow in SSH connections."),Object(a.b)("p",null,"As a second option, we choose HTTPS and a HTTP role as well."),Object(a.b)("p",null,"For the ",Object(a.b)("inlineCode",{parentName:"p"},"Outbound"),", we want SSH to anywhere and HTTP and HTTPS as well. After configuring our services, we may want to choose a more restricive kind of traffic."),Object(a.b)("p",null,"Again, from here, we can edit the inbound and outbound rules too."),Object(a.b)("p",null,"We recommend that you only open up SSH to a few IP ranges."),Object(a.b)("h2",{id:"25-installing-aws-cli"},"2.5: Installing AWS CLI"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pip3 install awscli")," which will give us access to using the command line."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"aws configure")," allows us to put in our id and secret key, and commands such as ",Object(a.b)("inlineCode",{parentName:"p"},"aws ec2 describe-regions")," allow us to see available regions for instances."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"30-using-the-wizard-for-sample-cluster-creation"},"3.0: Using the Wizard for Sample Cluster Creation"),Object(a.b)("p",null,"In the ECS Wizard, let's click ",Object(a.b)("inlineCode",{parentName:"p"},"Get Started"),"."),Object(a.b)("p",null,"This will deploy an EC2 Container Service in a particular region."),Object(a.b)("p",null,"We want to add some information about ",Object(a.b)("inlineCode",{parentName:"p"},"Tasks")," which is how we get things to run on ECS."),Object(a.b)("p",null,"Give the task a definition name ",Object(a.b)("inlineCode",{parentName:"p"},"ecs-sample-web-app-static")," as an example."),Object(a.b)("p",null,"Container name we want to run could be ",Object(a.b)("inlineCode",{parentName:"p"},"ecs-sample-web"),"."),Object(a.b)("p",null,"Image is the image format we want to run."),Object(a.b)("p",null,"The ports can be configured depending on what ports we have exposed on the security settings."),Object(a.b)("p",null,"If we look at the advanved settings, we can look at environment, network settings etc."),Object(a.b)("p",null,"We can also mount additional volumes external from the container."),Object(a.b)("hr",null),Object(a.b)("p",null,"On the next step, we can edit the Service name and we can also have a multiple number of tasks running."),Object(a.b)("p",null,"We can also do elastic load balancing too."),Object(a.b)("p",null,"These containers also run in a cluster. We can choose what instance type we want, and a number of instances."),Object(a.b)("p",null,"Key-Pairs are also region specific and you'll need a new key-pair for another cluster in a different region."),Object(a.b)("p",null,"We need to make sure ",Object(a.b)("inlineCode",{parentName:"p"},"ecsinstanceRole")," IAM policy is also currently allowed."),Object(a.b)("hr",null),Object(a.b)("p",null,"In the review, you will get an overview of what is being created and the cluster configuration."),Object(a.b)("p",null,"If we now view this service in ",Object(a.b)("inlineCode",{parentName:"p"},"Clusters"),", it will show us our cluster and the current task that is running."),Object(a.b)("p",null,"If we look at ",Object(a.b)("inlineCode",{parentName:"p"},"Task Definition")," we can use actions to do thingsl like run tasks."),Object(a.b)("h2",{id:"31-exploring-the-sample-cluster"},"3.1: Exploring the Sample Cluster"),Object(a.b)("p",null,"When we launched the cluster, we had 2 instances running EC2 instances."),Object(a.b)("p",null,"If we now go to ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 > Instances"),", we should be able to now see our running instances!"),Object(a.b)("p",null,"If we grab the IP, we can now use that pem file and AWS CLI. Again, run the ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-agent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-add")," etc."),Object(a.b)("p",null,"At the IP itself, we can see that the website is now running, but the second instance isn't running the container... why? Because it is a cluster. Even though we have two INSTANCES running we only configured ONE service running ONE task with ONE task definition."),Object(a.b)("p",null,"A lot of this is because we haven't set the ELB. Since we didn't add a ELB, we will only see the container on the first EC2 we launched."),Object(a.b)("p",null,"What we can do for our security groups is edit the settings that need to be changed or deploy a cluster and do that manually."),Object(a.b)("h2",{id:"32-customizing-the-ec2-cluster"},"3.2: Customizing the EC2 Cluster"),Object(a.b)("p",null,"In the previous lessons, we quickly went through the ECS Wizard."),Object(a.b)("p",null,"Let's take a look at how we can set up a cluster with a basic web app."),Object(a.b)("p",null,"If we head back to the EC2 container service, let's walk through how we can customize our cluster initially and can use it in a manner more enterprise ready."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Task Definition")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"give a solid name about least definition to a task definition"),Object(a.b)("li",{parentName:"ul"},"again, select the mappings etc that you want")),Object(a.b)("p",null,"Now, in the advaned options, we want to make some changes."),Object(a.b)("p",null,"Handy inclusions will be our environment variables."),Object(a.b)("p",null,"Now, when the host starts, the container will start this image."),Object(a.b)("p",null,"In this case, we will also define a load balance on a particular port."),Object(a.b)("p",null,"Since we still have a very restricive security group, we still cannot SSH in. Why is that? We can configure our security groups."),Object(a.b)("h2",{id:"33-cluster-security-group-customization"},"3.3: Cluster Security Group Customization"),Object(a.b)("p",null,"How can we connect using SSH even when we have a key pair already?"),Object(a.b)("p",null,"The reason we cannot, is that during the initial launch, we don't have a way to apply another security group to another instance."),Object(a.b)("p",null,"So in the ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 > Instances"),", we can view the Security Group being used as the source. If we click onto it, it will take us to the container security group."),Object(a.b)("p",null,"Now if we look at the inbound and outbound rules!"),Object(a.b)("p",null,"There is a ",Object(a.b)("inlineCode",{parentName:"p"},"ECSAllowedPorts")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"ELBAllowedPorts"),", and we are allow to enter one if we allowed in the ELB security group. Effectively, the ELB permissions are imported directly to the ECS allowed ports."),Object(a.b)("p",null,"So we can in fact now add in the SSH IP that we want to use. As soon as we save, it immediately applies to our instance!"),Object(a.b)("p",null,"If we now run ",Object(a.b)("inlineCode",{parentName:"p"},"ps aux | grep http")," we can now see the shell script we have run to launch the container."),Object(a.b)("h2",{id:"34-container-instance-scaling"},"3.4: Container Instance Scaling"),Object(a.b)("p",null,"We have the ability in the EC2 instances live into our cluster."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"ECS > Clusters > ECS Instance > Scale ECS Instances")," we can choose what we are scaling. If will load it with reference to the ELB but it won't be auto setup."),Object(a.b)("p",null,"If we head to ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 > Instances")," is our new instane configured exactly the same way as the original one."),Object(a.b)("p",null,"Once the EC2 is up, the container won't be showing up on the IP just yet. If we SSH into that address, we can see that it is running but no ",Object(a.b)("inlineCode",{parentName:"p"},"http")," service is running."),Object(a.b)("p",null,"Head back to ",Object(a.b)("inlineCode",{parentName:"p"},"ECS")," and we can see in the clusters that we only have one running task."),Object(a.b)("p",null,"Now, if we select ",Object(a.b)("inlineCode",{parentName:"p"},"Clusters > Task"),", we run a new task and choose our task definition. We still only need to run 1 task, since we just ran 1 additional instance. It's a 1-to-1 relationship."),Object(a.b)("p",null,"Something that is cool, is that just because we are running a new task, we don't have to choose the same definition eg. like how we are running a database to support the cluster."),Object(a.b)("p",null,"Once that task is running, if we now check that IP, we can now see the website is actually running."),Object(a.b)("h2",{id:"35-elb---container-registration-and-config"},"3.5: ELB - Container Registration and Config"),Object(a.b)("p",null,"Now that we have two instances running, but the load balancer on has 1 of 1 instances."),Object(a.b)("p",null,"What we have to do in ",Object(a.b)("inlineCode",{parentName:"p"},"EC2 > Load Balancers > Status"),", we click on it and edit the instances. The the ELB has already registered that there is another container instance (as you'll be able to see) so we click on it and then we select save."),Object(a.b)("p",null,"Now we have multiple nodes, and the ELB will now use round robin to choose the node to use."),Object(a.b)("p",null,"Load balancers do not currently store session state by default, which can be a trouble if you are running with round robin. You need to turn on Stickiness on the Port Configuration in order to keep sessions."),Object(a.b)("p",null,"We can enabled ",Object(a.b)("inlineCode",{parentName:"p"},"Load Balancer")," generated cookies or appliation generated cookie stickiness. Application will look for a cookie you set."),Object(a.b)("p",null,"Generally you just want 5 minutes or so or you could suffer from ",Object(a.b)("inlineCode",{parentName:"p"},"affinity overload")," if one server gets overloaded."),Object(a.b)("h2",{id:"36-ecs---creating-a-custom-container"},"3.6: ECS - Creating a Custom Container"),Object(a.b)("p",null,"What we can do for loading containers is run from Docker Hub."),Object(a.b)("p",null,"If you are going to use a propriatary system, use a private Docker Hub repo."),Object(a.b)("p",null,"This example is given from AWS Labs."),Object(a.b)("p",null,"The Dockerfile will be used to get a base image we want it built on and then we can declare variables that we want associated with it."),Object(a.b)("p",null,"In this example, we will run ",Object(a.b)("inlineCode",{parentName:"p"},"docker build -t username/name-of-repo")," and it will work from the Dockerfile and line everything up."),Object(a.b)("p",null,"After the build, it will now be another image we can run against."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run -p 80:80 latest123/amazon-ecs-sample:latest")),Object(a.b)("p",null,"We can run ",Object(a.b)("inlineCode",{parentName:"p"},"docker ps")," to ensure it is running and then we should be able to check localhost and see it all running."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker login")," will sign us into our Docker account and the credentials will be saved."),Object(a.b)("p",null,"Now if we ",Object(a.b)("inlineCode",{parentName:"p"},"docker push"),", we can push that image."),Object(a.b)("p",null,"We can now see that our repo has been pushed up to the account."),Object(a.b)("h2",{id:"37-creating-a-custom-task-definition-for-our-containers-in-ecs"},"3.7: Creating a Custom Task Definition for our Containers in ECS"),Object(a.b)("p",null,"With the repo available for a docker pull, what we can now do is create a new task definition that will apply to a running task definition."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating the task definition")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Can be done by either console or CLI")),Object(a.b)("p",null,"Select ",Object(a.b)("inlineCode",{parentName:"p"},"ECS > Task Definitions > Create a new definition"),"."),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"console-task-def-latest-sampleweb"),"."),Object(a.b)("p",null,"What we can do is now add a container! We can also do a configure via JSON."),Object(a.b)("p",null,"How do we do that? We can add a ",Object(a.b)("inlineCode",{parentName:"p"},"config.json")," file that has all of the details."),Object(a.b)("p",null,"In the example config that we paste in here from the AWSLabs example, we just need to change the Image that we wish to change."),Object(a.b)("p",null,"Once we have created that task definition, we can head back to Clusters and see the task there."),Object(a.b)("h2",{id:"38-running-multiple-container-types-in-the-cluster"},"3.8: Running Multiple Container Types in the Cluster"),Object(a.b)("p",null,"Now that the task definition is done, how can we use that in our cluster? As we've seen before, we can scale the cluster with the additional instances."),Object(a.b)("p",null,"Before we can apply a task to, we need to scale the instances."),Object(a.b)("p",null,"Once the new EC2 instance is up, we can again check that it isn't running if we check the Public IP."),Object(a.b)("p",null,"Back in ",Object(a.b)("inlineCode",{parentName:"p"},"ECS > Clusters > ECS Instances"),", we have two tasks running and we can now run a new task."),Object(a.b)("p",null,"One thing to notice is that the task definition list cannot be removed."),Object(a.b)("p",null,"Once the task has run, get the IP that is provisioned and see if you can head to it - which you can!"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"40-troubleshooting"},"4.0: Troubleshooting"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Service Health is important to decide if it's with the cluster and not AWS."),Object(a.b)("li",{parentName:"ul"},"Another option is to check events."),Object(a.b)("li",{parentName:"ul"},"Check the instances, which also has deeper information"),Object(a.b)("li",{parentName:"ul"},"Check the Load Balancer have the in service status. - Health checks here can be configured."),Object(a.b)("li",{parentName:"ul"},"We can check the cluster itself - Check primary service is ",Object(a.b)("inlineCode",{parentName:"li"},"ACTIVE")," - Check the instances and the tasks")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/EC2-Container-Service.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-ec-2-container-service-md-0dac9bc106e4d304b734.js.map