const getsessionData = JSON.parse(sessionStorage.getItem("advisorSession"));
import {InputTextAll, SweetUpdateAlert as EventAlertAddArticle, sessionModify, GetEventArticles} from '../Function/Event.PostdataAdmin.js'
const CreateArticleForm = document.getElementById('CreateArticleForm')

// Form Api Add article All
CreateArticleForm.addEventListener('submit',(events)=>{
    events.preventDefault()
     const UpimgArticle = document.getElementById('defaultBtns')
     const FormsDataarticle = new FormData()
      FormsDataarticle.append('ImageArticle',UpimgArticle.files[0])
      FormsDataarticle.append('DoctorId', InputTextAll("doctorId"))
      FormsDataarticle.append('Subject', InputTextAll("subject"))
      FormsDataarticle.append('typeContent', InputTextAll("typeContent"))
      FormsDataarticle.append('contentArticle', InputTextAll("contentArticle"))
      console.log(typeof InputTextAll("contentArticle"));

//Error trap ->ดัก error
     try{
      fetch(`http://localhost/web-new-doctor/Server/Job/content.php`,{ //->fetch api to database file content.php
        method:"POST",
        body:FormsDataarticle
      })
       .then(requests => requests.json())
       .then(Datarequest => EventAlertAddArticle(Datarequest))
      .catch(console.error)
    }catch(err){
      console.log(err.message)
    }
})

const GetDataArticle = (memberId,domEventArticle)=>{
  //callbackDomarticle
  try{
    fetch(
      `http://localhost/web-new-doctor/Server/Job/content.php?member_id=${memberId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        }
      }
    ).then(
      dbrequest => dbrequest.json()
    ).then((requestsArticle)=>{
        console.log(requestsArticle)
        domEventArticle(requestsArticle)
      }
    ).catch(
      console.error
    )
  }catch(err){
    console.log(`${err} Error Trap`)
  }
}
sessionModify(getsessionData,GetDataArticle,GetEventArticles)