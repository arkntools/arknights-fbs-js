import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_TipTable } from '../fbs/tip_table';

export const tip_table = (bytes: Uint8Array) => clz_Torappu_TipTable.getRootAsclz_Torappu_TipTable(new ByteBuffer(bytes)).unpack();
