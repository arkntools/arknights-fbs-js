import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_StageTable } from '../fbs/stage_table';

export const stage_table = (bytes: Uint8Array) => clz_Torappu_StageTable.getRootAsclz_Torappu_StageTable(new ByteBuffer(bytes)).unpack();
