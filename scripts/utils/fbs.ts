const removeExtension = (fileName: string) => fileName.replace(/\.[^.]+$/, '');

export class FbsParser {
  readonly fileName: string;
  readonly rootTypeName: string;

  constructor(fileName: string, fbsContent: string) {
    this.fileName = removeExtension(fileName);
    const name = fbsContent.match(/\sroot_type\s+([^\s;]+);/)?.[1];
    if (!name) {
      throw new Error(`Root type not found in ${fileName}`);
    }
    this.rootTypeName = name;
  }

  static getExports(parsers: FbsParser[]) {
    return `${parsers.map(parser => parser.getExport()).join('\n')}\n`;
  }

  getTs() {
    return `import { ByteBuffer } from 'flatbuffers';
import { ${this.rootTypeName} } from '../fbs/${this.fileName}';

export const ${this.fileName} = (bytes: Uint8Array) => ${this.rootTypeName}.getRootAs${this.rootTypeName}(new ByteBuffer(bytes)).unpack();
`;
  }

  getExport() {
    return `export * from './unpack/${this.fileName}';`;
  }
}
