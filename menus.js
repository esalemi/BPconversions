var drugs = {

    BuprenorphineTablet:{
        
        brandName:"Buprenorphine SL Tab",
        Type:"SL Tab",
        FDAIndication:"OUD(2014)",
        DAE: 8
    },
    Suboxone:{
        brandName:"Suboxone",
        Type:"SL Film",
        FDAIndication:"OUD(2002)",
        DAE: 8
    },
    Zubsolv:{
        brandName:"Zubsolv",
        Type:"SL Tab",
        FDAIndication:"OUD(2013)",
        DAE:5.7
    },
    Bunavil:{
        brandName:"Bunavil",
        Type:"Buccal Film",
        FDAIndication:"OUD(2014)",
        DAE: 4.2
    },
   
 }

// comments
var fruits =
{
    "1": {
        "id": 1,
        "Description": "Apple",
        "groupID": 0
    },
    "2": {
        "id": 2,
        "Description": "Peach",
        "groupID": 0
    }
};
var _drug1 = document.getElementById('drug1')
var _drug2 = document.getElementById('drug2')

for (var key in drugs) {
    var drug = drugs[key];
    _drug1.options[_drug1.options.length] = new Option(drug.brandName, drug.brandName);
    _drug2.options[_drug2.options.length] = new Option(drug.brandName, drug.brandName);
}

