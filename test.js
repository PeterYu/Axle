var account = new Account();

setup.initial_deposit = function() {
    account.deposit(100);
};

teardown.reset_account = function() {
    account.withdrawAll();
};

test.deposit_should_add_to_balance = function() {
    assertEquals(100, account.balance);
    account.deposit(50);
    assertEquals(150, account.balance);
};

test.incorrect_assertion_should_fail = function() {
    assertEquals(100, account.balance);
    account.deposit(50);
    assertEquals(151, account.balance);
};

testRunner.run(test);
