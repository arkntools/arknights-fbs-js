import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_GachaData } from '../fbs/gacha_table';

export const gacha_table = (bytes: Uint8Array) => clz_Torappu_GachaData.getRootAsclz_Torappu_GachaData(new ByteBuffer(bytes)).unpack();
