class SonAccount {
    balanceInit:number=0;
    constructor(firstdep: number, firstdraw: number) {
        this.balanceInit = 0;
        this.oneDeposit(firstdep);
        this.oneDrow(firstdraw);
    }

    oneDeposit(deposito: number) {
        this.balanceInit = this.balanceInit + deposito;
        return this.balanceInit
    }

    oneDrow(prevelievo: number) {
        this.balanceInit = this.balanceInit - prevelievo;

        return this.balanceInit
    }
}

class MotherAccount extends SonAccount {
    balanceInit: number = 0;
    constructor(firstdep: number, firstdraw: number) {
        super(firstdep, firstdraw);
        this.balanceInit= 0;
        this.oneDeposit(firstdep);
        this.oneDrow(firstdraw);
        this.addinterest();
    }

    addinterest() {
        this.balanceInit += this.balanceInit * 0.1;
    }
}

let saldoSon = new SonAccount(0, 0)
console.log(saldoSon);
console.log("Deposito: " + saldoSon.oneDeposit(+1000));
console.log("Saldo finale: " + saldoSon.oneDrow(-200));
console.log()



let saldoMother = new MotherAccount(0, 0)
console.log(saldoMother)




