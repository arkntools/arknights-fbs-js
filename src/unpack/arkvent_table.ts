import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ArkventData } from '../fbs/arkvent_table';

export const arkvent_table = (bytes: Uint8Array) => clz_Torappu_ArkventData.getRootAsclz_Torappu_ArkventData(new ByteBuffer(bytes)).unpack();
