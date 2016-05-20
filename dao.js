"use strict"

function n(n, c){
	return Math.floor((Math.random() * n) + c||0)
}

function d(m, n){
	var agg= 0
	for(var i = 0; i< m; ++i){
		agg += n(n)
	}
	return agg
}

function dArr(m, n){
	var agg= new Array(m)
	for(var i = 0; i < m; ++i){
		agg[i]= n(n)
	}
	return agg
}

function d2(m, n){
	return dArr(m, n).reduce(function(i, v){ return i+v }, 0)
}

function findD (argv){
	argv = argv || process.argv
	for(var i in argv){
		var arg= argv[i]
		if(i === "-d"){
			var t = argv[i+1]
		}
	}
}

let _d = /(\d+)d(\d+),?/gi

function * parseD (str){
	// TODO: clone the 
	var exec = new RegExp(_d).exec(str)
	if(exec){
		yield exec
	}
	
}

let c = 60 * 1000 // minutes

function dao(fn){
	var
		d= findD(),
		parser= parseD(d),
		val
	while(!!(val = parser.next)){
		var ms = val * c
		setTimeout(fn, ms)
	}
}

module.exports.n = n
module.exports.d = d
module.exports.dArr = dArr
module.exports.d2 = d2
module.exports.findD = findD
module.exports._d = _d
module.exports.parseD = parseD
module.exports.c = c
module.exports.dao = dao
