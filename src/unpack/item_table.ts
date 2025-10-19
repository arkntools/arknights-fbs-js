import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_InventoryData } from '../fbs/item_table';

export const item_table = (bytes: Uint8Array) => clz_Torappu_InventoryData.getRootAsclz_Torappu_InventoryData(new ByteBuffer(bytes)).unpack();
