export default class Account {
  private _balance: number;
  
  constructor(s: number) {
    this._balance = s;
  }
  
  get balance() {
    return this._balance;
  }

  public debit(valor: number) {
    if (this._balance < valor) {
      throw new Error('insufficient funds');
    }
    this._balance -= valor;
  }
}