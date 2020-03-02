import { Moment } from 'moment';

import { DATASET_S2L2A } from 'src/layer/dataset';
import { AbstractSentinelHubV3WithCCLayer } from './AbstractSentinelHubV3WithCCLayer';
import { ProcessingPayload } from 'src/layer/processing';
import { BBox } from 'src/bbox';

export class S2L2ALayer extends AbstractSentinelHubV3WithCCLayer {
  public readonly dataset = DATASET_S2L2A;

  protected async updateProcessingGetMapPayload(payload: ProcessingPayload): Promise<ProcessingPayload> {
    payload.input.data[0].dataFilter.maxCloudCoverage = this.maxCloudCoverPercent;
    return payload;
  }

  protected getWmsGetMapUrlAdditionalParameters(): Record<string, any> {
    return {
      maxcc: this.maxCloudCoverPercent,
    };
  }

  public async findDates(
    bbox: BBox,
    fromTime: Moment,
    toTime: Moment,
    datasetSpecificParameters?: {
      maxCloudCoverage?: number;
    },
  ): Promise<Moment[]> {
    const maxCC = datasetSpecificParameters && datasetSpecificParameters.maxCloudCoverage
      ? datasetSpecificParameters.maxCloudCoverage
      : undefined;

    return super.findDates(bbox, fromTime, toTime, {
      maxCloudCoverage: maxCC,
    });
  }
}
