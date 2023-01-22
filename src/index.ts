import Account from './account';
import BoletoPay from './paymentMethods/BoletoPay';
import PixPay from './paymentMethods/PixPayment';

const gregAccount = new Account(1000);

const today: Date = new Date();

const paymentBol = new BoletoPay(gregAccount, 100, today);

console.log(paymentBol.value);

const ChrisAccount = new Account(200);

const paymentCard = new PixPay(ChrisAccount, 30);

paymentCard.pay();
console.log(ChrisAccount.balance);