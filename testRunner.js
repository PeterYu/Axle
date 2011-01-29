function assertEquals(expected, actual) {
    if (expected != actual) {
	throw "Expected <" + expected + "> but was <" + actual + ">";
    }
}

function TestRunner() {
    this.tests = [];
    
    function run() {
	for(test in this.tests) {
	    try {
		test();
		print('.');
	    } catch (e) {
		print(e);
	    }
	}
    }
}

var testRunner = new TestRunner();
