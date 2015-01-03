var swarm = require('./swarm_redistribution.js')
var payment = require('./send_payments.js')

var TAXED_ACCOUNT = "rhWLSyUd1mpkjL1DsreSg2hZJAvnVdqfkd"
var SECRET = "snNpKwUeVRtnZenjPtp2QHX1BUwjf"

var TAXED_AMOUNT = 40



swarm.compute_swarm(TAXED_ACCOUNT, create_payments)


function create_payments(lines){
    console.log(lines.length)
    
    console.log(TAXED_AMOUNT/lines.length)
    
    var PAYMENTS =[]
    for(var i=0;i<lines.length;i++){
        console.log(lines[i].account)
        
PAYMENTS.push({account: lines[i].account, amount:TAXED_AMOUNT/lines.length})        
    }
    console.log(PAYMENTS)
    send_payments(PAYMENTS)
}



function send_payments(PAYMENTS){
    for(var i=0;i<PAYMENTS.length;i++){
        
    payment.send_payment(TAXED_ACCOUNT, SECRET, PAYMENTS[i].account, PAYMENTS[i].amount, "RES")

    }
    
    
    
}
