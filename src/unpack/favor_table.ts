import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_FavorTable } from '../fbs/favor_table';

export const favor_table = (bytes: Uint8Array) => clz_Torappu_FavorTable.getRootAsclz_Torappu_FavorTable(new ByteBuffer(bytes)).unpack();
