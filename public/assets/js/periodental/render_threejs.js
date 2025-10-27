var scene, camera, renderer, controls, additionalYOffsetValue;
let result;
var animationFrameId;
var isAnimationPlaying = true;

function exportScene() {
    const exporter = new THREE.GLTFExporter();

    exporter.parse(scene, function (gltf) {
        // Konvertieren des GLTF-Objekts in einen JSON-String
        const gltfString = JSON.stringify(gltf);
        
        // Erstellen eines Blobs aus dem String
        const blob = new Blob([gltfString], {type: 'text/plain'});

        // Erstellen eines Download-Links
        const link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);

        // Setzen des Download-Links und -Namens
        link.href = URL.createObjectURL(blob);
        link.download = 'scene.gltf';

        // Auslösen des Downloads
        link.click();

        // Bereinigung
        document.body.removeChild(link);
    }, { binary: false });
}

function exportSceneToAR() {
    const exporter = new THREE.GLTFExporter();

    exporter.parse(scene, function (gltf) {
        // Konvertieren des GLTF-Objekts in einen JSON-String
        const gltfString = JSON.stringify(gltf);

        // Konvertieren des Strings in eine Base64-kodierte Data-URI
        const base64Encoded = btoa(unescape(encodeURIComponent(gltfString)));
        const dataUri = 'data:application/octet-stream;base64,' + base64Encoded;

        // Setzen der Data-URI als Quelle für den Model Viewer
        const modelViewer = document.querySelector('model-viewer');
        modelViewer.src = dataUri;
    }, { binary: false });
}

function drawHorseshoeLine(radius, yOffset, zOffset, color) {
    const points = [];
    const angleStep = Math.PI / 20; // Feinheit der Linie

    for (let angle = 0; angle <= Math.PI; angle += angleStep) {
        points.push(new THREE.Vector3(radius * Math.cos(angle), yOffset, radius * Math.sin(angle) + zOffset));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: color });
    const line = new THREE.Line(geometry, material);

    scene.add(line);
}

function resetCamera() {
	camera.position.set(-4.557234662107485, 5.707731258588391, 3.6693071528164074);
	camera.rotation.set(-0.7502251056739929, -0.59868862698796, -0.48364076767519576);
    camera.updateProjectionMatrix();
	
	// Setzen des OrbitControls target
    if (controls) {
        controls.target.set(0.17756233020217607, 1.178885826640126, -1.412923568387541);
		//controls.autoRotate = true;
		//controls.autoRotateSpeed = -0.5;
    }
}

function playPauseThreeJs() {
	if (typeof controls === 'undefined' || typeof isAnimationPlaying === 'undefined') {
        console.log('Rendering ist noch nicht initialisiert.');
        return; // Frühe Rückkehr, um Fehler zu vermeiden
    }
	
    var playPauseButton = document.getElementById('play_pause_button');
    
    if (isAnimationPlaying) {
        // Animation pausieren
        playPauseButton.innerHTML = '<img src="../img/svg/fa/play-solid.svg" height="14">';
		controls.autoRotate = false;
    } else {
        playPauseButton.innerHTML = '<img src="../img/svg/fa/pause-solid.svg" height="14">';
		controls.autoRotate = true;
    }

    isAnimationPlaying = !isAnimationPlaying;
}

/*function logCameraSettings() {
    console.log("Kamera-Position:", camera.position);
    console.log("Kamera-Rotation:", camera.rotation);

    if (controls) {
        console.log("OrbitControls-Target:", controls.target);
        console.log("OrbitControls-MinDistance:", controls.minDistance);
        console.log("OrbitControls-MaxDistance:", controls.maxDistance);
        console.log("OrbitControls-MinZoom:", controls.minZoom);
        console.log("OrbitControls-MaxZoom:", controls.maxZoom);
        console.log("OrbitControls-MinPolarAngle:", controls.minPolarAngle);
        console.log("OrbitControls-MaxPolarAngle:", controls.maxPolarAngle);
        console.log("OrbitControls-MinAzimuthAngle:", controls.minAzimuthAngle);
        console.log("OrbitControls-MaxAzimuthAngle:", controls.maxAzimuthAngle);
    }
}*/

