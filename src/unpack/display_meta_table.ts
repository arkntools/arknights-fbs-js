import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_DisplayMetaData } from '../fbs/display_meta_table';

export const display_meta_table = (bytes: Uint8Array) => clz_Torappu_DisplayMetaData.getRootAsclz_Torappu_DisplayMetaData(new ByteBuffer(bytes)).unpack();
