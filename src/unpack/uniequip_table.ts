import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_UniEquipTable } from '../fbs/uniequip_table';

export const uniequip_table = (bytes: Uint8Array) => clz_Torappu_UniEquipTable.getRootAsclz_Torappu_UniEquipTable(new ByteBuffer(bytes)).unpack();
