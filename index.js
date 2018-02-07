#!/usr/bin/env node

var program = require('commander');

program
	.arguments('<file>')
	.option('-u, --username <username>', 'The user of authentication as')
	.option('-p, --password <password>', 'The user\' password')
	.action(function(file) {
		console.log('user: %s pass: %s file: %s',
			program.username, program.password, file);
	})
	.parse(process.argv);
