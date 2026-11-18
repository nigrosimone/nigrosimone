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

575 merged pull requests, 449 of them in projects I do not maintain ([search](https://github.com/pulls?q=is%3Amerged+author%3Anigrosimone)). The ones I would point to first:

| | |
|---|---|
| **[Node.js](https://github.com/nodejs/node) · 123k★** | [#66316](https://github.com/nodejs/node/pull/66316): `node::MakeCallback`, the call every native addon uses to enter JavaScript, from 202-208 to 155-159 ns: no Environment lookups and no global handle on each call.<br><br>[#66344](https://github.com/nodejs/node/pull/66344): the async resource stack was freed and allocated again on every callback. On Windows from 136-147 to 6 ns.<br><br>Also: [#66326](https://github.com/nodejs/node/pull/66326) AsyncResource +29%, [#66395](https://github.com/nodejs/node/pull/66395) small costs in `MakeCallback` +12%. |
| **[Angular](https://github.com/angular/angular) · 101k★** | [#70991](https://github.com/angular/angular/pull/70991): the runtime of `animate.enter` and `animate.leave` was in every bundle, also in apps that never use them. Now it is tree-shakable: the default `ng new` app is 2.1 KB smaller. |
| **[node-postgres](https://github.com/brianc/node-postgres) · 13k★** | [#3736](https://github.com/brianc/node-postgres/pull/3736): when the connection dies with a pipelined batch in flight, the batch never called back and every query behind it waited forever. Now they fail.<br><br>[#3737](https://github.com/brianc/node-postgres/pull/3737): a portal based query (pg-cursor) in pipeline mode sent rows to the wrong query and killed the process with a TypeError. Now it is rejected with a clear error.<br><br>[#3775](https://github.com/brianc/node-postgres/pull/3775): A/B benchmark on every pull request: PR against base branch, same runner, with base-vs-base rounds to measure the noise, so a ratio is reported only when it moves more than the noise.<br><br>Also: [#3568](https://github.com/brianc/node-postgres/pull/3568) type parsers cached per column, [#3780](https://github.com/brianc/node-postgres/pull/3780) `detail` and `hint` on pg-native errors. |
| **[fast-json-stringify](https://github.com/fastify/fast-json-stringify) · 3.7k★** | [#689](https://github.com/fastify/fast-json-stringify/pull/689): `asString` was megamorphic, so V8 never optimized it. Made it monomorphic: long strings from 3.6k to 19.7k ops/sec.<br><br>[#865](https://github.com/fastify/fast-json-stringify/pull/865): dates formatted without a second `Date` and `toISOString()`: date-time 3x faster, date and time 9x. Also fixed `asTime` on years over 9999.<br><br>[#817](https://github.com/fastify/fast-json-stringify/pull/817): faster short arrays and objects: inline property checks in the generated code instead of `includes()`, no comma branch per element.<br><br>Also: [#686](https://github.com/fastify/fast-json-stringify/pull/686) `unsafe` string format, [#713](https://github.com/fastify/fast-json-stringify/pull/713) JSON strings cached into constants, [#691](https://github.com/fastify/fast-json-stringify/pull/691) regular expression only for short input. |
| **[Ts.ED](https://github.com/tsedio/tsed) · 3.1k★** | [#3485](https://github.com/tsedio/tsed/pull/3485): new platform `@tsed/platform-fulmine`: Ts.ED applications on fulmine.js, the Express 5 API on uWebSockets.js.<br><br>[#3532](https://github.com/tsedio/tsed/pull/3532): `@tsed/socketio` could not start on that platform. Now it attaches to the uWebSockets.js app.<br><br>Also: [#3528](https://github.com/tsedio/tsed/pull/3528) deepObject style on generic query models, [#3486](https://github.com/tsedio/tsed/pull/3486) json-mapper without copying the options. |
| **[ultimate-express](https://github.com/dimdenGD/ultimate-express) · 1.1k★** | [#356](https://github.com/dimdenGD/ultimate-express/pull/356): a chunked body over the parser limit called the error handler once per chunk, the second call threw and crashed the server. Any client could take the process down.<br><br>[#149](https://github.com/dimdenGD/ultimate-express/pull/149): `ERR_CONTENT_DECODING_FAILED` on compressed chunked responses, fixed by buffering the chunks.<br><br>Also: [#85](https://github.com/dimdenGD/ultimate-express/pull/85) test suite against both express 4 and 5, [#291](https://github.com/dimdenGD/ultimate-express/pull/291) supertest support. 95 merged PRs in total. |
| **[w3-total-cache-fixed](https://github.com/szepeviktor/w3-total-cache-fixed)** | 2016, 120 merged PRs on the community fork of W3 Total Cache.<br><br>Also: [#4](https://github.com/szepeviktor/w3-total-cache-fixed/pull/4) APCu and OPcache backends, [#433](https://github.com/szepeviktor/w3-total-cache-fixed/pull/433) HTTP/2 push for the disk page cache, [#76](https://github.com/szepeviktor/w3-total-cache-fixed/pull/76) first unit tests and CI. |
