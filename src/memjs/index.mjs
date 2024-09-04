import memjs from 'memjs'

const KEY = 'memjs'
const VALUE = 'memjs-nodejs'

const memcached = memjs.Client.create()

await memcached.set(KEY, VALUE)

const value = await memcached.get(KEY)

if (value.value.toString() === VALUE) {
  console.log("expected value cached")
}

process.exit(0)
