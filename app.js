const fs = require('fs');
fs.readFile('D:/SLIIT/Year 3 Semester 1/AF/Lab3/Lab03_Node/file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});