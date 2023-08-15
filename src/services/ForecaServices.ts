import { userLocation } from './userLocation';
import { ILocation } from '../types/location.type';
import {
  ILocationInfo,
  TLocation,
  TCurrentInfo,
  TCurrentDataTransform,
  IDailyData,
  IDailyInfo,
  TDailyInfoTransform,
  TDailyDataTransform,
  ISearchInfo,
  TSearchInfoTransform,
  ISearchData,
  TSearchDataTransform,
  TDailySearchTransform,
  TWeatherSearchLoc
} from '../types/Foreca.type';

class ForecaServices {
  _apiAuth = 'https://pfa.foreca.com/authorize/token';
  _apiWeather = 'https://pfa.foreca.com/api/v1/';
  _apiMap = 'https://map-eu.foreca.com/api/v1/';

  getUserLocation = async (): Promise<ILocation> => {
    const userGeo: ILocation = await userLocation();
    return userGeo;
  };
  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };
  getLocation = async (): Promise<ILocationInfo> => {
    const locationData: ILocation = await this.getUserLocation();
    return this.getResource(
      `${this._apiWeather}location/?token=${process.env.TOKEN}&location=${locationData.longitude},${locationData.latitude}`
    );
  };
  getLocationByID = async (id: string | undefined): Promise<TLocation> => {
    const res: ILocationInfo = await this.getResource(
      `${this._apiWeather}location/?token=${process.env.TOKEN}&location=${id}`
    );
    return this._transformLocationData(res);
  };
  getCurrentWheather = async (id: number | undefined): Promise<TCurrentDataTransform> => {
    const res: TCurrentInfo = await this.getResource(
      `${this._apiWeather}current/?token=${process.env.TOKEN}&location=${id}`
    );
    return this._transformCurrentData(res);
  };
  getDailyWheather = async (id: number | undefined): Promise<TDailyInfoTransform> => {
    const res: IDailyInfo = await this.getResource(
      `${this._apiWeather}forecast/daily/?token=${process.env.TOKEN}&location=${id}&dataset=full&periods=12`
    );
    const { forecast } = res;
    return forecast?.map(this._transformDailyData);
  };
  getSearchData = async (search: string): Promise<TSearchInfoTransform> => {
    const res: ISearchInfo = await this.getResource(
      `${this._apiWeather}location/search/${search}?token=${process.env.TOKEN}`
    );
    const { locations } = res;
    return locations?.map(this._transformSearchData);
  };
  getSearchWheather = async (id: string | undefined): Promise<TWeatherSearchLoc> => {
    const res: IDailyInfo = await this.getResource(
      `${this._apiWeather}forecast/daily/?token=${process.env.TOKEN}&location=${id}&dataset=full&periods=3`
    );
    const { forecast } = res;
    return forecast?.map(this._transformSearchWeatherLoc);
  };
  _transformLocationData = (data: ILocationInfo): TLocation => {
    return {
      id: data.id,
      name: data.name,
      country: data.country,
      timezone: data.timezone,
      adminArea: data.adminArea
    };
  };
  _transformCurrentData = (data: TCurrentInfo): TCurrentDataTransform => {
    return {
      symbol: data.current?.symbol,
      symbolPhrase: data.current?.symbolPhrase,
      temperature: data.current?.temperature,
      feelsLikeTemp: data.current?.feelsLikeTemp,
      relHumidity: data.current?.relHumidity,
      windSpeed: data.current?.windSpeed,
      windDirString: data.current?.windDirString,
      precipProb: data.current?.precipProb
    };
  };
  _transformDailyData = (data: IDailyData): TDailyDataTransform => {
    return {
      date: data.date,
      symbol: data.symbol,
      symbolPhrase: data.symbolPhrase,
      maxTemp: data.maxTemp,
      minTemp: data.minTemp,
      maxWindSpeed: data.maxWindSpeed,
      sunrise: data.sunrise,
      sunset: data.sunset,
      confidence: data.confidence
    };
  };
  _transformSearchData = (data: ISearchData): TSearchDataTransform => {
    return {
      id: data.id,
      name: data.name,
      country: data.country,
      adminArea: data.adminArea
    };
  };
  _transformSearchWeatherLoc = (data: IDailyData): TDailySearchTransform => {
    return {
      date: data.date,
      symbol: data.symbol,
      symbolPhrase: data.symbolPhrase,
      maxTemp: data.maxTemp,
      minTemp: data.minTemp,
      maxFeelsLikeTemp: data.maxFeelsLikeTemp,
      minFeelsLikeTemp: data.minFeelsLikeTemp,
      maxRelHumidity: data.maxRelHumidity,
      minRelHumidity: data.minRelHumidity,
      precipAccum: data.precipAccum,
      maxWindSpeed: data.maxWindSpeed,
      maxWindGust: data.maxWindGust,
      precipProb: data.precipProb,
      sunrise: data.sunrise,
      sunset: data.sunset,
      moonrise: data.moonrise,
      moonset: data.moonset,
      minVisibility: data.minVisibility,
      pressure: data.pressure,
      confidence: data.confidence
    };
  };
}

const Foreca = new ForecaServices();

export default Foreca;
