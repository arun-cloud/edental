// save to hd
    function save_to_hd() {
        // Die Variable jsonString holen mit der Funktion form_to_JSON()
        var jsonString = form_to_JSON();
        
        // Die jsonString als TXT-Datei herunterladen
        var hiddenElement = document.createElement('a');
        
        hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonString);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'periodontalchart_data.txt';
        hiddenElement.click();
    }