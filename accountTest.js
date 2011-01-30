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

test.assertTrue_should_pass = function() {
    assertTrue(true);
};

test.assertTrue_should_fail = function() {
    assertTrue(false);
};

test.assertFalse_should_pass = function() {
    assertFalse(false);
};

test.assertFalse_should_fail = function() {
    assertFalse(true);
};

test.fail_should_pass = function() {
    try {
	methodThatThrowsException();
	fail();
    } catch (e) {
	assertEquals("nasty exception", e);
    }
};

test.fail_should_fail = function() {
    var a = 1 + 2;
    fail();
};

function methodThatThrowsException() {
    throw("nasty exception");
}

testRunner.run(test);
