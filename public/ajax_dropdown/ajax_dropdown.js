function loadfuncation(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       const sele = document.getElementById("statelist");
       JSON.parse(this.response).forEach(element => {
        const option1 = document.createElement("option");
        option1 .setAttribute('value',`${element.id}`);
        option1.innerHTML = `${element.state_name}`;
        sele.appendChild(option1);
       });
      }
    }
    xhttp.open("GET", "/login/dashboard/state", true);
    xhttp.send();     
}

function statechange(e){
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       const sele = document.getElementById("city");
    //    console.log(sele);
       let child = sele.lastElementChild;
       console.log(child);
       while(child){
        sele.removeChild(child);
        child = sele.lastElementChild;
       }
        // console.log(this.response);
       JSON.parse(this.response).forEach(element => {
        const option1 = document.createElement("option");
        option1 .setAttribute('value',`${element.id}`);
        option1.innerHTML = `${element.city}`;
        // console.log(option1);
        sele.appendChild(option1);
        // console.log(sele);
       });
      }
    }
    xhttp.open("GET", `/login/dashboard/city/${e}`, true);
    xhttp.send(); 
}