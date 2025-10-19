import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_OpenServerSchedule } from '../fbs/open_server_table';

export const open_server_table = (bytes: Uint8Array) => clz_Torappu_OpenServerSchedule.getRootAsclz_Torappu_OpenServerSchedule(new ByteBuffer(bytes)).unpack();
