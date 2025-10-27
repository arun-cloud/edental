// PI und ST/BOP superimposed rendern	
function render_superimposed_pi_pd_bop(jsonObj1, jsonObj2) {
	// Überprüfen, ob jsonObj1 und jsonObj2 definiert und nicht leer sind
    if (jsonObj1 && jsonObj2 && jsonObj1.tooth_18 && jsonObj2.tooth_18) {
		
		// Function to filter the data from a JSON object
		function filterData(data, factor) {
			// Filter the data to include only the keys that start with "bop_" or "pi_"
			let dataFiltered = {};
			for (let key in data) {
				if (key.startsWith("bop_") || key.startsWith("pi_")) {
					dataFiltered[key] = parseInt(data[key]) * factor;
				}
			}

			return dataFiltered;
		}

		// Function to combine the data from two JSON objects
		function combineData(data1, data2) {
			let combinedData = {};

			// Add the corresponding values from both data files
			for (let key in {...data1, ...data2}) {
				combinedData[key] = (data1[key] || 0) + (data2[key] || 0);
			}

			return combinedData;
		}

		// Function to aggregate the data
		function aggregateData(combinedData) {
			let aggregatedData = {};

			for (let key in combinedData) {
				// Create a new key based on the first letter of the position
				let newKey = key.substring(0, key.lastIndexOf('_') + 1) + key[key.lastIndexOf('_') + 1][0];

				// If the new key already exists in the aggregated data, add the value to it
				// Otherwise, set the value of the new key to the current value
				if (newKey in aggregatedData) {
					aggregatedData[newKey] += combinedData[key];
				} else {
					aggregatedData[newKey] = combinedData[key];
				}
			}

			return aggregatedData;
		}

		// Function to get color from aggregated data
		function getColor(sum, type) {
			const colorMapRed = {
				0: '#F2F2F2',
				1: '#FFE0E0',
				2: '#FFC0C0',
				3: '#FF8D8D',
				4: '#FF5C5C',
				5: '#FF0000',
				6: '#D80000'
			};

			const colorMapBlue = {
				0: '#F2F2F2',
				1: '#E0E0FF',
				2: '#C0C0FF',
				3: '#8D8DFF',
				4: '#5C5CFF',
				5: '#0000FF',
				6: '#0000D8'
			};

			return type.startsWith('bop_') ? colorMapRed[sum] : colorMapBlue[sum];
		}

		// Function to convert keys
		function convertKey(key) {
			// Replace "pi_" with "pi_", "bop_" with "bop_", insert "q" before the two digits, and remove "_" after the two digits
			return key.replace("pi_", "pi_").replace("bop_", "bop_").replace(/_(\d{2})_/, "_q$1");
		}

		let data1 = jsonObj1;
		let data2 = jsonObj2;

		// Filter the data from the two JSON objects
		let filteredData1 = filterData(data1, 1);
		let filteredData2 = filterData(data2, 2);

		// Combine the data from the two JSON objects
		let combinedData = combineData(filteredData1, filteredData2);

		// Aggregate the combined data
		let aggregatedData = aggregateData(combinedData);

		// Add color and new key to the aggregated data
		for (let key in aggregatedData) {
			let newKey = convertKey(key);
			aggregatedData[key] = {
				value: aggregatedData[key],
				color: getColor(aggregatedData[key], key),
				newKey: newKey
			};
		}

		// Output the aggregated values, colors, and new keys for tooth 11
		/*for (let key in aggregatedData) {
			if (key.includes("_11_")) {
				console.log(key + " (" + aggregatedData[key].newKey + "): " + aggregatedData[key].value + ", color: " + aggregatedData[key].color);
			}
		}*/

		// Color the SVG elements
		for (let key in aggregatedData) {
			let element = document.getElementById(aggregatedData[key].newKey);
			if (element) {
				element.style.fill = aggregatedData[key].color;
			}
		}

		/*console.log(data1["tooth_47"]);
		console.log(data2["tooth_47"]);*/

		if (data2["tooth_18"] == 0) {
			document.getElementById('pi_q18d').style.fill = '#828282';
			document.getElementById('pi_q18b').style.fill = '#828282';
			document.getElementById('pi_q18m').style.fill = '#828282';
			document.getElementById('pi_q18p').style.fill = '#828282';
		}
		if (data2["tooth_17"] == 0) {
			document.getElementById('pi_q17d').style.fill = '#828282';
			document.getElementById('pi_q17b').style.fill = '#828282';
			document.getElementById('pi_q17m').style.fill = '#828282';
			document.getElementById('pi_q17p').style.fill = '#828282';
		}
		if (data2["tooth_16"] == 0) {
			document.getElementById('pi_q16d').style.fill = '#828282';
			document.getElementById('pi_q16b').style.fill = '#828282';
			document.getElementById('pi_q16m').style.fill = '#828282';
			document.getElementById('pi_q16p').style.fill = '#828282';
		}
		if (data2["tooth_15"] == 0) {
			document.getElementById('pi_q15d').style.fill = '#828282';
			document.getElementById('pi_q15b').style.fill = '#828282';
			document.getElementById('pi_q15m').style.fill = '#828282';
			document.getElementById('pi_q15p').style.fill = '#828282';
		}
		if (data2["tooth_14"] == 0) {
			document.getElementById('pi_q14d').style.fill = '#828282';
			document.getElementById('pi_q14b').style.fill = '#828282';
			document.getElementById('pi_q14m').style.fill = '#828282';
			document.getElementById('pi_q14p').style.fill = '#828282';
		}
		if (data2["tooth_13"] == 0) {
			document.getElementById('pi_q13d').style.fill = '#828282';
			document.getElementById('pi_q13b').style.fill = '#828282';
			document.getElementById('pi_q13m').style.fill = '#828282';
			document.getElementById('pi_q13p').style.fill = '#828282';
		}
		if (data2["tooth_12"] == 0) {
			document.getElementById('pi_q12d').style.fill = '#828282';
			document.getElementById('pi_q12b').style.fill = '#828282';
			document.getElementById('pi_q12m').style.fill = '#828282';
			document.getElementById('pi_q12p').style.fill = '#828282';
		}
		if (data2["tooth_11"] == 0) {
			document.getElementById('pi_q11d').style.fill = '#828282';
			document.getElementById('pi_q11b').style.fill = '#828282';
			document.getElementById('pi_q11m').style.fill = '#828282';
			document.getElementById('pi_q11p').style.fill = '#828282';
		}



		if (data2["tooth_28"] == 0) {
			document.getElementById('pi_q28d').style.fill = '#828282';
			document.getElementById('pi_q28b').style.fill = '#828282';
			document.getElementById('pi_q28m').style.fill = '#828282';
			document.getElementById('pi_q28p').style.fill = '#828282';
		}
		if (data2["tooth_27"] == 0) {
			document.getElementById('pi_q27d').style.fill = '#828282';
			document.getElementById('pi_q27b').style.fill = '#828282';
			document.getElementById('pi_q27m').style.fill = '#828282';
			document.getElementById('pi_q27p').style.fill = '#828282';
		}
		if (data2["tooth_26"] == 0) {
			document.getElementById('pi_q26d').style.fill = '#828282';
			document.getElementById('pi_q26b').style.fill = '#828282';
			document.getElementById('pi_q26m').style.fill = '#828282';
			document.getElementById('pi_q26p').style.fill = '#828282';
		}
		if (data2["tooth_25"] == 0) {
			document.getElementById('pi_q25d').style.fill = '#828282';
			document.getElementById('pi_q25b').style.fill = '#828282';
			document.getElementById('pi_q25m').style.fill = '#828282';
			document.getElementById('pi_q25p').style.fill = '#828282';
		}
		if (data2["tooth_24"] == 0) {
			document.getElementById('pi_q24d').style.fill = '#828282';
			document.getElementById('pi_q24b').style.fill = '#828282';
			document.getElementById('pi_q24m').style.fill = '#828282';
			document.getElementById('pi_q24p').style.fill = '#828282';
		}
		if (data2["tooth_23"] == 0) {
			document.getElementById('pi_q23d').style.fill = '#828282';
			document.getElementById('pi_q23b').style.fill = '#828282';
			document.getElementById('pi_q23m').style.fill = '#828282';
			document.getElementById('pi_q23p').style.fill = '#828282';
		}
		if (data2["tooth_22"] == 0) {
			document.getElementById('pi_q22d').style.fill = '#828282';
			document.getElementById('pi_q22b').style.fill = '#828282';
			document.getElementById('pi_q22m').style.fill = '#828282';
			document.getElementById('pi_q22p').style.fill = '#828282';
		}
		if (data2["tooth_21"] == 0) {
			document.getElementById('pi_q21d').style.fill = '#828282';
			document.getElementById('pi_q21b').style.fill = '#828282';
			document.getElementById('pi_q21m').style.fill = '#828282';
			document.getElementById('pi_q21p').style.fill = '#828282';
		}



		if (data2["tooth_38"] == 0) {
			document.getElementById('pi_q38d').style.fill = '#828282';
			document.getElementById('pi_q38b').style.fill = '#828282';
			document.getElementById('pi_q38m').style.fill = '#828282';
			document.getElementById('pi_q38l').style.fill = '#828282';
		}
		if (data2["tooth_37"] == 0) {
			document.getElementById('pi_q37d').style.fill = '#828282';
			document.getElementById('pi_q37b').style.fill = '#828282';
			document.getElementById('pi_q37m').style.fill = '#828282';
			document.getElementById('pi_q37l').style.fill = '#828282';
		}
		if (data2["tooth_36"] == 0) {
			document.getElementById('pi_q36d').style.fill = '#828282';
			document.getElementById('pi_q36b').style.fill = '#828282';
			document.getElementById('pi_q36m').style.fill = '#828282';
			document.getElementById('pi_q36l').style.fill = '#828282';
		}
		if (data2["tooth_35"] == 0) {
			document.getElementById('pi_q35d').style.fill = '#828282';
			document.getElementById('pi_q35b').style.fill = '#828282';
			document.getElementById('pi_q35m').style.fill = '#828282';
			document.getElementById('pi_q35l').style.fill = '#828282';
		}
		if (data2["tooth_34"] == 0) {
			document.getElementById('pi_q34d').style.fill = '#828282';
			document.getElementById('pi_q34b').style.fill = '#828282';
			document.getElementById('pi_q34m').style.fill = '#828282';
			document.getElementById('pi_q34l').style.fill = '#828282';
		}
		if (data2["tooth_33"] == 0) {
			document.getElementById('pi_q33d').style.fill = '#828282';
			document.getElementById('pi_q33b').style.fill = '#828282';
			document.getElementById('pi_q33m').style.fill = '#828282';
			document.getElementById('pi_q33l').style.fill = '#828282';
		}
		if (data2["tooth_32"] == 0) {
			document.getElementById('pi_q32d').style.fill = '#828282';
			document.getElementById('pi_q32b').style.fill = '#828282';
			document.getElementById('pi_q32m').style.fill = '#828282';
			document.getElementById('pi_q32l').style.fill = '#828282';
		}
		if (data2["tooth_31"] == 0) {
			document.getElementById('pi_q31d').style.fill = '#828282';
			document.getElementById('pi_q31b').style.fill = '#828282';
			document.getElementById('pi_q31m').style.fill = '#828282';
			document.getElementById('pi_q31l').style.fill = '#828282';
		}



		if (data2["tooth_48"] == 0) {
			document.getElementById('pi_q48d').style.fill = '#828282';
			document.getElementById('pi_q48b').style.fill = '#828282';
			document.getElementById('pi_q48m').style.fill = '#828282';
			document.getElementById('pi_q48l').style.fill = '#828282';
		}
		if (data2["tooth_47"] == 0) {
			document.getElementById('pi_q47d').style.fill = '#828282';
			document.getElementById('pi_q47b').style.fill = '#828282';
			document.getElementById('pi_q47m').style.fill = '#828282';
			document.getElementById('pi_q47l').style.fill = '#828282';
		}
		if (data2["tooth_46"] == 0) {
			document.getElementById('pi_q46d').style.fill = '#828282';
			document.getElementById('pi_q46b').style.fill = '#828282';
			document.getElementById('pi_q46m').style.fill = '#828282';
			document.getElementById('pi_q46l').style.fill = '#828282';
		}
		if (data2["tooth_45"] == 0) {
			document.getElementById('pi_q45d').style.fill = '#828282';
			document.getElementById('pi_q45b').style.fill = '#828282';
			document.getElementById('pi_q45m').style.fill = '#828282';
			document.getElementById('pi_q45l').style.fill = '#828282';
		}
		if (data2["tooth_44"] == 0) {
			document.getElementById('pi_q44d').style.fill = '#828282';
			document.getElementById('pi_q44b').style.fill = '#828282';
			document.getElementById('pi_q44m').style.fill = '#828282';
			document.getElementById('pi_q44l').style.fill = '#828282';
		}
		if (data2["tooth_43"] == 0) {
			document.getElementById('pi_q43d').style.fill = '#828282';
			document.getElementById('pi_q43b').style.fill = '#828282';
			document.getElementById('pi_q43m').style.fill = '#828282';
			document.getElementById('pi_q43l').style.fill = '#828282';
		}
		if (data2["tooth_42"] == 0) {
			document.getElementById('pi_q42d').style.fill = '#828282';
			document.getElementById('pi_q42b').style.fill = '#828282';
			document.getElementById('pi_q42m').style.fill = '#828282';
			document.getElementById('pi_q42l').style.fill = '#828282';
		}
		if (data2["tooth_41"] == 0) {
			document.getElementById('pi_q41d').style.fill = '#828282';
			document.getElementById('pi_q41b').style.fill = '#828282';
			document.getElementById('pi_q41m').style.fill = '#828282';
			document.getElementById('pi_q41l').style.fill = '#828282';
		}



		if (data2["tooth_18"] == 0) {
			document.getElementById('bop_q18d').style.fill = '#828282';
			document.getElementById('bop_q18b').style.fill = '#828282';
			document.getElementById('bop_q18m').style.fill = '#828282';
			document.getElementById('bop_q18p').style.fill = '#828282';
		}
		if (data2["tooth_17"] == 0) {
			document.getElementById('bop_q17d').style.fill = '#828282';
			document.getElementById('bop_q17b').style.fill = '#828282';
			document.getElementById('bop_q17m').style.fill = '#828282';
			document.getElementById('bop_q17p').style.fill = '#828282';
		}
		if (data2["tooth_16"] == 0) {
			document.getElementById('bop_q16d').style.fill = '#828282';
			document.getElementById('bop_q16b').style.fill = '#828282';
			document.getElementById('bop_q16m').style.fill = '#828282';
			document.getElementById('bop_q16p').style.fill = '#828282';
		}
		if (data2["tooth_15"] == 0) {
			document.getElementById('bop_q15d').style.fill = '#828282';
			document.getElementById('bop_q15b').style.fill = '#828282';
			document.getElementById('bop_q15m').style.fill = '#828282';
			document.getElementById('bop_q15p').style.fill = '#828282';
		}
		if (data2["tooth_14"] == 0) {
			document.getElementById('bop_q14d').style.fill = '#828282';
			document.getElementById('bop_q14b').style.fill = '#828282';
			document.getElementById('bop_q14m').style.fill = '#828282';
			document.getElementById('bop_q14p').style.fill = '#828282';
		}
		if (data2["tooth_13"] == 0) {
			document.getElementById('bop_q13d').style.fill = '#828282';
			document.getElementById('bop_q13b').style.fill = '#828282';
			document.getElementById('bop_q13m').style.fill = '#828282';
			document.getElementById('bop_q13p').style.fill = '#828282';
		}
		if (data2["tooth_12"] == 0) {
			document.getElementById('bop_q12d').style.fill = '#828282';
			document.getElementById('bop_q12b').style.fill = '#828282';
			document.getElementById('bop_q12m').style.fill = '#828282';
			document.getElementById('bop_q12p').style.fill = '#828282';
		}
		if (data2["tooth_11"] == 0) {
			document.getElementById('bop_q11d').style.fill = '#828282';
			document.getElementById('bop_q11b').style.fill = '#828282';
			document.getElementById('bop_q11m').style.fill = '#828282';
			document.getElementById('bop_q11p').style.fill = '#828282';
		}



		if (data2["tooth_28"] == 0) {
			document.getElementById('bop_q28d').style.fill = '#828282';
			document.getElementById('bop_q28b').style.fill = '#828282';
			document.getElementById('bop_q28m').style.fill = '#828282';
			document.getElementById('bop_q28p').style.fill = '#828282';
		}
		if (data2["tooth_27"] == 0) {
			document.getElementById('bop_q27d').style.fill = '#828282';
			document.getElementById('bop_q27b').style.fill = '#828282';
			document.getElementById('bop_q27m').style.fill = '#828282';
			document.getElementById('bop_q27p').style.fill = '#828282';
		}
		if (data2["tooth_26"] == 0) {
			document.getElementById('bop_q26d').style.fill = '#828282';
			document.getElementById('bop_q26b').style.fill = '#828282';
			document.getElementById('bop_q26m').style.fill = '#828282';
			document.getElementById('bop_q26p').style.fill = '#828282';
		}
		if (data2["tooth_25"] == 0) {
			document.getElementById('bop_q25d').style.fill = '#828282';
			document.getElementById('bop_q25b').style.fill = '#828282';
			document.getElementById('bop_q25m').style.fill = '#828282';
			document.getElementById('bop_q25p').style.fill = '#828282';
		}
		if (data2["tooth_24"] == 0) {
			document.getElementById('bop_q24d').style.fill = '#828282';
			document.getElementById('bop_q24b').style.fill = '#828282';
			document.getElementById('bop_q24m').style.fill = '#828282';
			document.getElementById('bop_q24p').style.fill = '#828282';
		}
		if (data2["tooth_23"] == 0) {
			document.getElementById('bop_q23d').style.fill = '#828282';
			document.getElementById('bop_q23b').style.fill = '#828282';
			document.getElementById('bop_q23m').style.fill = '#828282';
			document.getElementById('bop_q23p').style.fill = '#828282';
		}
		if (data2["tooth_22"] == 0) {
			document.getElementById('bop_q22d').style.fill = '#828282';
			document.getElementById('bop_q22b').style.fill = '#828282';
			document.getElementById('bop_q22m').style.fill = '#828282';
			document.getElementById('bop_q22p').style.fill = '#828282';
		}
		if (data2["tooth_21"] == 0) {
			document.getElementById('bop_q21d').style.fill = '#828282';
			document.getElementById('bop_q21b').style.fill = '#828282';
			document.getElementById('bop_q21m').style.fill = '#828282';
			document.getElementById('bop_q21p').style.fill = '#828282';
		}



		if (data2["tooth_38"] == 0) {
			document.getElementById('bop_q38d').style.fill = '#828282';
			document.getElementById('bop_q38b').style.fill = '#828282';
			document.getElementById('bop_q38m').style.fill = '#828282';
			document.getElementById('bop_q38l').style.fill = '#828282';
		}
		if (data2["tooth_37"] == 0) {
			document.getElementById('bop_q37d').style.fill = '#828282';
			document.getElementById('bop_q37b').style.fill = '#828282';
			document.getElementById('bop_q37m').style.fill = '#828282';
			document.getElementById('bop_q37l').style.fill = '#828282';
		}
		if (data2["tooth_36"] == 0) {
			document.getElementById('bop_q36d').style.fill = '#828282';
			document.getElementById('bop_q36b').style.fill = '#828282';
			document.getElementById('bop_q36m').style.fill = '#828282';
			document.getElementById('bop_q36l').style.fill = '#828282';
		}
		if (data2["tooth_35"] == 0) {
			document.getElementById('bop_q35d').style.fill = '#828282';
			document.getElementById('bop_q35b').style.fill = '#828282';
			document.getElementById('bop_q35m').style.fill = '#828282';
			document.getElementById('bop_q35l').style.fill = '#828282';
		}
		if (data2["tooth_34"] == 0) {
			document.getElementById('bop_q34d').style.fill = '#828282';
			document.getElementById('bop_q34b').style.fill = '#828282';
			document.getElementById('bop_q34m').style.fill = '#828282';
			document.getElementById('bop_q34l').style.fill = '#828282';
		}
		if (data2["tooth_33"] == 0) {
			document.getElementById('bop_q33d').style.fill = '#828282';
			document.getElementById('bop_q33b').style.fill = '#828282';
			document.getElementById('bop_q33m').style.fill = '#828282';
			document.getElementById('bop_q33l').style.fill = '#828282';
		}
		if (data2["tooth_32"] == 0) {
			document.getElementById('bop_q32d').style.fill = '#828282';
			document.getElementById('bop_q32b').style.fill = '#828282';
			document.getElementById('bop_q32m').style.fill = '#828282';
			document.getElementById('bop_q32l').style.fill = '#828282';
		}
		if (data2["tooth_31"] == 0) {
			document.getElementById('bop_q31d').style.fill = '#828282';
			document.getElementById('bop_q31b').style.fill = '#828282';
			document.getElementById('bop_q31m').style.fill = '#828282';
			document.getElementById('bop_q31l').style.fill = '#828282';
		}



		if (data2["tooth_48"] == 0) {
			document.getElementById('bop_q48d').style.fill = '#828282';
			document.getElementById('bop_q48b').style.fill = '#828282';
			document.getElementById('bop_q48m').style.fill = '#828282';
			document.getElementById('bop_q48l').style.fill = '#828282';
		}
		if (data2["tooth_47"] == 0) {
			document.getElementById('bop_q47d').style.fill = '#828282';
			document.getElementById('bop_q47b').style.fill = '#828282';
			document.getElementById('bop_q47m').style.fill = '#828282';
			document.getElementById('bop_q47l').style.fill = '#828282';
		}
		if (data2["tooth_46"] == 0) {
			document.getElementById('bop_q46d').style.fill = '#828282';
			document.getElementById('bop_q46b').style.fill = '#828282';
			document.getElementById('bop_q46m').style.fill = '#828282';
			document.getElementById('bop_q46l').style.fill = '#828282';
		}
		if (data2["tooth_45"] == 0) {
			document.getElementById('bop_q45d').style.fill = '#828282';
			document.getElementById('bop_q45b').style.fill = '#828282';
			document.getElementById('bop_q45m').style.fill = '#828282';
			document.getElementById('bop_q45l').style.fill = '#828282';
		}
		if (data2["tooth_44"] == 0) {
			document.getElementById('bop_q44d').style.fill = '#828282';
			document.getElementById('bop_q44b').style.fill = '#828282';
			document.getElementById('bop_q44m').style.fill = '#828282';
			document.getElementById('bop_q44l').style.fill = '#828282';
		}
		if (data2["tooth_43"] == 0) {
			document.getElementById('bop_q43d').style.fill = '#828282';
			document.getElementById('bop_q43b').style.fill = '#828282';
			document.getElementById('bop_q43m').style.fill = '#828282';
			document.getElementById('bop_q43l').style.fill = '#828282';
		}
		if (data2["tooth_42"] == 0) {
			document.getElementById('bop_q42d').style.fill = '#828282';
			document.getElementById('bop_q42b').style.fill = '#828282';
			document.getElementById('bop_q42m').style.fill = '#828282';
			document.getElementById('bop_q42l').style.fill = '#828282';
		}
		if (data2["tooth_41"] == 0) {
			document.getElementById('bop_q41d').style.fill = '#828282';
			document.getElementById('bop_q41b').style.fill = '#828282';
			document.getElementById('bop_q41m').style.fill = '#828282';
			document.getElementById('bop_q41l').style.fill = '#828282';
		}

    document.getElementById("modal_pi_date").textContent = document.forms[0]["input_date"].value;
    document.getElementById("modal_pd_bop_date").textContent = document.forms[0]["input_date"].value;

	document.getElementById("modal_pi_perc").textContent = document.forms[0]["output_mean_pi"].value;
    document.getElementById("modal_bop_perc").textContent = document.forms[0]["output_mean_bop"].value;
		
		} else {
        // Zeige eine Fehlermeldung oder tue etwas anderes, wenn die Daten nicht erwartungsgemäß vorliegen
        //console.error("Ungültige Daten für render_superimposed_pi_pd_bop.");
    }
}
