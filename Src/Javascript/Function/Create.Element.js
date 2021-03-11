const createNode = (elemant) => {
  return document.createElement(elemant);
};
const append = function (parent, el) {
  return parent.appendChild(el);
};
const getAuther=(getData)=>{
  return getData.map((auther) => {
    let img = createNode("img");
    let h5 = createNode("h5");
    let p = createNode("p");
    let divCol4 = createNode("div");
    let divCard = createNode("div");
    let divCardbody = createNode("div");

    let divId = document.getElementById("byIdproduct");

    img.className = "card-img-top";
    h5.className = "card-title border-bottom pb-3";
    p.className = "card-text";
    divCol4.className = "col-md-3";
    divCard.className = "card";
    divCardbody.className = "card-body";

    img.src = `//placeimg.com/280/180/tech`;
    h5.innerHTML = `ข้อมูล ทดลอง`;
    p.innerHTML = `ใช้งานปกติทุกระบบ สเปคดี โฟกัสไว พับจอได้ มีไวไฟ อุปกรณ์ - กล่อง บอดี้ ที่ชาร์จ สายคล้อง แบต`;
    

    append(divCardbody, h5);
    append(divCardbody, p);
    append(divCard, img);

    append(divCard, divCardbody);
    append(divCol4, divCard);
    append(divId, divCol4);
  });
}
/* checkEventUser */

const renderEvent = (getEvt) => {
  const checkID = document.getElementById("locks");
  if (getEvt === null) {
    checkID.innerHTML = `
      <button type="button"
        class="btn btn-outline-success btn-sm mt-1 ml-2"
        data-toggle="modal" data-target="#modalLogin"
      >
        <i class="fas fa-sign-in-alt"></i> Login
      </button>
    `;
  } else {
    checkID.innerHTML = `
      <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-user"></i>${getEvt}
      </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">profile</a>
          <a class="dropdown-item" href="#">Another action</a>
          <button class="dropdown-item" type="submit" id="myLogout">Logout</button>
        </div>
    `;
    document.getElementById("myLogout").onclick = function(){
      refechPage() 
    }
    const refechPage = () => {
      location.reload();
      sessionStorage.removeItem("userSession");
      sessionStorage.clear();
    };
  }
};
 

const EventSession = (getDataSession, userEventCallback) => {
  let listEvent = "";
  let i;
  if (getDataSession === null) {
    userEventCallback(null);
    console.log(getDataSession);
  } else {
    for (i = 0; i < getDataSession.length; i++) {
      listEvent += getDataSession[i].sessionFullname;
    }
    userEventCallback(listEvent);
    console.log(listEvent);
  }
};


export { getAuther,EventSession,renderEvent };
