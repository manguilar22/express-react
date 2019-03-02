/**
 * @type {{container: {host: string, port: number, app: string}, host: {host: string, port: number, app: string}}}
 *
 * Container is for when running with docker-compose
 *
 * Host is for when running on your local machine
 *
 * Remember to update file: db.js depending on preference
 */
const config = {
  container: {
      host: "mongo",
      port: 27017,
      app: "mongo-project"
  },
  host: {
      host: "localhost",
      port: 27017,
      app: "mongo-project"
  }
};

module.exports = config;