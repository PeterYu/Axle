function assertEquals(expected, actual) {
    if (expected != actual) {
	throw("Expected <" + expected + "> but was <" + actual + ">");
    }
}

function TestRunner() {
    this.tests = new Array();
    
    this.run = function(tests) {
	var failCount = 0;
	var totalCount = 0;
	for(i in tests) {
	    totalCount++;
	    try {
		tests[i].call();
	    } catch (e) {
		print('In test: ' + i + ', ' + e);
		failCount++;
	    }
	}
	print("Runs: " + totalCount + " Passed: " + (totalCount - failCount) + " Failed: " + failCount);
    };
}

var testRunner = new TestRunner();
var test = new Object();
