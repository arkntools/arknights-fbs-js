import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_RetroStageTable } from '../fbs/retro_table';

export const retro_table = (bytes: Uint8Array) => clz_Torappu_RetroStageTable.getRootAsclz_Torappu_RetroStageTable(new ByteBuffer(bytes)).unpack();
