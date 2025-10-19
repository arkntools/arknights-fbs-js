import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_RoguelikeTopicTable } from '../fbs/roguelike_topic_table';

export const roguelike_topic_table = (bytes: Uint8Array) => clz_Torappu_RoguelikeTopicTable.getRootAsclz_Torappu_RoguelikeTopicTable(new ByteBuffer(bytes)).unpack();
