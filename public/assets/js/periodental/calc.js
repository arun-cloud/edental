// Berechnungen
function calc() {
    var num_teeth_1 = tooth_18 + tooth_17 + tooth_16 + tooth_15 + tooth_14 + tooth_13 + tooth_12 + tooth_11;
    var num_teeth_2 = tooth_28 + tooth_27 + tooth_26 + tooth_25 + tooth_24 + tooth_23 + tooth_22 + tooth_21;
    var num_teeth_3 = tooth_38 + tooth_37 + tooth_36 + tooth_35 + tooth_34 + tooth_33 + tooth_32 + tooth_31;
    var num_teeth_4 = tooth_48 + tooth_47 + tooth_46 + tooth_45 + tooth_44 + tooth_43 + tooth_42 + tooth_41;
    var num_teeth = num_teeth_1 + num_teeth_2 + num_teeth_3 + num_teeth_4;
    //document.forms[0]["input_date"].value = num_teeth;

    // pd_average berechnen
    if (tooth_18 == 1) { sum_pd_18 = pd_18_db*1 + pd_18_b*1 + pd_18_mb*1 + pd_18_dp*1 + pd_18_p*1 + pd_18_mp*1; } else { sum_pd_18 = 0; }
    if (tooth_17 == 1) { sum_pd_17 = pd_17_db*1 + pd_17_b*1 + pd_17_mb*1 + pd_17_dp*1 + pd_17_p*1 + pd_17_mp*1; } else { sum_pd_17 = 0; }
    if (tooth_16 == 1) { sum_pd_16 = pd_16_db*1 + pd_16_b*1 + pd_16_mb*1 + pd_16_dp*1 + pd_16_p*1 + pd_16_mp*1; } else { sum_pd_16 = 0; }
    if (tooth_15 == 1) { sum_pd_15 = pd_15_db*1 + pd_15_b*1 + pd_15_mb*1 + pd_15_dp*1 + pd_15_p*1 + pd_15_mp*1; } else { sum_pd_15 = 0; }
    if (tooth_14 == 1) { sum_pd_14 = pd_14_db*1 + pd_14_b*1 + pd_14_mb*1 + pd_14_dp*1 + pd_14_p*1 + pd_14_mp*1; } else { sum_pd_14 = 0; }
    if (tooth_13 == 1) { sum_pd_13 = pd_13_db*1 + pd_13_b*1 + pd_13_mb*1 + pd_13_dp*1 + pd_13_p*1 + pd_13_mp*1; } else { sum_pd_13 = 0; }
    if (tooth_12 == 1) { sum_pd_12 = pd_12_db*1 + pd_12_b*1 + pd_12_mb*1 + pd_12_dp*1 + pd_12_p*1 + pd_12_mp*1; } else { sum_pd_12 = 0; }
    if (tooth_11 == 1) { sum_pd_11 = pd_11_db*1 + pd_11_b*1 + pd_11_mb*1 + pd_11_dp*1 + pd_11_p*1 + pd_11_mp*1; } else { sum_pd_11 = 0; }

    if (tooth_28 == 1) { sum_pd_28 = pd_28_db*1 + pd_28_b*1 + pd_28_mb*1 + pd_28_dp*1 + pd_28_p*1 + pd_28_mp*1; } else { sum_pd_28 = 0; }
    if (tooth_27 == 1) { sum_pd_27 = pd_27_db*1 + pd_27_b*1 + pd_27_mb*1 + pd_27_dp*1 + pd_27_p*1 + pd_27_mp*1; } else { sum_pd_27 = 0; }
    if (tooth_26 == 1) { sum_pd_26 = pd_26_db*1 + pd_26_b*1 + pd_26_mb*1 + pd_26_dp*1 + pd_26_p*1 + pd_26_mp*1; } else { sum_pd_26 = 0; }
    if (tooth_25 == 1) { sum_pd_25 = pd_25_db*1 + pd_25_b*1 + pd_25_mb*1 + pd_25_dp*1 + pd_25_p*1 + pd_25_mp*1; } else { sum_pd_25 = 0; }
    if (tooth_24 == 1) { sum_pd_24 = pd_24_db*1 + pd_24_b*1 + pd_24_mb*1 + pd_24_dp*1 + pd_24_p*1 + pd_24_mp*1; } else { sum_pd_24 = 0; }
    if (tooth_23 == 1) { sum_pd_23 = pd_23_db*1 + pd_23_b*1 + pd_23_mb*1 + pd_23_dp*1 + pd_23_p*1 + pd_23_mp*1; } else { sum_pd_23 = 0; }
    if (tooth_22 == 1) { sum_pd_22 = pd_22_db*1 + pd_22_b*1 + pd_22_mb*1 + pd_22_dp*1 + pd_22_p*1 + pd_22_mp*1; } else { sum_pd_22 = 0; }
    if (tooth_21 == 1) { sum_pd_21 = pd_21_db*1 + pd_21_b*1 + pd_21_mb*1 + pd_21_dp*1 + pd_21_p*1 + pd_21_mp*1; } else { sum_pd_21 = 0; }

    if (tooth_38 == 1) { sum_pd_38 = pd_38_db*1 + pd_38_b*1 + pd_38_mb*1 + pd_38_dl*1 + pd_38_l*1 + pd_38_ml*1; } else { sum_pd_38 = 0; }
    if (tooth_37 == 1) { sum_pd_37 = pd_37_db*1 + pd_37_b*1 + pd_37_mb*1 + pd_37_dl*1 + pd_37_l*1 + pd_37_ml*1; } else { sum_pd_37 = 0; }
    if (tooth_36 == 1) { sum_pd_36 = pd_36_db*1 + pd_36_b*1 + pd_36_mb*1 + pd_36_dl*1 + pd_36_l*1 + pd_36_ml*1; } else { sum_pd_36 = 0; }
    if (tooth_35 == 1) { sum_pd_35 = pd_35_db*1 + pd_35_b*1 + pd_35_mb*1 + pd_35_dl*1 + pd_35_l*1 + pd_35_ml*1; } else { sum_pd_35 = 0; }
    if (tooth_34 == 1) { sum_pd_34 = pd_34_db*1 + pd_34_b*1 + pd_34_mb*1 + pd_34_dl*1 + pd_34_l*1 + pd_34_ml*1; } else { sum_pd_34 = 0; }
    if (tooth_33 == 1) { sum_pd_33 = pd_33_db*1 + pd_33_b*1 + pd_33_mb*1 + pd_33_dl*1 + pd_33_l*1 + pd_33_ml*1; } else { sum_pd_33 = 0; }
    if (tooth_32 == 1) { sum_pd_32 = pd_32_db*1 + pd_32_b*1 + pd_32_mb*1 + pd_32_dl*1 + pd_32_l*1 + pd_32_ml*1; } else { sum_pd_32 = 0; }
    if (tooth_31 == 1) { sum_pd_31 = pd_31_db*1 + pd_31_b*1 + pd_31_mb*1 + pd_31_dl*1 + pd_31_l*1 + pd_31_ml*1; } else { sum_pd_31 = 0; }

    if (tooth_48 == 1) { sum_pd_48 = pd_48_db*1 + pd_48_b*1 + pd_48_mb*1 + pd_48_dl*1 + pd_48_l*1 + pd_48_ml*1; } else { sum_pd_48 = 0; }
    if (tooth_47 == 1) { sum_pd_47 = pd_47_db*1 + pd_47_b*1 + pd_47_mb*1 + pd_47_dl*1 + pd_47_l*1 + pd_47_ml*1; } else { sum_pd_47 = 0; }
    if (tooth_46 == 1) { sum_pd_46 = pd_46_db*1 + pd_46_b*1 + pd_46_mb*1 + pd_46_dl*1 + pd_46_l*1 + pd_46_ml*1; } else { sum_pd_46 = 0; }
    if (tooth_45 == 1) { sum_pd_45 = pd_45_db*1 + pd_45_b*1 + pd_45_mb*1 + pd_45_dl*1 + pd_45_l*1 + pd_45_ml*1; } else { sum_pd_45 = 0; }
    if (tooth_44 == 1) { sum_pd_44 = pd_44_db*1 + pd_44_b*1 + pd_44_mb*1 + pd_44_dl*1 + pd_44_l*1 + pd_44_ml*1; } else { sum_pd_44 = 0; }
    if (tooth_43 == 1) { sum_pd_43 = pd_43_db*1 + pd_43_b*1 + pd_43_mb*1 + pd_43_dl*1 + pd_43_l*1 + pd_43_ml*1; } else { sum_pd_43 = 0; }
    if (tooth_42 == 1) { sum_pd_42 = pd_42_db*1 + pd_42_b*1 + pd_42_mb*1 + pd_42_dl*1 + pd_42_l*1 + pd_42_ml*1; } else { sum_pd_42 = 0; }
    if (tooth_41 == 1) { sum_pd_41 = pd_41_db*1 + pd_41_b*1 + pd_41_mb*1 + pd_41_dl*1 + pd_41_l*1 + pd_41_ml*1; } else { sum_pd_41 = 0; }

    var sum_pd = sum_pd_18 + sum_pd_17 + sum_pd_16 + sum_pd_15 + sum_pd_14 + sum_pd_13 + sum_pd_12 + sum_pd_11;
    sum_pd = sum_pd + sum_pd_28 + sum_pd_27 + sum_pd_26 + sum_pd_25 + sum_pd_24 + sum_pd_23 + sum_pd_22 + sum_pd_21;
    sum_pd = sum_pd + sum_pd_38 + sum_pd_37 + sum_pd_36 + sum_pd_35 + sum_pd_34 + sum_pd_33 + sum_pd_32 + sum_pd_31;
    sum_pd = sum_pd + sum_pd_48 + sum_pd_47 + sum_pd_46 + sum_pd_45 + sum_pd_44 + sum_pd_43 + sum_pd_42 + sum_pd_41;

    pd_average = 10 * (sum_pd / (num_teeth * 6));
    pd_average = (Math.round (pd_average)) / 10;    

    if (num_teeth > 0) {
        document.forms[0]["output_mean_pd"].value = pd_average;
    } else {
        document.forms[0]["output_mean_pd"].value = 0;
    }

    // al_average berechnen
    if (tooth_18 == 1) { sum_al_18 = (gm_18_db*1 - pd_18_db*1) + (gm_18_b*1 - pd_18_b*1) + (gm_18_mb*1 - pd_18_mb*1) + (gm_18_dp*1 - pd_18_dp*1) + (gm_18_p*1 - pd_18_p*1) + (gm_18_mp*1 - pd_18_mp*1); } else { sum_al_18 = 0; }
    if (tooth_17 == 1) { sum_al_17 = (gm_17_db*1 - pd_17_db*1) + (gm_17_b*1 - pd_17_b*1) + (gm_17_mb*1 - pd_17_mb*1) + (gm_17_dp*1 - pd_17_dp*1) + (gm_17_p*1 - pd_17_p*1) + (gm_17_mp*1 - pd_17_mp*1); } else { sum_al_17 = 0; }
    if (tooth_16 == 1) { sum_al_16 = (gm_16_db*1 - pd_16_db*1) + (gm_16_b*1 - pd_16_b*1) + (gm_16_mb*1 - pd_16_mb*1) + (gm_16_dp*1 - pd_16_dp*1) + (gm_16_p*1 - pd_16_p*1) + (gm_16_mp*1 - pd_16_mp*1); } else { sum_al_16 = 0; }
    if (tooth_15 == 1) { sum_al_15 = (gm_15_db*1 - pd_15_db*1) + (gm_15_b*1 - pd_15_b*1) + (gm_15_mb*1 - pd_15_mb*1) + (gm_15_dp*1 - pd_15_dp*1) + (gm_15_p*1 - pd_15_p*1) + (gm_15_mp*1 - pd_15_mp*1); } else { sum_al_15 = 0; }
    if (tooth_14 == 1) { sum_al_14 = (gm_14_db*1 - pd_14_db*1) + (gm_14_b*1 - pd_14_b*1) + (gm_14_mb*1 - pd_14_mb*1) + (gm_14_dp*1 - pd_14_dp*1) + (gm_14_p*1 - pd_14_p*1) + (gm_14_mp*1 - pd_14_mp*1); } else { sum_al_14 = 0; }
    if (tooth_13 == 1) { sum_al_13 = (gm_13_db*1 - pd_13_db*1) + (gm_13_b*1 - pd_13_b*1) + (gm_13_mb*1 - pd_13_mb*1) + (gm_13_dp*1 - pd_13_dp*1) + (gm_13_p*1 - pd_13_p*1) + (gm_13_mp*1 - pd_13_mp*1); } else { sum_al_13 = 0; }
    if (tooth_12 == 1) { sum_al_12 = (gm_12_db*1 - pd_12_db*1) + (gm_12_b*1 - pd_12_b*1) + (gm_12_mb*1 - pd_12_mb*1) + (gm_12_dp*1 - pd_12_dp*1) + (gm_12_p*1 - pd_12_p*1) + (gm_12_mp*1 - pd_12_mp*1); } else { sum_al_12 = 0; }
    if (tooth_11 == 1) { sum_al_11 = (gm_11_db*1 - pd_11_db*1) + (gm_11_b*1 - pd_11_b*1) + (gm_11_mb*1 - pd_11_mb*1) + (gm_11_dp*1 - pd_11_dp*1) + (gm_11_p*1 - pd_11_p*1) + (gm_11_mp*1 - pd_11_mp*1); } else { sum_al_11 = 0; }

    if (tooth_28 == 1) { sum_al_28 = (gm_28_db*1 - pd_28_db*1) + (gm_28_b*1 - pd_28_b*1) + (gm_28_mb*1 - pd_28_mb*1) + (gm_28_dp*1 - pd_28_dp*1) + (gm_28_p*1 - pd_28_p*1) + (gm_28_mp*1 - pd_28_mp*1); } else { sum_al_28 = 0; }
    if (tooth_27 == 1) { sum_al_27 = (gm_27_db*1 - pd_27_db*1) + (gm_27_b*1 - pd_27_b*1) + (gm_27_mb*1 - pd_27_mb*1) + (gm_27_dp*1 - pd_27_dp*1) + (gm_27_p*1 - pd_27_p*1) + (gm_27_mp*1 - pd_27_mp*1); } else { sum_al_27 = 0; }
    if (tooth_26 == 1) { sum_al_26 = (gm_26_db*1 - pd_26_db*1) + (gm_26_b*1 - pd_26_b*1) + (gm_26_mb*1 - pd_26_mb*1) + (gm_26_dp*1 - pd_26_dp*1) + (gm_26_p*1 - pd_26_p*1) + (gm_26_mp*1 - pd_26_mp*1); } else { sum_al_26 = 0; }
    if (tooth_25 == 1) { sum_al_25 = (gm_25_db*1 - pd_25_db*1) + (gm_25_b*1 - pd_25_b*1) + (gm_25_mb*1 - pd_25_mb*1) + (gm_25_dp*1 - pd_25_dp*1) + (gm_25_p*1 - pd_25_p*1) + (gm_25_mp*1 - pd_25_mp*1); } else { sum_al_25 = 0; }
    if (tooth_24 == 1) { sum_al_24 = (gm_24_db*1 - pd_24_db*1) + (gm_24_b*1 - pd_24_b*1) + (gm_24_mb*1 - pd_24_mb*1) + (gm_24_dp*1 - pd_24_dp*1) + (gm_24_p*1 - pd_24_p*1) + (gm_24_mp*1 - pd_24_mp*1); } else { sum_al_24 = 0; }
    if (tooth_23 == 1) { sum_al_23 = (gm_23_db*1 - pd_23_db*1) + (gm_23_b*1 - pd_23_b*1) + (gm_23_mb*1 - pd_23_mb*1) + (gm_23_dp*1 - pd_23_dp*1) + (gm_23_p*1 - pd_23_p*1) + (gm_23_mp*1 - pd_23_mp*1); } else { sum_al_23 = 0; }
    if (tooth_22 == 1) { sum_al_22 = (gm_22_db*1 - pd_22_db*1) + (gm_22_b*1 - pd_22_b*1) + (gm_22_mb*1 - pd_22_mb*1) + (gm_22_dp*1 - pd_22_dp*1) + (gm_22_p*1 - pd_22_p*1) + (gm_22_mp*1 - pd_22_mp*1); } else { sum_al_22 = 0; }
    if (tooth_21 == 1) { sum_al_21 = (gm_21_db*1 - pd_21_db*1) + (gm_21_b*1 - pd_21_b*1) + (gm_21_mb*1 - pd_21_mb*1) + (gm_21_dp*1 - pd_21_dp*1) + (gm_21_p*1 - pd_21_p*1) + (gm_21_mp*1 - pd_21_mp*1); } else { sum_al_21 = 0; }

    if (tooth_38 == 1) { sum_al_38 = (gm_38_db*1 - pd_38_db*1) + (gm_38_b*1 - pd_38_b*1) + (gm_38_mb*1 - pd_38_mb*1) + (gm_38_dl*1 - pd_38_dl*1) + (gm_38_l*1 - pd_38_l*1) + (gm_38_ml*1 - pd_38_ml*1); } else { sum_al_38 = 0; }
    if (tooth_37 == 1) { sum_al_37 = (gm_37_db*1 - pd_37_db*1) + (gm_37_b*1 - pd_37_b*1) + (gm_37_mb*1 - pd_37_mb*1) + (gm_37_dl*1 - pd_37_dl*1) + (gm_37_l*1 - pd_37_l*1) + (gm_37_ml*1 - pd_37_ml*1); } else { sum_al_37 = 0; }
    if (tooth_36 == 1) { sum_al_36 = (gm_36_db*1 - pd_36_db*1) + (gm_36_b*1 - pd_36_b*1) + (gm_36_mb*1 - pd_36_mb*1) + (gm_36_dl*1 - pd_36_dl*1) + (gm_36_l*1 - pd_36_l*1) + (gm_36_ml*1 - pd_36_ml*1); } else { sum_al_36 = 0; }
    if (tooth_35 == 1) { sum_al_35 = (gm_35_db*1 - pd_35_db*1) + (gm_35_b*1 - pd_35_b*1) + (gm_35_mb*1 - pd_35_mb*1) + (gm_35_dl*1 - pd_35_dl*1) + (gm_35_l*1 - pd_35_l*1) + (gm_35_ml*1 - pd_35_ml*1); } else { sum_al_35 = 0; }
    if (tooth_34 == 1) { sum_al_34 = (gm_34_db*1 - pd_34_db*1) + (gm_34_b*1 - pd_34_b*1) + (gm_34_mb*1 - pd_34_mb*1) + (gm_34_dl*1 - pd_34_dl*1) + (gm_34_l*1 - pd_34_l*1) + (gm_34_ml*1 - pd_34_ml*1); } else { sum_al_34 = 0; }
    if (tooth_33 == 1) { sum_al_33 = (gm_33_db*1 - pd_33_db*1) + (gm_33_b*1 - pd_33_b*1) + (gm_33_mb*1 - pd_33_mb*1) + (gm_33_dl*1 - pd_33_dl*1) + (gm_33_l*1 - pd_33_l*1) + (gm_33_ml*1 - pd_33_ml*1); } else { sum_al_33 = 0; }
    if (tooth_32 == 1) { sum_al_32 = (gm_32_db*1 - pd_32_db*1) + (gm_32_b*1 - pd_32_b*1) + (gm_32_mb*1 - pd_32_mb*1) + (gm_32_dl*1 - pd_32_dl*1) + (gm_32_l*1 - pd_32_l*1) + (gm_32_ml*1 - pd_32_ml*1); } else { sum_al_32 = 0; }
    if (tooth_31 == 1) { sum_al_31 = (gm_31_db*1 - pd_31_db*1) + (gm_31_b*1 - pd_31_b*1) + (gm_31_mb*1 - pd_31_mb*1) + (gm_31_dl*1 - pd_31_dl*1) + (gm_31_l*1 - pd_31_l*1) + (gm_31_ml*1 - pd_31_ml*1); } else { sum_al_31 = 0; }

    if (tooth_48 == 1) { sum_al_48 = (gm_48_db*1 - pd_48_db*1) + (gm_48_b*1 - pd_48_b*1) + (gm_48_mb*1 - pd_48_mb*1) + (gm_48_dl*1 - pd_48_dl*1) + (gm_48_l*1 - pd_48_l*1) + (gm_48_ml*1 - pd_48_ml*1); } else { sum_al_48 = 0; }
    if (tooth_47 == 1) { sum_al_47 = (gm_47_db*1 - pd_47_db*1) + (gm_47_b*1 - pd_47_b*1) + (gm_47_mb*1 - pd_47_mb*1) + (gm_47_dl*1 - pd_47_dl*1) + (gm_47_l*1 - pd_47_l*1) + (gm_47_ml*1 - pd_47_ml*1); } else { sum_al_47 = 0; }
    if (tooth_46 == 1) { sum_al_46 = (gm_46_db*1 - pd_46_db*1) + (gm_46_b*1 - pd_46_b*1) + (gm_46_mb*1 - pd_46_mb*1) + (gm_46_dl*1 - pd_46_dl*1) + (gm_46_l*1 - pd_46_l*1) + (gm_46_ml*1 - pd_46_ml*1); } else { sum_al_46 = 0; }
    if (tooth_45 == 1) { sum_al_45 = (gm_45_db*1 - pd_45_db*1) + (gm_45_b*1 - pd_45_b*1) + (gm_45_mb*1 - pd_45_mb*1) + (gm_45_dl*1 - pd_45_dl*1) + (gm_45_l*1 - pd_45_l*1) + (gm_45_ml*1 - pd_45_ml*1); } else { sum_al_45 = 0; }
    if (tooth_44 == 1) { sum_al_44 = (gm_44_db*1 - pd_44_db*1) + (gm_44_b*1 - pd_44_b*1) + (gm_44_mb*1 - pd_44_mb*1) + (gm_44_dl*1 - pd_44_dl*1) + (gm_44_l*1 - pd_44_l*1) + (gm_44_ml*1 - pd_44_ml*1); } else { sum_al_44 = 0; }
    if (tooth_43 == 1) { sum_al_43 = (gm_43_db*1 - pd_43_db*1) + (gm_43_b*1 - pd_43_b*1) + (gm_43_mb*1 - pd_43_mb*1) + (gm_43_dl*1 - pd_43_dl*1) + (gm_43_l*1 - pd_43_l*1) + (gm_43_ml*1 - pd_43_ml*1); } else { sum_al_43 = 0; }
    if (tooth_42 == 1) { sum_al_42 = (gm_42_db*1 - pd_42_db*1) + (gm_42_b*1 - pd_42_b*1) + (gm_42_mb*1 - pd_42_mb*1) + (gm_42_dl*1 - pd_42_dl*1) + (gm_42_l*1 - pd_42_l*1) + (gm_42_ml*1 - pd_42_ml*1); } else { sum_al_42 = 0; }
    if (tooth_41 == 1) { sum_al_41 = (gm_41_db*1 - pd_41_db*1) + (gm_41_b*1 - pd_41_b*1) + (gm_41_mb*1 - pd_41_mb*1) + (gm_41_dl*1 - pd_41_dl*1) + (gm_41_l*1 - pd_41_l*1) + (gm_41_ml*1 - pd_41_ml*1); } else { sum_al_41 = 0; }

    var sum_al = sum_al_18 + sum_al_17 + sum_al_16 + sum_al_15 + sum_al_14 + sum_al_13 + sum_al_12 + sum_al_11;
    sum_al = sum_al + sum_al_28 + sum_al_27 + sum_al_26 + sum_al_25 + sum_al_24 + sum_al_23 + sum_al_22 + sum_al_21;
    sum_al = sum_al + sum_al_38 + sum_al_37 + sum_al_36 + sum_al_35 + sum_al_34 + sum_al_33 + sum_al_32 + sum_al_31;
    sum_al = sum_al + sum_al_48 + sum_al_47 + sum_al_46 + sum_al_45 + sum_al_44 + sum_al_43 + sum_al_42 + sum_al_41;

    al_average = 10 * (sum_al / (num_teeth * 6));
    al_average = (Math.round (al_average)) / 10;

    if (num_teeth > 0) {
        document.forms[0]["output_mean_al"].value = al_average;
    } else {
        document.forms[0]["output_mean_al"].value = 0;
    }

    // PI% berechnen
    if (tooth_18 == 1) { num_pi_18 = pi_18_db + pi_18_b + pi_18_mb + pi_18_dp + pi_18_p + pi_18_mp; } else { num_pi_18 = 0; }
    if (tooth_17 == 1) { num_pi_17 = pi_17_db + pi_17_b + pi_17_mb + pi_17_dp + pi_17_p + pi_17_mp; } else { num_pi_17 = 0; }
    if (tooth_16 == 1) { num_pi_16 = pi_16_db + pi_16_b + pi_16_mb + pi_16_dp + pi_16_p + pi_16_mp; } else { num_pi_16 = 0; }
    if (tooth_15 == 1) { num_pi_15 = pi_15_db + pi_15_b + pi_15_mb + pi_15_dp + pi_15_p + pi_15_mp; } else { num_pi_15 = 0; }
    if (tooth_14 == 1) { num_pi_14 = pi_14_db + pi_14_b + pi_14_mb + pi_14_dp + pi_14_p + pi_14_mp; } else { num_pi_14 = 0; }
    if (tooth_13 == 1) { num_pi_13 = pi_13_db + pi_13_b + pi_13_mb + pi_13_dp + pi_13_p + pi_13_mp; } else { num_pi_13 = 0; }
    if (tooth_12 == 1) { num_pi_12 = pi_12_db + pi_12_b + pi_12_mb + pi_12_dp + pi_12_p + pi_12_mp; } else { num_pi_12 = 0; }
    if (tooth_11 == 1) { num_pi_11 = pi_11_db + pi_11_b + pi_11_mb + pi_11_dp + pi_11_p + pi_11_mp; } else { num_pi_11 = 0; }

    if (tooth_28 == 1) { num_pi_28 = pi_28_db + pi_28_b + pi_28_mb + pi_28_dp + pi_28_p + pi_28_mp; } else { num_pi_28 = 0; }
    if (tooth_27 == 1) { num_pi_27 = pi_27_db + pi_27_b + pi_27_mb + pi_27_dp + pi_27_p + pi_27_mp; } else { num_pi_27 = 0; }
    if (tooth_26 == 1) { num_pi_26 = pi_26_db + pi_26_b + pi_26_mb + pi_26_dp + pi_26_p + pi_26_mp; } else { num_pi_26 = 0; }
    if (tooth_25 == 1) { num_pi_25 = pi_25_db + pi_25_b + pi_25_mb + pi_25_dp + pi_25_p + pi_25_mp; } else { num_pi_25 = 0; }
    if (tooth_24 == 1) { num_pi_24 = pi_24_db + pi_24_b + pi_24_mb + pi_24_dp + pi_24_p + pi_24_mp; } else { num_pi_24 = 0; }
    if (tooth_23 == 1) { num_pi_23 = pi_23_db + pi_23_b + pi_23_mb + pi_23_dp + pi_23_p + pi_23_mp; } else { num_pi_23 = 0; }
    if (tooth_22 == 1) { num_pi_22 = pi_22_db + pi_22_b + pi_22_mb + pi_22_dp + pi_22_p + pi_22_mp; } else { num_pi_22 = 0; }
    if (tooth_21 == 1) { num_pi_21 = pi_21_db + pi_21_b + pi_21_mb + pi_21_dp + pi_21_p + pi_21_mp; } else { num_pi_21 = 0; }

    if (tooth_38 == 1) { num_pi_38 = pi_38_db + pi_38_b + pi_38_mb + pi_38_dl + pi_38_l + pi_38_ml; } else { num_pi_38 = 0; }
    if (tooth_37 == 1) { num_pi_37 = pi_37_db + pi_37_b + pi_37_mb + pi_37_dl + pi_37_l + pi_37_ml; } else { num_pi_37 = 0; }
    if (tooth_36 == 1) { num_pi_36 = pi_36_db + pi_36_b + pi_36_mb + pi_36_dl + pi_36_l + pi_36_ml; } else { num_pi_36 = 0; }
    if (tooth_35 == 1) { num_pi_35 = pi_35_db + pi_35_b + pi_35_mb + pi_35_dl + pi_35_l + pi_35_ml; } else { num_pi_35 = 0; }
    if (tooth_34 == 1) { num_pi_34 = pi_34_db + pi_34_b + pi_34_mb + pi_34_dl + pi_34_l + pi_34_ml; } else { num_pi_34 = 0; }
    if (tooth_33 == 1) { num_pi_33 = pi_33_db + pi_33_b + pi_33_mb + pi_33_dl + pi_33_l + pi_33_ml; } else { num_pi_33 = 0; }
    if (tooth_32 == 1) { num_pi_32 = pi_32_db + pi_32_b + pi_32_mb + pi_32_dl + pi_32_l + pi_32_ml; } else { num_pi_32 = 0; }
    if (tooth_31 == 1) { num_pi_31 = pi_31_db + pi_31_b + pi_31_mb + pi_31_dl + pi_31_l + pi_31_ml; } else { num_pi_31 = 0; }

    if (tooth_48 == 1) { num_pi_48 = pi_48_db + pi_48_b + pi_48_mb + pi_48_dl + pi_48_l + pi_48_ml; } else { num_pi_48 = 0; }
    if (tooth_47 == 1) { num_pi_47 = pi_47_db + pi_47_b + pi_47_mb + pi_47_dl + pi_47_l + pi_47_ml; } else { num_pi_47 = 0; }
    if (tooth_46 == 1) { num_pi_46 = pi_46_db + pi_46_b + pi_46_mb + pi_46_dl + pi_46_l + pi_46_ml; } else { num_pi_46 = 0; }
    if (tooth_45 == 1) { num_pi_45 = pi_45_db + pi_45_b + pi_45_mb + pi_45_dl + pi_45_l + pi_45_ml; } else { num_pi_45 = 0; }
    if (tooth_44 == 1) { num_pi_44 = pi_44_db + pi_44_b + pi_44_mb + pi_44_dl + pi_44_l + pi_44_ml; } else { num_pi_44 = 0; }
    if (tooth_43 == 1) { num_pi_43 = pi_43_db + pi_43_b + pi_43_mb + pi_43_dl + pi_43_l + pi_43_ml; } else { num_pi_43 = 0; }
    if (tooth_42 == 1) { num_pi_42 = pi_42_db + pi_42_b + pi_42_mb + pi_42_dl + pi_42_l + pi_42_ml; } else { num_pi_42 = 0; }
    if (tooth_41 == 1) { num_pi_41 = pi_41_db + pi_41_b + pi_41_mb + pi_41_dl + pi_41_l + pi_41_ml; } else { num_pi_41 = 0; }

    num_pi = num_pi_18 + num_pi_17 + num_pi_16 + num_pi_15 + num_pi_14 + num_pi_13 + num_pi_12 + num_pi_11;
    num_pi = num_pi + num_pi_28 + num_pi_27 + num_pi_26 + num_pi_25 + num_pi_24 + num_pi_23 + num_pi_22 + num_pi_21;
    num_pi = num_pi + num_pi_38 + num_pi_37 + num_pi_36 + num_pi_35 + num_pi_34 + num_pi_33 + num_pi_32 + num_pi_31;
    num_pi = num_pi + num_pi_48 + num_pi_47 + num_pi_46 + num_pi_45 + num_pi_44 + num_pi_43 + num_pi_42 + num_pi_41;

    pi_percent = (num_pi * 100) / (num_teeth * 6);
    pi_percent = Math.round (pi_percent);

    if (num_teeth > 0) {
        document.forms[0]["output_mean_pi"].value = pi_percent;
    } else {
        document.forms[0]["output_mean_pi"].value = 0;
    }

    // BOP% berechnen
    if (tooth_18 == 1) { num_bop_18 = bop_18_db + bop_18_b + bop_18_mb + bop_18_dp + bop_18_p + bop_18_mp; } else { num_bop_18 = 0; }
    if (tooth_17 == 1) { num_bop_17 = bop_17_db + bop_17_b + bop_17_mb + bop_17_dp + bop_17_p + bop_17_mp; } else { num_bop_17 = 0; }
    if (tooth_16 == 1) { num_bop_16 = bop_16_db + bop_16_b + bop_16_mb + bop_16_dp + bop_16_p + bop_16_mp; } else { num_bop_16 = 0; }
    if (tooth_15 == 1) { num_bop_15 = bop_15_db + bop_15_b + bop_15_mb + bop_15_dp + bop_15_p + bop_15_mp; } else { num_bop_15 = 0; }
    if (tooth_14 == 1) { num_bop_14 = bop_14_db + bop_14_b + bop_14_mb + bop_14_dp + bop_14_p + bop_14_mp; } else { num_bop_14 = 0; }
    if (tooth_13 == 1) { num_bop_13 = bop_13_db + bop_13_b + bop_13_mb + bop_13_dp + bop_13_p + bop_13_mp; } else { num_bop_13 = 0; }
    if (tooth_12 == 1) { num_bop_12 = bop_12_db + bop_12_b + bop_12_mb + bop_12_dp + bop_12_p + bop_12_mp; } else { num_bop_12 = 0; }
    if (tooth_11 == 1) { num_bop_11 = bop_11_db + bop_11_b + bop_11_mb + bop_11_dp + bop_11_p + bop_11_mp; } else { num_bop_11 = 0; }

    if (tooth_28 == 1) { num_bop_28 = bop_28_db + bop_28_b + bop_28_mb + bop_28_dp + bop_28_p + bop_28_mp; } else { num_bop_28 = 0; }
    if (tooth_27 == 1) { num_bop_27 = bop_27_db + bop_27_b + bop_27_mb + bop_27_dp + bop_27_p + bop_27_mp; } else { num_bop_27 = 0; }
    if (tooth_26 == 1) { num_bop_26 = bop_26_db + bop_26_b + bop_26_mb + bop_26_dp + bop_26_p + bop_26_mp; } else { num_bop_26 = 0; }
    if (tooth_25 == 1) { num_bop_25 = bop_25_db + bop_25_b + bop_25_mb + bop_25_dp + bop_25_p + bop_25_mp; } else { num_bop_25 = 0; }
    if (tooth_24 == 1) { num_bop_24 = bop_24_db + bop_24_b + bop_24_mb + bop_24_dp + bop_24_p + bop_24_mp; } else { num_bop_24 = 0; }
    if (tooth_23 == 1) { num_bop_23 = bop_23_db + bop_23_b + bop_23_mb + bop_23_dp + bop_23_p + bop_23_mp; } else { num_bop_23 = 0; }
    if (tooth_22 == 1) { num_bop_22 = bop_22_db + bop_22_b + bop_22_mb + bop_22_dp + bop_22_p + bop_22_mp; } else { num_bop_22 = 0; }
    if (tooth_21 == 1) { num_bop_21 = bop_21_db + bop_21_b + bop_21_mb + bop_21_dp + bop_21_p + bop_21_mp; } else { num_bop_21 = 0; }

    if (tooth_38 == 1) { num_bop_38 = bop_38_db + bop_38_b + bop_38_mb + bop_38_dl + bop_38_l + bop_38_ml; } else { num_bop_38 = 0; }
    if (tooth_37 == 1) { num_bop_37 = bop_37_db + bop_37_b + bop_37_mb + bop_37_dl + bop_37_l + bop_37_ml; } else { num_bop_37 = 0; }
    if (tooth_36 == 1) { num_bop_36 = bop_36_db + bop_36_b + bop_36_mb + bop_36_dl + bop_36_l + bop_36_ml; } else { num_bop_36 = 0; }
    if (tooth_35 == 1) { num_bop_35 = bop_35_db + bop_35_b + bop_35_mb + bop_35_dl + bop_35_l + bop_35_ml; } else { num_bop_35 = 0; }
    if (tooth_34 == 1) { num_bop_34 = bop_34_db + bop_34_b + bop_34_mb + bop_34_dl + bop_34_l + bop_34_ml; } else { num_bop_34 = 0; }
    if (tooth_33 == 1) { num_bop_33 = bop_33_db + bop_33_b + bop_33_mb + bop_33_dl + bop_33_l + bop_33_ml; } else { num_bop_33 = 0; }
    if (tooth_32 == 1) { num_bop_32 = bop_32_db + bop_32_b + bop_32_mb + bop_32_dl + bop_32_l + bop_32_ml; } else { num_bop_32 = 0; }
    if (tooth_31 == 1) { num_bop_31 = bop_31_db + bop_31_b + bop_31_mb + bop_31_dl + bop_31_l + bop_31_ml; } else { num_bop_31 = 0; }

    if (tooth_48 == 1) { num_bop_48 = bop_48_db + bop_48_b + bop_48_mb + bop_48_dl + bop_48_l + bop_48_ml; } else { num_bop_48 = 0; }
    if (tooth_47 == 1) { num_bop_47 = bop_47_db + bop_47_b + bop_47_mb + bop_47_dl + bop_47_l + bop_47_ml; } else { num_bop_47 = 0; }
    if (tooth_46 == 1) { num_bop_46 = bop_46_db + bop_46_b + bop_46_mb + bop_46_dl + bop_46_l + bop_46_ml; } else { num_bop_46 = 0; }
    if (tooth_45 == 1) { num_bop_45 = bop_45_db + bop_45_b + bop_45_mb + bop_45_dl + bop_45_l + bop_45_ml; } else { num_bop_45 = 0; }
    if (tooth_44 == 1) { num_bop_44 = bop_44_db + bop_44_b + bop_44_mb + bop_44_dl + bop_44_l + bop_44_ml; } else { num_bop_44 = 0; }
    if (tooth_43 == 1) { num_bop_43 = bop_43_db + bop_43_b + bop_43_mb + bop_43_dl + bop_43_l + bop_43_ml; } else { num_bop_43 = 0; }
    if (tooth_42 == 1) { num_bop_42 = bop_42_db + bop_42_b + bop_42_mb + bop_42_dl + bop_42_l + bop_42_ml; } else { num_bop_42 = 0; }
    if (tooth_41 == 1) { num_bop_41 = bop_41_db + bop_41_b + bop_41_mb + bop_41_dl + bop_41_l + bop_41_ml; } else { num_bop_41 = 0; }

    num_bop = num_bop_18 + num_bop_17 + num_bop_16 + num_bop_15 + num_bop_14 + num_bop_13 + num_bop_12 + num_bop_11;
    num_bop = num_bop + num_bop_28 + num_bop_27 + num_bop_26 + num_bop_25 + num_bop_24 + num_bop_23 + num_bop_22 + num_bop_21;
    num_bop = num_bop + num_bop_38 + num_bop_37 + num_bop_36 + num_bop_35 + num_bop_34 + num_bop_33 + num_bop_32 + num_bop_31;
    num_bop = num_bop + num_bop_48 + num_bop_47 + num_bop_46 + num_bop_45 + num_bop_44 + num_bop_43 + num_bop_42 + num_bop_41;

    bop_percent = (num_bop * 100) / (num_teeth * 6);
    bop_percent = Math.round (bop_percent);

    if (num_teeth > 0) {
        document.forms[0]["output_mean_bop"].value = bop_percent;
    } else {
        document.forms[0]["output_mean_bop"].value = 0;
    }
}