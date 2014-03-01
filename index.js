var express = require('express');
var googleapis = require('googleapis');
var app = express();

var jwt = new googleapis.auth.JWT(EMAIL, KEYFILE.pem, KEY, ['https://www.googleapis.com/auth/bigquery']);

app.get('/', function(req, res) {
  googleapis.discover('bigquery', 'v2').execute(function(err, client) {
    jwt.authorize(function(err, result) {

      var request = client.bigquery.jobs.query({
        query: 'QUERY',
        projectId: 'project-id'
      });

      request
        .withAuthClient(jwt)
        .execute(function(err, response) {
          if (err) console.log(err);
          res.json(response);
        });
    });
  });
});

app.listen(3000);
