export class Product {

  _id?: string;
  name: string;
  amount: number;
  type: string;
  bought: boolean;
  description?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
