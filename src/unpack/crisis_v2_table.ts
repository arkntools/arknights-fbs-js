import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CrisisV2SharedData } from '../fbs/crisis_v2_table';

export const crisis_v2_table = (bytes: Uint8Array) => clz_Torappu_CrisisV2SharedData.getRootAsclz_Torappu_CrisisV2SharedData(new ByteBuffer(bytes)).unpack();
