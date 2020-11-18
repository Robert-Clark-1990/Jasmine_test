//start by describing th test, what we want it to perform, what it should do, and what we expect.
//Make sure brackets, semi-colons and Capitalisation is right.

describe("Calculator", function(){
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
    });
});