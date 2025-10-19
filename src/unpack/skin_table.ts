import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SkinTable } from '../fbs/skin_table';

export const skin_table = (bytes: Uint8Array) => clz_Torappu_SkinTable.getRootAsclz_Torappu_SkinTable(new ByteBuffer(bytes)).unpack();
