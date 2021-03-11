import { getAuther } from '../Function/Create.Element.js'
import { InputLogin,CheckEventLogin as ModalCheckEventLogin } from '../Function/Event.Login.js'
const LoginForm = document.getElementById('myLoginForm')

const fetchData = (getDataapi, elementAuther) => {
    fetch(getDataapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
    .then((response)=> response.json())
    .then((data)=>{
        elementAuther(data)
    })
    .catch(err => console.log(`Error : ${err} `))
};
fetchData("http://localhost/web-new-doctor/server/GetData.php",getAuther)
/* End fetch Api Data */

LoginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch("http://localhost/web-new-doctor/Server/PostLoginData.php", {
      method: "POST",
      body: JSON.stringify({
        Iemail: InputLogin("Iemail"),
        Ipassword: InputLogin("Ipassword"),
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
    .then(request => request.json())
    .then(DataStatus => ModalCheckEventLogin(DataStatus))
    .catch(error => console.log(`error fetch api in : ${error}`))
})