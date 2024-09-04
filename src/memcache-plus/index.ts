import MemcachePlus from 'memcache-plus'

const KEY = 'memcache-plus'
const VALUE = 'memcache-plus-bun'

const client = new MemcachePlus()

await client.set(KEY, VALUE)

const value = await client.get(KEY)

if (value === VALUE) {
  console.log("expected value cached")
}

process.exit(0)