var toothPositions = {
    11: { xOffset: 0, zOffset: 0, yRotation: -0.1 },
    12: { xOffset: 0, zOffset: 0, yRotation: -0.4 },
    13: { xOffset: 0, zOffset: 0, yRotation: -0.6 },
    14: { xOffset: 0, zOffset: 0, yRotation: -0.7 },
    15: { xOffset: -0.2, zOffset: 0, yRotation: -0.9 },
    16: { xOffset: -0.6, zOffset: 0, yRotation: -1.1 },
    17: { xOffset: -1.2, zOffset: 0, yRotation: -1.3 },
    18: { xOffset: -1.9, zOffset: 0, yRotation: -1.5 },

    21: { xOffset: 0, zOffset: 0, yRotation: 0.1 },
    22: { xOffset: 0, zOffset: 0, yRotation: 0.4 },
    23: { xOffset: 0, zOffset: 0, yRotation: 0.6 },
    24: { xOffset: 0, zOffset: 0, yRotation: 0.7 },
    25: { xOffset: 0.2, zOffset: 0, yRotation: 0.9 },
    26: { xOffset: 0.6, zOffset: 0, yRotation: 1.1 },
    27: { xOffset: 1.2, zOffset: 0, yRotation: 1.3 },
    28: { xOffset: 1.9, zOffset: 0, yRotation: 1.5 },

    31: { xOffset: 0, zOffset: 0, yRotation: 0.1 },
    32: { xOffset: 0, zOffset: 0, yRotation: 0.4 },
    33: { xOffset: 0, zOffset: 0, yRotation: 0.6 },
    34: { xOffset: 0, zOffset: 0, yRotation: 0.7 },
    35: { xOffset: 0.2, zOffset: 0, yRotation: 0.9 },
    36: { xOffset: 0.6, zOffset: 0, yRotation: 1.1 },
    37: { xOffset: 1.2, zOffset: 0, yRotation: 1.3 },
    38: { xOffset: 1.9, zOffset: 0, yRotation: 1.5 },

    41: { xOffset: 0, zOffset: 0, yRotation: -0.1 },
    42: { xOffset: 0, zOffset: 0, yRotation: -0.4 },
    43: { xOffset: 0, zOffset: 0, yRotation: -0.6 },
    44: { xOffset: 0, zOffset: 0, yRotation: -0.7 },
    45: { xOffset: -0.2, zOffset: 0, yRotation: -0.9 },
    46: { xOffset: -0.6, zOffset: 0, yRotation: -1.1 },
    47: { xOffset: -1.2, zOffset: 0, yRotation: -1.3 },
    48: { xOffset: -1.9, zOffset: 0, yRotation: -1.5 },
};

function getColorForTrapezoid(tooth, trapezoidType) {
    let isRed = false;
    let color;

    switch (trapezoidType) {
        case 'bukkalDistal':
            isRed = tooth.bop.db === 1 || tooth.bop.b === 1;
            color = isRed ? 0xFF0000 : 0x0000FF; // Rot oder Blau
            break;
        case 'bukkalMesial':
            isRed = tooth.bop.b === 1 || tooth.bop.mb === 1;
            color = isRed ? 0xFF0000 : 0x0000FF; // Rot oder Blau
            break;
        case 'palatinalDistal':
            isRed = tooth.bop.dp === 1 || tooth.bop.p === 1 || tooth.bop.dl === 1 || tooth.bop.l === 1;
            color = isRed ? 0xFF0000 : 0x0000FF; // Rot oder Blau
            break;
        case 'palatinalMesial':
            isRed = tooth.bop.mp === 1 || tooth.bop.p === 1 || tooth.bop.ml === 1 || tooth.bop.l === 1;
            color = isRed ? 0xFF0000 : 0x0000FF; // Rot oder Blau
            break;
        case 'verbindungDistal':
            isRed = tooth.bop.dp === 1 || tooth.bop.dl === 1 || tooth.bop.db === 1;
            color = isRed ? 0xFF7C7C : 0x788FFF; // Hellrot oder Hellblau
            break;
        case 'verbindungMesial':
            isRed = tooth.bop.mp === 1 || tooth.bop.ml === 1 || tooth.bop.mb === 1;
            color = isRed ? 0xFF7C7C : 0x788FFF; // Hellrot oder Hellblau
            break;
    }
    return color;
}

