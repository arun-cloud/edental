// Analysis rendern
    function render_superimposed_analysis(jsonObj1, jsonObj2) {
		// BASELINE ANALYSIS
        // Count the number of 'bop_' and 'pd_' keys for teeth that are present
        let bop_keys = Object.keys(jsonObj1).filter(key => key.startsWith('bop_'));
        let pd_keys = Object.keys(jsonObj1).filter(key => key.startsWith('pd_'));
        let bop_tooth_numbers = bop_keys.map(key => key.split('_')[1]);
        let pd_tooth_numbers = pd_keys.map(key => key.split('_')[1]);
        let num_bop_present = bop_tooth_numbers.filter(tooth_number => jsonObj1[`tooth_${tooth_number}`] == '1').length;
        let num_pd_present = pd_tooth_numbers.filter(tooth_number => jsonObj1[`tooth_${tooth_number}`] == '1').length;

        // Count the number of 'bop_' and 'pi_' keys for teeth that are present and have a value of '1'
        let num_bop_present_value_1 = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('bop_') && value == '1' && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').length;
        let num_pi_present_value_1 = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('pi_') && value == '1' && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').length;

        // Calculate the percentages for 'bop_' and 'pi_'
        let percentage_bop_value_1 = (num_bop_present_value_1 / num_bop_present) * 100;
        let percentage_pi_value_1 = (num_pi_present_value_1 / num_bop_present) * 100;

        // Count the number of 'pd_' keys for teeth that are present and have a value of '5', '4', and greater than '5'
        let num_pd_present_value_5 = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('pd_') && value == '5' && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').length;
        let num_pd_present_value_4 = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('pd_') && value == '4' && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').length;
        let num_pd_present_value_greater_5 = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('pd_') && parseInt(value) > 5 && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').length;

        // Calculate the percentages for 'pd_'
        let percentage_pd_value_5 = (num_pd_present_value_5 / num_pd_present) * 100;
        let percentage_pd_value_4 = (num_pd_present_value_4 / num_pd_present) * 100;
        let percentage_pd_value_greater_5 = (num_pd_present_value_greater_5 / num_pd_present) * 100;

        // Calculate the average for 'pd_' and 'gm_' keys where teeth are present
        let pd_values = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('pd_') && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').map(([key, value]) => parseInt(value));
        let gm_values = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('gm_') && jsonObj1[`tooth_${key.split("_")[1]}`] == '1').map(([key, value]) => parseInt(value));
        let average_pd = pd_values.reduce((a, b) => a + b, 0) / pd_values.length;
        let average_gm = gm_values.reduce((a, b) => a + b, 0) / gm_values.length;

        // Count the number of teeth that are present
        let num_teeth_present = Object.entries(jsonObj1).filter(([key, value]) => key.startsWith('tooth_') && value == '1').length;
        let average_cal = -1 * (average_pd - average_gm);

        //console.log(percentage_pi_value_1, percentage_bop_value_1, percentage_pd_value_4, percentage_pd_value_5, percentage_pd_value_greater_5, average_pd, average_gm, num_teeth_present, average_cal);

        // Den Inhalt in die HTML-Element der Analysis einfügen
        document.getElementById("date1").textContent = jsonObj1.date;
        document.getElementById("date2").textContent = jsonObj1.date;
        document.getElementById("var1").textContent = num_teeth_present;
        document.getElementById("var2").textContent = Math.round(percentage_pi_value_1);
        document.getElementById("var3").textContent = percentage_pd_value_4.toFixed(1);
        document.getElementById("var4").textContent = percentage_pd_value_5.toFixed(1);
        document.getElementById("var5").textContent = percentage_pd_value_greater_5.toFixed(1);
        document.getElementById("var6").textContent = average_pd.toFixed(1);
        document.getElementById("var7").textContent = average_gm.toFixed(1);
        document.getElementById("var8").textContent = average_cal.toFixed(1);
        document.getElementById("var9").textContent = Math.round(percentage_bop_value_1);
        
        // Im Modal Analysis die Breite der DIVs ändern
        var piElement = document.getElementById("pi");
        piElement.style.width = Math.round(percentage_pi_value_1*3) + "px";
        var piElement = document.getElementById("fourmm");
        piElement.style.width = percentage_pd_value_4.toFixed(1)*3 + "px";
        var piElement = document.getElementById("fivemm");
        piElement.style.width = percentage_pd_value_5.toFixed(1)*3 + "px";
        var piElement = document.getElementById("afivemm");
        piElement.style.width = percentage_pd_value_greater_5.toFixed(1)*3 + "px";
        var piElement = document.getElementById("bop");
        piElement.style.width = Math.round(percentage_bop_value_1*3) + "px";
		
		// FOLLOW-UP ANALYSIS
        // Count the number of 'bop_' and 'pd_' keys for teeth that are present
        bop_keys = Object.keys(jsonObj2).filter(key => key.startsWith('bop_'));
        pd_keys = Object.keys(jsonObj2).filter(key => key.startsWith('pd_'));
        bop_tooth_numbers = bop_keys.map(key => key.split('_')[1]);
        pd_tooth_numbers = pd_keys.map(key => key.split('_')[1]);
        num_bop_present = bop_tooth_numbers.filter(tooth_number => jsonObj2[`tooth_${tooth_number}`] == '1').length;
        num_pd_present = pd_tooth_numbers.filter(tooth_number => jsonObj2[`tooth_${tooth_number}`] == '1').length;

        // Count the number of 'bop_' and 'pi_' keys for teeth that are present and have a value of '1'
        num_bop_present_value_1 = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('bop_') && value == '1' && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').length;
        num_pi_present_value_1 = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('pi_') && value == '1' && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').length;

        // Calculate the percentages for 'bop_' and 'pi_'
        percentage_bop_value_1 = (num_bop_present_value_1 / num_bop_present) * 100;
        percentage_pi_value_1 = (num_pi_present_value_1 / num_bop_present) * 100;

        // Count the number of 'pd_' keys for teeth that are present and have a value of '5', '4', and greater than '5'
        num_pd_present_value_5 = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('pd_') && value == '5' && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').length;
        num_pd_present_value_4 = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('pd_') && value == '4' && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').length;
        num_pd_present_value_greater_5 = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('pd_') && parseInt(value) > 5 && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').length;

        // Calculate the percentages for 'pd_'
        percentage_pd_value_5 = (num_pd_present_value_5 / num_pd_present) * 100;
        percentage_pd_value_4 = (num_pd_present_value_4 / num_pd_present) * 100;
        percentage_pd_value_greater_5 = (num_pd_present_value_greater_5 / num_pd_present) * 100;

        // Calculate the average for 'pd_' and 'gm_' keys where teeth are present
        pd_values = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('pd_') && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').map(([key, value]) => parseInt(value));
        gm_values = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('gm_') && jsonObj2[`tooth_${key.split("_")[1]}`] == '1').map(([key, value]) => parseInt(value));
        average_pd = pd_values.reduce((a, b) => a + b, 0) / pd_values.length;
        average_gm = gm_values.reduce((a, b) => a + b, 0) / gm_values.length;

        // Count the number of teeth that are present
        num_teeth_present = Object.entries(jsonObj2).filter(([key, value]) => key.startsWith('tooth_') && value == '1').length;
        average_cal = -1 * (average_pd - average_gm);

        //console.log(percentage_pi_value_1, percentage_bop_value_1, percentage_pd_value_4, percentage_pd_value_5, percentage_pd_value_greater_5, average_pd, average_gm, num_teeth_present, average_cal);

        // Den Inhalt in die HTML-Element der Analysis einfügen
        document.getElementById("seconddate1").textContent = jsonObj2.date;
        document.getElementById("seconddate2").textContent = jsonObj2.date;
        document.getElementById("secondvar1").textContent = num_teeth_present;
        document.getElementById("secondvar2").textContent = Math.round(percentage_pi_value_1);
        document.getElementById("secondvar3").textContent = percentage_pd_value_4.toFixed(1);
        document.getElementById("secondvar4").textContent = percentage_pd_value_5.toFixed(1);
        document.getElementById("secondvar5").textContent = percentage_pd_value_greater_5.toFixed(1);
        document.getElementById("secondvar6").textContent = average_pd.toFixed(1);
        document.getElementById("secondvar7").textContent = average_gm.toFixed(1);
        document.getElementById("secondvar8").textContent = average_cal.toFixed(1);
        document.getElementById("secondvar9").textContent = Math.round(percentage_bop_value_1);
        
        // Im Modal Analysis die Breite der DIVs ändern
        piElement = document.getElementById("secondpi");
        piElement.style.width = Math.round(percentage_pi_value_1*3) + "px";
        piElement = document.getElementById("secondfourmm");
        piElement.style.width = percentage_pd_value_4.toFixed(1)*3 + "px";
        piElement = document.getElementById("secondfivemm");
        piElement.style.width = percentage_pd_value_5.toFixed(1)*3 + "px";
        piElement = document.getElementById("secondafivemm");
        piElement.style.width = percentage_pd_value_greater_5.toFixed(1)*3 + "px";
        piElement = document.getElementById("secondbop");
        piElement.style.width = Math.round(percentage_bop_value_1*3) + "px";

		calculateBaderstenAnalysis(jsonObj1, jsonObj2);
		calculateRamseierAnalysis(jsonObj1, jsonObj2);
		renderRamseierTable(jsonObj1, jsonObj2);
	}

    function renderBaderstenChart(categories) {
        
        //console.log(categories);
        
        const BaderstenChartContainer = document.getElementById('BaderstenChartContainer');
		
		// Lösche vorhandene Balken, bevor neue hinzugefügt werden
		BaderstenChartContainer.innerHTML = '';
		
        const categoriesOrder = ['≤2', '3', '4', '5', '6', '7', '8', '9', '≥10'];
        const wValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];        

        // Calculate mValues and dValues using the changesInPd from calculateBaderstenAnalysis
		const mValues = categoriesOrder.map(category => {
			const changes = categories[category];
			if (changes.length > 0) {
				return changes.reduce((sum, change) => sum + change, 0) / changes.length;
			} else {
				return 0; // return 0 if changes array is empty
			}
		});
		
		//console.log(mValues);
		
		const validChangesCount = categoriesOrder.map(category => {
			const changes = categories[category];
			return changes.filter(change => !isNaN(change)).length;
		});
		
        // Defining the height scaling factor for the bars
        const maxHeight = 300; // Maximum height of the chart container in pixels

        categoriesOrder.forEach((category, index) => {
            const barDiv = document.createElement('div');
            barDiv.className = 'badersten-bar';

            // Rendering LOWER part of the column
            const d_katDiv = document.createElement('div');
            d_katDiv.className = 'd_kat';

            // Handle "NA" or 0 values with "gray" bars
            if (isNaN(mValues[index]) || (mValues[index] === 0 && validChangesCount[index] === 0)) {
                // No such sites were present at the inital exam
                d_katDiv.style.height = `${wValues[index] * (100 / 10)}px`; // Set to respective height
                d_katDiv.style.backgroundColor = '#E7F3FD';
			} else if (mValues[index] === 0 && validChangesCount[index] > 0) {
                // For these sites, no change was found
                d_katDiv.style.height = `${wValues[index] * (100 / 10)}px`; // Set to respective height
                d_katDiv.style.backgroundColor = '#0069CD';
            } else if (mValues[index] > 0) {
                // For these sites, an INcrease of PD was found
                d_katDiv.style.height = `${wValues[index] * (100 / 5)}px`; // Set to respective height
                d_katDiv.style.backgroundColor = '#0069CD';
            } else if (mValues[index] < 0) {
                // For these sites, a DEcrease of PD was found (IMPROVEMENT)
                const dValue = wValues[index] + mValues[index];
                d_katDiv.style.height = `${dValue * (maxHeight / 10) * (2 / 3)}px`; // Set to respective height
                d_katDiv.style.backgroundColor = '#0069CD';
            }

            // Rendering UPPER part of the column
            const m_katDiv = document.createElement('div');
            m_katDiv.className = 'm_kat';

            // Handle "NA" or 0 values with "gray" bars
            if (isNaN(mValues[index]) || (mValues[index] === 0 && validChangesCount[index] === 0)) {
                // No such sites were present at the inital exam                
                m_katDiv.style.height = `${wValues[index] * (100 / 10)}px`; // Set to respective height
                m_katDiv.style.backgroundColor = '#E7F3FD';
			} else if (mValues[index] === 0 && validChangesCount[index] > 0) {
				// For these sites, no change was found
                m_katDiv.style.height = `${wValues[index] * (100 / 10)}px`; // Set to respective height
                m_katDiv.style.backgroundColor = '#0069CD';
            } else if (mValues[index] > 0) {
                // For these sites, an INcrease of PD was found
                m_katDiv.style.height = `${mValues[index] * (maxHeight / 10) * (2 / 3)}px`; // Set to respective height
                m_katDiv.style.backgroundColor = '#CD0000';
                //console.log("mValues[index]>0 UPPER");
            } else if (mValues[index] < 0) {
                // For these sites, a DEcrease of PD was found (IMPROVEMENT)
                m_katDiv.style.height = `${mValues[index] * (100 / 5) * -1}px`; // Set to respective height
                m_katDiv.style.backgroundColor = '#5FFF82';
            }

            barDiv.appendChild(d_katDiv);
            barDiv.appendChild(m_katDiv);
            BaderstenChartContainer.appendChild(barDiv);			
        });
    }

    function calculateBaderstenAnalysis(jsonObj1, jsonObj2) {	
        // 1. Filter data to consider only teeth present after therapy
        const teethPresentAfterTherapy = Object.keys(jsonObj2).filter(key => key.startsWith('tooth_') && jsonObj2[key] === "1").map(key => key.split('_')[1]);

        const filteredPdBefore = {};
        const filteredPdAfter = {};
        teethPresentAfterTherapy.forEach(toothNumber => {
            const keySuffixes = ['_db', '_b', '_mb', '_dp', '_p', '_mp', '_dl', '_l', '_ml']; // Suffixes for probing depth keys
            keySuffixes.forEach(suffix => {
                const key = `pd_${toothNumber}${suffix}`;
                filteredPdBefore[key] = parseInt(jsonObj1[key]);
                filteredPdAfter[key] = parseInt(jsonObj2[key]);
            });
        });

        const changesInPd = {};
        for (const key in filteredPdBefore) {
            changesInPd[key] = filteredPdAfter[key] - filteredPdBefore[key];
        }

        // 2. Categorize probing depths based on their value before therapy
        const categories = {
            '≤2': [],
            '3': [],
            '4': [],
            '5': [],
            '6': [],
            '7': [],
            '8': [],
            '9': [],
            '≥10': []
        };

        for (const key in filteredPdBefore) {
            const value = filteredPdBefore[key];
            if (value <= 2) categories['≤2'].push(changesInPd[key]);
            else if (value === 3) categories['3'].push(changesInPd[key]);
            else if (value === 4) categories['4'].push(changesInPd[key]);
            else if (value === 5) categories['5'].push(changesInPd[key]);
            else if (value === 6) categories['6'].push(changesInPd[key]);
            else if (value === 7) categories['7'].push(changesInPd[key]);
            else if (value === 8) categories['8'].push(changesInPd[key]);
            else if (value === 9) categories['9'].push(changesInPd[key]);
            else if (value >= 10) categories['≥10'].push(changesInPd[key]);
        }

        // 3. Compute statistics for each category and update the table
        const tableBody = document.querySelector("#BaderstenAnalysisTable tbody");
        tableBody.innerHTML = ''; // Clear the existing rows

        // Sortiere die Kategorien in der gewünschten Reihenfolge
        const sortedCategories = ['≤2', '3', '4', '5', '6', '7', '8', '9', '≥10'];

        for (const category of sortedCategories) {
            const changes = categories[category];

            // Füge die Zeile auch dann hinzu, wenn keine Änderungen vorhanden sind
            const row = document.createElement("tr");

            if (changes.length) {
                const validChanges = changes.filter(change => !isNaN(change)); // Filtere ungültige Werte
                if (validChanges.length === 0) {
                    // Zeige den Kategorienamen und "-" an, da keine gültigen Änderungen vorhanden sind
                    row.innerHTML = `
                        <td>${category}</td>
                        <td>-</td>
                        <td>-</td>
                        <!--<td>-</td>-->
                        <!--<td>-</td>-->
                        <td>0</td>
                    `;
                } else {
                    const mean = validChanges.reduce((a, b) => a + b, 0) / validChanges.length;
                    let newmean;
                        if (category === "≤2") {
                            newmean = 2 + mean;
                        } else if (category === "≥10") {
                            newmean = 10 + mean;
                        } else {
                            newmean = parseFloat(category) + mean;
                        }                    
                    const sortedChanges = validChanges.slice().sort((a, b) => a - b);
                    const median = sortedChanges[Math.floor(validChanges.length / 2)];
                    const variance = validChanges.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / validChanges.length;
                    const stdDev = Math.sqrt(variance);
                    const stdError = stdDev / Math.sqrt(validChanges.length);

                    row.innerHTML = `
                        <td>${category}</td>
                        <td>${newmean.toFixed(2)}</td>
                        <td>${mean.toFixed(2)}</td>
                        <!--<td>${median}</td>-->
                        <!--<td>${stdDev.toFixed(2)}</td>-->
                        <!--<td>${stdError.toFixed(2)}</td>-->
                        <td>${validChanges.length}</td>
                    `;
                }
            } else {
                // Zeige den Kategorienamen und "-" an
                row.innerHTML = `
                    <td>${category}</td>
                    <td>-</td>
                    <td>-</td>
                    <!--<td>-</td>-->
                    <!--<td>-</td>-->
                    <td>0</td>
                `;
            }

            tableBody.appendChild(row);
        }
        
		renderBaderstenChart(categories);
    }

	function renderEmptyBaderstenTable() {
		const categories = {
			'≤2': [0], // Platzhalterwert 0 für leere Kategorie
			'3': [0],
			'4': [0],
			'5': [0],
			'6': [0],
			'7': [0],
			'8': [0],
			'9': [0],
			'≥10': [0]
		};

		const tableBody = document.querySelector("#BaderstenAnalysisTable tbody");
		tableBody.innerHTML = ''; // Clear the existing rows

		const sortedCategories = ['≤2', '3', '4', '5', '6', '7', '8', '9', '≥10'];

		for (const category of sortedCategories) {
			const changes = categories[category];

			const row = document.createElement("tr");
			row.innerHTML = `
				<td>${category}</td>
				<td>-</td>
				<td>-</td>
				<!--<td>-</td>-->
				<!--<td>-</td>-->
				<td>0</td>
			`;

			tableBody.appendChild(row);
		}
	}

	function renderEmptyBaderstenChart() {
		const categories = {
			'≤2': [],
			'3': [],
			'4': [],
			'5': [],
			'6': [],
			'7': [],
			'8': [],
			'9': [],
			'≥10': []
		};

		renderBaderstenChart(categories);
	}

	function calculateRamseierAnalysis(jsonObj1, jsonObj2) {
		const keySuffixes = ['_db', '_b', '_mb', '_dp', '_p', '_mp', '_dl', '_l', '_ml']; // Suffixes for keys

		const teethPresentAfterTherapy = Object.keys(jsonObj2).filter(key => key.startsWith('tooth_') && jsonObj2[key] === "1").map(key => key.split('_')[1]);

		function getRelatedKeys(toothNumber) {
			return keySuffixes.map(suffix => `pd_${toothNumber}${suffix}`);
		}

		function filterTeethPresentAfterTherapy(data) {
			return teethPresentAfterTherapy.flatMap(toothNumber => getRelatedKeys(toothNumber)).filter(key => data.hasOwnProperty(key));
		}	

		let teethKeysPresentAfterTherapy = filterTeethPresentAfterTherapy(jsonObj2);

		let categories = ["≤2", "3", "4", "5", "6", "7", "8", "9", "≥10"];

		function calculateBopPercentages(dataBefore, dataAfter) {
			let bopPercentages = {};

			categories.forEach(cat => {
				let filterFunc;

				switch(cat) {
					case "≤2":
						filterFunc = val => val <= 2 && val > 0; // Es dürfen Stellen mit pd_ = 0 nicht berücksichtigt werden
						break;
					case "≥10":
						filterFunc = val => val >= 10;
						break;
					default:
						filterFunc = val => val == parseInt(cat);
				}

				let bopBefore = teethKeysPresentAfterTherapy.filter(key => {
					let pdValue = parseInt(dataBefore[key]);
					let parts = key.split('_');
					let bopKey = "bop_" + parts[1] + "_" + parts[2];
					return filterFunc(pdValue) && dataBefore[bopKey] === '1';
				}).length;
				
				let bopAfter = teethKeysPresentAfterTherapy.filter(key => {
					let pdValue = parseInt(dataAfter[key]);
					let parts = key.split('_');
					let bopKey = "bop_" + parts[1] + "_" + parts[2];
					return filterFunc(pdValue) && dataAfter[bopKey] === '1';
				}).length;

				let totalBefore = teethKeysPresentAfterTherapy.filter(key => {
					return filterFunc(parseInt(dataBefore[key]));
				}).length;

				let totalAfter = teethKeysPresentAfterTherapy.filter(key => {
					return filterFunc(parseInt(dataAfter[key]));
				}).length;

				bopPercentages[cat] = {
					before: totalBefore ? (bopBefore / totalBefore) * 100 : 0,
					after: totalAfter ? (bopAfter / totalAfter) * 100 : 0
				};
			});

			return bopPercentages;
		}

		let bopResults = calculateBopPercentages(jsonObj1, jsonObj2);

		for (let cat in bopResults) {
			bopResults[cat].diff = bopResults[cat].after - bopResults[cat].before;
			bopResults[cat].remaining = 100 - bopResults[cat].before;
		}

		//console.log(bopResults);
		
		// Rendering Ramseier Chart

		// Defining the height scaling factor for the bars
		const maxHeight = 300; // Maximum height of the chart container in pixels (entspricht der Höhe des Containers in Ihrem CSS)
		
		let RamseierChartContainer = document.querySelector('.ramseier-chart-container');

		RamseierChartContainer.innerHTML = '';

		for (let i = 0; i < categories.length; i++) {
			let cat = categories[i];
			let bar = document.createElement('div');
			bar.classList.add('ramseier-bar');

			// Erstellen der einzelnen Segmente des Balkendiagramms
			let segmentAfter = document.createElement('div');
			segmentAfter.classList.add('ramseier-segment', 'after');
			segmentAfter.style.height = (bopResults[cat].after / 150) * maxHeight + 'px';

			let segmentDiff = document.createElement('div');
			segmentDiff.classList.add('ramseier-segment', 'diff');
			if (bopResults[cat].diff < 0) {  // Nur hinzufügen, wenn der Wert negativ ist
				segmentDiff.style.height = (Math.abs(bopResults[cat].diff) / 150) * maxHeight + 'px';
			}

			let segmentRemaining = document.createElement('div');
			segmentRemaining.classList.add('ramseier-segment', 'remaining');
			// Hier berechnen wir den verbleibenden Wert basierend auf den anderen zwei Segmenten
			let currentTotalPercentage = bopResults[cat].after + (bopResults[cat].diff < 0 ? Math.abs(bopResults[cat].diff) : 0);
			let remainingPercentage = 100 - currentTotalPercentage;
			segmentRemaining.style.height = (remainingPercentage / 150) * maxHeight + 'px';

			// Hinzufügen der Segmente zum Balkendiagramm
			bar.appendChild(segmentAfter);
			bar.appendChild(segmentDiff);
			bar.appendChild(segmentRemaining);

			// Hinzufügen des Balkendiagramms zum Container
			RamseierChartContainer.appendChild(bar);
		}
	
		// Berechnung des Pearson r
		// Konvertieren Sie die categories in Zahlenwerte.
		let xCategories = categories.map(cat => {
			switch (cat) {
				case "≤2":
					return 2;
				case "≥10":
					return 10;
				default:
					return parseInt(cat);
			}
		});

		let xValues = [];
		let yValues = [];

		xCategories.forEach((xVal, index) => {
			let cat = categories[index];
			if (bopResults[cat].after !== 0) {
				xValues.push(xVal);
				yValues.push(bopResults[cat].after);
			}
		});

		// Berechnen Sie den Pearson-Korrelationskoeffizienten mit jStats und geben Sie das Ergebnis aus.
		var r = jStat.corrcoeff(xValues, yValues);
		//console.log("Pearson r:", r);
		
		// p-Wert und 95% Vertrauensintervall berechnen
		let x = xValues;
		let y = yValues;
		let n = x.length;
		
		// Berechnung des p-Werts
		let tStat = r * Math.sqrt((n-2) / (1 - r*r));
		let pValue = 1 - (2 * (1 - tDistCDF(Math.abs(tStat), n-2)));

		// Fisher's Z-Transformation und 95%-Konfidenzintervall
		let z = 0.5 * Math.log((1 + r) / (1 - r));
		let SEz = 1 / Math.sqrt(n - 3);
		let zLower = z - 1.96 * SEz;
		let zUpper = z + 1.96 * SEz;
		let rLower = (Math.exp(2 * zLower) - 1) / (Math.exp(2 * zLower) + 1);
		let rUpper = (Math.exp(2 * zUpper) - 1) / (Math.exp(2 * zUpper) + 1);

		//console.log("p-Wert:", 1 - pValue);
		//console.log("95%-Konfidenzintervall für r:", [rLower, rUpper]);
        
        var Pearsondf = (n - 2) >= 0 ? n - 2 : "NaN";
		var PearsonrHTML = `<p><b>Correlation and Distribution</b><p>Pearson r = ${parseFloat(r.toFixed(2))}, df = ${Pearsondf}, <i>p = ${parseFloat(pValue.toFixed(4))}</i>, 95% CI: [${parseFloat(rLower.toFixed(4))}, ${parseFloat(zUpper.toFixed(4))}]</p>`;
		document.getElementById("yourFirstContainerId").innerHTML = PearsonrHTML;
	}

	function tDistCDF(t, df) {
		// Approximation der kumulativen Verteilungsfunktion der t-Verteilung
		let x = df / (df + t * t);
		let p = 1 - betai(df / 2.0, 0.5, x);
		return t < 0 ? p / 2 : 1 - p / 2;
	}

	function betai(a, b, x) {
		// Unvollständige Beta-Funktion
		if (x < 0.0 || x > 1.0) throw new Error("Bad x in routine betai");
		let bt = (x === 0.0 || x === 1.0) ? 0.0 : Math.exp(gammln(a + b) - gammln(a) - gammln(b) + a * Math.log(x) + b * Math.log(1.0 - x));
		return x < (a + 1.0) / (a + b + 2.0) ? bt * betacf(a, b, x) / a : 1.0 - bt * betacf(b, a, 1.0 - x) / b;
	}

	function gammln(xx) {
		// Approximation für den natürlichen Logarithmus der Gamma-Funktion
		const cof = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
		let y = xx;
		let x = xx;
		let tmp = x + 5.5;
		tmp -= (x + 0.5) * Math.log(tmp);
		let ser = 1.000000000190015;
		for (let j = 0; j <= 5; j++) ser += cof[j] / ++y;
		return -tmp + Math.log(2.5066282746310005 * ser / x);
	}

	function betacf(a, b, x) {
		// Fortgesetzte Brüche für die Beta-Funktion
		const MAXIT = 100;
		const EPS = 3.0e-7;
		const FPMIN = 1.0e-30;
		let qab = a + b;
		let qap = a + 1.0;
		let qam = a - 1.0;
		let c = 1.0;
		let d = 1.0 - qab * x / qap;
		if (Math.abs(d) < FPMIN) d = FPMIN;
		d = 1.0 / d;
		let h = d;
		for (let m = 1; m <= MAXIT; m++) {
			let m2 = 2 * m;
			let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
			d = 1.0 + aa * d;
			if (Math.abs(d) < FPMIN) d = FPMIN;
			c = 1.0 + aa / c;
			if (Math.abs(c) < FPMIN) c = FPMIN;
			d = 1.0 / d;
			h *= d * c;
			aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
			d = 1.0 + aa * d;
			if (Math.abs(d) < FPMIN) d = FPMIN;
			c = 1.0 + aa / c;
			if (Math.abs(c) < FPMIN) c = FPMIN;
			d = 1.0 / d;
			let del = d * c;
			h *= del;
			if (Math.abs(del - 1.0) < EPS) break;
		}
		return h;
	}

	function renderEmptyRamseierChart() {
		const categories = ["≤2", "3", "4", "5", "6", "7", "8", "9", "≥10"];
		const emptyData = {};

		categories.forEach(cat => {
			emptyData[cat] = {
				before: 0,
				after: 0,
				diff: 0,
				remaining: 100
			};
		});

		// Hier rufen wir Ihre ursprüngliche `calculateRamseierAnalysis`-Funktion auf, 
		// aber mit zwei leeren JSON-Objekten, um alle Werte auf 0 zu setzen.
		calculateRamseierAnalysis({}, emptyData);
	}

	function renderRamseierTable(jsonObj1, jsonObj2) {
		let teethPresentAfterTherapy = Object.keys(jsonObj2).filter(key => key.startsWith("tooth_") && jsonObj2[key] == 1);

		let suffixes = ['_db', '_b', '_mb', '_dp', '_p', '_mp', '_dl', '_l', '_ml'];

		let counters = {
			"pd_reduced": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 },
			"pd_same": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 },
			"pd_increased": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 }
		};

		teethPresentAfterTherapy.forEach(tooth => {
			suffixes.forEach(suffix => {
				let pdKey = "pd_" + tooth.split("_")[1] + suffix;
				let bopKey = "bop_" + tooth.split("_")[1] + suffix;

				if (jsonObj1[pdKey] !== undefined && jsonObj2[pdKey] !== undefined) {
					let pdChange = jsonObj2[pdKey] - jsonObj1[pdKey];
					let bopChange = jsonObj2[bopKey] - jsonObj1[bopKey];

					let pdCategory = pdChange < 0 ? "pd_reduced" : (pdChange === 0 ? "pd_same" : "pd_increased");
					let bopCategory = bopChange < 0 ? "bop_reduced" : (bopChange === 0 ? "bop_same" : "bop_increased");

					counters[pdCategory][bopCategory]++;
				}
			});
		});

		let observed = [];
		for (let i = 0; i < 3; i++) {
			observed[i] = [];
			for (let j = 0; j < 3; j++) {
				observed[i][j] = counters[Object.keys(counters)[i]][Object.keys(counters[Object.keys(counters)[i]])[j]];
			}
		}

		// Werte auf mind. 5 erhöhen
		//observed = observed.map(row => row.map(value => Math.max(5, value)));

		const categoryMapping = {
			"pd_reduced": "PD reduced",
			"pd_same": "PD unchanged",
			"pd_increased": "PD increased"
		};
		
		// Beginn der Tabelle und Überschriften
		tableHTML = "<table id='RamseierAnalysisTable'>";
		tableHTML += "<thead><tr><th>PD / BOP</th><th>BOP reduced</th><th>BOP unchanged</th><th>BOP increased</th></tr></thead>";
		tableHTML += "<tbody>";

		// Daten für jede Kategorie hinzufügen
		Object.keys(counters).forEach(pdCategory => {
			tableHTML += `<tr><td>${categoryMapping[pdCategory]}</td>`;
			Object.keys(counters[pdCategory]).forEach(bopCategory => {
				tableHTML += `<td>${counters[pdCategory][bopCategory]}</td>`;
			});
			tableHTML += `</tr>`;
		});

		tableHTML += "</tbody></table>";

		// Die Tabelle in den gewünschten Container in Ihrer Website einsetzen
		document.getElementById("yourSecondContainerId").innerHTML = tableHTML;

		let rowSums = observed.map(row => row.reduce((a, b) => a + b, 0));
		let colSums = observed[0].map((_, i) => observed.reduce((sum, row) => sum + row[i], 0));
		let grandTotal = rowSums.reduce((a, b) => a + b, 0);

		let expected = observed.map((_, i) => observed[i].map((_, j) => (rowSums[i] * colSums[j]) / grandTotal));

		var chi = chiSquare(observed, expected);

		var roundedchi = parseFloat(chi.toFixed(4));
		var degreesOfFreedom = (3 - 1) * (3 - 1); // (rows-1)*(columns-1)

		var pValue = 1 - jStat.chisquare.cdf(chi, degreesOfFreedom);
		var roundedpValue = parseFloat(pValue.toFixed(4));

		var statsHTML = `<p><span style='font-family: "Times New Roman", Serif;'>&chi;<sup>2</sup></span> = ${roundedchi}, df = ${degreesOfFreedom}, <i>p = ${roundedpValue}</i></p>`;
		document.getElementById("yourStatsContainerId").innerHTML = statsHTML;
	}

	function chiSquare(observed, expected) {
		let chi = 0;
		for (let i = 0; i < observed.length; i++) {
			for (let j = 0; j < observed[i].length; j++) {
				chi += Math.pow((observed[i][j] - expected[i][j]), 2) / expected[i][j];
			}
		}
		return chi;
	}

	function renderEmptyRamseierTable() {
		const emptyCounters = {
			"pd_reduced": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 },
			"pd_same": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 },
			"pd_increased": { "bop_reduced": 0, "bop_same": 0, "bop_increased": 0 }
		};

		const categoryMapping = {
			"pd_reduced": "PD reduced",
			"pd_same": "PD unchanged",
			"pd_increased": "PD increased"
		};

		// Beginn der Tabelle und Überschriften
		let tableHTML = "<table id='RamseierAnalysisTable'>";
		tableHTML += "<thead><tr><th>PD / BOP</th><th>BOP reduced</th><th>BOP unchanged</th><th>BOP increased</th></tr></thead>";
		tableHTML += "<tbody>";

		// Daten für jede Kategorie hinzufügen (diese werden alle 0 sein)
		Object.keys(emptyCounters).forEach(pdCategory => {
			tableHTML += `<tr><td>${categoryMapping[pdCategory]}</td>`;
			Object.keys(emptyCounters[pdCategory]).forEach(bopCategory => {
				tableHTML += `<td>${emptyCounters[pdCategory][bopCategory]}</td>`;
			});
			tableHTML += `</tr>`;
		});

		tableHTML += "</tbody></table>";

		// Die leere Tabelle in den gewünschten Container in der Website einsetzen
        //var PearsonrHTML = `<p><b>Correlation and Distribution</b><p>Pearson r = NaN, df = NaN, <i>p = NaN</i>, 95% CI: [NaN, NaN]</p>`;
        //document.getElementById("yourFirstContainerId").innerHTML = PearsonrHTML;

		// Die leere Tabelle in den gewünschten Container in der Website einsetzen
		document.getElementById("yourSecondContainerId").innerHTML = tableHTML;

		// Leere statistische Daten erstellen
		//const statsHTML = `<p><span style='font-family: "Times New Roman", Serif; font-weight: bold;'>&chi;<sup>2</sup></span> = NaN, df = NaN, <i>p = NaN</i></p>`;
		const statsHTML = `<p>&chi;<sup>2</sup> = NaN, df = NaN, <i>p = NaN</i></p>`;
		document.getElementById("yourStatsContainerId").innerHTML = statsHTML;
	}

	// Beim Laden der Webseite
	window.addEventListener('load', renderEmptyBaderstenTable);
	window.addEventListener('load', renderEmptyBaderstenChart);

	window.addEventListener('load', renderEmptyRamseierTable);
	window.addEventListener('load', renderEmptyRamseierChart);
