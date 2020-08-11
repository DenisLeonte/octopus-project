function setWidth(){
    var one = document.getElementById("");
    var two = document.getElementById("two");
    style = window.getComputedStyle(one);
    wdt = style.getPropertyValue('width');
    two.style.width = wdt;
}