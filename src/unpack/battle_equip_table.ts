import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_BattleEquipPack } from '../fbs/battle_equip_table';

export const battle_equip_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_BattleEquipPack.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_BattleEquipPack(new ByteBuffer(bytes)).unpack();
