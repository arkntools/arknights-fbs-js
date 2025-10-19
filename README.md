# arknights-fbs-js

[![NPM version](https://img.shields.io/npm/v/@arkntools/arknights-fbs-js?style=flat-square)](https://www.npmjs.com/package/@arkntools/arknights-fbs-js)

本仓库为 [MooncellWiki/OpenArknightsFBS](https://github.com/MooncellWiki/OpenArknightsFBS) 的 js 版本，会随其自动更新

## 使用

```ts
import { readFileSync } from 'node:fs';
import { character_table } from '@arkntools/arknights-fbs-js';

const data = character_table(
  new Uint8Array(readFileSync('character_table.bytes')).slice(128),
);

console.log(data);
```
