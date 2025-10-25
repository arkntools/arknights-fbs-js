import { mkdir, readdir, readFile, rmdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pull } from 'es-toolkit';
import { execAsync } from './utils/exec';
import { FbsParser } from './utils/fbs';

const FBS_DIR = 'OpenArknightsFBS/FBS';

const omitFiles = ['sandbox_table.fbs'];

const files = pull(await readdir(FBS_DIR), omitFiles).sort();

await Promise.all(
  ['fbs', 'unpack'].map(async dir => {
    await rmdir(join('src', dir), { recursive: true });
    await mkdir(join('src', dir), { recursive: true });
  }),
);

await execAsync(
  `flatc --ts --gen-object-api --no-warnings -o ${join('src', 'fbs')} ${files.map(file => join(FBS_DIR, file)).join(' ')}`,
);

const parsers = await Promise.all(
  files.map(async file => new FbsParser(file, await readFile(join(FBS_DIR, file), 'utf-8'))),
);

await Promise.all(
  parsers.map(parser => writeFile(join('src', 'unpack', `${parser.fileName}.ts`), parser.getTs())),
);

await writeFile(join('src', 'index.ts'), FbsParser.getExports(parsers));
