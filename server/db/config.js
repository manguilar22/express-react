/**
 *
 * @type {{
 *      container: {host: string, port: number, app: string},
 *      host: {host: string, port: number, app: string}, driver: {host: string, container: string
 *      }}}
 *
 *
 */
const config = {
  container: {
      host: "mongo",
      port: 27017,
      app: "mongo-project"
  },
  host: {
      host: "127.0.0.1",
      port: 27017,
      app: "mongo-project"
  },
  driver: {
      host: "mongodb://127.0.0.1:27017/mongo-project" ,
      container: "mongodb://mongo:27017/mongo-project"
  }
};

module.exports = config;