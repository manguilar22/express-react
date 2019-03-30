FROM node:latest
MAINTAINER label="manguilar22@gmail.com"
COPY . /app
WORKDIR /app
RUN npm install 
RUN npm install --prefix server/client
RUN npm audit fix
RUN npm audit fix --prefix server/client
CMD npm run server
EXPOSE 5000
EXPOSE 3000
