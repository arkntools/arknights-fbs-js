import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_HandbookInfoTable } from '../fbs/handbook_info_table';

export const handbook_info_table = (bytes: Uint8Array) => clz_Torappu_HandbookInfoTable.getRootAsclz_Torappu_HandbookInfoTable(new ByteBuffer(bytes)).unpack();
