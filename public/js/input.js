    function input(){
        document.getElementById("submitbutton").onclick=function(){
            var essay= document.getElementById("textinput").innerHTML;
            document.getElementsByClassName("long").onclick=function(){
                return finalreplace(essay);
            };
            document.getElementsByClassName("short").onclick=function(){
                return finalshorten(essay);
            };
        }
    }
