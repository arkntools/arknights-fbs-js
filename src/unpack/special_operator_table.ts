import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_SpecialOperatorTable } from '../fbs/special_operator_table';

export const special_operator_table = (bytes: Uint8Array) => clz_Torappu_SpecialOperatorTable.getRootAsclz_Torappu_SpecialOperatorTable(new ByteBuffer(bytes)).unpack();
