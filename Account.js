class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}
 function ex29(){
     var newAccount = new Account("Cody", 100);
     newAccount.deposit(20);
     document.write(newAccount.balance());
 }
function main() {
    //ex30
var account1 = new Account("Matt's Account", 1000);
var account2 = new Account("My Account", 0);
account1.withdrawal(100);
account2.deposit(100);
document.write(account1.balance());
document.write(account2.balance());
}

main();