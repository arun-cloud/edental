// Formular rendern
// Dieser Code rendert die blauen Flächen der übergelagerten (superimposed) Messungen.
function render_superimposed_form(jsonObj2) {
	
	// Setzen Sie zuerst alle Flächenwerte zurück
    resetSuperimposedToothAreas();
	
	initial_exam = window.jsonObj2.initial_exam;
	reevaluation = window.jsonObj2.reevaluation;

	document.getElementById('initial_exam_tab').style.display = 'none';
	document.getElementById('reevaluation_tab').style.display = 'none';

    //console.log("initial_exam", initial_exam);
    //console.log("reevaluation", reevaluation);
    
	if (initial_exam == 1) {
		document.getElementById('initial_exam_tab').style.display = 'block';
	}

	if (reevaluation == 1) {
		document.getElementById('reevaluation_tab').style.display = 'block';
	}

	gm_18_db = Number(jsonObj2.gm_18_db);
	gm_18_b = Number(jsonObj2.gm_18_b);
	gm_18_mb = Number(jsonObj2.gm_18_mb);
	pd_18_db = Number(jsonObj2.pd_18_db);
	pd_18_b = Number(jsonObj2.pd_18_b);
	pd_18_mb = Number(jsonObj2.pd_18_mb);
	gm_18_dp = Number(jsonObj2.gm_18_dp);
	gm_18_p = Number(jsonObj2.gm_18_p);
	gm_18_mp = Number(jsonObj2.gm_18_mp);
	pd_18_dp = Number(jsonObj2.pd_18_dp);
	pd_18_p = Number(jsonObj2.pd_18_p);
	pd_18_mp = Number(jsonObj2.pd_18_mp);

	gm_17_db = Number(jsonObj2.gm_17_db);
	gm_17_b = Number(jsonObj2.gm_17_b);
	gm_17_mb = Number(jsonObj2.gm_17_mb);
	pd_17_db = Number(jsonObj2.pd_17_db);
	pd_17_b = Number(jsonObj2.pd_17_b);
	pd_17_mb = Number(jsonObj2.pd_17_mb);
	gm_17_dp = Number(jsonObj2.gm_17_dp);
	gm_17_p = Number(jsonObj2.gm_17_p);
	gm_17_mp = Number(jsonObj2.gm_17_mp);
	pd_17_dp = Number(jsonObj2.pd_17_dp);
	pd_17_p = Number(jsonObj2.pd_17_p);
	pd_17_mp = Number(jsonObj2.pd_17_mp);

	gm_16_db = Number(jsonObj2.gm_16_db);
	gm_16_b = Number(jsonObj2.gm_16_b);
	gm_16_mb = Number(jsonObj2.gm_16_mb);
	pd_16_db = Number(jsonObj2.pd_16_db);
	pd_16_b = Number(jsonObj2.pd_16_b);
	pd_16_mb = Number(jsonObj2.pd_16_mb);
	gm_16_dp = Number(jsonObj2.gm_16_dp);
	gm_16_p = Number(jsonObj2.gm_16_p);
	gm_16_mp = Number(jsonObj2.gm_16_mp);
	pd_16_dp = Number(jsonObj2.pd_16_dp);
	pd_16_p = Number(jsonObj2.pd_16_p);
	pd_16_mp = Number(jsonObj2.pd_16_mp);

	gm_15_db = Number(jsonObj2.gm_15_db);
	gm_15_b = Number(jsonObj2.gm_15_b);
	gm_15_mb = Number(jsonObj2.gm_15_mb);
	pd_15_db = Number(jsonObj2.pd_15_db);
	pd_15_b = Number(jsonObj2.pd_15_b);
	pd_15_mb = Number(jsonObj2.pd_15_mb);
	gm_15_dp = Number(jsonObj2.gm_15_dp);
	gm_15_p = Number(jsonObj2.gm_15_p);
	gm_15_mp = Number(jsonObj2.gm_15_mp);
	pd_15_dp = Number(jsonObj2.pd_15_dp);
	pd_15_p = Number(jsonObj2.pd_15_p);
	pd_15_mp = Number(jsonObj2.pd_15_mp);

	gm_14_db = Number(jsonObj2.gm_14_db);
	gm_14_b = Number(jsonObj2.gm_14_b);
	gm_14_mb = Number(jsonObj2.gm_14_mb);
	pd_14_db = Number(jsonObj2.pd_14_db);
	pd_14_b = Number(jsonObj2.pd_14_b);
	pd_14_mb = Number(jsonObj2.pd_14_mb);
	gm_14_dp = Number(jsonObj2.gm_14_dp);
	gm_14_p = Number(jsonObj2.gm_14_p);
	gm_14_mp = Number(jsonObj2.gm_14_mp);
	pd_14_dp = Number(jsonObj2.pd_14_dp);
	pd_14_p = Number(jsonObj2.pd_14_p);
	pd_14_mp = Number(jsonObj2.pd_14_mp);

	gm_13_db = Number(jsonObj2.gm_13_db);
	gm_13_b = Number(jsonObj2.gm_13_b);
	gm_13_mb = Number(jsonObj2.gm_13_mb);
	pd_13_db = Number(jsonObj2.pd_13_db);
	pd_13_b = Number(jsonObj2.pd_13_b);
	pd_13_mb = Number(jsonObj2.pd_13_mb);
	gm_13_dp = Number(jsonObj2.gm_13_dp);
	gm_13_p = Number(jsonObj2.gm_13_p);
	gm_13_mp = Number(jsonObj2.gm_13_mp);
	pd_13_dp = Number(jsonObj2.pd_13_dp);
	pd_13_p = Number(jsonObj2.pd_13_p);
	pd_13_mp = Number(jsonObj2.pd_13_mp);

	gm_12_db = Number(jsonObj2.gm_12_db);
	gm_12_b = Number(jsonObj2.gm_12_b);
	gm_12_mb = Number(jsonObj2.gm_12_mb);
	pd_12_db = Number(jsonObj2.pd_12_db);
	pd_12_b = Number(jsonObj2.pd_12_b);
	pd_12_mb = Number(jsonObj2.pd_12_mb);
	gm_12_dp = Number(jsonObj2.gm_12_dp);
	gm_12_p = Number(jsonObj2.gm_12_p);
	gm_12_mp = Number(jsonObj2.gm_12_mp);
	pd_12_dp = Number(jsonObj2.pd_12_dp);
	pd_12_p = Number(jsonObj2.pd_12_p);
	pd_12_mp = Number(jsonObj2.pd_12_mp);

	gm_11_db = Number(jsonObj2.gm_11_db);
	gm_11_b = Number(jsonObj2.gm_11_b);
	gm_11_mb = Number(jsonObj2.gm_11_mb);
	pd_11_db = Number(jsonObj2.pd_11_db);
	pd_11_b = Number(jsonObj2.pd_11_b);
	pd_11_mb = Number(jsonObj2.pd_11_mb);
	gm_11_dp = Number(jsonObj2.gm_11_dp);
	gm_11_p = Number(jsonObj2.gm_11_p);
	gm_11_mp = Number(jsonObj2.gm_11_mp);
	pd_11_dp = Number(jsonObj2.pd_11_dp);
	pd_11_p = Number(jsonObj2.pd_11_p);
	pd_11_mp = Number(jsonObj2.pd_11_mp);

	gm_28_db = Number(jsonObj2.gm_28_db);
	gm_28_b = Number(jsonObj2.gm_28_b);
	gm_28_mb = Number(jsonObj2.gm_28_mb);
	pd_28_db = Number(jsonObj2.pd_28_db);
	pd_28_b = Number(jsonObj2.pd_28_b);
	pd_28_mb = Number(jsonObj2.pd_28_mb);
	gm_28_dp = Number(jsonObj2.gm_28_dp);
	gm_28_p = Number(jsonObj2.gm_28_p);
	gm_28_mp = Number(jsonObj2.gm_28_mp);
	pd_28_dp = Number(jsonObj2.pd_28_dp);
	pd_28_p = Number(jsonObj2.pd_28_p);
	pd_28_mp = Number(jsonObj2.pd_28_mp);

	gm_27_db = Number(jsonObj2.gm_27_db);
	gm_27_b = Number(jsonObj2.gm_27_b);
	gm_27_mb = Number(jsonObj2.gm_27_mb);
	pd_27_db = Number(jsonObj2.pd_27_db);
	pd_27_b = Number(jsonObj2.pd_27_b);
	pd_27_mb = Number(jsonObj2.pd_27_mb);
	gm_27_dp = Number(jsonObj2.gm_27_dp);
	gm_27_p = Number(jsonObj2.gm_27_p);
	gm_27_mp = Number(jsonObj2.gm_27_mp);
	pd_27_dp = Number(jsonObj2.pd_27_dp);
	pd_27_p = Number(jsonObj2.pd_27_p);
	pd_27_mp = Number(jsonObj2.pd_27_mp);

	gm_26_db = Number(jsonObj2.gm_26_db);
	gm_26_b = Number(jsonObj2.gm_26_b);
	gm_26_mb = Number(jsonObj2.gm_26_mb);
	pd_26_db = Number(jsonObj2.pd_26_db);
	pd_26_b = Number(jsonObj2.pd_26_b);
	pd_26_mb = Number(jsonObj2.pd_26_mb);
	gm_26_dp = Number(jsonObj2.gm_26_dp);
	gm_26_p = Number(jsonObj2.gm_26_p);
	gm_26_mp = Number(jsonObj2.gm_26_mp);
	pd_26_dp = Number(jsonObj2.pd_26_dp);
	pd_26_p = Number(jsonObj2.pd_26_p);
	pd_26_mp = Number(jsonObj2.pd_26_mp);

	gm_25_db = Number(jsonObj2.gm_25_db);
	gm_25_b = Number(jsonObj2.gm_25_b);
	gm_25_mb = Number(jsonObj2.gm_25_mb);
	pd_25_db = Number(jsonObj2.pd_25_db);
	pd_25_b = Number(jsonObj2.pd_25_b);
	pd_25_mb = Number(jsonObj2.pd_25_mb);
	gm_25_dp = Number(jsonObj2.gm_25_dp);
	gm_25_p = Number(jsonObj2.gm_25_p);
	gm_25_mp = Number(jsonObj2.gm_25_mp);
	pd_25_dp = Number(jsonObj2.pd_25_dp);
	pd_25_p = Number(jsonObj2.pd_25_p);
	pd_25_mp = Number(jsonObj2.pd_25_mp);

	gm_24_db = Number(jsonObj2.gm_24_db);
	gm_24_b = Number(jsonObj2.gm_24_b);
	gm_24_mb = Number(jsonObj2.gm_24_mb);
	pd_24_db = Number(jsonObj2.pd_24_db);
	pd_24_b = Number(jsonObj2.pd_24_b);
	pd_24_mb = Number(jsonObj2.pd_24_mb);
	gm_24_dp = Number(jsonObj2.gm_24_dp);
	gm_24_p = Number(jsonObj2.gm_24_p);
	gm_24_mp = Number(jsonObj2.gm_24_mp);
	pd_24_dp = Number(jsonObj2.pd_24_dp);
	pd_24_p = Number(jsonObj2.pd_24_p);
	pd_24_mp = Number(jsonObj2.pd_24_mp);

	gm_23_db = Number(jsonObj2.gm_23_db);
	gm_23_b = Number(jsonObj2.gm_23_b);
	gm_23_mb = Number(jsonObj2.gm_23_mb);
	pd_23_db = Number(jsonObj2.pd_23_db);
	pd_23_b = Number(jsonObj2.pd_23_b);
	pd_23_mb = Number(jsonObj2.pd_23_mb);
	gm_23_dp = Number(jsonObj2.gm_23_dp);
	gm_23_p = Number(jsonObj2.gm_23_p);
	gm_23_mp = Number(jsonObj2.gm_23_mp);
	pd_23_dp = Number(jsonObj2.pd_23_dp);
	pd_23_p = Number(jsonObj2.pd_23_p);
	pd_23_mp = Number(jsonObj2.pd_23_mp);

	gm_22_db = Number(jsonObj2.gm_22_db);
	gm_22_b = Number(jsonObj2.gm_22_b);
	gm_22_mb = Number(jsonObj2.gm_22_mb);
	pd_22_db = Number(jsonObj2.pd_22_db);
	pd_22_b = Number(jsonObj2.pd_22_b);
	pd_22_mb = Number(jsonObj2.pd_22_mb);
	gm_22_dp = Number(jsonObj2.gm_22_dp);
	gm_22_p = Number(jsonObj2.gm_22_p);
	gm_22_mp = Number(jsonObj2.gm_22_mp);
	pd_22_dp = Number(jsonObj2.pd_22_dp);
	pd_22_p = Number(jsonObj2.pd_22_p);
	pd_22_mp = Number(jsonObj2.pd_22_mp);

	gm_21_db = Number(jsonObj2.gm_21_db);
	gm_21_b = Number(jsonObj2.gm_21_b);
	gm_21_mb = Number(jsonObj2.gm_21_mb);
	pd_21_db = Number(jsonObj2.pd_21_db);
	pd_21_b = Number(jsonObj2.pd_21_b);
	pd_21_mb = Number(jsonObj2.pd_21_mb);
	gm_21_dp = Number(jsonObj2.gm_21_dp);
	gm_21_p = Number(jsonObj2.gm_21_p);
	gm_21_mp = Number(jsonObj2.gm_21_mp);
	pd_21_dp = Number(jsonObj2.pd_21_dp);
	pd_21_p = Number(jsonObj2.pd_21_p);
	pd_21_mp = Number(jsonObj2.pd_21_mp);

	gm_38_db = Number(jsonObj2.gm_38_db);
	gm_38_b = Number(jsonObj2.gm_38_b);
	gm_38_mb = Number(jsonObj2.gm_38_mb);
	pd_38_db = Number(jsonObj2.pd_38_db);
	pd_38_b = Number(jsonObj2.pd_38_b);
	pd_38_mb = Number(jsonObj2.pd_38_mb);
	gm_38_dl = Number(jsonObj2.gm_38_dl);
	gm_38_l = Number(jsonObj2.gm_38_l);
	gm_38_ml = Number(jsonObj2.gm_38_ml);
	pd_38_dl = Number(jsonObj2.pd_38_dl);
	pd_38_l = Number(jsonObj2.pd_38_l);
	pd_38_ml = Number(jsonObj2.pd_38_ml);

	gm_37_db = Number(jsonObj2.gm_37_db);
	gm_37_b = Number(jsonObj2.gm_37_b);
	gm_37_mb = Number(jsonObj2.gm_37_mb);
	pd_37_db = Number(jsonObj2.pd_37_db);
	pd_37_b = Number(jsonObj2.pd_37_b);
	pd_37_mb = Number(jsonObj2.pd_37_mb);
	gm_37_dl = Number(jsonObj2.gm_37_dl);
	gm_37_l = Number(jsonObj2.gm_37_l);
	gm_37_ml = Number(jsonObj2.gm_37_ml);
	pd_37_dl = Number(jsonObj2.pd_37_dl);
	pd_37_l = Number(jsonObj2.pd_37_l);
	pd_37_ml = Number(jsonObj2.pd_37_ml);

	gm_36_db = Number(jsonObj2.gm_36_db);
	gm_36_b = Number(jsonObj2.gm_36_b);
	gm_36_mb = Number(jsonObj2.gm_36_mb);
	pd_36_db = Number(jsonObj2.pd_36_db);
	pd_36_b = Number(jsonObj2.pd_36_b);
	pd_36_mb = Number(jsonObj2.pd_36_mb);
	gm_36_dl = Number(jsonObj2.gm_36_dl);
	gm_36_l = Number(jsonObj2.gm_36_l);
	gm_36_ml = Number(jsonObj2.gm_36_ml);
	pd_36_dl = Number(jsonObj2.pd_36_dl);
	pd_36_l = Number(jsonObj2.pd_36_l);
	pd_36_ml = Number(jsonObj2.pd_36_ml);

	gm_35_db = Number(jsonObj2.gm_35_db);
	gm_35_b = Number(jsonObj2.gm_35_b);
	gm_35_mb = Number(jsonObj2.gm_35_mb);
	pd_35_db = Number(jsonObj2.pd_35_db);
	pd_35_b = Number(jsonObj2.pd_35_b);
	pd_35_mb = Number(jsonObj2.pd_35_mb);
	gm_35_dl = Number(jsonObj2.gm_35_dl);
	gm_35_l = Number(jsonObj2.gm_35_l);
	gm_35_ml = Number(jsonObj2.gm_35_ml);
	pd_35_dl = Number(jsonObj2.pd_35_dl);
	pd_35_l = Number(jsonObj2.pd_35_l);
	pd_35_ml = Number(jsonObj2.pd_35_ml);

	gm_34_db = Number(jsonObj2.gm_34_db);
	gm_34_b = Number(jsonObj2.gm_34_b);
	gm_34_mb = Number(jsonObj2.gm_34_mb);
	pd_34_db = Number(jsonObj2.pd_34_db);
	pd_34_b = Number(jsonObj2.pd_34_b);
	pd_34_mb = Number(jsonObj2.pd_34_mb);
	gm_34_dl = Number(jsonObj2.gm_34_dl);
	gm_34_l = Number(jsonObj2.gm_34_l);
	gm_34_ml = Number(jsonObj2.gm_34_ml);
	pd_34_dl = Number(jsonObj2.pd_34_dl);
	pd_34_l = Number(jsonObj2.pd_34_l);
	pd_34_ml = Number(jsonObj2.pd_34_ml);

	gm_33_db = Number(jsonObj2.gm_33_db);
	gm_33_b = Number(jsonObj2.gm_33_b);
	gm_33_mb = Number(jsonObj2.gm_33_mb);
	pd_33_db = Number(jsonObj2.pd_33_db);
	pd_33_b = Number(jsonObj2.pd_33_b);
	pd_33_mb = Number(jsonObj2.pd_33_mb);
	gm_33_dl = Number(jsonObj2.gm_33_dl);
	gm_33_l = Number(jsonObj2.gm_33_l);
	gm_33_ml = Number(jsonObj2.gm_33_ml);
	pd_33_dl = Number(jsonObj2.pd_33_dl);
	pd_33_l = Number(jsonObj2.pd_33_l);
	pd_33_ml = Number(jsonObj2.pd_33_ml);

	gm_32_db = Number(jsonObj2.gm_32_db);
	gm_32_b = Number(jsonObj2.gm_32_b);
	gm_32_mb = Number(jsonObj2.gm_32_mb);
	pd_32_db = Number(jsonObj2.pd_32_db);
	pd_32_b = Number(jsonObj2.pd_32_b);
	pd_32_mb = Number(jsonObj2.pd_32_mb);
	gm_32_dl = Number(jsonObj2.gm_32_dl);
	gm_32_l = Number(jsonObj2.gm_32_l);
	gm_32_ml = Number(jsonObj2.gm_32_ml);
	pd_32_dl = Number(jsonObj2.pd_32_dl);
	pd_32_l = Number(jsonObj2.pd_32_l);
	pd_32_ml = Number(jsonObj2.pd_32_ml);

	gm_31_db = Number(jsonObj2.gm_31_db);
	gm_31_b = Number(jsonObj2.gm_31_b);
	gm_31_mb = Number(jsonObj2.gm_31_mb);
	pd_31_db = Number(jsonObj2.pd_31_db);
	pd_31_b = Number(jsonObj2.pd_31_b);
	pd_31_mb = Number(jsonObj2.pd_31_mb);
	gm_31_dl = Number(jsonObj2.gm_31_dl);
	gm_31_l = Number(jsonObj2.gm_31_l);
	gm_31_ml = Number(jsonObj2.gm_31_ml);
	pd_31_dl = Number(jsonObj2.pd_31_dl);
	pd_31_l = Number(jsonObj2.pd_31_l);
	pd_31_ml = Number(jsonObj2.pd_31_ml);

	gm_48_db = Number(jsonObj2.gm_48_db);
	gm_48_b = Number(jsonObj2.gm_48_b);
	gm_48_mb = Number(jsonObj2.gm_48_mb);
	pd_48_db = Number(jsonObj2.pd_48_db);
	pd_48_b = Number(jsonObj2.pd_48_b);
	pd_48_mb = Number(jsonObj2.pd_48_mb);
	gm_48_dl = Number(jsonObj2.gm_48_dl);
	gm_48_l = Number(jsonObj2.gm_48_l);
	gm_48_ml = Number(jsonObj2.gm_48_ml);
	pd_48_dl = Number(jsonObj2.pd_48_dl);
	pd_48_l = Number(jsonObj2.pd_48_l);
	pd_48_ml = Number(jsonObj2.pd_48_ml);

	gm_47_db = Number(jsonObj2.gm_47_db);
	gm_47_b = Number(jsonObj2.gm_47_b);
	gm_47_mb = Number(jsonObj2.gm_47_mb);
	pd_47_db = Number(jsonObj2.pd_47_db);
	pd_47_b = Number(jsonObj2.pd_47_b);
	pd_47_mb = Number(jsonObj2.pd_47_mb);
	gm_47_dl = Number(jsonObj2.gm_47_dl);
	gm_47_l = Number(jsonObj2.gm_47_l);
	gm_47_ml = Number(jsonObj2.gm_47_ml);
	pd_47_dl = Number(jsonObj2.pd_47_dl);
	pd_47_l = Number(jsonObj2.pd_47_l);
	pd_47_ml = Number(jsonObj2.pd_47_ml);

	gm_46_db = Number(jsonObj2.gm_46_db);
	gm_46_b = Number(jsonObj2.gm_46_b);
	gm_46_mb = Number(jsonObj2.gm_46_mb);
	pd_46_db = Number(jsonObj2.pd_46_db);
	pd_46_b = Number(jsonObj2.pd_46_b);
	pd_46_mb = Number(jsonObj2.pd_46_mb);
	gm_46_dl = Number(jsonObj2.gm_46_dl);
	gm_46_l = Number(jsonObj2.gm_46_l);
	gm_46_ml = Number(jsonObj2.gm_46_ml);
	pd_46_dl = Number(jsonObj2.pd_46_dl);
	pd_46_l = Number(jsonObj2.pd_46_l);
	pd_46_ml = Number(jsonObj2.pd_46_ml);

	gm_45_db = Number(jsonObj2.gm_45_db);
	gm_45_b = Number(jsonObj2.gm_45_b);
	gm_45_mb = Number(jsonObj2.gm_45_mb);
	pd_45_db = Number(jsonObj2.pd_45_db);
	pd_45_b = Number(jsonObj2.pd_45_b);
	pd_45_mb = Number(jsonObj2.pd_45_mb);
	gm_45_dl = Number(jsonObj2.gm_45_dl);
	gm_45_l = Number(jsonObj2.gm_45_l);
	gm_45_ml = Number(jsonObj2.gm_45_ml);
	pd_45_dl = Number(jsonObj2.pd_45_dl);
	pd_45_l = Number(jsonObj2.pd_45_l);
	pd_45_ml = Number(jsonObj2.pd_45_ml);

	gm_44_db = Number(jsonObj2.gm_44_db);
	gm_44_b = Number(jsonObj2.gm_44_b);
	gm_44_mb = Number(jsonObj2.gm_44_mb);
	pd_44_db = Number(jsonObj2.pd_44_db);
	pd_44_b = Number(jsonObj2.pd_44_b);
	pd_44_mb = Number(jsonObj2.pd_44_mb);
	gm_44_dl = Number(jsonObj2.gm_44_dl);
	gm_44_l = Number(jsonObj2.gm_44_l);
	gm_44_ml = Number(jsonObj2.gm_44_ml);
	pd_44_dl = Number(jsonObj2.pd_44_dl);
	pd_44_l = Number(jsonObj2.pd_44_l);
	pd_44_ml = Number(jsonObj2.pd_44_ml);

	gm_43_db = Number(jsonObj2.gm_43_db);
	gm_43_b = Number(jsonObj2.gm_43_b);
	gm_43_mb = Number(jsonObj2.gm_43_mb);
	pd_43_db = Number(jsonObj2.pd_43_db);
	pd_43_b = Number(jsonObj2.pd_43_b);
	pd_43_mb = Number(jsonObj2.pd_43_mb);
	gm_43_dl = Number(jsonObj2.gm_43_dl);
	gm_43_l = Number(jsonObj2.gm_43_l);
	gm_43_ml = Number(jsonObj2.gm_43_ml);
	pd_43_dl = Number(jsonObj2.pd_43_dl);
	pd_43_l = Number(jsonObj2.pd_43_l);
	pd_43_ml = Number(jsonObj2.pd_43_ml);

	gm_42_db = Number(jsonObj2.gm_42_db);
	gm_42_b = Number(jsonObj2.gm_42_b);
	gm_42_mb = Number(jsonObj2.gm_42_mb);
	pd_42_db = Number(jsonObj2.pd_42_db);
	pd_42_b = Number(jsonObj2.pd_42_b);
	pd_42_mb = Number(jsonObj2.pd_42_mb);
	gm_42_dl = Number(jsonObj2.gm_42_dl);
	gm_42_l = Number(jsonObj2.gm_42_l);
	gm_42_ml = Number(jsonObj2.gm_42_ml);
	pd_42_dl = Number(jsonObj2.pd_42_dl);
	pd_42_l = Number(jsonObj2.pd_42_l);
	pd_42_ml = Number(jsonObj2.pd_42_ml);

	gm_41_db = Number(jsonObj2.gm_41_db);
	gm_41_b = Number(jsonObj2.gm_41_b);
	gm_41_mb = Number(jsonObj2.gm_41_mb);
	pd_41_db = Number(jsonObj2.pd_41_db);
	pd_41_b = Number(jsonObj2.pd_41_b);
	pd_41_mb = Number(jsonObj2.pd_41_mb);
	gm_41_dl = Number(jsonObj2.gm_41_dl);
	gm_41_l = Number(jsonObj2.gm_41_l);
	gm_41_ml = Number(jsonObj2.gm_41_ml);
	pd_41_dl = Number(jsonObj2.pd_41_dl);
	pd_41_l = Number(jsonObj2.pd_41_l);
	pd_41_ml = Number(jsonObj2.pd_41_ml);

	if (Number(jsonObj2.tooth_18) == 1) {
		document.getElementById('s_polygon_18_b').style.display = 'block';
		document.getElementById('s_polyline_al_18_b').style.display = 'block';
		document.getElementById('s_polyline_gm_18_b').style.display = 'block';

		document.getElementById('s_polygon_18_p').style.display = 'block';
		document.getElementById('s_polyline_al_18_p').style.display = 'block';
		document.getElementById('s_polyline_gm_18_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 18 (bukkal) in der Bitmap
		var x_db_18 = 295; // distal 18
		var x_mb_18 = 332; // mesial 18
		var x_b_18 = (x_db_18 + x_mb_18) / 2; // bukkal 18

		// Set der horizontalen Koordinaten von Zahn 18 (palatinal) in der Bitmap
		var x_dp_18 = 291; // distal 18
		var x_mp_18 = 331; // mesial 18
		var x_p_18 = (x_dp_18 + x_mp_18) / 2; // palatinal 18

		// Set der vertikalen Koordinaten von Zahn 18 (bukkal) aus dem Formular
		var y_gm_18_db = gm_OK_b + 6.5 * gm_18_db; // Margo Gingivae distobukkal 18
		var y_gm_18_b = gm_OK_b + 6.5 * gm_18_b; // Margo Gingivae bukkal 18
		var y_gm_18_mb = gm_OK_b + 6.5 * gm_18_mb; // Margo Gingivae mesiobukkal 18
		var y_pd_18_db = 6.5 * pd_18_db; // Sondierungstiefe distobukkal 18
		var y_pd_18_b = 6.5 * pd_18_b; // Sondierungstiefe bukkal 18
		var y_pd_18_mb = 6.5 * pd_18_mb; // Sondierungstiefe mesiobukkal 18

		// Set der vertikalen Koordinaten von Zahn 18 (palatinal) aus dem Formular
		var y_gm_18_dp = gm_OK_p - 6.5 * gm_18_dp; // Margo Gingivae distopalatinal 18
		var y_gm_18_p = gm_OK_p - 6.5 * gm_18_p; // Margo Gingivae palatinal 18
		var y_gm_18_mp = gm_OK_p - 6.5 * gm_18_mp; // Margo Gingivae mesiopalatinal 18
		var y_pd_18_dp = 6.5 * pd_18_dp; // Sondierungstiefe distopalatinal 18
		var y_pd_18_p = 6.5 * pd_18_p; // Sondierungstiefe palatinal 18
		var y_pd_18_mp = 6.5 * pd_18_mp; // Sondierungstiefe mesiopalatinal 18

		// Berechnung des Attachmentniveaus 18 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_18_db = y_gm_18_db - y_pd_18_db; // Attachmentniveau distobukkal 18
		var y_al_18_b = y_gm_18_b - y_pd_18_b; // Attachmentniveau bukkal 18
		var y_al_18_mb = y_gm_18_mb - y_pd_18_mb; // Attachmentniveau mesiobukkal 18

		// Berechnung des Attachmentniveaus 18 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_18_dp = y_gm_18_dp + y_pd_18_dp; // Attachmentniveau distopalatinal 18
		var y_al_18_p = y_gm_18_p + y_pd_18_p; // Attachmentniveau palatinal 18
		var y_al_18_mp = y_gm_18_mp + y_pd_18_mp; // Attachmentniveau mesiopalatinal 18

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[18].storeCoordinates(
			x_db_18, x_mb_18, x_dp_18, x_mp_18, x_b_18, x_p_18,
			y_gm_18_db, y_gm_18_b, y_gm_18_mb, y_pd_18_db, y_pd_18_b, y_pd_18_mb,
			y_gm_18_dp, y_gm_18_p, y_gm_18_mp, y_pd_18_dp, y_pd_18_p, y_pd_18_mp,
			y_al_18_db, y_al_18_b, y_al_18_mb, y_al_18_dp, y_al_18_p, y_al_18_mp
		);
				
		// Parodontaltasche 18 bukkal zeichnen
		var string =
			x_db_18 + ", " + y_al_18_db + "  "
			+ x_b_18 + ", " + y_al_18_b + "  "
			+ x_mb_18 + ", " + y_al_18_mb + "  "
			+ x_mb_18 + ", " + y_gm_18_mb + "  "
			+ x_b_18 + ", " + y_gm_18_b + "  "
			+ x_db_18 + ", " + y_gm_18_db;
		document.getElementById("s_polygon_18_b").setAttribute("points", string);
		
		// Attachmentniveau 18 bukkal zeichnen
		var string =
			x_db_18 + ", " + y_al_18_db + "  "
			+ x_b_18 + ", " + y_al_18_b + "  "
			+ x_mb_18 + ", " + y_al_18_mb;
		document.getElementById("s_polyline_al_18_b").setAttribute("points", string);
		
		// Margo Gingivae 18 bukkal zeichnen
		var string =
			x_db_18 + ", " + y_gm_18_db + "  "
			+ x_b_18 + ", " + y_gm_18_b + "  "
			+ x_mb_18 + ", " + y_gm_18_mb;
		document.getElementById("s_polyline_gm_18_b").setAttribute("points", string);

		// Parodontaltasche 18 palatinal zeichnen
		var string =
			x_dp_18 + ", " + y_al_18_dp + "  "
			+ x_p_18 + ", " + y_al_18_p + "  "
			+ x_mp_18 + ", " + y_al_18_mp + "  "
			+ x_mp_18 + ", " + y_gm_18_mp + "  "
			+ x_p_18 + ", " + y_gm_18_p + "  "
			+ x_dp_18 + ", " + y_gm_18_dp;
		document.getElementById("s_polygon_18_p").setAttribute("points", string);

		// Attachmentniveau 18 palatinal zeichnen
		var string =
			x_dp_18 + ", " + y_al_18_dp + "  "
			+ x_p_18 + ", " + y_al_18_p + "  "
			+ x_mp_18 + ", " + y_al_18_mp;
		document.getElementById("s_polyline_al_18_p").setAttribute("points", string);
		
		// Margo Gingivae 18 palatinal zeichnen
		var string =
			x_dp_18 + ", " + y_gm_18_dp + "  "
			+ x_p_18 + ", " + y_gm_18_p + "  "
			+ x_mp_18 + ", " + y_gm_18_mp;
		document.getElementById("s_polyline_gm_18_p").setAttribute("points", string);
		
	} else {
		
		document.getElementById('s_polygon_18_b').style.display = 'none';
		document.getElementById('s_polyline_al_18_b').style.display = 'none';
		document.getElementById('s_polyline_gm_18_b').style.display = 'none';

		document.getElementById('s_polygon_18_p').style.display = 'none';
		document.getElementById('s_polyline_al_18_p').style.display = 'none';
		document.getElementById('s_polyline_gm_18_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_18) == 1 && Number(jsonObj2.tooth_17) == 1) {
		document.getElementById('s_polygon_inter_18_17_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_18_17_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_18_17_b').style.display = 'block';

		document.getElementById('s_polygon_inter_18_17_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_18_17_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_18_17_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
		var x_db_17 = 346; // distal 17

		// Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
		var x_dp_17 = 344; // distal 17

		// Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
		var y_gm_17_db = gm_OK_b + 6.5 * gm_17_db; // Margo Gingivae distobukkal 17
		var y_pd_17_db = 6.5 * pd_17_db; // Sondierungstiefe distobukkal 17

		// Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
		var y_gm_17_dp = gm_OK_p - 6.5 * gm_17_dp; // Margo Gingivae distopalatinal 17
		var y_pd_17_dp = 6.5 * pd_17_dp; // Sondierungstiefe distopalatinal 17

		// Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_db = y_gm_17_db - y_pd_17_db; // Attachmentniveau distobukkal 17

		// Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_dp = y_gm_17_dp + y_pd_17_dp; // Attachmentniveau distopalatinal 17

		// Parodontaltasche inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_al_18_mb + "  "
			+ x_db_17 + ", " + y_al_17_db + "  "
			+ x_db_17 + ", " + y_gm_17_db + "  "
			+ x_mb_18 + ", " + y_gm_18_mb;

		document.getElementById("s_polygon_inter_18_17_b").setAttribute("points", string);
		// Attachmentniveau inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_al_18_mb + "  "
			+ x_db_17 + ", " + y_al_17_db;
		document.getElementById("s_polyline_al_inter_18_17_b").setAttribute("points", string);
		// Margo Gingivae inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_gm_18_mb + "  "
			+ x_db_17 + ", " + y_gm_17_db;
		document.getElementById("s_polyline_gm_inter_18_17_b").setAttribute("points", string);

		// Parodontaltasche inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_al_18_mp + "  "
			+ x_dp_17 + ", " + y_al_17_dp + "  "
			+ x_dp_17 + ", " + y_gm_17_dp + "  "
			+ x_mp_18 + ", " + y_gm_18_mp;
		document.getElementById("s_polygon_inter_18_17_p").setAttribute("points", string);
		
		// Attachmentniveau inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_al_18_mp + "  "
			+ x_dp_17 + ", " + y_al_17_dp;
		document.getElementById("s_polyline_al_inter_18_17_p").setAttribute("points", string);
		
		// Margo Gingivae inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_gm_18_mp + "  "
			+ x_dp_17 + ", " + y_gm_17_dp;
		document.getElementById("s_polyline_gm_inter_18_17_p").setAttribute("points", string);
		
	} else {
		
		document.getElementById('s_polygon_inter_18_17_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_18_17_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_18_17_b').style.display = 'none';

		document.getElementById('s_polygon_inter_18_17_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_18_17_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_18_17_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_17) == 1) {
		document.getElementById('s_polygon_17_b').style.display = 'block';
		document.getElementById('s_polyline_al_17_b').style.display = 'block';
		document.getElementById('s_polyline_gm_17_b').style.display = 'block';

		document.getElementById('s_polygon_17_p').style.display = 'block';
		document.getElementById('s_polyline_al_17_p').style.display = 'block';
		document.getElementById('s_polyline_gm_17_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
		var x_db_17 = 346; // distal 17
		var x_mb_17 = 386; // mesial 17
		var x_b_17 = (x_db_17 + x_mb_17) / 2; // bukkal 17

		// Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
		var x_dp_17 = 344; // distal 17
		var x_mp_17 = 383; // mesial 17
		var x_p_17 = (x_dp_17 + x_mp_17) / 2; // palatinal 17

		// Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
		var y_gm_17_db = gm_OK_b + 6.5 * gm_17_db; // Margo Gingivae distobukkal 17
		var y_gm_17_b = gm_OK_b + 6.5 * gm_17_b; // Margo Gingivae bukkal 17
		var y_gm_17_mb = gm_OK_b + 6.5 * gm_17_mb; // Margo Gingivae mesiobukkal 17
		var y_pd_17_db = 6.5 * pd_17_db; // Sondierungstiefe distobukkal 17
		var y_pd_17_b = 6.5 * pd_17_b; // Sondierungstiefe bukkal 17
		var y_pd_17_mb = 6.5 * pd_17_mb; // Sondierungstiefe mesiobukkal 17

		// Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
		var y_gm_17_dp = gm_OK_p - 6.5 * gm_17_dp; // Margo Gingivae distopalatinal 17
		var y_gm_17_p = gm_OK_p - 6.5 * gm_17_p; // Margo Gingivae palatinal 17
		var y_gm_17_mp = gm_OK_p - 6.5 * gm_17_mp; // Margo Gingivae mesiopalatinal 17
		var y_pd_17_dp = 6.5 * pd_17_dp; // Sondierungstiefe distopalatinal 17
		var y_pd_17_p = 6.5 * pd_17_p; // Sondierungstiefe palatinal 17
		var y_pd_17_mp = 6.5 * pd_17_mp; // Sondierungstiefe mesiopalatinal 17

		// Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_db = y_gm_17_db - y_pd_17_db; // Attachmentniveau distobukkal 17
		var y_al_17_b = y_gm_17_b - y_pd_17_b; // Attachmentniveau bukkal 17
		var y_al_17_mb = y_gm_17_mb - y_pd_17_mb; // Attachmentniveau mesiobukkal 17

		// Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_dp = y_gm_17_dp + y_pd_17_dp; // Attachmentniveau distopalatinal 17
		var y_al_17_p = y_gm_17_p + y_pd_17_p; // Attachmentniveau palatinal 17
		var y_al_17_mp = y_gm_17_mp + y_pd_17_mp; // Attachmentniveau mesiopalatinal 17

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[17].storeCoordinates(
			x_db_17, x_mb_17, x_dp_17, x_mp_17, x_b_17, x_p_17,
			y_gm_17_db, y_gm_17_b, y_gm_17_mb, y_pd_17_db, y_pd_17_b, y_pd_17_mb,
			y_gm_17_dp, y_gm_17_p, y_gm_17_mp, y_pd_17_dp, y_pd_17_p, y_pd_17_mp,
			y_al_17_db, y_al_17_b, y_al_17_mb, y_al_17_dp, y_al_17_p, y_al_17_mp
		);
		
		// Parodontaltasche 17 bukkal zeichnen
		var string =
			x_db_17 + ", " + y_al_17_db + "  "
			+ x_b_17 + ", " + y_al_17_b + "  "
			+ x_mb_17 + ", " + y_al_17_mb + "  "
			+ x_mb_17 + ", " + y_gm_17_mb + "  "
			+ x_b_17 + ", " + y_gm_17_b + "  "
			+ x_db_17 + ", " + y_gm_17_db;
		document.getElementById("s_polygon_17_b").setAttribute("points", string);
		
		// Attachmentniveau 17 bukkal zeichnen
		var string =
			x_db_17 + ", " + y_al_17_db + "  "
			+ x_b_17 + ", " + y_al_17_b + "  "
			+ x_mb_17 + ", " + y_al_17_mb;
		document.getElementById("s_polyline_al_17_b").setAttribute("points", string);
		
		// Margo Gingivae 17 bukkal zeichnen
		var string =
			x_db_17 + ", " + y_gm_17_db + "  "
			+ x_b_17 + ", " + y_gm_17_b + "  "
			+ x_mb_17 + ", " + y_gm_17_mb;
		document.getElementById("s_polyline_gm_17_b").setAttribute("points", string);

		// Parodontaltasche 17 palatinal zeichnen
		var string =
			x_dp_17 + ", " + y_al_17_dp + "  "
			+ x_p_17 + ", " + y_al_17_p + "  "
			+ x_mp_17 + ", " + y_al_17_mp + "  "
			+ x_mp_17 + ", " + y_gm_17_mp + "  "
			+ x_p_17 + ", " + y_gm_17_p + "  "
			+ x_dp_17 + ", " + y_gm_17_dp;
		document.getElementById("s_polygon_17_p").setAttribute("points", string);
		
		// Attachmentniveau 17 palatinal zeichnen
		var string =
			x_dp_17 + ", " + y_al_17_dp + "  "
			+ x_p_17 + ", " + y_al_17_p + "  "
			+ x_mp_17 + ", " + y_al_17_mp;
		document.getElementById("s_polyline_al_17_p").setAttribute("points", string);
		
		// Margo Gingivae 17 palatinal zeichnen
		var string =
			x_dp_17 + ", " + y_gm_17_dp + "  "
			+ x_p_17 + ", " + y_gm_17_p + "  "
			+ x_mp_17 + ", " + y_gm_17_mp;
		document.getElementById("s_polyline_gm_17_p").setAttribute("points", string);
		
	} else {
		
		document.getElementById('s_polygon_17_b').style.display = 'none';
		document.getElementById('s_polyline_al_17_b').style.display = 'none';
		document.getElementById('s_polyline_gm_17_b').style.display = 'none';

		document.getElementById('s_polygon_17_p').style.display = 'none';
		document.getElementById('s_polyline_al_17_p').style.display = 'none';
		document.getElementById('s_polyline_gm_17_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_17) == 1 && Number(jsonObj2.tooth_16) == 1) {
		document.getElementById('s_polygon_inter_17_16_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_17_16_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_17_16_b').style.display = 'block';

		document.getElementById('s_polygon_inter_17_16_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_17_16_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_17_16_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
		var x_db_16 = 397; // distal 16

		// Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
		var x_dp_16 = 399; // distal 16

		// Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
		var y_gm_16_db = gm_OK_b + 6.5 * gm_16_db; // Margo Gingivae distobukkal 16
		var y_pd_16_db = 6.5 * pd_16_db; // Sondierungstiefe distobukkal 16

		// Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
		var y_gm_16_dp = gm_OK_p - 6.5 * gm_16_dp; // Margo Gingivae distopalatinal 16
		var y_pd_16_dp = 6.5 * pd_16_dp; // Sondierungstiefe distopalatinal 16

		// Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_db = y_gm_16_db - y_pd_16_db; // Attachmentniveau distobukkal 16

		// Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_dp = y_gm_16_dp + y_pd_16_dp; // Attachmentniveau distopalatinal 16

		// Parodontaltasche inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_al_17_mb + "  "
			+ x_db_16 + ", " + y_al_16_db + "  "
			+ x_db_16 + ", " + y_gm_16_db + "  "
			+ x_mb_17 + ", " + y_gm_17_mb;
		document.getElementById("s_polygon_inter_17_16_b").setAttribute("points", string);
		// Attachmentniveau inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_al_17_mb + "  "
			+ x_db_16 + ", " + y_al_16_db;
		document.getElementById("s_polyline_al_inter_17_16_b").setAttribute("points", string);
		// Margo Gingivae inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_gm_17_mb + "  "
			+ x_db_16 + ", " + y_gm_16_db;
		document.getElementById("s_polyline_gm_inter_17_16_b").setAttribute("points", string);

		// Parodontaltasche inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_al_17_mp + "  "
			+ x_dp_16 + ", " + y_al_16_dp + "  "
			+ x_dp_16 + ", " + y_gm_16_dp + "  "
			+ x_mp_17 + ", " + y_gm_17_mp;
		document.getElementById("s_polygon_inter_17_16_p").setAttribute("points", string);
		// Attachmentniveau inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_al_17_mp + "  "
			+ x_dp_16 + ", " + y_al_16_dp;
		document.getElementById("s_polyline_al_inter_17_16_p").setAttribute("points", string);
		// Margo Gingivae inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_gm_17_mp + "  "
			+ x_dp_16 + ", " + y_gm_16_dp;
		document.getElementById("s_polyline_gm_inter_17_16_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_17_16_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_17_16_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_17_16_b').style.display = 'none';

		document.getElementById('s_polygon_inter_17_16_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_17_16_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_17_16_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_18) == 1 && Number(jsonObj2.tooth_17) == 1) {
		document.getElementById('s_polygon_inter_18_17_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_18_17_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_18_17_b').style.display = 'block';

		document.getElementById('s_polygon_inter_18_17_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_18_17_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_18_17_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 18 (bukkal) in der Bitmap
		var x_mb_18 = 332; // mesial 18

		// Set der horizontalen Koordinaten von Zahn 18 (palatinal) in der Bitmap
		var x_mp_18 = 331; // mesial 18

		// Set der vertikalen Koordinaten von Zahn 18 (bukkal) aus dem Formular
		var y_gm_18_mb = gm_OK_b + 6.5 * gm_18_mb; // Margo Gingivae mesiobukkal 18
		var y_pd_18_mb = 6.5 * pd_18_mb; // Sondierungstiefe mesiobukkal 18

		// Set der vertikalen Koordinaten von Zahn 18 (palatinal) aus dem Formular
		var y_gm_18_mp = gm_OK_p - 6.5 * gm_18_mp; // Margo Gingivae mesiopalatinal 18
		var y_pd_18_mp = 6.5 * pd_18_mp; // Sondierungstiefe mesiopalatinal 18

		// Berechnung des Attachmentniveaus 18 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_18_mb = y_gm_18_mb - y_pd_18_mb; // Attachmentniveau mesiobukkal 18

		// Berechnung des Attachmentniveaus 18 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_18_mp = y_gm_18_mp + y_pd_18_mp; // Attachmentniveau mesiopalatinal 18

		// Parodontaltasche inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_al_18_mb + "  "
			+ x_db_17 + ", " + y_al_17_db + "  "
			+ x_db_17 + ", " + y_gm_17_db + "  "
			+ x_mb_18 + ", " + y_gm_18_mb;
		document.getElementById("s_polygon_inter_18_17_b").setAttribute("points", string);
		// Attachmentniveau inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_al_18_mb + "  "
			+ x_db_17 + ", " + y_al_17_db;
		document.getElementById("s_polyline_al_inter_18_17_b").setAttribute("points", string);
		// Margo Gingivae inter_18_17 bukkal zeichnen
		var string =
			x_mb_18 + ", " + y_gm_18_mb + "  "
			+ x_db_17 + ", " + y_gm_17_db;
		document.getElementById("s_polyline_gm_inter_18_17_b").setAttribute("points", string);

		// Parodontaltasche inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_al_18_mp + "  "
			+ x_dp_17 + ", " + y_al_17_dp + "  "
			+ x_dp_17 + ", " + y_gm_17_dp + "  "
			+ x_mp_18 + ", " + y_gm_18_mp;
		document.getElementById("s_polygon_inter_18_17_p").setAttribute("points", string);
		// Attachmentniveau inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_al_18_mp + "  "
			+ x_dp_17 + ", " + y_al_17_dp;
		document.getElementById("s_polyline_al_inter_18_17_p").setAttribute("points", string);
		// Margo Gingivae inter_18_17 palatinal zeichnen
		var string =
			x_mp_18 + ", " + y_gm_18_mp + "  "
			+ x_dp_17 + ", " + y_gm_17_dp;
		document.getElementById("s_polyline_gm_inter_18_17_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_18_17_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_18_17_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_18_17_b').style.display = 'none';

		document.getElementById('s_polygon_inter_18_17_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_18_17_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_18_17_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_16) == 1) {
		document.getElementById('s_polygon_16_b').style.display = 'block';
		document.getElementById('s_polyline_al_16_b').style.display = 'block';
		document.getElementById('s_polyline_gm_16_b').style.display = 'block';

		document.getElementById('s_polygon_16_p').style.display = 'block';
		document.getElementById('s_polyline_al_16_p').style.display = 'block';
		document.getElementById('s_polyline_gm_16_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
		var x_db_16 = 397; // distal 16
		var x_mb_16 = 451; // mesial 16
		var x_b_16 = (x_db_16 + x_mb_16) / 2; // bukkal 16

		// Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
		var x_dp_16 = 399; // distal 16
		var x_mp_16 = 445; // mesial 16
		var x_p_16 = (x_dp_16 + x_mp_16) / 2; // palatinal 16

		// Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
		var y_gm_16_db = gm_OK_b + 6.5 * gm_16_db; // Margo Gingivae distobukkal 16
		var y_gm_16_b = gm_OK_b + 6.5 * gm_16_b; // Margo Gingivae bukkal 16
		var y_gm_16_mb = gm_OK_b + 6.5 * gm_16_mb; // Margo Gingivae mesiobukkal 16
		var y_pd_16_db = 6.5 * pd_16_db; // Sondierungstiefe distobukkal 16
		var y_pd_16_b = 6.5 * pd_16_b; // Sondierungstiefe bukkal 16
		var y_pd_16_mb = 6.5 * pd_16_mb; // Sondierungstiefe mesiobukkal 16

		// Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
		var y_gm_16_dp = gm_OK_p - 6.5 * gm_16_dp; // Margo Gingivae distopalatinal 16
		var y_gm_16_p = gm_OK_p - 6.5 * gm_16_p; // Margo Gingivae palatinal 16
		var y_gm_16_mp = gm_OK_p - 6.5 * gm_16_mp; // Margo Gingivae mesiopalatinal 16
		var y_pd_16_dp = 6.5 * pd_16_dp; // Sondierungstiefe distopalatinal 16
		var y_pd_16_p = 6.5 * pd_16_p; // Sondierungstiefe palatinal 16
		var y_pd_16_mp = 6.5 * pd_16_mp; // Sondierungstiefe mesiopalatinal 16

		// Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_db = y_gm_16_db - y_pd_16_db; // Attachmentniveau distobukkal 16
		var y_al_16_b = y_gm_16_b - y_pd_16_b; // Attachmentniveau bukkal 16
		var y_al_16_mb = y_gm_16_mb - y_pd_16_mb; // Attachmentniveau mesiobukkal 16

		// Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_dp = y_gm_16_dp + y_pd_16_dp; // Attachmentniveau distopalatinal 16
		var y_al_16_p = y_gm_16_p + y_pd_16_p; // Attachmentniveau palatinal 16
		var y_al_16_mp = y_gm_16_mp + y_pd_16_mp; // Attachmentniveau mesiopalatinal 16

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[16].storeCoordinates(
			x_db_16, x_mb_16, x_dp_16, x_mp_16, x_b_16, x_p_16,
			y_gm_16_db, y_gm_16_b, y_gm_16_mb, y_pd_16_db, y_pd_16_b, y_pd_16_mb,
			y_gm_16_dp, y_gm_16_p, y_gm_16_mp, y_pd_16_dp, y_pd_16_p, y_pd_16_mp,
			y_al_16_db, y_al_16_b, y_al_16_mb, y_al_16_dp, y_al_16_p, y_al_16_mp
		);
		
		// Parodontaltasche 16 bukkal zeichnen
		var string =
			x_db_16 + ", " + y_al_16_db + "  "
			+ x_b_16 + ", " + y_al_16_b + "  "
			+ x_mb_16 + ", " + y_al_16_mb + "  "
			+ x_mb_16 + ", " + y_gm_16_mb + "  "
			+ x_b_16 + ", " + y_gm_16_b + "  "
			+ x_db_16 + ", " + y_gm_16_db;
		document.getElementById("s_polygon_16_b").setAttribute("points", string);
		// Attachmentniveau 16 bukkal zeichnen
		var string =
			x_db_16 + ", " + y_al_16_db + "  "
			+ x_b_16 + ", " + y_al_16_b + "  "
			+ x_mb_16 + ", " + y_al_16_mb;
		document.getElementById("s_polyline_al_16_b").setAttribute("points", string);
		// Margo Gingivae 16 bukkal zeichnen
		var string =
			x_db_16 + ", " + y_gm_16_db + "  "
			+ x_b_16 + ", " + y_gm_16_b + "  "
			+ x_mb_16 + ", " + y_gm_16_mb;
		document.getElementById("s_polyline_gm_16_b").setAttribute("points", string);

		// Parodontaltasche 16 palatinal zeichnen
		var string =
			x_dp_16 + ", " + y_al_16_dp + "  "
			+ x_p_16 + ", " + y_al_16_p + "  "
			+ x_mp_16 + ", " + y_al_16_mp + "  "
			+ x_mp_16 + ", " + y_gm_16_mp + "  "
			+ x_p_16 + ", " + y_gm_16_p + "  "
			+ x_dp_16 + ", " + y_gm_16_dp;
		document.getElementById("s_polygon_16_p").setAttribute("points", string);
		// Attachmentniveau 16 palatinal zeichnen
		var string =
			x_dp_16 + ", " + y_al_16_dp + "  "
			+ x_p_16 + ", " + y_al_16_p + "  "
			+ x_mp_16 + ", " + y_al_16_mp;
		document.getElementById("s_polyline_al_16_p").setAttribute("points", string);
		// Margo Gingivae 16 palatinal zeichnen
		var string =
			x_dp_16 + ", " + y_gm_16_dp + "  "
			+ x_p_16 + ", " + y_gm_16_p + "  "
			+ x_mp_16 + ", " + y_gm_16_mp;
		document.getElementById("s_polyline_gm_16_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_16_b').style.display = 'none';
		document.getElementById('s_polyline_al_16_b').style.display = 'none';
		document.getElementById('s_polyline_gm_16_b').style.display = 'none';

		document.getElementById('s_polygon_16_p').style.display = 'none';
		document.getElementById('s_polyline_al_16_p').style.display = 'none';
		document.getElementById('s_polyline_gm_16_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_16) == 1 && Number(jsonObj2.tooth_15) == 1) {
		document.getElementById('s_polygon_inter_16_15_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_16_15_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_16_15_b').style.display = 'block';

		document.getElementById('s_polygon_inter_16_15_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_16_15_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_16_15_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
		var x_db_15 = 463; // distal 15

		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
		var x_dp_15 = 461; // distal 15

		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
		var y_gm_15_db = gm_OK_b + 6.5 * gm_15_db; // Margo Gingivae distobukkal 15
		var y_pd_15_db = 6.5 * pd_15_db; // Sondierungstiefe distobukkal 15

		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
		var y_gm_15_dp = gm_OK_p - 6.5 * gm_15_dp; // Margo Gingivae distopalatinal 15
		var y_pd_15_dp = 6.5 * pd_15_dp; // Sondierungstiefe distopalatinal 15

		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_db = y_gm_15_db - y_pd_15_db; // Attachmentniveau distobukkal 15

		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_dp = y_gm_15_dp + y_pd_15_dp; // Attachmentniveau distopalatinal 15

		// Parodontaltasche inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_al_16_mb + "  "
			+ x_db_15 + ", " + y_al_15_db + "  "
			+ x_db_15 + ", " + y_gm_15_db + "  "
			+ x_mb_16 + ", " + y_gm_16_mb;
		document.getElementById("s_polygon_inter_16_15_b").setAttribute("points", string);
		// Attachmentniveau inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_al_16_mb + "  "
			+ x_db_15 + ", " + y_al_15_db;
		document.getElementById("s_polyline_al_inter_16_15_b").setAttribute("points", string);
		// Margo Gingivae inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_gm_16_mb + "  "
			+ x_db_15 + ", " + y_gm_15_db;
		document.getElementById("s_polyline_gm_inter_16_15_b").setAttribute("points", string);

		// Parodontaltasche inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_al_16_mp + "  "
			+ x_dp_15 + ", " + y_al_15_dp + "  "
			+ x_dp_15 + ", " + y_gm_15_dp + "  "
			+ x_mp_16 + ", " + y_gm_16_mp;
		document.getElementById("s_polygon_inter_16_15_p").setAttribute("points", string);
		// Attachmentniveau inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_al_16_mp + "  "
			+ x_dp_15 + ", " + y_al_15_dp;
		document.getElementById("s_polyline_al_inter_16_15_p").setAttribute("points", string);
		// Margo Gingivae inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_gm_16_mp + "  "
			+ x_dp_15 + ", " + y_gm_15_dp;
		document.getElementById("s_polyline_gm_inter_16_15_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_16_15_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_16_15_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_16_15_b').style.display = 'none';

		document.getElementById('s_polygon_inter_16_15_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_16_15_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_16_15_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_17) == 1 && Number(jsonObj2.tooth_16) == 1) {
		document.getElementById('s_polygon_inter_17_16_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_17_16_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_17_16_b').style.display = 'block';

		document.getElementById('s_polygon_inter_17_16_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_17_16_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_17_16_p').style.display = 'block';
		// Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
		var x_mb_17 = 386; // mesial 17

		// Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
		var x_mp_17 = 383; // mesial 17

		// Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
		var y_gm_17_mb = gm_OK_b + 6.5 * gm_17_mb; // Margo Gingivae mesiobukkal 17
		var y_pd_17_mb = 6.5 * pd_17_mb; // Sondierungstiefe mesiobukkal 17

		// Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
		var y_gm_17_mp = gm_OK_p - 6.5 * gm_17_mp; // Margo Gingivae mesiopalatinal 17
		var y_pd_17_mp = 6.5 * pd_17_mp; // Sondierungstiefe mesiopalatinal 17

		// Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_mb = y_gm_17_mb - y_pd_17_mb; // Attachmentniveau mesiobukkal 17

		// Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_17_mp = y_gm_17_mp + y_pd_17_mp; // Attachmentniveau mesiopalatinal 17

		// Parodontaltasche inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_al_17_mb + "  "
			+ x_db_16 + ", " + y_al_16_db + "  "
			+ x_db_16 + ", " + y_gm_16_db + "  "
			+ x_mb_17 + ", " + y_gm_17_mb;
		document.getElementById("s_polygon_inter_17_16_b").setAttribute("points", string);
		// Attachmentniveau inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_al_17_mb + "  "
			+ x_db_16 + ", " + y_al_16_db;
		document.getElementById("s_polyline_al_inter_17_16_b").setAttribute("points", string);
		// Margo Gingivae inter_17_16 bukkal zeichnen
		var string =
			x_mb_17 + ", " + y_gm_17_mb + "  "
			+ x_db_16 + ", " + y_gm_16_db;
		document.getElementById("s_polyline_gm_inter_17_16_b").setAttribute("points", string);

		// Parodontaltasche inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_al_17_mp + "  "
			+ x_dp_16 + ", " + y_al_16_dp + "  "
			+ x_dp_16 + ", " + y_gm_16_dp + "  "
			+ x_mp_17 + ", " + y_gm_17_mp;
		document.getElementById("s_polygon_inter_17_16_p").setAttribute("points", string);
		// Attachmentniveau inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_al_17_mp + "  "
			+ x_dp_16 + ", " + y_al_16_dp;
		document.getElementById("s_polyline_al_inter_17_16_p").setAttribute("points", string);
		// Margo Gingivae inter_17_16 palatinal zeichnen
		var string =
			x_mp_17 + ", " + y_gm_17_mp + "  "
			+ x_dp_16 + ", " + y_gm_16_dp;
		document.getElementById("s_polyline_gm_inter_17_16_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_17_16_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_17_16_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_17_16_b').style.display = 'none';

		document.getElementById('s_polygon_inter_17_16_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_17_16_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_17_16_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_15) == 1) {
		document.getElementById('s_polygon_15_b').style.display = 'block';
		document.getElementById('s_polyline_al_15_b').style.display = 'block';
		document.getElementById('s_polyline_gm_15_b').style.display = 'block';

		document.getElementById('s_polygon_15_p').style.display = 'block';
		document.getElementById('s_polyline_al_15_p').style.display = 'block';
		document.getElementById('s_polyline_gm_15_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
		var x_db_15 = 463; // distal 15
		var x_mb_15 = 489; // mesial 15
		var x_b_15 = (x_db_15 + x_mb_15) / 2; // bukkal 15

		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
		var x_dp_15 = 461; // distal 15
		var x_mp_15 = 487; // mesial 15
		var x_p_15 = (x_dp_15 + x_mp_15) / 2; // palatinal 15

		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
		var y_gm_15_db = gm_OK_b + 6.5 * gm_15_db; // Margo Gingivae distobukkal 15
		var y_gm_15_b = gm_OK_b + 6.5 * gm_15_b; // Margo Gingivae bukkal 15
		var y_gm_15_mb = gm_OK_b + 6.5 * gm_15_mb; // Margo Gingivae mesiobukkal 15
		var y_pd_15_db = 6.5 * pd_15_db; // Sondierungstiefe distobukkal 15
		var y_pd_15_b = 6.5 * pd_15_b; // Sondierungstiefe bukkal 15
		var y_pd_15_mb = 6.5 * pd_15_mb; // Sondierungstiefe mesiobukkal 15

		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
		var y_gm_15_dp = gm_OK_p - 6.5 * gm_15_dp; // Margo Gingivae distopalatinal 15
		var y_gm_15_p = gm_OK_p - 6.5 * gm_15_p; // Margo Gingivae palatinal 15
		var y_gm_15_mp = gm_OK_p - 6.5 * gm_15_mp; // Margo Gingivae mesiopalatinal 15
		var y_pd_15_dp = 6.5 * pd_15_dp; // Sondierungstiefe distopalatinal 15
		var y_pd_15_p = 6.5 * pd_15_p; // Sondierungstiefe palatinal 15
		var y_pd_15_mp = 6.5 * pd_15_mp; // Sondierungstiefe mesiopalatinal 15

		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_db = y_gm_15_db - y_pd_15_db; // Attachmentniveau distobukkal 15
		var y_al_15_b = y_gm_15_b - y_pd_15_b; // Attachmentniveau bukkal 15
		var y_al_15_mb = y_gm_15_mb - y_pd_15_mb; // Attachmentniveau mesiobukkal 15

		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_dp = y_gm_15_dp + y_pd_15_dp; // Attachmentniveau distopalatinal 15
		var y_al_15_p = y_gm_15_p + y_pd_15_p; // Attachmentniveau palatinal 15
		var y_al_15_mp = y_gm_15_mp + y_pd_15_mp; // Attachmentniveau mesiopalatinal 15

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[15].storeCoordinates(
			x_db_15, x_mb_15, x_dp_15, x_mp_15, x_b_15, x_p_15,
			y_gm_15_db, y_gm_15_b, y_gm_15_mb, y_pd_15_db, y_pd_15_b, y_pd_15_mb,
			y_gm_15_dp, y_gm_15_p, y_gm_15_mp, y_pd_15_dp, y_pd_15_p, y_pd_15_mp,
			y_al_15_db, y_al_15_b, y_al_15_mb, y_al_15_dp, y_al_15_p, y_al_15_mp
		);
		
		// Parodontaltasche 15 bukkal zeichnen
		var string =
			x_db_15 + ", " + y_al_15_db + "  "
			+ x_b_15 + ", " + y_al_15_b + "  "
			+ x_mb_15 + ", " + y_al_15_mb + "  "
			+ x_mb_15 + ", " + y_gm_15_mb + "  "
			+ x_b_15 + ", " + y_gm_15_b + "  "
			+ x_db_15 + ", " + y_gm_15_db;
		document.getElementById("s_polygon_15_b").setAttribute("points", string);
		// Attachmentniveau 15 bukkal zeichnen
		var string =
			x_db_15 + ", " + y_al_15_db + "  "
			+ x_b_15 + ", " + y_al_15_b + "  "
			+ x_mb_15 + ", " + y_al_15_mb;
		document.getElementById("s_polyline_al_15_b").setAttribute("points", string);
		// Margo Gingivae 15 bukkal zeichnen
		var string =
			x_db_15 + ", " + y_gm_15_db + "  "
			+ x_b_15 + ", " + y_gm_15_b + "  "
			+ x_mb_15 + ", " + y_gm_15_mb;
		document.getElementById("s_polyline_gm_15_b").setAttribute("points", string);

		// Parodontaltasche 15 palatinal zeichnen
		var string =
			x_dp_15 + ", " + y_al_15_dp + "  "
			+ x_p_15 + ", " + y_al_15_p + "  "
			+ x_mp_15 + ", " + y_al_15_mp + "  "
			+ x_mp_15 + ", " + y_gm_15_mp + "  "
			+ x_p_15 + ", " + y_gm_15_p + "  "
			+ x_dp_15 + ", " + y_gm_15_dp;
		document.getElementById("s_polygon_15_p").setAttribute("points", string);
		// Attachmentniveau 15 palatinal zeichnen
		var string =
			x_dp_15 + ", " + y_al_15_dp + "  "
			+ x_p_15 + ", " + y_al_15_p + "  "
			+ x_mp_15 + ", " + y_al_15_mp;
		document.getElementById("s_polyline_al_15_p").setAttribute("points", string);
		// Margo Gingivae 15 palatinal zeichnen
		var string =
			x_dp_15 + ", " + y_gm_15_dp + "  "
			+ x_p_15 + ", " + y_gm_15_p + "  "
			+ x_mp_15 + ", " + y_gm_15_mp;
		document.getElementById("s_polyline_gm_15_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_15_b').style.display = 'none';
		document.getElementById('s_polyline_al_15_b').style.display = 'none';
		document.getElementById('s_polyline_gm_15_b').style.display = 'none';

		document.getElementById('s_polygon_15_p').style.display = 'none';
		document.getElementById('s_polyline_al_15_p').style.display = 'none';
		document.getElementById('s_polyline_gm_15_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_15) == 1 && Number(jsonObj2.tooth_14) == 1) {
		document.getElementById('s_polygon_inter_15_14_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_15_14_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_15_14_b').style.display = 'block';

		document.getElementById('s_polygon_inter_15_14_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_15_14_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_15_14_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
		var x_db_14 = 504; // distal 14

		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
		var x_dp_14 = 504; // distal 14

		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
		var y_gm_14_db = gm_OK_b + 6.5 * gm_14_db; // Margo Gingivae distobukkal 14
		var y_pd_14_db = 6.5 * pd_14_db; // Sondierungstiefe distobukkal 14

		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
		var y_gm_14_dp = gm_OK_p - 6.5 * gm_14_dp; // Margo Gingivae distopalatinal 14
		var y_pd_14_dp = 6.5 * pd_14_dp; // Sondierungstiefe distopalatinal 14

		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_db = y_gm_14_db - y_pd_14_db; // Attachmentniveau distobukkal 14

		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_dp = y_gm_14_dp + y_pd_14_dp; // Attachmentniveau distopalatinal 14

		// Parodontaltasche inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_al_15_mb + "  "
			+ x_db_14 + ", " + y_al_14_db + "  "
			+ x_db_14 + ", " + y_gm_14_db + "  "
			+ x_mb_15 + ", " + y_gm_15_mb;
		document.getElementById("s_polygon_inter_15_14_b").setAttribute("points", string);
		// Attachmentniveau inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_al_15_mb + "  "
			+ x_db_14 + ", " + y_al_14_db;
		document.getElementById("s_polyline_al_inter_15_14_b").setAttribute("points", string);
		// Margo Gingivae inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_gm_15_mb + "  "
			+ x_db_14 + ", " + y_gm_14_db;
		document.getElementById("s_polyline_gm_inter_15_14_b").setAttribute("points", string);

		// Parodontaltasche inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_al_15_mp + "  "
			+ x_dp_14 + ", " + y_al_14_dp + "  "
			+ x_dp_14 + ", " + y_gm_14_dp + "  "
			+ x_mp_15 + ", " + y_gm_15_mp;
		document.getElementById("s_polygon_inter_15_14_p").setAttribute("points", string);
		// Attachmentniveau inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_al_15_mp + "  "
			+ x_dp_14 + ", " + y_al_14_dp;
		document.getElementById("s_polyline_al_inter_15_14_p").setAttribute("points", string);
		// Margo Gingivae inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_gm_15_mp + "  "
			+ x_dp_14 + ", " + y_gm_14_dp;
		document.getElementById("s_polyline_gm_inter_15_14_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_15_14_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_15_14_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_15_14_b').style.display = 'none';

		document.getElementById('s_polygon_inter_15_14_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_15_14_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_15_14_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_16) == 1 && Number(jsonObj2.tooth_15) == 1) {
		document.getElementById('s_polygon_inter_16_15_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_16_15_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_16_15_b').style.display = 'block';

		document.getElementById('s_polygon_inter_16_15_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_16_15_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_16_15_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
		var x_mb_16 = 451; // mesial 16

		// Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
		var x_mp_16 = 445; // mesial 16

		// Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
		var y_gm_16_mb = gm_OK_b + 6.5 * gm_16_mb; // Margo Gingivae mesiobukkal 16
		var y_pd_16_mb = 6.5 * pd_16_mb; // Sondierungstiefe mesiobukkal 16

		// Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
		var y_gm_16_mp = gm_OK_p - 6.5 * gm_16_mp; // Margo Gingivae mesiopalatinal 16
		var y_pd_16_mp = 6.5 * pd_16_mp; // Sondierungstiefe mesiopalatinal 16

		// Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_mb = y_gm_16_mb - y_pd_16_mb; // Attachmentniveau mesiobukkal 16

		// Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_16_mp = y_gm_16_mp + y_pd_16_mp; // Attachmentniveau mesiopalatinal 16

		// Parodontaltasche inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_al_16_mb + "  "
			+ x_db_15 + ", " + y_al_15_db + "  "
			+ x_db_15 + ", " + y_gm_15_db + "  "
			+ x_mb_16 + ", " + y_gm_16_mb;
		document.getElementById("s_polygon_inter_16_15_b").setAttribute("points", string);
		// Attachmentniveau inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_al_16_mb + "  "
			+ x_db_15 + ", " + y_al_15_db;
		document.getElementById("s_polyline_al_inter_16_15_b").setAttribute("points", string);
		// Margo Gingivae inter_16_15 bukkal zeichnen
		var string =
			x_mb_16 + ", " + y_gm_16_mb + "  "
			+ x_db_15 + ", " + y_gm_15_db;
		document.getElementById("s_polyline_gm_inter_16_15_b").setAttribute("points", string);

		// Parodontaltasche inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_al_16_mp + "  "
			+ x_dp_15 + ", " + y_al_15_dp + "  "
			+ x_dp_15 + ", " + y_gm_15_dp + "  "
			+ x_mp_16 + ", " + y_gm_16_mp;
		document.getElementById("s_polygon_inter_16_15_p").setAttribute("points", string);
		// Attachmentniveau inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_al_16_mp + "  "
			+ x_dp_15 + ", " + y_al_15_dp;
		document.getElementById("s_polyline_al_inter_16_15_p").setAttribute("points", string);
		// Margo Gingivae inter_16_15 palatinal zeichnen
		var string =
			x_mp_16 + ", " + y_gm_16_mp + "  "
			+ x_dp_15 + ", " + y_gm_15_dp;
		document.getElementById("s_polyline_gm_inter_16_15_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_16_15_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_16_15_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_16_15_b').style.display = 'none';

		document.getElementById('s_polygon_inter_16_15_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_16_15_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_16_15_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_14) == 1) {
		document.getElementById('s_polygon_14_b').style.display = 'block';
		document.getElementById('s_polyline_al_14_b').style.display = 'block';
		document.getElementById('s_polyline_gm_14_b').style.display = 'block';

		document.getElementById('s_polygon_14_p').style.display = 'block';
		document.getElementById('s_polyline_al_14_p').style.display = 'block';
		document.getElementById('s_polyline_gm_14_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
		var x_db_14 = 504; // distal 14
		var x_mb_14 = 528; // mesial 14
		var x_b_14 = (x_db_14 + x_mb_14) / 2; // bukkal 14

		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
		var x_dp_14 = 504; // distal 14
		var x_mp_14 = 529; // mesial 14
		var x_p_14 = (x_dp_14 + x_mp_14) / 2; // palatinal 14

		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
		var y_gm_14_db = gm_OK_b + 6.5 * gm_14_db; // Margo Gingivae distobukkal 14
		var y_gm_14_b = gm_OK_b + 6.5 * gm_14_b; // Margo Gingivae bukkal 14
		var y_gm_14_mb = gm_OK_b + 6.5 * gm_14_mb; // Margo Gingivae mesiobukkal 14
		var y_pd_14_db = 6.5 * pd_14_db; // Sondierungstiefe distobukkal 14
		var y_pd_14_b = 6.5 * pd_14_b; // Sondierungstiefe bukkal 14
		var y_pd_14_mb = 6.5 * pd_14_mb; // Sondierungstiefe mesiobukkal 14

		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
		var y_gm_14_dp = gm_OK_p - 6.5 * gm_14_dp; // Margo Gingivae distopalatinal 14
		var y_gm_14_p = gm_OK_p - 6.5 * gm_14_p; // Margo Gingivae palatinal 14
		var y_gm_14_mp = gm_OK_p - 6.5 * gm_14_mp; // Margo Gingivae mesiopalatinal 14
		var y_pd_14_dp = 6.5 * pd_14_dp; // Sondierungstiefe distopalatinal 14
		var y_pd_14_p = 6.5 * pd_14_p; // Sondierungstiefe palatinal 14
		var y_pd_14_mp = 6.5 * pd_14_mp; // Sondierungstiefe mesiopalatinal 14

		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_db = y_gm_14_db - y_pd_14_db; // Attachmentniveau distobukkal 14
		var y_al_14_b = y_gm_14_b - y_pd_14_b; // Attachmentniveau bukkal 14
		var y_al_14_mb = y_gm_14_mb - y_pd_14_mb; // Attachmentniveau mesiobukkal 14

		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_dp = y_gm_14_dp + y_pd_14_dp; // Attachmentniveau distopalatinal 14
		var y_al_14_p = y_gm_14_p + y_pd_14_p; // Attachmentniveau palatinal 14
		var y_al_14_mp = y_gm_14_mp + y_pd_14_mp; // Attachmentniveau mesiopalatinal 14

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[14].storeCoordinates(
			x_db_14, x_mb_14, x_dp_14, x_mp_14, x_b_14, x_p_14,
			y_gm_14_db, y_gm_14_b, y_gm_14_mb, y_pd_14_db, y_pd_14_b, y_pd_14_mb,
			y_gm_14_dp, y_gm_14_p, y_gm_14_mp, y_pd_14_dp, y_pd_14_p, y_pd_14_mp,
			y_al_14_db, y_al_14_b, y_al_14_mb, y_al_14_dp, y_al_14_p, y_al_14_mp
		);
		
		// Parodontaltasche 14 bukkal zeichnen
		var string =
			x_db_14 + ", " + y_al_14_db + "  "
			+ x_b_14 + ", " + y_al_14_b + "  "
			+ x_mb_14 + ", " + y_al_14_mb + "  "
			+ x_mb_14 + ", " + y_gm_14_mb + "  "
			+ x_b_14 + ", " + y_gm_14_b + "  "
			+ x_db_14 + ", " + y_gm_14_db;
		document.getElementById("s_polygon_14_b").setAttribute("points", string);
		// Attachmentniveau 14 bukkal zeichnen
		var string =
			x_db_14 + ", " + y_al_14_db + "  "
			+ x_b_14 + ", " + y_al_14_b + "  "
			+ x_mb_14 + ", " + y_al_14_mb;
		document.getElementById("s_polyline_al_14_b").setAttribute("points", string);
		// Margo Gingivae 14 bukkal zeichnen
		var string =
			x_db_14 + ", " + y_gm_14_db + "  "
			+ x_b_14 + ", " + y_gm_14_b + "  "
			+ x_mb_14 + ", " + y_gm_14_mb;
		document.getElementById("s_polyline_gm_14_b").setAttribute("points", string);

		// Parodontaltasche 14 palatinal zeichnen
		var string =
			x_dp_14 + ", " + y_al_14_dp + "  "
			+ x_p_14 + ", " + y_al_14_p + "  "
			+ x_mp_14 + ", " + y_al_14_mp + "  "
			+ x_mp_14 + ", " + y_gm_14_mp + "  "
			+ x_p_14 + ", " + y_gm_14_p + "  "
			+ x_dp_14 + ", " + y_gm_14_dp;
		document.getElementById("s_polygon_14_p").setAttribute("points", string);
		// Attachmentniveau 14 palatinal zeichnen
		var string =
			x_dp_14 + ", " + y_al_14_dp + "  "
			+ x_p_14 + ", " + y_al_14_p + "  "
			+ x_mp_14 + ", " + y_al_14_mp;
		document.getElementById("s_polyline_al_14_p").setAttribute("points", string);
		// Margo Gingivae 14 palatinal zeichnen
		var string =
			x_dp_14 + ", " + y_gm_14_dp + "  "
			+ x_p_14 + ", " + y_gm_14_p + "  "
			+ x_mp_14 + ", " + y_gm_14_mp;
		document.getElementById("s_polyline_gm_14_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_14_b').style.display = 'none';
		document.getElementById('s_polyline_al_14_b').style.display = 'none';
		document.getElementById('s_polyline_gm_14_b').style.display = 'none';

		document.getElementById('s_polygon_14_p').style.display = 'none';
		document.getElementById('s_polyline_al_14_p').style.display = 'none';
		document.getElementById('s_polyline_gm_14_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_14) == 1 && Number(jsonObj2.tooth_13) == 1) {
		document.getElementById('s_polygon_inter_14_13_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_14_13_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_14_13_b').style.display = 'block';

		document.getElementById('s_polygon_inter_14_13_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_14_13_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_14_13_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
		var x_db_13 = 544; // distal 13

		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
		var x_dp_13 = 546; // distal 13

		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
		var y_gm_13_db = gm_OK_b + 6.5 * gm_13_db; // Margo Gingivae distobukkal 13
		var y_pd_13_db = 6.5 * pd_13_db; // Sondierungstiefe distobukkal 13

		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
		var y_gm_13_dp = gm_OK_p - 6.5 * gm_13_dp; // Margo Gingivae distopalatinal 13
		var y_pd_13_dp = 6.5 * pd_13_dp; // Sondierungstiefe distopalatinal 13

		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_db = y_gm_13_db - y_pd_13_db; // Attachmentniveau distobukkal 13

		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_dp = y_gm_13_dp + y_pd_13_dp; // Attachmentniveau distopalatinal 13

		// Parodontaltasche inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_al_14_mb + "  "
			+ x_db_13 + ", " + y_al_13_db + "  "
			+ x_db_13 + ", " + y_gm_13_db + "  "
			+ x_mb_14 + ", " + y_gm_14_mb;
		document.getElementById("s_polygon_inter_14_13_b").setAttribute("points", string);
		// Attachmentniveau inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_al_14_mb + "  "
			+ x_db_13 + ", " + y_al_13_db;
		document.getElementById("s_polyline_al_inter_14_13_b").setAttribute("points", string);
		// Margo Gingivae inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_gm_14_mb + "  "
			+ x_db_13 + ", " + y_gm_13_db;
		document.getElementById("s_polyline_gm_inter_14_13_b").setAttribute("points", string);

		// Parodontaltasche inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_al_14_mp + "  "
			+ x_dp_13 + ", " + y_al_13_dp + "  "
			+ x_dp_13 + ", " + y_gm_13_dp + "  "
			+ x_mp_14 + ", " + y_gm_14_mp;
		document.getElementById("s_polygon_inter_14_13_p").setAttribute("points", string);
		// Attachmentniveau inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_al_14_mp + "  "
			+ x_dp_13 + ", " + y_al_13_dp;
		document.getElementById("s_polyline_al_inter_14_13_p").setAttribute("points", string);
		// Margo Gingivae inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_gm_14_mp + "  "
			+ x_dp_13 + ", " + y_gm_13_dp;
		document.getElementById("s_polyline_gm_inter_14_13_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_14_13_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_14_13_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_14_13_b').style.display = 'none';

		document.getElementById('s_polygon_inter_14_13_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_14_13_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_14_13_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_15) == 1 && Number(jsonObj2.tooth_14) == 1) {
		document.getElementById('s_polygon_inter_15_14_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_15_14_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_15_14_b').style.display = 'block';

		document.getElementById('s_polygon_inter_15_14_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_15_14_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_15_14_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
		var x_mb_15 = 489; // mesial 15

		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
		var x_mp_15 = 487; // mesial 15

		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
		var y_gm_15_mb = gm_OK_b + 6.5 * gm_15_mb; // Margo Gingivae mesiobukkal 15
		var y_pd_15_mb = 6.5 * pd_15_mb; // Sondierungstiefe mesiobukkal 15

		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
		var y_gm_15_mp = gm_OK_p - 6.5 * gm_15_mp; // Margo Gingivae mesiopalatinal 15
		var y_pd_15_mp = 6.5 * pd_15_mp; // Sondierungstiefe mesiopalatinal 15

		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_mb = y_gm_15_mb - y_pd_15_mb; // Attachmentniveau mesiobukkal 15

		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_15_mp = y_gm_15_mp + y_pd_15_mp; // Attachmentniveau mesiopalatinal 15

		// Parodontaltasche inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_al_15_mb + "  "
			+ x_db_14 + ", " + y_al_14_db + "  "
			+ x_db_14 + ", " + y_gm_14_db + "  "
			+ x_mb_15 + ", " + y_gm_15_mb;
		document.getElementById("s_polygon_inter_15_14_b").setAttribute("points", string);
		// Attachmentniveau inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_al_15_mb + "  "
			+ x_db_14 + ", " + y_al_14_db;
		document.getElementById("s_polyline_al_inter_15_14_b").setAttribute("points", string);
		// Margo Gingivae inter_15_14 bukkal zeichnen
		var string =
			x_mb_15 + ", " + y_gm_15_mb + "  "
			+ x_db_14 + ", " + y_gm_14_db;
		document.getElementById("s_polyline_gm_inter_15_14_b").setAttribute("points", string);

		// Parodontaltasche inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_al_15_mp + "  "
			+ x_dp_14 + ", " + y_al_14_dp + "  "
			+ x_dp_14 + ", " + y_gm_14_dp + "  "
			+ x_mp_15 + ", " + y_gm_15_mp;
		document.getElementById("s_polygon_inter_15_14_p").setAttribute("points", string);
		// Attachmentniveau inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_al_15_mp + "  "
			+ x_dp_14 + ", " + y_al_14_dp;
		document.getElementById("s_polyline_al_inter_15_14_p").setAttribute("points", string);
		// Margo Gingivae inter_15_14 palatinal zeichnen
		var string =
			x_mp_15 + ", " + y_gm_15_mp + "  "
			+ x_dp_14 + ", " + y_gm_14_dp;
		document.getElementById("s_polyline_gm_inter_15_14_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_15_14_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_15_14_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_15_14_b').style.display = 'none';

		document.getElementById('s_polygon_inter_15_14_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_15_14_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_15_14_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_13) == 1) {
		document.getElementById('s_polygon_13_b').style.display = 'block';
		document.getElementById('s_polyline_al_13_b').style.display = 'block';
		document.getElementById('s_polyline_gm_13_b').style.display = 'block';

		document.getElementById('s_polygon_13_p').style.display = 'block';
		document.getElementById('s_polyline_al_13_p').style.display = 'block';
		document.getElementById('s_polyline_gm_13_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
		var x_db_13 = 544; // distal 13
		var x_mb_13 = 570; // mesial 13
		var x_b_13 = (x_db_13 + x_mb_13) / 2; // bukkal 13

		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
		var x_dp_13 = 546; // distal 13
		var x_mp_13 = 573; // mesial 13
		var x_p_13 = (x_dp_13 + x_mp_13) / 2; // palatinal 13

		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
		var y_gm_13_db = gm_OK_b + 6.5 * gm_13_db; // Margo Gingivae distobukkal 13
		var y_gm_13_b = gm_OK_b + 6.5 * gm_13_b; // Margo Gingivae bukkal 13
		var y_gm_13_mb = gm_OK_b + 6.5 * gm_13_mb; // Margo Gingivae mesiobukkal 13
		var y_pd_13_db = 6.5 * pd_13_db; // Sondierungstiefe distobukkal 13
		var y_pd_13_b = 6.5 * pd_13_b; // Sondierungstiefe bukkal 13
		var y_pd_13_mb = 6.5 * pd_13_mb; // Sondierungstiefe mesiobukkal 13

		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
		var y_gm_13_dp = gm_OK_p - 6.5 * gm_13_dp; // Margo Gingivae distopalatinal 13
		var y_gm_13_p = gm_OK_p - 6.5 * gm_13_p; // Margo Gingivae palatinal 13
		var y_gm_13_mp = gm_OK_p - 6.5 * gm_13_mp; // Margo Gingivae mesiopalatinal 13
		var y_pd_13_dp = 6.5 * pd_13_dp; // Sondierungstiefe distopalatinal 13
		var y_pd_13_p = 6.5 * pd_13_p; // Sondierungstiefe palatinal 13
		var y_pd_13_mp = 6.5 * pd_13_mp; // Sondierungstiefe mesiopalatinal 13

		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_db = y_gm_13_db - y_pd_13_db; // Attachmentniveau distobukkal 13
		var y_al_13_b = y_gm_13_b - y_pd_13_b; // Attachmentniveau bukkal 13
		var y_al_13_mb = y_gm_13_mb - y_pd_13_mb; // Attachmentniveau mesiobukkal 13

		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_dp = y_gm_13_dp + y_pd_13_dp; // Attachmentniveau distopalatinal 13
		var y_al_13_p = y_gm_13_p + y_pd_13_p; // Attachmentniveau palatinal 13
		var y_al_13_mp = y_gm_13_mp + y_pd_13_mp; // Attachmentniveau mesiopalatinal 13

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[13].storeCoordinates(
			x_db_13, x_mb_13, x_dp_13, x_mp_13, x_b_13, x_p_13,
			y_gm_13_db, y_gm_13_b, y_gm_13_mb, y_pd_13_db, y_pd_13_b, y_pd_13_mb,
			y_gm_13_dp, y_gm_13_p, y_gm_13_mp, y_pd_13_dp, y_pd_13_p, y_pd_13_mp,
			y_al_13_db, y_al_13_b, y_al_13_mb, y_al_13_dp, y_al_13_p, y_al_13_mp
		);
		
		// Parodontaltasche 13 bukkal zeichnen
		var string =
			x_db_13 + ", " + y_al_13_db + "  "
			+ x_b_13 + ", " + y_al_13_b + "  "
			+ x_mb_13 + ", " + y_al_13_mb + "  "
			+ x_mb_13 + ", " + y_gm_13_mb + "  "
			+ x_b_13 + ", " + y_gm_13_b + "  "
			+ x_db_13 + ", " + y_gm_13_db;
		document.getElementById("s_polygon_13_b").setAttribute("points", string);
		// Attachmentniveau 13 bukkal zeichnen
		var string =
			x_db_13 + ", " + y_al_13_db + "  "
			+ x_b_13 + ", " + y_al_13_b + "  "
			+ x_mb_13 + ", " + y_al_13_mb;
		document.getElementById("s_polyline_al_13_b").setAttribute("points", string);
		// Margo Gingivae 13 bukkal zeichnen
		var string =
			x_db_13 + ", " + y_gm_13_db + "  "
			+ x_b_13 + ", " + y_gm_13_b + "  "
			+ x_mb_13 + ", " + y_gm_13_mb;
		document.getElementById("s_polyline_gm_13_b").setAttribute("points", string);

		// Parodontaltasche 13 palatinal zeichnen
		var string =
			x_dp_13 + ", " + y_al_13_dp + "  "
			+ x_p_13 + ", " + y_al_13_p + "  "
			+ x_mp_13 + ", " + y_al_13_mp + "  "
			+ x_mp_13 + ", " + y_gm_13_mp + "  "
			+ x_p_13 + ", " + y_gm_13_p + "  "
			+ x_dp_13 + ", " + y_gm_13_dp;
		document.getElementById("s_polygon_13_p").setAttribute("points", string);
		// Attachmentniveau 13 palatinal zeichnen
		var string =
			x_dp_13 + ", " + y_al_13_dp + "  "
			+ x_p_13 + ", " + y_al_13_p + "  "
			+ x_mp_13 + ", " + y_al_13_mp;
		document.getElementById("s_polyline_al_13_p").setAttribute("points", string);
		// Margo Gingivae 13 palatinal zeichnen
		var string =
			x_dp_13 + ", " + y_gm_13_dp + "  "
			+ x_p_13 + ", " + y_gm_13_p + "  "
			+ x_mp_13 + ", " + y_gm_13_mp;
		document.getElementById("s_polyline_gm_13_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_13_b').style.display = 'none';
		document.getElementById('s_polyline_al_13_b').style.display = 'none';
		document.getElementById('s_polyline_gm_13_b').style.display = 'none';

		document.getElementById('s_polygon_13_p').style.display = 'none';
		document.getElementById('s_polyline_al_13_p').style.display = 'none';
		document.getElementById('s_polyline_gm_13_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_13) == 1 && Number(jsonObj2.tooth_12) == 1) {
		document.getElementById('s_polygon_inter_13_12_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_13_12_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_13_12_b').style.display = 'block';

		document.getElementById('s_polygon_inter_13_12_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_13_12_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_13_12_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
		var x_db_12 = 588; // distal 12

		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
		var x_dp_12 = 586; // distal 12

		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
		var y_gm_12_db = gm_OK_b + 6.5 * gm_12_db; // Margo Gingivae distobukkal 12
		var y_pd_12_db = 6.5 * pd_12_db; // Sondierungstiefe distobukkal 12

		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
		var y_gm_12_dp = gm_OK_p - 6.5 * gm_12_dp; // Margo Gingivae distopalatinal 12
		var y_pd_12_dp = 6.5 * pd_12_dp; // Sondierungstiefe distopalatinal 12

		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_db = y_gm_12_db - y_pd_12_db; // Attachmentniveau distobukkal 12

		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_dp = y_gm_12_dp + y_pd_12_dp; // Attachmentniveau distopalatinal 12

		// Parodontaltasche inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_al_13_mb + "  "
			+ x_db_12 + ", " + y_al_12_db + "  "
			+ x_db_12 + ", " + y_gm_12_db + "  "
			+ x_mb_13 + ", " + y_gm_13_mb;
		document.getElementById("s_polygon_inter_13_12_b").setAttribute("points", string);
		// Attachmentniveau inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_al_13_mb + "  "
			+ x_db_12 + ", " + y_al_12_db;
		document.getElementById("s_polyline_al_inter_13_12_b").setAttribute("points", string);
		// Margo Gingivae inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_gm_13_mb + "  "
			+ x_db_12 + ", " + y_gm_12_db;
		document.getElementById("s_polyline_gm_inter_13_12_b").setAttribute("points", string);

		// Parodontaltasche inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_al_13_mp + "  "
			+ x_dp_12 + ", " + y_al_12_dp + "  "
			+ x_dp_12 + ", " + y_gm_12_dp + "  "
			+ x_mp_13 + ", " + y_gm_13_mp;
		document.getElementById("s_polygon_inter_13_12_p").setAttribute("points", string);
		// Attachmentniveau inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_al_13_mp + "  "
			+ x_dp_12 + ", " + y_al_12_dp;
		document.getElementById("s_polyline_al_inter_13_12_p").setAttribute("points", string);
		// Margo Gingivae inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_gm_13_mp + "  "
			+ x_dp_12 + ", " + y_gm_12_dp;
		document.getElementById("s_polyline_gm_inter_13_12_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_13_12_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_13_12_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_13_12_b').style.display = 'none';

		document.getElementById('s_polygon_inter_13_12_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_13_12_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_13_12_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_14) == 1 && Number(jsonObj2.tooth_13) == 1) {
		document.getElementById('s_polygon_inter_14_13_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_14_13_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_14_13_b').style.display = 'block';

		document.getElementById('s_polygon_inter_14_13_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_14_13_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_14_13_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
		var x_mb_14 = 528; // mesial 14

		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
		var x_mp_14 = 529; // mesial 14

		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
		var y_gm_14_mb = gm_OK_b + 6.5 * gm_14_mb; // Margo Gingivae mesiobukkal 14
		var y_pd_14_mb = 6.5 * pd_14_mb; // Sondierungstiefe mesiobukkal 14

		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
		var y_gm_14_mp = gm_OK_p - 6.5 * gm_14_mp; // Margo Gingivae mesiopalatinal 14
		var y_pd_14_mp = 6.5 * pd_14_mp; // Sondierungstiefe mesiopalatinal 14

		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_mb = y_gm_14_mb - y_pd_14_mb; // Attachmentniveau mesiobukkal 14

		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_14_mp = y_gm_14_mp + y_pd_14_mp; // Attachmentniveau mesiopalatinal 14

		// Parodontaltasche inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_al_14_mb + "  "
			+ x_db_13 + ", " + y_al_13_db + "  "
			+ x_db_13 + ", " + y_gm_13_db + "  "
			+ x_mb_14 + ", " + y_gm_14_mb;
		document.getElementById("s_polygon_inter_14_13_b").setAttribute("points", string);
		// Attachmentniveau inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_al_14_mb + "  "
			+ x_db_13 + ", " + y_al_13_db;
		document.getElementById("s_polyline_al_inter_14_13_b").setAttribute("points", string);
		// Margo Gingivae inter_14_13 bukkal zeichnen
		var string =
			x_mb_14 + ", " + y_gm_14_mb + "  "
			+ x_db_13 + ", " + y_gm_13_db;
		document.getElementById("s_polyline_gm_inter_14_13_b").setAttribute("points", string);

		// Parodontaltasche inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_al_14_mp + "  "
			+ x_dp_13 + ", " + y_al_13_dp + "  "
			+ x_dp_13 + ", " + y_gm_13_dp + "  "
			+ x_mp_14 + ", " + y_gm_14_mp;
		document.getElementById("s_polygon_inter_14_13_p").setAttribute("points", string);
		// Attachmentniveau inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_al_14_mp + "  "
			+ x_dp_13 + ", " + y_al_13_dp;
		document.getElementById("s_polyline_al_inter_14_13_p").setAttribute("points", string);
		// Margo Gingivae inter_14_13 palatinal zeichnen
		var string =
			x_mp_14 + ", " + y_gm_14_mp + "  "
			+ x_dp_13 + ", " + y_gm_13_dp;
		document.getElementById("s_polyline_gm_inter_14_13_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_14_13_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_14_13_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_14_13_b').style.display = 'none';

		document.getElementById('s_polygon_inter_14_13_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_14_13_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_14_13_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_12) == 1) {
		document.getElementById('s_polygon_12_b').style.display = 'block';
		document.getElementById('s_polyline_al_12_b').style.display = 'block';
		document.getElementById('s_polyline_gm_12_b').style.display = 'block';

		document.getElementById('s_polygon_12_p').style.display = 'block';
		document.getElementById('s_polyline_al_12_p').style.display = 'block';
		document.getElementById('s_polyline_gm_12_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
		var x_db_12 = 588; // distal 12
		var x_mb_12 = 612; // mesial 12
		var x_b_12 = (x_db_12 + x_mb_12) / 2; // bukkal 12

		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
		var x_dp_12 = 586; // distal 12
		var x_mp_12 = 612; // mesial 12
		var x_p_12 = (x_dp_12 + x_mp_12) / 2; // palatinal 12

		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
		var y_gm_12_db = gm_OK_b + 6.5 * gm_12_db; // Margo Gingivae distobukkal 12
		var y_gm_12_b = gm_OK_b + 6.5 * gm_12_b; // Margo Gingivae bukkal 12
		var y_gm_12_mb = gm_OK_b + 6.5 * gm_12_mb; // Margo Gingivae mesiobukkal 12
		var y_pd_12_db = 6.5 * pd_12_db; // Sondierungstiefe distobukkal 12
		var y_pd_12_b = 6.5 * pd_12_b; // Sondierungstiefe bukkal 12
		var y_pd_12_mb = 6.5 * pd_12_mb; // Sondierungstiefe mesiobukkal 12

		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
		var y_gm_12_dp = gm_OK_p - 6.5 * gm_12_dp; // Margo Gingivae distopalatinal 12
		var y_gm_12_p = gm_OK_p - 6.5 * gm_12_p; // Margo Gingivae palatinal 12
		var y_gm_12_mp = gm_OK_p - 6.5 * gm_12_mp; // Margo Gingivae mesiopalatinal 12
		var y_pd_12_dp = 6.5 * pd_12_dp; // Sondierungstiefe distopalatinal 12
		var y_pd_12_p = 6.5 * pd_12_p; // Sondierungstiefe palatinal 12
		var y_pd_12_mp = 6.5 * pd_12_mp; // Sondierungstiefe mesiopalatinal 12

		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_db = y_gm_12_db - y_pd_12_db; // Attachmentniveau distobukkal 12
		var y_al_12_b = y_gm_12_b - y_pd_12_b; // Attachmentniveau bukkal 12
		var y_al_12_mb = y_gm_12_mb - y_pd_12_mb; // Attachmentniveau mesiobukkal 12

		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_dp = y_gm_12_dp + y_pd_12_dp; // Attachmentniveau distopalatinal 12
		var y_al_12_p = y_gm_12_p + y_pd_12_p; // Attachmentniveau palatinal 12
		var y_al_12_mp = y_gm_12_mp + y_pd_12_mp; // Attachmentniveau mesiopalatinal 12

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[12].storeCoordinates(
			x_db_12, x_mb_12, x_dp_12, x_mp_12, x_b_12, x_p_12,
			y_gm_12_db, y_gm_12_b, y_gm_12_mb, y_pd_12_db, y_pd_12_b, y_pd_12_mb,
			y_gm_12_dp, y_gm_12_p, y_gm_12_mp, y_pd_12_dp, y_pd_12_p, y_pd_12_mp,
			y_al_12_db, y_al_12_b, y_al_12_mb, y_al_12_dp, y_al_12_p, y_al_12_mp
		);
		
		// Parodontaltasche 12 bukkal zeichnen
		var string =
			x_db_12 + ", " + y_al_12_db + "  "
			+ x_b_12 + ", " + y_al_12_b + "  "
			+ x_mb_12 + ", " + y_al_12_mb + "  "
			+ x_mb_12 + ", " + y_gm_12_mb + "  "
			+ x_b_12 + ", " + y_gm_12_b + "  "
			+ x_db_12 + ", " + y_gm_12_db;
		document.getElementById("s_polygon_12_b").setAttribute("points", string);
		// Attachmentniveau 12 bukkal zeichnen
		var string =
			x_db_12 + ", " + y_al_12_db + "  "
			+ x_b_12 + ", " + y_al_12_b + "  "
			+ x_mb_12 + ", " + y_al_12_mb;
		document.getElementById("s_polyline_al_12_b").setAttribute("points", string);
		// Margo Gingivae 12 bukkal zeichnen
		var string =
			x_db_12 + ", " + y_gm_12_db + "  "
			+ x_b_12 + ", " + y_gm_12_b + "  "
			+ x_mb_12 + ", " + y_gm_12_mb;
		document.getElementById("s_polyline_gm_12_b").setAttribute("points", string);

		// Parodontaltasche 12 palatinal zeichnen
		var string =
			x_dp_12 + ", " + y_al_12_dp + "  "
			+ x_p_12 + ", " + y_al_12_p + "  "
			+ x_mp_12 + ", " + y_al_12_mp + "  "
			+ x_mp_12 + ", " + y_gm_12_mp + "  "
			+ x_p_12 + ", " + y_gm_12_p + "  "
			+ x_dp_12 + ", " + y_gm_12_dp;
		document.getElementById("s_polygon_12_p").setAttribute("points", string);
		// Attachmentniveau 12 palatinal zeichnen
		var string =
			x_dp_12 + ", " + y_al_12_dp + "  "
			+ x_p_12 + ", " + y_al_12_p + "  "
			+ x_mp_12 + ", " + y_al_12_mp;
		document.getElementById("s_polyline_al_12_p").setAttribute("points", string);
		// Margo Gingivae 12 palatinal zeichnen
		var string =
			x_dp_12 + ", " + y_gm_12_dp + "  "
			+ x_p_12 + ", " + y_gm_12_p + "  "
			+ x_mp_12 + ", " + y_gm_12_mp;
		document.getElementById("s_polyline_gm_12_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_12_b').style.display = 'none';
		document.getElementById('s_polyline_al_12_b').style.display = 'none';
		document.getElementById('s_polyline_gm_12_b').style.display = 'none';

		document.getElementById('s_polygon_12_p').style.display = 'none';
		document.getElementById('s_polyline_al_12_p').style.display = 'none';
		document.getElementById('s_polyline_gm_12_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_12) == 1 && Number(jsonObj2.tooth_11) == 1) {
		document.getElementById('s_polygon_inter_12_11_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_12_11_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_12_11_b').style.display = 'block';

		document.getElementById('s_polygon_inter_12_11_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_12_11_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_12_11_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
		var x_db_11 = 628; // distal 11

		// Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
		var x_dp_11 = 627; // distal 11

		// Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
		var y_gm_11_db = gm_OK_b + 6.5 * gm_11_db; // Margo Gingivae distobukkal 11
		var y_pd_11_db = 6.5 * pd_11_db; // Sondierungstiefe distobukkal 11

		// Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
		var y_gm_11_dp = gm_OK_p - 6.5 * gm_11_dp; // Margo Gingivae distopalatinal 11
		var y_pd_11_dp = 6.5 * pd_11_dp; // Sondierungstiefe distopalatinal 11

		// Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_11_db = y_gm_11_db - y_pd_11_db; // Attachmentniveau distobukkal 11

		// Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_11_dp = y_gm_11_dp + y_pd_11_dp; // Attachmentniveau distopalatinal 11

		// Parodontaltasche inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_al_12_mb + "  "
			+ x_db_11 + ", " + y_al_11_db + "  "
			+ x_db_11 + ", " + y_gm_11_db + "  "
			+ x_mb_12 + ", " + y_gm_12_mb;
		document.getElementById("s_polygon_inter_12_11_b").setAttribute("points", string);
		// Attachmentniveau inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_al_12_mb + "  "
			+ x_db_11 + ", " + y_al_11_db;
		document.getElementById("s_polyline_al_inter_12_11_b").setAttribute("points", string);
		// Margo Gingivae inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_gm_12_mb + "  "
			+ x_db_11 + ", " + y_gm_11_db;
		document.getElementById("s_polyline_gm_inter_12_11_b").setAttribute("points", string);

		// Parodontaltasche inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_al_12_mp + "  "
			+ x_dp_11 + ", " + y_al_11_dp + "  "
			+ x_dp_11 + ", " + y_gm_11_dp + "  "
			+ x_mp_12 + ", " + y_gm_12_mp;
		document.getElementById("s_polygon_inter_12_11_p").setAttribute("points", string);
		// Attachmentniveau inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_al_12_mp + "  "
			+ x_dp_11 + ", " + y_al_11_dp;
		document.getElementById("s_polyline_al_inter_12_11_p").setAttribute("points", string);
		// Margo Gingivae inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_gm_12_mp + "  "
			+ x_dp_11 + ", " + y_gm_11_dp;
		document.getElementById("s_polyline_gm_inter_12_11_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_12_11_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_12_11_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_12_11_b').style.display = 'none';

		document.getElementById('s_polygon_inter_12_11_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_12_11_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_12_11_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_13) == 1 && Number(jsonObj2.tooth_12) == 1) {
		document.getElementById('s_polygon_inter_13_12_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_13_12_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_13_12_b').style.display = 'block';

		document.getElementById('s_polygon_inter_13_12_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_13_12_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_13_12_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
		var x_mb_13 = 570; // mesial 13

		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
		var x_mp_13 = 573; // mesial 13

		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
		var y_gm_13_mb = gm_OK_b + 6.5 * gm_13_mb; // Margo Gingivae mesiobukkal 13
		var y_pd_13_mb = 6.5 * pd_13_mb; // Sondierungstiefe mesiobukkal 13

		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
		var y_gm_13_mp = gm_OK_p - 6.5 * gm_13_mp; // Margo Gingivae mesiopalatinal 13
		var y_pd_13_mp = 6.5 * pd_13_mp; // Sondierungstiefe mesiopalatinal 13

		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_mb = y_gm_13_mb - y_pd_13_mb; // Attachmentniveau mesiobukkal 13

		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_13_mp = y_gm_13_mp + y_pd_13_mp; // Attachmentniveau mesiopalatinal 13

		// Parodontaltasche inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_al_13_mb + "  "
			+ x_db_12 + ", " + y_al_12_db + "  "
			+ x_db_12 + ", " + y_gm_12_db + "  "
			+ x_mb_13 + ", " + y_gm_13_mb;
		document.getElementById("s_polygon_inter_13_12_b").setAttribute("points", string);
		// Attachmentniveau inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_al_13_mb + "  "
			+ x_db_12 + ", " + y_al_12_db;
		document.getElementById("s_polyline_al_inter_13_12_b").setAttribute("points", string);
		// Margo Gingivae inter_13_12 bukkal zeichnen
		var string =
			x_mb_13 + ", " + y_gm_13_mb + "  "
			+ x_db_12 + ", " + y_gm_12_db;
		document.getElementById("s_polyline_gm_inter_13_12_b").setAttribute("points", string);

		// Parodontaltasche inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_al_13_mp + "  "
			+ x_dp_12 + ", " + y_al_12_dp + "  "
			+ x_dp_12 + ", " + y_gm_12_dp + "  "
			+ x_mp_13 + ", " + y_gm_13_mp;
		document.getElementById("s_polygon_inter_13_12_p").setAttribute("points", string);
		// Attachmentniveau inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_al_13_mp + "  "
			+ x_dp_12 + ", " + y_al_12_dp;
		document.getElementById("s_polyline_al_inter_13_12_p").setAttribute("points", string);
		// Margo Gingivae inter_13_12 palatinal zeichnen
		var string =
			x_mp_13 + ", " + y_gm_13_mp + "  "
			+ x_dp_12 + ", " + y_gm_12_dp;
		document.getElementById("s_polyline_gm_inter_13_12_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_13_12_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_13_12_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_13_12_b').style.display = 'none';

		document.getElementById('s_polygon_inter_13_12_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_13_12_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_13_12_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_11) == 1) {
		document.getElementById('s_polygon_11_b').style.display = 'block';
		document.getElementById('s_polyline_al_11_b').style.display = 'block';
		document.getElementById('s_polyline_gm_11_b').style.display = 'block';

		document.getElementById('s_polygon_11_p').style.display = 'block';
		document.getElementById('s_polyline_al_11_p').style.display = 'block';
		document.getElementById('s_polyline_gm_11_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
		var x_db_11 = 628; // distal 11
		var x_mb_11 = 660; // mesial 11
		var x_b_11 = (x_db_11 + x_mb_11) / 2; // bukkal 11

		// Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
		var x_dp_11 = 627; // distal 11
		var x_mp_11 = 658; // mesial 11
		var x_p_11 = (x_dp_11 + x_mp_11) / 2; // palatinal 11

		// Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
		var y_gm_11_db = gm_OK_b + 6.5 * gm_11_db; // Margo Gingivae distobukkal 11
		var y_gm_11_b = gm_OK_b + 6.5 * gm_11_b; // Margo Gingivae bukkal 11
		var y_gm_11_mb = gm_OK_b + 6.5 * gm_11_mb; // Margo Gingivae mesiobukkal 11
		var y_pd_11_db = 6.5 * pd_11_db; // Sondierungstiefe distobukkal 11
		var y_pd_11_b = 6.5 * pd_11_b; // Sondierungstiefe bukkal 11
		var y_pd_11_mb = 6.5 * pd_11_mb; // Sondierungstiefe mesiobukkal 11

		// Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
		var y_gm_11_dp = gm_OK_p - 6.5 * gm_11_dp; // Margo Gingivae distopalatinal 11
		var y_gm_11_p = gm_OK_p - 6.5 * gm_11_p; // Margo Gingivae palatinal 11
		var y_gm_11_mp = gm_OK_p - 6.5 * gm_11_mp; // Margo Gingivae mesiopalatinal 11
		var y_pd_11_dp = 6.5 * pd_11_dp; // Sondierungstiefe distopalatinal 11
		var y_pd_11_p = 6.5 * pd_11_p; // Sondierungstiefe palatinal 11
		var y_pd_11_mp = 6.5 * pd_11_mp; // Sondierungstiefe mesiopalatinal 11

		// Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_11_db = y_gm_11_db - y_pd_11_db; // Attachmentniveau distobukkal 11
		var y_al_11_b = y_gm_11_b - y_pd_11_b; // Attachmentniveau bukkal 11
		var y_al_11_mb = y_gm_11_mb - y_pd_11_mb; // Attachmentniveau mesiobukkal 11

		// Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_11_dp = y_gm_11_dp + y_pd_11_dp; // Attachmentniveau distopalatinal 11
		var y_al_11_p = y_gm_11_p + y_pd_11_p; // Attachmentniveau palatinal 11
		var y_al_11_mp = y_gm_11_mp + y_pd_11_mp; // Attachmentniveau mesiopalatinal 11

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[11].storeCoordinates(
			x_db_11, x_mb_11, x_dp_11, x_mp_11, x_b_11, x_p_11,
			y_gm_11_db, y_gm_11_b, y_gm_11_mb, y_pd_11_db, y_pd_11_b, y_pd_11_mb,
			y_gm_11_dp, y_gm_11_p, y_gm_11_mp, y_pd_11_dp, y_pd_11_p, y_pd_11_mp,
			y_al_11_db, y_al_11_b, y_al_11_mb, y_al_11_dp, y_al_11_p, y_al_11_mp
		);
		
		// Parodontaltasche 11 bukkal zeichnen
		var string =
			x_db_11 + ", " + y_al_11_db + "  "
			+ x_b_11 + ", " + y_al_11_b + "  "
			+ x_mb_11 + ", " + y_al_11_mb + "  "
			+ x_mb_11 + ", " + y_gm_11_mb + "  "
			+ x_b_11 + ", " + y_gm_11_b + "  "
			+ x_db_11 + ", " + y_gm_11_db;
		document.getElementById("s_polygon_11_b").setAttribute("points", string);
		// Attachmentniveau 11 bukkal zeichnen
		var string =
			x_db_11 + ", " + y_al_11_db + "  "
			+ x_b_11 + ", " + y_al_11_b + "  "
			+ x_mb_11 + ", " + y_al_11_mb;
		document.getElementById("s_polyline_al_11_b").setAttribute("points", string);
		// Margo Gingivae 11 bukkal zeichnen
		var string =
			x_db_11 + ", " + y_gm_11_db + "  "
			+ x_b_11 + ", " + y_gm_11_b + "  "
			+ x_mb_11 + ", " + y_gm_11_mb;
		document.getElementById("s_polyline_gm_11_b").setAttribute("points", string);

		// Parodontaltasche 11 palatinal zeichnen
		var string =
			x_dp_11 + ", " + y_al_11_dp + "  "
			+ x_p_11 + ", " + y_al_11_p + "  "
			+ x_mp_11 + ", " + y_al_11_mp + "  "
			+ x_mp_11 + ", " + y_gm_11_mp + "  "
			+ x_p_11 + ", " + y_gm_11_p + "  "
			+ x_dp_11 + ", " + y_gm_11_dp;
		document.getElementById("s_polygon_11_p").setAttribute("points", string);
		// Attachmentniveau 11 palatinal zeichnen
		var string =
			x_dp_11 + ", " + y_al_11_dp + "  "
			+ x_p_11 + ", " + y_al_11_p + "  "
			+ x_mp_11 + ", " + y_al_11_mp;
		document.getElementById("s_polyline_al_11_p").setAttribute("points", string);
		// Margo Gingivae 11 palatinal zeichnen
		var string =
			x_dp_11 + ", " + y_gm_11_dp + "  "
			+ x_p_11 + ", " + y_gm_11_p + "  "
			+ x_mp_11 + ", " + y_gm_11_mp;
		document.getElementById("s_polyline_gm_11_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_11_b').style.display = 'none';
		document.getElementById('s_polyline_al_11_b').style.display = 'none';
		document.getElementById('s_polyline_gm_11_b').style.display = 'none';

		document.getElementById('s_polygon_11_p').style.display = 'none';
		document.getElementById('s_polyline_al_11_p').style.display = 'none';
		document.getElementById('s_polyline_gm_11_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_12) == 1 && Number(jsonObj2.tooth_11) == 1) {
		document.getElementById('s_polygon_inter_12_11_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_12_11_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_12_11_b').style.display = 'block';

		document.getElementById('s_polygon_inter_12_11_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_12_11_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_12_11_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
		var x_mb_12 = 612; // mesial 12

		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
		var x_mp_12 = 612; // mesial 12

		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
		var y_gm_12_mb = gm_OK_b + 6.5 * gm_12_mb; // Margo Gingivae mesiobukkal 12
		var y_pd_12_mb = 6.5 * pd_12_mb; // Sondierungstiefe mesiobukkal 12

		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
		var y_gm_12_mp = gm_OK_p - 6.5 * gm_12_mp; // Margo Gingivae mesiopalatinal 12
		var y_pd_12_mp = 6.5 * pd_12_mp; // Sondierungstiefe mesiopalatinal 12

		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_mb = y_gm_12_mb - y_pd_12_mb; // Attachmentniveau mesiobukkal 12

		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_12_mp = y_gm_12_mp + y_pd_12_mp; // Attachmentniveau mesiopalatinal 12

		// Parodontaltasche inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_al_12_mb + "  "
			+ x_db_11 + ", " + y_al_11_db + "  "
			+ x_db_11 + ", " + y_gm_11_db + "  "
			+ x_mb_12 + ", " + y_gm_12_mb;
		document.getElementById("s_polygon_inter_12_11_b").setAttribute("points", string);
		// Attachmentniveau inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_al_12_mb + "  "
			+ x_db_11 + ", " + y_al_11_db;
		document.getElementById("s_polyline_al_inter_12_11_b").setAttribute("points", string);
		// Margo Gingivae inter_12_11 bukkal zeichnen
		var string =
			x_mb_12 + ", " + y_gm_12_mb + "  "
			+ x_db_11 + ", " + y_gm_11_db;
		document.getElementById("s_polyline_gm_inter_12_11_b").setAttribute("points", string);

		// Parodontaltasche inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_al_12_mp + "  "
			+ x_dp_11 + ", " + y_al_11_dp + "  "
			+ x_dp_11 + ", " + y_gm_11_dp + "  "
			+ x_mp_12 + ", " + y_gm_12_mp;
		document.getElementById("s_polygon_inter_12_11_p").setAttribute("points", string);
		// Attachmentniveau inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_al_12_mp + "  "
			+ x_dp_11 + ", " + y_al_11_dp;
		document.getElementById("s_polyline_al_inter_12_11_p").setAttribute("points", string);
		// Margo Gingivae inter_12_11 palatinal zeichnen
		var string =
			x_mp_12 + ", " + y_gm_12_mp + "  "
			+ x_dp_11 + ", " + y_gm_11_dp;
		document.getElementById("s_polyline_gm_inter_12_11_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_12_11_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_12_11_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_12_11_b').style.display = 'none';

		document.getElementById('s_polygon_inter_12_11_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_12_11_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_12_11_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_21) == 1) {
		document.getElementById('s_polygon_21_b').style.display = 'block';
		document.getElementById('s_polyline_al_21_b').style.display = 'block';
		document.getElementById('s_polyline_gm_21_b').style.display = 'block';

		document.getElementById('s_polygon_21_p').style.display = 'block';
		document.getElementById('s_polyline_al_21_p').style.display = 'block';
		document.getElementById('s_polyline_gm_21_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 21 (bukkal) in der Bitmap
		var x_db_21 = 729; // distal 21
		var x_mb_21 = 698; // mesial 21
		var x_b_21 = (x_db_21 + x_mb_21) / 2; // bukkal 21

		// Set der horizontalen Koordinaten von Zahn 21 (palatinal) in der Bitmap
		var x_dp_21 = 731; // distal 21
		var x_mp_21 = 700; // mesial 21
		var x_p_21 = (x_dp_21 + x_mp_21) / 2; // palatinal 21

		// Set der vertikalen Koordinaten von Zahn 21 (bukkal) aus dem Formular
		var y_gm_21_db = gm_OK_b + 6.5 * gm_21_db; // Margo Gingivae distobukkal 21
		var y_gm_21_b = gm_OK_b + 6.5 * gm_21_b; // Margo Gingivae bukkal 21
		var y_gm_21_mb = gm_OK_b + 6.5 * gm_21_mb; // Margo Gingivae mesiobukkal 21
		var y_pd_21_db = 6.5 * pd_21_db; // Sondierungstiefe distobukkal 21
		var y_pd_21_b = 6.5 * pd_21_b; // Sondierungstiefe bukkal 21
		var y_pd_21_mb = 6.5 * pd_21_mb; // Sondierungstiefe mesiobukkal 21

		// Set der vertikalen Koordinaten von Zahn 21 (palatinal) aus dem Formular
		var y_gm_21_dp = gm_OK_p - 6.5 * gm_21_dp; // Margo Gingivae distopalatinal 21
		var y_gm_21_p = gm_OK_p - 6.5 * gm_21_p; // Margo Gingivae palatinal 21
		var y_gm_21_mp = gm_OK_p - 6.5 * gm_21_mp; // Margo Gingivae mesiopalatinal 21
		var y_pd_21_dp = 6.5 * pd_21_dp; // Sondierungstiefe distopalatinal 21
		var y_pd_21_p = 6.5 * pd_21_p; // Sondierungstiefe palatinal 21
		var y_pd_21_mp = 6.5 * pd_21_mp; // Sondierungstiefe mesiopalatinal 21

		// Berechnung des Attachmentniveaus 21 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_21_db = y_gm_21_db - y_pd_21_db; // Attachmentniveau distobukkal 21
		var y_al_21_b = y_gm_21_b - y_pd_21_b; // Attachmentniveau bukkal 21
		var y_al_21_mb = y_gm_21_mb - y_pd_21_mb; // Attachmentniveau mesiobukkal 21

		// Berechnung des Attachmentniveaus 21 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_21_dp = y_gm_21_dp + y_pd_21_dp; // Attachmentniveau distopalatinal 21
		var y_al_21_p = y_gm_21_p + y_pd_21_p; // Attachmentniveau palatinal 21
		var y_al_21_mp = y_gm_21_mp + y_pd_21_mp; // Attachmentniveau mesiopalatinal 21

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[21].storeCoordinates(
			x_db_21, x_mb_21, x_dp_21, x_mp_21, x_b_21, x_p_21,
			y_gm_21_db, y_gm_21_b, y_gm_21_mb, y_pd_21_db, y_pd_21_b, y_pd_21_mb,
			y_gm_21_dp, y_gm_21_p, y_gm_21_mp, y_pd_21_dp, y_pd_21_p, y_pd_21_mp,
			y_al_21_db, y_al_21_b, y_al_21_mb, y_al_21_dp, y_al_21_p, y_al_21_mp
		);
		
		// Parodontaltasche 21 bukkal zeichnen
		var string =
			x_db_21 + ", " + y_al_21_db + "  "
			+ x_b_21 + ", " + y_al_21_b + "  "
			+ x_mb_21 + ", " + y_al_21_mb + "  "
			+ x_mb_21 + ", " + y_gm_21_mb + "  "
			+ x_b_21 + ", " + y_gm_21_b + "  "
			+ x_db_21 + ", " + y_gm_21_db;
		document.getElementById("s_polygon_21_b").setAttribute("points", string);
		// Attachmentniveau 21 bukkal zeichnen
		var string =
			x_db_21 + ", " + y_al_21_db + "  "
			+ x_b_21 + ", " + y_al_21_b + "  "
			+ x_mb_21 + ", " + y_al_21_mb;
		document.getElementById("s_polyline_al_21_b").setAttribute("points", string);
		// Margo Gingivae 21 bukkal zeichnen
		var string =
			x_db_21 + ", " + y_gm_21_db + "  "
			+ x_b_21 + ", " + y_gm_21_b + "  "
			+ x_mb_21 + ", " + y_gm_21_mb;
		document.getElementById("s_polyline_gm_21_b").setAttribute("points", string);

		// Parodontaltasche 21 palatinal zeichnen
		var string =
			x_dp_21 + ", " + y_al_21_dp + "  "
			+ x_p_21 + ", " + y_al_21_p + "  "
			+ x_mp_21 + ", " + y_al_21_mp + "  "
			+ x_mp_21 + ", " + y_gm_21_mp + "  "
			+ x_p_21 + ", " + y_gm_21_p + "  "
			+ x_dp_21 + ", " + y_gm_21_dp;
		document.getElementById("s_polygon_21_p").setAttribute("points", string);
		// Attachmentniveau 21 palatinal zeichnen
		var string =
			x_dp_21 + ", " + y_al_21_dp + "  "
			+ x_p_21 + ", " + y_al_21_p + "  "
			+ x_mp_21 + ", " + y_al_21_mp;
		document.getElementById("s_polyline_al_21_p").setAttribute("points", string);
		// Margo Gingivae 21 palatinal zeichnen
		var string =
			x_dp_21 + ", " + y_gm_21_dp + "  "
			+ x_p_21 + ", " + y_gm_21_p + "  "
			+ x_mp_21 + ", " + y_gm_21_mp;
		document.getElementById("s_polyline_gm_21_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_21_b').style.display = 'none';
		document.getElementById('s_polyline_al_21_b').style.display = 'none';
		document.getElementById('s_polyline_gm_21_b').style.display = 'none';

		document.getElementById('s_polygon_21_p').style.display = 'none';
		document.getElementById('s_polyline_al_21_p').style.display = 'none';
		document.getElementById('s_polyline_gm_21_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_22) == 1 && Number(jsonObj2.tooth_21) == 1) {
		document.getElementById('s_polygon_inter_22_21_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_22_21_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_22_21_b').style.display = 'block';

		document.getElementById('s_polygon_inter_22_21_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_22_21_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_22_21_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
		var x_mb_22 = 746; // mesial 22

		// Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
		var x_mp_22 = 746; // mesial 22

		// Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
		var y_gm_22_mb = gm_OK_b + 6.5 * gm_22_mb; // Margo Gingivae mesiobukkal 22
		var y_pd_22_mb = 6.5 * pd_22_mb; // Sondierungstiefe mesiobukkal 22

		// Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
		var y_gm_22_mp = gm_OK_p - 6.5 * gm_22_mp; // Margo Gingivae mesiopalatinal 22
		var y_pd_22_mp = 6.5 * pd_22_mp; // Sondierungstiefe mesiopalatinal 22

		// Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_mb = y_gm_22_mb - y_pd_22_mb; // Attachmentniveau mesiobukkal 22

		// Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_mp = y_gm_22_mp + y_pd_22_mp; // Attachmentniveau mesiopalatinal 22

		// Parodontaltasche inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_al_22_mb + "  "
			+ x_db_21 + ", " + y_al_21_db + "  "
			+ x_db_21 + ", " + y_gm_21_db + "  "
			+ x_mb_22 + ", " + y_gm_22_mb;
		document.getElementById("s_polygon_inter_22_21_b").setAttribute("points", string);
		// Attachmentniveau inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_al_22_mb + "  "
			+ x_db_21 + ", " + y_al_21_db;
		document.getElementById("s_polyline_al_inter_22_21_b").setAttribute("points", string);
		// Margo Gingivae inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_gm_22_mb + "  "
			+ x_db_21 + ", " + y_gm_21_db;
		document.getElementById("s_polyline_gm_inter_22_21_b").setAttribute("points", string);

		// Parodontaltasche inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_al_22_mp + "  "
			+ x_dp_21 + ", " + y_al_21_dp + "  "
			+ x_dp_21 + ", " + y_gm_21_dp + "  "
			+ x_mp_22 + ", " + y_gm_22_mp;
		document.getElementById("s_polygon_inter_22_21_p").setAttribute("points", string);
		// Attachmentniveau inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_al_22_mp + "  "
			+ x_dp_21 + ", " + y_al_21_dp;
		document.getElementById("s_polyline_al_inter_22_21_p").setAttribute("points", string);
		// Margo Gingivae inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_gm_22_mp + "  "
			+ x_dp_21 + ", " + y_gm_21_dp;
		document.getElementById("s_polyline_gm_inter_22_21_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_22_21_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_22_21_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_22_21_b').style.display = 'none';

		document.getElementById('s_polygon_inter_22_21_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_22_21_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_22_21_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_22) == 1) {
		document.getElementById('s_polygon_22_b').style.display = 'block';
		document.getElementById('s_polyline_al_22_b').style.display = 'block';
		document.getElementById('s_polyline_gm_22_b').style.display = 'block';

		document.getElementById('s_polygon_22_p').style.display = 'block';
		document.getElementById('s_polyline_al_22_p').style.display = 'block';
		document.getElementById('s_polyline_gm_22_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
		var x_db_22 = 770; // distal 22
		var x_mb_22 = 746; // mesial 22
		var x_b_22 = (x_db_22 + x_mb_22) / 2; // bukkal 22

		// Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
		var x_dp_22 = 772; // distal 22
		var x_mp_22 = 746; // mesial 22
		var x_p_22 = (x_dp_22 + x_mp_22) / 2; // palatinal 22

		// Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
		var y_gm_22_db = gm_OK_b + 6.5 * gm_22_db; // Margo Gingivae distobukkal 22
		var y_gm_22_b = gm_OK_b + 6.5 * gm_22_b; // Margo Gingivae bukkal 22
		var y_gm_22_mb = gm_OK_b + 6.5 * gm_22_mb; // Margo Gingivae mesiobukkal 22
		var y_pd_22_db = 6.5 * pd_22_db; // Sondierungstiefe distobukkal 22
		var y_pd_22_b = 6.5 * pd_22_b; // Sondierungstiefe bukkal 22
		var y_pd_22_mb = 6.5 * pd_22_mb; // Sondierungstiefe mesiobukkal 22

		// Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
		var y_gm_22_dp = gm_OK_p - 6.5 * gm_22_dp; // Margo Gingivae distopalatinal 22
		var y_gm_22_p = gm_OK_p - 6.5 * gm_22_p; // Margo Gingivae palatinal 22
		var y_gm_22_mp = gm_OK_p - 6.5 * gm_22_mp; // Margo Gingivae mesiopalatinal 22
		var y_pd_22_dp = 6.5 * pd_22_dp; // Sondierungstiefe distopalatinal 22
		var y_pd_22_p = 6.5 * pd_22_p; // Sondierungstiefe palatinal 22
		var y_pd_22_mp = 6.5 * pd_22_mp; // Sondierungstiefe mesiopalatinal 22

		// Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_db = y_gm_22_db - y_pd_22_db; // Attachmentniveau distobukkal 22
		var y_al_22_b = y_gm_22_b - y_pd_22_b; // Attachmentniveau bukkal 22
		var y_al_22_mb = y_gm_22_mb - y_pd_22_mb; // Attachmentniveau mesiobukkal 22

		// Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_dp = y_gm_22_dp + y_pd_22_dp; // Attachmentniveau distopalatinal 22
		var y_al_22_p = y_gm_22_p + y_pd_22_p; // Attachmentniveau palatinal 22
		var y_al_22_mp = y_gm_22_mp + y_pd_22_mp; // Attachmentniveau mesiopalatinal 22

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[22].storeCoordinates(
			x_db_22, x_mb_22, x_dp_22, x_mp_22, x_b_22, x_p_22,
			y_gm_22_db, y_gm_22_b, y_gm_22_mb, y_pd_22_db, y_pd_22_b, y_pd_22_mb,
			y_gm_22_dp, y_gm_22_p, y_gm_22_mp, y_pd_22_dp, y_pd_22_p, y_pd_22_mp,
			y_al_22_db, y_al_22_b, y_al_22_mb, y_al_22_dp, y_al_22_p, y_al_22_mp
		);
		
		// Parodontaltasche 22 bukkal zeichnen
		var string =
			x_db_22 + ", " + y_al_22_db + "  "
			+ x_b_22 + ", " + y_al_22_b + "  "
			+ x_mb_22 + ", " + y_al_22_mb + "  "
			+ x_mb_22 + ", " + y_gm_22_mb + "  "
			+ x_b_22 + ", " + y_gm_22_b + "  "
			+ x_db_22 + ", " + y_gm_22_db;
		document.getElementById("s_polygon_22_b").setAttribute("points", string);
		// Attachmentniveau 22 bukkal zeichnen
		var string =
			x_db_22 + ", " + y_al_22_db + "  "
			+ x_b_22 + ", " + y_al_22_b + "  "
			+ x_mb_22 + ", " + y_al_22_mb;
		document.getElementById("s_polyline_al_22_b").setAttribute("points", string);
		// Margo Gingivae 22 bukkal zeichnen
		var string =
			x_db_22 + ", " + y_gm_22_db + "  "
			+ x_b_22 + ", " + y_gm_22_b + "  "
			+ x_mb_22 + ", " + y_gm_22_mb;
		document.getElementById("s_polyline_gm_22_b").setAttribute("points", string);

		// Parodontaltasche 22 palatinal zeichnen
		var string =
			x_dp_22 + ", " + y_al_22_dp + "  "
			+ x_p_22 + ", " + y_al_22_p + "  "
			+ x_mp_22 + ", " + y_al_22_mp + "  "
			+ x_mp_22 + ", " + y_gm_22_mp + "  "
			+ x_p_22 + ", " + y_gm_22_p + "  "
			+ x_dp_22 + ", " + y_gm_22_dp;
		document.getElementById("s_polygon_22_p").setAttribute("points", string);
		// Attachmentniveau 22 palatinal zeichnen
		var string =
			x_dp_22 + ", " + y_al_22_dp + "  "
			+ x_p_22 + ", " + y_al_22_p + "  "
			+ x_mp_22 + ", " + y_al_22_mp;
		document.getElementById("s_polyline_al_22_p").setAttribute("points", string);
		// Margo Gingivae 22 palatinal zeichnen
		var string =
			x_dp_22 + ", " + y_gm_22_dp + "  "
			+ x_p_22 + ", " + y_gm_22_p + "  "
			+ x_mp_22 + ", " + y_gm_22_mp;
		document.getElementById("s_polyline_gm_22_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_22_b').style.display = 'none';
		document.getElementById('s_polyline_al_22_b').style.display = 'none';
		document.getElementById('s_polyline_gm_22_b').style.display = 'none';

		document.getElementById('s_polygon_22_p').style.display = 'none';
		document.getElementById('s_polyline_al_22_p').style.display = 'none';
		document.getElementById('s_polyline_gm_22_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_22) == 1 && Number(jsonObj2.tooth_21) == 1) {
		document.getElementById('s_polygon_inter_22_21_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_22_21_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_22_21_b').style.display = 'block';

		document.getElementById('s_polygon_inter_22_21_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_22_21_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_22_21_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 21 (bukkal) in der Bitmap
		var x_db_21 = 729; // distal 21

		// Set der horizontalen Koordinaten von Zahn 21 (palatinal) in der Bitmap
		var x_dp_21 = 731; // distal 21

		// Set der vertikalen Koordinaten von Zahn 21 (bukkal) aus dem Formular
		var y_gm_21_db = gm_OK_b + 6.5 * gm_21_db; // Margo Gingivae distobukkal 21
		var y_pd_21_db = 6.5 * pd_21_db; // Sondierungstiefe distobukkal 21

		// Set der vertikalen Koordinaten von Zahn 21 (palatinal) aus dem Formular
		var y_gm_21_dp = gm_OK_p - 6.5 * gm_21_dp; // Margo Gingivae distopalatinal 21
		var y_pd_21_dp = 6.5 * pd_21_dp; // Sondierungstiefe distopalatinal 21

		// Berechnung des Attachmentniveaus 21 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_21_db = y_gm_21_db - y_pd_21_db; // Attachmentniveau distobukkal 21

		// Berechnung des Attachmentniveaus 21 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_21_dp = y_gm_21_dp + y_pd_21_dp; // Attachmentniveau distopalatinal 21

		// Parodontaltasche inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_al_22_mb + "  "
			+ x_db_21 + ", " + y_al_21_db + "  "
			+ x_db_21 + ", " + y_gm_21_db + "  "
			+ x_mb_22 + ", " + y_gm_22_mb;
		document.getElementById("s_polygon_inter_22_21_b").setAttribute("points", string);
		// Attachmentniveau inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_al_22_mb + "  "
			+ x_db_21 + ", " + y_al_21_db;
		document.getElementById("s_polyline_al_inter_22_21_b").setAttribute("points", string);
		// Margo Gingivae inter_22_21 bukkal zeichnen
		var string =
			x_mb_22 + ", " + y_gm_22_mb + "  "
			+ x_db_21 + ", " + y_gm_21_db;
		document.getElementById("s_polyline_gm_inter_22_21_b").setAttribute("points", string);

		// Parodontaltasche inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_al_22_mp + "  "
			+ x_dp_21 + ", " + y_al_21_dp + "  "
			+ x_dp_21 + ", " + y_gm_21_dp + "  "
			+ x_mp_22 + ", " + y_gm_22_mp;
		document.getElementById("s_polygon_inter_22_21_p").setAttribute("points", string);
		// Attachmentniveau inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_al_22_mp + "  "
			+ x_dp_21 + ", " + y_al_21_dp;
		document.getElementById("s_polyline_al_inter_22_21_p").setAttribute("points", string);
		// Margo Gingivae inter_22_21 palatinal zeichnen
		var string =
			x_mp_22 + ", " + y_gm_22_mp + "  "
			+ x_dp_21 + ", " + y_gm_21_dp;
		document.getElementById("s_polyline_gm_inter_22_21_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_22_21_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_22_21_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_22_21_b').style.display = 'none';

		document.getElementById('s_polygon_inter_22_21_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_22_21_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_22_21_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_23) == 1 && Number(jsonObj2.tooth_22) == 1) {
		document.getElementById('s_polygon_inter_23_22_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_23_22_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_23_22_b').style.display = 'block';

		document.getElementById('s_polygon_inter_23_22_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_23_22_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_23_22_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
		var x_mb_23 = 787; // mesial 23

		// Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
		var x_mp_23 = 785; // mesial 23

		// Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
		var y_gm_23_mb = gm_OK_b + 6.5 * gm_23_mb; // Margo Gingivae mesiobukkal 23
		var y_pd_23_mb = 6.5 * pd_23_mb; // Sondierungstiefe mesiobukkal 23

		// Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
		var y_gm_23_mp = gm_OK_p - 6.5 * gm_23_mp; // Margo Gingivae mesiopalatinal 23
		var y_pd_23_mp = 6.5 * pd_23_mp; // Sondierungstiefe mesiopalatinal 23

		// Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_mb = y_gm_23_mb - y_pd_23_mb; // Attachmentniveau mesiobukkal 23

		// Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_mp = y_gm_23_mp + y_pd_23_mp; // Attachmentniveau mesiopalatinal 23

		// Parodontaltasche inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_al_23_mb + "  "
			+ x_db_22 + ", " + y_al_22_db + "  "
			+ x_db_22 + ", " + y_gm_22_db + "  "
			+ x_mb_23 + ", " + y_gm_23_mb;
		document.getElementById("s_polygon_inter_23_22_b").setAttribute("points", string);
		// Attachmentniveau inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_al_23_mb + "  "
			+ x_db_22 + ", " + y_al_22_db;
		document.getElementById("s_polyline_al_inter_23_22_b").setAttribute("points", string);
		// Margo Gingivae inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_gm_23_mb + "  "
			+ x_db_22 + ", " + y_gm_22_db;
		document.getElementById("s_polyline_gm_inter_23_22_b").setAttribute("points", string);

		// Parodontaltasche inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_al_23_mp + "  "
			+ x_dp_22 + ", " + y_al_22_dp + "  "
			+ x_dp_22 + ", " + y_gm_22_dp + "  "
			+ x_mp_23 + ", " + y_gm_23_mp;
		document.getElementById("s_polygon_inter_23_22_p").setAttribute("points", string);
		// Attachmentniveau inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_al_23_mp + "  "
			+ x_dp_22 + ", " + y_al_22_dp;
		document.getElementById("s_polyline_al_inter_23_22_p").setAttribute("points", string);
		// Margo Gingivae inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_gm_23_mp + "  "
			+ x_dp_22 + ", " + y_gm_22_dp;
		document.getElementById("s_polyline_gm_inter_23_22_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_23_22_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_23_22_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_23_22_b').style.display = 'none';

		document.getElementById('s_polygon_inter_23_22_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_23_22_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_23_22_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_23) == 1) {
		document.getElementById('s_polygon_23_b').style.display = 'block';
		document.getElementById('s_polyline_al_23_b').style.display = 'block';
		document.getElementById('s_polyline_gm_23_b').style.display = 'block';

		document.getElementById('s_polygon_23_p').style.display = 'block';
		document.getElementById('s_polyline_al_23_p').style.display = 'block';
		document.getElementById('s_polyline_gm_23_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
		var x_db_23 = 815; // distal 23
		var x_mb_23 = 787; // mesial 23
		var x_b_23 = (x_db_23 + x_mb_23) / 2; // bukkal 23

		// Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
		var x_dp_23 = 813; // distal 23
		var x_mp_23 = 785; // mesial 23
		var x_p_23 = (x_dp_23 + x_mp_23) / 2; // palatinal 23

		// Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
		var y_gm_23_db = gm_OK_b + 6.5 * gm_23_db; // Margo Gingivae distobukkal 23
		var y_gm_23_b = gm_OK_b + 6.5 * gm_23_b; // Margo Gingivae bukkal 23
		var y_gm_23_mb = gm_OK_b + 6.5 * gm_23_mb; // Margo Gingivae mesiobukkal 23
		var y_pd_23_db = 6.5 * pd_23_db; // Sondierungstiefe distobukkal 23
		var y_pd_23_b = 6.5 * pd_23_b; // Sondierungstiefe bukkal 23
		var y_pd_23_mb = 6.5 * pd_23_mb; // Sondierungstiefe mesiobukkal 23

		// Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
		var y_gm_23_dp = gm_OK_p - 6.5 * gm_23_dp; // Margo Gingivae distopalatinal 23
		var y_gm_23_p = gm_OK_p - 6.5 * gm_23_p; // Margo Gingivae palatinal 23
		var y_gm_23_mp = gm_OK_p - 6.5 * gm_23_mp; // Margo Gingivae mesiopalatinal 23
		var y_pd_23_dp = 6.5 * pd_23_dp; // Sondierungstiefe distopalatinal 23
		var y_pd_23_p = 6.5 * pd_23_p; // Sondierungstiefe palatinal 23
		var y_pd_23_mp = 6.5 * pd_23_mp; // Sondierungstiefe mesiopalatinal 23

		// Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_db = y_gm_23_db - y_pd_23_db; // Attachmentniveau distobukkal 23
		var y_al_23_b = y_gm_23_b - y_pd_23_b; // Attachmentniveau bukkal 23
		var y_al_23_mb = y_gm_23_mb - y_pd_23_mb; // Attachmentniveau mesiobukkal 23

		// Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_dp = y_gm_23_dp + y_pd_23_dp; // Attachmentniveau distopalatinal 23
		var y_al_23_p = y_gm_23_p + y_pd_23_p; // Attachmentniveau palatinal 23
		var y_al_23_mp = y_gm_23_mp + y_pd_23_mp; // Attachmentniveau mesiopalatinal 23

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[23].storeCoordinates(
			x_db_23, x_mb_23, x_dp_23, x_mp_23, x_b_23, x_p_23,
			y_gm_23_db, y_gm_23_b, y_gm_23_mb, y_pd_23_db, y_pd_23_b, y_pd_23_mb,
			y_gm_23_dp, y_gm_23_p, y_gm_23_mp, y_pd_23_dp, y_pd_23_p, y_pd_23_mp,
			y_al_23_db, y_al_23_b, y_al_23_mb, y_al_23_dp, y_al_23_p, y_al_23_mp
		);
		
		// Parodontaltasche 23 bukkal zeichnen
		var string =
			x_db_23 + ", " + y_al_23_db + "  "
			+ x_b_23 + ", " + y_al_23_b + "  "
			+ x_mb_23 + ", " + y_al_23_mb + "  "
			+ x_mb_23 + ", " + y_gm_23_mb + "  "
			+ x_b_23 + ", " + y_gm_23_b + "  "
			+ x_db_23 + ", " + y_gm_23_db;
		document.getElementById("s_polygon_23_b").setAttribute("points", string);
		// Attachmentniveau 23 bukkal zeichnen
		var string =
			x_db_23 + ", " + y_al_23_db + "  "
			+ x_b_23 + ", " + y_al_23_b + "  "
			+ x_mb_23 + ", " + y_al_23_mb;
		document.getElementById("s_polyline_al_23_b").setAttribute("points", string);
		// Margo Gingivae 23 bukkal zeichnen
		var string =
			x_db_23 + ", " + y_gm_23_db + "  "
			+ x_b_23 + ", " + y_gm_23_b + "  "
			+ x_mb_23 + ", " + y_gm_23_mb;
		document.getElementById("s_polyline_gm_23_b").setAttribute("points", string);

		// Parodontaltasche 23 palatinal zeichnen
		var string =
			x_dp_23 + ", " + y_al_23_dp + "  "
			+ x_p_23 + ", " + y_al_23_p + "  "
			+ x_mp_23 + ", " + y_al_23_mp + "  "
			+ x_mp_23 + ", " + y_gm_23_mp + "  "
			+ x_p_23 + ", " + y_gm_23_p + "  "
			+ x_dp_23 + ", " + y_gm_23_dp;
		document.getElementById("s_polygon_23_p").setAttribute("points", string);
		// Attachmentniveau 23 palatinal zeichnen
		var string =
			x_dp_23 + ", " + y_al_23_dp + "  "
			+ x_p_23 + ", " + y_al_23_p + "  "
			+ x_mp_23 + ", " + y_al_23_mp;
		document.getElementById("s_polyline_al_23_p").setAttribute("points", string);
		// Margo Gingivae 23 palatinal zeichnen
		var string =
			x_dp_23 + ", " + y_gm_23_dp + "  "
			+ x_p_23 + ", " + y_gm_23_p + "  "
			+ x_mp_23 + ", " + y_gm_23_mp;
		document.getElementById("s_polyline_gm_23_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_23_b').style.display = 'none';
		document.getElementById('s_polyline_al_23_b').style.display = 'none';
		document.getElementById('s_polyline_gm_23_b').style.display = 'none';

		document.getElementById('s_polygon_23_p').style.display = 'none';
		document.getElementById('s_polyline_al_23_p').style.display = 'none';
		document.getElementById('s_polyline_gm_23_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_23) == 1 && Number(jsonObj2.tooth_22) == 1) {
		document.getElementById('s_polygon_inter_23_22_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_23_22_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_23_22_b').style.display = 'block';

		document.getElementById('s_polygon_inter_23_22_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_23_22_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_23_22_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
		var x_db_22 = 770; // distal 22

		// Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
		var x_dp_22 = 772; // distal 22

		// Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
		var y_gm_22_db = gm_OK_b + 6.5 * gm_22_db; // Margo Gingivae distobukkal 22
		var y_pd_22_db = 6.5 * pd_22_db; // Sondierungstiefe distobukkal 22

		// Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
		var y_gm_22_dp = gm_OK_p - 6.5 * gm_22_dp; // Margo Gingivae distopalatinal 22
		var y_pd_22_dp = 6.5 * pd_22_dp; // Sondierungstiefe distopalatinal 22

		// Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_db = y_gm_22_db - y_pd_22_db; // Attachmentniveau distobukkal 22

		// Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_22_dp = y_gm_22_dp + y_pd_22_dp; // Attachmentniveau distopalatinal 22

		// Parodontaltasche inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_al_23_mb + "  "
			+ x_db_22 + ", " + y_al_22_db + "  "
			+ x_db_22 + ", " + y_gm_22_db + "  "
			+ x_mb_23 + ", " + y_gm_23_mb;
		document.getElementById("s_polygon_inter_23_22_b").setAttribute("points", string);
		// Attachmentniveau inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_al_23_mb + "  "
			+ x_db_22 + ", " + y_al_22_db;
		document.getElementById("s_polyline_al_inter_23_22_b").setAttribute("points", string);
		// Margo Gingivae inter_23_22 bukkal zeichnen
		var string =
			x_mb_23 + ", " + y_gm_23_mb + "  "
			+ x_db_22 + ", " + y_gm_22_db;
		document.getElementById("s_polyline_gm_inter_23_22_b").setAttribute("points", string);

		// Parodontaltasche inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_al_23_mp + "  "
			+ x_dp_22 + ", " + y_al_22_dp + "  "
			+ x_dp_22 + ", " + y_gm_22_dp + "  "
			+ x_mp_23 + ", " + y_gm_23_mp;
		document.getElementById("s_polygon_inter_23_22_p").setAttribute("points", string);
		// Attachmentniveau inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_al_23_mp + "  "
			+ x_dp_22 + ", " + y_al_22_dp;
		document.getElementById("s_polyline_al_inter_23_22_p").setAttribute("points", string);
		// Margo Gingivae inter_23_22 palatinal zeichnen
		var string =
			x_mp_23 + ", " + y_gm_23_mp + "  "
			+ x_dp_22 + ", " + y_gm_22_dp;
		document.getElementById("s_polyline_gm_inter_23_22_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_23_22_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_23_22_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_23_22_b').style.display = 'none';

		document.getElementById('s_polygon_inter_23_22_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_23_22_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_23_22_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_24) == 1 && Number(jsonObj2.tooth_23) == 1) {
		document.getElementById('s_polygon_inter_24_23_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_24_23_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_24_23_b').style.display = 'block';

		document.getElementById('s_polygon_inter_24_23_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_24_23_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_24_23_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
		var x_mb_24 = 829; // mesial 24

		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
		var x_mp_24 = 829; // mesial 24

		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
		var y_gm_24_mb = gm_OK_b + 6.5 * gm_24_mb; // Margo Gingivae mesiobukkal 24
		var y_pd_24_mb = 6.5 * pd_24_mb; // Sondierungstiefe mesiobukkal 24

		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
		var y_gm_24_mp = gm_OK_p - 6.5 * gm_24_mp; // Margo Gingivae mesiopalatinal 24
		var y_pd_24_mp = 6.5 * pd_24_mp; // Sondierungstiefe mesiopalatinal 24

		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_mb = y_gm_24_mb - y_pd_24_mb; // Attachmentniveau mesiobukkal 24

		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_mp = y_gm_24_mp + y_pd_24_mp; // Attachmentniveau mesiopalatinal 24

		// Parodontaltasche inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_al_24_mb + "  "
			+ x_db_23 + ", " + y_al_23_db + "  "
			+ x_db_23 + ", " + y_gm_23_db + "  "
			+ x_mb_24 + ", " + y_gm_24_mb;
		document.getElementById("s_polygon_inter_24_23_b").setAttribute("points", string);
		// Attachmentniveau inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_al_24_mb + "  "
			+ x_db_23 + ", " + y_al_23_db;
		document.getElementById("s_polyline_al_inter_24_23_b").setAttribute("points", string);
		// Margo Gingivae inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_gm_24_mb + "  "
			+ x_db_23 + ", " + y_gm_23_db;
		document.getElementById("s_polyline_gm_inter_24_23_b").setAttribute("points", string);

		// Parodontaltasche inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_al_24_mp + "  "
			+ x_dp_23 + ", " + y_al_23_dp + "  "
			+ x_dp_23 + ", " + y_gm_23_dp + "  "
			+ x_mp_24 + ", " + y_gm_24_mp;
		document.getElementById("s_polygon_inter_24_23_p").setAttribute("points", string);
		// Attachmentniveau inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_al_24_mp + "  "
			+ x_dp_23 + ", " + y_al_23_dp;
		document.getElementById("s_polyline_al_inter_24_23_p").setAttribute("points", string);
		// Margo Gingivae inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_gm_24_mp + "  "
			+ x_dp_23 + ", " + y_gm_23_dp;
		document.getElementById("s_polyline_gm_inter_24_23_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_24_23_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_24_23_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_24_23_b').style.display = 'none';

		document.getElementById('s_polygon_inter_24_23_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_24_23_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_24_23_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_24) == 1) {
		document.getElementById('s_polygon_24_b').style.display = 'block';
		document.getElementById('s_polyline_al_24_b').style.display = 'block';
		document.getElementById('s_polyline_gm_24_b').style.display = 'block';

		document.getElementById('s_polygon_24_p').style.display = 'block';
		document.getElementById('s_polyline_al_24_p').style.display = 'block';
		document.getElementById('s_polyline_gm_24_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
		var x_db_24 = 855; // distal 24
		var x_mb_24 = 829; // mesial 24
		var x_b_24 = (x_db_24 + x_mb_24) / 2; // bukkal 24

		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
		var x_dp_24 = 854; // distal 24
		var x_mp_24 = 829; // mesial 24
		var x_p_24 = (x_dp_24 + x_mp_24) / 2; // palatinal 24

		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
		var y_gm_24_db = gm_OK_b + 6.5 * gm_24_db; // Margo Gingivae distobukkal 24
		var y_gm_24_b = gm_OK_b + 6.5 * gm_24_b; // Margo Gingivae bukkal 24
		var y_gm_24_mb = gm_OK_b + 6.5 * gm_24_mb; // Margo Gingivae mesiobukkal 24
		var y_pd_24_db = 6.5 * pd_24_db; // Sondierungstiefe distobukkal 24
		var y_pd_24_b = 6.5 * pd_24_b; // Sondierungstiefe bukkal 24
		var y_pd_24_mb = 6.5 * pd_24_mb; // Sondierungstiefe mesiobukkal 24

		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
		var y_gm_24_dp = gm_OK_p - 6.5 * gm_24_dp; // Margo Gingivae distopalatinal 24
		var y_gm_24_p = gm_OK_p - 6.5 * gm_24_p; // Margo Gingivae palatinal 24
		var y_gm_24_mp = gm_OK_p - 6.5 * gm_24_mp; // Margo Gingivae mesiopalatinal 24
		var y_pd_24_dp = 6.5 * pd_24_dp; // Sondierungstiefe distopalatinal 24
		var y_pd_24_p = 6.5 * pd_24_p; // Sondierungstiefe palatinal 24
		var y_pd_24_mp = 6.5 * pd_24_mp; // Sondierungstiefe mesiopalatinal 24

		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_db = y_gm_24_db - y_pd_24_db; // Attachmentniveau distobukkal 24
		var y_al_24_b = y_gm_24_b - y_pd_24_b; // Attachmentniveau bukkal 24
		var y_al_24_mb = y_gm_24_mb - y_pd_24_mb; // Attachmentniveau mesiobukkal 24

		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_dp = y_gm_24_dp + y_pd_24_dp; // Attachmentniveau distopalatinal 24
		var y_al_24_p = y_gm_24_p + y_pd_24_p; // Attachmentniveau palatinal 24
		var y_al_24_mp = y_gm_24_mp + y_pd_24_mp; // Attachmentniveau mesiopalatinal 24

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[24].storeCoordinates(
			x_db_24, x_mb_24, x_dp_24, x_mp_24, x_b_24, x_p_24,
			y_gm_24_db, y_gm_24_b, y_gm_24_mb, y_pd_24_db, y_pd_24_b, y_pd_24_mb,
			y_gm_24_dp, y_gm_24_p, y_gm_24_mp, y_pd_24_dp, y_pd_24_p, y_pd_24_mp,
			y_al_24_db, y_al_24_b, y_al_24_mb, y_al_24_dp, y_al_24_p, y_al_24_mp
		);
		
		// Parodontaltasche 24 bukkal zeichnen
		var string =
			x_db_24 + ", " + y_al_24_db + "  "
			+ x_b_24 + ", " + y_al_24_b + "  "
			+ x_mb_24 + ", " + y_al_24_mb + "  "
			+ x_mb_24 + ", " + y_gm_24_mb + "  "
			+ x_b_24 + ", " + y_gm_24_b + "  "
			+ x_db_24 + ", " + y_gm_24_db;
		document.getElementById("s_polygon_24_b").setAttribute("points", string);
		// Attachmentniveau 24 bukkal zeichnen
		var string =
			x_db_24 + ", " + y_al_24_db + "  "
			+ x_b_24 + ", " + y_al_24_b + "  "
			+ x_mb_24 + ", " + y_al_24_mb;
		document.getElementById("s_polyline_al_24_b").setAttribute("points", string);
		// Margo Gingivae 24 bukkal zeichnen
		var string =
			x_db_24 + ", " + y_gm_24_db + "  "
			+ x_b_24 + ", " + y_gm_24_b + "  "
			+ x_mb_24 + ", " + y_gm_24_mb;
		document.getElementById("s_polyline_gm_24_b").setAttribute("points", string);

		// Parodontaltasche 24 palatinal zeichnen
		var string =
			x_dp_24 + ", " + y_al_24_dp + "  "
			+ x_p_24 + ", " + y_al_24_p + "  "
			+ x_mp_24 + ", " + y_al_24_mp + "  "
			+ x_mp_24 + ", " + y_gm_24_mp + "  "
			+ x_p_24 + ", " + y_gm_24_p + "  "
			+ x_dp_24 + ", " + y_gm_24_dp;
		document.getElementById("s_polygon_24_p").setAttribute("points", string);
		// Attachmentniveau 24 palatinal zeichnen
		var string =
			x_dp_24 + ", " + y_al_24_dp + "  "
			+ x_p_24 + ", " + y_al_24_p + "  "
			+ x_mp_24 + ", " + y_al_24_mp;
		document.getElementById("s_polyline_al_24_p").setAttribute("points", string);
		// Margo Gingivae 24 palatinal zeichnen
		var string =
			x_dp_24 + ", " + y_gm_24_dp + "  "
			+ x_p_24 + ", " + y_gm_24_p + "  "
			+ x_mp_24 + ", " + y_gm_24_mp;
		document.getElementById("s_polyline_gm_24_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_24_b').style.display = 'none';
		document.getElementById('s_polyline_al_24_b').style.display = 'none';
		document.getElementById('s_polyline_gm_24_b').style.display = 'none';

		document.getElementById('s_polygon_24_p').style.display = 'none';
		document.getElementById('s_polyline_al_24_p').style.display = 'none';
		document.getElementById('s_polyline_gm_24_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_24) == 1 && Number(jsonObj2.tooth_23) == 1) {
		document.getElementById('s_polygon_inter_24_23_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_24_23_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_24_23_b').style.display = 'block';

		document.getElementById('s_polygon_inter_24_23_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_24_23_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_24_23_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
		var x_db_23 = 815; // distal 23

		// Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
		var x_dp_23 = 813; // distal 23

		// Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
		var y_gm_23_db = gm_OK_b + 6.5 * gm_23_db; // Margo Gingivae distobukkal 23
		var y_pd_23_db = 6.5 * pd_23_db; // Sondierungstiefe distobukkal 23

		// Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
		var y_gm_23_dp = gm_OK_p - 6.5 * gm_23_dp; // Margo Gingivae distopalatinal 23
		var y_pd_23_dp = 6.5 * pd_23_dp; // Sondierungstiefe distopalatinal 23

		// Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_db = y_gm_23_db - y_pd_23_db; // Attachmentniveau distobukkal 23

		// Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_23_dp = y_gm_23_dp + y_pd_23_dp; // Attachmentniveau distopalatinal 23

		// Parodontaltasche inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_al_24_mb + "  "
			+ x_db_23 + ", " + y_al_23_db + "  "
			+ x_db_23 + ", " + y_gm_23_db + "  "
			+ x_mb_24 + ", " + y_gm_24_mb;
		document.getElementById("s_polygon_inter_24_23_b").setAttribute("points", string);
		// Attachmentniveau inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_al_24_mb + "  "
			+ x_db_23 + ", " + y_al_23_db;
		document.getElementById("s_polyline_al_inter_24_23_b").setAttribute("points", string);
		// Margo Gingivae inter_24_23 bukkal zeichnen
		var string =
			x_mb_24 + ", " + y_gm_24_mb + "  "
			+ x_db_23 + ", " + y_gm_23_db;
		document.getElementById("s_polyline_gm_inter_24_23_b").setAttribute("points", string);

		// Parodontaltasche inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_al_24_mp + "  "
			+ x_dp_23 + ", " + y_al_23_dp + "  "
			+ x_dp_23 + ", " + y_gm_23_dp + "  "
			+ x_mp_24 + ", " + y_gm_24_mp;
		document.getElementById("s_polygon_inter_24_23_p").setAttribute("points", string);
		// Attachmentniveau inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_al_24_mp + "  "
			+ x_dp_23 + ", " + y_al_23_dp;
		document.getElementById("s_polyline_al_inter_24_23_p").setAttribute("points", string);
		// Margo Gingivae inter_24_23 palatinal zeichnen
		var string =
			x_mp_24 + ", " + y_gm_24_mp + "  "
			+ x_dp_23 + ", " + y_gm_23_dp;
		document.getElementById("s_polyline_gm_inter_24_23_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_24_23_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_24_23_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_24_23_b').style.display = 'none';

		document.getElementById('s_polygon_inter_24_23_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_24_23_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_24_23_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_25) == 1 && Number(jsonObj2.tooth_24) == 1) {
		document.getElementById('s_polygon_inter_25_24_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_25_24_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_25_24_b').style.display = 'block';

		document.getElementById('s_polygon_inter_25_24_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_25_24_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_25_24_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
		var x_mb_25 = 869; // mesial 25

		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
		var x_mp_25 = 871; // mesial 25

		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
		var y_gm_25_mb = gm_OK_b + 6.5 * gm_25_mb; // Margo Gingivae mesiobukkal 25
		var y_pd_25_mb = 6.5 * pd_25_mb; // Sondierungstiefe mesiobukkal 25

		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
		var y_gm_25_mp = gm_OK_p - 6.5 * gm_25_mp; // Margo Gingivae mesiopalatinal 25
		var y_pd_25_mp = 6.5 * pd_25_mp; // Sondierungstiefe mesiopalatinal 25

		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_mb = y_gm_25_mb - y_pd_25_mb; // Attachmentniveau mesiobukkal 25

		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_mp = y_gm_25_mp + y_pd_25_mp; // Attachmentniveau mesiopalatinal 25

		// Parodontaltasche inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_al_25_mb + "  "
			+ x_db_24 + ", " + y_al_24_db + "  "
			+ x_db_24 + ", " + y_gm_24_db + "  "
			+ x_mb_25 + ", " + y_gm_25_mb;
		document.getElementById("s_polygon_inter_25_24_b").setAttribute("points", string);
		// Attachmentniveau inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_al_25_mb + "  "
			+ x_db_24 + ", " + y_al_24_db;
		document.getElementById("s_polyline_al_inter_25_24_b").setAttribute("points", string);
		// Margo Gingivae inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_gm_25_mb + "  "
			+ x_db_24 + ", " + y_gm_24_db;
		document.getElementById("s_polyline_gm_inter_25_24_b").setAttribute("points", string);

		// Parodontaltasche inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_al_25_mp + "  "
			+ x_dp_24 + ", " + y_al_24_dp + "  "
			+ x_dp_24 + ", " + y_gm_24_dp + "  "
			+ x_mp_25 + ", " + y_gm_25_mp;
		document.getElementById("s_polygon_inter_25_24_p").setAttribute("points", string);
		// Attachmentniveau inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_al_25_mp + "  "
			+ x_dp_24 + ", " + y_al_24_dp;
		document.getElementById("s_polyline_al_inter_25_24_p").setAttribute("points", string);
		// Margo Gingivae inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_gm_25_mp + "  "
			+ x_dp_24 + ", " + y_gm_24_dp;
		document.getElementById("s_polyline_gm_inter_25_24_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_25_24_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_25_24_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_25_24_b').style.display = 'none';

		document.getElementById('s_polygon_inter_25_24_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_25_24_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_25_24_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_25) == 1) {
		document.getElementById('s_polygon_25_b').style.display = 'block';
		document.getElementById('s_polyline_al_25_b').style.display = 'block';
		document.getElementById('s_polyline_gm_25_b').style.display = 'block';

		document.getElementById('s_polygon_25_p').style.display = 'block';
		document.getElementById('s_polyline_al_25_p').style.display = 'block';
		document.getElementById('s_polyline_gm_25_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
		var x_db_25 = 895; // distal 25
		var x_mb_25 = 869; // mesial 25
		var x_b_25 = (x_db_25 + x_mb_25) / 2; // bukkal 25

		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
		var x_dp_25 = 897; // distal 25
		var x_mp_25 = 871; // mesial 25
		var x_p_25 = (x_dp_25 + x_mp_25) / 2; // palatinal 25

		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
		var y_gm_25_db = gm_OK_b + 6.5 * gm_25_db; // Margo Gingivae distobukkal 25
		var y_gm_25_b = gm_OK_b + 6.5 * gm_25_b; // Margo Gingivae bukkal 25
		var y_gm_25_mb = gm_OK_b + 6.5 * gm_25_mb; // Margo Gingivae mesiobukkal 25
		var y_pd_25_db = 6.5 * pd_25_db; // Sondierungstiefe distobukkal 25
		var y_pd_25_b = 6.5 * pd_25_b; // Sondierungstiefe bukkal 25
		var y_pd_25_mb = 6.5 * pd_25_mb; // Sondierungstiefe mesiobukkal 25

		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
		var y_gm_25_dp = gm_OK_p - 6.5 * gm_25_dp; // Margo Gingivae distopalatinal 25
		var y_gm_25_p = gm_OK_p - 6.5 * gm_25_p; // Margo Gingivae palatinal 25
		var y_gm_25_mp = gm_OK_p - 6.5 * gm_25_mp; // Margo Gingivae mesiopalatinal 25
		var y_pd_25_dp = 6.5 * pd_25_dp; // Sondierungstiefe distopalatinal 25
		var y_pd_25_p = 6.5 * pd_25_p; // Sondierungstiefe palatinal 25
		var y_pd_25_mp = 6.5 * pd_25_mp; // Sondierungstiefe mesiopalatinal 25

		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_db = y_gm_25_db - y_pd_25_db; // Attachmentniveau distobukkal 25
		var y_al_25_b = y_gm_25_b - y_pd_25_b; // Attachmentniveau bukkal 25
		var y_al_25_mb = y_gm_25_mb - y_pd_25_mb; // Attachmentniveau mesiobukkal 25

		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_dp = y_gm_25_dp + y_pd_25_dp; // Attachmentniveau distopalatinal 25
		var y_al_25_p = y_gm_25_p + y_pd_25_p; // Attachmentniveau palatinal 25
		var y_al_25_mp = y_gm_25_mp + y_pd_25_mp; // Attachmentniveau mesiopalatinal 25

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[25].storeCoordinates(
			x_db_25, x_mb_25, x_dp_25, x_mp_25, x_b_25, x_p_25,
			y_gm_25_db, y_gm_25_b, y_gm_25_mb, y_pd_25_db, y_pd_25_b, y_pd_25_mb,
			y_gm_25_dp, y_gm_25_p, y_gm_25_mp, y_pd_25_dp, y_pd_25_p, y_pd_25_mp,
			y_al_25_db, y_al_25_b, y_al_25_mb, y_al_25_dp, y_al_25_p, y_al_25_mp
		);
		
		// Parodontaltasche 25 bukkal zeichnen
		var string =
			x_db_25 + ", " + y_al_25_db + "  "
			+ x_b_25 + ", " + y_al_25_b + "  "
			+ x_mb_25 + ", " + y_al_25_mb + "  "
			+ x_mb_25 + ", " + y_gm_25_mb + "  "
			+ x_b_25 + ", " + y_gm_25_b + "  "
			+ x_db_25 + ", " + y_gm_25_db;
		document.getElementById("s_polygon_25_b").setAttribute("points", string);
		// Attachmentniveau 25 bukkal zeichnen
		var string =
			x_db_25 + ", " + y_al_25_db + "  "
			+ x_b_25 + ", " + y_al_25_b + "  "
			+ x_mb_25 + ", " + y_al_25_mb;
		document.getElementById("s_polyline_al_25_b").setAttribute("points", string);
		// Margo Gingivae 25 bukkal zeichnen
		var string =
			x_db_25 + ", " + y_gm_25_db + "  "
			+ x_b_25 + ", " + y_gm_25_b + "  "
			+ x_mb_25 + ", " + y_gm_25_mb;
		document.getElementById("s_polyline_gm_25_b").setAttribute("points", string);

		// Parodontaltasche 25 palatinal zeichnen
		var string =
			x_dp_25 + ", " + y_al_25_dp + "  "
			+ x_p_25 + ", " + y_al_25_p + "  "
			+ x_mp_25 + ", " + y_al_25_mp + "  "
			+ x_mp_25 + ", " + y_gm_25_mp + "  "
			+ x_p_25 + ", " + y_gm_25_p + "  "
			+ x_dp_25 + ", " + y_gm_25_dp;
		document.getElementById("s_polygon_25_p").setAttribute("points", string);
		// Attachmentniveau 25 palatinal zeichnen
		var string =
			x_dp_25 + ", " + y_al_25_dp + "  "
			+ x_p_25 + ", " + y_al_25_p + "  "
			+ x_mp_25 + ", " + y_al_25_mp;
		document.getElementById("s_polyline_al_25_p").setAttribute("points", string);
		// Margo Gingivae 25 palatinal zeichnen
		var string =
			x_dp_25 + ", " + y_gm_25_dp + "  "
			+ x_p_25 + ", " + y_gm_25_p + "  "
			+ x_mp_25 + ", " + y_gm_25_mp;
		document.getElementById("s_polyline_gm_25_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_25_b').style.display = 'none';
		document.getElementById('s_polyline_al_25_b').style.display = 'none';
		document.getElementById('s_polyline_gm_25_b').style.display = 'none';

		document.getElementById('s_polygon_25_p').style.display = 'none';
		document.getElementById('s_polyline_al_25_p').style.display = 'none';
		document.getElementById('s_polyline_gm_25_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_25) == 1 && Number(jsonObj2.tooth_24) == 1) {
		document.getElementById('s_polygon_inter_25_24_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_25_24_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_25_24_b').style.display = 'block';

		document.getElementById('s_polygon_inter_25_24_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_25_24_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_25_24_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
		var x_db_24 = 855; // distal 24

		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
		var x_dp_24 = 854; // distal 24

		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
		var y_gm_24_db = gm_OK_b + 6.5 * gm_24_db; // Margo Gingivae distobukkal 24
		var y_pd_24_db = 6.5 * pd_24_db; // Sondierungstiefe distobukkal 24

		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
		var y_gm_24_dp = gm_OK_p - 6.5 * gm_24_dp; // Margo Gingivae distopalatinal 24
		var y_pd_24_dp = 6.5 * pd_24_dp; // Sondierungstiefe distopalatinal 24

		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_db = y_gm_24_db - y_pd_24_db; // Attachmentniveau distobukkal 24

		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_24_dp = y_gm_24_dp + y_pd_24_dp; // Attachmentniveau distopalatinal 24

		// Parodontaltasche inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_al_25_mb + "  "
			+ x_db_24 + ", " + y_al_24_db + "  "
			+ x_db_24 + ", " + y_gm_24_db + "  "
			+ x_mb_25 + ", " + y_gm_25_mb;
		document.getElementById("s_polygon_inter_25_24_b").setAttribute("points", string);
		// Attachmentniveau inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_al_25_mb + "  "
			+ x_db_24 + ", " + y_al_24_db;
		document.getElementById("s_polyline_al_inter_25_24_b").setAttribute("points", string);
		// Margo Gingivae inter_25_24 bukkal zeichnen
		var string =
			x_mb_25 + ", " + y_gm_25_mb + "  "
			+ x_db_24 + ", " + y_gm_24_db;
		document.getElementById("s_polyline_gm_inter_25_24_b").setAttribute("points", string);

		// Parodontaltasche inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_al_25_mp + "  "
			+ x_dp_24 + ", " + y_al_24_dp + "  "
			+ x_dp_24 + ", " + y_gm_24_dp + "  "
			+ x_mp_25 + ", " + y_gm_25_mp;
		document.getElementById("s_polygon_inter_25_24_p").setAttribute("points", string);
		// Attachmentniveau inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_al_25_mp + "  "
			+ x_dp_24 + ", " + y_al_24_dp;
		document.getElementById("s_polyline_al_inter_25_24_p").setAttribute("points", string);
		// Margo Gingivae inter_25_24 palatinal zeichnen
		var string =
			x_mp_25 + ", " + y_gm_25_mp + "  "
			+ x_dp_24 + ", " + y_gm_24_dp;
		document.getElementById("s_polyline_gm_inter_25_24_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_25_24_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_25_24_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_25_24_b').style.display = 'none';

		document.getElementById('s_polygon_inter_25_24_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_25_24_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_25_24_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_26) == 1 && Number(jsonObj2.tooth_25) == 1) {
		document.getElementById('s_polygon_inter_26_25_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_26_25_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_26_25_b').style.display = 'block';

		document.getElementById('s_polygon_inter_26_25_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_26_25_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_26_25_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
		var x_mb_26 = 907; // mesial 26

		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
		var x_mp_26 = 912; // mesial 26

		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
		var y_gm_26_mb = gm_OK_b + 6.5 * gm_26_mb; // Margo Gingivae mesiobukkal 26
		var y_pd_26_mb = 6.5 * pd_26_mb; // Sondierungstiefe mesiobukkal 26

		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
		var y_gm_26_mp = gm_OK_p - 6.5 * gm_26_mp; // Margo Gingivae mesiopalatinal 26
		var y_pd_26_mp = 6.5 * pd_26_mp; // Sondierungstiefe mesiopalatinal 26

		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_mb = y_gm_26_mb - y_pd_26_mb; // Attachmentniveau mesiobukkal 26

		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_mp = y_gm_26_mp + y_pd_26_mp; // Attachmentniveau mesiopalatinal 26

		// Parodontaltasche inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_al_26_mb + "  "
			+ x_db_25 + ", " + y_al_25_db + "  "
			+ x_db_25 + ", " + y_gm_25_db + "  "
			+ x_mb_26 + ", " + y_gm_26_mb;
		document.getElementById("s_polygon_inter_26_25_b").setAttribute("points", string);
		// Attachmentniveau inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_al_26_mb + "  "
			+ x_db_25 + ", " + y_al_25_db;
		document.getElementById("s_polyline_al_inter_26_25_b").setAttribute("points", string);
		// Margo Gingivae inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_gm_26_mb + "  "
			+ x_db_25 + ", " + y_gm_25_db;
		document.getElementById("s_polyline_gm_inter_26_25_b").setAttribute("points", string);

		// Parodontaltasche inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_al_26_mp + "  "
			+ x_dp_25 + ", " + y_al_25_dp + "  "
			+ x_dp_25 + ", " + y_gm_25_dp + "  "
			+ x_mp_26 + ", " + y_gm_26_mp;
		document.getElementById("s_polygon_inter_26_25_p").setAttribute("points", string);
		// Attachmentniveau inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_al_26_mp + "  "
			+ x_dp_25 + ", " + y_al_25_dp;
		document.getElementById("s_polyline_al_inter_26_25_p").setAttribute("points", string);
		// Margo Gingivae inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_gm_26_mp + "  "
			+ x_dp_25 + ", " + y_gm_25_dp;
		document.getElementById("s_polyline_gm_inter_26_25_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_26_25_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_26_25_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_26_25_b').style.display = 'none';

		document.getElementById('s_polygon_inter_26_25_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_26_25_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_26_25_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_26) == 1) {
		document.getElementById('s_polygon_26_b').style.display = 'block';
		document.getElementById('s_polyline_al_26_b').style.display = 'block';
		document.getElementById('s_polyline_gm_26_b').style.display = 'block';

		document.getElementById('s_polygon_26_p').style.display = 'block';
		document.getElementById('s_polyline_al_26_p').style.display = 'block';
		document.getElementById('s_polyline_gm_26_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
		var x_db_26 = 961; // distal 26
		var x_mb_26 = 907; // mesial 26
		var x_b_26 = (x_db_26 + x_mb_26) / 2; // bukkal 26

		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
		var x_dp_26 = 960; // distal 26
		var x_mp_26 = 912; // mesial 26
		var x_p_26 = (x_dp_26 + x_mp_26) / 2; // palatinal 26

		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
		var y_gm_26_db = gm_OK_b + 6.5 * gm_26_db; // Margo Gingivae distobukkal 26
		var y_gm_26_b = gm_OK_b + 6.5 * gm_26_b; // Margo Gingivae bukkal 26
		var y_gm_26_mb = gm_OK_b + 6.5 * gm_26_mb; // Margo Gingivae mesiobukkal 26
		var y_pd_26_db = 6.5 * pd_26_db; // Sondierungstiefe distobukkal 26
		var y_pd_26_b = 6.5 * pd_26_b; // Sondierungstiefe bukkal 26
		var y_pd_26_mb = 6.5 * pd_26_mb; // Sondierungstiefe mesiobukkal 26

		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
		var y_gm_26_dp = gm_OK_p - 6.5 * gm_26_dp; // Margo Gingivae distopalatinal 26
		var y_gm_26_p = gm_OK_p - 6.5 * gm_26_p; // Margo Gingivae palatinal 26
		var y_gm_26_mp = gm_OK_p - 6.5 * gm_26_mp; // Margo Gingivae mesiopalatinal 26
		var y_pd_26_dp = 6.5 * pd_26_dp; // Sondierungstiefe distopalatinal 26
		var y_pd_26_p = 6.5 * pd_26_p; // Sondierungstiefe palatinal 26
		var y_pd_26_mp = 6.5 * pd_26_mp; // Sondierungstiefe mesiopalatinal 26

		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_db = y_gm_26_db - y_pd_26_db; // Attachmentniveau distobukkal 26
		var y_al_26_b = y_gm_26_b - y_pd_26_b; // Attachmentniveau bukkal 26
		var y_al_26_mb = y_gm_26_mb - y_pd_26_mb; // Attachmentniveau mesiobukkal 26

		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_dp = y_gm_26_dp + y_pd_26_dp; // Attachmentniveau distopalatinal 26
		var y_al_26_p = y_gm_26_p + y_pd_26_p; // Attachmentniveau palatinal 26
		var y_al_26_mp = y_gm_26_mp + y_pd_26_mp; // Attachmentniveau mesiopalatinal 26

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[26].storeCoordinates(
			x_db_26, x_mb_26, x_dp_26, x_mp_26, x_b_26, x_p_26,
			y_gm_26_db, y_gm_26_b, y_gm_26_mb, y_pd_26_db, y_pd_26_b, y_pd_26_mb,
			y_gm_26_dp, y_gm_26_p, y_gm_26_mp, y_pd_26_dp, y_pd_26_p, y_pd_26_mp,
			y_al_26_db, y_al_26_b, y_al_26_mb, y_al_26_dp, y_al_26_p, y_al_26_mp
		);
		
		// Parodontaltasche 26 bukkal zeichnen
		var string =
			x_db_26 + ", " + y_al_26_db + "  "
			+ x_b_26 + ", " + y_al_26_b + "  "
			+ x_mb_26 + ", " + y_al_26_mb + "  "
			+ x_mb_26 + ", " + y_gm_26_mb + "  "
			+ x_b_26 + ", " + y_gm_26_b + "  "
			+ x_db_26 + ", " + y_gm_26_db;
		document.getElementById("s_polygon_26_b").setAttribute("points", string);
		// Attachmentniveau 26 bukkal zeichnen
		var string =
			x_db_26 + ", " + y_al_26_db + "  "
			+ x_b_26 + ", " + y_al_26_b + "  "
			+ x_mb_26 + ", " + y_al_26_mb;
		document.getElementById("s_polyline_al_26_b").setAttribute("points", string);
		// Margo Gingivae 26 bukkal zeichnen
		var string =
			x_db_26 + ", " + y_gm_26_db + "  "
			+ x_b_26 + ", " + y_gm_26_b + "  "
			+ x_mb_26 + ", " + y_gm_26_mb;
		document.getElementById("s_polyline_gm_26_b").setAttribute("points", string);

		// Parodontaltasche 26 palatinal zeichnen
		var string =
			x_dp_26 + ", " + y_al_26_dp + "  "
			+ x_p_26 + ", " + y_al_26_p + "  "
			+ x_mp_26 + ", " + y_al_26_mp + "  "
			+ x_mp_26 + ", " + y_gm_26_mp + "  "
			+ x_p_26 + ", " + y_gm_26_p + "  "
			+ x_dp_26 + ", " + y_gm_26_dp;
		document.getElementById("s_polygon_26_p").setAttribute("points", string);
		// Attachmentniveau 26 palatinal zeichnen
		var string =
			x_dp_26 + ", " + y_al_26_dp + "  "
			+ x_p_26 + ", " + y_al_26_p + "  "
			+ x_mp_26 + ", " + y_al_26_mp;
		document.getElementById("s_polyline_al_26_p").setAttribute("points", string);
		// Margo Gingivae 26 palatinal zeichnen
		var string =
			x_dp_26 + ", " + y_gm_26_dp + "  "
			+ x_p_26 + ", " + y_gm_26_p + "  "
			+ x_mp_26 + ", " + y_gm_26_mp;
		document.getElementById("s_polyline_gm_26_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_26_b').style.display = 'none';
		document.getElementById('s_polyline_al_26_b').style.display = 'none';
		document.getElementById('s_polyline_gm_26_b').style.display = 'none';

		document.getElementById('s_polygon_26_p').style.display = 'none';
		document.getElementById('s_polyline_al_26_p').style.display = 'none';
		document.getElementById('s_polyline_gm_26_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_26) == 1 && Number(jsonObj2.tooth_25) == 1) {
		document.getElementById('s_polygon_inter_26_25_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_26_25_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_26_25_b').style.display = 'block';

		document.getElementById('s_polygon_inter_26_25_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_26_25_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_26_25_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
		var x_db_25 = 895; // distal 25

		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
		var x_dp_25 = 897; // distal 25

		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
		var y_gm_25_db = gm_OK_b + 6.5 * gm_25_db; // Margo Gingivae distobukkal 25
		var y_pd_25_db = 6.5 * pd_25_db; // Sondierungstiefe distobukkal 25

		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
		var y_gm_25_dp = gm_OK_p - 6.5 * gm_25_dp; // Margo Gingivae distopalatinal 25
		var y_pd_25_dp = 6.5 * pd_25_dp; // Sondierungstiefe distopalatinal 25

		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_db = y_gm_25_db - y_pd_25_db; // Attachmentniveau distobukkal 25

		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_25_dp = y_gm_25_dp + y_pd_25_dp; // Attachmentniveau distopalatinal 25

		// Parodontaltasche inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_al_26_mb + "  "
			+ x_db_25 + ", " + y_al_25_db + "  "
			+ x_db_25 + ", " + y_gm_25_db + "  "
			+ x_mb_26 + ", " + y_gm_26_mb;
		document.getElementById("s_polygon_inter_26_25_b").setAttribute("points", string);
		// Attachmentniveau inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_al_26_mb + "  "
			+ x_db_25 + ", " + y_al_25_db;
		document.getElementById("s_polyline_al_inter_26_25_b").setAttribute("points", string);
		// Margo Gingivae inter_26_25 bukkal zeichnen
		var string =
			x_mb_26 + ", " + y_gm_26_mb + "  "
			+ x_db_25 + ", " + y_gm_25_db;
		document.getElementById("s_polyline_gm_inter_26_25_b").setAttribute("points", string);

		// Parodontaltasche inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_al_26_mp + "  "
			+ x_dp_25 + ", " + y_al_25_dp + "  "
			+ x_dp_25 + ", " + y_gm_25_dp + "  "
			+ x_mp_26 + ", " + y_gm_26_mp;
		document.getElementById("s_polygon_inter_26_25_p").setAttribute("points", string);
		// Attachmentniveau inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_al_26_mp + "  "
			+ x_dp_25 + ", " + y_al_25_dp;
		document.getElementById("s_polyline_al_inter_26_25_p").setAttribute("points", string);
		// Margo Gingivae inter_26_25 palatinal zeichnen
		var string =
			x_mp_26 + ", " + y_gm_26_mp + "  "
			+ x_dp_25 + ", " + y_gm_25_dp;
		document.getElementById("s_polyline_gm_inter_26_25_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_26_25_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_26_25_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_26_25_b').style.display = 'none';

		document.getElementById('s_polygon_inter_26_25_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_26_25_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_26_25_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_27) == 1 && Number(jsonObj2.tooth_26) == 1) {
		document.getElementById('s_polygon_inter_27_26_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_27_26_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_27_26_b').style.display = 'block';

		document.getElementById('s_polygon_inter_27_26_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_27_26_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_27_26_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
		var x_mb_27 = 972; // mesial 27

		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
		var x_mp_27 = 976; // mesial 27

		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
		var y_gm_27_mb = gm_OK_b + 6.5 * gm_27_mb; // Margo Gingivae mesiobukkal 27
		var y_pd_27_mb = 6.5 * pd_27_mb; // Sondierungstiefe mesiobukkal 27

		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
		var y_gm_27_mp = gm_OK_p - 6.5 * gm_27_mp; // Margo Gingivae mesiopalatinal 27
		var y_pd_27_mp = 6.5 * pd_27_mp; // Sondierungstiefe mesiopalatinal 27

		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_mb = y_gm_27_mb - y_pd_27_mb; // Attachmentniveau mesiobukkal 27

		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_mp = y_gm_27_mp + y_pd_27_mp; // Attachmentniveau mesiopalatinal 27

		// Parodontaltasche inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_al_27_mb + "  "
			+ x_db_26 + ", " + y_al_26_db + "  "
			+ x_db_26 + ", " + y_gm_26_db + "  "
			+ x_mb_27 + ", " + y_gm_27_mb;
		document.getElementById("s_polygon_inter_27_26_b").setAttribute("points", string);
		// Attachmentniveau inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_al_27_mb + "  "
			+ x_db_26 + ", " + y_al_26_db;
		document.getElementById("s_polyline_al_inter_27_26_b").setAttribute("points", string);
		// Margo Gingivae inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_gm_27_mb + "  "
			+ x_db_26 + ", " + y_gm_26_db;
		document.getElementById("s_polyline_gm_inter_27_26_b").setAttribute("points", string);

		// Parodontaltasche inter_27_26 palatinal zeichnen
		var string =
			x_mp_27 + ", " + y_al_27_mp + "  "
			+ x_dp_26 + ", " + y_al_26_dp + "  "
			+ x_dp_26 + ", " + y_gm_26_dp + "  "
			+ x_mp_27 + ", " + y_gm_27_mp;
		document.getElementById("s_polygon_inter_27_26_p").setAttribute("points", string);
		// Attachmentniveau inter_27_26 palatinal zeichnen
		var string =
			x_mp_27 + ", " + y_al_27_mp + "  "
			+ x_dp_26 + ", " + y_al_26_dp;
		document.getElementById("s_polyline_al_inter_27_26_p").setAttribute("points", string);
		// Margo Gingivae inter_27_26 palatinal zeichnen
		var string =
			x_mp_27 + ", " + y_gm_27_mp + "  "
			+ x_dp_26 + ", " + y_gm_26_dp;
		document.getElementById("s_polyline_gm_inter_27_26_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_27_26_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_27_26_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_27_26_b').style.display = 'none';

		document.getElementById('s_polygon_inter_27_26_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_27_26_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_27_26_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_27) == 1) {
		document.getElementById('s_polygon_27_b').style.display = 'block';
		document.getElementById('s_polyline_al_27_b').style.display = 'block';
		document.getElementById('s_polyline_gm_27_b').style.display = 'block';

		document.getElementById('s_polygon_27_p').style.display = 'block';
		document.getElementById('s_polyline_al_27_p').style.display = 'block';
		document.getElementById('s_polyline_gm_27_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
		var x_db_27 = 1011; // distal 27
		var x_mb_27 = 972; // mesial 27
		var x_b_27 = (x_db_27 + x_mb_27) / 2; // bukkal 27

		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
		var x_dp_27 = 1015; // distal 27
		var x_mp_27 = 976; // mesial 27
		var x_p_27 = (x_dp_27 + x_mp_27) / 2; // palatinal 27

		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
		var y_gm_27_db = gm_OK_b + 6.5 * gm_27_db; // Margo Gingivae distobukkal 27
		var y_gm_27_b = gm_OK_b + 6.5 * gm_27_b; // Margo Gingivae bukkal 27
		var y_gm_27_mb = gm_OK_b + 6.5 * gm_27_mb; // Margo Gingivae mesiobukkal 27
		var y_pd_27_db = 6.5 * pd_27_db; // Sondierungstiefe distobukkal 27
		var y_pd_27_b = 6.5 * pd_27_b; // Sondierungstiefe bukkal 27
		var y_pd_27_mb = 6.5 * pd_27_mb; // Sondierungstiefe mesiobukkal 27

		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
		var y_gm_27_dp = gm_OK_p - 6.5 * gm_27_dp; // Margo Gingivae distopalatinal 27
		var y_gm_27_p = gm_OK_p - 6.5 * gm_27_p; // Margo Gingivae palatinal 27
		var y_gm_27_mp = gm_OK_p - 6.5 * gm_27_mp; // Margo Gingivae mesiopalatinal 27
		var y_pd_27_dp = 6.5 * pd_27_dp; // Sondierungstiefe distopalatinal 27
		var y_pd_27_p = 6.5 * pd_27_p; // Sondierungstiefe palatinal 27
		var y_pd_27_mp = 6.5 * pd_27_mp; // Sondierungstiefe mesiopalatinal 27

		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_db = y_gm_27_db - y_pd_27_db; // Attachmentniveau distobukkal 27
		var y_al_27_b = y_gm_27_b - y_pd_27_b; // Attachmentniveau bukkal 27
		var y_al_27_mb = y_gm_27_mb - y_pd_27_mb; // Attachmentniveau mesiobukkal 27

		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_dp = y_gm_27_dp + y_pd_27_dp; // Attachmentniveau distopalatinal 27
		var y_al_27_p = y_gm_27_p + y_pd_27_p; // Attachmentniveau palatinal 27
		var y_al_27_mp = y_gm_27_mp + y_pd_27_mp; // Attachmentniveau mesiopalatinal 27

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[27].storeCoordinates(
			x_db_27, x_mb_27, x_dp_27, x_mp_27, x_b_27, x_p_27,
			y_gm_27_db, y_gm_27_b, y_gm_27_mb, y_pd_27_db, y_pd_27_b, y_pd_27_mb,
			y_gm_27_dp, y_gm_27_p, y_gm_27_mp, y_pd_27_dp, y_pd_27_p, y_pd_27_mp,
			y_al_27_db, y_al_27_b, y_al_27_mb, y_al_27_dp, y_al_27_p, y_al_27_mp
		);
		
		// Parodontaltasche 27 bukkal zeichnen
		var string =
			x_db_27 + ", " + y_al_27_db + "  "
			+ x_b_27 + ", " + y_al_27_b + "  "
			+ x_mb_27 + ", " + y_al_27_mb + "  "
			+ x_mb_27 + ", " + y_gm_27_mb + "  "
			+ x_b_27 + ", " + y_gm_27_b + "  "
			+ x_db_27 + ", " + y_gm_27_db;
		document.getElementById("s_polygon_27_b").setAttribute("points", string);
		// Attachmentniveau 27 bukkal zeichnen
		var string =
			x_db_27 + ", " + y_al_27_db + "  "
			+ x_b_27 + ", " + y_al_27_b + "  "
			+ x_mb_27 + ", " + y_al_27_mb;
		document.getElementById("s_polyline_al_27_b").setAttribute("points", string);
		// Margo Gingivae 27 bukkal zeichnen
		var string =
			x_db_27 + ", " + y_gm_27_db + "  "
			+ x_b_27 + ", " + y_gm_27_b + "  "
			+ x_mb_27 + ", " + y_gm_27_mb;
		document.getElementById("s_polyline_gm_27_b").setAttribute("points", string);

		// Parodontaltasche 27 palatinal zeichnen
		var string =
			x_dp_27 + ", " + y_al_27_dp + "  "
			+ x_p_27 + ", " + y_al_27_p + "  "
			+ x_mp_27 + ", " + y_al_27_mp + "  "
			+ x_mp_27 + ", " + y_gm_27_mp + "  "
			+ x_p_27 + ", " + y_gm_27_p + "  "
			+ x_dp_27 + ", " + y_gm_27_dp;
		document.getElementById("s_polygon_27_p").setAttribute("points", string);
		// Attachmentniveau 27 palatinal zeichnen
		var string =
			x_dp_27 + ", " + y_al_27_dp + "  "
			+ x_p_27 + ", " + y_al_27_p + "  "
			+ x_mp_27 + ", " + y_al_27_mp;
		document.getElementById("s_polyline_al_27_p").setAttribute("points", string);
		// Margo Gingivae 27 palatinal zeichnen
		var string =
			x_dp_27 + ", " + y_gm_27_dp + "  "
			+ x_p_27 + ", " + y_gm_27_p + "  "
			+ x_mp_27 + ", " + y_gm_27_mp;
		document.getElementById("s_polyline_gm_27_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_27_b').style.display = 'none';
		document.getElementById('s_polyline_al_27_b').style.display = 'none';
		document.getElementById('s_polyline_gm_27_b').style.display = 'none';

		document.getElementById('s_polygon_27_p').style.display = 'none';
		document.getElementById('s_polyline_al_27_p').style.display = 'none';
		document.getElementById('s_polyline_gm_27_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_27) == 1 && Number(jsonObj2.tooth_26) == 1) {
		document.getElementById('s_polygon_inter_27_26_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_27_26_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_27_26_b').style.display = 'block';

		document.getElementById('s_polygon_inter_27_26_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_27_26_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_27_26_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
		var x_db_26 = 961; // distal 26

		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
		var x_dp_26 = 960; // distal 26

		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
		var y_gm_26_db = gm_OK_b + 6.5 * gm_26_db; // Margo Gingivae distobukkal 26
		var y_pd_26_db = 6.5 * pd_26_db; // Sondierungstiefe distobukkal 26

		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
		var y_gm_26_dp = gm_OK_p - 6.5 * gm_26_dp; // Margo Gingivae distopalatinal 26
		var y_pd_26_dp = 6.5 * pd_26_dp; // Sondierungstiefe distopalatinal 26

		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_db = y_gm_26_db - y_pd_26_db; // Attachmentniveau distobukkal 26

		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_26_dp = y_gm_26_dp + y_pd_26_dp; // Attachmentniveau distopalatinal 26

		// Parodontaltasche inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_al_27_mb + "  "
			+ x_db_26 + ", " + y_al_26_db + "  "
			+ x_db_26 + ", " + y_gm_26_db + "  "
			+ x_mb_27 + ", " + y_gm_27_mb;
		document.getElementById("s_polygon_inter_27_26_b").setAttribute("points", string);
		// Attachmentniveau inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_al_27_mb + "  "
			+ x_db_26 + ", " + y_al_26_db;
		document.getElementById("s_polyline_al_inter_27_26_b").setAttribute("points", string);
		// Margo Gingivae inter_27_26 bukkal zeichnen
		var string =
			x_mb_27 + ", " + y_gm_27_mb + "  "
			+ x_db_26 + ", " + y_gm_26_db;
		document.getElementById("s_polyline_gm_inter_27_26_b").setAttribute("points", string);

		// Parodontaltasche inter_27_26 palatinal zeichnen
		var string =
			x_mp_27 + ", " + y_al_27_mp + "  "
			+ x_dp_26 + ", " + y_al_26_dp + "  "
			+ x_dp_26 + ", " + y_gm_26_dp + "  "
			+ x_mp_27 + ", " + y_gm_27_mp;
		document.getElementById("s_polygon_inter_27_26_p").setAttribute("points", string);
		// Attachmentniveau inter_27_26 palatinal zeichnen

		var string =
			x_mp_27 + ", " + y_al_27_mp + "  "
			+ x_dp_26 + ", " + y_al_26_dp;
		document.getElementById("s_polyline_al_inter_27_26_p").setAttribute("points", string);
		// Margo Gingivae inter_27_26 palatinal zeichnen
		var string =
			x_mp_27 + ", " + y_gm_27_mp + "  "
			+ x_dp_26 + ", " + y_gm_26_dp;
		document.getElementById("s_polyline_gm_inter_27_26_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_27_26_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_27_26_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_27_26_b').style.display = 'none';

		document.getElementById('s_polygon_inter_27_26_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_27_26_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_27_26_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_28) == 1 && Number(jsonObj2.tooth_27) == 1) {
		document.getElementById('s_polygon_inter_28_27_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_28_27_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_28_27_b').style.display = 'block';

		document.getElementById('s_polygon_inter_28_27_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_28_27_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_28_27_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
		var x_mb_28 = 1026; // mesial 28

		// Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
		var x_mp_28 = 1028; // mesial 28

		// Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
		var y_gm_28_mb = gm_OK_b + 6.5 * gm_28_mb; // Margo Gingivae mesiobukkal 28
		var y_pd_28_mb = 6.5 * pd_28_mb; // Sondierungstiefe mesiobukkal 28

		// Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
		var y_gm_28_mp = gm_OK_p - 6.5 * gm_28_mp; // Margo Gingivae mesiopalatinal 28
		var y_pd_28_mp = 6.5 * pd_28_mp; // Sondierungstiefe mesiopalatinal 28

		// Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_28_mb = y_gm_28_mb - y_pd_28_mb; // Attachmentniveau mesiobukkal 28

		// Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_28_mp = y_gm_28_mp + y_pd_28_mp; // Attachmentniveau mesiopalatinal 28

		// Parodontaltasche inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_al_28_mb + "  "
			+ x_db_27 + ", " + y_al_27_db + "  "
			+ x_db_27 + ", " + y_gm_27_db + "  "
			+ x_mb_28 + ", " + y_gm_28_mb;
		document.getElementById("s_polygon_inter_28_27_b").setAttribute("points", string);
		// Attachmentniveau inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_al_28_mb + "  "
			+ x_db_27 + ", " + y_al_27_db;
		document.getElementById("s_polyline_al_inter_28_27_b").setAttribute("points", string);
		// Margo Gingivae inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_gm_28_mb + "  "
			+ x_db_27 + ", " + y_gm_27_db;
		document.getElementById("s_polyline_gm_inter_28_27_b").setAttribute("points", string);

		// Parodontaltasche inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_al_28_mp + "  "
			+ x_dp_27 + ", " + y_al_27_dp + "  "
			+ x_dp_27 + ", " + y_gm_27_dp + "  "
			+ x_mp_28 + ", " + y_gm_28_mp;
		document.getElementById("s_polygon_inter_28_27_p").setAttribute("points", string);
		// Attachmentniveau inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_al_28_mp + "  "
			+ x_dp_27 + ", " + y_al_27_dp;
		document.getElementById("s_polyline_al_inter_28_27_p").setAttribute("points", string);
		// Margo Gingivae inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_gm_28_mp + "  "
			+ x_dp_27 + ", " + y_gm_27_dp;
		document.getElementById("s_polyline_gm_inter_28_27_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_28_27_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_28_27_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_28_27_b').style.display = 'none';

		document.getElementById('s_polygon_inter_28_27_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_28_27_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_28_27_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_28) == 1) {
		document.getElementById('s_polygon_28_b').style.display = 'block';
		document.getElementById('s_polyline_al_28_b').style.display = 'block';
		document.getElementById('s_polyline_gm_28_b').style.display = 'block';

		document.getElementById('s_polygon_28_p').style.display = 'block';
		document.getElementById('s_polyline_al_28_p').style.display = 'block';
		document.getElementById('s_polyline_gm_28_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
		var x_db_28 = 1063; // distal 28
		var x_mb_28 = 1026; // mesial 28
		var x_b_28 = (x_db_28 + x_mb_28) / 2; // bukkal 28

		// Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
		var x_dp_28 = 1067; // distal 28
		var x_mp_28 = 1028; // mesial 28
		var x_p_28 = (x_dp_28 + x_mp_28) / 2; // palatinal 28

		// Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
		var y_gm_28_db = gm_OK_b + 6.5 * gm_28_db; // Margo Gingivae distobukkal 28
		var y_gm_28_b = gm_OK_b + 6.5 * gm_28_b; // Margo Gingivae bukkal 28
		var y_gm_28_mb = gm_OK_b + 6.5 * gm_28_mb; // Margo Gingivae mesiobukkal 28
		var y_pd_28_db = 6.5 * pd_28_db; // Sondierungstiefe distobukkal 28
		var y_pd_28_b = 6.5 * pd_28_b; // Sondierungstiefe bukkal 28
		var y_pd_28_mb = 6.5 * pd_28_mb; // Sondierungstiefe mesiobukkal 28

		// Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
		var y_gm_28_dp = gm_OK_p - 6.5 * gm_28_dp; // Margo Gingivae distopalatinal 28
		var y_gm_28_p = gm_OK_p - 6.5 * gm_28_p; // Margo Gingivae palatinal 28
		var y_gm_28_mp = gm_OK_p - 6.5 * gm_28_mp; // Margo Gingivae mesiopalatinal 28
		var y_pd_28_dp = 6.5 * pd_28_dp; // Sondierungstiefe distopalatinal 28
		var y_pd_28_p = 6.5 * pd_28_p; // Sondierungstiefe palatinal 28
		var y_pd_28_mp = 6.5 * pd_28_mp; // Sondierungstiefe mesiopalatinal 28

		// Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_28_db = y_gm_28_db - y_pd_28_db; // Attachmentniveau distobukkal 28
		var y_al_28_b = y_gm_28_b - y_pd_28_b; // Attachmentniveau bukkal 28
		var y_al_28_mb = y_gm_28_mb - y_pd_28_mb; // Attachmentniveau mesiobukkal 28

		// Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_28_dp = y_gm_28_dp + y_pd_28_dp; // Attachmentniveau distopalatinal 28
		var y_al_28_p = y_gm_28_p + y_pd_28_p; // Attachmentniveau palatinal 28
		var y_al_28_mp = y_gm_28_mp + y_pd_28_mp; // Attachmentniveau mesiopalatinal 28

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[28].storeCoordinates(
			x_db_28, x_mb_28, x_dp_28, x_mp_28, x_b_28, x_p_28,
			y_gm_28_db, y_gm_28_b, y_gm_28_mb, y_pd_28_db, y_pd_28_b, y_pd_28_mb,
			y_gm_28_dp, y_gm_28_p, y_gm_28_mp, y_pd_28_dp, y_pd_28_p, y_pd_28_mp,
			y_al_28_db, y_al_28_b, y_al_28_mb, y_al_28_dp, y_al_28_p, y_al_28_mp
		);
		
		// Parodontaltasche 28 bukkal zeichnen
		var string =
			x_db_28 + ", " + y_al_28_db + "  "
			+ x_b_28 + ", " + y_al_28_b + "  "
			+ x_mb_28 + ", " + y_al_28_mb + "  "
			+ x_mb_28 + ", " + y_gm_28_mb + "  "
			+ x_b_28 + ", " + y_gm_28_b + "  "
			+ x_db_28 + ", " + y_gm_28_db;
		document.getElementById("s_polygon_28_b").setAttribute("points", string);
		// Attachmentniveau 28 bukkal zeichnen
		var string =
			x_db_28 + ", " + y_al_28_db + "  "
			+ x_b_28 + ", " + y_al_28_b + "  "
			+ x_mb_28 + ", " + y_al_28_mb;
		document.getElementById("s_polyline_al_28_b").setAttribute("points", string);
		// Margo Gingivae 28 bukkal zeichnen
		var string =
			x_db_28 + ", " + y_gm_28_db + "  "
			+ x_b_28 + ", " + y_gm_28_b + "  "
			+ x_mb_28 + ", " + y_gm_28_mb;
		document.getElementById("s_polyline_gm_28_b").setAttribute("points", string);

		// Parodontaltasche 28 palatinal zeichnen
		var string =
			x_dp_28 + ", " + y_al_28_dp + "  "
			+ x_p_28 + ", " + y_al_28_p + "  "
			+ x_mp_28 + ", " + y_al_28_mp + "  "
			+ x_mp_28 + ", " + y_gm_28_mp + "  "
			+ x_p_28 + ", " + y_gm_28_p + "  "
			+ x_dp_28 + ", " + y_gm_28_dp;
		document.getElementById("s_polygon_28_p").setAttribute("points", string);
		// Attachmentniveau 28 palatinal zeichnen
		var string =
			x_dp_28 + ", " + y_al_28_dp + "  "
			+ x_p_28 + ", " + y_al_28_p + "  "
			+ x_mp_28 + ", " + y_al_28_mp;
		document.getElementById("s_polyline_al_28_p").setAttribute("points", string);
		// Margo Gingivae 28 palatinal zeichnen
		var string =
			x_dp_28 + ", " + y_gm_28_dp + "  "
			+ x_p_28 + ", " + y_gm_28_p + "  "
			+ x_mp_28 + ", " + y_gm_28_mp;
		document.getElementById("s_polyline_gm_28_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_28_b').style.display = 'none';
		document.getElementById('s_polyline_al_28_b').style.display = 'none';
		document.getElementById('s_polyline_gm_28_b').style.display = 'none';

		document.getElementById('s_polygon_28_p').style.display = 'none';
		document.getElementById('s_polyline_al_28_p').style.display = 'none';
		document.getElementById('s_polyline_gm_28_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_28) == 1 && Number(jsonObj2.tooth_27) == 1) {
		document.getElementById('s_polygon_inter_28_27_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_28_27_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_28_27_b').style.display = 'block';

		document.getElementById('s_polygon_inter_28_27_p').style.display = 'block';
		document.getElementById('s_polyline_al_inter_28_27_p').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_28_27_p').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
		var x_db_27 = 1011; // distal 27

		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
		var x_dp_27 = 1015; // distal 27

		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
		var y_gm_27_db = gm_OK_b + 6.5 * gm_27_db; // Margo Gingivae distobukkal 27
		var y_pd_27_db = 6.5 * pd_27_db; // Sondierungstiefe distobukkal 27

		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
		var y_gm_27_dp = gm_OK_p - 6.5 * gm_27_dp; // Margo Gingivae distopalatinal 27
		var y_pd_27_dp = 6.5 * pd_27_dp; // Sondierungstiefe distopalatinal 27

		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_db = y_gm_27_db - y_pd_27_db; // Attachmentniveau distobukkal 27

		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
		var y_al_27_dp = y_gm_27_dp + y_pd_27_dp; // Attachmentniveau distopalatinal 27

		// Parodontaltasche inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_al_28_mb + "  "
			+ x_db_27 + ", " + y_al_27_db + "  "
			+ x_db_27 + ", " + y_gm_27_db + "  "
			+ x_mb_28 + ", " + y_gm_28_mb;
		document.getElementById("s_polygon_inter_28_27_b").setAttribute("points", string);
		// Attachmentniveau inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_al_28_mb + "  "
			+ x_db_27 + ", " + y_al_27_db;
		document.getElementById("s_polyline_al_inter_28_27_b").setAttribute("points", string);
		// Margo Gingivae inter_28_27 bukkal zeichnen
		var string =
			x_mb_28 + ", " + y_gm_28_mb + "  "
			+ x_db_27 + ", " + y_gm_27_db;
		document.getElementById("s_polyline_gm_inter_28_27_b").setAttribute("points", string);

		// Parodontaltasche inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_al_28_mp + "  "
			+ x_dp_27 + ", " + y_al_27_dp + "  "
			+ x_dp_27 + ", " + y_gm_27_dp + "  "
			+ x_mp_28 + ", " + y_gm_28_mp;
		document.getElementById("s_polygon_inter_28_27_p").setAttribute("points", string);
		// Attachmentniveau inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_al_28_mp + "  "
			+ x_dp_27 + ", " + y_al_27_dp;
		document.getElementById("s_polyline_al_inter_28_27_p").setAttribute("points", string);
		// Margo Gingivae inter_28_27 palatinal zeichnen
		var string =
			x_mp_28 + ", " + y_gm_28_mp + "  "
			+ x_dp_27 + ", " + y_gm_27_dp;
		document.getElementById("s_polyline_gm_inter_28_27_p").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_28_27_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_28_27_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_28_27_b').style.display = 'none';

		document.getElementById('s_polygon_inter_28_27_p').style.display = 'none';
		document.getElementById('s_polyline_al_inter_28_27_p').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_28_27_p').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_31) == 1) {
		document.getElementById('s_polygon_31_b').style.display = 'block';
		document.getElementById('s_polyline_al_31_b').style.display = 'block';
		document.getElementById('s_polyline_gm_31_b').style.display = 'block';

		document.getElementById('s_polygon_31_l').style.display = 'block';
		document.getElementById('s_polyline_al_31_l').style.display = 'block';
		document.getElementById('s_polyline_gm_31_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 31 (bukkal) in der Bitmap
		var x_db_31 = 714; // distal 31
		var x_mb_31 = 695; // mesial 31
		var x_b_31 = (x_db_31 + x_mb_31) / 2; // bukkal 31

		// Set der horizontalen Koordinaten von Zahn 31 (lingual) in der Bitmap
		var x_dl_31 = 715; // distal 31
		var x_ml_31 = 698; // mesial 31
		var x_l_31 = (x_dl_31 + x_ml_31) / 2; // lingual 31

		// Set der vertikalen Koordinaten von Zahn 31 (bukkal) aus dem Formular
		var y_gm_31_db = gm_UK_b - 6.05 * gm_31_db; // Margo Gingivae distobukkal 31
		var y_gm_31_b = gm_UK_b - 6.05 * gm_31_b; // Margo Gingivae bukkal 31
		var y_gm_31_mb = gm_UK_b - 6.05 * gm_31_mb; // Margo Gingivae mesiobukkal 31
		var y_pd_31_db = 6.05 * pd_31_db; // Sondierungstiefe distobukkal 31
		var y_pd_31_b = 6.05 * pd_31_b; // Sondierungstiefe bukkal 31
		var y_pd_31_mb = 6.05 * pd_31_mb; // Sondierungstiefe mesiobukkal 31

		// Set der vertikalen Koordinaten von Zahn 31 (lingual) aus dem Formular
		var y_gm_31_dl = gm_UK_l + 6.05 * gm_31_dl; // Margo Gingivae distolingual 31
		var y_gm_31_l = gm_UK_l + 6.05 * gm_31_l; // Margo Gingivae lingual 31
		var y_gm_31_ml = gm_UK_l + 6.05 * gm_31_ml; // Margo Gingivae mesiolingual 31
		var y_pd_31_dl = 6.05 * pd_31_dl; // Sondierungstiefe distolingual 31
		var y_pd_31_l = 6.05 * pd_31_l; // Sondierungstiefe lingual 31
		var y_pd_31_ml = 6.05 * pd_31_ml; // Sondierungstiefe mesiolingual 31

		// Berechnung des Attachmentniveaus 31 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_31_db = y_gm_31_db + y_pd_31_db; // Attachmentniveau distobukkal 31
		var y_al_31_b = y_gm_31_b + y_pd_31_b; // Attachmentniveau bukkal 31
		var y_al_31_mb = y_gm_31_mb + y_pd_31_mb; // Attachmentniveau mesiobukkal 31

		// Berechnung des Attachmentniveaus 31 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_31_dl = y_gm_31_dl - y_pd_31_dl; // Attachmentniveau distolingual 31
		var y_al_31_l = y_gm_31_l - y_pd_31_l; // Attachmentniveau lingual 31
		var y_al_31_ml = y_gm_31_ml - y_pd_31_ml; // Attachmentniveau mesiolingual 31

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[31].storeCoordinates(
			x_db_31, x_mb_31, x_dl_31, x_ml_31, x_b_31, x_l_31,
			y_gm_31_db, y_gm_31_b, y_gm_31_mb, y_pd_31_dl, y_pd_31_b, y_pd_31_ml,
			y_gm_31_dl, y_gm_31_l, y_gm_31_ml, y_pd_31_dl, y_pd_31_l, y_pd_31_ml,
			y_al_31_db, y_al_31_b, y_al_31_mb, y_al_31_dl, y_al_31_l, y_al_31_ml
		);
		
		// Parodontaltasche 31 bukkal zeichnen
		var string =
			x_db_31 + ", " + y_al_31_db + "  "
			+ x_b_31 + ", " + y_al_31_b + "  "
			+ x_mb_31 + ", " + y_al_31_mb + "  "
			+ x_mb_31 + ", " + y_gm_31_mb + "  "
			+ x_b_31 + ", " + y_gm_31_b + "  "
			+ x_db_31 + ", " + y_gm_31_db;
		document.getElementById("s_polygon_31_b").setAttribute("points", string);
		// Attachmentniveau 31 bukkal zeichnen
		var string =
			x_db_31 + ", " + y_al_31_db + "  "
			+ x_b_31 + ", " + y_al_31_b + "  "
			+ x_mb_31 + ", " + y_al_31_mb;
		document.getElementById("s_polyline_al_31_b").setAttribute("points", string);
		// Margo Gingivae 31 bukkal zeichnen
		var string =
			x_db_31 + ", " + y_gm_31_db + "  "
			+ x_b_31 + ", " + y_gm_31_b + "  "
			+ x_mb_31 + ", " + y_gm_31_mb;
		document.getElementById("s_polyline_gm_31_b").setAttribute("points", string);

		// Parodontaltasche 31 lingual zeichnen
		var string =
			x_dl_31 + ", " + y_al_31_dl + "  "
			+ x_l_31 + ", " + y_al_31_l + "  "
			+ x_ml_31 + ", " + y_al_31_ml + "  "
			+ x_ml_31 + ", " + y_gm_31_ml + "  "
			+ x_l_31 + ", " + y_gm_31_l + "  "
			+ x_dl_31 + ", " + y_gm_31_dl;
		document.getElementById("s_polygon_31_l").setAttribute("points", string);
		// Attachmentniveau 31 lingual zeichnen
		var string =
			x_dl_31 + ", " + y_al_31_dl + "  "
			+ x_l_31 + ", " + y_al_31_l + "  "
			+ x_ml_31 + ", " + y_al_31_ml;
		document.getElementById("s_polyline_al_31_l").setAttribute("points", string);
		// Margo Gingivae 31 lingual zeichnen
		var string =
			x_dl_31 + ", " + y_gm_31_dl + "  "
			+ x_l_31 + ", " + y_gm_31_l + "  "
			+ x_ml_31 + ", " + y_gm_31_ml;
		document.getElementById("s_polyline_gm_31_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_31_b').style.display = 'none';
		document.getElementById('s_polyline_al_31_b').style.display = 'none';
		document.getElementById('s_polyline_gm_31_b').style.display = 'none';

		document.getElementById('s_polygon_31_l').style.display = 'none';
		document.getElementById('s_polyline_al_31_l').style.display = 'none';
		document.getElementById('s_polyline_gm_31_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_32) == 1 && Number(jsonObj2.tooth_31) == 1) {
		document.getElementById('s_polygon_inter_32_31_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_32_31_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_32_31_b').style.display = 'block';

		document.getElementById('s_polygon_inter_32_31_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_32_31_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_32_31_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
		var x_mb_32 = 728; // mesial 32

		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
		var x_ml_32 = 733; // mesial 32

		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
		var y_gm_32_mb = gm_UK_b - 6.05 * gm_32_mb; // Margo Gingivae mesiobukkal 32
		var y_pd_32_mb = 6.05 * pd_32_mb; // Sondierungstiefe mesiobukkal 32

		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
		var y_gm_32_ml = gm_UK_l + 6.05 * gm_32_ml; // Margo Gingivae mesiolingual 32
		var y_pd_32_ml = 6.05 * pd_32_ml; // Sondierungstiefe mesiolingual 32

		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_mb = y_gm_32_mb + y_pd_32_mb; // Attachmentniveau mesiobukkal 32

		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_ml = y_gm_32_ml - y_pd_32_ml; // Attachmentniveau mesiolingual 32

		// Parodontaltasche inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_al_32_mb + "  "
			+ x_db_31 + ", " + y_al_31_db + "  "
			+ x_db_31 + ", " + y_gm_31_db + "  "
			+ x_mb_32 + ", " + y_gm_32_mb;
		document.getElementById("s_polygon_inter_32_31_b").setAttribute("points", string);
		// Attachmentniveau inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_al_32_mb + "  "
			+ x_db_31 + ", " + y_al_31_db;
		document.getElementById("s_polyline_al_inter_32_31_b").setAttribute("points", string);
		// Margo Gingivae inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_gm_32_mb + "  "
			+ x_db_31 + ", " + y_gm_31_db;
		document.getElementById("s_polyline_gm_inter_32_31_b").setAttribute("points", string);

		// Parodontaltasche inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_al_32_ml + "  "
			+ x_dl_31 + ", " + y_al_31_dl + "  "
			+ x_dl_31 + ", " + y_gm_31_dl + "  "
			+ x_ml_32 + ", " + y_gm_32_ml;
		document.getElementById("s_polygon_inter_32_31_l").setAttribute("points", string);
		// Attachmentniveau inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_al_32_ml + "  "
			+ x_dl_31 + ", " + y_al_31_dl;
		document.getElementById("s_polyline_al_inter_32_31_l").setAttribute("points", string);
		// Margo Gingivae inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_gm_32_ml + "  "
			+ x_dl_31 + ", " + y_gm_31_dl;
		document.getElementById("s_polyline_gm_inter_32_31_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_32_31_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_32_31_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_32_31_b').style.display = 'none';

		document.getElementById('s_polygon_inter_32_31_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_32_31_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_32_31_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_32) == 1) {
		document.getElementById('s_polygon_32_b').style.display = 'block';
		document.getElementById('s_polyline_al_32_b').style.display = 'block';
		document.getElementById('s_polyline_gm_32_b').style.display = 'block';

		document.getElementById('s_polygon_32_l').style.display = 'block';
		document.getElementById('s_polyline_al_32_l').style.display = 'block';
		document.getElementById('s_polyline_gm_32_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
		var x_db_32 = 748; // distal 32
		var x_mb_32 = 728; // mesial 32
		var x_b_32 = (x_db_32 + x_mb_32) / 2; // bukkal 32

		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
		var x_dl_32 = 751; // distal 32
		var x_ml_32 = 733; // mesial 32
		var x_l_32 = (x_dl_32 + x_ml_32) / 2; // lingual 32

		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
		var y_gm_32_db = gm_UK_b - 6.05 * gm_32_db; // Margo Gingivae distobukkal 32
		var y_gm_32_b = gm_UK_b - 6.05 * gm_32_b; // Margo Gingivae bukkal 32
		var y_gm_32_mb = gm_UK_b - 6.05 * gm_32_mb; // Margo Gingivae mesiobukkal 32
		var y_pd_32_db = 6.05 * pd_32_db; // Sondierungstiefe distobukkal 32
		var y_pd_32_b = 6.05 * pd_32_b; // Sondierungstiefe bukkal 32
		var y_pd_32_mb = 6.05 * pd_32_mb; // Sondierungstiefe mesiobukkal 32

		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
		var y_gm_32_dl = gm_UK_l + 6.05 * gm_32_dl; // Margo Gingivae distolingual 32
		var y_gm_32_l = gm_UK_l + 6.05 * gm_32_l; // Margo Gingivae lingual 32
		var y_gm_32_ml = gm_UK_l + 6.05 * gm_32_ml; // Margo Gingivae mesiolingual 32
		var y_pd_32_dl = 6.05 * pd_32_dl; // Sondierungstiefe distolingual 32
		var y_pd_32_l = 6.05 * pd_32_l; // Sondierungstiefe lingual 32
		var y_pd_32_ml = 6.05 * pd_32_ml; // Sondierungstiefe mesiolingual 32

		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_db = y_gm_32_db + y_pd_32_db; // Attachmentniveau distobukkal 32
		var y_al_32_b = y_gm_32_b + y_pd_32_b; // Attachmentniveau bukkal 32
		var y_al_32_mb = y_gm_32_mb + y_pd_32_mb; // Attachmentniveau mesiobukkal 32

		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_dl = y_gm_32_dl - y_pd_32_dl; // Attachmentniveau distolingual 32
		var y_al_32_l = y_gm_32_l - y_pd_32_l; // Attachmentniveau lingual 32
		var y_al_32_ml = y_gm_32_ml - y_pd_32_ml; // Attachmentniveau mesiolingual 32

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[32].storeCoordinates(
			x_db_32, x_mb_32, x_dl_32, x_ml_32, x_b_32, x_l_32,
			y_gm_32_db, y_gm_32_b, y_gm_32_mb, y_pd_32_dl, y_pd_32_b, y_pd_32_ml,
			y_gm_32_dl, y_gm_32_l, y_gm_32_ml, y_pd_32_dl, y_pd_32_l, y_pd_32_ml,
			y_al_32_db, y_al_32_b, y_al_32_mb, y_al_32_dl, y_al_32_l, y_al_32_ml
		);

		// Parodontaltasche 32 bukkal zeichnen
		var string =
			x_db_32 + ", " + y_al_32_db + "  "
			+ x_b_32 + ", " + y_al_32_b + "  "
			+ x_mb_32 + ", " + y_al_32_mb + "  "
			+ x_mb_32 + ", " + y_gm_32_mb + "  "
			+ x_b_32 + ", " + y_gm_32_b + "  "
			+ x_db_32 + ", " + y_gm_32_db;
		document.getElementById("s_polygon_32_b").setAttribute("points", string);
		// Attachmentniveau 32 bukkal zeichnen
		var string =
			x_db_32 + ", " + y_al_32_db + "  "
			+ x_b_32 + ", " + y_al_32_b + "  "
			+ x_mb_32 + ", " + y_al_32_mb;
		document.getElementById("s_polyline_al_32_b").setAttribute("points", string);
		// Margo Gingivae 32 bukkal zeichnen
		var string =
			x_db_32 + ", " + y_gm_32_db + "  "
			+ x_b_32 + ", " + y_gm_32_b + "  "
			+ x_mb_32 + ", " + y_gm_32_mb;
		document.getElementById("s_polyline_gm_32_b").setAttribute("points", string);

		// Parodontaltasche 32 lingual zeichnen
		var string =
			x_dl_32 + ", " + y_al_32_dl + "  "
			+ x_l_32 + ", " + y_al_32_l + "  "
			+ x_ml_32 + ", " + y_al_32_ml + "  "
			+ x_ml_32 + ", " + y_gm_32_ml + "  "
			+ x_l_32 + ", " + y_gm_32_l + "  "
			+ x_dl_32 + ", " + y_gm_32_dl;
		document.getElementById("s_polygon_32_l").setAttribute("points", string);
		// Attachmentniveau 32 lingual zeichnen
		var string =
			x_dl_32 + ", " + y_al_32_dl + "  "
			+ x_l_32 + ", " + y_al_32_l + "  "
			+ x_ml_32 + ", " + y_al_32_ml;
		document.getElementById("s_polyline_al_32_l").setAttribute("points", string);
		// Margo Gingivae 32 lingual zeichnen
		var string =
			x_dl_32 + ", " + y_gm_32_dl + "  "
			+ x_l_32 + ", " + y_gm_32_l + "  "
			+ x_ml_32 + ", " + y_gm_32_ml;
		document.getElementById("s_polyline_gm_32_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_32_b').style.display = 'none';
		document.getElementById('s_polyline_al_32_b').style.display = 'none';
		document.getElementById('s_polyline_gm_32_b').style.display = 'none';

		document.getElementById('s_polygon_32_l').style.display = 'none';
		document.getElementById('s_polyline_al_32_l').style.display = 'none';
		document.getElementById('s_polyline_gm_32_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_32) == 1 && Number(jsonObj2.tooth_31) == 1) {
		document.getElementById('s_polygon_inter_32_31_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_32_31_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_32_31_b').style.display = 'block';

		document.getElementById('s_polygon_inter_32_31_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_32_31_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_32_31_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 31 (bukkal) in der Bitmap
		var x_db_31 = 714; // distal 31

		// Set der horizontalen Koordinaten von Zahn 31 (lingual) in der Bitmap
		var x_dl_31 = 715; // distal 31

		// Set der vertikalen Koordinaten von Zahn 31 (bukkal) aus dem Formular
		var y_gm_31_db = gm_UK_b - 6.05 * gm_31_db; // Margo Gingivae distobukkal 31
		var y_pd_31_db = 6.05 * pd_31_db; // Sondierungstiefe distobukkal 31

		// Set der vertikalen Koordinaten von Zahn 31 (lingual) aus dem Formular
		var y_gm_31_dl = gm_UK_l + 6.05 * gm_31_dl; // Margo Gingivae distolingual 31
		var y_pd_31_dl = 6.05 * pd_31_dl; // Sondierungstiefe distolingual 31

		// Berechnung des Attachmentniveaus 31 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_31_db = y_gm_31_db + y_pd_31_db; // Attachmentniveau distobukkal 31

		// Berechnung des Attachmentniveaus 31 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_31_dl = y_gm_31_dl - y_pd_31_dl; // Attachmentniveau distolingual 31

		// Parodontaltasche inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_al_32_mb + "  "
			+ x_db_31 + ", " + y_al_31_db + "  "
			+ x_db_31 + ", " + y_gm_31_db + "  "
			+ x_mb_32 + ", " + y_gm_32_mb;
		document.getElementById("s_polygon_inter_32_31_b").setAttribute("points", string);
		// Attachmentniveau inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_al_32_mb + "  "
			+ x_db_31 + ", " + y_al_31_db;
		document.getElementById("s_polyline_al_inter_32_31_b").setAttribute("points", string);
		// Margo Gingivae inter_32_31 bukkal zeichnen
		var string =
			x_mb_32 + ", " + y_gm_32_mb + "  "
			+ x_db_31 + ", " + y_gm_31_db;
		document.getElementById("s_polyline_gm_inter_32_31_b").setAttribute("points", string);

		// Parodontaltasche inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_al_32_ml + "  "
			+ x_dl_31 + ", " + y_al_31_dl + "  "
			+ x_dl_31 + ", " + y_gm_31_dl + "  "
			+ x_ml_32 + ", " + y_gm_32_ml;
		document.getElementById("s_polygon_inter_32_31_l").setAttribute("points", string);
		// Attachmentniveau inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_al_32_ml + "  "
			+ x_dl_31 + ", " + y_al_31_dl;
		document.getElementById("s_polyline_al_inter_32_31_l").setAttribute("points", string);
		// Margo Gingivae inter_32_31 lingual zeichnen
		var string =
			x_ml_32 + ", " + y_gm_32_ml + "  "
			+ x_dl_31 + ", " + y_gm_31_dl;
		document.getElementById("s_polyline_gm_inter_32_31_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_32_31_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_32_31_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_32_31_b').style.display = 'none';

		document.getElementById('s_polygon_inter_32_31_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_32_31_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_32_31_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_33) == 1 && Number(jsonObj2.tooth_32) == 1) {
		document.getElementById('s_polygon_inter_33_32_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_33_32_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_33_32_b').style.display = 'block';

		document.getElementById('s_polygon_inter_33_32_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_33_32_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_33_32_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 33 (bukkal) in der Bitmap
		var x_mb_33 = 766; // mesial 33

		// Set der horizontalen Koordinaten von Zahn 33 (lingual) in der Bitmap
		var x_ml_33 = 767; // mesial 33

		// Set der vertikalen Koordinaten von Zahn 33 (bukkal) aus dem Formular
		var y_gm_33_mb = gm_UK_b - 6.05 * gm_33_mb; // Margo Gingivae mesiobukkal 33
		var y_pd_33_mb = 6.05 * pd_33_mb; // Sondierungstiefe mesiobukkal 33

		// Set der vertikalen Koordinaten von Zahn 33 (lingual) aus dem Formular
		var y_gm_33_ml = gm_UK_l + 6.05 * gm_33_ml; // Margo Gingivae mesiolingual 33
		var y_pd_33_ml = 6.05 * pd_33_ml; // Sondierungstiefe mesiolingual 33

		// Berechnung des Attachmentniveaus 33 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_mb = y_gm_33_mb + y_pd_33_mb; // Attachmentniveau mesiobukkal 33

		// Berechnung des Attachmentniveaus 33 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_ml = y_gm_33_ml - y_pd_33_ml; // Attachmentniveau mesiolingual 33

		// Parodontaltasche inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_al_33_mb + "  "
			+ x_db_32 + ", " + y_al_32_db + "  "
			+ x_db_32 + ", " + y_gm_32_db + "  "
			+ x_mb_33 + ", " + y_gm_33_mb;
		document.getElementById("s_polygon_inter_33_32_b").setAttribute("points", string);
		// Attachmentniveau inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_al_33_mb + "  "
			+ x_db_32 + ", " + y_al_32_db;
		document.getElementById("s_polyline_al_inter_33_32_b").setAttribute("points", string);
		// Margo Gingivae inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_gm_33_mb + "  "
			+ x_db_32 + ", " + y_gm_32_db;
		document.getElementById("s_polyline_gm_inter_33_32_b").setAttribute("points", string);

		// Parodontaltasche inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_al_33_ml + "  "
			+ x_dl_32 + ", " + y_al_32_dl + "  "
			+ x_dl_32 + ", " + y_gm_32_dl + "  "
			+ x_ml_33 + ", " + y_gm_33_ml;
		document.getElementById("s_polygon_inter_33_32_l").setAttribute("points", string);
		// Attachmentniveau inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_al_33_ml + "  "
			+ x_dl_32 + ", " + y_al_32_dl;
		document.getElementById("s_polyline_al_inter_33_32_l").setAttribute("points", string);
		// Margo Gingivae inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_gm_33_ml + "  "
			+ x_dl_32 + ", " + y_gm_32_dl;
		document.getElementById("s_polyline_gm_inter_33_32_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_33_32_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_33_32_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_33_32_b').style.display = 'none';

		document.getElementById('s_polygon_inter_33_32_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_33_32_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_33_32_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_33) == 1) {
		document.getElementById('s_polygon_33_b').style.display = 'block';
		document.getElementById('s_polyline_al_33_b').style.display = 'block';
		document.getElementById('s_polyline_gm_33_b').style.display = 'block';

		document.getElementById('s_polygon_33_l').style.display = 'block';
		document.getElementById('s_polyline_al_33_l').style.display = 'block';
		document.getElementById('s_polyline_gm_33_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 33 (bukkal) in der Bitmap
		var x_db_33 = 787; // distal 33
		var x_mb_33 = 766; // mesial 33
		var x_b_33 = (x_db_33 + x_mb_33) / 2; // bukkal 33

		// Set der horizontalen Koordinaten von Zahn 33 (lingual) in der Bitmap
		var x_dl_33 = 787; // distal 33
		var x_ml_33 = 767; // mesial 33
		var x_l_33 = (x_dl_33 + x_ml_33) / 2; // lingual 33

		// Set der vertikalen Koordinaten von Zahn 33 (bukkal) aus dem Formular
		var y_gm_33_db = gm_UK_b - 6.05 * gm_33_db; // Margo Gingivae distobukkal 33
		var y_gm_33_b = gm_UK_b - 6.05 * gm_33_b; // Margo Gingivae bukkal 33
		var y_gm_33_mb = gm_UK_b - 6.05 * gm_33_mb; // Margo Gingivae mesiobukkal 33
		var y_pd_33_db = 6.05 * pd_33_db; // Sondierungstiefe distobukkal 33
		var y_pd_33_b = 6.05 * pd_33_b; // Sondierungstiefe bukkal 33
		var y_pd_33_mb = 6.05 * pd_33_mb; // Sondierungstiefe mesiobukkal 33

		// Set der vertikalen Koordinaten von Zahn 33 (lingual) aus dem Formular
		var y_gm_33_dl = gm_UK_l + 6.05 * gm_33_dl; // Margo Gingivae distolingual 33
		var y_gm_33_l = gm_UK_l + 6.05 * gm_33_l; // Margo Gingivae lingual 33
		var y_gm_33_ml = gm_UK_l + 6.05 * gm_33_ml; // Margo Gingivae mesiolingual 33
		var y_pd_33_dl = 6.05 * pd_33_dl; // Sondierungstiefe distolingual 33
		var y_pd_33_l = 6.05 * pd_33_l; // Sondierungstiefe lingual 33
		var y_pd_33_ml = 6.05 * pd_33_ml; // Sondierungstiefe mesiolingual 33

		// Berechnung des Attachmentniveaus 33 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_db = y_gm_33_db + y_pd_33_db; // Attachmentniveau distobukkal 33
		var y_al_33_b = y_gm_33_b + y_pd_33_b; // Attachmentniveau bukkal 33
		var y_al_33_mb = y_gm_33_mb + y_pd_33_mb; // Attachmentniveau mesiobukkal 33

		// Berechnung des Attachmentniveaus 33 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_dl = y_gm_33_dl - y_pd_33_dl; // Attachmentniveau distolingual 33
		var y_al_33_l = y_gm_33_l - y_pd_33_l; // Attachmentniveau lingual 33
		var y_al_33_ml = y_gm_33_ml - y_pd_33_ml; // Attachmentniveau mesiolingual 33

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[33].storeCoordinates(
			x_db_33, x_mb_33, x_dl_33, x_ml_33, x_b_33, x_l_33,
			y_gm_33_db, y_gm_33_b, y_gm_33_mb, y_pd_33_dl, y_pd_33_b, y_pd_33_ml,
			y_gm_33_dl, y_gm_33_l, y_gm_33_ml, y_pd_33_dl, y_pd_33_l, y_pd_33_ml,
			y_al_33_db, y_al_33_b, y_al_33_mb, y_al_33_dl, y_al_33_l, y_al_33_ml
		);

		// Parodontaltasche 33 bukkal zeichnen
		var string =
			x_db_33 + ", " + y_al_33_db + "  "
			+ x_b_33 + ", " + y_al_33_b + "  "
			+ x_mb_33 + ", " + y_al_33_mb + "  "
			+ x_mb_33 + ", " + y_gm_33_mb + "  "
			+ x_b_33 + ", " + y_gm_33_b + "  "
			+ x_db_33 + ", " + y_gm_33_db;
		document.getElementById("s_polygon_33_b").setAttribute("points", string);
		// Attachmentniveau 33 bukkal zeichnen
		var string =
			x_db_33 + ", " + y_al_33_db + "  "
			+ x_b_33 + ", " + y_al_33_b + "  "
			+ x_mb_33 + ", " + y_al_33_mb;
		document.getElementById("s_polyline_al_33_b").setAttribute("points", string);
		// Margo Gingivae 33 bukkal zeichnen
		var string =
			x_db_33 + ", " + y_gm_33_db + "  "
			+ x_b_33 + ", " + y_gm_33_b + "  "
			+ x_mb_33 + ", " + y_gm_33_mb;
		document.getElementById("s_polyline_gm_33_b").setAttribute("points", string);

		// Parodontaltasche 33 lingual zeichnen
		var string =
			x_dl_33 + ", " + y_al_33_dl + "  "
			+ x_l_33 + ", " + y_al_33_l + "  "
			+ x_ml_33 + ", " + y_al_33_ml + "  "
			+ x_ml_33 + ", " + y_gm_33_ml + "  "
			+ x_l_33 + ", " + y_gm_33_l + "  "
			+ x_dl_33 + ", " + y_gm_33_dl;
		document.getElementById("s_polygon_33_l").setAttribute("points", string);
		// Attachmentniveau 33 lingual zeichnen
		var string =
			x_dl_33 + ", " + y_al_33_dl + "  "
			+ x_l_33 + ", " + y_al_33_l + "  "
			+ x_ml_33 + ", " + y_al_33_ml;
		document.getElementById("s_polyline_al_33_l").setAttribute("points", string);
		// Margo Gingivae 33 lingual zeichnen
		var string =
			x_dl_33 + ", " + y_gm_33_dl + "  "
			+ x_l_33 + ", " + y_gm_33_l + "  "
			+ x_ml_33 + ", " + y_gm_33_ml;
		document.getElementById("s_polyline_gm_33_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_33_b').style.display = 'none';
		document.getElementById('s_polyline_al_33_b').style.display = 'none';
		document.getElementById('s_polyline_gm_33_b').style.display = 'none';

		document.getElementById('s_polygon_33_l').style.display = 'none';
		document.getElementById('s_polyline_al_33_l').style.display = 'none';
		document.getElementById('s_polyline_gm_33_l').style.display = 'none';
	}
	
	if (Number(jsonObj2.tooth_33) == 1 && Number(jsonObj2.tooth_32) == 1) {
		document.getElementById('s_polygon_inter_33_32_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_33_32_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_33_32_b').style.display = 'block';

		document.getElementById('s_polygon_inter_33_32_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_33_32_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_33_32_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
		var x_db_32 = 748; // distal 32

		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
		var x_dl_32 = 751; // distal 32

		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
		var y_gm_32_db = gm_UK_b - 6.05 * gm_32_db; // Margo Gingivae distobukkal 32
		var y_pd_32_db = 6.05 * pd_32_db; // Sondierungstiefe distobukkal 32

		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
		var y_gm_32_dl = gm_UK_l + 6.05 * gm_32_dl; // Margo Gingivae distolingual 32
		var y_pd_32_dl = 6.05 * pd_32_dl; // Sondierungstiefe distolingual 32

		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_db = y_gm_32_db + y_pd_32_db; // Attachmentniveau distobukkal 32

		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_32_dl = y_gm_32_dl - y_pd_32_dl; // Attachmentniveau distolingual 32

		// Parodontaltasche inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_al_33_mb + "  "
			+ x_db_32 + ", " + y_al_32_db + "  "
			+ x_db_32 + ", " + y_gm_32_db + "  "
			+ x_mb_33 + ", " + y_gm_33_mb;
		document.getElementById("s_polygon_inter_33_32_b").setAttribute("points", string);
		// Attachmentniveau inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_al_33_mb + "  "
			+ x_db_32 + ", " + y_al_32_db;
		document.getElementById("s_polyline_al_inter_33_32_b").setAttribute("points", string);
		// Margo Gingivae inter_33_32 bukkal zeichnen
		var string =
			x_mb_33 + ", " + y_gm_33_mb + "  "
			+ x_db_32 + ", " + y_gm_32_db;
		document.getElementById("s_polyline_gm_inter_33_32_b").setAttribute("points", string);

		// Parodontaltasche inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_al_33_ml + "  "
			+ x_dl_32 + ", " + y_al_32_dl + "  "
			+ x_dl_32 + ", " + y_gm_32_dl + "  "
			+ x_ml_33 + ", " + y_gm_33_ml;
		document.getElementById("s_polygon_inter_33_32_l").setAttribute("points", string);
		// Attachmentniveau inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_al_33_ml + "  "
			+ x_dl_32 + ", " + y_al_32_dl;
		document.getElementById("s_polyline_al_inter_33_32_l").setAttribute("points", string);
		// Margo Gingivae inter_33_32 lingual zeichnen
		var string =
			x_ml_33 + ", " + y_gm_33_ml + "  "
			+ x_dl_32 + ", " + y_gm_32_dl;
		document.getElementById("s_polyline_gm_inter_33_32_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_33_32_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_33_32_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_33_32_b').style.display = 'none';

		document.getElementById('s_polygon_inter_33_32_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_33_32_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_33_32_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_34) == 1 && Number(jsonObj2.tooth_33) == 1) {
		document.getElementById('s_polygon_inter_34_33_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_34_33_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_34_33_b').style.display = 'block';

		document.getElementById('s_polygon_inter_34_33_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_34_33_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_34_33_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
		var x_mb_34 = 805; // mesial 34

		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
		var x_ml_34 = 804; // mesial 34

		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
		var y_gm_34_mb = gm_UK_b - 6.05 * gm_34_mb; // Margo Gingivae mesiobukkal 34
		var y_pd_34_mb = 6.05 * pd_34_mb; // Sondierungstiefe mesiobukkal 34

		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
		var y_gm_34_ml = gm_UK_l + 6.05 * gm_34_ml; // Margo Gingivae mesiolingual 34
		var y_pd_34_ml = 6.05 * pd_34_ml; // Sondierungstiefe mesiolingual 34

		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_mb = y_gm_34_mb + y_pd_34_mb; // Attachmentniveau mesiobukkal 34

		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_ml = y_gm_34_ml - y_pd_34_ml; // Attachmentniveau mesiolingual 34

		// Parodontaltasche inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_al_34_mb + "  "
			+ x_db_33 + ", " + y_al_33_db + "  "
			+ x_db_33 + ", " + y_gm_33_db + "  "
			+ x_mb_34 + ", " + y_gm_34_mb;
		document.getElementById("s_polygon_inter_34_33_b").setAttribute("points", string);
		// Attachmentniveau inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_al_34_mb + "  "
			+ x_db_33 + ", " + y_al_33_db;
		document.getElementById("s_polyline_al_inter_34_33_b").setAttribute("points", string);
		// Margo Gingivae inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_gm_34_mb + "  "
			+ x_db_33 + ", " + y_gm_33_db;
		document.getElementById("s_polyline_gm_inter_34_33_b").setAttribute("points", string);

		// Parodontaltasche inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_al_34_ml + "  "
			+ x_dl_33 + ", " + y_al_33_dl + "  "
			+ x_dl_33 + ", " + y_gm_33_dl + "  "
			+ x_ml_34 + ", " + y_gm_34_ml;
		document.getElementById("s_polygon_inter_34_33_l").setAttribute("points", string);
		// Attachmentniveau inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_al_34_ml + "  "
			+ x_dl_33 + ", " + y_al_33_dl;
		document.getElementById("s_polyline_al_inter_34_33_l").setAttribute("points", string);
		// Margo Gingivae inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_gm_34_ml + "  "
			+ x_dl_33 + ", " + y_gm_33_dl;
		document.getElementById("s_polyline_gm_inter_34_33_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_34_33_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_34_33_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_34_33_b').style.display = 'none';

		document.getElementById('s_polygon_inter_34_33_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_34_33_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_34_33_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_34) == 1) {
		document.getElementById('s_polygon_34_b').style.display = 'block';
		document.getElementById('s_polyline_al_34_b').style.display = 'block';
		document.getElementById('s_polyline_gm_34_b').style.display = 'block';

		document.getElementById('s_polygon_34_l').style.display = 'block';
		document.getElementById('s_polyline_al_34_l').style.display = 'block';
		document.getElementById('s_polyline_gm_34_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
		var x_db_34 = 824; // distal 34
		var x_mb_34 = 805; // mesial 34
		var x_b_34 = (x_db_34 + x_mb_34) / 2; // bukkal 34

		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
		var x_dl_34 = 827; // distal 34
		var x_ml_34 = 804; // mesial 34
		var x_l_34 = (x_dl_34 + x_ml_34) / 2; // lingual 34

		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
		var y_gm_34_db = gm_UK_b - 6.05 * gm_34_db; // Margo Gingivae distobukkal 34
		var y_gm_34_b = gm_UK_b - 6.05 * gm_34_b; // Margo Gingivae bukkal 34
		var y_gm_34_mb = gm_UK_b - 6.05 * gm_34_mb; // Margo Gingivae mesiobukkal 34
		var y_pd_34_db = 6.05 * pd_34_db; // Sondierungstiefe distobukkal 34
		var y_pd_34_b = 6.05 * pd_34_b; // Sondierungstiefe bukkal 34
		var y_pd_34_mb = 6.05 * pd_34_mb; // Sondierungstiefe mesiobukkal 34

		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
		var y_gm_34_dl = gm_UK_l + 6.05 * gm_34_dl; // Margo Gingivae distolingual 34
		var y_gm_34_l = gm_UK_l + 6.05 * gm_34_l; // Margo Gingivae lingual 34
		var y_gm_34_ml = gm_UK_l + 6.05 * gm_34_ml; // Margo Gingivae mesiolingual 34
		var y_pd_34_dl = 6.05 * pd_34_dl; // Sondierungstiefe distolingual 34
		var y_pd_34_l = 6.05 * pd_34_l; // Sondierungstiefe lingual 34
		var y_pd_34_ml = 6.05 * pd_34_ml; // Sondierungstiefe mesiolingual 34

		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_db = y_gm_34_db + y_pd_34_db; // Attachmentniveau distobukkal 34
		var y_al_34_b = y_gm_34_b + y_pd_34_b; // Attachmentniveau bukkal 34
		var y_al_34_mb = y_gm_34_mb + y_pd_34_mb; // Attachmentniveau mesiobukkal 34

		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_dl = y_gm_34_dl - y_pd_34_dl; // Attachmentniveau distolingual 34
		var y_al_34_l = y_gm_34_l - y_pd_34_l; // Attachmentniveau lingual 34
		var y_al_34_ml = y_gm_34_ml - y_pd_34_ml; // Attachmentniveau mesiolingual 34

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[34].storeCoordinates(
			x_db_34, x_mb_34, x_dl_34, x_ml_34, x_b_34, x_l_34,
			y_gm_34_db, y_gm_34_b, y_gm_34_mb, y_pd_34_dl, y_pd_34_b, y_pd_34_ml,
			y_gm_34_dl, y_gm_34_l, y_gm_34_ml, y_pd_34_dl, y_pd_34_l, y_pd_34_ml,
			y_al_34_db, y_al_34_b, y_al_34_mb, y_al_34_dl, y_al_34_l, y_al_34_ml
		);

		// Parodontaltasche 34 bukkal zeichnen
		var string =
			x_db_34 + ", " + y_al_34_db + "  "
			+ x_b_34 + ", " + y_al_34_b + "  "
			+ x_mb_34 + ", " + y_al_34_mb + "  "
			+ x_mb_34 + ", " + y_gm_34_mb + "  "
			+ x_b_34 + ", " + y_gm_34_b + "  "
			+ x_db_34 + ", " + y_gm_34_db;
		document.getElementById("s_polygon_34_b").setAttribute("points", string);
		// Attachmentniveau 34 bukkal zeichnen
		var string =
			x_db_34 + ", " + y_al_34_db + "  "
			+ x_b_34 + ", " + y_al_34_b + "  "
			+ x_mb_34 + ", " + y_al_34_mb;
		document.getElementById("s_polyline_al_34_b").setAttribute("points", string);
		// Margo Gingivae 34 bukkal zeichnen
		var string =
			x_db_34 + ", " + y_gm_34_db + "  "
			+ x_b_34 + ", " + y_gm_34_b + "  "
			+ x_mb_34 + ", " + y_gm_34_mb;
		document.getElementById("s_polyline_gm_34_b").setAttribute("points", string);

		// Parodontaltasche 34 lingual zeichnen
		var string =
			x_dl_34 + ", " + y_al_34_dl + "  "
			+ x_l_34 + ", " + y_al_34_l + "  "
			+ x_ml_34 + ", " + y_al_34_ml + "  "
			+ x_ml_34 + ", " + y_gm_34_ml + "  "
			+ x_l_34 + ", " + y_gm_34_l + "  "
			+ x_dl_34 + ", " + y_gm_34_dl;
		document.getElementById("s_polygon_34_l").setAttribute("points", string);
		// Attachmentniveau 34 lingual zeichnen
		var string =
			x_dl_34 + ", " + y_al_34_dl + "  "
			+ x_l_34 + ", " + y_al_34_l + "  "
			+ x_ml_34 + ", " + y_al_34_ml;
		document.getElementById("s_polyline_al_34_l").setAttribute("points", string);
		// Margo Gingivae 34 lingual zeichnen
		var string =
			x_dl_34 + ", " + y_gm_34_dl + "  "
			+ x_l_34 + ", " + y_gm_34_l + "  "
			+ x_ml_34 + ", " + y_gm_34_ml;
		document.getElementById("s_polyline_gm_34_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_34_b').style.display = 'none';
		document.getElementById('s_polyline_al_34_b').style.display = 'none';
		document.getElementById('s_polyline_gm_34_b').style.display = 'none';

		document.getElementById('s_polygon_34_l').style.display = 'none';
		document.getElementById('s_polyline_al_34_l').style.display = 'none';
		document.getElementById('s_polyline_gm_34_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_34) == 1 && Number(jsonObj2.tooth_33) == 1) {
		document.getElementById('s_polygon_inter_34_33_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_34_33_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_34_33_b').style.display = 'block';

		document.getElementById('s_polygon_inter_34_33_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_34_33_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_34_33_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
		var x_db_33 = 787; // distal 43

		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
		var x_dl_33 = 787; // distal 43

		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
		var y_gm_33_db = gm_UK_b - 6.05 * gm_33_db; // Margo Gingivae distobukkal 43
		var y_pd_33_db = 6.05 * pd_33_db; // Sondierungstiefe distobukkal 43

		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
		var y_gm_33_dl = gm_UK_l + 6.05 * gm_33_dl; // Margo Gingivae distolingual 43
		var y_pd_33_dl = 6.05 * pd_33_dl; // Sondierungstiefe distolingual 43

		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_db = y_gm_33_db + y_pd_33_db; // Attachmentniveau distobukkal 43

		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_33_dl = y_gm_33_dl - y_pd_33_dl; // Attachmentniveau distolingual 43

		// Parodontaltasche inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_al_34_mb + "  "
			+ x_db_33 + ", " + y_al_33_db + "  "
			+ x_db_33 + ", " + y_gm_33_db + "  "
			+ x_mb_34 + ", " + y_gm_34_mb;
		document.getElementById("s_polygon_inter_34_33_b").setAttribute("points", string);
		// Attachmentniveau inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_al_34_mb + "  "
			+ x_db_33 + ", " + y_al_33_db;
		document.getElementById("s_polyline_al_inter_34_33_b").setAttribute("points", string);
		// Margo Gingivae inter_34_33 bukkal zeichnen
		var string =
			x_mb_34 + ", " + y_gm_34_mb + "  "
			+ x_db_33 + ", " + y_gm_33_db;
		document.getElementById("s_polyline_gm_inter_34_33_b").setAttribute("points", string);

		// Parodontaltasche inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_al_34_ml + "  "
			+ x_dl_33 + ", " + y_al_33_dl + "  "
			+ x_dl_33 + ", " + y_gm_33_dl + "  "
			+ x_ml_34 + ", " + y_gm_34_ml;
		document.getElementById("s_polygon_inter_34_33_l").setAttribute("points", string);
		// Attachmentniveau inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_al_34_ml + "  "
			+ x_dl_33 + ", " + y_al_33_dl;
		document.getElementById("s_polyline_al_inter_34_33_l").setAttribute("points", string);
		// Margo Gingivae inter_34_33 lingual zeichnen
		var string =
			x_ml_34 + ", " + y_gm_34_ml + "  "
			+ x_dl_33 + ", " + y_gm_33_dl;
		document.getElementById("s_polyline_gm_inter_34_33_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_34_33_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_34_33_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_34_33_b').style.display = 'none';

		document.getElementById('s_polygon_inter_34_33_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_34_33_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_34_33_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_35) == 1 && Number(jsonObj2.tooth_34) == 1) {
		document.getElementById('s_polygon_inter_35_34_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_35_34_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_35_34_b').style.display = 'block';

		document.getElementById('s_polygon_inter_35_34_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_35_34_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_35_34_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
		var x_mb_35 = 845; // mesial 45

		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
		var x_ml_35 = 845; // mesial 45

		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
		var y_gm_35_mb = gm_UK_b - 6.05 * gm_35_mb; // Margo Gingivae mesiobukkal 45
		var y_pd_35_mb = 6.05 * pd_35_mb; // Sondierungstiefe mesiobukkal 45

		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
		var y_gm_35_ml = gm_UK_l + 6.05 * gm_35_ml; // Margo Gingivae mesiolingual 45
		var y_pd_35_ml = 6.05 * pd_35_ml; // Sondierungstiefe mesiolingual 45

		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_mb = y_gm_35_mb + y_pd_35_mb; // Attachmentniveau mesiobukkal 45

		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_ml = y_gm_35_ml - y_pd_35_ml; // Attachmentniveau mesiolingual 45

		// Parodontaltasche inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_al_35_mb + "  "
			+ x_db_34 + ", " + y_al_34_db + "  "
			+ x_db_34 + ", " + y_gm_34_db + "  "
			+ x_mb_35 + ", " + y_gm_35_mb;
		document.getElementById("s_polygon_inter_35_34_b").setAttribute("points", string);
		// Attachmentniveau inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_al_35_mb + "  "
			+ x_db_34 + ", " + y_al_34_db;
		document.getElementById("s_polyline_al_inter_35_34_b").setAttribute("points", string);
		// Margo Gingivae inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_gm_35_mb + "  "
			+ x_db_34 + ", " + y_gm_34_db;
		document.getElementById("s_polyline_gm_inter_35_34_b").setAttribute("points", string);

		// Parodontaltasche inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_al_35_ml + "  "
			+ x_dl_34 + ", " + y_al_34_dl + "  "
			+ x_dl_34 + ", " + y_gm_34_dl + "  "
			+ x_ml_35 + ", " + y_gm_35_ml;
		document.getElementById("s_polygon_inter_35_34_l").setAttribute("points", string);
		// Attachmentniveau inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_al_35_ml + "  "
			+ x_dl_34 + ", " + y_al_34_dl;
		document.getElementById("s_polyline_al_inter_35_34_l").setAttribute("points", string);
		// Margo Gingivae inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_gm_35_ml + "  "
			+ x_dl_34 + ", " + y_gm_34_dl;
		document.getElementById("s_polyline_gm_inter_35_34_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_35_34_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_35_34_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_35_34_b').style.display = 'none';

		document.getElementById('s_polygon_inter_35_34_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_35_34_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_35_34_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_35) == 1) {
		document.getElementById('s_polygon_35_b').style.display = 'block';
		document.getElementById('s_polyline_al_35_b').style.display = 'block';
		document.getElementById('s_polyline_gm_35_b').style.display = 'block';

		document.getElementById('s_polygon_35_l').style.display = 'block';
		document.getElementById('s_polyline_al_35_l').style.display = 'block';
		document.getElementById('s_polyline_gm_35_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 35 (bukkal) in der Bitmap
		var x_db_35 = 864; // distal 35
		var x_mb_35 = 845; // mesial 35
		var x_b_35 = (x_db_35 + x_mb_35) / 2; // bukkal 35

		// Set der horizontalen Koordinaten von Zahn 35 (lingual) in der Bitmap
		var x_dl_35 = 868; // distal 35
		var x_ml_35 = 845; // mesial 35
		var x_l_35 = (x_dl_35 + x_ml_35) / 2; // lingual 35

		// Set der vertikalen Koordinaten von Zahn 35 (bukkal) aus dem Formular
		var y_gm_35_db = gm_UK_b - 6.05 * gm_35_db; // Margo Gingivae distobukkal 35
		var y_gm_35_b = gm_UK_b - 6.05 * gm_35_b; // Margo Gingivae bukkal 35
		var y_gm_35_mb = gm_UK_b - 6.05 * gm_35_mb; // Margo Gingivae mesiobukkal 35
		var y_pd_35_db = 6.05 * pd_35_db; // Sondierungstiefe distobukkal 35
		var y_pd_35_b = 6.05 * pd_35_b; // Sondierungstiefe bukkal 35
		var y_pd_35_mb = 6.05 * pd_35_mb; // Sondierungstiefe mesiobukkal 35

		// Set der vertikalen Koordinaten von Zahn 35 (lingual) aus dem Formular
		var y_gm_35_dl = gm_UK_l + 6.05 * gm_35_dl; // Margo Gingivae distolingual 35
		var y_gm_35_l = gm_UK_l + 6.05 * gm_35_l; // Margo Gingivae lingual 35
		var y_gm_35_ml = gm_UK_l + 6.05 * gm_35_ml; // Margo Gingivae mesiolingual 35
		var y_pd_35_dl = 6.05 * pd_35_dl; // Sondierungstiefe distolingual 35
		var y_pd_35_l = 6.05 * pd_35_l; // Sondierungstiefe lingual 35
		var y_pd_35_ml = 6.05 * pd_35_ml; // Sondierungstiefe mesiolingual 35

		// Berechnung des Attachmentniveaus 35 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_db = y_gm_35_db + y_pd_35_db; // Attachmentniveau distobukkal 35
		var y_al_35_b = y_gm_35_b + y_pd_35_b; // Attachmentniveau bukkal 35
		var y_al_35_mb = y_gm_35_mb + y_pd_35_mb; // Attachmentniveau mesiobukkal 35

		// Berechnung des Attachmentniveaus 35 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_dl = y_gm_35_dl - y_pd_35_dl; // Attachmentniveau distolingual 35
		var y_al_35_l = y_gm_35_l - y_pd_35_l; // Attachmentniveau lingual 35
		var y_al_35_ml = y_gm_35_ml - y_pd_35_ml; // Attachmentniveau mesiolingual 35

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[35].storeCoordinates(
			x_db_35, x_mb_35, x_dl_35, x_ml_35, x_b_35, x_l_35,
			y_gm_35_db, y_gm_35_b, y_gm_35_mb, y_pd_35_dl, y_pd_35_b, y_pd_35_ml,
			y_gm_35_dl, y_gm_35_l, y_gm_35_ml, y_pd_35_dl, y_pd_35_l, y_pd_35_ml,
			y_al_35_db, y_al_35_b, y_al_35_mb, y_al_35_dl, y_al_35_l, y_al_35_ml
		);

		// Parodontaltasche 35 bukkal zeichnen
		var string =
			x_db_35 + ", " + y_al_35_db + "  "
			+ x_b_35 + ", " + y_al_35_b + "  "
			+ x_mb_35 + ", " + y_al_35_mb + "  "
			+ x_mb_35 + ", " + y_gm_35_mb + "  "
			+ x_b_35 + ", " + y_gm_35_b + "  "
			+ x_db_35 + ", " + y_gm_35_db;
		document.getElementById("s_polygon_35_b").setAttribute("points", string);
		// Attachmentniveau 35 bukkal zeichnen
		var string =
			x_db_35 + ", " + y_al_35_db + "  "
			+ x_b_35 + ", " + y_al_35_b + "  "
			+ x_mb_35 + ", " + y_al_35_mb;
		document.getElementById("s_polyline_al_35_b").setAttribute("points", string);
		// Margo Gingivae 35 bukkal zeichnen
		var string =
			x_db_35 + ", " + y_gm_35_db + "  "
			+ x_b_35 + ", " + y_gm_35_b + "  "
			+ x_mb_35 + ", " + y_gm_35_mb;
		document.getElementById("s_polyline_gm_35_b").setAttribute("points", string);

		// Parodontaltasche 35 lingual zeichnen
		var string =
			x_dl_35 + ", " + y_al_35_dl + "  "
			+ x_l_35 + ", " + y_al_35_l + "  "
			+ x_ml_35 + ", " + y_al_35_ml + "  "
			+ x_ml_35 + ", " + y_gm_35_ml + "  "
			+ x_l_35 + ", " + y_gm_35_l + "  "
			+ x_dl_35 + ", " + y_gm_35_dl;
		document.getElementById("s_polygon_35_l").setAttribute("points", string);
		// Attachmentniveau 35 lingual zeichnen
		var string =
			x_dl_35 + ", " + y_al_35_dl + "  "
			+ x_l_35 + ", " + y_al_35_l + "  "
			+ x_ml_35 + ", " + y_al_35_ml;
		document.getElementById("s_polyline_al_35_l").setAttribute("points", string);
		// Margo Gingivae 35 lingual zeichnen
		var string =
			x_dl_35 + ", " + y_gm_35_dl + "  "
			+ x_l_35 + ", " + y_gm_35_l + "  "
			+ x_ml_35 + ", " + y_gm_35_ml;
		document.getElementById("s_polyline_gm_35_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_35_b').style.display = 'none';
		document.getElementById('s_polyline_al_35_b').style.display = 'none';
		document.getElementById('s_polyline_gm_35_b').style.display = 'none';

		document.getElementById('s_polygon_35_l').style.display = 'none';
		document.getElementById('s_polyline_al_35_l').style.display = 'none';
		document.getElementById('s_polyline_gm_35_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_35) == 1 && Number(jsonObj2.tooth_34) == 1) {
		document.getElementById('s_polygon_inter_35_34_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_35_34_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_35_34_b').style.display = 'block';

		document.getElementById('s_polygon_inter_35_34_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_35_34_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_35_34_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
		var x_db_34 = 824; // distal 34

		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
		var x_dl_34 = 827; // distal 34

		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
		var y_gm_34_db = gm_UK_b - 6.05 * gm_34_db; // Margo Gingivae distobukkal 34
		var y_pd_34_db = 6.05 * pd_34_db; // Sondierungstiefe distobukkal 34

		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
		var y_gm_34_dl = gm_UK_l + 6.05 * gm_34_dl; // Margo Gingivae distolingual 34
		var y_pd_34_dl = 6.05 * pd_34_dl; // Sondierungstiefe distolingual 34

		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_db = y_gm_34_db + y_pd_34_db; // Attachmentniveau distobukkal 34

		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_34_dl = y_gm_34_dl - y_pd_34_dl; // Attachmentniveau distolingual 34

		// Parodontaltasche inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_al_35_mb + "  "
			+ x_db_34 + ", " + y_al_34_db + "  "
			+ x_db_34 + ", " + y_gm_34_db + "  "
			+ x_mb_35 + ", " + y_gm_35_mb;
		document.getElementById("s_polygon_inter_35_34_b").setAttribute("points", string);
		// Attachmentniveau inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_al_35_mb + "  "
			+ x_db_34 + ", " + y_al_34_db;
		document.getElementById("s_polyline_al_inter_35_34_b").setAttribute("points", string);
		// Margo Gingivae inter_35_34 bukkal zeichnen
		var string =
			x_mb_35 + ", " + y_gm_35_mb + "  "
			+ x_db_34 + ", " + y_gm_34_db;
		document.getElementById("s_polyline_gm_inter_35_34_b").setAttribute("points", string);

		// Parodontaltasche inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_al_35_ml + "  "
			+ x_dl_34 + ", " + y_al_34_dl + "  "
			+ x_dl_34 + ", " + y_gm_34_dl + "  "
			+ x_ml_35 + ", " + y_gm_35_ml;
		document.getElementById("s_polygon_inter_35_34_l").setAttribute("points", string);
		// Attachmentniveau inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_al_35_ml + "  "
			+ x_dl_34 + ", " + y_al_34_dl;
		document.getElementById("s_polyline_al_inter_35_34_l").setAttribute("points", string);
		// Margo Gingivae inter_35_34 lingual zeichnen
		var string =
			x_ml_35 + ", " + y_gm_35_ml + "  "
			+ x_dl_34 + ", " + y_gm_34_dl;
		document.getElementById("s_polyline_gm_inter_35_34_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_35_34_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_35_34_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_35_34_b').style.display = 'none';

		document.getElementById('s_polygon_inter_35_34_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_35_34_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_35_34_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_36) == 1 && Number(jsonObj2.tooth_35) == 1) {
		document.getElementById('s_polygon_inter_36_35_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_36_35_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_36_35_b').style.display = 'block';

		document.getElementById('s_polygon_inter_36_35_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_36_35_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_36_35_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 36 (bukkal) in der Bitmap
		var x_mb_36 = 887; // mesial 36

		// Set der horizontalen Koordinaten von Zahn 36 (lingual) in der Bitmap
		var x_ml_36 = 887; // mesial 36

		// Set der vertikalen Koordinaten von Zahn 36 (bukkal) aus dem Formular
		var y_gm_36_mb = gm_UK_b - 6.05 * gm_36_mb; // Margo Gingivae mesiobukkal 36
		var y_pd_36_mb = 6.05 * pd_36_mb; // Sondierungstiefe mesiobukkal 36

		// Set der vertikalen Koordinaten von Zahn 36 (lingual) aus dem Formular
		var y_gm_36_ml = gm_UK_l + 6.05 * gm_36_ml; // Margo Gingivae mesiolingual 36
		var y_pd_36_ml = 6.05 * pd_36_ml; // Sondierungstiefe mesiolingual 36

		// Berechnung des Attachmentniveaus 36 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_mb = y_gm_36_mb + y_pd_36_mb; // Attachmentniveau mesiobukkal 36

		// Berechnung des Attachmentniveaus 36 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_ml = y_gm_36_ml - y_pd_36_ml; // Attachmentniveau mesiolingual 36

		// Parodontaltasche inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_al_36_mb + "  "
			+ x_db_35 + ", " + y_al_35_db + "  "
			+ x_db_35 + ", " + y_gm_35_db + "  "
			+ x_mb_36 + ", " + y_gm_36_mb;
		document.getElementById("s_polygon_inter_36_35_b").setAttribute("points", string);
		// Attachmentniveau inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_al_36_mb + "  "
			+ x_db_35 + ", " + y_al_35_db;
		document.getElementById("s_polyline_al_inter_36_35_b").setAttribute("points", string);
		// Margo Gingivae inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_gm_36_mb + "  "
			+ x_db_35 + ", " + y_gm_35_db;
		document.getElementById("s_polyline_gm_inter_36_35_b").setAttribute("points", string);

		// Parodontaltasche inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_al_36_ml + "  "
			+ x_dl_35 + ", " + y_al_35_dl + "  "
			+ x_dl_35 + ", " + y_gm_35_dl + "  "
			+ x_ml_36 + ", " + y_gm_36_ml;
		document.getElementById("s_polygon_inter_36_35_l").setAttribute("points", string);
		// Attachmentniveau inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_al_36_ml + "  "
			+ x_dl_35 + ", " + y_al_35_dl;
		document.getElementById("s_polyline_al_inter_36_35_l").setAttribute("points", string);
		// Margo Gingivae inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_gm_36_ml + "  "
			+ x_dl_35 + ", " + y_gm_35_dl;
		document.getElementById("s_polyline_gm_inter_36_35_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_36_35_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_36_35_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_36_35_b').style.display = 'none';

		document.getElementById('s_polygon_inter_36_35_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_36_35_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_36_35_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_36) == 1) {
		document.getElementById('s_polygon_36_b').style.display = 'block';
		document.getElementById('s_polyline_al_36_b').style.display = 'block';
		document.getElementById('s_polyline_gm_36_b').style.display = 'block';

		document.getElementById('s_polygon_36_l').style.display = 'block';
		document.getElementById('s_polyline_al_36_l').style.display = 'block';
		document.getElementById('s_polyline_gm_36_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 36 (bukkal) in der Bitmap
		var x_db_36 = 936; // distal 36
		var x_mb_36 = 887; // mesial 36
		var x_b_36 = (x_db_36 + x_mb_36) / 2; // bukkal 36

		// Set der horizontalen Koordinaten von Zahn 36 (lingual) in der Bitmap
		var x_dl_36 = 932; // distal 36
		var x_ml_36 = 887; // mesial 36
		var x_l_36 = (x_dl_36 + x_ml_36) / 2; // lingual 36

		// Set der vertikalen Koordinaten von Zahn 36 (bukkal) aus dem Formular
		var y_gm_36_db = gm_UK_b - 6.05 * gm_36_db; // Margo Gingivae distobukkal 36
		var y_gm_36_b = gm_UK_b - 6.05 * gm_36_b; // Margo Gingivae bukkal 36
		var y_gm_36_mb = gm_UK_b - 6.05 * gm_36_mb; // Margo Gingivae mesiobukkal 36
		var y_pd_36_db = 6.05 * pd_36_db; // Sondierungstiefe distobukkal 36
		var y_pd_36_b = 6.05 * pd_36_b; // Sondierungstiefe bukkal 36
		var y_pd_36_mb = 6.05 * pd_36_mb; // Sondierungstiefe mesiobukkal 36

		// Set der vertikalen Koordinaten von Zahn 36 (lingual) aus dem Formular
		var y_gm_36_dl = gm_UK_l + 6.05 * gm_36_dl; // Margo Gingivae distolingual 36
		var y_gm_36_l = gm_UK_l + 6.05 * gm_36_l; // Margo Gingivae lingual 36
		var y_gm_36_ml = gm_UK_l + 6.05 * gm_36_ml; // Margo Gingivae mesiolingual 36
		var y_pd_36_dl = 6.05 * pd_36_dl; // Sondierungstiefe distolingual 36
		var y_pd_36_l = 6.05 * pd_36_l; // Sondierungstiefe lingual 36
		var y_pd_36_ml = 6.05 * pd_36_ml; // Sondierungstiefe mesiolingual 36

		// Berechnung des Attachmentniveaus 36 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_db = y_gm_36_db + y_pd_36_db; // Attachmentniveau distobukkal 36
		var y_al_36_b = y_gm_36_b + y_pd_36_b; // Attachmentniveau bukkal 36
		var y_al_36_mb = y_gm_36_mb + y_pd_36_mb; // Attachmentniveau mesiobukkal 36

		// Berechnung des Attachmentniveaus 36 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_dl = y_gm_36_dl - y_pd_36_dl; // Attachmentniveau distolingual 36
		var y_al_36_l = y_gm_36_l - y_pd_36_l; // Attachmentniveau lingual 36
		var y_al_36_ml = y_gm_36_ml - y_pd_36_ml; // Attachmentniveau mesiolingual 36

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[36].storeCoordinates(
			x_db_36, x_mb_36, x_dl_36, x_ml_36, x_b_36, x_l_36,
			y_gm_36_db, y_gm_36_b, y_gm_36_mb, y_pd_36_dl, y_pd_36_b, y_pd_36_ml,
			y_gm_36_dl, y_gm_36_l, y_gm_36_ml, y_pd_36_dl, y_pd_36_l, y_pd_36_ml,
			y_al_36_db, y_al_36_b, y_al_36_mb, y_al_36_dl, y_al_36_l, y_al_36_ml
		);

		// Parodontaltasche 36 bukkal zeichnen
		var string =
			x_db_36 + ", " + y_al_36_db + "  "
			+ x_b_36 + ", " + y_al_36_b + "  "
			+ x_mb_36 + ", " + y_al_36_mb + "  "
			+ x_mb_36 + ", " + y_gm_36_mb + "  "
			+ x_b_36 + ", " + y_gm_36_b + "  "
			+ x_db_36 + ", " + y_gm_36_db;
		document.getElementById("s_polygon_36_b").setAttribute("points", string);
		// Attachmentniveau 36 bukkal zeichnen
		var string =
			x_db_36 + ", " + y_al_36_db + "  "
			+ x_b_36 + ", " + y_al_36_b + "  "
			+ x_mb_36 + ", " + y_al_36_mb;
		document.getElementById("s_polyline_al_36_b").setAttribute("points", string);
		// Margo Gingivae 36 bukkal zeichnen
		var string =
			x_db_36 + ", " + y_gm_36_db + "  "
			+ x_b_36 + ", " + y_gm_36_b + "  "
			+ x_mb_36 + ", " + y_gm_36_mb;
		document.getElementById("s_polyline_gm_36_b").setAttribute("points", string);

		// Parodontaltasche 36 lingual zeichnen
		var string =
			x_dl_36 + ", " + y_al_36_dl + "  "
			+ x_l_36 + ", " + y_al_36_l + "  "
			+ x_ml_36 + ", " + y_al_36_ml + "  "
			+ x_ml_36 + ", " + y_gm_36_ml + "  "
			+ x_l_36 + ", " + y_gm_36_l + "  "
			+ x_dl_36 + ", " + y_gm_36_dl;
		document.getElementById("s_polygon_36_l").setAttribute("points", string);
		// Attachmentniveau 36 lingual zeichnen
		var string =
			x_dl_36 + ", " + y_al_36_dl + "  "
			+ x_l_36 + ", " + y_al_36_l + "  "
			+ x_ml_36 + ", " + y_al_36_ml;
		document.getElementById("s_polyline_al_36_l").setAttribute("points", string);
		// Margo Gingivae 36 lingual zeichnen
		var string =
			x_dl_36 + ", " + y_gm_36_dl + "  "
			+ x_l_36 + ", " + y_gm_36_l + "  "
			+ x_ml_36 + ", " + y_gm_36_ml;
		document.getElementById("s_polyline_gm_36_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_36_b').style.display = 'none';
		document.getElementById('s_polyline_al_36_b').style.display = 'none';
		document.getElementById('s_polyline_gm_36_b').style.display = 'none';

		document.getElementById('s_polygon_36_l').style.display = 'none';
		document.getElementById('s_polyline_al_36_l').style.display = 'none';
		document.getElementById('s_polyline_gm_36_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_36) == 1 && Number(jsonObj2.tooth_35) == 1) {
		document.getElementById('s_polygon_inter_36_35_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_36_35_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_36_35_b').style.display = 'block';

		document.getElementById('s_polygon_inter_36_35_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_36_35_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_36_35_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 35 (bukkal) in der Bitmap
		var x_db_35 = 864; // distal 35

		// Set der horizontalen Koordinaten von Zahn 35 (lingual) in der Bitmap
		var x_dl_35 = 868; // distal 35

		// Set der vertikalen Koordinaten von Zahn 35 (bukkal) aus dem Formular
		var y_gm_35_db = gm_UK_b - 6.05 * gm_35_db; // Margo Gingivae distobukkal 35
		var y_pd_35_db = 6.05 * pd_35_db; // Sondierungstiefe distobukkal 35

		// Set der vertikalen Koordinaten von Zahn 35 (lingual) aus dem Formular
		var y_gm_35_dl = gm_UK_l + 6.05 * gm_35_dl; // Margo Gingivae distolingual 35
		var y_pd_35_dl = 6.05 * pd_35_dl; // Sondierungstiefe distolingual 35

		// Berechnung des Attachmentniveaus 35 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_db = y_gm_35_db + y_pd_35_db; // Attachmentniveau distobukkal 35

		// Berechnung des Attachmentniveaus 35 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_35_dl = y_gm_35_dl - y_pd_35_dl; // Attachmentniveau distolingual 35

		// Parodontaltasche inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_al_36_mb + "  "
			+ x_db_35 + ", " + y_al_35_db + "  "
			+ x_db_35 + ", " + y_gm_35_db + "  "
			+ x_mb_36 + ", " + y_gm_36_mb;
		document.getElementById("s_polygon_inter_36_35_b").setAttribute("points", string);
		// Attachmentniveau inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_al_36_mb + "  "
			+ x_db_35 + ", " + y_al_35_db;
		document.getElementById("s_polyline_al_inter_36_35_b").setAttribute("points", string);
		// Margo Gingivae inter_36_35 bukkal zeichnen
		var string =
			x_mb_36 + ", " + y_gm_36_mb + "  "
			+ x_db_35 + ", " + y_gm_35_db;
		document.getElementById("s_polyline_gm_inter_36_35_b").setAttribute("points", string);

		// Parodontaltasche inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_al_36_ml + "  "
			+ x_dl_35 + ", " + y_al_35_dl + "  "
			+ x_dl_35 + ", " + y_gm_35_dl + "  "
			+ x_ml_36 + ", " + y_gm_36_ml;
		document.getElementById("s_polygon_inter_36_35_l").setAttribute("points", string);
		// Attachmentniveau inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_al_36_ml + "  "
			+ x_dl_35 + ", " + y_al_35_dl;
		document.getElementById("s_polyline_al_inter_36_35_l").setAttribute("points", string);
		// Margo Gingivae inter_36_35 lingual zeichnen
		var string =
			x_ml_36 + ", " + y_gm_36_ml + "  "
			+ x_dl_35 + ", " + y_gm_35_dl;
		document.getElementById("s_polyline_gm_inter_36_35_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_36_35_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_36_35_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_36_35_b').style.display = 'none';

		document.getElementById('s_polygon_inter_36_35_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_36_35_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_36_35_l').style.display = 'none';
	}
	
	if (Number(jsonObj2.tooth_37) == 1 && Number(jsonObj2.tooth_36) == 1) {
		document.getElementById('s_polygon_inter_37_36_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_37_36_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_37_36_b').style.display = 'block';

		document.getElementById('s_polygon_inter_37_36_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_37_36_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_37_36_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
		var x_mb_37 = 952; // mesial 37

		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
		var x_ml_37 = 947; // mesial 37

		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
		var y_gm_37_mb = gm_UK_b - 6.05 * gm_37_mb; // Margo Gingivae mesiobukkal 37
		var y_pd_37_mb = 6.05 * pd_37_mb; // Sondierungstiefe mesiobukkal 37

		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
		var y_gm_37_ml = gm_UK_l + 6.05 * gm_37_ml; // Margo Gingivae mesiolingual 37
		var y_pd_37_ml = 6.05 * pd_37_ml; // Sondierungstiefe mesiolingual 37

		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_mb = y_gm_37_mb + y_pd_37_mb; // Attachmentniveau mesiobukkal 37

		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_ml = y_gm_37_ml - y_pd_37_ml; // Attachmentniveau mesiolingual 37

		// Parodontaltasche inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_al_37_mb + "  "
			+ x_db_36 + ", " + y_al_36_db + "  "
			+ x_db_36 + ", " + y_gm_36_db + "  "
			+ x_mb_37 + ", " + y_gm_37_mb;
		document.getElementById("s_polygon_inter_37_36_b").setAttribute("points", string);
		// Attachmentniveau inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_al_37_mb + "  "
			+ x_db_36 + ", " + y_al_36_db;
		document.getElementById("s_polyline_al_inter_37_36_b").setAttribute("points", string);
		// Margo Gingivae inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_gm_37_mb + "  "
			+ x_db_36 + ", " + y_gm_36_db;
		document.getElementById("s_polyline_gm_inter_37_36_b").setAttribute("points", string);

		// Parodontaltasche inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_al_37_ml + "  "
			+ x_dl_36 + ", " + y_al_36_dl + "  "
			+ x_dl_36 + ", " + y_gm_36_dl + "  "
			+ x_ml_37 + ", " + y_gm_37_ml;
		document.getElementById("s_polygon_inter_37_36_l").setAttribute("points", string);
		// Attachmentniveau inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_al_37_ml + "  "
			+ x_dl_36 + ", " + y_al_36_dl;
		document.getElementById("s_polyline_al_inter_37_36_l").setAttribute("points", string);
		// Margo Gingivae inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_gm_37_ml + "  "
			+ x_dl_36 + ", " + y_gm_36_dl;
		document.getElementById("s_polyline_gm_inter_37_36_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_37_36_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_37_36_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_37_36_b').style.display = 'none';

		document.getElementById('s_polygon_inter_37_36_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_37_36_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_37_36_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_37) == 1) {
		document.getElementById('s_polygon_37_b').style.display = 'block';
		document.getElementById('s_polyline_al_37_b').style.display = 'block';
		document.getElementById('s_polyline_gm_37_b').style.display = 'block';

		document.getElementById('s_polygon_37_l').style.display = 'block';
		document.getElementById('s_polyline_al_37_l').style.display = 'block';
		document.getElementById('s_polyline_gm_37_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
		var x_db_37 = 999; // distal 37
		var x_mb_37 = 952; // mesial 37
		var x_b_37 = (x_db_37 + x_mb_37) / 2; // bukkal 37

		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
		var x_dl_37 = 995; // distal 37
		var x_ml_37 = 947; // mesial 37
		var x_l_37 = (x_dl_37 + x_ml_37) / 2; // lingual 37

		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
		var y_gm_37_db = gm_UK_b - 6.05 * gm_37_db; // Margo Gingivae distobukkal 37
		var y_gm_37_b = gm_UK_b - 6.05 * gm_37_b; // Margo Gingivae bukkal 37
		var y_gm_37_mb = gm_UK_b - 6.05 * gm_37_mb; // Margo Gingivae mesiobukkal 37
		var y_pd_37_db = 6.05 * pd_37_db; // Sondierungstiefe distobukkal 37
		var y_pd_37_b = 6.05 * pd_37_b; // Sondierungstiefe bukkal 37
		var y_pd_37_mb = 6.05 * pd_37_mb; // Sondierungstiefe mesiobukkal 37

		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
		var y_gm_37_dl = gm_UK_l + 6.05 * gm_37_dl; // Margo Gingivae distolingual 37
		var y_gm_37_l = gm_UK_l + 6.05 * gm_37_l; // Margo Gingivae lingual 37
		var y_gm_37_ml = gm_UK_l + 6.05 * gm_37_ml; // Margo Gingivae mesiolingual 37
		var y_pd_37_dl = 6.05 * pd_37_dl; // Sondierungstiefe distolingual 37
		var y_pd_37_l = 6.05 * pd_37_l; // Sondierungstiefe lingual 37
		var y_pd_37_ml = 6.05 * pd_37_ml; // Sondierungstiefe mesiolingual 37

		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_db = y_gm_37_db + y_pd_37_db; // Attachmentniveau distobukkal 37
		var y_al_37_b = y_gm_37_b + y_pd_37_b; // Attachmentniveau bukkal 37
		var y_al_37_mb = y_gm_37_mb + y_pd_37_mb; // Attachmentniveau mesiobukkal 37

		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_dl = y_gm_37_dl - y_pd_37_dl; // Attachmentniveau distolingual 37
		var y_al_37_l = y_gm_37_l - y_pd_37_l; // Attachmentniveau lingual 37
		var y_al_37_ml = y_gm_37_ml - y_pd_37_ml; // Attachmentniveau mesiolingual 37

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[37].storeCoordinates(
			x_db_37, x_mb_37, x_dl_37, x_ml_37, x_b_37, x_l_37,
			y_gm_37_db, y_gm_37_b, y_gm_37_mb, y_pd_37_dl, y_pd_37_b, y_pd_37_ml,
			y_gm_37_dl, y_gm_37_l, y_gm_37_ml, y_pd_37_dl, y_pd_37_l, y_pd_37_ml,
			y_al_37_db, y_al_37_b, y_al_37_mb, y_al_37_dl, y_al_37_l, y_al_37_ml
		);

		// Parodontaltasche 37 bukkal zeichnen
		var string =
			x_db_37 + ", " + y_al_37_db + "  "
			+ x_b_37 + ", " + y_al_37_b + "  "
			+ x_mb_37 + ", " + y_al_37_mb + "  "
			+ x_mb_37 + ", " + y_gm_37_mb + "  "
			+ x_b_37 + ", " + y_gm_37_b + "  "
			+ x_db_37 + ", " + y_gm_37_db;
		document.getElementById("s_polygon_37_b").setAttribute("points", string);
		// Attachmentniveau 37 bukkal zeichnen
		var string =
			x_db_37 + ", " + y_al_37_db + "  "
			+ x_b_37 + ", " + y_al_37_b + "  "
			+ x_mb_37 + ", " + y_al_37_mb;
		document.getElementById("s_polyline_al_37_b").setAttribute("points", string);
		// Margo Gingivae 37 bukkal zeichnen
		var string =
			x_db_37 + ", " + y_gm_37_db + "  "
			+ x_b_37 + ", " + y_gm_37_b + "  "
			+ x_mb_37 + ", " + y_gm_37_mb;
		document.getElementById("s_polyline_gm_37_b").setAttribute("points", string);

		// Parodontaltasche 37 lingual zeichnen
		var string =
			x_dl_37 + ", " + y_al_37_dl + "  "
			+ x_l_37 + ", " + y_al_37_l + "  "
			+ x_ml_37 + ", " + y_al_37_ml + "  "
			+ x_ml_37 + ", " + y_gm_37_ml + "  "
			+ x_l_37 + ", " + y_gm_37_l + "  "
			+ x_dl_37 + ", " + y_gm_37_dl;
		document.getElementById("s_polygon_37_l").setAttribute("points", string);
		// Attachmentniveau 37 lingual zeichnen
		var string =
			x_dl_37 + ", " + y_al_37_dl + "  "
			+ x_l_37 + ", " + y_al_37_l + "  "
			+ x_ml_37 + ", " + y_al_37_ml;
		document.getElementById("s_polyline_al_37_l").setAttribute("points", string);
		// Margo Gingivae 37 lingual zeichnen
		var string =
			x_dl_37 + ", " + y_gm_37_dl + "  "
			+ x_l_37 + ", " + y_gm_37_l + "  "
			+ x_ml_37 + ", " + y_gm_37_ml;
		document.getElementById("s_polyline_gm_37_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_37_b').style.display = 'none';
		document.getElementById('s_polyline_al_37_b').style.display = 'none';
		document.getElementById('s_polyline_gm_37_b').style.display = 'none';

		document.getElementById('s_polygon_37_l').style.display = 'none';
		document.getElementById('s_polyline_al_37_l').style.display = 'none';
		document.getElementById('s_polyline_gm_37_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_37) == 1 && Number(jsonObj2.tooth_36) == 1) {
		document.getElementById('s_polygon_inter_37_36_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_37_36_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_37_36_b').style.display = 'block';

		document.getElementById('s_polygon_inter_37_36_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_37_36_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_37_36_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
		var x_db_36 = 936; // distal 46

		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
		var x_dl_36 = 932; // distal 46

		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
		var y_gm_36_db = gm_UK_b - 6.05 * gm_36_db; // Margo Gingivae distobukkal 46
		var y_pd_36_db = 6.05 * pd_36_db; // Sondierungstiefe distobukkal 46

		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
		var y_gm_36_dl = gm_UK_l + 6.05 * gm_36_dl; // Margo Gingivae distolingual 46
		var y_pd_36_dl = 6.05 * pd_36_dl; // Sondierungstiefe distolingual 46

		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_db = y_gm_36_db + y_pd_36_db; // Attachmentniveau distobukkal 46

		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_36_dl = y_gm_36_dl - y_pd_36_dl; // Attachmentniveau distolingual 46

		// Parodontaltasche inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_al_37_mb + "  "
			+ x_db_36 + ", " + y_al_36_db + "  "
			+ x_db_36 + ", " + y_gm_36_db + "  "
			+ x_mb_37 + ", " + y_gm_37_mb;
		document.getElementById("s_polygon_inter_37_36_b").setAttribute("points", string);
		// Attachmentniveau inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_al_37_mb + "  "
			+ x_db_36 + ", " + y_al_36_db;
		document.getElementById("s_polyline_al_inter_37_36_b").setAttribute("points", string);
		// Margo Gingivae inter_37_36 bukkal zeichnen
		var string =
			x_mb_37 + ", " + y_gm_37_mb + "  "
			+ x_db_36 + ", " + y_gm_36_db;
		document.getElementById("s_polyline_gm_inter_37_36_b").setAttribute("points", string);

		// Parodontaltasche inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_al_37_ml + "  "
			+ x_dl_36 + ", " + y_al_36_dl + "  "
			+ x_dl_36 + ", " + y_gm_36_dl + "  "
			+ x_ml_37 + ", " + y_gm_37_ml;
		document.getElementById("s_polygon_inter_37_36_l").setAttribute("points", string);
		// Attachmentniveau inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_al_37_ml + "  "
			+ x_dl_36 + ", " + y_al_36_dl;
		document.getElementById("s_polyline_al_inter_37_36_l").setAttribute("points", string);
		// Margo Gingivae inter_37_36 lingual zeichnen
		var string =
			x_ml_37 + ", " + y_gm_37_ml + "  "
			+ x_dl_36 + ", " + y_gm_36_dl;
		document.getElementById("s_polyline_gm_inter_37_36_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_37_36_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_37_36_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_37_36_b').style.display = 'none';

		document.getElementById('s_polygon_inter_37_36_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_37_36_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_37_36_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_38) == 1 && Number(jsonObj2.tooth_37) == 1) {
		document.getElementById('s_polygon_inter_38_37_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_38_37_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_38_37_b').style.display = 'block';

		document.getElementById('s_polygon_inter_38_37_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_38_37_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_38_37_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
		var x_mb_38 = 1016; // mesial 48

		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
		var x_ml_38 = 1012; // mesial 48

		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
		var y_gm_38_mb = gm_UK_b - 6.05 * gm_38_mb; // Margo Gingivae mesiobukkal 48
		var y_pd_38_mb = 6.05 * pd_38_mb; // Sondierungstiefe mesiobukkal 48

		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
		var y_gm_38_ml = gm_UK_l + 6.05 * gm_38_ml; // Margo Gingivae mesiolingual 48
		var y_pd_38_ml = 6.05 * pd_38_ml; // Sondierungstiefe mesiolingual 48

		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_38_mb = y_gm_38_mb + y_pd_38_mb; // Attachmentniveau mesiobukkal 48

		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_38_ml = y_gm_38_ml - y_pd_38_ml; // Attachmentniveau mesiolingual 48

		// Parodontaltasche inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_al_38_mb + "  "
			+ x_db_37 + ", " + y_al_37_db + "  "
			+ x_db_37 + ", " + y_gm_37_db + "  "
			+ x_mb_38 + ", " + y_gm_38_mb;
		document.getElementById("s_polygon_inter_38_37_b").setAttribute("points", string);
		// Attachmentniveau inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_al_38_mb + "  "
			+ x_db_37 + ", " + y_al_37_db;
		document.getElementById("s_polyline_al_inter_38_37_b").setAttribute("points", string);
		// Margo Gingivae inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_gm_38_mb + "  "
			+ x_db_37 + ", " + y_gm_37_db;
		document.getElementById("s_polyline_gm_inter_38_37_b").setAttribute("points", string);

		// Parodontaltasche inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_al_38_ml + "  "
			+ x_dl_37 + ", " + y_al_37_dl + "  "
			+ x_dl_37 + ", " + y_gm_37_dl + "  "
			+ x_ml_38 + ", " + y_gm_38_ml;
		document.getElementById("s_polygon_inter_38_37_l").setAttribute("points", string);
		// Attachmentniveau inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_al_38_ml + "  "
			+ x_dl_37 + ", " + y_al_37_dl;
		document.getElementById("s_polyline_al_inter_38_37_l").setAttribute("points", string);
		// Margo Gingivae inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_gm_38_ml + "  "
			+ x_dl_37 + ", " + y_gm_37_dl;
		document.getElementById("s_polyline_gm_inter_38_37_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_38_37_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_38_37_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_38_37_b').style.display = 'none';

		document.getElementById('s_polygon_inter_38_37_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_38_37_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_38_37_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_38) == 1) {
		document.getElementById('s_polygon_38_b').style.display = 'block';
		document.getElementById('s_polyline_al_38_b').style.display = 'block';
		document.getElementById('s_polyline_gm_38_b').style.display = 'block';

		document.getElementById('s_polygon_38_l').style.display = 'block';
		document.getElementById('s_polyline_al_38_l').style.display = 'block';
		document.getElementById('s_polyline_gm_38_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 38 (bukkal) in der Bitmap
		var x_db_38 = 1061; // distal 38
		var x_mb_38 = 1016; // mesial 38
		var x_b_38 = (x_db_38 + x_mb_38) / 2; // bukkal 38

		// Set der horizontalen Koordinaten von Zahn 38 (lingual) in der Bitmap
		var x_dl_38 = 1061; // distal 38
		var x_ml_38 = 1012; // mesial 38
		var x_l_38 = (x_dl_38 + x_ml_38) / 2; // lingual 38

		// Set der vertikalen Koordinaten von Zahn 38 (bukkal) aus dem Formular
		var y_gm_38_db = gm_UK_b - 6.05 * gm_38_db; // Margo Gingivae distobukkal 38
		var y_gm_38_b = gm_UK_b - 6.05 * gm_38_b; // Margo Gingivae bukkal 38
		var y_gm_38_mb = gm_UK_b - 6.05 * gm_38_mb; // Margo Gingivae mesiobukkal 38
		var y_pd_38_db = 6.05 * pd_38_db; // Sondierungstiefe distobukkal 38
		var y_pd_38_b = 6.05 * pd_38_b; // Sondierungstiefe bukkal 38
		var y_pd_38_mb = 6.05 * pd_38_mb; // Sondierungstiefe mesiobukkal 38

		// Set der vertikalen Koordinaten von Zahn 38 (lingual) aus dem Formular
		var y_gm_38_dl = gm_UK_l + 6.05 * gm_38_dl; // Margo Gingivae distolingual 38
		var y_gm_38_l = gm_UK_l + 6.05 * gm_38_l; // Margo Gingivae lingual 38
		var y_gm_38_ml = gm_UK_l + 6.05 * gm_38_ml; // Margo Gingivae mesiolingual 38
		var y_pd_38_dl = 6.05 * pd_38_dl; // Sondierungstiefe distolingual 38
		var y_pd_38_l = 6.05 * pd_38_l; // Sondierungstiefe lingual 38
		var y_pd_38_ml = 6.05 * pd_38_ml; // Sondierungstiefe mesiolingual 38

		// Berechnung des Attachmentniveaus 38 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_38_db = y_gm_38_db + y_pd_38_db; // Attachmentniveau distobukkal 38
		var y_al_38_b = y_gm_38_b + y_pd_38_b; // Attachmentniveau bukkal 38
		var y_al_38_mb = y_gm_38_mb + y_pd_38_mb; // Attachmentniveau mesiobukkal 38

		// Berechnung des Attachmentniveaus 38 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_38_dl = y_gm_38_dl - y_pd_38_dl; // Attachmentniveau distolingual 38
		var y_al_38_l = y_gm_38_l - y_pd_38_l; // Attachmentniveau lingual 38
		var y_al_38_ml = y_gm_38_ml - y_pd_38_ml; // Attachmentniveau mesiolingual 38

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[38].storeCoordinates(
			x_db_38, x_mb_38, x_dl_38, x_ml_38, x_b_38, x_l_38,
			y_gm_38_db, y_gm_38_b, y_gm_38_mb, y_pd_38_dl, y_pd_38_b, y_pd_38_ml,
			y_gm_38_dl, y_gm_38_l, y_gm_38_ml, y_pd_38_dl, y_pd_38_l, y_pd_38_ml,
			y_al_38_db, y_al_38_b, y_al_38_mb, y_al_38_dl, y_al_38_l, y_al_38_ml
		);

		// Parodontaltasche 38 bukkal zeichnen
		var string =
			x_db_38 + ", " + y_al_38_db + "  "
			+ x_b_38 + ", " + y_al_38_b + "  "
			+ x_mb_38 + ", " + y_al_38_mb + "  "
			+ x_mb_38 + ", " + y_gm_38_mb + "  "
			+ x_b_38 + ", " + y_gm_38_b + "  "
			+ x_db_38 + ", " + y_gm_38_db;
		document.getElementById("s_polygon_38_b").setAttribute("points", string);
		// Attachmentniveau 38 bukkal zeichnen
		var string =
			x_db_38 + ", " + y_al_38_db + "  "
			+ x_b_38 + ", " + y_al_38_b + "  "
			+ x_mb_38 + ", " + y_al_38_mb;
		document.getElementById("s_polyline_al_38_b").setAttribute("points", string);
		// Margo Gingivae 38 bukkal zeichnen
		var string =
			x_db_38 + ", " + y_gm_38_db + "  "
			+ x_b_38 + ", " + y_gm_38_b + "  "
			+ x_mb_38 + ", " + y_gm_38_mb;
		document.getElementById("s_polyline_gm_38_b").setAttribute("points", string);

		// Parodontaltasche 38 lingual zeichnen
		var string =
			x_dl_38 + ", " + y_al_38_dl + "  "
			+ x_l_38 + ", " + y_al_38_l + "  "
			+ x_ml_38 + ", " + y_al_38_ml + "  "
			+ x_ml_38 + ", " + y_gm_38_ml + "  "
			+ x_l_38 + ", " + y_gm_38_l + "  "
			+ x_dl_38 + ", " + y_gm_38_dl;
		document.getElementById("s_polygon_38_l").setAttribute("points", string);
		// Attachmentniveau 38 lingual zeichnen
		var string =
			x_dl_38 + ", " + y_al_38_dl + "  "
			+ x_l_38 + ", " + y_al_38_l + "  "
			+ x_ml_38 + ", " + y_al_38_ml;
		document.getElementById("s_polyline_al_38_l").setAttribute("points", string);
		// Margo Gingivae 38 lingual zeichnen
		var string =
			x_dl_38 + ", " + y_gm_38_dl + "  "
			+ x_l_38 + ", " + y_gm_38_l + "  "
			+ x_ml_38 + ", " + y_gm_38_ml;
		document.getElementById("s_polyline_gm_38_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_38_b').style.display = 'none';
		document.getElementById('s_polyline_al_38_b').style.display = 'none';
		document.getElementById('s_polyline_gm_38_b').style.display = 'none';

		document.getElementById('s_polygon_38_l').style.display = 'none';
		document.getElementById('s_polyline_al_38_l').style.display = 'none';
		document.getElementById('s_polyline_gm_38_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_38) == 1 && Number(jsonObj2.tooth_37) == 1) {
		document.getElementById('s_polygon_inter_38_37_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_38_37_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_38_37_b').style.display = 'block';

		document.getElementById('s_polygon_inter_38_37_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_38_37_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_38_37_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
		var x_db_37 = 999; // distal 37

		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
		var x_dl_37 = 995; // distal 37

		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
		var y_gm_37_db = gm_UK_b - 6.05 * gm_37_db; // Margo Gingivae distobukkal 37
		var y_pd_37_db = 6.05 * pd_37_db; // Sondierungstiefe distobukkal 37

		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
		var y_gm_37_dl = gm_UK_l + 6.05 * gm_37_dl; // Margo Gingivae distolingual 37
		var y_pd_37_dl = 6.05 * pd_37_dl; // Sondierungstiefe distolingual 37

		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_db = y_gm_37_db + y_pd_37_db; // Attachmentniveau distobukkal 37

		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_37_dl = y_gm_37_dl - y_pd_37_dl; // Attachmentniveau distolingual 37

		// Parodontaltasche inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_al_38_mb + "  "
			+ x_db_37 + ", " + y_al_37_db + "  "
			+ x_db_37 + ", " + y_gm_37_db + "  "
			+ x_mb_38 + ", " + y_gm_38_mb;
		document.getElementById("s_polygon_inter_38_37_b").setAttribute("points", string);
		// Attachmentniveau inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_al_38_mb + "  "
			+ x_db_37 + ", " + y_al_37_db;
		document.getElementById("s_polyline_al_inter_38_37_b").setAttribute("points", string);
		// Margo Gingivae inter_38_37 bukkal zeichnen
		var string =
			x_mb_38 + ", " + y_gm_38_mb + "  "
			+ x_db_37 + ", " + y_gm_37_db;
		document.getElementById("s_polyline_gm_inter_38_37_b").setAttribute("points", string);

		// Parodontaltasche inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_al_38_ml + "  "
			+ x_dl_37 + ", " + y_al_37_dl + "  "
			+ x_dl_37 + ", " + y_gm_37_dl + "  "
			+ x_ml_38 + ", " + y_gm_38_ml;
		document.getElementById("s_polygon_inter_38_37_l").setAttribute("points", string);
		// Attachmentniveau inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_al_38_ml + "  "
			+ x_dl_37 + ", " + y_al_37_dl;
		document.getElementById("s_polyline_al_inter_38_37_l").setAttribute("points", string);
		// Margo Gingivae inter_38_37 lingual zeichnen
		var string =
			x_ml_38 + ", " + y_gm_38_ml + "  "
			+ x_dl_37 + ", " + y_gm_37_dl;
		document.getElementById("s_polyline_gm_inter_38_37_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_38_37_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_38_37_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_38_37_b').style.display = 'none';

		document.getElementById('s_polygon_inter_38_37_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_38_37_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_38_37_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_41) == 1) {
		document.getElementById('s_polygon_41_b').style.display = 'block';
		document.getElementById('s_polyline_al_41_b').style.display = 'block';
		document.getElementById('s_polyline_gm_41_b').style.display = 'block';

		document.getElementById('s_polygon_41_l').style.display = 'block';
		document.getElementById('s_polyline_al_41_l').style.display = 'block';
		document.getElementById('s_polyline_gm_41_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 41 (bukkal) in der Bitmap
		var x_db_41 = 643; // distal 41
		var x_mb_41 = 662; // mesial 41
		var x_b_41 = (x_db_41 + x_mb_41) / 2; // bukkal 41

		// Set der horizontalen Koordinaten von Zahn 41 (lingual) in der Bitmap
		var x_dl_41 = 642; // distal 41
		var x_ml_41 = 661; // mesial 41
		var x_l_41 = (x_dl_41 + x_ml_41) / 2; // lingual 41

		// Set der vertikalen Koordinaten von Zahn 41 (bukkal) aus dem Formular
		var y_gm_41_db = gm_UK_b - 6.05 * gm_41_db; // Margo Gingivae distobukkal 41
		var y_gm_41_b = gm_UK_b - 6.05 * gm_41_b; // Margo Gingivae bukkal 41
		var y_gm_41_mb = gm_UK_b - 6.05 * gm_41_mb; // Margo Gingivae mesiobukkal 41
		var y_pd_41_db = 6.05 * pd_41_db; // Sondierungstiefe distobukkal 41
		var y_pd_41_b = 6.05 * pd_41_b; // Sondierungstiefe bukkal 41
		var y_pd_41_mb = 6.05 * pd_41_mb; // Sondierungstiefe mesiobukkal 41

		// Set der vertikalen Koordinaten von Zahn 41 (lingual) aus dem Formular
		var y_gm_41_dl = gm_UK_l + 6.05 * gm_41_dl; // Margo Gingivae distolingual 41
		var y_gm_41_l = gm_UK_l + 6.05 * gm_41_l; // Margo Gingivae lingual 41
		var y_gm_41_ml = gm_UK_l + 6.05 * gm_41_ml; // Margo Gingivae mesiolingual 41
		var y_pd_41_dl = 6.05 * pd_41_dl; // Sondierungstiefe distolingual 41
		var y_pd_41_l = 6.05 * pd_41_l; // Sondierungstiefe lingual 41
		var y_pd_41_ml = 6.05 * pd_41_ml; // Sondierungstiefe mesiolingual 41

		// Berechnung des Attachmentniveaus 41 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_41_db = y_gm_41_db + y_pd_41_db; // Attachmentniveau distobukkal 41
		var y_al_41_b = y_gm_41_b + y_pd_41_b; // Attachmentniveau bukkal 41
		var y_al_41_mb = y_gm_41_mb + y_pd_41_mb; // Attachmentniveau mesiobukkal 41

		// Berechnung des Attachmentniveaus 41 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_41_dl = y_gm_41_dl - y_pd_41_dl; // Attachmentniveau distolingual 41
		var y_al_41_l = y_gm_41_l - y_pd_41_l; // Attachmentniveau lingual 41
		var y_al_41_ml = y_gm_41_ml - y_pd_41_ml; // Attachmentniveau mesiolingual 41

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[41].storeCoordinates(
			x_db_41, x_mb_41, x_dl_41, x_ml_41, x_b_41, x_l_41,
			y_gm_41_db, y_gm_41_b, y_gm_41_mb, y_pd_41_dl, y_pd_41_b, y_pd_41_ml,
			y_gm_41_dl, y_gm_41_l, y_gm_41_ml, y_pd_41_dl, y_pd_41_l, y_pd_41_ml,
			y_al_41_db, y_al_41_b, y_al_41_mb, y_al_41_dl, y_al_41_l, y_al_41_ml
		);

		// Parodontaltasche 41 bukkal zeichnen
		var string =
			x_db_41 + ", " + y_al_41_db + "  "
			+ x_b_41 + ", " + y_al_41_b + "  "
			+ x_mb_41 + ", " + y_al_41_mb + "  "
			+ x_mb_41 + ", " + y_gm_41_mb + "  "
			+ x_b_41 + ", " + y_gm_41_b + "  "
			+ x_db_41 + ", " + y_gm_41_db;
		document.getElementById("s_polygon_41_b").setAttribute("points", string);
		// Attachmentniveau 41 bukkal zeichnen
		var string =
			x_db_41 + ", " + y_al_41_db + "  "
			+ x_b_41 + ", " + y_al_41_b + "  "
			+ x_mb_41 + ", " + y_al_41_mb;
		document.getElementById("s_polyline_al_41_b").setAttribute("points", string);
		// Margo Gingivae 41 bukkal zeichnen
		var string =
			x_db_41 + ", " + y_gm_41_db + "  "
			+ x_b_41 + ", " + y_gm_41_b + "  "
			+ x_mb_41 + ", " + y_gm_41_mb;
		document.getElementById("s_polyline_gm_41_b").setAttribute("points", string);

		// Parodontaltasche 41 lingual zeichnen
		var string =
			x_dl_41 + ", " + y_al_41_dl + "  "
			+ x_l_41 + ", " + y_al_41_l + "  "
			+ x_ml_41 + ", " + y_al_41_ml + "  "
			+ x_ml_41 + ", " + y_gm_41_ml + "  "
			+ x_l_41 + ", " + y_gm_41_l + "  "
			+ x_dl_41 + ", " + y_gm_41_dl;
		document.getElementById("s_polygon_41_l").setAttribute("points", string);
		// Attachmentniveau 41 lingual zeichnen
		var string =
			x_dl_41 + ", " + y_al_41_dl + "  "
			+ x_l_41 + ", " + y_al_41_l + "  "
			+ x_ml_41 + ", " + y_al_41_ml;
		document.getElementById("s_polyline_al_41_l").setAttribute("points", string);
		// Margo Gingivae 41 lingual zeichnen
		var string =
			x_dl_41 + ", " + y_gm_41_dl + "  "
			+ x_l_41 + ", " + y_gm_41_l + "  "
			+ x_ml_41 + ", " + y_gm_41_ml;
		document.getElementById("s_polyline_gm_41_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_41_b').style.display = 'none';
		document.getElementById('s_polyline_al_41_b').style.display = 'none';
		document.getElementById('s_polyline_gm_41_b').style.display = 'none';

		document.getElementById('s_polygon_41_l').style.display = 'none';
		document.getElementById('s_polyline_al_41_l').style.display = 'none';
		document.getElementById('s_polyline_gm_41_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_42) == 1 && Number(jsonObj2.tooth_41) == 1) {
		document.getElementById('s_polygon_inter_42_41_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_42_41_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_42_41_b').style.display = 'block';

		document.getElementById('s_polygon_inter_42_41_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_42_41_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_42_41_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
		var x_mb_42 = 629; // mesial 42

		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
		var x_ml_42 = 625; // mesial 42

		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
		var y_gm_42_mb = gm_UK_b - 6.05 * gm_42_mb; // Margo Gingivae mesiobukkal 42
		var y_pd_42_mb = 6.05 * pd_42_mb; // Sondierungstiefe mesiobukkal 42

		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
		var y_gm_42_ml = gm_UK_l + 6.05 * gm_42_ml; // Margo Gingivae mesiolingual 42
		var y_pd_42_ml = 6.05 * pd_42_ml; // Sondierungstiefe mesiolingual 42

		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_mb = y_gm_42_mb + y_pd_42_mb; // Attachmentniveau mesiobukkal 42

		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_ml = y_gm_42_ml - y_pd_42_ml; // Attachmentniveau mesiolingual 42

		// Parodontaltasche inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_al_42_mb + "  "
			+ x_db_41 + ", " + y_al_41_db + "  "
			+ x_db_41 + ", " + y_gm_41_db + "  "
			+ x_mb_42 + ", " + y_gm_42_mb;
		document.getElementById("s_polygon_inter_42_41_b").setAttribute("points", string);
		// Attachmentniveau inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_al_42_mb + "  "
			+ x_db_41 + ", " + y_al_41_db;
		document.getElementById("s_polyline_al_inter_42_41_b").setAttribute("points", string);
		// Margo Gingivae inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_gm_42_mb + "  "
			+ x_db_41 + ", " + y_gm_41_db;
		document.getElementById("s_polyline_gm_inter_42_41_b").setAttribute("points", string);

		// Parodontaltasche inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_al_42_ml + "  "
			+ x_dl_41 + ", " + y_al_41_dl + "  "
			+ x_dl_41 + ", " + y_gm_41_dl + "  "
			+ x_ml_42 + ", " + y_gm_42_ml;
		document.getElementById("s_polygon_inter_42_41_l").setAttribute("points", string);
		// Attachmentniveau inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_al_42_ml + "  "
			+ x_dl_41 + ", " + y_al_41_dl;
		document.getElementById("s_polyline_al_inter_42_41_l").setAttribute("points", string);
		// Margo Gingivae inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_gm_42_ml + "  "
			+ x_dl_41 + ", " + y_gm_41_dl;
		document.getElementById("s_polyline_gm_inter_42_41_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_42_41_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_42_41_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_42_41_b').style.display = 'none';

		document.getElementById('s_polygon_inter_42_41_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_42_41_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_42_41_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_42) == 1) {
		document.getElementById('s_polygon_42_b').style.display = 'block';
		document.getElementById('s_polyline_al_42_b').style.display = 'block';
		document.getElementById('s_polyline_gm_42_b').style.display = 'block';

		document.getElementById('s_polygon_42_l').style.display = 'block';
		document.getElementById('s_polyline_al_42_l').style.display = 'block';
		document.getElementById('s_polyline_gm_42_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
		var x_db_42 = 610; // distal 42
		var x_mb_42 = 629; // mesial 42
		var x_b_42 = (x_db_42 + x_mb_42) / 2; // bukkal 42

		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
		var x_dl_42 = 607; // distal 42
		var x_ml_42 = 625; // mesial 42
		var x_l_42 = (x_dl_42 + x_ml_42) / 2; // lingual 42

		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
		var y_gm_42_db = gm_UK_b - 6.05 * gm_42_db; // Margo Gingivae distobukkal 42
		var y_gm_42_b = gm_UK_b - 6.05 * gm_42_b; // Margo Gingivae bukkal 42
		var y_gm_42_mb = gm_UK_b - 6.05 * gm_42_mb; // Margo Gingivae mesiobukkal 42
		var y_pd_42_db = 6.05 * pd_42_db; // Sondierungstiefe distobukkal 42
		var y_pd_42_b = 6.05 * pd_42_b; // Sondierungstiefe bukkal 42
		var y_pd_42_mb = 6.05 * pd_42_mb; // Sondierungstiefe mesiobukkal 42

		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
		var y_gm_42_dl = gm_UK_l + 6.05 * gm_42_dl; // Margo Gingivae distolingual 42
		var y_gm_42_l = gm_UK_l + 6.05 * gm_42_l; // Margo Gingivae lingual 42
		var y_gm_42_ml = gm_UK_l + 6.05 * gm_42_ml; // Margo Gingivae mesiolingual 42
		var y_pd_42_dl = 6.05 * pd_42_dl; // Sondierungstiefe distolingual 42
		var y_pd_42_l = 6.05 * pd_42_l; // Sondierungstiefe lingual 42
		var y_pd_42_ml = 6.05 * pd_42_ml; // Sondierungstiefe mesiolingual 42

		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_db = y_gm_42_db + y_pd_42_db; // Attachmentniveau distobukkal 42
		var y_al_42_b = y_gm_42_b + y_pd_42_b; // Attachmentniveau bukkal 42
		var y_al_42_mb = y_gm_42_mb + y_pd_42_mb; // Attachmentniveau mesiobukkal 42

		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_dl = y_gm_42_dl - y_pd_42_dl; // Attachmentniveau distolingual 42
		var y_al_42_l = y_gm_42_l - y_pd_42_l; // Attachmentniveau lingual 42
		var y_al_42_ml = y_gm_42_ml - y_pd_42_ml; // Attachmentniveau mesiolingual 42

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[42].storeCoordinates(
			x_db_42, x_mb_42, x_dl_42, x_ml_42, x_b_42, x_l_42,
			y_gm_42_db, y_gm_42_b, y_gm_42_mb, y_pd_42_dl, y_pd_42_b, y_pd_42_ml,
			y_gm_42_dl, y_gm_42_l, y_gm_42_ml, y_pd_42_dl, y_pd_42_l, y_pd_42_ml,
			y_al_42_db, y_al_42_b, y_al_42_mb, y_al_42_dl, y_al_42_l, y_al_42_ml
		);

		// Parodontaltasche 42 bukkal zeichnen
		var string =
			x_db_42 + ", " + y_al_42_db + "  "
			+ x_b_42 + ", " + y_al_42_b + "  "
			+ x_mb_42 + ", " + y_al_42_mb + "  "
			+ x_mb_42 + ", " + y_gm_42_mb + "  "
			+ x_b_42 + ", " + y_gm_42_b + "  "
			+ x_db_42 + ", " + y_gm_42_db;
		document.getElementById("s_polygon_42_b").setAttribute("points", string);
		// Attachmentniveau 42 bukkal zeichnen
		var string =
			x_db_42 + ", " + y_al_42_db + "  "
			+ x_b_42 + ", " + y_al_42_b + "  "
			+ x_mb_42 + ", " + y_al_42_mb;
		document.getElementById("s_polyline_al_42_b").setAttribute("points", string);
		// Margo Gingivae 42 bukkal zeichnen
		var string =
			x_db_42 + ", " + y_gm_42_db + "  "
			+ x_b_42 + ", " + y_gm_42_b + "  "
			+ x_mb_42 + ", " + y_gm_42_mb;
		document.getElementById("s_polyline_gm_42_b").setAttribute("points", string);

		// Parodontaltasche 42 lingual zeichnen
		var string =
			x_dl_42 + ", " + y_al_42_dl + "  "
			+ x_l_42 + ", " + y_al_42_l + "  "
			+ x_ml_42 + ", " + y_al_42_ml + "  "
			+ x_ml_42 + ", " + y_gm_42_ml + "  "
			+ x_l_42 + ", " + y_gm_42_l + "  "
			+ x_dl_42 + ", " + y_gm_42_dl;
		document.getElementById("s_polygon_42_l").setAttribute("points", string);
		// Attachmentniveau 42 lingual zeichnen
		var string =
			x_dl_42 + ", " + y_al_42_dl + "  "
			+ x_l_42 + ", " + y_al_42_l + "  "
			+ x_ml_42 + ", " + y_al_42_ml;
		document.getElementById("s_polyline_al_42_l").setAttribute("points", string);
		// Margo Gingivae 42 lingual zeichnen
		var string =
			x_dl_42 + ", " + y_gm_42_dl + "  "
			+ x_l_42 + ", " + y_gm_42_l + "  "
			+ x_ml_42 + ", " + y_gm_42_ml;
		document.getElementById("s_polyline_gm_42_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_42_b').style.display = 'none';
		document.getElementById('s_polyline_al_42_b').style.display = 'none';
		document.getElementById('s_polyline_gm_42_b').style.display = 'none';

		document.getElementById('s_polygon_42_l').style.display = 'none';
		document.getElementById('s_polyline_al_42_l').style.display = 'none';
		document.getElementById('s_polyline_gm_42_l').style.display = 'none';
	}
	if (Number(jsonObj2.tooth_42) == 1 && Number(jsonObj2.tooth_41) == 1) {
		document.getElementById('s_polygon_inter_42_41_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_42_41_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_42_41_b').style.display = 'block';

		document.getElementById('s_polygon_inter_42_41_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_42_41_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_42_41_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 41 (bukkal) in der Bitmap
		var x_db_41 = 643; // distal 41

		// Set der horizontalen Koordinaten von Zahn 41 (lingual) in der Bitmap
		var x_dl_41 = 642; // distal 41

		// Set der vertikalen Koordinaten von Zahn 41 (bukkal) aus dem Formular
		var y_gm_41_db = gm_UK_b - 6.05 * gm_41_db; // Margo Gingivae distobukkal 41
		var y_pd_41_db = 6.05 * pd_41_db; // Sondierungstiefe distobukkal 41

		// Set der vertikalen Koordinaten von Zahn 41 (lingual) aus dem Formular
		var y_gm_41_dl = gm_UK_l + 6.05 * gm_41_dl; // Margo Gingivae distolingual 41
		var y_pd_41_dl = 6.05 * pd_41_dl; // Sondierungstiefe distolingual 41

		// Berechnung des Attachmentniveaus 41 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_41_db = y_gm_41_db + y_pd_41_db; // Attachmentniveau distobukkal 41

		// Berechnung des Attachmentniveaus 41 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_41_dl = y_gm_41_dl - y_pd_41_dl; // Attachmentniveau distolingual 41

		// Parodontaltasche inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_al_42_mb + "  "
			+ x_db_41 + ", " + y_al_41_db + "  "
			+ x_db_41 + ", " + y_gm_41_db + "  "
			+ x_mb_42 + ", " + y_gm_42_mb;
		document.getElementById("s_polygon_inter_42_41_b").setAttribute("points", string);
		// Attachmentniveau inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_al_42_mb + "  "
			+ x_db_41 + ", " + y_al_41_db;
		document.getElementById("s_polyline_al_inter_42_41_b").setAttribute("points", string);
		// Margo Gingivae inter_42_41 bukkal zeichnen
		var string =
			x_mb_42 + ", " + y_gm_42_mb + "  "
			+ x_db_41 + ", " + y_gm_41_db;
		document.getElementById("s_polyline_gm_inter_42_41_b").setAttribute("points", string);

		// Parodontaltasche inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_al_42_ml + "  "
			+ x_dl_41 + ", " + y_al_41_dl + "  "
			+ x_dl_41 + ", " + y_gm_41_dl + "  "
			+ x_ml_42 + ", " + y_gm_42_ml;
		document.getElementById("s_polygon_inter_42_41_l").setAttribute("points", string);
		// Attachmentniveau inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_al_42_ml + "  "
			+ x_dl_41 + ", " + y_al_41_dl;
		document.getElementById("s_polyline_al_inter_42_41_l").setAttribute("points", string);
		// Margo Gingivae inter_42_41 lingual zeichnen
		var string =
			x_ml_42 + ", " + y_gm_42_ml + "  "
			+ x_dl_41 + ", " + y_gm_41_dl;
		document.getElementById("s_polyline_gm_inter_42_41_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_42_41_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_42_41_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_42_41_b').style.display = 'none';

		document.getElementById('s_polygon_inter_42_41_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_42_41_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_42_41_l').style.display = 'none';
	}
	if (Number(jsonObj2.tooth_43) == 1 && Number(jsonObj2.tooth_42) == 1) {
		document.getElementById('s_polygon_inter_43_42_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_43_42_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_43_42_b').style.display = 'block';

		document.getElementById('s_polygon_inter_43_42_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_43_42_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_43_42_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
		var x_mb_43 = 592; // mesial 43

		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
		var x_ml_43 = 590; // mesial 43

		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
		var y_gm_43_mb = gm_UK_b - 6.05 * gm_43_mb; // Margo Gingivae mesiobukkal 43
		var y_pd_43_mb = 6.05 * pd_43_mb; // Sondierungstiefe mesiobukkal 43

		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
		var y_gm_43_ml = gm_UK_l + 6.05 * gm_43_ml; // Margo Gingivae mesiolingual 43
		var y_pd_43_ml = 6.05 * pd_43_ml; // Sondierungstiefe mesiolingual 43

		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_mb = y_gm_43_mb + y_pd_43_mb; // Attachmentniveau mesiobukkal 43

		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_ml = y_gm_43_ml - y_pd_43_ml; // Attachmentniveau mesiolingual 43

		// Parodontaltasche inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_al_43_mb + "  "
			+ x_db_42 + ", " + y_al_42_db + "  "
			+ x_db_42 + ", " + y_gm_42_db + "  "
			+ x_mb_43 + ", " + y_gm_43_mb;
		document.getElementById("s_polygon_inter_43_42_b").setAttribute("points", string);
		// Attachmentniveau inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_al_43_mb + "  "
			+ x_db_42 + ", " + y_al_42_db;
		document.getElementById("s_polyline_al_inter_43_42_b").setAttribute("points", string);
		// Margo Gingivae inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_gm_43_mb + "  "
			+ x_db_42 + ", " + y_gm_42_db;
		document.getElementById("s_polyline_gm_inter_43_42_b").setAttribute("points", string);

		// Parodontaltasche inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_al_43_ml + "  "
			+ x_dl_42 + ", " + y_al_42_dl + "  "
			+ x_dl_42 + ", " + y_gm_42_dl + "  "
			+ x_ml_43 + ", " + y_gm_43_ml;
		document.getElementById("s_polygon_inter_43_42_l").setAttribute("points", string);
		// Attachmentniveau inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_al_43_ml + "  "
			+ x_dl_42 + ", " + y_al_42_dl;
		document.getElementById("s_polyline_al_inter_43_42_l").setAttribute("points", string);
		// Margo Gingivae inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_gm_43_ml + "  "
			+ x_dl_42 + ", " + y_gm_42_dl;
		document.getElementById("s_polyline_gm_inter_43_42_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_43_42_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_43_42_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_43_42_b').style.display = 'none';

		document.getElementById('s_polygon_inter_43_42_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_43_42_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_43_42_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_43) == 1) {
		document.getElementById('s_polygon_43_b').style.display = 'block';
		document.getElementById('s_polyline_al_43_b').style.display = 'block';
		document.getElementById('s_polyline_gm_43_b').style.display = 'block';

		document.getElementById('s_polygon_43_l').style.display = 'block';
		document.getElementById('s_polyline_al_43_l').style.display = 'block';
		document.getElementById('s_polyline_gm_43_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
		var x_db_43 = 570; // distal 43
		var x_mb_43 = 592; // mesial 43
		var x_b_43 = (x_db_43 + x_mb_43) / 2; // bukkal 43

		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
		var x_dl_43 = 570; // distal 43
		var x_ml_43 = 590; // mesial 43
		var x_l_43 = (x_dl_43 + x_ml_43) / 2; // lingual 43

		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
		var y_gm_43_db = gm_UK_b - 6.05 * gm_43_db; // Margo Gingivae distobukkal 43
		var y_gm_43_b = gm_UK_b - 6.05 * gm_43_b; // Margo Gingivae bukkal 43
		var y_gm_43_mb = gm_UK_b - 6.05 * gm_43_mb; // Margo Gingivae mesiobukkal 43
		var y_pd_43_db = 6.05 * pd_43_db; // Sondierungstiefe distobukkal 43
		var y_pd_43_b = 6.05 * pd_43_b; // Sondierungstiefe bukkal 43
		var y_pd_43_mb = 6.05 * pd_43_mb; // Sondierungstiefe mesiobukkal 43

		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
		var y_gm_43_dl = gm_UK_l + 6.05 * gm_43_dl; // Margo Gingivae distolingual 43
		var y_gm_43_l = gm_UK_l + 6.05 * gm_43_l; // Margo Gingivae lingual 43
		var y_gm_43_ml = gm_UK_l + 6.05 * gm_43_ml; // Margo Gingivae mesiolingual 43
		var y_pd_43_dl = 6.05 * pd_43_dl; // Sondierungstiefe distolingual 43
		var y_pd_43_l = 6.05 * pd_43_l; // Sondierungstiefe lingual 43
		var y_pd_43_ml = 6.05 * pd_43_ml; // Sondierungstiefe mesiolingual 43

		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_db = y_gm_43_db + y_pd_43_db; // Attachmentniveau distobukkal 43
		var y_al_43_b = y_gm_43_b + y_pd_43_b; // Attachmentniveau bukkal 43
		var y_al_43_mb = y_gm_43_mb + y_pd_43_mb; // Attachmentniveau mesiobukkal 43

		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_dl = y_gm_43_dl - y_pd_43_dl; // Attachmentniveau distolingual 43
		var y_al_43_l = y_gm_43_l - y_pd_43_l; // Attachmentniveau lingual 43
		var y_al_43_ml = y_gm_43_ml - y_pd_43_ml; // Attachmentniveau mesiolingual 43

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[43].storeCoordinates(
			x_db_43, x_mb_43, x_dl_43, x_ml_43, x_b_43, x_l_43,
			y_gm_43_db, y_gm_43_b, y_gm_43_mb, y_pd_43_dl, y_pd_43_b, y_pd_43_ml,
			y_gm_43_dl, y_gm_43_l, y_gm_43_ml, y_pd_43_dl, y_pd_43_l, y_pd_43_ml,
			y_al_43_db, y_al_43_b, y_al_43_mb, y_al_43_dl, y_al_43_l, y_al_43_ml
		);

		// Parodontaltasche 43 bukkal zeichnen
		var string =
			x_db_43 + ", " + y_al_43_db + "  "
			+ x_b_43 + ", " + y_al_43_b + "  "
			+ x_mb_43 + ", " + y_al_43_mb + "  "
			+ x_mb_43 + ", " + y_gm_43_mb + "  "
			+ x_b_43 + ", " + y_gm_43_b + "  "
			+ x_db_43 + ", " + y_gm_43_db;
		document.getElementById("s_polygon_43_b").setAttribute("points", string);
		// Attachmentniveau 43 bukkal zeichnen
		var string =
			x_db_43 + ", " + y_al_43_db + "  "
			+ x_b_43 + ", " + y_al_43_b + "  "
			+ x_mb_43 + ", " + y_al_43_mb;
		document.getElementById("s_polyline_al_43_b").setAttribute("points", string);
		// Margo Gingivae 43 bukkal zeichnen
		var string =
			x_db_43 + ", " + y_gm_43_db + "  "
			+ x_b_43 + ", " + y_gm_43_b + "  "
			+ x_mb_43 + ", " + y_gm_43_mb;
		document.getElementById("s_polyline_gm_43_b").setAttribute("points", string);

		// Parodontaltasche 43 lingual zeichnen
		var string =
			x_dl_43 + ", " + y_al_43_dl + "  "
			+ x_l_43 + ", " + y_al_43_l + "  "
			+ x_ml_43 + ", " + y_al_43_ml + "  "
			+ x_ml_43 + ", " + y_gm_43_ml + "  "
			+ x_l_43 + ", " + y_gm_43_l + "  "
			+ x_dl_43 + ", " + y_gm_43_dl;
		document.getElementById("s_polygon_43_l").setAttribute("points", string);
		// Attachmentniveau 43 lingual zeichnen
		var string =
			x_dl_43 + ", " + y_al_43_dl + "  "
			+ x_l_43 + ", " + y_al_43_l + "  "
			+ x_ml_43 + ", " + y_al_43_ml;
		document.getElementById("s_polyline_al_43_l").setAttribute("points", string);
		// Margo Gingivae 43 lingual zeichnen
		var string =
			x_dl_43 + ", " + y_gm_43_dl + "  "
			+ x_l_43 + ", " + y_gm_43_l + "  "
			+ x_ml_43 + ", " + y_gm_43_ml;
		document.getElementById("s_polyline_gm_43_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_43_b').style.display = 'none';
		document.getElementById('s_polyline_al_43_b').style.display = 'none';
		document.getElementById('s_polyline_gm_43_b').style.display = 'none';

		document.getElementById('s_polygon_43_l').style.display = 'none';
		document.getElementById('s_polyline_al_43_l').style.display = 'none';
		document.getElementById('s_polyline_gm_43_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_43) == 1 && Number(jsonObj2.tooth_42) == 1) {
		document.getElementById('s_polygon_inter_43_42_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_43_42_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_43_42_b').style.display = 'block';

		document.getElementById('s_polygon_inter_43_42_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_43_42_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_43_42_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
		var x_db_42 = 610; // distal 42

		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
		var x_dl_42 = 607; // distal 42

		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
		var y_gm_42_db = gm_UK_b - 6.05 * gm_42_db; // Margo Gingivae distobukkal 42
		var y_pd_42_db = 6.05 * pd_42_db; // Sondierungstiefe distobukkal 42

		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
		var y_gm_42_dl = gm_UK_l + 6.05 * gm_42_dl; // Margo Gingivae distolingual 42
		var y_pd_42_dl = 6.05 * pd_42_dl; // Sondierungstiefe distolingual 42

		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_db = y_gm_42_db + y_pd_42_db; // Attachmentniveau distobukkal 42

		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_42_dl = y_gm_42_dl - y_pd_42_dl; // Attachmentniveau distolingual 42

		// Parodontaltasche inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_al_43_mb + "  "
			+ x_db_42 + ", " + y_al_42_db + "  "
			+ x_db_42 + ", " + y_gm_42_db + "  "
			+ x_mb_43 + ", " + y_gm_43_mb;
		document.getElementById("s_polygon_inter_43_42_b").setAttribute("points", string);
		// Attachmentniveau inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_al_43_mb + "  "
			+ x_db_42 + ", " + y_al_42_db;
		document.getElementById("s_polyline_al_inter_43_42_b").setAttribute("points", string);
		// Margo Gingivae inter_43_42 bukkal zeichnen
		var string =
			x_mb_43 + ", " + y_gm_43_mb + "  "
			+ x_db_42 + ", " + y_gm_42_db;
		document.getElementById("s_polyline_gm_inter_43_42_b").setAttribute("points", string);

		// Parodontaltasche inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_al_43_ml + "  "
			+ x_dl_42 + ", " + y_al_42_dl + "  "
			+ x_dl_42 + ", " + y_gm_42_dl + "  "
			+ x_ml_43 + ", " + y_gm_43_ml;
		document.getElementById("s_polygon_inter_43_42_l").setAttribute("points", string);
		// Attachmentniveau inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_al_43_ml + "  "
			+ x_dl_42 + ", " + y_al_42_dl;
		document.getElementById("s_polyline_al_inter_43_42_l").setAttribute("points", string);
		// Margo Gingivae inter_43_42 lingual zeichnen
		var string =
			x_ml_43 + ", " + y_gm_43_ml + "  "
			+ x_dl_42 + ", " + y_gm_42_dl;
		document.getElementById("s_polyline_gm_inter_43_42_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_43_42_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_43_42_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_43_42_b').style.display = 'none';

		document.getElementById('s_polygon_inter_43_42_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_43_42_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_43_42_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_44) == 1 && Number(jsonObj2.tooth_43) == 1) {
		document.getElementById('s_polygon_inter_44_43_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_44_43_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_44_43_b').style.display = 'block';

		document.getElementById('s_polygon_inter_44_43_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_44_43_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_44_43_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
		var x_mb_44 = 553; // mesial 44

		// Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
		var x_ml_44 = 553; // mesial 44

		// Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
		var y_gm_44_mb = gm_UK_b - 6.05 * gm_44_mb; // Margo Gingivae mesiobukkal 44
		var y_pd_44_mb = 6.05 * pd_44_mb; // Sondierungstiefe mesiobukkal 44

		// Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
		var y_gm_44_ml = gm_UK_l + 6.05 * gm_44_ml; // Margo Gingivae mesiolingual 44
		var y_pd_44_ml = 6.05 * pd_44_ml; // Sondierungstiefe mesiolingual 44

		// Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_mb = y_gm_44_mb + y_pd_44_mb; // Attachmentniveau mesiobukkal 44

		// Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_ml = y_gm_44_ml - y_pd_44_ml; // Attachmentniveau mesiolingual 44

		// Parodontaltasche inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_al_44_mb + "  "
			+ x_db_43 + ", " + y_al_43_db + "  "
			+ x_db_43 + ", " + y_gm_43_db + "  "
			+ x_mb_44 + ", " + y_gm_44_mb;
		document.getElementById("s_polygon_inter_44_43_b").setAttribute("points", string);
		// Attachmentniveau inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_al_44_mb + "  "
			+ x_db_43 + ", " + y_al_43_db;
		document.getElementById("s_polyline_al_inter_44_43_b").setAttribute("points", string);
		// Margo Gingivae inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_gm_44_mb + "  "
			+ x_db_43 + ", " + y_gm_43_db;
		document.getElementById("s_polyline_gm_inter_44_43_b").setAttribute("points", string);

		// Parodontaltasche inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_al_44_ml + "  "
			+ x_dl_43 + ", " + y_al_43_dl + "  "
			+ x_dl_43 + ", " + y_gm_43_dl + "  "
			+ x_ml_44 + ", " + y_gm_44_ml;
		document.getElementById("s_polygon_inter_44_43_l").setAttribute("points", string);
		// Attachmentniveau inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_al_44_ml + "  "
			+ x_dl_43 + ", " + y_al_43_dl;
		document.getElementById("s_polyline_al_inter_44_43_l").setAttribute("points", string);
		// Margo Gingivae inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_gm_44_ml + "  "
			+ x_dl_43 + ", " + y_gm_43_dl;
		document.getElementById("s_polyline_gm_inter_44_43_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_44_43_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_44_43_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_44_43_b').style.display = 'none';

		document.getElementById('s_polygon_inter_44_43_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_44_43_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_44_43_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_44) == 1) {
		document.getElementById('s_polygon_44_b').style.display = 'block';
		document.getElementById('s_polyline_al_44_b').style.display = 'block';
		document.getElementById('s_polyline_gm_44_b').style.display = 'block';

		document.getElementById('s_polygon_44_l').style.display = 'block';
		document.getElementById('s_polyline_al_44_l').style.display = 'block';
		document.getElementById('s_polyline_gm_44_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
		var x_db_44 = 533; // distal 44
		var x_mb_44 = 553; // mesial 44
		var x_b_44 = (x_db_44 + x_mb_44) / 2; // bukkal 44

		// Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
		var x_dl_44 = 531; // distal 44
		var x_ml_44 = 553; // mesial 44
		var x_l_44 = (x_dl_44 + x_ml_44) / 2; // lingual 44

		// Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
		var y_gm_44_db = gm_UK_b - 6.05 * gm_44_db; // Margo Gingivae distobukkal 44
		var y_gm_44_b = gm_UK_b - 6.05 * gm_44_b; // Margo Gingivae bukkal 44
		var y_gm_44_mb = gm_UK_b - 6.05 * gm_44_mb; // Margo Gingivae mesiobukkal 44
		var y_pd_44_db = 6.05 * pd_44_db; // Sondierungstiefe distobukkal 44
		var y_pd_44_b = 6.05 * pd_44_b; // Sondierungstiefe bukkal 44
		var y_pd_44_mb = 6.05 * pd_44_mb; // Sondierungstiefe mesiobukkal 44

		// Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
		var y_gm_44_dl = gm_UK_l + 6.05 * gm_44_dl; // Margo Gingivae distolingual 44
		var y_gm_44_l = gm_UK_l + 6.05 * gm_44_l; // Margo Gingivae lingual 44
		var y_gm_44_ml = gm_UK_l + 6.05 * gm_44_ml; // Margo Gingivae mesiolingual 44
		var y_pd_44_dl = 6.05 * pd_44_dl; // Sondierungstiefe distolingual 44
		var y_pd_44_l = 6.05 * pd_44_l; // Sondierungstiefe lingual 44
		var y_pd_44_ml = 6.05 * pd_44_ml; // Sondierungstiefe mesiolingual 44

		// Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_db = y_gm_44_db + y_pd_44_db; // Attachmentniveau distobukkal 44
		var y_al_44_b = y_gm_44_b + y_pd_44_b; // Attachmentniveau bukkal 44
		var y_al_44_mb = y_gm_44_mb + y_pd_44_mb; // Attachmentniveau mesiobukkal 44

		// Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_dl = y_gm_44_dl - y_pd_44_dl; // Attachmentniveau distolingual 44
		var y_al_44_l = y_gm_44_l - y_pd_44_l; // Attachmentniveau lingual 44
		var y_al_44_ml = y_gm_44_ml - y_pd_44_ml; // Attachmentniveau mesiolingual 44

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[44].storeCoordinates(
			x_db_44, x_mb_44, x_dl_44, x_ml_44, x_b_44, x_l_44,
			y_gm_44_db, y_gm_44_b, y_gm_44_mb, y_pd_44_dl, y_pd_44_b, y_pd_44_ml,
			y_gm_44_dl, y_gm_44_l, y_gm_44_ml, y_pd_44_dl, y_pd_44_l, y_pd_44_ml,
			y_al_44_db, y_al_44_b, y_al_44_mb, y_al_44_dl, y_al_44_l, y_al_44_ml
		);

		// Parodontaltasche 44 bukkal zeichnen
		var string =
			x_db_44 + ", " + y_al_44_db + "  "
			+ x_b_44 + ", " + y_al_44_b + "  "
			+ x_mb_44 + ", " + y_al_44_mb + "  "
			+ x_mb_44 + ", " + y_gm_44_mb + "  "
			+ x_b_44 + ", " + y_gm_44_b + "  "
			+ x_db_44 + ", " + y_gm_44_db;
		document.getElementById("s_polygon_44_b").setAttribute("points", string);
		// Attachmentniveau 44 bukkal zeichnen
		var string =
			x_db_44 + ", " + y_al_44_db + "  "
			+ x_b_44 + ", " + y_al_44_b + "  "
			+ x_mb_44 + ", " + y_al_44_mb;
		document.getElementById("s_polyline_al_44_b").setAttribute("points", string);
		// Margo Gingivae 44 bukkal zeichnen
		var string =
			x_db_44 + ", " + y_gm_44_db + "  "
			+ x_b_44 + ", " + y_gm_44_b + "  "
			+ x_mb_44 + ", " + y_gm_44_mb;
		document.getElementById("s_polyline_gm_44_b").setAttribute("points", string);

		// Parodontaltasche 44 lingual zeichnen
		var string =
			x_dl_44 + ", " + y_al_44_dl + "  "
			+ x_l_44 + ", " + y_al_44_l + "  "
			+ x_ml_44 + ", " + y_al_44_ml + "  "
			+ x_ml_44 + ", " + y_gm_44_ml + "  "
			+ x_l_44 + ", " + y_gm_44_l + "  "
			+ x_dl_44 + ", " + y_gm_44_dl;
		document.getElementById("s_polygon_44_l").setAttribute("points", string);
		// Attachmentniveau 44 lingual zeichnen
		var string =
			x_dl_44 + ", " + y_al_44_dl + "  "
			+ x_l_44 + ", " + y_al_44_l + "  "
			+ x_ml_44 + ", " + y_al_44_ml;
		document.getElementById("s_polyline_al_44_l").setAttribute("points", string);
		// Margo Gingivae 44 lingual zeichnen
		var string =
			x_dl_44 + ", " + y_gm_44_dl + "  "
			+ x_l_44 + ", " + y_gm_44_l + "  "
			+ x_ml_44 + ", " + y_gm_44_ml;
		document.getElementById("s_polyline_gm_44_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_44_b').style.display = 'none';
		document.getElementById('s_polyline_al_44_b').style.display = 'none';
		document.getElementById('s_polyline_gm_44_b').style.display = 'none';

		document.getElementById('s_polygon_44_l').style.display = 'none';
		document.getElementById('s_polyline_al_44_l').style.display = 'none';
		document.getElementById('s_polyline_gm_44_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_44) == 1 && Number(jsonObj2.tooth_43) == 1) {
		document.getElementById('s_polygon_inter_44_43_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_44_43_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_44_43_b').style.display = 'block';

		document.getElementById('s_polygon_inter_44_43_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_44_43_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_44_43_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
		var x_db_43 = 570; // distal 43

		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
		var x_dl_43 = 570; // distal 43

		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
		var y_gm_43_db = gm_UK_b - 6.05 * gm_43_db; // Margo Gingivae distobukkal 43
		var y_pd_43_db = 6.05 * pd_43_db; // Sondierungstiefe distobukkal 43

		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
		var y_gm_43_dl = gm_UK_l + 6.05 * gm_43_dl; // Margo Gingivae distolingual 43
		var y_pd_43_dl = 6.05 * pd_43_dl; // Sondierungstiefe distolingual 43

		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_db = y_gm_43_db + y_pd_43_db; // Attachmentniveau distobukkal 43

		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_43_dl = y_gm_43_dl - y_pd_43_dl; // Attachmentniveau distolingual 43

		// Parodontaltasche inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_al_44_mb + "  "
			+ x_db_43 + ", " + y_al_43_db + "  "
			+ x_db_43 + ", " + y_gm_43_db + "  "
			+ x_mb_44 + ", " + y_gm_44_mb;
		document.getElementById("s_polygon_inter_44_43_b").setAttribute("points", string);
		// Attachmentniveau inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_al_44_mb + "  "
			+ x_db_43 + ", " + y_al_43_db;
		document.getElementById("s_polyline_al_inter_44_43_b").setAttribute("points", string);
		// Margo Gingivae inter_44_43 bukkal zeichnen
		var string =
			x_mb_44 + ", " + y_gm_44_mb + "  "
			+ x_db_43 + ", " + y_gm_43_db;
		document.getElementById("s_polyline_gm_inter_44_43_b").setAttribute("points", string);

		// Parodontaltasche inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_al_44_ml + "  "
			+ x_dl_43 + ", " + y_al_43_dl + "  "
			+ x_dl_43 + ", " + y_gm_43_dl + "  "
			+ x_ml_44 + ", " + y_gm_44_ml;
		document.getElementById("s_polygon_inter_44_43_l").setAttribute("points", string);
		// Attachmentniveau inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_al_44_ml + "  "
			+ x_dl_43 + ", " + y_al_43_dl;
		document.getElementById("s_polyline_al_inter_44_43_l").setAttribute("points", string);
		// Margo Gingivae inter_44_43 lingual zeichnen
		var string =
			x_ml_44 + ", " + y_gm_44_ml + "  "
			+ x_dl_43 + ", " + y_gm_43_dl;
		document.getElementById("s_polyline_gm_inter_44_43_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_44_43_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_44_43_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_44_43_b').style.display = 'none';

		document.getElementById('s_polygon_inter_44_43_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_44_43_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_44_43_l').style.display = 'none';
	}
	
	if (Number(jsonObj2.tooth_45) == 1 && Number(jsonObj2.tooth_44) == 1) {
		document.getElementById('s_polygon_inter_45_44_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_45_44_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_45_44_b').style.display = 'block';

		document.getElementById('s_polygon_inter_45_44_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_45_44_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_45_44_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
		var x_mb_45 = 513; // mesial 45

		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
		var x_ml_45 = 513; // mesial 45

		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
		var y_gm_45_mb = gm_UK_b - 6.05 * gm_45_mb; // Margo Gingivae mesiobukkal 45
		var y_pd_45_mb = 6.05 * pd_45_mb; // Sondierungstiefe mesiobukkal 45

		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
		var y_gm_45_ml = gm_UK_l + 6.05 * gm_45_ml; // Margo Gingivae mesiolingual 45
		var y_pd_45_ml = 6.05 * pd_45_ml; // Sondierungstiefe mesiolingual 45

		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_mb = y_gm_45_mb + y_pd_45_mb; // Attachmentniveau mesiobukkal 45

		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_ml = y_gm_45_ml - y_pd_45_ml; // Attachmentniveau mesiolingual 45

		// Parodontaltasche inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_al_45_mb + "  "
			+ x_db_44 + ", " + y_al_44_db + "  "
			+ x_db_44 + ", " + y_gm_44_db + "  "
			+ x_mb_45 + ", " + y_gm_45_mb;
		document.getElementById("s_polygon_inter_45_44_b").setAttribute("points", string);
		// Attachmentniveau inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_al_45_mb + "  "
			+ x_db_44 + ", " + y_al_44_db;
		document.getElementById("s_polyline_al_inter_45_44_b").setAttribute("points", string);
		// Margo Gingivae inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_gm_45_mb + "  "
			+ x_db_44 + ", " + y_gm_44_db;
		document.getElementById("s_polyline_gm_inter_45_44_b").setAttribute("points", string);

		// Parodontaltasche inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_al_45_ml + "  "
			+ x_dl_44 + ", " + y_al_44_dl + "  "
			+ x_dl_44 + ", " + y_gm_44_dl + "  "
			+ x_ml_45 + ", " + y_gm_45_ml;
		document.getElementById("s_polygon_inter_45_44_l").setAttribute("points", string);
		// Attachmentniveau inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_al_45_ml + "  "
			+ x_dl_44 + ", " + y_al_44_dl;
		document.getElementById("s_polyline_al_inter_45_44_l").setAttribute("points", string);
		// Margo Gingivae inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_gm_45_ml + "  "
			+ x_dl_44 + ", " + y_gm_44_dl;
		document.getElementById("s_polyline_gm_inter_45_44_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_45_44_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_45_44_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_45_44_b').style.display = 'none';

		document.getElementById('s_polygon_inter_45_44_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_45_44_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_45_44_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_45) == 1) {
		document.getElementById('s_polygon_45_b').style.display = 'block';
		document.getElementById('s_polyline_al_45_b').style.display = 'block';
		document.getElementById('s_polyline_gm_45_b').style.display = 'block';

		document.getElementById('s_polygon_45_l').style.display = 'block';
		document.getElementById('s_polyline_al_45_l').style.display = 'block';
		document.getElementById('s_polyline_gm_45_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
		var x_db_45 = 492; // distal 45
		var x_mb_45 = 513; // mesial 45
		var x_b_45 = (x_db_45 + x_mb_45) / 2; // bukkal 45

		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
		var x_dl_45 = 489; // distal 45
		var x_ml_45 = 513; // mesial 45
		var x_l_45 = (x_dl_45 + x_ml_45) / 2; // lingual 45

		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
		var y_gm_45_db = gm_UK_b - 6.05 * gm_45_db; // Margo Gingivae distobukkal 45
		var y_gm_45_b = gm_UK_b - 6.05 * gm_45_b; // Margo Gingivae bukkal 45
		var y_gm_45_mb = gm_UK_b - 6.05 * gm_45_mb; // Margo Gingivae mesiobukkal 45
		var y_pd_45_db = 6.05 * pd_45_db; // Sondierungstiefe distobukkal 45
		var y_pd_45_b = 6.05 * pd_45_b; // Sondierungstiefe bukkal 45
		var y_pd_45_mb = 6.05 * pd_45_mb; // Sondierungstiefe mesiobukkal 45

		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
		var y_gm_45_dl = gm_UK_l + 6.05 * gm_45_dl; // Margo Gingivae distolingual 45
		var y_gm_45_l = gm_UK_l + 6.05 * gm_45_l; // Margo Gingivae lingual 45
		var y_gm_45_ml = gm_UK_l + 6.05 * gm_45_ml; // Margo Gingivae mesiolingual 45
		var y_pd_45_dl = 6.05 * pd_45_dl; // Sondierungstiefe distolingual 45
		var y_pd_45_l = 6.05 * pd_45_l; // Sondierungstiefe lingual 45
		var y_pd_45_ml = 6.05 * pd_45_ml; // Sondierungstiefe mesiolingual 45

		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_db = y_gm_45_db + y_pd_45_db; // Attachmentniveau distobukkal 45
		var y_al_45_b = y_gm_45_b + y_pd_45_b; // Attachmentniveau bukkal 45
		var y_al_45_mb = y_gm_45_mb + y_pd_45_mb; // Attachmentniveau mesiobukkal 45

		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_dl = y_gm_45_dl - y_pd_45_dl; // Attachmentniveau distolingual 45
		var y_al_45_l = y_gm_45_l - y_pd_45_l; // Attachmentniveau lingual 45
		var y_al_45_ml = y_gm_45_ml - y_pd_45_ml; // Attachmentniveau mesiolingual 45

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[45].storeCoordinates(
			x_db_45, x_mb_45, x_dl_45, x_ml_45, x_b_45, x_l_45,
			y_gm_45_db, y_gm_45_b, y_gm_45_mb, y_pd_45_dl, y_pd_45_b, y_pd_45_ml,
			y_gm_45_dl, y_gm_45_l, y_gm_45_ml, y_pd_45_dl, y_pd_45_l, y_pd_45_ml,
			y_al_45_db, y_al_45_b, y_al_45_mb, y_al_45_dl, y_al_45_l, y_al_45_ml
		);

		// Parodontaltasche 45 bukkal zeichnen
		var string =
			x_db_45 + ", " + y_al_45_db + "  "
			+ x_b_45 + ", " + y_al_45_b + "  "
			+ x_mb_45 + ", " + y_al_45_mb + "  "
			+ x_mb_45 + ", " + y_gm_45_mb + "  "
			+ x_b_45 + ", " + y_gm_45_b + "  "
			+ x_db_45 + ", " + y_gm_45_db;
		document.getElementById("s_polygon_45_b").setAttribute("points", string);
		// Attachmentniveau 45 bukkal zeichnen
		var string =
			x_db_45 + ", " + y_al_45_db + "  "
			+ x_b_45 + ", " + y_al_45_b + "  "
			+ x_mb_45 + ", " + y_al_45_mb;
		document.getElementById("s_polyline_al_45_b").setAttribute("points", string);
		// Margo Gingivae 45 bukkal zeichnen
		var string =
			x_db_45 + ", " + y_gm_45_db + "  "
			+ x_b_45 + ", " + y_gm_45_b + "  "
			+ x_mb_45 + ", " + y_gm_45_mb;
		document.getElementById("s_polyline_gm_45_b").setAttribute("points", string);

		// Parodontaltasche 45 lingual zeichnen
		var string =
			x_dl_45 + ", " + y_al_45_dl + "  "
			+ x_l_45 + ", " + y_al_45_l + "  "
			+ x_ml_45 + ", " + y_al_45_ml + "  "
			+ x_ml_45 + ", " + y_gm_45_ml + "  "
			+ x_l_45 + ", " + y_gm_45_l + "  "
			+ x_dl_45 + ", " + y_gm_45_dl;
		document.getElementById("s_polygon_45_l").setAttribute("points", string);
		// Attachmentniveau 45 lingual zeichnen
		var string =
			x_dl_45 + ", " + y_al_45_dl + "  "
			+ x_l_45 + ", " + y_al_45_l + "  "
			+ x_ml_45 + ", " + y_al_45_ml;
		document.getElementById("s_polyline_al_45_l").setAttribute("points", string);
		// Margo Gingivae 45 lingual zeichnen
		var string =
			x_dl_45 + ", " + y_gm_45_dl + "  "
			+ x_l_45 + ", " + y_gm_45_l + "  "
			+ x_ml_45 + ", " + y_gm_45_ml;
		document.getElementById("s_polyline_gm_45_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_45_b').style.display = 'none';
		document.getElementById('s_polyline_al_45_b').style.display = 'none';
		document.getElementById('s_polyline_gm_45_b').style.display = 'none';

		document.getElementById('s_polygon_45_l').style.display = 'none';
		document.getElementById('s_polyline_al_45_l').style.display = 'none';
		document.getElementById('s_polyline_gm_45_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_45) == 1 && Number(jsonObj2.tooth_44) == 1) {
		document.getElementById('s_polygon_inter_45_44_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_45_44_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_45_44_b').style.display = 'block';

		document.getElementById('s_polygon_inter_45_44_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_45_44_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_45_44_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
		var x_db_44 = 533; // distal 44

		// Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
		var x_dl_44 = 531; // distal 44

		// Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
		var y_gm_44_db = gm_UK_b - 6.05 * gm_44_db; // Margo Gingivae distobukkal 44
		var y_pd_44_db = 6.05 * pd_44_db; // Sondierungstiefe distobukkal 44

		// Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
		var y_gm_44_dl = gm_UK_l + 6.05 * gm_44_dl; // Margo Gingivae distolingual 44
		var y_pd_44_dl = 6.05 * pd_44_dl; // Sondierungstiefe distolingual 44

		// Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_db = y_gm_44_db + y_pd_44_db; // Attachmentniveau distobukkal 44

		// Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_44_dl = y_gm_44_dl - y_pd_44_dl; // Attachmentniveau distolingual 44

		// Parodontaltasche inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_al_45_mb + "  "
			+ x_db_44 + ", " + y_al_44_db + "  "
			+ x_db_44 + ", " + y_gm_44_db + "  "
			+ x_mb_45 + ", " + y_gm_45_mb;
		document.getElementById("s_polygon_inter_45_44_b").setAttribute("points", string);
		// Attachmentniveau inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_al_45_mb + "  "
			+ x_db_44 + ", " + y_al_44_db;
		document.getElementById("s_polyline_al_inter_45_44_b").setAttribute("points", string);
		// Margo Gingivae inter_45_44 bukkal zeichnen
		var string =
			x_mb_45 + ", " + y_gm_45_mb + "  "
			+ x_db_44 + ", " + y_gm_44_db;
		document.getElementById("s_polyline_gm_inter_45_44_b").setAttribute("points", string);

		// Parodontaltasche inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_al_45_ml + "  "
			+ x_dl_44 + ", " + y_al_44_dl + "  "
			+ x_dl_44 + ", " + y_gm_44_dl + "  "
			+ x_ml_45 + ", " + y_gm_45_ml;
		document.getElementById("s_polygon_inter_45_44_l").setAttribute("points", string);
		// Attachmentniveau inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_al_45_ml + "  "
			+ x_dl_44 + ", " + y_al_44_dl;
		document.getElementById("s_polyline_al_inter_45_44_l").setAttribute("points", string);
		// Margo Gingivae inter_45_44 lingual zeichnen
		var string =
			x_ml_45 + ", " + y_gm_45_ml + "  "
			+ x_dl_44 + ", " + y_gm_44_dl;
		document.getElementById("s_polyline_gm_inter_45_44_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_45_44_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_45_44_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_45_44_b').style.display = 'none';

		document.getElementById('s_polygon_inter_45_44_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_45_44_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_45_44_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_46) == 1 && Number(jsonObj2.tooth_45) == 1) {
		document.getElementById('s_polygon_inter_46_45_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_46_45_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_46_45_b').style.display = 'block';

		document.getElementById('s_polygon_inter_46_45_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_46_45_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_46_45_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
		var x_mb_46 = 469; // mesial 46

		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
		var x_ml_46 = 469; // mesial 46

		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
		var y_gm_46_mb = gm_UK_b - 6.05 * gm_46_mb; // Margo Gingivae mesiobukkal 46
		var y_pd_46_mb = 6.05 * pd_46_mb; // Sondierungstiefe mesiobukkal 46

		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
		var y_gm_46_ml = gm_UK_l + 6.05 * gm_46_ml; // Margo Gingivae mesiolingual 46
		var y_pd_46_ml = 6.05 * pd_46_ml; // Sondierungstiefe mesiolingual 46

		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_mb = y_gm_46_mb + y_pd_46_mb; // Attachmentniveau mesiobukkal 46

		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_ml = y_gm_46_ml - y_pd_46_ml; // Attachmentniveau mesiolingual 46

		// Parodontaltasche inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_al_46_mb + "  "
			+ x_db_45 + ", " + y_al_45_db + "  "
			+ x_db_45 + ", " + y_gm_45_db + "  "
			+ x_mb_46 + ", " + y_gm_46_mb;
		document.getElementById("s_polygon_inter_46_45_b").setAttribute("points", string);
		// Attachmentniveau inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_al_46_mb + "  "
			+ x_db_45 + ", " + y_al_45_db;
		document.getElementById("s_polyline_al_inter_46_45_b").setAttribute("points", string);
		// Margo Gingivae inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_gm_46_mb + "  "
			+ x_db_45 + ", " + y_gm_45_db;
		document.getElementById("s_polyline_gm_inter_46_45_b").setAttribute("points", string);

		// Parodontaltasche inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_al_46_ml + "  "
			+ x_dl_45 + ", " + y_al_45_dl + "  "
			+ x_dl_45 + ", " + y_gm_45_dl + "  "
			+ x_ml_46 + ", " + y_gm_46_ml;
		document.getElementById("s_polygon_inter_46_45_l").setAttribute("points", string);
		// Attachmentniveau inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_al_46_ml + "  "
			+ x_dl_45 + ", " + y_al_45_dl;
		document.getElementById("s_polyline_al_inter_46_45_l").setAttribute("points", string);
		// Margo Gingivae inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_gm_46_ml + "  "
			+ x_dl_45 + ", " + y_gm_45_dl;
		document.getElementById("s_polyline_gm_inter_46_45_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_46_45_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_46_45_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_46_45_b').style.display = 'none';

		document.getElementById('s_polygon_inter_46_45_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_46_45_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_46_45_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_46) == 1) {
		document.getElementById('s_polygon_46_b').style.display = 'block';
		document.getElementById('s_polyline_al_46_b').style.display = 'block';
		document.getElementById('s_polyline_gm_46_b').style.display = 'block';

		document.getElementById('s_polygon_46_l').style.display = 'block';
		document.getElementById('s_polyline_al_46_l').style.display = 'block';
		document.getElementById('s_polyline_gm_46_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
		var x_db_46 = 422; // distal 46
		var x_mb_46 = 469; // mesial 46
		var x_b_46 = (x_db_46 + x_mb_46) / 2; // bukkal 46

		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
		var x_dl_46 = 425; // distal 46
		var x_ml_46 = 469; // mesial 46
		var x_l_46 = (x_dl_46 + x_ml_46) / 2; // lingual 46

		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
		var y_gm_46_db = gm_UK_b - 6.05 * gm_46_db; // Margo Gingivae distobukkal 46
		var y_gm_46_b = gm_UK_b - 6.05 * gm_46_b; // Margo Gingivae bukkal 46
		var y_gm_46_mb = gm_UK_b - 6.05 * gm_46_mb; // Margo Gingivae mesiobukkal 46
		var y_pd_46_db = 6.05 * pd_46_db; // Sondierungstiefe distobukkal 46
		var y_pd_46_b = 6.05 * pd_46_b; // Sondierungstiefe bukkal 46
		var y_pd_46_mb = 6.05 * pd_46_mb; // Sondierungstiefe mesiobukkal 46

		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
		var y_gm_46_dl = gm_UK_l + 6.05 * gm_46_dl; // Margo Gingivae distolingual 46
		var y_gm_46_l = gm_UK_l + 6.05 * gm_46_l; // Margo Gingivae lingual 46
		var y_gm_46_ml = gm_UK_l + 6.05 * gm_46_ml; // Margo Gingivae mesiolingual 46
		var y_pd_46_dl = 6.05 * pd_46_dl; // Sondierungstiefe distolingual 46
		var y_pd_46_l = 6.05 * pd_46_l; // Sondierungstiefe lingual 46
		var y_pd_46_ml = 6.05 * pd_46_ml; // Sondierungstiefe mesiolingual 46

		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_db = y_gm_46_db + y_pd_46_db; // Attachmentniveau distobukkal 46
		var y_al_46_b = y_gm_46_b + y_pd_46_b; // Attachmentniveau bukkal 46
		var y_al_46_mb = y_gm_46_mb + y_pd_46_mb; // Attachmentniveau mesiobukkal 46

		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_dl = y_gm_46_dl - y_pd_46_dl; // Attachmentniveau distolingual 46
		var y_al_46_l = y_gm_46_l - y_pd_46_l; // Attachmentniveau lingual 46
		var y_al_46_ml = y_gm_46_ml - y_pd_46_ml; // Attachmentniveau mesiolingual 46

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[46].storeCoordinates(
			x_db_46, x_mb_46, x_dl_46, x_ml_46, x_b_46, x_l_46,
			y_gm_46_db, y_gm_46_b, y_gm_46_mb, y_pd_46_dl, y_pd_46_b, y_pd_46_ml,
			y_gm_46_dl, y_gm_46_l, y_gm_46_ml, y_pd_46_dl, y_pd_46_l, y_pd_46_ml,
			y_al_46_db, y_al_46_b, y_al_46_mb, y_al_46_dl, y_al_46_l, y_al_46_ml
		);

		// Parodontaltasche 46 bukkal zeichnen
		var string =
			x_db_46 + ", " + y_al_46_db + "  "
			+ x_b_46 + ", " + y_al_46_b + "  "
			+ x_mb_46 + ", " + y_al_46_mb + "  "
			+ x_mb_46 + ", " + y_gm_46_mb + "  "
			+ x_b_46 + ", " + y_gm_46_b + "  "
			+ x_db_46 + ", " + y_gm_46_db;
		document.getElementById("s_polygon_46_b").setAttribute("points", string);
		// Attachmentniveau 46 bukkal zeichnen
		var string =
			x_db_46 + ", " + y_al_46_db + "  "
			+ x_b_46 + ", " + y_al_46_b + "  "
			+ x_mb_46 + ", " + y_al_46_mb;
		document.getElementById("s_polyline_al_46_b").setAttribute("points", string);
		// Margo Gingivae 46 bukkal zeichnen
		var string =
			x_db_46 + ", " + y_gm_46_db + "  "
			+ x_b_46 + ", " + y_gm_46_b + "  "
			+ x_mb_46 + ", " + y_gm_46_mb;
		document.getElementById("s_polyline_gm_46_b").setAttribute("points", string);

		// Parodontaltasche 46 lingual zeichnen
		var string =
			x_dl_46 + ", " + y_al_46_dl + "  "
			+ x_l_46 + ", " + y_al_46_l + "  "
			+ x_ml_46 + ", " + y_al_46_ml + "  "
			+ x_ml_46 + ", " + y_gm_46_ml + "  "
			+ x_l_46 + ", " + y_gm_46_l + "  "
			+ x_dl_46 + ", " + y_gm_46_dl;
		document.getElementById("s_polygon_46_l").setAttribute("points", string);
		// Attachmentniveau 46 lingual zeichnen
		var string =
			x_dl_46 + ", " + y_al_46_dl + "  "
			+ x_l_46 + ", " + y_al_46_l + "  "
			+ x_ml_46 + ", " + y_al_46_ml;
		document.getElementById("s_polyline_al_46_l").setAttribute("points", string);
		// Margo Gingivae 46 lingual zeichnen
		var string =
			x_dl_46 + ", " + y_gm_46_dl + "  "
			+ x_l_46 + ", " + y_gm_46_l + "  "
			+ x_ml_46 + ", " + y_gm_46_ml;
		document.getElementById("s_polyline_gm_46_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_46_b').style.display = 'none';
		document.getElementById('s_polyline_al_46_b').style.display = 'none';
		document.getElementById('s_polyline_gm_46_b').style.display = 'none';

		document.getElementById('s_polygon_46_l').style.display = 'none';
		document.getElementById('s_polyline_al_46_l').style.display = 'none';
		document.getElementById('s_polyline_gm_46_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_46) == 1 && Number(jsonObj2.tooth_45) == 1) {
		document.getElementById('s_polygon_inter_46_45_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_46_45_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_46_45_b').style.display = 'block';

		document.getElementById('s_polygon_inter_46_45_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_46_45_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_46_45_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
		var x_db_45 = 492; // distal 45

		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
		var x_dl_45 = 489; // distal 45

		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
		var y_gm_45_db = gm_UK_b - 6.05 * gm_45_db; // Margo Gingivae distobukkal 45
		var y_pd_45_db = 6.05 * pd_45_db; // Sondierungstiefe distobukkal 45

		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
		var y_gm_45_dl = gm_UK_l + 6.05 * gm_45_dl; // Margo Gingivae distolingual 45
		var y_pd_45_dl = 6.05 * pd_45_dl; // Sondierungstiefe distolingual 45

		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_db = y_gm_45_db + y_pd_45_db; // Attachmentniveau distobukkal 45

		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_45_dl = y_gm_45_dl - y_pd_45_dl; // Attachmentniveau distolingual 45

		// Parodontaltasche inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_al_46_mb + "  "
			+ x_db_45 + ", " + y_al_45_db + "  "
			+ x_db_45 + ", " + y_gm_45_db + "  "
			+ x_mb_46 + ", " + y_gm_46_mb;
		document.getElementById("s_polygon_inter_46_45_b").setAttribute("points", string);
		// Attachmentniveau inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_al_46_mb + "  "
			+ x_db_45 + ", " + y_al_45_db;
		document.getElementById("s_polyline_al_inter_46_45_b").setAttribute("points", string);
		// Margo Gingivae inter_46_45 bukkal zeichnen
		var string =
			x_mb_46 + ", " + y_gm_46_mb + "  "
			+ x_db_45 + ", " + y_gm_45_db;
		document.getElementById("s_polyline_gm_inter_46_45_b").setAttribute("points", string);

		// Parodontaltasche inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_al_46_ml + "  "
			+ x_dl_45 + ", " + y_al_45_dl + "  "
			+ x_dl_45 + ", " + y_gm_45_dl + "  "
			+ x_ml_46 + ", " + y_gm_46_ml;
		document.getElementById("s_polygon_inter_46_45_l").setAttribute("points", string);
		// Attachmentniveau inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_al_46_ml + "  "
			+ x_dl_45 + ", " + y_al_45_dl;
		document.getElementById("s_polyline_al_inter_46_45_l").setAttribute("points", string);
		// Margo Gingivae inter_46_45 lingual zeichnen
		var string =
			x_ml_46 + ", " + y_gm_46_ml + "  "
			+ x_dl_45 + ", " + y_gm_45_dl;
		document.getElementById("s_polyline_gm_inter_46_45_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_46_45_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_46_45_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_46_45_b').style.display = 'none';


		document.getElementById('s_polygon_inter_46_45_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_46_45_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_46_45_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_47) == 1 && Number(jsonObj2.tooth_46) == 1) {
		document.getElementById('s_polygon_inter_47_46_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_47_46_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_47_46_b').style.display = 'block';

		document.getElementById('s_polygon_inter_47_46_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_47_46_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_47_46_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
		var x_mb_47 = 406; // mesial 47

		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
		var x_ml_47 = 410; // mesial 47

		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
		var y_gm_47_mb = gm_UK_b - 6.05 * gm_47_mb; // Margo Gingivae mesiobukkal 47
		var y_pd_47_mb = 6.05 * pd_47_mb; // Sondierungstiefe mesiobukkal 47

		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
		var y_gm_47_ml = gm_UK_l + 6.05 * gm_47_ml; // Margo Gingivae mesiolingual 47
		var y_pd_47_ml = 6.05 * pd_47_ml; // Sondierungstiefe mesiolingual 47

		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_mb = y_gm_47_mb + y_pd_47_mb; // Attachmentniveau mesiobukkal 47

		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_ml = y_gm_47_ml - y_pd_47_ml; // Attachmentniveau mesiolingual 47

		// Parodontaltasche inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_al_47_mb + "  "
			+ x_db_46 + ", " + y_al_46_db + "  "
			+ x_db_46 + ", " + y_gm_46_db + "  "
			+ x_mb_47 + ", " + y_gm_47_mb;
		document.getElementById("s_polygon_inter_47_46_b").setAttribute("points", string);
		// Attachmentniveau inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_al_47_mb + "  "
			+ x_db_46 + ", " + y_al_46_db;
		document.getElementById("s_polyline_al_inter_47_46_b").setAttribute("points", string);
		// Margo Gingivae inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_gm_47_mb + "  "
			+ x_db_46 + ", " + y_gm_46_db;
		document.getElementById("s_polyline_gm_inter_47_46_b").setAttribute("points", string);

		// Parodontaltasche inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_al_47_ml + "  "
			+ x_dl_46 + ", " + y_al_46_dl + "  "
			+ x_dl_46 + ", " + y_gm_46_dl + "  "
			+ x_ml_47 + ", " + y_gm_47_ml;
		document.getElementById("s_polygon_inter_47_46_l").setAttribute("points", string);
		// Attachmentniveau inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_al_47_ml + "  "
			+ x_dl_46 + ", " + y_al_46_dl;
		document.getElementById("s_polyline_al_inter_47_46_l").setAttribute("points", string);
		// Margo Gingivae inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_gm_47_ml + "  "
			+ x_dl_46 + ", " + y_gm_46_dl;
		document.getElementById("s_polyline_gm_inter_47_46_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_47_46_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_47_46_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_47_46_b').style.display = 'none';

		document.getElementById('s_polygon_inter_47_46_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_47_46_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_47_46_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_47) == 1) {
		document.getElementById('s_polygon_47_b').style.display = 'block';
		document.getElementById('s_polyline_al_47_b').style.display = 'block';
		document.getElementById('s_polyline_gm_47_b').style.display = 'block';

		document.getElementById('s_polygon_47_l').style.display = 'block';
		document.getElementById('s_polyline_al_47_l').style.display = 'block';
		document.getElementById('s_polyline_gm_47_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
		var x_db_47 = 358; // distal 47
		var x_mb_47 = 406; // mesial 47
		var x_b_47 = (x_db_47 + x_mb_47) / 2; // bukkal 47

		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
		var x_dl_47 = 362; // distal 47
		var x_ml_47 = 410; // mesial 47
		var x_l_47 = (x_dl_47 + x_ml_47) / 2; // lingual 47

		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
		var y_gm_47_db = gm_UK_b - 6.05 * gm_47_db; // Margo Gingivae distobukkal 47
		var y_gm_47_b = gm_UK_b - 6.05 * gm_47_b; // Margo Gingivae bukkal 47
		var y_gm_47_mb = gm_UK_b - 6.05 * gm_47_mb; // Margo Gingivae mesiobukkal 47
		var y_pd_47_db = 6.05 * pd_47_db; // Sondierungstiefe distobukkal 47
		var y_pd_47_b = 6.05 * pd_47_b; // Sondierungstiefe bukkal 47
		var y_pd_47_mb = 6.05 * pd_47_mb; // Sondierungstiefe mesiobukkal 47

		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
		var y_gm_47_dl = gm_UK_l + 6.05 * gm_47_dl; // Margo Gingivae distolingual 47
		var y_gm_47_l = gm_UK_l + 6.05 * gm_47_l; // Margo Gingivae lingual 47
		var y_gm_47_ml = gm_UK_l + 6.05 * gm_47_ml; // Margo Gingivae mesiolingual 47
		var y_pd_47_dl = 6.05 * pd_47_dl; // Sondierungstiefe distolingual 47
		var y_pd_47_l = 6.05 * pd_47_l; // Sondierungstiefe lingual 47
		var y_pd_47_ml = 6.05 * pd_47_ml; // Sondierungstiefe mesiolingual 47

		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_db = y_gm_47_db + y_pd_47_db; // Attachmentniveau distobukkal 47
		var y_al_47_b = y_gm_47_b + y_pd_47_b; // Attachmentniveau bukkal 47
		var y_al_47_mb = y_gm_47_mb + y_pd_47_mb; // Attachmentniveau mesiobukkal 47

		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_dl = y_gm_47_dl - y_pd_47_dl; // Attachmentniveau distolingual 47
		var y_al_47_l = y_gm_47_l - y_pd_47_l; // Attachmentniveau lingual 47
		var y_al_47_ml = y_gm_47_ml - y_pd_47_ml; // Attachmentniveau mesiolingual 47

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[47].storeCoordinates(
			x_db_47, x_mb_47, x_dl_47, x_ml_47, x_b_47, x_l_47,
			y_gm_47_db, y_gm_47_b, y_gm_47_mb, y_pd_47_dl, y_pd_47_b, y_pd_47_ml,
			y_gm_47_dl, y_gm_47_l, y_gm_47_ml, y_pd_47_dl, y_pd_47_l, y_pd_47_ml,
			y_al_47_db, y_al_47_b, y_al_47_mb, y_al_47_dl, y_al_47_l, y_al_47_ml
		);

		// Parodontaltasche 47 bukkal zeichnen
		var string =
			x_db_47 + ", " + y_al_47_db + "  "
			+ x_b_47 + ", " + y_al_47_b + "  "
			+ x_mb_47 + ", " + y_al_47_mb + "  "
			+ x_mb_47 + ", " + y_gm_47_mb + "  "
			+ x_b_47 + ", " + y_gm_47_b + "  "
			+ x_db_47 + ", " + y_gm_47_db;
		document.getElementById("s_polygon_47_b").setAttribute("points", string);
		// Attachmentniveau 47 bukkal zeichnen
		var string =
			x_db_47 + ", " + y_al_47_db + "  "
			+ x_b_47 + ", " + y_al_47_b + "  "
			+ x_mb_47 + ", " + y_al_47_mb;
		document.getElementById("s_polyline_al_47_b").setAttribute("points", string);
		// Margo Gingivae 47 bukkal zeichnen
		var string =
			x_db_47 + ", " + y_gm_47_db + "  "
			+ x_b_47 + ", " + y_gm_47_b + "  "
			+ x_mb_47 + ", " + y_gm_47_mb;
		document.getElementById("s_polyline_gm_47_b").setAttribute("points", string);

		// Parodontaltasche 47 lingual zeichnen
		var string =
			x_dl_47 + ", " + y_al_47_dl + "  "
			+ x_l_47 + ", " + y_al_47_l + "  "
			+ x_ml_47 + ", " + y_al_47_ml + "  "
			+ x_ml_47 + ", " + y_gm_47_ml + "  "
			+ x_l_47 + ", " + y_gm_47_l + "  "
			+ x_dl_47 + ", " + y_gm_47_dl;
		document.getElementById("s_polygon_47_l").setAttribute("points", string);
		// Attachmentniveau 47 lingual zeichnen
		var string =
			x_dl_47 + ", " + y_al_47_dl + "  "
			+ x_l_47 + ", " + y_al_47_l + "  "
			+ x_ml_47 + ", " + y_al_47_ml;
		document.getElementById("s_polyline_al_47_l").setAttribute("points", string);
		// Margo Gingivae 47 lingual zeichnen
		var string =
			x_dl_47 + ", " + y_gm_47_dl + "  "
			+ x_l_47 + ", " + y_gm_47_l + "  "
			+ x_ml_47 + ", " + y_gm_47_ml;
		document.getElementById("s_polyline_gm_47_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_47_b').style.display = 'none';
		document.getElementById('s_polyline_al_47_b').style.display = 'none';
		document.getElementById('s_polyline_gm_47_b').style.display = 'none';

		document.getElementById('s_polygon_47_l').style.display = 'none';
		document.getElementById('s_polyline_al_47_l').style.display = 'none';
		document.getElementById('s_polyline_gm_47_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_47) == 1 && Number(jsonObj2.tooth_46) == 1) {
		document.getElementById('s_polygon_inter_47_46_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_47_46_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_47_46_b').style.display = 'block';

		document.getElementById('s_polygon_inter_47_46_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_47_46_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_47_46_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
		var x_db_46 = 422; // distal 46

		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
		var x_dl_46 = 425; // distal 46

		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
		var y_gm_46_db = gm_UK_b - 6.05 * gm_46_db; // Margo Gingivae distobukkal 46
		var y_pd_46_db = 6.05 * pd_46_db; // Sondierungstiefe distobukkal 46

		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
		var y_gm_46_dl = gm_UK_l + 6.05 * gm_46_dl; // Margo Gingivae distolingual 46
		var y_pd_46_dl = 6.05 * pd_46_dl; // Sondierungstiefe distolingual 46

		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_db = y_gm_46_db + y_pd_46_db; // Attachmentniveau distobukkal 46

		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_46_dl = y_gm_46_dl - y_pd_46_dl; // Attachmentniveau distolingual 46

		// Parodontaltasche inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_al_47_mb + "  "
			+ x_db_46 + ", " + y_al_46_db + "  "
			+ x_db_46 + ", " + y_gm_46_db + "  "
			+ x_mb_47 + ", " + y_gm_47_mb;
		document.getElementById("s_polygon_inter_47_46_b").setAttribute("points", string);
		// Attachmentniveau inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_al_47_mb + "  "
			+ x_db_46 + ", " + y_al_46_db;
		document.getElementById("s_polyline_al_inter_47_46_b").setAttribute("points", string);
		// Margo Gingivae inter_47_46 bukkal zeichnen
		var string =
			x_mb_47 + ", " + y_gm_47_mb + "  "
			+ x_db_46 + ", " + y_gm_46_db;
		document.getElementById("s_polyline_gm_inter_47_46_b").setAttribute("points", string);

		// Parodontaltasche inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_al_47_ml + "  "
			+ x_dl_46 + ", " + y_al_46_dl + "  "
			+ x_dl_46 + ", " + y_gm_46_dl + "  "
			+ x_ml_47 + ", " + y_gm_47_ml;
		document.getElementById("s_polygon_inter_47_46_l").setAttribute("points", string);
		// Attachmentniveau inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_al_47_ml + "  "
			+ x_dl_46 + ", " + y_al_46_dl;
		document.getElementById("s_polyline_al_inter_47_46_l").setAttribute("points", string);
		// Margo Gingivae inter_47_46 lingual zeichnen
		var string =
			x_ml_47 + ", " + y_gm_47_ml + "  "
			+ x_dl_46 + ", " + y_gm_46_dl;
		document.getElementById("s_polyline_gm_inter_47_46_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_47_46_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_47_46_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_47_46_b').style.display = 'none';

		document.getElementById('s_polygon_inter_47_46_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_47_46_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_47_46_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_48) == 1 && Number(jsonObj2.tooth_47) == 1) {
		document.getElementById('s_polygon_inter_48_47_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_48_47_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_48_47_b').style.display = 'block';

		document.getElementById('s_polygon_inter_48_47_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_48_47_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_48_47_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
		var x_mb_48 = 342; // mesial 48

		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
		var x_ml_48 = 346; // mesial 48

		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
		var y_gm_48_mb = gm_UK_b - 6.05 * gm_48_mb; // Margo Gingivae mesiobukkal 48
		var y_pd_48_mb = 6.05 * pd_48_mb; // Sondierungstiefe mesiobukkal 48

		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
		var y_gm_48_ml = gm_UK_l + 6.05 * gm_48_ml; // Margo Gingivae mesiolingual 48
		var y_pd_48_ml = 6.05 * pd_48_ml; // Sondierungstiefe mesiolingual 48

		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_48_mb = y_gm_48_mb + y_pd_48_mb; // Attachmentniveau mesiobukkal 48

		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_48_ml = y_gm_48_ml - y_pd_48_ml; // Attachmentniveau mesiolingual 48

		// Parodontaltasche inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_al_48_mb + "  "
			+ x_db_47 + ", " + y_al_47_db + "  "
			+ x_db_47 + ", " + y_gm_47_db + "  "
			+ x_mb_48 + ", " + y_gm_48_mb;
		document.getElementById("s_polygon_inter_48_47_b").setAttribute("points", string);
		// Attachmentniveau inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_al_48_mb + "  "
			+ x_db_47 + ", " + y_al_47_db;
		document.getElementById("s_polyline_al_inter_48_47_b").setAttribute("points", string);
		// Margo Gingivae inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_gm_48_mb + "  "
			+ x_db_47 + ", " + y_gm_47_db;
		document.getElementById("s_polyline_gm_inter_48_47_b").setAttribute("points", string);

		// Parodontaltasche inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_al_48_ml + "  "
			+ x_dl_47 + ", " + y_al_47_dl + "  "
			+ x_dl_47 + ", " + y_gm_47_dl + "  "
			+ x_ml_48 + ", " + y_gm_48_ml;
		document.getElementById("s_polygon_inter_48_47_l").setAttribute("points", string);
		// Attachmentniveau inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_al_48_ml + "  "
			+ x_dl_47 + ", " + y_al_47_dl;
		document.getElementById("s_polyline_al_inter_48_47_l").setAttribute("points", string);
		// Margo Gingivae inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_gm_48_ml + "  "
			+ x_dl_47 + ", " + y_gm_47_dl;
		document.getElementById("s_polyline_gm_inter_48_47_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_48_47_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_48_47_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_48_47_b').style.display = 'none';

		document.getElementById('s_polygon_inter_48_47_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_48_47_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_48_47_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_48) == 1) {
		document.getElementById('s_polygon_48_b').style.display = 'block';
		document.getElementById('s_polyline_al_48_b').style.display = 'block';
		document.getElementById('s_polyline_gm_48_b').style.display = 'block';

		document.getElementById('s_polygon_48_l').style.display = 'block';
		document.getElementById('s_polyline_al_48_l').style.display = 'block';
		document.getElementById('s_polyline_gm_48_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
		var x_db_48 = 296; // distal 48
		var x_mb_48 = 342; // mesial 48
		var x_b_48 = (x_db_48 + x_mb_48) / 2; // bukkal 48

		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
		var x_dl_48 = 297; // distal 48
		var x_ml_48 = 346; // mesial 48
		var x_l_48 = (x_dl_48 + x_ml_48) / 2; // lingual 48

		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
		var y_gm_48_db = gm_UK_b - 6.05 * gm_48_db; // Margo Gingivae distobukkal 48
		var y_gm_48_b = gm_UK_b - 6.05 * gm_48_b; // Margo Gingivae bukkal 48
		var y_gm_48_mb = gm_UK_b - 6.05 * gm_48_mb; // Margo Gingivae mesiobukkal 48
		var y_pd_48_db = 6.05 * pd_48_db; // Sondierungstiefe distobukkal 48
		var y_pd_48_b = 6.05 * pd_48_b; // Sondierungstiefe bukkal 48
		var y_pd_48_mb = 6.05 * pd_48_mb; // Sondierungstiefe mesiobukkal 48

		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
		var y_gm_48_dl = gm_UK_l + 6.05 * gm_48_dl; // Margo Gingivae distolingual 48
		var y_gm_48_l = gm_UK_l + 6.05 * gm_48_l; // Margo Gingivae lingual 48
		var y_gm_48_ml = gm_UK_l + 6.05 * gm_48_ml; // Margo Gingivae mesiolingual 48
		var y_pd_48_dl = 6.05 * pd_48_dl; // Sondierungstiefe distolingual 48
		var y_pd_48_l = 6.05 * pd_48_l; // Sondierungstiefe lingual 48
		var y_pd_48_ml = 6.05 * pd_48_ml; // Sondierungstiefe mesiolingual 48

		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_48_db = y_gm_48_db + y_pd_48_db; // Attachmentniveau distobukkal 48
		var y_al_48_b = y_gm_48_b + y_pd_48_b; // Attachmentniveau bukkal 48
		var y_al_48_mb = y_gm_48_mb + y_pd_48_mb; // Attachmentniveau mesiobukkal 48

		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_48_dl = y_gm_48_dl - y_pd_48_dl; // Attachmentniveau distolingual 48
		var y_al_48_l = y_gm_48_l - y_pd_48_l; // Attachmentniveau lingual 48
		var y_al_48_ml = y_gm_48_ml - y_pd_48_ml; // Attachmentniveau mesiolingual 48

		// Koordinaten in Objekt ablegen und Fläche berechnen
		superimposedPockets[48].storeCoordinates(
			x_db_48, x_mb_48, x_dl_48, x_ml_48, x_b_48, x_l_48,
			y_gm_48_db, y_gm_48_b, y_gm_48_mb, y_pd_48_dl, y_pd_48_b, y_pd_48_ml,
			y_gm_48_dl, y_gm_48_l, y_gm_48_ml, y_pd_48_dl, y_pd_48_l, y_pd_48_ml,
			y_al_48_db, y_al_48_b, y_al_48_mb, y_al_48_dl, y_al_48_l, y_al_48_ml
		);

		// Parodontaltasche 48 bukkal zeichnen
		var string =
			x_db_48 + ", " + y_al_48_db + "  "
			+ x_b_48 + ", " + y_al_48_b + "  "
			+ x_mb_48 + ", " + y_al_48_mb + "  "
			+ x_mb_48 + ", " + y_gm_48_mb + "  "
			+ x_b_48 + ", " + y_gm_48_b + "  "
			+ x_db_48 + ", " + y_gm_48_db;
		document.getElementById("s_polygon_48_b").setAttribute("points", string);
		// Attachmentniveau 48 bukkal zeichnen
		var string =
			x_db_48 + ", " + y_al_48_db + "  "
			+ x_b_48 + ", " + y_al_48_b + "  "
			+ x_mb_48 + ", " + y_al_48_mb;
		document.getElementById("s_polyline_al_48_b").setAttribute("points", string);
		// Margo Gingivae 48 bukkal zeichnen
		var string =
			x_db_48 + ", " + y_gm_48_db + "  "
			+ x_b_48 + ", " + y_gm_48_b + "  "
			+ x_mb_48 + ", " + y_gm_48_mb;
		document.getElementById("s_polyline_gm_48_b").setAttribute("points", string);

		// Parodontaltasche 48 lingual zeichnen
		var string =
			x_dl_48 + ", " + y_al_48_dl + "  "
			+ x_l_48 + ", " + y_al_48_l + "  "
			+ x_ml_48 + ", " + y_al_48_ml + "  "
			+ x_ml_48 + ", " + y_gm_48_ml + "  "
			+ x_l_48 + ", " + y_gm_48_l + "  "
			+ x_dl_48 + ", " + y_gm_48_dl;
		document.getElementById("s_polygon_48_l").setAttribute("points", string);
		// Attachmentniveau 48 lingual zeichnen
		var string =
			x_dl_48 + ", " + y_al_48_dl + "  "
			+ x_l_48 + ", " + y_al_48_l + "  "
			+ x_ml_48 + ", " + y_al_48_ml;
		document.getElementById("s_polyline_al_48_l").setAttribute("points", string);
		// Margo Gingivae 48 lingual zeichnen
		var string =
			x_dl_48 + ", " + y_gm_48_dl + "  "
			+ x_l_48 + ", " + y_gm_48_l + "  "
			+ x_ml_48 + ", " + y_gm_48_ml;
		document.getElementById("s_polyline_gm_48_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_48_b').style.display = 'none';
		document.getElementById('s_polyline_al_48_b').style.display = 'none';
		document.getElementById('s_polyline_gm_48_b').style.display = 'none';

		document.getElementById('s_polygon_48_l').style.display = 'none';
		document.getElementById('s_polyline_al_48_l').style.display = 'none';
		document.getElementById('s_polyline_gm_48_l').style.display = 'none';
	}

	if (Number(jsonObj2.tooth_48) == 1 && Number(jsonObj2.tooth_47) == 1) {
		document.getElementById('s_polygon_inter_48_47_b').style.display = 'block';
		document.getElementById('s_polyline_al_inter_48_47_b').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_48_47_b').style.display = 'block';

		document.getElementById('s_polygon_inter_48_47_l').style.display = 'block';
		document.getElementById('s_polyline_al_inter_48_47_l').style.display = 'block';
		document.getElementById('s_polyline_gm_inter_48_47_l').style.display = 'block';

		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
		var x_db_47 = 358; // distal 47

		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
		var x_dl_47 = 362; // distal 47

		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
		var y_gm_47_db = gm_UK_b - 6.05 * gm_47_db; // Margo Gingivae distobukkal 47
		var y_pd_47_db = 6.05 * pd_47_db; // Sondierungstiefe distobukkal 47

		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
		var y_gm_47_dl = gm_UK_l + 6.05 * gm_47_dl; // Margo Gingivae distolingual 47
		var y_pd_47_dl = 6.05 * pd_47_dl; // Sondierungstiefe distolingual 47

		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_db = y_gm_47_db + y_pd_47_db; // Attachmentniveau distobukkal 47

		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
		var y_al_47_dl = y_gm_47_dl - y_pd_47_dl; // Attachmentniveau distolingual 47

		// Parodontaltasche inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_al_48_mb + "  "
			+ x_db_47 + ", " + y_al_47_db + "  "
			+ x_db_47 + ", " + y_gm_47_db + "  "
			+ x_mb_48 + ", " + y_gm_48_mb;
		document.getElementById("s_polygon_inter_48_47_b").setAttribute("points", string);
		// Attachmentniveau inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_al_48_mb + "  "
			+ x_db_47 + ", " + y_al_47_db;
		document.getElementById("s_polyline_al_inter_48_47_b").setAttribute("points", string);
		// Margo Gingivae inter_48_47 bukkal zeichnen
		var string =
			x_mb_48 + ", " + y_gm_48_mb + "  "
			+ x_db_47 + ", " + y_gm_47_db;
		document.getElementById("s_polyline_gm_inter_48_47_b").setAttribute("points", string);

		// Parodontaltasche inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_al_48_ml + "  "
			+ x_dl_47 + ", " + y_al_47_dl + "  "
			+ x_dl_47 + ", " + y_gm_47_dl + "  "
			+ x_ml_48 + ", " + y_gm_48_ml;
		document.getElementById("s_polygon_inter_48_47_l").setAttribute("points", string);
		// Attachmentniveau inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_al_48_ml + "  "
			+ x_dl_47 + ", " + y_al_47_dl;
		document.getElementById("s_polyline_al_inter_48_47_l").setAttribute("points", string);
		// Margo Gingivae inter_48_47 lingual zeichnen
		var string =
			x_ml_48 + ", " + y_gm_48_ml + "  "
			+ x_dl_47 + ", " + y_gm_47_dl;
		document.getElementById("s_polyline_gm_inter_48_47_l").setAttribute("points", string);
	} else {
		document.getElementById('s_polygon_inter_48_47_b').style.display = 'none';
		document.getElementById('s_polyline_al_inter_48_47_b').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_48_47_b').style.display = 'none';

		document.getElementById('s_polygon_inter_48_47_l').style.display = 'none';
		document.getElementById('s_polyline_al_inter_48_47_l').style.display = 'none';
		document.getElementById('s_polyline_gm_inter_48_47_l').style.display = 'none';
	}	
}