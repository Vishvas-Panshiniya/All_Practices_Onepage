// time and score variable use
var timeleft = 10;
var Score = 0;

// main function this table show startbutton click game is start
function tableshow(){
    document.getElementById("table1").innerHTML =`
        <table id="mytable" align="center">
            <tr id="row1">
                <td id="td1"></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table><br><div class="startbtn"><input id="btn2" type="button" onclick="pausegame()" value = 'Pause Game' class="btn1"></div>`
    // timer set 
        let timer =setInterval(function(){
            if (timeleft <= 0){
                clearInterval(timer);
            document.getElementById("demo2").innerHTML = "Finished";
            document.getElementsByTagName("body")[0].innerHTML =`<h3 style="margin-left: 50%; margin-top : 250px">Score:- ${Score} </h3>`;
            const sbutton = document.createElement('button');
            sbutton.innerHTML = "Restart Game";
            // sbutton.style.marginLeft = "50%";
            sbutton.addEventListener("click",reloadPage);
            document.getElementsByTagName("body")[0].appendChild(sbutton);
            sbutton.setAttribute("id","rbtn");
        }else{
            document.getElementById("demo2").innerHTML = timeleft +"seconds";
        }
        timeleft--;
        },1000);

        allfunction(); 
        document.getElementById('start1').disabled = true;
}

// reload function use in restart button use
function reloadPage(){
    location.reload();
}

// rendom color use this function in rgb
function color(){
    var red = Math.floor(Math.random()*(255-0+1));
    var green = Math.floor(Math.random()*(255-0+1));
    var blue = Math.floor(Math.random()*(255-0+1));
    return {red,green,blue};
}

// color and rondom position select this
function allfunction(){
    var red = color().red;
    var green = color().green;
    var blue = color().blue;
    var table = document.getElementsByTagName("table");
    var td = table[0].getElementsByTagName("td");  // Fix this line
    let randomvalue = Math.floor(Math.random() * (td.length-0));
    for(var k = 0; k < td.length; k++){
        if(k === randomvalue){
            td[k].style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ',0.4)';
        } else {
            td[k].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            td[k].removeEventListener("click", customEvent);
        }
    }
    td[randomvalue].addEventListener("click", function(){
        customEvent();
    });
}

// row and col add call function in and show score in this function
function customEvent(){
    addrowcol();
    allfunction();
    Score++;
    document.getElementById("demo1").innerHTML = Score;
}


// Add Rows and columns
function addrowcol(){
    // alert("panshiniya");
    let table2 = document.getElementById("mytable");
    if(table2.rows.length <=8){
    let col1 = table2.rows[0].cells.length;
    let rows1 =  document.createElement("tr");
    for (var j=0; j<col1; j++){
        let col = document.createElement("td");
        rows1.appendChild(col);
    }
    table2.appendChild(rows1);
    for(let i=0; i<table2.rows.length; i++){
        var cols = table2.rows[i].insertCell(col1[i]);
        cols.innerHTML = " ";
    }
}
}

// pause game alert use this function
function pausegame(){
        alert("You pause the game Click Ok continue game!");  
}