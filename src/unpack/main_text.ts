import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_LanguageData } from '../fbs/main_text';

export const main_text = (bytes: Uint8Array) => clz_Torappu_LanguageData.getRootAsclz_Torappu_LanguageData(new ByteBuffer(bytes)).unpack();
