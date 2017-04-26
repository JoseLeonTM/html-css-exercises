var selected;
function toggle(){
    var elem = event.target;
    selected = elem;
    var arrow = event.target.childNodes[1];
    arrow.className+=" spin";
    console.log(arrow.className);
    console.log(elem.childNodes[1]);
}