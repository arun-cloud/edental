    function printCanvas(buttonID) {
        document.getElementById('side_menu').style.display = 'none';
        document.getElementById('menu_button_save_to_hd').style.display = 'none';
        document.getElementById('menu_button_load_from_hd').style.display = 'none';
        document.getElementById('menu_button_load_superimposed_from_hd').style.display = 'none';
        document.getElementById('menu_button_show_chart1').style.display = 'none';
        document.getElementById('menu_button_show_chart2').style.display = 'none';
        document.getElementById('menu_button_show_supperimposed_chart').style.display = 'none';
        
        window.print();
        
        document.getElementById('side_menu').style.display = 'block';
        
        document.getElementById('menu_button_save_to_hd').style.display = 'block';
        document.getElementById('menu_button_load_from_hd').style.display = 'block';
        document.getElementById('menu_button_load_superimposed_from_hd').style.display = 'block';
        document.getElementById('menu_button_show_chart1').style.display = 'block';
        document.getElementById('menu_button_show_chart2').style.display = 'block';
        document.getElementById('menu_button_show_supperimposed_chart').style.display = 'block';
    }