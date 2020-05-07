import { renderTilesList } from './storiesUtils';

import {
  WmsLayer,
  CRS_EPSG3857,
  CRS_EPSG4326,
  BBox,
  MimeTypes,
  ApiType,
  LayersFactory,
} from '../dist/sentinelHub.esm';

const baseUrl = 'https://proba-v-mep.esa.int/applications/geo-viewer/app/geoserver/ows';
const layerId = 'PROBAV_S5_TOA_100M';
const bbox = new BBox(CRS_EPSG3857, 1487158.82, 5322463.15, 1565430.34, 5400734.67);
const bbox4326 = new BBox(CRS_EPSG4326, 11.9, 42.05, 12.95, 43.09);

export default {
  title: 'WMS - ProbaV',
};

export const getMapURL = () => {
  const img = document.createElement('img');
  img.width = '512';
  img.height = '512';

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = '<h2>GetMapUrl (WMS)</h2>';
  wrapperEl.insertAdjacentElement('beforeend', img);

  const layer = new WmsLayer({ baseUrl, layerId });

  const getMapParams = {
    bbox: bbox,
    fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
    toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
    width: 512,
    height: 512,
    format: MimeTypes.JPEG,
  };
  const imageUrl = layer.getMapUrl(getMapParams, ApiType.WMS);
  img.src = imageUrl;

  return wrapperEl;
};

