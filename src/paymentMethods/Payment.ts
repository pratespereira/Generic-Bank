import Account from '../account';

export default abstract class Payment {
  private _account: Account;
  private _value: number;
  private _description: string;
  protected name: string;

  constructor(
    account: Account,
    value: number,
    description?: string,
  ) {
    this._account = account;
    this._value = value;
    this._description = description || '';
    this.name = 'William';
  }

  set value(v: number) {
    this._value = v;
  }

  get value() {
    return this._value;
  }

  set description(d: string) {
    this._description = d;
  }

  get description() {
    return this._description;
  }

  get account(): Account {
    return this._account;
  }
  
  protected abstract pay():void;
}