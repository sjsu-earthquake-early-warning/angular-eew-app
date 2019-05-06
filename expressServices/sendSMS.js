const https = require('https');
const express = require('express')
const fs = require('fs');
const app = express();

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

// Create publish parameters

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
  */

app.get('/sendSMS/add', (req, res) => {
    var params = {
      Message:   req.query.sms, /* required */
      PhoneNumber: req.query.phone_no,
    };

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
      function(data) {
        console.log("MessageID is " + data.MessageId);
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
});


https.createServer({
  key: fs.readFileSync('certs/eewkey.pem'),
  cert: fs.readFileSync('certs/eewchain.pem')
}, app).listen(3005, () => {
  console.log('Listening...See content at https://sjsueew.tk:3005/sendSMS/add')
})

// Example usage: https://engrdudes.tk:3005/insertEmp
// /add?emp_no=999997&first_name=Tai&last_name=Dao&date=12/21/1990&salary=100000&dept_no=d005&dept_name=Development


// https://sjsueew.tk:3005/sendSMS/add?phone_no=14084598622&sms=HELLOWORLD