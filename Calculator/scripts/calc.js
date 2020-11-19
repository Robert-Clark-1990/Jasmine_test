//this is to show that a decision may be made that changes the functionality of what we have built.

Calculator = function(){
   this.value = 0;
}

// every time our new add function is called, if its a number it will increment our running total. Otherwise it will return an error.

// the addition of this caused our tests all to fail, so now we work to repair the code. Required code to be split down with calc.add part in calcSpec.js
Calculator.prototype.add = function(number) {
    //This now takes one number as an argument instead of two and keeps that as a running total.
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}


//Below is what was written in the first few videos, and is now requested to be deleted in the next video. I'm keeping it for later review.
//addition in calcSpec wasn't defined so it was added here to have value.
    //function addition(numOne, numTwo) {
// checks that numOne is a number and also numTwo is a number
    //if(typeof(numOne) == "number" && typeof(numTwo) == "number")
    //{
        //return numOne + numTwo;
//otherwise it returns the Error! message (ALSO, make sure this is EXACTLY the same as the .toBe bit on the calcSpec page or it won't work)
    //} else {
        //alert("Error!");
    //}
//}