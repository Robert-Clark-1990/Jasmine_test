//start by describing the test, what we want it to perform, what it should do, and what we expect.
//Make sure brackets, semi-colons and Capitalisation is right.

describe("Calculator", function(){

    //beforeEach  == This creates a new instance of the Calculator object before each spec.
    beforeEach(function(){
        calc = new Calculator;
    });

    describe("Addition tests", function(){
        it("should return 42", function(){
//These changes made because the new Calculator function just wants one number to have as an argument instead of two, so it has to be added twice. First 20, then 22.
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
            // was this before it was changed --   expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
//if someone tries to return words instead of numbers, this will give it an error message. This is called defensive programming.
        it("should return an error if we don't supply two numbers", function(){
//SpyOn function will wait like a spy to be called upon.
//Window is used because alert() is a method of the window object.
            spyOn(window,"alert");
            //Was previous this before changed --      addition("Hitchhikers", "Guide");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});