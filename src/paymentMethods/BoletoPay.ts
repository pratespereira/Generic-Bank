import { isBefore } from 'date-fns';
import Account from '../account';
import { IInstallment } from '../interface/IInstallment';
import Payment from './Payment';

export default class BoletoPay extends Payment {
  private _dueDate: Date;
  private _forfeit: number;
  private _installment: IInstallment[];

  constructor(
    account: Account,
    value: number,
    dueDate: Date,
    description?: string,
  ) {
    super(account, value, description);

    this._dueDate = dueDate;
    this._forfeit = 0.2;
    this._installment = [];
  }

  set dueDate(v: Date) {
    this._dueDate = v;
  }

  get dueDate() {
    return this._dueDate;
  }

  get forfeit() {
    return this._forfeit;
  }

  set installment(p: IInstallment[]) {
    if (p.length > 10) {
      throw new Error('More installments than allowed');
    }
    this._installment = p;
  }

  private isExpired(): boolean {
    return isBefore(this.dueDate, new Date());
  }

  public pay() {
    console.log('Boleto payment');
    console.log('Account balance:', this.account.balance);
    console.log('Boleto payment data:');
    console.log('Description:', this.description);
    console.log('DueDate:', this.dueDate);
    console.log('Penalty:', this.forfeit);
    console.log('Payment in process ...');
    console.log('Bank');
    console.log(this.name);
    
    if (this.isExpired()) {
      this.value += (this.value * this._forfeit);
    }
    this.account.debit(this.value);
    console.log('remaining balance:', this.account.balance);
  }
}
