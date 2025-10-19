import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_MedalData } from '../fbs/medal_table';

export const medal_table = (bytes: Uint8Array) => clz_Torappu_MedalData.getRootAsclz_Torappu_MedalData(new ByteBuffer(bytes)).unpack();
