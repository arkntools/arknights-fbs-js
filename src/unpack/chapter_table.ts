import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_ChapterData } from '../fbs/chapter_table';

export const chapter_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_ChapterData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_ChapterData(new ByteBuffer(bytes)).unpack();
