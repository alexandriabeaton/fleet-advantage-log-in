function validateForm() {
    var x = document.forms["myForm"]["firstName"].value;
    var y = document.forms["myForm"]["lastName"].value;
    var z = document.forms["myForm"]["dob"].value;

    if (x == "") {
    var firstPara = document.createElement("P");   // Create a <p> element
    firstPara.innerHTML = "First name is required.";  // Insert text
    document.getElementById("firstName").setAttribute("style", "color:red");
    document.getElementById("firstName").appendChild(firstPara);
    return false;
    } 

    if (x.length < "1" || x.length > "56") {
    var maxLengthPara = document.createElement("P");   // Create a <p> element
    maxLengthPara.innerHTML = "First name must be at least 1 character, and cannot exceed 56 characters";  // Insert text
    document.getElementById("firstName").setAttribute("style", "color:red");
    document.getElementById("firstName").appendChild(maxLengthPara);
    return false;
    }

    if (y.legth < "1" || y.length > "56") {
      var maxLengthPara = document.createElement("P");   // Create a <p> element
      maxLengthPara.innerHTML = "Last name must be at least 1 character, and cannot exceed 56 characters";  // Insert text
      document.getElementById("lastName").setAttribute("style", "color:red");
      document.getElementById("lastName").appendChild(maxLengthPara);
      return false;
    }

    

    if (y == "") {
      var lastPara = document.createElement("P");   // Create a <p> element
      lastPara.innerHTML = "Last name is required.";  // Insert text
      document.getElementById("lastName").setAttribute("style", "color:red");
      document.getElementById("lastName").appendChild(lastPara);
      return false;
    }


    if (z == "") {
      var dobPara = document.createElement("P");   // Create a <p> element
      dobPara.innerHTML = "Date of birth is required.";  // Insert text
      document.getElementById("dob").setAttribute("style", "color:red");
      document.getElementById("dob").appendChild(dobPara);
      return false;
    }
  }

  function checkDate(){
    var dateCheck = document.getElementById('dateOfBirth').value;
    var myDate = new Date(dateCheck);
    var today = new Date();
    if ( myDate > today ) {
      var dateOfBirthInvalid = document.createElement("P");   // Create a <p> element
      dob.innerHTML = "Date of Birth cannot exceed today's date.";  // Insert text
      document.getElementById("dob").setAttribute("style", "color:red");
      document.getElementById("dob").appendChild(dateOfBirthInvalid);
        return false;
    }
    return true;

  }
