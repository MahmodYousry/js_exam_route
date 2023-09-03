// start contact form validation



function showContactForm() {

  let output = `
    <form action="" class="form-control py-4 bg-black border-black d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="row w-100">
        <div class="col-md-12 col-lg-6">
          <div class="form-group mb-3">
            <input class="form-control" id="name-input" type="text" name="name" placeholder="Enter Your Name">
            <p id="invalidName" class="alert alert-danger d-none">
              You Must Start With Capital letter also Special Characters and Numbers are not allowed
            </p>
          </div>
          <div class="form-group mb-3">
            <input class="form-control" id="phone-input" type="text" name="phone" placeholder="Enter Your Phone">
            <p id="invalidPN" class="alert alert-danger d-none">Enter Valid Phone Number</p>
          </div>
          <div class="form-group mb-3">
            <input class="form-control" id="password-input" type="password" name="password" placeholder="Enter Your Password">
            <p id="invalidPass" class="alert alert-danger d-none ">
              Enter Valid password *Minimum 8 characters, at least one letter and one number*
            </p>
          </div> 
        </div>
        <div class="col-md-12 col-lg-6 mb-3">
          <div class="form-group mb-3">
            <input class="form-control" id="email-input" type="email" name="email" placeholder="Enter Your Email">
            <p id="invalidEmail" class="alert alert-danger d-none">Email not Valid *Exemple@yyy.com</p>
          </div>
          <div class="form-group mb-3">
            <input class="form-control" id="age-input" type="text" name="age" placeholder="Enter Your Age">
            <p id="invalidAge" class="alert alert-danger d-none">Enter Valid age</p>
          </div>
          <div class="form-group mb-3">
            <input class="form-control" id="repasword-input" type="password" name="repasword" placeholder="Confirm Password">
            <p  id="invalidRPass" class="alert alert-danger d-none">Your Password Dos not Match</p>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-center align-items-center">
          <button class="btn btn-primary" type="submit">Send</button>
        </div>
      </div>
    </form>
  `;

  $('.show-card').html(output);

  let nameInp     = document.getElementById("name-input");
  let emailInp    = document.getElementById("email-input");
  let phoneInp    = document.getElementById("phone-input");
  let ageInp      = document.getElementById("age-input");
  let passwordInp = document.getElementById("password-input");
  let rePassInp   = document.getElementById("repasword-input");

  function validateContactsName() {
    let regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(nameInp.value) == true) {
      nameInp.style.border = "none";
      $("#invalidName").addClass("d-none");
      return true;
    } else {
      nameInp.style.border = "3px solid red";
      $("#invalidName").removeClass("d-none");
      return false;
    }
  }
  
  function validateContactsEmail() {
    
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(emailInp.value) == true) {
      emailInp.style.border = "none";
      $("#invalidEmail").addClass("d-none");
      return true;
    } else {
      emailInp.style.border = "3px solid red";
      $("#invalidEmail").removeClass("d-none");
      return false;
    }
  }
  
  function validateContactsPNum() {
    
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (regex.test(phoneInp.value) == true) {
      phoneInp.style.border = "none";
      $("#invalidPN").addClass("d-none");
      return true;
    } else {
      phoneInp.style.border = "3px solid red";
      $("#invalidPN").removeClass("d-none");
      return false;
    }
  }
  
  function validateContactsAge() {
   
    let regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
  
    if (regex.test(ageInp.value) == true) {
      ageInp.style.border = "none";
      $("#invalidAge").addClass("d-none");
      return true;
    } else {
      ageInp.style.border = "3px solid red";
      $("#invalidAge").removeClass("d-none");
      return false;
    }
  }
  
  function validateContactsPass() {
    
    let regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
    if (regex.test(passwordInp.value) == true) {
      passwordInp.style.border = "none";
      $("#invalidPass").addClass("d-none");
      return true;
    } else {
      passwordInp.style.border = "3px solid red";
      $("#invalidPass").removeClass("d-none");
      return false;
    }
  }
  
  nameInp.addEventListener("keyup", function () {
    validateContactsName();
  });
  
  emailInp.addEventListener("keyup", function () {
    validateContactsEmail();
  });
  
  phoneInp.addEventListener("keyup", function () {
    validateContactsPNum();
  });
  
  ageInp.addEventListener("keyup", function () {
    validateContactsAge();
  });
  
  passwordInp.addEventListener("keyup", function () {
    validateContactsPass();
  });
  
  rePassInp.addEventListener("keyup", function () {
    if (passwordInp.value === rePassInp.value) {
      rePassInp.style.border = "none";
      $("#invalidRPass").addClass("d-none");
      return true;
    } else {
      rePassInp.style.border = "3px solid red";
      $("#invalidRPass").removeClass("d-none");
      return false;
    }
  });

}
