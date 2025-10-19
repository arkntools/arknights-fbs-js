import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_CharacterData_MasterDataBundle } from '../fbs/char_master_table';

export const char_master_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_CharacterData_MasterDataBundle.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_CharacterData_MasterDataBundle(new ByteBuffer(bytes)).unpack();
