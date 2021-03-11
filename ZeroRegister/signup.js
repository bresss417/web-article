const userForm = document.getElementById("userForm");
const advisorForm = document.getElementById("advisorForm");
const EventsCheck = (data)=>{
  if (data.status === 403) {
    Swal.fire({
      position: "top",
      icon: "warning",
      title: data.msg,
      showConfirmButton: true,
    });
  } else if (data.status === 200) {
    Swal.fire({
      title:data.msg,
      icon:'success',
      confirmButtonText:`Ok`
    }).then((result)=>{
      if(result.isConfirmed){
        window.location = "../index.html";
      }
    })
    
  } else if (data.status === 500) {
    Swal.fire({
      position: "top",
      icon: "error",
      title: data.msg,
      showConfirmButton: true,
    });
  }
};

function valueInput(el) {
  return document.getElementById(el).value;
}

/* fetch api SignUp user */
userForm.addEventListener("submit", (e) => {
  var getCheck = document.querySelector("input[name = chk-sex]:checked").value;

  e.preventDefault();

  fetch("http://localhost/web-new-doctor/Server/PostSignupUser.php", {
    method: "POST",
    body: JSON.stringify({
      fname: valueInput("fname"),
      lname: valueInput("lname"),
      email: valueInput("email"),
      passwd: valueInput("passwd"),
      sex: getCheck,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      EventsCheck(data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
});

/* fetch api signUp advisor */
advisorForm.addEventListener("submit", (EvE) => {
  const getCheckA = document.querySelector("input[name = sex]:checked").value;
  EvE.preventDefault();

  fetch("http://localhost/web-new-doctor/Server/PostSignUpAdvisor.php", {
    method: "POST",
    body: JSON.stringify({
      fnames: valueInput("fnameA"),
      lnames: valueInput("lnameA"),
      emails: valueInput("emailA"),
      passwds: valueInput("passwdA"),
      sexs: getCheckA,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((DoctorData) => {
      EventsCheck(DoctorData);
    })
    .catch((err) => {
      console.log(`error in ${err}`);
    });
});
