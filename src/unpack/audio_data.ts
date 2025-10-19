import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_Audio_Middleware_Data_TorappuAudioData } from '../fbs/audio_data';

export const audio_data = (bytes: Uint8Array) => clz_Torappu_Audio_Middleware_Data_TorappuAudioData.getRootAsclz_Torappu_Audio_Middleware_Data_TorappuAudioData(new ByteBuffer(bytes)).unpack();
