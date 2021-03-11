
const InputTextAll = (_inputId)=>{
    return document.getElementById(_inputId).value
}

const SweetUpdateAlert =(_getDatas)=>{
    if(_getDatas.status === 404){
        Swal.fire({
          icon: _getDatas.icons,
          title: _getDatas.title,
          text: _getDatas.msg,
          confirmButtonText: `ตกลง`,
          footer: "<a href>ติดต่อ เจ้าหน้าที่</a>",
        }).then((result) => {
          location.reload();
        });
    }else{
        Swal.fire({
          icon: _getDatas.icons,
          title: _getDatas.title,
          text: _getDatas.msg,
          confirmButtonText: `ตกลง`,
        }).then((resultx) => {
            location.reload()
        })
    }
}

const GetEventArticles = DataArticle =>{
  let createDomEl = function(params){
    return document.createElement(params)
  }
  let addAppend = function(cover, el){
    return cover.appendChild(el)
  }
   return DataArticle.map(autherMap =>{
      let img = createDomEl("img"),
          h5 = createDomEl("h5"),
          p = createDomEl("p"),
          divCol4 = createDomEl("div"),
          divCard = createDomEl("div"),
          divCardbody = createDomEl("div");
      let GetArticle = document.getElementById("GetArticle");
      
      img.className = "card-img-top";
      h5.className = "card-title border-bottom pb-3";
      p.className = "btnviewarticle";
      divCol4.className = "col-md-3";
      divCard.className = "card";
      divCardbody.className = "card-body";

      img.src = `http://localhost/web-new-doctor/Server/Upload/ImageContent/${autherMap.image_article}`;
      h5.innerHTML = `${autherMap.text_subject}`;
      p.innerHTML = `views <i class="fas fa-link"></i>`

      addAppend(divCardbody, h5);
      addAppend(divCardbody, p);
      addAppend(divCard, img);

      addAppend(divCard, divCardbody);
      addAppend(divCol4, divCard);
      addAppend(GetArticle, divCol4);
   })
}

const sessionModify = (_sessionmember,_apicallback,_callbackDom)=>{
  let xi,getmemberid="";
   for(xi=0; xi<_sessionmember.length;xi++){
     getmemberid += _sessionmember[xi].sessionID
   }
   _apicallback(getmemberid,_callbackDom)
}

export { InputTextAll, SweetUpdateAlert,sessionModify,GetEventArticles };