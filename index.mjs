import Memcached from 'memcached';
import b from 'bluebird';

const MEMCACHED_HOST = '0.0.0.0';
const MEMCACHED_PORT = 11211;

const MY_KEY = 'myKey';
const MY_VALUE = 'myValue';
const TTL = 20;

const client = b.promisifyAll(new Memcached(`${MEMCACHED_HOST}:${MEMCACHED_PORT}`));

try {
	console.log(`Trying setting cache ${MY_KEY}:${MY_VALUE} (key:value) with ${TTL}s as TTL`);
	await client.setAsync(MY_KEY, MY_VALUE, TTL);
	const cached = await client.getAsync('myKey');
	console.log('Cached value: ', cached);
} catch (e) {
	console.error('Error: ', e);
	console.log('Exiting with error...');
	process.exit(1);
}

console.log('Exiting...');

process.exit(0);

