import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_GameDataConsts } from '../fbs/gamedata_const';

export const gamedata_const = (bytes: Uint8Array) => clz_Torappu_GameDataConsts.getRootAsclz_Torappu_GameDataConsts(new ByteBuffer(bytes)).unpack();
