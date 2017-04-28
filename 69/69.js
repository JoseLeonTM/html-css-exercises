var events = (function(){
    var header = document.getElementsByTagName('header')[0];
    var nav = header.childNodes[3];
    var personalMenu = document.getElementById('personalMenu');
    var personalButton = document.getElementById('personalButton');
    var businessButton = document.getElementById('businessButton');
    var businessMenu = document.getElementById('businessMenu');
    var x = document.getElementById('x');
    var submenu = document.getElementById('submenu');
    var content = document.getElementById('body');
    var selected;

    function clear(){
        // if(event.target!=personalButton && event.target!=businessButton && event.target!=submenu) {
        var clear= event.target != nav &&
            event.target != personalButton &&
            event.target != businessButton &&
            event.target != personalMenu &&
            event.target != businessMenu;

        if(clear) {
            selected=undefined;
            personalButton.className = "";
            businessButton.className = "";
            personalButton.childNodes[1].className = "";
            businessButton.childNodes[1].className = "";
            content.className="";
            setTimeout(function () {
                header.className = "";
            }, 210);
            submenu.className = "shrink";
            personalMenu.className = "hide";
            businessMenu.className = "hide";
            x.className="hide";
        }
    }
    document.addEventListener('click',clear);

    return {
        toggle: function(){
            if(event.target==selected){
                setTimeout(function () {
                    header.className = "";
                }, 210);
                submenu.className="shrink";
                if(selected==personalButton){
                    personalMenu.className="hide";
                }
                else{
                    businessMenu.className="hide";
                }
                selected.childNodes[1].className="";
                selected=undefined;
                return;
            }
            header.className="sub";
            submenu.className="";
            x.className="";
            if(!selected){
                selected = event.target;
            }
            if(event.target == personalButton){
                ///////SELECT THE BUTTON
                personalButton.className="selected";
                businessButton.className="";
                //////SPIN THE ARROW
                personalButton.childNodes[1].className="up";
                businessButton.childNodes[1].className="";
                //////SHOW THE SUBMENU
                personalMenu.className="";
                businessMenu.className="hide";
            }
            else{
                ///////SELECT THE BUTTON
                businessButton.className="selected";
                personalButton.className="";
                //////SPIN THE ARROW
                businessButton.childNodes[1].className="up";
                personalButton.childNodes[1].className="";
                //////SHOW THE SUBMENU
                businessMenu.className="";
                personalMenu.className="hide";
            }

            selected=event.target;
        }
    };
})();
