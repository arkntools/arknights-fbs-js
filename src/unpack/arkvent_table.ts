import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ArkOdcTable } from '../fbs/arkvent_table';

export const arkvent_table = (bytes: Uint8Array) => clz_Torappu_ArkOdcTable.getRootAsclz_Torappu_ArkOdcTable(new ByteBuffer(bytes)).unpack();
