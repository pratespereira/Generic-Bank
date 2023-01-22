import Payment from './Payment';

export default class PixPayment extends Payment {
  public pay() {
    console.log('PIX payment');
    console.log('Account balance:', this.account.balance);
    console.log('Description:', this.description);
    console.log('Value:', this.value);
    console.log('Payment in process ...');
    this.account.debit(this.value);
    console.log('Remaining balance:', this.account.balance);
    console.log('Bank');
    console.log(this.name);
  }
}
