'use strict';

var monacoEditor = require('monaco-editor');



Object.keys(monacoEditor).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return monacoEditor[k]; }
	});
});
