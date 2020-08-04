const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, " Dean Infotech Pvt. Ltd since its inception in 1996, has transformed itself from a computer training institute to a complete Information Technology service and solutions providing company. By using creativity of advance technology to provide unique solutions our clients refer to Dean Infotech as the ‘Dean of Information Technology.");
    result = data.replace(/\$OG_IMAGE/g, 'https://www.deaninfotech.com/images/Dean-infotech-effect-on.jpg');
    response.send(result);
  });
});

app.get('/about', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'About Page');
    data = data.replace(/\$OG_DESCRIPTION/g, " We build the foundation for the intellective business by working with upcoming technologies to provide a better customer experience through personalized services and enhanced collaboration.");
    result = data.replace(/\$OG_IMAGE/g, 'https://www.deaninfotech.com/images/Dean-infotech-effect-on.jpg');
    response.send(result);
  });
});

app.get('/contact', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "We offer edge cutting solutions that fulfil your business needs");
    result = data.replace(/\$OG_IMAGE/g, 'https://www.deaninfotech.com/images/Dean-infotech-effect-on.jpg');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));