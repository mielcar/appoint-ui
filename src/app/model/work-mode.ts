import {OnSiteVisitConfiguration} from "./on-site-visit-configuration";
import {FormGroup} from "@angular/forms";
import {Distance} from "./distance";
import {Money} from "./money";

export class WorkMode {

  stationary?: boolean | null;

  onSiteVisit?: boolean | null;

  onSiteVisitConfiguration?: OnSiteVisitConfiguration;

  static fromFormGroup(workModeFormGroup: FormGroup): WorkMode {
    const stationary = workModeFormGroup.get('stationaryCtrl')?.value;
    const onSiteVisit = workModeFormGroup.get('onSiteVisitCtrl')?.value;
    const maxDistanceValue = workModeFormGroup.get('maxDistanceCtrl')?.value;
    const paymentType = workModeFormGroup.get('paymentTypeCtrl')?.value;
    const paymentValue = workModeFormGroup.get('paymentValueCtrl')?.value as number;
    const additionalRules = workModeFormGroup.get('additionalRulesCtrl')?.value;
    const maxDistance: Distance = {value: maxDistanceValue, measureOfLength: 'KILOMETER'};
    const payment: Money = {value: paymentValue, currencyCode: 'EUR'}
    const onSiteVisitConfiguration: OnSiteVisitConfiguration = {
      maxDistance: maxDistance,
      paymentValue: payment,
      paymentType: paymentType,
      additionalRules: additionalRules
    }
    return {stationary, onSiteVisit, onSiteVisitConfiguration};
  }
}
