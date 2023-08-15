import {GeoPoint} from "./geoPoint";
import {FormGroup} from "@angular/forms";

export class Address {
  streetName?: string | null;
  streetNumber?: string | null;
  apartmentNumber?: string | null;
  city?: string | null;
  zipCode?: string | null;
  country?: string | null;
  pin?: GeoPoint | null;

  static fromFormGroup(addressFormGroup: FormGroup) {
    return {
      streetName: addressFormGroup.get('streetNameCtrl')?.value,
      streetNumber: addressFormGroup.get('streetNumberCtrl')?.value,
      apartmentNumber: addressFormGroup.get('apartmentNumberCtrl')?.value,
      city: addressFormGroup.get('cityCtrl')?.value,
      zipCode: addressFormGroup.get('zipCodeCtrl')?.value,
      country: addressFormGroup.get('countryCtrl')?.value,
      pin: new GeoPoint(123, 456)
    }
  }
}
