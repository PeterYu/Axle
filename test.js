var test = new Object();

test.addIncorrectlyShouldFail = function() {
    assertEquals(20, add(3,10));
};

test.addCorrectlyShouldPass = function() {
    assertEquals(13, add(3,10));
};

testRunner.run(test);
