function $(input) {
    return document.getElementById(input)
}



function calculate() {
    var drug1 = $('drug1').value
    var drug2 = $('drug2').value
    var dose1 = $('dose1').value
    
    //changes drug1 from a string to an object
    dose1 = dose1*1
    var DAE1 = drugDAE(drug1)
    var DAE2 = drugDAE(drug2)
    var ratio = DAE1/DAE2
    var result = DAE2/DAE1*dose1
    console.log(DAE1)
    console.log(DAE2)
    $('results').innerHTML = `the equivalent of <b>${dose1.toFixed(2)}mg</b> of <b>${drug1}</b>  is <b>${result.toFixed(2)} mg</b> of <b>${drug2}</b>, the equivalency is <b>${ratio.toFixed(2)}mg</b> of ${drug2}  to 1mg of ${drug1}  `
}

function drugDAE(drug) {
    for (var key in drugs) {
        if (drugs[key].brandName === drug) {
            return drugs[key].DAE
        }
    }
}