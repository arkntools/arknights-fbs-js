import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SandboxTable } from '../fbs/sandbox_table';

export const sandbox_table = (bytes: Uint8Array) => clz_Torappu_SandboxTable.getRootAsclz_Torappu_SandboxTable(new ByteBuffer(bytes)).unpack();
