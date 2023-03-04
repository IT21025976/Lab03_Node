const fs = require('fs');
fs.writeFile('D:/SLIIT/Year 3 Semester 1/AF/Lab3/Lab03_Node/file1.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});