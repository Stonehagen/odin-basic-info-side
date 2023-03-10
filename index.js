const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
      fs.readFile('./index.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    } else if (req.url === '/about') {
      fs.readFile('./about.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    } else if (req.url === '/contact-me') {
      fs.readFile('./contact-me.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('./404.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
