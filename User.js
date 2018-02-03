'use strict'

var datebase = require ('./index.js');

if (module.parent)
	console.log('User connected');

	
function User(name)
{
	let FirstName = name;
	this.FirstName = function (_name)
	{
			if (!arguments.length)
			return FirstName;
			FirstName = _name;
	
	}
	this.Connect = function ()
	{
	datebase.connect();
	}
	this.GetPhrase = function (_name)
	{
		return datebase.GetPhrase(_name);
	}	






}
exports.User= User;
