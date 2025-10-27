// Analysis rendern
    function render_analysis(jsonObj1) {
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
		
		// Den Inhalt in die HTML-Element der Analysis einfügen
        document.getElementById("seconddate1").textContent = "";
        document.getElementById("seconddate2").textContent = "";
        document.getElementById("secondvar1").textContent  = "";
        document.getElementById("secondvar2").textContent  = "";
        document.getElementById("secondvar3").textContent  = "";
        document.getElementById("secondvar4").textContent  = "";
        document.getElementById("secondvar5").textContent  = "";
        document.getElementById("secondvar6").textContent  = "";
        document.getElementById("secondvar7").textContent  = "";
        document.getElementById("secondvar8").textContent  = "";
        document.getElementById("secondvar9").textContent  = "";
        
        // Im Modal Analysis die Breite der DIVs ändern
        piElement = document.getElementById("secondpi");
        piElement.style.width = "0px";
        piElement = document.getElementById("secondfourmm");
        piElement.style.width = "0px";
        piElement = document.getElementById("secondfivemm");
        piElement.style.width = "0px";
        piElement = document.getElementById("secondafivemm");
        piElement.style.width = "0px";
        piElement = document.getElementById("secondbop");
        piElement.style.width = "0px";
	}
