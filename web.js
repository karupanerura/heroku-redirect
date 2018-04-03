"use strict";

const express = require('express');
const app = express();

const newBaseURL         = process.env.NEW_BASE_URL         || 'http://example.com';
const redirectStatusCode = process.env.REDIRECT_STATUS_CODE || 302;
const port               = process.env.PORT                 || 5000;

app.get('*', function(request, response) {
  response.redirect(redirectStatusCode, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log(`Redirect to ${newBaseURL} (status:${redirectStatusCode})`);
  console.log(`Listening on ${port}`);
});
