import {GeoPoint} from "./geoPoint";

export interface Address {
  streetName?: string | null;
  streetNumber?: string | null;
  apartmentNumber?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  pin?: GeoPoint | null;
}
