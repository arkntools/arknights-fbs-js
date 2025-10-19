import { writeFile } from 'node:fs/promises';
import JSZip from 'jszip';
import { execAsync } from './utils/exec';

const VERSION = '25.9.23';

const getFlatcDownloadUrl = (name: string) =>
  `https://github.com/google/flatbuffers/releases/download/v${VERSION}/${name}`;

const flatcSetupInfo: Partial<Record<NodeJS.Platform, { name: string; dest: string }>> = {
  linux: {
    name: 'Linux.flatc.binary.g++-13.zip',
    dest: '/usr/local/bin/flatc',
  },
  win32: {
    name: 'Windows.flatc.binary.zip',
    dest: 'C:\\Windows\\System32\\flatc.exe',
  },
};

const flatcVer = await execAsync('flatc --version')
  .then(({ stdout }) => stdout.trim())
  .catch(() => '');

if (flatcVer) {
  console.log(flatcVer);
  process.exit(0);
}

const info = flatcSetupInfo[process.platform];
if (!info) {
  throw new Error(`Setup flatc not implemented for platform ${process.platform}`);
}

const url = getFlatcDownloadUrl(info.name);
console.log('download flatc:', url);
const zipResp = await fetch(url);
console.log('unzip flatc');
const zip = await JSZip.loadAsync(await zipResp.arrayBuffer());

const flatc = zip.file(/^flatc/)[0];
if (!flatc) throw new Error('cannot find flatc in zip');

const file = await flatc.async('nodebuffer');
console.log('write flatc to:', info.dest);

await writeFile(info.dest, file, { mode: 0o755 });
