# Terbilang JavaScript Function (Number to Words in Indonesian)

This is a JavaScript function designed to convert numerical figures into their textual representation in Indonesian (commonly known as "Terbilang"). This function is highly useful for applications that require spelling out numerical amounts in words, such as for receipts, financial reports, or invoices.

---

## How to Use

The `TERBILANG()` function can be called by passing a number as an argument.

### Features
* Converts positive whole numbers to Indonesian text.
* Supports conversion for the number zero.
* Handles negative numbers by prepending "Minus".
* Supports denominations up to trillions.
* Automatically appends "Rupiah" to the end of the conversion.

## Installation

As this is a standalone JavaScript function, you can simply copy and paste the `TERBILANG()` code directly into your JavaScript project.

1.  Create a new JavaScript file (e.g., `terbilang.js`).
2.  Copy the entire `TERBILANG` function code into this file.
3.  Import or include this file into your HTML/JavaScript project.

### Examples:

```javascript
// Calling the function with a positive number
console.log(TERBILANG(12345)); 
// Output: DUA BELAS RIBU TIGA RATUS EMPAT PULUH LIMA RUPIAH

// Calling the function with zero
console.log(TERBILANG(0));
// Output: NOL RUPIAH

// Calling the function with a negative number
console.log(TERBILANG(-750));
// Output: MINUS TUJUH RATUS LIMA PULUH RUPIAH

// Calling the function with a larger number
console.log(TERBILANG(123456789));
// Output: SERATUS DUA PULUH TIGA JUTA EMPAT RATUS LIMA PULUH ENAM RIBU TUJUH RATUS DELAPAN PULUH SEMBILAN RUPIAH