export const getMapWMS = () => {
  const img = document.createElement('img');
  img.width = '512';
  img.height = '512';

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = '<h2>GetMap with WMS</h2>';
  wrapperEl.insertAdjacentElement('beforeend', img);

  const perform = async () => {
    const layer = new WmsLayer({ baseUrl, layerId });

    const getMapParams = {
      bbox: bbox,
      fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
      toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlob = await layer.getMap(getMapParams, ApiType.WMS);
    img.src = URL.createObjectURL(imageBlob);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const getMapURLGain = () => {
  const imgGainIs1 = document.createElement('img');
  imgGainIs1.width = '512';
  imgGainIs1.height = '512';

  const imgGainIs2 = document.createElement('img');
  imgGainIs2.width = '512';
  imgGainIs2.height = '512';

  const gain = 2;

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = `<h2>GetMapUrl (WMS); no gain vs gain=${gain}</h2>`;
  wrapperEl.insertAdjacentElement('beforeend', imgGainIs1);
  wrapperEl.insertAdjacentElement('beforeend', imgGainIs2);

  const layer = new WmsLayer({ baseUrl, layerId });

  const getMapParams = {
    bbox: bbox,
    fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
    toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
    width: 512,
    height: 512,
    format: MimeTypes.JPEG,
  };
  const imageUrl1 = layer.getMapUrl(getMapParams, ApiType.WMS);
  imgGainIs1.src = imageUrl1;

  const getMapParamsWithGainIs2 = {
    ...getMapParams,
    gain: gain,
  };

  const imageUrl2 = layer.getMapUrl(getMapParamsWithGainIs2, ApiType.WMS);
  imgGainIs2.src = imageUrl2;
  return wrapperEl;
};

export const getMapWMSGain = () => {
  const imgGainIs1 = document.createElement('img');
  imgGainIs1.width = '512';
  imgGainIs1.height = '512';

  const imgGainIs2 = document.createElement('img');
  imgGainIs2.width = '512';
  imgGainIs2.height = '512';

  const gain = 2;

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = `<h2>GetMap with WMS; no gain vs gain=${gain}</h2>`;
  wrapperEl.insertAdjacentElement('beforeend', imgGainIs1);
  wrapperEl.insertAdjacentElement('beforeend', imgGainIs2);

  const perform = async () => {
    const layer = new WmsLayer({ baseUrl, layerId });

    const getMapParams = {
      bbox: bbox,
      fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
      toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlobGainIs1 = await layer.getMap(getMapParams, ApiType.WMS);
    imgGainIs1.src = URL.createObjectURL(imageBlobGainIs1);

    const getMapParamsWithGainIs2 = {
      ...getMapParams,
      gain: gain,
    };

    const imageBlobGainIs2 = await layer.getMap(getMapParamsWithGainIs2, ApiType.WMS);
    imgGainIs2.src = URL.createObjectURL(imageBlobGainIs2);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const getMapURLGamma = () => {
  const imgGammaIs1 = document.createElement('img');
  imgGammaIs1.width = '512';
  imgGammaIs1.height = '512';

  const imgGammaIs2 = document.createElement('img');
  imgGammaIs2.width = '512';
  imgGammaIs2.height = '512';

  const gamma = 2;

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = `<h2>GetMapUrl (WMS); no gamma vs gamma=${gamma}</h2>`;
  wrapperEl.insertAdjacentElement('beforeend', imgGammaIs1);
  wrapperEl.insertAdjacentElement('beforeend', imgGammaIs2);

  const layer = new WmsLayer({ baseUrl, layerId });

  const getMapParams = {
    bbox: bbox,
    fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
    toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
    width: 512,
    height: 512,
    format: MimeTypes.JPEG,
  };
  const imageUrl1 = layer.getMapUrl(getMapParams, ApiType.WMS);
  imgGammaIs1.src = imageUrl1;

  const getMapParamsWithGammaIs2 = {
    ...getMapParams,
    gamma: gamma,
  };

  const imageUrl2 = layer.getMapUrl(getMapParamsWithGammaIs2, ApiType.WMS);
  imgGammaIs2.src = imageUrl2;
  return wrapperEl;
};

export const getMapWMSGamma = () => {
  const imgGammaIs1 = document.createElement('img');
  imgGammaIs1.width = '512';
  imgGammaIs1.height = '512';

  const imgGammaIs2 = document.createElement('img');
  imgGammaIs2.width = '512';
  imgGammaIs2.height = '512';

  const gamma = 2;

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = `<h2>GetMap with WMS; no gamma vs gamma=${gamma}</h2>`;
  wrapperEl.insertAdjacentElement('beforeend', imgGammaIs1);
  wrapperEl.insertAdjacentElement('beforeend', imgGammaIs2);

  const perform = async () => {
    const layer = new WmsLayer({ baseUrl, layerId });

    const getMapParams = {
      bbox: bbox,
      fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
      toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlobGammaIs1 = await layer.getMap(getMapParams, ApiType.WMS);
    imgGammaIs1.src = URL.createObjectURL(imageBlobGammaIs1);

    const getMapParamsWithGammaIs2 = {
      ...getMapParams,
      gamma: gamma,
    };

    const imageBlobGammaIs2 = await layer.getMap(getMapParamsWithGammaIs2, ApiType.WMS);
    imgGammaIs2.src = URL.createObjectURL(imageBlobGammaIs2);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const getMapWmsLayersFactory = () => {
  const img = document.createElement('img');
  img.width = '512';
  img.height = '512';

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = '<h2>GetMap with WMS</h2>';
  wrapperEl.insertAdjacentElement('beforeend', img);

  const perform = async () => {
    const layer = (await LayersFactory.makeLayers(baseUrl, (lId, datasetId) => layerId === lId))[0];

    const getMapParams = {
      bbox: bbox,
      fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
      toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlob = await layer.getMap(getMapParams, ApiType.WMS);
    img.src = URL.createObjectURL(imageBlob);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const findTilesNotImplemented = () => {
  const layer = new WmsLayer({ baseUrl, layerId });
  const containerEl = document.createElement('pre');

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = '<h2>findTiles</h2>';
  wrapperEl.insertAdjacentElement('beforeend', containerEl);

  const perform = async () => {
    const data = await layer.findTiles(
      bbox,
      new Date(Date.UTC(2000, 1 - 1, 1, 0, 0, 0)),
      new Date(Date.UTC(2020, 1 - 1, 15, 23, 59, 59)),
      5,
      0,
    );
    renderTilesList(containerEl, data.tiles);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const findFlyoversNotImplemented = () => {
  const layer = new WmsLayer({ baseUrl, layerId });

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = '<h2>findFlyovers</h2>';

  const flyoversContainerEl = document.createElement('pre');
  wrapperEl.insertAdjacentElement('beforeend', flyoversContainerEl);

  const img = document.createElement('img');
  img.width = '512';
  img.height = '512';
  wrapperEl.insertAdjacentElement('beforeend', img);

  const fromTime = new Date(Date.UTC(2020, 1 - 1, 1, 0, 0, 0));
  const toTime = new Date(Date.UTC(2020, 1 - 1, 15, 23, 59, 59));

  const perform = async () => {
    const flyovers = await layer.findFlyovers(bbox4326, fromTime, toTime, 50, 50);
    flyoversContainerEl.innerHTML = JSON.stringify(flyovers, null, true);

    // prepare an image to show that the number makes sense:
    const getMapParams = {
      bbox: bbox4326,
      fromTime: fromTime,
      toTime: toTime,
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlob = await layer.getMap(getMapParams, ApiType.WMS);
    img.src = URL.createObjectURL(imageBlob);
  };
  perform().then(() => {});

  return wrapperEl;
};

export const findDatesUTC = () => {
  const layer = new WmsLayer({ baseUrl, layerId });

  const wrapperEl = document.createElement('div');
  wrapperEl.innerHTML = `<h2>findDatesUTC</h2>`;

  const containerEl = document.createElement('pre');
  wrapperEl.insertAdjacentElement('beforeend', containerEl);

  const img = document.createElement('img');
  img.width = '512';
  img.height = '512';
  wrapperEl.insertAdjacentElement('beforeend', img);

  const fromTime = new Date(Date.UTC(2020, 1 - 1, 1, 0, 0, 0));
  const toTime = new Date(Date.UTC(2020, 1 - 1, 15, 23, 59, 59));

  const perform = async () => {
    const dates = await layer.findDatesUTC(bbox, fromTime, toTime);
    containerEl.innerHTML = JSON.stringify(dates, null, true);

    const resDateStartOfDay = new Date(new Date(dates[0]).setUTCHours(0, 0, 0, 0));
    const resDateEndOfDay = new Date(new Date(dates[0]).setUTCHours(23, 59, 59, 999));

    // prepare an image to show that the number makes sense:
    const getMapParams = {
      bbox: bbox4326,
      fromTime: resDateStartOfDay,
      toTime: resDateEndOfDay,
      width: 512,
      height: 512,
      format: MimeTypes.JPEG,
    };
    const imageBlob = await layer.getMap(getMapParams, ApiType.WMS);
    img.src = URL.createObjectURL(imageBlob);
  };
  perform().then(() => {});

  return wrapperEl;
};
