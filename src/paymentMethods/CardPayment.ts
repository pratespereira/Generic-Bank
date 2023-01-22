import Payment from './Payment';

export default class CardPayment extends Payment {
  public pay() {
    console.log('Card Payment');
    console.log('Account balance:', this.account.balance);
    console.log('Description:', this.description);
    console.log('Value:', this.value);
    console.log('Payment in process ...');
    this.account.debit(this.value);
    console.log('remaining balance:', this.account.balance);
  }
}
