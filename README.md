# Express and React 

Using express as the **back-end** and react is the **front-end**. 

#### Routing 
* To start express server
  * ```npm run api```
* To start react client **(create-react-app)**
  * ```npm run client```
* All together concurrently
  * ```npm run server```

#### Optimized Dockerfile

```bash
sudo docker build --tag <tag-name:version> --no-cache --pull --file Dockerfile .
sudo docker run --name mongodb --publish=27017:27017 --detach mongodb:latest
sudo docker run --name express-react --detach --link mongodb:mongodb --publish=5000:5000 --publish=3000:3000 <tag-name:version> 
```

#### Third Party Libraries 
* JsonWebTokens (JWT) 
* Mongooose 
* Concurrently 
