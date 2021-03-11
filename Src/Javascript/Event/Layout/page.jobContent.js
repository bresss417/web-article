
class ModalCreateArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderArticle();
  }
  renderArticle() {
    this.innerHTML = `
            <div class="modal fade" id="modalArticleCreate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelx" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabelx">Modal Create Article <i class="fas fa-newspaper"></i></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <form id="CreateArticleForm">
                                <input type="hidden" class="form-control" id="doctorId" />
                                <main-priview-image></main-priview-image>
                                <div class="d-flex mt-1 col-md-12">
                                  <div class="input-group col-md-8">
                                     <div class="input-group-prepend">
                                         <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                     </div>
                                     <input type="text" class="form-control" id="subject" placeholder="หัวข้อบทความ" required/>
                                  </div>
                                  <div class="input-group">
                                      <div class="input-group-prepend">
                                          <div class="input-group-text"><i class="fas fa-bookmark text-info"></i></div>
                                      </div>
                                      <select class="form-control" id="typeContent" required>
                                          <option disabel hidden>--ประเภท--</option>
                                          <option value="food">อาหารการกิน(Diet)</option>
                                          <option value="health">การดูแลด้านสุขภาพ</option>
                                          <option value="exercise">การออกกำลังเพื่อสุขภาพ</option>
                                      </select>
                                  </div>
                                </div>
                                <div class="col-md-12 mt-1">
                                  <label class="ml-1 mb-1 font-weight-bold text-success">เนื้อหาบทความ</label>
                                  <div class="form-group">
                                     <textarea class="form-control" row="7" id="contentArticle"></textarea>
                                  </div>
                                  <button type="submit" class="btn btn-outline-primary mt-2 btn-block">สร้าง บทความ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}
customElements.define("main-create-article", ModalCreateArticle);
