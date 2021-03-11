const Elsession =(getSession,useCallbackFun,FuncCheckProfileId)=>{
    let dataList = "";
    let Getid = ''
    let x;
    if(getSession === null){
       console.log(getSession)
    }else{
        for(x = 0; x < getSession.length; x++){
            dataList += getSession[x].sessionFullname;
            Getid += getSession[x].sessionID;
        }
        useCallbackFun(Getid,FuncCheckProfileId)
    }
}

const FetchDataEvent =(_useSession,chkFunCallback)=>{
    fetch(
      `http://localhost/web-new-doctor/Server/Job/getProfile.php?av_id=${_useSession}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    ).then(resEvent => resEvent.json())
     .then(dataProfile =>{
         document.getElementById('fullname').innerHTML = dataProfile.fullname
         console.log(dataProfile.fullname)
         chkFunCallback(dataProfile)
         
     })
     .catch(err => console.log(err))
}

const chkProfileID =(_datamap)=>{
    return [_datamap].map(dataObj =>{
      let image = document.createElement('img')
        if(!dataObj.doctor_profile){
            if(dataObj.sex === "man"){
              image.src = `../../Src/Image/Svg/man-doctor.jpg`
              document.getElementById("profileGet").appendChild(image);
            }else if(dataObj.sex === "woman"){
              image.src = `../../Src/Image/Svg/woman-doctor.jpg`
              document.getElementById("profileGet").appendChild(image);
            }

        }else{
            image.src = `http://localhost/web-new-doctor/Server/Upload/ProfileJob/${dataObj.doctor_profile}`;
            document.getElementById("profileGet").appendChild(image);
        }
    })
}



export {Elsession,FetchDataEvent,chkProfileID}