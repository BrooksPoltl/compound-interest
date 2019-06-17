module.exports.compound = compound = (initial, amount, years,interest, period = 1) =>{
    const rate = interest/period;
    const compounds = years * period;
    let result
    let totalFromPrincipal;
    let totalFromAnnuity;
    let principal = [initial]
    let int = [0]
    let total = [inital]
    for(let i = 0; i< years; i++){
        // What is current value of initial investment
        totalFromPrincipal = initial*(1+rate)**(i*period);
        // what is current value factor of the annuity
        totalFromAnnuity = ((1+rate)**(i*period)-1)/rate;
        // multiply value factor by amount
        totalFromAnnuity = totalFromAnnuity*amount;

        let totalForYear = totalFromAnnuity + totalFromPrincipal;
        total.push(totalForYear);

        // total amount of contributed capital 
        let contribution = amount*i + initial;
        principal.push(contribution);

        let intAmt = totalForYear - contribution;
        int.push(intAmt);
        if(i == years-1){
            result = totalForYear;
        }
    }
    return {result: result, principal: principal, interest: int, total: total}
}