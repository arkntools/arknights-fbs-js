import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CharmData } from '../fbs/charm_table';

export const charm_table = (bytes: Uint8Array) => clz_Torappu_CharmData.getRootAsclz_Torappu_CharmData(new ByteBuffer(bytes)).unpack();
