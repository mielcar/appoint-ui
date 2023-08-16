import {PhoneNumber} from "./phone-number";
import {FormGroup} from "@angular/forms";

export class Owner {

  name?: string | null;

  phoneNumber?: PhoneNumber | null;

  static fromFormGroup(generalFormGroup: FormGroup) {
    const phoneNumberCountry = generalFormGroup.get('phoneCountryCtrl')?.value;
    return {
      name: generalFormGroup.get('nameCtrl')?.value,
      phoneNumber: {number: generalFormGroup.get('phoneCtrl')?.value, country: phoneNumberCountry}
    }
  }
}
