import { ByteBuffer } from 'flatbuffers';
import { clz_Torappu_CampaignTable } from '../fbs/campaign_table';

export const campaign_table = (bytes: Uint8Array) => clz_Torappu_CampaignTable.getRootAsclz_Torappu_CampaignTable(new ByteBuffer(bytes)).unpack();
