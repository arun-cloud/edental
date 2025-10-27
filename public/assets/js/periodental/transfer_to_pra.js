function transfer_to_pra(lang) {
    var jsonString = form_to_JSON();
    var jsonObj = JSON.parse(jsonString);

    // Alter des Patienten berechnen
    var patientAge = calculateAge(jsonObj.patient_dob, jsonObj.date);
    var ageStr = patientAge.toString().padStart(3, '0');

    // Summe der vorhandenen Zähne berechnen
    var totalTeeth = sumTeeth(jsonObj);
    var totalTeethStr = totalTeeth.toString().padStart(3, '0');

    // Summe der BOP-Werte für vorhandene Zähne berechnen
    var totalBop = sumBop(jsonObj);
    var totalBopStr = totalBop.toString().padStart(3, '0');

    // Anzahl der PD-Variablen mit Wert ≥ 5 für vorhandene Zähne zählen
    var countPd = countPdValues(jsonObj);
    var countPdStr = countPd.toString().padStart(3, '0');

    // Summe der fehlenden Zähne berechnen
    var missingTeeth = 32 - totalTeeth;
    var missingTeethStr = missingTeeth.toString().padStart(3, '0');

    // Query-String zusammensetzen
    var queryString = ageStr + totalTeethStr + totalBopStr + countPdStr + missingTeethStr;
    
    // Überprüfen ob lang 'uk' ist und auf 'en' setzen
    if (lang === 'uk') {
        lang = 'en';
    }
    
    var url = "https://www.perio-tools.com/pra/" + lang + "/?data=" + queryString;

    // Neuen Browser-Tab öffnen
    window.open(url, '_blank');
}

function calculateAge(dob, currentDate) {
    // Überprüfe, ob die Daten gültig sind
    if (!dob || !currentDate || dob.split('.').length !== 3 || currentDate.split('.').length !== 3) {
        return "000";
    }

    // Konvertiere die Daten in Date-Objekte und berechne das Alter
    var dobDate = new Date(dob.split('.').reverse().join('-'));
    var currentDateObj = new Date(currentDate.split('.').reverse().join('-'));

    // Überprüfe, ob die konvertierten Daten gültig sind
    if (isNaN(dobDate.getTime()) || isNaN(currentDateObj.getTime())) {
        return "000";
    }

    var age = currentDateObj.getFullYear() - dobDate.getFullYear();
    var m = currentDateObj.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && currentDateObj.getDate() < dobDate.getDate())) {
        age--;
    }
    return age.toString().padStart(3, '0');
}

function sumTeeth(jsonObj) {
    var sum = 0;
    for (var key in jsonObj) {
        if (key.startsWith('tooth_')) {
            sum += parseInt(jsonObj[key]);
        }
    }
    return sum;
}

function sumBop(jsonObj) {
    var sum = 0;
    for (var tooth = 1; tooth <= 32; tooth++) {
        if (jsonObj['tooth_' + tooth] === "1") {
            for (var key in jsonObj) {
                if (key.startsWith('bop_' + tooth + '_')) {
                    sum += parseInt(jsonObj[key]);
                }
            }
        }
    }
    return sum;
}

function countPdValues(jsonObj) {
    var count = 0;
    for (var tooth = 1; tooth <= 32; tooth++) {
        if (jsonObj['tooth_' + tooth] === "1") {
            for (var key in jsonObj) {
                if (key.startsWith('pd_' + tooth + '_') && parseInt(jsonObj[key]) >= 5) {
                    count++;
                }
            }
        }
    }
    return count;
}
