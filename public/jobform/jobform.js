function validatefunction() {
  let char = /^[a-zA-Z\s]*$/;
  let no = /^\d{10}$/;
  let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let date = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  let specialchar = /[$&+,:;=?@#|'<>-^*()%!]/;
  let formarr = document.getElementsByTagName("input");
  var isvalid = true;
  // removeerr();
  for (let i = 0; i < formarr.length; i++) {
    // firstname
    if (formarr[i].name === "fname") {
      if (!char.test(formarr[i].value) || formarr[i].value === "") {
        document.getElementById("s1").innerHTML =
          "Not Valid Firstname! or filed is blank!";
        isvalid = false;
      }
    }
    // lastname
    if (formarr[i].name === "lname") {
      if (!char.test(formarr[i].value) || formarr[i].value === "") {
        document.getElementById("s2").innerHTML =
          "Not Valid Lastname! or Filed is required!";
        isvalid = false;
      }
    }
    // designation
    if (formarr[i].name === "designation") {
      if (!char.test(formarr[i].value) || formarr[i].value === "") {
        document.getElementById("s3").innerHTML =
          "Not Valid Designation! or Filed is required!";
        isvalid = false;
      }
    }
    // address1
    if (formarr[i].name === "address1") {
      if (formarr[i].value === "") {
        document.getElementById("s4").innerHTML = "Filed is required";
        isvalid = false;
      }
    }
    // email
    if (formarr[i].name === "email") {
      if (!email.test(formarr[i].value)) {
        document.getElementById("s5").innerHTML = "Not Valid Email!";
        isvalid = false;
      }
    }
    // address2
    if (formarr[i].name === "address2") {
      if (formarr[i].value === "") {
        document.getElementById("s6").innerHTML = "Filed is required";
        isvalid = false;
      }
    }
    // mobileno
    if (formarr[i].name === "mobileno") {
      if (!no.test(formarr[i].value)) {
        document.getElementById("s7").innerHTML = "Not Valid Number!";
        isvalid = false;
      }
    }
    // city
    if (formarr[i].name === "city") {
      if (!char.test(formarr[i].value) || formarr[i].value === "") {
        document.getElementById("s8").innerHTML =
          "Not Valid city! or Filed is required!";
        isvalid = false;
      }
    }
    // gender
    if (formarr[i].name === "gender") {
      let gender = document.querySelectorAll('input[name="gender"]:checked');
      if (!gender.length) {
        document.getElementById("s9").innerHTML = "plz select any one gender!";
        isvalid = false;
      }
    }
    // zipcode
    if (formarr[i].name === "zipcode") {
      if (
        isNaN(formarr[i].value) ||
        formarr[i].value.length != 6 ||
        formarr[i].value === ""
      ) {
        document.getElementById("s12").innerHTML =
          "Enter Valid 6 digit zipcode! and not use any charactar! or Filed is required!";
        // console.log(formarr[i].value.length);
        isvalid = false;
      }
    }
    // dob
    if (formarr[i].name === "dob") {
      if (!date.test(formarr[i].value) || formarr[i].value === "") {
        document.getElementById("s13").innerHTML =
          "Not Valid date!format yyyy-mm-dd! or Filed is required!";
        isvalid = false;
      }
    }

    // education details
    if (formarr[i].id === "year1") {
      if (formarr[i].value.length != 4 || isNaN(formarr[i].value)) {
        document.getElementById("s14").innerHTML =
          "Not Valid year! limit year 1950-2023 or Filed is required";
        isvalid = false;
      }
    }
    if (formarr[i].id === "per1") {
      if (
        isNaN(formarr[i].value) ||
        formarr[i].value < 0 ||
        formarr[i].value > 100 ||
        formarr[i].value === ""
      ) {
        document.getElementById("s14").innerHTML =
          "Not Valid Percentage! 1-100% or Filed is required";
        isvalid = false;
      }
    }

    // work experience
    if (formarr[i].id == "company1") {
      if (formarr[i].value != "") {
        if (!char.test(formarr[i].value)) {
          document.getElementById("s28").innerHTML = "Not Valid company!";
          isvalid = false;
        }
      }
    }
    if (formarr[i].id == "designation1") {
      if (formarr[i].value != "") {
        if (!char.test(formarr[i].value)) {
          document.getElementById("s28").innerHTML = "Not Valid designation!";
          isvalid = false;
        }
      }
    }
    if (formarr[i].id == "startdate1") {
      if (formarr[i].value != "") {
        if (!date.test(formarr[i].value)) {
          document.getElementById("s28").innerHTML =
            "Not Valid date! format yyyy-mm-dd!";
          isvalid = false;
        }
      }
    }
    if (formarr[i].id == "enddate1") {
      if (formarr[i].value != "") {
        if (!date.test(formarr[i].value)) {
          document.getElementById("s28").innerHTML =
            "Not Valid date! format yyyy-mm-dd!";
          isvalid = false;
        }
      }
    }
    // language known
    if (formarr[i].name === "l_known") {
      if (document.getElementById("gujarati").checked) {
        if (
          !(
            document.getElementById("r1").checked ||
            document.getElementById("w1").checked ||
            document.getElementById("ss1").checked
          )
        ) {
          document.getElementById("s40").innerHTML =
            "Plz select filed! read,write,speak!";
          isvalid = false;
        }
      }
      if (!document.getElementById("gujarati").checked) {
        if (
          document.getElementById("r1").checked ||
          document.getElementById("w1").checked ||
          document.getElementById("ss1").checked
        ) {
          document.getElementById("s40").innerHTML = "Plz select language!";
          isvalid = false;
        }
      }
      if (document.getElementById("hindi").checked) {
        if (
          !(
            document.getElementById("r2").checked ||
            document.getElementById("w2").checked ||
            document.getElementById("ss2").checked
          )
        ) {
          document.getElementById("s41").innerHTML =
            "Plz select filed! read,write,speak!";
          isvalid = false;
        }
      }
      if (!document.getElementById("hindi").checked) {
        if (
          document.getElementById("r2").checked ||
          document.getElementById("w2").checked ||
          document.getElementById("ss2").checked
        ) {
          document.getElementById("s41").innerHTML = "Plz select language!";
          isvalid = false;
        }
      }
      if (document.getElementById("english").checked) {
        if (
          !(
            document.getElementById("r3").checked ||
            document.getElementById("w3").checked ||
            document.getElementById("ss3").checked
          )
        ) {
          document.getElementById("s42").innerHTML =
            "Plz select filed! read,write,speak!";
          isvalid = false;
        }
      }
      if (!document.getElementById("english").checked) {
        if (
          document.getElementById("r3").checked ||
          document.getElementById("w3").checked ||
          document.getElementById("ss3").checked
        ) {
          document.getElementById("s42").innerHTML = "Plz select language!";
          isvalid = false;
        }
      }
    }
    // Technology known
    if (formarr[i].name == "technology") {
      let techlevel1 = document.querySelectorAll(
        'input[name="techno1"]:checked'
      );
      if (document.getElementById("t1").checked && !techlevel1.length) {
        document.getElementById("s43").innerHTML = "Plz Select tech level!";
        isvalid = false;
      }
      if (!document.getElementById("t1").checked && techlevel1.length) {
        document.getElementById("s43").innerHTML = "Plz Select technology!";
        isvalid = false;
      }
      let techlevel2 = document.querySelectorAll(
        'input[name="techno2"]:checked'
      );
      if (document.getElementById("t2").checked && !techlevel2.length) {
        document.getElementById("s44").innerHTML = "Plz Select tech level!";
        isvalid = false;
      }
      if (!document.getElementById("t2").checked && techlevel2.length) {
        document.getElementById("s44").innerHTML = "Plz Select technology!";
        isvalid = false;
      }
      let techlevel3 = document.querySelectorAll(
        'input[name="techno3"]:checked'
      );
      if (document.getElementById("t3").checked && !techlevel3.length) {
        document.getElementById("s45").innerHTML = "Plz Select tech level!";
        isvalid = false;
      }
      if (!document.getElementById("t3").checked && techlevel3.length) {
        document.getElementById("s45").innerHTML = "Plz Select technology!";
        isvalid = false;
      }
      let techlevel4 = document.querySelectorAll(
        'input[name="techno4"]:checked'
      );
      if (document.getElementById("t4").checked && !techlevel4.length) {
        document.getElementById("s46").innerHTML = "Plz Select tech level!";
        isvalid = false;
      }
      if (!document.getElementById("t4").checked && techlevel4.length) {
        document.getElementById("s46").innerHTML = "Plz Select technology!";
        isvalid = false;
      }
    }
    // referance contact
    if (formarr[i].id == "rname1") {
      if (!char.test(formarr[i].value)) {
        document.getElementById("s47").innerHTML = "Not Valid name!";
        isvalid = false;
      }
    }
    if (formarr[i].id == "rno1") {
      if (!no.test(formarr[i].value) && formarr[i].value.length > 0) {
        document.getElementById("s47").innerHTML = "Not Valid number!";
        isvalid = false;
      }
    }
    if (formarr[i].id == "relation1") {
      if (!char.test(formarr[i].value)) {
        document.getElementById("s47").innerHTML = "Not Valid relation!";
        isvalid = false;
      }
    }
    // preferances
    if (formarr[i].name == "notice") {
      if (formarr[i].value == "") {
        document.getElementById("s55").innerHTML = "Filed is required! or Not used spcial charaters!";
        isvalid = false;
      }
    }
    if (formarr[i].name == "expactc") {
      if (formarr[i].value == "") {
        document.getElementById("s56").innerHTML =
          "Filed is required! or Not used spcial charaters!";
        isvalid = false;
      }
    }
    if (formarr[i].name == "currentctc") {
      if (formarr[i].value == "") {
        document.getElementById("s57").innerHTML = "Filed is required! or Not used spcial charaters!";
        isvalid = false;
      }
    }
  }

  // console.log(isvalid);
  // education
  let course = document.getElementById("course1").options[document.getElementById("course1").selectedIndex].value;
  if (course === "select") {
    document.getElementById("s14").innerHTML = "Plz select course!";
    isvalid = false;
  }

  // state
  let state =document.getElementById("state").options[document.getElementById("state").selectedIndex].value;
  if (state == "State") {
    document.getElementById("s10").innerHTML = "Plz select state!";
    isvalid = false;
  }

  // status
  let status =document.getElementById("rstatus").options[document.getElementById("rstatus").selectedIndex].value;
  if (status == "status") {
    document.getElementById("s11").innerHTML =
      "Plz select realtionship status!";
    isvalid = false;
  }

  // perferd location
  let location =document.getElementById("location").options[document.getElementById("location").selectedIndex].value;
  if (location == "location") {
    document.getElementById("s53").innerHTML = "Plz select perferd location!";
    isvalid = false;
  }

  // department
  let department =document.getElementById("department").options[document.getElementById("department").selectedIndex].value;
  if (department == "department") {
    document.getElementById("s54").innerHTML = "Plz select department!";
    isvalid = false;
  }

  return isvalid;
}

// education details add
function addedu() {
  if (
    document.getElementById("course1").value != "select" &&
    document.getElementById("year1").value != "" &&
    document.getElementById("per1").value != ""
  ) {
    let edutable = document.getElementsByClassName("edutable")[0];
    let eduadd = document.getElementsByClassName("edu")[0];
    let column = eduadd.cloneNode(true);
    edutable.appendChild(column);
  } else {
    document.getElementById("s14").innerHTML = "Plz Fill This Blank filed !";
  }
}

// education details remove
function removeedu() {
  let edutable = document.getElementsByClassName("edutable")[0];
  let eduremove = document.querySelectorAll(".edu").length;
  if (eduremove > 1) {
    edutable.removeChild(edutable.lastElementChild);
  }
}

// work details add
function addwork() {
  if (
    document.getElementById("company1").value != "" &&
    document.getElementById("designation1").value != "" &&
    document.getElementById("startdate1").value != "" &&
    document.getElementById("enddate1").value != ""
  ) {
    let worktable = document.getElementsByClassName("worktable")[0];
    let workadd = document.getElementsByClassName("work")[0];
    let column = workadd.cloneNode(true);
    worktable.appendChild(column);
  } else {
    document.getElementById("s28").innerHTML = "Plz Fill This Blank filed !";
  }
}

// work details remove
function removework() {
  let worktable = document.getElementsByClassName("worktable")[0];
  let workremove = document.querySelectorAll(".work").length;
  if (workremove > 1) {
    worktable.removeChild(worktable.lastElementChild);
  }
}

// referance details add
function addrefer() {
  if (
    document.getElementById("rname1").value != "" &&
    document.getElementById("rno1").value != "" &&
    document.getElementById("relation1").value != ""
  ) {
    let refertable = document.getElementsByClassName("refertable")[0];
    let referadd = document.getElementsByClassName("refer")[0];
    let column = referadd.cloneNode(true);
    refertable.appendChild(column);
  } else {
    document.getElementById("s47").innerHTML = "Plz Fill This Blank filed !";
  }
}

// referance details remove
function removerefer() {
  let refertable = document.getElementsByClassName("refertable")[0];
  let referremove = document.querySelectorAll(".refer").length;
  if (referremove > 1) {
    refertable.removeChild(refertable.lastElementChild);
  }
}

// function removeerr(){
//     var error = document.querySelectorAll("span").value;
//     console.log(error);
//     for (const s in error) {
//         s.remove(error);
//     }
// }