function initialize3DEnvironment() {
    if (!scene) {
        // Szene zum ersten Mal erstellen
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-4.557234662107485, 5.707731258588391, 3.6693071528164074);
        camera.rotation.set(-0.7502251056739929, -0.59868862698796, -0.48364076767519576);

        renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, antialias: true });
        renderer.setSize(968, 600);

        var threejsContainer = document.getElementById('threejs_modal');
        threejsContainer.appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(0.17756233020217607, 1.178885826640126, -1.412923568387541);
		controls.autoRotate = true;
		controls.autoRotateSpeed = -0.5;
		
		// Deaktiviert AutoRotate, wenn der Benutzer die Steuerung übernimmt
		controls.addEventListener('start', function() {
			controls.autoRotate = false;
			document.getElementById('play_pause_button').innerHTML = '<img src="../img/svg/fa/play-solid.svg" height="14">';
			isAnimationPlaying = false;
		});
    } else {
        // Szene bereits vorhanden, nur bereinigen
        while (scene.children.length > 0) { 
            scene.remove(scene.children[0]); 
        }
    }

    // Die Szene und die Controls aktualisieren, falls notwendig
    if (controls) {
        controls.update();
    }
	
	// Erstellen der Orientistungsebene
	var planeGeometry = new THREE.PlaneGeometry(10, 10); // Grösse der Ebene
	var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xE0E0E0, side: THREE.DoubleSide }); // Hellgrau
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = -Math.PI / 2; // Dreht die Ebene, um sie horizontal zu machen
	plane.position.y = 0; // Positioniert die Ebene auf der Höhe y = 0
	scene.add(plane);

	// Erstellen des Orientistungsrasters
	var gridHelper = new THREE.GridHelper(10, 10); // Grösse und Unterteilungen des Rasters
	gridHelper.position.y = 0; // Positioniert das Raster auf der Höhe y = 0
	scene.add(gridHelper);
	
	// AxesHelper hinzufügen
	var axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);
		
	// Zeichnen der Hufeisen-Linien für Ober- und Unterkiefer
    const upperJawRadius = 3.5; // Anpassen je nach Szene
    const lowerJawRadius = 3; // Anpassen je nach Szene
    const upperJawYOffset = 4.2; // Höhe des Oberkiefers
    const lowerJawYOffset = 1.8; // Höhe des Unterkiefers
	const zOffset = -2; // Verschiebung entlang der z-Achse

    drawHorseshoeLine(upperJawRadius, upperJawYOffset, zOffset, 0x000000); // Rot für Oberkiefer
    drawHorseshoeLine(lowerJawRadius, lowerJawYOffset, zOffset, 0x000000); // Blau für Unterkiefer

	function createTrapezoid(vertices, color) {
		var trapezoidGeometry = new THREE.BufferGeometry();
		trapezoidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
		trapezoidGeometry.setIndex([0, 1, 2, 2, 3, 0]);

		var trapezoidMaterial = new THREE.MeshBasicMaterial({
			color: color,
			transparent: true,
			opacity: 0.7,  // 0.0 = vollständig transparent, 1.0 = vollständig opak
			side: THREE.DoubleSide
		});
		var trapezoidMesh = new THREE.Mesh(trapezoidGeometry, trapezoidMaterial);
		scene.add(trapezoidMesh);

		// Randfarbe und -dicke (als Linie)
		var edgeGeometry = new THREE.EdgesGeometry(trapezoidGeometry);
		var edgeMaterial = new THREE.LineBasicMaterial({ color: 0x666666, linewidth: 1 });
		var edge = new THREE.LineSegments(edgeGeometry, edgeMaterial);
		scene.add(edge);
		
		// Rückgabe der erstellten Objekte
    	return { trapezoidMesh, edge };
	}
	
	function scaleAndCenterCoordinates(x, y, z, scaleFactor, offsetX, offsetY, addAdditionalYOffset = false, shouldMirrorY = false) {
		var newY = y;
		if (shouldMirrorY) {
			newY = -newY; // Spiegeln der y-Koordinate
		}
		if (addAdditionalYOffset) {
				newY = newY - additionalYOffsetValue;
		}
		return {
			x: (x - offsetX) / scaleFactor,
			y: (newY + offsetY) / scaleFactor,
			z: z / 5
		};
	}

	function createTrapezoidsForTooth(toothNumber) {
		var tooth = pockets[toothNumber]; // Definieren Sie tooth hier
		var toothData = toothPositions[toothNumber];
		if (!toothData || !pockets[toothNumber].present) {
			return; // Zahn nicht vorhanden, also keine Trapeze erstellen
		}

		var coordinates = pockets[toothNumber].coordinates;
		var isUpperJaw = tooth.jaw === 'upper';
		
		// Erstellen einer neuen Gruppe für jeden Zahn
		var toothGroup = new THREE.Group();

		if (isUpperJaw) {
			// Offsets der Taschen im Oberkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1000;
			additionalYOffsetValue = 1275; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		} else {
			// Offsets der Taschen im Unterkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1500;
			additionalYOffsetValue = 2500; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		}
		
		// Rendering der Taschen
		
		var scaledCoord1, scaledCoord2, scaledCoord3, scaledCoord4

		// Bukkales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(bukkalTrapez1Vertices, getColorForTrapezoid(pockets[toothNumber], 'bukkalDistal'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Bukkales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z
		]);

		result = createTrapezoid(bukkalTrapez2Vertices, getColorForTrapezoid(pockets[toothNumber], 'bukkalMesial'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez1Vertices, getColorForTrapezoid(pockets[toothNumber], 'palatinalDistal'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez2Vertices, getColorForTrapezoid(pockets[toothNumber], 'palatinalMesial'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Verbindung-Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var verbindungTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);

		result = createTrapezoid(verbindungTrapez1Vertices, getColorForTrapezoid(pockets[toothNumber], 'verbindungDistal'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Verbindung-Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);

		var verbindungTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);


		result = createTrapezoid(verbindungTrapez2Vertices, getColorForTrapezoid(pockets[toothNumber], 'verbindungMesial'));
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Anpassen der Position und Rotation der Gruppe basierend auf toothData
		toothGroup.position.x = toothData.xOffset;
		toothGroup.position.z = toothData.zOffset;
		toothGroup.rotation.y = toothData.yRotation;

		// Hinzufügen der Zahngruppe zur Szene
		scene.add(toothGroup);
	}

	// Iterieren über alle Zähne in pockets
		for (var toothNumber in pockets) {
			createTrapezoidsForTooth(toothNumber);
		}

	// Stoppen der vorherigen Animation, falls vorhanden, und Starten einer neuen
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId);
	}
	// Animations-Loop
	var animate = function () {
		animationFrameId = requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	};

	animate();
	
	//console.log("pockets", pockets);
}

