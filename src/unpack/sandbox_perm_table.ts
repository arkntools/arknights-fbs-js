import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SandboxPermTable } from '../fbs/sandbox_perm_table';

export const sandbox_perm_table = (bytes: Uint8Array) => clz_Torappu_SandboxPermTable.getRootAsclz_Torappu_SandboxPermTable(new ByteBuffer(bytes)).unpack();
