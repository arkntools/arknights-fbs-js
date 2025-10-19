import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_Battle_Legion_LegionModeBuffData } from '../fbs/legion_mode_buff_table';

export const legion_mode_buff_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_Battle_Legion_LegionModeBuffData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_Battle_Legion_LegionModeBuffData(new ByteBuffer(bytes)).unpack();
