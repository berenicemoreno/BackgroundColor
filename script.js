 var color;
        color = prompt('escoje color, color 1, color 2, color 3 o color 4: ', '1, 2 ,3 y/o 4');
        
        if (color == "1") {
            document.bgColor = '#a2ec72';
        } else if (color == "2") {
            document.bgColor = '#04d1a2';
        } else if (color == "3") {
            document.bgColor = '#f3b51c';
        } else if (color == "4") {
            document.bgColor = '#ffb6d7';
        }    else {
            document.write('no este jugando');
        }
