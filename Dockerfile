FROM node:10-alpine

#By default, the Docker Node image includes a non-root node user that you can use to avoid running your 
#application container as root. (It is a recommended security practice to avoid running containers as root)

#We will therefore use the node user’s home directory as the working directory for our application and set them
#as our user inside the container. 

#To fine-tune the permissions on our application code in the container, let’s create the node_modules subdirectory
#in /home/node along with the app directory. (to ensure  that they have the permissions we want)
#In addition to creating these directories, we will set ownership on them to our node user:

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "node", "app.js" ]
