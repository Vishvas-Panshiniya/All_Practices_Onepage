function onclickevent(){
    alert('Onclick Event');
}

function ondbclickevent(){
    alert('Double Click Event')
}

function mousedown(){
    alert('MouseDown Event')
}

function mouseenter(){
    alert('MouseEnter Event')
}

function mouseleave(){
    alert('MouseLeave Event')
}

function mousemove(){
    alert('Mouse Move Event')
}

function mouseout(){
    alert('Mouse Out Event')
}

function mouseover(){
    alert('Mouse Over Event')
}

function mouseup(){
    alert('Mouse Up Event')
}

function contextmenu(){
    alert('ContextMenu Event')
}

function keydown(){
    alert('Key Down Event')
}

function keypress(){
    alert('Key Press Event')
}

function keyup(){
    alert('Key Up Event')
}

function submit1(){
    alert('Submit Event')
}

function blurevent1(){
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function focusevent1(x){
    x.style.background = "red";
}

function focusin1(x){
    x.style.background= "coral";
}

function focusout1(){
    let x = document.getElementById('lname');
    x.value = x.value.toUpperCase();
    x.style.background = "lightblue";
}

function unloadevent1(){
    alert('onunload event');
}

function load1(){
    alert('Page load event');
}

function unload1(){
    confirm('Are sure close window');
    if(confirm == true){  
       window.close();
    }else{
        window.location.reload();
    }
}

function unloadevent1(){
    window.resizeBy(1367,720);
}

function error1(){
    alert('This image error event');
}

function scroll1(){
    alert('On scroll event');
}

function changefunction(){
    let y = document.getElementById("state").value;
    alert('You selected state is:' + y);
}

function onfunction(){
    document.getElementById("demo").innerHTML = "Your Browser Online";
}

function offfunction(){
    document.getElementById("demo").innerHTML = "Your Browser Offline"
}