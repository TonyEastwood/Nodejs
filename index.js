'use strict'

var base;
exports.connect = function ()
{
	 base = require('./data.json');
	console.log('data base connected');
}

exports.GetPhrase = function (_name)
{
	if (!base[_name])
	throw new Eror("ERROR");
	return base[_name];

}
