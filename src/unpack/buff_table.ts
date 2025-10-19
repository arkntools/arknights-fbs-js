import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_BuffData } from '../fbs/buff_table';

export const buff_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_BuffData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_BuffData(new ByteBuffer(bytes)).unpack();
