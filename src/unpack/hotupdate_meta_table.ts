import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_HotUpdateMetaTable } from '../fbs/hotupdate_meta_table';

export const hotupdate_meta_table = (bytes: Uint8Array) => clz_Torappu_HotUpdateMetaTable.getRootAsclz_Torappu_HotUpdateMetaTable(new ByteBuffer(bytes)).unpack();
