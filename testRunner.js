function assertEquals(expected, actual) {
    if (expected != actual) {
	throw("Expected <" + expected + "> but was <" + actual + ">");
    }
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
		print('In test: ' + i + ', ' + e);
		failCount++;
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
