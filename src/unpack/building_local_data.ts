import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_BuildingData_BuildingLocalData } from '../fbs/building_local_data';

export const building_local_data = (bytes: Uint8Array) => clz_Torappu_BuildingData_BuildingLocalData.getRootAsclz_Torappu_BuildingData_BuildingLocalData(new ByteBuffer(bytes)).unpack();
