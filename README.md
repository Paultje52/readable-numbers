Readable-numbers makes your big numbers readable!

# Example
1748 > 1.7K

34257384537248534 > 34.2AA

# API Reference
## Main function
### Parameters
parameters.
| Name             | Required | Default | Value Type | Description                                                                                   |
|------------------|----------|---------|------------|-----------------------------------------------------------------------------------------------|
| Number           | Yes      | X       | Number     | The number that you want to make readable                                                     |
| Decimals         | No       | 1       | Number     | How many decimals you want                                                                    |
| Format Thousands | No       | true    | Boolean    | If set to false 1000 and up to 1 million will not be formatted and displayed like this: 1,000 |
### Example
```js
const readable = require("readable-numbers");
console.log(readable(16734239434)); // 16.7B
console.log(readable(21485345, 2)); // 21.48M
console.log(readable(4625, 1, true)); // (default) 4,6K
console.log(readable(4625, 1, false)); // 4,625
```
## Formats
An array with all the formats
```js
const readable = require("readable-numbers");
console.log(readable.formats); 
// [
//  '',   'K',  'M',  'B',  'T',  'AA', 'AB', 'AC', 'AD', 'AE',
//  'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO',
//  'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY',
//  'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI',
//  'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS',
//  'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC',
//  'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM',
//  'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW',
//  'CX', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG',
//  'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ',
//  ... 581 more items
// ]
```

# Counting
These are the formats that we use. 

* K
* M
* B
* T
* AA
* AB
* ...
* AZ
* BA
* ...
* ZZ
* Ω
