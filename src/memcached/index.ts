import Memcached from 'memcached'
import b from 'bluebird'

const KEY = 'memcached'
const VALUE = 'memcached-bun'

const client = b.promisifyAll(new Memcached('localhost:11211'))

await client.setAsync(KEY, VALUE, 10)

const value = await client.getAsync(KEY)

if (value === VALUE) {
  console.log("expected value cached")
}

process.exit(0)
