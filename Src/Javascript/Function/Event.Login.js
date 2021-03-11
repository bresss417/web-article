const InputLogin =(inputID)=>{
   return document.getElementById(inputID).value 
}
const CheckEventLogin = (DataMessage)=>{
    if(DataMessage.status === 401){
        Swal.fire({
          title: DataMessage.msg,
          icon: "error",
          showConfirmButton: true,
        });
    }else if(DataMessage.status === 201){
        Swal.fire({
          icon: "success",
          title: DataMessage.msg,
          text: `Get session id user ${DataMessage.session}`,
          type: "success",
          confirmButtonText: `ตกลง`,
        }).then((result)=>{
          if(result.isConfirmed){
            const getSession = [
              {
                sessionID: DataMessage.session,
                sessionFullname: DataMessage.sessionfullname,
              },
            ];
            sessionStorage.setItem("userSession", JSON.stringify(getSession));
            location.reload()
          }
        })

        
    }else if(DataMessage.status === 200){
        Swal.fire({
          icon: "success",
          title: DataMessage.msg,
          text: `Get session id advisor ${DataMessage.session}`,
          type: "success",
          confirmButtonText: `ตกลง`,
        }).then((show)=>{
          if(show.isConfirmed){
              const getSessionAdvisor = [
                {
                  sessionID: DataMessage.session,
                  sessionFullname: DataMessage.sessionfullname,
                },
              ];
              sessionStorage.setItem(
                "advisorSession",
                JSON.stringify(getSessionAdvisor)
              );
              window.location = "Views/Job/"
          }
        })
    }
}

export {InputLogin,CheckEventLogin}