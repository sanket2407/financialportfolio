var redis = require("redis");
var client = redis.createClient(6379,"127.0.0.1");

function getRedisConnection(){
	return client;
}

exports.getRedisConnection = getRedisConnection;