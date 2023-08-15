import { ILocationInfo } from '../../types/Foreca.type';

export type TAppLocationProps = Pick<
  ILocationInfo,
  'id' | 'adminArea' | 'country' | 'timezone' | 'name'
>;
