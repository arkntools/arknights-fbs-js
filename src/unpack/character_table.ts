import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_CharacterData } from '../fbs/character_table';

export const character_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_CharacterData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_CharacterData(new ByteBuffer(bytes)).unpack();
