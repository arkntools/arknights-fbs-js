import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_LevelData } from '../fbs/prts___levels';

export const prts___levels = (bytes: Uint8Array) => clz_Torappu_LevelData.getRootAsclz_Torappu_LevelData(new ByteBuffer(bytes)).unpack();
