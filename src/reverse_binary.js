"use strict";

function reverse_binary(number) {
    // Convert decimal to binary
    var binaryNumber = parseInt(number, 10).toString(2);

    // Reverse binary number
    var reverseBinaryNumber = binaryNumber.split("").reverse().join("");

    // Convert binary to decimal
    var decimalNumber = parseInt(reverseBinaryNumber, 2).toString(10);

    // Return reversed number
    return parseInt(decimalNumber, 10);
}
