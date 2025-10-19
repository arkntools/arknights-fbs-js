import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_ExtraBattleLogData } from '../fbs/extra_battlelog_table';

export const extra_battlelog_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_ExtraBattleLogData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_ExtraBattleLogData(new ByteBuffer(bytes)).unpack();
