import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_ReplicateTable } from '../fbs/replicate_table';

export const replicate_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_ReplicateTable.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_ReplicateTable(new ByteBuffer(bytes)).unpack();
