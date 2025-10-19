import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_MissionTable } from '../fbs/mission_table';

export const mission_table = (bytes: Uint8Array) => clz_Torappu_MissionTable.getRootAsclz_Torappu_MissionTable(new ByteBuffer(bytes)).unpack();
