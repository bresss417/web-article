const getsessionData = JSON.parse(sessionStorage.getItem("advisorSession"));
import {Elsession,FetchDataEvent,chkProfileID} from '../Function/Event.Job.js'

class DashboardNavigationBar extends HTMLElement {
  connectedCallback(){
    this.xenDer();
  }
  xenDer(){
      this.innerHTML = `
        
            <div class="container-fluid">
                <button class="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbarSupperDashboard"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand pt-0 text-info" target="_blank">
                    Page Advisor
                </a>

                <div class="collapse navbar-collapse" id="navbarSupperDashboard">
                    <div class="avartar">
                      <div id="profileGet"></div>
                        <h3 class="text text-center mt-2" id="fullname">user name</h3>
                    </div>
                    <ul class="navbar-nav mt-2">
                        <li class="nav-item">
                            <a class="nav-link text-center" href="index.html">
                                <i class="fab fa-microsoft text-info"></i> DasgBoard(index)
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="content.html">
                               <i class="fas fa-newspaper text-purple"></i> Content
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="profile.html">
                               <i class="fas fa-user-circle text-white"></i> ProFile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        
      `;
  }
}
customElements.define('apps-dashboard', DashboardNavigationBar)

Elsession(getsessionData,FetchDataEvent,chkProfileID) 

class NavbarStaff extends HTMLElement{
    constructor(){
        super()
    }
    get count(){
        return this.getAttribute('count')
    }

    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `
            <nav class="navbar navbar-expand-md mb-4 top-bar navbar-static-top bg-purple sps sps--abv" id="navbar-main">
                <div class="container i-menu">
                  <a class="h3 mb-0 text-white text-uppercase d-none d-lg-inline-block" id="txt-head">
                   <i class="${this.count}"></i> ${this.id}
                  </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <button class="btn btn-outline-info" id="logout">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('apps-navbar',NavbarStaff)

class ImagePriviews extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.renderImg()
    }
    renderImg(){
        this.innerHTML = `
            <div class="container c-img">
                <div class="wrapper">
                    <div class="image">
                       <img src="" alt="" id="privewImg"> 
                    </div>
                    <div class="content">
                        <div class="icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="text">No file chosen , yet! s</div>
                    </div>
                    <div id="cancel-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="file-name">File name hear</div>
                </div>
                <input type="file" id="defaultBtns" class="cxx" hidden>
                <p id="custom-btn">Choose a file</p>
            </div>
        `;
    }
} 
customElements.define('main-priview-image',ImagePriviews)


class ModalProfileUpdate extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.renderModal()
    }
    renderModal(){
        this.innerHTML = `
            <div class="modal fade" id="modalUpdateProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal Update Prifile <i class="fas fa-user-cog"></i></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <form id="formUpdateProfile" class="signup-form">
                              <input type="hidden" id="updateId" />
                             <div class="d-flex">
                              <div class="col-md-4 mr-auto">
                                <main-priview-image></main-priview-image>
                              </div>
                              <div class="col-md-8 ml-auto">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateFullname" name="nombre" placeholder="fullname" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-at text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateEmail" name="nombre" placeholder="email" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-genderless text-info"></i></div>
                                            </div>
                                            <select class="form-control" id="updateSex">
                                                <option id="getSex"></option>
                                                <option value="man">man</option>
                                                <option value="woman">woman</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-user-clock text-info"></i></div>
                                            </div>
                                            <input type="text" class="form-control" id="updateAge" name="nombre" placeholder="Age" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-street-view text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateAddress" name="nombre" placeholder="Address" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-user-tie text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updatePosition" name="nombre" placeholder="Position" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-building text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateWorkPlace" name="nombre" placeholder="Work Place" required>
                                    </div>
                                </div>
                              </div>
                             </div>
                             <div class="form-group mb-0">
                                <div class="input-group mb-0">
                                  <div class="col-md-12 text-center">
                                    <button class="btn btn-primary btn-update" type="submit">
                                        <i class="far fa-edit"></i> Click Update Profile
                                    </button>
                                  </div>
                                </div>
                                <p class="text-center mb-0 mt-3">
                                    how to click <a class="txt-setfont">reset password</a>
                                  </p>
                             </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('modal-profile-update',ModalProfileUpdate)

document.getElementById('logout').onclick = ()=>{
    Swal.fire({
      icon: "success",
      title: "Logout Success",
      confirmButtonText: `Ok`,
    }).then((res) => {
      sessionStorage.removeItem("advisorSession");
      sessionStorage.clear();
      window.location = '../../index.html'
    });
}

