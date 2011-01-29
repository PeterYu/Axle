function Account() {
    this.balance = 0;
    this.deposit = function(amount) {
	this.balance += amount;
    }
    this.withdrawAll = function() {
	this.balance = 0;
    }
}