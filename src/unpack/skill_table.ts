import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_SkillDataBundle } from '../fbs/skill_table';

export const skill_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_SkillDataBundle.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_SkillDataBundle(new ByteBuffer(bytes)).unpack();
