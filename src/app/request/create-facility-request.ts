import {Address} from "../model/address";
import {Owner} from "../model/owner";
import {WorkMode} from "../model/work-mode";

export class CreateFacilityRequest {

  name: string;

  owner: Owner;

  address: Address;

  productCategoryId: string;

  workMode: WorkMode;


  constructor(name: string, owner: Owner, address: Address, productCategoryId: string, workMode: WorkMode) {
    this.name = name;
    this.address = address;
    this.owner = owner;
    this.productCategoryId = productCategoryId;
    this.workMode = workMode;
  }
}
