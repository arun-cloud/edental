// Analyse öffnen
function open_analysis() {
    var modal_analysis = document.getElementById("modal_analysis");
    
    document.getElementById('modal_analysis').style.display = 'block';
        
    //console.log("chart1", chart1, "chart2", chart2);
    //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);

    // Überprüfung der Zustände
    if (showSuperimposedChart) {
        render_superimposed_analysis(jsonObj1, jsonObj2);
    } else if (showChart2) {
        jsonString = form_to_JSON();
        jsonObj2 = JSON.parse(jsonString);
        render_analysis(jsonObj2);
    } else {
        jsonString = form_to_JSON();
        jsonObj1 = JSON.parse(jsonString);
        render_analysis(jsonObj1);
    }
    
    window.onclick = function(event_analysis) {
        if (event_analysis.target == modal_analysis) {
            document.getElementById('modal_analysis').style.display = 'none';
        }
    }
}

// Analyse schliessen
function close_analysis() {
    document.getElementById('modal_analysis').style.display = 'none';
}

// Einstellungen öffnen
function open_settings() {
    var modal_settings = document.getElementById("modal_settings");
    
    document.getElementById('modal_settings').style.display = 'block';

    window.onclick = function(event_settings) {
        if (event_settings.target == modal_settings) {
            document.getElementById('modal_settings').style.display = 'none';
        }
    }
}

// Einstellungen schliessen
function close_settings() {
    document.getElementById('modal_settings').style.display = 'none';
}

// ST/BOP öffnen
function open_pd_bop() {
    var modal_pd_bop = document.getElementById("modal_pd_bop");
        
    //console.log("chart1", chart1, "chart2", chart2);
    //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);
    
    document.getElementById('modal_pd_bop').style.display = 'block';
    
    // Überprüfung der Zustände
    if (showSuperimposedChart) {
        render_superimposed_pi_pd_bop(jsonObj1, jsonObj2);
    } else {
        render_pi_pd_bop();
    }
    
    jsonObj1 = backupJsonObj1;
    jsonObj2 = backupJsonObj2;
    
    window.onclick = function(event_pd_bop) {
        if (event_pd_bop.target == modal_pd_bop) {
            document.getElementById('modal_pd_bop').style.display = 'none';
        }
    }
}

// ST/BOP schliessen
function close_pd_bop() {
    document.getElementById('modal_pd_bop').style.display = 'none';
}

// QR öffnen
function open_qr() {

    var modal_qr = document.getElementById("modal_qr");

    document.getElementById('modal_qr').style.display = 'block';

	var compressedjsonString = form_to_compressed_JSON();

	var var_string = compressedjsonString;

    var qr_igm_src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + var_string;
    document.getElementById("qr_img").src = qr_igm_src;

    var qr_report_url = var_string;
    var qr_button_url = "window.open('" + qr_report_url;
    qr_button_url = qr_button_url + "')";
    document.getElementById('open_button_qr').setAttribute('onclick', qr_button_url);

    window.onclick = function(event_qr) {
        if (event_qr.target == modal_qr) {
            document.getElementById('modal_qr').style.display = 'none';
        }
    }
}

// QR schliessen
function close_qr() {
    document.getElementById('modal_qr').style.display = 'none';
}

// threejs öffnen
function open_threejs() {
    var modal_threejs = document.getElementById("modal_threejs");

    document.getElementById('modal_threejs').style.display = 'block';
        
    //console.log("chart1", chart1, "chart2", chart2);
    //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);

    // Überprüfung der Zustände
    if (showChart2) {
        jsonString = form_to_JSON();
        jsonObj2 = JSON.parse(jsonString);
		assignJsonDataToObject(jsonObj2);
		initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
		render_surfaces();
    } else if (!showSuperimposedChart) {
        jsonString = form_to_JSON();
        jsonObj1 = JSON.parse(jsonString);
		assignJsonDataToObject(jsonObj1);
		initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
		render_surfaces();
    }
	
	resetCamera();

    window.onclick = function(event_threejs) {
        if (event_threejs.target == modal_threejs) {
            document.getElementById('modal_threejs').style.display = 'none';
        }
    }
}

// threejs schliessen
function close_threejs() {
    document.getElementById('modal_threejs').style.display = 'none';
}

// Kontakt öffnen
function open_contact() {
    var modal_contact = document.getElementById("modal_contact");
    
    document.getElementById('modal_contact').style.display = 'block';

    window.onclick = function(event_contact) {
        if (event_contact.target == modal_contact) {
            document.getElementById('modal_contact').style.display = 'none';
        }
    }
}

// Kontakt schliessen
function close_contact() {
    document.getElementById('modal_contact').style.display = 'none';
}

// YouTube öffnen
function open_youtube() {
    var modal_youtube = document.getElementById("modal_youtube");
    
    document.getElementById('modal_youtube').style.display = 'block';

    window.onclick = function(event_youtube) {
        if (event_youtube.target == modal_youtube) {
            document.getElementById('modal_youtube').style.display = 'none';
        }
    }
}

// YouTube schliessen
function close_youtube() {
    document.getElementById('modal_youtube').style.display = 'none';
}
