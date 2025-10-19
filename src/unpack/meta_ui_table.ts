import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_MetaUIDisplayTable } from '../fbs/meta_ui_table';

export const meta_ui_table = (bytes: Uint8Array) => clz_Torappu_MetaUIDisplayTable.getRootAsclz_Torappu_MetaUIDisplayTable(new ByteBuffer(bytes)).unpack();
