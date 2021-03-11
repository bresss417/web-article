  const createNode = (elemant) => {
    return document.createElement(elemant);
  }
  const append = function (parent, el) {
    return parent.appendChild(el);
  }
  const chkProfileJob = (imgName, tagImg) => {
    if (!imgName.doctor_profile) {
      if(imgName.sex === "woman"){
        tagImg.src = `../../Src/Image/Svg/woman-doctor.jpg`
      }else if(imgName.sex === "man"){
        tagImg.src = `../../Src/Image/Svg/man-doctor.jpg`
      }
    } else {
      tagImg.src = `http://localhost/web-new-doctor/Server/Upload/ProfileJob/${imgName.doctor_profile}`;

    }
  }

const getProfileJob =(dataProfile)=>{
    return [dataProfile].map((Getdata)=>{
      /* Ereate Element */
      
      let infoDiv = createNode("div")
      let Divrow = createNode("div")
      let colDiv = createNode("div")
      let _rowDiv = createNode("div")
      let _col12 = createNode("div")
      let imgDiv = createNode("div")
      let img = createNode("img")
      let _col6 = createNode("div")
      let bioContent = createNode("div")
      let txtName = createNode("h2");
      let txtEmail = createNode("p");
      let ageDivAlert = createNode('div')//alert is not profile
      //let Dflex = createNode("div")
      let positionTxt = createNode('h5')
      let ageTxt = createNode('h5')
      let addressTxt = createNode('h6')
      let workPlaceTxt = createNode('h6')
      let cardSocial = createNode("div") //Create Card Social
      //cardSocial.setAttribute("id","card-social")
      const getidText = document.getElementById("replayProfile");
      

      infoDiv.className = "bio-info";
      Divrow.className = "row";
      colDiv.className = "col-md-6";
      _rowDiv.className = "row";
      _col12.className = "col-md-12";
      imgDiv.className = "bio-image";
      img.className = "img-prifile";
      _col6.className = "col-md-6";
      bioContent.className = "bio-content";
      ageDivAlert.className = "alert alert-warning d-flex";//add class alert not profile
     // Dflex.className = "d-flex";
      ageTxt.className = "text-teal";
      positionTxt.className = "text-info"
      addressTxt.className = "text-purple";
      workPlaceTxt.className = "text-secondary";
      cardSocial.className =`row w-100 mt-4`


      append(imgDiv, img);
      append(_col12, imgDiv);
      append(_rowDiv, _col12);
      append(colDiv, _rowDiv);
      append(Divrow, colDiv);
      append(infoDiv, Divrow);
      append(bioContent, txtName);
      append(bioContent, txtEmail);
      append(_col6, bioContent);
      append(Divrow, _col6);
      append(getidText, infoDiv);
      
      chkProfileJob(Getdata,img);
      txtName.innerHTML = `${Getdata.fullname}`;
      txtEmail.innerHTML = `${Getdata.user_name}`;
      
        if (!Getdata.address) {
          ageDivAlert.innerHTML = `<strong>!Warning</strong> <h6 class="mt-1 ml-4">is not Profile PleaseUpdate</h6>`;
          append(bioContent, ageDivAlert);
        } else {
          ageTxt.innerHTML = `Age: ${Getdata.age} Years`;
          positionTxt.innerHTML = `Position: ${Getdata.position}`;
          addressTxt.innerHTML = `Address: ${Getdata.address}`;
          workPlaceTxt.innerHTML = `WorkPlace: ${Getdata.work_place}`;
          //append(bioContent,Dflex)
          append(bioContent, ageTxt);
          append(bioContent, positionTxt);
          append(bioContent, addressTxt);
          append(bioContent, workPlaceTxt);
        }
      append(bioContent,cardSocial)
        cardSocial.innerHTML = `
        <div class="col-md-4 mt-4">
            <div class="card border-purple mx-sm-1">
                <div class="card border-purple shadow text-purple p-3 my-card" ><i class="fas fa-rss-square"></i></div>
                <div class="text-purple text-center mt-3">
                  <small>Followers</small>
                </div>
                <div class="text-purple text-center mt-0 mb-0">
                  <h6>234</h6>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <div class="card border-info mx-sm-1">
                <div class="card border-info shadow text-info p-3 my-card" >
                  <i class="fas fa-newspaper"></i>
                </div>
                <div class="text-info text-center mt-3">
                  <small>Content</small>
                </div>
                <div class="text-info text-center mt-0 mb-0">
                  <h6>10</h6>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <div class="card border-danger mx-sm-1">
                <div class="card border-danger shadow text-danger p-3 my-card" >
                  <i class="fas fa-heart"></i>
                </div>
                <div class="text-danger text-center mt-3">
                  <small>Like</small>
                </div>
                <div class="text-danger text-center mt-0 mb-0">
                  <h6>1M</h6>
                </div>
            </div>
        </div>
        `;
    })
}
const fnUpdateProfile =(getIdUpdate,getDataAsMapping)=>{
  return document.getElementById(getIdUpdate).value = `${getDataAsMapping}`
}
const updateImgPriview = (_nameImg,_tagImg,_tagImgname,_clsActive,_btnRemove)=>{
    const imageId = document.getElementById(_tagImg)
    const imgName = document.querySelector(_tagImgname)
    const wrapper = document.querySelector(_clsActive);
    const btnTrash  = document.querySelector(_btnRemove)
    if(_nameImg){
      imgName.textContent =`${_nameImg}`
      imageId.src = `http://localhost/web-new-doctor/Server/Upload/ProfileJob/${_nameImg}`;
      wrapper.classList.add('active')
      btnTrash.classList.remove('active')
    }
} 
const chkUpdateProfile = (datagetUpdate)=>{
    return [datagetUpdate].map((_toDataAsmapping)=>{
        fnUpdateProfile("updateId",_toDataAsmapping.doctor_id);
        fnUpdateProfile("updateFullname",_toDataAsmapping.fullname);
        fnUpdateProfile("updateEmail",_toDataAsmapping.user_name);
        fnUpdateProfile("updateAge",_toDataAsmapping.age);
        fnUpdateProfile("updateAddress",_toDataAsmapping.address);
        fnUpdateProfile("updatePosition", _toDataAsmapping.position);
        fnUpdateProfile("updateWorkPlace", _toDataAsmapping.work_place);
        updateImgPriview(_toDataAsmapping.doctor_profile, "privewImg",".file-name",".wrapper","#cancel-btn");

        let sexOption = document.getElementById('getSex')
        sexOption.innerHTML = `defult: ${_toDataAsmapping.sex}`
        sexOption.value = _toDataAsmapping.sex
    })
}


const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const cancleBtn = document.querySelector("#cancel-btn i");
const defaulBtn = document.querySelector("#defaultBtns");
//const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("#privewImg");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
document.getElementById("custom-btn").onclick = () => {
  defaulBtn.click();
};

defaulBtn.addEventListener("change", function () {
 //console.log(this.files)
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      //console.log(reader.result)
      img.src = result;
      wrapper.classList.add("active");
    };
    cancleBtn.addEventListener("click", () => {
      img.src = "";
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});
 
const cutSession = (session, CallFn, CallbackApi) => {
  let _cheangeData = "";
  let i;
  for (i = 0; i < session.length; i++) {
    _cheangeData += session[i].sessionID;
  }
  console.log(`tts: ${_cheangeData}`);
  CallbackApi(_cheangeData, CallFn);
} 

export {cutSession,getProfileJob,chkUpdateProfile}
