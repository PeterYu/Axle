function CompareTwoArguments(args) {
    this.message = '';
    this.expected;
    this.actual;
    var assertDataStarts = 0;
    if (args.length == 3) {
	this.message = '"' + args[0] + '" ';
	assertDataStarts++;
    } 
    this.expected = args[assertDataStarts];
    this.actual = args[assertDataStarts + 1];
}

function SingleArgument(args) {
    this.message = '';
    this.actual;
    var assertDataStarts = 0;
    if (args.length == 2) {
	this.message = '"' + args[0] + '" ';
	assertDataStarts++;
    } 
    this.actual = args[assertDataStarts];
}

function NoArgument(args) {
    this.message = '';
    if (args.length == 1) {
	this.message = '"' + args[0] + '" ';
    } 
}

function assertEquals() {
    var args = new CompareTwoArguments(arguments);

    if (args.expected != args.actual) {
	throw(new AssertionFailedError(args.message + "Expected <" + args.expected + "> but was <" + args.actual + ">"));
    }
}

function assertNotEquals() {
    var args = new CompareTwoArguments(arguments, 3);

    if (args.expected == args.actual) {
	throw(new AssertionFailedError(args.message + "Expected <" + args.expected + "> and <" + args.actual + "> to be different but was equal by (==)"));
    }
}

function assertTrue() {
    var args = new SingleArgument(arguments);
    if (args.actual == false) {
	throw(new AssertionFailedError(args.message + "Expected <true> but was <false>"));
    }
}

function assertFalse() {
    var args = new SingleArgument(arguments);
    if (args.actual == true) {
	throw(new AssertionFailedError(args.message + "Expected <false> but was <true>"));
    }
}

function fail() {
    var args = new NoArgument(arguments);
    throw(new AssertionFailedError(args.message + "Should not get here."));
}

function assertNull() {
    var args = new SingleArgument(arguments);
    
    if (args.actual != null) {
	throw(new AssertionFailedError(args.message + "Expected <null> but was <" + args.actual + ">"));
    }
}

function assertNotNull() {
    var args = new SingleArgument(arguments);
    if (args.actual == null) {
	throw(new AssertionFailedError(args.message + "Expected <null> but was <" + args.actual + ">"));
    }
}

function AssertionFailedError(message) {
    this.message = message;
}

function TestRunner() {

    this.testName = arguments.length == 0 ? '' : arguments[0];

    this.run = function(testcases) {
	var failCount = 0;
	var totalCount = 0;

	print('Testing: ' + this.testName);

	for(testName in testcases) {
	    if (testName != 'setUp' && testName != 'tearDown') {
		totalCount++;
		
		callIfDefined(testcases.setUp);
		
		try {
		    testcases[testName].call();
		} catch (e) {
		    if (e instanceof AssertionFailedError) {
			print('In test: ' + testName + ', ' + e.message);
			failCount++;
		    } else {
			throw(e);
		    }
		}

		callIfDefined(testcases.tearDown);
	    }

	}
	print("Runs: " + totalCount + " Passed: " + (totalCount - failCount) + " Failed: " + failCount);
    };
}

function callIfDefined(method) {
    if (method != undefined) {
	method.call();
    }
}

function testCase() {
    switch (arguments.length) {
    case 1:
	new TestRunner().run(arguments[0]);
	break;
    case 2:
	new TestRunner(arguments[0]).run(arguments[1]);
	break;
    default:
	throw("Unable to run test cases. Please invoke with test methods (closure).");
    }
}

