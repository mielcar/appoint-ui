import {Distance} from "./distance";
import {Money} from "./money";

export interface OnSiteVisitConfiguration {

  maxDistance?: Distance | null;

  paymentValue?: Money | null;

  paymentType?: string | null;

  additionalRules?: string | null;
}
