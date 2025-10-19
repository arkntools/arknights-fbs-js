import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_BuildingData } from '../fbs/building_data';

export const building_data = (bytes: Uint8Array) => clz_Torappu_BuildingData.getRootAsclz_Torappu_BuildingData(new ByteBuffer(bytes)).unpack();
