function validateForm() {
  var name = document.forms["messgae-form"]["name"].value;
  var email = document.forms["messgae-form"]["email"].value;
  var phoneumber = document.forms["messgae-form"]["phonenumber"].value;

  if (name == "" && email =="" && phonenumber =="") 
  {
    alert("Please fill all the fields");
    return false;
  }

  document.getElementById("name")=name;
  document.getElementById("email")=email;
  document.getElementById("phonenumber")=phonenumber;
}