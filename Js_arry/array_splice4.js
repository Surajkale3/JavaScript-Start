const digitalPay= ()=>
{
    const wallet=["esewa","khalti","imepay","fonepay","bharatpay"];
    wallet.splice(3,0,"paytm","gpay");
    console.log(wallet);
    wallet.splice(5,6,"phonepe");
    console.log(wallet);
}
let result=digitalPay();
