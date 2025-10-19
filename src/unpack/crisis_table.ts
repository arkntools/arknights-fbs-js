import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CrisisClientData } from '../fbs/crisis_table';

export const crisis_table = (bytes: Uint8Array) => clz_Torappu_CrisisClientData.getRootAsclz_Torappu_CrisisClientData(new ByteBuffer(bytes)).unpack();
