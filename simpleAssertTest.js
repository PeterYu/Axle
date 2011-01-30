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

test.assertNull_should_pass = function() {
    assertNull(null);
};

test.assertNull_on_number_should_fail = function() {
    assertNull(1);
};

test.assertNull_on_Object_should_fail = function() {
    assertNull(new Object());
};

test.assertNull_on_boolean_should_fail = function() {
    assertNull(true);
};

test.assertNotNull_on_Object_should_pass = function() {
    assertNotNull(new Object());
};

test.assertNotNull_on_number_should_pass = function() {
    assertNotNull(1);
};

test.assertNotNull_on_boolean_should_pass = function() {
    assertNotNull(false);
};

test.assertNotNull_should_fail = function() {
    assertNotNull(null);
};

function methodThatThrowsException() {
    throw("nasty exception");
}

testRunner.run(test);
