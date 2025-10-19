import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_Battle_Cooperate_CooperateModeBattleData } from '../fbs/cooperate_battle_table';

export const cooperate_battle_table = (bytes: Uint8Array) => clz_Torappu_Battle_Cooperate_CooperateModeBattleData.getRootAsclz_Torappu_Battle_Cooperate_CooperateModeBattleData(new ByteBuffer(bytes)).unpack();
