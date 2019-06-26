# compound-interest-calc
## URL
`https://www.npmjs.com/package/compound-interest-calc`
## Getting Started
 `npm install compound-interest-calc`
 
### Add to your project
 `const compound = require('compound-interest-calc')`
## How to use
### Variable definitions

```
initial = the amount you are starting with`

amount = the amount of money you are adding per period

years = the amount of years you are compounding

interest = the interest percentage per year (.1 = 10%)

period = amount of payments per year(default value is 1)
```
### Calling the function

`compound(initial, amount, years, interest,period)`

## Example
### Example input

```compound(0,100,5,.1,12)```

### Example output

```
{ 
    result: 7743.71,
    principal: [ 0, 1200, 2400, 3600, 4800, 6000 ],
    interest: [ 0, 56.56, 244.69, 578.18, 1072.25, 1743.71 ],
    total: [ 0, 1256.56, 2644.69, 4178.18, 5872.25, 7743.71 ] 
 }
```
#### Response Definitions

```
  result = the total answer for the final year (total[years])
  principal = an array of principal added by year starting in year 0
  interest = an array of interest added by year starting in year 0
  total = an array of principal plus interest added by year starting in year 0
```
