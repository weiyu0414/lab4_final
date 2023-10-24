
        function table_width(x){
            document.getElementById("tb").style.width=x
        }
        function tr_border(x){
            document.getElementById("tb").style.border=x+"px solid black"
            let header_cell=document.getElementsByClassName('th_1')
            let normal_cell=document.getElementsByClassName('th_2')
            for(var i=0;i<header_cell.length;i++){
                header_cell[i].style.border=x+"px solid black"
            }
            for(var i=0;i<normal_cell.length;i++){
                normal_cell[i].style.border=x+"px solid black"
            }
        }
        function table_color(x){
            let normal=document.getElementsByClassName('th_2')
            for(var i=0;i<normal.length;i++){
                normal[i].style.backgroundColor=x
            }
        }

        function f(){
            document.getElementById("tb").style.width="200px"
            document.getElementById("tb").style.border="1px solid black"
            let normal=document.getElementsByClassName('th_2')
            for(var i=0;i<normal.length;i++){
                normal[i].style.backgroundColor='yellow'
                
            }
            let header_cell=document.getElementsByClassName('th_1')
            let normal_cell=document.getElementsByClassName('th_2')
            for(var i=0;i<header_cell.length;i++){
                header_cell[i].style.border=1+"px solid black"
            }
            for(var i=0;i<normal_cell.length;i++){
                normal_cell[i].style.border=1+"px solid black"
            }
        }
