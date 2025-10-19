import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SimpleKVTable_clz_Torappu_HandbookTeamData } from '../fbs/handbook_team_table';

export const handbook_team_table = (bytes: Uint8Array) => clz_Torappu_SimpleKVTable_clz_Torappu_HandbookTeamData.getRootAsclz_Torappu_SimpleKVTable_clz_Torappu_HandbookTeamData(new ByteBuffer(bytes)).unpack();
