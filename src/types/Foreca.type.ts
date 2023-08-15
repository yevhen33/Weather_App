export interface ILocationInfo {
  id?: number;
  name?: string;
  country?: string;
  timezone?: string;
  language?: string;
  adminArea?: string;
  adminArea2?: string;
  adminArea3?: string;
  lon?: number;
  lat?: number;
}

export type TLocation = Omit<
  ILocationInfo,
  'language' | 'adminArea2' | 'adminArea3' | 'lon' | 'lat'
>;

export interface TCurrentInfo {
  current: ICurrentData | undefined;
}

export type TCurrentDataTransform = Pick<
  ICurrentData,
  | 'symbol'
  | 'symbolPhrase'
  | 'temperature'
  | 'feelsLikeTemp'
  | 'relHumidity'
  | 'windSpeed'
  | 'windDirString'
  | 'precipProb'
>;

export interface IDailyData {
  date?: string;
  symbol?: string;
  symbolPhrase?: string;
  maxTemp?: number;
  minTemp?: number;
  maxFeelsLikeTemp?: number;
  minFeelsLikeTemp?: number;
  maxRelHumidity?: number;
  minRelHumidity?: number;
  maxDewPoint?: number;
  minDewPoint?: number;
  precipAccum?: number;
  snowAccum?: number;
  maxWindSpeed?: number;
  windDir?: number;
  maxWindGust?: number;
  precipProb?: number;
  cloudiness?: number;
  sunrise?: string;
  sunset?: string;
  sunriseEpoch?: number;
  sunsetEpoch?: number;
  moonrise?: string;
  moonset?: string;
  moonPhase?: number;
  uvIndex?: number;
  minVisibility?: number;
  pressure?: number;
  confidence?: string;
  solarRadiationSum?: number;
}

export interface IDailyInfo {
  forecast: IDailyData[] | undefined;
}

export type TDailyInfoTransform = TDailyDataTransform[] | undefined;

export type TDailyDataTransform = Pick<
  IDailyData,
  | 'date'
  | 'symbol'
  | 'symbolPhrase'
  | 'maxTemp'
  | 'minTemp'
  | 'maxWindSpeed'
  | 'sunrise'
  | 'sunset'
  | 'confidence'
>;

export interface ISearchData {
  id?: number;
  name?: string;
  country?: string;
  timezone?: string;
  language?: string;
  adminArea?: string;
  adminArea2?: string;
  adminArea3?: string;
  lon?: number;
  lat?: number;
}

export type TSearchDataTransform = Pick<ISearchData, 'id' | 'name' | 'country' | 'adminArea'>;

export interface ISearchInfo {
  locations: ISearchData[] | undefined;
}

export type TSearchInfoTransform = TSearchDataTransform[] | undefined;

export type TDailySearchTransform = Pick<
  IDailyData,
  | 'date'
  | 'symbol'
  | 'symbolPhrase'
  | 'maxTemp'
  | 'minTemp'
  | 'maxFeelsLikeTemp'
  | 'minFeelsLikeTemp'
  | 'maxRelHumidity'
  | 'minRelHumidity'
  | 'precipAccum'
  | 'maxWindSpeed'
  | 'maxWindGust'
  | 'precipProb'
  | 'sunrise'
  | 'sunset'
  | 'moonrise'
  | 'moonset'
  | 'minVisibility'
  | 'pressure'
  | 'confidence'
>;

export type TWeatherSearchLoc = TDailySearchTransform[] | undefined;

interface ICurrentData {
  time?: string;
  symbol?: string;
  symbolPhrase?: string;
  temperature?: number;
  feelsLikeTemp?: number;
  relHumidity?: number;
  dewPoint?: number;
  windSpeed?: number;
  windDir?: number;
  windDirString?: string;
  windGust?: number;
  precipProb?: number;
  precipRate?: number;
  cloudiness?: number;
  thunderProb?: number;
  uvIndex?: number;
  pressure?: number;
  visibility?: number;
}
