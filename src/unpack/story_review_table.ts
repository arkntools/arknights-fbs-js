import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_StoryReviewGroupClientData } from '../fbs/story_review_table';

export const story_review_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_StoryReviewGroupClientData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_StoryReviewGroupClientData(new ByteBuffer(bytes)).unpack();
