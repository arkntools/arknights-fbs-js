import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_Resource_ResourceManifest } from '../fbs/resource_manifest';

export const resource_manifest = (bytes: Uint8Array) => clz_Torappu_Resource_ResourceManifest.getRootAsclz_Torappu_Resource_ResourceManifest(new ByteBuffer(bytes)).unpack();
