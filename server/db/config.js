const config = {

  driver: {
      host: "mongodb://127.0.0.1:27017/mongo-project" ,
      container: "mongodb://mongo:27017/mongo-project",
      settings: {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
      }
  }

};

module.exports = config;