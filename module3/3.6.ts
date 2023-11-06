{
  //getter and setter

  class BankAccount {
    readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    //setter
    set deposit(amount: number) {
      this.balance = this.balance + amount;
    }
    //getter
    get Balance() {
      return this.balance;
    }
  }

  const poorAccount = new BankAccount(111, "Mr.X", 20);
  //getter
  const myBalance = poorAccount.Balance;
  //setter
  poorAccount.deposit = 50;

  //
}
