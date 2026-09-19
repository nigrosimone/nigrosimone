### Hi there, I'm [Simone Nigro](https:///sndesign.it/) 👨‍💻

<br/>

<a href="https://www.linkedin.com/in/simonenigro/">
  <img align="left" alt="Simone's Linkedin" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>

<a href="https://stackoverflow.com/users/3043248/simone-nigro?tab=profile">
  <img align="left" alt="Simone's Stackoverflow" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/stackoverflow.svg" />
</a>

<br />

<br/>

<p>
A Skilled FullStack Developer 🚀 from Italy. Always working on some project or learning something new!
</p>

```ts
const mySelf = {
  name: "Simone",
  surname: "Nigro",
  country: "Italy",
  occupation: "FullStack Developer @ ACCA software",
  email: "nigro.simone@gmail.com",
  website: "https://sndesign.it/"
};
```

[![GitHub Stats](https://github-stats-extended.vercel.app/api?username=nigrosimone&include_all_commits=true&theme=light_github)](https://github-stats-extended.vercel.app/api?username=nigrosimone&include_all_commits=true&theme=light_github)

## Open source contributions

497 merged pull requests, 382 of them in projects I do not maintain ([search](https://github.com/pulls?q=is%3Amerged+author%3Anigrosimone)). The ones I would point to first:

| | |
|---|---|
| **[node-postgres](https://github.com/brianc/node-postgres/pull/3736)** · 13k★ | When the connection dies with a pipelined batch in flight, the batch never called back and every query behind it waited forever. Now they fail. |
| **[node-postgres](https://github.com/brianc/node-postgres/pull/3737)** | A portal based query (pg-cursor) in pipeline mode sent rows to the wrong query and killed the process with a TypeError. Now it is rejected with a clear error. |
| **[node-postgres](https://github.com/brianc/node-postgres/pull/3775)** | A/B benchmark on every pull request: PR against base branch, same runner, with base-vs-base rounds to measure the noise, so a ratio is reported only when it moves more than the noise. |
| **[node-postgres](https://github.com/brianc/node-postgres/pull/3568)** | Type parsers cached per column instead of a lookup for every row. |
| **[node-postgres](https://github.com/brianc/node-postgres/pull/3780)** | pg-native did not expose `detail` and `hint` on errors like pg does. Parity test added. |
| **[fast-json-stringify](https://github.com/fastify/fast-json-stringify/pull/689)** · 3.7k★ | `asString` was megamorphic, so V8 never optimized it. Made it monomorphic: long strings from 3.6k to 19.7k ops/sec. |
| **[fast-json-stringify](https://github.com/fastify/fast-json-stringify/pull/817)** | Faster short arrays and objects: inline property checks in the generated code instead of `includes()`, no comma branch per element. |
| **[fast-json-stringify](https://github.com/fastify/fast-json-stringify/pull/686)** | New `unsafe` string format, skips escaping when the caller knows the string is safe. Plus [#713](https://github.com/fastify/fast-json-stringify/pull/713) and [#691](https://github.com/fastify/fast-json-stringify/pull/691) on the same hot path. |
| **[ultimate-express](https://github.com/dimdenGD/ultimate-express/pull/356)** · 1.1k★ | A chunked body over the parser limit called the error handler once per chunk, the second call threw and crashed the server. Any client could take the process down. |
| **[ultimate-express](https://github.com/dimdenGD/ultimate-express/pull/149)** | `ERR_CONTENT_DECODING_FAILED` on compressed chunked responses, fixed by buffering the chunks. Also [#85](https://github.com/dimdenGD/ultimate-express/pull/85) runs the test suite against both express 4 and 5, and [#291](https://github.com/dimdenGD/ultimate-express/pull/291) adds supertest support. 95 merged PRs in total. |
| **[w3-total-cache-fixed](https://github.com/szepeviktor/w3-total-cache-fixed/pull/4)** | 2016, 120 merged PRs on the community fork of W3 Total Cache: [APCu and OPcache backends](https://github.com/szepeviktor/w3-total-cache-fixed/pull/4), [HTTP/2 push for the disk page cache](https://github.com/szepeviktor/w3-total-cache-fixed/pull/433), [first unit tests and CI](https://github.com/szepeviktor/w3-total-cache-fixed/pull/76). |
