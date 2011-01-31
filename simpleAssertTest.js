testCase(new function() {

	this.assertTrue_should_pass = function() {
	    assertTrue(true);
	};

	this.assertTrue_should_fail = function() {
	    assertTrue(false);
	};

	this.assertFalse_should_pass = function() {
	    assertFalse(false);
	};

	this.assertFalse_should_fail = function() {
	    assertFalse(true);
	};

	this.fail_should_pass = function() {
	    try {
		methodThatThrowsException();
		fail();
	    } catch (e) {
		assertEquals("nasty exception", e);
	    }
	};

	this.fail_with_message_should_fail = function() {
	    var a = 1 + 2;
	    fail('Kaboom!');
	};

	this.fail_should_fail = function() {
	    var a = 1 + 2;
	    fail();
	};

	this.assertNull_should_pass = function() {
	    assertNull(null);
	};

	this.assertNull_on_number_should_fail = function() {
	    assertNull(1);
	};

	this.assertNull_on_Object_should_fail = function() {
	    assertNull(new Object());
	};

	this.assertNull_on_boolean_should_fail = function() {
	    assertNull(true);
	};

	this.assertNotNull_on_Object_should_pass = function() {
	    assertNotNull(new Object());
	};

	this.assertNotNull_on_number_should_pass = function() {
	    assertNotNull(1);
	};

	this.assertNotNull_on_boolean_should_pass = function() {
	    assertNotNull(false);
	};

	this.assertNotNull_should_fail = function() {
	    assertNotNull('fail message here', null);
	};

	this.assert_comment_messages = function() {
	    assertEquals('message', 1, 2);
	};

	function methodThatThrowsException() {
	    throw("nasty exception");
	}

    });