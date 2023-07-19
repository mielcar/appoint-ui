import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Country} from "../../model/country";
import {FacilityService} from "../../service/facility.service";
import {Owner} from "../../model/owner";
import {Address} from "../../model/address";
import {GeoPoint} from "../../model/geoPoint";

@Component({
  selector: 'app-facility-new',
  templateUrl: './facility-new.component.html',
  styleUrls: ['./facility-new.component.css']
})
export class FacilityNewComponent {

  countries: Country[] = [new Country('Cyprus', 'CYPRUS')];

  generalFormGroup = this._formBuilder.group({
    nameCtrl: ['Paweł Tomek', Validators.required],
    companyCtrl: ['Appoint', Validators.required],
    phoneCountryCtrl: ['CYPRUS', Validators.required],
    phoneCtrl: ['96972939', Validators.required]
  });

  addressFormGroup = this._formBuilder.group({
    streetNameCtrl: [''],
    streetNumberCtrl: [''],
    apartmentNumberCtrl: [''],
    cityCtrl: ['Larnaca', Validators.required],
    zipCodeCtrl: ['7000', Validators.required],
    countryCtrl: ['CYPRUS', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private facilityService: FacilityService) {
  }

  createNewFacility() {
    const facilityName = this.generalFormGroup.get('companyCtrl')?.value || '';
    const owner = this.createOwner();
    const address = this.createAddress();
    this.facilityService.createFacility(facilityName, owner, address).subscribe(facility => console.log(facility));
  }

  private createOwner(): Owner {
    return {
      name: this.generalFormGroup.get('nameCtrl')?.value,
      phoneNumber: this.generalFormGroup.get('phoneCtrl')?.value,
      phoneNumberCountry: this.generalFormGroup.get('phoneCountryCtrl')?.value
    }
  }

  private createAddress(): Address {
    return {
      streetName: this.addressFormGroup.get('streetNameCtrl')?.value,
      streetNumber: this.addressFormGroup.get('streetNumberCtrl')?.value,
      apartmentNumber: this.addressFormGroup.get('apartmentNumberCtrl')?.value,
      city: this.addressFormGroup.get('cityCtrl')?.value,
      zipCode: this.addressFormGroup.get('zipCodeCtrl')?.value,
      country: this.addressFormGroup.get('countryCtrl')?.value,
      pin: new GeoPoint(123, 456)
    }
  }
}
