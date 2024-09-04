import { Memcached } from '@joshbetz/memcached'

const KEY = 'josh-memcached'
const VALUE = 'josh-memcached-nodejs'

const memcached = new Memcached(11211, 'localhost')

await memcached.set(KEY, VALUE)

const value = await memcached.get(KEY)

if (value === VALUE) {
  console.log("expected value cached")
}

process.exit(0)
