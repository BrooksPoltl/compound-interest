module.exports= compound = (initial, amount, years,interest, period = 1) =>{
    initial = Number(initial);
    amount = Number(amount);
    years = Number(years);
    interest = Number(interest);
    period = Number(period);

    const rate = interest/period;
    const compounds = years * period;
    let result
    let totalFromPrincipal;
    let totalFromAnnuity;
    let principal = [initial]
    let int = [0]
    let total = [initial]
    for(let i = 1; i< years+1; i++){
        // What is current value of initial investment
        totalFromPrincipal = initial*(1+rate)**(i*period);
        // what is current value factor of the annuity
        totalFromAnnuity = ((1+rate)**(i*period)-1)/rate;
        // multiply value factor by amount
        totalFromAnnuity = totalFromAnnuity*amount;

        let totalForYear = totalFromAnnuity + totalFromPrincipal;
        total.push(Number(totalForYear.toFixed(2)));

        // total amount of contributed capital 
        let contribution = amount*i*period + initial;
        principal.push(Number(contribution.toFixed(2)));

        let intAmt = totalForYear - contribution;
        int.push(Number(intAmt.toFixed(2)));
        if(i == years){
            result = Number(totalForYear.toFixed(2));
        }
    }
    return {result: result, principal: principal, interest: int, total: total}
}