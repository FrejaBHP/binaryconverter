//Kan nemmest laves ved enten at udnytte strings og trække chars
//eller sætte alle tallene i arrays. Det bliver strings og chars her.

function DisplayDecimal() { //Henter tal fra websiden og forbereder dem for formlerne

    const Octets = [
        document.getElementById("firstOctetB").value,
        document.getElementById("secondOctetB").value,
        document.getElementById("thirdOctetB").value,
        document.getElementById("fourthOctetB").value];

    const Decimals = [0, 0, 0, 0];

    ConvertToDecimal(Octets, Decimals);

    let outputString = "";
    for (i = 0; i < Decimals.length; i++) {
        if (i === Decimals.length - 1) {
            outputString += Decimals[i];
        }
        else {
            outputString += (Decimals[i] + ".");
        }
    }
    document.getElementById("binaryOutput").value = outputString;
}

function ConvertToDecimal(octets, decimals) {

    //I hvert loop itereres hvert tal i den binære talrække fra venstre mod højre
    //Hvis det binære tal er 1, tilføjes der 2^x, hvor x er pladsen i iterationen, til en sum
    //Hvis det binære tal er 0, går den videre til det næste tal i rækken

    for (i = 0; i < octets.length; i++) {
        for (a = 0; a < octets[i].length; a++) {
            if (octets[i][a] !== "0") {
                decimals[i] += Math.pow(2, octets[i].length - (1+a));
            }
        }
    }
}

function DisplayBinary() { //Henter tal fra websiden og forbereder dem for formlerne

    const Decimals = [
        document.getElementById("firstOctetD").value, 
        document.getElementById("secondOctetD").value, 
        document.getElementById("thirdOctetD").value, 
        document.getElementById("fourthOctetD").value];

    const Octets = ["", "", "", ""];

    ConvertToBinary(Decimals, Octets);

    let outputString = "";
    for (i = 0; i < Octets.length; i++) {
        if (i === Octets.length - 1) {
            outputString += Octets[i];
        }
        else {
            outputString += (Octets[i] + ".");
        }
    }
    document.getElementById("decimalOutput").value = outputString;
}

function ConvertToBinary(decimals, octets) {
    
    //I hvert loop forsøges der at fjernes 2^x-1 fra inputtet, hvor x er pladsen, venstre mod højre, højest mod lavest.
    //Hvis inputtet er stort nok ift potensen, fjernes det, og der noteres et "1"
    //Hvis inputtet ikke er stort nok, beholdes det, noteres et "0" og der itereres til næste tal

    for (i = 0; i < decimals.length; i++) {
        let power = 0;
        for (a = 0; a < 8; a++) {
            power = Math.pow(2, 8 - (1+a)); //værdi af 8 her fordi vi arbejder med 8 bits
            if (decimals[i] >= power) {               
                octets[i] += "1";
                decimals[i] -= power;
            }
            else {
                octets[i] += "0";
            }
        }
    }
}