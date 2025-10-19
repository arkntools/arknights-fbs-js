import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_MeetingClueData } from '../fbs/clue_data';

export const clue_data = (bytes: Uint8Array) => clz_Torappu_MeetingClueData.getRootAsclz_Torappu_MeetingClueData(new ByteBuffer(bytes)).unpack();
