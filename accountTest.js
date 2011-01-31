testCase(new function() {

	var account = new Account();

	this.setUp = function() {
	    account.deposit(100);
	};

	this.tearDown = function() {
	    account.withdrawAll();
	};

	this.deposit_should_add_to_balance = function() {
	    assertEquals(100, account.balance);
	    account.deposit(50);
	    assertEquals(150, account.balance);
	};

	this.incorrect_assertion_should_fail = function() {
	    assertEquals(100, account.balance);
	    account.deposit(50);
	    assertEquals(151, account.balance);
	};

    });