# Unexpected Results with Floating-Point Subtraction in JavaScript

This repository demonstrates a common issue in JavaScript related to floating-point arithmetic and the subtraction operator.  While seemingly straightforward, subtracting floating-point numbers can produce unexpected results due to the way these numbers are stored in binary format.  These inaccuracies can compound and lead to significant errors in calculations.

## The Problem

JavaScript uses the IEEE 754 standard to represent floating-point numbers.  This standard, while very common, means that many decimal numbers cannot be represented exactly in binary.  This leads to rounding errors, which can subtly affect the results of arithmetic operations.

The `bug.js` file provides an example that shows how this issue can manifest.

## The Solution

There is no single solution to eliminate all floating-point inaccuracies.  The best approach depends on the context and the required level of precision.  Methods like using a library for arbitrary-precision arithmetic (like `bignumber.js`) are effective for situations requiring high accuracy.  Another approach is to round the result to a specific number of decimal places to reduce the effect of small errors.

The `bugSolution.js` file offers a simple demonstration of rounding the result to address this issue.

## How to run the code

1.  Clone this repository.
2.  Open the `bug.js` and `bugSolution.js` files in your preferred code editor.
3.  Execute the files in a JavaScript environment (browser console, Node.js, etc.).

Observe the differences in output between the original code and the solution code.  The solution code shows how rounding can help to mitigate these issues.