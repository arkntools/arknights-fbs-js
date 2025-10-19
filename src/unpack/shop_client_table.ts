import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_ShopClientData } from '../fbs/shop_client_table';

export const shop_client_table = (bytes: Uint8Array) => clz_Torappu_ShopClientData.getRootAsclz_Torappu_ShopClientData(new ByteBuffer(bytes)).unpack();
