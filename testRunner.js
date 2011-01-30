function assertEquals(expected, actual) {
    if (expected != actual) {
	throw(new AssertionFailedError("Expected <" + expected + "> but was <" + actual + ">"));
    }
}

function assertTrue(condition) {
    if (condition == false) {
	throw(new AssertionFailedError("Expected <true> but was <false>"));
    }
}

function assertFalse(condition) {
    if (condition == true) {
	throw(new AssertionFailedError("Expected <false> but was <true>"));
    }
}

function fail() {
    throw(new AssertionFailedError("Should not get here."));
}

function assertNull(obj) {
    if (obj == undefined || obj != null) {
	throw(new AssertionFailedError("Expected <null> but was <" + obj + ">"));
    }
}

function assertNotNull(obj) {
    if (obj == null) {
	throw(new AssertionFailedError("Expected <null> but was <" + obj + ">"));
    }
}

function AssertionFailedError(message) {
    this.message = message;
}

function TestRunner() {
    this.run = function(tests) {
	var failCount = 0;
	var totalCount = 0;

	for(i in test) {
	    totalCount++;

	    callAllMethodsIn(setup);

	    try {
		test[i].call();
	    } catch (e) {
		if (e instanceof AssertionFailedError) {
		    print('In test: ' + i + ', ' + e.message);
		    failCount++;
		} else {
		    throw(e);
		}
	    }

	    callAllMethodsIn(teardown);

	}
	print("Runs: " + totalCount + " Passed: " + (totalCount - failCount) + " Failed: " + failCount);
    };
}

function callAllMethodsIn(obj) {
    for(var methodName in obj) {
	obj[methodName].call();
    }
}

var testRunner = new TestRunner();
var test = new Object();
var setup = new Object();
var teardown = new Object();
