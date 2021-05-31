# WhoAmI_NodeJs_Docker

## WIP DockerFile | WhoAmI.js

dockerize nodeJs app 


 
Docker provides a single command that will clean up any resources — images, containers, volumes, and networks — that are dangling (not associated with a container):   

$docker system prune    

To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:   

$docker system prune -a   


Use the docker images command with the -a flag to locate the ID of the images you want to remove. This will show you every image, including intermediate image layers. When you’ve located the images you want to delete, you can pass their ID or tag to docker rmi:  

List:   

docker images -a  
 
Remove:   

docker rmi Image Image  
 

Use the docker ps command with the -a flag to locate the name or ID of the containers you want to remove:   

List:   

docker ps -a   
 
Remove:   

docker rm ID_or_Name ID_or_Name     


Removing Volumes   
Remove one or more specific volumes - Docker 1.9 and later   
Use the docker volume ls command to locate the volume name or names you wish to delete. Then you can remove one or more volumes with the docker volume rm command:   

List:   

docker volume ls   
 
Remove:   
  
docker volume rm volume_name volume_name  



$docker build -t catalin-nodejs-app:1.0 https://github.com/cstoicescu/WhoAmI_NodeJs_Docker.git 

$docker run catalin-nodejs-app:1.0 

$docker container ls

$docker login

$docker push cstoicescu/whoami-nodejs-app:tagname

https://docs.docker.com/docker-hub/repos/#:~:text=To%20push%20an%20image%20to,docs%2Fbase%3Atesting%20).

https://github.com/aagam29/dockerimage_nodejs

https://github.com/twistedFantasy/docker-swarm-vagrant

https://levelup.gitconnected.com/load-balance-and-scale-node-js-containers-with-nginx-and-docker-swarm-9fc97c3cff81

 