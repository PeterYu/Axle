test.that_add_incorrectly_should_fail = function() {
    assertEquals(20, add(3,10));
};

test.that_add_correctly_should_pass = function() {
    assertEquals(13, add(3,10));
};

testRunner.run(test);
