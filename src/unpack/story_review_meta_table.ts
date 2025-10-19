import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_StoryReviewMetaTable } from '../fbs/story_review_meta_table';

export const story_review_meta_table = (bytes: Uint8Array) => clz_Torappu_StoryReviewMetaTable.getRootAsclz_Torappu_StoryReviewMetaTable(new ByteBuffer(bytes)).unpack();
