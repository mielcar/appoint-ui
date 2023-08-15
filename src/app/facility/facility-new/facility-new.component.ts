import {Component} from '@angular/core';
import {FormBuilder, Validators,} from "@angular/forms";
import {Country} from "../../model/country";
import {FacilityService} from "../../service/facility.service";
import {Owner} from "../../model/owner";
import {Address} from "../../model/address";
import {CreateFacilityRequest} from "../../request/create-facility-request";
import {WorkMode} from "../../model/work-mode";
import {OnSiteVisitPaymentType} from "../../model/on-site-visit-payment-type";

@Component({
  selector: 'app-facility-new',
  templateUrl: './facility-new.component.html',
  styleUrls: ['./facility-new.component.css']
})
export class FacilityNewComponent {

  defaultProductCategoryId = 'fd362b77-e7ed-4139-af97-83e132a65b2a';

  countries: Country[] = [new Country('Cyprus', 'CYPRUS')];

  paymentTypes: string[] = Object.values(OnSiteVisitPaymentType)
    .filter((v) => isNaN(Number(v)))
    .map(v => v as string);

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

  workModeFormGroup = this._formBuilder.group({
    stationaryCtrl: [false],
    onSiteVisitCtrl: [false],
    maxDistanceCtrl: [123],
    paymentTypeCtrl: ['FIXED'],
    paymentValueCtrl: [456],
    additionalRulesCtrl: ['additional rules']
  });

  constructor(private _formBuilder: FormBuilder,
              private facilityService: FacilityService) {
  }

  createNewFacility() {
    const facilityName = this.generalFormGroup.get('companyCtrl')?.value || '';
    const owner = Owner.fromFormGroup(this.generalFormGroup);
    const address = Address.fromFormGroup(this.addressFormGroup);
    const workMode = WorkMode.fromFormGroup(this.workModeFormGroup);
    const createFacilityRequest = new CreateFacilityRequest(facilityName, owner, address, this.defaultProductCategoryId, workMode);
    this.facilityService.createFacility(createFacilityRequest).subscribe(facility => console.log(facility));
  }

  shouldShowPaymentValueField() {
    const paymentType = this.workModeFormGroup.controls['paymentTypeCtrl'].value
    return paymentType !== null && [OnSiteVisitPaymentType.FIXED, OnSiteVisitPaymentType.VARYING, OnSiteVisitPaymentType.STARTING_FROM]
      .includes(OnSiteVisitPaymentType[paymentType as keyof typeof OnSiteVisitPaymentType]);
  }
}
