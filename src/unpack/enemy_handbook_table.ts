import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_EnemyHandBookDataGroup } from '../fbs/enemy_handbook_table';

export const enemy_handbook_table = (bytes: Uint8Array) => clz_Torappu_EnemyHandBookDataGroup.getRootAsclz_Torappu_EnemyHandBookDataGroup(new ByteBuffer(bytes)).unpack();
