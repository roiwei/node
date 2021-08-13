var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //res.write("The date and time are currently: " + dt.myDateTime());
//   //res.write(req.url);
//   //res.end();
//   ////
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
/////////////////////////////////////////////////
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

//}).listen(8080); close createServer line 18

// // Delete "mynewfile2.txt":
// fs.unlink('mynewfile2.txt', function (err) { ///dont chack if the filr exsist so have to be inside if or outsyde {}
//   if (err) throw err;
//   console.log('File deleted!');
// });
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { ///dont chack if the filr exsist so have to be inside if or outsyde {}
//   if (err) throw err;
//   console.log('File Renamed!');
// });


var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');


// http.createServer(function (req, res) { // open http://localhost:8080/summer.html as summer.html (or wunter otherwise) 
//   var q = url.parse(req.url, true); 
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);

////////////
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

// //Assign the event handler to an event:
// s = fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// eventEmitter.on(s, myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit();
////////////////////////////////////
//const express= require('express');
  
//var app= express();
//////////
var formidable = require('formidable');
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      //var newpath = 'C:/Users/roiwe/OneDrive/Desktop/node.js/' + files.filetoupload.name;
      var newpath = 'https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/environment/dashboard?applicationName=RoiNodeJS&environmentId=e-yz2czxmxsg' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved to C:/Users/roiwe/OneDrive/Desktop/node.js/' + files.filetoupload.name);
        res.end();
        
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
  
}).listen(8080);
/////////////////////////////////////////////////////////////////////////////////

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'roiweissr@gmail.com',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'roiweissr@gmail.com',
//   to: 'roiweissr@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });