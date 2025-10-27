function show_chart1(jsonObj1) {
    if (event.shiftKey) {
        
    // Shift-Linksklick ausgeführt
    var shouldContinue = confirm('Do you really want to delete this periodontal chart?');
        
    if (shouldContinue) {

        // Pfad zur JSON-Datei
        const jsonPath = '../common/json/json_template.json';

        // Verwendung von fetch, um die JSON-Datei zu laden
        fetch(jsonPath)
            .then(response => {
                // Sicherstellen, dass die Anfrage erfolgreich war
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(data => {
                window.jsonObj1 = data;

                render_form(window.jsonObj1);

                assignJsonDataToObject(window.jsonObj1); // Erstellen des Objekts pockets

                initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
                render_surfaces();

                render_pi_pd_bop();
                render_analysis(window.jsonObj1);
                renderEmptyBaderstenTable();
                renderEmptyBaderstenChart();
                renderEmptyRamseierTable();
                renderEmptyRamseierChart();

                // Button für anzeigen Chart 1 ausblenden
                var button = document.getElementById('menu_button_show_chart1');
                button.style.display = 'none';

                // Button für Laden Chart 1 einblenden
                button = document.getElementById('menu_button_load_from_hd');
                button.style.display = 'block';
                button.style.backgroundColor = '#F9F9F9';
                button.style.color = 'black';
                button.style.pointerEvents = 'auto';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/download-chart-regular.svg';

                button = document.getElementById('menu_button_qr');
                button.style.pointerEvents = 'auto';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/qrcode-solid.svg';

                if (showChart2) {
                    button = document.getElementById('menu_button_show_chart2');
                    button.style.backgroundColor = '#F9F9F9';
                }

                if (!chart2) {
                    button = document.getElementById('menu_button_load_superimposed_from_hd');
                    button.style.display = 'block';
                    button.style.backgroundColor = '#F9F9F9';
                    button.style.color = 'lightgrey';
                    button.style.pointerEvents = 'none';
                    var image = button.querySelector('img');
                    image.src = '../img/svg/fa/grey-download-chart-solid.svg';
                }

                button = document.getElementById('menu_button_show_supperimposed_chart');
                button.style.display = 'block';
                button.style.backgroundColor = '#F9F9F9';
                button.style.color = 'lightgrey';
                button.style.pointerEvents = 'none';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/grey-clone-solid.svg';

                if (showSuperimposedChart) {
                    // Button für Download aktivieren
                    button = document.getElementById('menu_button_save_to_hd');
                    button.style.color = 'black';
                    button.style.pointerEvents = 'auto';
                    var image = button.querySelector('img');
                    image.src = '../img/svg/fa/download-solid.svg';
                }

                chart1 = false;

                showChart1 = false;
                showChart2 = false;
                showSuperimposedChart = false;

                changePocketColors();
            })
            .catch(error => {
                console.error('Fehler beim Laden der JSON-Datei:', error);
            });
        } else {
            return; // Verlässt die Funktion, ohne den Rest des Codes auszuführen
        }
    } else {
    
        if (showChart2) {
            jsonString = form_to_JSON();
            jsonObj2 = JSON.parse(jsonString);
        }
        
        render_form(jsonObj1);

        assignJsonDataToObject(jsonObj1); // Erstellen des Objekts pockets

        initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
        render_surfaces();

        render_pi_pd_bop();
        render_analysis(jsonObj1);
        renderEmptyBaderstenTable();
        renderEmptyBaderstenChart();
        renderEmptyRamseierTable();
        renderEmptyRamseierChart();
        
        // Button für anzeigen Chart 1 einblenden
        var button = document.getElementById('menu_button_show_chart1');
        button.style.display = 'block';
        button.style.backgroundColor = 'lightgreen';
        button.style.pointerEvents = 'auto';
        
        // Button für Download aktivieren
        button = document.getElementById('menu_button_save_to_hd');
        button.style.color = 'black';
        button.style.pointerEvents = 'auto';
        var image = button.querySelector('img');
        image.src = '../img/svg/fa/download-solid.svg';
        
        button = document.getElementById('menu_button_qr');
        button.style.pointerEvents = 'auto';
        var image = button.querySelector('img');
        image.src = '../img/svg/fa/qrcode-solid.svg';

        if (showChart2) {
            button = document.getElementById('menu_button_show_chart2');
            button.style.backgroundColor = '#F9F9F9';
        }
        
        if (showSuperimposedChart) {
            button = document.getElementById('menu_button_show_supperimposed_chart');
            button.style.backgroundColor = '#F9F9F9';
        }

        showChart1 = true;
        showChart2 = false;
        showSuperimposedChart = false;
        //console.log("chart1", chart1, "chart2", chart2);
        //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);

        changePocketColors();
    }
}

function show_chart2(jsonObj2) {
    if (event.shiftKey) {
        
    // Shift-Linksklick ausgeführt
    var shouldContinue = confirm('Do you really want to delete this periodontal chart?');

    if (shouldContinue) {
        
        // Pfad zur JSON-Datei
        const jsonPath = '../common/json/json_template.json';

        // Verwendung von fetch, um die JSON-Datei zu laden
        fetch(jsonPath)
            .then(response => {
                // Sicherstellen, dass die Anfrage erfolgreich war
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(data => {
                window.jsonObj2 = data;

                render_form(window.jsonObj2);

                assignJsonDataToObject(window.jsonObj2); // Erstellen des Objekts pockets

                initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
                render_surfaces();

                render_pi_pd_bop();
                render_analysis(window.jsonObj2);
                renderEmptyBaderstenTable();
                renderEmptyBaderstenChart();
                renderEmptyRamseierTable();
                renderEmptyRamseierChart();

                // Button für anzeigen Chart 2 ausblenden
                var button = document.getElementById('menu_button_show_chart2');
                button.style.display = 'none';

                // Button für Laden Chart 2 einblenden
                button = document.getElementById('menu_button_load_superimposed_from_hd');
                button.style.display = 'block';
                button.style.backgroundColor = '#F9F9F9';
                button.style.color = 'black';
                button.style.pointerEvents = 'auto';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/download-chart-solid.svg';

                button = document.getElementById('menu_button_qr');
                button.style.pointerEvents = 'auto';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/qrcode-solid.svg';

                if (showChart1) {
                    button = document.getElementById('menu_button_show_chart1');
                    button.style.backgroundColor = '#F9F9F9';
                }

                if (!chart1) {
                    button = document.getElementById('menu_button_load_superimposed_from_hd');
                    button.style.display = 'block';
                    button.style.backgroundColor = '#F9F9F9';
                    button.style.color = 'lightgrey';
                    button.style.pointerEvents = 'none';
                    var image = button.querySelector('img');
                    image.src = '../img/svg/fa/grey-download-chart-regular.svg';
                }

                button = document.getElementById('menu_button_show_supperimposed_chart');
                button.style.display = 'block';
                button.style.backgroundColor = '#F9F9F9';
                button.style.color = 'lightgrey';
                button.style.pointerEvents = 'none';
                var image = button.querySelector('img');
                image.src = '../img/svg/fa/grey-clone-solid.svg';

                if (showSuperimposedChart) {
                    // Button für Download aktivieren
                    button = document.getElementById('menu_button_save_to_hd');
                    button.style.color = 'black';
                    button.style.pointerEvents = 'auto';
                    var image = button.querySelector('img');
                    image.src = '../img/svg/fa/download-solid.svg';
                }

                chart2 = false;

                showChart1 = false;
                showChart2 = false;
                showSuperimposedChart = false;

                changePocketColors();
            })
            .catch(error => {
                console.error('Fehler beim Laden der JSON-Datei:', error);
            });
        } else {
            return; // Verlässt die Funktion, ohne den Rest des Codes auszuführen
        }
    } else {
    
        if (showChart1) {
            jsonString = form_to_JSON();
            jsonObj1 = JSON.parse(jsonString);
        }
        
        render_form(jsonObj2);

        assignJsonDataToObject(jsonObj2); // Erstellen des Objekts pockets

        initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
        render_surfaces();

        render_pi_pd_bop();
        render_analysis(jsonObj2);
        renderEmptyBaderstenTable();
        renderEmptyBaderstenChart();
        renderEmptyRamseierTable();
        renderEmptyRamseierChart();
        
        // Button für anzeigen Chart 1 einblenden
        var button = document.getElementById('menu_button_show_chart2');
        button.style.display = 'block';
        button.style.backgroundColor = 'lightgreen';
        button.style.pointerEvents = 'auto';

        // Button für Download aktivieren
        button = document.getElementById('menu_button_save_to_hd');
        button.style.color = 'black';
        button.style.pointerEvents = 'auto';
        var image = button.querySelector('img');
        image.src = '../img/svg/fa/download-solid.svg';
        
        button = document.getElementById('menu_button_qr');
        button.style.pointerEvents = 'auto';
        var image = button.querySelector('img');
        image.src = '../img/svg/fa/qrcode-solid.svg';

        if (showChart1) {
            button = document.getElementById('menu_button_show_chart1');
            button.style.backgroundColor = '#F9F9F9';
        }
        
        if (showSuperimposedChart) {
            button = document.getElementById('menu_button_show_supperimposed_chart');
            button.style.backgroundColor = '#F9F9F9';
        }

        showChart1 = false;
        showChart2 = true;
        showSuperimposedChart = false;
        //console.log("chart1", chart1, "chart2", chart2);
        //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);

        changePocketColors();
    }
}

function show_supperimposed_chart() {
    // Ausgabe in der Konsole
    //console.log("jsonObj1:", jsonObj1);
    //console.log("jsonObj2:", jsonObj2);
    
    if (showChart1) {
        jsonString = form_to_JSON();
        jsonObj1 = JSON.parse(jsonString);
    } else if (showChart2) {
        jsonString = form_to_JSON();
        jsonObj2 = JSON.parse(jsonString);
    }

    render_form(jsonObj2); // jsonObj2 = BLAUES zweites JSON-Objekt
				
    assignSuperimposedJsonDataToObject(jsonObj1); // superimposedPockets, grün
    assignJsonDataToObject(jsonObj2); // pockets, blau

    render_pi_pd_bop(); // wird mit Inhalt des jsonObj2 (neuer Zahnstatus) durchgeführt
    render_superimposed_form(jsonObj1); // jsonObj1 = GRÜNES erstes JSON-Objekt. Achtung: muss nach render_analysis(jsonObj2); und render_pi_pd_bop(); stehen
    render_superimposed_analysis(jsonObj1, jsonObj2);
    render_superimposed_pi_pd_bop(jsonObj1, jsonObj2);
    
    initializeSuperimposed3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
    render_superimposedSurfaces();
    
    var button = document.getElementById('menu_button_show_chart1');
    button.style.backgroundColor = '#F9F9F9';
    button = document.getElementById('menu_button_show_chart2');
    button.style.backgroundColor = '#F9F9F9';
    button = document.getElementById('menu_button_show_supperimposed_chart');
    button.style.backgroundColor = 'lightgreen';
    
    button = document.getElementById('menu_button_save_to_hd');
    button.style.color = 'lightgrey';
    button.style.pointerEvents = 'none';
    var image = button.querySelector('img');
    image.src = '../img/svg/fa/grey-download-solid.svg';

    button = document.getElementById('menu_button_load_from_hd');
    button.style.color = 'lightgrey';
    button.style.pointerEvents = 'none';
    image = button.querySelector('img');
    image.src = '../img/svg/fa/grey-download-chart-regular.svg';

    button = document.getElementById('menu_button_load_superimposed_from_hd');
    button.style.color = 'lightgrey';
    button.style.pointerEvents = 'none';
    image = button.querySelector('img');
    image.src = '../img/svg/fa/grey-download-chart-solid.svg';

    button = document.getElementById('menu_button_qr');
    button.style.pointerEvents = 'none';
    var image = button.querySelector('img');
    image.src = '../img/svg/fa/grey-qrcode-solid.svg';

    // BLAU Fläche
    var polygonsPeriodontalChart = document.querySelectorAll('.svg_periodontal_chart .pocket');
    for (var i = 0; i < polygonsPeriodontalChart.length; i++) {
        var polygon = polygonsPeriodontalChart[i];
        polygon.style.fill = '#0000BB';
        polygon.style.fillOpacity = 0.5;
    }

    // BLAU Linie
    var polylinesPeriodontalChart = document.querySelectorAll('.svg_periodontal_chart .attachment_level');
    for (var j = 0; j < polylinesPeriodontalChart.length; j++) {
        var polyline = polylinesPeriodontalChart[j];
        polyline.style.stroke = '#0000FF';
        polyline.style.strokeOpacity = 1;
    }

    // ROT Linie
    var polylinesPeriodontalChart = document.querySelectorAll('.svg_periodontal_chart .gingival_margin');
    for (var j = 0; j < polylinesPeriodontalChart.length; j++) {
        var polyline = polylinesPeriodontalChart[j];
        polyline.style.stroke = '#FF0000';
        polyline.style.strokeOpacity = 1;
    }

    // GRÜN Fläche
    var polygonsSuperimposedPeriodontalChart = document.querySelectorAll('.svg_superimposed_periodontal_chart .pocket');
    for (var k = 0; k < polygonsSuperimposedPeriodontalChart.length; k++) {
        var polygon = polygonsSuperimposedPeriodontalChart[k];
        polygon.style.fill = '#01BB00';
        polygon.style.fillOpacity = 0.2;
    }

    // GRÜN Linie
    var polylinesSuperimposedPeriodontalChart = document.querySelectorAll('.svg_superimposed_periodontal_chart .attachment_level, .svg_superimposed_periodontal_chart .gingival_margin');
    for (var l = 0; l < polylinesSuperimposedPeriodontalChart.length; l++) {
        var polyline = polylinesSuperimposedPeriodontalChart[l];
        polyline.style.stroke = '#01BB00';
        polyline.style.strokeOpacity = 1;
    }

    var superimposedChartDiv = document.querySelector('.svg_superimposed_periodontal_chart');
    superimposedChartDiv.style.opacity = 1;

    // Alle gewünschten Elemente auswählen (input, select, textarea, div, body)
    const elements = document.querySelectorAll('input, select, textarea, div');

    // Das gewünschte CSS-Attribut "pointer-events: none;" auf jedes ausgewählte Element anwenden
    elements.forEach(element => {
        // Überprüfen, ob das Element nicht die Klassen "side_menu" oder "menu_button" hat und nicht die ID "form_periodontal_chart" ist
        if (!element.classList.contains('side_menu') &&
            !element.classList.contains('select_button') &&
            !element.classList.contains('menu_button') &&
            !element.classList.contains('modal') &&
            !element.classList.contains('modal-content') &&
            !element.classList.contains('download_button') &&
            !element.classList.contains('close_button') &&
            !element.classList.contains('reset_camera_button') &&
            !element.classList.contains('play_pause_button') &&
            !element.classList.contains('render_ar_button') &&
            !element.classList.contains('download_gltf_button') &&
            !element.classList.contains('close_threejs_button') &&
            !element.classList.contains('video-container') &&
            element.id !== 'form_periodontal_chart' && 
            element.id !== 'svg_periodontal_chart' &&
            element.id !== 'threejs_modal') {
            element.style.pointerEvents = 'none';
        }
    });

    // Diverse IDs Maus-interaktiv machen
    document.getElementById('threejs_modal').style.pointerEvents = 'auto';
    document.getElementById('reset_camera_button').style.pointerEvents = 'auto';
    document.getElementById('play_pause_button').style.pointerEvents = 'auto';
    document.getElementById('download_gltf_button').style.pointerEvents = 'auto';
    
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
      element.disabled = true;
    });
    
    showChart1 = false;
    showChart2 = false;
    showSuperimposedChart = true;
    //console.log("chart1", chart1, "chart2", chart2);
    //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);
}

function changePocketColors() {
    // Die Taschen auf die Standardfarben einfärben
    var polygons = document.querySelectorAll('.svg_periodontal_chart .pocket');
    for (var i = 0; i < polygons.length; i++) {
        var polygon = polygons[i];
        polygon.style.fill = '#000080'; // Blau
        polygon.style.fillOpacity = 0.5;
    }

    var polylines = document.querySelectorAll('.svg_periodontal_chart .attachment_level');
    for (var i = 0; i < polylines.length; i++) {
        var polygon = polylines[i];
        polygon.style.stroke = '#0000FF';
        polygon.style.strokeOpacity = 1;
    }

    var polylines = document.querySelectorAll('.svg_periodontal_chart .gingival_margin');
    for (var i = 0; i < polylines.length; i++) {
        var polygon = polylines[i];
        polygon.style.stroke = '#FF0000';
        polygon.style.strokeOpacity = 1;
    }

    // Das superimposed Polygon ausblenden
    var superimposedChartDiv = document.querySelector('.svg_superimposed_periodontal_chart');
    superimposedChartDiv.style.opacity = 0;
    
    // Alle gewünschten Elemente auswählen (input, select, textarea, div, body)
    const elements = document.querySelectorAll('input, select, textarea, div');

    // Das gewünschte CSS-Attribut "pointer-events: none;" auf jedes ausgewählte Element anwenden
    elements.forEach(element => {
        // Überprüfen, ob das Element nicht die Klassen "side_menu" oder "menu_button" hat und nicht die ID "form_periodontal_chart" ist
        if (!element.classList.contains('side_menu') &&
            !element.classList.contains('select_button') &&
            !element.classList.contains('menu_button') &&
            !element.classList.contains('modal') &&
            !element.classList.contains('modal-content') &&
            !element.classList.contains('download_button') &&
            !element.classList.contains('close_button') &&
            !element.classList.contains('video-container') &&
            element.id !== 'form_periodontal_chart' && 
            element.id !== 'svg_periodontal_chart') {
            element.style.pointerEvents = 'auto';
        }
    });

    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
        element.disabled = false;
    });
}
