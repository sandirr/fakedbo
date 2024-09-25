const jsonServer = require('json-server');
const server = jsonServer(); // Correct function to create server
const router = jsonServer.router('db.json'); // Path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = async (event, context) => {
  // Required for Netlify functions to handle events and context
  return new Promise((resolve, reject) => {
    server.handle(event, context, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};

module.exports = { handler };
