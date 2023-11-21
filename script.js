var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(firstdep, firstdraw) {
        this.balanceInit = 0;
        this.balanceInit = 0;
        this.oneDeposit(firstdep);
        this.oneDrow(firstdraw);
    }
    SonAccount.prototype.oneDeposit = function (deposito) {
        this.balanceInit = this.balanceInit + deposito;
        return this.balanceInit;
    };
    SonAccount.prototype.oneDrow = function (prevelievo) {
        this.balanceInit = this.balanceInit - prevelievo;
        return this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(firstdep, firstdraw) {
        var _this = _super.call(this, firstdep, firstdraw) || this;
        _this.balanceInit = 0;
        _this.balanceInit = 0;
        _this.oneDeposit(firstdep);
        _this.oneDrow(firstdraw);
        _this.addinterest();
        return _this;
    }
    MotherAccount.prototype.addinterest = function () {
        this.balanceInit += this.balanceInit * 0.1;
    };
    return MotherAccount;
}(SonAccount));
var saldoSon = new SonAccount(0, 0);
console.log(saldoSon);
var saldoMother = new MotherAccount(0, 0);
console.log(saldoMother);
var deposito = new SonAccount(1000, 500);
console.log(deposito.oneDeposit);
