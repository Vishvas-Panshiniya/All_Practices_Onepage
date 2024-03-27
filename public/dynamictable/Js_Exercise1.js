var table = document.getElementById("mytable");
// Add Columns use this function
function addcolumns(){
    // alert("hey");
    for(let i=0; i<table.rows.length; i++){
        var cols = table.rows[i].insertCell(table.rows[i].cells.length);
        cols.innerHTML = " ";
    }
    
}

// Remove Columns use this function
function removecolumns(){
    // alert("vishvas");
    if (table.rows[0].cells.length > 2){
    for(let k=0; k<table.rows.length; k++){
            table.rows[k].deleteCell(-1);
            // table4.rows[k].removeChild(-1);
        }
    }else{
            alert("This table is not delete");
        }
}

// Add Rows use this function
function addrows(){
    // alert("panshiniya");
    let col1 = table.rows[0].cells.length;
    let rows1 =  document.createElement("tr");
    for (var j=0; j<col1; j++){
        let col = document.createElement("td");
        rows1.appendChild(col);
    }
    table.appendChild(rows1);
    // console.log(col1);
    // console.log(rows2);
    
}

// Remove Rows use this function
function removerows(){
    // alert("good morning");
    if (table.rows.length<=2){
        alert("This table is not delete");
    }else{
        table.deleteRow(-1);
        
    }
}