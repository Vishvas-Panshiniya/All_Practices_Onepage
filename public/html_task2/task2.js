function dwonbtn(){
document.body.scrollTop = 500;
document.documentElement.scrollTop = 500;
}

var test = document.querySelector(".s6-r1_col2");

function leftside(){
    // alert("This work perfectly");
    test.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function rightside(){
    // alert("This work perfectly");
    test.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}

var wordpress = document.getElementsByClassName("wordpress");
var magento = document.getElementsByClassName("magento");
var laravel = document.getElementsByClassName("laravel");
var php = document.getElementsByClassName("php");

function wordpress1(){
    // alert("wordpress")
    wordpress[0].style.display = "block";
    magento[0].style.display = "none";
    laravel[0].style.display = "none";
    php[0].style.display = "none";
}

function magento1(){
    wordpress[0].style.display = "none";
    magento[0].style.display = "block";
    laravel[0].style.display = "none";
    php[0].style.display = "none";
}

function laravel1(){
    wordpress[0].style.display = "none";
    magento[0].style.display = "none";
    laravel[0].style.display = "block";
    php[0].style.display = "none";
}

function php1(){
    wordpress[0].style.display = "none";
    magento[0].style.display = "none";
    laravel[0].style.display = "none";
    php[0].style.display = "block";
}