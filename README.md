# memcached-showcase

To install dependencies:

```bash
bun install
```

To run:

```bash
docker compose up -d
```

```bash
bun run src/<memcache-client>/index.ts
```

```bash
node src/<memcache-client>/index.mjs
```

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

> I'm using also .ts file to check types support

## Clients

> Working with Bun √ (yes) | x (no)

- [memcache-client](https://github.com/electrode-io/memcache) √
- [memcache-plus](https://github.com/victorquinn/memcache-plus) x
- [memcached](https://github.com/3rd-Eden/node-memcached) x
- [memjs](https://github.com/memcachier/memjs) √
- [node-memcached](https://github.com/joshbetz/node-memcached) √