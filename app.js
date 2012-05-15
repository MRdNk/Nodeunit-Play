testSomething = function(test){
    test.expect(1);
    test.ok(true, "this assertion should pass");
    test.done();
};

testSomethingElse = function(test){
    test.ok(false, "this assertion should fail");
    test.done();
};

testSomething();
testSomethingElse();