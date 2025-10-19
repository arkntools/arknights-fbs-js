import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CharMetaTable } from '../fbs/char_meta_table';

export const char_meta_table = (bytes: Uint8Array) => clz_Torappu_CharMetaTable.getRootAsclz_Torappu_CharMetaTable(new ByteBuffer(bytes)).unpack();
