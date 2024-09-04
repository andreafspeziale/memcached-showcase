import { MemcacheClient } from 'memcache-client'

const KEY = 'memcache-client'
const VALUE = 'memcache-client-bun'

const client = new MemcacheClient({ server: 'localhost:11211' })

await client.set(KEY, VALUE)

const value = await client.get(KEY)

if (value.value === VALUE) {
  console.log("expected value cached")
}

process.exit(0)
