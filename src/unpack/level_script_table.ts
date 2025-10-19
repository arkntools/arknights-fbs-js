import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_Battle_LevelScriptDataMap } from '../fbs/level_script_table';

export const level_script_table = (bytes: Uint8Array) => clz_Torappu_Battle_LevelScriptDataMap.getRootAsclz_Torappu_Battle_LevelScriptDataMap(new ByteBuffer(bytes)).unpack();
