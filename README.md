# Express and React

Using express as the **back-end** and react in the **front-end**.

#### Routing
* To start express server
  * ```npm run api```
* To start react client **(create-react-app)**
  * ```npm run client```
* All together concurrently
  * ```npm run server```

##### package.json
```json
"scripts": {
  "start": "node server/app.js",
  "api": "nodemon server/app.js",
  "client": "npm run --prefix server/client start",
  "server": "concurrently --kill-others \"npm run api\" \"npm run client\"",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

#### Dockerfile

```
sudo docker build --tag <tag-name:version> --file Dockerfile .
sudo docker run --name express-react --detach --publish=5000:5000 --publish=3000:3000 <tag-name:version>
```

#### Docker-Compose 

```
sudo docker-compose up
```

#### Third Party Libraries

* Mongooose
* Concurrently 
