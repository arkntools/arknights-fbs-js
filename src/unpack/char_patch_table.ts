import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CharPatchData } from '../fbs/char_patch_table';

export const char_patch_table = (bytes: Uint8Array) => clz_Torappu_CharPatchData.getRootAsclz_Torappu_CharPatchData(new ByteBuffer(bytes)).unpack();
