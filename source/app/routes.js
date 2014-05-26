var rest = require("restler");

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.contentType('text/html');
    res.render('index');
  });

  app.get('/commits', function(req, res) {
    rest.get('https://api.github.com/repos/joyent/node/commits').on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
        this.retry(5000); // try again after 5 sec
      } else {
        res.send(result);
      }
    });
  });
};
