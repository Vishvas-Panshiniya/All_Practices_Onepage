function gettext1(){
    var getvalue = document.getElementById("value1").value;
    var arr = getvalue.split(",");
    var array = []
    for(let k=0; k<arr.length; k++){
        array.push(parseInt(arr[k]));
        bubblesort(array);
    }
}

function gettext2(){
    var getvalue = document.getElementById("value1").value;
    var arr = getvalue.split(",");
    var array = []
    for(let k=0; k<arr.length; k++){
        array.push(parseInt(arr[k]));
        insertionsort(array);
    }
}

function bubblesort(arr){
// document.write(arr);
    var i,j,temp1;
    for(i=0; i< arr.length-1; i++){
            // console.log(i);
        for(j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp1 = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp1;
            }
        }
    }
    document.getElementById("demo").innerHTML = "Sorted Array:-"+ arr;
    // console.log(arr);
}

function insertionsort(arr){
    var m,n,key;
    for(m=0; m<arr.length; m++){
        key=arr[m];
        n = m-1;
        while(n>=0 && arr[n]>key){
            arr[n+1] = arr[n];
            n = n-1;
        }
        arr[n+1] = key;
    }
    document.getElementById("demo").innerHTML = "Sorted Array:-"+ arr;
}
