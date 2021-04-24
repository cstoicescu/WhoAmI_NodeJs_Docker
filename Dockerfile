FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD node WhoAmI.js
EXPOSE 8081