function resetToothAreas() {
    for (var toothNumber in pockets) {
        if (pockets.hasOwnProperty(toothNumber)) {
            pockets[toothNumber].initializeAreas();
        }
    }
}

function initializeSuperimposed3DEnvironment() {
	if (!scene) {
        // Szene zum ersten Mal erstellen
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-4.557234662107485, 5.707731258588391, 3.6693071528164074);
        camera.rotation.set(-0.7502251056739929, -0.59868862698796, -0.48364076767519576);

        renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, antialias: true });
        renderer.setSize(968, 600);

        var threejsContainer = document.getElementById('threejs_modal');
        threejsContainer.appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(0.17756233020217607, 1.178885826640126, -1.412923568387541);
		controls.autoRotate = true;
		controls.autoRotateSpeed = -0.5;
		
		// Deaktiviert AutoRotate, wenn der Benutzer die Steuerung übernimmt
		controls.addEventListener('start', function() {
			controls.autoRotate = false;
			document.getElementById('play_pause_button').innerHTML = '<img src="../img/svg/fa/play-solid.svg" height="14">';
			isAnimationPlaying = false;
		});
	} else {
        // Szene bereits vorhanden, nur bereinigen
        while (scene.children.length > 0) { 
            scene.remove(scene.children[0]); 
        }
    }

    // Die Szene und die Controls aktualisieren, falls notwendig
    if (controls) {
        controls.update();
    }
	
	// Erstellen der Orientistungsebene
	var planeGeometry = new THREE.PlaneGeometry(10, 10); // Grösse der Ebene
	var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xE0E0E0, side: THREE.DoubleSide }); // Hellgrau
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = -Math.PI / 2; // Dreht die Ebene, um sie horizontal zu machen
	plane.position.y = 0; // Positioniert die Ebene auf der Höhe y = 0
	scene.add(plane);

	// Erstellen des Orientistungsrasters
	var gridHelper = new THREE.GridHelper(10, 10); // Grösse und Unterteilungen des Rasters
	gridHelper.position.y = 0; // Positioniert das Raster auf der Höhe y = 0
	scene.add(gridHelper);
	
	// AxesHelper hinzufügen
	var axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);
	
	// Zeichnen der Hufeisen-Linien für Ober- und Unterkiefer
    const upperJawRadius = 3.5; // Anpassen je nach Szene
    const lowerJawRadius = 3; // Anpassen je nach Szene
    const upperJawYOffset = 4.2; // Höhe des Oberkiefers
    const lowerJawYOffset = 1.8; // Höhe des Unterkiefers
	const zOffset = -2; // Verschiebung entlang der z-Achse

    drawHorseshoeLine(upperJawRadius, upperJawYOffset, zOffset, 0x000000); // Rot für Oberkiefer
    drawHorseshoeLine(lowerJawRadius, lowerJawYOffset, zOffset, 0x000000); // Blau für Unterkiefer

	function createTrapezoid(vertices, color) {
		var trapezoidGeometry = new THREE.BufferGeometry();
		trapezoidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
		trapezoidGeometry.setIndex([0, 1, 2, 2, 3, 0]);

		var trapezoidMaterial = new THREE.MeshBasicMaterial({
			color: color,
			transparent: true,
			opacity: 0.7,  // 0.0 = vollständig transparent, 1.0 = vollständig opak
			side: THREE.DoubleSide
		});
		var trapezoidMesh = new THREE.Mesh(trapezoidGeometry, trapezoidMaterial);
		scene.add(trapezoidMesh);

		// Randfarbe und -dicke (als Linie)
		var edgeGeometry = new THREE.EdgesGeometry(trapezoidGeometry);
		var edgeMaterial = new THREE.LineBasicMaterial({ color: 0x666666, linewidth: 1 });
		var edge = new THREE.LineSegments(edgeGeometry, edgeMaterial);
		scene.add(edge);
		
		// Rückgabe der erstellten Objekte
    	return { trapezoidMesh, edge };
	}
	
	function scaleAndCenterCoordinates(x, y, z, scaleFactor, offsetX, offsetY, addAdditionalYOffset = false, shouldMirrorY = false) {
		var newY = y;
		if (shouldMirrorY) {
			newY = -newY; // Spiegeln der y-Koordinate
		}
		if (addAdditionalYOffset) {
				newY = newY - additionalYOffsetValue;
		}
		return {
			x: (x - offsetX) / scaleFactor,
			y: (newY + offsetY) / scaleFactor,
			z: z / 5
		};
	}
	
	function createTrapezoidsForTooth(toothNumber) {
		var tooth = pockets[toothNumber]; // Definieren Sie tooth hier
		var toothData = toothPositions[toothNumber];
		if (!toothData || !pockets[toothNumber].present) {
			return; // Zahn nicht vorhanden, also keine Trapeze erstellen
		}

		var coordinates = pockets[toothNumber].coordinates;
		var isUpperJaw = tooth.jaw === 'upper';
		
		// Erstellen einer neuen Gruppe für jeden Zahn
		var toothGroup = new THREE.Group();

		if (isUpperJaw) {
			// Offsets der Taschen im Oberkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1000;
			additionalYOffsetValue = 1275; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		} else {
			// Offsets der Taschen im Unterkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1500;
			additionalYOffsetValue = 2500; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		}
		
		// Rendering der Taschen
		
		var scaledCoord1, scaledCoord2, scaledCoord3, scaledCoord4

		// Bukkales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(bukkalTrapez1Vertices, 0x0000ff);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Bukkales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z
		]);

		result = createTrapezoid(bukkalTrapez2Vertices, 0x0000ff);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez1Vertices, 0x0000ff);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez2Vertices, 0x0000ff);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Verbindung-Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var verbindungTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);

		result = createTrapezoid(verbindungTrapez1Vertices, 0x788FFF);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Verbindung-Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);

		var verbindungTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);

		result = createTrapezoid(verbindungTrapez2Vertices, 0x788FFF);
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Skalierung anwenden
		toothGroup.scale.set(1.001, 1, 1.001);
		
		// Anpassen der Position und Rotation der Gruppe basierend auf toothData
		toothGroup.position.x = toothData.xOffset;
		toothGroup.position.z = toothData.zOffset;
		toothGroup.rotation.y = toothData.yRotation;

		// Hinzufügen der Zahngruppe zur Szene
		scene.add(toothGroup);
	}

	// Iterieren über alle Zähne in pockets
		for (var toothNumber in pockets) {
			createTrapezoidsForTooth(toothNumber);
		}

	function createSuperimposedTrapezoidsForTooth(toothNumber) {
		var tooth = superimposedPockets[toothNumber]; // Definieren Sie tooth hier
		var toothData = toothPositions[toothNumber];
		if (!toothData || !superimposedPockets[toothNumber].present) {
			return; // Zahn nicht vorhanden, also keine Trapeze erstellen
		}

		var coordinates = superimposedPockets[toothNumber].coordinates;
		
		var isUpperJaw = tooth.jaw === 'upper';
		
		// Erstellen einer neuen Gruppe für jeden Zahn
		var toothGroup = new THREE.Group();

		if (isUpperJaw) {
			// Offsets der Taschen im Oberkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1000;
			additionalYOffsetValue = 1275; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		} else {
			// Offsets der Taschen im Unterkiefer
			var scaleFactor = 100;
			var offsetX = 680;
			var offsetY = 1500;
			additionalYOffsetValue = 2500; // Unterschiedlicher Y-Offset für Ober- und Unterkiefer
		}
		
		// Rendering der Taschen
		
		var scaledCoord1, scaledCoord2, scaledCoord3, scaledCoord4

		// Bukkales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(bukkalTrapez1Vertices, 0x09FF00); // grün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Bukkales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_gm_b, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_b, coordinates.y_al_b, 1, scaleFactor, offsetX, offsetY, false, true);

		var bukkalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z
		]);

		result = createTrapezoid(bukkalTrapez2Vertices, 0x09FF00); // grün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez1Vertices, 0x09FF00); // grün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Palatinales Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_gm_p, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_p, coordinates.y_al_p, -1, scaleFactor, offsetX, offsetY, true, false);

		var palatinalTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Unten rechts
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Oben links
		]);

		result = createTrapezoid(palatinalTrapez2Vertices, 0x09FF00); // grün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);

		// Verbindung-Trapez distal
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_gm_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_db, coordinates.y_al_db, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_al_dp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_dp, coordinates.y_gm_dp, -1, scaleFactor, offsetX, offsetY, true, false);

		var verbindungTrapez1Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);

		result = createTrapezoid(verbindungTrapez1Vertices, 0x90EE90); // hellgrün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Verbindung-Trapez mesial
		scaledCoord1 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_gm_mb, 1, scaleFactor, offsetX, offsetY, false, true);
		scaledCoord2 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_gm_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord3 = scaleAndCenterCoordinates(coordinates.x_mp, coordinates.y_al_mp, -1, scaleFactor, offsetX, offsetY, true, false);
		scaledCoord4 = scaleAndCenterCoordinates(coordinates.x_mb, coordinates.y_al_mb, 1, scaleFactor, offsetX, offsetY, false, true);

		var verbindungTrapez2Vertices = new Float32Array([
			scaledCoord1.x, scaledCoord1.y, scaledCoord1.z,  // Unten links (bukkal)
			scaledCoord2.x, scaledCoord2.y, scaledCoord2.z,  // Oben links (palatinal)
			scaledCoord3.x, scaledCoord3.y, scaledCoord3.z,  // Oben rechts (palatinal)
			scaledCoord4.x, scaledCoord4.y, scaledCoord4.z   // Unten rechts (bukkal)
		]);

		result = createTrapezoid(verbindungTrapez2Vertices, 0x90EE90); // hellgrün
		toothGroup.add(result.trapezoidMesh);
		toothGroup.add(result.edge);
		
		// Anpassen der Position und Rotation der Gruppe basierend auf toothData
		toothGroup.position.x = toothData.xOffset;
		toothGroup.position.z = toothData.zOffset;
		toothGroup.rotation.y = toothData.yRotation;

		// Hinzufügen der Zahngruppe zur Szene
		scene.add(toothGroup);
	}

	// Iterieren über alle Zähne in superimposedPockets
		for (var toothNumber in superimposedPockets) {
			createSuperimposedTrapezoidsForTooth(toothNumber);
		}

	// Stoppen der vorherigen Animation, falls vorhanden, und Starten einer neuen
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId);
	}
	// Animations-Loop
	var animate = function () {
		animationFrameId = requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	};

	animate();
}

function resetSuperimposedToothAreas() {
    for (var toothNumber in superimposedPockets) {
        if (superimposedPockets.hasOwnProperty(toothNumber)) {
            superimposedPockets[toothNumber].initializeAreas();
        }
    }
}
