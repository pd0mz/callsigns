(function () {
    "use strict";
    var callsigns;

    callsigns = {
        "Ale Stegenga": "PD1ANS",
        "André Hulsbergen": "PD2ATG",
        "Angela Scholder": "PE1BIV / M1SCH",
        "Ap E. Kop": "PD4U / NL1APE",
        "Ascal Cardio": "NL2PRC",
        "Bob Smith": "NS2B",
        "Bram Peek": "PE2EK",
        "Danny Patweesnk": "PA2SNK / CB2SNK",
        "David Westphalen": "N4DLT",
        "David Wray": "KB4HJQ",
        "Denise Wray": "KB3HJQ",
        "Dennis Jansen": "PD4R",
        "Egbert Cornelisse": "NL1MAU",
        "Emil Berndsen": "NL1EBU",
        "Evert van Dieren": "PD3AT",
        "Frank van der Knoop": "PD3F / NL1FVK",
        "Gerrit Vinke": "PA3DWC",
        "Han Sytsma": "PE1FAM",
        "Henk-Jan Berghorst": "PH1JB",
        "Jean Létourneau": "VE2PKT",
        "Joe Rogers": "KE4SZT",
        "Joe Schoebel": "KD9CJX",
        "John Beard": "N4GRW",
        "Karel Cornelis": "ON7TA",
        "Kevin Grussling": "W7DQL",
        "Luc Bodson": "ON2AAV",
        "Martijn de Keijzer": "PD2NLX / NL1ZZE",
        "Matt Gregg": "KD8OMT",
        "Michael Belanger": "W1DGL",
        "Nick Kaberry": "G7EVW",
        "Niels Ruiter": "PD2LT / NL1NKG",
        "Niels Ruiter": "PD2LT / NL1NKG",
        "Pasqual Dijkstra": "PD1PD / NL2LMP",
        "Ran Dy": "PH4X",
        "Rick Waterfield": "N1RCW",
        "Rinse Pasma": "PD2RPS / CB0RPS",
        "Ronnie Van Der Veen": "PD4RV / NL0RVW",
        "Scott Haley": "KD5NJR",
        "Seth O'Neal": "KF4LLF",
        "Teh Maze": "PD0MZ / NL0MZ",
        "Werner Adriaanse": "NL1WAM",
        "İsmet Türker Cedimagar": "TA2AWT",
    };

    function rehashLinks() {
        var contentArea, elements, i, callsign;
        contentArea = document.getElementById("contentArea");
        if (contentArea !== null) {
            elements = contentArea.getElementsByTagName("a");
            for (i = 0; i < elements.length; i += 1) {
                callsign = elements[i].textContent;
                if (callsigns.hasOwnProperty(callsign)) {
                    elements[i].textContent += " (" + callsigns[callsign] + ")";
                }
            }
        }
    }

    setTimeout(function () {
        rehashLinks();
    }, 1500);
    setInterval(function() {
        rehashLinks();
    }, 7000);
}());
