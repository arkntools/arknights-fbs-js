import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pull } from 'es-toolkit';
import { execAsync } from './utils/exec';
import { FbsParser } from './utils/fbs';

const FBS_DIR = 'OpenArknightsFBS/FBS';

const files = (await readdir(FBS_DIR)).sort();

// 有些文件类型存在冲突（且 OpenArknightsFBS 未修复），因此提前生成，让后面的文件覆盖，避免影响其他文件
const conflictFiles = ['sandbox_table.fbs'];
const genFiles = [...conflictFiles, ...pull([...files], conflictFiles)];

await execAsync(
  `flatc --ts --gen-object-api --no-warnings -o ${join('src', 'fbs')} ${genFiles.map(file => join(FBS_DIR, file)).join(' ')}`,
);

const parsers = await Promise.all(
  files.map(async file => new FbsParser(file, await readFile(join(FBS_DIR, file), 'utf-8'))),
);

await Promise.all(
  parsers.map(parser => writeFile(join('src', 'unpack', `${parser.fileName}.ts`), parser.getTs())),
);

await writeFile(join('src', 'index.ts'), FbsParser.getExports(parsers));
