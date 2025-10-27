// Superimposed surfaces berechnen und ausgeben
    function render_superimposedSurfaces() {
		var gesamtFollowUpFlaecheSumme = 0;
		var gesamtFollowUpBukkalLingualFlaecheSumme = 0;
		var gesamtFollowUpInterdentalFlaecheSumme = 0;
		
		var gesamtBaselineFlaecheSumme = 0;
		var gesamtBaselineBukkalLingualFlaecheSumme = 0;
		var gesamtBaselineInterdentalFlaecheSumme = 0;
		
		var gesamtFollowUpFlaecheProzent = 0;
		var gesamtFollowUpBukkalLingualFlaecheProzent = 0;
		var gesamtFollowUpInterdentalFlaecheProzent = 0;
		
		for (var toothNumber in pockets) {
			if (pockets.hasOwnProperty(toothNumber)) {
				var tooth = pockets[toothNumber];
				
				if (tooth.present) {
					// Summieren der Flächen im Objekt pockets
					gesamtFollowUpFlaecheSumme += tooth.areas.totalArea / 42.25;
					gesamtFollowUpInterdentalFlaecheSumme += (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25;
					gesamtFollowUpBukkalLingualFlaecheSumme += (tooth.areas.distobuccalArea + tooth.areas.mesiobuccalArea + tooth.areas.distopalatalArea + tooth.areas.mesiopalatalArea) / 42.25;
				}
			}
		}
		
		for (var toothNumber in superimposedPockets) {
			if (superimposedPockets.hasOwnProperty(toothNumber)) {
				var tooth = superimposedPockets[toothNumber];
				
				if (tooth.present) {
					// Summieren der Flächen im Objekt superimposedPockets
					gesamtBaselineFlaecheSumme += tooth.areas.totalArea / 42.25;
					gesamtBaselineInterdentalFlaecheSumme += (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25;
					gesamtBaselineBukkalLingualFlaecheSumme += (tooth.areas.distobuccalArea + tooth.areas.mesiobuccalArea + tooth.areas.distopalatalArea + tooth.areas.mesiopalatalArea) / 42.25;
				}
			}
		}
		
		gesamtFollowUpFlaecheProzent = gesamtFollowUpFlaecheSumme * 100 / gesamtBaselineFlaecheSumme;
		gesamtFollowUpBukkalLingualFlaecheProzent = gesamtFollowUpBukkalLingualFlaecheSumme * 100 / gesamtBaselineBukkalLingualFlaecheSumme;
		gesamtFollowUpInterdentalFlaecheProzent = gesamtFollowUpInterdentalFlaecheSumme * 100 / gesamtBaselineInterdentalFlaecheSumme;
		
		// In der Konsole ausgeben
		/*console.log("Gesamtfläche baseline: " + gesamtBaselineFlaecheSumme);
		console.log("Gesamt bukkalen/lingualen Flächen baseline: " + gesamtBaselineBukkalLingualFlaecheSumme);
		console.log("Gesamt interdentalen Flächen baseline: " + gesamtBaselineInterdentalFlaecheSumme);
		
		console.log("Gesamtfläche follow-up: " + gesamtFollowUpFlaecheSumme);
		console.log("Gesamt bukkalen/lingualen Flächen follow-up: " + gesamtFollowUpBukkalLingualFlaecheSumme);
		console.log("Gesamt interdentalen Flächen follow-up: " + gesamtFollowUpInterdentalFlaecheSumme);
		
		console.log("% Gesamtfläche follow-up: " + gesamtFollowUpFlaecheProzent);
		console.log("% Gesamt bukkalen/lingualen follow-up: " + gesamtFollowUpBukkalLingualFlaecheProzent);
		console.log("% Gesamt interdentalen Flächen follow-up: " + gesamtFollowUpInterdentalFlaecheProzent);*/
		
		updateSuperimposedVisualization(gesamtFollowUpFlaecheProzent, gesamtFollowUpBukkalLingualFlaecheProzent, gesamtFollowUpInterdentalFlaecheProzent);
		setSuperimposedTotalAreaText(gesamtBaselineFlaecheSumme, gesamtFollowUpFlaecheSumme, gesamtFollowUpFlaecheProzent);
		
		setSuperimposedBukkalLingualAreaText(gesamtBaselineBukkalLingualFlaecheSumme, gesamtFollowUpBukkalLingualFlaecheSumme, gesamtFollowUpBukkalLingualFlaecheProzent);
		setSuperimposedInterdentalAreaText(gesamtBaselineInterdentalFlaecheSumme, gesamtFollowUpInterdentalFlaecheSumme, gesamtFollowUpInterdentalFlaecheProzent);
	}
		
	function updateSuperimposedVisualization(gesamtFollowUpFlaecheProzent, gesamtFollowUpBukkalLingualFlaecheProzent, gesamtFollowUpInterdentalFlaecheProzent) {
		updateSuperimposedSingleVisualization('square-background', 'rectangle-overlay', 'percentage-text', gesamtFollowUpFlaecheProzent);
		updateSuperimposedSingleVisualization('buccallingual-square-background', 'buccallingual-rectangle-overlay', 'buccallingual-percentage-text', gesamtFollowUpBukkalLingualFlaecheProzent);
		updateSuperimposedSingleVisualization('interdental-square-background', 'interdental-rectangle-overlay', 'interdental-percentage-text', gesamtFollowUpInterdentalFlaecheProzent);
	}

	function updateSuperimposedSingleVisualization(squareId, rectangleId, textId, percentage) {
		var squareBackground = document.getElementById(squareId);
		var rectangleOverlay = document.getElementById(rectangleId);
		var percentageText = document.getElementById(textId);

		if (!isNaN(percentage) && percentage !== null && percentage !== undefined) {
			var roundedPercentage = Math.round(percentage);
			rectangleOverlay.style.height = roundedPercentage + '%';
			percentageText.textContent = roundedPercentage + '%';

			// Setze die Hintergrundfarbe basierend auf der squareId
			if (squareId === 'square-background' || squareId === 'buccallingual-square-background') {
				squareBackground.style.backgroundColor = '#53ff4d'; // Dunkleres Grün
			} else if (squareId === 'interdental-square-background') {
				squareBackground.style.backgroundColor = '#a0ff99'; // Helleres Grün
			}

			// Setze die Hintergrundfarbe basierend auf der rectangleId
			if (rectangleId === 'rectangle-overlay' || rectangleId === 'buccallingual-rectangle-overlay') {
				rectangleOverlay.style.backgroundColor = '#4d4dff'; // Dunkleres Blau
			} else if (rectangleId === 'interdental-rectangle-overlay') {
				rectangleOverlay.style.backgroundColor = '#a1b1ff'; // Helleres Blau
			}
		} else {
			rectangleOverlay.style.height = '0%';
			percentageText.textContent = '-';
			squareBackground.style.backgroundColor = '#e7f3fd'; // Hellblau
		}
	}

	function setSuperimposedTotalAreaText(gesamtBaselineFlaecheSumme, gesamtFollowUpFlaecheSumme, gesamtFollowUpFlaecheProzent) {
		var beschriftungContainer = document.querySelector('.beschriftung-bop-visualization-container');

		if (beschriftungContainer) {
			beschriftungContainer.innerHTML = "Baseline: <b>" + (gesamtBaselineFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Follow-up: <b>" + (gesamtFollowUpFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + gesamtFollowUpFlaecheProzent.toFixed(1) + "%)";
		}
	}

	function setSuperimposedBukkalLingualAreaText(gesamtBaselineBukkalLingualFlaecheSumme, gesamtFollowUpBukkalLingualFlaecheSumme, gesamtFollowUpBukkalLingualFlaecheProzent) {
		var beschriftungContainer = document.querySelector('.beschriftung-bop-buccallingual-visualization-container');

		if (beschriftungContainer) {
			beschriftungContainer.innerHTML = "Exterior and interior: <b>" + (gesamtBaselineBukkalLingualFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Follow-up: <b>" + (gesamtFollowUpBukkalLingualFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + gesamtFollowUpBukkalLingualFlaecheProzent.toFixed(1) + "%)<br /><br /><br />";
		}
	}

	function setSuperimposedInterdentalAreaText(gesamtBaselineInterdentalFlaecheSumme, gesamtFollowUpInterdentalFlaecheSumme, gesamtFollowUpInterdentalFlaecheProzent) {
		var beschriftungContainer = document.querySelector('.beschriftung-bop-interdental-visualization-container');

		if (beschriftungContainer) {
			beschriftungContainer.innerHTML = "Interdental spaces: <b>" + (gesamtBaselineInterdentalFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Follow-up: <b>" + (gesamtFollowUpInterdentalFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + gesamtFollowUpInterdentalFlaecheProzent.toFixed(1) + "%)";
		}
	}

// BOP surfaces berechnen und ausgeben
    function render_surfaces() {
		var gesamtFlaecheSumme = 0;
		var gesamtBukkalLingualFlaecheSumme = 0;
		var gesamtInterdentalFlaecheSumme = 0;

		var gesamtBopPosFlaecheSumme = 0;
		var bukkalLingualBopPosFlaecheSumme = 0;
		var interdentalBopPosFlaecheSumme = 0;
		
		var gesamtBopPosFlaecheProzent = 0;
		var bukkalLingualBopPosFlaecheProzent = 0;		
		var interdentalBopPosFlaecheProzent = 0;
		
		for (var toothNumber in pockets) {
			if (pockets.hasOwnProperty(toothNumber)) {
				var tooth = pockets[toothNumber];
				
				if (tooth.present) {
					
					// Zuerst alle bop_pos Flächen auf 0 setzen
					tooth.distobuccalArea.bop_pos = 0;
					tooth.mesiobuccalArea.bop_pos = 0;
					tooth.distopalatalArea.bop_pos = 0;
					tooth.mesiopalatalArea.bop_pos = 0;
					tooth.distalArea.bop_pos = 0;
					tooth.mesialArea.bop_pos = 0;

					if (tooth.bop.b === 1) {
						tooth.distobuccalArea.bop_pos = tooth.areas.distobuccalArea;
						tooth.mesiobuccalArea.bop_pos = tooth.areas.mesiobuccalArea;
					}			
					if (tooth.bop.db === 1) {
						tooth.distobuccalArea.bop_pos = tooth.areas.distobuccalArea;
						tooth.distalArea.bop_pos = tooth.areas.distalArea;
					}
					if (tooth.bop.mb === 1) {
						tooth.mesiobuccalArea.bop_pos = tooth.areas.mesiobuccalArea;
						tooth.mesialArea.bop_pos = tooth.areas.mesialArea;
					}

					if (tooth.bop.p === 1 || tooth.bop.l === 1) {
						tooth.distopalatalArea.bop_pos = tooth.areas.distopalatalArea;
						tooth.mesiopalatalArea.bop_pos = tooth.areas.mesiopalatalArea;
					}				
					if (tooth.bop.dp === 1 || tooth.bop.dl === 1) {
						tooth.distopalatalArea.bop_pos = tooth.areas.distopalatalArea;
						tooth.distalArea.bop_pos = tooth.areas.distalArea;
					}
					if (tooth.bop.mp === 1 || tooth.bop.ml === 1) {
						tooth.mesiopalatalArea.bop_pos = tooth.areas.mesiopalatalArea;
						tooth.mesialArea.bop_pos = tooth.areas.mesialArea;
					}

					// Summieren der Flächen
					gesamtFlaecheSumme += tooth.areas.totalArea / 42.25;
					gesamtBukkalLingualFlaecheSumme += (tooth.areas.distobuccalArea + tooth.areas.mesiobuccalArea + tooth.areas.distopalatalArea + tooth.areas.mesiopalatalArea) / 42.25;
					gesamtInterdentalFlaecheSumme += (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25;

					gesamtBopPosFlaecheSumme += (tooth.distobuccalArea.bop_pos + tooth.mesiobuccalArea.bop_pos + tooth.distopalatalArea.bop_pos + tooth.mesiopalatalArea.bop_pos + tooth.distalArea.bop_pos + tooth.mesialArea.bop_pos) / 42.25;
					bukkalLingualBopPosFlaecheSumme += (tooth.distobuccalArea.bop_pos + tooth.mesiobuccalArea.bop_pos + tooth.distopalatalArea.bop_pos + tooth.mesiopalatalArea.bop_pos) / 42.25;
					interdentalBopPosFlaecheSumme += (tooth.distalArea.bop_pos + tooth.mesialArea.bop_pos) / 42.25;
					
					}
				}
			}
		
		gesamtBopPosFlaecheProzent = gesamtBopPosFlaecheSumme * 100 / gesamtFlaecheSumme;
		bukkalLingualBopPosFlaecheProzent = bukkalLingualBopPosFlaecheSumme * 100 / gesamtBukkalLingualFlaecheSumme;
		interdentalBopPosFlaecheProzent = interdentalBopPosFlaecheSumme * 100 / gesamtInterdentalFlaecheSumme;
		
		// In der Konsole ausgeben
		/*console.log("Gesamtfläche aller Zähne: " + gesamtFlaecheSumme);
		console.log("Gesamt interdentalen Flächen aller Zähne: " + gesamtInterdentalFlaecheSumme);
		console.log("Gesamt bukkalen/lingualen Flächen aller Zähne: " + gesamtBukkalLingualFlaecheSumme);
		
		console.log("Summe aller Flächen mit bop_pos: " + gesamtBopPosFlaecheSumme);
		console.log("% aller Flächen mit bop_pos: " + gesamtBopPosFlaecheProzent);
		
		console.log("Summe aller bukkalen/lingualen Flächen mit bop_pos: " + bukkalLingualBopPosFlaecheSumme);
		console.log("% bukkalen/lingualen Flächen mit bop_pos: " + bukkalLingualBopPosFlaecheProzent);

		console.log("Summe aller interdentalen Flächen mit bop_pos: " + interdentalBopPosFlaecheSumme);
		console.log("% interdentalen Flächen mit bop_pos: " + interdentalBopPosFlaecheProzent);
		
		console.log("pockets", pockets);*/
		
		updateBopVisualization(gesamtBopPosFlaecheProzent, bukkalLingualBopPosFlaecheProzent, interdentalBopPosFlaecheProzent);
		
		setTotalAreaText(gesamtFlaecheSumme, gesamtBopPosFlaecheSumme, gesamtBopPosFlaecheProzent);
		setBukkalLingualAreaText(gesamtBukkalLingualFlaecheSumme, bukkalLingualBopPosFlaecheSumme, bukkalLingualBopPosFlaecheProzent);
		setInterdentalAreaText(gesamtInterdentalFlaecheSumme, interdentalBopPosFlaecheSumme, interdentalBopPosFlaecheProzent);
	}

function updateBopVisualization(gesamtBopPosFlaecheProzent, bukkalLingualBopPosFlaecheProzent, interdentalBopPosFlaecheProzent) {
    updateSingleVisualization('square-background', 'rectangle-overlay', 'percentage-text', gesamtBopPosFlaecheProzent);
    updateSingleVisualization('buccallingual-square-background', 'buccallingual-rectangle-overlay', 'buccallingual-percentage-text', bukkalLingualBopPosFlaecheProzent);
    updateSingleVisualization('interdental-square-background', 'interdental-rectangle-overlay', 'interdental-percentage-text', interdentalBopPosFlaecheProzent);
}

function updateSingleVisualization(squareId, rectangleId, textId, percentage) {
    var squareBackground = document.getElementById(squareId);
    var rectangleOverlay = document.getElementById(rectangleId);
    var percentageText = document.getElementById(textId);

    if (!isNaN(percentage) && percentage !== null && percentage !== undefined) {
        var roundedPercentage = Math.round(percentage);
        rectangleOverlay.style.height = roundedPercentage + '%';
        percentageText.textContent = roundedPercentage + '%';

        // Setze die Hintergrundfarbe basierend auf der squareId
        if (squareId === 'square-background' || squareId === 'buccallingual-square-background') {
            squareBackground.style.backgroundColor = '#4d4dff'; // Dunkleres Blau
        } else if (squareId === 'interdental-square-background') {
            squareBackground.style.backgroundColor = '#a1b1ff'; // Helleres Blau
        }

        // Setze die Hintergrundfarbe basierend auf der rectangleId
        if (rectangleId === 'rectangle-overlay' || rectangleId === 'buccallingual-rectangle-overlay') {
            rectangleOverlay.style.backgroundColor = '#ff4d4d'; // Dunkleres Rot
        } else if (rectangleId === 'interdental-rectangle-overlay') {
            rectangleOverlay.style.backgroundColor = '#ffa3a3'; // Helleres Rot
        }
    } else {
        rectangleOverlay.style.height = '0%';
        percentageText.textContent = '-';
        squareBackground.style.backgroundColor = '#e7f3fd'; // Hellblau
    }
}

function setTotalAreaText(gesamtFlaecheSumme, gesamtBopPosFlaecheSumme, gesamtBopPosFlaecheProzent) {
    var beschriftungContainer = document.querySelector('.beschriftung-bop-visualization-container');

    if (beschriftungContainer) {
        beschriftungContainer.innerHTML = "Total: <b>" + (gesamtFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Inflamed: <b>" + (gesamtBopPosFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + gesamtBopPosFlaecheProzent.toFixed(1) + "%)";
    }
}

function setBukkalLingualAreaText(gesamtBukkalLingualFlaecheSumme, bukkalLingualBopPosFlaecheSumme, bukkalLingualBopPosFlaecheProzent) {
    var beschriftungContainer = document.querySelector('.beschriftung-bop-buccallingual-visualization-container');

    if (beschriftungContainer) {
        beschriftungContainer.innerHTML = "Exterior and interior: <b>" + (gesamtBukkalLingualFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Inflamed: <b>" + (bukkalLingualBopPosFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + bukkalLingualBopPosFlaecheProzent.toFixed(1) + "%)<br /><br /><br />";
    }
}

function setInterdentalAreaText(gesamtInterdentalFlaecheSumme, interdentalBopPosFlaecheSumme, interdentalBopPosFlaecheProzent) {
    var beschriftungContainer = document.querySelector('.beschriftung-bop-interdental-visualization-container');

    if (beschriftungContainer) {
        beschriftungContainer.innerHTML = "Interdental spaces: <b>" + (gesamtInterdentalFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (100%)<br /><br />Inflamed: <b>" + (interdentalBopPosFlaecheSumme / 100).toFixed(1) + " cm<sup>2</sup></b> (" + interdentalBopPosFlaecheProzent.toFixed(1) + "%)";
    }
}
