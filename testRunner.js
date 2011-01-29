function assertEquals(expected, actual) {
    if (expected != actual) {
	throw("Expected <" + expected + "> but was <" + actual + ">");
    }
}

function TestRunner() {
    this.tests = new Array();
    
    this.run = function() {
	var failCount = 0;
	for(i in this.tests) {
	    try {
		this.tests[i].call();
	    } catch (e) {
		print(e);
		failCount++;
	    }
	}
	print("Runs: " + this.tests.length + " Passed: " + (this.tests.length - failCount) + " Failed: " + failCount);
    };
}

var testRunner = new TestRunner();
