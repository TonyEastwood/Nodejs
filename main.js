'use strict'
var jss = require('./data.json');
var uss = require('./User.js');
var fs = require('fs');
var data2 = fs.readFileSync('data.json');
var words = JSON.parse(data2);
console.log(words);
//////////////////////////
var obj = {
   table: []
};

fs.exists('data.json', function(exists){
    if(exists){
    	var i =0;
        console.log("yes file exists");
        fs.readFile('data.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); 
        
        for (i=0; i<5 ; i++){
        	if (!Array.isArray(obj.table)) {
    obj.table = [];
}
	
        obj.table.push({hi: 1, age:2});
        }
        var json = JSON.stringify(obj); 
        fs.writeFile('data.json', json); 
        }});
    } else {
        console.log("file not exists")
        for ( i=0; i<5 ; i++){
        obj.table.push({hi: i, age:i*i});
        }
        var json = JSON.stringify(obj);
        fs.writeFile('data.json', json);
        }
    });
///////////////////////////////////////
console.log(words);



var us1 = new uss.User('Name1');
console.log(us1.FirstName());
us1.FirstName('Name2');
console.log(us1.FirstName());
us1.Connect();
console.log(us1.GetPhrase('hi'));
console.log(us1.GetPhrase('age'));
