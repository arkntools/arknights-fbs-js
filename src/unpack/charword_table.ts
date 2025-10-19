import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CharWordTable } from '../fbs/charword_table';

export const charword_table = (bytes: Uint8Array) => clz_Torappu_CharWordTable.getRootAsclz_Torappu_CharWordTable(new ByteBuffer(bytes)).unpack();
