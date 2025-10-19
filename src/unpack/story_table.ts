import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_StoryData } from '../fbs/story_table';

export const story_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_StoryData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_StoryData(new ByteBuffer(bytes)).unpack();
