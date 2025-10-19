import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ZoneTable } from '../fbs/zone_table';

export const zone_table = (bytes: Uint8Array) => clz_Torappu_ZoneTable.getRootAsclz_Torappu_ZoneTable(new ByteBuffer(bytes)).unpack();
