import { ILocation } from '../types/location.type';

export async function userLocation(): Promise<ILocation> {
  const userGeo: ILocation = {
    latitude: 0,
    longitude: 0,
    error: true
  };

  if (!navigator.geolocation) {
    return userGeo;
  } else {
    return new Promise<ILocation>((res, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          userGeo.latitude = position.coords.latitude;
          userGeo.longitude = position.coords.longitude;
          userGeo.error = false;
          res(userGeo);
        },
        (error: { message: string }) => {
          reject(error);
        }
      );
    });
  }
}
