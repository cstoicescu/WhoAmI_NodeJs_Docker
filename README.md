

# WhoAmI_NodeJs_Docker 

## *Part 1* | DockerFile & WhoAmI.js 

###  Here in this project i'll be dockerizing a Node.js application and then deploy 10 containers in a swarm cluster, load balance them behind a single IP with Nginx and then finally conclude with scaling them up and down also visualize the containers in a better way.  

### So the main purpose of this project is not the NodeJs app itself, but rather to  deployi an Node.js app to 10 containers in a swarm then load balance them.

## Content

### - <a title="Part 1" href="https://github.com/cstoicescu/WhoAmI_NodeJs_Docker" target="_blank">Part 1</a> 
### - <a title="Part 2" href="https://github.com/cstoicescu/NGINX_Docker" target="_blank">Part 2</a> 
### - <a title="Part 3" href="https://github.com/cstoicescu/Vagrant_DockerSwarm" target="_blank">Part 3</a> 
 
 ## Final Result after Deploy:  
 https://user-images.githubusercontent.com/53979557/120241164-d6bd8a80-c26a-11eb-81dd-e749cd34b591.gif


 ### First Step:  Building an image from github repo and pushing it to Docker Hub

$docker build -t catalin-nodejs-app:1.0 https://github.com/cstoicescu/WhoAmI_NodeJs_Docker.git 

$docker run catalin-nodejs-app:1.0 

$docker container ls

$docker login

$docker push cstoicescu/whoami-nodejs-app:tagname  

 
 ## Docker commands:
Docker provides a single command that will clean up any resources — images, containers, volumes, and networks — that are dangling (not associated with a container):   

$docker system prune    

To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:   

$docker system prune -a   


Use the docker images command with the -a flag to locate the ID of the images you want to remove. This will show you every image, including intermediate image layers. When you’ve located the images you want to delete, you can pass their ID or tag to docker rmi:  

List:   

docker images -a  
 
Remove:   

__docker rmi Image Image__  
 

Use the docker ps command with the -a flag to locate the name or ID of the containers you want to remove:   

List:   

__docker ps -a__   
 
Remove:   

docker rm ID_or_Name ID_or_Name     


Removing Volumes   
Remove one or more specific volumes - Docker 1.9 and later   
Use the docker volume ls command to locate the volume name or names you wish to delete. Then you can remove one or more volumes with the docker volume rm command:   

List:   

__docker volume ls__   
 
Remove:   
  
__docker volume rm volume_name volume_name__  


 
