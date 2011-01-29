var account;

setup.create_fixtures = function() {
    account = new Account();
    account.deposit(100);
}

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
