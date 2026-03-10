import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_Battle_BakedSpineData } from '../fbs/bake_muzzle_data';

export const bake_muzzle_data = (bytes: Uint8Array) => clz_Torappu_Battle_BakedSpineData.getRootAsclz_Torappu_Battle_BakedSpineData(new ByteBuffer(bytes)).unpack();
