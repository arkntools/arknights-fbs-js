import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CheckInTable } from '../fbs/checkin_table';

export const checkin_table = (bytes: Uint8Array) => clz_Torappu_CheckInTable.getRootAsclz_Torappu_CheckInTable(new ByteBuffer(bytes)).unpack();
