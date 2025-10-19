import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ActivityTable } from '../fbs/activity_table';

export const activity_table = (bytes: Uint8Array) => clz_Torappu_ActivityTable.getRootAsclz_Torappu_ActivityTable(new ByteBuffer(bytes)).unpack();
