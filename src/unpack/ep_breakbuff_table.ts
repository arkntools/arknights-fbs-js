import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_EPBreakBuffData } from '../fbs/ep_breakbuff_table';

export const ep_breakbuff_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_EPBreakBuffData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_EPBreakBuffData(new ByteBuffer(bytes)).unpack();
