import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ClimbTowerTable } from '../fbs/climb_tower_table';

export const climb_tower_table = (bytes: Uint8Array) => clz_Torappu_ClimbTowerTable.getRootAsclz_Torappu_ClimbTowerTable(new ByteBuffer(bytes)).unpack();
