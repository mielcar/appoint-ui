import {Address} from "../model/address";
import {Owner} from "../model/owner";

export class CreateFacilityRequest {

  name: string;
  address: Address;
  owner: Owner;


  constructor(name: string, address: Address, owner: Owner) {
    this.name = name;
    this.address = address;
    this.owner = owner;
  }
}
