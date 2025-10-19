import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_EnemyDatabase } from '../fbs/enemy_database';

export const enemy_database = (bytes: Uint8Array) => clz_Torappu_EnemyDatabase.getRootAsclz_Torappu_EnemyDatabase(new ByteBuffer(bytes)).unpack();
